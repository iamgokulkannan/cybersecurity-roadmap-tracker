# Cybersecurity Roadmap Tracker

A comprehensive, interactive React application designed to help cybersecurity students and professionals track their learning progress through a structured 18-month roadmap. This tool provides visual progress tracking, resource management, and region-specific learning materials for both Indian and global markets.

---

## Features

### 🎯 Progress Tracking
- **Visual Dashboard**: Interactive charts and meters showing overall progress  
- **Phase-wise Tracking**: Monitor completion across 4 distinct learning phases  
- **Task Management**: Check off completed tasks with real-time progress updates  
- **Resource Acquisition Tracking**: Monitor paid vs. free resource utilization  

### 📊 Interactive Visualizations
- **Progress Meters**: Animated progress bars for task completion  
- **Pie Charts**: Visual representation of completed vs. remaining tasks  
- **Radial Bar Chart**: Overall progress percentage display  
- **Bar Charts**: Phase-by-phase progress comparison  
- **Payment Status Charts**: Track acquisition of paid resources  

### 🌍 Regional Customization
- **Dual Resource Support**: Toggle between India-specific and global resources  
- **Localized Content**: Region-relevant learning materials and job market information  
- **Compliance Focus**: Indian-specific regulations (RBI, DPDPA) and global standards  

### 💰 Resource Management
- **Paid/Free Indicators**: Clear labeling of resource costs  
- **Payment Tracking**: Mark resources as paid/unpaid  
- **Cancellation Support**: Reverse payment status if needed  
- **Comprehensive Library**: 100+ curated resources including:  
  - Free: NPTEL, Coursera (audit), YouTube tutorials, documentation  
  - Paid: Udemy courses, certifications (Security+, eJPT, AWS), premium platforms  

### 💾 Data Persistence
- **Local Storage**: All progress automatically saved in browser  
- **Recovery Support**: Resume from where you left off  
- **Export Capability**: Progress data stored locally for backup  

---

## Installation

### Prerequisites
- Node.js (v14.0 or higher)  
- npm (v6.0 or higher)  

### Setup
```bash
# Clone the repository
git clone https://github.com/your-username/cybersecurity-roadmap-tracker.git

# Navigate to the project directory
cd cybersecurity-roadmap-tracker

# Install dependencies
npm install

# Install charting library
npm install recharts

# Start the development server
npm start
```

Now open your browser and visit [http://localhost:3000](http://localhost:3000).

---

## Usage

### Getting Started
1. **Select Your Region**: Choose between "India" or "Global" resources  
2. **Explore the Dashboard**: View your overall progress and statistics  
3. **Begin Learning**: Start with Phase 0 (Foundation) tasks  

### Tracking Progress
- **Complete Tasks**: Check tasks when finished  
- **Manage Resources**:  
  - For paid resources, click "Mark as Paid" after acquisition  
  - Use "Cancel" to reverse payment status  
- **Monitor Progress**: Dashboard charts update in real-time  

### Resource Access
- **Expand Resources**: Click "Show Resources" under each task  
- **Access Materials**: Follow links directly to learning content  
- **Filter by Cost**: Identify free vs. paid resources  

---

## Phase Overview

- **Phase 0: Foundation (Months 1-2)**  
  Networking, Operating Systems, Scripting basics  

- **Phase 1: Core Security (Months 3-6)**  
  Security concepts, threats, cryptography, Security+ certification  

- **Phase 2: Specialization (Months 7-12)**  
  SOC Analyst, Penetration Testing, or Cloud Security paths  

- **Phase 3: Job Readiness (Months 13-18)**  
  Portfolio development, job applications, interview preparation  

---

## Technology Stack

### Frontend
- React (UI library)  
- Recharts (data visualization)  
- CSS3 (responsive styling)  
- HTML5 (semantic markup)  

### Data Management
- Local Storage (persistence)  
- React State Management  
- JSON (roadmap data)  

### Development Tools
- Create React App  
- ESLint (linting)  
- Babel (transpiler)  

---

## Folder Structure
```
cybersecurity-roadmap-tracker/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Auth.js
│   │   ├── Celebration.css
│   │   ├── Celebration.js
│   │   ├── Dashboard.js
│   │   ├── MobileNav.js
│   │   ├── Phase.js
│   │   ├── PhaseList.js
│   │   └── Task.js
│   ├── components/
│   │   └── UserContext.js
│   ├── data/
│   │   └── roadmapData.js
│   ├── components/
│   │   ├── auth.js
│   │   └── config.js
│   ├── hooks/
│   │   └── useStreaks.js
│   ├── App.css
│   ├── App.js
│   └── index.js
├── package.json
├── README.md
└── ...
```

### Key Files
- `src/App.js`: Main application component with state management  
- `src/components/Dashboard.js`: Progress visualization with charts  
- `src/components/celebration.js`: Celebration of progress   
- `src/components/Task.js`: Individual task and resource management  
- `src/data/roadmapData.js`: Structured roadmap content and resources  
- `src/App.css`: Styling with responsive design  

---

## Contributing

We welcome contributions!  

1. **Fork the Repository**  
   ```bash
   git clone https://github.com/iamgokulkannan/cybersecurity-roadmap-tracker.git
   ```
2. **Create a Feature Branch**  
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make Changes**  
   - Add new resources to `roadmapData.js`  
   - Enhance UI components  
   - Fix bugs or improve features  
4. **Commit Changes**  
   ```bash
   git commit -m "Add your commit message"
   ```
5. **Push Changes**  
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open Pull Request**  
   - Describe changes clearly  
   - Include screenshots if UI improvements are made  
   - Reference issue numbers if applicable  

### Contribution Guidelines
- Follow code style and structure  
- Add comments for complex functions  
- Test new features  
- Update documentation  

---

## License

This project is licensed under the MIT License.  

**License Summary**:  
✅ Commercial use  
✅ Modification  
✅ Distribution  
✅ Private use  
❌ Liability  
❌ Warranty  

---

## Support

- Issues: [GitHub Issues Page]  
- Email: [gokulkannan.dev@gmail.com](mailto:gokulkannan.dev@gmail.com)  
- Discord Server: [https://discord.gg/vTc6VjSC]  

---

## Acknowledgments
- **Resource Providers**: NPTEL, Coursera, Udemy, SANS, and others  
- **Open Source Libraries**: React, Recharts, and the JavaScript community  
- **Cybersecurity Community**: Null India, DSCI, and global security professionals  

---

## Live Demo
You can try the project here: [Cybersecurity Roadmap Tracker](https://cybersecurity-roadmap-tracker.netlify.app/)
