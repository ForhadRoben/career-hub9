import React from 'react';

const Header = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/93699-coding.gif" />
                <div>
                    <h1 className="text-5xl font-bold">One Step Closer To Your <span className='text-indigo-500'>Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-info text-white font-semibold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;