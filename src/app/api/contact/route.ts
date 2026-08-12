import { NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

export async function POST(request: Request) {
  if (!supabaseUrl || !supabaseSecretKey) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  try {
    const body: unknown = await request.json();
    const { name, email, service, message } = body as Record<string, unknown>;

    if (
      typeof name !== "string" || !name.trim() ||
      typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email) ||
      typeof service !== "string" || !service.trim() ||
      typeof message !== "string" || !message.trim()
    ) {
      return NextResponse.json({ error: "Please provide valid form details." }, { status: 400 });
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        apikey: supabaseSecretKey,
        Authorization: `Bearer ${supabaseSecretKey}`,
        "Content-Type": "application/json",
        // return the inserted row so we can show a reference to the user
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        name: name.trim().slice(0, 120),
        email: email.trim().toLowerCase().slice(0, 254),
        service: service.trim().slice(0, 100),
        message: message.trim().slice(0, 5000),
      }),
    });

    const contentType = response.headers.get("content-type") || "";
    let responseBody: any = null;
    if (contentType.includes("application/json")) {
      responseBody = await response.json().catch(() => null);
    } else {
      responseBody = await response.text().catch(() => null);
    }

    if (!response.ok) {
      console.error("Supabase contact submission failed:", responseBody);
      const errMsg = (responseBody && responseBody.message) || "Unable to save your message.";
      return NextResponse.json({ error: errMsg, details: responseBody }, { status: 502 });
    }

    // When using `return=representation` Supabase returns an array of inserted rows
    const inserted = Array.isArray(responseBody) ? responseBody[0] : responseBody?.[0] || null;

    return NextResponse.json(
      { success: true, submission: inserted || null, message: "Your message has been received." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
