import { Box, Heading, Text } from "@chakra-ui/react";
import { RefObject, useEffect, useState } from "react";
import React from "react";

// get git status from github api
const getUser = async () => {
    const axios = require('axios');
    const response = await axios.get('https://api.github.com/users/Tim-a-tree');
    const data = response.data;

    console.log(data);

    return data;
}

async function getWeeklyGitCommits() {

    // get data from github api
    const axios = require('axios');
    const response = await axios.get('https://api.github.com/users/Tim-a-tree/events');
    const data = response.data;


    // gets current date and last week's date
    const now = new Date();
    const today = now.getDay();
    const lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);

    // group data by date format (YYYY-MM-DD)
    const groupedData = data.reduce((acc, cur) => {
        const date = new Date(cur.created_at);
        const dateKey = date.toISOString().split('T')[0];
        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push(cur);
        return acc;
    }, {});

    // get the last 7 days of data
    const last7Days = Object.keys(groupedData).sort().slice(-7);

    // get the number of commits for each day
    const commits = last7Days.map((day) => {
        return groupedData[day].filter((event) => event.type === 'PushEvent').length;
    });

    return commits;
}




const GitStatus = () => {

    const [user, setUser] = useState();
    const [weeklyCommits, setWeeklyCommits] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const user = await getUser();
            setUser(user);
            const weeklyCommits = await getWeeklyGitCommits();
            // setWeeklyCommits(weeklyCommits);
        }
        fetchData();
    }, []);

    return (
        <Box>
        </Box>

    )

}

export default GitStatus;