import { Link, Navigate, NavLink } from "react-router-dom";
import { Box,GridItem,Image,Input} from "@chakra-ui/react"; 
import { Grid } from '@chakra-ui/react'
import { AiOutlineUser,AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import Dropdown from "./dropdown";
import { useState } from "react";

const init={
    name :""
}

export default function Navbar(){
    let inputs = document.getElementById("inputtag")

inputs.addEventListener("searching",(e)=>{
    if(e.keyCode===13){
        console.log(e.target.value)
      
    }
})
    return (
        
<Grid templateColumns='repeat(4, 20%)' gap="15px"  mt ="20px" >
    <GridItem>
        <Image src ="https://images.indianexpress.com/2021/01/myntra.png"  
        style={{height:"70px", width:"100px" ,marginTop:"-3px"}}
        />
    </GridItem>
<GridItem style={{ display: "flex", gap:"20px" , width:"400px" ,marginLeft:"-100px" ,

    }}>
     <Link style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}}to="/">Men</Link>
<Link   style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}}to="/women" >Women</Link>
<Link  style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}}to="/kids" >kids</Link>
<Link   style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}}to="/homeliving" >Home-Living</Link>
<Link   style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}}to="/studio" >Studio</Link>
</GridItem>
           
<GridItem>
<Input placeholder="Search for Products , brand and more" 
type="text" id="inputtag"

style={{height:"25px",width:"450px",marginLeft:"100px", borderRadius:"5px"}}  />
</GridItem>
       
<GridItem style={{ display: "flex", gap:"20px" ,marginLeft:"300px" }}>
<NavLink style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}} ><Dropdown/>  </NavLink>
<NavLink style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}}> <AiOutlineHeart/>  Wishlish</NavLink>
<NavLink style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}}   > <BsBagCheck/>Bag  </NavLink>

</GridItem>
        
        
</Grid>


           
           
        
          
          
        
    )
}