// app/page.tsx
import { Metadata } from "next";
import ClientHome from "./ClientHome";

export const metadata: Metadata = {
  title: "Beranda | Budi Bubut",
  description: "Landing page resmi Budi Bubut.",
};

export default function Home() {
  return <ClientHome />;
}
