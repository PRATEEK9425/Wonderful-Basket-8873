import { Image } from "@chakra-ui/react";

export default function Layout7({image}){

    return (
        <div>
            <Image src={image}  style={{height:"700px",width:"500px"}} />
        </div>
    )
}