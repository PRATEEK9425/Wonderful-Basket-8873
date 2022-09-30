import { Image } from "@chakra-ui/react";

export default function Layout6({image}){

    return (
        <div>
            <Image src={image}  style={{height:"700px"}} />
        </div>
    )
}