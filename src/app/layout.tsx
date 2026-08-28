import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../css/common.css";
import ParentProps from "@/types/common/ParentProps";
import { DESCRIPTION, NAME } from "@/globals/metadata.globals";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: `%s | ${NAME}`,
        absolute: NAME
    },
    description: DESCRIPTION,
    generator: "Next.js",
    keywords: [
        "Next.js API development",
        "TypeScript Next.js API",
        "Next.js serverless API",
        "Next.js API routing",
        "Next.js API middleware",
        "Next.js API type safety",
        "Next.js API extensibility",
        "Next.js backend tools",
        "Next.js API utilities",
        "Next.js API starter",
        "Quality API"
    ],
    creator: "Quality API Team",
    robots: {
        index: true,
        follow: true
    }
};

function RootLayout({ children }: Readonly<ParentProps>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <body>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;