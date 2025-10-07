'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DoctorCard from '../../../../components/cards/DoctorCard';

const DoctorCardsPage = () => {
    const router = useRouter();
    const [searchName, setSearchName] = useState('');
    const [searchDepartment, setSearchDepartment] = useState('');

    // Sample doctors data
    const doctorsData = [
        {
            id: 1,
            name: 'Dr. Clive Nathan',
            specialization: 'Gynecologist, General Physician',
            experience: 8,
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/1.jpg'
        },
        {
            id: 2,
            name: 'Dr. Laura Jaden',
            specialization: 'Plastic Surgeon',
            experience: 9,
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            id: 3,
            name: 'Dr. Aliko Maria',
            specialization: 'Physiotherapist',
            experience: 6,
            rating: 4,
            image: 'https://randomuser.me/api/portraits/women/3.jpg'
        },
        {
            id: 4,
            name: 'Dr. Amelia Kim',
            specialization: 'Gastroenterologist',
            experience: 7,
            rating: 4,
            image: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
            id: 5,
            name: 'Dr. Sarah Johnson',
            specialization: 'Cardiologist',
            experience: 12,
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/5.jpg'
        },
        {
            id: 6,
            name: 'Dr. Olivia',
            specialization: 'Dermatologist',
            experience: 5,
            rating: 4.5,
            image: 'https://randomuser.me/api/portraits/women/6.jpg'
        },
        {
            id: 7,
            name: 'Dr. Kelly Phong',
            specialization: 'Orthopedic Surgeon',
            experience: 10,
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/7.jpg'
        },
        {
            id: 8,
            name: 'Dr. George Max',
            specialization: 'Neurologist',
            experience: 15,
            rating: 4.5,
            image: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            id: 9,
            name: 'Dr. Michael Brown',
            specialization: 'Pediatrician',
            experience: 8,
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
            id: 10,
            name: 'Dr. James Wilson',
            specialization: 'Oncologist',
            experience: 14,
            rating: 4.5,
            image: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            id: 11,
            name: 'Dr. Robert Davis',
            specialization: 'Urologist',
            experience: 11,
            rating: 4,
            image: 'https://randomuser.me/api/portraits/men/4.jpg'
        },
        {
            id: 12,
            name: 'Dr. David Miller',
            specialization: 'Psychiatrist',
            experience: 9,
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/5.jpg'
        }
    ];

    // Filter doctors based on search
    const filteredDoctors = doctorsData.filter(doctor => {
        const matchesName = doctor.name.toLowerCase().includes(searchName.toLowerCase());
        const matchesDepartment = doctor.specialization.toLowerCase().includes(searchDepartment.toLowerCase());
        return matchesName && matchesDepartment;
    });

    const handleSearch = () => {
        // Search is already filtered in real-time
        console.log('Searching for:', { searchName, searchDepartment });
    };

    const handleBookAppointment = (doctor) => {
        console.log('Book appointment with:', doctor);
        // Here you would typically open a booking modal or navigate to booking page
        alert(`Booking appointment with ${doctor.name}`);
    };

    const handleViewProfile = (doctor) => {
        router.push(`/doctor/profile/${doctor.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Search Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end text-gray-900">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Doctor Name
                            </label>
                            <input
                                type="text"
                                placeholder="Search By Doctors Name"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Department
                            </label>
                            <input
                                type="text"
                                placeholder="Search By Department"
                                value={searchDepartment}
                                onChange={(e) => setSearchDepartment(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <button
                                onClick={handleSearch}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredDoctors.map((doctor) => (
                        <DoctorCard
                            key={doctor.id}
                            doctor={doctor}
                            onBookAppointment={handleBookAppointment}
                            onViewProfile={handleViewProfile}
                        />
                    ))}
                </div>

                {/* No Results */}
                {filteredDoctors.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No doctors found matching your search criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorCardsPage;