import KanbanHero from "./components/KanbanHero";

const features = [
  {
    title: "One board per client",
    body: "Every project gets its own board, its own timeline, and its own share link — no digging through a shared inbox to find where things stand.",
  },
  {
    title: "Approvals that don't stall in email",
    body: "Clients comment and approve directly on the file. You get a notification, not a forwarded thread with four people cc'd.",
  },
  {
    title: "Time tracking your team won't dodge",
    body: "A single click starts the timer on whatever card is open. Reports roll up by client automatically at the end of the month.",
  },
  {
    title: "Retainers that track themselves",
    body: "Set a monthly hour cap per client and Fieldwork flags it at 80% used, before you're the one explaining the overage.",
  },
];

const steps = [
  { name: "Set up the board", detail: "Import tasks from a spreadsheet or start from one of our agency templates." },
  { name: "Invite the client", detail: "They see only their project, with a view built for someone outside your team." },
  { name: "Work moves, they watch", detail: "No status-update meetings — the board is the status update." },
];

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      {/* Header */}
      <header className="border-b border-line sticky top-0 bg-paper/90 backdrop-blur-sm z-20">
        <div className="max-w-wrap mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-semibold text-lg">Fieldwork</span>
          <nav className="hidden sm:flex gap-8 text-sm text-ink-soft">
            <a href="#features" className="hover:text-ink transition-colors">Features</a>
            <a href="#workflow" className="hover:text-ink transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
          </nav>
          <a
            href="#pricing"
            className="text-sm font-medium bg-ink text-paper px-4 py-2 rounded-md hover:bg-ink-soft transition-colors"
          >
            Start free trial
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-wrap mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <h1 className="font-display font-semibold text-[2.6rem] sm:text-[3.2rem] leading-[1.08] tracking-tight">
            Client work has a home that isn't your inbox.
          </h1>
          <p className="text-ink-soft text-lg mt-6 max-w-[46ch]">
            Fieldwork is the project board built for agencies: one place for tasks, approvals, and hours — that clients actually check instead of emailing you for an update.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <a
              href="#pricing"
              className="bg-signal text-white font-medium px-6 py-3.5 rounded-md hover:bg-signal/90 transition-colors"
            >
              Start free trial
            </a>
            <a href="#workflow" className="text-sm font-medium border-b border-ink pb-0.5">
              See how it works
            </a>
          </div>
          <p className="text-xs text-ink-soft mt-6">No card required · 14 days · cancel anytime</p>
        </div>
        <KanbanHero />
      </section>

      {/* Stat strip */}
      <section className="bg-ink text-paper">
        <div className="max-w-wrap mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ["340+", "agencies on Fieldwork"],
            ["9,200", "client boards live"],
            ["2.1hrs", "avg. saved per week, per PM"],
            ["4 min", "average client onboarding time"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-display text-2xl font-semibold">{stat}</p>
              <p className="text-xs text-paper/60 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-wrap mx-auto px-6 py-24">
        <div className="max-w-[520px] mb-14">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">
            Everything a project touches, minus the extra tools.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-line rounded-xl overflow-hidden">
          {features.map((f) => (
            <div key={f.title} className="bg-paper p-8">
              <h3 className="font-display font-semibold text-lg">{f.title}</h3>
              <p className="text-ink-soft text-sm mt-3 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow — genuine sequence, numbered appropriately */}
      <section id="workflow" className="bg-paper-dim">
        <div className="max-w-wrap mx-auto px-6 py-24">
          <div className="max-w-[520px] mb-14">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">
              From kickoff to client view in one afternoon.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={step.name} className="relative pl-8">
                <span className="absolute left-0 top-1 font-display text-signal font-semibold">
                  {i + 1}
                </span>
                <h3 className="font-medium">{step.name}</h3>
                <p className="text-ink-soft text-sm mt-2 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-wrap mx-auto px-6 py-24">
        <blockquote className="max-w-[640px]">
          <p className="font-display text-2xl sm:text-3xl leading-snug">
            We dropped two tools and a shared spreadsheet the week we switched. Clients stopped asking "where are we at" because they could just look.
          </p>
          <footer className="mt-6 text-sm text-ink-soft">
            Priya Nair, Studio Director at Alder Studio
          </footer>
        </blockquote>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-ink text-paper">
        <div className="max-w-wrap mx-auto px-6 py-24">
          <div className="max-w-[520px] mb-14">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">
              Priced for how agencies actually grow.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "Studio", price: "$29", detail: "per seat / month", items: ["Up to 5 client boards", "Time tracking", "Email support"] },
              { name: "Agency", price: "$49", detail: "per seat / month", items: ["Unlimited client boards", "Retainer alerts", "Priority support"], highlight: true },
              { name: "Network", price: "Talk to us", detail: "for 25+ seats", items: ["Multi-team workspaces", "SSO & audit log", "Dedicated onboarding"] },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-7 border ${
                  plan.highlight ? "border-signal bg-ink-soft" : "border-white/10 bg-ink-soft/40"
                }`}
              >
                <h3 className="font-display font-semibold text-lg">{plan.name}</h3>
                <p className="mt-4">
                  <span className="font-display text-3xl font-semibold">{plan.price}</span>
                  <span className="text-paper/50 text-sm ml-1.5">{plan.detail}</span>
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-paper/75">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-wrap mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-soft">
        <span>Fieldwork, Inc.</span>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-ink transition-colors">Features</a>
          <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
        </div>
      </footer>
    </main>
  );
}
