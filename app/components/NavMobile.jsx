"use client";

import { useState, useEffect } from "react";

export default function NavMobile({ services = [] }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => { setOpen(false); setServicesOpen(false); };

  return (
    <>
      <button
        className="burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`bar bar-top${open ? " open" : ""}`} />
        <span className={`bar bar-mid${open ? " open" : ""}`} />
        <span className={`bar bar-bot${open ? " open" : ""}`} />
      </button>

      {open && (
        <>
          <div className="mobile-overlay" onClick={close} />
          <div className="mobile-menu">
            <button
              className="mobile-menu-item mobile-services-toggle"
              onClick={() => setServicesOpen((o) => !o)}
            >
              Services <span className={`chevron${servicesOpen ? " up" : ""}`}>▾</span>
            </button>
            {servicesOpen && (
              <div className="mobile-submenu">
                {services.map((s) => (
                  <a key={s.href} href={s.href} onClick={close}>{s.label}</a>
                ))}
              </div>
            )}
            <a href="/#process" onClick={close}>Process</a>
            <a href="/#contact" onClick={close}>Contact</a>
            <a href="/#contact" className="btn" onClick={close}>Free Consultation</a>
          </div>
        </>
      )}
    </>
  );
}
