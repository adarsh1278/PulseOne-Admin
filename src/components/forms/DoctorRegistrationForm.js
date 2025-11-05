import React, { useState } from 'react';
import { 
  User, 
  UserCheck, 
  Calendar, 
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  Droplet,
  Home,
  Globe,
  FileText,
  Award,
  Stethoscope,
  IdCard,
  Users,
  Heart,
  MapPinIcon
} from 'lucide-react';
import { 
  FormInput, 
  FormSelect, 
  RadioGroup, 
  RichTextEditor, 
  TabContainer, 
  Tab, 
  FileUpload 
} from '../../components/ui';

const DoctorRegistrationForm = ({ doctorData = null, isEdit = false }) => {
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: doctorData?.firstName || '',
    lastName: doctorData?.lastName || '',
    age: doctorData?.age || '',
    gender: doctorData?.gender || '',
    createId: doctorData?.createId || '',
    adharNumber: doctorData?.adharNumber || '',
    panCard: doctorData?.panCard || '',
    emergencyContact: doctorData?.emergencyContact || '',
    email: doctorData?.email || '',
    mobile: doctorData?.mobile || '',
    maritalStatus: doctorData?.maritalStatus || '',
    qualification: doctorData?.qualification || '',
    designation: doctorData?.designation || '',
    bloodGroup: doctorData?.bloodGroup || '',
    address: doctorData?.address || '',
    country: doctorData?.country || '',
    state: doctorData?.state || '',
    city: doctorData?.city || '',
    postalCode: doctorData?.postalCode || '',
    
    // Profile and Bio
    profilePhoto: doctorData?.profilePhoto || null,
    bio: doctorData?.bio || '',
    
    // Availability
    availability: doctorData?.availability || {
      sunday: { from: '', to: '' },
      monday: { from: '', to: '' },
      tuesday: { from: '', to: '' },
      wednesday: { from: '', to: '' },
      thursday: { from: '', to: '' },
      friday: { from: '', to: '' },
      saturday: { from: '', to: '' }
    },
    
    // Account Details
    username: doctorData?.username || '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Options for dropdowns
  const ageOptions = Array.from({ length: 83 }, (_, i) => ({
    value: (18 + i).toString(),
    label: (18 + i).toString()
  }));

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  const maritalStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
  ];

  const qualificationOptions = [
    { value: 'mbbs', label: 'MBBS' },
    { value: 'md', label: 'MD' },
    { value: 'ms', label: 'MS' },
    { value: 'dm', label: 'DM' },
    { value: 'mch', label: 'MCh' },
    { value: 'dnb', label: 'DNB' },
    { value: 'diploma', label: 'Diploma' }
  ];

  const designationOptions = [
    { value: 'consultant', label: 'Consultant' },
    { value: 'senior-consultant', label: 'Senior Consultant' },
    { value: 'specialist', label: 'Specialist' },
    { value: 'resident', label: 'Resident' },
    { value: 'intern', label: 'Intern' }
  ];

  const bloodGroupOptions = [
    { value: 'a+', label: 'A+' },
    { value: 'a-', label: 'A-' },
    { value: 'b+', label: 'B+' },
    { value: 'b-', label: 'B-' },
    { value: 'ab+', label: 'AB+' },
    { value: 'ab-', label: 'AB-' },
    { value: 'o+', label: 'O+' },
    { value: 'o-', label: 'O-' }
  ];

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'in', label: 'India' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' }
  ];

  const stateOptions = [
    { value: 'ca', label: 'California' },
    { value: 'ny', label: 'New York' },
    { value: 'tx', label: 'Texas' },
    { value: 'fl', label: 'Florida' },
    { value: 'il', label: 'Illinois' }
  ];

  const timeOptions = Array.from({ length: 24 }, (_, i) => ({
    value: `${i.toString().padStart(2, '0')}:00`,
    label: `${i === 0 ? 12 : i > 12 ? i - 12 : i}:00 ${i < 12 ? 'AM' : 'PM'}`
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAvailabilityChange = (day, field, value) => {
    setFormData(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: {
          ...prev.availability[day],
          [field]: value
        }
      }
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Personal Details validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.createId.trim()) newErrors.createId = 'Create ID is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.qualification) newErrors.qualification = 'Qualification is required';
    if (!formData.designation) newErrors.designation = 'Designation is required';
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';

    // Account Details validation
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8-20 characters with uppercase, lowercase, number and special character';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      // Here you would typically send the data to your backend
      if (isEdit) {
        alert('Doctor profile updated successfully!');
      } else {
        alert('Doctor profile created successfully!');
      }
    } else {
      console.log('Form validation failed:', errors);
    }
  };

  return (
    <div className="flex flex-col px-5 h-full bg-white">
      <div className="flex-1  overflow-y-auto">
        <form onSubmit={handleSubmit} className="h-full">
          <TabContainer defaultTab={0}>
            {/* Personal Details Tab */}
            <Tab label="Personal Details" icon={<User className="h-4 w-4" />}>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <FormInput
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                    icon={<User className="h-4 w-4 text-gray-400" />}
                    error={errors.firstName}
                    required
                  />
                  
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Last Name"
                    icon={<User className="h-4 w-4 text-gray-400" />}
                    error={errors.lastName}
                    required
                  />
                  
                  <FormSelect
                    label="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    options={ageOptions}
                    placeholder="Select Age"
                    icon={<Calendar className="h-4 w-4 text-gray-400" />}
                    error={errors.age}
                    required
                  />
                  
                  <div className="flex flex-col">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-900">Male</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-900">Female</span>
                      </label>
                    </div>
                    {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FormInput
                    label="Create ID"
                    name="createId"
                    value={formData.createId}
                    onChange={handleInputChange}
                    placeholder="Create Unique ID"
                    icon={<IdCard className="h-4 w-4 text-gray-400" />}
                    error={errors.createId}
                    required
                  />
                  
                  <FormInput
                    label="Email ID"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email ID"
                    icon={<Mail className="h-4 w-4 text-gray-400" />}
                    error={errors.email}
                    required
                  />
                  
                  <FormInput
                    label="Mobile Number"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter Mobile Number"
                    icon={<Phone className="h-4 w-4 text-gray-400" />}
                    error={errors.mobile}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FormSelect
                    label="Qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    options={qualificationOptions}
                    placeholder="Select"
                    icon={<Award className="h-4 w-4 text-gray-400" />}
                    error={errors.qualification}
                    required
                  />
                  
                  <FormSelect
                    label="Designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    options={designationOptions}
                    placeholder="Select"
                    icon={<Stethoscope className="h-4 w-4 text-gray-400" />}
                    error={errors.designation}
                    required
                  />
                  
                  <FormSelect
                    label="Blood Group"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    options={bloodGroupOptions}
                    placeholder="Select"
                    icon={<Droplet className="h-4 w-4 text-gray-400" />}
                    error={errors.bloodGroup}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormSelect
                    label="Marital Status"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    options={maritalStatusOptions}
                    placeholder="Select"
                    icon={<Users className="h-4 w-4 text-gray-400" />}
                    error={errors.maritalStatus}
                  />

                  <FormInput
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter Address"
                    icon={<MapPinIcon className="h-4 w-4 text-gray-400" />}
                    error={errors.address}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <FormSelect
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    options={countryOptions}
                    placeholder="Select"
                    icon={<Globe className="h-4 w-4 text-gray-400" />}
                    error={errors.country}
                    required
                  />
                  
                  <FormSelect
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    options={stateOptions}
                    placeholder="Select"
                    icon={<MapPin className="h-4 w-4 text-gray-400" />}
                    error={errors.state}
                    required
                  />
                  
                  <FormInput
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter City"
                    icon={<MapPin className="h-4 w-4 text-gray-400" />}
                    error={errors.city}
                    required
                  />
                  
                  <FormInput
                    label="Postal Code"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="Enter Postal Code"
                    icon={<MapPin className="h-4 w-4 text-gray-400" />}
                    error={errors.postalCode}
                    required
                  />
                </div>
              </div>
            </Tab>

            {/* Profile and Bio Tab */}
            <Tab label="Profile and Bio" icon={<UserCheck className="h-4 w-4" />}>
              <div className="p-6 space-y-6">
                <div className="max-w-sm">
                  <FileUpload
                    label="Upload Profile"
                    name="profilePhoto"
                    onChange={handleFileChange}
                    accept="image/*"
                    preview={true}
                    error={errors.profilePhoto}
                  />
                </div>
                
                <div className="max-w-4xl">
                  <RichTextEditor
                    label="Write Bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Hello,

My name is Dr. David Kemrin. Write your bio here."
                    error={errors.bio}
                  />
                </div>
              </div>
            </Tab>

            {/* Availability Tab */}
            <Tab label="Availability" icon={<Calendar className="h-4 w-4" />}>
              <div className="p-6 space-y-6">
                {Object.entries(formData.availability).map(([day, times]) => (
                  <div key={day} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                    <div className="font-medium text-gray-700 capitalize text-sm pt-6">
                      {day}
                    </div>
                    <FormSelect
                      label="From"
                      name={`${day}-from`}
                      value={times.from}
                      onChange={(e) => handleAvailabilityChange(day, 'from', e.target.value)}
                      options={timeOptions}
                      placeholder="From"
                    />
                    <FormSelect
                      label="To"
                      name={`${day}-to`}
                      value={times.to}
                      onChange={(e) => handleAvailabilityChange(day, 'to', e.target.value)}
                      options={timeOptions}
                      placeholder="To"
                    />
                    <FormSelect
                      label="From"
                      name={`${day}-from2`}
                      value=""
                      onChange={() => {}}
                      options={timeOptions}
                      placeholder="From"
                    />
                    <FormSelect
                      label="To"
                      name={`${day}-to2`}
                      value=""
                      onChange={() => {}}
                      options={timeOptions}
                      placeholder="To"
                    />
                  </div>
                ))}
              </div>
            </Tab>

            {/* Account Details Tab */}
            <Tab label="Account Details" icon={<CreditCard className="h-4 w-4" />}>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
                  <div className="md:col-span-3">
                    <FormInput
                      label="User Name"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Enter username"
                      icon={<User className="h-4 w-4 text-gray-400" />}
                      error={errors.username}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <FormInput
                      label="Password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password must be 8-20 characters"
                      icon={<Lock className="h-4 w-4 text-gray-400" />}
                      error={errors.password}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-10 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  
                  <div className="relative">
                    <FormInput
                      label="Confirm Password"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm new password"
                      icon={<Lock className="h-4 w-4 text-gray-400" />}
                      error={errors.confirmPassword}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-10 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </Tab>
          </TabContainer>
        </form>
      </div>

      {/* Sticky Footer with Form Actions using flexbox */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            {isEdit ? 'Update Doctor Profile' : 'Create Doctor Profile'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegistrationForm;
