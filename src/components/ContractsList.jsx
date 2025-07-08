"use client";

import React from 'react';
import { ArrowRight, Search } from 'lucide-react';

const ContractCard = ({ title, description }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200">
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      <div className="flex space-x-3">
        <button className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 text-sm font-medium">
          <ArrowRight className="w-4 h-4 mr-2" />
          Pipeline
        </button>
        <button className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all duration-200 text-sm font-medium">
          <Search className="w-4 h-4 mr-2" />
          Discover
        </button>
      </div>
    </div>
  </div>
);

export default function ContractsList() {
  const contracts = [
    {
      title: "Main Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time."
    },
    {
      title: "Surrogates Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time."
    },
    {
      title: "Egg Donors in NY Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time."
    },
    {
      title: "Tom and Jane IP Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Contracts</h2>
        <button className="text-blue-500 hover:text-blue-600 font-medium text-sm">
          View All Contracts
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {contracts.map((contract, index) => (
          <ContractCard key={index} {...contract} />
        ))}
      </div>
    </div>
  );
} 