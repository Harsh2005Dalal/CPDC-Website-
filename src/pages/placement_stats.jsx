import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, Users, Award, Building, ChevronDown, Calendar, GraduationCap } from 'lucide-react';

// Mock data - replace with actual imports
const yearlyPlacementData = [
  { year: '2020', placed: 180, packages: 195 },
  { year: '2021', placed: 200, packages: 220 },
  { year: '2022', placed: 210, packages: 235 },
  { year: '2023', placed: 215, packages: 240 },
  { year: '2024', placed: 238, packages: 275 }
];

const branchWiseData = [
  { branch: 'Computer Science', placed: 45, total: 48, percentage: 93.8, avgPackage: 22.5 },
  { branch: 'Electronics & Communication', placed: 38, total: 42, percentage: 90.5, avgPackage: 19.2 },
  { branch: 'Mechanical Engineering', placed: 35, total: 40, percentage: 87.5, avgPackage: 16.8 },
  { branch: 'Civil Engineering', placed: 30, total: 35, percentage: 85.7, avgPackage: 15.5 },
  { branch: 'Chemical Engineering', placed: 28, total: 32, percentage: 87.5, avgPackage: 17.2 },
  { branch: 'Electrical Engineering', placed: 32, total: 36, percentage: 88.9, avgPackage: 18.1 },
  { branch: 'Metallurgical Engineering', placed: 18, total: 22, percentage: 81.8, avgPackage: 16.2 },
  { branch: 'Biomedical Engineering', placed: 12, total: 15, percentage: 80.0, avgPackage: 15.8 }
];

const studentDemographics = [
  { name: 'Computer Science', students: 48 },
  { name: 'Electronics & Communication', students: 42 },
  { name: 'Mechanical Engineering', students: 40 },
  { name: 'Civil Engineering', students: 35 },
  { name: 'Chemical Engineering', students: 32 },
  { name: 'Electrical Engineering', students: 36 },
  { name: 'Metallurgical Engineering', students: 22 },
  { name: 'Biomedical Engineering', students: 15 }
];

const topRecruiters = [
  'Microsoft', 'Google', 'Amazon', 'Adobe', 'Samsung', 'Intel', 'Qualcomm', 'NVIDIA',
  'IBM', 'Oracle', 'Cisco', 'VMware', 'Salesforce', 'Goldman Sachs', 'Morgan Stanley', 'JP Morgan',
  'Deloitte', 'PwC', 'EY', 'KPMG', 'Accenture', 'TCS', 'Infosys', 'Wipro',
  'L&T', 'Reliance', 'ONGC', 'ISRO', 'DRDO', 'Bajaj Auto', 'Mahindra', 'Tata Motors'
];

