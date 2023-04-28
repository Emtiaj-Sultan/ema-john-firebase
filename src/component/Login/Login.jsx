import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const logInUser = result.user;
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <div className='bg-amber-300 relative w-[500px] h-[600px] rounded mx-auto mt-16 mb-8 border'>
            <div className='bg-gray-200 absolute w-[500px] h-[600px] rounded mx-auto translate-x-4 -translate-y-4 shadow-lg border'>
                <h3 className='text-center text-4xl pt-8 hover:scale-125 transition-all duration-500 ease-in'>Login</h3>
                <div className='px-12 pt-2'>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label className='pl-2 pt-3 text-lg block' htmlFor="email">Email</label>
                            <input className='py-2 pl-2 w-full rounded-md outline-none border-2 border-gray-500/50 mt-2 text-lg' type="email" name="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label className='pl-2 pt-3 text-lg block' htmlFor="password">Password</label>
                            <input className='py-2 pl-2 w-full rounded-md outline-none border-2 border-gray-500/50 mt-2 text-lg' type="password" name="password" id="password" placeholder="Enter your password" required />
                        </div>
                        <input className='w-full py-3 mt-12 text-lg bg-amber-300 rounded-md hover:bg-amber-400 cursor-pointer' type="submit" value="Login" />
                    </form>
                    <p className='text-center pt-4'>New to Ema-john?<span className='text-amber-600 pl-2'><Link to="/signup">Create New Account</Link></span></p>
                    <div className='relative mx-16 flex justify-center items-center'>
                        <div className='border-b-2 border-gray-500 py-7 w-full'></div>
                        <p className='absolute top-10 bg-slate-200 px-6'>or</p>
                    </div>
                    <button className='w-full py-3 mt-12 text-lg rounded-md bg-white border border-gray-400'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;