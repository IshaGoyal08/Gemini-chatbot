import React, { useContext, useState } from "react";
import './sidebar.css'
import { Context } from "@/Context/Context";
import Image from "next/image";

const Sidebar = () => {
 const[extended,setextended ]=useState(false)
 const{onSent,prevprompt,setrecentprompt,newchat}=useContext(Context)
 const loadprompt=async(prompt)=>{
  setrecentprompt(prompt)
  await onSent(prompt)
 }

  return (
    <div className="sidebar transition-[1s] px-[15px] py-[25px]  inline-flex flex-col bg-[#e0edfe] justify-between min-h-[100vh]">
      <div className="top">
        <div className="menu block ml-[10px] cursor-pointer" >
          <Image width={20} height={20} onClick={()=>setextended(prev=>!prev)} src="/images/menu_icon.png" alt="" />
        </div>
        <div onClick={()=>newchat()} className="new_chat flex items-center gap-[10px] rounded-[50px] bg-[#eef3fc] text-gray-500 mt-[50px] px-[15px] py-[10px] cursor-pointer">
          <Image width={20} height={20} src="/images/plus_icon.png" alt="" />
          {extended?<p>New Chat</p>:null}
        </div>
        {extended? <div className="recent flex flex-col">
          <p className="mt-[30px] mb-[20px]">Recent</p>
          {prevprompt.map((item,index)=>{
            return(
              <div key={index} onClick={()=>loadprompt(item)} className="flex items-center gap-[10px] cursor-pointer p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-[#e2e6eb]">

              <Image width={20} height={20} src="/images/message_icon.png" alt="  " />
              <p>{item.slice(0,15)}...</p>
            </div>
            )

          })}
         
        </div>:null}
       
      </div> 

    
    </div>
  );
};

export default Sidebar;
