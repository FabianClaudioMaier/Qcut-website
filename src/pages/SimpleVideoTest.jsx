import React from 'react';

function SimpleVideoTest() {
  return (
    <div style={{padding: '40px', background: '#0a0a0a', minHeight: '100vh', color: '#fff'}}>
      <h1 style={{marginBottom: '40px'}}>Simple YouTube Video Test</h1>
      
      <div style={{marginBottom: '40px'}}>
        <h2 style={{marginBottom: '20px'}}>Test 1: Basic iframe with hardcoded URL</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Bzbe1ti2tC8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{marginBottom: '40px'}}>
        <h2 style={{marginBottom: '20px'}}>Test 2: Responsive iframe</h2>
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          maxWidth: '100%',
          background: '#000'
        }}>
          <iframe
            src="https://www.youtube.com/embed/Bzbe1ti2tC8"
            frameBorder="0"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div style={{marginBottom: '40px'}}>
        <h2 style={{marginBottom: '20px'}}>Test 3: With nocookie domain</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/Bzbe1ti2tC8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default SimpleVideoTest;