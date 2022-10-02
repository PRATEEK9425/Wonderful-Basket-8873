import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Box,GridItem,Image,Input, textDecoration} from "@chakra-ui/react"; 
import { Grid } from '@chakra-ui/react'
import { AiOutlineUser,AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import Dropdown from "./dropdown";
import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "./searchcontext";
import { Button } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

    
    
export default function Navbar(){
  const [usertype,setUsertype] = useState("")
const {text,setText} = useContext(SearchContext)
const navigate = useNavigate()

function handleSearch(){

   setText(usertype)
   return navigate("/showresults")
}


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


    <form >
    <Input placeholder="Search for Products , brand and more" 
type="text"  value={usertype} onChange={(e)=>setUsertype(e.target.value)}

style={{height:"25px",width:"350px",marginLeft:"100px", borderRadius:"5px"}}  />



<Button   style={{marginLeft:"430px",marginTop:"-57px",height:"28px"
,backgroundColor:"white" , borderRadius:"5px" }}  
onClick={handleSearch}  ><BsSearch/></Button>
    </form>





</GridItem>
       
<GridItem style={{ display: "flex", gap:"20px" ,marginLeft:"250px" }}>
<NavLink style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}} ><Dropdown/>  </NavLink>
<NavLink style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}}> <AiOutlineHeart/>  Wishlish</NavLink>
<NavLink style={{textDecoration :"none" , color:"Black" ,fontWeight:"bold"}}   > <BsBagCheck/>Bag  </NavLink>

</GridItem>
        
        
</Grid>


           
           
        
          
          
        
    )
}