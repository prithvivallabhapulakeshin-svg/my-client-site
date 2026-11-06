"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const resendApiKey = process.env.RESEND_API_KEY!;

    const supabase = createClient(supabaseUrl, supabaseKey);
    const resend = new Resend(resendApiKey);

    const { name, email, message } = data;

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required." };
    }

    // 1. Insert into Supabase contacts table
    const { error: dbError } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
      return { success: false, error: "Failed to save message to database." };
    }

    // 2. Send email notification via Resend
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["prithvivallabhapulakeshin@gmail.com"],
        subject: `New Store Inquiry from ${name}`,
        html: `
          <h3>New Inquiry - Sachdev Sports</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message / Inquiry:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailErr) {
      console.warn("Resend email warning:", emailErr);
      return {
        success: true,
        warning: "Message saved to database, but email notification failed.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "An unexpected server error occurred." };
  }
}