'use client'
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, User, Phone, Mail, MapPin, Calendar, Droplet } from 'lucide-react';
import { patientsData } from '../../../../../data/patientsData';

export default function PatientProfilePage() {
    const router = useRouter();
    const params = useParams();
    const patientId = `#${params.id}`;

    // Find the patient data
    const patient = patientsData.find(p => p.id === patientId);

    if (!patient) {
        return (
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Patient Not Found</h1>
                        <p className="text-gray-600 mb-8">The patient with ID {patientId} was not found.</p>
                        <button
                            onClick={() => router.push('/patient/list')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                            Back to Patients List
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-sm">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-4 mb-6">
                            <button
                                onClick={() => router.back()}
                                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Patients List
                            </button>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                <img
                                    src={patient.avatar}
                                    alt={patient.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(patient.name)}&background=6366f1&color=fff&size=80`;
                                    }}
                                />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{patient.name}</h1>
                                <p className="text-gray-600">Patient ID: {patient.id}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${patient.gender === 'Male'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-pink-100 text-pink-800'
                                        }`}>
                                        {patient.gender}
                                    </span>
                                    <span className="text-gray-600">Age: {patient.age}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Patient Details */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>

                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="text-gray-900">{patient.mobile}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a
                                            href={`mailto:${patient.email}`}
                                            className="text-blue-600 hover:text-blue-800 hover:underline"
                                        >
                                            {patient.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-500">Address</p>
                                        <p className="text-gray-900">{patient.address}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Medical Information */}
                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h2>

                                <div className="flex items-center space-x-3">
                                    <Droplet className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Blood Group</p>
                                        <span className="font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded text-sm">
                                            {patient.bloodGroup}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <User className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Current Treatment</p>
                                        <p className="text-gray-900">{patient.treatment}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Age</p>
                                        <p className="text-gray-900">{patient.age} years old</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-gray-200">
                            <button
                                onClick={() => router.push(`/patient/edit/${params.id}`)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
                            >
                                <span>Edit Patient</span>
                            </button>
                            <button
                                onClick={() => router.push('/patient/list')}
                                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
                            >
                                Back to List
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}