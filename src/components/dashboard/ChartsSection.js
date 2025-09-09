"use client"
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell,
  ComposedChart
} from 'recharts';

const ChartsSection = () => {
  // Available Beds Data
  const bedsData = [
    { month: 'Jan', Occupied: 45, Reserved: 30, Available: 25, Cleanup: 15, Other: 10 },
    { month: 'Feb', Occupied: 35, Reserved: 40, Available: 20, Cleanup: 12, Other: 8 },
    { month: 'Mar', Occupied: 55, Reserved: 35, Available: 30, Cleanup: 18, Other: 12 },
    { month: 'Apr', Occupied: 40, Reserved: 50, Available: 25, Cleanup: 15, Other: 10 },
    { month: 'May', Occupied: 30, Reserved: 45, Available: 35, Cleanup: 12, Other: 8 },
    { month: 'Jun', Occupied: 45, Reserved: 35, Available: 20, Cleanup: 10, Other: 15 },
    { month: 'Jul', Occupied: 35, Reserved: 40, Available: 25, Cleanup: 18, Other: 12 },
    { month: 'Aug', Occupied: 60, Reserved: 30, Available: 15, Cleanup: 8, Other: 7 },
    { month: 'Sep', Occupied: 50, Reserved: 35, Available: 20, Cleanup: 12, Other: 8 },
    { month: 'Oct', Occupied: 40, Reserved: 30, Available: 25, Cleanup: 15, Other: 10 },
    { month: 'Nov', Occupied: 45, Reserved: 35, Available: 30, Cleanup: 12, Other: 8 },
    { month: 'Dec', Occupied: 55, Reserved: 40, Available: 20, Cleanup: 15, Other: 10 }
  ];

  // Patients Data
  const patientsData = [
    { month: 'Jan', newPatients: 250, returnPatients: 400 },
    { month: 'Feb', newPatients: 280, returnPatients: 420 },
    { month: 'Mar', newPatients: 320, returnPatients: 380 },
    { month: 'Apr', newPatients: 290, returnPatients: 450 },
    { month: 'May', newPatients: 350, returnPatients: 500 },
    { month: 'Jun', newPatients: 380, returnPatients: 480 },
    { month: 'Jul', newPatients: 320, returnPatients: 520 },
    { month: 'Aug', newPatients: 400, returnPatients: 560 },
    { month: 'Sep', newPatients: 450, returnPatients: 580 },
    { month: 'Oct', newPatients: 420, returnPatients: 600 },
    { month: 'Nov', newPatients: 300, returnPatients: 600 },
    { month: 'Dec', newPatients: 280, returnPatients: 520 }
  ];

  // Treatment Type Data
  const treatmentData = [
    { month: 'Jan', General: 120, Surgery: 80, ICU: 50 },
    { month: 'Feb', General: 150, Surgery: 90, ICU: 60 },
    { month: 'Mar', General: 180, Surgery: 100, ICU: 70 },
    { month: 'Apr', General: 160, Surgery: 85, ICU: 55 },
    { month: 'May', General: 140, Surgery: 75, ICU: 45 },
    { month: 'Jun', General: 130, Surgery: 70, ICU: 40 },
    { month: 'Jul', General: 125, Surgery: 65, ICU: 35 },
    { month: 'Aug', General: 120, Surgery: 60, ICU: 30 },
    { month: 'Sep', General: 115, Surgery: 55, ICU: 25 },
    { month: 'Oct', General: 110, Surgery: 50, ICU: 20 },
    { month: 'Nov', General: 105, Surgery: 45, ICU: 15 },
    { month: 'Dec', General: 100, Surgery: 40, ICU: 10 }
  ];

  // Hospital Earnings Data
  const earningsData = [
    { title: 'Online Consultation', value: 4900, percentage: 20, trend: 'up' },
    { title: 'Overall Purchases', value: 750, percentage: 26, trend: 'down' },
    { title: 'Pending Invoices', value: 560, percentage: 28, trend: 'up' },
    { title: 'Monthly Billing', value: 390, percentage: 30, trend: 'up' }
  ];

  // Insurance Claims Data
  const claimsData = [
    { day: 'S', value: 52 },
    { day: 'M', value: 73 },
    { day: 'T', value: 34 },
    { day: 'W', value: 66 },
    { day: 'T', value: 82 },
    { day: 'F', value: 48 },
    { day: 'S', value: 38 }
  ];

  // Gender Distribution Data
  const genderData = [
    { name: 'Male', value: 45, color: '#3b82f6' },
    { name: 'Female', value: 35, color: '#10b981' },
    { name: 'Kids', value: 20, color: '#f59e0b' }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

  return (
    <div className="space-y-4 md:space-y-6 w-full overflow-hidden">
      {/* Available Beds Chart */}
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 w-full overflow-hidden">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Available Beds</h3>
        <div className="h-64 md:h-80 w-full overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bedsData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="Occupied" fill="#1e40af" radius={[2, 2, 0, 0]} />
              <Bar dataKey="Reserved" fill="#3b82f6" radius={[2, 2, 0, 0]} />
              <Bar dataKey="Available" fill="#60a5fa" radius={[2, 2, 0, 0]} />
              <Bar dataKey="Cleanup" fill="#93c5fd" radius={[2, 2, 0, 0]} />
              <Bar dataKey="Other" fill="#dbeafe" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-800 rounded"></div>
            <span className="text-sm text-gray-600">Occupied</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span className="text-sm text-gray-600">Reserved</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded"></div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-300 rounded"></div>
            <span className="text-sm text-gray-600">Cleanup</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-100 rounded"></div>
            <span className="text-sm text-gray-600">Other</span>
          </div>
        </div>
      </div>

      {/* Bottom Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
        {/* Patients Chart */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 w-full overflow-hidden">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Patients</h3>
          <div className="h-48 md:h-64 w-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={patientsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <defs>
                  <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="colorReturn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="newPatients"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fill="url(#colorNew)"
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
                <Area
                  type="monotone"
                  dataKey="returnPatients"
                  stroke="#10b981"
                  strokeWidth={3}
                  fill="url(#colorReturn)"
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-600">New Patients</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Return Patients</span>
            </div>
          </div>
        </div>

        {/* Treatment Type Chart */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 w-full overflow-hidden">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Treatment Type</h3>
          <div className="h-48 md:h-64 w-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={treatmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="General" fill="#93c5fd" radius={[2, 2, 0, 0]} />
                <Bar dataKey="Surgery" fill="#60a5fa" radius={[2, 2, 0, 0]} />
                <Bar dataKey="ICU" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                <Line
                  type="monotone"
                  dataKey="General"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-600">General</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Surgery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              <span className="text-sm text-gray-600">ICU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Earnings, Claims, Gender */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        {/* Hospital Earnings */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Hospital Earnings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {/* Online Consultation */}
            <div className="border border-gray-200 rounded-xl p-3 md:p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xl md:text-2xl font-bold text-gray-900">$4900</div>
                  <div className="text-xs md:text-sm text-gray-600 truncate">Online Consultation</div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-1 text-blue-600">
                    <span className="text-sm font-medium">20%</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Overall Purchases */}
            <div className="border border-gray-200 rounded-xl p-3 md:p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeDasharray="65, 100"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xl md:text-2xl font-bold text-gray-900">$750</div>
                  <div className="text-xs md:text-sm text-gray-600 truncate">Overall Purchases</div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-1 text-red-600">
                    <span className="text-sm font-medium">26%</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Invoices */}
            <div className="border border-gray-200 rounded-xl p-3 md:p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center flex-shrink-0">
                  <svg className="w-8 h-6 md:w-10 md:h-8" viewBox="0 0 40 32" fill="none">
                    <rect x="2" y="8" width="6" height="16" fill="#10b981" rx="1"/>
                    <rect x="10" y="12" width="6" height="12" fill="#10b981" rx="1"/>
                    <rect x="18" y="4" width="6" height="20" fill="#10b981" rx="1"/>
                    <rect x="26" y="10" width="6" height="14" fill="#10b981" rx="1"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xl md:text-2xl font-bold text-gray-900">$560</div>
                  <div className="text-xs md:text-sm text-gray-600 truncate">Pending Invoices</div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-1 text-blue-600">
                    <span className="text-sm font-medium">28%</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Billing */}
            <div className="border border-gray-200 rounded-xl p-3 md:p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center flex-shrink-0">
                  <svg className="w-8 h-6 md:w-10 md:h-8" viewBox="0 0 40 32" fill="none">
                    <path d="M2 20 L8 16 L14 22 L20 12 L26 18 L32 8 L38 14" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 20 L8 16 L14 22 L20 12 L26 18 L32 8 L38 14 L38 28 L2 28 Z" fill="#10b981" fillOpacity="0.2"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xl md:text-2xl font-bold text-gray-900">$390</div>
                  <div className="text-xs md:text-sm text-gray-600 truncate">Monthly Billing</div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-1 text-blue-600">
                    <span className="text-sm font-medium">30%</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Claims */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 w-full overflow-hidden">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Insurance Claims</h3>
          <div className="h-40 md:h-48 w-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={claimsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Patients by Gender */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 w-full overflow-hidden">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Patients by Gender</h3>
          <div className="h-40 md:h-48 flex items-center justify-center w-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {genderData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-4">
        <p className="text-sm text-gray-500">© 
          PlusOne admin 2024</p>
      </div>
    </div>
  );
};

export default ChartsSection;
