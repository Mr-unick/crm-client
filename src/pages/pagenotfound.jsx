import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate=useNavigate()

    const Back=()=>{
           navigate("/dash");
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button onClick={Back} className="gap-3">
          <ArrowLeft size={14} />
          Back{" "}
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;