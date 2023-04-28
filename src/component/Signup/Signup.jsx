import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Signup = () => {

    const [error, setError] = useState('');

    const { createUsers } = useContext(AuthContext);
    console.log(createUsers);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(email, password, confirmPassword);

        setError('');

        if (password !== confirmPassword) {
            setError(`Password didn't match`);
        }
        else if (password.length < 6) {
            setError('Must be 6 character or longer');
        }
        createUsers(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });
    };
    return (
        <div className='bg-amber-300 relative w-[500px] h-[700px] rounded mx-auto mt-16 mb-8 border'>
            <div className='bg-gray-200 absolute w-[500px] h-[700px] rounded mx-auto translate-x-4 -translate-y-4 shadow-lg border'>
                <h3 className='text-center text-4xl pt-8 hover:scale-125 transition-all duration-500 ease-in'>Sign Up</h3>
                <div className='px-12 pt-2'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='pl-2 pt-3 text-lg block' htmlFor="email">Email</label>
                            <input className='py-2 pl-2 w-full rounded-md outline-none border-2 border-gray-500/50 mt-2 text-lg' type="email" name="email" id="email" placeholder="Enter your email" required />
                        </div>

                        <div>
                            <label className='pl-2 pt-3 text-lg block' htmlFor="password">Password</label>
                            <input className='py-2 pl-2 w-full rounded-md outline-none border-2 border-gray-500/50 mt-2 text-lg' type="password" name="password" id="password" placeholder="Enter your password" required />
                        </div>

                        <div>
                            <label className='pl-2 pt-3 text-lg block' htmlFor="confirmPassword">Confirm Password</label>
                            <input className='py-2 pl-2 w-full rounded-md outline-none border-2 border-gray-500/50 mt-2 text-lg' type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter your confirm password" required />
                        </div>
                        {
                            error && <p className='text-red-600 absolute mt-3'>{error}</p>
                        }
                        <input className='w-full py-3 mt-12 text-lg bg-amber-300 rounded-md hover:bg-amber-400 cursor-pointer' type="submit" value="Sign Up" />
                    </form>

                    <p className='text-center pt-4'>Already have an account?<span className='text-amber-600 pl-2'><Link to="/login">Login</Link></span></p>
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

export default Signup;