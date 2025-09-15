import React from 'react';
import { Download } from 'lucide-react';

const DoctorVisitsTable = ({ doctorVisits }) => {
    return (
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
    );
};

export default DoctorVisitsTable;