import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #E8410A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #111 0%, transparent 40%)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 grid grid-cols-12 items-center gap-4">
          <div className="col-span-3 space-y-6">
            <div className="text-5xl font-black leading-none text-[#E8410A]">&quot;</div>
            <p className="text-sm text-gray-500 leading-relaxed italic">
              Melissa&apos;s strategic vision on climate policy transformed our institutional framework. Highly recommended.
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#E8410A">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-400">8+ Years Expertise</p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-4xl font-black text-gray-900">20+</p>
              <p className="text-sm text-gray-400 mt-1">Projects Led</p>
            </div>
          </div>

          <div className="col-span-6 flex flex-col items-center text-center relative">
            <div className="mb-4 flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-500 shadow-sm">
              <span>Hello!</span>
              <span>🌿</span>
            </div>

            <h1 className="text-6xl font-black leading-tight tracking-tight text-gray-900 mb-2">
              I&apos;m <span className="text-[#E8410A]">Melissa,</span>
            </h1>
            <h2 className="text-5xl font-black leading-tight tracking-tight text-gray-900 mb-8">Climate Economist</h2>

            <div className="relative flex items-end justify-center" style={{ height: "320px", width: "320px" }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full" style={{ width: "260px", height: "260px", background: "#E8410A" }} />
              <div
                className="relative z-10 rounded-t-full overflow-hidden flex items-end justify-center"
                style={{ width: "240px", height: "300px", background: "linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)" }}
              >
                <div className="text-center pb-6 text-gray-400">
                  <svg className="w-20 h-20 mx-auto mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <p className="text-xs font-medium">Professional Portrait</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Link
                to="/projects"
                className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm shadow-lg transition-all hover:scale-105"
                style={{ background: "#E8410A" }}
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link
                to="/awards-certifications#contact-form"
                className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-gray-900 text-sm border-2 border-gray-900 transition-all hover:bg-gray-900 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="col-span-3 flex flex-col items-end space-y-6">
            <div className="text-right">
              <div className="flex justify-end gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#E8410A">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-5xl font-black text-gray-900">8+</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Years</p>
              <p className="text-xs text-gray-400">Expertise</p>
            </div>

            <div className="border-t border-gray-100 pt-6 text-right w-full">
              <p className="text-4xl font-black text-[#E8410A]">3</p>
              <p className="text-sm text-gray-400 mt-1">Core Domains</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-10" style={{ background: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-center uppercase tracking-widest text-gray-400 mb-2">Core Areas</p>
          <h3 className="text-4xl font-black text-center text-gray-900 mb-14">Policy-oriented sustainability expertise</h3>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Climate Strategy",
                desc: "Design of policy roadmaps, climate action plans, and governance frameworks for resilient development.",
              },
              {
                icon: "🏙️",
                title: "Urban Development",
                desc: "Sustainable city planning, infrastructure transition, and institutional coordination for local implementation.",
              },
              {
                icon: "📊",
                title: "Public Policy & Economics",
                desc: "Evidence-based analysis to align climate action with economic systems and long-term social outcomes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: "#FFF0EB" }}>
                  {item.icon}
                </div>
                <h4 className="font-black text-lg text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                <div className="mt-5 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16" style={{ background: "#E8410A" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
