import { useNavigate } from "react-router-dom";
import notfound from '../../assets/3747371.jpg'
import styles from './404Page.module.scss'

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <img
                className={styles.img}
                src={notfound}
            />
            <div className={styles.text}>
                The webpage you are looking for is currently under maintainence. Please try again later. If the problem continues, mail us at <a href="mailto:sandipto729@gmail.com">sandipto729@gmail.com</a>
            </div>
            <button onClick={() => navigate(-1)} className={styles.button}>Go Back</button>
        </div>
    )
}
export default NotFound;