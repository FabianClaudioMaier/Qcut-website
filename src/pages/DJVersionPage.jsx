import { redirectToCheckout } from "../utils/checkout";
import ButtonBlock from "../components/ButtonBlock";
import ContentBlock from "../components/ContentBlock";
import H1Block from "../components/H1Block";
import H2Block from "../components/H2Block";
import TextBlock from "../components/TextBlock";
import VideoBlock from "../components/VideoBlock";
import sampleVideo from "../assets/videos/sample-video.mp4";

const DJ_MONTH_PRICE_ID = 'price_1TQVJyBSfJ4A9uVJTrQzprla';

function DJVersionPage() {
  const handleSubscribe = async () => {
    await redirectToCheckout(DJ_MONTH_PRICE_ID);
  };

  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-8 px-4 pb-12 pt-8 md:gap-10">
      <section className="mx-auto w-full">
        <ContentBlock className="text-center">
          <H1Block>DJ Version</H1Block>
          <H2Block>Your Performance. Cut in Real Time.</H2Block>
          <TextBlock>
            Built for DJs who need fast multicam edits from live sets, aftermovies, and social-ready highlight clips.
          </TextBlock>
        </ContentBlock>
      </section>

      <section className="mx-auto w-full">
        <ContentBlock className="text-center">
          <H2Block>Get Your License Key</H2Block>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <ButtonBlock
              className="w-full sm:w-auto"
              label="Subscription 20€/month"
              onClick={handleSubscribe}
            />
          </div>
        </ContentBlock>
      </section>

      <section className="mx-auto w-full">
        <ContentBlock>
          <H2Block>DJ Version Tutorial</H2Block>
          <VideoBlock src={sampleVideo} />
        </ContentBlock>
      </section>
    </main>
  );
}

export default DJVersionPage;