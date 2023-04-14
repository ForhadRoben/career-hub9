import React from 'react';

const SingleCategory = ({ category }) => {
    // console.log(category);
    const { id, category_logo, category_name, available_job } = category;
    // const { }
    return (
        <div className="card w-full bg-secondary">
            <figure className="pr-20 pt-10">
                <img src={category_logo} alt="job logo" className="rounded-xl bg-gray-200 p-4" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <p>{available_job} jobs available</p>
            </div>
        </div>
    );
};

export default SingleCategory;