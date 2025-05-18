import React from "react";

interface FarmerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  farmer: {
    name: string;
    location: string;
    certifications: string[];
    imageUrl?: string;
  };
}

const FarmerProfileModal: React.FC<FarmerProfileModalProps> = ({ isOpen, onClose, farmer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-xl">
        <button onClick={onClose} className="text-sm float-right">✖</button>
        <div className="text-center mt-2">
          <img
            src={farmer.imageUrl || "/default-farmer.png"}
            alt="Agricultor"
            className="mx-auto h-28 w-28 rounded-full object-cover border"
          />
          <h2 className="mt-4 text-xl font-semibold">{farmer.name}</h2>
          <p className="text-sm text-gray-600">{farmer.location}</p>
          <div className="mt-4 text-left">
            <h3 className="font-medium mb-1">Certificaciones:</h3>
            <ul className="list-disc ml-6 text-sm">
              {farmer.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfileModal;
