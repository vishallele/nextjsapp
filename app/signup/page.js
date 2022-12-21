'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ disable, setDisable ] = useState(false);

    const onSubmit = async ( data ) => {

        setDisable(true);

        const response = await fetch(
            'api/registration',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        console.log(await response.json());

        setDisable(false);
    }

    return (
        <section className="flex justify-center mt-10">
            <div className="w-full max-w-lg">
                <div className="text-center">
                    <h1 className="text-black font-bold text-3xl">Create a free account to manage your Yelp page</h1>
                </div>
                <div className="mt-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full md:w-1/2 px-3">
                                <label 
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                                    htmlFor="frm_first_name"
                                >
                                    First Name
                                </label>
                                <input 
                                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                    id="frm_first_name" 
                                    type="text" 
                                    placeholder="Enter your first name"
                                    {...register("first_name", { required: true })} 
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label 
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                                    htmlFor="frm_last_name">
                                    Last Name
                                </label>
                                <input 
                                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                    id="frm_last_name" 
                                    type="text" 
                                    placeholder="Enter your last name"
                                    {...register("last_name", { required:true })} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full px-3">
                                <label 
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                                    htmlFor="frm_email_address"
                                >
                                    Email
                                </label>
                                <input 
                                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                    id="frm_email_address" 
                                    type="email" 
                                    placeholder="Enter your email address"
                                    {...register("email", { required:true })} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full px-3">
                                <label 
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                                    htmlFor="frm_password"
                                >
                                    Password
                                </label>
                                <input 
                                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                    id="frm_password" 
                                    type="password"
                                    placeholder="Enter your password"
                                    {...register("password", { required:true })}
                                />
                            </div>
                        </div>
                        <button disabled={disable} className="bg-teal-500 hover:bg-teal-700 border-teal-500 text-sm hover:border-teal-700 border-4 text-white py-1 px-2 rounded w-full" type="submit">
                            { disable === true ? 'Submitting...' : 'Create a free account for business' } 
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}