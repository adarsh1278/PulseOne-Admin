'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Save, X } from 'lucide-react';
import Layout from '../../../components/layout/Layout';
import { createHospital } from '../../../store/actions/superAdminActions';

const CreateHospitalPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { createHospitalLoading, error } = useSelector(state => state.superAdmin);

  const [formData, setFormData] = useState({
    entity_id: '',
    tenant_id: '',
    name: '',
    description: '',
    address1: '',
    address2: '',
    city: '',
    zip: '',
    country: '',
    cell_number: '',
    phone_number1: '',
    phone_number2: '',
    email: '',
    emergency_contact_type: '',
    emergency_contact_number1: '',
    emergency_contact_number2: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
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
    }

    // Phone number validation (basic)
    if (formData.cell_number && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.cell_number.replace(/[\s\-\(\)]/g, ''))) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Convert string IDs to numbers if they exist
      const submitData = {
        ...formData,
        entity_id: formData.entity_id ? parseInt(formData.entity_id) : 0,
        tenant_id: formData.tenant_id ? parseInt(formData.tenant_id) : 0,
      };

      console.log('Creating hospital with data:', submitData);
      
      await dispatch(createHospital(submitData));
      
      dispatch(setSuccessMessage('Hospital created successfully!'));
     
      
    } catch (error) {
      console.error('Error creating hospital:', error);
      dispatch(setError(error.message || 'Failed to create hospital'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push('/hospitals');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleCancel}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Create New Hospital</h1>
              <p className="text-gray-600">Add a new hospital to the system</p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            <p>{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hospital Name */}
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Hospital Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter hospital name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                  placeholder="Enter hospital description"
                />
              </div>

              {/* Entity ID */}
              <div>
                <label htmlFor="entity_id" className="block text-sm font-medium text-gray-700 mb-2">
                  Entity ID
                </label>
                <input
                  type="number"
                  id="entity_id"
                  name="entity_id"
                  value={formData.entity_id}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                  placeholder="0"
                />
              </div>

              {/* Tenant ID */}
              <div>
                <label htmlFor="tenant_id" className="block text-sm font-medium text-gray-700 mb-2">
                  Tenant ID
                </label>
                <input
                  type="number"
                  id="tenant_id"
                  name="tenant_id"
                  value={formData.tenant_id}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address Line 1 */}
              <div className="md:col-span-2">
                <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-2">
                  Address Line 1 *
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value={formData.address1}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${
                    errors.address1 ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter street address"
                />
                {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
              </div>

              {/* Address Line 2 */}
              <div className="md:col-span-2">
                <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-2">
                  Address Line 2
                </label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  value={formData.address2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter city"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>

              {/* ZIP Code */}
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                  placeholder="Enter ZIP code"
                />
              </div>

              {/* Country */}
              <div className="md:col-span-2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter country"
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Cell Number */}
              <div>
                <label htmlFor="cell_number" className="block text-sm font-medium text-gray-700 mb-2">
                  Cell Number *
                </label>
                <input
                  type="tel"
                  id="cell_number"
                  name="cell_number"
                  value={formData.cell_number}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${
                    errors.cell_number ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter cell number"
                />
                {errors.cell_number && <p className="text-red-500 text-sm mt-1">{errors.cell_number}</p>}
              </div>

              {/* Phone Number 1 */}
              <div>
                <label htmlFor="phone_number1" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number 1
                </label>
                <input
                  type="tel"
                  id="phone_number1"
                  name="phone_number1"
                  value={formData.phone_number1}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${
                    errors.phone_number1 ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter phone number"
                />
                {errors.phone_number1 && <p className="text-red-500 text-sm mt-1">{errors.phone_number1}</p>}
              </div>

              {/* Phone Number 2 */}
              <div className="md:col-span-2">
                <label htmlFor="phone_number2" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number 2
                </label>
                <input
                  type="tel"
                  id="phone_number2"
                  name="phone_number2"
                  value={formData.phone_number2}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${
                    errors.phone_number2 ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter additional phone number"
                />
                {errors.phone_number2 && <p className="text-red-500 text-sm mt-1">{errors.phone_number2}</p>}
              </div>
            </div>
          </div>

          {/* Emergency Contact Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Emergency Contact Type */}
              <div>
                <label htmlFor="emergency_contact_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Type
                </label>
                <select
                  id="emergency_contact_type"
                  name="emergency_contact_type"
                  value={formData.emergency_contact_type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                >
                  <option value="">Select contact type</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Medical Director">Medical Director</option>
                  <option value="Security">Security</option>
                  <option value="Management">Management</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Emergency Contact Number 1 */}
              <div>
                <label htmlFor="emergency_contact_number1" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Number 1
                </label>
                <input
                  type="tel"
                  id="emergency_contact_number1"
                  name="emergency_contact_number1"
                  value={formData.emergency_contact_number1}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                  placeholder="Enter emergency contact number"
                />
              </div>

              {/* Emergency Contact Number 2 */}
              <div className="md:col-span-2">
                <label htmlFor="emergency_contact_number2" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Number 2
                </label>
                <input
                  type="tel"
                  id="emergency_contact_number2"
                  name="emergency_contact_number2"
                  value={formData.emergency_contact_number2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                  placeholder="Enter additional emergency contact number"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-4 bg-white p-6 rounded-lg border border-gray-200">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <X className="h-4 w-4" />
              <span>Cancel</span>
            </button>
            <button
              type="submit"
              disabled={isSubmitting || createHospitalLoading}
              className="px-6 py-2 bg-[rgb(0,122,100)] text-white rounded-lg hover:bg-[rgb(0,100,80)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              {isSubmitting || createHospitalLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Create Hospital</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateHospitalPage;