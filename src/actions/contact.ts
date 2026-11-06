'use server'

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// Initialize Supabase Server-Side Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function submitContactForm(formData: { name: string; email: string; message: string }) {
  const { name, email, message } = formData
  const apiKey = process.env.RESEND_API_KEY

  try {
    // 1. Insert into Supabase database
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])

    if (dbError) {
      console.error('Supabase error:', dbError)
      return { success: false, error: 'Failed to save message to database.' }
    }

    // 2. Validate API key presence
    if (!apiKey) {
      console.error('Resend execution skipped: RESEND_API_KEY is missing.')
      return { 
        success: true, 
        warning: 'Message saved to database, but email notification failed.' 
      }
    }

    // 3. Send email notification via Resend
    const resend = new Resend(apiKey)
    const { error: emailError } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'prithvivallabhapulakeshin@gmail.com', // Your Resend account email
      subject: `New Message from ${name} via Portfolio`,
      html: `
        <h2>You have a new contact form submission!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 12px; border-left: 4px solid #0070f3;">
          ${message}
        </blockquote>
      `,
    })

    if (emailError) {
      console.error('Resend API error:', emailError)
      return { success: true, warning: `Message saved, but email dispatch failed: ${emailError.message}` }
    }

    return { success: true }
  } catch (err) {
    console.error('Unexpected submission error:', err)
    return { success: false, error: 'An unexpected error occurred during submission.' }
  }
}