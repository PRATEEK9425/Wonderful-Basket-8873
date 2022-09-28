import {Menu,MenuButton,MenuList,MenuItem, Box, Stack, } from '@chakra-ui/react'

  import { AiOutlineUser } from 'react-icons/ai';

  import { ChevronDownIcon } from '@chakra-ui/icons';
  import { Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function Dropdown(){
    const Navigate = useNavigate()
// const handleClick =()=>{
//     console.log("hi")
//    return <Navigate to="/mobileverify"/>
// }



    return(
        <div style={{borderColor:"#777777"}}>
            <Menu >
                
  <MenuButton style={{ borderColor:"transparent", backgroundColor:"white"}} rightIcon={<ChevronDownIcon />}>
<Box>
<AiOutlineUser/>

</Box>
<h3 style={{marginTop:"-0.25px"}}>Profile</h3>

  </MenuButton>

  <MenuList >
    <MenuItem  style={{backgroundColor:"white" , borderColor:"transparent"}} >
    <Stack  direction="column" gap="1px">
        <Box style={{height:"10px",marginBottom:"2px"}}>
        <h3>Welcome</h3>
        </Box>
    
    <Box style={{height:"10px",marginBottom:"18px"}}><p>To access account and manage orders</p></Box>

{/* buttons for login */}
<Box style={{height:"10px",marginBottom:"28px"}} >
    
    <Link to="/mobileverify" style={{ textDecoration:"none"}}>

    <Button  backgroundColor="white" variant='solid' borderRadius="4px" height={'35px'} 
    className="btn" >LOGIN / SIGNUP</Button>

    </Link>
    

</Box>
    </Stack>
    
    </MenuItem>

<hr/>


    <MenuItem style={{backgroundColor:"white", borderColor:"transparent"}} >
    <Stack >
        <Box   >Orders</Box>
        <Box   >Wishlist</Box>
        <Box   >Gift Card</Box>
        <Box   >Contact-us</Box>
        <Box   >Myntra Insider</Box>
        

        </Stack>

        </MenuItem>

     <hr/>


        <MenuItem style={{backgroundColor:"white", borderColor:"transparent"}}>
    <Stack >
        <Box   >Myntra-Credit</Box>
        <Box   >Coupons</Box>
        <Box   >Saved Cards</Box>
        <Box   >Saved VPA</Box>
        <Box   >Saved Address</Box>
        
        </Stack>

        </MenuItem>
    
    
    
  </MenuList>
</Menu>
        </div>
    )
}