"use client";
import React from "react";

/*--6.1 Cyber Power Index For Taiwan--*/
// Define the AggregationComponent separately
function AggregationComponent() {
  const [objectiveData, setObjectiveData] = React.useState([
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.8, CII: 0.8, weight: 0.4 },
    { objective: "Surveillance and Monitoring of Domestic Groups", CCI: 0.7, CII: 0.7, weight: 0.075 },
    
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.7, CII: 0.7, weight: 0.4  },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.6, CII: 0.6, weight: 0.1 },

    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.7, CII: 0.8, weight: 0.4 },
    { objective: "Amassing Wealth and/or Extracting Cryptocurrency", CCI: 0.5, CII: 0.6, weight: 0.05 },

    { objective: "Destroying or Disabling an Adversary’s Infrastructure and Capabilities", CCI: 0.7, CII: 0.7, weight: 0.175 },
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.8, CII: 0.8, weight: 0.4 },

    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.4, CII: 0.6, weight: 0.075 },
    { objective: "Surveillance and Monitoring of Domestic Groups", CCI: 0.3, CII: 0.5, weight: 0.075 },

    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.7, CII: 0.7, weight: 0.4 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.6, CII: 0.6, weight: 0.1 },

    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.8, CII: 0.8, weight: 0.4 },
    { objective: "Surveillance and Monitoring of Domestic Groups", CCI: 0.7, CII: 0.7, weight: 0.075 },

    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.7, CII: 0.8, weight: 0.4},
    { objective: "Amassing Wealth and/or Extracting Cryptocurrency", CCI: 0.5, CII: 0.6, weight: 0.05 },

    { objective: "Destroying or Disabling an Adversary’s Infrastructure and Capabilities", CCI: 0.7, CII: 0.7, weight: 0.175 },
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.8, CII: 0.8, weight: 0.4 },

    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.8, CII: 0.7, weight: 0.4 },
    { objective: "Destroying or Disabling an Adversary’s Infrastructure and Capabilities", CCI: 0.6, CII: 0.5, weight: 0.175 },

    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.9, CII: 0.9, weight: 0.4 },

    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.8, CII: 0.7, weight: 0.4 },

    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.7, CII: 0.6, weight: 0.4 },

    { objective: "Destroying or Disabling an Adversary’s Infrastructure and Capabilities", CCI: 0.7, CII: 0.8, weight: 0.175 },

    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.5, CII: 0.6, weight: 0.4 },

    { objective: "Destroying or Disabling an Adversary’s Infrastructure and Capabilities", CCI: 0.8, CII: 0.9, weight: 0.175 },
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.8, CII: 0.9, weight: 0.4 },

    { objective: "Destroying or Disabling an Adversary’s Infrastructure and Capabilities", CCI: 0.7, CII: 0.7, weight: 0.175 },

    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.6, CII: 0.7, weight: 0.075 },
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.7, CII: 0.8, weight: 0.4 },

    { objective: "Destroying or Disabling an Adversary’s Infrastructure and Capabilities", CCI: 0.8, CII: 0.8, weight: 0.175 },
    { objective: "Foreign Intelligence Collection for National Security", CCI: 0.8, CII: 0.9, weight: 0.4 },

    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.6, CII: 0.7, weight: 0.125 },

    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.8, CII: 0.7, weight: 0.125 },
    { objective: "Controlling and Manipulating the Information Environment", CCI: 0.6, CII: 0.6, weight: 0.075 },

    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.8, CII: 0.8, weight: 0.125 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.7, CII: 0.6, weight: 0.1 },

    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.7, CII: 0.7, weight: 0.125 },

    { objective: "Strengthening and Enhancing National Cyber Defenses", CCI: 0.8, CII: 0.7, weight: 0.125 },
    { objective: "Growing National Cyber and Commercial Technology Competence", CCI: 0.7, CII: 0.6, weight: 0.1 }
  ]);

//   
// //Function to calculate average weighted scores for each objective
//   const calculateAverageWeightedScores = () => {
//     const groupedData = {};
//     const countData = {};

//     objectiveData.forEach(({ objective, CCI, CII, weight }) => {
//       const weightedScore = CCI * CII * weight;
//       if (groupedData[objective]) {
//         groupedData[objective] += weightedScore;
//         countData[objective] += 1; // Count the number of times the objective appears
//       } else {
//         groupedData[objective] = weightedScore;
//         countData[objective] = 1;
//       }
//     });

