import React from 'react';

export interface CheckboxWithLabelProps {
  label: string;
}

export function CheckboxWithLabel(props: CheckboxWithLabelProps) {
  const { label } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="36" height="36" rx="4" stroke="#2196F3" strokeWidth="2" fill="#fff"/>
        <path d="M10 21L18 29L30 13" stroke="url(#paint0_linear_1_2)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_1_2" x1="10" y1="21" x2="30" y2="13" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1DE9B6"/>
            <stop offset="1" stopColor="#1DC4E9"/>
          </linearGradient>
        </defs>
      </svg>
      <span style={{ marginLeft: 16, fontSize: 20, fontWeight: 500, fontFamily: 'inherit' }}>{label}</span>
    </div>
  );
}
