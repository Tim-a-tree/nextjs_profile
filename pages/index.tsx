import { Container, Box, Heading, Stack, Badge, Tabs, Tab, TabList } from "@chakra-ui/react";
import AboutMe from "../components/about";
import SkillStacks from "../components/skills";

const IndexPage = () => {
  return (
    <Container maxW='container.sm'>
      <Box border={1} borderColor="red.500" p={4} m={4}>
        Hello, I am JeongHyun Heo, a software engineer.
      </Box>

      <Box display={{md: 'flex'}}>
        <Box>
          <Heading as="h2" size="lg" mb={4} variant="page-title">
            JeongHyun(Tim) Heo
          </Heading>
          <Stack direction='row' paddingBlock={4}>
              <Badge color='green'>Software Engineer</Badge>
              <Badge color='orange'>Web/App Developer</Badge>
              <Badge color='red'>Musician</Badge>
              <Badge color='blue'>...and more to come</Badge>
            </Stack>
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
        <Heading as = "h3" size="md" mb={4} variant="section-title">
          Stacks
        </Heading>
        <SkillStacks />
      </Box>



    </Container>
  )
}

export default IndexPage