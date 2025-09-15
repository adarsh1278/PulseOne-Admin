import { Activity, Heart, AlertTriangle, Droplet } from 'lucide-react';

// Patient data
export const patientData = {
    name: 'Carole',
    gender: 'Female',
    age: 68,
    bloodType: 'O+',
    consultingDoctor: 'Dr. David',
    patientImage: 'https://randomuser.me/api/portraits/women/68.jpg'
};

// Health metrics data
export const healthMetrics = [
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
export const insuranceClaimsData = [
    { period: 'Jan-Feb', requested: 8, approved: 6 },
    { period: 'Mar-Apr', requested: 22, approved: 18 },
    { period: 'May-June', requested: 12, approved: 8 },
    { period: 'Jul-Aug', requested: 18, approved: 12 },
    { period: 'Sep-Oct', requested: 28, approved: 20 },
    { period: 'Nov-Dec', requested: 16, approved: 14 }
];

// Medical Expenses data
export const medicalExpensesData = [
    { period: 'Jan-Feb', cash: 850, card: 950 },
    { period: 'Mar-Apr', cash: 700, card: 850 },
    { period: 'May-June', cash: 950, card: 1100 },
    { period: 'Jul-Aug', cash: 800, card: 900 },
    { period: 'Sep-Oct', cash: 1050, card: 750 },
    { period: 'Nov-Dec', cash: 1200, card: 900 }
];

// Doctor Visits data
export const doctorVisits = [
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
export const reports = [
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

// Health Activity data for radar chart
export const healthActivityData = [
    { activity: 'Walking', value: 100, angle: 0 },
    { activity: 'Sleeping', value: 60, angle: 60 },
    { activity: 'Yoga', value: 25, angle: 120 },
    { activity: 'Gym', value: 40, angle: 180 },
    { activity: 'Playing', value: 80, angle: 240 },
    { activity: 'Swimming', value: 30, angle: 300 }
];

// Timeline data
export const timelineData = [
    {
        id: 1,
        time: 'AN HOUR AGO',
        doctor: 'Dr. Deena Cooley',
        action: 'sent medicine details.',
        details: 'Medicine Name - Predeymsone',
        hasPaymentLink: true
    },
    {
        id: 2,
        time: 'AN HOUR AGO',
        doctor: 'Dr. Mitchel Alvarez',
        action: 'added import files.',
        details: 'File Name - Naverreone',
        hasPaymentLink: true
    },
    {
        id: 3,
        time: 'AN HOUR AGO',
        doctor: 'Dr. Owen Scott',
        action: 'reviewed your file.',
        details: '',
        hasPaymentLink: false
    },
    {
        id: 4,
        time: '2 HOURS AGO',
        doctor: 'Dr. Sarah Johnson',
        action: 'updated prescription.',
        details: 'Medicine Name - Ibuprofen',
        hasPaymentLink: true
    },
    {
        id: 5,
        time: '3 HOURS AGO',
        doctor: 'Dr. Mark Wilson',
        action: 'scheduled follow-up.',
        details: 'Appointment Date - Sept 20, 2025',
        hasPaymentLink: false
    }
];