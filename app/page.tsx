'use client'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // ── NAV SCROLL ─────────────────────────────────
      ScrollTrigger.create({
        start: 60,
        onEnter: () => document.getElementById('nav')?.classList.add('scrolled'),
        onLeaveBack: () => document.getElementById('nav')?.classList.remove('scrolled'),
      })

      // ── AMBIENT DOTS IN HERO ────────────────────────
      ;(function () {
        const bg = document.getElementById('hero-bg')
        if (!bg) return
        const positions: [number, number][] = [
          [15, 20], [80, 15], [35, 70], [65, 45], [90, 75],
          [20, 85], [55, 30], [75, 60], [40, 50], [10, 55],
        ]
        positions.forEach(([x, y]) => {
          const dot = document.createElement('div')
          dot.className = 'hero-bg-dot'
          const size = Math.random() * 2 + 1
          dot.style.cssText = `width:${size}px;height:${size}px;left:${x}%;top:${y}%`
          bg.appendChild(dot)
          gsap.to(dot, {
            opacity: Math.random() * 0.4 + 0.1,
            duration: Math.random() * 2 + 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 2,
          })
        })
      })()

      // ── HERO ENTRANCE ───────────────────────────────
      gsap
        .timeline({ delay: 0.2 })
        .from('#hstatus', { opacity: 0, y: 16, duration: 0.5, ease: 'power2.out' })
        .from('#hh1', { opacity: 0, y: 40, duration: 1, ease: 'power3.out' }, '-=0.2')
        .from('#hbottom', { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' }, '-=0.5')

      // ── SCROLL REVEALS ──────────────────────────────
      gsap.utils.toArray<Element>('.reveal').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            delay: (i % 3) * 0.08,
            scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
          }
        )
      })

      // ── WORK CARDS STAGGER ──────────────────────────
      gsap.utils.toArray<Element>('.work-grid > *').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            delay: i * 0.12,
            scrollTrigger: { trigger: '.work-grid', start: 'top 80%', once: true },
          }
        )
      })
    }
    init()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav id="nav">
        <div className="nname cab">Lolu<span>.</span></div>
        <a href="#contact" className="nav-cta">Get in touch</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        {/* Ambient dots — positioned by JS */}
        <div className="hero-bg" id="hero-bg"></div>

        <div style={{position:'relative',zIndex:1,maxWidth:'1300px',width:'100%'}}>
          <div className="hero-status" id="hstatus">
            <span className="status-dot"></span>
            Available for new projects · Lagos, Nigeria
          </div>
          <h1 className="hero-h1" id="hh1">I make startups look like they raised a <span className="gold">Series A.</span></h1>
          <div className="hero-bottom" id="hbottom">
            <p className="hero-sub">Senior Frontend Engineer based in Lagos. I build <strong>high-converting landing pages</strong> and <strong>product sites</strong> for Nigerian founders — delivered in <strong>72 hours</strong>, guaranteed.</p>
            <div className="hero-actions">
              <a href="#work" className="btn-ghost">See the work</a>
              <a href="#contact" className="btn-primary">Let&apos;s talk →</a>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="work-section" id="work">
        <div className="work-inner">
          <div className="section-head reveal">
            <div className="section-label">Selected work</div>
            <div className="section-sub">Every site below was designed and built from scratch. Open any to see it live.</div>
          </div>

          <div className="work-grid">

            {/* ZELA CARD */}
            <div className="card-zela reveal">
              <div className="cz-bg">
                <svg viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                  <line x1="40" y1="180" x2="160" y2="240" stroke="#3B82F6" strokeWidth=".5" strokeDasharray="4 8" opacity=".6"/>
                  <line x1="160" y1="240" x2="320" y2="200" stroke="#3B82F6" strokeWidth=".5" strokeDasharray="4 8" opacity=".4"/>
                  <line x1="40" y1="180" x2="240" y2="320" stroke="#3B82F6" strokeWidth=".5" strokeDasharray="4 8" opacity=".3"/>
                  <line x1="160" y1="240" x2="240" y2="320" stroke="#3B82F6" strokeWidth=".5" strokeDasharray="4 8" opacity=".5"/>
                  <line x1="320" y1="200" x2="360" y2="380" stroke="#3B82F6" strokeWidth=".5" strokeDasharray="4 8" opacity=".3"/>
                  <circle cx="40" cy="180" r="4" fill="#F59E0B" opacity=".8"/>
                  <circle cx="40" cy="180" r="10" fill="none" stroke="#F59E0B" strokeWidth=".5" opacity=".3"/>
                  <circle cx="160" cy="240" r="5" fill="#F59E0B" opacity=".9"/>
                  <circle cx="160" cy="240" r="12" fill="none" stroke="#F59E0B" strokeWidth=".5" opacity=".25"/>
                  <circle cx="320" cy="200" r="4" fill="#F59E0B" opacity=".7"/>
                  <circle cx="240" cy="320" r="4.5" fill="#F59E0B" opacity=".6"/>
                  <circle cx="360" cy="380" r="3.5" fill="#F59E0B" opacity=".5"/>
                </svg>
              </div>
              <div className="cz-content">
                <div>
                  <span className="cz-tag">Fintech · Payments infrastructure</span>
                </div>
                <div>
                  <div className="cz-name">Zela</div>
                  <div className="cz-desc">4-page product site with CSS mock UIs,<br />GSAP animations, and transfer anatomy section</div>
                  <div className="cz-meta">
                    <div className="cz-stack">
                      <span className="cz-pill">HTML/CSS</span>
                      <span className="cz-pill">GSAP</span>
                      <span className="cz-pill">Bricolage Grotesk</span>
                      <span className="cz-pill">IBM Plex Mono</span>
                    </div>
                    <a href="zela.html" target="_blank" className="card-link">Open site →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* STACKR CARD */}
            <div className="card-stackr reveal">
              <div className="cs-blob"></div>
              <div className="cs-content">
                <div>
                  <span className="cs-tag">Creator platform · Newsletter</span>
                </div>
                <div>
                  <div className="cs-name">Stackr.</div>
                  <div className="cs-desc">5-page product site with CSS app mockups,<br />interactive revenue calculator, and creator stories</div>
                  <div className="cs-meta">
                    <div className="cs-stack">
                      <span className="cs-pill">HTML/CSS</span>
                      <span className="cs-pill">GSAP</span>
                      <span className="cs-pill">Fraunces</span>
                      <span className="cs-pill">Cabinet Grotesk</span>
                    </div>
                    <a href="stackr.html" target="_blank" className="card-link-dark">Open site →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* ROSTR CARD */}
            <div
              style={{background:'#F8F6F3',border:'1px solid #E4E0D8',borderRadius:'var(--rl)',overflow:'hidden',minHeight:'480px',display:'flex',flexDirection:'column',position:'relative',transition:'transform .3s,border-color .3s',cursor:'pointer'}}
              className="reveal"
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.borderColor = '#FF6B4A' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = '#E4E0D8' }}
            >
              {/* Subtle grid lines */}
              <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,backgroundImage:'linear-gradient(rgba(13,27,42,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(13,27,42,.04) 1px,transparent 1px)',backgroundSize:'32px 32px',pointerEvents:'none'}}></div>
              <div style={{position:'relative',zIndex:1,padding:'2rem',display:'flex',flexDirection:'column',height:'100%'}}>
                <div>
                  <span style={{fontFamily:'\'IBM Plex Mono\',monospace',fontSize:'.62rem',color:'#FF6B4A',background:'rgba(255,107,74,.08)',border:'1px solid rgba(255,107,74,.22)',padding:'.2rem .65rem',borderRadius:'4px',display:'inline-block',marginBottom:'auto'}}>HR tech · Employer of Record</span>
                </div>
                <div style={{marginTop:'auto'}}>
                  <div style={{fontFamily:'\'Satoshi\',sans-serif',fontSize:'4rem',fontWeight:900,color:'#0D1B2A',letterSpacing:'-2px',lineHeight:1,margin:'1.5rem 0 .5rem'}}>Rostr<span style={{color:'#FF6B4A'}}>.</span></div>
                  <div style={{fontSize:'.72rem',color:'#6B7A8D',marginBottom:'1.5rem',lineHeight:1.5}}>Single-page product site with<br />hiring pipeline mockup and EOR positioning</div>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',gap:'.4rem',flexWrap:'wrap'}}>
                      <span style={{fontSize:'.6rem',color:'#B0BAC6',background:'rgba(13,27,42,.04)',border:'1px solid #E4E0D8',padding:'.15rem .5rem',borderRadius:'3px'}}>Satoshi</span>
                      <span style={{fontSize:'.6rem',color:'#B0BAC6',background:'rgba(13,27,42,.04)',border:'1px solid #E4E0D8',padding:'.15rem .5rem',borderRadius:'3px'}}>GSAP</span>
                      <span style={{fontSize:'.6rem',color:'#B0BAC6',background:'rgba(13,27,42,.04)',border:'1px solid #E4E0D8',padding:'.15rem .5rem',borderRadius:'3px'}}>IBM Plex Mono</span>
                    </div>
                    <a
                      href="rostr.html"
                      target="_blank"
                      style={{fontWeight:700,fontSize:'.78rem',color:'#FF6B4A',display:'flex',alignItems:'center',gap:'.35rem',transition:'gap .2s'}}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '.6rem' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '.35rem' }}
                    >Open site →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* ADD MORE */}
            <div
              className="card-add reveal"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
            >
              <div className="add-icon">+</div>
              <div className="add-title">Your project here</div>
              <div className="add-sub">Got a product that needs to convert? Let&apos;s build it together.</div>
              <div className="add-price">Starting from ₦150,000</div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="services-inner">
          <div className="services-left reveal">
            <h2>What I <em>build.</em></h2>
            <p style={{marginBottom:'1.25rem'}}>Six years building fintech, banking, and product platforms. I know what converts — and what doesn&apos;t.</p>
            <a href="#contact" className="btn-primary" style={{fontSize:'.9rem',padding:'.75rem 1.75rem'}}>Let&apos;s work together →</a>
          </div>
          <div className="services-right">
            <div className="service-item reveal">
              <div>
                <div className="service-name">Landing Page</div>
                <div className="service-desc">Single, high-converting page. Hero, features, social proof, CTA. Fully responsive. Perfect for product launches and waitlists.</div>
              </div>
              <div>
                <div className="service-price">₦150k</div>
                <div className="service-turnaround">72 hours</div>
              </div>
            </div>
            <div className="service-item reveal">
              <div>
                <div className="service-name">Product Site</div>
                <div className="service-desc">3–5 pages. Home, product, pricing, about. Full design system, GSAP animations, mobile-first. Like Zela or Stackr above.</div>
              </div>
              <div>
                <div className="service-price">₦350k</div>
                <div className="service-turnaround">5–7 days</div>
              </div>
            </div>
            <div className="service-item reveal">
              <div>
                <div className="service-name">Frontend Audit</div>
                <div className="service-desc">Loom walkthrough of your existing site — what&apos;s killing conversions, what to fix, and how. With a written report and priority list.</div>
              </div>
              <div>
                <div className="service-price">₦80k</div>
                <div className="service-turnaround">48 hours</div>
              </div>
            </div>
            <div className="service-item reveal">
              <div>
                <div className="service-name">Design to Code</div>
                <div className="service-desc">You have Figma designs. I build them — pixel-perfect, responsive, production-ready HTML/CSS or React components.</div>
              </div>
              <div>
                <div className="service-price">₦200k+</div>
                <div className="service-turnaround">From 72 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <div className="about-strip">
        <div className="about-inner">
          <div className="about-left reveal">
            <div className="about-label">Background</div>
            <h2>6 years building products people actually use.</h2>
            <p style={{marginBottom:'.75rem'}}>Senior Frontend Engineer with deep roots in fintech and banking. Five years at FCMB building internal platforms for one of Nigeria&apos;s largest banks. Led frontend architecture on a white-label sportsbook engine.</p>
            <p>I bring a designer&apos;s eye and an engineer&apos;s precision. I own products end-to-end — from the first wireframe to the Vercel deploy.</p>
          </div>
          <div className="about-right">
            <div className="about-stat reveal">
              <div className="astat-num">6+</div>
              <div className="astat-info">
                <div className="astat-label">Years of experience</div>
                <div className="astat-sub">Frontend, fullstack, and UI/UX across fintech, banking, and sports platforms</div>
              </div>
            </div>
            <div className="about-stat reveal">
              <div className="astat-num">5</div>
              <div className="astat-info">
                <div className="astat-label">Years at FCMB</div>
                <div className="astat-sub">Building internal banking platforms, authentication systems, and real-time dashboards</div>
              </div>
            </div>
            <div className="about-stat reveal">
              <div className="astat-num">72h</div>
              <div className="astat-info">
                <div className="astat-label">Guaranteed delivery</div>
                <div className="astat-sub">Landing pages delivered in 72 hours — or I keep working until you&apos;re satisfied. No charge.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-blob"></div>
        <div className="contact-inner">
          <div className="contact-label"><span className="cline"></span>Get in touch<span className="cline"></span></div>
          <h2 className="reveal">Let&apos;s build something <em>great.</em></h2>
          <p className="contact-sub reveal">Send me a message on WhatsApp and tell me what you&apos;re building. I&apos;ll get back to you within 2 hours — usually much faster.</p>
          <div className="contact-methods reveal">
            <a
              href="https://wa.me/2348000000000?text=Hi%20Lolu%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              className="contact-btn contact-btn-wa"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp me
            </a>
            <a href="mailto:lolu@example.com" className="contact-btn contact-btn-email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Send email
            </a>
            <a href="https://linkedin.com/in/loluadelore" target="_blank" className="contact-btn contact-btn-li">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
          <div className="contact-note reveal">Based in Lagos · Available globally · Usually responds in under 2 hours</div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-name">Lolu Adelore</div>
          <div className="footer-copy">© 2025 · Senior Frontend Engineer · Lagos, Nigeria</div>
          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
