"use client";

import { Building2, MapPin, Phone, Users, ChevronRight, Plus } from 'lucide-react';

export default function HospitalListView({ hospitals, onCreateClick, onCardClick }) {
    return (
        <div className="p-8">
            {/* Welcome Message with Create Button */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back!</h2>
                    <p className="text-gray-600">Select a hospital to view tenant details</p>
                </div>
                <button
                    onClick={onCreateClick}
                    className="flex items-center gap-2 px-6 py-3 bg-[rgb(0,122,100)] text-white rounded-lg hover:bg-[rgb(0,100,80)] transition-colors font-medium"
                >
                    <Plus className="w-5 h-5" />
                    Create Hospital
                </button>
            </div>

            {/* Hospital Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitals.map((hospital) => (
                    <div
                        key={hospital.entity_id}
                        onClick={() => onCardClick(hospital.entity_id)}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500 p-6"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-blue-600" />
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>

                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {hospital?.name}
                        </h3>

                        {hospital?.description && (
                            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                                {hospital.description}
                            </p>
                        )}

                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span className="truncate">
                                    {[hospital?.address1, hospital?.address2, hospital?.city, hospital?.country]
                                        .filter(Boolean)
                                        .join(', ')}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                {hospital?.phone_number1 || hospital?.cell_number}
                            </div>

                            {hospital?.email && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Users className="w-4 h-4 flex-shrink-0" />
                                    <span className="truncate">{hospital.email}</span>
                                </div>
                            )}
                        </div>

                        <div className="pt-4 border-t flex items-center justify-between">
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                Tenant ID: {hospital?.tenant_id}
                            </span>
                            {hospital.emergency_contact_type && (
                                <span className="text-xs text-gray-500">
                                    {hospital?.emergency_contact_type}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}