"use client"
import React from 'react';
import HeroSection from '@/components/dashboard/HeroSection';
import StatsCards from '@/components/dashboard/StatsCards';
import MetricsGrid from '@/components/dashboard/MetricsGrid';
import HospitalEarnings from '@/components/dashboard/HospitalEarnings';
import ChartsSection from '@/components/dashboard/ChartsSection';
import { ColorExamples } from '@/components/examples/ColorExamples';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-4 lg:p-6 space-y-4 md:space-y-6 overflow-x-hidden">
      {/* Hero Section */}
      {/* <ColorExamples/> */}
      <HeroSection />
      
      {/* Stats Cards */}
      <StatsCards />
      
      {/* Hospital Earnings */}
      {/* <HospitalEarnings /> */}
      
      {/* Metrics Grid */}
      {/* <MetricsGrid /> */}
      
      {/* Charts and Analytics */}
      <ChartsSection />
    </div>
  );
}