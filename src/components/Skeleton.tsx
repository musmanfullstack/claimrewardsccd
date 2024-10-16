import React from 'react'

export default function SkeletonLoading() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <p className="text-gray-400 mb-8">Fetching data, please wait</p>
      
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-sm">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-800 rounded-lg mb-4"></div>
          <div className="w-3/4 h-4 bg-gray-800 rounded mb-2"></div>
          <div className="w-1/2 h-4 bg-gray-800 rounded mb-4"></div>
        </div>
        
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-800 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-800 rounded"></div>
          <div className="w-4/6 h-4 bg-gray-800 rounded"></div>
        </div>
      </div>
    </div>
  )
}