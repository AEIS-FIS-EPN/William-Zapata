import {Courier_Prime} from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export const metadata = {
    title: "TODO",
    description: "Organize your time",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={courierPrime.className}>{children}</body>
        </html>
    );
}
