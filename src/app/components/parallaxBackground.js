"use client";

import React from 'react';
import styles from '../page.module.css';

export default function SubtleParallaxBackground({ image }) {
  return (
    <div
        className={`${styles['subtle-parallax']} w-full h-100vh`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
}