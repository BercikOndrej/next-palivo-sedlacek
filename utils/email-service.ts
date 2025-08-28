import nodemailer from 'nodemailer';

type EmailBody = {
  name: string,
  surname: string,
  email: string,
  phone: string,
  subject: string,
  message: string
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export default async function sendEmail(body: EmailBody) {
   const info = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: ' Nová zpráva pomocí web formuláře!',
    text: getPlainText(body), // plain‑text body
    html: getHtmlTemplate(body)
  });
}

const getPlainText = (body: EmailBody) => `
  New Contact Form Submission

  Name: ${body.name} ${body.surname}
  Phone: ${body.phone}
  Email: ${body.email}
  Subject: ${body.subject}

  Message:
  ${body.message}
`;

const getHtmlTemplate = (body: EmailBody) => `
  <!DOCTYPE html>
  <html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Email</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 8px;
        padding: 20px;
        border: 1px solid #e0e0e0;
      }
      h2 {
        color: #333333;
      }
      .info {
        margin-bottom: 15px;
      }
      .label {
        font-weight: bold;
        color: #555555;
      }
      .value {
        margin-left: 5px;
        color: #222222;
      }
      .message-box {
        margin-top: 20px;
        padding: 15px;
        background: #f1f1f1;
        border-left: 4px solid #007BFF;
        border-radius: 5px;
        white-space: pre-line;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>📩 Nová zpráva pomocí web formuláře!</h2>

      <div class="info"><span class="label">Jméno:</span><span class="value">${body.name} ${body.surname}</span></div>
      <div class="info"><span class="label">Tel. číslo:</span><span class="value">${body.phone}</span></div>
      <div class="info"><span class="label">Email:</span><span class="value">${body.email}</span></div>
      <div class="info"><span class="label">Předmět:</span><span class="value">${body.subject}</span></div>

      <div class="message-box">
        ${body.message}
      </div>
    </div>
  </body>
  </html>
`;