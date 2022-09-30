import { Box } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react"
import Layout1 from "../Append_fun/layout1";
import Layout2 from "../Append_fun/layout2"
import Layout6 from "../Append_fun/layout6";
import Layout7 from "../Append_fun/layout7";




export default function  Kidspage(){
    const [data,setData] = useState([]);
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
    const [data3,setData3] = useState([]);
    const [data4,setData4] = useState([]);
    const [data5,setData5] = useState([]);
    const [data6,setData6] = useState([]);
    const [data7,setData7] = useState([]);
useEffect(()=>{
    axios.get("http://localhost:3001/kids1").then((res)=>setData(res.data))
    axios.get("http://localhost:3001/kids2").then((res)=>setData1(res.data))
    axios.get("http://localhost:3001/kids3").then((res)=>setData2(res.data))
    axios.get("http://localhost:3001/kids4").then((res)=>setData3(res.data))
    axios.get("http://localhost:3001/kids5").then((res)=>setData4(res.data))
    axios.get("http://localhost:3001/kids6").then((res)=>setData5(res.data))
    axios.get("http://localhost:3001/kids7").then((res)=>setData6(res.data))
    axios.get("http://localhost:3001/kids8").then((res)=>setData7(res.data))
},[])



    return(
        <div>
           
<Box style={{width:"30%",  marginLeft:"150px"}}>
<h1 >FAVOURITE BRANDS</h1>
</Box>

{/* layout1-------- */}
<div style={{display:"flex",margin:"auto",gap:"10px",
    marginBottom:"20px"}}>
    
{
    data?.map((el)=>(<Layout2  key={el.id}  image={el.image} />))
}

</div>
{/* ------------------ */}

<Box style={{width:"30%",  marginLeft:"150px"}}>
<h1 >TOP PICKS</h1>
</Box>

{/* layout2 */}
<div style={{display:"flex",margin:"auto", marginBottom:"20px"}}>
    {
    data1?.map((el)=>(<Layout2  key={el.id}  image={el.image} />))
    }

</div>
{/* ----------------- */}

<Box style={{width:"30%",  marginLeft:"150px"}}>
<h1 >ICONIC BRANDS</h1>
</Box>
{/* layout3 */}

<div style={{display:"flex",margin:"auto", marginBottom:"20px",gap:"20px"}}>
    {
    data2?.map((el)=>(<Layout1  key={el.id}  image={el.image} />))
    }

</div>
{/* -------- */}

<Box style={{width:"30%",  marginLeft:"150px"}}>
<h1 >FASHION & ESSENTIALS</h1>
</Box>

{/* layout4 */}

<div style={{height:"400px", width:"100%"
,display:"grid",gridTemplateColumns:"repeat(5,1fr)"
  , gridTemplateRows:"repeat(2)"   ,gap:"5px",marginBottom:"250px"}}>

{
    data3?.map((el)=>(<Layout1  key={el.id}  image={el.image} />))
}

</div>
{/* -------------------- */}


<Box style={{width:"30%",  marginLeft:"150px"}}>
<h1 >EXPLORE MORE</h1>
</Box>

{/* layout5 */}

<div style={{height:"400px", width:"100%"
,display:"grid",gridTemplateColumns:"repeat(2,1fr)"
  , gridTemplateRows:"repeat(3)"   ,gap:"5px",marginBottom:"1800px"}}>

{
    data4?.map((el)=>(<Layout6  key={el.id}  image={el.image} />))
}

</div>
{/* -------------------- */}

<Box style={{width:"30%",  marginLeft:"150px"}}>
<h1 >THE KIDS SPACE</h1>
</Box>

{/* layout6 */}

<div style={{height:"400px", width:"100%"
,display:"grid",gridTemplateColumns:"repeat(2,1fr)"
  , gridTemplateRows:"auto"   ,gap:"5px",marginBottom:"300px"}}>

{
    data5?.map((el)=>(<Layout7  key={el.id}  image={el.image} />))
}

</div>
{/* -------------------- */}


<Box style={{width:"30%",  marginLeft:"150px"}}>
<h1 >BUDGET BUY</h1>
</Box>

{/* layout1-------- */}
<div style={{display:"flex",margin:"auto",gap:"10px",
    marginBottom:"20px"}}>
    
{
    data6?.map((el)=>(<Layout1  key={el.id}  image={el.image} />))
}

</div>


<Box style={{width:"30%",  marginLeft:"150px"}}>
<h1 >SHOP MORE BRANDS</h1>
</Box>

{/* layout1-------- */}
<div style={{display:"flex",margin:"auto",gap:"10px",
    marginBottom:"20px"}}>
    
{
    data7?.map((el)=>(<Layout1  key={el.id}  image={el.image} />))
}

</div>



        </div>
    )
}