import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const SingleFeature = ({ feature }) => {
    console.log(feature);
    const { id, location, jobTitle, companyLogo, companyName, jobType, salary } = feature;
    return (
        <div className="card w-full bg-gray-100">
            <figure className="pr-20 pt-10 w-60">
                <img src={companyLogo} alt="job logo" className="rounded-xl p-4" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{jobTitle}</h2>
                <p>{companyName}</p>
                <div className='flex gap-2'>
                    <p className='py-4 border border-blue-400 text-center font-semibold'>{jobType[0]}</p>
                    <p className='py-4 border border-blue-400 text-center font-semibold'>{jobType[1]}</p>
                </div>
                <div className='grid grid-cols-2'>
                    <p className='flex'><MapPinIcon className='w-6 h-6' />{location}</p>
                    <p className='flex'><CurrencyDollarIcon className='w-6 h-6' />{salary}</p>
                </div>
                <button className="btn btn-info w-40 text-white font-semibold">View Details</button>
            </div>
        </div>
    );
};

export default SingleFeature;