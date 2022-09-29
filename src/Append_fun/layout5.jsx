import { Image } from "@chakra-ui/react";

export default function Layout5({image}){

    return (
        <div>
            <Image src={image}  style={{height:"300px"}} />
        </div>
    )
}