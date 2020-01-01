import React from 'react';
import homeCards from '../Data/HomeCards';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        homeCards.map(i => 
            <Link className="home-card" to={i.link} key={i.id}>
                <h1>{i.title}</h1>
                <img src={i.image} alt={i.alt} />
                <h3>{i.subTitle}</h3>
                <p>{i.paragraph}</p>
            </Link>
        )
    )
}