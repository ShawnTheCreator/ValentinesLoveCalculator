import React from "react";

interface MatchResultProps {
  name: string;
  partnerName: string;
  matchPercentage: number | null;
}

const MatchResult: React.FC<MatchResultProps> = ({
  name,
  partnerName,
  matchPercentage,
}) => {
  if (matchPercentage === null) return null;

  return (
    <div className="mt-8 text-center">
      <h2 className="text-3xl font-bold">
        {name} & {partnerName}
      </h2>
      <p>Match Percentage: {matchPercentage}%</p>
    </div>
  );
};

export default MatchResult;
