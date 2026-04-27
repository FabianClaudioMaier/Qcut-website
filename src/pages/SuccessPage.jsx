import ContentBlock from "../components/ContentBlock";
import H1Block from "../components/H1Block";
import H2Block from "../components/H2Block";
import TextBlock from "../components/TextBlock";
import ButtonBlock from "../components/ButtonBlock";

function SuccessPage() {
	return (
		<main className="mx-auto flex w-full max-w-[1100px] flex-col gap-8 px-4 pb-12 pt-8 md:gap-10">
			<section className="mx-auto w-full">
				<ContentBlock className="text-center">
					<H1Block>Payment Successful!</H1Block>
					<H2Block>Welcome to Qcut 🎉</H2Block>
					<TextBlock>
						Thank you for your purchase. Your license key has been sent to your email address.
						Please check your inbox (and spam folder) within the next few minutes.
					</TextBlock>
					<TextBlock>
						Once you have your license key, download the app and enter it on first launch.
					</TextBlock>
					<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
						<ButtonBlock label="Download Qcut" href="/download" />
						<ButtonBlock label="Go to Home" to="/" />
					</div>
				</ContentBlock>
			</section>
		</main>
	);
}

export default SuccessPage;