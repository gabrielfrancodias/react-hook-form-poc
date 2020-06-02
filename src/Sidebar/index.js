import React from 'react';
import cx from 'classnames';

import styles from './style.module.css';

function Sidebar({ isOpen, toggle, children }) {

  const sidebarClasses = cx(
    styles.sidebarCommon,
    {
      [styles.sidebarOpen]: isOpen,
    }
  )

  return (
    <div className={sidebarClasses}>
      <button onClick={toggle} style={{ position: 'absolute', top: 24, left: 24 }}> X </button>
      {children}
    </div>
  )
}

export default Sidebar;