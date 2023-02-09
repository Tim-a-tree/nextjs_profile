import { Container, Box, Heading, Stack, Badge, Card, Button, ButtonGroup, CardBody, CardFooter, Divider, Text, Image, SimpleGrid, Stat, StatNumber, StatLabel, useColorMode, StatGroup, StatHelpText, WrapItem, Avatar } from "@chakra-ui/react";
import AboutMe from "../components/about";
import SkillStacks from "../components/skills";
import NavBar from "../components/navbar";
import Typing from "../components/typing";
import { FaGithub, FaLink } from 'react-icons/fa';
import LineChart from "../components/linechart";
import Link from "next/link";
import GitStatus from "../components/git_status";

import dynamic from "next/dynamic";
import MyResponsiveLine from "../components/linechart";
import { useState } from "react";

const data = [
  {
    "id": "japan",
    "color": "hsl(36, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 115
      },
      {
        "x": "helicopter",
        "y": 138
      },
      {
        "x": "boat",
        "y": 131
      },
      {
        "x": "train",
        "y": 215
      },
      {
        "x": "subway",
        "y": 76
      },
      {
        "x": "bus",
        "y": 269
      },
      {
        "x": "car",
        "y": 221
      },
      {
        "x": "moto",
        "y": 188
      },
      {
        "x": "bicycle",
        "y": 99
      },
      {
        "x": "horse",
        "y": 19
      },
      {
        "x": "skateboard",
        "y": 16
      },
      {
        "x": "others",
        "y": 209
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(46, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 293
      },
      {
        "x": "helicopter",
        "y": 162
      },
      {
        "x": "boat",
        "y": 148
      },
      {
        "x": "train",
        "y": 287
      },
      {
        "x": "subway",
        "y": 246
      },
      {
        "x": "bus",
        "y": 163
      },
      {
        "x": "car",
        "y": 129
      },
      {
        "x": "moto",
        "y": 183
      },
      {
        "x": "bicycle",
        "y": 32
      },
      {
        "x": "horse",
        "y": 97
      },
      {
        "x": "skateboard",
        "y": 210
      },
      {
        "x": "others",
        "y": 84
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(336, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 220
      },
      {
        "x": "helicopter",
        "y": 108
      },
      {
        "x": "boat",
        "y": 20
      },
      {
        "x": "train",
        "y": 171
      },
      {
        "x": "subway",
        "y": 289
      },
      {
        "x": "bus",
        "y": 223
      },
      {
        "x": "car",
        "y": 3
      },
      {
        "x": "moto",
        "y": 299
      },
      {
        "x": "bicycle",
        "y": 204
      },
      {
        "x": "horse",
        "y": 72
      },
      {
        "x": "skateboard",
        "y": 208
      },
      {
        "x": "others",
        "y": 246
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(100, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 226
      },
      {
        "x": "helicopter",
        "y": 91
      },
      {
        "x": "boat",
        "y": 159
      },
      {
        "x": "train",
        "y": 225
      },
      {
        "x": "subway",
        "y": 21
      },
      {
        "x": "bus",
        "y": 261
      },
      {
        "x": "car",
        "y": 1
      },
      {
        "x": "moto",
        "y": 205
      },
      {
        "x": "bicycle",
        "y": 248
      },
      {
        "x": "horse",
        "y": 211
      },
      {
        "x": "skateboard",
        "y": 216
      },
      {
        "x": "others",
        "y": 241
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(325, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 234
      },
      {
        "x": "helicopter",
        "y": 33
      },
      {
        "x": "boat",
        "y": 292
      },
      {
        "x": "train",
        "y": 282
      },
      {
        "x": "subway",
        "y": 255
      },
      {
        "x": "bus",
        "y": 203
      },
      {
        "x": "car",
        "y": 49
      },
      {
        "x": "moto",
        "y": 57
      },
      {
        "x": "bicycle",
        "y": 180
      },
      {
        "x": "horse",
        "y": 10
      },
      {
        "x": "skateboard",
        "y": 1
      },
      {
        "x": "others",
        "y": 178
      }
    ]
  }
]

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
          Current Status
        </Heading>
        <MyResponsiveLine data={data} />
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