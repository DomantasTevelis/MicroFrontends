import { Photo } from "@/interface/interface";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./product.module.css";

const Nav = dynamic(() => import("host/nav"), { ssr: false });
const Footer = dynamic(() => import("host/footer"), { ssr: false });

const Product = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => {
        return res.json();
      })
      .then((data: Photo[]) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);

  const renderPhotos = photos.map((photo) => {
    return (
      <div className="photo-wrapper" key={photo.id}>
        <img src={photo.thumbnailUrl} alt={photo.title} />
      </div>
    );
  });

  return (
    <>
      <Nav />
      <main className={styles.productPageWrapper}>
        <section className={styles.productPagePhotos}>
          <Link href="/">Go back</Link>
          <h1>Product in remote:3001</h1>
          <section className={styles.photoListWrapper}>{renderPhotos}</section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Product;
