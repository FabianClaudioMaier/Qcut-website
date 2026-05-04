import { Link } from "react-router-dom";
import BeatGrid from "../components/BeatGrid";
import YouTubeEmbed from "../components/YouTubeEmbed";

function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="t-display mb-4">
                Cut to the beat.<br/>Not the clock.
              </h1>
              <p className="t-body mb-8" style={{fontSize: "18px"}}>
                Multicam editing that syncs to your music. Q·Cut automatically switches 
                angles on beat, creating dynamic videos that match your rhythm.
              </p>
              <Link to="/pricing" className="btn btn-amber btn-amber-lg">
                Start editing smarter →
              </Link>
            </div>
            <div>
              <BeatGrid />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section">
        <div className="container">
          <h2 className="t-h2 text-center mb-8">As simple as 1-2-3</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card card-feature text-center">
              <div className="text-4xl mb-4" style={{color: "var(--amber)"}}>01</div>
              <h3 className="t-h3 mb-3">Import your footage</h3>
              <p className="t-body">
                Drop in clips from multiple cameras. Q·Cut handles any format, any frame rate.
              </p>
            </div>
            
            <div className="card card-feature text-center">
              <div className="text-4xl mb-4" style={{color: "var(--amber)"}}>02</div>
              <h3 className="t-h3 mb-3">Detect the beat</h3>
              <p className="t-body">
                Our AI analyzes your audio and maps every beat, drop, and transition.
              </p>
            </div>
            
            <div className="card card-feature text-center">
              <div className="text-4xl mb-4" style={{color: "var(--amber)"}}>03</div>
              <h3 className="t-h3 mb-3">Export & share</h3>
              <p className="t-body">
                Get perfectly synced multicam edits. Export to any format in seconds.
              </p>
            </div>
          </div>
          <YouTubeEmbed
              url="https://youtu.be/Bzbe1ti2tC8?si=YIaqQ5V420zYtW6B"
              showControls={true}
              autoPlay={false}
              title="Tutorial Video"
          />
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section className="section-tight">
        <div className="container">
          <div className="card max-w-3xl mx-auto text-center">
            <h2 className="t-h2 mb-4">Choose your workflow</h2>
            <p className="t-body mb-6">
              From live DJ sets to professional productions, we have a plan that fits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <div className="t-h3 mb-2">DJ</div>
                <div className="t-label">€20/month</div>
              </div>
              <div>
                <div className="t-h3 mb-2">Editor Community</div>
                <div className="t-label">€30/month</div>
              </div>
              <div>
                <div className="t-h3 mb-2">Editor Pro</div>
                <div className="t-label">€50/month</div>
              </div>
            </div>
            <Link to="/pricing" className="btn btn-amber">
              See all features →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="t-label">Trusted by 5,000+ creators</span>
            <span className="t-label">•</span>
            <span className="t-label">150+ cuts per minute</span>
            <span className="t-label">•</span>
            <span className="t-label">0.1ms beat precision</span>
            <span className="t-label">•</span>
            <span className="t-label">Works with any DAW</span>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-tight">
        <div className="container text-center">
          <h2 className="t-h2 mb-4">Need help?</h2>
          <p className="t-body mb-6">
            Check our documentation, FAQs, or reach out to our support team.
          </p>
          <Link to="/help" className="btn btn-ghost">
            Visit Help Center
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
