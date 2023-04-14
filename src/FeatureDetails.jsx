import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    MapPinIcon, CurrencyDollarIcon, CreditCardIcon, PhoneIcon, AtSymbolIcon
} from '@heroicons/react/24/solid'


const FeatureDetails = () => {
    const feature = useLoaderData();
    console.log(feature);
    const { id, location, jobTitle, companyLogo, companyName, jobType, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, phone, email, address } = feature;

    const handleApplyNow = () => {
        const storedData = JSON.parse(localStorage.getItem("apply"));
        if (storedData) {
            localStorage.setItem("apply", JSON.stringify([...storedData, feature]))
        } else {
            localStorage.setItem("apply", JSON.stringify([feature]))
        }

    }

    return (
        <div className='grid grid-cols-3 gap-4 container mx-4'>
            <div className='lg:col-span-2'>
                <p><span className='font-bold mt-2'>Job description:</span>{jobDescription}</p>
                <p><span className='font-bold mt-2'>Job Responsibility:</span>{jobResponsibility}</p>
                <p><span className='font-bold mt-2'>Educational Requirements :</span>{educationalRequirements}</p>
                <p><span className='font-bold mt-2'>Experiences:</span>{experiences}</p>

            </div>
            <div className='bg-secondary lg:col-span-1 p-6'>
                <p>Job Details</p>
                <hr />
                <p className='flex'><CurrencyDollarIcon className='w-6 h-6 text-white' /><span className='font-bold'>Salary:</span>{salary}</p>
                <p className='flex'><CreditCardIcon className='w-6 h-6 text-white' /><span className='font-bold'>Job Title:</span>{jobTitle}</p>
                <p>Contact Information</p>
                <hr />
                <p className='flex'><PhoneIcon className='w-6 h-6 text-white' /><span className='font-bold'>Phone:</span>{phone}</p>
                <p className='flex'><AtSymbolIcon className='w-6 h-6 text-white' /><span className='font-bold'>Email:</span>{email}</p>
                <p className='flex'><MapPinIcon className='w-6 h-6 text-white' /><span className='font-bold'>Address:</span>{address}</p>
                <button onClick={handleApplyNow} className="btn btn-info w-40 text-white font-semibold">Apply Now</button>
            </div>
        </div>
    );
};

export default FeatureDetails;