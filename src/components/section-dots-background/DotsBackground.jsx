import styles from './DotsBackground.module.scss';

const DotsBackground = ({ children }) => {
    return (
        <div className={styles.content}>
            <div className={styles.content}>
                <div className={styles.vertical_line}/>
                {children}
                <div className={styles.vertical_line}/>
            </div>
            <div className={styles.right_dots}/>
            <div className={styles.left_dots}/>
        </div>
    )
}

export default DotsBackground;