import Child from "./Child";
import Child1 from "./Child1";

export default function Parent()
{
    let messag=<strong>from parent to child</strong>
    let myObject={
        name:"mahmoud",
        family:"maleki",
        tell:123456
    }
    function clickMe(){
        console.log("click me!!!");
    }
    function mySubmit(){
        event.preventDefault();
        console.log("submit");
    }
    function Change(event)
    {
console.log(event.target.value);
    }
    return (
        <div>
            <form onSubmit={mySubmit}>
                <input type="text" onChange={Change}/>
                <input type="submit"/>
            </form>
            <input type="button" onClick={clickMe} value="click"/>
            {/* <Child mes={messag}/> */}
         <Child myObject1={myObject} />
         <Child1 myFunc={Change}/>
        
          {/* <Child mes="message 3"/> */}
        </div>
        
    )
}