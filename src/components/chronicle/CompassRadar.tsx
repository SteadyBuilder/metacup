'use client';

import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

interface CompassRadarProps {
  data: { label: string; score: number; fullMark?: number }[];
  color?: string;
  fillOpacity?: number;
}

export const CompassRadar: React.FC<CompassRadarProps> = ({
  data,
  color = '#06b6d4',
  fillOpacity = 0.35
}) => {
  return (
    <div className="w-full h-64 sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#334155" strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="label"
            tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 10]}
            tick={{ fill: '#64748b', fontSize: 9 }}
            stroke="#1e293b"
          />
          <Radar
            name="내면 지표"
            dataKey="score"
            stroke={color}
            fill={color}
            fillOpacity={fillOpacity}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
