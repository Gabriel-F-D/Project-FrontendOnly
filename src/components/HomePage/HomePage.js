import React from 'react'
import useDogosApi from '../../hooks/useDogosApi';
import LosDoggos from '../LosDoggos/LosDoggos';
import styles from './HomePage.module.css';

const HomePage = () => {

    const { data, isLoading } = useDogosApi('/dogs');

    if (isLoading) {
        return (
            <img src='../img/perroGif.gif' alt="que miras?" className={styles.loading}/>
        )
    }

    return (
        <>
            <LosDoggos data={data} />
        </>
    )
}

export default HomePage
