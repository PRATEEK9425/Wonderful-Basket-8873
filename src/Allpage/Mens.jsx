
import { Box, Image } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import Layout1 from "../Append_fun/layout1"
import Layout2 from "../Append_fun/layout2"
import Layout3 from "../Append_fun/layout3"

import Layout4 from "../Append_fun/layout4"
import Layout5 from "../Append_fun/layout5"


export default function Menpage(){
const [data,setData] = useState([])
const [data1,setData1] = useState([])
const [data2,setData2] = useState([])
const [data4,setData4] = useState([])
const [data5,setData5] = useState([])


useEffect(()=>{

    axios.get("http://localhost:3001/posts1").then((res)=>setData(res.data))
    axios.get("http://localhost:3001/post2").then((res)=>setData1(res.data))
    axios.get("http://localhost:3001/post3").then((res)=>setData2(res.data) )
    axios.get("http://localhost:3001/post4").then((res)=>setData4(res.data) )
    axios.get("http://localhost:3001/post5").then((res)=>setData5(res.data) )

},[])

    return(
    
<div>
    <Box style={{backgroundColor:"#fdf3dd" , marginBottom:"100px"}}>
<Image  src="https://hungamadeal.co.in/wp-content/uploads/2019/06/other-24-848x315.jpg" 

    style={{width:"90%"}}   />
    </Box>

<Box >
<Image  src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/22/d246ea0a-af18-4a62-a8ef-25e02df352871663841721199-1222.jpg" 

    style={{width:"100%"}}   />
{/* --------layout1 */}
    <div style={{display:"flex", margin:"auto" , gap:"10px",
    backgroundColor:"#fdf3dd", width:"100%"}}>
    {
    data?.map((el)=>(
<Layout1 key ={el.id} image={el.image} />
    ))
}
    </div>
</Box>
{/* --------------- */}


{/* -------heading */}
<div style={{width:"80%",  margin:"auto"}}>
    <Image src=
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/e5887c61-8682-4c49-b785-f2fe37ae91d31663583200397-Budget-Buys.jpg"
    style={{width:"100%", height:"120px"}} />

</div>
{/* --------- */}

{/* layout2 */}

<div style={{display:"flex",margin:"auto",gap:"10px",backgroundColor:"#fdf3dd", marginBottom:"20px"}}>
    
{
    data1?.map((el)=>(<Layout2  key={el.id}  image={el.image} />))
}

</div>
<Box >
    <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/4cc74165-3286-49ec-81a5-2fa5d43595071663584460284-Top-Categories.jpg"
style={{width:"80%" }}
/>
</Box>


<div style={{height:"400px", width:"100%"
,backgroundColor:"#ffdb66",display:"grid",gridTemplateColumns:"repeat(10,1fr)",gap:"5px"}}>

{
    data2?.map((el)=>(<Layout3 key={el.id}  image={el.image} />))
}

</div>





<Box >
    <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/9425bd4f-7ca2-4b7d-b458-2f7e10dec7101663591409913-Top-Brands-At-Best-Prices.jpg"
    
style={{width:"80%" }}
/>
</Box>


{/* layout4 */}
<div style={{height:"125px",width:"100%",backgroundColor:"#fdf3dd",display:"flex",margin:"auto",gap:"5px",}}>

{
    data4?.map((el)=>(<Layout4 key={el.id}  image={el.image} />))
}

</div>
{/* ----------end */}



<Box >
    <Image src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/3e4b1000-7f2a-4f5b-87ef-c23ec6b085041663584150362-Shop-By-Category.jpg"
    
style={{width:"80%" }}
/>
</Box>
{/* layout5 */}
<div style={{height:'600px', width:"100%",
border:"1px solid transparent",display:"grid" , gridTemplateColumns:"repeat(6,1fr)",gap:"-20px"}}>

{
     data5?.map((el)=>(<Layout5 key={el.id}  image={el.image} />))
}
</div>

</div>


    )
}