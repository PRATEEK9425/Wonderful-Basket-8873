import { Image } from "@chakra-ui/react";


export default function Layout1({image}){

    return(

        
            <div style={{height:"300px" , width :"250px", marginLeft:"10px" }}>
       <Image src={image} h={"100%"} w ={"100%"}   />
            </div>
       
    )

}

