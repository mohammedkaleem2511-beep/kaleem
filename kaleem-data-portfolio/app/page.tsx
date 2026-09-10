 "use client";

import { useEffect, useRef, useState } from "react";
import { DataField } from "../components/DataField";
import { SmoothScroll } from "../components/SmoothScroll";

const projects = [
  {
    number: "01",
    title: "Revenue Leak Detective",
    category: "E-commerce profitability investigation",
    stack: "EXCEL / SQL / POWER BI",
    question: "Where is the business actually losing money?",
    description:
      "An investigation framework for tracing profitability leakage across orders, payments, returns, discounts, cancellations, shipping and marketing.",
    status: "FLAGSHIP CASE",
  },
  {
    number: "02",
    title: "Customer Signal Map",
    category: "Customer behaviour analysis",
    stack: "SQL / EXCEL / POWER BI",
    question: "Which customer patterns deserve attention?",
    description:
      "A reusable analytical story for segmentation, purchase behaviour, retention signals and KPI movement.",
    status: "CASE STUDY",
  },
  {
    number: "03",
    title: "Operations Pulse",
    category: "Operational KPI analysis",
    stack: "EXCEL / POWER BI",
    question: "Where is operational performance drifting?",
    description:
      "A dashboard concept connecting volume, fulfilment, exceptions and trend signals into a decision-ready view.",
    status: "CASE STUDY",
  },
];

const skills = [
  ["SQL", "Joins · aggregation · filtering · CTEs · window functions"],
  ["Microsoft Excel", "Data preparation · exploration · calculations · KPI analysis"],
  ["Power BI", "Data modelling · DAX · dashboards · interactive reporting"],
  ["Data Visualization", "Storytelling · annotation · hierarchy · decision-focused charts"],
  ["Business Analytics", "Questions · evidence · patterns · recommendations"],
  ["Digital Marketing", "Analytics · SEO · campaign thinking"],
];

