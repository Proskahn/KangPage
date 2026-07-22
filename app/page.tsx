const publications = [
  {
    year: "2026",
    title: "Title of your most recent publication",
    authors: "Your Name, Co-author Name",
    venue: "Journal or Conference Name",
    href: "https://doi.org/",
  },
  {
    year: "2025",
    title: "A second publication title belongs here",
    authors: "Your Name, Collaborator Name",
    venue: "Journal or Conference Name",
    href: "https://doi.org/",
  },
  {
    year: "2024",
    title: "An earlier article, chapter, or working paper",
    authors: "Your Name",
    venue: "Publisher or Working Paper Series",
    href: "https://doi.org/",
  },
];

const students = [
  {
    name: "Student name",
    topic: "Master’s thesis topic",
    period: "2025–26",
  },
  {
    name: "Student name",
    topic: "Master’s thesis topic",
    period: "2025–26",
  },
  {
    name: "Student name",
    topic: "Master’s thesis topic",
    period: "2024–25",
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="Back to top">
          YN<span className="wordmarkDot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">Introduction</a>
          <a href="#publications">Publications</a>
          <a href="#supervision">Supervision</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="pageShell" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroCopy">
            <p className="eyebrow">Academic profile</p>
            <h1 id="hero-title">Your Name</h1>
            <p className="role">Professor · Researcher · Supervisor</p>
            <p className="heroStatement">
              Researching how evidence, ideas, and careful collaboration can
              turn complex questions into useful knowledge.
            </p>
            <a className="textLink" href="#about">
              Read my introduction <span aria-hidden="true">↓</span>
            </a>
          </div>

          <aside className="profileCard" aria-label="Profile and contact">
            <div
              className="photoPlaceholder"
              role="img"
              aria-label="Placeholder for your portrait photograph"
            >
              <span className="photoInitials">YN</span>
              <span className="photoLabel">Add your photo</span>
            </div>

            <div className="contactCompact" id="contact">
              <div>
                <p className="contactLabel">Address</p>
                <a
                  href="https://maps.google.com/?q=University"
                  target="_blank"
                  rel="noreferrer"
                >
                  Department Name, University Name
                  <br />
                  Street, City, Country
                </a>
              </div>
              <div>
                <p className="contactLabel">Email</p>
                <a href="mailto:your.name@university.edu">
                  your.name@university.edu
                </a>
              </div>
              <div className="profileLinks" aria-label="Research profiles">
                <a
                  href="https://scholar.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar ↗
                </a>
                <a href="https://orcid.org/" target="_blank" rel="noreferrer">
                  ORCID ↗
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="contentSection introSection" id="about">
          <div className="sectionHeading">
            <p className="sectionNumber">01</p>
            <h2>Introduction</h2>
          </div>
          <div className="sectionBody introCopy">
            <p className="lead">
              I am a researcher and educator interested in questions that
              matter both within the university and beyond it.
            </p>
            <p>
              My work combines careful analysis with open collaboration. I aim
              to produce research that is rigorous, clearly communicated, and
              genuinely useful to other scholars, students, and practitioners.
              This short introduction can be replaced with your biography,
              research interests, current position, and academic background.
            </p>
            <p>
              Alongside my research, I enjoy helping students develop focused
              questions, build confidence in their methods, and communicate
              their findings with precision.
            </p>
          </div>
        </section>

        <section className="contentSection" id="publications">
          <div className="sectionHeading">
            <p className="sectionNumber">02</p>
            <h2>Selected publications</h2>
          </div>
          <div className="sectionBody">
            <div className="publicationList">
              {publications.map((publication) => (
                <article className="publication" key={publication.year + publication.title}>
                  <p className="publicationYear">{publication.year}</p>
                  <div>
                    <h3>{publication.title}</h3>
                    <p>{publication.authors}</p>
                    <p className="publicationVenue">{publication.venue}</p>
                  </div>
                  <a
                    className="publicationLink"
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open link for ${publication.title}`}
                  >
                    DOI <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
            <a
              className="textLink allPublications"
              href="https://scholar.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              View all publications on Google Scholar ↗
            </a>
          </div>
        </section>

        <section className="contentSection supervisionSection" id="supervision">
          <div className="sectionHeading">
            <p className="sectionNumber">03</p>
            <h2>Master’s students &amp; supervision</h2>
          </div>
          <div className="sectionBody">
            <p className="lead supervisionLead">
              I supervise master’s work that is well scoped, methodologically
              sound, and connected to a meaningful question.
            </p>

            <div className="studentList" aria-label="Current and recent students">
              {students.map((student, index) => (
                <article className="student" key={`${student.name}-${index}`}>
                  <div>
                    <h3>{student.name}</h3>
                    <p>{student.topic}</p>
                  </div>
                  <p className="studentPeriod">{student.period}</p>
                </article>
              ))}
            </div>

            <div className="supervisionNote">
              <h3>Interested in working together?</h3>
              <p>
                Please email a short introduction, your programme, and one or
                two possible research questions. I am especially happy to hear
                from students who are curious, prepared to revise their ideas,
                and comfortable working independently between meetings.
              </p>
              <a className="contactButton" href="mailto:your.name@university.edu">
                Email about supervision <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Your Name</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
