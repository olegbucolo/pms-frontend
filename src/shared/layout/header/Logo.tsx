import { NavLink } from "react-router-dom";
import logo from './final_logo_vecteezy_com.png'


export default function Logo() {
    return (
        <NavLink to="/" className="absolute left-0 flex items-center" >
            <img className="ps-3 pb-[.1rem] h-8 w-auto scale-500 object-contain" src={logo} alt="" />
        </NavLink>
    )
}