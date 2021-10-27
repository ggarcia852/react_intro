import React, { useState, useEffect } from 'react'
import RacerDetail from '../components/RacerDetail';
import { RacerForm } from '../components/RacerForm';

export default function Racers(props) { 
    const [racers, setRacers] = useState([]);
    const [season, setSeason] = useState(2021);
    const [round, setRound] = useState(1);

    useEffect(() => {
        fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => setRacers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
    })

    const handleForm = (e) => {
        e.preventDefault();
        console.log("handling form");
        const seasonInput = e.target.season.value;
        const roundInput = e.target.round.value;
        setSeason(seasonInput)
        setRound(roundInput)
    }

        return (
            <div>
              <h1>Race Details: </h1>
            <RacerForm handleForm={handleForm}/>

              {racers.length ? (
                <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <td>Position </td>
                        <td>Points </td>
                        <td>Wins </td>
                        <td>Name </td>
                        <td>Last Name </td>
                        <td>Nationality </td>
                        <td>Constructor </td>
                    </tr>
                    </thead>    
                    <tbody>
                        {racers.map((r, i) => <RacerDetail key={i} racer={r} /> )}
                    </tbody>
                </table>
                 ): null}
            </div>
        )
    }

