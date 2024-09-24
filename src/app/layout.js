import { Syne } from 'next/font/google';
import "./globals.css";
import NavBar from './components/template/NaviNavComponent';
import FootNavBar from './components/template/FooterComponent';

const syne = Syne({
  subsets: ['latin'],
  weight: ['variable']
})

export const metadata = {
  title: "GemAfaWell",
  description: "Ms. Gemini S. Powell (she/her), Frontend Developer, Texas WebGems",
  charset: "utf8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} antialiased bg-gradient-to-br from-purple-400 to-yellow-300`}
      >
        <NavBar />
        {children}
        <FootNavBar />
      </body>
    </html>
  );
}
