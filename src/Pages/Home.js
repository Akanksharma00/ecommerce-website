import React from 'react';

import Button from '../Components/UI/Button';

import style from './Home.module.css';

const movieData = [
    {
        date:'Jul 16',
        name: 'DETROIT,MI',
        theatre: 'DTE ENERGY MUSIC THEATRE'
    },{
        date:'Jul 19',
        name: 'TORONTO,ON',
        theatre: 'BUDWEISER STAGE'
    },{
        date:'Jul 22',
        name: 'BRISTOW,VA',
        theatre: 'JIGGY LUBE LIVE'
    },{
        date:'Jul 29',
        name: 'PHOENIX,AZ',
        theatre: 'AK-CHIN PAVILION'
    },{
        date:'AUG 2',
        name: 'LAS VEGAS, NV',
        theatre: 'T-MOBILE ARENA'
    },{
        date:'AUG 7',
        name: 'CONCORD, CA',
        theatre: 'CONCORD PAVILION'
    }
];

const Home = (props) => {
    return (
        <section>
            <h2 className={style.heading}>TOUR</h2>
            <table className={style.table}>
                {movieData.map(data => {
                    return (
                    <tr className={style.tableRow}>
                        <td className={style.tableCol}>{data.date}</td>
                        <td className={style.tableCol}>{data.name}</td>
                        <td className={style.tableCol}>{data.theatre}</td>
                        <td className={style.tableCol}><Button>BUY TICKETS</Button></td>
                    </tr>)
                })}
            </table>
        </section>
    );
};

export default Home;