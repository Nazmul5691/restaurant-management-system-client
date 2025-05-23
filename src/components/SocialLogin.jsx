import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () =>{
        // console.log('handleGoogleSignIn clicked');
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo ={
                name: result.user?.displayName,
                email: result.user?.email,
                photoURL: result.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
            .then(result =>{
                // console.log(result.data);
                navigate(from, {replace: true})
            })
        })
    }
    return (
        <div className="rounded-full">
            <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
            </button>
        </div>
    );
};

export default SocialLogin;