import nodemailer from "nodemailer";
import { NextApiRequest } from "next";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_SENDER_ADDRESS,
    pass: process.env.MAIL_SENDER_PASSWORD,
  },
});

type NextApiRequestCustom = NextApiRequest & Request;

export async function POST(req: NextApiRequestCustom) {
  const body = await req.json();

  try {
    const info = await transporter.sendMail({
      from: "Kontakt Forma <contact-form@omf.hr>",
      to: "info@omf.hr",
      subject: `Upit sa stranice: ${body.title}`,
      html: `<div>
              <p>Poruka od ${body.name}, <b>${body.email}</b></p>
              <p>${body.content}</p>
            </div>`,
    });

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
    console.error(error);
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
