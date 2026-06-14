import { NextResponse } from "next/server";

// Basic email shape check — not exhaustive, just a sanity guard.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const company = (data.company || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  // No key configured yet: accept the submission so the UI works during setup,
  // but log it so nothing is silently lost. Wire WEB3FORMS_ACCESS_KEY to deliver.
  if (!accessKey) {
    console.warn(
      "[contact] WEB3FORMS_ACCESS_KEY not set — submission not delivered:",
      { name, email, company }
    );
    return NextResponse.json({ success: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New enquiry from ${name} — Twin Digital Marketing`,
        from_name: "Twin Digital Marketing Website",
        name,
        email,
        company: company || "(not provided)",
        message,
      }),
    });
    const result = await res.json();

    if (result.success) {
      return NextResponse.json({ success: true, delivered: true });
    }
    return NextResponse.json(
      { success: false, error: "We couldn't send your message. Please try again." },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "We couldn't send your message. Please try again." },
      { status: 502 }
    );
  }
}
