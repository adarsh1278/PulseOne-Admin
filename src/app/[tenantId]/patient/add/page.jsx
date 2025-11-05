'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function AddPatientPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center space-x-4 mb-6">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Patients List
                        </button>
                    </div>

                    <div className="text-center py-12">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Add New Patient
                        </h1>
                        <p className="text-gray-600 mb-8">
                            This  is under construction. Patient registration form will be implemented here.
                        </p>
                        <button
                            onClick={() => router.push('/patient/list')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                            Back to Patients List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}