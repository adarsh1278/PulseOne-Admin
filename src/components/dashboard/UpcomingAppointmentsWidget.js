"use client"
import React from 'react';

const UpcomingAppointmentsWidget = () => {
  const appointments = [
    {
      id: 1,
      patient: {
        name: "John Smith",
        avatar: "👨‍💼"
      },
      message: "Need an appointment urgent.",
      time: "2 hours ago"
    },
    {
      id: 2,
      patient: {
        name: "Sarah Johnson",
        avatar: "👩‍💼"
      },
      message: "Need an appointment urgent.",
      time: "3 hours ago"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Appointments</h3>
      
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-xl">
                {appointment.patient.avatar}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {appointment.patient.name}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {appointment.message}
                </p>
                <div className="flex gap-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                    Accept
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAppointmentsWidget;
