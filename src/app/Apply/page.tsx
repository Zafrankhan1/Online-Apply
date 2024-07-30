"use client";
import { useRouter } from "next/navigation";

function Apply() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center pt-48 bg-slate-400 min-h-screen mr-96 ml-96 rounded-2xl">
      <p className="font-serif mr-24">Enter your email</p>

      <div>
        <input
          type="text"
          placeholder="enter your email"
          className="border-2 border-black"
        />
      </div>
      <p className="font-serif mr-24">Enter password</p>
      <div>
        <input
          type="password"
          placeholder="enter password"
          className="border-2 border-black"
        />
      </div>
      <div className="font-serif ml-28 mt-3">
        <a href="/ForgetPassword">Forget Password?</a>
      </div>
<div className="flex flex-row gap-28 m-3">
      <div className="bg-black text-white p-1">
        <button onClick={() => router.push("/SignIn")}>Sign In</button>
      </div>
      <div className="bg-black text-white">
        <button onClick={() => router.push("/SignUp")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Apply;
