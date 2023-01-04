import { useState } from "react";
import useModalEdit from "../../hooks/useModalEditJackpot";
import ModalEditRepay from "../../mollecules/modals/modal_repay/edit_repay";


export const ListRepay = ({ ...props }) => {

    const { items } = props;
    const { isShowingEditRepay, toggleEdit } = useModalEdit();
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

			fetch(`https://cstp62ov.directus.app/items/repay/${idRemove}`, requestOptions)
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
                        {item.get_by} - {item.set_by}
                    </div>
                    <div>
                        
                        <button className="modal-toggle" onClick={toggleEdit}>
                            ->
                        </button>

                        <ModalEditRepay isShowingEditRepay={isShowingEditRepay} hide={toggleEdit} />

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