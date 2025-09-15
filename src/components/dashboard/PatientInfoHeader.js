import React from 'react';
import { User, Venus, TrendingUp, Droplet, Stethoscope } from 'lucide-react';

const PatientInfoHeader = ({ patientData }) => {
    const infoItems = [
        {
            icon: User,
            value: patientData.name,
            label: 'Patient Name',
            bgColor: 'bg-blue-600'
        },
        {
            icon: Venus,
            value: patientData.gender,
            label: 'Gender',
            bgColor: 'bg-blue-600'
        },
        {
            icon: TrendingUp,
            value: patientData.age,
            label: 'Patient Age',
            bgColor: 'bg-blue-600'
        },
        {
            icon: Droplet,
            value: patientData.bloodType,
            label: 'Blood Type',
            bgColor: 'bg-blue-600'
        },
        {
            icon: Stethoscope,
            value: patientData.consultingDoctor,
            label: 'Consulting Doctor',
            bgColor: 'bg-gray-400'
        }
    ];

    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 flex-1">
                {infoItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className="flex items-center gap-3">
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${item.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                                <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                                    {item.value}
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Patient Photo */}
            <div className="flex justify-center lg:justify-end flex-shrink-0">
                <img
                    src={patientData.patientImage}
                    alt={patientData.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
            </div>
        </div>
    );
};

export default PatientInfoHeader;