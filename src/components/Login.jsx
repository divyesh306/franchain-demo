import React from 'react'
import logo from '../assets/img/logo.png';
import sideImg from '../assets/img/sideImg.png';

export default function Login() {
    return (
        <div className='h-screen w-full'>
            <div className='flex flex-row bg-transparent px-10 justify-between mt-5 sticky z-50 xl:mt-2'>
                <div className='w-[35.46px] h-[70.92px] '>
                    <img src={logo} />
                </div>
                <button className='w-[100px] h-[70.92px] flex items-center'>
                    Log in
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-[20px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
            <div className='grid grid-cols-1 h-full xl:grid-cols-2 mt-[-78px]'>
                <div className='partA  flex-col items-center justify-center hidden xl:flex xl:pt-[78px]'>
                    <div className='flex flex-col items-center w-3/4'>
                        <div className='partA_Imagebox'>
                            <img src={sideImg} />
                        </div>
                        <h1 className='partA_header mt-[34px] mx-[48.5px]'>Royalty collections, simplified. It’s next level!</h1>
                        <p className='mt-[13px] mx-[114.5px]'> Revenue based invoice collection to make royalty collection as easy as... </p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center xl:pt-[71px] pt-[68px]'>
                    <form className='w-11/12 xl:w-3/4 sm:w-8/12'>
                        <h2 className="text-base font-semibold leading-7 getStartHeading">Get started with Franchain</h2>
                        <p className="mt-1 text-sm leading-6 subTitle">Create an account in 5 minutes.</p>
                        <div class="mt-10 grid grid-cols-1 gap-2.5">
                            <div className=''>
                                <label for="First Name" class="block text-sm leading-6 text-gray-900 text-left">First Name</label>
                                <div className="mt-2">
                                    <input id="firstname" name="firstname" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className=''>
                                <label for="lastname" class="block leading-6 text-gray-900 text-left text-sm">Last Name</label>
                                <div className="mt-2">
                                    <input id="lastname" name="lastname" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className=''>
                                <label for="businessname" class="block leading-6 text-gray-900 text-left text-sm">
                                    Business name and HQ location
                                </label>
                                <div className="mt-2">
                                    <input id="businessname" name="businessname" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className=''>
                                <label for="email" class="block leading-6 text-gray-900 text-left text-sm">Work email</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className=''>
                                <label for="password" class="block leading-6 text-left text-sm">Password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                                <span className='block mt-2 leading-6 text-red-500 text-left text-sm'>Password must be at least 12 characters</span>
                            </div>

                            <div className="flex items-center justify-start py-[10px]">
                                <button type="submit" className="signUp text-sm font-semibold text-white shadow-sm">
                                    Sign Up
                                </button>
                            </div>

                            <p className='privacyPolicy text-sm'>
                                By clicking “Start Application“, I agree to Mercury’s <span className='underline'>Terms of Use</span>, <span className='underline'>Privacy Policy</span> and to receive electronic communication about my accounts and services per<span className='underline'>Mercury’s Electronic Communications Agreement</span>, and acknowledge receipt of <span className='underline'>Mercury’s USA PATRIOT Act disclosure.</span>
                            </p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
