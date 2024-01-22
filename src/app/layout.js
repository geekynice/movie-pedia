import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
export const metadata = {
    title: 'MoviePedia | Search Movies Facts',
    description: 'Encyclopedia for Movies',
}

export default function RootLayout({
    children,
}) {
    return (
            <html lang="en">
                <body className={inter.className}>
                    {children}
                </body>
            </html>
    );
}