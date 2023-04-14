import React, { useEffect, useState } from 'react';
import Header from './Header';
import SingleCategory from './SingleCategory';
import { useLoaderData } from 'react-router-dom';
import SingleFeature from './SingleFeature';



const Home = () => {
    const featuresData = useLoaderData()
    const [categories, setCategories] = useState([])
    const [seeAllJobs, setSeeAllJobs] = useState(false)
    const [featuresJobs, setFeaturesJobs] = useState(featuresData)
    // console.log(featuresData);
    useEffect(() => {
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <h1 className='mt-6 text-center text-3xl font-semibold'>Job Category List</h1>
            <p className='text-center font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future. Explore it...</p>
            <div className='grid lg:grid-cols-4 gap-4 m-8'>

                {
                    categories.map(category => <SingleCategory
                        key={category.id}
                        category={category}></SingleCategory>)
                }
            </div>
            <h1 className='mt-6 text-center text-3xl font-semibold'>Featured Jobs</h1>
            <p className='text-center font-semibold'>You can search millions of jobs online to find the next step in your career. With tools for job search, resumes, company reviews and more...</p>
            <div className='grid lg:grid-cols-2 gap-4 m-8'>
                {
                    seeAllJobs ? featuresJobs.map(feature => <SingleFeature
                        key={feature.id}
                        feature={feature} ></SingleFeature>)
                        :
                        featuresJobs.slice(0, 4)
                            .map(feature => <SingleFeature
                                key={feature.id}
                                feature={feature}></SingleFeature>)
                }
            </div>
            <div className="text-center">
                {!seeAllJobs && (
                    <button
                        onClick={() => setSeeAllJobs(true)}
                        className="btn btn-secondary w-40 text-white font-bold my-4 "
                    >
                        See All Jobs
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;