import React from 'react';

import styles from './style.module.css';

const Input = React.forwardRef(({ label, errors, name, ...props }, ref) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}> {label} </label>
      <input className={styles.input} ref={ref} name={name} {...props} />
      {errors[name] && (
        <span className={styles.error}> {errors[name].message} </span>
      )}
    </div>
  )
});

export default Input;