"use client";

import React from 'react';
import { Users, Clock, CheckCircle, Award } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, percentage }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-200 flex-1">
    <div className="flex items-start space-x-3">
      <div className={`p-2 rounded-lg ${color} flex-shrink-0`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Total</span>
            <span className="font-semibold">{percentage}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1">
            <div 
              className={`h-1 rounded-full ${color}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

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

  return (
    <div className="flex space-x-6">
      {candidateStats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
} 