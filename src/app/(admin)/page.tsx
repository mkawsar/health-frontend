import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard"
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <p>Dashboard</p>      
    </div>
  );
}
