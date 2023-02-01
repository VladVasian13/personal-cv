import React from "react";
import { CssLogo, HtmlLogo, JavascriptLogo, ReactLogo, ReduxLogo } from "../../Svg/reactIcon";
import "./AboutMe.style.css"

export const AboutMe = () => {
    return (
        <>
            <div className="react-logo">
                <div className="rotate-animation">
                    <ReactLogo />
                </div>
                <div className="rotate-animation">
                    <ReduxLogo />
                </div>
            </div>
            <div className="description">
                I'm an IT enthusiast, working with React for a couple of years.
                Also I have experience with Redux, HTML, CSS, Typescript, SQL, PWA, MaterialUI.
            </div>
            <div className="react-logo">
                <div className="move-animation">
                    <HtmlLogo />
                </div>
                <div className="move-animation">
                    <CssLogo />
                </div>
                <div className="move-animation">
                    <JavascriptLogo />
                </div>
            </div>
        </>
    )
}

export default AboutMe;