import { useEffect, useRef, useState } from 'react'
import photo from './photo.jpg'

const EMAIL = 'amikagail@gmail.com'
const PHONE = '+63 908 418 6154'
const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion:reduce)').matches

const JOBS = [
  { org: 'Rockwell Land Corporation', role: 'Administrative Assistant', when: 'June 2026 – Present',
    text: 'Provides client service support for the Terreno South Property Management Office: assisting with monthly billing, maintaining records, addressing client concerns, coordinating with various teams and supporting daily operations.',
    tags: ['Billing', 'Records', 'Client service', 'Team coordination'] },
  { org: 'DPWH MIMAROPA Region', role: 'Administrative Assistant / Aide', when: 'July 2023 – May 2026',
    text: 'Assigned to the Finance Division. Facilitated budget consolidation reports and budget documents, and supported the preparation and monitoring of financial transactions in line with established policies and procedures.',
    tags: ['Budget reports', 'Financial transactions', 'Compliance', 'Data entry'] },
  { org: 'Agile Techfrontier Corporation', role: 'Sales Associate', when: 'February – June 2023',
    text: 'Assisted the Sales and Operations Manager, prepared costing and quotations for clients, and contacted suppliers to inquire about the items needed for each quotation.',
    tags: ['Quotations', 'Costing', 'Supplier outreach'] },
]
const CAPS = [
  ['Client support', ['Monthly billing support', 'Records management', 'Client concerns', 'Team coordination']],
  ['Finance', ['Budget consolidation', 'Financial reports', 'Budget monitoring', 'Error checking']],
  ['Documents', ['Data entry', 'Reports and memos', 'Compliance review', 'Confidential records']],
  ['Tools', ['Microsoft Office', 'Canva', 'Google Workspace', 'eBudget System', 'e-NGAS']],
]
const ACH = [
  ['Property management and client relations', 'Supported efficient property management through accurate billing, organized client records, responsive customer assistance and administrative coordination.'],
  ['Streamlined financial reporting', 'Implemented standardized procedures for preparing and submitting financial reports, reducing discrepancies. Led consolidation of budget and financial reports from District Engineering Offices.'],
  ['Budget and financial tracking', 'Helped the finance team monitor departmental budgets, identified errors and kept spending within approved limits.'],
  ['Data entry and document compliance', 'Managed large volumes of data confidentially. Prepared and reviewed reports and memos, ensuring 100% compliance with regulatory and internal policies.'],
]
const FAQ = [
  ['What does Amika do?', 'She is an administrative assistant with experience in property management support, finance and budget documents, and client service.'],
  ['What is her background?', 'She graduated cum laude with a BS in Business Administration, major in Marketing Management, from Batangas State University TNEU Lipa (2019–2023).'],
  ['Which tools does she use?', 'Microsoft Office, Google Workspace, Canva, and the government eBudget System and e-NGAS.'],
  ['Where is she based?', 'Lipa City, Batangas, Philippines.'],
  ['How can I reach her?', `Email ${EMAIL} or call ${PHONE}.`],
]
const ORGS = ['Rockwell Land Corporation', 'DPWH MIMAROPA Region', 'Agile Techfrontier Corporation', 'Batangas State University']

function Reveal({ children }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.1 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={'wrap rv' + (seen ? ' in' : '')}>{children}</div>
}

function Header() {
  const [theme, setTheme] = useState(null)
  useEffect(() => { if (theme) document.documentElement.dataset.theme = theme }, [theme])
  const toggle = () => setTheme((theme ? theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches) ? 'light' : 'dark')
  return (
    <header><div className="wrap">
      <a className="logo" href="#top"><i>✦</i>Amika Martija</a>
      <nav aria-label="Main">
        <a href="#work">Work</a><a href="#about">About</a><a href="#faq">FAQ</a>
        <a className="btn k s" href="#contact">Get in touch</a>
        <button className="icon" onClick={toggle} aria-label="Toggle light and dark theme">◐</button>
      </nav>
    </div></header>
  )
}

