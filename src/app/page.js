import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Welcome to AllKind Partners Portal
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Dashboard
          </h2>
          <p className="text-gray-600">
            This is your main dashboard area. Navigation options will be added to the sidebar on the left.
          </p>
        </div>
      </div>
    </div>
  );
}
