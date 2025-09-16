import React from 'react';


import CustomChart from '../resuable/charts/ChartComponent';

const PatientChartsSection = ({ insuranceClaimsData, medicalExpensesData }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            
              <CustomChart
     title="Sales Overview"
     chartType="bar"
   data={[
      { period: 'Jan-Feb', requested: 850, approved: 950 },
    { period: 'Mar-Apr', requested: 700, approved: 850 },
    { period: 'May-June', requested: 950,  approved: 1100 },
    { period: 'Jul-Aug', requested: 800,  approved: 900 },
    { period: 'Sep-Oct', requested: 1050, approved: 750 },
    { period: 'Nov-Dec', requested: 1200, approved: 900 }
  ]}
  series={[
    { key: "requested", label: "Requested", color: "#3b82f6" },
    { key: "approved", label: "Approved", color: "#93c5fd'" },
  ]}
/>

            {/* Medical Expenses Chart */}
           <CustomChart
     title="Sales Overview"
     chartType="area"
   data={[
      { period: 'Jan-Feb', cash: 850, card: 950 },
    { period: 'Mar-Apr', cash: 700, card: 850 },
    { period: 'May-June', cash: 950, card: 1100 },
    { period: 'Jul-Aug', cash: 800, card: 900 },
    { period: 'Sep-Oct', cash: 1050, card: 750 },
    { period: 'Nov-Dec', cash: 1200, card: 900 }
  ]}
  series={[
    { key: "cash", label: "Cash", color: "#3b82f6" },
    { key: "card", label: "Card", color: "#9ca3af" },
  ]}
/>

        </div>
    );
};

export default PatientChartsSection;