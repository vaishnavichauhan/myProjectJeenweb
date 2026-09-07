import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Server-side input validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, company, service, message, acceptance } = body;

    // 1. Server-side Validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: "A valid corporate email address is required." },
        { status: 400 }
      );
    }

    const cleanName = fullName.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone ? String(phone).trim() : "Not provided";
    const cleanCompany = company ? String(company).trim() : "Not provided";
    const cleanService = service ? String(service).trim() : "General Inquiry";
    const cleanMessage = message ? String(message).trim() : "No message provided";
    const cleanAcceptance = acceptance ? "Yes, consented to communications" : "No";

    // 2. Email Configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || "info@jeenweb.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || (smtpUser ? `Jeenweb Contact Form <${smtpUser}>` : "no-reply@jeenweb.com");

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn("SMTP environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS) are not configured.");
      return NextResponse.json(
        {
          error: "Email server configuration is incomplete. Please set SMTP credentials in environment variables."
        },
        { status: 500 }
      );
    }

    // 3. Create Nodemailer Transporter
    const isSecure = smtpPort === 465 || process.env.SMTP_SECURE === "true";
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 4. HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>New Website Inquiry - Jeenweb</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          
          <div style="background: linear-gradient(135deg, #0A2647 0%, #134B70 100%); padding: 28px 24px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">
              New Consultation Request
            </h1>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #93c5fd;">
              Received via Jeenweb Website Contact Form
            </p>
          </div>

          <div style="padding: 24px 28px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b; width: 35%;">Full Name:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${cleanName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Corporate Email:</td>
                  <td style="padding: 10px 0; color: #0f172a;">
                    <a href="mailto:${cleanEmail}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${cleanEmail}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Phone Number:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${cleanPhone}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Company:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${cleanCompany}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Primary Service Focus:</td>
                  <td style="padding: 10px 0; color: #c11e23; font-weight: bold;">${cleanService}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Communication Consent:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${cleanAcceptance}</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top: 20px;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                Message:
              </h3>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; color: #334155; font-size: 14px; white-space: pre-wrap; word-break: break-word;">
                ${cleanMessage}
              </div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
              Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST • Direct response to user email: <a href="mailto:${cleanEmail}" style="color: #0284c7;">${cleanEmail}</a>
            </div>
          </div>

        </div>
      </body>
      </html>
    `;

    // 5. Send Mail via Nodemailer
    await transporter.sendMail({
      from: fromEmail,
      to: receiverEmail,
      replyTo: cleanEmail,
      subject: `New Lead: ${cleanName} - ${cleanService}`,
      text: `
New Lead Submission from Jeenweb Website:

Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone}
Company: ${cleanCompany}
Service: ${cleanService}
Consent: ${cleanAcceptance}

Message:
${cleanMessage}
      `.trim(),
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: "Your consultation request has been sent successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send email.";
    return NextResponse.json(
      { error: `Failed to dispatch your inquiry. ${errorMessage}` },
      { status: 500 }
    );
  }
}
