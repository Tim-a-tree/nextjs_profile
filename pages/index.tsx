import { Container, Box, Heading, Stack, Badge, Card, Button, ButtonGroup, CardBody, CardFooter, Divider, Text, Image, SimpleGrid, Stat, StatNumber, StatLabel, useColorMode, StatGroup, StatHelpText, WrapItem, Avatar } from "@chakra-ui/react";
import AboutMe from "../components/about";
import SkillStacks from "../components/skills";
import NavBar from "../components/navbar";
import Typing from "../components/typing";
import { FaGithub, FaLink } from 'react-icons/fa';
import Link from "next/link";

const IndexPage = () => {

  return (
    <Container maxW='container.sm'>
      <NavBar />
      <Divider />
      <Box display={{ md: 'flex' }}>
        <Box p={4}>
          <Heading as="h2" size="lg" mb={4} variant="page-title">
            JeongHyun(Tim) Heo
          </Heading>
          {/* <Stack direction='row' paddingBlock={4}>
            <Badge color='green'>Software Engineer</Badge>
            <Badge color='orange'>Web/App Developer</Badge>
            <Badge color='red'>Musician</Badge>
            <Badge color='blue'>...and more to come</Badge>
          </Stack> */}
          <Typing />
        </Box>
      </Box>
      <AboutMe>
        <Heading as="h3" size="md" mb={4} variant="section-title" pl={4}>
          About Me
        </Heading>
        I am a software engineer who is passionate about learning in general. I have experience in building web applications such as this webpage using React, Next.js, and Node.js.
        I am also interested in building mobile applications. Currently, I know building application using Flutter. Learning Swift to build iOS application is my next goal.
        I love listening to music, playing piano and violin.
      </AboutMe>
      <Box border={1} borderColor="red.500" p={4}>
        <Heading as="h3" size="md" mb={4} variant="section-title">
          Stacks
        </Heading>
        <SkillStacks />
      </Box>
      <Box>
        <Heading as="h3" size="md" mb={4} variant="section-title">
          Projects
        </Heading>
        <Box>
          <Heading as="h4" size="md" mb={4} variant="section-title">
            Group Projects
          </Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' p={4}>
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src=''
                  alt=''
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>SPI</Heading>
                  <Text>
                    SPI is a java based application that fixes the buggy code of entered code.
                  </Text>
                  <Divider />
                  <Stat>
                    <StatLabel>Program</StatLabel>
                    <StatHelpText>Development Period</StatHelpText>
                    <StatNumber>2022.01 - 2022.06</StatNumber>
                  </Stat>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link href="https://github.com/S0rrow/SPI">
                  <Button leftIcon={<FaGithub />}>
                    Github
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src=''
                  alt=''
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>
                    Analysis on Results of ConFix Execution Through Correct Patch Change Information
                  </Heading>
                  <Text>
                    This project is to analyze the results of ConFix execution through correct patch change information.
                  </Text>
                  <Divider />
                  <Stat>
                    <StatLabel>Analysis Paper</StatLabel>
                    <StatHelpText>Published</StatHelpText>
                    <StatNumber>2022.06</StatNumber>
                  </Stat>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box>
                <Link href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11113812">
                  <Button leftIcon={<FaLink/>}>
                    Link
                  </Button>
                </Link>
                </Box>
                <Text pl={4} fontSize='xs'>
                  This paper is written in Korean.
                </Text>
              </CardFooter>
            </Card>
          </SimpleGrid>
          <Heading as="h4" size="md" mb={4} variant="section-title">
            Personal Projects
          </Heading>
        </Box>
      </Box>
    </Container>
  )
}
export default IndexPage