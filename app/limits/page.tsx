import Navbar from "../../components/Navbar";

export default function Limits() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <Navbar />

      <main className="px-6 py-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <p className="text-cyan-400 tracking-[0.3em] text-sm">
            SYNAPSELAB / LIMITS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Limitations of the Model
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl leading-relaxed">
            SynapseLab is an educational simulation designed to demonstrate
            the basic idea of synaptic learning, memory, and interference.
            It is not a complete biological model of the human brain.
          </p>

          {/* Limitation 01 */}
          <section className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-cyan-400 text-sm font-semibold">
              LIMITATION 01
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              Simplified Neural Model
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              The project uses a simplified representation of neurons and
              synaptic weights. Real biological neurons contain many
              interacting processes that are not represented here.
            </p>
          </section>

          {/* Limitation 02 */}
          <section className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-cyan-400 text-sm font-semibold">
              LIMITATION 02
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              Not a Biological Brain Simulation
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              SynapseLab does not reproduce the complete structure or
              functionality of the human brain. The model is intended only
              to demonstrate selected computational concepts.
            </p>
          </section>

          {/* Limitation 03 */}
          <section className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-cyan-400 text-sm font-semibold">
              LIMITATION 03
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              Fixed Interference Model
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              The interference operation in this project reduces the stored
              weights using a simplified mathematical rule. Real memory
              interference is much more complex and depends on many
              biological and network-level factors.
            </p>
          </section>

          {/* Limitation 04 */}
          <section className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-cyan-400 text-sm font-semibold">
              LIMITATION 04
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              Small Number of Patterns
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              The experiment uses only a small set of predefined patterns.
              Therefore, the results cannot represent the variety and
              complexity of real-world learning and memory.
            </p>
          </section>

          {/* Limitation 05 */}
          <section className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-cyan-400 text-sm font-semibold">
              LIMITATION 05
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              Educational Purpose
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              The numerical results produced by SynapseLab are properties
              of the computational model. They should not be interpreted
              as measurements of human memory or biological brain activity.
            </p>
          </section>

          {/* Final Note */}
          <section className="mt-10 border border-cyan-400/20 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Final Interpretation
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              SynapseLab provides a simple and visual way to understand how
              changes in connection strength can represent learning and how
              later changes can affect a stored state. The model is useful
              for education and demonstration, but it should not be treated
              as a complete biological explanation of memory.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}