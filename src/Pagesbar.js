import { useState } from "react";

export default function Pagesbar(props){
    let itemno =0;
    let currentPage = props.currentPage;
    const [start, setStart ] = useState(props.start);
    function changePage(p){
        console.log("Page "+p+" clicked")
        return p;
        }
    const changeItem = (i) =>{
        itemno = currentPage
    }

    const rows = []  
    for (let i = start; i < start+10; i++){
        rows.push(<button key={100+i} className="pagebtn" onClick={()=>{changePage(i+1);}} id={"btn"+(i+1)}>{i+1}</button>)
    }
    return (<div className="pagesbar"> 
        <button className="pagebtn" id={start<1?"backward-hide":"backward"} onClick={()=> setStart((prevStart) => (prevStart-10)) }>Backward</button>
        {rows}
        <button className="pagebtn" id="foreward" onClick={()=> setStart((prevStart) => (prevStart+10)) } >Foreward</button>
    </div>);
}
 
/*  
    return <div className="pagesbar">
        <button className="pagebtn" id={start<10?"backward-hide":"backward"} onClick={()=> setStart((prevStart) => (prevStart-10)) }>Backward</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={handleClick}>{start+1}</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={()=>setClickedpage(()=>clickedPage=(start+2))}>{start+2}</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={()=>setClickedpage(()=>clickedPage=(start+3))}>{start+3}</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={()=>setClickedpage(()=>clickedPage=(start+4))}>{start+4}</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={()=>setClickedpage(()=>clickedPage=(start+5))}>{start+5}</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={()=>setClickedpage(()=>clickedPage=(start+6))}>{start+6}</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={()=>setClickedpage(()=>clickedPage=(start+7))}>{start+7}</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={()=>setClickedpage(()=>clickedPage=(start+8))}>{start+8}</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={()=>setClickedpage(()=>clickedPage=(start+9))}>{start+9}</button>
        <button className="pagebtn" id={"btn"+(start)} onClick={()=>setClickedpage(()=>clickedPage=(start+10))}>{start+10}</button>
        <button className="pagebtn" id="foreward" onClick={()=> setStart((prevStart) => (prevStart+10)) } >Foreward</button>
    </div> 

 */

/* 
    return <div className="pagesbar">
        <button className="pagebtn" id="backward" >Backward</button>
        {Array(range)
        .fill(true)
        .map((item,index) => (<button className="pagebtn" id={"btn"+(1+index)}>{index+1}</button>)
        )}
        <button className="pagebtn" id="foreward" >Foreward</button>
        </div>
}
*/