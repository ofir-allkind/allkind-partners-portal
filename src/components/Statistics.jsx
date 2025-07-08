"use client";

import React from 'react';
import { Users, Clock, CheckCircle, Award } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, percentage }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-3">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-600">{title}</span>
        </div>
        <div className="space-y-3">
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Total Candidates</span>
              <span className="font-semibold">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${color}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CandidateChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Candidate Distribution</h3>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">{total}</p>
          <p className="text-sm text-gray-500">Total Candidates</p>
        </div>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 flex-1">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-20 bg-gray-100 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
              <span className="text-sm font-bold text-gray-900 w-8 text-right">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Statistics() {
  const candidateStats = [
    {
      title: "Available Candidates",
      value: "12",
      icon: Users,
      color: "bg-blue-500",
      percentage: 14
    },
    {
      title: "Pending Candidates",
      value: "5",
      icon: Clock,
      color: "bg-yellow-500",
      percentage: 6
    },
    {
      title: "Accepted Candidates",
      value: "27",
      icon: CheckCircle,
      color: "bg-green-500",
      percentage: 31
    },
    {
      title: "Cleared Candidates",
      value: "42",
      icon: Award,
      color: "bg-purple-500",
      percentage: 49
    }
  ];

  const chartData = [
    { label: "Available", value: 12, color: "bg-blue-500" },
    { label: "Pending", value: 5, color: "bg-yellow-500" },
    { label: "Accepted", value: 27, color: "bg-green-500" },
    { label: "Cleared", value: 42, color: "bg-purple-500" }
  ];

  return (
    <div className="space-y-8">
      {/* Candidate Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {candidateStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CandidateChart data={chartData} />
        
        {/* Summary Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Available for Review</p>
                  <p className="text-xs text-gray-500">Ready to process</p>
                </div>
              </div>
              <span className="text-xl font-bold text-blue-600">12</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Awaiting Response</p>
                  <p className="text-xs text-gray-500">Pending approval</p>
                </div>
              </div>
              <span className="text-xl font-bold text-yellow-600">5</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Successfully Accepted</p>
                  <p className="text-xs text-gray-500">Approved candidates</p>
                </div>
              </div>
              <span className="text-xl font-bold text-green-600">27</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Fully Cleared</p>
                  <p className="text-xs text-gray-500">Completed process</p>
                </div>
              </div>
              <span className="text-xl font-bold text-purple-600">42</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Total Pipeline</span>
              <span className="text-2xl font-bold text-gray-900">86</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200 font-medium">
            <Users className="w-4 h-4 mr-2" />
            Review Candidates
          </button>
          <button className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-200 font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Accept Candidate
          </button>
          <button className="flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all duration-200 font-medium">
            <Award className="w-4 h-4 mr-2" />
            Clear Candidate
          </button>
        </div>
      </div>
    </div>
  );
} 