import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mustafaalzaidi.com"),

  title: {
    default:
      "Mustafa Alzaidi | Cybersecurity Engineering Student & Commercial Model",
    template: "%s | Mustafa Alzaidi",
  },

  description:
    "Official personal website and portfolio of Mustafa Alzaidi, also known as Mustafa Mohammed Hamzah. Cybersecurity Engineering student at Al-Mashriq University, commercial video model, project developer, seminar presenter, Cisco certified learner, and Al Rasheed TV guest.",

  keywords: [
    "Mustafa Alzaidi",
    "Mustafa Mohammed Hamzah",
    "Mustafa Alzaidi Portfolio",
    "Mustafa Alzaidi CV",
    "Mustafa Alzaidi Resume",
    "Mustafa Alzaidi Website",
    "Official Website of Mustafa Alzaidi",

    "مصطفى الزيدي",
    "مصطفى محمد حمزة",
    "موقع مصطفى الزيدي",
    "بورتفوليو مصطفى الزيدي",
    "السيرة الذاتية مصطفى الزيدي",
    "الصفحة الشخصية مصطفى الزيدي",

    "Cybersecurity Engineering Student",
    "Cybersecurity Student",
    "Cybersecurity",
    "Cyber Security",
    "Information Security",
    "Ethical Hacking",
    "Network Security",
    "Cyber Threat Management",

    "طالب أمن سيبراني",
    "هندسة الأمن السيبراني",
    "تقنيات الأمن السيبراني",
    "الأمن السيبراني",
    "طالب هندسة تقنيات الأمن السيبراني",

    "Al-Mashriq University",
    "Mashriq University",
    "جامعة المشرق",
    "طالب جامعة المشرق",

    "Cisco Certifications",
    "Cisco Badge",
    "Cisco Networking Academy",
    "Introduction to Cybersecurity",
    "Ethical Hacker Cisco",
    "Python Essentials",
    "Cyber Threat Management Cisco",
    "Introduction to Data Science",
    "Introduction to IoT",

    "CompTIA Security+",
    "Alison Certificate",

    "Otto Robot",
    "Arduino Nano",
    "Logic Kit",
    "Digital Design Project",
    "Cybersecurity Project",

    "Al Rasheed TV",
    "HEPIQ",
    "HEPIQ Platform",

    "Commercial Model",
    "Video Model",
    "Advertising Model",
    "Brand Campaigns",
    "Careem",
    "Doritos",
    "Saj Al Reef",

    "Personal Website",
    "Professional Portfolio",
    "Student Portfolio",
  ],

  authors: [{ name: "Mustafa Alzaidi", url: "https://mustafaalzaidi.com" }],
  creator: "Mustafa Alzaidi",
  publisher: "Mustafa Alzaidi",

  alternates: {
    canonical: "https://mustafaalzaidi.com",
  },

  openGraph: {
    title:
      "Mustafa Alzaidi | Cybersecurity Engineering Student & Commercial Model",
    description:
      "Official portfolio of Mustafa Alzaidi featuring cybersecurity projects, Cisco certifications, Al-Mashriq University achievements, Al Rasheed TV interview, and commercial campaigns.",
    url: "https://mustafaalzaidi.com",
    siteName: "Mustafa Alzaidi Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mustafa Alzaidi | Cybersecurity Engineering Student & Commercial Model",
    description:
      "Official portfolio of Mustafa Alzaidi featuring cybersecurity projects, certifications, media appearances, and commercial campaigns.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}