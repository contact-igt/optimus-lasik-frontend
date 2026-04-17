import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Optimus Eye Care",
  description: "Thank you for reaching out to Optimus Eye Care. Our team will contact you shortly to schedule your free LASIK consultation.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
