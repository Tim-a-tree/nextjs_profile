import { TabList, TabPanels, Tabs, Tab, TabPanel, Stack, Badge, Container, SimpleGrid } from '@chakra-ui/react'

function SkillStacks() {
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
                            <TabPanel p={4} key={index}>
                                <Stack as="span" key={index} direction='row' paddingBlock={4}>
                                {tab.contents.map((content) => (
                                        <Badge key={index} color={RandomColors()} >{content}</Badge>
                                ))}
                                </Stack>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Container>
        )
    }

    function RandomColors() {
        const colors = ['green', 'orange', 'red', 'blue', 'purple', 'teal']
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const Data = [
        {
            label: 'Programming Languages',
            contents: ['Python', 'Java', 'C++']
        },
        {
            label: 'frontend',
            contents: ['HTML', 'CSS'],
        },
        {
            label: 'backend',
            contents: ['Node.js', 'Django'],
        },
        {
            label: "Frameworks",
            contents: ['React', 'Next.js', 'Flutter', 'Slack', 'Jira', 'Git'],
        },
        {
            label: "Interests",
            contents: ['JavaScript', 'TypeScript', 'Unreal Engine', 'Kubernetes', 'Docker', 'AWS', 'Flutter', 'Supabase', 'Spring'],
        },
    ]

    return <CreateTabs data={Data} />
}

export default SkillStacks

