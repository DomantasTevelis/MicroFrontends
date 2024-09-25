import dynamic from "next/dynamic";
import Link from "next/link";

const Nav = dynamic(() => import("host/nav"), { ssr: false });
const Footer = dynamic(() => import("host/footer"), { ssr: false });

const product = () => {
  return (
    <>
      <Nav /> <Link href="/">Go back</Link>
      <div>product in remote:3001</div>
      <Footer />
    </>
  );
};

export default product;
