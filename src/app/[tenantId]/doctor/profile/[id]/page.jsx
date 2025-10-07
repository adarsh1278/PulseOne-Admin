'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Star, MapPin, Heart, Users, Award as AwardIcon } from 'lucide-react';
import ReviewsSection from '../../../../../components/profile/ReviewsSection';
import AwardsSection from '../../../../../components/profile/AwardsSection';

const DoctorProfilePage = () => {
    const params = useParams();
    const doctorId = params.id;
    const [doctorData, setDoctorData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching doctor data
        const fetchDoctorData = async () => {
            try {
                // Mock data based on the images provided
                const mockDoctorData = {
                    id: doctorId,
                    name: 'Dr. Jessika Linda',
                    title: 'MBBS, MS - General Surgery, General Physician',
                    experience: '16 Years Experience Overall',
                    rating: 5,
                    totalReviews: 2896,
                    image: 'https://randomuser.me/api/portraits/women/1.jpg',
                    stats: {
                        patients: { count: 3605, percentage: '68% High' },
                        surgeries: { count: 507, percentage: '26% High' },
                        reviews: { count: 2896, percentage: '30% High' }
                    },
                    about: `Dr. Jessika Linda is an eminent Endocrinologist associated with med hospitals who is specially trained to diagnose diseases related to glands. She specialises in treating people who suffer from hormonal imbalances, typically from disorders in the endocrine system. The most common conditions treated by Dr. Linda are Diabetes, Metabolic disorders, Lack of growth, Osteoporosis, Thyroid diseases, Cancers of the endocrine glands, Over- or under-production of hormones, Cholesterol disorders, Hypertension and Infertility. Also available for consultation at Med hospital. Dr. Linda's approach lies in understanding patients diseases and the procedure recommended along with care.`,
                    specializations: ['Diabetes', 'Thyroid', 'Osteoporosis', 'Surgeon', 'General'],
                    availability: {
                        'Mon': '9:AM - 2:PM',
                        'Tue': '9:AM - 2:PM',
                        'Wed': '9:AM - 2:PM',
                        'Thu': '9:AM - 2:PM',
                        'Fri': '9:AM - 2:PM',
                        'Sat': '9:AM - 2:PM',
                        'Sun': 'NA'
                    },
                    reviews: [
                        {
                            name: 'Wendi Combs',
                            type: 'Excellent',
                            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
                            rating: 5,
                            comment: 'I am consulting with her for last 10 years and she is really good in thyroid. Her experience has greatest strength. By looking at the report she will diagnosis the problem and listen to us. We might think she is in a hurry to complete the patient but her experience makes her 100%.'
                        },
                        {
                            name: 'Nick Morrow',
                            type: 'Excellent',
                            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                            rating: 5,
                            comment: 'Dr.Jessika is my physician from past four years. Till now, whatever treatment and advice she has given me is of the best kind. I am extremely satisfied with it. There may be about 10 minutes of waiting period before consultation. The hospital and staff are good as well.'
                        }
                    ],
                    awards: [
                        {
                            title: 'Best Doctor 2024',
                            subtitle: 'Award',
                            count: '4',
                            description: 'Awards received in 2024.'
                        }
                    ]
                };

                setTimeout(() => {
                    setDoctorData(mockDoctorData);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching doctor data:', error);
                setLoading(false);
            }
        };

        if (doctorId) {
            fetchDoctorData();
        }
    }, [doctorId]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
            );
        }
        return stars;
    };

    const getStatIcon = (type) => {
        switch (type) {
            case 'patients':
                return <MapPin className="h-6 w-6 text-blue-600" />;
            case 'surgeries':
                return <Heart className="h-6 w-6 text-red-500" />;
            case 'reviews':
                return <Star className="h-6 w-6 text-green-500" />;
            default:
                return <Users className="h-6 w-6 text-gray-500" />;
        }
    };

    const getStatColor = (type) => {
        switch (type) {
            case 'patients':
                return 'text-blue-600';
            case 'surgeries':
                return 'text-red-500';
            case 'reviews':
                return 'text-green-500';
            default:
                return 'text-gray-600';
        }
    };

    const getPercentageColor = (percentage) => {
        if (percentage.includes('68%') || percentage.includes('30%')) return 'bg-green-100 text-green-800';
        if (percentage.includes('26%')) return 'bg-red-100 text-red-800';
        return 'bg-blue-100 text-blue-800';
    };

    if (loading) {
        return (
            <div className="flex bg-gray-50 items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!doctorData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Doctor Not Found</h2>
                    <p className="text-gray-600">The doctor profile could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column - Main Profile */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Doctor Header Card */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                        <div className="flex items-start gap-4">
                            <img
                                src={doctorData.image}
                                alt={doctorData.name}
                                className="w-24 h-24 rounded-lg object-cover border-4 border-white/20"
                            />

                            <div className="flex-1">
                                <p className="text-blue-100 text-sm mb-1">Hello I am,</p>
                                <h1 className="text-2xl font-bold mb-2">{doctorData.name}</h1>
                                <p className="text-blue-100 mb-2">{doctorData.title}</p>
                                <p className="text-blue-100 text-sm mb-3">{doctorData.experience}</p>

                                <div className="flex items-center gap-2 mb-2">
                                    {renderStars(doctorData.rating)}
                                </div>

                                <p className="text-blue-100 text-sm">{doctorData.totalReviews} Reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.entries(doctorData.stats).map(([key, stat]) => (
                            <div key={key} className="bg-white rounded-lg p-6 text-center border border-gray-200">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 rounded-full bg-gray-50">
                                        {getStatIcon(key)}
                                    </div>
                                </div>
                                <div className={`text-3xl font-bold mb-1 ${getStatColor(key)}`}>
                                    {stat.count}
                                </div>
                                <p className="text-gray-600 text-sm capitalize mb-2">{key}</p>
                                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getPercentageColor(stat.percentage)}`}>
                                    {stat.percentage}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* About Section */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {doctorData.about}
                        </p>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">Specialized in</h3>
                            <div className="flex flex-wrap gap-2">
                                {doctorData.specializations.map((spec, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                                    >
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <ReviewsSection reviews={doctorData.reviews} />
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">

                    {/* Availability */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {Object.entries(doctorData.availability).map(([day, time]) => (
                                <div key={day} className="text-center">
                                    <span className="text-gray-700 text-sm">
                                        {day} - {time}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200">
                            Book Appointment
                        </button>
                    </div>

                    {/* Awards */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <AwardsSection awards={doctorData.awards} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfilePage;