import React, { useState } from "react";

interface MatchFormProps {
  name: string;
  setName: (name: string) => void;
  partnerName: string;
  setPartnerName: (partnerName: string) => void;
  calculateLove: () => void;
  setUserImages: (files: File[]) => void;
  setPartnerImages: (files: File[]) => void;
}

const MatchForm: React.FC<MatchFormProps> = ({
  name,
  setName,
  partnerName,
  setPartnerName,
  calculateLove,
  setUserImages,
  setPartnerImages,
}) => {
  const [userImagePreviews, setUserImagePreviews] = useState<string[]>([]);
  const [partnerImagePreviews, setPartnerImagePreviews] = useState<string[]>([]);

  const handleUserImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(0, 3); // Limit to 3 images
    setUserImages(files);

    // Create image previews
    const previews = files.map((file) => URL.createObjectURL(file));
    setUserImagePreviews(previews);
  };

  const handlePartnerImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(0, 3); // Limit to 3 images
    setPartnerImages(files);

    // Create image previews
    const previews = files.map((file) => URL.createObjectURL(file));
    setPartnerImagePreviews(previews);
  };

  return (
    <div className="space-y-6">
      {/* Name inputs side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <input
          type="text"
          placeholder="Your Partner's Name"
          value={partnerName}
          onChange={(e) => setPartnerName(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
      </div>

      {/* User image upload and preview */}
      <div>
        <label className="block text-sm font-medium mb-2">Upload 3 pictures of yourself:</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleUserImageUpload}
          className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30"
          required
        />
        <div className="mt-4 flex flex-wrap gap-4">
          {userImagePreviews.map((preview, index) => (
            <div key={index} className="w-24 h-24 rounded-lg overflow-hidden">
              <img
                src={preview}
                alt={`User Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Partner image upload and preview */}
      <div>
        <label className="block text-sm font-medium mb-2">Upload 3 pictures of your loved one:</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handlePartnerImageUpload}
          className="w-full p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30"
          required
        />
        <div className="mt-4 flex flex-wrap gap-4">
          {partnerImagePreviews.map((preview, index) => (
            <div key={index} className="w-24 h-24 rounded-lg overflow-hidden">
              <img
                src={preview}
                alt={`Partner Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Calculate Love button */}
      <button
        onClick={calculateLove}
        className="w-full py-3 px-6 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-white font-semibold hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        Calculate Love
      </button>
    </div>
  );
};

export default MatchForm;