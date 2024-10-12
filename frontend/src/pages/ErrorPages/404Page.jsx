import { useNavigate } from "react-router-dom";
import notfound from '../../assets/404notfound.svg'

function NotFound(){
const navigate=useNavigate();
    return (
     <div className="flex justify-center items-center">
        <img
        src={notfound}
        />
<button onClick={()=>navigate(-1)} className="p-3 font-semibold text-center flex items-center border-solid text-xl border-amber-600 border bg-amber-400 hover:bg-amber-200 h-[50px] rounded-lg w-[100px]">Go Back</button>
     </div>
    )
}
export default NotFound;