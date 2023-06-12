import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  console.log(router.item);
  return <p>Post: {router.query.slug}</p>;
}
