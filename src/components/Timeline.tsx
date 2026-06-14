import { timeline } from "@/data/timeline";
import FadeIn from "./FadeIn";

export default function Timeline() {
  return (
    <FadeIn>
      <section id="journey" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-16">Journey</h2>

        <div className="relative">
          {/* Main Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-zinc-800" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-16 group">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full border border-blue-500 bg-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1">
                  <p className="text-blue-400 font-semibold text-sm">
                    {item.year}
                  </p>

                  <h3 className="text-xl font-semibold mt-2">{item.title}</h3>

                  {"description" in item && (
                    <p className="text-zinc-400 mt-3 leading-7">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
