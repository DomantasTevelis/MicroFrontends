import Link from "next/link";
import {
  RemoteAdd,
  RemoteMultiplyByTwo,
} from "../components/RemoteComponent";

function HomePage() {
  return (
    <div>
      <h1>This is a Host main page</h1>
      <Link href="/product">Go to product page</Link>
      <h2>Add 2 and 3:</h2>
      <RemoteAdd x={2} y={3} />
      <h2>Multiply 8 by 2:</h2>
      <RemoteMultiplyByTwo x={8} />
    </div>
  );
}

export default HomePage;
