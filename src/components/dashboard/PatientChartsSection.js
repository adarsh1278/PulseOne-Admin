import React from 'react';
import BarChart from '../charts/BarChart';
import AreaChart from '../charts/SimpleAreaChart';

const PatientChartsSection = ({ insuranceClaimsData, medicalExpensesData }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
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
    );
};

export default PatientChartsSection;