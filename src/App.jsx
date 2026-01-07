import React from 'react';

const styles = {
  app: {
    minHeight: '100vh',
    background: '#0b1220',
    color: '#e6eef8',
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  container: {
    width: '920px',
    maxWidth: '95%',
  },
  header: {
    marginBottom: '18px',
  },
  title: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 600,
    color: '#ffffff',
    letterSpacing: '-0.2px',
  },
  subtitle: {
    marginTop: '6px',
    color: '#b9c6d9',
    fontSize: '14px',
  },
  cardRow: {
    display: 'flex',
    gap: '18px',
    alignItems: 'flex-start',
  },
  card: {
    background: '#0f1724',
    borderRadius: '10px',
    padding: '18px',
    boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
    flex: 1,
    minWidth: 0,
  },
  sectionTitle: {
    margin: 0,
    marginBottom: '8px',
    fontSize: '13px',
    color: '#cfe3ff',
    fontWeight: 600,
  },
  textarea: {
    width: '100%',
    minHeight: '150px',
    resize: 'vertical',
    background: '#08101a',
    color: '#e6eef8',
    border: '1px solid rgba(255,255,255,0.04)',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '14px',
    outline: 'none',
  },
  ol: {
    margin: 0,
    paddingLeft: '20px',
    color: '#d8e6ff',
    fontSize: '14px',
    lineHeight: 1.65,
  },
  stepCard: {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
    padding: '14px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.03)',
  },
  footerHint: {
    marginTop: '12px',
    color: '#90a4bf',
    fontSize: '12px',
  },
};

export default function App() {
  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Job-Application Agent</h1>
          <p style={styles.subtitle}>AI agent that autonomously plans resume optimization for ATS</p>
        </header>

        <div style={styles.cardRow}>
          <section style={styles.card} aria-labelledby="agent-goal">
            <h2 id="agent-goal" style={styles.sectionTitle}>Agent Goal</h2>
            <div style={styles.stepCard}>
              <textarea
                aria-label="Agent goal input"
                placeholder="Optimize my resume for the given job description"
                style={styles.textarea}
                defaultValue={""}
              />
              <p style={styles.footerHint}>This is the planning input for checkpoint-1 — no execution yet.</p>
            </div>
          </section>

          <aside style={styles.card} aria-labelledby="agent-plan">
            <h2 id="agent-plan" style={styles.sectionTitle}>Agent Plan (Planning Layer)</h2>
            <div style={styles.stepCard}>
              <ol style={styles.ol}>
                <li>Parse resume</li>
                <li>Analyze job description</li>
                <li>Match skills</li>
                <li>Calculate ATS score</li>
                <li>Rewrite resume bullets</li>
                <li>Generate cover letter</li>
              </ol>
              <p style={styles.footerHint}>Static plan shown for demo; this represents the agent's planning steps.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
