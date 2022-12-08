export default function LoginPage() {
    return (
        <section className="flex justify-center mt-10">
            <div className="w-full max-w-sm">
                <div className="text-center">
                    <h1 className="text-black font-bold text-3xl">Welcome Back</h1>
                </div>
                <div className="mt-5">
                    <form>
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Email
                                </label>
                                <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="jane@mail.com" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Password
                                </label>
                                <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="password"/>
                            </div>
                        </div>
                        <div className="mb-6 text-right">
                            <a className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800" href="#">Forgot password?</a>
                        </div>
                        <button class="bg-teal-500 hover:bg-teal-700 border-teal-500 text-sm hover:border-teal-700 border-4 text-white py-1 px-2 rounded w-full" type="button">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}