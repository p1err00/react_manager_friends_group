import { useState } from "react";
import useModalEdit from "../../hooks/useModalEditJackpot";
import ModalEditJackpot from "../../mollecules/modals/modal_jackpot/edit_jackpot";


export const List = ({ ...props }) => {

    const { items } = props;
    const { isShowingEditJackpot, toggleEdit } = useModalEdit();
    const [ idRemove, setIdRemove ] = useState(0);
    
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
        (item) => {
            return <li key={item.id} className="item-list">
                    <div>
                        {item.title} - {item.amount}€
                    </div>
                    <div>
                        <button className="" onClick={toggleEdit}>
                            ->
                        </button>

                        <ModalEditJackpot isShowingEditJackpot={isShowingEditJackpot} hide={toggleEdit} />
                        <button type="button" onClick={() => handleSubmit(item.id)}>X</button>
                    </div>
                </li>
        }
    )

    return (
        <div>
            <ul>
                {listItem}
            </ul>
            <style jsx="true">{`
                
            `}</style>
        </div>
    )
}