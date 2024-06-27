import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import '../styles/index.css';

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState('education');

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return <Education />;
      case 'experience':
        return <Experience />;
      case 'personal':
        return <Personal />;
      case 'project':
        return <Project />;
      default:
        return <Education />;
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="photo">
          <StaticImage
            src="../images/suresh.jpg"
            alt="Profile Photo"
            placeholder="blurred"
            layout="fixed"
            width={200}
            height={275}
          />
        </div>
        <div className="description">
          <h1>Your Name</h1>
          <p>
          With nearly two decades of experience in the technology industry and a passion for learning new technologies, I bring a wealth of domain knowledge to the table. At Samsung, I thrived in an innovative work culture, gaining expertise in Edge Computing, IoT, Health, Messaging, and middleware across B2B, B2C, and Open Source landscapes. My proactive problem-solving skills have earned me numerous accolades, including "Best Developer" and "Super Saver," and opportunities to speak at various forums.
          </p>
          <p>
          Completing my Master's in Information Systems from the University of Washington has equipped me with a strong business and analytical approach to strategy and operations. Additionally, I pursued coursework in Entrepreneurship, creating product pitches in environmental and healthcare domains. I am eager to tackle challenging situations where I can contribute to achieving larger goals.
          </p>
        </div>
        <div className="tabs">
          <button onClick={() => setActiveTab('education')} className={activeTab === 'education' ? 'active' : ''}>Education</button>
          <button onClick={() => setActiveTab('experience')} className={activeTab === 'experience' ? 'active' : ''}>Experience</button>
          <button onClick={() => setActiveTab('personal')} className={activeTab === 'personal' ? 'active' : ''}>Personal</button>
          <button onClick={() => setActiveTab('project')} className={activeTab === 'project' ? 'active' : ''}>Project</button>
        </div>
        <div className="tab-content">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

const Education = () => (
  <div className="education">
    <h2>Education</h2>
    <ul>
      <li>
        <div className="education-item">
          <h3>M.S (Information Systems)</h3>
          <p>University of Washington, 2024</p>
        </div>
      </li>
      <li>
        <div className="education-item">
          <h3>M.S (Software Systems)</h3>
          <p>BITS Pilani, 2009</p>
        </div>
      </li>
      <li>
        <div className="education-item">
          <h3>B.Tech (Information Technology)</h3>
          <p>University of Madras, 2003</p>
        </div>
      </li>
    </ul>
  </div>
);


const Experience = () => (
  <div className="experience">
    <h2>Experience</h2>
    <ul>
      <li>
        <div className="experience-item">
          <h3>Samsung Research Institute India – Bangalore</h3>
          <p>May 2007 ~ May 2023</p>
          <ul>
            <li>LF Home Edge – Open-Source evangelist delivering 6 features over 4 releases. Maintained 90% code coverage.</li>
            <li>Smart Things Connector	 – Onboarding/Controlling of Bulb/HVAC IoT devices from 2 vendors (Philips/Ecobee) to SmartThings using Cloud to Cloud Connector (AWS Lambda). Increased the usage by 8% of SmartThings application.</li>
            <li>Telemedicine – Ask an Expert Service	 - Delivered a B2C telemedicine service for US market through SHealth application in collaboration with Amwell. Architected using Observer/Subscriber pattern through RxJava. 5% revenue increase.</li>
            <li>Samsung Service Manager	 – Server component for user and service management. Extended to varied use-case namely beta testing of Samsung App, Health program deployment and A/B testing management. Deployed in Samsung subsidiary.</li>
            <li>Remote Patient Monitoring – Patient vital monitoring remotely with integration to openEMR for smooth hospital visit. Showcased in the in-house ideation challenge by defining the requirements to development of Minimum Viable Product. </li>
            <li>Cardiac Rehab Service – A B2B service for health service providers to monitor and generate reports for cardiac rehab patients by working closely with different stakeholders namely Mayo clinic (NA region) and LifeFitness bike</li>
            <li>CChatON	 – Development, Commercialization (v1.0 ~ v3.5). Maintaining turnaround time (TAT) to minimum (a day for high priority bugs), managed short deadlines by effectively maintaining team health and project needs (with stretch goals as needed). The application had 100M MAU with global presence in 120 countries and 62 languages simultaneously supporting mobile and tablet versions.</li>
            <li>JNI Development – Designed and developed sensor/LBS javacall layer using the Brew Mobile Platform API’s.</li>
            <li>Application Management Software – Awarded “Super saver” for saving royalty fee, by developing a framework to download and install multimedia contents and J2ME application for BREW based handsets.</li>
          </ul>
        </div>
      </li>
      <li>
        <div className="experience-item">
          <h3>Samsung Electronics, Suwon, South Korea</h3>
          <p>Feature scoping along with development for Multi Device Experience. Credited as “Best Developer” by group lead.</p>
        </div>
      </li>
      <li>
        <div className="experience-item">
          <h3>Wipro Technologies</h3>
          <p>Jan 2004 ~ April 2007</p>
          <ul>
            <li>Java Application Manager: Toshiba – Developed security module and management of java root certificates.</li>
            <li>J2ME – System verification and compliance: Sony Ericsson – MIDlets for compliance of JSRs 120, 179.</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
);


