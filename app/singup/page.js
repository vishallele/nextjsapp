export default function SignUp() {
    return (
        <section className="flex justify-center mt-10">
            <div className="w-full max-w-lg">
                <div className="text-center">
                    <h1 className="text-black font-bold text-3xl">Create a free account to manage your Yelp page</h1>
                </div>
                <div className="mt-12">
                    <form>
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="wolks" />
                            </div>
                        </div>
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
                        <button class="bg-teal-500 hover:bg-teal-700 border-teal-500 text-sm hover:border-teal-700 border-4 text-white py-1 px-2 rounded w-full" type="button">
                            Create a free account for business
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}