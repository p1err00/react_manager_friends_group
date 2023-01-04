import React from "react";
import ReactDOM from "react-dom";

const ModalAddJackpotHistory = ({ jackpots, isShowingAddJackpotHistory, hide }) => {
    
    const handleSubmit = (event) => {
        
        let post_repay_item = {};
        event.preventDefault();

        post_repay_item.title = event.target.elements.jackpot_id.value;
        post_repay_item.amount = event.target.elements.amount.value;
        post_repay_item.setBy = event.target.elements.setBy.value;

        const dataFetch = async () => {

            let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			let raw = JSON.stringify({
				"amount": post_repay_item.amount,
				"id_jackpot": post_repay_item.id_jackpot,
				"setBy": post_repay_item.setBy
			});

			let requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: raw,
				redirect: 'follow'
			};

			fetch("https://cstp62ov.directus.app/items/jackpot_history", requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));
		    // set state when the data received
        };
        dataFetch();
    };

    return (
        isShowingAddJackpotHistory
            ? ReactDOM.createPortal(    
                <>
                    <div className="modal-overlay">
                        <div className="modal-wrapper">
                            <div className="modal">
                                <div className="modal-header">
                                    <h4>Ajouter argent \ Jackpot</h4>
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
                                        <select id="jackpot_id">
                                            {jackpots.map((value, index) => {
                                                return <option key={index} value={value.id}>{value.title}</option>
                                            })}
                                        </select>
                                        <div className="form-group">
                                            <label htmlFor="">Montant</label>
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

export default ModalAddJackpotHistory;