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
        <section>
        <ol className="list-decimal ml-8 mt-4">
<li>
<strong>Surveilling and Monitoring Domestic Groups:</strong> The ability to surveil and monitor citizens and domestic entities for intelligence purposes.
</li>
<li>
<strong>Strengthening and Enhancing National Cyber Defenses:</strong> Defending against cyberattacks, particularly those targeting critical infrastructure.
</li>
<li>
<strong>Controlling and Manipulating the Information Environment:</strong> Influencing or controlling information flows within and outside the country.
</li>
<li>
<strong>Foreign Intelligence Collection for National Security:</strong> Gathering intelligence from foreign actors through cyber means.
</li>
<li>
<strong>Growing National Cyber and Commercial Technology Competence:</strong> Developing commercial cyber technologies and growing digital infrastructure.
</li>
<li>
<strong>Destroying or Disabling an Adversary’s Infrastructure:</strong> Cyberattacks aimed at disabling or destroying foreign critical infrastructure.
</li>
<li>
<strong>Defining International Cyber Norms:</strong> Setting global cyber standards and norms to influence international cyber governance.
</li>
<li>
<strong>Amassing Wealth and Extracting Cryptocurrency:</strong> Engaging in cyber activities aimed at acquiring wealth, including cryptocurrency theft.
</li>
</ol>
<p className="mt-4">
Each cyber incident in this study is evaluated based on its relevance to one or more of these objectives, assigning weighted scores to measure the overall impact on Taiwan’s national cybersecurity.
</p>

<h3 className="text-lg font-medium mt-4">3.2 Incident-Based Evaluation</h3>
<p>
To measure the severity of each incident, two indices are applied:
</p>
<ul className="list-disc ml-8 mt-4">
<li>
<strong>Cyber Capability Index (CCI):</strong> Measures the technical capability of the cyber operation.
</li>
<li>
<strong>Cyber Intent Index (CII):</strong> Measures the intent and strategic impact of the operation.
</li>
</ul>
<p className="mt-4">

</p>
</section>
{/* Methodology Section - Continued */}
<section id="chapter5" className="mb-8">
<h2 className="text-xl font-semibold mb-2">Methodology</h2>

{/* 3.3 Data Sources */}
<h3 className="text-lg font-medium mt-4">3.3 Data Sources</h3>
<p>
The data for this study comes from two primary sources:
</p>
<ul className="list-disc ml-8 mt-4">
<li>
<strong>112年度國家資通安全情勢報告:</strong> A comprehensive report on Taiwan’s cybersecurity incidents and threats, documenting key cyber events affecting Taiwan in recent years.
</li>
<li>
<strong>CSIS Significant Cyber Incidents Database:</strong> A timeline of major cyber incidents affecting nations globally, including Taiwan.
</li>
</ul>
<p className="mt-4">

</p>

{/* 3.4 Justification for the Selected Index and Consideration of Alternatives */}
<h3 className="text-lg font-medium mt-4">3.4 Justification for the Selected Index and Consideration of Alternatives</h3>
<p>
In this study, the National Cyber Power Index (NCPI) was selected as the primary analytical framework for several key reasons.
</p>
<p className="mt-4">
Firstly, NCPI is uniquely positioned to evaluate cyber power through eight national objectives—including surveillance and monitoring, strengthening national cyber defenses, information manipulation, foreign intelligence collection, growth in cyber and commercial technology competence, destruction or disabling of adversarial infrastructure, defining international cyber norms, and amassing wealth or extracting cryptocurrency. These objectives comprehensively cover the diverse aspects of modern cyber strategies, making NCPI the most suitable for the research aims, particularly in assessing military cyber capabilities.
</p>
<p className="mt-4">
Other indices, such as the Cybersecurity Capacity Maturity Model (CMM) and the Cyber Readiness Index (CRI), were considered but ultimately deemed less appropriate for this study. These indices focus primarily on cybersecurity maturity and preparedness, which, while valuable, do not provide a holistic assessment of a nation’s cyber power. Specifically, they lack sufficient emphasis on military cyber capabilities and offensive operations, making them less relevant for the comparative analysis of Japan, the United States, China, and Taiwan in the context of the Taiwan situation.
</p>
<p className="mt-4">
The Global Cybersecurity Index (GCI) was also evaluated as a potential framework. However, GCI is primarily concerned with assessing internal cybersecurity resilience and defense measures, and it does not adequately address the multifaceted nature of cyber power. GCI's exclusion of key indicators related to military cyber operations, intelligence gathering, and offensive capabilities limits its applicability to this study, which requires a more comprehensive evaluation of national cyber power.
</p>
<p className="mt-4">
The Cyber Capabilities and National Power (CCNP) index was recognized for its qualitative assessment of national cyber ecosystems. However, the absence of a scoring or ranking system renders it unsuitable for the quantitative comparative analysis pursued in this research. While CCNP provides a valuable qualitative analysis of a nation’s cyber capabilities, it does not focus on specific national objectives as NCPI does, which is crucial for this study's objectives.
</p>
<p className="mt-4">
Given these considerations, NCPI was determined to be the most appropriate framework for this research. Its ability to comprehensively evaluate the cyber power of Japan, the United States, China, and Taiwan, particularly in relation to military capabilities, makes it the optimal choice for the comparative analysis of national cyber strategies in the context of the Taiwan situation.
</p>
</section>

