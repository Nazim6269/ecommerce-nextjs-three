import Categories from "@/components/Categories/Categories";
import Hero from "@/components/heroSection/Hero";
import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />

        <Suspense fallback={<Loading />}>
          <Categories />
        </Suspense>
      </div>
    </>
  );
}
