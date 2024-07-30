"use client";

import Router ,{useRouter} from "next/navigation";


function forgetPassword() {
  const router = useRouter();

  return (
    <div className="flex flex-col  bg-slate-400 min-h-screen mr-96 ml-96 rounded-2xl items-center pt-48 gap-5">
      <div className="border-2 border-black">
        <input type="email" placeholder="enter you email" />
      </div>
      <div className="border-2 border-black">
        <input type="password" placeholder="enter password" />
      </div>
      <div>
        <button
          className="bg-black text-white p-1"
          onClick={() => router.push("/")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default forgetPassword;
