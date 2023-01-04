import React from "react";
import ReactDOM from "react-dom";

const ModalEditActivity = ({ isShowingEditActivity, hide, activity }) =>
	isShowingEditActivity
		? ReactDOM.createPortal(
			<>
				<div className="modal-overlay">
					<div className="modal-wrapper">
						<div className="modal">
							<div className="modal-header">
								<h4>Modifier</h4>
								<button
									type="button"
									className="modal-close-button"
									onClick={hide}
								>
									<span>&times;</span>
								</button>
							</div>
							<form>
								<div className="form-group">
									<input type="text" placeholder={activity.title} id="title" />
								</div>
								<div className="form-group">
									<label htmlFor="date_start">Date de debut</label>
									<input type="date" placeholder={activity.date_start} id="date_start" />
								</div>
								<div className="form-group">
									<label htmlFor="data_end">Date de fin</label>
									<input type="date" placeholder={activity.date_end} id="date_end" />
								</div>
								<div className="form-group">
									<input type="submit" value="Save" />
								</div>
							</form>
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
				`}</style>
					</>,
					document.body
				)
				: null;

export default ModalEditActivity;