{/* Analysis and Findings Section */}
<section id="chapter6" className="mb-8">
<h2 className="text-xl font-semibold mb-2">Analysis and Findings</h2>

{/* 3.1 Objective Identification */}
<h3 className="text-lg font-medium mt-4">3.1 Objective Identification</h3>
<ol className="list-decimal ml-8 mt-4">
<li>Surveillance and Monitoring of Domestic Groups</li>
<li>Strengthening and Enhancing National Cyber Defenses</li>
<li>Controlling and Manipulating the Information Environment</li>
<li>Foreign Intelligence Collection for National Security</li>
<li>Growing National Cyber and Commercial Technology Competence</li>
<li>Destroying or Disabling an Adversary’s Infrastructure and Capabilities</li>
<li>Defining International Cyber Norms and Technical Standards</li>
<li>Amassing Wealth and/or Extracting Cryptocurrency</li>
</ol>

{/* 3.2 Mapping to Operational Goals */}
<h3 className="text-lg font-medium mt-4">3.2 Mapping to Operational Goals</h3>
<p>
Collected operational data is mapped to each of the objectives listed above. The significance and impact of each incident are assessed on a scale from 0.1 to 1, allowing for detailed analysis of how each cyber operation contributes to Taiwan's overall cyber strategy.
</p>
</section>
{/* Controlling and Manipulating the Information Environment Section */}
<section id="chapter6_1" className="mb-8">
<h3 className="text-lg font-medium mt-4">3.2.1 Controlling and Manipulating the Information Environment</h3>
{/* テーブル形式で指標を表示 */}
<table className="min-w-full bg-white border border-gray-300">
<thead>
<tr>
<th className="py-2 px-4 border-b border-gray-300">Scale</th>
<th className="py-2 px-4 border-b border-gray-300">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.1</td>
<td className="py-2 px-4 border-b border-gray-300">
Limited, small-scale information operations targeting individual regions or groups with propaganda.
</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.2</td>
<td className="py-2 px-4 border-b border-gray-300">
Information operations targeting multiple regions or small communities.
</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.3</td>
<td className="py-2 px-4 border-b border-gray-300">
Extensive propaganda activities targeting specific domestic sectors (education, religion, etc.).
</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.4</td>
<td className="py-2 px-4 border-b border-gray-300">
Limited information operations targeting specific communities or small groups abroad with misinformation.
</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.5</td>
<td className="py-2 px-4 border-b border-gray-300">
Medium-scale information operations targeting specific regions abroad.
</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.6</td>
<td className="py-2 px-4 border-b border-gray-300">
Information operations and misinformation activities across multiple regions abroad.
</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.7</td>
<td className="py-2 px-4 border-b border-gray-300">
Large-scale misinformation campaigns targeting multiple countries.
</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.8</td>
<td className="py-2 px-4 border-b border-gray-300">
Extensive information operations across multiple countries or regions involving large-scale misinformation campaigns.
</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.9</td>
<td className="py-2 px-4 border-b border-gray-300">
Continental-scale information operations targeting a series of countries or extensive regions.
</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">1.0</td>
<td className="py-2 px-4 border-b border-gray-300">
Global information operations involving major media and social networks, affecting the entire world.
</td>
</tr>
</tbody>
</table>

