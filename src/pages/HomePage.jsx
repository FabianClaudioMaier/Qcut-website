import React from 'react';
import { Link } from 'react-router-dom';
import YouTubeEmbed from '../components/YouTubeEmbed';

function HomePage() {
  return (
    <div className="page-fade-enter">
      {/* Hero Section */}
      <div style={{position: 'relative'}}>
        <section className="hero-home">
        <h1 className="t-display-xl">
          Stop editing<br/>
          <span style={{color:"var(--amber)"}}>Start Q-cutting</span>
        </h1>
        <p className="t-body-lg" style={{maxWidth: 580, margin:"24px auto 0"}}>
          Drop your set. Personilize. Press go. Done. All your footage become ready-to-post clips.
        </p>
        {/*
        <div style={{display:"flex", gap: 12, justifyContent:"center", marginTop: 32, flexWrap:"wrap"}}>

          <Link to="/dj" className="btn btn-amber btn-amber-lg">
            See how it works
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>

        </div>
        */}

        </section>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(180deg, transparent 0%, var(--bg) 100%)',
          pointerEvents: 'none',
          zIndex: 2
        }} />
      </div>

      {/* Tutorial Video Section */}
      <section className="container section">
        <div style={{textAlign: 'center', marginBottom: 32}}>
          <h2 className="t-h2">See how it performs</h2>
          {/*<p className="t-body-lg" style={{maxWidth: 640, margin: '20px auto 0'}}>*/}
          {/*  Watch how Q·Cut DJ transforms hours of footage into perfect clips*/}
          {/*</p>*/}
        </div>
        <div style={{maxWidth: 960, margin: '0 auto'}}>
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=mbfVdZ-ERrg"
            showControls={true}
            autoPlay={false}
            title="Q·Cut DJ Tutorial"
          />
        </div>
      </section>

      {/* Two Tools Section */}
      <section className="container section">
        <div style={{textAlign: 'center', marginBottom: 32}}>
          <h2 className="t-h2">
            Two tools<br/>
          </h2>
          <p className="t-body-lg" style={{maxWidth: 640, margin: '20px auto 0', color: 'var(--text-2)'}}>
            Choose betweean easy clips and full control
          </p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24}}>
          <Link to="/dj" className="tool-card">
            <span className="tag">For DJs</span>
            <h3> For DJs cutting their own clips</h3>
            <div className="arrow">
              Explore DJ version
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </Link>
          <Link to="/editor" className="tool-card">
            <span className="tag">For Editors</span>
            <h3>For editors dealing with multicam sets</h3>
            <div className="arrow">
              Explore Editor version
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </Link>

        </div>
      </section>

      {/*/!* Stats Section *!/*/}
      {/*<section className="container section">*/}
      {/*  <div className="scoreboard-row">*/}
      {/*    <div className="scoreboard">*/}
      {/*      <div className="corner" />*/}
      {/*      <div className="num">60<span className="unit">sec</span></div>*/}
      {/*      <div className="lbl">Average export time</div>*/}
      {/*    </div>*/}
      {/*    <div className="scoreboard">*/}
      {/*      <div className="corner" />*/}
      {/*      <div className="num">30<span className="unit">clips</span></div>*/}
      {/*      <div className="lbl">Per session</div>*/}
      {/*    </div>*/}
      {/*    <div className="scoreboard">*/}
      {/*      <div className="corner" />*/}
      {/*      <div className="num">0<span className="unit">%</span></div>*/}
      {/*      <div className="lbl">Manual editing</div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* CTA Section */}
      <section className="container section" style={{textAlign: 'center', padding: '80px 32px'}}>
        <h2 className="t-display">
          Skip the monotonous editing and get back to crative work
        </h2>

        {/*<p className="t-body-lg" style={{maxWidth: 560, margin: '24px auto 40px'}}>*/}
        {/*  Join the beta. Limited spots available.*/}
        {/*</p>*/}
        {/*<div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>*/}
        {/*  <Link to="/pricing" className="btn btn-amber btn-amber-lg">*/}
        {/*    Get early access*/}
        {/*  </Link>*/}
        {/*  <Link to="/help" className="btn btn-ghost">*/}
        {/*    Learn more*/}
        {/*  </Link>*/}
        {/*</div>*/}

      </section>
    </div>
  );
}

export default HomePage;