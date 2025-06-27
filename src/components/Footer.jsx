import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 bg-emerald-50 text-emerald-900 text-center text-sm">
      &copy; {new Date().getFullYear()} Atha's Crafty Creations &mdash; All rights reserved.
    </footer>
  );
}
