
import React from "react";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn
} from "react-scroll-motion";
import { MediumText, NameTitle, TitleText } from "../Scroll/Scroll.style";
import AboutMe from "../AboutMe/AboutMe";
import Location from "../../Location/Location";
import Contact from "../Contact/Contact";


const Scroll = () => {

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <MediumText>
                            Hello!
                        </MediumText>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={ZoomInScrollOut} >
                        <TitleText>
                            I'm <NameTitle>Vlad</NameTitle>, <br />
                            Frontend Developer
                        </TitleText>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp} style={{ width: "100%", padding: "72px" }}>
                        <AboutMe />
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={ZoomInScrollOut} style={{ width: "100%", padding: "72px" }} >
                        <Location />
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp} style={{ width: "100%", padding: "72px" }} >
                        <Contact />
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </>
    )

}

export default Scroll;