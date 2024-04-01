import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import {Toaster} from "react-hot-toast";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "TODO App",
    description: "William Zapata",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                duration: 2000,
                style: {
                    background: '#eeeef0'
                },
            }}
        />
        {children}
        </body>
        </html>
    );
}
