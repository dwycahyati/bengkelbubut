// app/page.tsx
import { Metadata } from "next";
import ClientKatalog from "./ClientKatalog";

export const metadata: Metadata = {
  title: "Katalog | Budi Bubut",
  description: "Landing page resmi Budi Bubut.",
};

export default function Home() {
  return <ClientKatalog />;
}
