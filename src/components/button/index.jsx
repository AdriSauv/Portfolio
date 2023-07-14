import React from 'react';
import styles from './styles.module.css'

function Button({ text, link, className, onClick }) {
  const handleClick = () => {
    const targetElement = document.getElementById(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonClassName = `${styles.btn} ${styles['btn-bg']} ${styles['btn-home']} ${className || ''}`;

  return (
    <button className={buttonClassName} onClick={handleClick}>{text}</button>
  );
}

export default Button;
