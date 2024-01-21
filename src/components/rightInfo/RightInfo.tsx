import React from 'react';
// @ts-ignore
import styles from './RightInfo.module.scss'; 
import { useSelector } from 'react-redux';
import { selectStatus } from '../../redux/statusSlice';

interface RightInfoProps {
  items: {
    temp: string;
    co2: string;
  };
}

const RightInfo: React.FC<RightInfoProps> = ({ items }) => {
  const status = useSelector(selectStatus);

  return (
    <div
      className={`${styles.rightInfo} ${
        status === 'exceeded' ? styles.rightInfo_red : styles.rightInfo_green
      }`}
    >
      <div className={styles.rightInfo_temp}>
        <h3>{parseFloat(items.temp).toFixed(1)} °C</h3>
        <h4>Температура</h4>
      </div>
      <div className={styles.rightInfo_co2}>
        <h3>{Math.round(parseFloat(items.co2))} ppm</h3>
        <h4>CO2</h4>
      </div>
    </div>
  );
};

export default RightInfo;
