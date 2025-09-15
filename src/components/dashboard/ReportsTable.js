import React from 'react';
import { Download, Trash2, FileText } from 'lucide-react';

const ReportsTable = ({ reports }) => {
    return (
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
    );
};

export default ReportsTable;