export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <p className="text-cyan-400 tracking-[0.3em] text-sm">
          SYNAPSELAB
        </p>

        <h1 className="text-4xl font-bold mt-4">
          How It Works
        </h1>

        <p className="text-gray-400 mt-4 leading-relaxed">
          SynapseLab uses a simplified Hebbian learning model
          to demonstrate how changing synaptic weights can act
          as a temporary memory state.
        </p>

        <div className="mt-10 space-y-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              1. Learn
            </h2>

            <p className="text-gray-400 mt-2">
              A selected pattern activates a group of connections.
              The model increases their synaptic weights.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              2. Strengthen
            </h2>

            <p className="text-gray-400 mt-2">
              Repeated learning increases the strength of the
              corresponding connections.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              3. Recall
            </h2>

            <p className="text-gray-400 mt-2">
              The current synaptic state is compared with stored
              patterns to produce a prediction.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              4. Interference
            </h2>

            <p className="text-gray-400 mt-2">
              New learning can modify shared connections and
              potentially reduce the strength of an earlier memory.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}