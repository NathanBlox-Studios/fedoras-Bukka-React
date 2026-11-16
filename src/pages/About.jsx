function About() {
    return (
      <div>
        <h1>About Fedoras Bukka</h1>
        <p className="subtitle">
          ~~~~~~~~~~~A taste you cant waste!~~~~~~~~~~~~
        </p>
  
        <div className="two-col">
          <div>
            <p style={{ marginBottom: '16px' }}>
              Fedoras Bukka prides itself on individualism and down to earth nature. We slow-cook our 
              stews, source fresh market spices every morning, and never make problems out of our portions.
            </p>
            <div className="grid">
              <div className="card">
                <h3>100% Fresh Daily</h3>
                <p>Cooked fresh every morning—never frozen or reheated from yesterday.</p>
              </div>
              <div className="card">
                <h3>500+ Events</h3>
                <p>Trusted across Lagos for weddings, birthdays, and office lunches.</p>
              </div>
            </div>
          </div>
  
          <div className="info-box">
            <h3>Kitchen Location & Hours</h3>
            <p><strong>Address:</strong> Plot 14 Admiralty Way, Lekki Phase 1, Lagos</p>
            <p><strong>Mon – Sat:</strong> 8:00 AM – 9:30 PM</p>
            <p><strong>Sunday:</strong> 11:00 AM – 8:00 PM</p>
            <p><strong>Catering Notice:</strong> Book at least 48 hours ahead for events over 50 guests.</p>
          </div>
        </div>
      </div>
    );
  }
  
export default About;