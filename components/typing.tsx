import { TypeAnimation } from "react-type-animation";
import { Box, Code } from "@chakra-ui/react";


const content = [
    ">>> I am Software Engineer", 4000,
    ">>> I am Web/App Developer", 4000,
    ">>> I am Musician", 4000,
    ">>> ...and more to come", 10000,
]
const Typing = () => {
    return (
        <Code bg="black" w='100%' p={4} color='white'>
            <TypeAnimation
                sequence={content}
                cursor={true}
                speed={50}
                deletionSpeed={20}
                repeat={Infinity}
            />
        </Code>
    )
}

export default Typing;