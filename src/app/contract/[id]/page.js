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
            
            {/* Pending Candidates Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Images
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Candidate ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status Timestamp
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Activity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Shared
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">JD</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-001
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Pending Review
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 15, 2025 10:30 AM
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Awaiting medical documentation
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 15, 2025 2:45 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Yes
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">SM</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-002
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Under Review
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 14, 2025 3:15 PM
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Clarification needed on background check
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 15, 2025 9:20 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          No
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">AL</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-003
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          Documentation Required
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 13, 2025 11:45 AM
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Missing psychological evaluation
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 14, 2025 4:30 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Yes
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
            
            {/* Accepted Candidates Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Images
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Candidate ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Full Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Activity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">MJ</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-101
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Maria Johnson
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        maria.johnson@email.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        (555) 123-4567
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        New York, NY
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Medical clearance in progress
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 15, 2025 3:20 PM
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">SD</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-102
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Sarah Davis
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        sarah.davis@email.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        (555) 234-5678
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Los Angeles, CA
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Background check completed
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 14, 2025 11:45 AM
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">RW</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-103
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Rachel Wilson
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        rachel.wilson@email.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        (555) 345-6789
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Chicago, IL
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Psychological evaluation scheduled
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 13, 2025 2:30 PM
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">LB</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-104
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Lisa Brown
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        lisa.brown@email.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        (555) 456-7890
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Miami, FL
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Medical tests completed
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 12, 2025 9:15 AM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
            
            {/* Cleared Candidates Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Images
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Candidate ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Full Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Activity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">EM</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-201
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Emma Martinez
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        emma.martinez@email.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        (555) 567-8901
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        San Francisco, CA
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Fully cleared and available for matching
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 15, 2025 1:30 PM
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">AS</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-202
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Amanda Smith
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        amanda.smith@email.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        (555) 678-9012
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Seattle, WA
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Medical clearance completed successfully
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 14, 2025 4:45 PM
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">JG</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-203
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Jessica Garcia
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        jessica.garcia@email.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        (555) 789-0123
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Austin, TX
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          All screenings passed, ready for placement
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 13, 2025 10:20 AM
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">KL</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-204
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Kimberly Lee
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        kimberly.lee@email.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        (555) 890-1234
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Denver, CO
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Background and medical clearance complete
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 12, 2025 2:15 PM
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-600">NT</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        CAN-205
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Nicole Taylor
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        nicole.taylor@email.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        (555) 901-2345
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Portland, OR
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs truncate">
                          Psychological and medical evaluation passed
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jan 11, 2025 8:30 AM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

          </div>
        );
      
      case 'details':
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contract Details</h3>
              <p className="text-gray-600">View and manage contract information and settings</p>
            </div>
            
            {/* Contract Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contract Section</h3>
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Title</span>
                  <span className="text-sm font-medium text-gray-900">{contract.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">References</span>
                  <span className="text-sm font-medium text-gray-900">REF-{params.id.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Allkind Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Allkind Section</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Allkind Account Manager</span>
                  <span className="text-sm font-medium text-gray-900">Sarah Johnson</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Amount Goal</span>
                  <span className="text-sm font-medium text-gray-900">$50,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Timeline</span>
                  <span className="text-sm font-medium text-gray-900">12 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Request Details</span>
                  <span className="text-sm font-medium text-gray-900">Surrogacy matching services</span>
                </div>
              </div>
            </div>

            {/* Billing Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Section</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Contract Value</span>
                  <span className="text-sm font-medium text-gray-900">$50,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Paid</span>
                  <span className="text-sm font-medium text-green-600">$15,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Pending Net 30</span>
                  <span className="text-sm font-medium text-orange-600">$8,500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Credit Value</span>
                  <span className="text-sm font-medium text-blue-600">$2,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Balance</span>
                  <span className="text-sm font-medium text-gray-900">$24,500</span>
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-900">
              Candidates Accepted 37 | Progress Towards Goal 82.22%
            </p>
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