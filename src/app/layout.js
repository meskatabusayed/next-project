import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "./services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["900"], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "next app",
    template: "%s | next app",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className="h-screen">{children}</div>
          </AuthProvider>
      </body>
    </html>
  );
}
