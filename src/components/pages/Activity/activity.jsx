import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { Text } from "../../atoms/Text/text";
import { Title } from "../../atoms/Title/Title";
import { Container } from "../../atoms/Container/Container";
import { List } from "../../atoms/List/list_activity";
import ModalAddActivity from "../../mollecules/modals/modal_activity/add_activity";
import useModalAdd from "../../hooks/useModalAddActivity";
import { useSelector, useDispatch } from "react-redux";
import { addActivite } from "../../../store/index"


export const Activity = ({ ...props }) => {

	const [items_activity, setState] = useState();
	const { isShowingAddActivity, toggleAdd } = useModalAdd();
	const [activity, setActivity] = useState();

	const addActivity = () => {
		setActivity(activity)
	}

	const activitiesSlice = useSelector((state) => {
		return state.activities
	});

	useEffect(() => {
		// fetch data
		const dataFetch = async () => {
			const items_activity = await (
				await fetch(
					"https://cstp62ov.directus.app/items/activities"
				)
			).json();
			// set state when the data received
			setState(items_activity);

		};
		dataFetch();
	}, []);

	const dispatch = useDispatch();

	return (
		<div id="activity">
			<Container
				direction={"column"}
				backgroundColor="#e0f3ec"
				padding="20"
				margin="20"
			>
				<Title
					title="Activites"
				></Title>
				<button className="modal-toggle" onClick={toggleAdd}>
					Ajouter une activité
				</button>

				<ModalAddActivity isShowingAddActivity={isShowingAddActivity} hide={toggleAdd}
					addActivity={() => {
						dispatch(addActivite(activity))
					}} />
				<Text
					contentText={"Liste des activitiés"}
					backgroundColor="grey"
				></Text>
				<List
					items={items_activity}
				></List>

				<Container
					direction={"row"}
				>

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

				.modal-toggle:hover {
					margin: 5px;
				}
			`}

			</style>
		</div>
	)
}

Activity.propTypes = {
	backgroundColor: PropTypes.string,
	size: PropTypes.number
}

