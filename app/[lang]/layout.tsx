import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "../_components/Footer";
import { Locale, i18n } from "@/i18n.config";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMF | structural solutions",
  description: "Transformirajte i inovirajte prostor s nama.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        href: "/favicon-dark.svg",
        url: "/favicon-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        href: "/favicon-light.svg",
        url: "/favicon-light.svg",
      },
    ],
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={montserrat.className}>
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
