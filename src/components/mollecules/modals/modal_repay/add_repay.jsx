import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { increment } from "../../../../features/repaySlice";

const ModalAddRepay = ({ isShowingAddRepay, hide }) => {

	const [repay, setState] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {

        const dataFetch = async () => {
			const repay = await (
				await fetch(
					"https://cstp62ov.directus.app/items/user"
				)
			).json();

            setState(repay.data);
            console.log(repay.data);
		};
		dataFetch();
	}, []);

    const handleSubmit = (event) => {

        let post_repay_item = {};
        event.preventDefault();

        post_repay_item.title = event.target.elements.title.value;
        post_repay_item.getBy = event.target.elements.getBy.value;
        post_repay_item.setBy = event.target.elements.setBy.value;
        post_repay_item.amount = event.target.elements.amount.value;

        const dataFetch = async () => {

            let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			let raw = JSON.stringify({
				"title": post_repay_item.title,
				"get_by": post_repay_item.getBy,
				"set_by": post_repay_item.setBy,
				"amount": post_repay_item.amount,
			});

			let requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: raw,
				redirect: 'follow'
			};

			fetch("https://cstp62ov.directus.app/items/repay", requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));
		    // set state when the data received
		};

        dispatch(increment(post_repay_item));
        repay.push(post_repay_item)
		dataFetch();
    };

    return (
        isShowingAddRepay
            ? ReactDOM.createPortal(
                <>
                    <div className="modal-overlay">
                        <div className="modal-wrapper">
                            <div className="modal">
                                <div className="modal-header">
                                    <h4>Nouveau remboursement</h4>
                                    <button
                                        type="button"
                                        className="modal-close-button"
                                        onClick={hide}
                                    >
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" placeholder="Titre remboursement" id="title"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="getBy">Receveur</label>
                                            <select id="getBy">
                                                {repay.map((value, index) => {
                                                    return <option key={index} value={value.name}>{value.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="setBy">Donneur</label>
                                            <select id="setBy">
                                                {repay.map((value, index) => {
                                                    return <option key={index} value={value.name}>{value.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" id="amount"/>
                                        </div>
                                        <button type="submit">Envoyer</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx="true">{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1040;
              background-color: rgba(0, 0, 0, 0.5);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1050;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: #fff;
              position: relative;
              margin: auto;
              border-radius: 5px;
              max-width: 500px;
              width: 80%;
              padding: 1rem;
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .modal-close-button {
              font-size: 1.4rem;
              font-weight: 700;
              color: #000;
              cursor: pointer;
              border: none;
              background: transparent;
            }
            .form-group {
                margin-top: 10px;
              }
          `}</style>
                </>,
                document.body
            )
            : null
    )
}

export default ModalAddRepay;