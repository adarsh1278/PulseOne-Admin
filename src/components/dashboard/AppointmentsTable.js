"use client"
import React from 'react';

const AppointmentsTable = () => {
  const appointments = [
    {
      id: "001",
      patientName: "Deena Cooley",
      age: 65,
      doctor: "Vicki Walsh",
      doctorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=face&auto=format",
      department: "Surgeon",
      date: "05/23/2024",
      time: "9:30 AM",
      disease: "Diabetes",
      status: "completed"
    },
    {
      id: "002",
      patientName: "Jerry Wilcox",
      age: 73,
      doctor: "April Gallegos",
      doctorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face&auto=format",
      department: "Gynecologist",
      date: "05/23/2024",
      time: "9:45 AM",
      disease: "Fever",
      status: "cancelled"
    },
    {
      id: "003",
      patientName: "Eduardo Kramer",
      age: 84,
      doctor: "Basil Frost",
      doctorImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=50&h=50&fit=crop&crop=face&auto=format",
      department: "Psychiatrists",
      date: "05/23/2024",
      time: "10:00 AM",
      disease: "Cold",
      status: "completed"
    },
    {
      id: "004",
      patientName: "Jason Compton",
      age: 56,
      doctor: "Nannie Guerrero",
      doctorImage: "https://images.unsplash.com/photo-1594824886734-aec1d2e9e5b0?w=50&h=50&fit=crop&crop=face&auto=format",
      department: "Urologist",
      date: "05/23/2024",
      time: "10:15 AM",
      disease: "Prostate",
      status: "completed"
    },
    {
      id: "005",
      patientName: "Emmitt Bryan",
      age: 49,
      doctor: "Daren Andrade",
      doctorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face&auto=format",
      department: "Cardiology",
      date: "05/23/2024",
      time: "10:30 AM",
      disease: "Asthma",
      status: "completed"
    }
  ];

  const getStatusIcon = (status) => {
    if (status === 'completed') {
      return (
        <div className="flex space-x-2">
          <button className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
          <button className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors">
            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <button className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </button>
        </div>
      );
    } else if (status === 'cancelled') {
      return (
        <div className="flex space-x-2">
          <button className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
          <button className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors">
            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <button className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Appointments</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">#</th>
              <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Patient Name</th>
              <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Age</th>
              <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Consulting Doctor</th>
              <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Department</th>
              <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Date</th>
              <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Time</th>
              <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Disease</th>
              <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-2 text-sm text-gray-800">{appointment.id}</td>
                <td className="py-4 px-2 text-sm text-gray-800 font-medium">{appointment.patientName}</td>
                <td className="py-4 px-2 text-sm text-gray-600">{appointment.age}</td>
                <td className="py-4 px-2">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={appointment.doctorImage}
                      alt={appointment.doctor}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-800">{appointment.doctor}</span>
                  </div>
                </td>
                <td className="py-4 px-2 text-sm text-gray-600">{appointment.department}</td>
                <td className="py-4 px-2 text-sm text-gray-600">{appointment.date}</td>
                <td className="py-4 px-2 text-sm text-gray-600">{appointment.time}</td>
                <td className="py-4 px-2 text-sm text-gray-600">{appointment.disease}</td>
                <td className="py-4 px-2">
                  {getStatusIcon(appointment.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsTable;
