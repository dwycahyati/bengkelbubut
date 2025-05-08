// app/page.tsx
import { Metadata } from "next";
import ClientKatalog from "./ClientKatalog";

export const metadata: Metadata = {
  title: "Beranda | Ells WO",
  description: "Landing page resmi Ells WO.",
};

export default function Home() {
  return <ClientKatalog />;
}