//     // Calculate the average by dividing the summed score by the count
//     const averagedScores = {};
//     for (const objective in groupedData) {
//       averagedScores[objective] = groupedData[objective] / countData[objective];
//     }

//     return averagedScores;
//   };

//   const averagedScores = calculateAverageWeightedScores();

//   return (
//     <div>
//       <h2>Average Weighted Scores by Objective</h2>
//       <table className="w-full table-auto border-collapse border border-gray-300 mb-4">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-300 px-4 py-2">Objective</th>
//             <th className="border border-gray-300 px-4 py-2">Average Weighted Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(averagedScores).map(([objective, score]) => (
//             <tr key={objective}>
//               <td className="border border-gray-300 px-4 py-2">{objective}</td>
//               <td className="border border-gray-300 px-4 py-2">{score.toFixed(3)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// Function to calculate average weighted scores for each objective
const calculateAverageWeightedScores = () => {
  const groupedData = {};
  const countData = {};

  // Iterate through each objective data and calculate the weighted score
  objectiveData.forEach(({ objective, CCI, CII, weight }) => {
    const weightedScore = CCI * CII * weight; // Calculate weighted score
    if (groupedData[objective]) {
      groupedData[objective] += weightedScore; // Add to the existing sum for the objective
      countData[objective] += 1; // Increment the count for the objective
    } else {
      groupedData[objective] = weightedScore; // Initialize sum for the objective
      countData[objective] = 1; // Initialize count for the objective
    }
  });

  // Calculate the average by dividing the summed score by the count of occurrences
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
    { id: "chapter3_1", name: "3. Methodology" },
    { id: "chapter3_2", name: "3.2 Adjusted NCPI Framework for the conflict over Taiwan" },
    { id: "chapter3_3", name: "3.3 Data Collection Methodology" },
    { id: "chapter4_1", name: "4. Analysis and Findings" },
    { id: "chapter4_2_1", name: "4.2.1 Surveilling and Monitoring Domestic Groups" },
    { id: "chapter4_2_2", name: "4.2.2 Strengthening and Enhancing National Cyber Defense" },
    { id: "chapter4_2_3", name: "4.2.3 Controlling and Manipulating the Information Environment" },
    { id: "chapter4_2_4", name: "4.2.4 Foreign Intelligence Collection for National Security" },
    { id: "chapter4_2_5", name: "4.2.5 Growing National Cyber and Commercial Technology Competence" },
    { id: "chapter4_2_6", name: "4.2.6 Destroying or Disabling an Adversary’s Infrastructure"},
    { id: "chapter4_2_7", name: "4.2.7 Defining International Cyber Norms and Technical Standards" },
    { id: "chapter4_2_8", name: "4.2.8 Amassing Wealth and Extracting Cryptocurrency" },
    { id: "chapter5_1", name: "5.1 Results and Calculations" },
    { id: "chapter5_2", name: "5.2 The Hacker News for Taiwan" },
    { id: "chapter5_3", name: "5.3 CSIS for Taiwan" },
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
                In this study, I employ the National Cyber Power Index (NCPI), structured by the Cyber Intent Index (CII) and Cyber Capability Index (CCI), to conduct a comparative analysis of cyber capabilities among Japan, China, Taiwan, and the United States, focusing specifically on data from 2024. This study utilizes these two key indices to assess the severity and intent behind major cyber incidents. By analyzing these incidents and mapping them to NCPI objectives, I aim to understand Taiwan's strengths and vulnerabilities in its cybersecurity strategy. The results indicate that <strong>(台湾の結果を入れて)</strong>.
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
      {chapter.id === "chapter3_1" && (

        <>
      <h4> 3.1 Incident-Based Evaluation</h4>
          <p className="mb-4">
            To accurately evaluate the impact of each incident, I use two indices:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Cyber Capability Index (CCI):</strong> This index quantifies the technical capability demonstrated during cyber operation, representing the effectiveness and sophistication of the attack.</li>
            <li><strong>Cyber Intent Index (CII):</strong> This index measures the strategic intent behind the operation, assessing the broader purposes and potential impact on national security.</li>
          </ul>
          <p className="mb-4">
            Both CCI and CII are scored on a scale of 0.1 to 1.0, with 1.0 representing the highest level of capability or intent. Each cyber incident’s overall impact is then calculated by multiplying by the CCI and CII scales:
          </p>
          <p className="mb-4">
            However, not all incidents carry the same significance for a nation’s overall cyber strategy. Accounting for this, a weighting factor is introduced, which reflects how critical a particular objective is for a nation’s security and strategy. This make certain of that incidents affecting key objectives are given appropriate emphasis in the final analysis.
          </p>
          <p className="mb-4">
            The formula is as follows:
          </p>
          <p className="mb-4 text-center">
            Weighted Score = (CCI × CII) × Weight
          </p>
          <p className="mb-4">
            For example, if the CCI of a particular operation is 0.7, the CII is 0.8, and the weight for a specific objective is 70%, the final score would be: 0.7 × 0.8 × 0.7 = 0.392. The sum of these weighted scores across all incidents and objectives provides an aggregate view of a nation’s cyber resilience and capabilities.
          </p>
          <p className="mb-4">
            The weighted score for each incident is summed across all incidents to provide a comprehensive view of a nation's cyber capabilities and resilience.
          </p>
          </>
      )}


          {chapter.id === "chapter3_2" && (
        <>
          {/* <p className="mb-4">
            In this study, the National Cyber Power Index (NCPI) framework is utilized to evaluate the cyber capabilities of Taiwan in comparison with other nations  and states such as China, Japan, and the United States. While the NCPI provides a comprehensive method for assessing cyber power through the use of the Cyber Capability Index (CCI) and Cyber Intent Index (CII), this research introduces a modified approach by applying weighted scores to better reflect Taiwan's specific strategic and security priorities in the context of its national security.
          </p> */}

          <h4>3.2.1 NCPI Formula Overview</h4>
          <p className="mb-4">
            The original NCPI formula is expressed as:
          </p>
          <p className="mb-4 text-center">
            <img src="/src/app/images/ncpi.png" alt="NCPI Formula" />
          </p>    
          <p className="mb-4">
            This formula aggregates the product of capability and intent for each of the eight key objectives that define national cyber power:
          </p>
          <ul className="list-decimal ml-8 mb-4">
            <li>Surveilling and Monitoring Domestic Groups</li>
            <li>Strengthening and Enhancing National Cyber Defenses</li>
            <li>Controlling and Manipulating the Information Environment</li>
            <li>Foreign Intelligence Collection for National Security</li>
            <li>Growing National Cyber and Commercial Technology Competence</li>
            <li>Destroying or Disabling an Adversary’s Infrastructure</li>
            <li>Defining International Cyber Norms</li>
            <li>Amassing Wealth and Extracting Cryptocurrency</li>
          </ul>
          <p className="mb-4">
            In this framework, equal weight is assigned to each of the eight objectives, assuming that all objectives contribute equally to a nation’s overall cyber power. This equal weighting provides a balanced view of cyber capabilities but may not always capture the unique priorities or threats faced by individual nations.
          </p>
        

          <h4>3.2.2 Introduction of Weighted Scores</h4>
          <p className="mb-4">
            In Taiwan’s case, not all objectives are equally critical. Taiwan faces heightened threats from Chinese cyber operations, particularly in areas like protecting critical infrastructure and countering foreign intelligence collection. Conversely, objectives such as amassing wealth through cyber activities may be less important.
          </p>
          <p className="mb-4">
            To reflect this, a weighted score approach is introduced. This approach applies greater emphasis (higher weight) to objectives that are crucial for Taiwan's defense, while giving lower weight to less critical areas. The formula used is:
          </p>
          <p className="mb-4 text-center">
            Weighted Score = (CCI × CII) × Weight
          </p>
          <p className="mb-4">
          
            For example, in Taiwan's case, objectives such as Foreign Intelligence Collection for National Security and Strengthening and Enhancing National Cyber Defenses are given higher weights due to the nation's focus on defending against foreign cyber espionage and protecting critical infrastructure.
          </p>
          <h4>3.2.3 Clarification of Weighted Score Methodology</h4>
          <p className="mb-4">
            It is essential to clarify the concept of weighting in this context. The
            weights applied to each objective are not arbitrarily assigned based on
            subjective judgment. Instead, they are determined by analyzing the
            frequency and severity of incidents related to each objective.
          </p>
          <p className="mb-4">The weighted score approach helps to:</p>
          <ul className="list-disc ml-8 mb-4">
            <li>
              <strong>Reflect real-world threats:</strong> By assigning weights
              based on data-driven insights, the model reflects the actual strategic
              focus of Taiwan’s cyber strategy.
            </li>
            <li>
              <strong>Prevent bias:</strong> Assigning weights based purely on
              subjective importance can introduce bias. By using incident frequency,
              the process remains grounded in empirical evidence.
            </li>
          </ul>

            
        </>
      )}


      
      {chapter.id === "chapter3_3" && (
        <>
          <h4>3.4.1 Data Sources</h4>
          <p className="mb-4">
          The data for this study comes from three primary sources:
          </p>
          
          <ul className="list-disc ml-8 mb-4">
            <li>
              <strong>112年度國家資通安全情勢報告:</strong> A comprehensive report on Taiwan’s cybersecurity incidents, published by Taiwan’s National Security Bureau. It documents key cyber events affecting Taiwan and provides in-depth insights into how the nation is defending against cyber threats.
            </li>
            <li>
              <strong>CSIS Significant Cyber Incidents Database:</strong> A timeline of major cyber incidents globally, maintained by the Center for Strategic and International Studies (CSIS). It offers a valuable comparison of cyber events that impact Taiwan and other nations.
            </li>
            <li><strong>The Hacker News: </strong>This source provides real-time reporting on cyber incidents, with a particular focus on threats emerging from targeting country’s cyber operations. Reports from The Hacker News related to Chinese America Japan Taiwan incidents in 2024 are crucial for understanding the immediate cyber risks the targeting countries face from those countries.
            </li>
          </ul>
          <h4>3.4.2 Data Collection Process</h4>
          <p className="mb-4">
          To ensure the data collected is accurate, comprehensive, and free from duplication, this study employs a hybrid data collection approach involving both manual and automated methods.
          </p>
          <ul>
            <li>
            <strong>Official Databases and Reports:</strong> Data from official organizations like Taiwan's National Security Bureau and international cybersecurity bodies (such as CISA and CSIS) provide reliable and verified data that serve as the foundation of the analysis.
            </li>
            <li>
              <strong>Data Cleaning and De-duplication:</strong>A rigorous data cleaning process is applied, ensuring that multiple reports on the same incident are cross-referenced using unique identifiers like event timestamps, attack types, and affected entities. This helps to maintain data integrity and prevent duplication.
            </li>
          </ul>
        </>
      )}
      {chapter.id === "chapter4_1" && (
        <>
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
          </>
      )}
    {chapter.id === "chapter4_2_1" && (
        <>
          <h4>4.2 Mapping to Operational Goals</h4>
          <p className="mb-4">
            Map collected operational data to each objective and assess their significance and impact on a scale from 0.1 to 1.0.
          {/* <h2 className="text-xl font-semibold mb-4">{chapter.name}</h2> */}
          </p>
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
                <h4>5.1 Incident Analysis and Weighting For Taiwan</h4>
                <p>The cyber incidents affecting Taiwan are evaluated and categorized according to the NCPI objectives. Each incident is assigned a weighted score based on the CCI and CII indices.</p>    
                  <h3>5.1.1 Incident 1: Chinese Hackers Targeting Taiwanese Government Systems</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                    <li>Surveilling and Monitoring Domestic Groups</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: The attack was highly coordinated, targeting critical government systems and sensitive personal accounts, demonstrating both high capability and intent.
                  </p>

                  <h4>Objective 2: Surveilling and Monitoring Domestic Groups</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: This attack demonstrates a high level of surveillance, particularly focusing on government officials, showing both strong capability and intent.
                  </p>
                  <h3>5.1.2 Incident 2: Espionage Campaign Against Taiwanese Semiconductor Vendors</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                    <li>Growing National Cyber and Commercial Technology Competence</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The espionage campaign targeted key economic sectors, particularly semiconductors, which are vital to Taiwan’s national security.
                  </p>

                  <h4>Objective 2: Growing National Cyber and Commercial Technology Competence</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.6
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: The attack targeted Taiwan’s leading commercial technologies, particularly in the semiconductor industry, reflecting both intent and capability to compromise Taiwan’s technological leadership.
                  </p>

                  <h3>5.1.3 Incident 3: Taiwanese Lieutenant Selling Secret Military Documents to China for Cryptocurrency</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                    <li>Amassing Wealth and/or Extracting Cryptocurrency</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: The operation demonstrates considerable espionage capability. The ability to access, transfer, and conceal highly sensitive military documents without immediate detection reflects advanced intelligence-gathering techniques.
                  </p>

                  <h4>Objective 2: Amassing Wealth and/or Extracting Cryptocurrency</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.5
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: The ability to facilitate cryptocurrency transactions of this scale demonstrates a moderate level of technical capability. 
                  </p>

                  <h3>5.1.4 Incident 4: Cyberattack on a Taiwan government-affiliated research institute</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Destroying or Disabling an Adversary’s Infrastructure and Capabilities</li>
                    <li>Foreign Intelligence Collection for National Security</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Destroying or Disabling an Adversary’s Infrastructure and Capabilities</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The use of outdated software and customized tools by a well-known hacker group like APT41 demonstrates significant technical expertise.
                  </p>

                  <h4>Objective 2: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: APT41, being state-sponsored, has shown significant skill in infiltrating critical infrastructure.
                  </p>

                  <h3>5.1.5 Incident 5: Chinese Espionage Pressure on Foreign Lawmakers Ahead of the Inter-Parliamentary Alliance on China (IPAC) Forum</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Controlling and Manipulating the Information Environment</li>
                    <li>Surveilling and Monitoring Domestic and International Groups</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Controlling and Manipulating the Information Environment</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.4
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: The operation involved direct communication with foreign lawmakers and does not rely heavily on cyber tools.
                  </p>

                  <h4>Objective 2: Surveilling and Monitoring Domestic and International Groups</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.3
                    <br />
                    CII (Cyber Intent Index): 0.5
                    <br />
                    Reasoning: The systematic targeting of lawmakers across multiple countries suggests an attempt by China to monitor and influence international political groups.
                  </p>

                  <h3>5.1.6 Incident 6: Espionage Campaign Against Taiwanese Semiconductor Vendors</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                    <li>Growing National Cyber and Commercial Technology Competence</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The espionage campaign strategically targeted Taiwan's semiconductor vendors, which are vital to Taiwan’s national security.
                  </p>

                  <h4>Objective 2: Growing National Cyber and Commercial Technology Competence</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.6
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: The attackers targeted advanced research and development efforts.
                  </p>

                  <h3>5.1.7 Incident 7: Chinese Hackers Targeting Taiwanese Government Systems</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                    <li>Surveilling and Monitoring Domestic Groups</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: The attack demonstrated high coordination and targeting of critical government systems and sensitive personal accounts.
                  </p>

                  <h4>Objective 2: Surveilling and Monitoring Domestic Groups</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The attackers focused on government officials and their networks, indicating a strong intent to monitor key individuals.
                  </p>

                  <h3>5.1.8 Incident 8: Taiwanese Lieutenant Selling Secret Military Documents to China for Cryptocurrency</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                    <li>Amassing Wealth and/or Extracting Cryptocurrency</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: The sale of highly sensitive military documents demonstrated advanced intelligence-gathering techniques.
                  </p>

                  <h4>Objective 2: Amassing Wealth and/or Extracting Cryptocurrency</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.5
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: The use of cryptocurrency to avoid detection reflected a moderate technical capability.
                  </p>

                  <h3>5.1.9 Incident 9: Cyberattack on a Taiwan Government-Affiliated Research Institute</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Destroying or Disabling an Adversary’s Infrastructure and Capabilities</li>
                    <li>Foreign Intelligence Collection for National Security</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Destroying or Disabling an Adversary’s Infrastructure and Capabilities</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The sophisticated attack targeted critical infrastructure of a government-affiliated institute and disrupted research activities.
                  </p>

                  <h4>Objective 2: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: The attack demonstrated a high level of skill in infiltrating critical government-related infrastructure.
                  </p>

                  <h3>5.1.10 Incident 10: Chinese Hackers Exploit GeoServer Flaw to Target APAC Nations with EAGLEDOOR Malware</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                    <li>Destroying or Disabling an Adversary’s Infrastructure and Capabilities</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The use of spear-phishing and exploitation of GeoServer flaws showed a coordinated and sophisticated intelligence collection campaign.
                  </p>

                  <h4>Objective 2: Destroying or Disabling an Adversary’s Infrastructure and Capabilities</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.6
                    <br />
                    CII (Cyber Intent Index): 0.5
                    <br />
                    Reasoning: The malware’s ability to disrupt critical infrastructure posed a moderate threat to system stability.
                  </p>

                  <h3>5.1.11 Incident 11: Chinese Engineer Charged in U.S. for Years-Long Cyber Espionage Targeting NASA and Military</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                  </ul>

                  <h4>Number of Objectives: 1</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.9
                    <br />
                    CII (Cyber Intent Index): 0.9
                    <br />
                    Reasoning: The extended spear-phishing campaign targeting U.S. military, NASA, and aerospace organizations revealed a highly organized and strategic intent to collect sensitive and proprietary data.
                  </p>

                  <h3>5.1.12 Incident 12: Chinese Hackers Exploit Visual Studio Code in Southeast Asian Cyberattacks</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                  </ul>

                  <h4>Number of Objectives: 1</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The use of Visual Studio Code’s reverse shell feature for espionage operations in Southeast Asia demonstrated a high level of technical capability.
                  </p>

                  <h3>5.1.13 Incident 13: Chinese-Speaking Hacker Group Targets Human Rights Studies in Middle East</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                  </ul>

                  <h4>Number of Objectives: 1</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: The targeting of Middle Eastern government entities focused on human rights studies demonstrated a moderate level of technical sophistication.
                  </p>

                  <h3>5.1.14 Incident 14: New Cyberattack Targets Chinese-Speaking Businesses with Cobalt Strike Payloads</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Destroying or Disabling an Adversary’s Infrastructure and Capabilities</li>
                  </ul>

                  <h4>Number of Objectives: 1</h4>

                  <h4>Objective 1: Destroying or Disabling an Adversary’s Infrastructure and Capabilities</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: The use of lateral movement, persistence, and deployment of Cobalt Strike to infiltrate and control compromised systems demonstrated a high level of technical sophistication.
                  </p>

                  <h3>5.1.15 Incident 15: macOS Version of HZ RAT Backdoor Targets Chinese Messaging App Users</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Foreign Intelligence Collection for National Security</li>
                  </ul>

                  <h4>Number of Objectives: 1</h4>

                  <h4>Objective 1: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.5
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: The use of HZ RAT to collect credentials and conduct system reconnaissance targeting users of Chinese messaging apps demonstrated moderate technical capability.
                  </p>

                  <h3>5.1.16 Incident 16: Chinese Volt Typhoon Exploits Versa Director Flaw, Targets U.S. and Global IT Sectors</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Destroying or Disabling an Adversary’s Infrastructure and Capabilities</li>
                    <li>Foreign Intelligence Collection for National Security</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Destroying or Disabling an Adversary’s Infrastructure and Capabilities</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.9
                    <br />
                    Reasoning: Volt Typhoon exploited a zero-day vulnerability in Versa Director, allowing them to infiltrate critical IT infrastructure.
                  </p>

                  <h4>Objective 2: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.9
                    <br />
                    Reasoning: The operation targeted sensitive credentials from high-value sectors in IT and ISP industries, demonstrating an advanced effort to collect intelligence.
                  </p>

                  <h3>5.1.17 Incident 17: Chinese Hackers Exploit Zero-Day Cisco Switch Flaw to Gain System Control</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Destroying or Disabling an Adversary’s Infrastructure and Capabilities</li>
                  </ul>

                  <h4>Number of Objectives: 1</h4>

                  <h4>Objective 1: Destroying or Disabling an Adversary’s Infrastructure and Capabilities</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: Velvet Ant’s exploitation of the Cisco switch vulnerability to maintain persistence and gain control over compromised systems demonstrated significant technical capability.
                  </p>

                  <h3>5.1.18 Incident 18: China-Backed Earth Baku Expands Cyber Attacks to Europe, Middle East, and Africa</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Controlling and Manipulating the Information Environment</li>
                    <li>Foreign Intelligence Collection for National Security</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Controlling and Manipulating the Information Environment</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.6
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: Earth Baku’s expansion into new regions indicated an increased focus on manipulating information environments, with public-facing applications used to deploy backdoor malware.
                  </p>

                  <h4>Objective 2: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: The campaign aimed at gathering intelligence from critical sectors, including government and media organizations.
                  </p>

                  <h3>5.1.19 Incident 19: China-Linked Hackers Compromise ISP to Deploy Malicious Software Updates</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Destroying or Disabling an Adversary’s Infrastructure and Capabilities</li>
                    <li>Foreign Intelligence Collection for National Security</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Destroying or Disabling an Adversary’s Infrastructure and Capabilities</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: The compromise of an ISP to deliver malicious software updates demonstrated significant technical capability, enabling widespread malware distribution.
                  </p>

                  <h4>Objective 2: Foreign Intelligence Collection for National Security</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.9
                    <br />
                    Reasoning: The attackers aimed to exfiltrate sensitive data through poisoned DNS requests.
                  </p>

                  <h3>5.1.20 Incident 20: U.S. Proposes Ban on Connected Vehicles Using Chinese and Russian Tech</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Strengthening and Enhancing National Cyber Defenses</li>
                  </ul>

                  <h4>Number of Objectives: 1</h4>

                  <h4>Objective 1: Strengthening and Enhancing National Cyber Defenses</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.6
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The U.S. proposal to ban connected vehicles using Chinese and Russian technology reflects a defensive strategy to reduce foreign risks in critical sectors.
                  </p>

                  <h3>5.1.21 Incident 21: Taiwan Faces 5 Million Cyberattacks Daily</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Strengthening and Enhancing National Cyber Defenses</li>
                    <li>Controlling and Manipulating the Information Environment</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Strengthening and Enhancing National Cyber Defenses</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: Taiwan’s capability to defend against millions of cyberattacks daily demonstrates a robust and advanced cyber defense mechanism.
                  </p>

                  <h4>Objective 2: Controlling and Manipulating the Information Environment</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.6
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: Taiwan faces ongoing challenges with misinformation and AI-generated deepfakes during elections.
                  </p>

                  <h3>5.1.22 Incident 22: Taiwan Building Drone Defenses for Power Plants to Deter Chinese Attacks</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Strengthening and Enhancing National Cyber and Physical Defenses</li>
                    <li>Growing National Cyber and Commercial Technology Competence</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Strengthening and Enhancing National Cyber and Physical Defenses</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.8
                    <br />
                    Reasoning: Taiwan’s deployment of drone jamming devices and anti-drone systems at critical infrastructure sites demonstrates a high level of capability in defending against physical threats.
                  </p>

                  <h4>Objective 2: Growing National Cyber and Commercial Technology Competence</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: The integration of advanced drone defense technology reflects Taiwan’s growing competence in leveraging commercial technology for national defense.
                  </p>

                  <h3>5.1.23 Incident 23: Taiwan Ministry of Digital Affairs Announces New Initiatives for Cyber Resilience</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Strengthening and Enhancing National Cyber Defenses</li>
                  </ul>

                  <h4>Number of Objectives: 1</h4>

                  <h4>Objective 1: Strengthening and Enhancing National Cyber Defenses</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The Ministry of Digital Affairs announced new initiatives focusing on increasing Taiwan’s cyber resilience.
                  </p>

                  <h3>5.1.24 Incident 24: Taiwan Deploys Satellite Communication Systems to Strengthen Cyber Defenses</h3>
                  <p>Date: [Insert Date]</p>

                  <h4>Relevant Objective(s):</h4>
                  <ul className="list-disc ml-8 mb-4">
                    <li>Strengthening and Enhancing National Cyber Defenses</li>
                    <li>Growing National Cyber and Commercial Technology Competence</li>
                  </ul>

                  <h4>Number of Objectives: 2</h4>

                  <h4>Objective 1: Strengthening and Enhancing National Cyber Defenses</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.8
                    <br />
                    CII (Cyber Intent Index): 0.7
                    <br />
                    Reasoning: The deployment of satellite communication systems addresses the issue of communication disruptions during conflicts and disasters.
                  </p>

                  <h4>Objective 2: Growing National Cyber and Commercial Technology Competence</h4>
                  <p className="mb-4">
                    CCI (Cyber Capability Index): 0.7
                    <br />
                    CII (Cyber Intent Index): 0.6
                    <br />
                    Reasoning: Taiwan’s effort to integrate satellite communication into commercial use reflects the country’s growing technological leadership.
                  </p>       
                  </>
              )}

              {chapter.id === "chapter5_2" && (
              <>
                <h3>NOT FINISHED</h3>
              </>
            )}
              {chapter.id === "chapter5_3" && (
              <>
                <h3>NOT FINISHED</h3>
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

        