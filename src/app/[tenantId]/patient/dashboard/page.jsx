'use client';

import React from 'react';
import PatientInfoHeader from '../../../../components/dashboard/PatientInfoHeader';
import HealthMetricsGrid from '../../../../components/dashboard/HealthMetricsGrid';
import PatientChartsSection from '../../../../components/dashboard/PatientChartsSection';
import HealthActivityChart from '../../../../components/dashboard/HealthActivityChart';
import PharmacySection from '../../../../components/dashboard/PharmacySection';
import TimelineSection from '../../../../components/dashboard/TimelineSection';
import DoctorVisitsTable from '../../../../components/dashboard/DoctorVisitsTable';
import ReportsTable from '../../../../components/dashboard/ReportsTable';

// Import data
import {
    patientData,
    healthMetrics,
    insuranceClaimsData,
    medicalExpensesData,
    healthActivityData,
    timelineData,
    doctorVisits,
    reports
} from '../../../../data/patientData';

const PatientDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Patient Info Header */}
                <PatientInfoHeader patientData={patientData} />

                {/* Health Metrics Grid */}
                <HealthMetricsGrid healthMetrics={healthMetrics} />

                {/* Charts Section */}
                <PatientChartsSection
                    insuranceClaimsData={insuranceClaimsData}
                    medicalExpensesData={medicalExpensesData}
                />

                {/* Additional Sections - Health Activity, Pharmacy, Timeline */}


                {/* Tables Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <DoctorVisitsTable doctorVisits={doctorVisits} />
                    <ReportsTable reports={reports} />
                </div>
                <div className=" mt-3.5 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <HealthActivityChart healthActivityData={healthActivityData} />
                    <PharmacySection />
                    <TimelineSection timelineData={timelineData} />
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;