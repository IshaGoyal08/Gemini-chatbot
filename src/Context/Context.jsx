"use client";

import run from "@/config/gemini";

const { createContext, useState } = require("react");

export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recentprompt, setrecentprompt] = useState("");
  const [prevprompt, setprevprompt] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");


  const newchat=()=>{
    setloading(false);
    setshowresult(false)
  }

  const delayPara = (index, nextword) => {
    setTimeout(() => {
      setresultdata(prev=>prev+nextword)
    }, 75*index );
  };

  const onSent = async (prompt) => {
    setresultdata("");
    setloading(true);
    setshowresult(true);
    let response;
    if(prompt!==undefined){
      response=await run(prompt)
      setrecentprompt(prompt)
    }
    else{
      setprevprompt(prev=>[...prev,input])
      setrecentprompt(input);
      response = await run(input);
      
    }

    let newresponse = response.split("**").join('')
    let newresponse2 = newresponse.split("*").join("</br>");
    let newresponsearray=newresponse2.split("##").join(" ");
    let newresponsearray1=newresponsearray.split("```")
    for(let i=0; i<newresponsearray1.length; i++){
      const nextword= newresponsearray1[i]
      delayPara(i,nextword+" ")
    }
 
   
    setloading(false);
    setinput("");
  };

  const contextvalue = {
    input,
    setinput,
    recentprompt,
    setrecentprompt,
    prevprompt,
    setprevprompt,
    showresult,
    loading,
    resultdata,
    onSent,
    newchat
  };
  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
