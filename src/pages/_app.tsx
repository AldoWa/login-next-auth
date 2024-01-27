import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from "next/app";
import { Poppins } from 'next/font/google'
import { ToastContainer } from 'react-toastify';

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={poppins.className}>
    <Component {...pageProps} />
    <ToastContainer/>
  </main>;
}
