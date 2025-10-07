'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import DoctorRegistrationForm from '../../../../../components/forms/DoctorRegistrationForm';

export default function EditDoctorPage() {
    const params = useParams();
    const doctorId = params.id;
    const [doctorData, setDoctorData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching doctor data
        // In a real application, you would fetch this from your API
        const fetchDoctorData = async () => {
            try {
                // Mock data - replace with actual API call
                const mockDoctorData = {
                    id: doctorId,
                    firstName: 'John',
                    lastName: 'Doe',
                    age: '35',
                    gender: 'male',
                    createId: 'DOC001',
                    email: 'john.doe@example.com',
                    mobile: '1234567890',
                    maritalStatus: 'married',
                    qualification: 'mbbs',
                    designation: 'consultant',
                    bloodGroup: 'o+',
                    address: '123 Main Street, City',
                    country: 'us',
                    state: 'ca',
                    city: 'Los Angeles',
                    postalCode: '90210',
                    profilePhoto: null,
                    bio: 'Experienced doctor with 10+ years in cardiology...',
                    availability: {
                        sunday: { from: '', to: '' },
                        monday: { from: '09:00', to: '17:00' },
                        tuesday: { from: '09:00', to: '17:00' },
                        wednesday: { from: '09:00', to: '17:00' },
                        thursday: { from: '09:00', to: '17:00' },
                        friday: { from: '09:00', to: '17:00' },
                        saturday: { from: '', to: '' }
                    },
                    username: 'johndoe'
                };

                // Simulate API delay
                setTimeout(() => {
                    setDoctorData(mockDoctorData);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching doctor data:', error);
                setLoading(false);
            }
        };

        if (doctorId) {
            fetchDoctorData();
        }
    }, [doctorId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!doctorData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Doctor Not Found</h2>
                    <p className="text-gray-600">The doctor with ID {doctorId} could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <DoctorRegistrationForm
            doctorData={doctorData}
            isEdit={true}
        />
    );
}