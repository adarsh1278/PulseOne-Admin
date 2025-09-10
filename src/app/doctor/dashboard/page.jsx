"use client"
import React from 'react';
import DoctorHeroSection from '@/components/dashboard/DoctorHeroSection';
import PatientsChart from '@/components/dashboard/PatientsChart';
import AppointmentsChart from '@/components/dashboard/AppointmentsChart';
import PatientReviews from '@/components/dashboard/PatientReviews';
import PatientsType from '@/components/dashboard/PatientsType';
import Awards from '@/components/dashboard/Awards';
import UpcomingAppointments from '@/components/dashboard/UpcomingAppointments';
import SurgeriesChart from '@/components/dashboard/SurgeriesChart';
import IncomeChart from '@/components/dashboard/IncomeChart';

export default function DoctorDashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 space-y-6">
            {/* Hero Section */}
            <DoctorHeroSection />

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PatientsChart />
                <AppointmentsChart />
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <PatientReviews />
                <PatientsType />
                <Awards />
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <IncomeChart />
                <UpcomingAppointments />
                <SurgeriesChart />
            </div>
        </div>
    );
}
