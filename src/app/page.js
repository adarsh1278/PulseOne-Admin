"use client"
import React from 'react';
import HeroSection from '@/components/dashboard/HeroSection';
import AvailableDoctors from '@/components/dashboard/AvailableDoctors';
import UpcomingSurgeries from '@/components/dashboard/UpcomingSurgeries';
import AppointmentsTable from '@/components/dashboard/AppointmentsTable';
import ActivitySection from '@/components/dashboard/ActivitySection';
import IncomeChart from '@/components/dashboard/IncomeChart';
import PharmacyOrdersChart from '@/components/dashboard/PharmacyOrdersChart';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-4 lg:p-6 space-y-4 md:space-y-6 overflow-x-hidden">
      {/* Top Section with Hero and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Hero Section - Takes 3 columns */}
        <div className="lg:col-span-3">
          <HeroSection />
        </div>
        {/* Activity Section - Takes 1 column */}
        <div className="lg:col-span-1">
          <ActivitySection />
        </div>
      </div>
      
      {/* Available Doctors and Upcoming Surgeries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AvailableDoctors />
        <UpcomingSurgeries />
      </div>
      
      {/* Appointments Table */}
      <AppointmentsTable />
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IncomeChart />
        <PharmacyOrdersChart />
      </div>
    </div>
  );
}
