import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: "58%", label: "faster acceleration response", position: "stat-a" },
  { value: "23%", label: "lighter carbon architecture", position: "stat-b" },
  { value: "27%", label: "more aerodynamic efficiency", position: "stat-c" },
  { value: "40%", label: "greater high-speed stability", position: "stat-d" },
]

const features = [
  {
    number: "01",
    title: "Carbon Core",
    text: "A rigid, ultra-light monocoque engineered around the driver.",
  },
  {
    number: "02",
    title: "Active Aero",
    text: "Every surface redirects air to create control without drag.",
  },
  {
    number: "03",
    title: "Twin Turbo V8",
    text: "Instant response and relentless power across the rev range.",
  },
]

export default function App() {
  const root = useRef<HTMLDivElement>(null)
  const hero = useRef<HTMLElement>(null)
  const car = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.set("[data-intro]", { autoAlpha: 0, y: 22 })
      gsap.set("[data-stat]", { autoAlpha: 0, y: 18 })
      gsap.set(".performance-content", { autoAlpha: 0, y: 70 })
      gsap.set(".feature-card", { autoAlpha: 0, y: 40 })

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } })
      intro
        .to('[data-intro="eyebrow"]', { autoAlpha: 1, y: 0, duration: 0.7 })
        .to(
          '[data-intro="headline"]',
          { autoAlpha: 1, y: 0, duration: 1.15 },
          "-=0.4",
        )
        .to(
          '[data-intro="car"]',
          { autoAlpha: 1, y: 0, duration: 1.1 },
          "-=0.95",
        )
        .to(
          "[data-stat]",
          { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1 },
          "-=0.55",
        )
        .to(
          '[data-intro="scroll"]',
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.35",
        )

      const mm = gsap.matchMedia()
      mm.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (matchContext) => {
          const { desktop, reduceMotion } = matchContext.conditions!
          const distanceX = desktop
            ? () => window.innerWidth * 0.38
            : () => window.innerWidth * 0.22
          const distanceY = desktop
            ? () => -window.innerHeight * 0.34
            : () => -window.innerHeight * 0.29

          const scrollTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: hero.current,
              start: "top top",
              end: reduceMotion ? "+=100%" : "+=230%",
              pin: true,
              scrub: reduceMotion ? true : 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })

          scrollTimeline
            .to(
              ".hero-copy",
              {
                autoAlpha: 0,
                y: desktop ? -70 : -35,
                scale: 0.97,
                duration: 0.28,
              },
              0.06,
            )
            .to(
              "[data-stat]",
              { autoAlpha: 0, y: -25, stagger: 0.025, duration: 0.2 },
              0.11,
            )
            .to(".scroll-hint", { autoAlpha: 0, duration: 0.08 }, 0.02)
            .to(
              car.current,
              {
                x: distanceX,
                y: distanceY,
                rotation: desktop ? -9 : -6,
                scale: desktop ? 0.78 : 0.7,
                duration: 0.78,
              },
              0.04,
            )
            .to(
              ".car-glow",
              {
                x: distanceX,
                y: distanceY,
                scale: desktop ? 0.6 : 0.52,
                opacity: 0.4,
                duration: 0.7,
              },
              0.04,
            )
            .to(
              ".grid-floor",
              { opacity: 0, scale: 1.16, duration: 0.35 },
              0.12,
            )
            .to(
              ".hero-wash",
              { opacity: 0.7, scale: 1.5, duration: 0.55 },
              0.18,
            )
            .to(".performance-panel", { autoAlpha: 1, duration: 0.2 }, 0.38)
            .to(
              ".performance-content",
              { autoAlpha: 1, y: 0, duration: 0.28 },
              0.46,
            )
            .to(
              ".feature-card",
              { autoAlpha: 1, y: 0, stagger: 0.055, duration: 0.22 },
              0.57,
            )
            .to(
              ".performance-kicker",
              { letterSpacing: desktop ? "0.38em" : "0.24em", duration: 0.25 },
              0.56,
            )

          return () => scrollTimeline.scrollTrigger?.kill()
        },
      )

      const refresh = () => ScrollTrigger.refresh()
      if (car.current?.complete) refresh()
      else car.current?.addEventListener("load", refresh, { once: true })
      document.fonts?.ready.then(refresh)

      return () => mm.revert()
    }, root)

    return () => context.revert()
  }, [])

  return (
    <div ref={root} className="site-shell">
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <div className="brand-mark" aria-label="ItzFizz">
          IF<span>.</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.28em] uppercase text-white/55">
          <span className="hidden sm:inline">McLaren 720S</span>
          <span className="inline-block size-1 rounded-full bg-orange-500" />
          <span>Explore</span>
        </div>
      </header>

      <main>
        <section
          ref={hero}
          className="hero-stage"
          aria-label="McLaren performance introduction"
        >
          <div className="performance-panel">
            <div className="performance-orbit" />
            <div className="performance-content">
              <div className="performance-kicker">PURE PERFORMANCE</div>
              <div className="performance-title">
                Engineered
                <br />
                <span>to Dominate</span>
              </div>
              <p className="performance-lede">
                Every gram, curve and combustion cycle shaped around one
                purpose: absolute performance.
              </p>
              <div className="feature-grid">
                {features.map((feature) => (
                  <article className="feature-card" key={feature.number}>
                    <div className="feature-number">{feature.number}</div>
                    <div className="feature-line" />
                    <div className="feature-title">{feature.title}</div>
                    <p>{feature.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-wash" />
          <div className="grid-floor" />
          <div className="hero-copy">
            <div data-intro="eyebrow" className="hero-eyebrow">
              A new benchmark in motion
            </div>
            <div
              data-intro="headline"
              className="hero-headline"
              aria-label="Welcome ItzFizz"
            >
              W E L C O M E I T Z F I Z Z
            </div>
          </div>

          {stats.map((stat) => (
            <div data-stat className={`stat ${stat.position}`} key={stat.value}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-rule" />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}

          <div className="car-glow" />
          <img
            ref={car}
            data-intro="car"
            className="hero-car"
            src={`${import.meta.env.BASE_URL}assets/mclaren-top.png`}
            alt="McLaren 720S viewed from above"
          />

          <div data-intro="scroll" className="scroll-hint">
            <span>Scroll to drive</span>
            <div className="scroll-line">
              <i />
            </div>
          </div>
        </section>

        <section className="detail-section">
          <div className="detail-inner">
            <div className="detail-kicker">Born without compromise</div>
            <div className="detail-heading">
              Form follows
              <br />
              <span>velocity.</span>
            </div>
            <div className="detail-copy">
              <p>
                The 720S is shaped by the forces it masters. Its teardrop cabin,
                deep channels and active rear wing turn moving air into
                measurable advantage.
              </p>
              <div className="detail-metrics">
                <div>
                  <strong>2.8s</strong>
                  <span>0–100 km/h</span>
                </div>
                <div>
                  <strong>341</strong>
                  <span>km/h max speed</span>
                </div>
                <div>
                  <strong>720</strong>
                  <span>PS power output</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
