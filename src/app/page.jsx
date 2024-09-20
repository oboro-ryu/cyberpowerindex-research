"use client";
import React from "react";

/*--6.1 Cyber Power Index For Taiwan--*/
// Define the AggregationComponent separately
function AggregationComponent() {
  const [objectiveData, setObjectiveData] = React.useState([
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.7, CII: 0.8, weight: 1.0 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.7, CII: 0.7, weight: 1.0 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.6, CII: 0.5, weight: 1.0 },
    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.4, CII: 0.4, weight: 1.0 },
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.6, CII: 0.6, weight: 1.0 },
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.8, CII: 0.8, weight: 0.7 },
    { objective: "Surveilling and Monitoring Domestic Groups", CCI: 0.7, CII: 0.7, weight: 0.3 },
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.7, CII: 0.7, weight: 0.6 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.6, CII: 0.6, weight: 0.4 },
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.7, CII: 0.8, weight: 0.7 },
    { objective: "Amassing Wealth and/or Extracting Cryptocurrency", CCI: 0.5, CII: 0.6, weight: 0.3 },
    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.4, CII: 0.6, weight: 0.6 },
    { objective: "Surveilling and Monitoring Domestic Groups", CCI: 0.3, CII: 0.5, weight: 0.4 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.8, CII: 0.7, weight: 0.7 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.7, CII: 0.6, weight: 0.3 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.8, CII: 0.7, weight: 0.6 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.7, CII: 0.6, weight: 0.4 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.8, CII: 0.7, weight: 0.6 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.7, CII: 0.6, weight: 0.4 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.8, CII: 0.7, weight: 0.7 },
    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.6, CII: 0.6, weight: 0.3 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.7, CII: 0.6, weight: 0.6 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.6, CII: 0.5, weight: 0.4 },
    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.6, CII: 0.7, weight: 0.6 },
    { objective: "Surveilling and Monitoring Domestic Groups", CCI: 0.5, CII: 0.6, weight: 0.4 },
    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.7, CII: 0.6, weight: 0.5 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.6, CII: 0.7, weight: 0.5 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.8, CII: 0.7, weight: 0.7 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.7, CII: 0.6, weight: 0.3 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.7, CII: 0.7, weight: 0.7 },
    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.6, CII: 0.6, weight: 0.3 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.8, CII: 0.8, weight: 0.7 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.7, CII: 0.6, weight: 0.3 },
    { objective: "Surveilling and Monitoring Domestic Groups", CCI: 0.5, CII: 0.5, weight: 1.0 }
  ]);

  // Function to calculate average weighted scores for each objective
  const calculateAverageWeightedScores = () => {
    const groupedData = {};
    const countData = {};

    objectiveData.forEach(({ objective, CCI, CII, weight }) => {
      const weightedScore = CCI * CII * weight;
      if (groupedData[objective]) {
        groupedData[objective] += weightedScore;
        countData[objective] += 1; // Count the number of times the objective appears
      } else {
        groupedData[objective] = weightedScore;
        countData[objective] = 1;
      }
    });

    // Calculate the average by dividing the summed score by the count
    const averagedScores = {};
    for (const objective in groupedData) {
      averagedScores[objective] = groupedData[objective] / countData[objective];
    }

    return averagedScores;
  };

  const averagedScores = calculateAverageWeightedScores();

  return (
    <div>
      <h2>Average Weighted Scores by Objective</h2>
      <table className="w-full table-auto border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Objective</th>
            <th className="border border-gray-300 px-4 py-2">Average Weighted Score</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(averagedScores).map(([objective, score]) => (
            <tr key={objective}>
              <td className="border border-gray-300 px-4 py-2">{objective}</td>
              <td className="border border-gray-300 px-4 py-2">{score.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*------*/


/*--6.2 Cyber Power Index For China--*/
function ChinaAggregationComponent() {
  const [chinaObjectiveData, setChinaObjectiveData] = React.useState([
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.7, CII: 0.6, weight: 0.7, weightedScore: 0.7 * 0.6 * 0.7 },
    { objective: "Surveilling and Monitoring Domestic Groups", CCI: 0.5, CII: 0.5, weight: 0.3, weightedScore: 0.5 * 0.5 * 0.3 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.6, CII: 0.7, weight: 1.0, weightedScore: 0.6 * 0.7 * 1 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.6, CII: 0.6, weight: 1.0, weightedScore: 0.6 * 0.6 * 1 },
    { objective: "Defining International Cyber Norms and Technical Standards", CCI: 0.7, CII: 0.7, weight: 1.0, weightedScore: 0.7 * 0.7 * 1 },
    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.7, CII: 0.8, weight: 1.0, weightedScore: 0.7 * 0.8 * 1 },
    { objective: "Destroying or Disabling an Adversary’s Infrastructure and Capabilities", CCI: 0.8, CII: 0.7, weight: 1.0, weightedScore: 0.8 * 0.7 * 1 },
    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.6, CII: 0.5, weight: 1.0, weightedScore: 0.6 * 0.5 * 1 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.7, CII: 0.7, weight: 1.0, weightedScore: 0.7 * 0.7 * 1 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.6, CII: 0.6, weight: 1.0, weightedScore: 0.6 * 0.6 * 1 }
  ]);

  // Function to calculate the average weighted scores for China objectives
  const calculateChinaAverageWeightedScores = () => {
    const groupedData = {};
    const countData = {};

    chinaObjectiveData.forEach(({ objective, CCI, CII, weight }) => {
      const weightedScore = CCI * CII * weight;
      if (groupedData[objective]) {
        groupedData[objective] += weightedScore;
        countData[objective] += 1;
      } else {
        groupedData[objective] = weightedScore;
        countData[objective] = 1;
      }
    });

    // Calculate the average by dividing the summed score by the count
    const averagedScores = {};
    for (const objective in groupedData) {
      averagedScores[objective] = groupedData[objective] / countData[objective];
    }

    return averagedScores;
  };

  const chinaAveragedScores = calculateChinaAverageWeightedScores();
  return (
    <div>
      <h2>Average Weighted Scores by Objective (China)</h2>
      <table className="w-full table-auto border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Objective</th>
            <th className="border border-gray-300 px-4 py-2">Average Weighted Score</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(chinaAveragedScores).map(([objective, score]) => (
            <tr key={objective}>
              <td className="border border-gray-300 px-4 py-2">{objective}</td>
              <td className="border border-gray-300 px-4 py-2">{score.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
/*----下記は編集してはダメ--------*/

function MainComponent() {
  const [selectedChapter, setSelectedChapter] = React.useState("");
  const [showAllSections, setShowAllSections] = React.useState(true);

  const chapters = [
    { id: "abstract", name: "Abstract" },
    { id: "chapter1", name: "1. Introduction" },
    { id: "chapter2", name: "2. Literature Review" },
    { id: "chapter3", name: "3. Methodology" },
    { id: "chapter4", name: "4. Analysis and Findings" },
    { id: "chapter4_2_1", name: "4.2.1 Surveilling and Monitoring Domestic Groups" },
    { id: "chapter4_2_2", name: "4.2.2 Strengthening and Enhancing National Cyber Defense" },
    { id: "chapter4_2_3", name: "4.2.3 Controlling and Manipulating the Information Environment" },
    { id: "chapter4_2_4", name: "4.2.4 Foreign Intelligence Collection for National Security" },
    { id: "chapter4_2_5", name: "4.2.5 Growing National Cyber and Commercial Technology Competence" },
    { id: "chapter4_2_6", name: "4.2.6 Destroying or Disabling an Adversary’s Infrastructure"},
    { id: "chapter4_2_7", name: "4.2.7 Defining International Cyber Norms and Technical Standards" },
    { id: "chapter4_2_8", name: "4.2.8 Amassing Wealth and Extracting Cryptocurrency" },
    { id: "chapter5_1", name: "5.1 Results and Calculations For Taiwan" },
    { id: "chapter5_2", name: "5.2 Results and Calculations For China" },
    { id: "chapter6_1", name: "6.1 Cyber Power Index For Taiwan" },  
    { id: "chapter6_2", name: "6.2 Cyber Power Index For China" },  
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
        Name: SAITO RYUTARO | Student Number: i923109 | Course: 言語文化専攻 国際共生コミュニケーション
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
            {chapter.id === "abstract" && (
              <>
                <p className="mb-4">
                Taiwan is a global hub for semiconductor manufacturing, with its products serving as essential components in various electronic devices used in daily life, including smartphones, laptops, and gaming consoles. Notably, Taiwan Semiconductor Manufacturing Company (TSMC) accounts for over half of the global semiconductor market as a leading foundry, underscoring its profound influence. Therefore, Taiwan's stability is considered critically important for the global economy.
                </p>
                <p className="mb-4">
                Additionally, Taiwan is located approximately 160 kilometers off the southeastern coast of mainland China and is situated within what is known as the "first island chain." This region holds strategic importance for the United States, and there are concerns that if China were to unify with Taiwan, it could significantly enhance its influence in the Western Pacific, potentially threatening U.S. military bases located as far away as Guam and Hawaii. Western experts have warned that if China gains control over Taiwan, it would acquire one of the world’s most critical industries, thereby gaining substantial economic and military power. Conversely, China maintains that its intentions are purely peaceful, advocating for a harmonious unification.
                </p>
                <p className="mb-4">
                In this study, I employ the National Cyber Power Index (NCPI), structured by Cyber Intent Index (CII) and Cyber Capability Index(CCI) to conduct a comparative analysis of cyber capabilities among Japan, China, Taiwan, and the United States, focusing specifically on date from 2024. By quantifying the by the cyber capabilities of these four nations., we aim to assess Taiwan’s resilience against cyber threats. The results indicate that <strong>(台湾の結果を入れて)</strong>.
                </p>
              </>
            )}
            {chapter.id === "chapter1" && (
              <>
                <h3>1.1 Background</h3>
                <p className="mb-4">
                  The advancement of information and communication technologies
                  (ICTs) has dramatically transformed modern life, enabling
                  seamless communication, vast information access, and the
                  digitization of essential services. Governments and militaries
                  around the world have increasingly integrated these
                  technologies into their operations, improving efficiency and
                  bolstering national security measures. Many governments now
                  rely on digital platforms for tasks such as tax filing, digital
                  infrastructure management, and public services, while militaries
                  use ICTs for command-and-control operations, intelligence
                  gathering, and strategic decision-making.
                </p>
                <p className="mb-4">
                  Despite these advantages, the widespread adoption of ICTs has
                  also introduced significant vulnerabilities. Cyber threats such
                  as hacking, data breaches, and cyberattacks now pose
                  considerable risks to national security, as they compromise
                  sensitive information, disrupt critical infrastructure, and
                  destabilize economies. Cyberattacks have the potential to
                  undermine trust in public institutions, threaten democratic
                  systems, and weaken economic stability. These risks have
                  prompted nations to develop comprehensive National Cyber
                  Security Strategies (NCSS) to strengthen their defenses against
                  adversarial state and non-state actors.
                </p>
                <h3>1.2 Research Objectives</h3>
                <p className="mb-4">
                  The goal of this research is to evaluate Taiwan’s cybersecurity strength by analyzing specific cyber incidents and mapping them to the National Cyber Power Index (NCPI) framework. By conducting a comparative analysis of Taiwan's cyber power relative to over US, China, and Japan, this study aims to clarify how Taiwan’s cyber strategy influences its national security and its position in the global geopolitical landscape.
                </p>
                <p className="mb-4">
                  This research will explore how four national leverages its cyber capabilities to achieve key national objectives, including:
                </p>
                <p className="mb-4">
                  “Surveilling and Monitoring Domestic Groups, “Strengthening and Enhancing National Cyber Defenses”, “Controlling and Manipulating the Information Environment”, “Foreign Intelligence Collection for National Security”, “Growing National Cyber and Commercial Technology Competence”, “Destroying or Disabling an Adversary’s Infrastructure”, “Defining International Cyber Norms”, and “Amassing Wealth and Extracting Cryptocurrency”.
                </p>
                <p className="mb-4">
                  Using NCPI’s Cyber Intent Index (CII) and Cyber Capability Index (CCI), this study will provide a quantitative assessment of Taiwan's cyber power and its resilience against state-sponsored cyber threats.
                </p>
              </>
            )}
  
            {chapter.id === "chapter2" && (
        <>

          <h4>2.1 Cybersecurity Challenges in Taiwan</h4>
          <p className="mb-4">
            Taiwan's unique geopolitical position places it at the center of regional tensions, with cyberattacks playing a key role in shaping the balance of power in the Indo-Pacific region. Various studies have analyzed how cyberattacks are used in modern warfare to destabilize economies, gather intelligence, and compromise military capabilities. However, Taiwan’s specific challenges remain underrepresented in global cybersecurity studies, which often focus on the US, China, and Japan.
          </p>
          <p className="mb-4">
            Recent reports suggest that Chinese cyber operations are intensifying, particularly in targeting Taiwan’s critical infrastructure and intellectual property. As the global leader in semiconductor production, Taiwan’s IT sector has become a key target for state-sponsored cyberattacks seeking to disrupt production or steal valuable technological advancements. Furthermore, Taiwan’s reliance on digital systems for governance and public services increases its vulnerability to attacks aimed at disrupting essential services. For instance, the 2021 attack on Taiwan’s healthcare system caused widespread disruptions, highlighting the fragility of its digital infrastructure in the face of sophisticated cyber threats.
          </p>

          <h4>2.2 Theoretical Framework</h4>
          <p className="mb-4">
            Theoretical frameworks related to cyber operations often include theories of cyber deterrence, cyber power, and information warfare. These theories explore how states use cyber capabilities to achieve strategic objectives, influence adversaries, and protect national interests.
          </p>

          <h4>2.3 Previous Research</h4>
          <p className="mb-4">
            Previous studies have investigated various aspects of cyber operations, such as their role in modern warfare, the effectiveness of cybersecurity measures, and the implications of cyber threats on national security. However, gaps remain in understanding how different nations employ cyber strategies and their comprehensive impact on geopolitical stability. This research aims to address these gaps by providing a comparative analysis of cyber operations across multiple nations.
          </p>
        </>
      )}

      {chapter.id === "chapter3" && (
        <>

          <h4>3.1 National Cyber Power Index Framework</h4>
          <p className="mb-4">
            The National Cyber Power Index (NCPI) provides a comprehensive framework to assess a country’s cyber capabilities. It categorizes cyber power into eight strategic objectives:
          </p>
          <ol className="list-decimal ml-8 mb-4">
            <li>Surveilling and Monitoring Domestic Groups: The ability to surveil and monitor citizens and domestic entities for intelligence purposes.</li>
            <li>Strengthening and Enhancing National Cyber Defenses: Defending against cyberattacks, particularly those targeting critical infrastructure.</li>
            <li>Controlling and Manipulating the Information Environment: Influencing or controlling information flows within and outside the country.</li>
            <li>Foreign Intelligence Collection for National Security: Gathering intelligence from foreign actors through cyber means.</li>
            <li>Growing National Cyber and Commercial Technology Competence: Developing commercial cyber technologies and growing digital infrastructure.</li>
            <li>Destroying or Disabling an Adversary’s Infrastructure: Cyberattacks aimed at disabling or destroying foreign critical infrastructure.</li>
            <li>Defining International Cyber Norms: Setting global cyber standards and norms to influence international cyber governance.</li>
            <li>Amassing Wealth and Extracting Cryptocurrency: Engaging in cyber activities aimed at acquiring wealth, including cryptocurrency theft.</li>
          </ol>
          <p className="mb-4">
            Each cyber incident in this study is evaluated based on its relevance to one or more of these objectives, assigning weighted scores to measure the overall impact on Taiwan’s national cybersecurity.
          </p>

          <h4>3.2 Incident-Based Evaluation</h4>
          <p className="mb-4">
            To measure the severity of each incident, two indices are applied:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Cyber Capability Index (CCI):</strong> Measures the technical capability of the cyber operation.</li>
            <li><strong>Cyber Intent Index (CII):</strong> Measures the intent and strategic impact of the operation.</li>
          </ul>
          <p className="mb-4">
            Both CCI and CII are rated on a scale of 0.1 to 1.0, where 1.0 represents maximum impact. Each incident is mapped to the NCPI objectives, and the final score is calculated by aggregating the weighted impacts of each incident across multiple objectives.
          </p>
          <h4>3.3 Data Sources</h4>
          <p className="mb-4">
            The data for this study comes from two primary sources:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>112年度國家資通安全情勢報告:</strong> A comprehensive report on Taiwan’s cybersecurity incidents and threats, documenting key cyber events affecting Taiwan in recent years.</li>
            <li><strong>CSIS Significant Cyber Incidents Database:</strong> A timeline of major cyber incidents affecting nations globally, including Taiwan.</li>
          </ul>
          <p className="mb-4">
            These sources provide key data on Taiwan's exposure to cyber threats and allow for detailed mapping to the NCPI objectives.
          </p>

          <h4>3.4 Justification for the Selected Index and Consideration of Alternatives</h4>
          <p className="mb-4">
            In this study, the National Cyber Power Index (NCPI) was selected as the primary analytical framework for several key reasons. Firstly, NCPI is uniquely positioned to evaluate cyber power through eight national objectives—including surveillance and monitoring, strengthening national cyber defenses, information manipulation, foreign intelligence collection, growth in cyber and commercial technology competence, destruction or disabling of adversarial infrastructure, defining international cyber norms, and amassing wealth or extracting cryptocurrency. These objectives comprehensively cover the diverse aspects of modern cyber strategies, making NCPI the most suitable for the research aims, particularly in assessing military cyber capabilities.
          </p>
          <p className="mb-4">
            Other indices, such as the Cybersecurity Capacity Maturity Model (CMM) and the Cyber Readiness Index (CRI), were considered but ultimately deemed less appropriate for this study. These indices focus primarily on cybersecurity maturity and preparedness, which, while valuable, do not provide a holistic assessment of a nation’s cyber power. Specifically, they lack sufficient emphasis on military cyber capabilities and offensive operations, making them less relevant for the comparative analysis of Japan, the United States, China, and Taiwan in the context of the Taiwan situation.
          </p>
          <p className="mb-4">
            The Global Cybersecurity Index (GCI) was also evaluated as a potential framework. However, GCI is primarily concerned with assessing internal cybersecurity resilience and defense measures, and it does not adequately address the multifaceted nature of cyber power. GCI's exclusion of key indicators related to military cyber operations, intelligence gathering, and offensive capabilities limits its applicability to this study, which requires a more comprehensive evaluation of national cyber power.
          </p>
          <p className="mb-4">
            The Cyber Capabilities and National Power (CCNP) index was recognized for its qualitative assessment of national cyber ecosystems. However, the absence of a scoring or ranking system renders it unsuitable for the quantitative comparative analysis pursued in this research. While CCNP provides a valuable qualitative analysis of a nation’s cyber capabilities, it does not focus on specific national objectives as NCPI does, which is crucial for this study's objectives.
          </p>
          <p className="mb-4">
            Given these considerations, NCPI was determined to be the most appropriate framework for this research. Its ability to comprehensively evaluate the cyber power of Japan, the United States, China, and Taiwan, particularly in relation to military capabilities, makes it the optimal choice for the comparative analysis of national cyber strategies in the context of the Taiwan situation.
          </p>
        </>
      )}

      {chapter.id === "chapter4" && (
        <>
          {/* <h3>4. Analysis and Findings</h3> */}

          <h4>4.1 Objective Identification</h4>
          <ol className="list-decimal ml-8 mb-4">
            <li>Surveillance and Monitoring of Domestic Groups</li>
            <li>Strengthening and Enhancing National Cyber Defenses</li>
            <li>Controlling and Manipulating the Information Environment</li>
            <li>Foreign Intelligence Collection for National Security</li>
            <li>Growing National Cyber and Commercial Technology Competence</li>
            <li>Destroying or Disabling an Adversary’s Infrastructure and Capabilities</li>
            <li>Defining International Cyber Norms and Technical Standards</li>
            <li>Amassing Wealth and/or Extracting Cryptocurrency</li>
          </ol>

          <h4>4.2 Mapping to Operational Goals</h4>
          <p className="mb-4">
            Map collected operational data to each objective and assess their significance and impact on a scale from 0.1 to 1.0.
          {/* <h2 className="text-xl font-semibold mb-4">{chapter.name}</h2> */}
          </p>
        </>
      )}
      {chapter.id === "chapter4_2_1" && (
        <>
          <h3 className="text-lg font-medium mb-4">Scale and Description</h3>
          <table className="table-auto w-full text-left border-collapse mb-8">
            <thead>
              <tr className="border-b">
                <th className="p-2">Scale</th>
                <th className="p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">0.1</td>
                <td className="p-2">Initial and minimal surveillance activities.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.2</td>
                <td className="p-2">Small-scale, targeted surveillance.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.3</td>
                <td className="p-2">Small-scale, structured surveillance.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.4</td>
                <td className="p-2">Moderate, targeted surveillance.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.5</td>
                <td className="p-2">Moderate, comprehensive surveillance.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.6</td>
                <td className="p-2">Extended, semi-comprehensive surveillance.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.7</td>
                <td className="p-2">Extensive, targeted surveillance.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.8</td>
                <td className="p-2">Extensive, multi-platform surveillance.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.9</td>
                <td className="p-2">Near-total surveillance capability.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">1.0</td>
                <td className="p-2">Total, real-time surveillance.</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-lg font-medium mb-4">Justification for Scale</h3>
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Scale</th>
                <th className="p-2">Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">0.1</td>
                <td className="p-2">Very limited internet traffic monitoring is conducted, primarily focusing on specific, isolated incidents or individuals. Surveillance is reactionary and not systematically organized, being carried out on a case-by-case basis. The tools and technologies used are basic, with little to no automation or advanced features.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.2</td>
                <td className="p-2">Surveillance activities expand slightly to target small groups based on specific, well-defined threats. Basic data collection from internet traffic and communication logs is carried out, with minimal analytical capabilities. Surveillance efforts are mostly manual, with limited implementation of automated systems.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.3</td>
                <td className="p-2">Surveillance is conducted at a certain scale, targeting specific communities or groups identified as potential threats. Metadata from communications (e.g., call logs, email headers) is collected, but there is no deep content analysis. Basic automated systems for data sorting and filtering are introduced, though the scope is limited.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.4</td>
                <td className="p-2">An organized communications monitoring program is implemented, focusing on specific communities or social groups. Surveillance begins to include content analysis for specific keywords or phrases. More advanced data collection tools are introduced, but integration across different surveillance systems remains limited.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.5</td>
                <td className="p-2">Surveillance expands across multiple platforms, focusing on specific activities or events. Data collection includes both metadata and some content analysis, with more automated sorting and categorization. Surveillance programs are systematic, with threat lists regularly updated based on emerging threats.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.6</td>
                <td className="p-2">An extended communications monitoring program is implemented, covering a wider range of groups and activities. Automation in data analysis, including basic pattern recognition and anomaly detection, increases. Surveillance data is shared across various government agencies, enhancing coordination.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.7</td>
                <td className="p-2">A nationwide surveillance system is deployed, with extensive data collection across multiple communication channels. Advanced automated tools for real-time monitoring and basic predictive analysis are heavily used. Data integration across different surveillance systems improves, allowing for more comprehensive threat assessments.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.8</td>
                <td className="p-2">A nationwide monitoring system is implemented across all communication platforms, including social media, emails, and telecommunications. Advanced automation in surveillance processes, including real-time content analysis and trend monitoring, is in place. Surveillance data is cross-referenced with other national databases (e.g., criminal records, immigration data) to enhance monitoring capabilities.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.9</td>
                <td className="p-2">Near-complete coverage of all domestic communications with advanced data collection and real-time content analysis is achieved. AI and machine learning are used for predictive analysis and threat detection, capable of identifying emerging threats before they materialize. Integration with international surveillance networks enables monitoring of cross-border communications.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">1.0</td>
                <td className="p-2">A national-level surveillance system with full coverage of all domestic communications in real time across all platforms is established. Advanced surveillance technology using AI automatically identifies and responds to threats with minimal human intervention. Comprehensive data analysis capabilities, including behavioral analysis and long-term trend forecasting, are in place, allowing for preemptive action against potential threats.</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
          {chapter.id === "chapter4_2_2" && (
        <>
          <h3 className="text-lg font-medium mb-4">Scale and Description</h3>
          <table className="table-auto w-full text-left border-collapse mb-8">
            <thead>
              <tr className="border-b">
                <th className="p-2">Scale</th>
                <th className="p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">0.1</td>
                <td className="p-2">Initial implementation of basic cyber defense measures.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.2</td>
                <td className="p-2">Basic, sector-specific cyber defense deployment.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.3</td>
                <td className="p-2">Basic, broad-spectrum cyber defense deployment.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.4</td>
                <td className="p-2">Development of a systematic cyber defense architecture.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.5</td>
                <td className="p-2">Comprehensive industry-wide cyber defense implementation.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.6</td>
                <td className="p-2">Advanced, sector-wide cyber defense deployment.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.7</td>
                <td className="p-2">Execution of an integrated national cyber defense strategy.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.8</td>
                <td className="p-2">Enhancement of defensive capabilities through international cooperation.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.9</td>
                <td className="p-2">Near-complete integration of national and international cyber defense strategies.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">1.0</td>
                <td className="p-2">Full deployment of advanced cyber defense infrastructure.</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-lg font-medium mb-4">Justification for Scale</h3>
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Scale</th>
                <th className="p-2">Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">0.1</td>
                <td className="p-2">Cyber defense measures are minimal and primarily reactive, focusing on basic firewall implementation, antivirus software, and other fundamental security protocols. There is limited coordination across different sectors, and the infrastructure is largely untested against significant threats.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.2</td>
                <td className="p-2">Basic cyber defense mechanisms are extended to specific sectors, such as finance or critical infrastructure. Measures include more organized incident response protocols and early-stage threat detection systems. However, the approach remains sector-specific with limited cross-industry coordination.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.3</td>
                <td className="p-2">Cyber defense measures begin to cover multiple sectors, including government, industry, and critical services. While still basic, there is an increased emphasis on cybersecurity training and awareness. The deployment of these measures is broad but lacks depth and sophistication.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.4</td>
                <td className="p-2">A more structured and systematic approach to cyber defense is developed, with policies and frameworks being established at a national level. Cybersecurity measures are deployed across a wider range of industries, including small and medium-sized enterprises (SMEs). There is an emphasis on regular updates and improving response times.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.5</td>
                <td className="p-2">Cyber defense measures are systematically implemented across all major industries, including critical infrastructure, SMEs, and government sectors. The architecture includes threat intelligence sharing and coordinated response mechanisms. Security measures begin to incorporate more advanced threat detection and prevention technologies.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.6</td>
                <td className="p-2">Cyber defense architecture is now advanced, with significant integration across various sectors. Measures include automated threat detection, response, and recovery systems. There is also an increasing focus on protecting supply chains and ensuring the cybersecurity of third-party vendors.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.7</td>
                <td className="p-2">A national cyber defense strategy is fully executed, integrating all sectors under a unified cybersecurity framework. International cooperation begins to play a significant role in enhancing national defenses, with active participation in global cybersecurity initiatives. The strategy is continuously updated to adapt to new threats.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.8</td>
                <td className="p-2">A nationwide monitoring system is implemented across all communication platforms, including social media, emails, and telecommunications. Advanced automation in surveillance processes, including real-time content analysis and trend monitoring, is in place. Surveillance data is cross-referenced with other national databases (e.g., criminal records, immigration data) to enhance monitoring capabilities.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.9</td>
                <td className="p-2">National cyber defense strategies are nearly fully integrated with international standards, leading to highly coordinated and effective defense mechanisms. Advanced technologies are widely implemented, and the nation plays a key role in shaping global cybersecurity policies and practices.</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">1.0</td>
                <td className="p-2">The nation has fully deployed an advanced cyber defense infrastructure that meets or exceeds international standards. Defense technologies are cutting-edge, incorporating AI, machine learning, and quantum computing for real-time threat detection and response. The nation is a global leader in cybersecurity, setting standards for others to follow.</td>
              </tr>
            </tbody>
          </table>
        </>
        )}
        {chapter.id === "chapter4_2_3" && (
        <>
        <h3 className="text-lg font-medium mb-4">Scale and Description</h3>
            <table className="table-auto w-full text-left border-collapse mb-8">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Scale</th>
                  <th className="p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">0.1</td>
                  <td className="p-2">Limited, small-scale information operations targeting individual regions or groups with propaganda.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.2</td>
                  <td className="p-2">Information operations targeting multiple regions or small communities.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.3</td>
                  <td className="p-2">Extensive propaganda activities targeting specific domestic sectors (education, religion, etc.).</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.4</td>
                  <td className="p-2">Limited information operations targeting specific communities or small groups abroad with misinformation.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.5</td>
                  <td className="p-2">Medium-scale information operations targeting specific regions abroad.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.6</td>
                  <td className="p-2">Information operations and misinformation activities across multiple regions abroad.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.7</td>
                  <td className="p-2">Large-scale misinformation campaigns targeting multiple countries.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.8</td>
                  <td className="p-2">Extensive information operations across multiple countries or regions involving large-scale misinformation campaigns.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.9</td>
                  <td className="p-2">Continental-scale information operations targeting a series of countries or extensive regions.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">1.0</td>
                  <td className="p-2">Global information operations involving major media and social networks, affecting the entire world.</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg font-medium mb-4">Justification for Scale</h3>
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Scale</th>
                  <th className="p-2">Justification</th>
                </tr>
              </thead>
              <tbody>
              <tr className="border-b">
                <td className="p-2">0.1</td>
                <td className="p-2">
                  Limited small-scale information operations are often targeted at specific regions or communities, usually resulting in short-term impacts.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.2</td>
                <td className="p-2">
                  Multiple region or community targeting expands the influence but remains relatively small-scale.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.3</td>
                <td className="p-2">
                  Extensive propaganda in specific domestic sectors enhances societal impact.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.4</td>
                <td className="p-2">
                  Limited information operations abroad target specific communities or groups with misinformation.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.5</td>
                <td className="p-2">
                  Medium-scale operations targeting specific regions abroad may impact political or social dynamics.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.6</td>
                <td className="p-2">
                  Information operations and misinformation activities across multiple regions abroad show increasing influence.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.7</td>
                <td className="p-2">
                  Large-scale misinformation campaigns affect multiple countries and have broader impacts.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.8</td>
                <td className="p-2">
                  Cross-border large-scale misinformation operations span multiple countries or regions.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">0.9</td>
                <td className="p-2">
                  Continental-scale operations target a broad set of countries or regions.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">1.0</td>
                <td className="p-2">
                  Global operations through major media and social networks impact the entire world.
                </td>
              </tr>
            </tbody>
            </table>
            </>
            )}
            {chapter.id === "chapter4_2_4" && (
            <>
              <h3 className="text-lg font-medium mb-4">Scale and Description</h3>
              <table className="table-auto w-full text-left border-collapse mb-8">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Scale</th>
                    <th className="p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0.1</td>
                    <td className="p-2">Gathering information from a single or limited source.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.2</td>
                    <td className="p-2">Gathering information from multiple sources with low significance or from non-critical sectors.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.3</td>
                    <td className="p-2">Gathering important information within a limited scope.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.4</td>
                    <td className="p-2">Broader information collection from multiple sources, albeit still limited in scope.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.5</td>
                    <td className="p-2">Gathering critical information from diverse sources, targeting specific sectors with moderate impact on national security.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.6</td>
                    <td className="p-2">Sustained collection of information from multiple critical sectors.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.7</td>
                    <td className="p-2">Strategic collection of highly critical information from multiple sectors.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.8</td>
                    <td className="p-2">Coordinated and sustained intelligence collection activities targeting multiple critical sectors.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.9</td>
                    <td className="p-2">Extensive and strategic information collection across multiple critical sectors.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">1.0</td>
                    <td className="p-2">Continuous and comprehensive collection of critical information across military, political, and economic sectors.</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-lg font-medium mb-4">Justification for Scale</h3>
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Scale</th>
                    <th className="p-2">Justification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0.1</td>
                    <td className="p-2">Information collection from a single or limited source is generally small-scale and has limited impact. The information gathered is not critical and poses little to no direct threat to national security.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.2</td>
                    <td className="p-2">Information collection targets multiple sources but focuses on non-critical sectors or low-priority information. The gathered information is relevant but does not pose an immediate or significant threat to national security. The impact is minimal.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.3</td>
                    <td className="p-2">Collecting important information within a limited scope can have a mild impact on national security. The targets are limited to specific sectors, and the effects are usually short-term.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.4</td>
                    <td className="p-2">This level marks the beginning of broader information collection from multiple sources, albeit still limited in scope. The focus is on specific strategic sectors, which could introduce mild risks to national security.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.5</td>
                    <td className="p-2">This level represents a focused intelligence effort that targets specific sectors such as defense industries or political organizations. The gathered information is critical and potentially influences national security decisions. The impact is moderate.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.6</td>
                    <td className="p-2">Sustained collection of information from multiple critical sectors could have moderate to significant impacts on national security. The influence of this intelligence gathering extends broadly and may directly affect strategic decisions.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.7</td>
                    <td className="p-2">Strategic collection of highly critical information from multiple sectors can significantly impact military planning and diplomatic efforts. The effects are severe and can introduce long-term risks to national security.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.8</td>
                    <td className="p-2">At this level, the intelligence collection is well-coordinated, targeting multiple critical sectors such as military installations and government bodies. The information gathered has the potential to significantly disrupt national security operations. The impact is substantial.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.9</td>
                    <td className="p-2">Extensive and strategic information collection across multiple critical sectors directly related to national security creates a serious threat to a nation’s security framework. The intelligence activities are widespread and may have severe national-level consequences.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">1.0</td>
                    <td className="p-2">Continuous and comprehensive collection of critical information across military, political, and economic sectors poses a grave and sustained threat to national security. At this level, intelligence activities represent the most significant risks to the nation’s security.</td>
                  </tr>
                </tbody>
              </table>
            </>
            )}
            {chapter.id === "chapter4_2_5" && (
            <>
              <h3 className="text-lg font-medium mb-4">Scale and Description</h3>
              <table className="table-auto w-full text-left border-collapse mb-8">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Scale</th>
                    <th className="p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0.1</td>
                    <td className="p-2">Initial Stage</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.2</td>
                    <td className="p-2">Basic Training Expansion</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.3</td>
                    <td className="p-2">Initial Technology Development</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.4</td>
                    <td className="p-2">Intermediate Training Programs</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.5</td>
                    <td className="p-2">Applied Technology Development</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.6</td>
                    <td className="p-2">Recognized Domestic Innovation</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.7</td>
                    <td className="p-2">Advanced Research and Development</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.8</td>
                    <td className="p-2">Competitive International Presence</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.9</td>
                    <td className="p-2">Leading International Innovation</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">1.0</td>
                    <td className="p-2">Global Leadership</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-lg font-medium mb-4">Justification for Scale</h3>
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Scale</th>
                    <th className="p-2">Justification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0.1</td>
                    <td className="p-2">The nation has just started implementing basic cybersecurity training programs. These programs are generally introductory and may be targeted towards general awareness rather than specialized skills.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.2</td>
                    <td className="p-2">Expansion of basic cybersecurity training programs. These are now offered more widely across different sectors but are still foundational, with limited specialization.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.3</td>
                    <td className="p-2">Introduction of basic cybersecurity technologies with limited scope. The nation starts engaging in minor cybersecurity technology development projects that are primarily domestically focused.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.4</td>
                    <td className="p-2">Development of more specialized cybersecurity training programs that target specific industries or sectors. These programs are increasingly recognized by local industries.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.5</td>
                    <td className="p-2">Cybersecurity technology development becomes more focused on solving specific commercial problems, with initial positive outcomes in the domestic market. Startups or SMEs in the nation begin to emerge in the cybersecurity domain.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.6</td>
                    <td className="p-2">The nation’s cybersecurity technologies achieve significant commercial success domestically. National cybersecurity products or solutions start gaining recognition, leading to modest exports or partnerships with foreign entities.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.7</td>
                    <td className="p-2">The nation is actively involved in advanced research in cybersecurity, contributing to the creation of new technologies. Domestic cybersecurity companies or institutions start competing on a regional or international level.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.8</td>
                    <td className="p-2">The nation’s cybersecurity technologies are recognized as competitive on the international market. The country’s R&D in cyber technologies influences global cybersecurity trends, with products or services exported widely.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.9</td>
                    <td className="p-2">The nation’s cybersecurity technology firms or research institutions are leaders in the international market. The country’s advancements set benchmarks in the industry, and the nation plays a critical role in global cybersecurity innovation.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">1.0</td>
                    <td className="p-2">The nation establishes itself as a global leader in cybersecurity technology, producing cutting-edge and innovative technologies that dominate international markets. The nation’s cybersecurity innovations are considered state-of-the-art, influencing global standards and practices.</td>
                  </tr>
                </tbody>
              </table>
            </>
            )}
            {chapter.id === "chapter4_2_6" && (
            <>
              <h3 className="text-lg font-medium mb-4">Scale and Description</h3>
            <table className="table-auto w-full text-left border-collapse mb-8">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Scale</th>
                  <th className="p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">0.1</td>
                  <td className="p-2">Small-scale cyber attacks on adversary’s network communications.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.2</td>
                  <td className="p-2">Limited network communication attacks with short-term impacts.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.3</td>
                  <td className="p-2">Targeted attacks on parts of critical infrastructure.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.4</td>
                  <td className="p-2">Regular attacks on major infrastructure (e.g., power grids, water systems).</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.5</td>
                  <td className="p-2">Regular and widespread infrastructure attacks.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.6</td>
                  <td className="p-2">Persistent attacks on multiple critical infrastructures.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.7</td>
                  <td className="p-2">Persistent and effective cyber attacks on multiple national infrastructures.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.8</td>
                  <td className="p-2">Extensive destruction of critical infrastructure with long-term effects.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.9</td>
                  <td className="p-2">Large-scale destruction attacks on national infrastructure.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">1.0</td>
                  <td className="p-2">Complete destruction or long-term disabling of critical military or civilian infrastructure related to national security.</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg font-medium mb-4">Justification for Scale</h3>
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Scale</th>
                  <th className="p-2">Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">0.1</td>
                  <td className="p-2">Small-scale attacks on network communications usually result in short-term disruptions.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.2</td>
                  <td className="p-2">Limited attacks have minor impacts on communication channels.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.3</td>
                  <td className="p-2">Targeted attacks on critical infrastructure parts may cause short-term interruptions.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.4</td>
                  <td className="p-2">Regular attacks on key infrastructure cause medium-level disruptions.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.5</td>
                  <td className="p-2">Widespread attacks on infrastructure create significant impact.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.6</td>
                  <td className="p-2">Persistent attacks on multiple critical infrastructures cause substantial long-term effects.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.7</td>
                  <td className="p-2">Effective attacks on national infrastructure have widespread impact.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.8</td>
                  <td className="p-2">Extensive attacks with long-term impacts significantly damage infrastructure.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0.9</td>
                  <td className="p-2">Large-scale destruction poses severe risks to national security.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">1.0</td>
                  <td className="p-2">Complete or long-term disabling attacks affect national security critically.</td>
                </tr>
              </tbody>
            </table>
            </>
            )}
            {chapter.id === "chapter4_2_7" && (
            <>
              <h3 className="text-lg font-medium mb-4">Scale and Description</h3>
              <table className="table-auto w-full text-left border-collapse mb-8">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Scale</th>
                    <th className="p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0.1</td>
                    <td className="p-2">Participation in international conferences or initial technical cooperation.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.2</td>
                    <td className="p-2">Initiating discussions or proposals related to initial technical cooperation.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.3</td>
                    <td className="p-2">Launching initial technical cooperation projects.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.4</td>
                    <td className="p-2">Active participation in creating international technical standards.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.5</td>
                    <td className="p-2">Taking a leading role in creating international technical standards.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.6</td>
                    <td className="p-2">Active involvement in creating multiple international technical standards.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.7</td>
                    <td className="p-2">Signing cyber treaties or leading major international technical standards.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.8</td>
                    <td className="p-2">Signing multiple cyber treaties and leading international technical standards.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.9</td>
                    <td className="p-2">Establishing leadership in formulating major international technical standards.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">1.0</td>
                    <td className="p-2">Leading international cyber policy and setting key cyber standards.</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-lg font-medium mb-4">Justification for Scale</h3>
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Scale</th>
                    <th className="p-2">Justification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0.1</td>
                    <td className="p-2">Initial participation in international conferences or technical cooperation builds the foundation for cybersecurity collaboration.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.2</td>
                    <td className="p-2">Proposals and discussions mark the beginning of collaborative efforts towards standard-setting.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.3</td>
                    <td className="p-2">The launch of technical cooperation projects signifies practical collaboration.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.4</td>
                    <td className="p-2">Active participation in international standards creation is crucial for contributing to cybersecurity standardization.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.5</td>
                    <td className="p-2">Leading roles in standards creation demonstrate significant influence.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.6</td>
                    <td className="p-2">Involvement in multiple standards indicates a high level of technical prowess.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.7</td>
                    <td className="p-2">Signing treaties or leading standards shows central involvement in international cybersecurity.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.8</td>
                    <td className="p-2">Leading multiple treaties and standards indicates very high influence.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.9</td>
                    <td className="p-2">Leadership in major standards formulation showcases top-tier influence.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">1.0</td>
                    <td className="p-2">Leading global cyber policies and setting standards highlights the highest level of influence.</td>
                  </tr>
                </tbody>
              </table>
            </>
            )}
            {chapter.id === "chapter4_2_8" && (
            <>
            <h3 className="text-lg font-medium mb-4">Scale and Description</h3>
              <table className="table-auto w-full text-left border-collapse mb-8">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Scale</th>
                    <th className="p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0.1</td>
                    <td className="p-2">Small-scale financial damage using information leakage (hundreds of dollars).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.2</td>
                    <td className="p-2">Minor financial damage from information leakage (thousands of dollars).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.3</td>
                    <td className="p-2">Small-scale financial damage from information leakage (tens of thousands of dollars).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.4</td>
                    <td className="p-2">Ransomware attacks or medium financial damage (tens of thousands of dollars).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.5</td>
                    <td className="p-2">Ransomware attacks or medium financial damage (hundreds of thousands of dollars).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.6</td>
                    <td className="p-2">Ransomware attacks or medium financial damage (millions of dollars).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.7</td>
                    <td className="p-2">Multiple ransomware attacks or major financial infrastructure attacks (millions of dollars).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.8</td>
                    <td className="p-2">Multiple ransomware attacks or large-scale financial infrastructure attacks (tens of millions of dollars).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.9</td>
                    <td className="p-2">Multiple ransomware attacks or large-scale financial infrastructure attacks (hundreds of millions of dollars).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">1.0</td>
                    <td className="p-2">National-level financial system attacks (billions of dollars).</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-lg font-medium mb-4">Justification for Scale</h3>
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Scale</th>
                    <th className="p-2">Justification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0.1</td>
                    <td className="p-2">Small financial damage from information leakage affects limited targets.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.2</td>
                    <td className="p-2">Broader leakage impacts result in thousands of dollars in damage.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.3</td>
                    <td className="p-2">Large-scale leakage impacts medium-sized businesses with tens of thousands of dollars in damage.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.4</td>
                    <td className="p-2">Ransomware attacks result in tens of thousands of dollars in damage, affecting operations.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.5</td>
                    <td className="p-2">Medium-sized businesses face hundreds of thousands of dollars in damage from ransomware.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.6</td>
                    <td className="p-2">Large businesses experience significant financial damage, reaching millions of dollars.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.7</td>
                    <td className="p-2">Multiple ransomware attacks or large financial infrastructure attacks cause millions of dollars in damage.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.8</td>
                    <td className="p-2">Extensive attacks result in tens of millions of dollars in financial damage.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.9</td>
                    <td className="p-2">Large-scale attacks lead to hundreds of millions in damage.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">1.0</td>
                    <td className="p-2">Major attacks on national financial systems can cause billions of dollars in damage, severely impacting the economy.</td>
                  </tr>
                </tbody>
              </table>
            </>
            )}
            {/* {chapter.id === "chapter5_1" && (
              <> */}
                {/* <h3>5 Results and Calculations</h3> */}
                {chapter.id === "chapter5_1" && (
                <>

                <h3>5.1.1 Incident 1: APT Attacks Involving AI</h3>

                <h4>Objective: Foreign Intelligence Collection for National Security</h4>
                <p className="mb-4">
                  Evaluation: Strategic collection of critical information from multiple sectors.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.7
                  <br />
                  Reasoning: Sustained and effective collection from critical sectors through AI-driven techniques.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.8
                  <br />
                  Reasoning: Highly coordinated and sustained intelligence collection efforts leveraging advanced AI tools.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Foreign Intelligence Collection for National Security:
                    <br />
                    CCI: 0.7, CII: 0.8
                    <br />
                    Weighted Score: 0.7 × 0.8 = 0.56
                  </li>
                </ul>

                <h3>5.1.2 Incident 2: Critical Infrastructure Attacks</h3>

                <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                <p className="mb-4">
                  Evaluation: Execution of an integrated national cyber defense strategy to defend critical infrastructure.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.7
                  <br />
                  Reasoning: National-level response and coordination to defend critical infrastructure.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.7
                  <br />
                  Reasoning: Strong intent to disrupt critical national infrastructure, forcing enhanced defenses.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Strengthening and Enhancing National Cyber Defenses:
                    <br />
                    CCI: 0.7, CII: 0.7
                    <br />
                    Weighted Score: 0.7 × 0.7 = 0.49
                  </li>
                </ul>


                <h3>5.1.3 Incident 3: Threats to Cloud Services</h3>

                <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
                <p className="mb-4">
                  Evaluation: Applied technology development and sustained innovation targeting cloud services.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.6
                  <br />
                  Reasoning: Recognized domestic innovation and commercial technology development in cloud services.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.5
                  <br />
                  Reasoning: Moderate intent to exploit or develop cloud services for economic gain.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Growing National Cyber and Commercial Technology Competence:
                    <br />
                    CCI: 0.6, CII: 0.5
                    <br />
                    Weighted Score: 0.6 × 0.5 = 0.3
                  </li>
                </ul>



                <h3>5.1.4 Incident 4: Social Engineering Attacks</h3>

                <h4>Objective: Controlling and Manipulating the Information Environment</h4>
                <p className="mb-4">
                  Evaluation: Limited information operations targeting specific communities abroad.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.4
                  <br />
                  Reasoning: Basic operations aimed at specific communities.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.4
                  <br />
                  Reasoning: Moderate intent to manipulate information at a limited scale.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Controlling and Manipulating the Information Environment:
                    <br />
                    CCI: 0.4, CII: 0.4
                    <br />
                    Weighted Score: 0.4 × 0.4 = 0.16
                  </li>
                </ul>


                <h3>5.1.5 Incident 5: Supplier Failure Leading to Security Incidents</h3>
                <h4>Objective: Foreign Intelligence Collection for National Security</h4>
                <p className="mb-4">
                  Evaluation: Sustained collection of information from critical sectors through third-party vulnerabilities.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.6
                  <br />
                  Reasoning: Strategic access through third parties to collect critical intelligence represents moderate capability.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.6
                  <br />
                  Reasoning: Strong intent to gather intelligence through supply chain vulnerabilities makes this a moderately capable intelligence operation.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Foreign Intelligence Collection for National Security:
                    <br />
                    CCI: 0.6, CII: 0.6
                    <br />
                    Weighted Score: 0.6 × 0.6 = 0.36
                  </li>
                </ul>

                <h3>5.1.6 Incident 6: Chinese Hackers Targeting Taiwanese Government Systems</h3>
                <h4>Objective: Foreign Intelligence Collection for National Security</h4>
                <p className="mb-4">
                  Evaluation: Extensive and sustained intelligence collection activities by Chinese hackers.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.8
                  <br />
                  Reasoning: Extensive and advanced intelligence collection targeting critical government systems and sensitive accounts.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.8
                  <br />
                  Reasoning: Strong intent to gather strategic intelligence across multiple sectors.
                </p>

                <h4>Objective: Surveilling and Monitoring Domestic Groups</h4>
                <p className="mb-4">
                  Evaluation: Extensive surveillance activities targeting government officials.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.7
                  <br />
                  Reasoning: Broad-scale surveillance targeting government officials reflects strong capability.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.7
                  <br />
                  Reasoning: Strong intent to monitor individuals within the government.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Foreign Intelligence Collection for National Security:
                    <br />
                    Weight: 70%
                    <br />
                    CCI: 0.8, CII: 0.8
                    <br />
                    Weighted Score: 0.8 × 0.8 × 0.7 = 0.448
                  </li>
                  <li>
                    Surveilling and Monitoring Domestic Groups:
                    <br />
                    Weight: 30%
                    <br />
                    CCI: 0.7, CII: 0.7
                    <br />
                    Weighted Score: 0.7 × 0.7 × 0.3 = 0.147
                  </li>
                </ul>
                <h3>5.1.7 Incident 7: Espionage Campaign Against Taiwanese Semiconductor Vendors</h3>
                <h4>Objective: Foreign Intelligence Collection for National Security</h4>
                <p className="mb-4">
                  Evaluation: Strategic collection of highly critical information, especially in the semiconductor industry.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.7
                  <br />
                  Reasoning: Strategic access to high-value technological information in critical sectors like semiconductors.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.7
                  <br />
                  Reasoning: Strong intent to gather critical intelligence on advanced technologies crucial to Taiwan's security.
                </p>

                <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
                <p className="mb-4">
                  Evaluation: Recognized domestic innovation and commercial technology competence targeted for competitive advantage.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.6
                  <br />
                  Reasoning: Advanced research and development targeted, particularly in the semiconductor industry.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.6
                  <br />
                  Reasoning: Intent to compromise commercial technologies for competitive advantage reflects strong commercial targeting capability.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Foreign Intelligence Collection for National Security:
                    <br />
                    Weight: 60%
                    <br />
                    CCI: 0.7, CII: 0.7
                    <br />
                    Weighted Score: 0.7 × 0.7 × 0.6 = 0.294
                  </li>
                  <li>
                    Growing National Cyber and Commercial Technology Competence:
                    <br />
                    Weight: 40%
                    <br />
                    CCI: 0.6, CII: 0.6
                    <br />
                    Weighted Score: 0.6 × 0.6 × 0.4 = 0.144
                  </li>
                </ul>

                <h3>5.1.8 Incident 8: Taiwanese Lieutenant Selling Secret Military Documents to China for Cryptocurrency</h3>
                <h4>Objective: Foreign Intelligence Collection for National Security</h4>
                <p className="mb-4">
                  Evaluation: This case involves the sale of highly classified military documents, including cyber warfare defense strategies, which represents a significant breach in Taiwan’s national security.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.7
                  <br />
                  Reasoning: The operation demonstrates considerable espionage capability. The ability to access, transfer, and conceal highly sensitive military documents without detection reflects advanced intelligence-gathering techniques.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.8
                  <br />
                  Reasoning: The intent was clear and highly strategic, aimed at obtaining Taiwan’s military intelligence. The use of cryptocurrency to avoid detection reflects a high level of intent to undermine Taiwan’s national security.
                </p>

                <h4>Objective: Amassing Wealth and/or Extracting Cryptocurrency</h4>
                <p className="mb-4">
                  Evaluation: The lieutenant received 8,000 units of Tether cryptocurrency as payment for the sale of military documents. This represents medium-scale financial damage through cryptocurrency transactions.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.5
                  <br />
                  Reasoning: The use of cryptocurrency for financial gain reflects moderate technical capability, though the primary objective was military espionage.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.6
                  <br />
                  Reasoning: The intent to use cryptocurrency for financial gain was clear, although it was secondary to the intelligence gathering.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Foreign Intelligence Collection for National Security:
                    <br />
                    Weight: 70%
                    <br />
                    CCI: 0.7, CII: 0.8
                    <br />
                    Weighted Score: 0.7 × 0.8 × 0.7 = 0.392
                  </li>
                  <li>
                    Amassing Wealth and/or Extracting Cryptocurrency:
                    <br />
                    Weight: 30%
                    <br />
                    CCI: 0.5, CII: 0.6
                    <br />
                    Weighted Score: 0.5 × 0.6 × 0.3 = 0.09
                  </li>
                </ul>
                <h3>5.1.10 Incident 10: China's Pressure on Foreign Lawmakers Ahead of the IPAC Forum in Taiwan</h3>
                <h4>Objective: Controlling and Manipulating the Information Environment</h4>
                <p className="mb-4">
                  Evaluation: This diplomatic pressure campaign aimed at manipulating the political landscape surrounding Taiwan to prevent foreign lawmakers from attending the IPAC summit.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.4
                  <br />
                  Reasoning: The capability demonstrated here is diplomatic and non-technical, involving direct communication rather than cyber tools.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.6
                  <br />
                  Reasoning: China’s intent to suppress Taiwan’s international engagement is clear, reflecting a medium level of strategic intent.
                </p>

                <h4>Objective: Surveilling and Monitoring Domestic and International Groups</h4>
                <p className="mb-4">
                  Evaluation: The systematic targeting of lawmakers across multiple countries suggests China's attempt to monitor and influence international political groups that engage with Taiwan.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.3
                  <br />
                  Reasoning: While non-cyber in nature, this operation demonstrates China's ability to monitor international political movements and track Taiwan-related events.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.5
                  <br />
                  Reasoning: The intent to monitor and track political activities is moderate, aiming to prevent broader international support for Taiwan.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Controlling and Manipulating the Information Environment:
                    <br />
                    Weight: 60%
                    <br />
                    CCI: 0.4, CII: 0.6
                    <br />
                    Weighted Score: 0.4 × 0.6 × 0.6 = 0.144
                  </li>
                  <li>
                    Surveilling and Monitoring Domestic and International Groups:
                    <br />
                    Weight: 40%
                    <br />
                    CCI: 0.3, CII: 0.5
                    <br />
                    Weighted Score: 0.3 × 0.5 × 0.4 = 0.06
                  </li>
                </ul>
                <h3>5.1.11 Incident 11: Ministry of Digital Affairs (MODA) regarding the deployment of low earth orbit (LEO) satellite coverage</h3>
                <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                <p className="mb-4">
                  Evaluation: The deployment of LEO satellites specifically addresses communication disruptions during disasters or conflicts, making it a key part of Taiwan's national defense strategy.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.8
                  <br />
                  Reasoning: The ability to provide continuous communication services, including in remote and disaster-prone areas, shows Taiwan's advanced national cyber defense capabilities.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.7
                  <br />
                  Reasoning: The deployment reflects a strategic effort to maintain communication resilience during times of crisis and ensure Taiwan’s military and political command centers remain functional.
                </p>

                <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
                <p className="mb-4">
                  Evaluation: While the satellite system is not yet available to the public, MODA's plan to involve telecom companies indicates a future focus on commercial application and expanding Taiwan's technological leadership.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.7
                  <br />
                  Reasoning: The use of LEO satellites to provide high-speed internet (90 Mbps download, 14 Mbps upload) demonstrates Taiwan's growing technological competence, especially in telecommunications.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.6
                  <br />
                  Reasoning: The intent is to strengthen Taiwan's commercial technology sector, with a moderate strategic intent to compete in the global satellite market.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Strengthening and Enhancing National Cyber Defenses:
                    <br />
                    Weight: 70%
                    <br />
                    CCI: 0.8, CII: 0.7
                    <br />
                    Weighted Score: 0.8 × 0.7 × 0.7 = 0.392
                  </li>
                  <li>
                    Growing National Cyber and Commercial Technology Competence:
                    <br />
                    Weight: 30%
                    <br />
                    CCI: 0.7, CII: 0.6
                    <br />
                    Weighted Score: 0.7 × 0.6 × 0.3 = 0.126
                  </li>
                </ul>

                <h3>5.1.12 Incident 12: Establishment of a cybersecurity center as part of the Taiwan Digital Acceleration Plan 3.0</h3>
                <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
                <p className="mb-4">
                  Evaluation: The opening of a cybersecurity center by Cisco directly contributes to enhancing Taiwan’s cyber capabilities, including talent development and technological innovation.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.8
                  <br />
                  Reasoning: Cisco’s initiative enhances Taiwan's technological competence, particularly in AI applications in transportation and sustainability.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.7
                  <br />
                  Reasoning: Cisco's collaboration with the government and tech associations reflects a long-term commitment to improving Taiwan's cyber infrastructure and addressing global talent shortages.
                </p>

                <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                <p className="mb-4">
                  Evaluation: Cisco’s cybersecurity center will improve Taiwan’s ability to detect and mitigate cyber threats, increasing the nation’s overall cyber resilience.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.7
                  <br />
                  Reasoning: The establishment of a cybersecurity center will enhance Taiwan's threat intelligence and cyber readiness, providing the necessary infrastructure to defend against sophisticated attacks.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.6
                  <br />
                  Reasoning: The intent to fortify Taiwan’s cybersecurity and improve threat response times is clear, although the immediate defense capabilities are still being developed.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Growing National Cyber and Commercial Technology Competence:
                    <br />
                    Weight: 60%
                    <br />
                    CCI: 0.8, CII: 0.7
                    <br />
                    Weighted Score: 0.8 × 0.7 × 0.6 = 0.336
                  </li>
                  <li>
                    Strengthening and Enhancing National Cyber Defenses:
                    <br />
                    Weight: 40%
                    <br />
                    CCI: 0.7, CII: 0.6
                    <br />
                    Weighted Score: 0.7 × 0.6 × 0.4 = 0.168
                  </li>
                </ul>

                <h3>5.1.13 Incident 13: Tsai Ing-wen's speech at CyberSec 2024</h3>

                <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                <p className="mb-4">
                  Evaluation: President Tsai highlighted Taiwan’s growing cyber capabilities through the creation of the Ministry of Digital Affairs (MODA) and emphasized increased cybersecurity investments, crucial for Taiwan’s strategic position in the global supply chain.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.8
                  <br />
                  Reasoning: The establishment of MODA and sustained growth in Taiwan's cybersecurity sector indicates a strong capability to enhance national cyber defenses and invest in proactive countermeasures.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.7
                  <br />
                  Reasoning: Taiwan’s strategic intent to protect national and international networks against cyber risks is clear, with a commitment to international cooperation.
                </p>

                <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
                <p className="mb-4">
                  Evaluation: Taiwan’s CyberSec 2024 conference showcased advanced cybersecurity technologies, with AI and quantum computing as key innovation areas. Taiwan is positioning itself as a leader in next-gen cybersecurity solutions.
                </p>
                <p className="mb-4">
                  CCI (Cyber Capability Index): 0.7
                  <br />
                  Reasoning: Taiwan's investment in cutting-edge technologies such as AI-based security and post-quantum cryptography reflects growing competence in the global cybersecurity market.
                </p>
                <p className="mb-4">
                  CII (Cyber Intent Index): 0.6
                  <br />
                  Reasoning: Taiwan’s intent to stay ahead of future cyber threats through collaborations with industry and academia shows a long-term strategy for technological advancement.
                </p>

                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Strengthening and Enhancing National Cyber Defenses:
                    <br />
                    Weight: 60%
                    <br />
                    CCI: 0.8, CII: 0.7
                    <br />
                    Weighted Score: 0.8 × 0.7 × 0.6 = 0.336
                  </li>
                  <li>
                    Growing National Cyber and Commercial Technology Competence:
                    <br />
                    Weight: 40%
                    <br />
                    CCI: 0.7, CII: 0.6
                    <br />
                    Weighted Score: 0.7 × 0.6 × 0.4 = 0.168
                  </li>
                </ul>
                    <h3>5.1.14 Incident 14: Taiwan faces up to 5 million cyberattacks daily</h3>
                    <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                    <p className="mb-4">
                      Evaluation: Given the scale and sophistication of cyberattacks, Taiwan has implemented more robust defenses, especially in response to election-related threats. The growing market for cybersecurity services reflects the nation's proactive stance in safeguarding its digital infrastructure.
                    </p>
                    <p className="mb-4">
                      CCI (Cyber Capability Index): 0.8
                      <br />
                      Reasoning: Taiwan's ability to defend against millions of cyberattacks daily and its growing investment in cybersecurity demonstrates advanced capabilities. The government has responded with stringent legal penalties and advanced security measures, particularly in the e-commerce sector.
                    </p>
                    <p className="mb-4">
                      CII (Cyber Intent Index): 0.7
                      <br />
                      Reasoning: The government’s intent to prevent attacks during critical moments such as elections and increase cybersecurity investments for public and private sectors shows strong intent.
                    </p>

                    <h4>Objective: Controlling and Manipulating the Information Environment</h4>
                    <p className="mb-4">
                      Evaluation: Misinformation and the spread of AI-generated content during elections are prominent concerns. Taiwan faces increasing numbers of deepfakes and IT bot attacks aimed at disrupting social and political stability.
                    </p>
                    <p className="mb-4">
                      CCI (Cyber Capability Index): 0.6
                      <br />
                      Reasoning: While Taiwan has robust systems, deepfake technology and misinformation bots present ongoing challenges, requiring more advanced detection and response systems.
                    </p>
                    <p className="mb-4">
                      CII (Cyber Intent Index): 0.6
                      <br />
                      Reasoning: The intent to manipulate the information environment through AI and bots is clear, requiring enhanced cybersecurity efforts.
                    </p>

                    <h4>Final Weighted Score Calculation</h4>
                    <ul className="list-disc ml-8 mb-4">
                      <li>
                        Strengthening and Enhancing National Cyber Defenses:
                        <br />
                        Weight: 70%
                        <br />
                        CCI: 0.8, CII: 0.7
                        <br />
                        Weighted Score: 0.8 × 0.7 × 0.7 = 0.392
                      </li>
                      <li>
                        Controlling and Manipulating the Information Environment:
                        <br />
                        Weight: 30%
                        <br />
                        CCI: 0.6, CII: 0.6
                        <br />
                        Weighted Score: 0.6 × 0.6 × 0.3 = 0.108
                      </li>
                    </ul>
                    <h3>5.1.15 Incident 15: Taiwan's participation in the Tuvalu undersea cable project</h3>
                    <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                    <p className="mb-4">
                      Evaluation: By joining the Tuvalu undersea cable project, Taiwan plays a crucial role in enhancing Tuvalu’s cyber infrastructure, ensuring it benefits from a secure and stable internet connection.
                    </p>
                    <p className="mb-4">
                      CCI (Cyber Capability Index): 0.7
                      <br />
                      Reasoning: The collaboration with global partners like Google in deploying critical telecommunications infrastructure reflects Taiwan's growing capabilities in cyber defense.
                    </p>
                    <p className="mb-4">
                      CII (Cyber Intent Index): 0.6
                      <br />
                      Reasoning: Taiwan’s intent to support its diplomatic allies underscores its strategic approach to strengthening regional cybersecurity.
                    </p>

                    <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
                    <p className="mb-4">
                      Evaluation: Taiwan’s involvement in this project demonstrates its commitment to expanding technological reach beyond its borders and enhancing commercial technology competence.
                    </p>
                    <p className="mb-4">
                      CCI (Cyber Capability Index): 0.6
                      <br />
                      Reasoning: Taiwan’s technological competence and its ability to contribute to global cyber and telecommunications initiatives are evident in its role in the project.
                    </p>
                    <p className="mb-4">
                      CII (Cyber Intent Index): 0.5
                      <br />
                      Reasoning: While the primary focus is on cyber defense, Taiwan also aims to enhance secure communications infrastructure for its allies.
                    </p>

                    <h4>Final Weighted Score Calculation</h4>
                    <ul className="list-disc ml-8 mb-4">
                      <li>
                        Strengthening and Enhancing National Cyber Defenses:
                        <br />
                        Weight: 60%
                        <br />
                        CCI: 0.7, CII: 0.6
                        <br />
                        Weighted Score: 0.7 × 0.6 × 0.6 = 0.252
                      </li>
                      <li>
                        Growing National Cyber and Commercial Technology Competence:
                        <br />
                        Weight: 40%
                        <br />
                        CCI: 0.6, CII: 0.5
                        <br />
                        Weighted Score: 0.6 × 0.5 × 0.4 = 0.12
                      </li>
                    </ul>

                    <h3>5.1.16 Incident 16: Taiwan has officially classified TikTok as a national security threat</h3>

                    <h4>Objective: Controlling and Manipulating the Information Environment</h4>
                    <p className="mb-4">
                      Evaluation: Taiwan's classification of TikTok as a national security threat aligns with its strategy to mitigate foreign influence on its digital environment, particularly regarding political manipulation and data breaches.
                    </p>
                    <p className="mb-4">
                      CCI (Cyber Capability Index): 0.6
                      <br />
                      Reasoning: TikTok’s ability to influence public discourse and collect sensitive data represents a moderate potential for manipulation in Taiwan’s digital and political environments.
                    </p>
                    <p className="mb-4">
                      CII (Cyber Intent Index): 0.7
                      <br />
                      Reasoning: Taiwan’s decision reflects a strong intent to prevent foreign actors from controlling the information environment.
                    </p>

                    <h4>Objective: Surveilling and Monitoring Domestic Groups</h4>
                    <p className="mb-4">
                      Evaluation: TikTok’s potential to collect user data and share it with the Chinese government underlines concerns about surveillance on Taiwanese citizens.
                    </p>
                    <p className="mb-4">
                      CCI (Cyber Capability Index): 0.5
                      <br />
                      Reasoning: TikTok’s data collection capabilities are significant, though the extent of its reach into sensitive data remains debated.
                    </p>
                    <p className="mb-4">
                      CII (Cyber Intent Index): 0.6
                      <br />
                      Reasoning: Taiwan’s ban on TikTok in government agencies reflects a moderate intent to protect citizens and institutions from foreign surveillance.
                    </p>

                    <h4>Final Weighted Score Calculation</h4>
                    <ul className="list-disc ml-8 mb-4">
                      <li>
                        Controlling and Manipulating the Information Environment:
                        <br />
                        Weight: 60%
                        <br />
                        CCI: 0.6, CII: 0.7
                        <br />
                        Weighted Score: 0.6 × 0.7 × 0.6 = 0.252
                      </li>
                      <li>
                        Surveilling and Monitoring Domestic Groups:
                        <br />
                        Weight: 40%
                        <br />
                        CCI: 0.5, CII: 0.6
                        <br />
                        Weighted Score: 0.5 × 0.6 × 0.4 = 0.12
                      </li>
                    </ul>
                  <h3>5.1.17 Incident 17: Taiwan Minister of Digital Affairs fields questions at legislature</h3>
                  <h4>Objective: Controlling and Manipulating the Information Environment</h4>
                  <p className="mb-4">
                    Evaluation: Audrey Tang’s participation in the Summit for Democracy and defense of Taiwan's approach to combating disinformation through AI technology highlight Taiwan’s proactive stance on curbing the influence of false information. Her remarks emphasize Taiwan's commitment to promoting information transparency and the ethical use of AI to prevent the spread of deepfakes and AI-driven disinformation.
                  </p>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    Reasoning: Taiwan’s experience in using AI to combat disinformation during elections demonstrates a significant technological capability, reinforced by international cooperation with organizations like the National Institute of Standards and Technology (NIST).
                  </p>
                  <p className="mb-4">
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: Taiwan’s intent to counter disinformation through AI reflects a clear goal of ensuring election integrity and information security, though ongoing challenges from deepfake technology suggest room for improvement.
                  </p>

                  <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                  <p className="mb-4">
                    Evaluation: Tang’s response to internet fraud concerns highlights Taiwan’s commitment to strengthening its legal and technical infrastructure. The development of the Electronic Signature Act is a critical advancement in Taiwan's cybersecurity framework.
                  </p>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.6
                    <br />
                    Reasoning: Taiwan's steady progression in cyber defense capabilities, as seen in its international cybersecurity partnerships and the Electronic Signature Act, reinforces its defensive posture, but there are still areas needing improvement.
                  </p>
                  <p className="mb-4">
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: Taiwan’s active participation in enhancing its legal framework and aligning with international standards reflects a strong intent to protect its digital infrastructure.
                  </p>

                  <h4>Final Weighted Score Calculation</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>
                      Controlling and Manipulating the Information Environment:
                      <br />
                      Weight: 50% (focus on managing disinformation and AI-driven content)
                      <br />
                      CCI: 0.7, CII: 0.6
                      <br />
                      Weighted Score: 0.7 × 0.6 × 0.5 = 0.21
                    </li>
                    <li>
                      Strengthening and Enhancing National Cyber Defenses:
                      <br />
                      Weight: 50% (focus on preventing fraud and enhancing cyber defense)
                      <br />
                      CCI: 0.6, CII: 0.7
                      <br />
                      Weighted Score: 0.6 × 0.7 × 0.5 = 0.21
                    </li>
                  </ul>
                  <h3>5.1.18 Incident 18: Taiwan Digital Minister Stresses Global Cybersecurity Collaboration Importance</h3>

                  <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                  <p className="mb-4">
                    Evaluation: Audrey Tang’s speech at the 2024 Swiss Cyber Security Days underscores Taiwan’s efforts to protect critical infrastructure and improve cyber response capabilities through international cooperation, including participation in NATO’s annual cyber conflict conference.
                  </p>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    Reasoning: Taiwan’s active engagement in global cybersecurity forums, including cross-border defense exercises and collaboration with democracies, highlights its advanced cybersecurity capabilities.
                  </p>
                  <p className="mb-4">
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: Taiwan’s intent to bolster cybersecurity through global partnerships shows a clear focus on strengthening defenses against external threats.
                  </p>

                  <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
                  <p className="mb-4">
                    Evaluation: Taiwan’s participation in international cybersecurity conferences, alongside companies like Acer and Trend Micro, shows its commitment to advancing cyber and commercial technology.
                  </p>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    Reasoning: Taiwan’s showcase of its technological prowess, in partnership with key companies in global forums, underlines its growing capabilities in cyber defense and commercial cybersecurity technologies.
                  </p>
                  <p className="mb-4">
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: Taiwan’s intent to expand its technological influence through participation in international events and collaborations is evident, though the primary focus remains on defense rather than commercial growth.
                  </p>

                  <h4>Final Weighted Score Calculation</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>
                      Strengthening and Enhancing National Cyber Defenses:
                      <br />
                      Weight: 70% (focus on critical infrastructure protection and cyber defense cooperation)
                      <br />
                      CCI: 0.8, CII: 0.7
                      <br />
                      Weighted Score: 0.8 × 0.7 × 0.7 = 0.392
                    </li>
                    <li>
                      Growing National Cyber and Commercial Technology Competence:
                      <br />
                      Weight: 30% (focus on expanding technological capabilities in cyber technology)
                      <br />
                      CCI: 0.7, CII: 0.6
                      <br />
                      Weighted Score: 0.7 × 0.6 × 0.3 = 0.126
                    </li>
                  </ul>

                  <h3>5.1.19 Incident 19: Cyberattacks rose 24 hours before Taiwan election</h3>
                  <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                  <p className="mb-4">
                    Evaluation: The spike in cyberattacks targeting government offices and financial institutions 24 hours before Taiwan’s election demonstrates the need for robust cybersecurity measures to safeguard critical infrastructure and election integrity.
                  </p>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    Reasoning: Taiwan’s ability to withstand a significant surge in attacks without major disruption, due to its coordination with cybersecurity firms like Trellix, highlights its mature cybersecurity infrastructure.
                  </p>
                  <p className="mb-4">
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The government’s intent to protect election integrity and prevent attacks targeting sensitive data indicates a strong commitment to national cyber defenses.
                  </p>

                  <h4>Objective: Controlling and Manipulating the Information Environment</h4>
                  <p className="mb-4">
                    Evaluation: The likely use of kompromat, or attempts to gather damaging information on political opponents, shows efforts to manipulate public perception before the election.
                  </p>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.6
                    <br />
                    Reasoning: Taiwan’s defenses against misinformation campaigns are improving, though vulnerabilities in information protection, particularly in sensitive government records, remain.
                  </p>
                  <p className="mb-4">
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: The persistent threat of cyberattacks aimed at gathering politically compromising information shows the need for stronger measures to counter disinformation.
                  </p>

                  <h4>Final Weighted Score Calculation</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>
                      Strengthening and Enhancing National Cyber Defenses:
                      <br />
                      Weight: 70% (focus on defending critical infrastructure and sensitive data)
                      <br />
                      CCI: 0.7, CII: 0.7
                      <br />
                      Weighted Score: 0.7 × 0.7 × 0.7 = 0.343
                    </li>
                    <li>
                      Controlling and Manipulating the Information Environment:
                      <br />
                      Weight: 30% (focus on preventing information manipulation)
                      <br />
                      CCI: 0.6, CII: 0.6
                      <br />
                      Weighted Score: 0.6 × 0.6 × 0.3 = 0.108
                    </li>
                  </ul>
                  <h3>5.1.20 Incident 20: Taiwan Building Drone Defenses for Power Plants to Deter Chinese Attacks</h3>

                  <h4>Objective: Strengthening and Enhancing National Cyber and Physical Defenses</h4>
                  <p className="mb-4">
                    Evaluation: Taiwan’s decision to deploy drone jamming guns and other anti-drone devices at power plants and natural gas facilities shows its commitment to securing critical infrastructure from potential Chinese drone attacks. This effort highlights the integration of physical defenses with cybersecurity measures to safeguard critical infrastructure sectors.
                  </p>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    Reasoning: The swift implementation of drone defenses and cybersecurity protocols by Taiwan’s CPC Corporation and Taipower reflects an advanced capability in protecting critical infrastructure. Taiwan's Ministry of Economic Affairs (MOEA) has also successfully thwarted over five million cyberattacks, demonstrating an effective response to both cyber and physical threats.
                  </p>
                  <p className="mb-4">
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: The clear intent to safeguard energy, water, and electricity supply systems from Chinese threats is reflected in the deployment of drone jamming systems and preemptive countermeasures. Taiwan's proactive approach underscores a strong governmental focus on national security.
                  </p>

                  <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
                  <p className="mb-4">
                    Evaluation: The deployment of advanced drone defense technologies by Taiwan reflects its commitment to expanding commercial technology related to national defense. The collaboration between the Ministry of Economic Affairs, CPC Corporation, and Taipower positions Taiwan as a leader in integrated defense solutions for critical infrastructure.
                  </p>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    Reasoning: Taiwan’s ability to incorporate drone countermeasures within civilian infrastructure demonstrates its potential to leverage commercial technological development for national defense purposes. This progress also signals Taiwan’s domestic innovation in research and development (R&D).
                  </p>
                  <p className="mb-4">
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: Although the primary focus is on defense, Taiwan’s adoption of advanced drone jamming and cybersecurity techniques reflects an emerging intent to develop domestic commercial technology within the cybersecurity and defense sectors. However, the emphasis is primarily on defense rather than commercial growth.
                  </p>

                  <h4>Final Weighted Score Calculation</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>
                      Strengthening and Enhancing National Cyber and Physical Defenses:
                      <br />
                      Weight: 70% (focus on protecting critical infrastructure from both cyber and drone attacks)
                      <br />
                      CCI: 0.8, CII: 0.8
                      <br />
                      Weighted Score: 0.8 × 0.8 × 0.7 = 0.448
                    </li>
                    <li>
                      Growing National Cyber and Commercial Technology Competence:
                      <br />
                      Weight: 30% (focus on integrating commercial technologies for defense purposes)
                      <br />
                      CCI: 0.7, CII: 0.6
                      <br />
                      Weighted Score: 0.7 × 0.6 × 0.3 = 0.126
                    </li>
                  </ul>
                  <h3>5.1.21 Incident 21: Personal Data and Credential Breaches</h3>
                  <h4>Objective: Surveilling and Monitoring Domestic Groups</h4>
                  <p className="mb-4">
                    Evaluation: Moderate comprehensive surveillance targeting personal data.
                  </p>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.5
                    <br />
                    Reasoning: Moderate comprehensive surveillance targeting specific sectors, aiming to gather personal data from various domestic groups.
                  </p>
                  <p className="mb-4">
                    CII (Cyber Intent Index): 0.5
                    <br />
                    Reasoning: Moderate intent to monitor domestic groups through widespread data collection efforts.
                  </p>

                  <h4>Final Weighted Score Calculation</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>
                      Surveilling and Monitoring Domestic Groups:
                      <br />
                      CCI: 0.5, CII: 0.5
                      <br />
                      Weighted Score: 0.5 × 0.5 = 0.25
                    </li>
                  </ul>
                  </>
              )}

              {chapter.id === "chapter5_2" && (
              <>
                <h2>5.2 Incident Analysis and Weighting For China</h2>
                <p>The cyber incidents affecting China are evaluated and categorized according to the NCPI objectives. Each incident is assigned a weighted score based on the CCI and CII indices.</p>

                {/* 5.2.1 Incident 1 */}
                <h3>5.2.1 Incident 1: Data Security Risk Assessment by MIIT</h3>
                <p>Date: October 9, 2023</p>
                <h4>Objective 1: Strengthening and Enhancing National Cyber Defenses</h4>
                <ul className="list-disc ml-8">
                  <li>CCI (Cyber Capability Index): 0.7</li>
                  <li>Reasoning: The "Implementing Rules for Data Security Risk Assessment" require annual assessments for critical data handlers, showing a solidified approach to systematizing cyber defenses across industries.</li>
                </ul>
                <ul className="list-disc ml-8">
                  <li>CII (Cyber Intent Index): 0.6</li>
                  <li>Reasoning: The mandatory assessments for important or core data reflect an intent to protect critical information, but the scope is limited to certain sectors.</li>
                </ul>
                <h4>Objective 2: Surveilling and Monitoring Domestic Groups</h4>
                <ul className="list-disc ml-8">
                  <li>CCI (Cyber Capability Index): 0.5</li>
                  <li>Reasoning: The annual reporting requirements suggest oversight mechanisms that enable government monitoring of companies handling critical data.</li>
                </ul>
                <ul className="list-disc ml-8">
                  <li>CII (Cyber Intent Index): 0.5</li>
                  <li>Reasoning: Intent to monitor data handlers for compliance is evident, but it does not extend to broader surveillance practices.</li>
                </ul>
                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8">
                  <li>
                    Strengthening and Enhancing National Cyber Defenses
                    <br />
                    CCI: 0.7, CII: 0.6
                    <br />
                    Weighted Score: 0.7 × 0.6 × 0.7 = 0.294
                  </li>
                  <li>
                    Surveilling and Monitoring Domestic Groups
                    <br />
                    CCI: 0.5, CII: 0.5
                    <br />
                    Weighted Score: 0.5 × 0.5 × 0.3 = 0.075
                  </li>
                </ul>

                {/* 5.2.2 Incident 2 */}
                <h3>5.2.2 Incident 2: Automotive Industry Sectoral Developments</h3>
                <p>Date: July 26, 2023</p>
                <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                <ul className="list-disc ml-8">
                  <li>CCI (Cyber Capability Index): 0.6</li>
                  <li>Reasoning: The introduction of strict data security standards for intelligent connected vehicles indicates a moderate capability in managing cybersecurity risks in the evolving automotive sector, especially in autonomous driving.</li>
                </ul>
                <ul className="list-disc ml-8">
                  <li>CII (Cyber Intent Index): 0.7</li>
                  <li>Reasoning: The strong focus on safeguarding connected vehicle technologies demonstrates the government's clear intent to protect critical sectors linked to national security.</li>
                </ul>
                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8">
                  <li>
                    Strengthening and Enhancing National Cyber Defenses
                    <br />
                    CCI: 0.6, CII: 0.7
                    <br />
                    Weighted Score: 0.6 × 0.7 × 1 = 0.42
                  </li>
                </ul>

                {/* 5.2.3 Incident 3 */}
                <h3>5.2.3 Incident 3: Financial Industry Sectoral Developments</h3>
                <p>Date: July 24, 2023</p>
                <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
                <ul className="list-disc ml-8">
                  <li>CCI (Cyber Capability Index): 0.7</li>
                  <li>Reasoning: The "Measures for Management of Data Security in the Business Areas of the PBOC" emphasize a high level of data security protocols, especially in finance, which is a critical sector for national security.</li>
                </ul>
                <ul className="list-disc ml-8">
                  <li>CII (Cyber Intent Index): 0.6</li>
                  <li>Reasoning: Intent to fortify cybersecurity in financial institutions is strong, highlighting the government's concern with protecting financial data.</li>
                </ul>
                <h4>Final Weighted Score Calculation</h4>
                <ul className="list-disc ml-8">
                  <li>
                    Strengthening and Enhancing National Cyber Defenses
                    <br />
                    CCI: 0.7, CII: 0.6
                    <br />
                    Weighted Score: 0.7 × 0.6 × 1 = 0.42
                  </li>
                </ul>
                <h3>5.2.4 Incident 4: Healthcare Sector Developments</h3>
              <p>Date: August 24, 2023</p>
              <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
              <ul className="list-disc ml-8">
                <li>CCI (Cyber Capability Index): 0.6</li>
                <li>Reasoning: The adoption of new health data standards strengthens the defense of sensitive health data, ensuring enhanced security capabilities.</li>
              </ul>
              <ul className="list-disc ml-8">
                <li>CII (Cyber Intent Index): 0.6</li>
                <li>Reasoning: The government's intent to safeguard health data is clear, as seen in the development of strict health data processing standards.</li>
              </ul>
              <h4>Final Weighted Score Calculation</h4>
              <ul className="list-disc ml-8">
                <li>
                  Strengthening and Enhancing National Cyber Defenses
                  <br />
                  CCI: 0.6, CII: 0.6
                  <br />
                  Weighted Score: 0.6 × 0.6 × 1 = 0.36
                </li>
              </ul>

              {/* 5.2.5 Incident 5 */}
              <h3>5.2.5 Incident 5: Revisions to the Cyber Security Law (CSL)</h3>
              <p>Date: September 7, 2023</p>
              <h4>Objective: Defining International Cyber Norms and Technical Standards</h4>
              <ul className="list-disc ml-8">
                <li>CCI (Cyber Capability Index): 0.7</li>
                <li>Reasoning: The revisions to the CSL demonstrate China's efforts to position itself as a leader in shaping international cybersecurity standards.</li>
              </ul>
              <ul className="list-disc ml-8">
                <li>CII (Cyber Intent Index): 0.7</li>
                <li>Reasoning: The intent to take a leadership role in establishing global cyber norms is strong, as shown by the proposed changes to the law.</li>
              </ul>
              <h4>Final Weighted Score Calculation</h4>
              <ul className="list-disc ml-8">
                <li>
                  Defining International Cyber Norms and Technical Standards
                  <br />
                  CCI: 0.7, CII: 0.7
                  <br />
                  Weighted Score: 0.7 × 0.7 × 1 = 0.49
                </li>
              </ul>

              {/* 5.2.6 Incident 6 */}
              <h3>5.2.6 Incident 6: Swift Cybersecurity Reporting Mandate</h3>
              <p>Date: December 8, 2023</p>
              <h4>Objective: Strengthening and Enhancing National Cyber Defenses</h4>
              <ul className="list-disc ml-8">
                <li>CCI (Cyber Capability Index): 0.7</li>
                <li>Reasoning: The introduction of the mandatory reporting system increases the nation's real-time response to cyber threats, representing an advanced capability to manage security incidents.</li>
              </ul>
              <ul className="list-disc ml-8">
                <li>CII (Cyber Intent Index): 0.8</li>
                <li>Reasoning: The intent to enforce swift responses to cyber incidents is clear and shows a proactive stance in mitigating cyber threats.</li>
              </ul>
              <h4>Final Weighted Score Calculation</h4>
              <ul className="list-disc ml-8">
                <li>
                  Strengthening and Enhancing National Cyber Defenses
                  <br />
                  CCI: 0.7, CII: 0.8
                  <br />
                  Weighted Score: 0.7 × 0.8 × 1 = 0.56
                </li>
              </ul>
              {/* 5.2.7 Incident 7 */}
              <h3>5.2.7 Incident 7: Cybersecurity Review of a Global Semiconductor Supplier</h3>
              <p>Date: September 1, 2023</p>
              <h4>Objective: Destroying or Disabling an Adversary’s Infrastructure and Capabilities</h4>
              <ul className="list-disc ml-8">
                <li>CCI (Cyber Capability Index): 0.8</li>
                <li>Reasoning: The cybersecurity review of a foreign supplier shows China's advanced capability to detect and mitigate risks to its critical infrastructure.</li>
              </ul>
              <ul className="list-disc ml-8">
                <li>CII (Cyber Intent Index): 0.7</li>
                <li>Reasoning: Strong intent to protect the national infrastructure from foreign threats is evident in the comprehensive review and actions taken.</li>
              </ul>
              <h4>Final Weighted Score Calculation</h4>
              <ul className="list-disc ml-8">
                <li>
                  Destroying or Disabling an Adversary’s Infrastructure and Capabilities
                  <br />
                  CCI: 0.8, CII: 0.7
                  <br />
                  Weighted Score: 0.8 × 0.7 × 1 = 0.56
                </li>
              </ul>

              {/* 5.2.8 Incident 8 */}
              <h3>5.2.8 Incident 8: Data Breach at a Knowledge Service Platform</h3>
              <p>Date: September 1, 2023</p>
              <h4>Objective: Controlling and Manipulating the Information Environment</h4>
              <ul className="list-disc ml-8">
                <li>CCI (Cyber Capability Index): 0.6</li>
                <li>Reasoning: The mishandling of personal information highlights weaknesses in information control. However, enforcement actions to rectify this indicate efforts to improve capabilities.</li>
              </ul>
              <ul className="list-disc ml-8">
                <li>CII (Cyber Intent Index): 0.5</li>
                <li>Reasoning: While the breach shows vulnerabilities, the corrective measures reflect the intent to manage the flow of personal data effectively.</li>
              </ul>
              <h4>Final Weighted Score Calculation</h4>
              <ul className="list-disc ml-8">
                <li>
                  Controlling and Manipulating the Information Environment
                  <br />
                  CCI: 0.6, CII: 0.5
                  <br />
                  Weighted Score: 0.6 × 0.5 × 1 = 0.30
                </li>
              </ul>

              {/* 5.2.9 Incident 9 */}
              <h3>5.2.9 Incident 9: Inauguration of the National Data Bureau</h3>
              <p>Date: October 25, 2023</p>
              <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
              <ul className="list-disc ml-8">
                <li>CCI (Cyber Capability Index): 0.7</li>
                <li>Reasoning: The establishment of the National Data Bureau demonstrates significant competence in regulating and developing the data element market, positioning China as a leader in this area.</li>
              </ul>
              <ul className="list-disc ml-8">
                <li>CII (Cyber Intent Index): 0.7</li>
                <li>Reasoning: The intent to formalize and dominate the emerging data market is clear, showcasing a strategic focus on leveraging data as a national asset.</li>
              </ul>
              <h4>Final Weighted Score Calculation</h4>
              <ul className="list-disc ml-8">
                <li>
                  Growing National Cyber and Commercial Technology Competence
                  <br />
                  CCI: 0.7, CII: 0.7
                  <br />
                  Weighted Score: 0.7 × 0.7 × 1 = 0.49
                </li>
              </ul>

              {/* 5.2.10 Incident 10 */}
              <h3>5.2.10 Incident 10: Recording Data as an Asset in Financial Statements</h3>
              <p>Date: August 1, 2023</p>
              <h4>Objective: Growing National Cyber and Commercial Technology Competence</h4>
              <ul className="list-disc ml-8">
                <li>CCI (Cyber Capability Index): 0.6</li>
                <li>Reasoning: Recognizing data as an asset in financial statements indicates China's progress in incorporating data into its economic framework, enhancing its commercial technology competence.</li>
              </ul>
              <ul className="list-disc ml-8">
                <li>CII (Cyber Intent Index): 0.6</li>
                <li>Reasoning: The intent to drive the formalization of data as an economic asset is evident, aiming to integrate data into corporate and financial structures.</li>
              </ul>
              <h4>Final Weighted Score Calculation</h4>
              <ul className="list-disc ml-8">
                <li>
                  Growing National Cyber and Commercial Technology Competence
                  <br />
                  CCI: 0.6, CII: 0.6
                  <br />
                  Weighted Score: 0.6 × 0.6 × 1 = 0.36
                </li>
              </ul>
              </>
            )}
      
      {chapter.id === "chapter6_1" && <AggregationComponent />}
      {chapter.id === "chapter6_2" && <ChinaAggregationComponent />} 
          </section>
        ))}
      </div>
    </div>
    );
}

export default MainComponent;

        