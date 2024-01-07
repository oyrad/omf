import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

/* const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "demo@demo.gmail",
    pass: "password",
  },
  secure: true,
}); */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dario.susanj2@gmail.com",
    pass: "nutqxnypuokkzbce",
  },
});

type NextApiRequestCustom = NextApiRequest & Request;

export async function POST(req: NextApiRequestCustom) {
  const body = await req.json();
  const { email, name, title, content } = body;
  console.log(email);

  const mailData = {
    from: email,
    to: "dario.susanj2@gmail.com",
    subject: `Poruka od ${name}: ${title}`,
    text: content,
  };

  try {
    const info = await transporter.sendMail(mailData);

    console.log("Email sent:", info);
    return Response.json(
      { message: "Email sent successfully." },
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error: any) {
    return Response.json(
      { message: `Email failed to send. Error message: ${error.message}` },
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}
