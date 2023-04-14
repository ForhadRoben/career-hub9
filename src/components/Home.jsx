import React, { useEffect, useState } from 'react';
import Header from './Header';
import SingleCategory from './SingleCategory';



const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-2xl font-semibold'>Job Category List</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid lg:grid-cols-4 gap-4 m-4'>

                {
                    categories.map(category => <SingleCategory
                        key={category.id}
                        category={category}></SingleCategory>)
                }
            </div>
            <p>this is home</p>
        </div>
    );
};

export default Home;