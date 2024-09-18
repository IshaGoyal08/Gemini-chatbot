import React, { useContext } from "react";
import "./main.css";
import { Context } from "@/Context/Context";
import Image from "next/image";

const Main = () => {
  const handlekey = async (e) => {
    if (e.key === "Enter") await onSent();
  };
  const {
    onSent,
    setinput,
    input,
    loading,
    resultdata,
    showresult,
    recentprompt,
  } = useContext(Context);
  return (
    <div className="main flex-1 min-h-[100vh] pb-[15vh] relative ">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] text-[#585858] ">
        <p>Gemini</p>
        <Image width={40} height={40}
          className=" rounded-[50%]"
          src="/Images/user_icon.png"
          alt=""
        />
      </div>
      <div className="main_container max-w-[900px] m-auto ">
        {!showresult ? (
          <>
            {" "}
            <div
              className="Greet my-[50px]
        mx-0 text-[56px] text-[#c4c7c5] font-[500] p-[20px]"
            >
              <p>
                <span className="">Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards grid grid-cols-4 gap-[15px] p-[20px] ">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <Image width={35} height={35}  src="/Images/compass_icon.png" alt="" className="absolute bottom-[10px] right-[10px] bg-white rounded-[20px] p-[5px]"/>
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <Image width={35} height={35} src="/Images/bulb_icon.png" alt=""  className="absolute bottom-[10px] right-[10px] bg-white rounded-[20px] p-[5px]"/>
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <Image width={35} height={35} src="/Images/message_icon.png" alt=""  className="absolute bottom-[10px] right-[10px] bg-white rounded-[20px] p-[5px]"/>
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <Image width={35} height={35} src="/Images/code_icon.png" alt=""  className="absolute bottom-[10px] right-[10px] bg-white rounded-[20px] p-[5px]"/>
              </div>
            </div>
          </>
        ) : (
          <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="bg-[#dce9f8] p-3 rounded-md result-title mx-[0px] my-[40px] flex items-center gap-[20px]">
              <Image width={40} height={40} src="/Images/user_icon.png" alt="" className="w-[40px] rounded-[50%]"/>
              <pre className="whitespace-pre-wrap ">{recentprompt}</pre>
            </div>
            <div className="result-data bg-[#dce9f8] px-4 py-5 w-full rounded-md flex items-start gap-[20px] ">
              <Image width={40} height={40} src="/Images/gemini_icon.png" alt="" className="w-[40px] rounded-[50%]"/>
              {loading? <div className="loader flex flex-col gap-[10px] w-[100%]"><hr />
              <hr />
              <hr /></div>: <pre className="text-[18px] whitespace-pre-wrap font-[300] tracking-tighter leading-[1.8]" dangerouslySetInnerHTML={{__html:resultdata}}></pre>}
             
            </div>
          </div>
        )}

        <div
          className="main-bottom absolute bottom-0 w-[100%] max-w-[900px] py-0 px-[20px]
        m-auto "
        >
          <div className="search-box flex items-center justify-between gap-[20px] bg-[#f0f4f9] px-[20px] py-[10px] rounded-[50px]">
            <input
              onChange={(e) => setinput(e.target.value)}
              value={input}
              onKeyDown={handlekey}
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 bg-transparent border-none outline-none p-[8px] text-[18px]"
            />
            <div className="flex items-center gap-[15px]">
             
             {input? <Image width={24} height={24}
                onClick={() => onSent()}
                src="/Images/send_icon.png"
                alt=""
                className="cursor-pointer"
              />:null}
            </div>
          </div>
          <p className="bottom_info text-[13px] my-[15px] mx-auto text-center font-[300] text-[#585858];">
            Gemini may display inaccurate info,including about people,so
            double-check its responses.Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
