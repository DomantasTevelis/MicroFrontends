import dynamic from "next/dynamic";

const RemoteAdd = dynamic(() => import("remote/Add"), { ssr: false });
const RemoteMultiplyByTwo = dynamic(() => import("remote/MultiplyByTwo"), {
  ssr: false,
});


export { RemoteAdd, RemoteMultiplyByTwo };
