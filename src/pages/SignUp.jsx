import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../components/SocialLogin";


const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();


    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()


    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userData = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL
                        }
                        axiosPublic.post('/users', userData)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        text: "User created Successfully ",
                                        icon: "success"
                                    });
                                    reset();
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error.message))
            })
            .catch(error => console.log(error.message))
    }



    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className=" mx-auto w-full max-w-md space-y-2 rounded-lg border bg-white px-10 py-6 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                <h1 className="text-3xl font-semibold">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* firstName */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="firstName_2" className="block font-medium">
                            First Name
                        </label>
                        <input
                            {...register("name", { required: true })}
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="firstName"
                            placeholder="Enter First Name"
                            name="name"
                            type="text"
                        />
                        {errors.name && <span className="text-rose-600">First Name is required</span>}

                    </div>

                    {/* photoURL */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="firstName_2" className="block font-medium">
                            PhotoURL
                        </label>
                        <input
                            {...register("photoURL", { required: true })}
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="photo"
                            placeholder="photoURL"
                            type="text"
                        />
                        {errors.photoURL && <span className="text-rose-600">photoURL is required</span>}

                    </div>

                    {/* email */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="email_2" className="block font-medium">
                            Email
                        </label>
                        <input
                            {...register("email", { required: true })}
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="email_2"
                            placeholder="Enter email"
                            name="email"
                            type="email"
                        />
                        {errors.email && <span className="text-rose-600">Email is required</span>}
                    </div>

                    {/* password */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Password
                        </label>
                        <input
                            // {...register("password", {
                            //     required: "Password is required",
                            //     minLength: {
                            //         value: 6,
                            //         message: "Password must be at least 6 characters",
                            //     },
                            //     maxLength: {
                            //         value: 20,
                            //         message: "Password must not exceed 20 characters",
                            //     },
                            //     validate: {
                            //         hasUppercase: (value) =>
                            //             /[A-Z]/.test(value) || "Must contain at least one uppercase letter",
                            //         hasLowercase: (value) =>
                            //             /[a-z]/.test(value) || "Must contain at least one lowercase letter",
                            //         hasNumber: (value) =>
                            //             /\d/.test(value) || "Must contain at least one number",
                            //         hasSpecialChar: (value) =>
                            //             /[^A-Za-z0-9]/.test(value) ||
                            //             "Must contain at least one special character",
                            //     },
                            // })}


                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="password_2"
                            placeholder="Enter password"
                            name="password"
                            type="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern:
                                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                            })}
                        />
                        {/* {errors.password && (
                            <span className="text-rose-600">{errors.password.message}</span>
                        )} */}

                        {errors.password?.type === "required" && (
                            <p className="text-red-600">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-600">Password must be 6 characters</p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-red-600">
                                Password must be less then 20 characters
                            </p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600">
                                Password must have one uppercase character, one lowercase
                                character, one number and one special character
                            </p>
                        )}
                    </div>

                    {/* login button */}
                    <input

                        type="submit"
                        value='Sign Up'
                        className={`w-full rounded-md px-4 py-2 text-white transition-colors bg-sky-700 hover:bg-sky-800 dark:bg-sky-700'}`}
                    >
                    </input>
                </form>

                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Don&apos;t have an account?
                    <a href="/logIn" className="font-semibold underline">
                        SignIn
                    </a>
                </p>


                {/* social login */}
                <div className="my-8 flex items-center">
                    <hr className="flex-1 border-gray-400" />
                    <div className="mx-4 text-gray-400">OR</div>
                    <hr className="flex-1 border-gray-400" />
                </div>
                {/* Social icons */}
                <div className="flex justify-center space-x-4 *:border hover:*:bg-zinc-400/20 *:dark:border-zinc-700">

                    <SocialLogin />

                    <button aria-label="Log in with Twitter" className="rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                            <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                        </svg>
                    </button>
                    <button aria-label="Log in with GitHub" className="rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;