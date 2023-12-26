
export default function Login() {
    return (
        <body className="bg-gray-100 select-none">
            <div className="flex h-screen">
                <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                    <div className="max-w-md text-center">
                        {/* <div>
                            <Image className="article-img" loading="lazy" src="{{ asset('images/background.webp') }}" alt='background' />
                        </div> */}
                    </div>
                </div>
                <div className="w-full bg-yellow xl:w-1/4 lg:w-1/3 flex items-center justify-center z-10 shadow-md">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-bold mb-6 text-black text-center">Login</h1>
                        <form action="{{ route('submit') }}" method="POST" className="space-y-4">
                            <div className="space-y-3">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input type="text" id="username" name="username"
                                    className="mt-1 p-2 w-full border rounded-xl focus:border-gray-200 focus:outline-none focus:ring-2 
                                    focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                <p className="text-red-500 text-xs italic"></p>
                            </div>
                            <div className="space-y-3 mb-5">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" id="password" name="password"
                                    className="mt-10 p-2 w-full border rounded-xl focus:border-gray-200
                                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                <p className="text-red-500 text-xs italic" ></p>
                            </div>
                            <br />
                            <div>
                                <button type="submit" className="w-full bg-black text-white p-2 rounded-xl hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    )

}