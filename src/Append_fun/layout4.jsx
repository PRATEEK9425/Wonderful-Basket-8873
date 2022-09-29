import { Image } from "@chakra-ui/react";

export default function Layout4({image}){

    return (
        <div>
            <Image 
            src={image} 
            style={{height:"120px"}}  />
        </div>
    )
}