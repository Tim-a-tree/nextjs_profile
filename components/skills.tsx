import { TabList, TabPanels, Tabs, Tab, TabPanel, Stack, Badge, Container, SimpleGrid, Center } from '@chakra-ui/react'

function SkillStacks() {
    let initialColor = 'red'
    function CreateTabs({ data }) {
        return (
            <Container>
                <Tabs isFitted>
                    <TabList>
                        {data.map((tab, index) => (
                            <Tab key={index}>{tab.label}</Tab>
                        ))}
                    </TabList>
                    <TabPanels>
                        {data.map((tab, index) => (
                            <TabPanel key={index}>
                                <Center>
                                    <Stack as="span" key={index} direction='row' paddingBlock={4}>
                                        <SimpleGrid columns={5} spacing={3}>
                                            {
                                                tab.contents.map((content) => (
                                                    <Badge textAlign={'center'} key={index} color={initialColor = RandomColors(initialColor)} >{content}</Badge>
                                            ))}    
                                        </SimpleGrid>
                                    </Stack>
                                </Center>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Container>
        )
    }

    function RandomColors(initialColor: String) {
        const colors = ['green', 'orange', 'red', 'blue', 'purple', 'teal', 'pink.500']
        // return colors[Math.floor(Math.random() * colors.length)]
        let color = colors[Math.floor(Math.random() * colors.length)]
        while (color === initialColor) {
            color = colors[Math.floor(Math.random() * colors.length)]
        }
        return color


    }

    const Data = [
        {
            label: 'Programming Languages',
            contents: ['Python', 'Java', 'C++']
        },
        {
            label: 'frontend/backend',
            contents: ['HTML', 'CSS', 'Node.js', 'Django', 'JavaScript', 'TypeScript'],
        },
        {
            label: "Frameworks/Tools",
            contents: ['React', 'Next.js', 'Flutter', 'Slack', 'Jira', 'Git'],
        },
        {
            label: "Interests",
            contents: [, 'Unreal Engine', 'Kubernetes', 'Docker', 'AWS', 'Flutter', 'Supabase', 'Spring', 'Swift'],
        },
    ]

    return <CreateTabs data={Data} />
}

export default SkillStacks

