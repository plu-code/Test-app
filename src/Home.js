import RenderProduct from "./RenderProduct";
import { useState, useEffect } from "react";
export default function Home(props){
    let section = props.section
    const [currentPage, setCurrentPage] = useState(props.currentPage)
    let itemno = props.itemno
    const products = []
    for (let i = itemno; i < itemno+10; i++){
        products.push(<RenderProduct section = {section} currentPage={currentPage} itemno={itemno+i}  />)
    }
    return products;
}    

/*     return <div className="Home">
        {Array(10)
        .fill(true)
        .map((item,itemno) => (
        <RenderProduct section={section} num={itemno} />
        ))}
        </div> */
