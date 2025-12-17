
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    auth: "key"
});

async function createIssue () {
    try {
        await octokit.request('POST /repos/StaytunedLAB/parmar-van-2304030101072/issues', {
            owner: 'StaytunedLAB',
            repo: 'parmar-van-2304030101072',
            title: 'issue created using javascript code',
            body: "issue created using javascript code using rest api key token.",
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log("issue created");
    } catch (error) {
        console.error("Error creating issue:", error);
    }
}
createIssue();
