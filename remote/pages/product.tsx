import { Photo } from "@/interface/interface";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./product.module.css";

const Nav = dynamic(() => import("host/nav"), { ssr: false });
const Footer = dynamic(() => import("host/footer"), { ssr: false });

const Product = ({ textContent }: { textContent: string }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => {
        return res.json();
      })
      .then((data: Photo[]) => {
        setPhotos(data);
        setIsLoading(false);
      });
  }, []);

  const renderPhotos = photos.map((photo) => {
    return (
      <div className="photo-wrapper" key={photo.id}>
        <Link href={`product/${photo.id}`}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </Link>
      </div>
    );
  });

  const isLoadingWrapper = <div>Loading...</div>;

  return (
    <>
      <Nav />
      <main className={styles.productPageWrapper}>
        <section className={styles.productPagePhotos}>
          <Link href="/">Go back</Link>
          <h1>Product in remote:3001 {textContent}</h1>
          <section className={styles.photoListWrapper}>
            {isLoading ? isLoadingWrapper : renderPhotos}
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Product;
