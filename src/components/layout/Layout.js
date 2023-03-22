import React from 'react';

import ResponsiveAppBar from './ResponsiveAppBar';
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div>
      <ResponsiveAppBar />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;