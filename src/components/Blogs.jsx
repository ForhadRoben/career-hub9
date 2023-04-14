import React from 'react';

const BLogs = () => {
    return (
        <div className='container w-[90%] h-[65vh] mx-auto mt-12'>
            <section className="dark:bg-gray-800 dark:text-gray-500 bg-yellow-200">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl my-4 text-center">My Blogs</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl font-semibold">What is useMemo?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">useMemo is a hook that is used in the functional component of React that returns a memoized value.useMemo is a hook that is used in the functional component of React that returns a memoized value.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl font-semibold">When should you use context API?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If we only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl font-semibold">Uses of useRef hook!</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                The useRef Hook allows us to persist values between renders.
                                It can be used to store a mutable value that does not cause a re-render when updated.
                                It can be used to access a DOM element directly.
                                <br />
                                If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                                To avoid this, we can use the useRef Hook.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl font-semibold">What is a custom hook?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows us to reuse some piece of code in several parts of our app.When we want to share the logic between other components, we can extract it to a separate function.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BLogs;