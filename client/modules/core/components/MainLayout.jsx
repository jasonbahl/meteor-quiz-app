import React from 'react';

const Layout = ({content}) => (
  <div>
    <header>
        <h1>Shrute Quizes</h1>
    </header>
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;