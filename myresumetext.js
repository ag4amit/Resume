export default function Portfolio() {
  const skills = {
    "Cloud & DevOps": ["AWS", "Terraform", "Docker", "Jenkins CI/CD", "Control-M"],
    "Data Platforms": ["Snowflake", "Oracle", "PostgreSQL", "SQL Server"],
    "Data Engineering": ["Python", "PySpark", "EMR", "Hadoop", "CDC Pipelines"],
    "Governance & Security": ["RBAC", "Liquibase", "KMS", "IAM", "SSM"],
    "Modern Stack": ["FastAPI", "REST APIs", "CloudWatch", "Datadog"],
    "AI/ML": ["OpenAI", "LangChain", "ChromaDB", "Hugging Face", "SageMaker"]
  };

  const achievements = [
    "10+ years in enterprise data engineering and cloud infrastructure",
    "Architected platforms processing 100M+ transactions nightly",
    "Reduced Snowflake costs by 40% while improving performance by 60%",
    "Built reusable ETL frameworks reducing onboarding from 3 weeks to 2 days",
    "Delivered 99.95% SLA production-grade fintech platforms",
    "Led cross-functional delivery for 100+ enterprise stakeholders"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="px-6 py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sky-400 font-semibold tracking-widest uppercase mb-4">
              Senior Lead Data Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Amit Gupta
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Data Architecture & Cloud Infrastructure Specialist with 10+ years of experience building scalable enterprise data platforms across fintech, investment management, and analytics domains.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:amit.gupta.agdav@outlook.com"
                className="bg-sky-500 hover:bg-sky-400 transition px-6 py-3 rounded-2xl font-semibold"
              >
                Contact Me
              </a>

              <a
                href="#experience"
                className="border border-slate-700 hover:border-slate-500 transition px-6 py-3 rounded-2xl font-semibold"
              >
                View Experience
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <div className="font-semibold text-white">Location</div>
                <div>Bangalore, India</div>
              </div>
              <div>
                <div className="font-semibold text-white">Education</div>
                <div>M.Tech - BITS Pilani</div>
              </div>
              <div>
                <div className="font-semibold text-white">Certification</div>
                <div>SnowPro Core</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl"
              >
                <div className="text-sky-400 text-2xl font-bold mb-2">
                  0{idx + 1}
                </div>
                <p className="text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Professional Summary</h2>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-slate-300 text-lg leading-relaxed">
            Elite Senior Lead Data Engineer with deep expertise in Snowflake architecture, AWS cloud infrastructure, Terraform-based IaC, metadata-driven ETL frameworks, and production-grade data governance. Proven record of delivering scalable enterprise platforms supporting 100M+ transactions with 99.95% SLA adherence.
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Technical Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-sky-400">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-800 px-3 py-2 rounded-xl text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>

          <div className="space-y-10">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-3xl font-bold">Fidelity Investments</h3>
                  <p className="text-sky-400 text-lg">Lead Data Engineer</p>
                </div>

                <div className="text-slate-400">
                  July 2016 – Present | Bangalore, India
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-slate-300 leading-relaxed">
                <ul className="space-y-4 list-disc pl-6">
                  <li>Engineered incremental ETL pipelines across 15+ data domains using Snowflake and AWS.</li>
                  <li>Built reusable Python ETL frameworks reducing development effort by 60%.</li>
                  <li>Architected multi-tier Snowflake platform with RBAC and governance.</li>
                  <li>Optimized Snowflake performance reducing costs by 40%.</li>
                </ul>

                <ul className="space-y-4 list-disc pl-6">
                  <li>Provisioned AWS infrastructure using Terraform with zero-drift deployments.</li>
                  <li>Established CI/CD pipelines using Jenkins and Docker.</li>
                  <li>Designed crypto transaction processing systems with 99.95% SLA.</li>
                  <li>Mentored junior engineers and led cross-functional platform delivery.</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-3xl font-bold">Cognizant Technology Solutions</h3>
                  <p className="text-sky-400 text-lg">Data Engineer</p>
                </div>

                <div className="text-slate-400">
                  Feb 2014 – Jul 2016 | Chennai, India
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Designed enterprise ETL methodologies and optimized SQL analytical engines for insurance underwriting and claims analytics systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 py-20 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Key Metrics</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["100M+", "Transactions Processed"],
              ["99.95%", "SLA Adherence"],
              ["40%", "Snowflake Cost Reduction"],
              ["60%", "ETL Development Reduction"]
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center"
              >
                <div className="text-5xl font-black text-sky-400 mb-3">
                  {value}
                </div>
                <div className="text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Education</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">BITS Pilani</h3>
                <p className="text-sky-400">M.Tech Data Science & Engineering</p>
                <p className="text-slate-400">2022 – 2024</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Kurukshetra University</h3>
                <p className="text-sky-400">B.Tech Information Technology</p>
                <p className="text-slate-400">2008 – 2012</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Awards & Recognition</h2>

            <ul className="space-y-4 text-slate-300 list-disc pl-6">
              <li>FCAT Above & Beyond Award</li>
              <li>FCAT Owns The Outcome Award</li>
              <li>Multiple On The Spot Awards</li>
              <li>SnowPro Core Certification</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Amit Gupta</h3>
            <p className="text-slate-400">
              Senior Lead Data Engineer | Snowflake | AWS | Terraform | Python
            </p>
          </div>

          <div className="text-slate-400 space-y-2">
            <div>Email: amit.gupta.agdav@outlook.com</div>
            <div>Phone: +91-9600-083-036</div>
            <div>Bangalore, India</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
