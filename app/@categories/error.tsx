"use client";

const CategoriesError = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-gray-600 text-4xl font-bold">
          Failed to get Categories data
        </p>
      </div>
    </div>
  );
};

export default CategoriesError;
