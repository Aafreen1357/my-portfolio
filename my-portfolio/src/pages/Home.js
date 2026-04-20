import React from 'react';

const Home = () => {
  // We'll eventually fetch this data from your MongoDB Atlas!
  const profile = {
    name: "Afreenneha Shaikh",
    title: "Python Developer & Data Visualization Specialist",
    summary: "Bridging the gap between technical data and business strategy with Django, Flask, and Power BI.",
    currentCompany: "Wipro Limited"
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.name}>{profile.name}</h1>
        <h3 style={styles.title}>{profile.title}</h3>
        <p style={styles.summary}>{profile.summary}</p>
        <div style={styles.badge}>Currently at {profile.currentCompany}</div>
      </section>

      {/* Quick Links Section */}
      <section style={styles.grid}>
        <div style={styles.card}>
          <h3>🚀 AI Career Navigator</h3>
          <p>Explore the path to becoming an AI Data Analyst.</p>
          <button style={styles.btnSecondary}>Explore Project</button>
        </div>
        
        <div style={styles.card}>
          <h3>📊 Data Insights</h3>
          <p>View my PMO Dashboards and visualization work.</p>
          <button style={styles.btnSecondary}>View Portfolio</button>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.cta}>
        <h2>Want to collaborate?</h2>
        <p>I'm always open to discussing Python automation or data strategy.</p>
        <button style={styles.btnPrimary}>Get In Touch</button>
      </section>
    </div>
  );
};

const styles = {
  container: { padding: '40px', fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '1000px', margin: '0 auto' },
  hero: { textAlign: 'center', padding: '60px 0', borderBottom: '1px solid #eee' },
  name: { fontSize: '3rem', margin: '0', color: '#2c3e50' },
  title: { fontSize: '1.5rem', color: '#3498db', marginTop: '10px' },
  summary: { fontSize: '1.1rem', maxWidth: '600px', margin: '20px auto', lineHeight: '1.6' },
  badge: { display: 'inline-block', padding: '8px 15px', background: '#f1f1f1', borderRadius: '20px', fontSize: '0.9rem' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' },
  card: { padding: '25px', borderRadius: '12px', border: '1px solid #ddd', textAlign: 'center', transition: '0.3s' },
  btnPrimary: { padding: '12px 25px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' },
  btnSecondary: { padding: '10px 20px', background: 'transparent', border: '2px solid #3498db', color: '#3498db', borderRadius: '5px', cursor: 'pointer' },
  cta: { textAlign: 'center', marginTop: '60px', padding: '40px', background: '#f9f9f9', borderRadius: '15px' }
};

export default Home;