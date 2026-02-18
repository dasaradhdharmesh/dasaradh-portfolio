import "./globals.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";


export const metadata = {
  title: "Dasaradh D | Data Analyst Portfolio",
  description:
    "Data Analyst specializing in SQL, Power BI, Machine Learning, and NLP systems. Explore projects, dashboards, and AI-driven applications.",
  keywords: [
    "Data Analyst",
    "Machine Learning",
    "SQL",
    "Power BI",
    "Python",
    "Portfolio",
  ],
  openGraph: {
    title: "Dasaradh D | Data Analyst Portfolio",
    description:
      "Analytics, Machine Learning, NLP Systems & Business Intelligence Projects.",
    url: "https://your-domain.vercel.app",
    siteName: "Dasaradh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dasaradh D Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dasaradh D | Data Analyst Portfolio",
    description:
      "Data Analytics, ML Systems, SQL & Business Intelligence Projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">

        <Intro />
        <Navbar />

        {children}

      </body>
    </html>
  );
}
