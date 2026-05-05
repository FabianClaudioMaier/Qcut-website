import React, { useEffect } from 'react';

function PrivacyNoticePage() {
  useEffect(() => {
    // Load Cookiebot declaration script
    const script = document.createElement('script');
    script.id = 'CookieDeclaration';
    script.src = 'https://consent.cookiebot.com/2a475210-b203-4225-953a-af0cec101a9f/cd.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.getElementById('CookieDeclaration');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="page-fade-enter">
      <section className="container section">
        <h1 className="t-display" style={{marginBottom: 40}}>Privacy Notice</h1>
        
        {/* Cookie declaration will be inserted here by the script */}
        <div id="CookiebotDeclaration"></div>
        
        {/* Additional privacy content */}
        <div className="card" style={{marginTop: 40}}>
          <h2 className="t-h2" style={{marginBottom: 20}}>Data Protection</h2>
          <p className="t-body" style={{marginBottom: 16}}>
            Q·Cut is committed to protecting your privacy. All video processing happens locally on your machine - your footage never leaves your computer.
          </p>
          <p className="t-body">
            For questions about our privacy practices, please contact us at <a href="mailto:privacy@qcut.app" style={{color: 'var(--amber)'}}>privacy@qcut.app</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default PrivacyNoticePage;