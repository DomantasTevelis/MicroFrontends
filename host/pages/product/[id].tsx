import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const RemoteSingleProduct = dynamic(() => import("remote/singleProduct"), {
  ssr: false,
});

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const SingleProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const [photo, setPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPhoto(data);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {photo ? (
        <RemoteSingleProduct photo={photo} />
      ) : (
        <div>Photo not found</div>
      )}
    </>
  );
};

export default SingleProduct;
