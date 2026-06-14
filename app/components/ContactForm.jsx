"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        setMessage("Thanks! We'll be in touch within one business day.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          result.error ||
            "Something went wrong. Please email us directly at yin@twindigitalmarketing.com."
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "Couldn't send right now. Please email us at yin@twindigitalmarketing.com."
      );
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
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jane@company.com"
          required
        />
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
        <p
          className={
            "form-note " + (status === "success" ? "success" : status === "error" ? "error" : "")
          }
        >
          {message}
        </p>
      )}
    </form>
  );
}
