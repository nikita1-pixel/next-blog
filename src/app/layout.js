
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/provider/AuthProvider";
// import { ThemeContextProvider } from "@/context/ThemeContext";
// import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MindScapes',
  description: 'The best blog site!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeContextProvider>
          <ThemeProvider> */}
           <AuthProvider>
        <div className='container'>
          <div className='wrapper'>
          <Navbar/>
         
          {children}
        
          <Footer/>
          </div>
        </div>
        {/* </ThemeProvider>
        </ThemeContextProvider> */}
        </AuthProvider>
        </body>
    </html>
  )
}
