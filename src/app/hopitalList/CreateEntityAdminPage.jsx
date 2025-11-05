"use client";

import { useState } from 'react';
import { ArrowLeft, Save, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { createAdmin } from '@/store/actions/hospitalAction';

export default function CreateEntityAdminPage({ tenantId }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const { user } = useSelector((state) => state.auth);
    const currentTenantId = tenantId || user?.tenantId || 0;

    const [formData, setFormData] = useState({
        // User Info
        firstName: 'Riya',
        middleName: '',
        lastName: 'Kapoor',
        userName: 'riya.kapoor',
        gender: 'Female',
        dateOfBirth: '1990-08-14',
        age: 35,
        adharNumber: '563412789654',
        panCard: 'ABCPK4321T',
        bloodGroup: 'O+',
        userType: 'EntityAdmin',

        // Contact Info
        email: 'riya.kapoor@sunrisehospital.in',
        mobile: '9876543210',
        communicationAddress: '12 MG Road, Koramangala',
        communicationAddress1: 'Near Forum Mall',
        communicationCity: 'Bengaluru',
        communicationState: 'Karnataka',
        communicationCountry: 'India',
        communicationPostalCode: '560095',
        permanentAddress: '45A Residency Layout',
        permanentAddress1: 'Opp. City Park',
        permanentCity: 'Bengaluru',
        permanentState: 'Karnataka',
        permanentCountry: 'India',
        permanentPostalCode: '560042',

        // Profile Info
        qualification: 'MBBS, MHA',
        specialization: 'Hospital Administration',
        registrationNumber: 'KMC54321',
        yearsOfExperience: '10',
        aboutus: 'Dedicated healthcare professional managing operations efficiently.',
        profilePhotoPath: '/uploads/photos/riya_profile.jpg',
        adharScanImagePath: '/uploads/docs/riya_adhar.jpg',

        // Bank Info
        accountHolderName: 'Riya Kapoor',
        accountNumber: '987654321009876',
        ifscCode: 'HDFC0005678',
        bankName: 'HDFC Bank',
        branchName: 'Koramangala Branch',
        upiId: 'riyakapoor@okhdfcbank',

        // Authentication
        password: 'SecurePass@123',
        confirmPassword: 'SecurePass@123',
        twoFactorEnabled: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.userName.trim()) newErrors.userName = 'Username is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
        else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\D/g, ''))) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number';
        }
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.adharNumber.trim()) newErrors.adharNumber = 'Aadhar number is required';
        if (!formData.communicationAddress.trim()) newErrors.communicationAddress = 'Communication address is required';

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
            // Format data with all required fields
            const submitData = {
                tenantId: currentTenantId,
                offsetUserId: 0,
                loggedInUser: user?.userName || 'SuperAdmin',
                id: 0,
                userInfo: {
                    tenantId: currentTenantId,
                    offsetUserId: 0,
                    loggedInUser: user?.userName || 'SuperAdmin',
                    id: 0,
                    userId: 0,
                    firstName: formData.firstName,
                    middleName: formData.middleName,
                    lastName: formData.lastName,
                    userName: formData.userName,
                    gender: formData.gender,
                    dateOfBirth: new Date(formData.dateOfBirth).toISOString(),
                    age: parseInt(formData.age) || 0,
                    adharNumber: formData.adharNumber,
                    panCard: formData.panCard,
                    bloodGroup: formData.bloodGroup,
                    userType: 'EntityAdmin',
                },
                userContact: {
                    tenantId: currentTenantId,
                    offsetUserId: 0,
                    loggedInUser: user?.userName || 'SuperAdmin',
                    id: 0,
                    userId: 0,
                    email: formData.email,
                    mobile: formData.mobile,
                    communicationAddress: {
                        tenantId: currentTenantId,
                        offsetUserId: 0,
                        loggedInUser: user?.userName || 'SuperAdmin',
                        id: 0,
                        contactType: 'Communication',
                        address: formData.communicationAddress,
                        address1: formData.communicationAddress1,
                        city: formData.communicationCity,
                        state: formData.communicationState,
                        country: formData.communicationCountry,
                        postalCode: formData.communicationPostalCode,
                    },
                    permanentAddress: {
                        tenantId: currentTenantId,
                        offsetUserId: 0,
                        loggedInUser: user?.userName || 'SuperAdmin',
                        id: 0,
                        contactType: 'Permanent',
                        address: formData.permanentAddress,
                        address1: formData.permanentAddress1,
                        city: formData.permanentCity,
                        state: formData.permanentState,
                        country: formData.permanentCountry,
                        postalCode: formData.permanentPostalCode,
                    },
                },
                userProfile: {
                    tenantId: currentTenantId,
                    offsetUserId: 0,
                    loggedInUser: user?.userName || 'SuperAdmin',
                    id: 0,
                    qualification: formData.qualification,
                    specialization: formData.specialization,
                    registrationNumber: formData.registrationNumber,
                    yearsOfExperience: formData.yearsOfExperience,
                    aboutus: formData.aboutus,
                    profilePhotoPath: formData.profilePhotoPath,
                    adharScanImagePath: formData.adharScanImagePath,
                },
                userBankInfo: {
                    tenantId: currentTenantId,
                    offsetUserId: 0,
                    loggedInUser: user?.userName || 'SuperAdmin',
                    id: 0,
                    accountHolderName: formData.accountHolderName,
                    accountNumber: formData.accountNumber,
                    ifscCode: formData.ifscCode,
                    bankName: formData.bankName,
                    branchName: formData.branchName,
                    upiId: formData.upiId,
                },
                userAuthentication: {
                    tenantId: currentTenantId,
                    offsetUserId: 0,
                    loggedInUser: user?.userName || 'SuperAdmin',
                    id: 0,
                    userId: 0,
                    userName: formData.userName,
                    password: formData.password,
                    status: 1,
                    twoFactorEnabled: formData.twoFactorEnabled ? 1 : 0,
                },
                userName: formData.userName,
                password: formData.password,
                systemUser: true,
            };

            console.log('Submitting entity admin data:', submitData);

            // Call Redux action
            await dispatch(createAdmin(submitData));

            // Redirect after success
            setTimeout(() => {
                router.back()
            }, 1500);
        } catch (error) {
            console.error('Error creating entity admin:', error);
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        router.back();
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 text-black">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleCancel}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Create Entity Admin</h1>
                            <p className="text-gray-600 mt-1">Add a new hospital administrator to the system</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter first name"
                                />
                                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                            </div>

                            {/* Middle Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Middle Name
                                </label>
                                <input
                                    type="text"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Enter middle name"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter last name"
                                />
                                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                            </div>

                            {/* Username */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Username *
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${errors.userName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter username"
                                />
                                {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName}</p>}
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                />
                            </div>

                            {/* Age */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Enter age"
                                    min="18"
                                    max="100"
                                />
                            </div>

                            {/* Blood Group */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Blood Group
                                </label>
                                <select
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                >
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>

                            {/* Aadhar Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Aadhar Number *
                                </label>
                                <input
                                    type="text"
                                    name="adharNumber"
                                    value={formData.adharNumber}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${errors.adharNumber ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="12 digit aadhar number"
                                    maxLength="12"
                                />
                                {errors.adharNumber && <p className="text-red-500 text-sm mt-1">{errors.adharNumber}</p>}
                            </div>

                            {/* PAN Card */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    PAN Card
                                </label>
                                <input
                                    type="text"
                                    name="panCard"
                                    value={formData.panCard}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="PAN card number"
                                    maxLength="10"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Email */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter email address"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Mobile */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mobile Number *
                                </label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="10 digit mobile number"
                                    maxLength="10"
                                />
                                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                            </div>

                            {/* Communication Address */}
                            <div className="md:col-span-2">
                                <h3 className="text-lg font-medium text-gray-800 mb-4">Communication Address</h3>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address Line 1 *
                                </label>
                                <input
                                    type="text"
                                    name="communicationAddress"
                                    value={formData.communicationAddress}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${errors.communicationAddress ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Street address"
                                />
                                {errors.communicationAddress && <p className="text-red-500 text-sm mt-1">{errors.communicationAddress}</p>}
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address Line 2
                                </label>
                                <input
                                    type="text"
                                    name="communicationAddress1"
                                    value={formData.communicationAddress1}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Apartment, suite, etc."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="communicationCity"
                                    value={formData.communicationCity}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="City"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    State
                                </label>
                                <input
                                    type="text"
                                    name="communicationState"
                                    value={formData.communicationState}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="State"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    name="communicationPostalCode"
                                    value={formData.communicationPostalCode}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Postal code"
                                />
                            </div>

                            {/* Permanent Address */}
                            <div className="md:col-span-2">
                                <h3 className="text-lg font-medium text-gray-800 mb-4">Permanent Address</h3>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address Line 1
                                </label>
                                <input
                                    type="text"
                                    name="permanentAddress"
                                    value={formData.permanentAddress}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Street address"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address Line 2
                                </label>
                                <input
                                    type="text"
                                    name="permanentAddress1"
                                    value={formData.permanentAddress1}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Apartment, suite, etc."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="permanentCity"
                                    value={formData.permanentCity}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="City"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    State
                                </label>
                                <input
                                    type="text"
                                    name="permanentState"
                                    value={formData.permanentState}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="State"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    name="permanentPostalCode"
                                    value={formData.permanentPostalCode}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Postal code"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Professional Information */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Professional Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Qualification */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Qualification
                                </label>
                                <input
                                    type="text"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="e.g., MBA, MBBS"
                                />
                            </div>

                            {/* Specialization */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Specialization
                                </label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="e.g., Hospital Administration"
                                />
                            </div>

                            {/* Registration Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Registration Number
                                </label>
                                <input
                                    type="text"
                                    name="registrationNumber"
                                    value={formData.registrationNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Professional registration number"
                                />
                            </div>

                            {/* Years of Experience */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Years of Experience
                                </label>
                                <input
                                    type="number"
                                    name="yearsOfExperience"
                                    value={formData.yearsOfExperience}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Years"
                                    min="0"
                                />
                            </div>

                            {/* About */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    About
                                </label>
                                <textarea
                                    name="aboutus"
                                    value={formData.aboutus}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Brief description about the admin"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bank Information */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Bank Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Account Holder Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Account Holder Name
                                </label>
                                <input
                                    type="text"
                                    name="accountHolderName"
                                    value={formData.accountHolderName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Account holder name"
                                />
                            </div>

                            {/* Account Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Account Number
                                </label>
                                <input
                                    type="text"
                                    name="accountNumber"
                                    value={formData.accountNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Account number"
                                />
                            </div>

                            {/* IFSC Code */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    IFSC Code
                                </label>
                                <input
                                    type="text"
                                    name="ifscCode"
                                    value={formData.ifscCode}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="IFSC code"
                                />
                            </div>

                            {/* Bank Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Bank Name
                                </label>
                                <input
                                    type="text"
                                    name="bankName"
                                    value={formData.bankName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Bank name"
                                />
                            </div>

                            {/* Branch Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Branch Name
                                </label>
                                <input
                                    type="text"
                                    name="branchName"
                                    value={formData.branchName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="Branch name"
                                />
                            </div>

                            {/* UPI ID */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    UPI ID
                                </label>
                                <input
                                    type="text"
                                    name="upiId"
                                    value={formData.upiId}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)]"
                                    placeholder="UPI ID"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Authentication */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Authentication</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password *
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter strong password"
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Confirm Password *
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,122,100)] focus:border-[rgb(0,122,100)] ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Confirm password"
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                            </div>

                            {/* Two Factor */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="twoFactorEnabled"
                                    id="twoFactorEnabled"
                                    checked={formData.twoFactorEnabled}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-[rgb(0,122,100)] focus:ring-[rgb(0,122,100)] border-gray-300 rounded"
                                />
                                <label htmlFor="twoFactorEnabled" className="ml-2 block text-sm text-gray-700">
                                    Enable Two-Factor Authentication
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end space-x-4 bg-white p-6 rounded-lg border border-gray-200">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 font-medium"
                        >
                            <X className="h-4 w-4" />
                            <span>Cancel</span>
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-[rgb(0,122,100)] text-white rounded-lg hover:bg-[rgb(0,100,80)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2 font-medium"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                    <span>Creating...</span>
                                </>
                            ) : (
                                <>
                                    <Save className="h-4 w-4" />
                                    <span>Create Entity Admin</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
