import React, { useEffect, useState } from 'react';
// @ts-ignore
import styles from './App.module.scss';

import { useDispatch } from 'react-redux';
import { setExceededStatus, setNormalStatus } from './redux/statusSlice';

import LeftInfo from './components/leftInfo/LeftInfo';
import RightInfo from './components/rightInfo/RightInfo';

interface Data {
  temp: string;
  co2: string;
}

function App() {
  const dispatch = useDispatch();
  const [items, setItems] = useState<Data>({ temp: '0', co2: '0' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://dushnila.gooddelo.com/data');
        const data: Data = await response.json();

        if (Number(data.co2) > 800 || Number(data.temp) > 27) {
          dispatch(setExceededStatus());
        } else {
          dispatch(setNormalStatus());
        }

        setItems((prevItems) => ({ ...prevItems, ...data }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>ДУШНИЛА</h2>
      <div className={styles.wrapper}>
        <LeftInfo />
        <RightInfo items={items} />
      </div>
    </div>
  );
}

export default App;
