import styled from "styled-components"
import Navbar from "../components/Navbar"

const ServerErrorWrapper = styled.div`
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

const ServerErrorStatusCode = styled.h1`
    font-size: 5rem;
    font-weight: 400;
    color: #9179F0;
    margin: 0;
`

const ServerErrorMessage = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    color: #CAB8FD;
    margin: 0;
`

const ServerError = () => {
    return (
        <>
            <Navbar />
            <ServerErrorWrapper>
                <div>
                    <ServerErrorStatusCode>Hello there!</ServerErrorStatusCode>
                    <ServerErrorMessage>You found me! Enjoy a picture of franklin :)</ServerErrorMessage>
                    <img src="/franklin-removebg.png" alt="Whoops! Your browser cant display franklin :( shit browser bro"></img>
                </div>
            </ServerErrorWrapper>
        </>
    )
}

export default ServerError