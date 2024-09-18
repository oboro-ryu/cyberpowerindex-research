"use client";
import React from "react";

function MainComponent() {
  const [selectedChapter, setSelectedChapter] = React.useState("");
  const [showAllSections, setShowAllSections] = React.useState(true);

  const chapters = [
    { id: "chapter1", name: "Abstract" },
    { id: "chapter2", name: "Introduction" },
    { id: "chapter3", name: "Research Objectives" },
    { id: "chapter4", name: "Literature Review" },
    { id: "chapter5", name: "Methodology" },
  ];

  const handleChapterChange = (chapterId) => {
    setSelectedChapter(chapterId);
    setShowAllSections(false);
  };

  const showAllChapters = () => {
    setSelectedChapter("");
    setShowAllSections(true);
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      <nav className="p-4 bg-gray-800 text-white mb-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tables">Tables</a>
          </li>
        </ul>
      </nav>

      <h1 className="text-2xl font-bold mb-4">
        SAITO RYUTARO - Cybersecurity Research
      </h1>
      <p className="mb-4">
        Name: SAITO RYUTARO | Student Number: i923109 | Submission Date: July 25
        | Course: 言語文化専攻 国際共生コミュニケーション
      </p>
      <div className="mb-4 flex items-center flex-wrap">
        <select
          className="p-2 border rounded mr-2 mb-2 md:mb-0"
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
        >
          <option value="">チャプターを選択</option>
          {chapters.map((chapter) => (
            <option key={chapter.id} value={chapter.id}>
              {chapter.name}
            </option>
          ))}
        </select>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mr-2 mb-2 md:mb-0"
          onClick={() =>
            selectedChapter && handleChapterChange(selectedChapter)
          }
        >
          移動
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={showAllChapters}
        >
          全文表示
        </button>
      </div>
      <div>
        {chapters.map((chapter) => (
          <section
            key={chapter.id}
            id={chapter.id}
            className={`mb-8 ${
              showAllSections || selectedChapter === chapter.id
                ? "block"
                : "hidden"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{chapter.name}</h2>
            {chapter.id === "chapter1" && (
              <p>
                This research evaluates Taiwan's cybersecurity strength by
                analyzing specific cyber incidents through the National Cyber
                Power Index (NCPI) framework. Taiwan, a global hub for
                semiconductor manufacturing, is frequently targeted by
                state-sponsored cyberattacks, primarily from China, North Korea,
                and Russia. These attacks range from foreign intelligence
                collection to critical infrastructure sabotage. By assessing
                Taiwan's cyber power in relation to over 20 nations using NCPI's
                Cyber Intent Index (CII) and Cyber Capability Index (CCI), this
                study quantifies Taiwan's resilience against cyber threats. The
                results indicate that while Taiwan demonstrates moderate
                resilience, critical vulnerabilities remain in defending its
                commercial technology sector and countering advanced persistent
                threats (APT).
              </p>
            )}
            {chapter.id === "chapter2" && (
              <p>
                The advancement of information and communication technologies
                (ICTs) has dramatically transformed modern life, enabling
                seamless communication, vast information access, and the
                digitization of essential services. Governments and militaries
                around the world have increasingly integrated these technologies
                into their operations, improving efficiency and bolstering
                national security measures. Many governments now rely on digital
                platforms for tasks such as tax filing, digital infrastructure
                management, and public services, while militaries use ICTs for
                command-and-control operations, intelligence gathering, and
                strategic decision-making.
              </p>
            )}
            {chapter.id === "chapter3" && (
              <p>
                The goal of this research is to evaluate Taiwan's cybersecurity
                strength by analyzing specific cyber incidents and mapping them
                to the National Cyber Power Index (NCPI) framework. By
                conducting a comparative analysis of Taiwan's cyber power
                relative to over US, China, and Japan, this study aims to
                clarify how Taiwan's cyber strategy influences its national
                security and its position in the global geopolitical landscape.
              </p>
            )}
            {chapter.id === "chapter4" && (
              <p>
                Taiwan's unique geopolitical position places it at the center of
                regional tensions, with cyberattacks playing a key role in
                shaping the balance of power in the Indo-Pacific region. Various
                studies have analyzed how cyberattacks are used in modern
                warfare to destabilize economies, gather intelligence, and
                compromise military capabilities. However, Taiwan's specific
                challenges remain underrepresented in global cybersecurity
                studies, which often focus on the US, China, and Japan.
              </p>
            )}
            {chapter.id === "chapter5" && (
              <p>
                The National Cyber Power Index (NCPI) provides a comprehensive
                framework to assess a country's cyber capabilities. It
                categorizes cyber power into eight strategic objectives:
                Surveilling and Monitoring Domestic Groups, Strengthening and
                Enhancing National Cyber Defenses, Controlling and Manipulating
                the Information Environment, Foreign Intelligence Collection for
                National Security, Growing National Cyber and Commercial
                Technology Competence, Destroying or Disabling an Adversary's
                Infrastructure, Defining International Cyber Norms, and Amassing
                Wealth and Extracting Cryptocurrency.
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default MainComponent;