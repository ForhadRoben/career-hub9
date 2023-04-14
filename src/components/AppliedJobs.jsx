import React, { useEffect, useState } from "react";
import SingleFeature from "./SingleFeature";

const AppliedJobs = () => {
    const [apply, setApply] = useState([]);
    const [filterOrder, setFilterOrder] = useState(0);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("apply"));
        if (storedData) {
            setApply(storedData);
            setFilterOrder(storedData);
        }
    }, []);

    const handleFilter = (event) => {
        const value = event.target.value;
        // console.log(value);
        const filterData = apply.filter((item) => item.jobType[0] == value);
        // console.log(filterData);
        setFilterOrder(filterData)
    }
    return (
        <div>

            <div className="my-3 text-center mx-4">
                <label htmlFor="">Filter: </label>
                <select onChange={handleFilter} className="select select-bordered w-full max-w-xs ml-2">
                    <option disabled selected>
                        Choose Here
                    </option>
                    <option value="Onsite">Onsite</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>

            {filterOrder.length > 0 ? (
                filterOrder?.map((feature) => (
                    <div className="my-4 mx-4">
                        <SingleFeature feature={feature} />
                    </div>
                ))
            ) : (
                <h1 className="text-xl text-center text-red-500">Not Applied</h1>
            )}
        </div>
    );
};

export default AppliedJobs;