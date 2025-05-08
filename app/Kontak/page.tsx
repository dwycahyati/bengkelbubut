// app/page.tsx
import { Metadata } from "next";
import ClientKontak from "./ClientKontak";

export const metadata: Metadata = {
  title: "Kontak | Budi Bubut",
  description: "Landing page resmi Budi Bubut.",
};

export default function Home() {
  return <ClientKontak />;
}
