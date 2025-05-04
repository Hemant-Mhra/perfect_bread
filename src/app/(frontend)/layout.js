import { Header } from "@/components";
import { SanityLive } from "@/sanity/lib/live";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <SanityLive />
    </>
  );
}
