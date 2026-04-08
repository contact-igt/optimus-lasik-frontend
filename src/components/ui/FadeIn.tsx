import React from 'react';

export const FadeIn = ({ children, className = "" }: any) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