const Personal = () => (
  <div className="personal">
    <h2>Personal</h2>
    <p>
      Sudha, a name like honeyed wine,<br />
      Sweet on the tongue, yet tinged with brine.<br />
      Your smile, a beacon in the night,<br />
      Now a memory, bittersweet and bright.<br /><br />

      Sundays linger, ghosts of bliss,<br />
      Two chairs remain, where one you'd miss.<br />
      Laughter's echo, faint and frail,<br />
      Haunts the space, a whispered tale.<br /><br />

      In every knot, a story told,<br />
      Of strands you bound, love to behold.<br />
      But now, they hold a poignant sting,<br />
      Of what was lost, on fleeting wing.<br /><br />

      Peaceful slumber, but hearts still ache,<br />
      For words unspoken, love to wake.<br />
      The sun may rise, the spirit roam,<br />
      Yet absence chills, a hollow home.<br /><br />

      Though bittersweet, our love won't fade,<br />
      In fading light, a promise made.<br />
      Memories dance, a bittersweet refrain,<br />
      Sudha, forever loved, forever in my heart you'll remain.
    </p>
    <p>
    After a considerable hiatus, I find myself compelled to put pen to paper and articulate the tumult of thoughts within me. Your presence in my life, though brief, left an indelible mark. Never did I anticipate such brevity. In the customary trajectory of arranged marriages, the initial years are dedicated to understanding one's partner, followed by the arrival of children. Our journey seemed to follow this pattern seamlessly. As we embraced the notion of a blissful family unit, fate intervened abruptly.
    Sudha harbored a long-standing desire for a place to call our own, and after extensive deliberation, we finally secured a home. Together, we poured our hearts into transforming mere walls into a sanctuary. Our initial year in our newfound abode was filled with joy. However, the advent of the Covid-19 pandemic forced the world indoors, and we found ourselves adapting to remote work within the confines of our home. Little did Sudha know that her time in this haven would be tragically short-lived.
    The unraveling began on September 26th—a date forever etched in my memory. Sudha began experiencing excruciating back pain and persistent bleeding, prompting online consultations amidst the prevailing fear of Covid. A sense of foreboding gnawed at me. By November 10th, Sudha's mother succumbed to illness, leaving us reeling. Witnessing Sudha's father grappling with the tragedy only compounded our anguish.
    <br /><br />
    In a mere 20 days, our lives took a darker turn. A visit to the gynecologist culminated in a referral to a cancer hospital. Within a week, our world was turned upside down as Sudha received a devastating diagnosis: Stage 2B cervical cancer. Her reaction, stoic yet tinged with a mother's concern for her child's future, remains vivid in my mind. Despite undergoing radiation and a milder chemotherapy regimen, Sudha remained steadfast in her responsibilities, never faltering in her duties or her commitment to work.
    Eight fleeting months remained, during which I cherished every moment with her. She spent 42 days in the ICU, tethered to a ventilator. I recall her unwavering spirit, demanding her laptop to tend to work even in the face of adversity. Her resilience was both inspiring and humbling. In her final days, her sole wish was to behold our child, a wish I fulfilled two days before her passing. The sight of her smile, albeit frail, brought a fleeting sense of solace amidst the prevailing despair.
    Our marriage, like many others, was a tapestry woven with both joyous moments and trials. Reflecting on our journey fills me with a profound sense of remorse. Now, adrift in a sea of solitude, I find myself bereft of companionship. The mere thought of religion and divine providence leaves me feeling suffocated, particularly considering Sudha's tumultuous upbringing. Despite her unwavering contentment with life's offerings, I find myself grappling with existential questions and self-blame.
    Unable to unburden myself emotionally before my elderly parents or our tender-hearted child, I navigate this tumultuous terrain alone. <br /> <br />
    The world outside appears alien and unforgiving, exacerbating my sense of isolation. I am mired in self-doubt and devoid of motivation for the future. Each passing day feels like an insurmountable hurdle, and social interactions only serve to deepen my anguish.
    In the depths of despair, I find solace in memories of Sudha's resilience and unwavering spirit. Though she may have departed this world, her legacy endures, a beacon of strength in my darkest hours.    
    </p>
  </div>
);


const Project = () => (
  <div className="project">
    <h2>Projects</h2>
    <div className="project-list">
      <div className="project-item">
        <p>Speaker at Webinar series of LF Edge (Oct’20) & “Embedded IoT World” Conference (April’2021)</p>
        <p>Presented on ‘Smart Home Work Distribution’ (Apr’21) and at Open Source Developer Conference (July ’21)</p>
      </div>
      <div className="project-item">
        <h3>Entrepreneurship:</h3>
        <ul>
          <li><strong>Traceability in Timber Supply Chain – TimberTwin</strong> – Finalist in Alaska Airlines Environmental Innovation Challenge</li>
          <li><strong>SoundCheck</strong> – Commercialization plan for low-cost ultrasound testing device in Holloman Health Innovation</li>
          <li><strong>Pose Based Emotion Estimation – SerenePoser</strong> – GenAI based Business Idea</li>
          <li><strong>Active Metadata Management Service – MetaSync</strong> – Metadata adoption strategy for Organization</li>
        </ul>
      </div>
    </div>
  </div>
);



export default IndexPage;
