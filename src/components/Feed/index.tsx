import NeynarClient from "@/clients/Neynar/neynar";
import { FeedType, FilterType } from "@neynar/nodejs-sdk";
import { Casts } from "../Cast/Casts";

export const revalidate = 3600;

export default async function Feed() {
  const feed = await getFeed();

  return <div>{feed && <Casts feed={feed.feed.casts} />}</div>;
}

async function getFeed() {
  try {
    const feed = await NeynarClient.fetchFeed(FeedType.Filter, {
      filterType: FilterType.GlobalTrending,
      withRecasts: false,
    });
    return { feed };
  } catch (e) {
    console.error("Error fetching feed from Neynar: ");
  }
}
