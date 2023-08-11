import "./globals.scss";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cleaning Service",
    description: "Order your cleaner!",
};

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "he" }];
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body className={mulish.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
