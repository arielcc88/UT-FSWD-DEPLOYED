import React, {useState, useEffect} from 'react';
import {Button } from 'react-bootstrap';
import {useSpring, animated, config} from 'react-spring'
import "../App.css";

function LandingPage() {
    //Animmations
    const springProps = useSpring({config: { duration: 2000 }, opacity: 1, from: {opacity: -1} })
    const secondSpringProps = useSpring({config: { duration: 3000 }, opacity: 1, from: {opacity: -2} })
    
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [boxProps1, set1] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [boxProps2, set2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [boxProps3, set3] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [boxProps4, set4] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    return (
        < >
            <div className="whatWeDoSection">
            <animated.div
             style={springProps}
             config={{ duration: 10 }}
             >
                 
                <div>
                    <div className="leftHeroText">
                    Pandemic-Proof Learning
                    </div>
                    <div className="aboutPod">
                        The creation of POD comes from the one of the smartest mammals on earth. Dolphins often work together in pods to share knowledge and solve problems. At Pod, our mission is to empower educators with the platform they need to effortlessly manage their educational pods so they can focus on what matters most - sharing knowledge and inspiring their students.
                    </div>
                </div>
            </animated.div>

            <animated.div
             style={secondSpringProps}
             >
                 <div>
                    <div className="rightHeroText">
                    Create Your Pod Today
                    </div>
                    <div className="aboutPod">
                        Using the POD portal educators and institutions alike can easily manange their class loads. The POD portal provide a space to share videos, reading materials, and quizes, manage student rosters easily and effectivly, track engagement data, accept payment & process bills, and keep educators organized and prepared with our custom lesson plan builder. 
                    </div>
                </div>

                <div className="demoBtn">
                    <Button className="whiteText" variant="primary">Request a Demo</Button>
                </div>
            </animated.div>

                 <div className="aboutBoxes">
                    <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => set1({ xys: calc(x, y) })}
                    onMouseLeave={() => set1({ xys: [0, 0, 1] })}
                    style={{ transform: boxProps1.xys.interpolate(trans)}}
                    >
                    <div className="box1 box">
                        Manage your student enrollement with ease
                    </div>
                    </animated.div>
                    <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => set2({ xys: calc(x, y) })}
                    onMouseLeave={() => set2({ xys: [0, 0, 1] })}
                    style={{ transform: boxProps2.xys.interpolate(trans)}}
                    >
                    <div className="box2 box">
                        Seamlessly schedule classes with Zoom & Youtube
                    </div>
                    </animated.div>
                    <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => set3({ xys: calc(x, y) })}
                    onMouseLeave={() => set3({ xys: [0, 0, 1] })}
                    style={{ transform: boxProps3.xys.interpolate(trans)}}
                    >
                    <div className="box1 box">
                        Market your curriculum on social media and email in one place
                    </div>
                    </animated.div>
                    <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => set4({ xys: calc(x, y) })}
                    onMouseLeave={() => set4({ xys: [0, 0, 1] })}
                    style={{ transform: boxProps4.xys.interpolate(trans)}}
                    >
                    <div className="box2 box">
                        Effortlessly manange billing and payments
                    </div>
                    </animated.div>
                </div>

                <div className="caseStudySection">
                    <div className="taylor">
                        Meet Taylor
                    </div>
                    <div>
                        A Case Study: Taylor has a passion for teaching young people. She teaches math and tries to make it fun in a digital world for her students to learn. Taylor has a lot on her hands already with creating custom and engaging materials to keep her students modivated. She also has to:
                            <ul className="list">
                                <li>Recruit and manage students to her program</li>
                                <li>Collect fees using Cash App or Venmo on a monthly basis and keep track of who paid and when in Excel</li>
                                <li>Setup and manage Zoom and YouTube for her live and recorded sessions</li>
                                <li>Message her students and parents about their content schedules and maybe even remind them the day of by text and email, a very manual process</li>
                                <li>Use email marketing tools like MailChimp or Substack to spread her message so that she can grow her business</li>
                                <li>Leverage Social Media tools like Instagram, Twitter, and Facebook to do deeper engagement and recruit new students</li>
                            </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;