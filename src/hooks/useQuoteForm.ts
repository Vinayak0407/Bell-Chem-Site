import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

// Validation schema
const quoteSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
  industry: z.string().min(1, "Please select an industry"),
  productCategory: z.string().min(1, "Please select a product category"),
  specificProducts: z.string().min(5, "Please specify the products you need"),
  quantity: z.string().min(1, "Please specify the quantity"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().optional(),
  specifications: z.string().optional(),
  additionalRequirements: z.string().optional(),
  preferredContactMethod: z.string().min(1, "Please select a preferred contact method"),
  urgency: z.string().min(1, "Please select urgency level"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

export const useQuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      jobTitle: "",
      industry: "",
      productCategory: "",
      specificProducts: "",
      quantity: "",
      timeline: "",
      budget: "",
      specifications: "",
      additionalRequirements: "",
      preferredContactMethod: "",
      urgency: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        ...data,
        timestamp: new Date().toLocaleString(),
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID, // 👈 use a separate template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        form.reset();
      } else {
        throw new Error("EmailJS failed to send");
      }
    } catch (error) {
      console.error("EmailJS Quote form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, onSubmit, isSubmitting, submitStatus };
};
