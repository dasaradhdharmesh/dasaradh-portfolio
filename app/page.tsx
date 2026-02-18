export default function Home() {
  return (
    <main className="bg-[#faf9f6]">

      {/* HERO */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-36 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#2a5c6e]/5 to-[#d64f4f]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a5c6e]/5 to-[#d64f4f]/5 rounded-full blur-3xl"></div>
        </div>

        <p className="text-sm uppercase tracking-[0.25em] text-[#6c757d] mb-8 animate-fadeInUp">
          DATA ANALYST • DATA SCIENCE • MACHINE LEARNING
        </p>

        <h1 className="text-6xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-8 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
          Turning Data Into <br />
          <span className="gradient-text">
            Strategic Business Intelligence
          </span>
        </h1>

        <p className="text-lg text-[#4a5568] max-w-3xl mb-14 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          I design structured analytics systems and machine learning workflows
          that convert complex datasets into measurable, decision-ready insights.
        </p>

        <div className="flex gap-6 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-[#2a5c6e] text-white hover:bg-[#1d4352] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-[#2a5c6e] text-[#2a5c6e] hover:bg-[#2a5c6e] hover:text-white transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </section>

      {/* VALUE BLOCKS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-[#e9ecef] card-hover group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2a5c6e] to-[#3e7b91] rounded-lg mb-6 flex items-center justify-center text-white text-xl font-bold">01</div>
            <h3 className="text-xl font-semibold mb-3 text-[#1a1e24]">Data Analysis & BI</h3>
            <p className="text-sm text-[#6c757d] leading-relaxed">
              Building dashboards, KPIs, and structured reporting systems using SQL,
              Power BI, and Python.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-[#e9ecef] card-hover group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#3e7b91] to-[#2a5c6e] rounded-lg mb-6 flex items-center justify-center text-white text-xl font-bold">02</div>
            <h3 className="text-xl font-semibold mb-3 text-[#1a1e24]">Machine Learning & NLP</h3>
            <p className="text-sm text-[#6c757d] leading-relaxed">
              Applied classification models, TF-IDF pipelines, and predictive systems
              for real-world datasets.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-[#e9ecef] card-hover group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2a5c6e] to-[#1d4352] rounded-lg mb-6 flex items-center justify-center text-white text-xl font-bold">03</div>
            <h3 className="text-xl font-semibold mb-3 text-[#1a1e24]">SQL & Optimization</h3>
            <p className="text-sm text-[#6c757d] leading-relaxed">
              Advanced querying, joins, CTEs, and performance-focused retrieval strategies.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white border-y border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <h2 className="text-4xl font-semibold tracking-tight mb-14 text-[#1a1e24]">
            About Me
          </h2>

          <div className="max-w-3xl space-y-6 text-[#4a5568] leading-relaxed">
            <p>
              I am a Computer Science graduate specializing in Data Analytics and
              Applied Machine Learning with hands-on experience across SQL-driven
              analysis, statistical modeling and AI systems.
            </p>

            <p>
              I work across the full data lifecycle — from data extraction and
              preprocessing to model development and visualization — building
              analytics solutions that translate complex datasets into structured,
              business-ready insights.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="bg-[#faf9f6]">
  <div className="max-w-7xl mx-auto px-6 py-32">

    <h2 className="text-4xl font-semibold tracking-tight mb-20 text-[#1a1e24]">
      Featured Projects
    </h2>

    <div className="space-y-20">

      {/* PROJECT 1 */}
      <div className="bg-white border border-[#e9ecef] rounded-2xl p-12 hover:shadow-2xl transition-all duration-500 card-hover relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a5c6e]/0 to-[#d64f4f]/0 group-hover:from-[#2a5c6e]/5 group-hover:to-[#d64f4f]/5 transition-all duration-500"></div>
        
        <span className="text-xs font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[#2a5c6e]/10 to-[#d64f4f]/10 text-[#2a5c6e] tracking-wide relative z-10">
          MACHINE LEARNING • NLP
        </span>

        <h3 className="text-3xl font-semibold mt-6 mb-6 text-[#1a1e24] relative z-10">
          Sentiment Analysis Pro — Large-Scale NLP Intelligence System
        </h3>

        <p className="text-[#4a5568] leading-relaxed mb-6 relative z-10">
          End-to-end sentiment classification platform trained on 
          <span className="font-semibold text-[#2a5c6e]"> 500,000+ text records</span> 
          achieving <span className="font-semibold text-[#d64f4f]">95% model accuracy</span>. 
          Built with TF-IDF vectorization and Logistic Regression, integrated 
          into a Streamlit web application with automated PDF reporting.
        </p>

        <ul className="text-sm text-[#4a5568] space-y-2 mb-6 relative z-10">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Scalable preprocessing & feature engineering pipeline</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Bulk CSV analysis with sentiment distribution visualization</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Automated insight reporting via ReportLab</li>
        </ul>

        <p className="text-xs text-[#6c757d] relative z-10">
          <span className="font-medium text-[#2a5c6e]">Python</span> • Scikit-learn • TF-IDF • Streamlit • Data Engineering
        </p>
      </div>

      {/* PROJECT 2 */}
      <div className="bg-white border border-[#e9ecef] rounded-2xl p-12 hover:shadow-2xl transition-all duration-500 card-hover relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a5c6e]/0 to-[#d64f4f]/0 group-hover:from-[#2a5c6e]/5 group-hover:to-[#d64f4f]/5 transition-all duration-500"></div>
        
        <span className="text-xs font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[#2a5c6e]/10 to-[#d64f4f]/10 text-[#2a5c6e] tracking-wide relative z-10">
          FULL-STACK • REST ARCHITECTURE
        </span>

        <h3 className="text-3xl font-semibold mt-6 mb-6 text-[#1a1e24] relative z-10">
          CareerAI — Resume Intelligence & Career Readiness Platform
        </h3>

        <p className="text-[#4a5568] leading-relaxed mb-6 relative z-10">
          Full-stack resume evaluation system built with React and FastAPI.
          Implements resume parsing, JD matching, skill gap identification,
          and aptitude assessment modules through RESTful APIs.
        </p>

        <ul className="text-sm text-[#4a5568] space-y-2 mb-6 relative z-10">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Resume–JD scoring engine (0–100)</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Multi-format file parsing (PDF/DOC/DOCX/TXT)</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Modular backend architecture with API-driven communication</li>
        </ul>

        <p className="text-xs text-[#6c757d] relative z-10">
          <span className="font-medium text-[#2a5c6e]">React</span> • FastAPI • REST APIs • NLP Parsing • System Design
        </p>
      </div>

      {/* PROJECT 3 */}
      <div className="bg-white border border-[#e9ecef] rounded-2xl p-12 hover:shadow-2xl transition-all duration-500 card-hover relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a5c6e]/0 to-[#d64f4f]/0 group-hover:from-[#2a5c6e]/5 group-hover:to-[#d64f4f]/5 transition-all duration-500"></div>
        
        <span className="text-xs font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[#2a5c6e]/10 to-[#d64f4f]/10 text-[#2a5c6e] tracking-wide relative z-10">
          BUSINESS INTELLIGENCE • DATA MODELING
        </span>

        <h3 className="text-3xl font-semibold mt-6 mb-6 text-[#1a1e24] relative z-10">
          E-Commerce Sales & Operations Analytics Dashboard
        </h3>

        <p className="text-[#4a5568] leading-relaxed mb-6 relative z-10">
          Designed a performance-optimized Power BI dashboard using 
          star schema modeling to analyze sales, delivery efficiency, 
          customer behavior, seller contribution, and payment trends.
        </p>

        <ul className="text-sm text-[#4a5568] space-y-2 mb-6 relative z-10">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Structured star schema with performance-conscious DAX</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Executive-level KPI reporting & slicer-driven metrics</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Insight generation across 7 analytical views</li>
        </ul>

        <p className="text-xs text-[#6c757d] relative z-10">
          <span className="font-medium text-[#2a5c6e]">Power BI</span> • DAX • Data Modeling • KPI Engineering
        </p>
      </div>

    </div>

  </div>
</section>

      {/* SKILLS */}
<section id="skills" className="bg-[#faf9f6] border-y border-[#e9ecef]">
  <div className="max-w-7xl mx-auto px-6 py-32">

    <div className="mb-20">
      <p className="text-sm uppercase tracking-[0.3em] text-[#6c757d] mb-6">
        Core Capabilities
      </p>
      <h2 className="text-4xl font-semibold tracking-tight text-[#1a1e24]">
        Technical Expertise
      </h2>
      <p className="text-[#4a5568] mt-6 max-w-2xl">
        Strong foundation across analytics engineering, statistical modeling,
        and production-ready machine learning systems.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">

      {/* DATA & ANALYTICS */}
      <div className="group bg-white rounded-2xl p-8 border border-[#e9ecef] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-lg font-semibold mb-6 text-[#1a1e24] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#3e7b91]"></span>
          Data & Analytics
        </h3>

        <ul className="space-y-4 text-sm text-[#4a5568]">
          <li><span className="font-medium text-[#2a5c6e]">Advanced SQL</span> — CTEs, Window Functions, Query Optimization</li>
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Data Cleaning & Feature Engineering</li>
          <li>Statistical Modeling & Hypothesis Testing</li>
          <li>KPI Systems & Dashboard Logic</li>
        </ul>
      </div>

      {/* MACHINE LEARNING */}
      <div className="group bg-white rounded-2xl p-8 border border-[#e9ecef] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-lg font-semibold mb-6 text-[#1a1e24] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3e7b91] to-[#2a5c6e]"></span>
          Machine Learning
        </h3>

        <ul className="space-y-4 text-sm text-[#4a5568]">
          <li>Supervised & Unsupervised Learning</li>
          <li>Ensemble Methods — Boosting, Bagging, Stacking</li>
          <li>Artificial Neural Networks (ANN)</li>
          <li>CNN, RNN, FNN Architectures</li>
          <li>Model Evaluation, Tuning & Optimization</li>
        </ul>
      </div>

      {/* TOOLS */}
      <div className="group bg-white rounded-2xl p-8 border border-[#e9ecef] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-lg font-semibold mb-6 text-[#1a1e24] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#1d4352]"></span>
          Tools & Platforms
        </h3>

        <ul className="space-y-4 text-sm text-[#4a5568]">
          <li><span className="font-medium text-[#2a5c6e]">Python</span> — Pandas, NumPy, Scikit-learn</li>
          <li>Power BI & Tableau</li>
          <li>MySQL & Relational Databases</li>
          <li>Git & Version Control</li>
          <li>Analytics Workflow Automation</li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* VALUE PROPOSITION */}
<section id="value" className="max-w-7xl mx-auto px-6 py-32">

  <h2 className="text-4xl font-semibold tracking-tight mb-16">
    Professional Impact
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-4">
        Analytical Decision Framework
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        I approach problems with structured hypothesis testing, KPI mapping,
        and measurable outcome alignment — ensuring insights are actionable
        and not just descriptive.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-4">
        End-to-End Data Ownership
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        From raw dataset preprocessing to model validation and visualization,
        I handle the full analytics lifecycle with performance and scalability in mind.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-4">
        Business-Oriented Thinking
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        I translate technical outputs into business-relevant insights,
        focusing on revenue impact, operational efficiency, and decision support.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-4">
        Continuous Skill Expansion
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        Actively deepening expertise in advanced ML, experimentation design,
        and scalable analytics systems to move beyond reporting into intelligence.
      </p>
    </div>

  </div>
</section>

{/* RESUME SECTION */}
<section id="resume" className="max-w-7xl mx-auto px-6 py-32">

  <h2 className="text-4xl font-semibold tracking-tight mb-12 text-[#1a1e24]">
    Resume
  </h2>

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* Left Content */}
    <div className="space-y-6">
      <p className="text-[#4a5568] leading-relaxed">
        A detailed overview of my technical expertise, projects,
        and analytical experience across Data Analytics and Machine Learning.
      </p>

      <div className="flex gap-6">

        {/* View Button */}
        <a
          href="/resume/Dasaradh_D_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full bg-[#2a5c6e] text-white hover:bg-[#1d4352] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Resume
        </a>

        {/* Download Button */}
        <a
          href="/resume/Dasaradh_D_Resume.pdf"
          download
          className="px-8 py-3 rounded-full border-2 border-[#2a5c6e] text-[#2a5c6e] hover:bg-[#2a5c6e] hover:text-white transition-all duration-300"
        >
          Download
        </a>

      </div>
    </div>

    {/* Right Side Preview Card */}
    <div className="border border-[#e9ecef] rounded-xl p-8 bg-white shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-semibold mb-4 text-[#1a1e24]">
        Quick Summary
      </h3>

      <ul className="text-sm text-[#4a5568] space-y-3">
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Data Analytics & Business Intelligence</li>
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Machine Learning & NLP Applications</li>
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> Power BI Dashboard Development</li>
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#d64f4f]"></span> SQL & Performance Optimization</li>
      </ul>
    </div>

  </div>

</section>


{/* CONTACT SECTION */}
<section id="contact" className="bg-white border-t border-[#e9ecef]">
  <div className="max-w-7xl mx-auto px-6 py-32">

    <h2 className="text-4xl font-semibold tracking-tight mb-6 text-[#1a1e24]">
      Contact
    </h2>

    <p className="text-[#4a5568] mb-12 max-w-xl">
      Open to Data Analyst and entry-level Machine Learning opportunities.
      Feel free to send a message — I’ll respond promptly.
    </p>

    <form
      action="https://formspree.io/f/xzdavzpd"
      method="POST"
      className="max-w-xl space-y-6"
    >

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-4 border border-[#e9ecef] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a5c6e] bg-[#faf9f6] transition-all duration-300"
      />

      <input
        type="email"
        name="email"
        placeholder="your.email@example.com"
        required
        className="w-full p-4 border border-[#e9ecef] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a5c6e] bg-[#faf9f6] transition-all duration-300"
      />

      <textarea
        name="message"
        placeholder="Write your message here"
        required
        rows={5}
        className="w-full p-4 border border-[#e9ecef] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a5c6e] bg-[#faf9f6] transition-all duration-300"
      />

      <button
        type="submit"
        className="w-full py-4 rounded-full bg-gradient-to-r from-[#2a5c6e] to-[#3e7b91] text-white hover:from-[#1d4352] hover:to-[#2a5c6e] transition-all duration-300 shadow-md hover:shadow-lg font-medium"
      >
        Send Message
      </button>

    </form>

  </div>
</section>

<section className="bg-[#faf9f6] border-t border-[#e9ecef]">
  <div className="max-w-7xl mx-auto px-6 py-16 text-center">

    <h3 className="text-2xl font-semibold mb-6 text-[#1a1e24]">
      Let's Build Something Meaningful
    </h3>

    <p className="text-[#4a5568] mb-8">
      Open to analytics, data science, and AI-driven roles.
    </p>

    <div className="flex justify-center gap-8 text-sm">
      <a href="https://github.com/YOUR_GITHUB_USERNAME" className="hover:text-[#2a5c6e] transition-colors duration-300 font-medium">
        GitHub
      </a>
      <a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" className="hover:text-[#2a5c6e] transition-colors duration-300 font-medium">
        LinkedIn
      </a>
      <a href="mailto:your@email.com" className="hover:text-[#2a5c6e] transition-colors duration-300 font-medium">
        Email
      </a>
    </div>

  </div>
</section>

<footer className="bg-gradient-to-r from-[#1a1e24] to-[#2a2f38] text-[#e9ecef]">
  <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm">

    <p>
      © {new Date().getFullYear()} Dasaradh D. All rights reserved.
    </p>

    <div className="flex gap-6 mt-4 md:mt-0">

      <a
        href="https://github.com/dasaradhdharmesh"
        target="_blank"
        className="hover:text-white transition-colors duration-300"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/dasaradh-d-81b05b390/"
        target="_blank"
        className="hover:text-white transition-colors duration-300"
      >
        LinkedIn
      </a>

      <a
        href="https://medium.com/@dharmeshdasaradh"
        target="_blank"
        className="hover:text-white transition-colors duration-300"
      >
        Medium
      </a>

      <a
        href="mailto:dharmeshdasaradh@gmail.com"
        className="hover:text-white transition-colors duration-300"
      >
        Email
      </a>

    </div>

  </div>
</footer>

    </main>
  );
}