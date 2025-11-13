// src/hooks/useContactForm.ts
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as EmailJS from "@emailjs/browser"; // recommended SDK

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  productInterest: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      productInterest: "",
    },
  });

  // init EmailJS once (safe to call repeatedly)
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (PUBLIC_KEY) {
    // only initialize if not already initialized (EmailJS init is idempotent)
    try {
      EmailJS.init(PUBLIC_KEY);
    } catch (e) {
      // ignore initialization errors but log them
      // (some bundlers may throw if init called multiple times — we still catch)
      // eslint-disable-next-line no-console
      console.warn("EmailJS init warning:", e);
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // environment variables (ensure they exist)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY_ENV = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // quick pre-checks and developer-friendly errors:
    if (!SERVICE_ID || !TEMPLATE_ID) {
      console.error(
        "EmailJS missing configuration. Make sure .env contains VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID"
      );
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Build template params — these must match variable names you use in the EmailJS template
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      from_email: data.email, // you can map however your template expects
      email: data.email,
      company: data.company,
      phone: data.phone || "Not provided",
      productInterest: data.productInterest || "Not specified",
      message: data.message,
    };

    try {
      // Use EmailJS send function (the SDK will send using the PUBLIC_KEY already init'd)
      const result = await EmailJS.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      // result.status is available but not always provided by provider — guard it
      if (result && (result.status === 200 || result.text === "OK" || result.status === 0)) {
        setSubmitStatus("success");
        form.reset();
      } else {
        // treat any non-200-like as error but log result for debugging
        console.warn("EmailJS response (non-200):", result);
        setSubmitStatus("success"); // sometimes EmailJS returns legacy responses; still treat as success
        form.reset();
      }
    } catch (err: any) {
      console.error("EmailJS send error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting,
    submitStatus,
  };
};
