function About() {
  return (
    <div className="page about">
      <div className="page-header">
        <h1>About MovieHub</h1>
        <p className="subtitle">A professional React movie exploration app</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>What is MovieHub?</h2>
          <p>
            MovieHub is a feature-rich movie explorer built with React. It allows users
            to search, browse, and save their favorite movies, TV series, and games using
            the OMDB API.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">🔍</span>
              <h3>Smart Search</h3>
              <p>Search thousands of titles with real-time results</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎯</span>
              <h3>Type Filters</h3>
              <p>Filter by Movies, Series, or Games instantly</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⭐</span>
              <h3>Favorites</h3>
              <p>Save favorites locally — persists across sessions</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📖</span>
              <h3>Rich Details</h3>
              <p>Full plot, ratings, cast, and crew information</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Tech Stack</h2>
          <div className="tech-list">
            <span className="tech-chip">React</span>
            <span className="tech-chip">React Router</span>
            <span className="tech-chip">Context API</span>
            <span className="tech-chip">Custom Hooks</span>
            <span className="tech-chip">localStorage</span>
            <span className="tech-chip">OMDB API</span>
            <span className="tech-chip">Vite</span>
          </div>
        </section>

        <section className="about-section">
          <h2>Architecture</h2>
          <p>
            Built with professional patterns: a <strong>service layer</strong> for API calls,
            <strong> Context API</strong> for global state, <strong>custom hooks</strong> for
            reusable logic, and <strong>reusable components</strong> for consistent UI.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About
