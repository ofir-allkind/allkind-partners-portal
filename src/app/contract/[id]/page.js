"use client";

import React from 'react';
import { ArrowLeft, Calendar, Users, FileText, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContractPage({ params }) {
  const router = useRouter();
  
  // Contract data based on ID
  const contracts = {
    'main': {
      title: "Main Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time.",
      details: {
        status: "Active",
        startDate: "January 15, 2024",
        endDate: "January 15, 2025",
        totalCandidates: 156,
        activeCandidates: 89,
        completedMatches: 67
      },
      sections: [
        {
          title: "Contract Overview",
          content: "This contract establishes the framework for our comprehensive fertility services, ensuring quality care and meaningful connections throughout the journey."
        },
        {
          title: "Service Scope",
          content: "Includes full-cycle fertility support, candidate screening, matching services, and ongoing support throughout the process."
        },
        {
          title: "Terms & Conditions",
          content: "All services are provided in accordance with state and federal regulations, with full compliance to fertility industry standards."
        }
      ]
    },
    'surrogates': {
      title: "Surrogates Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time.",
      details: {
        status: "Active",
        startDate: "March 1, 2024",
        endDate: "March 1, 2025",
        totalCandidates: 89,
        activeCandidates: 45,
        completedMatches: 44
      },
      sections: [
        {
          title: "Surrogacy Services",
          content: "Comprehensive surrogacy matching and support services, including medical screening, legal coordination, and ongoing care."
        },
        {
          title: "Candidate Requirements",
          content: "All surrogate candidates undergo thorough medical and psychological screening to ensure the highest standards of care."
        },
        {
          title: "Support Services",
          content: "24/7 support for both intended parents and surrogates throughout the entire surrogacy journey."
        }
      ]
    },
    'egg-donors-ny': {
      title: "Egg Donors in NY Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time.",
      details: {
        status: "Active",
        startDate: "February 10, 2024",
        endDate: "February 10, 2025",
        totalCandidates: 234,
        activeCandidates: 178,
        completedMatches: 56
      },
      sections: [
        {
          title: "NY Egg Donor Program",
          content: "Specialized egg donor services in New York, with comprehensive screening and matching for intended parents."
        },
        {
          title: "Donor Screening",
          content: "Rigorous medical and genetic screening for all egg donors, ensuring the highest quality standards."
        },
        {
          title: "Legal Compliance",
          content: "Full compliance with New York state regulations for egg donation services."
        }
      ]
    },
    'tom-jane-ip': {
      title: "Tom and Jane IP Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time.",
      details: {
        status: "Active",
        startDate: "April 5, 2024",
        endDate: "April 5, 2025",
        totalCandidates: 67,
        activeCandidates: 23,
        completedMatches: 44
      },
      sections: [
        {
          title: "Intended Parent Services",
          content: "Personalized fertility services for intended parents, including comprehensive support and guidance."
        },
        {
          title: "Matching Process",
          content: "Careful matching process to ensure compatibility between intended parents and candidates."
        },
        {
          title: "Ongoing Support",
          content: "Continuous support throughout the entire fertility journey, from initial consultation to successful completion."
        }
      ]
    }
  };

  const contract = contracts[params.id] || contracts['main'];

  return (
    <div className="px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Contracts
        </button>
        <h1 className="text-3xl font-bold text-gray-900">{contract.title}</h1>
        <p className="text-lg text-gray-600 mt-2">{contract.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {contract.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contract Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contract Details</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span className="flex items-center text-sm font-medium text-green-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {contract.details.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Start Date</span>
                <span className="text-sm font-medium text-gray-900">{contract.details.startDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">End Date</span>
                <span className="text-sm font-medium text-gray-900">{contract.details.endDate}</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Candidates</span>
                <span className="text-lg font-bold text-gray-900">{contract.details.totalCandidates}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Candidates</span>
                <span className="text-lg font-bold text-blue-600">{contract.details.activeCandidates}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Completed Matches</span>
                <span className="text-lg font-bold text-green-600">{contract.details.completedMatches}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                View Candidates
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Download Contract
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Edit Contract
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 