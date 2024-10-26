import "@/app/ui/global.css"
import { poppins } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} `}>{children}</body>
    </html>
  );
}
