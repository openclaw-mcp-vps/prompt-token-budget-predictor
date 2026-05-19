export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict AI Prompt Costs<br />
          <span className="text-[#58a6ff]">Before You Run Expensive Workflows</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze token usage and estimate costs across GPT, Claude, and more — before execution.
          Set budget alerts and stop surprise bills dead in their tracks.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card surprises. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["GPT-4o & Claude 3.5", "Budget Alerts", "Multi-step Workflows", "Real-time Estimates", "Usage Analytics"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to control AI spend</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited workflow analyses",
              "Cost estimates for 10+ AI models",
              "Budget threshold alerts via email",
              "Token usage history & trends",
              "Prompt optimization suggestions",
              "API access for CI/CD pipelines"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which AI models are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support GPT-3.5, GPT-4, GPT-4o, Claude 3 Haiku/Sonnet/Opus, Claude 3.5 Sonnet, Gemini Pro, and more. Pricing is kept up-to-date automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the token prediction work?</h3>
            <p className="text-[#8b949e] text-sm">Paste your prompt templates and workflow steps. Our engine tokenizes them using each model's tokenizer, calculates input/output token counts, and multiplies by current per-token pricing to give you an accurate cost estimate before you hit the API.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I set alerts before my budget is exceeded?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Set daily, weekly, or monthly budget thresholds and receive email alerts when your predicted or actual usage approaches your limit — so you can act before costs spiral.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Prompt Token Budget Predictor. All rights reserved.
      </footer>
    </main>
  )
}
