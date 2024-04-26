import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, message } = body;
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["mohamet.almeari@gmail.com"],
      subject: "Message from portfolio",
      react: (
        <div style={{ color: "#344054" }}>
          <h1>Request</h1>
          <p>{message}</p>
          <p>
            - Email address: <span>{email}</span>
          </p>
        </div>
      ),
    });

    if (data.error) {
      return Response.json({ error: data.error }, 500);
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, 500);
  }
}
