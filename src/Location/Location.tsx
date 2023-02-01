import React from "react"

import "./Location.style.css"
import { Dracula, RomaniaFlag } from "../Svg/reactIcon";

const Location = () => {
    return (
        <div className="location-text">
            <div className="flex-centered">
                I'm from Brasov, Romania. <RomaniaFlag />
            </div>
            <div className="flex-centered">
                Brasov is a mix of Hollywood combined with Dracula <Dracula />
            </div>
        </div>
    )
}

export default Location;