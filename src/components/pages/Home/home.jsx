import React from "react";
import { Container } from "../../atoms/Container/Container.jsx";
import { Title } from "../../atoms/Title/Title.jsx"

export const Home = ({...props}) => {

    const{backgroundColor, size} = props;

    return (
        <div className="home" id="home">
            <Container
                direction={"row"}
                justifyContent={"space-around"}
                alignItem={"center"}
            >
                <Title title="Welcome"></Title>
            </Container>

            <style jsx="true">{`
                .home {
                    margin-top: 20px;
                }
            `}</style>

        </div>
    )
}
