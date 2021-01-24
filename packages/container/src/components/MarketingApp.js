import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);
  console.log('ref', ref);
  return <div ref={ref} />;
};

export default MarketingApp;
