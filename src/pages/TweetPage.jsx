import { LeftSide } from "../components/Home/LeftSide"
import { RightSide } from "../components/Home/RightSide"
import { CenterTweet } from "../components/Tweetpage/CenterTweet"

export const TweetPage = () => {
  return (
    <section className="flex h-screen max-w-fit">
      <CenterTweet />
    </section>
  )
}
