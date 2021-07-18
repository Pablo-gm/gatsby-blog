import React from 'react'
import * as styles from '../styles/container.module.scss';

const Container = ({children}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Container