{/* Justification for Scale Section */}
<h4 className="text-md font-medium mt-4">Justification for Scale</h4>
<p>
0.1: Limited small-scale information operations are often targeted at specific regions or communities, usually resulting in short-term impacts.<br/>
0.2: Multiple region or community targeting expands the influence but remains relatively small-scale.<br/>
0.3: Extensive propaganda in specific domestic sectors enhances societal impact.<br/>
0.4: Limited information operations abroad target specific communities or groups with misinformation.<br/>
0.5: Medium-scale operations targeting specific regions abroad may impact political or social dynamics.<br/>
0.6: Information operations across multiple regions show increasing influence.<br/>
0.7: Large-scale misinformation campaigns affect multiple countries and have broader impacts.<br/>
0.8: Cross-border large-scale misinformation operations span multiple countries or regions.<br/>
0.9: Continental-scale operations target a broad set of countries or regions.<br/>
1.0: Global operations through major media and social networks impact the entire world.
</p>
</section>
{/* Defining International Cyber Norms and Technical Standards Section */}
<section id="chapter6_2" className="mb-8">
<h3 className="text-lg font-medium mt-4">3.2.2 Defining International Cyber Norms and Technical Standards</h3>

{/* テーブル形式で指標を表示 */}
<table className="min-w-full bg-white border border-gray-300">
<thead>
<tr>
<th className="py-2 px-4 border-b border-gray-300">Scale</th>
<th className="py-2 px-4 border-b border-gray-300">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.1</td>
<td className="py-2 px-4 border-b border-gray-300">Participation in international conferences or initial technical cooperation.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.2</td>
<td className="py-2 px-4 border-b border-gray-300">Initiating discussions or proposals related to initial technical cooperation.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.3</td>
<td className="py-2 px-4 border-b border-gray-300">Launching initial technical cooperation projects.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.4</td>
<td className="py-2 px-4 border-b border-gray-300">Active participation in creating international technical standards.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.5</td>
<td className="py-2 px-4 border-b border-gray-300">Taking a leading role in creating international technical standards.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.6</td>
<td className="py-2 px-4 border-b border-gray-300">Active involvement in creating multiple international technical standards.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.7</td>
<td className="py-2 px-4 border-b border-gray-300">Signing cyber treaties or leading major international technical standards.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.8</td>
<td className="py-2 px-4 border-b border-gray-300">Signing multiple cyber treaties and leading international technical standards.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.9</td>
<td className="py-2 px-4 border-b border-gray-300">Establishing leadership in formulating major international technical standards.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">1.0</td>
<td className="py-2 px-4 border-b border-gray-300">Leading international cyber policy and setting key cyber standards.</td>
</tr>
</tbody>
</table>

{/* Justification for Scale Section */}
<h4 className="text-md font-medium mt-4">Justification for Scale</h4>
<p>
0.1: Initial participation in international conferences or technical cooperation builds the foundation for cybersecurity collaboration.<br/>
0.2: Proposals and discussions mark the beginning of collaborative efforts towards standard-setting.<br/>
0.3: The launch of technical cooperation projects signifies practical collaboration.<br/>
0.4: Active participation in international standards creation is crucial for contributing to cybersecurity standardization.<br/>
0.5: Leading roles in standards creation demonstrate significant influence.<br/>
0.6: Involvement in multiple standards indicates a high level of technical prowess.<br/>
0.7: Signing treaties or leading standards shows central involvement in international cybersecurity.<br/>
0.8: Leading multiple treaties and standards indicates very high influence.<br/>
0.9: Leadership in major standards formulation showcases top-tier influence.<br/>
1.0: Leading global cyber policies and setting standards highlights the highest level of influence.
</p>
</section>

