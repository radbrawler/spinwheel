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
    const onFinished = (winner) => {
        console.log(winner)
    }

    return (
        <div className="">
            <h1 className="">Welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
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
    )
}
