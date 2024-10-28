import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Layout</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;