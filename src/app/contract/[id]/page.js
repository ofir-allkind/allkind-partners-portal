"use client";

import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, FileText, CheckCircle, Clock, Award, Share2, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContractPage({ params }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('pending');
  
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
      }
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
      }
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
      }
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
      }
    }
  };

  const contract = contracts[params.id] || contracts['main'];

  const tabs = [
    { id: 'pending', label: 'Pending Candidates', icon: Clock },
    { id: 'accepted', label: 'Accepted Candidates', icon: CheckCircle },
    { id: 'cleared', label: 'Cleared Candidates', icon: Award },
    { id: 'shared', label: 'Shared Profiles', icon: Share2 },
    { id: 'details', label: 'Contract Details', icon: Settings }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'pending':
        return (
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pending Candidates</h3>
              <p className="text-gray-600">Candidates pending final acceptance from Allkind or candidates with clarification requested</p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Pending Candidates</h3>
              <span className="text-sm text-gray-500">12 candidates</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No pending candidates at the moment</p>
              <p className="text-sm text-gray-500 mt-2">Candidates will appear here when they are submitted for review</p>
            </div>
          </div>
        );
      
      case 'accepted':
        return (
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accepted Candidates</h3>
              <p className="text-gray-600">Candidates accepted and undergoing the medical clearance process.</p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Accepted Candidates</h3>
              <span className="text-sm text-gray-500">27 candidates</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No accepted candidates to display</p>
              <p className="text-sm text-gray-500 mt-2">Accepted candidates will appear here</p>
            </div>
          </div>
        );
      
      case 'cleared':
        return (
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cleared Candidates</h3>
              <p className="text-gray-600">Candidates who passed medical clearance</p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Cleared Candidates</h3>
              <span className="text-sm text-gray-500">42 candidates</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No cleared candidates to display</p>
              <p className="text-sm text-gray-500 mt-2">Cleared candidates will appear here</p>
            </div>
          </div>
        );
      
      case 'shared':
        return (
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Shared Profiles</h3>
              <p className="text-gray-600">Share access to view candidates of this contract. Note: it may take up to 15 minutes for a user to be created.</p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Shared Profiles</h3>
              <span className="text-sm text-gray-500">8 profiles</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <Share2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No shared profiles to display</p>
              <p className="text-sm text-gray-500 mt-2">Shared profiles will appear here</p>
            </div>
          </div>
        );
      
      case 'details':
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contract Details</h3>
              <p className="text-gray-600">View and manage contract information and settings</p>
            </div>
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
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Contracts
        </button>
        
        {/* Statistics in Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Statistics</h2>
            <span className="text-sm text-gray-500">{contract.details.endDate}</span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Total Candidates</p>
              <p className="text-2xl font-bold text-gray-900">{contract.details.totalCandidates}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Active Candidates</p>
              <p className="text-2xl font-bold text-blue-600">{contract.details.activeCandidates}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Completed Matches</p>
              <p className="text-2xl font-bold text-green-600">{contract.details.completedMatches}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        {renderTabContent()}
      </div>
    </div>
  );
} 