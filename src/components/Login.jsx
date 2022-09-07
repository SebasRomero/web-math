import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import Alert from './Alert';
const Login = () => {

    //Defining var user
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    //const [userLogin, setUserLogin] = useState(false)

    const { login } = useAuth()
    const navigate = useNavigate();
    const [error, seterror] = useState()
    //Update status
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    //Look status
    const handleSubmit = async (e) => {
        e.preventDefault();
        seterror('');
        try {
            await login(user.email, user.password)
            navigate('/index')
            //setUserLogin = true;
            //console.log(userLogin)
        } catch (error) {
            console.log(error.code)
            if (error.code === 'auth/user-not-found') {
                seterror('User not founded')
            }
            if (error.code === 'auth/wrong-password') {
                seterror('Wrong email or password ')
            }


        }
        console.log(user)
    }

    return (
        // <div className="form-group">
        //     {error && <Alert message={error}/>}
        //     <form onSubmit={handleSubmit} className="">
        //         <label htmlFor="email">Email</label>
        //         <input type="email" className="form-control" name="email"
        //             placeholder="youremail" onChange={handleChange}></input>

        //         <label htmlFor="password">Password</label>
        //         <input type="password" name="password" id="password"
        //             onChange={handleChange} placeholder="*******"></input>

        //         <button>Log in</button>
        //     </form>
        // </div>

        <div className="form-group block p-9 rounded-lg shadow-lg bg-white max-w-sm h-screen">
            {error && <Alert message={error} type="bg-red-100 border border-red-400
     text-red-700 px-4 py-3 rounded relative mb-2 text-center" />}
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-6">
                    <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                    <input type="email" name="email" className="form-control block w-full px-3 py-1.5 text-base 
                    font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                    focus:outline-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange}></input>
                    <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
                        else.</small>
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="password" name="password" className="form-control block w-full px-3 py-1.5 text-base font-normal 
                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password"
                        placeholder="Password" onChange={handleChange}></input>
                </div>

                <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md 
                hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
                active:shadow-lg transition duration-150 ease-in-out">Log in</button>
                <p className="text-gray-800 mt-6 text-center">Not a member? <a href="/register"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
                </p>
            </form>
        </div>
    )
}

export default Login;
