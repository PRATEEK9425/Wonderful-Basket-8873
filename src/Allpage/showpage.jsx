import { Button, Image } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { SearchContext } from "../component/searchcontext"

export default function ShowResult(){
const {text,setText} = useContext(SearchContext)
const [data,setData] = useState([])

useEffect(()=>{
axios.get(`http://localhost:3001/${text}`).then((res)=>setData(res.data))
},[text])

    return(
<div style={{ width:"90%" 
 ,display:"grid" , gridTemplateColumns:"repeat(4,1fr)", gap:"5px",margin :"auto", 
   }}>

{
    data?.map((el)=>(
     <div key={el.id}   style={{boxShadow : "rgba(0, 0, 0, 0.24) 0px 3px 8px" 
     , marginTop:"10px" }}
     >
           <Image  src={el.image}  style={{width:"100%", height:"300px"}} />

              <h3>{el.title}</h3>

           <h4>Rs. {el.price}</h4>
         
     </div>
        
    ))
}

</div>


    )
    }