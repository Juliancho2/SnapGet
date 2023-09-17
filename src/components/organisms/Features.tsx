
import React from 'react';
import { features } from '@/static';

const Features = () => {
    return (
        <div className='max-w-6xl mx-auto space-y-7 min-h-[50vh]'>
            <section>
                <div className="join join-vertical w-full bg-white">
                    {features.map((item, index) => (
                        <div key={index} className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4"/>
                            <div className="collapse-title text-xl font-medium">
                                {item.title}
                            </div>
                            <div className="collapse-content">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Features;
