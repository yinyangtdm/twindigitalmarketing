"use client";

import { useState } from "react";

const ACCESS_KEY = "d2d39725-05ca-4aea-932e-7496afc5e5d1";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const data = {
      access_key: ACCESS_KEY,
      subject: `New enquiry from ${form.name.value} — Twin Digital Marketing`,
      from_name: "Twin Digital Marketing Website",
      name: form.name.value,
      email: form.email.value,
      company: form.company.value || "(not provided)",
      message: form.message.value,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thanks! We'll be in touch within one business day.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please email us directly at yin@twindigitalmarketing.com.");
      }
    } catch {
      setStatus("error");
      setMessage("Couldn't send right now. Please email us at yin@twindigitalmarketing.com.");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Jane Smith" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="jane@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" placeholder="Acme Inc." />
      </div>
      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="We're looking to grow our social media and run paid ads..."
          required
        />
      </div>
      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {message && (
        <p className={"form-note " + (status === "success" ? "success" : "error")}>
          {message}
        </p>
      )}
    </form>
  );
}
