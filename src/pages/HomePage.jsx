import BackgroundBlock from "../components/BackgroundBlock";
import ContentBlock from "../components/ContentBlock";
import ImageBlock from "../components/ImageBlock";
import VideoBlock from "../components/VideoBlock";
import ButtonBlock from "../components/ButtonBlock";
import TextBlock from "../components/TextBlock";
import H1Block from "../components/H1Block";
import H2Block from "../components/H2Block";
import H3Block from "../components/H3Block";
import heroBackground from "../assets/images/hero-background.svg";
import sampleImage from "../assets/images/sample-photo.svg";
import sampleVideo from "../assets/videos/sample-video.mp4";

function HomePage() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-4 pb-12 pt-8" id="top">
      <BackgroundBlock
        image={heroBackground}
        className="flex min-h-[420px] items-center justify-center text-center shadow-[0_0_40px_rgba(251,146,60,0.12)]"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
          <H1Block>Simple React Homepage</H1Block>
          <TextBlock>
            This page wires together reusable building blocks for background, headings, text, images, videos, blocks,
            and buttons.
          </TextBlock>
          <ButtonBlock label="Jump to Content" href="#content" />
        </div>
      </BackgroundBlock>

      <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2" id="content">
        <ContentBlock>
          <H2Block>Image Block</H2Block>
          <ImageBlock src={sampleImage} alt="Sample placeholder art" caption="This image comes from src/assets/images." />
        </ContentBlock>

        <ContentBlock>
          <H2Block>Video Block</H2Block>
          <VideoBlock src={sampleVideo} title="This video comes from src/assets/videos." />
        </ContentBlock>

        <ContentBlock className="md:col-span-2">
          <H3Block>Text + Button + Generic Block</H3Block>
          <TextBlock>
            Use the content block as a flexible container, then compose it with text and buttons for layouts across
            sections.
          </TextBlock>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <ButtonBlock label="Primary Action" href="#top" />
            <TextBlock muted>Dark mode is active with lime-green and orange signal colors.</TextBlock>
          </div>
        </ContentBlock>
      </section>
    </main>
  );
}

export default HomePage;
