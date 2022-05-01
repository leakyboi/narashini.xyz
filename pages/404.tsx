import styled from "styled-components"
import Navbar from "../components/Navbar"
import dynamic from "next/dynamic"
const Anime = dynamic(() => import("react-anime"), { ssr: false })

const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        text-align: center;
    }
`

const NotFoundStatusCode = styled.h1`
    font-size: 5rem;
    font-weight: 400;
    color: #9179F0;
    margin: 0;
`

const NotFoundMessage = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    color: #CAB8FD;
    margin: 0;
`
const eastereggmessage = styled.a`
    color: #201A25;
`

const NotFound = () => {
    return (
        <>
            <Navbar />
            <NotFoundWrapper>
                <div>
                    <Anime easing={'easeOutElastic(1, .8)'} translateY={[30, 0]} opacity={[0, 1]} delay={400}>
                        <NotFoundStatusCode><a href="/easteregg">404</a></NotFoundStatusCode>
                    </Anime>
                    <Anime easing={'easeOutElastic(1, .8)'} translateY={[30, 0]} opacity={[0, 1]} delay={600}>
                        <NotFoundMessage>Oh no! We couldn't find that page.</NotFoundMessage>
                    </Anime>
                </div>
            </NotFoundWrapper>
        </>
    )
}

export default NotFound