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

                <div className="title-div">
                    <h1 className="title-text">
                        L'appli
                    </h1>
                    <p className="title-subtext">L'appli pour gerer ton temps et ton argent</p>
                    <p className="title-">(Rien de plus, rien de moins)</p>
                </div>
            </Container>

            <style jsx="true">{`
                .home {
                    margin-top: 20px;
                }

                .title-div {
                    width: 100%;                    
                }

                .title-text {
                    font-size: 65px;
                    margin-bottom: 0;
                }

                .title-subtext {
                    font-size: 25px;
                    margin-left: 10%;
                    font-style: italic;
                }
            `}</style>

        </div>
    )
}
