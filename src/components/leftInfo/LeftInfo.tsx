import React from 'react';
// @ts-ignore
import styles from './LeftInfo.module.scss';
// @ts-ignore
import logo from '../../assets/img/Logo.jpg';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../redux/statusSlice';

const LeftInfo: React.FC = () => {
  const status = useSelector(selectStatus);

  return (
    <div className={styles.leftInfo}>
      <div
        className={`${styles.status} ${
          status === 'exceeded' ? styles.status_red : styles.status_green
        }`}
      >
        <h3 className={styles.status_title}>
          {status === 'exceeded' ? 'Душнила не доволен вами' : 'Душнила доволен вами'}
        </h3>
        <h4 className={styles.status_info}>
          {status === 'exceeded' ? 'CO2 превышает норму' : 'Все показатели в норме'}
        </h4>
      </div>
      <div className={styles.staticBlocks}>
        <div className={styles.day}>
          <h3 className={styles.day_title}>Дней без душноты 0</h3>
          <button className={styles.day_button}>
            <h3 className={styles.day_button_text}>История</h3>
            <svg
              className={styles.day_button_svg}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M24.5 14.2521L18.6667 8.41879M24.5 14.2521L18.6667 20.0855M24.5 14.2521H3.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.logo}>
          <img className={styles.logo_img} src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default LeftInfo;
