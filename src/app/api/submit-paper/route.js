import { NextResponse } from "next/server"
import PocketBase from "pocketbase"
import { resend } from "@/lib/resend"
import { getUserEmailTemplate, getAdminEmailTemplate } from "@/emails/email-templates"

export async function POST(request) {
  try {
    const formData = await request.formData()

    // Initialize PocketBase
    const pb = new PocketBase("https://icsthm-wfcces.pockethost.io")

    // Extract file if present
    const file = formData.get("file") 
    
    // Create data object for PocketBase
    const data = {
      author: formData.get("author"),
      phone_number: formData.get("phone_number"),
      email: formData.get("email"),
      country: formData.get("country"),
      co_author: formData.get("co_author"),
      paper_title: formData.get("paper_title"),
      department: formData.get("department"),
      organization: formData.get("organization"),
      paper_type: formData.get("paper_type"),
      presentation_type: formData.get("presentation_type"),
      message: formData.get("message"),
      know_to_you: formData.get("know_to_you"),
    }

    // Create a new FormData for PocketBase
    const pbFormData = new FormData()

    // Add all fields to PocketBase FormData
    Object.entries(data).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        pbFormData.append(key, value)
      }
    })

    // Add file if present
    if (file && file.size > 0) {
      pbFormData.append("file", file)
    }

    // Submit to PocketBase
    const record = await pb.collection("WFCCES_paper_form_submission").create(pbFormData)

    // Get file URL if a file was uploaded
    let fileUrl = ""
    if (record.file) {
      // Handle file URL based on whether it's a string or array
      if (typeof record.file === 'string') {
        fileUrl = pb.files.getUrl(record, record.file)
      } else if (Array.isArray(record.file) && record.file.length > 0) {
        fileUrl = pb.files.getUrl(record, record.file[0])
      }
    }

    // Send confirmation email to user
    if (data.email) {
      try {
        await resend.emails.send({
          from: "Conference <info@wfcces.com>",
          to: data.email,
          subject: "Paper Submission Confirmation - WFCCES",
          html: getUserEmailTemplate(data),
        })
      } catch (emailError) {
        console.error("Error sending user confirmation email:", emailError)
        // Continue execution even if email fails
      }
    }

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: "Conference <info@wfcces.com>",
        to: "info@wfcces.com", // Replace with actual admin email
        subject: "New Paper Submission - WFCCES",
        html: getAdminEmailTemplate(data, fileUrl),
      })
    } catch (emailError) {
      console.error("Error sending admin notification email:", emailError)
      // Continue execution even if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Paper submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting paper:", error)
    // Return detailed error info for debugging
    return NextResponse.json({ 
      success: false, 
      message: "Failed to submit paper", 
      error: error.message || String(error)
    }, { status: 500 })
  }
}