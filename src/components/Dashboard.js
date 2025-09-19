// components/Dashboard.js
import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { useStreaks } from '../hooks/useStreaks';

const Dashboard = ({ progressData, phaseProgressData }) => {
  const { streaks, getStreakMessage, getStreakEmoji } = useStreaks();
  // Data for the pie chart (completed vs remaining tasks)
  const pieData = [
    { name: 'Completed', value: progressData.completedTasks },
    { name: 'Remaining', value: progressData.totalTasks - progressData.completedTasks }
  ];

  // Data for the radial bar chart (overall progress)
  const radialData = [{ name: 'Progress', value: progressData.percentage, fill: '#4caf50' }];

  // Data for the payment progress
  const paymentData = [
    { name: 'Acquired', value: progressData.acquiredPaidResources },
    { name: 'Not Acquired', value: progressData.totalPaidResources - progressData.acquiredPaidResources }
  ];

  const COLORS = ['#4caf50', '#e0e0e0'];
  const PAYMENT_COLORS = ['#2196f3', '#e0e0e0'];

  return (
    <div className="dashboard">
      <h2>Progress Dashboard</h2>
      
      {/* Streak Section */}
      <div className="streak-section">
        <div className="streak-card">
          <div className="streak-icon">{getStreakEmoji()}</div>
          <div className="streak-info">
            <h3>Current Streak</h3>
            <div className="streak-number">{streaks.currentStreak}</div>
            <p className="streak-message">{getStreakMessage()}</p>
          </div>
        </div>
        <div className="streak-stats">
          <div className="streak-stat">
            <span className="stat-label">Longest Streak</span>
            <span className="stat-value">{streaks.longestStreak}</span>
          </div>
          <div className="streak-stat">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-value">{progressData.completedTasks}</span>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-chart-container">
          <h3>Overall Progress</h3>
          <div className="progress-meters">
            <div className="progress-meter">
              <div className="progress-meter-label">Tasks Completed</div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${progressData.percentage}%` }}
                  ></div>
                </div>
                <div className="progress-text">
                  {progressData.percentage}% ({progressData.completedTasks}/{progressData.totalTasks})
                </div>
              </div>
            </div>
            
            <div className="progress-meter">
              <div className="progress-meter-label">Paid Resources Acquired</div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill payment-fill" 
                    style={{ width: `${progressData.paymentProgress}%` }}
                  ></div>
                </div>
                <div className="progress-text">
                  {progressData.paymentProgress}% ({progressData.acquiredPaidResources}/{progressData.totalPaidResources})
                </div>
              </div>
            </div>
          </div>
          
          <div className="charts-row">
            <div className="chart-container">
              <h4>Task Distribution</h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="chart-container">
              <h4>Overall Progress</h4>
              <ResponsiveContainer width="100%" height={200}>
                <RadialBarChart 
                  innerRadius="10%" 
                  outerRadius="100%" 
                  barSize={10}
                  data={radialData}
                  startAngle={180} 
                  endAngle={0}
                >
                  <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="value"
                  />
                  <text 
                    x="50%" 
                    y="50%" 
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    className="progress-percentage-text"
                  >
                    {progressData.percentage}%
                  </text>
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="dashboard-chart-container">
          <h3>Phase Progress</h3>
          <div className="bar-chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={phaseProgressData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="progress" fill="#8884d8" name="Progress %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="dashboard-chart-container">
          <h3>Paid Resources Status</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={paymentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {paymentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PAYMENT_COLORS[index % PAYMENT_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="stats-container">
        <div className="stat-card">
          <h3>Current Phase</h3>
          <p>Phase 1: Core Security</p>
        </div>
        <div className="stat-card">
          <h3>Next Milestone</h3>
          <p>Security+ Certification</p>
        </div>
        <div className="stat-card">
          <h3>Estimated Completion</h3>
          <p>12-18 months</p>
        </div>
        <div className="stat-card">
          <h3>Investment</h3>
          <p>₹0 - ₹35,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;