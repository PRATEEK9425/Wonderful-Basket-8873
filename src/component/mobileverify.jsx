import { Button,  Image, Stack } from "@chakra-ui/react"
import { Input ,Box} from "@chakra-ui/react" 
import { Link } from "react-router-dom"


 const  Mobileverify =()=>{

    return(
        <div style={{backgroundColor:"#fdefeb"}}>
<Stack  style={{border:"1px solid transparent" , width :"30%",margin:"auto",height:"500px",backgroundColor:"white"}}>
    <Box>
        <Image 
        src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1T4MbyFAZfnmCEnu_3VrFCeOw_44y-YjN2w&usqp=CAU"
        style={{width:"100%"}} />
    </Box>
    
    
    <Box>
    <h2>Login or Signup</h2>
    </Box>

<Box>

     <Input  placeholder="+91 | Mobile Number"  type="number" 
     style={{height:"30px",width:"70%" , textAlign:"center" ,borderColor:"#777777",borderRadius:"4px"}}   />

</Box>
<Box>
    <p style={{as:'i'}}>By continuing I agree to Term of use <br/> and Privacy policy</p>
</Box>

<box>
<Link to ="/login" style={{textDecoration:"none"}}>

<Button style={{backgroundColor:"rgb(255,63,108)" 
    ,color:"white",height:"35px",width:"85%",borderColor:"transparent",borderRadius:"6px" }}
    
    >CONTINUE</Button>

</Link>
   
</box>
<box>
    <p>Have Trouble in logged in...? Get Help </p>
</box>
</Stack>

        </div>

    )
}
export {Mobileverify}