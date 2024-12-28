import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/app/theme-provider";

const mazzard = localFont({
  src: [
    {
      path: "./font/MazzardM-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./font/MazzardM-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./font/MazzardM-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./font/MazzardM-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./font/MazzardM-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/MazzardM-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./font/MazzardM-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/MazzardM-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/MazzardM-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/MazzardM-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./font/MazzardM-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/MazzardM-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./font/MazzardM-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/MazzardM-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./font/MazzardM-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./font/MazzardM-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phi Technologies",
  description:
    "Unlock the full potential of your business with PHI Technologies Consultancy Services. Our experts provide tailored solutions to help you thrive. Contact us today to transform your business challenges into opportunities. Website crafted by Kuldeep Songara",
  keywords: [
    "phi tech",
    "phi technologies",
    "Consultancy services",
    "business solutions",
    "tailored business solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mazzard.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
