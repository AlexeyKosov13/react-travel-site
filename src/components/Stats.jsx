import React from 'react';
import './Stats.css';

export const Stats = () => {
    const statsData = [
        {
            icon:'./images/earth.svg',
            title: "Over 100 Destinations",
            desc: "Travel to ower 100 unique places"
        },
        {
            icon:'./images/airplane.svg',
            title: "1 Million Trips Made",
            desc: "Over 1 million trips comleted last year"
        },
        {
            icon:'./images/clock.svg',
            title: "Fastes support",
            desc: "Access our support team 24/7"
        },
        {
            icon:'./images/card.svg',
            title: "Best Deals",
            desc: "We offer the best prices"
        },

    ]
  return (
    <div className="stats">
        <div className="stats__container">
            <h2 className="stats__title">
                Why choose Us?
            </h2>
            <div className="stats__wrapper">
                    {statsData.map((item, index) => {
                        return (
                            <div className="stats__item" key={index}>
                                <img src={item.icon} alt={item.title} className="stats__img" />
                                <div className="stats__item__title">
                                    {item.title}
                                </div>
                                <div className="stats__item__descr">{item.desc}</div>
                            </div>
                        )
                        })}
                </div>

        </div>
    </div>
  )
}
