import { redirectToCheckout } from "../utils/checkout";
import ButtonBlock from "../components/ButtonBlock";
import ContentBlock from "../components/ContentBlock";
import H1Block from "../components/H1Block";
import H2Block from "../components/H2Block";
import H3Block from "../components/H3Block";
import TextBlock from "../components/TextBlock";
import VideoBlock from "../components/VideoBlock";
import sampleVideo from "../assets/videos/sample-video.mp4";

const PRICES = {
  creatorMonth: 'price_1TQVNtBSfJ4A9uVJmtEhAaR3',
  creatorLifetime: 'price_1TQVNtBSfJ4A9uVJhclSWGnr',
  studioMonth: 'price_1TQVSjBSfJ4A9uVJkyzTq6JV',
  studioLifetime: 'price_1TQVSjBSfJ4A9uVJHMHgrTxr',
};

const communityChecklist = [
  "1 project workspace",
  "Basic multicam timeline editing",
  "Standard export presets",
  "Email support within 72 hours",
  "Updates every quarter"
];

const proChecklist = [
  "Unlimited project workspaces",
  "Advanced multicam automation",
  "Priority render queue",
  "Live chat support",
  "Weekly feature updates"
];

function EditorVersionPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-8 px-4 pb-12 pt-8 md:gap-10">
      <section className="mx-auto w-full">
        <ContentBlock className="text-center">
          <H1Block>Editor Version</H1Block>
          <H2Block>Your Performance. Cut in Real Time.</H2Block>
          <TextBlock>
            Built for editors who need fast multicam edits from live sets, aftermovies, and social-ready highlight clips.
          </TextBlock>
        </ContentBlock>
      </section>

      <section className="mx-auto w-full max-w-5xl">
        <div className="mb-4 text-center">
          <H2Block>Get Your License Key</H2Block>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ContentBlock className="flex flex-col gap-4">
            <H3Block>Comunity Version</H3Block>
            <div className="space-y-2">
              {communityChecklist.map((item) => (
                <TextBlock key={item}>[x] {item}</TextBlock>
              ))}
            </div>
            <ButtonBlock
              className="w-full sm:w-auto"
              label="Subscription 30€/month"
              onClick={() => redirectToCheckout(PRICES.creatorMonth)}
            />
            <ButtonBlock
              className="w-full"
              label="One time purchase 400€"
              onClick={() => redirectToCheckout(PRICES.creatorLifetime)}
            />
          </ContentBlock>

          <ContentBlock className="flex flex-col gap-4">
            <H3Block>Pro Version</H3Block>
            <div className="space-y-2">
              {proChecklist.map((item) => (
                <TextBlock key={item}>[x] {item}</TextBlock>
              ))}
            </div>
            <ButtonBlock
              className="w-full sm:w-auto"
              label="Subscription 50€/month"
              onClick={() => redirectToCheckout(PRICES.studioMonth)}
            />
            <ButtonBlock
              className="w-full"
              label="One time purchase 800€"
              onClick={() => redirectToCheckout(PRICES.studioLifetime)}
            />
          </ContentBlock>
        </div>
      </section>

      <section className="mx-auto w-full">
        <ContentBlock>
          <H2Block>Editor Version Tutorial</H2Block>
          <VideoBlock src={sampleVideo} />
        </ContentBlock>
      </section>
    </main>
  );
}

export default EditorVersionPage;