{/* Destroying or Disabling an Adversary’s Infrastructure and Capabilities Section */}
<section id="chapter6_3" className="mb-8">
<h3 className="text-lg font-medium mt-4">3.2.3 Destroying or Disabling an Adversary’s Infrastructure and Capabilities</h3>

{/* テーブル形式で指標を表示 */}
<table className="min-w-full bg-white border border-gray-300">
<thead>
<tr>
<th className="py-2 px-4 border-b border-gray-300">Scale</th>
<th className="py-2 px-4 border-b border-gray-300">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.1</td>
<td className="py-2 px-4 border-b border-gray-300">Small-scale cyber attacks on adversary’s network communications.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.2</td>
<td className="py-2 px-4 border-b border-gray-300">Limited network communication attacks with short-term impacts.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.3</td>
<td className="py-2 px-4 border-b border-gray-300">Targeted attacks on parts of critical infrastructure.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.4</td>
<td className="py-2 px-4 border-b border-gray-300">Regular attacks on major infrastructure (e.g., power grids, water systems).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.5</td>
<td className="py-2 px-4 border-b border-gray-300">Regular and widespread infrastructure attacks.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.6</td>
<td className="py-2 px-4 border-b border-gray-300">Persistent attacks on multiple critical infrastructures.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.7</td>
<td className="py-2 px-4 border-b border-gray-300">Persistent and effective cyber attacks on multiple national infrastructures.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.8</td>
<td className="py-2 px-4 border-b border-gray-300">Extensive destruction of critical infrastructure with long-term effects.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.9</td>
<td className="py-2 px-4 border-b border-gray-300">Large-scale destruction attacks on national infrastructure.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">1.0</td>
<td className="py-2 px-4 border-b border-gray-300">Complete destruction or long-term disabling of critical military or civilian infrastructure related to national security.</td>
</tr>
</tbody>
</table>

{/* Justification for Scale Section */}
<h4 className="text-md font-medium mt-4">Justification for Scale</h4>
<p>
0.1: Small-scale attacks on network communications usually result in short-term disruptions.<br/>
0.2: Limited attacks have minor impacts on communication channels.<br/>
0.3: Targeted attacks on critical infrastructure parts may cause short-term interruptions.<br/>
0.4: Regular attacks on key infrastructure cause medium-level disruptions.<br/>
0.5: Widespread attacks on infrastructure create significant impact.<br/>
0.6: Persistent attacks on multiple critical infrastructures cause substantial long-term effects.<br/>
0.7: Effective attacks on national infrastructure have widespread impact.<br/>
0.8: Extensive attacks with long-term impacts significantly damage infrastructure.<br/>
0.9: Large-scale destruction poses severe risks to national security.<br/>
1.0: Complete or long-term disabling attacks affect national security critically.
</p>
</section>

{/* Amassing Wealth and/or Extracting Cryptocurrency Section */}
<section id="chapter6_4" className="mb-8">
<h3 className="text-lg font-medium mt-4">3.2.4 Amassing Wealth and/or Extracting Cryptocurrency</h3>

