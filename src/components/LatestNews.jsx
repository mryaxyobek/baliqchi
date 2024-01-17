import React from 'react';
import { news } from "../assets/data";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <section className='py-16'>
            <div className="container">
                <h2 className="mb-8">So'nggi yangiliklar</h2>
                <ul className="grid grid-cols-3 gap-6 max-700:grid-cols-2 max-550:grid-cols-1">
                    {news.map((item, index) => {
                        return (
                            index < 3 &&
                            <li key={item.id} className="flex flex-col justify-between gap-y-2">
                                <Link to={`news/${item.title}`} className="h-60 w-full flex justify-center items-center overflow-hidden rounded-xl">
                                    <img className="w-full h-full object-cover rounded-xl" src={item.image} alt="" />
                                </Link>
                                <p className="text-gray-600">{item.date.toDateString()}</p>
                                <Link to={`/${item.title}`}>
                                    <h3 className="text-xl font-semibold line-clamp-2">{item.title}</h3>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
};

export default LatestNews;