import { GetServerSideProps } from "next";
import { Photo } from "@/interface/interface";
import { useRouter } from "next/router";
import Nav from "host/nav";
import Footer from "host/footer";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import styles from "../product.module.css";

interface Params extends ParsedUrlQuery {
  id: string;
}

const SingleProduct = ({ photo }: { photo: Photo }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!photo) {
    return <div>No photo available</div>;
  }

  return (
    <>
      <Nav />
      <main className={styles.productPageWrapper}>
        <section className={styles.productPagePhotos}>
          <h2>Product ID: {id}</h2>
          <Link href="/product">Go back</Link>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export default SingleProduct;