{/* テーブル形式で指標を表示 */}
<table className="min-w-full bg-white border border-gray-300">
<thead>
<tr>
<th className="py-2 px-4 border-b border-gray-300">Scale</th>
<th className="py-2 px-4 border-b border-gray-300">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.1</td>
<td className="py-2 px-4 border-b border-gray-300">Small-scale financial damage using information leakage (hundreds of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.2</td>
<td className="py-2 px-4 border-b border-gray-300">Minor financial damage from information leakage (thousands of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.3</td>
<td className="py-2 px-4 border-b border-gray-300">Small-scale financial damage from information leakage (tens of thousands of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.4</td>
<td className="py-2 px-4 border-b border-gray-300">Ransomware attacks or medium financial damage (tens of thousands of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.5</td>
<td className="py-2 px-4 border-b border-gray-300">Ransomware attacks or medium financial damage (hundreds of thousands of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.6</td>
<td className="py-2 px-4 border-b border-gray-300">Ransomware attacks or medium financial damage (millions of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.7</td>
<td className="py-2 px-4 border-b border-gray-300">Multiple ransomware attacks or major financial infrastructure attacks (millions of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.8</td>
<td className="py-2 px-4 border-b border-gray-300">Multiple ransomware attacks or large-scale financial infrastructure attacks (tens of millions of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.9</td>
<td className="py-2 px-4 border-b border-gray-300">Multiple ransomware attacks or large-scale financial infrastructure attacks (hundreds of millions of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">1.0</td>
<td className="py-2 px-4 border-b border-gray-300">National-level financial system attacks (billions of dollars).</td>
</tr>
</tbody>
</table>

{/* Justification for Scale Section */}
<h4 className="text-md font-medium mt-4">Justification for Scale</h4>
<p>
0.1: Small financial damage from information leakage affects limited targets.<br/>
0.2: Broader leakage impacts result in thousands of dollars in damage.<br/>
0.3: Large-scale leakage impacts medium-sized businesses with tens of thousands of dollars in damage.<br/>
0.4: Ransomware attacks result in tens of thousands of dollars in damage, affecting operations.<br/>
0.5: Medium-sized businesses face hundreds of thousands of dollars in damage from ransomware.<br/>
0.6: Large businesses experience significant financial damage, reaching millions of dollars.<br/>
0.7: Multiple ransomware attacks or large financial infrastructure attacks cause millions of dollars in damage.<br/>
0.8: Extensive attacks result in tens of millions of dollars in financial damage.<br/>
0.9: Large-scale attacks lead to hundreds of millions in damage.<br/>
1.0: Major attacks on national financial systems can cause billions of dollars in damage, severely impacting the economy.
</p>
</section>
{/* Surveillance and Monitoring of Domestic Groups Section */}
<section id="chapter6_5" className="mb-8">
<h3 className="text-lg font-medium mt-4">3.2.5 Surveillance and Monitoring of Domestic Groups</h3>

{/* テーブル形式で指標を表示 */}
<table className="min-w-full bg-white border border-gray-300">
<thead>
<tr>
<th className="py-2 px-4 border-b border-gray-300">Scale</th>
<th className="py-2 px-4 border-b border-gray-300">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.1</td>
<td className="py-2 px-4 border-b border-gray-300">Initial and minimal surveillance activities.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.2</td>
<td className="py-2 px-4 border-b border-gray-300">Small-scale, targeted surveillance.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.3</td>
<td className="py-2 px-4 border-b border-gray-300">Small-scale, structured surveillance.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.4</td>
<td className="py-2 px-4 border-b border-gray-300">Moderate, targeted surveillance.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.5</td>
<td className="py-2 px-4 border-b border-gray-300">Moderate, comprehensive surveillance.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.6</td>
<td className="py-2 px-4 border-b border-gray-300">Extended, semi-comprehensive surveillance.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.7</td>
<td className="py-2 px-4 border-b border-gray-300">Extensive, targeted surveillance.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.8</td>
<td className="py-2 px-4 border-b border-gray-300">Extensive, multi-platform surveillance.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.9</td>
<td className="py-2 px-4 border-b border-gray-300">Near-total surveillance capability.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">1.0</td>
<td className="py-2 px-4 border-b border-gray-300">Total, real-time surveillance.</td>
</tr>
</tbody>
</table>

{/* Justification for Scale Section */}
<h4 className="text-md font-medium mt-4">Justification for Scale</h4>
<p>
0.1: Very limited internet traffic monitoring is conducted, focusing on specific incidents.<br/>
0.2: Small groups are targeted based on specific threats, with minimal data collection.<br/>
0.3: Surveillance is conducted on specific communities with basic data collection.<br/>
0.4: Organized surveillance focuses on communities, with some content analysis.<br/>
0.5: Comprehensive surveillance expands to multiple platforms, with more automation.<br/>
0.6: Extended surveillance includes multiple critical sectors and automated analysis.<br/>
0.7: Extensive surveillance targets multiple sectors with real-time monitoring.<br/>
0.8: Multi-platform surveillance targets critical infrastructure and social platforms.<br/>
0.9: Near-total surveillance includes advanced AI and predictive analysis.<br/>
1.0: Total surveillance covers all communication platforms in real-time.
</p>
</section>

{/* Strengthening and Enhancing National Cyber Defenses Section */}
<section id="chapter6_6" className="mb-8">
<h3 className="text-lg font-medium mt-4">3.2.6 Strengthening and Enhancing National Cyber Defenses</h3>

{/* テーブル形式で指標を表示 */}
<table className="min-w-full bg-white border border-gray-300">
<thead>
<tr>
<th className="py-2 px-4 border-b border-gray-300">Scale</th>
<th className="py-2 px-4 border-b border-gray-300">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.1</td>
<td className="py-2 px-4 border-b border-gray-300">Initial implementation of basic cyber defense measures.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.2</td>
<td className="py-2 px-4 border-b border-gray-300">Basic, sector-specific cyber defense deployment.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.3</td>
<td className="py-2 px-4 border-b border-gray-300">Basic, broad-spectrum cyber defense deployment.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.4</td>
<td className="py-2 px-4 border-b border-gray-300">Development of a systematic cyber defense architecture.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.5</td>
<td className="py-2 px-4 border-b border-gray-300">Comprehensive industry-wide cyber defense implementation.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.6</td>
<td className="py-2 px-4 border-b border-gray-300">Advanced, sector-wide cyber defense deployment.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.7</td>
<td className="py-2 px-4 border-b border-gray-300">Execution of an integrated national cyber defense strategy.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.8</td>
<td className="py-2 px-4 border-b border-gray-300">Enhancement of defensive capabilities through international cooperation.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.9</td>
<td className="py-2 px-4 border-b border-gray-300">Near-complete integration of national and international cyber defense strategies.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">1.0</td>
<td className="py-2 px-4 border-b border-gray-300">Full deployment of advanced cyber defense infrastructure.</td>
</tr>
</tbody>
</table>

{/* Justification for Scale Section */}
<h4 className="text-md font-medium mt-4">Justification for Scale</h4>
<p>
0.1: Minimal cyber defense measures primarily focus on basic security protocols.<br/>
0.2: Defense mechanisms are extended to specific sectors with incident response protocols.<br/>
0.3: Broad-spectrum defenses cover multiple sectors with basic awareness training.<br/>
0.4: A structured approach to cyber defense is developed, with policies and frameworks.<br/>
0.5: Industry-wide implementation includes coordinated response mechanisms and advanced threat detection.<br/>
0.6: Sector-wide deployment includes automated threat detection and supply chain protection.<br/>
0.7: A national cyber defense strategy integrates all sectors with international cooperation.<br/>
0.8: Cooperation with international entities enhances national defenses.<br/>
0.9: Near-complete integration with international standards creates a robust defense.<br/>
1.0: Full deployment of cutting-edge technologies establishes global leadership in cyber defense.
</p>
</section>

{/* Growing National Cyber and Commercial Technology Competence Section */}
<section id="chapter6_7" className="mb-8">
<h3 className="text-lg font-medium mt-4">3.2.7 Growing National Cyber and Commercial Technology Competence</h3>

{/* テーブル形式で指標を表示 */}
<table className="min-w-full bg-white border border-gray-300">
<thead>
<tr>
<th className="py-2 px-4 border-b border-gray-300">Scale</th>
<th className="py-2 px-4 border-b border-gray-300">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.1</td>
<td className="py-2 px-4 border-b border-gray-300">Initial Stage.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.2</td>
<td className="py-2 px-4 border-b border-gray-300">Basic Training Expansion.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.3</td>
<td className="py-2 px-4 border-b border-gray-300">Initial Technology Development.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.4</td>
<td className="py-2 px-4 border-b border-gray-300">Intermediate Training Programs.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.5</td>
<td className="py-2 px-4 border-b border-gray-300">Applied Technology Development.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.6</td>
<td className="py-2 px-4 border-b border-gray-300">Recognized Domestic Innovation.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.7</td>
<td className="py-2 px-4 border-b border-gray-300">Advanced Research and Development.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.8</td>
<td className="py-2 px-4 border-b border-gray-300">Competitive International Presence.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.9</td>
<td className="py-2 px-4 border-b border-gray-300">Leading International Innovation.</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">1.0</td>
<td className="py-2 px-4 border-b border-gray-300">Global Leadership.</td>
</tr>
</tbody>
</table>

{/* Justification for Scale Section */}
<h4 className="text-md font-medium mt-4">Justification for Scale</h4>
<p>
0.1: The nation has just started implementing basic cybersecurity training programs.<br/>
0.2: Basic training expands, but specialization remains limited.<br/>
0.3: Initial technology development projects are focused on domestic needs.<br/>
0.4: Intermediate programs target specific sectors and industries.<br/>
0.5: Applied technology development solves specific commercial problems.<br/>
0.6: Domestic innovations achieve significant recognition.<br/>
0.7: Advanced research and development positions the nation competitively.<br/>
0.8: National technologies are recognized internationally.<br/>
0.9: The nation becomes a leader in international cyber innovation.<br/>
1.0: The nation achieves global leadership in cyber technology, setting global standards.
</p>
</section>
{/* Amassing Wealth and/or Extracting Cryptocurrency Section */}
<section id="chapter6_8" className="mb-8">
<h3 className="text-lg font-medium mt-4">3.2.8 Amassing Wealth and/or Extracting Cryptocurrency</h3>

{/* テーブル形式で指標を表示 */}
<table className="min-w-full bg-white border border-gray-300">
<thead>
<tr>
<th className="py-2 px-4 border-b border-gray-300">Scale</th>
<th className="py-2 px-4 border-b border-gray-300">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.1</td>
<td className="py-2 px-4 border-b border-gray-300">Small-scale financial damage using information leakage (hundreds of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.2</td>
<td className="py-2 px-4 border-b border-gray-300">Minor financial damage from information leakage (thousands of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.3</td>
<td className="py-2 px-4 border-b border-gray-300">Small-scale financial damage from information leakage (tens of thousands of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.4</td>
<td className="py-2 px-4 border-b border-gray-300">Ransomware attacks or medium financial damage (tens of thousands of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.5</td>
<td className="py-2 px-4 border-b border-gray-300">Ransomware attacks or medium financial damage (hundreds of thousands of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.6</td>
<td className="py-2 px-4 border-b border-gray-300">Ransomware attacks or medium financial damage (millions of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.7</td>
<td className="py-2 px-4 border-b border-gray-300">Multiple ransomware attacks or major financial infrastructure attacks (millions of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.8</td>
<td className="py-2 px-4 border-b border-gray-300">Multiple ransomware attacks or large-scale financial infrastructure attacks (tens of millions of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">0.9</td>
<td className="py-2 px-4 border-b border-gray-300">Multiple ransomware attacks or large-scale financial infrastructure attacks (hundreds of millions of dollars).</td>
</tr>
<tr>
<td className="py-2 px-4 border-b border-gray-300">1.0</td>
<td className="py-2 px-4 border-b border-gray-300">National-level financial system attacks (billions of dollars).</td>
</tr>
</tbody>
</table>

{/* Justification for Scale Section */}
<h4 className="text-md font-medium mt-4">Justification for Scale</h4>
<p>
0.1: Small financial damage from information leakage affects limited targets.<br/>
0.2: Broader leakage impacts result in thousands of dollars in damage.<br/>
0.3: Large-scale leakage impacts medium-sized businesses with tens of thousands of dollars in damage.<br/>
0.4: Ransomware attacks result in tens of thousands of dollars in damage, affecting operations.<br/>
0.5: Medium-sized businesses face hundreds of thousands of dollars in damage from ransomware.<br/>
0.6: Large businesses experience significant financial damage, reaching millions of dollars.<br/>
0.7: Multiple ransomware attacks or large financial infrastructure attacks cause millions of dollars in damage.<br/>
0.8: Extensive attacks result in tens of millions of dollars in financial damage.<br/>
0.9: Large-scale attacks lead to hundreds of millions in damage.<br/>
1.0: Major attacks on national financial systems can cause billions of dollars in damage, severely impacting the economy.
</p>
</section>
      {/* </div> */}
    </div>
  );
}

export default MainComponent;