export default function Home() {
  const [sound, setSound] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false, label: "" });
  const [reduced, setReduced] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);

    const move = (e: MouseEvent) => {
      setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      mq.removeEventListener?.("change", update);
    };
  }, []);

  const enter = (label: string) => setCursor((c) => ({ ...c, active: true, label }));
  const leave = () => setCursor((c) => ({ ...c, active: false, label: "" }));

  return (
    <SmoothScroll reduced={reduced}>
      <main className={reduced ? "reduced" : ""}>
        <div className="grain" aria-hidden="true" />
        <DataField reduced={reduced} />

        <div
          className={`cursor ${cursor.active ? "cursor-active" : ""}`}
          style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
          aria-hidden="true"
        >
          {cursor.label}
        </div>

        <header className="site-header">
          <a className="brand mono" href="#top" aria-label="Mohammed Kaleem Uddin home">
            MKU<span>/</span>01
          </a>
          <nav aria-label="Primary navigation">
            <a href="#work" onMouseEnter={() => enter("WORK")} onMouseLeave={leave}>WORK</a>
            <a href="#about" onMouseEnter={() => enter("ABOUT")} onMouseLeave={leave}>ABOUT</a>
            <a href="#experiments" onMouseEnter={() => enter("EXPERIMENTS")} onMouseLeave={leave}>EXPERIMENTS</a>
            <a href="#contact" onMouseEnter={() => enter("LET’S TALK")} onMouseLeave={leave}>CONTACT</a>
            <a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer"
               onMouseEnter={() => enter("OPEN ↗")} onMouseLeave={leave}>RESUME ↗</a>
          </nav>
        </header>

        <div className="recruiter-rail mono" aria-label="Recruiter quick navigation">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">RESUME</a>
          <a href="#contact">CONTACT</a>
        </div>

        <section id="top" className="hero section">
          <div className="hero-meta mono">
            <span>SYSTEM / 01</span>
            <span>HYDERABAD · INDIA</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow mono">SIGNAL DETECTED</p>
            <h1><span>I FIND</span><span>THE SIGNAL</span><span>INSIDE THE NOISE.</span></h1>
            <p className="hero-name">Mohammed Kaleem Uddin</p>
            <p className="hero-role">Data Analyst / Digital Creative</p>
            <p className="hero-value">Transforms messy business data into clear, decision-ready insights.</p>
            <div className="hero-actions">
              <a className="button magnetic" href="#work" onMouseEnter={() => enter("VIEW")} onMouseLeave={leave}>VIEW SELECTED WORK <b>→</b></a>
              <a className="text-link mono" href="/resume.pdf" target="_blank" rel="noreferrer">DOWNLOAD RESUME ↗</a>
            </div>
          </div>
          <div className="hero-bottom mono">
            <span>EXCEL · SQL · POWER BI</span>
            <span>SCROLL TO INVESTIGATE ↓</span>
          </div>
        </section>

        <section className="statement section">
          <div className="split-word" aria-label="FIND THE SIGNAL">
            <span>FIND THE</span>
            <span>SIGNAL</span>
          </div>
          <div className="chapter mono">01 / INVESTIGATION</div>
          <p className="statement-copy">Raw information becomes useful when the right question turns noise into a pattern.</p>
        </section>

        <section id="work" className="section work-section">
          <div className="section-head">
            <p className="eyebrow mono">02 / THE INVESTIGATION ROOM</p>
            <h2>Work that starts<br />with a question.</h2>
          </div>

          <article className="featured-case">
            <div className="case-number mono">01</div>
            <div className="case-main">
              <p className="mono accent-label">FLAGSHIP INVESTIGATION</p>
              <h3>REVENUE<br /><em>LEAK</em> DETECTIVE</h3>
              <p className="case-category">E-commerce profitability investigation</p>
              <div className="case-grid">
                <div><span className="mono label">QUESTION</span><p>Where is the business actually losing money?</p></div>
                <div><span className="mono label">STACK</span><p>Excel · SQL · Power BI</p></div>
                <div><span className="mono label">OUTPUT</span><p>Interactive profitability investigation dashboard.</p></div>
              </div>
              <a className="case-cta" href="#case-study">VIEW CASE STUDY <span>→</span></a>
            </div>
            <div className="case-visual" aria-label="Decorative analytical visualization">
              <div className="axis mono">PROFITABILITY / 01</div>
              <div className="chart">
                <div className="chart-line line-a" />
                <div className="chart-line line-b" />
                <div className="chart-line line-c" />
                <i className="node n1" /><i className="node n2" /><i className="node n3" /><i className="node n4" />
              </div>
              <div className="chart-note mono">RETURNS / DISCOUNTS / CANCELLATIONS</div>
            </div>
          </article>

          <div className="project-stack">
            {projects.slice(1).map((p) => (
              <article className="project-sheet" key={p.number}>
                <div className="project-index mono">{p.number}</div>
                <div>
                  <p className="mono">{p.status}</p>
                  <h3>{p.title}</h3>
                  <p className="project-category">{p.category}</p>
                </div>
                <div>
                  <span className="mono label">QUESTION</span>
                  <p>{p.question}</p>
                </div>
                <div>
                  <span className="mono label">STACK</span>
                  <p>{p.stack}</p>
                </div>
                <div className="project-art" aria-hidden="true">
                  <span /><span /><span /><span /><span />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="case-study" className="case-study section">
          <div className="case-study-intro">
            <p className="eyebrow mono">CASE STUDY / 01</p>
            <h2>Revenue Leak<br /><em>Detective</em></h2>
            <p>Revenue can grow while profitability quietly deteriorates. This investigation follows the evidence instead of assuming the answer.</p>
          </div>
          <div className="investigation-grid">
            {[
              ["01", "THE PROBLEM", "Revenue is growing. Profitability is leaking."],
              ["02", "THE DATA", "Orders · Payments · Returns · Discounts · Cancellations · Shipping · Marketing"],
              ["03", "THE APPROACH", "Clean → model → investigate → visualize → explain"],
              ["04", "THE FINDINGS", "Metrics remain editable until the underlying analysis is complete."],
              ["05", "THE BUSINESS IMPACT", "The analysis is designed to support clearer commercial decisions."],
              ["06", "THE RECOMMENDATION", "Use evidence to prioritize the highest-value leakage sources."],
            ].map(([n, title, body]) => (
              <div className="investigation-step" key={n}>
                <span className="mono">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <div className="tool-strip mono">EXCEL / SQL / POWER BI / DATA VISUALIZATION</div>
        </section>

        <section id="about" className="about section">
          <div className="about-title">
            <p className="eyebrow mono">03 / THE PERSON</p>
            <h2>WHO IS<br />BEHIND<br /><em>THE ANALYSIS?</em></h2>
          </div>
          <div className="about-copy">
            <p className="lead">Mohammed Kaleem Uddin</p>
            <p className="role-line mono">DATA ANALYST</p>
            <p>I’m building a career around questions, evidence, patterns and useful decisions. My current core stack is Excel, SQL and Power BI, with a focus on business analysis and visual storytelling.</p>
            <div className="about-facts">
              <div><span className="mono">POSITION</span><strong>Data Analyst</strong></div>
              <div><span className="mono">FOCUS</span><strong>Business Analytics</strong></div>
              <div><span className="mono">STACK</span><strong>Excel · SQL · Power BI</strong></div>
              <div><span className="mono">APPROACH</span><strong>Question → Evidence → Insight</strong></div>
            </div>
          </div>
        </section>

        <section className="skills section">
          <div className="section-head">
            <p className="eyebrow mono">04 / SKILL CONSTELLATION</p>
            <h2>Skills should point<br />to evidence.</h2>
          </div>
          <div className="skill-grid">
            {skills.map(([name, desc], i) => (
              <div className="skill-node" key={name}>
                <span className="node-number mono">0{i+1}</span>
                <div className="skill-dot" />
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experiments" className="experiments section">
          <div className="section-head">
            <p className="eyebrow mono">05 / EXPERIMENTS</p>
            <h2>Small systems.<br />Curious questions.</h2>
          </div>
          <div className="physics-lite" aria-label="Interactive skill tags">
            {["SQL", "EXCEL", "POWER BI", "SEO", "ANALYTICS", "DESIGN"].map((tag, i) => (
              <span key={tag} style={{ ["--i" as string]: i }} tabIndex={0}>{tag}</span>
            ))}
          </div>
          <p className="experiment-note">A lightweight playground for the tools and ideas behind the work.</p>
        </section>

        <section className="experience section">
          <div className="section-head">
            <p className="eyebrow mono">06 / EXPERIENCE</p>
            <h2>Career, as a<br />timeline.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item"><span className="mono">01</span><div><h3>GO DIGITAL ADS</h3><p className="mono">Digital Marketing Intern</p><p>Editable role description — replace with verified responsibilities and dates.</p></div></div>
            <div className="timeline-item"><span className="mono">02</span><div><h3>SANJAY JEWELLERS</h3><p className="mono">Data Entry Operator</p><p>Editable role description — replace with verified responsibilities and dates.</p></div></div>
          </div>
        </section>

        <section id="contact" className="contact section" ref={contactRef}>
          <div className="contact-top mono">07 / ARRIVAL</div>
          <h2>HAVE A<br /><em>QUESTION?</em></h2>
          <p>Let’s build something useful.</p>
          <div className="contact-grid">
            <div>
              <span className="mono label">DIRECT</span>
              <a className="big-email" href="mailto:your.email@example.com">your.email@example.com</a>
              <div className="socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">CONNECT ON LINKEDIN ↗</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">VIEW CODE ↗</a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">DOWNLOAD RESUME ↗</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Connect this form to your email provider or backend before launch."); }}>
              <label>Name<input required name="name" /></label>
              <label>Email<input required type="email" name="email" /></label>
              <label>Message<textarea required name="message" rows={4} /></label>
              <button type="submit">SEND MESSAGE <span>→</span></button>
            </form>
          </div>
          <footer className="footer mono">
            <span>NOISE BECOMES SIGNAL.</span>
            <span>END / BEGIN AGAIN ↑</span>
            <button onClick={() => setSound(!sound)} aria-pressed={sound}>SOUND / {sound ? "ON" : "OFF"}</button>
          </footer>
        </section>
      </main>
    </SmoothScroll>
  );
}