import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
    return (
        <Box as = "main" pb= {8}>
            <Head>
                <title>JeongHyun(Tim) Heo - Profile</title>
                <meta name="description" content="JeongHyun(Tim) Heo's profile page" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main;