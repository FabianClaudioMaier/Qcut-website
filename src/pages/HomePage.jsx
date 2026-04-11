import BackgroundBlock from "../components/BackgroundBlock";
import ContentBlock from "../components/ContentBlock";
import ButtonBlock from "../components/ButtonBlock";
import TextBlock from "../components/TextBlock";
import H1Block from "../components/H1Block";
import H2Block from "../components/H2Block";
import H3Block from "../components/H3Block";
import heroBackground from "../assets/images/hero-background.svg";

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

function HomePage() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-4 pb-12 pt-8 flex flex-col gap-8 md:gap-10">
      
        <ContentBlock className="mx-auto w-full text-center">
          <H1Block>Qcut</H1Block>
          <H2Block>The new way off multicam set cutting</H2Block>
          <TextBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </TextBlock>
          <div className="mt-5">
            <ButtonBlock label="Download now!" to="/downloads" />
          </div>
        </ContentBlock>

        <section className="mx-auto w-full max-w-5xl">
          <div className="mb-4 text-center">
            <H2Block>Get Your License Here</H2Block>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ContentBlock className="flex flex-col gap-4">
              <H3Block>Comunity Version</H3Block>
              <div className="space-y-2">
                {communityChecklist.map((item) => (
                  <TextBlock key={item}>[x] {item}</TextBlock>
                ))}
              </div>
              <ButtonBlock className="w-full" label="Subscription 5€/month" href="https://www.example.com" />
              <ButtonBlock className="w-full" label="One time purchase 75€" href="https://www.example.com" />
            </ContentBlock>

            <ContentBlock className="flex flex-col gap-4">
              <H3Block>Pro Version</H3Block>
              <div className="space-y-2">
                {proChecklist.map((item) => (
                  <TextBlock key={item}>[x] {item}</TextBlock>
                ))}
              </div>
              <ButtonBlock className="w-full" label="Subscription 20€/month" href="https://www.example.com" />
              <ButtonBlock className="w-full" label="One time purchase 200€" href="https://www.example.com" />
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
