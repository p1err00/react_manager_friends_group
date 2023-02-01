import React, { useEffect, useState } from "react";
import { Title } from "../../../components/atoms/Title/Title";
import { Container } from "../../../components/atoms/Container/Container";
import { Text } from "../../../components/atoms/Text/text.jsx";
import { List } from "../../../components/atoms/List/list_jackpot.jsx";
import ModalAddJackpot from "../../mollecules/modals/modal_jackpot/add_jackpot";
import useModalAdd from "../../hooks/useModalAddJackpot";
import ModalAddJackpotHistory from "../../mollecules/modals/modal_jackpot/jackpot_history";
import useModalAddHistory from "../../hooks/useModalAddJackpotHistory";
import { ErrorAlerte } from "../../atoms/alerts/errorAlert";


export const Jackpot = ({ ...props }) => {

	const [items_jackpot, setState] = useState([]);
	const { isShowingAddJackpot, toggleAdd } = useModalAdd();
	const { isShowingAddJackpotHistory, toggleAddHistory } = useModalAddHistory();

	useEffect(() => {

		const dataFetch = async () => {
			const items_jackpot = await (
				await fetch(
					"https://cstp62ov.directus.app/items/jackpots"
				)
			).json();

			setState(items_jackpot.data);
		};
		dataFetch();

	}, []);

	return (
		<div className="jackpot" id="jackpot">
			<ErrorAlerte></ErrorAlerte>
			<Container
				direction={"column"}
				backgroundColor="#cfecf0"
				padding="20"
				margin="20"
			>
				<Title title="Cagnottes"></Title>
				<button className="modal-toggle" onClick={toggleAdd}>
					Ajouter une cagnotte
				</button>
				<ModalAddJackpot isShowingAddJackpot={isShowingAddJackpot} hide={toggleAdd} />

				<Text contentText={"Liste des cagnottes"}></Text>

				<List
					items={items_jackpot}
				></List>

				<Container
					direction={"row"}
				>
					<button className="modal-toggle" onClick={toggleAddHistory}>
						Donner de la moula
					</button>
					<ModalAddJackpotHistory isShowingAddJackpotHistory={isShowingAddJackpotHistory} hide={toggleAddHistory} jackpots={items_jackpot} />

				</Container>

			</Container>

			<style jsx="true">{`
          .modal-toggle {
			background-color: turquoise;
			cursor: pointer;
			padding: 1rem 2rem;
			margin: 10px;
			text-transform: uppercase;
			border: none;
			height:5vh;
			bottom: 0;
			border-radius: 15px;
		}
        `}
			</style>
		</div>
	)
}

