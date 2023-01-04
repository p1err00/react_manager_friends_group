import ModalEditActivity from "../../mollecules/modals/modal_activity/edit_activity";
import useModalEdit from "../../hooks/useModalEditJackpot";
import { useState } from "react";


export const List = ({...props}) => {

	const { isShowingEditActivity, toggleEdit } = useModalEdit();
    const [ idRemove, setIdRemove ] = useState(0);
    const { items } = props;

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
        return <li key={item.id} className="item-list">

                <div>
                    { item.title } 
                    <div>
                        { new Date(item.date_start).getDate().toString() }-{ new Date(item.date_end).getMonth().toString() }
                    </div>
                </div>
                <div>
                    <ModalEditActivity isShowingEditActivity={isShowingEditActivity} hide={toggleEdit} activity={item}/>
                </div>
                <button className="" onClick={toggleEdit}>
                    Edit
                </button>
                <div>
                    <button type="button" onClick={() => handleSubmit(item.id)}>X</button>
                </div>
            </li>
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
                
                .item-list {
                    display: flex;
                    flex-direciton: row;
                    justify-content: space-evenly
                }
            `}</style>
        </div>
    )
}