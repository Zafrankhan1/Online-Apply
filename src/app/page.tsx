"use client";
import Router, { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-center text-3xl bg-black text-white p-9 hover:text-green-800 underline">
        Welcome to Our College Website
      </h1>

      <div className="flex flex-row gap-2">
        <button
          className="ml-96 bg-black text-white mt-60 w-28 h-8"
          onClick={() => router.push("/LearnMore")}
        >
          Learn More
        </button>
        <button
          className=" bg-black text-white mt-60 w-28 h-8"
          onClick={() => router.push("/Apply")}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Home;

