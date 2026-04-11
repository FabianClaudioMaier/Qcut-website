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
import "../styles/pages/HomePage.css";

function HomePage() {
  return (
    <main className="home-page" id="top">
      <BackgroundBlock image={heroBackground}>
        <H1Block>Simple React Homepage</H1Block>
        <TextBlock>
          This page wires together reusable building blocks for background, headings, text, images, videos, blocks,
          and buttons.
        </TextBlock>
        <ButtonBlock label="Jump to Content" href="#content" />
      </BackgroundBlock>

      <section className="home-page__grid" id="content">
        <ContentBlock>
          <H2Block>Image Block</H2Block>
          <ImageBlock src={sampleImage} alt="Sample placeholder art" caption="This image comes from src/assets/images." />
        </ContentBlock>

        <ContentBlock>
          <H2Block>Video Block</H2Block>
          <VideoBlock src={sampleVideo} title="This video comes from src/assets/videos." />
        </ContentBlock>

        <ContentBlock className="home-page__full-width">
          <H3Block>Text + Button + Generic Block</H3Block>
          <TextBlock>
            Use the content block as a flexible container, then compose it with text and buttons for layouts across
            sections.
          </TextBlock>
          <div className="home-page__inline-row">
            <ButtonBlock label="Primary Action" href="#top" />
            <TextBlock muted>All styles are split by component and page in the styles folder.</TextBlock>
          </div>
        </ContentBlock>
      </section>
    </main>
  );
}

export default HomePage;
