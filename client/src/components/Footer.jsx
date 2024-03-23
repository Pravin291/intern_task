import React from "react";

export default function Footer() {
  return (
    <div className="border-t-8 text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Pravin Bhosale
      </p>
    </div>
  );
}
