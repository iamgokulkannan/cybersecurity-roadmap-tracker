// data/roadmapData.js
const roadmapData = [
  {
    id: 'foundation',
    title: 'Phase 0: Foundation',
    duration: 'Months 1-2',
    description: 'Build IT fundamentals and set up your learning environment',
    tasks: [
      {
        id: 'networking',
        title: 'Computer Networking',
        type: 'Theory',
        description: 'Learn OSI/TCP-IP models, IP addressing, DNS, HTTP/HTTPS, FTP, SMTP',
        resourcesIndia: [
          { 
            id: 'net-nptel', 
            name: 'NPTEL: Computer Networks', 
            type: 'Course', 
            link: 'https://nptel.ac.in/courses/106/106/106106084/', 
            paid: false 
          },
          { 
            id: 'net-messer', 
            name: 'Professor Messer Network+', 
            type: 'Videos', 
            link: 'https://www.professormesser.com/network-plus/', 
            paid: false 
          },
          { 
            id: 'net-udemy', 
            name: 'Udemy: Complete Networking Course', 
            type: 'Course', 
            link: 'https://www.udemy.com/course/complete-networking-fundamentals-course-ccna/', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'net-messer-global', 
            name: 'Professor Messer Network+', 
            type: 'Videos', 
            link: 'https://www.professormesser.com/network-plus/', 
            paid: false 
          },
          { 
            id: 'net-khan', 
            name: 'Khan Academy Networking', 
            type: 'Course', 
            link: 'https://www.khanacademy.org/computing/computer-science/internet-intro', 
            paid: false 
          },
          { 
            id: 'net-coursera', 
            name: 'Coursera: Computer Communications', 
            type: 'Course', 
            link: 'https://www.coursera.org/learn/computer-networking', 
            paid: true 
          }
        ]
      },
      {
        id: 'os',
        title: 'Operating Systems',
        type: 'Theory',
        description: 'Learn Windows command line, Linux basics (Ubuntu/Kali), file systems and permissions',
        resourcesIndia: [
          { 
            id: 'os-spoken', 
            name: 'Spoken Tutorial: Linux', 
            type: 'Tutorials', 
            link: 'https://spoken-tutorial.org/', 
            paid: false 
          },
          { 
            id: 'os-linuxjourney', 
            name: 'Linux Journey', 
            type: 'Tutorial', 
            link: 'https://linuxjourney.com/', 
            paid: false 
          },
          { 
            id: 'os-udemy-linux', 
            name: 'Udemy: Linux Mastery', 
            type: 'Course', 
            link: 'https://www.udemy.com/course/linux-mastery/', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'os-linuxjourney-global', 
            name: 'Linux Journey', 
            type: 'Tutorial', 
            link: 'https://linuxjourney.com/', 
            paid: false 
          },
          { 
            id: 'os-google-python', 
            name: 'Google"s Python Class', 
            type: 'Course', 
            link: 'https://developers.google.com/edu/python', 
            paid: false 
          },
          { 
            id: 'os-pluralsight', 
            name: 'Pluralsight: Linux Path', 
            type: 'Course', 
            link: 'https://www.pluralsight.com/paths/linux', 
            paid: true 
          }
        ]
      },
      {
        id: 'scripting',
        title: 'Basic Scripting',
        type: 'Practical',
        description: 'Learn Python fundamentals and Bash scripting',
        resourcesIndia: [
          { 
            id: 'script-spoken-python', 
            name: 'Spoken Tutorial: Python', 
            type: 'Tutorials', 
            link: 'https://spoken-tutorial.org/', 
            paid: false 
          },
          { 
            id: 'script-codecademy', 
            name: 'Codecademy Python', 
            type: 'Course', 
            link: 'https://www.codecademy.com/learn/learn-python-3', 
            paid: false 
          },
          { 
            id: 'script-udemy-python', 
            name: 'Udemy: Python for Beginners', 
            type: 'Course', 
            link: 'https://www.udemy.com/course/python-for-beginners/', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'script-google-python-global', 
            name: 'Google"s Python Class', 
            type: 'Course', 
            link: 'https://developers.google.com/edu/python', 
            paid: false 
          },
          { 
            id: 'script-automate', 
            name: 'Automate the Boring Stuff', 
            type: 'Book', 
            link: 'https://automatetheboringstuff.com/', 
            paid: false 
          },
          { 
            id: 'script-coursera-python', 
            name: 'Coursera: Python for Everybody', 
            type: 'Course', 
            link: 'https://www.coursera.org/specializations/python', 
            paid: true 
          }
        ]
      }
    ]
  },
  {
    id: 'core-security',
    title: 'Phase 1: Core Security',
    duration: 'Months 3-6',
    description: 'Understand security fundamentals, threats, and prepare for Security+ certification',
    tasks: [
      {
        id: 'security-concepts',
        title: 'Security Concepts',
        type: 'Theory',
        description: 'Learn CIA Triad, risk management, security policies and procedures',
        resourcesIndia: [
          { 
            id: 'sec-dsci', 
            name: 'DSCI Cybersecurity Courses', 
            type: 'Courses', 
            link: 'https://www.dsci.in/training/', 
            paid: false 
          },
          { 
            id: 'sec-coursera-intro', 
            name: 'Coursera: Intro to Cyber Security', 
            type: 'Course', 
            link: 'https://www.coursera.org/learn/intro-cyber-security', 
            paid: false 
          },
          { 
            id: 'sec-udemy-concepts', 
            name: 'Udemy: Cybersecurity Fundamentals', 
            type: 'Course', 
            link: 'https://www.udemy.com/course/cyber-security-fundamentals/', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'sec-cybrary', 
            name: 'Cybrary Security+', 
            type: 'Course', 
            link: 'https://www.cybrary.it/course/comptia-security-plus/', 
            paid: false 
          },
          { 
            id: 'sec-coursera-intro-global', 
            name: 'Coursera: Intro to Cyber Security', 
            type: 'Course', 
            link: 'https://www.coursera.org/learn/intro-cyber-security', 
            paid: false 
          },
          { 
            id: 'sec-pluralsight-sec', 
            name: 'Pluralsight: Cyber Security Path', 
            type: 'Course', 
            link: 'https://www.pluralsight.com/paths/cyber-security', 
            paid: true 
          }
        ]
      },
      {
        id: 'threats',
        title: 'Threats and Attacks',
        type: 'Theory',
        description: 'Learn about malware types, social engineering, network attacks',
        resourcesIndia: [
          { 
            id: 'threat-certin', 
            name: 'CERT-In Advisories', 
            type: 'Resources', 
            link: 'https://www.cert-in.org.in/', 
            paid: false 
          },
          { 
            id: 'threat-owasp', 
            name: 'OWASP Top 10', 
            type: 'Guide', 
            link: 'https://owasp.org/www-project-top-ten/', 
            paid: false 
          },
          { 
            id: 'threat-sans', 
            name: 'SANS Security Resources', 
            type: 'Resources', 
            link: 'https://www.sans.org/resources/', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'threat-owasp-global', 
            name: 'OWASP Top 10', 
            type: 'Guide', 
            link: 'https://owasp.org/www-project-top-ten/', 
            paid: false 
          },
          { 
            id: 'threat-sans-global', 
            name: 'SANS Whitepapers', 
            type: 'Resources', 
            link: 'https://www.sans.org/white-papers/', 
            paid: false 
          },
          { 
            id: 'threat-udemy-threats', 
            name: 'Udemy: Practical Threat Intelligence', 
            type: 'Course', 
            link: 'https://www.udemy.com/course/practical-threat-intelligence/', 
            paid: true 
          }
        ]
      },
      {
        id: 'cryptography',
        title: 'Cryptography',
        type: 'Theory',
        description: 'Learn encryption/decryption, digital signatures, PKI',
        resourcesIndia: [
          { 
            id: 'crypto-khan', 
            name: 'Khan Academy Cryptography', 
            type: 'Course', 
            link: 'https://www.khanacademy.org/computing/computer-science/cryptography', 
            paid: false 
          },
          { 
            id: 'crypto-cryptool', 
            name: 'Cryptool', 
            type: 'Tool', 
            link: 'https://www.cryptool.org/', 
            paid: false 
          },
          { 
            id: 'crypto-coursera-crypto', 
            name: 'Coursera: Cryptography I', 
            type: 'Course', 
            link: 'https://www.coursera.org/learn/crypto', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'crypto-khan-global', 
            name: 'Khan Academy Cryptography', 
            type: 'Course', 
            link: 'https://www.khanacademy.org/computing/computer-science/cryptography', 
            paid: false 
          },
          { 
            id: 'crypto-cryptool-global', 
            name: 'Cryptool', 
            type: 'Tool', 
            link: 'https://www.cryptool.org/', 
            paid: false 
          },
          { 
            id: 'crypto-stanford', 
            name: 'Stanford Cryptography Course', 
            type: 'Course', 
            link: 'https://crypto.stanford.edu/~dabo/courses/', 
            paid: false 
          }
        ]
      },
      {
        id: 'security-cert',
        title: 'Security+ Certification',
        type: 'Certification',
        description: 'Prepare for and pass the CompTIA Security+ exam (SY0-701)',
        resourcesIndia: [
          { 
            id: 'cert-dion', 
            name: 'Jason Dion Security+ Videos', 
            type: 'Videos', 
            link: 'https://www.youtube.com/c/JasonDion', 
            paid: false 
          },
          { 
            id: 'cert-messer', 
            name: 'Professor Messer Practice Exams', 
            type: 'Practice', 
            link: 'https://www.professormesser.com/security-plus/', 
            paid: false 
          },
          { 
            id: 'cert-udemy-dion', 
            name: 'Udemy: Jason Dion Security+ Course', 
            type: 'Course', 
            link: 'https://www.udemy.com/course/comptia-security-plus-sy0-601/', 
            paid: true 
          },
          { 
            id: 'cert-exam', 
            name: 'CompTIA Security+ Exam', 
            type: 'Certification', 
            link: 'https://www.comptia.org/training/resources/exam-objectives', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'cert-dion-global', 
            name: 'Jason Dion Security+ Videos', 
            type: 'Videos', 
            link: 'https://www.youtube.com/c/JasonDion', 
            paid: false 
          },
          { 
            id: 'cert-messer-global', 
            name: 'Professor Messer Practice Exams', 
            type: 'Practice', 
            link: 'https://www.professormesser.com/security-plus/', 
            paid: false 
          },
          { 
            id: 'cert-cybrary-secplus', 
            name: 'Cybrary Security+ Prep', 
            type: 'Course', 
            link: 'https://www.cybrary.it/course/comptia-security-plus/', 
            paid: true 
          },
          { 
            id: 'cert-exam-global', 
            name: 'CompTIA Security+ Exam', 
            type: 'Certification', 
            link: 'https://www.comptia.org/training/resources/exam-objectives', 
            paid: true 
          }
        ]
      }
    ]
  },
  {
    id: 'specialization',
    title: 'Phase 2: Specialization',
    duration: 'Months 7-12',
    description: 'Choose and develop expertise in one specialization area',
    tasks: [
      {
        id: 'soc-analyst',
        title: 'SOC Analyst Path',
        type: 'Specialization',
        description: 'Learn SIEM management, incident response, threat hunting, log analysis',
        resourcesIndia: [
          { 
            id: 'soc-splunk', 
            name: 'Splunk Fundamentals', 
            type: 'Course', 
            link: 'https://www.splunk.com/en_us/training/free-courses.html', 
            paid: false 
          },
          { 
            id: 'soc-shikshaa', 
            name: 'Microsoft Cyber Shikshaa', 
            type: 'Program', 
            link: 'https://www.microsoft.com/en-in/cybershiksha/', 
            paid: false 
          },
          { 
            id: 'soc-blueteam', 
            name: 'Blue Team Labs Online', 
            type: 'Labs', 
            link: 'https://blueteamlabs.online/', 
            paid: true 
          },
          { 
            id: 'soc-splunk-cert', 
            name: 'Splunk Core Certified User', 
            type: 'Certification', 
            link: 'https://www.splunk.com/en_us/training/certification.html', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'soc-splunk-global', 
            name: 'Splunk Fundamentals', 
            type: 'Course', 
            link: 'https://www.splunk.com/en_us/training/free-courses.html', 
            paid: false 
          },
          { 
            id: 'soc-blueteam-global', 
            name: 'Blue Team Labs Online', 
            type: 'Labs', 
            link: 'https://blueteamlabs.online/', 
            paid: true 
          },
          { 
            id: 'soc-cyberdefenders', 
            name: 'CyberDefenders', 
            type: 'Labs', 
            link: 'https://cyberdefenders.org/', 
            paid: false 
          },
          { 
            id: 'soc-sans-soc', 
            name: 'SANS SOC Analyst Course', 
            type: 'Course', 
            link: 'https://www.sans.org/cyber-security-courses/soc-analyst/', 
            paid: true 
          }
        ]
      },
      {
        id: 'pentesting',
        title: 'Penetration Testing Path',
        type: 'Specialization',
        description: 'Learn web application testing, network penetration testing, social engineering',
        resourcesIndia: [
          { 
            id: 'pent-portswigger', 
            name: 'PortSwigger Web Security Academy', 
            type: 'Course', 
            link: 'https://portswigger.net/web-security', 
            paid: false 
          },
          { 
            id: 'pent-null', 
            name: 'Null India', 
            type: 'Community', 
            link: 'https://null.co.in/', 
            paid: false 
          },
          { 
            id: 'pent-tcm', 
            name: 'TCM Security Practical Ethical Hacking', 
            type: 'Videos', 
            link: 'https://www.youtube.com/c/TCMSecurity', 
            paid: false 
          },
          { 
            id: 'pent-ejpt', 
            name: 'eJPT Certification', 
            type: 'Certification', 
            link: 'https://www.elearnsecurity.com/certification/ejpt', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'pent-portswigger-global', 
            name: 'PortSwigger Web Security Academy', 
            type: 'Course', 
            link: 'https://portswigger.net/web-security', 
            paid: false 
          },
          { 
            id: 'pent-tcm-global', 
            name: 'TCM Security Practical Ethical Hacking', 
            type: 'Videos', 
            link: 'https://www.youtube.com/c/TCMSecurity', 
            paid: false 
          },
          { 
            id: 'pent-tryhackme', 
            name: 'TryHackMe Pentesting Path', 
            type: 'Labs', 
            link: 'https://tryhackme.com/path/outline/penetrationtesting', 
            paid: true 
          },
          { 
            id: 'pent-oscp', 
            name: 'OSCP Certification', 
            type: 'Certification', 
            link: 'https://www.offensive-security.com/pwk-oscp/', 
            paid: true 
          }
        ]
      },
      {
        id: 'cloud-security',
        title: 'Cloud Security Path',
        type: 'Specialization',
        description: 'Learn cloud architecture, security controls, compliance, container security',
        resourcesIndia: [
          { 
            id: 'cloud-aws', 
            name: 'AWS Cloud Practitioner', 
            type: 'Course', 
            link: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/', 
            paid: false 
          },
          { 
            id: 'cloud-nasscom', 
            name: 'NASSCOM Cloud Security Framework', 
            type: 'Resource', 
            link: 'https://www.nasscom.in/', 
            paid: false 
          },
          { 
            id: 'cloud-aws-labs', 
            name: 'AWS Security Labs', 
            type: 'Labs', 
            link: 'https://aws.amazon.com/security/workshops/', 
            paid: false 
          },
          { 
            id: 'cloud-aws-cert', 
            name: 'AWS Security Specialty Certification', 
            type: 'Certification', 
            link: 'https://aws.amazon.com/certification/certified-security-specialty/', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'cloud-aws-global', 
            name: 'AWS Cloud Practitioner', 
            type: 'Course', 
            link: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/', 
            paid: false 
          },
          { 
            id: 'cloud-azure', 
            name: 'Microsoft Learn: Azure Security', 
            type: 'Course', 
            link: 'https://learn.microsoft.com/en-us/training/security/', 
            paid: false 
          },
          { 
            id: 'cloud-coursera-cloud', 
            name: 'Coursera: Cloud Security', 
            type: 'Course', 
            link: 'https://www.coursera.org/specializations/cloud-security', 
            paid: true 
          },
          { 
            id: 'cloud-ccsp', 
            name: 'CCSP Certification', 
            type: 'Certification', 
            link: 'https://www.isc2.org/Certifications/CCSP', 
            paid: true 
          }
        ]
      }
    ]
  },
  {
    id: 'job-readiness',
    title: 'Phase 3: Job Readiness',
    duration: 'Months 13-18',
    description: 'Build professional portfolio, prepare for job applications, and secure employment',
    tasks: [
      {
        id: 'portfolio',
        title: 'Portfolio Development',
        type: 'Practical',
        description: 'Create GitHub projects, blog/website, and documentation of your work',
        resourcesIndia: [
          { 
            id: 'port-github', 
            name: 'GitHub Learning Lab', 
            type: 'Resource', 
            link: 'https://lab.github.com/', 
            paid: false 
          },
          { 
            id: 'port-medium', 
            name: 'Medium: Cybersecurity Writing', 
            type: 'Platform', 
            link: 'https://medium.com/topic/cybersecurity', 
            paid: false 
          },
          { 
            id: 'port-wordpress', 
            name: 'WordPress for Portfolio', 
            type: 'Platform', 
            link: 'https://wordpress.com/', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'port-github-global', 
            name: 'GitHub Learning Lab', 
            type: 'Resource', 
            link: 'https://lab.github.com/', 
            paid: false 
          },
          { 
            id: 'port-medium-global', 
            name: 'Medium: Cybersecurity Writing', 
            type: 'Platform', 
            link: 'https://medium.com/topic/cybersecurity', 
            paid: false 
          },
          { 
            id: 'port-linkedin', 
            name: 'LinkedIn Learning', 
            type: 'Course', 
            link: 'https://www.linkedin.com/learning/', 
            paid: true 
          }
        ]
      },
      {
        id: 'job-strategy',
        title: 'Job Application Strategy',
        type: 'Strategy',
        description: 'Target companies, prepare resume, and apply for positions',
        resourcesIndia: [
          { 
            id: 'job-nasscom', 
            name: 'NASSCOM Jobs Portal', 
            type: 'Job Board', 
            link: 'https://www.nasscom.in/', 
            paid: false 
          },
          { 
            id: 'job-linkedin', 
            name: 'LinkedIn India', 
            type: 'Job Board', 
            link: 'https://www.linkedin.com/jobs/', 
            paid: false 
          },
          { 
            id: 'job-topresume', 
            name: 'TopResume: Resume Writing', 
            type: 'Service', 
            link: 'https://www.topresume.com/', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'job-linkedin-global', 
            name: 'LinkedIn', 
            type: 'Job Board', 
            link: 'https://www.linkedin.com/jobs/', 
            paid: false 
          },
          { 
            id: 'job-cybersecjobs', 
            name: 'CyberSecJobs.com', 
            type: 'Job Board', 
            link: 'https://cybersecjobs.com/', 
            paid: false 
          },
          { 
            id: 'job-cybersecinterview', 
            name: 'CyberInterview Prep', 
            type: 'Course', 
            link: 'https://cyberinterview.com/', 
            paid: true 
          }
        ]
      },
      {
        id: 'interview-prep',
        title: 'Interview Preparation',
        type: 'Preparation',
        description: 'Practice technical questions, mock interviews, and soft skills',
        resourcesIndia: [
          { 
            id: 'interview-cyberinterview', 
            name: 'CyberInterview', 
            type: 'Practice', 
            link: 'https://cyberinterview.com/', 
            paid: false 
          },
          { 
            id: 'interview-pramp', 
            name: 'Pramp', 
            type: 'Mock Interviews', 
            link: 'https://www.pramp.com/', 
            paid: false 
          },
          { 
            id: 'interview-udemy-interview', 
            name: 'Udemy: Cybersecurity Interview Prep', 
            type: 'Course', 
            link: 'https://www.udemy.com/course/cybersecurity-interview-prep/', 
            paid: true 
          }
        ],
        resourcesGlobal: [
          { 
            id: 'interview-cyberinterview-global', 
            name: 'CyberInterview', 
            type: 'Practice', 
            link: 'https://cyberinterview.com/', 
            paid: false 
          },
          { 
            id: 'interview-pramp-global', 
            name: 'Pramp', 
            type: 'Mock Interviews', 
            link: 'https://www.pramp.com/', 
            paid: false 
          },
          { 
            id: 'interview-hackerrank', 
            name: 'HackerRank: Security Skills', 
            type: 'Practice', 
            link: 'https://www.hackerrank.com/domains/security', 
            paid: false 
          }
        ]
      }
    ]
  }
];

export default roadmapData;