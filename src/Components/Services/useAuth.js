import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";

function useAuth() {

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginUser = data => {
        setAuth({ data });
        sessionStorage.setItem('user', JSON.stringify(data));
        navigate('/home');
    }

    const logoutUser = () => {
        setAuth({});
        sessionStorage.removeItem('user');
        navigate('/home');
    }

    return {  loginUser, logoutUser }

}

export default useAuth;