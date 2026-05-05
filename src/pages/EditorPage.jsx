import React from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import YouTubeEmbed from '../components/YouTubeEmbed';

const KREATOR_MONTH_PRICE_ID = 'price_1TQVNtBSfJ4A9uVJmtEhAaR3';
const KREATOR_ONETIME_PRICE_ID = 'price_1TQVNtBSfJ4A9uVJhclSWGnr';
const STUDIO_MONTH_PRICE_ID = 'price_1TQVSjBSfJ4A9uVJkyzTq6JV';
const STUDIO_ONETIME_PRICE_ID = 'price_1TQVSjBSfJ4A9uVJHMHgrTxr';

function EditorPage() {
  const handleKreatorMonthly = async () => {
    await redirectToCheckout(KREATOR_MONTH_PRICE_ID);
  };

  const handleStudioMonthly = async () => {
    await redirectToCheckout(STUDIO_MONTH_PRICE_ID);
  };

  return (
    <div className="page-fade-enter">
      {/* Hero Section */}
      <section className="container hero-page">
        <h1 className="t-display">
          Multicam automation.<br/>
          <span style={{color:"var(--amber)"}}>For any NLE.</span>
        </h1>
        <p className="t-body-lg" style={{maxWidth: 560, marginTop: 16}}>
          Works with Resolve, Premiere, Final Cut. Export XML, import, done.
        </p>
        <div style={{marginTop: 24, display:"flex", gap: 12, flexWrap:"wrap"}}>
          <Link to="/pricing" className="btn btn-amber btn-amber-lg">
            Choose your plan
          </Link>
        </div>
      </section>

      {/* Product Screenshot Section */}
      <section className="container section">
        <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap: 48, alignItems:"center"}}>
          <div style={{borderRadius: '12px', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--line)'}}>
            <img 
              src="/resolve-plugin-screenshot.png" 
              alt="Q·Cut Editor Interface" 
              style={{width: '100%', display: 'block'}}
            />
          </div>
          <div>
            <h2 className="t-h2">Your timeline.<br/>Automated.</h2>
            <p className="t-body-lg" style={{marginTop: 16}}>
              Import multicam. Detect beats. Generate cuts. Export XML.
            </p>
            <div style={{marginTop: 24, display:"flex", flexDirection:"column", gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">Works with any NLE</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">XML import/export</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">Preserves color grading</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">Non-destructive workflow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="t-h2">Choose your workflow</h2>
        </div>
        <div className="tier-grid" style={{maxWidth: 720, margin: '0 auto'}}>
          {/* Kreator Plan */}
          <div className="tier-card">
            <h3>Kreator</h3>
            <div className="price">€30<span className="unit">/month</span></div>
            <p>Perfect for content creators and small studios</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Up to 10 projects/month</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>4K export resolution</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Beat detection</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Preset library</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Email support · 72h</span>
              </li>
            </ul>
            <button className="btn btn-amber" onClick={handleKreatorMonthly}>
              Subscribe €30/month
            </button>
          </div>

          {/* Studio Plan */}
          <div className="tier-card featured">
            <span className="badge">Studio</span>
            <h3>Studio</h3>
            <div className="price">€50<span className="unit">/month</span></div>
            <p>For professional studios and agencies</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Unlimited projects</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>8K export resolution</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Advanced AI sync</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Custom presets</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Priority render</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Live chat support</span>
              </li>
            </ul>
            <button className="btn btn-amber" onClick={handleStudioMonthly}>
              Subscribe €50/month
            </button>
          </div>
        </div>
      </section>

      {/* Tutorial Video Section */}
      <section className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="t-h2">Watch the workflow</h2>
          <p className="t-body-lg" style={{maxWidth: 640, margin: '20px auto 0'}}>
            See how Q·Cut Editor integrates with your existing NLE workflow
          </p>
        </div>
        <div style={{maxWidth: 960, margin: '0 auto'}}>
          <YouTubeEmbed 
            url="https://youtu.be/Bzbe1ti2tC8" 
            showControls={true} 
            autoPlay={false}
            title="Q·Cut Editor Tutorial"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="t-h2">Professional features</h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24}}>
          <div className="card">
            <h3 className="t-h3" style={{marginBottom: 12}}>XML Workflow</h3>
            <p className="t-body">
              Import and export XML timelines. Works seamlessly with your existing NLE workflow.
            </p>
          </div>
          <div className="card">
            <h3 className="t-h3" style={{marginBottom: 12}}>Non-Destructive</h3>
            <p className="t-body">
              All your color grades, effects, and adjustments remain intact. We only change the cuts.
            </p>
          </div>
          <div className="card">
            <h3 className="t-h3" style={{marginBottom: 12}}>Beat Mapping</h3>
            <p className="t-body">
              Advanced beat detection that understands drops, builds, and breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container section" style={{textAlign: 'center', padding: '80px 32px'}}>
        <h2 className="t-display">
          Ready to automate?
        </h2>
        <p className="t-body-lg" style={{maxWidth: 560, margin: '24px auto 40px'}}>
          Start with Kreator. Upgrade anytime.
        </p>
        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/pricing" className="btn btn-amber btn-amber-lg">
            See all plans
          </Link>
          <Link to="/help" className="btn btn-ghost">
            Learn more
          </Link>
        </div>
      </section>
    </div>
  );
}

export default EditorPage;