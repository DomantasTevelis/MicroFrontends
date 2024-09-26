import dynamic from "next/dynamic";

const RemoteProductPage = dynamic(() => import("remote/pages/product"), {
  ssr: false,
});

const ProductPage =() => {
  return (
    <div>
      <RemoteProductPage textContent="this is main (localhost:3000)" />
    </div>
  )
}
export default ProductPage