"use server";
import nodemailer from "nodemailer";

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  console.log("📨 Sending email from:", email);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`, 
      to: process.env.EMAIL_USER,  
      subject: `New Contact Request from ${name} (${email})`,
      text: `
You have received a new contact request from your website.

Name: ${name}
Email: ${email}
Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 80px;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 8px; background: #f9f9f9; border-radius: 8px;">
                ${message.replace(/\n/g, "<br>")}
              </td>
            </tr>
          </table>

          <p style="margin-top: 20px; font-size: 12px; color: #888;">
            — This message was sent from your website contact form.
          </p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully");
    return { success: true };
  } catch (err) {
    console.error("❌ Error sending email:", err);
    return { success: false };
  }
}
