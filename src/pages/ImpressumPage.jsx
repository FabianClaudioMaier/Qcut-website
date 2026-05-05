import React from 'react';

function ImpressumPage() {
  return (
    <div className="page-fade-enter">
      <div className="container-narrow" style={{paddingTop: 80, paddingBottom: 80}}>
        <h1 className="t-h1" style={{marginBottom: 48}}>Legal Information</h1>
        
        {/* Disclaimer Section */}
        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>Disclaimer</h2>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Liability for Content</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              The contents of our website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the information provided.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Liability for Links</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              Our website may contain links to external websites of third parties, over whose content we have no control. Therefore, we cannot accept any responsibility for such external content. The respective provider or operator of the linked pages is always responsible for their content.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Copyright</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              The content published on this website (texts, images, graphics, and other materials) is subject to copyright law. Any use beyond the limits of copyright law requires the prior written consent of the respective rights holder.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Software Disclaimer</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              The information provided about our software is for informational purposes only. We do not guarantee that the software is suitable for any specific purpose or that it will produce error-free results.
            </p>
          </div>
        </section>

        {/* Imprint Section */}
        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>Imprint</h2>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 24, lineHeight: 1.7}}>
            Information in accordance with applicable Austrian law
          </p>
          
          <div className="card" style={{padding: 32, marginBottom: 32}}>
            <p className="t-body" style={{marginBottom: 8}}>
              <strong>Name:</strong> Mulcut Schwarzer & Antropow GesbR
            </p>
            <p className="t-body" style={{marginBottom: 8}}>
              <strong>Address:</strong> Schwarzhorngasse 13/24, 1050 Vienna, Austria
            </p>
            <p className="t-body" style={{marginBottom: 8}}>
              <strong>Email:</strong>{' '}
              <a href="mailto:mulcutprojects@gmail.com" style={{color: 'var(--teal)', textDecoration: 'none'}}>
                mulcutprojects@gmail.com
              </a>
            </p>
            <p className="t-body" style={{marginBottom: 8}}>
              <strong>Business Type:</strong> Civil-law partnership (GesbR)
            </p>
            <p className="t-body">
              <strong>Business Purpose:</strong> Development and distribution of software for automated analysis and processing of audio and video files.
            </p>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section>
          <h2 className="t-h2" style={{marginBottom: 32}}>Privacy Policy</h2>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>1. General Information</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              We take the protection of your personal data seriously. This Privacy Policy explains what data we collect, how we use it, and your rights in relation to your personal data.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>2. Data Collection on This Website</h3>
            <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
              When you visit our website, certain information is automatically collected by our hosting provider. This may include:
            </p>
            <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
              <li className="t-body" style={{marginBottom: 8}}>IP address</li>
              <li className="t-body" style={{marginBottom: 8}}>Browser type and version</li>
              <li className="t-body" style={{marginBottom: 8}}>Operating system</li>
              <li className="t-body" style={{marginBottom: 8}}>Date and time of access</li>
            </ul>
            <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, lineHeight: 1.7}}>
              This data is collected to ensure the proper functioning and security of the website.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>3. Purpose of Data Processing</h3>
            <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
              We process your data for the following purposes:
            </p>
            <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
              <li className="t-body" style={{marginBottom: 8}}>to provide and maintain our website</li>
              <li className="t-body" style={{marginBottom: 8}}>to ensure technical security</li>
            </ul>
            <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, lineHeight: 1.7}}>
              The legal basis for this processing is Art. 6(1)(f) GDPR (legitimate interest).
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>4. Tracking or Marketing</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              We do not use our own analytics services, tracking tools, or marketing cookies. However, this website includes embedded content from third-party providers such as YouTube. When such content is loaded, including when you visit a page containing an embedded video, the third-party provider may process personal data and use cookies or similar technologies in accordance with its own privacy policy.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>5. External Links</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              Our website may contain links to external websites. We are not responsible for the content or privacy practices of those websites.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>6. Data Retention</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              We only retain personal data for as long as necessary to fulfill the purposes stated above or as required by law.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>7. Your Rights</h3>
            <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
              Under applicable data protection laws, you have the right to:
            </p>
            <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
              <li className="t-body" style={{marginBottom: 8}}>access your personal data</li>
              <li className="t-body" style={{marginBottom: 8}}>request correction or deletion</li>
              <li className="t-body" style={{marginBottom: 8}}>restrict processing</li>
              <li className="t-body" style={{marginBottom: 8}}>object to processing</li>
              <li className="t-body" style={{marginBottom: 8}}>data portability</li>
            </ul>
            <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, lineHeight: 1.7}}>
              To exercise your rights, please contact us using the details below.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>8. Contact</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              If you have any questions about this Privacy Policy or your data, you can contact us at:
            </p>
            <p className="t-body" style={{marginTop: 12}}>
              <a href="mailto:mulcutprojects@gmail.com" style={{color: 'var(--teal)', textDecoration: 'none'}}>
                mulcutprojects@gmail.com
              </a>
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>9. Changes to This Privacy Policy</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              We reserve the right to update this Privacy Policy at any time to reflect changes in our services or legal requirements.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ImpressumPage;