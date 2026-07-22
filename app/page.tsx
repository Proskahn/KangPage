const publications = [
  {
    title: "Title of your most recent publication",
    authors: "Your Name and Co-author Name",
    venue: "Journal or Conference Name, 2026",
    href: "https://doi.org/",
  },
  {
    title: "A second publication title belongs here",
    authors: "Your Name and Collaborator Name",
    venue: "Journal or Conference Name, 2025",
    href: "https://doi.org/",
  },
  {
    title: "An earlier article, chapter, or working paper",
    authors: "Your Name",
    venue: "Publisher or Working Paper Series, 2024",
    href: "https://doi.org/",
  },
];

const students = [
  {
    name: "Student name",
    topic: "Master’s thesis topic",
    period: "2025–2026",
  },
  {
    name: "Student name",
    topic: "Master’s thesis topic",
    period: "2025–2026",
  },
  {
    name: "Student name",
    topic: "Master’s thesis topic",
    period: "2024–2025",
  },
];

export default function Home() {
  return (
    <main id="top">
      <h1>Homepage of Your Name</h1>

      <section className="profile" aria-label="Profile and contact information">
        <div
          className="photoPlaceholder"
          role="img"
          aria-label="Placeholder for your photograph"
        >
          Your photo
        </div>

        <div className="contact" id="contact">
          <p>
            <strong>Your Name</strong>
            <br />
            Professor / Researcher
            <br />
            <a href="https://www.example.edu/">Department Name</a>
            <br />
            <a href="https://www.example.edu/">University Name</a>
            <br />
            Street and building
            <br />
            Postal code, City, Country
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:your.name@university.edu">
              your.name@university.edu
            </a>
            <br />
            <strong>Address:</strong>{" "}
            <a href="https://maps.google.com/?q=University">
              view on map
            </a>
          </p>

          <p>
            <strong>Publications:</strong>{" "}
            <a href="https://scholar.google.com/">Google Scholar</a>,{" "}
            <a href="https://orcid.org/">ORCID</a>,{" "}
            <a href="#publications">selected publications below</a>
          </p>
        </div>

        <nav aria-label="Page sections">
          <ul>
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#publications">Publications</a>
            </li>
            <li>
              <a href="#supervision">Master’s students and supervision</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </section>

      <hr />

      <section id="introduction">
        <h2>Introduction</h2>
        <hr />
        <p>
          I am a researcher and educator interested in questions that matter
          both within the university and beyond it. My work combines careful
          analysis with open collaboration, with the aim of producing research
          that is rigorous, clearly communicated, and useful to other scholars,
          students, and practitioners.
        </p>
        <p>
          This text can be replaced with your biography, current position,
          research interests, and academic background.
        </p>
      </section>

      <hr />

      <section id="publications">
        <h2>Publications</h2>
        <hr />
        <p>
          A complete list of publications can be found on my{" "}
          <a href="https://scholar.google.com/">Google Scholar profile</a>.
        </p>
        <ol className="publicationList">
          {publications.map((publication) => (
            <li key={publication.title}>
              {publication.authors}. <strong>{publication.title}.</strong>{" "}
              <em>{publication.venue}.</em>{" "}
              <a href={publication.href}>[link]</a>
            </li>
          ))}
        </ol>
      </section>

      <hr />

      <section id="supervision">
        <h2>Master’s students and supervision</h2>
        <hr />
        <p>
          I supervise master’s work that is well scoped, methodologically sound,
          and connected to a meaningful research question.
        </p>

        <h3>Current and recent master’s students</h3>
        <ul>
          {students.map((student, index) => (
            <li key={`${student.name}-${index}`}>
              <strong>{student.name}</strong> ({student.period}). {student.topic}.
            </li>
          ))}
        </ul>

        <h3>Prospective students</h3>
        <p>
          If you are interested in working with me, please send a short
          introduction, the name of your programme, and one or two possible
          research questions by{" "}
          <a href="mailto:your.name@university.edu">email</a>.
        </p>
      </section>

      <hr />

      <footer>
        <p>
          Last updated July 2026 · <a href="#top">Back to top</a>
        </p>
      </footer>
    </main>
  );
}
