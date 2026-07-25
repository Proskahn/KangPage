const publications = [
  {
    title: "A Review of Model-Based Optimization for Hydrogen Refueling Stations",
    authors:
      "Zhuang Kang, Jacob de Nobel, Michael Emmerich, Thomas Bäck, and Yingjie Fan",
    venue:
      "Advances in Evolutionary and Deterministic Methods for Design, Optimization and Control, Springer, 2026",
    href: "https://link.springer.com/chapter/10.1007/978-3-032-21893-3_17",
  },
];

const formerStudents = [
  {
    name: "Dunxiang Lu",
    topic:
      "Energy Management for Hydrogen Refueling Stations: A Synergistic Approach of Cascade Compression Architecture and Deep Reinforcement Learning",
  },
  {
    name: "Di Xie",
    topic:
      "Deep Reinforcement Learning vs. Engineering Rules for Hybrid EV/FCEV Charging Hub Scheduling with Cascade Hydrogen Storage",
  },
];

const currentStudents = [
  {
    name: "Dongjie Chen",
    topic:
      "Incremental Techno-Economic Analysis of RL-Controlled Cascade Compression-Storage in Hydrogen Refueling Stations",
  },
];

export default function Home() {
  return (
    <main id="top">
      <h1>Zhuang Kang</h1>

      <section className="profile" aria-label="Profile and contact information">
        <img
          className="profilePhoto"
          src="/ZhuangKang.jpg"
          alt="Zhuang Kang"
          width="4333"
          height="6500"
        />

        <div className="contact" id="contact">
          <p>
            <strong>Zhuang Kang</strong>
            <br />
            PhD Candidate in Computer Science
            <br />
            <a href="https://liacs.leidenuniv.nl/">
              Leiden Institute of Advanced Computer Science
            </a>
            <br />
            <a href="https://www.universiteitleiden.nl/en">Leiden University</a>
            <br />
            Einsteinweg 55
            <br />
            2333 CC Leiden, The Netherlands
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:z.kang@liacs.leidenuniv.nl">
              z.kang@liacs.leidenuniv.nl
            </a>
          </p>

          <p>
            <strong>Profiles:</strong>{" "}
            <a href="https://orcid.org/0009-0009-8694-1947">ORCID</a>,{" "}
            {/* <a href="#publications">publications</a> */}
          </p>
        </div>
      </section>

      <hr />

      <section id="recent-activities">
        <h2>Recent activities</h2>
        <hr />
        <ul>
          <li>
            Our review paper, “A Review of Model-Based Optimization for Hydrogen
            Refueling Stations,” was published by Springer in June 2026. {" "}
            <a href="https://link.springer.com/chapter/10.1007/978-3-032-21893-3_17">
              Link
            </a>
            .
          </li>
          <li>
            I present our work 'Simulation of AEM electroluzer with OpenFOAM and optimization' at WCCM ECCOMAS 2026, Munich.
          </li>
        </ul>
      </section>

      <hr />

      <section id="introduction">
        <h2>Introduction</h2>
        <hr />
        <p>
          I am Zhuang Kang (康庄), a PhD candidate in computer science at Leiden
          University, supervised by Yingjie Fan and Thomas Bäck. I also work with Michael Emmerich from
          University of Jyväskylä.
        </p>
        <p>
          I work on HyPro, a Dutch hydrogen research project, where my delieverable is 'a digital
          twin of electrolyzer'. My current plan is developing a high-fidelity simulation
          model of electrolyzers and then using multi-objective optimization to find its optimal design and control parameters.
        </p>
        <p>My research focuses on:</p>
        <ol>
          <li>
            simulation and black-box optimization of electrolyzers.
          </li>
          <li>optimal control of hydrogen energy systems.</li>

        </ol>
        <ul>
        </ul>
        <p> I have a background in mathematics and now work at the intersection of
          modeling and optimization of energy systems. Before joining Leiden Univerisity, I studied in Sichuan Univerisity for my bachelor, and Univerisity of 
          Münster for my master, both mathematics. Besides study, I also worked in ABB AG(Mannheim) Optimization&Control group.</p>
      </section>

      <hr />

      <section id="publications">
        <h2>Publications</h2>
        <hr />
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

        <h3>Completed master’s theses</h3>
        <ul>
          {formerStudents.map((student) => (
            <li key={student.name}>
              <strong>{student.name}:</strong> {student.topic}
            </li>
          ))}
        </ul>

        <h3>Current master’s students</h3>
        <ul>
          {currentStudents.map((student) => (
            <li key={student.name}>
              <strong>{student.name}:</strong> {student.topic}
            </li>
          ))}
        </ul>

        <h3>Prospective students</h3>
        <p>I welcome students interested in:</p>
        <ol>
          <li>optimal control and data-driven control of energy systems</li>
          <li>multiphysics simulation with OpenFOAM.</li>
          <li>Black-box optimization of electrolyzers.</li>
        </ol>
        <p>
          To get in touch, send a short {" "}
          <a href="mailto:z.kang@liacs.leidenuniv.nl">email</a> with your name,
           and preferred topic listed above. I will reply and arrange a
          meeting.
        </p>
        <p>
          Students have considerable freedom to develop their own research
          direction. For example, regarding the optimal control of energy systems, reinforcement learning, 
          model predictive control and lots of other methods can be explored. The choice of method depends on
          students' expertise and interest.
        </p>
        <p>
          I value open discussion about research goals. If you have concern regarding timelines,
          tuition fees and other practical matters, just talk to me.
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
