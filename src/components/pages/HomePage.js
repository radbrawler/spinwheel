import React from 'react'
import { Link } from 'react-router-dom'

import WheelComponent from 'react-wheel-of-prizes'

export default function HomePage() {
    const segments = [
        'better luck next time',
        'won 70',
        'won 10',
        'better luck next time',
        'won 2',
        'won uber pass',
        'better luck next time',
        'won a voucher'
    ]
    const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000'
    ]
    var winners = JSON.parse(localStorage.getItem("winners"))
    if (winners == null) {
        winners = []
    }

    function onFinished(winner) {
        let item = {
            name: winner,
            time: new Date().toLocaleTimeString()
        }
        let winners_str = localStorage.getItem("winners")

        if (winners_str != null) {
            winners = JSON.parse(winners_str)
        }
        if (winners.length > 9) {
            winners.shift()
        }
        winners.push(item)
        console.log(winners)
        localStorage.setItem("winners", JSON.stringify(winners))
        alert(`Winner is: ${winner}`)
        window.location.reload(false);
    }

    return (
        <div className="" style={{ marginRight: "120px" }}>
            <h1 className="">Welcome to our app</h1>

            <table width="600px" style={{ marginRight: "100px" }}>
                <tbody>
                    <tr>
                        <th>S. No</th>
                        <th>Winner</th>
                        <th>Time</th>
                    </tr>
                    {winners.map((win, idx) => {
                        return (<tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{win.name}</td>
                            <td>{win.time}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <div>
                <WheelComponent
                    segments={segments}
                    segColors={segColors}
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor='black'
                    contrastColor='white'
                    buttonText='Spin'
                    isOnlyOnce={false}
                    size={290}
                    upDuration={10}
                    downDuration={100}
                    fontFamily='Arial'
                />
            </div>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
