import { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Animator, ScrollContainer, ScrollPage, Sticky, batch, Fade, MoveOut, StickyIn, FadeIn, ZoomIn, Move, MoveIn, ZoomOut } from 'react-scroll-motion';
import { useInView } from 'react-intersection-observer';
import { osName } from 'react-device-detect';
import Cursor from "../../components/Cursor";
import favicon from '../../images/favicon.ico'
import appleIcon from '../../images/apple-touch-icon.png'
import favicon32 from '../../images/favicon-32x32.png'
import favicon16 from '../../images/favicon-16x16.png'
import siteManifest from '../../images/site.webmanifest'
import SocialIcons from '../../components/SocialIcons';
import meBg1 from '../../images/meBg1.jpg';
import CloudsBG from '../../images/clouds-png-13378.png';
import DockerBG from '../../images/ian-taylor-jOqJbvo1P9g-unsplash.jpg';
// import RickRoll from '../../images/Rick-Roll.mp4';
import RickRoll from '../../components/RickRoll';
import ErrorWindows from '../../components/ErrorWindows';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export default function Me() {
    const [windowSize, setWindowSize] = useState(getWindowSize())
    const [mobile, setMobile] = useState(false)
    const [tablet, setTablet] = useState(false)
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    useEffect(() => {
        if(windowSize.innerWidth < 768) {
            setMobile(true)
        } else {
            setMobile(false)
        }
        if(windowSize.innerWidth < 1024) {
            setTablet(true)
        } else {
            setTablet(false)
        }
    }, [windowSize])

    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => setOffsetY(window.pageYOffset);
    // console.log((offsetY/(500*windowSize.innerHeight) * 100))
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
        
    //     return () => window.addEventListener('scroll', handleScroll);
    // }, [])

    // Rick Roll shh
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Tytan</title>
                <link rel="canonical" href="/" />
                <link rel="icon" href={favicon} />
                <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
                <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
                <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
                <link rel="manifest" href={siteManifest} />

                {/* Meta Info */}
                <meta name="title" content="About Amresh" />
                <meta name="description" content="Tytan Codes's personal website" />
                <meta name="keywords" content="Tytan Codes, Personal Website, Developer, Open Sourcer, Devops Engineer, Student" />
                <meta name="author" content="Tytan Codes" />

                {/* Open Graph */}
                <meta property="og:title" content="About Amresh" />
                <meta property="og:description" content="Tytan Codes's personal website" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/" />
                <meta property="og:image" content="images/bgDesktop2.jpg" />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:image:alt" content="Tytan Codes's personal website" />
                <meta property="og:site_name" content="Tytan Codes" />
                <meta property="og:locale" content="en_US" />

                {/* twitter meta */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="About Amresh" />
                <meta name="twitter:description" content="Tytan Codes's personal website" />
                <meta name="twitter:image" content="images/bgDesktop2.jpg" />
                <meta name="twitter:image:alt" content="Tytan Codes's personal website" />
                <meta name="twitter:site" content="@aps_codes" />
                <meta name="twitter:creator" content="@aps_codes" />
            </Helmet>
            <Wrapper>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -2000))}>
                        <Text2>Hi.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
                        <Text2>I am Tytan.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(0,0), Fade())}>
                        <div style={{position: 'absolute', zIndex: -1, background: '#748DA6', height: '100vh', width: '100vw'}}></div>
                    </Animator>
                    <Animator animation={batch(StickyIn(), Fade(), MoveIn())}>
                        <Text2 style={{color: '#F2D7D9'}}>I am a Web Developer,</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(0,0), Fade())}>
                        <div style={{position: 'absolute', zIndex: -1, background: '#635666', height: '100vh', width: '100vw'}}></div>
                    </Animator>
                    <Animator animation={batch(StickyIn(), Fade())}>
                        <Text2 style={{color: '#D3EBCD'}}>DevOps Engineer,</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(0,0), Fade())}>
                        <div style={{position: 'absolute', zIndex: -1, background: '#576F72', height: '100vh', width: '100vw'}}></div>
                    </Animator>
                    <Animator animation={batch(StickyIn(), Fade())}>
                        <Text2 style={{color: '#F0EBE3'}}>Open Source Enthusiast,</Text2>
                    </Animator>
                </ScrollPage>
                
                <ScrollPage>
                    <Animator animation={batch(Sticky(0,0), Fade())}>
                        <div style={{position: 'absolute', zIndex: -1, background: '#E7AB79', height: '100vh', width: '100vw'}}></div>
                    </Animator>
                    <Animator animation={batch(Sticky(), Fade(), MoveIn())}>
                        <Text2 style={{color: '#4C3A51'}}>and a Student.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(0,0), Fade())}>
                        <div style={{position: 'absolute', zIndex: -1, background: `url(${meBg1}) no-repeat 10% 20%`, filter: 'brightness(75%)', height: '100vh', width: '100vw'}}></div>
                    </Animator>
                    <Animator animation={batch(Sticky(), Fade(), MoveIn())}>
                        <Text2 style={{fontSize: '5rem', color: '#F2D7D9', mixBlendMode: 'difference'}}>I love <span style={{textDecoration: 'none', background: 'linear-gradient(to right, #748DA6, #F2D7D9)', backgroundRepeat: 'repeat-x', backgroundSize: '100% 5px', backgroundPosition: '0 95%'}}>Trekking</span>, <span style={{textDecoration: 'none', background: 'linear-gradient(to right, #F37878, #D9F8C4)', backgroundRepeat: 'repeat-x', backgroundSize: '100% 5px', backgroundPosition: '0 95%'}}>Cycling</span> and <span style={{textDecoration: 'none', background: 'linear-gradient(to right, #DFF6FF, #1363DF)', backgroundRepeat: 'repeat-x', backgroundSize: '100% 5px', backgroundPosition: '0 95%'}}>Swimming</span>.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '3rem'}}>Grab something to eat as this is going to be long.</Text2>
                    </Animator>
                </ScrollPage>

                
                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '3rem'}}>Keep scrollin'!</Text2>
                    </Animator>
                </ScrollPage>
                
                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Text2 style={{fontSize: '3rem'}}>Here's my journey.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade(), MoveIn())}>
                        <Text2 style={{fontSize: '2rem'}}>I got my first computer 🖥️ in 2014.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade())}>
                        <Text2 style={{fontSize: '2rem'}}>I made my frist website that year.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>It was made with html, css and javascript</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
                        <Text2 style={{fontSize: '2rem'}}>it was awesome!</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Text2 style={{fontSize: '2rem'}}>It got zero views tho</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>Then i did little projects</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>Simple stuff, just made ugly websites for other people</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>Then i got good!</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
                        <Text2 style={{fontSize: '2rem'}}>In 2021 i learned python</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(StickyIn(), Fade(), MoveIn())}>
                        <Text2 style={{fontSize: '2rem'}}>Now, im pretty good at python after a few years</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>Now i'm learning React.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>


                <ScrollPage>
                    <Animator animation={batch(Fade(), StickyIn())}>
                        <Text2 style={{fontSize: '2rem'}}>Thats what this website is coded in</Text2>
                    </Animator>
                </ScrollPage>


                
                
            </ScrollContainer>
            <GoBack to="/" id="home">← Home</GoBack>
            <ScrollDown>Scroll ↓</ScrollDown>
            {!tablet ? <Cursor /> : null}
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    * {
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    }
    background: #111;
`

const GoBack = styled(Link)`
    position: fixed;
    top: 1rem;
    left: 1rem;
    color: #999;
    text-decoration: none;
`

const ScrollDown = styled.div`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    color: #999;
`

// const HeroBackground = styled.div`
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     background: url(${HeroImage}) no-repeat center center;
//     top: 0;
//     background-size: cover;
//     z-index: -1;
// `

// const Text = styled.div`
//     font-family: 'Space Grotesk', sans-serif;
//     font-size: 8rem;
//     color: #999;
//     mix-blend-mode: difference;
//     font-weight: 600;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// `

const Text2 = styled.h2`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8rem;
    color: #F6FBF4;
    mix-blend-mode: difference;
    font-weight: 600;
    @media screen and (max-width: 768px) {
        font-size: 3rem !important;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem !important;
    }
`
