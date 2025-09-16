'use client';

import React from 'react';
import { User, Venus, TrendingUp, Droplet, Stethoscope, Activity, Heart, AlertTriangle, Download, Trash2, FileText } from 'lucide-react';
import MiniChart from '../../../components/resuable/charts/MiniChart.jsx';
import BarChart from '../../../components/resuable/charts/BarChart';
import AreaChart from '../../../components/resuable/charts/SimpleAreaChart';

const PatientDashboard = () => {
    // Patient data
    const patientData = {
        name: 'Carole',
        gender: 'Female',
        age: 68,
        bloodType: 'O+',
        consultingDoctor: 'Dr. David',
        patientImage: 'https://randomuser.me/api/portraits/women/68.jpg'
    };

    // Health metrics data
    const healthMetrics = [
        {
            id: 'bp',
            title: 'BP Levels',
            subtitle: 'Recent five visits',
            icon: Activity,
            color: '#ef4444', // red
            bgColor: '#fef2f2',
            iconBg: '#ef4444',
            chartData: [140, 160, 180, 170, 150, 140, 130],
            tableData: [
                { date: '24/04/2024', value: 140 },
                { date: '16/04/2024', value: 190 },
                { date: '10/04/2024', value: 230 }
            ]
        },
        {
            id: 'sugar',
            title: 'Sugar Levels',
            subtitle: 'Recent five visits',
            icon: Droplet,
            color: '#3b82f6', // blue
            bgColor: '#eff6ff',
            iconBg: '#3b82f6',
            chartData: [140, 130, 120, 130, 140, 135, 145],
            tableData: [
                { date: '24/04/2024', value: 140 },
                { date: '16/04/2024', value: 190 },
                { date: '10/04/2024', value: 230 }
            ]
        },
        {
            id: 'heart',
            title: 'Heart Rate',
            subtitle: 'Recent five visits',
            icon: Heart,
            color: '#22c55e', // green
            bgColor: '#f0fdf4',
            iconBg: '#22c55e',
            chartData: [110, 105, 115, 108, 112, 110, 115],
            tableData: [
                { date: '24/04/2024', value: 110 },
                { date: '16/04/2024', value: 120 },
                { date: '10/04/2024', value: 100 }
            ]
        },
        {
            id: 'cholesterol',
            title: 'Cholesterol',
            subtitle: 'Recent five visits',
            icon: AlertTriangle,
            color: '#f59e0b', // amber
            bgColor: '#fffbeb',
            iconBg: '#f59e0b',
            chartData: [180, 185, 175, 190, 185, 180, 175],
            tableData: [
                { date: '24/04/2024', value: 180 },
                { date: '16/04/2024', value: 220 },
                { date: '10/04/2024', value: 230 }
            ]
        }
    ];

    // Health Insurance Claims data
    const insuranceClaimsData = [
        { period: 'Jan-Feb', requested: 8, approved: 6 },
        { period: 'Mar-Apr', requested: 22, approved: 18 },
        { period: 'May-June', requested: 12, approved: 8 },
        { period: 'Jul-Aug', requested: 18, approved: 12 },
        { period: 'Sep-Oct', requested: 28, approved: 20 },
        { period: 'Nov-Dec', requested: 16, approved: 14 }
    ];

    // Medical Expenses data
    const medicalExpensesData = [
        { period: 'Jan-Feb', cash: 30, card: 25 },
        { period: 'Mar-Apr', cash: 20, card: 35 },
        { period: 'May-June', cash: 30, card: 20 },
        { period: 'Jul-Aug', cash: 25, card: 15 },
        { period: 'Sep-Oct', cash: 35, card: 25 },
        { period: 'Nov-Dec', cash: 45, card: 30 }
    ];

    // Doctor Visits data
    const doctorVisits = [
        {
            id: 1,
            doctor: 'Dr. Hector',
            date: '20/05/2024',
            department: 'Dentist',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            id: 2,
            doctor: 'Dr. Mitchel',
            date: '20/05/2024',
            department: 'Urologist',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id: 3,
            doctor: 'Dr. Fermin',
            date: '18/03/2024',
            department: 'Surgeon',
            image: 'https://randomuser.me/api/portraits/men/25.jpg'
        }
    ];

    // Reports data
    const reports = [
        {
            id: 1,
            title: 'Reports 1 clinical documentation',
            date: 'May-28, 2024'
        },
        {
            id: 2,
            title: 'Reports 2 random files documentation',
            date: 'Mar-20, 2024'
        },
        {
            id: 3,
            title: 'Reports 3 glucose level complete report',
            date: 'Feb-18, 2024'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">

                {/* Patient Info Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 flex-1">
                        {/* Patient Name */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{patientData.name}</h2>
                                <p className="text-xs sm:text-sm text-gray-500">Patient Name</p>
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Venus className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{patientData.gender}</h2>
                                <p className="text-xs sm:text-sm text-gray-500">Gender</p>
                            </div>
                        </div>

                        {/* Age */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{patientData.age}</h2>
                                <p className="text-xs sm:text-sm text-gray-500">Patient Age</p>
                            </div>
                        </div>

                        {/* Blood Type */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Droplet className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{patientData.bloodType}</h2>
                                <p className="text-xs sm:text-sm text-gray-500">Blood Type</p>
                            </div>
                        </div>

                        {/* Consulting Doctor */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                                <Stethoscope className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{patientData.consultingDoctor}</h2>
                                <p className="text-xs sm:text-sm text-gray-500">Consulting Doctor</p>
                            </div>
                        </div>
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

                {/* Health Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {healthMetrics.map((metric) => {
                        const IconComponent = metric.icon;
                        return (
                            <div key={metric.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: metric.iconBg }}
                                        >
                                            <IconComponent className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{metric.title}</h3>
                                            <p className="text-sm text-gray-500">{metric.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chart */}
                                <div className="px-6 pb-4">
                                    <MiniChart
                                        data={metric.chartData}
                                        color={metric.color}
                                    />
                                </div>

                                {/* Data Table */}
                                <div className="border-t border-gray-100">
                                    {metric.tableData.map((row, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center px-6 py-3 border-b border-gray-50 last:border-b-0"
                                        >
                                            <span className="text-sm text-gray-600">{row.date}</span>
                                            <span className="text-sm font-medium text-gray-900">{row.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Health Insurance Claims Chart */}
                    <BarChart
                        data={insuranceClaimsData}
                        title="Health Insurance Claims"
                        colors={{
                            requested: '#3b82f6', // blue-500
                            approved: '#93c5fd'   // blue-300
                        }}
                    />

                    {/* Medical Expenses Chart */}
                    <AreaChart
                        data={medicalExpensesData}
                        title="My Medical Expenses"
                        colors={{
                            cash: '#3b82f6',    // blue-500
                            card: '#d1d5db'     // gray-300
                        }}
                    />
                </div>

                {/* Tables Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    {/* Doctor Visits Table */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Doctor Visits</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reports</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {doctorVisits.map((visit) => (
                                        <tr key={visit.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img
                                                        src={visit.image}
                                                        alt={visit.doctor}
                                                        className="w-10 h-10 rounded-full object-cover mr-3"
                                                    />
                                                    <span className="text-sm font-medium text-gray-900">{visit.doctor}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {visit.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {visit.department}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium">
                                                        View Reports
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
                                                        <Download className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Reports Table */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Reports</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reports Link</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {reports.map((report) => (
                                        <tr key={report.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {report.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                                    <FileText className="h-6 w-6 text-white" />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                                                    {report.title}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {report.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded">
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
                                                        <Download className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;