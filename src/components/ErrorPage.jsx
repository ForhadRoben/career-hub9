import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-secondary text-gray-700'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-red-600'>
                        {
                            error &&
                            <div>
                                <h1 className='text-xl font-bold'>{error.status}</h1>
                                <p className='text-red-500 text-3xl'>{error.statusText || error.message}</p>
                            </div>
                        }
                    </h2>
                    <p className='text-2xl font-semibold text-blue-500 md:text-3xl mb-8'>
                        OOPS! PAGE NOT FOUND
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-bold rounded bg-blue-300 text-red-500'
                    >
                        Go Home
                    </Link>
                    <Link
                        to='/'
                        className='px-8 py-3 mx-8 font-bold rounded bg-blue-300 text-red-500'
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage
