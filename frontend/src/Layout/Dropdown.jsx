import styles from './Dropdown.module.css'
import { Link } from 'react-router-dom'

function Dropdown({ data, OpenDropDown }) {
    return (
        <div className={styles.DropWrapperOpen}>
            {
                data.map((item, index) => {
                    return (
                        <span onMouseMove={() => OpenDropDown()} key={index} className={styles.dropItem} ><Link to={item.link}>{item.itemName}</Link></span>
                    )
                })
            }
        </div>
    )
}
export default Dropdown