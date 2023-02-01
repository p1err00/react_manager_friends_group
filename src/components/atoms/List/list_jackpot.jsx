import { useEffect, useState } from "react";


export const List = ({ ...props }) => {

    const { items }                                         = props;
    const [ idRemove, setIdRemove ]                         = useState(0);
    const [ items_jackpot, setState ] 						= useState();
    let total = 0;
    
    useEffect( () => {
        const getMoneyByJackpot = async () => {
            let items_jackpot = [];
            
            for (let item of items) {

                if ( !item ) return;
                
                const items_jackpot_history = await (
    
                    // Get item jackpot_history by id_jackpot 
                    await fetch(
                        `https://cstp62ov.directus.app/items/jackpot_history?filter={"id_jackpot":{"_eq":"${item.id}"}}`
                    )
                ).json();

                items_jackpot.push(items_jackpot_history.data);
            };
            setState(items_jackpot)
        }
        getMoneyByJackpot()
    })


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

			fetch(`https://cstp62ov.directus.app/items/jackpots/${idRemove}`, requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));
        };
        dataFetch();
    };

    const listItem = items?.map(
        (item, i) => {
            return <div key={item.id} className="item-card">
                        <h2 className="item-card-title">
                            {item.title}
                            <p>
                                <label className="label-title">A atteindre</label>
                                <p>
                                    {item.amount}€
                                </p>
                            </p>
                        </h2>
                        <div className="item-card-text">
                            <ul>
                                {items_jackpot[i]?.map((aze) => {
                                    total += aze.amount;
                                    return <div>
                                        <li className="item-jackpot-history">{aze?.amount}€ - par {aze?.set_by}</li>
                                    </div> 
                                })}
                            </ul>
                            <span>Total : {total}€</span>

                        </div>
                        <div className="item-card-button">
                            {/* <button className="" onClick={toggleEdit}>
                                    ->
                            </button>

                            <ModalEditJackpot isShowingEditJackpot={isShowingEditJackpot} hide={toggleEdit} /> */}
                            <button type="button" className="button-delete" onClick={() => handleSubmit(item.id)}>X</button>
                        </div>
                    </div>
        }
    )

    return (
        <div>
            {listItem}
            <style jsx="true">{`
                .item-card {
                    width: 100%;
                    display: flex;
                    border: 1px dotted grey;
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

                .item-card-button {
                    width: 40%;
                    margin: auto;
                }

                .label-title {
                    font-size: 18px;
                    color: grey;
                }

                button {
                    padding: 5px;
                }

                .item-jackpot-history{
                    font-size: 20px;
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