function Hero() {
  const stage = useRef(null)
  const move = (e) => {
    if (reduce) return
    const r = stage.current.getBoundingClientRect()
    stage.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(2))
    stage.current.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(2))
  }
  return (
    <div className="wrap hero">
      <div>
        <span className="pill"><b></b>Lipa City, Batangas, Philippines</span>
        <h1>Admin support that keeps budgets, records and clients on track.</h1>
        <p className="sub">I'm Amika Gail Martija, an administrative assistant with a cum laude business degree. I've supported property management, government finance and sales teams.</p>
        <div className="row"><a className="btn k" href="#contact">Get in touch</a><a className="btn" href="#work">View experience</a></div>
      </div>
      <div className="stage" ref={stage} onPointerMove={move}>
        <img className="photo" src={photo} alt="Portrait of Amika Gail Martija" width="380" height="475" />
        <div className="chip c1"><b>Cum Laude</b>BS Business Administration</div>
        <div className="chip c2"><b>100%</b>document compliance</div>
      </div>
    </div>
  )
}

function Logos() {
  const items = [...ORGS, ...ORGS, ...ORGS, ...ORGS]
  return (
    <div className="logos" aria-label="Organizations">
      <small>Experience across</small>
      <div className="mq" aria-hidden="true">{items.map((o, i) => <span className="w" key={i}>{o}</span>)}</div>
    </div>
  )
}

function Work() {
  const [i, setI] = useState(0)
  const j = JOBS[i]
  return (
    <section id="work"><Reveal>
      <h2>Reliable support, from the billing desk to budget reports.</h2>
      <p className="lead">I keep the details organized so teams can focus on their work.</p>
      <div className="caps">
        {CAPS.map(([t, l]) => <div key={t}><h3>{t}</h3><ul>{l.map((x) => <li key={x}>{x}</li>)}</ul></div>)}
      </div>
      <div className="work">
        <div className="tabs" role="tablist" aria-label="Work experience">
          {JOBS.map((x, k) => (
            <button key={x.org} role="tab" className="tab" aria-selected={k === i} onClick={() => setI(k)}>
              <b>{x.org}</b><span>{x.role} · {x.when}</span>
            </button>
          ))}
        </div>
        <div className="panel" key={i} role="tabpanel">
          <span className="when">{j.when}</span>
          <h3>{j.role}</h3><div className="org">{j.org}</div>
          <p>{j.text}</p>
          <div className="tags">{j.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        </div>
      </div>
    </Reveal></section>
  )
}

function Achievements() {
  const items = [...ACH, ...ACH]
  return (
    <section id="about" style={{ paddingTop: 0 }}>
      <Reveal><h2>Key achievements</h2></Reveal>
      <div className="ach"><div className="mq">{items.map(([t, d], k) => <div className="card" key={k}><h3>{t}</h3><p>{d}</p></div>)}</div></div>
      <Reveal>
        <div className="edu">
          <div><h3>Bachelor of Science in Business Administration</h3><p>Major in Marketing Management · Cum Laude</p></div>
          <p>Batangas State University TNEU Lipa · 2019–2023</p>
        </div>
      </Reveal>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq"><Reveal><div className="faqwrap">
      <div><h2>Questions, answered.</h2><p className="lead">A quick overview of who I am and how to reach me.</p></div>
      <div>
        {FAQ.map(([q, a], k) => (
          <div className="q" key={q} data-o={open === k}>
            <button aria-expanded={open === k} onClick={() => setOpen(open === k ? -1 : k)}>{q}<span className="pm">+</span></button>
            <div className="ans"><div><p>{a}</p></div></div>
          </div>
        ))}
      </div>
    </div></Reveal></section>
  )
}

function Contact() {
  const [label, setLabel] = useState('Copy email')
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setLabel('Copied') } catch { setLabel('Copy failed') }
    setTimeout(() => setLabel('Copy email'), 1800)
  }
  return (
    <section id="contact" style={{ paddingTop: 0 }}><Reveal><div className="cta">
      <h2>Let's work together.</h2>
      <p>Tell me what you need support with. I'll get back to you.</p>
      <div className="row">
        <a className="btn w" href={'mailto:' + EMAIL}>{EMAIL}</a>
        <a className="btn" href="tel:+639084186154">{PHONE}</a>
        <button className="btn" onClick={copy}>{label}</button>
      </div>
    </div></Reveal></section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top"><Hero /><Logos /><Work /><Achievements /><Faq /><Contact /></main>
      <div className="wrap"><footer><span>© {new Date().getFullYear()} Amika Gail B. Martija</span><span>Lipa City, Batangas, Philippines</span></footer></div>
    </>
  )
}
