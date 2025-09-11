"use client"
import React from 'react';
import DataTable from '@/components/ui/DataTable';

const DoctorsList = () => {
  // Sample doctor data matching your image
  const doctorsData = [
    {
      id: "#0008",
      doctorName: "Allan Stuart",
      designation: "Oncologist",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      sun: "NA",
      mon: "9AM-2PM",
      tue: "9AM-2PM", 
      wed: "9AM-2PM",
      thu: "9AM-2PM",
      fri: "9AM-2PM",
      sat: "9AM-2PM"
    },
    {
      id: "#0021",
      doctorName: "Smith White",
      designation: "Neurology",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      sun: "NA",
      mon: "3PM-5PM",
      tue: "3PM-5PM",
      wed: "3PM-5PM", 
      thu: "3PM-5PM",
      fri: "3PM-5PM",
      sat: "3PM-5PM"
    },
    {
      id: "#0026",
      doctorName: "Gilbert Sandoval",
      designation: "Cardiologist",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      sun: "NA",
      mon: "5PM-9PM",
      tue: "5PM-9PM",
      wed: "5PM-9PM",
      thu: "5PM-9PM", 
      fri: "5PM-9PM",
      sat: "5PM-9PM"
    },
    {
      id: "#0039",
      doctorName: "Bernardo James",
      designation: "Clinical Doctor",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      sun: "NA",
      mon: "7AM-9AM",
      tue: "7AM-9AM",
      wed: "7AM-9AM",
      thu: "7AM-9AM",
      fri: "7AM-9AM",
      sat: "7AM-9AM"
    },
    {
      id: "#0044", 
      doctorName: "Ronald Sullivan",
      designation: "Radiologist",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      sun: "NA",
      mon: "3PM-9PM",
      tue: "3PM-9PM",
      wed: "3PM-9PM",
      thu: "3PM-9PM",
      fri: "3PM-9PM",
      sat: "3PM-9PM"
    },
    {
      id: "#0047",
      doctorName: "Taylor Melon",
      designation: "Therapist", 
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      sun: "NA",
      mon: "9AM-3PM",
      tue: "9AM-3PM",
      wed: "9AM-3PM",
      thu: "9AM-3PM",
      fri: "9AM-3PM",
      sat: "9AM-3PM"
    },
    {
      id: "#0048",
      doctorName: "George Bailey",
      designation: "Pediatrics",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      sun: "NA",
      mon: "5PM-8PM",
      tue: "5PM-8PM",
      wed: "5PM-8PM",
      thu: "5PM-8PM",
      fri: "5PM-8PM",
      sat: "5PM-8PM"
    },
    {
      id: "#0058",
      doctorName: "Andrea Lalema",
      designation: "Dentist",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      sun: "NA",
      mon: "8AM-4PM",
      tue: "8AM-4PM",
      wed: "8AM-4PM",
      thu: "8AM-4PM",
      fri: "8AM-4PM",
      sat: "8AM-4PM"
    },
    {
      id: "#0067",
      doctorName: "Bshton Cozei",
      designation: "Pediatrics",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      sun: "NA",
      mon: "4PM-7PM",
      tue: "4PM-7PM",
      wed: "4PM-7PM",
      thu: "4PM-7PM",
      fri: "4PM-7PM",
      sat: "4PM-7PM"
    },
    {
      id: "#0002",
      doctorName: "Meera Gill",
      designation: "Gynecologist",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      sun: "NA",
      mon: "5PM-8PM",
      tue: "5PM-8PM",
      wed: "5PM-8PM",
      thu: "5PM-8PM",
      fri: "5PM-8PM",
      sat: "5PM-8PM"
    },
    {
      id: "#0083",
      doctorName: "Amelia Bruklin",
      designation: "Neurologist",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      sun: "NA",
      mon: "6PM-8PM",
      tue: "6PM-8PM",
      wed: "6PM-8PM",
      thu: "6PM-8PM",
      fri: "6PM-8PM",
      sat: "6PM-8PM"
    }
  ];

  // Table columns configuration
  const columns = [
    {
      key: 'id',
      label: 'ID',
      render: (value) => (
        <span className="text-gray-900 font-medium">{value}</span>
      )
    },
    {
      key: 'doctorName',
      label: 'Doctor Name',
      render: (value, row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.avatar}
            alt={value}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-gray-900 font-medium">{value}</span>
        </div>
      )
    },
    {
      key: 'designation',
      label: 'Designation',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
      )
    },
    {
      key: 'sun',
      label: 'Sun',
      render: (value) => (
        <span className={value === 'NA' ? 'text-red-500' : 'text-gray-700'}>{value}</span>
      )
    },
    {
      key: 'mon',
      label: 'Mon',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
      )
    },
    {
      key: 'tue',
      label: 'Tue',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
      )
    },
    {
      key: 'wed',
      label: 'Wed',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
      )
    },
    {
      key: 'thu',
      label: 'Thu',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
      )
    },
    {
      key: 'fri',
      label: 'Fri',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
      )
    },
    {
      key: 'sat',
      label: 'Sat',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
      )
    }
  ];

  // Action handlers
  const handleAddDoctor = () => {
    console.log('Add new doctor');
  };

  const handleViewDoctor = (doctor) => {
    console.log('View doctor:', doctor);
  };

  const handleEditDoctor = (doctor) => {
    console.log('Edit doctor:', doctor);
  };

  const handleDeleteDoctor = (doctor) => {
    console.log('Delete doctor:', doctor);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <DataTable
        title="Doctors List"
        data={doctorsData}
        columns={columns}
        addButtonText="Add Doctor"
        onAdd={handleAddDoctor}
        onView={handleViewDoctor}
        onEdit={handleEditDoctor}
        onDelete={handleDeleteDoctor}
        itemsPerPageOptions={[12, 25, 50, 100]}
      />
    </div>
  );
};

export default DoctorsList;
