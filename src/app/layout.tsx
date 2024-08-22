import type { Metadata } from "next";
import { DM_Sans as DMSans } from "next/font/google";
import "../styles/globals.css";

const dmSans = DMSans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hero Section | Yara Almeida",
    description: "AirPlanner",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={dmSans.className}>{children}</body>
        </html>
    );
}
