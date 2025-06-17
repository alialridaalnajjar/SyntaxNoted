import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="h-screen flex flex-row bg-cover justify-between bg-slate-800/90 text-white caret-transparent ">
      <Navbar />
      <div className="bg-amber-500/78 h-2/3 w-1/2 mt-30 rounded-2xl flex flex-row justify-between">
        <div className=" flex flex-col  items-center  gap-14  p-10 mr-10 w-full ">
          <h1 className="text-2xl text-sky-800">Send your request</h1>

          <div className=" gap-5 flex flex-row justify-between ">
            <div className="gap-1 ">
              <h1 className="text-sky-800">Name</h1>
              <input
                type="text"
                placeholder="Jensen Not Huang "
                className=" 
                    text-gray-200   pb-0.5      focus:outline-none focus:caret-gray-200  border-none"
              />
              <hr />
            </div>

            <div className="gap-1">
              <h1  className="text-sky-800">Phone</h1>
              <input
                type="text"
                placeholder="+1 234 567 890"
                className=" 
                    text-gray-200   pb-0.5      focus:outline-none focus:caret-gray-200  border-none"
              />
              <hr />
            </div>
          </div>

          <div className=" gap-5 flex flex-row justify-between ">
            <div className="gap-1 ">
              <h1  className="text-sky-800">Email</h1>
              <input
                type="text"
                placeholder="example@gmail.com "
                className=" 
                    text-gray-200   pb-0.5      focus:outline-none focus:caret-gray-200 border-none"
              />
              <hr />
            </div>

            <div className="gap-1">
              <h1  className="text-sky-800">Subject</h1>
              <input
                type="text"
                placeholder="Lorem Ipsulum"
                className=" 
                    text-gray-200   pb-0.5      focus:outline-none focus:caret-gray-200  border-none"
              />
              <hr />
            </div>
          </div>
          <div className="gap-1">
            <h1 className="ml-2 text-sky-800">Message</h1>
            <div contentEditable className="h-30 w-80 focus:outline-none border-1 rounded-2xl focus:caret-gray-200 p-2"  > Your message</div>
          </div>
          <button className=" rounded-3xl bg-sky-900 text-sm w-20 p-2 hover:cursor-pointer ">SEND</button>
        </div>

        <div className="flex flex-col p-10 bg-sky-900 gap-7">
          <h1 className="font-bold">REACH US</h1>
          <div className="w-full flex gap-2"> <span className="font-bold">Email </span>{"     "} alialridaalnajjar@gmail.com </div>
          <span className="w-full"><span className="font-bold">Phone</span>{"     "} +961 71 235 *** </span>
          <div className="flex flex-row justify-between gap-2">
            <div className="flex flex-row justify-center items-center font-bold " >Address</div>
            <p className="max-w-40">Somewhere in planet EARTH #GETRICKROLLED my man // i hate JAVAscript :-( </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
