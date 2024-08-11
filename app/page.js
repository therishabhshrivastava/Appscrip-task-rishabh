import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Details from "@/components/Details/Details";
import Product from "@/components/Products/Products";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Details />
      <Product />
      <Footer />
    </main>
  );
}
