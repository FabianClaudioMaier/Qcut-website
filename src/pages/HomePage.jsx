import BackgroundBlock from "../components/BackgroundBlock";
import ContentBlock from "../components/ContentBlock";
import ButtonBlock from "../components/ButtonBlock";
import TextBlock from "../components/TextBlock";
import VideoBlock from "../components/VideoBlock";
import H1Block from "../components/H1Block";
import H2Block from "../components/H2Block";
import H3Block from "../components/H3Block";
import heroBackground from "../assets/images/hero-background.svg";
import sampleVideo from "../assets/videos/sample-video.mp4";

const communityChecklist = [
  "1 project workspace",
  "Basic multicam timeline editing",
  "Standard export presets",
  "Email support within 72 hours",
  "Updates every quarter"
];

const djChecklist = [
  "something something",
  "and other stuff",
  "that one we got too",
  "Crazy right?",
  "das crazy!"
];

function HomePage() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-4 pb-12 flex flex-col gap-8 md:gap-10">
          <div className="relative left-1/2 w-screen -translate-x-1/2">
            <VideoBlock
              autoPlay
              loop
              muted
              playsInline
              showControls={false}
              src={sampleVideo}
              videoClassName="h-[75vh] rounded-none border-x-0 object-cover"
            />
          </div>

        <ContentBlock className="mx-auto w-full text-center">
          <H1Block>Qcut</H1Block>
          <H2Block>The new way off multicam set cutting</H2Block>
        </ContentBlock>

        <section className="mx-auto w-full max-w-5xl">
          <div className="mb-4 text-center">
            <H2Block>Get Your License Here</H2Block>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ContentBlock className="flex flex-col gap-4">
              <H3Block>DJ Version</H3Block>
              <div className="space-y-2">
                {djChecklist.map((item) => (
                  <TextBlock key={item}>[x] {item}</TextBlock>
                ))}
              </div>
              <ButtonBlock className="w-full" label="Get the DJ-Version" to="/dj-version" />
            </ContentBlock>

            <ContentBlock className="flex flex-col gap-4">
              <H3Block>Editor Version</H3Block>
              <div className="space-y-2">
                {communityChecklist.map((item) => (
                  <TextBlock key={item}>[x] {item}</TextBlock>
                ))}
              </div>
              <ButtonBlock className="w-full" label="Get the Editor-Version" to="/editor-version" />
            </ContentBlock>
          </div>
        </section>

        <section className="mx-auto w-full">
          <ContentBlock className="text-center">
            <H2Block>Any troubles with your License?</H2Block>
            <div className="mt-5">
              <ButtonBlock label="Help-page" to="/help" />
            </div>
          </ContentBlock>
        </section>
      
    </main>
  );
}

export default HomePage;
