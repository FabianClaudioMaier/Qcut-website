import React from 'react';
import YouTubeEmbed from '../components/YouTubeEmbed';
import YouTubeEmbedSimple from '../components/YouTubeEmbedSimple';

function TestPage() {
  return (
    <div className="container" style={{padding: '40px'}}>
      <h1>YouTube Embed Test</h1>
      
      <div style={{marginTop: '20px'}}>
        <h2>Test 1: Direct iframe (should work)</h2>
        <div style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: '16px',
          background: '#000',
          border: '1px solid #333'
        }}>
          <iframe
            src="https://www.youtube.com/embed/Bzbe1ti2tC8?controls=1&rel=0&playsinline=1"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '16px'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Direct iframe test"
          />
        </div>
      </div>

      <div style={{marginTop: '40px'}}>
        <h2>Test 2: YouTubeEmbed component</h2>
        <YouTubeEmbed 
          url="https://youtu.be/Bzbe1ti2tC8"
          showControls={true}
          autoPlay={false}
          title="Component test"
        />
      </div>

      <div style={{marginTop: '40px'}}>
        <h2>Test 3: Different URL format</h2>
        <YouTubeEmbed 
          url="https://www.youtube.com/watch?v=Bzbe1ti2tC8"
          showControls={true}
          autoPlay={false}
          title="Watch URL test"
        />
      </div>

      <div style={{marginTop: '40px'}}>
        <h2>Test 4: YouTubeEmbedSimple component</h2>
        <YouTubeEmbedSimple videoId="Bzbe1ti2tC8" />
      </div>
    </div>
  );
}

export default TestPage;