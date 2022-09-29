import { Box,  Image,  Img,  Text } from "@chakra-ui/react";

export default function Footerpage(){

    return(
        <div style={{marginTop:'50px',height:"500px" ,display:"grid" , gridTemplateColumns:"repeat(4,1fr)" ,
         gridTemplateRows: "repeat(2,300px)",gap:"20px" , backgroundColor:"#fafbfc "}}>


<Box >
    <h2>ONLINE SHOPPING</h2>
    
  <p  style={{textAlign:"center",lineHeight:"8px"}} > Men</p>
  <p  style={{textAlign:"center",lineHeight:"8px"}} > Women</p>
  <p  style={{textAlign:"center",lineHeight:"8px"}} > Kids</p>
  <p  style={{textAlign:"center",lineHeight:"8px"}} > Home & Living</p>
  <p  style={{textAlign:"center",lineHeight:"8px"}} > Beauty</p>
  <p  style={{textAlign:"center",lineHeight:"8px"}} > Gift Cards</p>
  <p  style={{textAlign:"center",lineHeight:"8px"}} > Myntra Insider</p>

</Box>

<Box >
    <h2>CUSTOMER POLICIES</h2>
    <p  style={{textAlign:"center",lineHeight:"5px"}}> Contact Us</p>
   <p  style={{textAlign:"center",lineHeight:"5px"}}>FAQ</p>
   <p  style={{textAlign:"center",lineHeight:"5px"}}>T&C</p>
   <p  style={{textAlign:"center",lineHeight:"5px"}}>Terms Of Use</p>
   <p  style={{textAlign:"center",lineHeight:"5px"}}>Track Orders</p>
   <p  style={{textAlign:"center",lineHeight:"5px"}}>Shipping</p>
   <p  style={{textAlign:"center",lineHeight:"5px"}}>Cancellation</p>
   <p  style={{textAlign:"center",lineHeight:"5px"}}>Returns</p>
   <p  style={{textAlign:"center",lineHeight:"5px"}}>Privacy policy</p>
   <p  style={{textAlign:"center",lineHeight:"5px"}}>Grievance Officer</p>



</Box>

<Box >
    <h2>EXPERIENCE MYNTRA APP ON MOBILE</h2>

    <Box>
        <Image src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" 
          style={{height:"50px"}}   />
        <Image src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" 
          style={{height:"50px"}}    />
    </Box>
    <h2>KEEP IN TOUCH</h2>

    <Box>
        <Image src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"  
        style={{height:"25px",width:"25px",marginRight:"20px"}}/>
        <Image src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"  
        style={{height:"25px",width:"25px",marginRight:"20px"}}/>
        <Image src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" 
        style={{height:"25px",width:"25px",marginRight:"20px"}} />
        <Image src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"  
        style={{height:"25px",width:"25px",marginRight:"20px"}}/>
    </Box>

</Box>

<Box >
    <Box>
        <Image src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"  />
        <h2>100% ORIGINAL</h2><p>guarantee for all products at myntra.com</p>
    </Box>
    <Box>
        <Image src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"  />
        <h2>Return within 30days</h2><p>of receiving your order</p>
    </Box>
</Box>

<Box >
    <h2>USEFUL LINKS</h2>

       <p  style={{textAlign:"center",lineHeight:"5px"}}>Blog</p>
    <p  style={{textAlign:"center",lineHeight:"5px"}}>Careers</p>
    <p  style={{textAlign:"center",lineHeight:"5px"}}>Site Map</p>
    <p  style={{textAlign:"center",lineHeight:"5px"}}>Corporate Information</p>
    <p  style={{textAlign:"center",lineHeight:"5px"}}>Whitehat</p>

</Box>


        </div>
    )
}






