import { Image } from "@chakra-ui/react";

export default function Layout2({image}){

    return(
        <div style={{height:"200px", width:"150px"}}>
            <Image src={image}
            style={{height:"100%" , width:"100%"}}  />
        </div>
    )
}

