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
import CustomChart from '../resuable/charts/ChartComponent';

const ChartsSection = () => {
  // Available Beds Data
  const bedsData = [
    { period: 'Jan', Occupied: 45, Reserved: 30, Available: 25, Cleanup: 15, Other: 10 },
    { period: 'Feb', Occupied: 35, Reserved: 40, Available: 20, Cleanup: 12, Other: 8 },
    { period: 'Mar', Occupied: 55, Reserved: 35, Available: 30, Cleanup: 18, Other: 12 },
    { period: 'Apr', Occupied: 40, Reserved: 50, Available: 25, Cleanup: 15, Other: 10 },
    { period: 'May', Occupied: 30, Reserved: 45, Available: 35, Cleanup: 12, Other: 8 },
    { period: 'Jun', Occupied: 45, Reserved: 35, Available: 20, Cleanup: 10, Other: 15 },
    { period: 'Jul', Occupied: 35, Reserved: 40, Available: 25, Cleanup: 18, Other: 12 },
    { period: 'Aug', Occupied: 60, Reserved: 30, Available: 15, Cleanup: 8, Other: 7 },
    { period: 'Sep', Occupied: 50, Reserved: 35, Available: 20, Cleanup: 12, Other: 8 },
    { period: 'Oct', Occupied: 40, Reserved: 30, Available: 25, Cleanup: 15, Other: 10 },
    { period: 'Nov', Occupied: 45, Reserved: 35, Available: 30, Cleanup: 12, Other: 8 },
    { period: 'Dec', Occupied: 55, Reserved: 40, Available: 20, Cleanup: 15, Other: 10 }
  ];

  // Patients Data
  const patientsData = [
    { period: 'Jan', newPatients: 250, returnPatients: 400 },
    { period: 'Feb', newPatients: 280, returnPatients: 420 },
    { period: 'Mar', newPatients: 320, returnPatients: 380 },
    { period: 'Apr', newPatients: 290, returnPatients: 450 },
    { period: 'May', newPatients: 350, returnPatients: 500 },
    { period: 'Jun', newPatients: 380, returnPatients: 480 },
    { period: 'Jul', newPatients: 320, returnPatients: 520 },
    { period: 'Aug', newPatients: 400, returnPatients: 560 },
    { period: 'Sep', newPatients: 450, returnPatients: 580 },
    { period: 'Oct', newPatients: 420, returnPatients: 600 },
    { period: 'Nov', newPatients: 300, returnPatients: 600 },
    { period: 'Dec', newPatients: 280, returnPatients: 520 }
  ];

  // Income Overview Data (transformed for CustomChart)
  const incomeData = [
    { period: 'Jan', patients: 250, income: 4900 },
    { period: 'Feb', patients: 280, income: 5200 },
    { period: 'Mar', patients: 320, income: 5800 },
    { period: 'Apr', patients: 290, income: 5100 },
    { period: 'May', patients: 350, income: 6200 },
    { period: 'Jun', patients: 380, income: 6800 },
    { period: 'Jul', patients: 320, income: 5900 },
    { period: 'Aug', patients: 400, income: 7200 },
    { period: 'Sep', patients: 450, income: 8100 },
    { period: 'Oct', patients: 420, income: 7600 },
    { period: 'Nov', patients: 300, income: 5400 },
    { period: 'Dec', patients: 280, income: 5000 }
  ];

  // Treatment Type Data
  const treatmentData = [
    { period: 'Jan', General: 120, Surgery: 80, ICU: 50 },
    { period: 'Feb', General: 150, Surgery: 90, ICU: 60 },
    { period: 'Mar', General: 180, Surgery: 100, ICU: 70 },
    { period: 'Apr', General: 160, Surgery: 85, ICU: 55 },
    { period: 'May', General: 140, Surgery: 75, ICU: 45 },
    { period: 'Jun', General: 130, Surgery: 70, ICU: 40 },
    { period: 'Jul', General: 125, Surgery: 65, ICU: 35 },
    { period: 'Aug', General: 120, Surgery: 60, ICU: 30 },
    { period: 'Sep', General: 115, Surgery: 55, ICU: 25 },
    { period: 'Oct', General: 110, Surgery: 50, ICU: 20 },
    { period: 'Nov', General: 105, Surgery: 45, ICU: 15 },
    { period: 'Dec', General: 100, Surgery: 40, ICU: 10 }
  ];

  // Treatment Data for CustomChart (transformed format)
  const customTreatmentData = [
    { period: 'Jan', General: 120, Surgery: 80, ICU: 50 },
    { period: 'Feb', General: 150, Surgery: 90, ICU: 60 },
    { period: 'Mar', General: 180, Surgery: 100, ICU: 70 },
    { period: 'Apr', General: 160, Surgery: 85, ICU: 55 },
    { period: 'May', General: 140, Surgery: 75, ICU: 45 },
    { period: 'Jun', General: 130, Surgery: 70, ICU: 40 },
    { period: 'Jul', General: 125, Surgery: 65, ICU: 35 },
    { period: 'Aug', General: 120, Surgery: 60, ICU: 30 },
    { period: 'Sep', General: 115, Surgery: 55, ICU: 25 },
    { period: 'Oct', General: 110, Surgery: 50, ICU: 20 },
    { period: 'Nov', General: 105, Surgery: 45, ICU: 15 },
    { period: 'Dec', General: 100, Surgery: 40, ICU: 10 }
  ];

  // Hospital Earnings Data
  const earningsData = [
    { title: 'Online Consultation', value: 4900, percentage: 20, trend: 'up' },
    { title: 'Overall Purchases', value: 750, percentage: 26, trend: 'down' },
    { title: 'Pending Invoices', value: 560, percentage: 28, trend: 'up' },
    { title: 'periodly Billing', value: 390, percentage: 30, trend: 'up' }
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
         <CustomChart
          flagToggle={true}
          title="Available Beds"
          chartType="bar"
          data={bedsData}
          series={[
            { key: "Occupied", label: "Occupied", color: "#1e40af" },
            { key: "Reserved", label: "Reserved", color: "#3b82f6" },
            { key: "Available", label: "Available", color: "#60a5fa" },
            { key: "Cleanup", label: "Cleanup", color: "#93c5fd" },
            { key: "Other", label: "Other", color: "#dbeafe" },
          ]}
        />
      </div>

      {/* Bottom Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
        {/* Income Overview Chart using CustomChart */}
        <CustomChart
          flagToggle={true}
          title="Patients Data"
          chartType="area"
          data={patientsData}
          series={[
            { key: "newPatients", label: "newPatients", color: "#3b82f6" },
            { key: "returnPatients", label: "returnPatients", color: "#9ca3af" },
          ]}
        />

        {/* Treatment Type Chart using CustomChart */}
        <CustomChart
          flagToggle={true}
          title="Treatment Type"
          chartType="bar"
          data={customTreatmentData}
          series={[
            { key: "General", label: "General", color: "#93c5fd" },
            { key: "Surgery", label: "Surgery", color: "#60a5fa" },
            { key: "ICU", label: "ICU", color: "#3b82f6" },
          ]}
        />

      </div>

      {/* Bottom Row - Earnings, Claims, Gender */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {/* Hospital Earnings */}
        <div className="bg-white rounded-2xl p-4 md:p-6  col-span-2 shadow-sm border border-gray-100">
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
                <div className="flex flex-col justify-end items-end ">
                  <div className="flex ml-3.5  items-start space-x-1 text-blue-600">
                    <span className=" text-sm ">20%</span>
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

            {/* periodly Billing */}
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
                  <div className="text-xs md:text-sm text-gray-600 truncate">periodly Billing</div>
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
