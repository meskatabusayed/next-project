import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default : "next app",
    Template : " %s | next app"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        <div className="h-screen">
        {children}
        </div>
        
        
        </body>
    </html>
  );
}
