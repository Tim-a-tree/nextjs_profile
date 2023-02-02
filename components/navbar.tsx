import { Flex, Text, Container, Box, Stack, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
    return (
        <Flex as="nav" align="left" justify="space-between" wrap="wrap" bg="whiteAlpha.300" color="black">

            <Box
                display={{ sm: 'none', md: 'flex' }}
                width={{ sm: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
            >
                <Stack direction='row' spacing={4} align='center'>
                    <Flex align="left" mr={5}>
                        <Text fontSize="xl" fontWeight="bold"> JeongHyun(Tim) Heo</Text>
                    </Flex>
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
        </Flex>
    )
};

export default Navbar;