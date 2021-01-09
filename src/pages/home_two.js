import React from 'react';
import { CardLg, CardMd, CardSm, Card } from '../components/ui/card'

const home_two = (props) => {
    return (
        <>
        <div className="container">
            <CardLg />
            <CardLg />
            <CardLg />
        </div>
        <div className="container">
            <CardSm />
            <CardSm />
            <CardSm />
        </div>
        </>
    )
};

export default home_two;