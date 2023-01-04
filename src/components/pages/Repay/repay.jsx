import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { Title } from "../../../components/atoms/Title/Title.jsx";
import { Container } from "../../../components/atoms/Container/Container";
import { Text } from "../../../components/atoms/Text/text.jsx";
import ModalAddRepay from "../../mollecules/modals/modal_repay/add_repay";
import useModalAdd from "../../hooks/useModalAddRepay";
import { ListRepay } from "../../atoms/List/list_repay.jsx";

export const Repay = ({...props}) => {

    const { backgroundColor, size } = props;
    const [ items_repay, setState ] = useState([]);
    const { isShowingAddRepay, toggleAdd } = useModalAdd();

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const items_repay = await (
            await fetch(
              "https://cstp62ov.directus.app/items/repay"
            )
          ).json();
          setState(items_repay.data);
        };
    
        dataFetch();
      }, []);

    return (
        <div id="repay">
        <Container
          direction={"column"}
          backgroundColor="blue"
          padding="20"
        >
          <Title title="Cagnottes"></Title>
          <Text contentText={"Liste des remboursmeent"}></Text>

          <ListRepay items={items_repay}></ListRepay>

          <Container
            direction={"row"}
          >
            <button className="modal-toggle" onClick={toggleAdd}>
              Add
            </button>

            <ModalAddRepay isShowingAddRepay={isShowingAddRepay} hide={toggleAdd} />

          </Container>

        </Container>
      </div>
    )
}

Repay.propTypes = {
    backgroundColor : PropTypes.string,
    size            : PropTypes.number 
}
