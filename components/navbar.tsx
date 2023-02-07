import { Flex, Text, Container, Box, Stack, Button, Divider, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { BsFillSunFill } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex as="nav" align="left" justify="space-between" wrap="wrap" bg="whiteAlpha">

            <Box
                display={{ sm: 'flex', md: 'flex', lg: 'flex' }}
                width={{ sm: 'full', md: 'auto' }}
                alignItems={{ sm: 'flex-start', md: 'center' }}
                flexGrow={1}
            >
                    <Flex align="left" mr={5}>
                        <Text fontSize="xl" fontWeight="bold"> JeongHyun(Tim) Heo</Text>
                    </Flex>
                <Stack direction='row' spacing={4} align='center'>
                    <Divider orientation="vertical" />
                    <Link href="">
                        About
                    </Link>
                    <Divider orientation="vertical" />
                    <Link href="">
                        Projects
                    </Link>
                    <Divider orientation="vertical" />
                    <Link href="">
                        Contact
                    </Link>
                    <Divider orientation="vertical" />
                    <Link href="">
                        Gears/Tools/Stacks
                    </Link>
                </Stack>
            </Box>
            <Button onClick={toggleColorMode} ml={4} position= 'absolute' top='1rem' right='1rem'>
                {colorMode === "light" ? <MdNightlight /> : <BsFillSunFill />}
            </Button>
        </Flex>
    )
};

export default Navbar;