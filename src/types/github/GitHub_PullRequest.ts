type GitHub_PullRequest = {
    url: string;
    id: number;
    html_url: string;
    number: number;
    state: string;
    locked: boolean;
    title: string;
    body: string | null;
};

export default GitHub_PullRequest;