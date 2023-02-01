import { useState } from "react";


export const List = ({...props}) => {

    const [ idRemove, setIdRemove ]         = useState(0);
    const { items }                         = props;

    const handleSubmit = (id) => {

        const idRemove = id;
        setIdRemove(idRemove)
        const dataFetch = async () => {

            let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			let requestOptions = {
				method: 'DELETE',
				headers: myHeaders,
				redirect: 'follow'
			};

			fetch(`https://cstp62ov.directus.app/items/activities/${idRemove}`, requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));
        };
        dataFetch();
    };
    
    const listItem = items?.data.map( (item) => {
        return <div key={item.id} className="item-card">
                <h2 className="item-card-title">
                    { item.title } 
                </h2>
                <div className="item-card-text">
                    <div>
                        <p>
                            { new Date(item.date_start).getDate().toString() }/{ new Date(item.date_start).getMonth().toString() }
                        </p>
                        <p>
                            { new Date(item.date_end).getDate().toString() }/{ new Date(item.date_end).getMonth().toString() }
                        </p>
                    </div>
                </div>
                <div className="item-card-button">
                    <button type="button" className="button-delete" onClick={() => handleSubmit(item.id)}>X</button>
                </div>
            </div>
    })

    return (
        <div>
            <ul>
                { listItem }
            </ul>

            <style jsx="true">{`
                
                ul {
                    padding: 10px;
                    border: 2px black;
                    border-style: dashed solid;
                    border-radius: 10px;
                }
                
                .item-card {
                    width: 100%;
                    display: flex;
                    border: 1px dotted grey;
                    border-radius: 10px;
                    margin: 5px;
                }

                .item-card-title {
                    width: 20%;
                    border-right: 2px solid black;
                }

                .item-card-text {
                    width: 40%;
                    margin: auto;
                    border-right: 2px solid black;
                }

                button {
                    padding: 5px;
                }

                .item-card-button {
                    width: 40%;
                    margin: auto;
                }

                .button-delete{
                    background-color: #fe2424;
                    border: 0;
                    padding: 7px;
                    border-radius: 5px;
                }
            `}</style>
        </div>
    )
}