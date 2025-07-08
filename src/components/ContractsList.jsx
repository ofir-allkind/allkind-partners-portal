"use client";

import React from 'react';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ContractCard = ({ title, description, id }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/contract/${id}`);
  };

  const handlePipelineClick = (e) => {
    e.stopPropagation();
    router.push(`/contract/${id}`);
  };

  const handleDiscoverClick = (e) => {
    e.stopPropagation();
    // Add discover functionality here
    console.log('Discover clicked for:', title);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={handlePipelineClick}
            className="flex items-center justify-center px-4 py-2 bg-white border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700 transition-all duration-200 text-sm font-medium shadow"
          >
            <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
            Pipeline
          </button>
          <button 
            onClick={handleDiscoverClick}
            className="flex items-center justify-center px-4 py-2 bg-gradient-to-tr from-[#ffe084] via-[#ff7eb3] to-[#c9c6ff] text-white rounded-full hover:brightness-105 transition-all duration-200 text-sm font-medium border-0 shadow"
          >
            <Sparkles className="w-4 h-4 mr-2 text-white" />
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ContractsList() {
  const contracts = [
    {
      id: 'main',
      title: "Main Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time."
    },
    {
      id: 'surrogates',
      title: "Surrogates Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time."
    },
    {
      id: 'egg-donors-ny',
      title: "Egg Donors in NY Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time."
    },
    {
      id: 'tom-jane-ip',
      title: "Tom and Jane IP Contract",
      description: "Empowering the future of fertility—one meaningful connection at a time."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Contracts</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {contracts.map((contract, index) => (
          <ContractCard key={index} {...contract} />
        ))}
      </div>
    </div>
  );
} 