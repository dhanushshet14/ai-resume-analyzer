import React from 'react';

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const isStrong = score > 70;
  const isGood = !isStrong && score > 49;

  const bgClass = isStrong
    ? 'bg-badge-green'
    : isGood
    ? 'bg-badge-yellow'
    : 'bg-badge-red';

  const textClass = isStrong
    ? 'text-green-600'
    : isGood
    ? 'text-yellow-600'
    : 'text-red-600';

  const label = isStrong ? 'Strong' : isGood ? ' Good Start' : ' needs work';

  return (
    <div className={`flex flex-row rounded-full px-3 py-0.5 ${bgClass}`}>
      <p className={`text-md font-medium ${textClass}`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;
