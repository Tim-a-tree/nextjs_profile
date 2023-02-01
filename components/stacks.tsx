import { TabList, TabPanels, Tabs, Tab, TabPanel, Stack, Badge } from '@chakra-ui/react'

function SkillStacks() {
    function CreateTabs({ data }) {
        var current = 'red';
        return (
            <Tabs>
                <TabList>
                    {data.map((tab, index) => (
                        <Tab key={index}>{tab.label}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {data.map((tab, index) => (
                        <TabPanel p={4} key={index}>
                            <Stack key={index} direction='row' paddingBlock={4}>
                            {tab.contents.map((content) => (
                                    current = RandomColors(current),
                                    <Badge color={current}>{content}</Badge>

                            ))}
                            </Stack>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        )
    }

    function RandomColors(current: string) {
        const colors = ['green', 'orange', 'red', 'blue']
        var returnvalue
        while (current === colors[Math.floor(Math.random() * colors.length)]) {
            returnvalue = colors[Math.floor(Math.random() * colors.length)]
        }
        return returnvalue
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