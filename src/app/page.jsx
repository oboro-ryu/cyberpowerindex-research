"use client";
import React from "react";

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
            {chapter.id === "abstract" && (
              <>
                <p className="mb-4">
                  This research evaluates Taiwan's cybersecurity strength by
                  analyzing specific cyber incidents through the National Cyber
                  Power Index (NCPI) framework. Taiwan, a global hub for
                  semiconductor manufacturing, is frequently targeted by
                  state-sponsored cyberattacks, primarily from China, North Korea,
                  and Russia. These attacks range from foreign intelligence
                  collection to critical infrastructure sabotage. By assessing
                  Taiwan’s cyber power in relation to over 20 nations using NCPI’s
                  Cyber Intent Index (CII) and Cyber Capability Index (CCI), this
                  study quantifies Taiwan’s resilience against cyber threats. The
                  results indicate that while Taiwan demonstrates moderate
                  resilience, critical vulnerabilities remain in defending its
                  commercial technology sector and countering advanced persistent
                  threats (APT).
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

                <h4>5.1 Incident Analysis and Weighting For Taiwan</h4>
                <p className="mb-4">The cyber incidents affecting Taiwan are evaluated and categorized according to the NCPI objectives. Each incident is assigned a weighted score based on the CCI and CII indices.</p>

                <h4>5.1.1 Incident 1: Personal Data and Credential Breaches</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Surveilling and Monitoring Domestic Groups
                  <br />
                  <strong>Evaluation:</strong> Moderate comprehensive surveillance targeting personal data.
                  <br />
                  <strong>CCI:</strong> 0.5 (Moderate comprehensive surveillance targeting specific sectors)
                  <br />
                  <strong>CII:</strong> 0.5 (Moderate intent to monitor domestic groups)
                  <br />
                  <strong>Reasoning:</strong> This breach represents a widespread attempt to collect sensitive personal data, which aligns with moderate surveillance capabilities across specific groups or individuals.
                  <br />
                  <strong>Weighted Score:</strong> 0.5 × 0.5 = 0.25
                </p>

                <h4>5.1.2 Incident 2: APT Attacks Involving AI</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Foreign Intelligence Collection for National Security
                  <br />
                  <strong>Evaluation:</strong> Strategic collection of critical information from multiple sectors.
                  <br />
                  <strong>CCI:</strong> 0.7 (Sustained and effective collection from critical sectors)
                  <br />
                  <strong>CII:</strong> 0.8 (Highly coordinated and sustained intelligence collection efforts)
                  <br />
                  <strong>Reasoning:</strong> The APT attacks, leveraging AI technology, are aimed at gathering strategic intelligence, making this a high-level intelligence operation involving advanced technological tools.
                  <br />
                  <strong>Weighted Score:</strong> 0.7 × 0.8 = 0.56
                </p>
                <h4>5.1.3 Incident 3: Critical Infrastructure Attacks</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Strengthening and Enhancing National Cyber Defenses
                  <br />
                  <strong>Evaluation:</strong> Execution of an integrated national cyber defense strategy.
                  <br />
                  <strong>CCI:</strong> 0.7 (National-level response and coordination to defend critical infrastructure)
                  <br />
                  <strong>CII:</strong> 0.7 (Strong intent to disrupt critical national infrastructure, forcing enhanced defenses)
                  <br />
                  <strong>Reasoning:</strong> These attacks prompted a national-level defense response, showcasing Taiwan’s capability and intent to enhance its cyber defense strategies to protect vital infrastructure.
                  <br />
                  <strong>Weighted Score:</strong> 0.7 × 0.7 = 0.49
                </p>

                <h4>5.1.4 Incident 4: Threats to Cloud Services</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Growing National Cyber and Commercial Technology Competence
                  <br />
                  <strong>Evaluation:</strong> Applied technology development and sustained innovation.
                  <br />
                  <strong>CCI:</strong> 0.6 (Recognized domestic innovation and commercial technology development)
                  <br />
                  <strong>CII:</strong> 0.5 (Moderate intent to exploit or develop cloud services for economic gain)
                  <br />
                  <strong>Reasoning:</strong> Cloud services are key to national cyber competence, but the attack mainly targeted commercial technologies, reflecting moderate capability and intent in this domain.
                  <br />
                  <strong>Weighted Score:</strong> 0.6 × 0.5 = 0.3
                </p>

                <h4>5.1.5 Incident 5: Social Engineering Attacks</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Controlling and Manipulating the Information Environment
                  <br />
                  <strong>Evaluation:</strong> Limited information operations targeting specific communities abroad.
                  <br />
                  <strong>CCI:</strong> 0.4 (Basic operations aimed at specific communities)
                  <br />
                  <strong>CII:</strong> 0.4 (Moderate intent to manipulate information at a limited scale)
                  <br />
                  <strong>Reasoning:</strong> Social engineering attacks often focus on misinformation strategies, but in this case, they were conducted on a limited scale, targeting specific individuals or communities.
                  <br />
                  <strong>Weighted Score:</strong> 0.4 × 0.4 = 0.16
                </p>

                <h4>5.1.6 Incident 6: Supplier Failure Leading to Security Incidents</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Foreign Intelligence Collection for National Security
                  <br />
                  <strong>Evaluation:</strong> Sustained collection of information from critical sectors.
                  <br />
                  <strong>CCI:</strong> 0.6 (Strategic access through third parties to collect critical intelligence)
                  <br />
                  <strong>CII:</strong> 0.6 (Strong intent to gather intelligence through vulnerabilities in the supply chain)
                  <br />
                  <strong>Reasoning:</strong> Vulnerabilities in the supply chain offer a strategic route for intelligence collection, making this a moderately capable intelligence operation.
                  <br />
                  <strong>Weighted Score:</strong> 0.6 × 0.6 = 0.36
                </p>

                <h4>5.1.7 Incident 7: Chinese Hackers Targeting Taiwanese Government Systems</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Foreign Intelligence Collection for National Security
                  <br />
                  <strong>Evaluation:</strong> Extensive and sustained intelligence collection activities.
                  <br />
                  <strong>CCI:</strong> 0.8 (Extensive and advanced intelligence collection)
                  <br />
                  <strong>CII:</strong> 0.8 (Strong intent to gather strategic intelligence across multiple sectors)
                  <br />
                  <strong>Reasoning:</strong> The attack was highly coordinated, targeting critical government systems and sensitive personal accounts, demonstrating both high capability and intent.
                </p>
                <p className="mb-4">
                  <strong>Objective:</strong> Surveilling and Monitoring Domestic Groups
                  <br />
                  <strong>Evaluation:</strong> Extensive targeted surveillance.
                  <br />
                  <strong>CCI:</strong> 0.7 (Broad-scale surveillance targeting multiple government officials)
                  <br />
                  <strong>CII:</strong> 0.7 (Strong intent to monitor and surveil individuals within the government)
                  <br />
                  <strong>Reasoning:</strong> This attack demonstrates a high level of surveillance, particularly focusing on government officials, showing both strong capability and intent.
                </p>
                <p className="mb-4">
                  <strong>Final Weighted Score Calculation:</strong>
                  <br />
                  <strong>1. Foreign Intelligence Collection for National Security:</strong>
                  <br />
                  Weight: 70% | CCI: 0.8, CII: 0.8
                  <br />
                  Weighted Score: 0.8 × 0.8 × 0.7 = 0.448
                  <br />
                  <strong>2. Surveilling and Monitoring Domestic Groups:</strong>
                  <br />
                  Weight: 30% | CCI: 0.7, CII: 0.7
                  <br />
                  Weighted Score: 0.7 × 0.7 × 0.3 = 0.147
                </p>
                <h4>5.1.8 Incident 8: Espionage Campaign Against Taiwanese Semiconductor Vendors</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Foreign Intelligence Collection for National Security
                  <br />
                  <strong>Evaluation:</strong> Strategic collection of highly critical information.
                  <br />
                  <strong>CCI:</strong> 0.7 (Strategic access to high-value technological information)
                  <br />
                  <strong>CII:</strong> 0.7 (Strong intent to gather critical intelligence on advanced technologies)
                  <br />
                  <strong>Reasoning:</strong> The espionage campaign targeted key economic sectors, particularly semiconductors, which are vital to Taiwan’s national security.
                </p>
                <p className="mb-4">
                  <strong>Objective:</strong> Growing National Cyber and Commercial Technology Competence
                  <br />
                  <strong>Evaluation:</strong> Recognized domestic innovation and competitive commercial technology.
                  <br />
                  <strong>CCI:</strong> 0.6 (Advanced research and development targeted)
                  <br />
                  <strong>CII:</strong> 0.6 (Intent to compromise commercial technologies for competitive advantage)
                  <br />
                  <strong>Reasoning:</strong> The attack targeted Taiwan’s leading commercial technologies, particularly in the semiconductor industry, reflecting both intent and capability to compromise Taiwan’s technological leadership.
                </p>
                <p className="mb-4">
                  <strong>Final Weighted Score Calculation:</strong>
                  <br />
                  <strong>1. Foreign Intelligence Collection for National Security:</strong>
                  <br />
                  Weight: 60% | CCI: 0.7, CII: 0.7
                  <br />
                  Weighted Score: 0.7 × 0.7 × 0.6 = 0.294
                  <br />
                  <strong>2. Growing National Cyber and Commercial Technology Competence:</strong>
                  <br />
                  Weight: 40% | CCI: 0.6, CII: 0.6
                  <br />
                  Weighted Score: 0.6 × 0.6 × 0.4 = 0.144
                </p>

                <h4>5.1.9 Incident 9: Taiwanese Lieutenant Selling Secret Military Documents to China for Cryptocurrency</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Foreign Intelligence Collection for National Security
                  <br />
                  <strong>Evaluation:</strong> This case involves the sale of highly classified military documents, including cyber warfare defense strategies, which represents a significant breach in Taiwan’s national security.
                  <br />
                  <strong>CCI:</strong> 0.7 (Considerable espionage capability to access and conceal sensitive documents)
                  <br />
                  <strong>CII:</strong> 0.8 (Strong intent to acquire military intelligence on cyber defense strategies)
                  <br />
                  <strong>Reasoning:</strong> The sale of military documents to a Chinese buyer reflects an advanced intelligence-gathering operation that threatens national security.
                </p>
                <p className="mb-4">
                  <strong>Objective:</strong> Amassing Wealth and/or Extracting Cryptocurrency
                  <br />
                  <strong>Evaluation:</strong> The lieutenant received 8,000 units of Tether cryptocurrency, worth approximately NT$260,000 (USD $8,105).
                  <br />
                  <strong>CCI:</strong> 0.5 (Moderate capability to facilitate cryptocurrency transactions for illicit activities)
                  <br />
                  <strong>CII:</strong> 0.6 (Intent to use cryptocurrency to evade detection and amass financial gain)
                  <br />
                  <strong>Reasoning:</strong> The use of cryptocurrency to receive payment shows calculated intent to avoid traditional financial oversight.
                </p>
                <p className="mb-4">
                  <strong>Final Weighted Score Calculation:</strong>
                  <br />
                  <strong>1. Foreign Intelligence Collection for National Security:</strong>
                  <br />
                  Weight: 70% | CCI: 0.7, CII: 0.8
                  <br />
                  Weighted Score: 0.7 × 0.8 × 0.7 = 0.392
                  <br />
                  <strong>2. Amassing Wealth and/or Extracting Cryptocurrency:</strong>
                  <br />
                  Weight: 30% | CCI: 0.5, CII: 0.6
                  <br />
                  Weighted Score: 0.5 × 0.6 × 0.3 = 0.09
                </p>

                <h4>5.1.10 Incident 10: Cyberattack on a Taiwan government-affiliated research institute</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Destroying or Disabling an Adversary’s Infrastructure and Capabilities
                  <br />
                  <strong>Evaluation:</strong> A sophisticated cyberattack targeting a key research institution, aiming to disrupt research and gain unauthorized access to sensitive data.
                  <br />
                  <strong>CCI:</strong> 0.7 (Use of outdated software and customized tools by an advanced hacker group)
                  <br />
                  <strong>CII:</strong> 0.7 (Intent to infiltrate and disrupt government-affiliated research)
                  <br />
                  <strong>Reasoning:</strong> The attack demonstrated significant technical capability and was sustained for 11 days without detection.
                </p>
                <p className="mb-4">
                  <strong>Objective:</strong> Foreign Intelligence Collection for National Security
                  <br />
                  <strong>Evaluation:</strong> Given the affiliation of the targeted institution, the likely goal was to collect intelligence related to sensitive research or national security.
                  <br />
                  <strong>CCI:</strong> 0.8 (State-sponsored attackers used advanced and customized tools to avoid detection)
                  <br />
                  <strong>CII:</strong> 0.8 (Strong intent to gather intelligence on government research and national security)
                </p>
                <p className="mb-4">
                  <strong>Final Weighted Score Calculation:</strong>
                  <br />
                  <strong>1. Destroying or Disabling an Adversary’s Infrastructure:</strong>
                  <br />
                  Weight: 60% | CCI: 0.7, CII: 0.7
                  <br />
                  Weighted Score: 0.7 × 0.7 × 0.6 = 0.294
                  <br />
                  <strong>2. Foreign Intelligence Collection for National Security:</strong>
                  <br />
                  Weight: 40% | CCI: 0.8, CII: 0.8
                  <br />
                  Weighted Score: 0.8 × 0.8 × 0.4 = 0.256
                </p>
                <h4>5.1.11 Incident 11: Chinese Diplomatic Pressure on Foreign Lawmakers Before IPAC Forum</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Controlling and Manipulating the Information Environment
                  <br />
                  <strong>Evaluation:</strong> A diplomatic pressure campaign by Chinese officials aimed at manipulating international perceptions surrounding Taiwan.
                  <br />
                  <strong>CCI:</strong> 0.4 (Diplomatic and non-technical capability to influence lawmakers)
                  <br />
                  <strong>CII:</strong> 0.6 (Clear intent to manipulate international narratives regarding Taiwan’s legitimacy)
                  <br />
                  <strong>Reasoning:</strong> This effort to prevent foreign lawmakers from attending the summit is an example of information manipulation to control international discourse on Taiwan.
                </p>
                <p className="mb-4">
                  <strong>Objective:</strong> Surveilling and Monitoring Domestic and International Groups
                  <br />
                  <strong>Evaluation:</strong> Systematic targeting of lawmakers across multiple countries, suggesting an attempt to monitor and influence international political groups that engage with Taiwan.
                  <br />
                  <strong>CCI:</strong> 0.3 (Ability to monitor international political movements via diplomatic channels)
                  <br />
                  <strong>CII:</strong> 0.5 (Moderate intent to monitor international political activities to limit Taiwan’s influence)
                  <br />
                  <strong>Reasoning:</strong> The operation focuses on monitoring participation in the forum, aiming to reduce Taiwan’s diplomatic influence.
                </p>
                <p className="mb-4">
                  <strong>Final Weighted Score Calculation:</strong>
                  <br />
                  <strong>1. Controlling and Manipulating the Information Environment:</strong>
                  <br />
                  Weight: 60% | CCI: 0.4, CII: 0.6
                  <br />
                  Weighted Score: 0.4 × 0.6 × 0.6 = 0.144
                  <br />
                  <strong>2. Surveilling and Monitoring Domestic and International Groups:</strong>
                  <br />
                  Weight: 40% | CCI: 0.3, CII: 0.5
                  <br />
                  Weighted Score: 0.3 × 0.5 × 0.4 = 0.06
                </p>

                <h4>5.1.12 Incident 12: Deployment of LEO Satellites for Communication Resilience</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Strengthening and Enhancing National Cyber Defenses
                  <br />
                  <strong>Evaluation:</strong> Deployment of LEO satellites addresses communication resilience during disasters or conflicts, ensuring uninterrupted services in remote and disaster-prone areas.
                  <br />
                  <strong>CCI:</strong> 0.8 (Advanced national cyber defense capability through satellite technology)
                  <br />
                  <strong>CII:</strong> 0.7 (Clear intent to maintain communication resilience during crises)
                  <br />
                  <strong>Reasoning:</strong> The satellite initiative strengthens Taiwan’s military and political communications under extreme circumstances.
                </p>
                <p className="mb-4">
                  <strong>Objective:</strong> Growing National Cyber and Commercial Technology Competence
                  <br />
                  <strong>Evaluation:</strong> Collaboration with telecom companies to expand commercial applications, demonstrating a future focus on commercial technology.
                  <br />
                  <strong>CCI:</strong> 0.7 (Demonstrated technological competence in telecommunications via satellite coverage)
                  <br />
                  <strong>CII:</strong> 0.6 (Moderate intent to expand satellite services commercially)
                  <br />
                  <strong>Reasoning:</strong> While initially for government and military use, the collaboration with commercial entities shows intent to develop the sector commercially.
                </p>
                <p className="mb-4">
                  <strong>Final Weighted Score Calculation:</strong>
                  <br />
                  <strong>1. Strengthening and Enhancing National Cyber Defenses:</strong>
                  <br />
                  Weight: 70% | CCI: 0.8, CII: 0.7
                  <br />
                  Weighted Score: 0.8 × 0.7 × 0.7 = 0.392
                  <br />
                  <strong>2. Growing National Cyber and Commercial Technology Competence:</strong>
                  <br />
                  Weight: 30% | CCI: 0.7, CII: 0.6
                  <br />
                  Weighted Score: 0.7 × 0.6 × 0.3 = 0.126
                </p>

                <h4>5.1.13 Incident 13: Cybersecurity Center Launch under Taiwan Digital Acceleration Plan 3.0</h4>
                <p className="mb-4">
                  <strong>Objective:</strong> Growing National Cyber and Commercial Technology Competence
                  <br />
                  <strong>Evaluation:</strong> The launch of a cybersecurity center to enhance Taiwan’s technological innovation, including talent development and AI applications.
                  <br />
                  <strong>CCI:</strong> 0.8 (Advanced technological competence and talent development in cybersecurity)
                  <br />
                  <strong>CII:</strong> 0.7 (Strong intent to strengthen cyber infrastructure and AI applications)
                  <br />
                  <strong>Reasoning:</strong> This initiative significantly enhances Taiwan’s commercial technology and positions it as a leader in cybersecurity innovation.
                </p>
                <p className="mb-4">
                  <strong>Objective:</strong> Strengthening and Enhancing National Cyber Defenses
                  <br />
                  <strong>Evaluation:</strong> The cybersecurity center enhances Taiwan’s ability to mitigate cyber threats through improved infrastructure and threat intelligence.
                  <br />
                  <strong>CCI:</strong> 0.7 (Enhanced infrastructure for national cyber defense)
                  <br />
                  <strong>CII:</strong> 0.6 (Moderate intent to improve threat response and cyber defense infrastructure)
                  <br />
                  <strong>Reasoning:</strong> The center provides the necessary infrastructure to improve Taiwan’s cyber defense readiness.
                </p>
                <p className="mb-4">
                  <strong>Final Weighted Score Calculation:</strong>
                  <br />
                  <strong>1. Growing National Cyber and Commercial Technology Competence:</strong>
                  <br />
                  Weight: 60% | CCI: 0.8, CII: 0.7
                  <br />
                  Weighted Score: 0.8 × 0.7 × 0.6 = 0.336
                  <br />
                  <strong>2. Strengthening and Enhancing National Cyber Defenses:</strong>
                  <br />
                  Weight: 40% | CCI: 0.7, CII: 0.6
                  <br />
                  Weighted Score: 0.7 × 0.6 × 0.4 = 0.168
                </p>

                            {/* </>
                        )} */}
                </>
            )}
          </section>
        ))}
      </div>
    </div>
    );
}

export default MainComponent;

            