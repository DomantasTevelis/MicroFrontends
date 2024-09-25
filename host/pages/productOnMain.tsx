import dynamic from "next/dynamic";

const RemoteProductPage = dynamic(() => import("remote/pages/product"), {
  ssr: false,
});
export default RemoteProductPage