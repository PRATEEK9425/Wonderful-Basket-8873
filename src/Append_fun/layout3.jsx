import { Image } from "@chakra-ui/react";

export default function Layout3({image}){

    return (
        <div>
            <Image src={image} style={{height:"180px" , width:"130px"}} />
        </div>
    )
}