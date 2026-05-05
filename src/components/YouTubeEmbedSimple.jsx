import React from 'react';

function YouTubeEmbedSimple({ videoId }) {
  // Default to the specific video ID if not provided
  const id = videoId || 'Bzbe1ti2tC8';

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        position: 'relative', 
        paddingBottom: '56.25%', 
        height: 0,
        overflow: 'hidden',
        background: '#000',
        borderRadius: '8px'
      }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?controls=1&rel=0&playsinline=1`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="YouTube video"
        />
      </div>
    </div>
  );
}

export default YouTubeEmbedSimple;