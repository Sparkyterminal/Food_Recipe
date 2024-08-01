import Link from "next/link";

const notfound = () => {
  return (
    <div>
      <h1>Page is not found</h1>
      <Link href={"/"}>Go back to Homepage</Link>
    </div>
  );
};

export default notfound;
