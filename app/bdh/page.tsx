import Navbar from "../../components/Navbar";

export default function BDH() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      <Navbar />

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">

          <p className="text-cyan-400 tracking-[0.3em] text-sm">
            SYNAPSELAB / BDH
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Biological Data & Hypothesis
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl leading-relaxed">
            This section explains the biological motivation behind
            the SynapseLab simulation and separates established
            scientific evidence from the simplified assumptions
            used in our computational model.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-cyan-400 text-sm font-semibold">
                BIOLOGICAL BASIS
              </p>

              <h2 className="text-2xl font-semibold mt-2">
                Synaptic Plasticity
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Synaptic connections can change their strength in
                response to activity. This provides the biological
                motivation for representing learning through
                changing connection weights.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-cyan-400 text-sm font-semibold">
                MODEL ASSUMPTION
              </p>

              <h2 className="text-2xl font-semibold mt-2">
                Temporary Memory State
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                SynapseLab uses changing numerical weights as a
                simplified representation of a temporary memory
                state. The model is intended for exploration,
                not as a complete model of biological memory.
              </p>
            </div>

          </div>

          <div className="mt-8 bg-white/5 border border-cyan-400/20 rounded-2xl p-6">

            <h2 className="text-2xl font-semibold">
              Explore the Evidence
            </h2>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Read the scientific sources and limitations behind
              the model.
            </p>

            <a
              href="/evidence"
              className="inline-block mt-5 rounded-full bg-cyan-400
                         px-6 py-3 font-semibold text-black
                         hover:bg-cyan-300 transition"
            >
              View Evidence →
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}