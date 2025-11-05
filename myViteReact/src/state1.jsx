 import { useState } from "react";

export default function state1()

{
let [myState,setMyState]=useState("mahmoud");

    let valTxt;
    function changeState()
    {
        setMyState(myState=valTxt);
    }
    function changeTxt(event)
    {
       
      valTxt=  event.target.value;
     
    }
    return (
        <div>
            <input type="text" onChange={changeTxt}/>
            <input type="button" onClick={changeState} value="change state"/>
            <label>{myState}</label>
        </div>
    )
    
}