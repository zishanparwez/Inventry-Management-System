import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ApplicationCtx } from "../context/ApplicationCtx";


const Navbar = () => {

    const {isUserLoggedIn, setIsUserLoggedIn} = useContext(ApplicationCtx);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("_token");
        setIsUserLoggedIn(false)
        navigate("/signup")
    }

    const login = () => {
        navigate("/login")
    }

    const addItem = () => {
        navigate("/item/add")
    }

    return (
        <>
        <div className="navbar-con" style={{display: 'flex'}}>
            {isUserLoggedIn ? <>
                <input className="normal-btn" type="button" value={`Add Item`} onClick={addItem}/>
                <input className="normal-btn" type="button" value={`Log Out`} onClick={logout}/>
            </> : <>
            <input className="normal-btn" type="button" value={`Login`} onClick={login}/>
            </>}
            
            
        </div>
        </>
    )
}

export default Navbar;