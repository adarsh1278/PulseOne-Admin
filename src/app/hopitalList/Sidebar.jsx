"use client";

import { Building2, LogOut } from 'lucide-react';

export default function Sidebar({ onLogout }) {
    return (
        <div className="w-64 bg-white shadow-lg flex flex-col">
            <div className="flex-1 p-6">
                <div className="flex items-center gap-3 mb-8">
                    <Building2 className="w-8 h-8 text-blue-600" />
                    <h1 className="text-xl font-bold text-gray-800">HealthCare Portal</h1>
                </div>

                <nav className="space-y-2">
                    <div className="px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium">
                        Hospital List
                    </div>
                </nav>
            </div>

            {/* Logout Button at Bottom */}
            <div className="p-6 border-t">
                <button
                    onClick={onLogout}
                    className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
}
