import { Container } from "../components/atoms/Container/Container";

export default function Root() {
    
    return (
        <>
            <Container 
                width={500}
                heigth={10}
                direction={"row"}
                justifyContent={"space-around"}
            >
                <div id="sidebar" className="nav">
                    <nav>
                        <div className="nav-item">
                                <a href={`home`}>Home</a>
                        </div>
                        <div className="nav-item">
                                <a href={`activity`}>Activités</a>
                        </div>
                        <div className="nav-item">
                                <a href={`jackpot`}>Cagnottes</a>
                        </div>
                        <div className="nav-item">
                                <a href={`repay`}>Remboursement</a>
                        </div>     
                    </nav>
                </div>
            </Container>

            <style jsx="true">{`
                nav {
                    padding: 10px 60px 10px 60px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    border: 2px solid black;
                    border-radius: 15px;
                }
                
                a, .nav-item {
                    background-color: grey;
                }

                .nav-item {
                    margin: 5px;
                    padding: 10px;
                    border-radius: 8px;
                }
            `}
            </style>
        </>
    );
}
