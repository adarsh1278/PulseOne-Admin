"use client";
import { useState } from 'react';
import { Building2, MapPin, Phone, Users, LogOut, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogout } from '@/store/actions/profileAction';
import toast from 'react-hot-toast';

const hospitals = [
  {
    id: 'h001',
    name: 'St. Mary\'s Medical Center',
    location: 'New York, NY',
    beds: 450,
    phone: '(212) 555-0123',
    type: 'General Hospital'
  },
  {
    id: 'h002',
    name: 'Central City Hospital',
    location: 'Chicago, IL',
    beds: 320,
    phone: '(312) 555-0456',
    type: 'Trauma Center'
  },
  {
    id: 'h003',
    name: 'Riverside Health Institute',
    location: 'Los Angeles, CA',
    beds: 580,
    phone: '(213) 555-0789',
    type: 'General Hospital'
  },
  {
    id: 'h004',
    name: 'Valley View Medical',
    location: 'Phoenix, AZ',
    beds: 275,
    phone: '(602) 555-0321',
    type: 'Specialty Hospital'
  },
  {
    id: 'h005',
    name: 'Lakeside Regional Hospital',
    location: 'Seattle, WA',
    beds: 410,
    phone: '(206) 555-0654',
    type: 'General Hospital'
  },
  {
    id: 'h006',
    name: 'Metro General Hospital',
    location: 'Boston, MA',
    beds: 390,
    phone: '(617) 555-0987',
    type: 'Teaching Hospital'
  }
];

export default function HospitalListPage() {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleCardClick = (id) => {
    setSelectedTenant(id);
    // Simulate routing to /tenant/:id
    router.push(`/${id}`);
    console.log(`Navigating to /tenant/${id}`);
  };

  const handleLogout = () => {
    dispatch(UserLogout())
    toast.success("Logged out successfully");
    router.push('/login');
    console.log('Logging out...');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
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
            onClick={handleLogout}
            className=" cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Welcome Message */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back!</h2>
            <p className="text-gray-600">Select a hospital to view tenant details</p>
          </div>

          {/* Hospital Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital) => (
              <div
                key={hospital.id}
                onClick={() => handleCardClick(hospital.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {hospital.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {hospital.location}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    {hospital.phone}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    {hospital.beds} beds
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {hospital.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Tenant Info */}
          {selectedTenant && (
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">
                <span className="font-semibold">Selected Tenant ID:</span> {selectedTenant}
              </p>
              <p className="text-sm text-blue-600 mt-1">
                (In a real app, this would route to /tenant/{selectedTenant})
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}