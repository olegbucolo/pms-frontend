import { NavLink } from "react-router-dom";
import logo from './final_logo_vecteezy_com.png'


export default function Logo() {
    return (
        <NavLink to="/" ><img className=" scale-200 ps-3 h-24" src={logo} alt="" /></NavLink>
    )
}