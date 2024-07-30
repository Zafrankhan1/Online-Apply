"use client"



function signUp() {



  const HomePage=()=>{
   
    alert("Your account successfully created")
  };


  return (
    <div className="flex flex-col  bg-slate-400 min-h-screen mr-96 ml-96 rounded-2xl items-center gap-5 pt-32">
      
      <div className="border-2 border-black">
        
        <input type="text" placeholder="first name" />
      </div>
      <div className="border-2 border-black">
        
        <input type="text" placeholder="middle name" />
      </div>
      <div className="border-2 border-black">
        
        <input type="text" placeholder="last name" />
      </div>
      <div>
        <input type="number" placeholder="03xx-xxxxxxxx" />
      </div>
      <div className="border-2 border-black">
        <input type="email" placeholder="enter you email" />
      </div>
      <div className="border-2 border-black">
        <input type="password" id="enter password" placeholder="enter password" />
      </div>
      <div className="border-2 border-black">
        <input type="password" 
       id="confirm password" placeholder="confirm password" />
      </div>
      <div>
      </div>
      <div>
        <button type="submit" className="bg-black text-white p-1" onClick={HomePage}>Submit</button>
      </div>
    </div>
  );
}

export default signUp;

