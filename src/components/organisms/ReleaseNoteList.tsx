import GITHUB_API from "@/axios-apis/github.api";
import GitHub_PullRequest from "@/types/github/GitHub_PullRequest";
import ReleaseNoteCard from "@/components/molecules/ReleaseNoteCard";
import Cache from "@/utils/Cache";
import { DateTime } from "luxon";

const lastCacheAtKey = "ReleaseNoteList_lastCacheAt";
const cachedDataKey = "ReleaseNoteList_cachedData";

type ReleaseNoteListProps = {

};

async function ReleaseNoteList({ }: Readonly<ReleaseNoteListProps>) {

    const lastCacheAt = Cache.get<DateTime | null>(lastCacheAtKey);

    let pullRequests: GitHub_PullRequest[] = Cache.get<GitHub_PullRequest[]>(cachedDataKey);

    if (
        !pullRequests ||
        !lastCacheAt ||
        lastCacheAt < DateTime.now().minus({ minutes: 30 })
    ) {
        const response = await GITHUB_API.get<GitHub_PullRequest[]>("/repos/quality-api/quality-api.core/pulls", {
            params: { state: "closed" }
        });

        pullRequests = response.data;

        Cache.set(lastCacheAtKey, DateTime.now());
        Cache.set(cachedDataKey, pullRequests);
    }

    return (
        <ol className="mt-4 flex flex-col gap-4">
            {pullRequests.map(pr => (
                <ReleaseNoteCard
                    key={pr.id}
                    title={pr.title}
                    body={pr.body}
                    url={pr.html_url}
                />
            ))}
        </ol>
    );
}

export default ReleaseNoteList;