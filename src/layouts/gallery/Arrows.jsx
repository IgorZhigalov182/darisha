import styles from './Gallery.module.scss';

const Arrows = ({ next, previous }) => {
    return (
        <>
            <div onClick={previous} className={`${styles.carousel_arrow} ${styles.arrow_left}`}>
                <svg
                    height="25px"
                    width="25px"
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14">
                    <path
                        stroke="#B2B2B2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                    />
                </svg>
            </div>
            <div onClick={next} className={`${styles.carousel_arrow} ${styles.arrow_right}`}>
                <svg
                    height="25px"
                    width="25px"
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14">
                    <path
                        stroke="#B2B2B2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                </svg>
            </div>
      </>
    )
}

export default Arrows;