const PlacementStatsPage = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedBranch, setSelectedBranch] = useState('All');

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4', '#84CC16', '#F97316'];

  // Custom label function for pie chart to show student count
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, students, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Only show labels for segments that are large enough
    const totalStudents = studentDemographics.reduce((total, item) => total + item.students, 0);
    const percentage = (students / totalStudents) * 100;
    
    if (percentage < 8) return null; // Don't show labels for small segments

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="14"
        fontWeight="bold"
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
      >
        {students}
      </text>
    );
  };

  // Calculate total students for center display
  const totalStudents = studentDemographics.reduce((total, item) => total + item.students, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            IIT Ropar Placement Statistics
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive placement data showcasing the excellence of our graduates and their achievements in the industry
          </p>
        </div>

        {/* Key Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-blue-500 relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Placed (2024)</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">238</p>
                <p className="text-green-600 text-sm flex items-center mt-1">
                  <TrendingUp size={16} className="mr-1" />
                  +10.7% from 2023
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="text-blue-600" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-green-500 relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Highest Package</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">₹65 LPA</p>
                <p className="text-green-600 text-sm flex items-center mt-1">
                  <TrendingUp size={16} className="mr-1" />
                  +12.1% from 2023
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Award className="text-green-600" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-purple-500 relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Average Package</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">₹18.9 LPA</p>
                <p className="text-green-600 text-sm flex items-center mt-1">
                  <TrendingUp size={16} className="mr-1" />
                  +9.2% from 2023
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <GraduationCap className="text-purple-600" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-orange-500 relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Companies</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">275</p>
                <p className="text-green-600 text-sm flex items-center mt-1">
                  <TrendingUp size={16} className="mr-1" />
                  +12.2% from 2023
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Building className="text-orange-600" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Year-wise Placement Trend */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
            <Calendar className="mr-2 sm:mr-3 text-blue-600" size={20} />
            Year-wise Placement Trends
          </h2>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={yearlyPlacementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '14px'
                  }} 
                />
                <Legend />
                <Area type="monotone" dataKey="placed" stackId="1" stroke="#3b82f6" fill="#93c5fd" name="Students Placed" />
                <Area type="monotone" dataKey="packages" stackId="2" stroke="#10b981" fill="#86efac" name="Total Packages" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Branch-wise Placement Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Branch-wise Placement Statistics (2024)</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 sm:p-4 font-semibold text-gray-700 text-sm sm:text-base">Branch</th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-gray-700 text-sm sm:text-base">Placed</th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-gray-700 text-sm sm:text-base">Total</th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-gray-700 text-sm sm:text-base">Percentage</th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-gray-700 text-sm sm:text-base">Avg Package (LPA)</th>
                </tr>
              </thead>
              <tbody>
                {branchWiseData.map((branch, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-2 sm:p-4 font-medium text-gray-800 text-sm sm:text-base">{branch.branch}</td>
                    <td className="p-2 sm:p-4 text-center text-green-600 font-semibold text-sm sm:text-base">{branch.placed}</td>
                    <td className="p-2 sm:p-4 text-center text-gray-600 text-sm sm:text-base">{branch.total}</td>
                    <td className="p-2 sm:p-4 text-center">
                      <div className="flex items-center justify-center">
                        <div className="bg-blue-100 rounded-full px-2 sm:px-3 py-1">
                          <span className="text-blue-800 font-semibold text-sm">{branch.percentage}%</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-center text-purple-600 font-semibold text-sm sm:text-base">₹{branch.avgPackage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Branch-wise Placement Chart */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Branch-wise Placement Visualization</h2>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={branchWiseData} margin={{ bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis 
                  dataKey="branch" 
                  stroke="#6b7280" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  fontSize={10}
                  interval={0}
                />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '14px'
                  }} 
                />
                <Legend />
                <Bar dataKey="percentage" fill="#3b82f6" name="Placement %" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Student Demographics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-4 sm:mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Student Demographics</h2>
            <div className="h-120 w-full relative pt-4">
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={studentDemographics}
                    cx="50%"
                    cy="50%"
                    outerRadius="90%"
                    innerRadius="35%"
                    fill="#8884d8"
                    dataKey="students"
                    nameKey="name"
                    labelLine={false}
                    label={renderCustomLabel}
                  >
                    {studentDemographics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f8fafc', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '8px',
                      fontSize: '16px'
                    }} 
                    formatter={(value, name) => [value, name]}
                  />
                  {/* <Legend 
                    verticalAlign="bottom" 
                    height={60}
                    iconType="circle"
                    wrapperStyle={{ 
                      fontSize: '16px', 
                      paddingTop: '16px',
                      fontWeight: '500'
                    }}
                  /> */}
                </PieChart>
              </ResponsiveContainer>
              {/* Center text overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center" style={{ marginTop: '10px' }}>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">{totalStudents}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">Total Students</div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Demographics Breakdown</h2>
            <div className="space-y-3 sm:space-y-4">
              {studentDemographics.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center min-w-0 flex-1">
                    <div 
                      className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base truncate">{item.name}</span>
                  </div>
                  <span className="text-gray-800 font-semibold text-sm sm:text-base ml-2">{item.students}</span>
                </div>
              ))}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-blue-800">
                    {studentDemographics.reduce((total, item) => total + item.students, 0)}
                  </p>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">Total Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Top Recruiters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
            {topRecruiters.map((company, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <p className="text-gray-800 font-semibold text-xs sm:text-sm break-words">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementStatsPage;