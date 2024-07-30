"use client"

function forgetPassword() {
  const HomePage=()=>{
    alert("code has been sent to your email")
  };


  return (
    <div className="flex flex-col  bg-slate-400 min-h-screen mr-96 ml-96 rounded-2xl items-center pt-48 gap-5">
      <div className="border-2 border-black">
        <input type="email" placeholder="enter you email" />
      </div>
      <div className="border-2 border-black">
        <input type="text" placeholder="enter code" />
      </div>
      <div>
        <button className="bg-black text-white p-1" onClick={HomePage}>Get Code</button>
      </div>
      <div>
        <button type="submit" className="bg-black text-white p-1">Submit</button>
      </div>
    </div>
  );
}

export default forgetPassword;
