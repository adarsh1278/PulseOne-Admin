"use client"
import React from 'react';
import DataTable from '@/components/ui/DataTable';
import { useRouter } from 'next/navigation';

const PatientsList = () => {
    // Sample patient data (matching screenshot format)
    const patientsData = [
        {
            id: "#80762",
            patientName: "Wendi Combs",
            gender: "Female",
            age: 28,
            bloodGroup: "AB+",
            treatment: "Cyclospora",
            mobile: "0987654321",
            email: "test@testing.com",
            address: "360 Branden Knoll",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
            id: "#82348",
            patientName: "Reba Fisher",
            gender: "Female",
            age: 59,
            bloodGroup: "A+",
            treatment: "Alphaviruses",
            mobile: "0987654321",
            email: "test@testing.com",
            address: "806 Je Alley, Robelfurt",
            avatar: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            id: "#82894",
            patientName: "Nick Morrow",
            gender: "Male",
            age: 69,
            bloodGroup: "A+",
            treatment: "Thyroid",
            mobile: "0987654321",
            email: "test@testing.com",
            address: "835 Lorena Stream",
            avatar: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
            id: "#83306",
            patientName: "Juan Meyers",
            gender: "Male",
            age: 55,
            bloodGroup: "B+",
            treatment: "Diabetes",
            mobile: "0987654321",
            email: "test@testing.com",
            address: "6921 Geoffrey Spur",
            avatar: "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            id: "#83308",
            patientName: "Carole Dodson",
            gender: "Female",
            age: 95,
            bloodGroup: "A+",
            treatment: "Conjunctivitis",
            mobile: "0987654321",
            email: "test@testing.com",
            address: "Suite 510 Kiana Track",
            avatar: "https://randomuser.me/api/portraits/women/14.jpg"
        }
    ];

    // Table columns configuration
    const columns = [
        {
            key: 'id',
            label: 'No.',
            render: (value) => (
                <span className="text-gray-900 font-medium">{value}</span>
            )
        },
        {
            key: 'patientName',
            label: 'Patient Name',
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
            key: 'gender',
            label: 'Gender',
            render: (value) => (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${value === 'Male' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'}`}>
                    {value}
                </span>
            )
        },
        {
            key: 'age',
            label: 'Age',
            render: (value) => (
                <span className="text-gray-700">{value}</span>
            )
        },
        {
            key: 'bloodGroup',
            label: 'Blood Group',
            render: (value) => (
                <span className="text-gray-700">{value}</span>
            )
        },
        {
            key: 'treatment',
            label: 'Treatment',
            render: (value) => (
                <span className="text-gray-700">{value}</span>
            )
        },
        {
            key: 'mobile',
            label: 'Mobile',
            render: (value) => (
                <span className="text-gray-700">{value}</span>
            )
        },
        {
            key: 'email',
            label: 'Email',
            render: (value) => (
                <span className="text-gray-700">{value}</span>
            )
        },
        {
            key: 'address',
            label: 'Address',
            render: (value) => (
                <span className="text-gray-700">{value}</span>
            )
        }
    ];

    const router = useRouter();

    // Action handlers
    const handleAddPatient = () => {
        router.push('/patient/add');
    };

    const handleViewPatient = (patient) => {
        console.log('View patient:', patient);
    };

    const handleEditPatient = (patient) => {
        const patientId = patient.id.replace('#', '');
        router.push(`/patient/edit/${patientId}`);
    };

    const handleDeletePatient = (patient) => {
        console.log('Delete patient:', patient);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <DataTable
                title="Patients List"
                data={patientsData}
                columns={columns}
                addButtonText="Add Patient"
                onAdd={handleAddPatient}
                onView={handleViewPatient}
                onEdit={handleEditPatient}
                onDelete={handleDeletePatient}
                itemsPerPageOptions={[10, 25, 50, 100]}
            />
        </div>
    );
};

export default PatientsList;
