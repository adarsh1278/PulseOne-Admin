"use client"
import React from 'react';

const UpcomingAppointments = () => {
  const appointments = [
    {
      id: 1,
      patient: "Need an appointment urgent.",
      avatar: "/api/placeholder/40/40",
      time: "10:30 AM",
      type: "urgent"
    },
    {
      id: 2,
      patient: "Follow-up checkup required.",
      avatar: "/api/placeholder/40/40",
      time: "11:00 AM",
      type: "normal"
    },
    {
      id: 3,
      patient: "Routine examination scheduled.",
      avatar: "/api/placeholder/40/40",
      time: "2:30 PM",
      type: "normal"
    },
    {
      id: 4,
      patient: "Emergency consultation needed.",
      avatar: "/api/placeholder/40/40",
      time: "3:15 PM",
      type: "urgent"
    },
    {
      id: 5,
      patient: "Physical therapy session.",
      avatar: "/api/placeholder/40/40",
      time: "4:00 PM",
      type: "normal"
    },
    {
      id: 6,
      patient: "Blood work review appointment.",
      avatar: "/api/placeholder/40/40",
      time: "4:45 PM",
      type: "normal"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Appointments</h3>
      
      {/* Scrollable container with fixed height */}
      <div className="h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                  {appointment.patient.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 text-sm font-medium mb-2">
                    {appointment.patient}
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                      Accept
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-3 py-1 rounded text-xs font-medium transition-colors">
                      Decline
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-500 flex-shrink-0">
                  {appointment.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
