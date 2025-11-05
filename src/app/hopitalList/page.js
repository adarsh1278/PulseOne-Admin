"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogout } from '@/store/actions/profileAction';
import { createHospital, getHospitals } from '@/store/actions/hospitalAction';
import { showSuccess, showError } from '@/utils/toasttheme';
import toast from 'react-hot-toast';

import Sidebar from './Sidebar';
import HospitalListView from './HospitalListView';
import CreateHospitalView from './CreateHospitalView';



export default function HospitalListPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
   
   name: 'Sunrise Care Hospital',
  description: 'A multi-specialty hospital providing quality healthcare services.',
  address1: '123 Health Avenue',
  address2: 'Near Green Park Metro',
  city: 'New Delhi',
  zip: '110016',
  country: 'India',
  cell_number: '9876543210',
  phone_number1: '01123456789',
  phone_number2: '01123456790',
  email: 'contact@sunrisecare.in',
  emergency_contact_type: 'Administrator',
  emergency_contact_number1: '9998887777',
  emergency_contact_number2: '8887776666',
  logo: 'https://example.com/hospital-logo.png',
    hospitalregnumber: '',
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const { loading: createHospitalLoading, error: createError } = useSelector(
    (state) => state.hospital || {}
  );

  // Handle create hospital click
  const handleCreateClick = () => {
    setShowCreateForm(true);
    resetForm();
  };

  // Handle back button
  const handleBackClick = () => {
    setShowCreateForm(false);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
  
    setErrors({});
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Hospital name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.address1.trim()) {
      newErrors.address1 = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.cell_number.trim()) {
      newErrors.cell_number = 'Cell number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.cell_number.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.cell_number = 'Please enter a valid phone number';
    }

    if (formData.phone_number1 && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone_number1.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone_number1 = 'Please enter a valid phone number';
    }

    if (formData.phone_number2 && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone_number2.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone_number2 = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const {user}= useSelector((state)=>state.auth||{});

  // Handle form submit
  const handleSubmit = async (e) => {
    console.log("form submitted");
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
  
    try {
      const submitData = {
        ...formData,
       
      };

      console.log('Creating hospital with data:', submitData);

      await dispatch(createHospital(submitData , user?.tenantId));

      // Reset form and go back to list
      setTimeout(() => {
        handleBackClick();
      }, 1500);
    } catch (error) {
      console.error('Error creating hospital:', error);
      showError(error.message || 'Failed to create hospital');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle card click
  const handleCardClick = (id) => {
    router.push(`/${id}`);
  };

  // Handle logout
  const handleLogout = () => {
    dispatch(UserLogout());
    toast.success('Logged out successfully');
    router.push('/login');
  };
const dispath = useDispatch();

const {loading , hospitalList , success} = useSelector((state)=>state.hospitals);

useEffect(()=>{
  console.log("fetched hospitals data:",hospitalList);
},[loading,hospitalList])
let counter = 0;
useEffect(()=>{
   console.log("hospital list page loaded");
   if(!user){
    router.push('/login');
   }
   else{
    if(!loading&&!success&&hospitalList.length==0){
      console.log( "counter" , counter)
      counter++;

   dispatch(getHospitals(user?.tenantId));
    }
   }
},[user])
  return (
    <div className="flex h-screen bg-gray-50" >
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {loading&&(
          <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
        )}
        {!showCreateForm ? (
          <HospitalListView
            hospitals={hospitalList}
            onCreateClick={handleCreateClick}
            onCardClick={handleCardClick}
          />
        ) : (
          <CreateHospitalView
            formData={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            createHospitalLoading={createHospitalLoading}
            createError={createError}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onBackClick={handleBackClick}
          />
        )}
      </div>
    </div>
  );
}
