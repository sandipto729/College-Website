import styles from './Dropdown.module.css'
import { Link } from 'react-router-dom'

function Dropdown({ data, OpenDropDown }) {
    return (
        <div className={styles.DropWrapperOpen}>
            {
                data.map((item, index) => {
                    return (
                        <Link to={item.link} onMouseMove={() => OpenDropDown()} key={index} className={styles.dropItem} >{item.itemName}</Link>
                    )
                })
            }
        </div>
    )
}
export default Dropdown