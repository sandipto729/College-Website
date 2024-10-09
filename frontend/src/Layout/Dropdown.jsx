import styles from './Dropdown.module.css'
import { Link } from 'react-router-dom'

function Dropdown({data,OpenDropDown}){
    return (
<div  className={styles.DropWrapperOpen}>
{
data.map((item,index)=>{
    return (
<span onMouseMove={() => OpenDropDown()} key={index} className='afacad-flux-font1 ease-in-out delay-150 hover:-translate-y-1  hover:bg-blue-100 w-full rounded-lg  mt-1 pl-1' ><Link to={item.link}>{item.itemName}</Link></span>
    )
})
}
        </div>
    )
}
export default Dropdown