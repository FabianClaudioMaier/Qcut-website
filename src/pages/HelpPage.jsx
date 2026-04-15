import ButtonBlock from "../components/ButtonBlock";
import ContentBlock from "../components/ContentBlock";
import H1Block from "../components/H1Block";
import H2Block from "../components/H2Block";
import TextBlock from "../components/TextBlock";

function HelpPage() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-4 pb-12 pt-8">
      <H1Block>help</H1Block>

      <section className="mt-6 max-w-3xl">
        <ContentBlock>
          <H2Block>Check your subscription-status</H2Block>
          <TextBlock>
            Please insert your email below, you will be redirected to the stripe account. There you can check your
            payments and cancel your subscription
          </TextBlock>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="sr-only" htmlFor="subscription-email">
              Email
            </label>
            <input
              className="w-full rounded-full border border-[#7ECAC3]/50 bg-black px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-[#7ECAC3] focus:outline-none focus:ring-2 focus:ring-[#7ECAC3]/30"
              id="subscription-email"
              placeholder="you@example.com"
              type="email"
            />
            <ButtonBlock href="https://www.example.com" label="check now" />
          </div>
        </ContentBlock>
      </section>
    </main>
  );
}

export default HelpPage;
