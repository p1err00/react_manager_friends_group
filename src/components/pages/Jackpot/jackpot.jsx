import React, { useEffect, useState } from "react";
import { Title } from "../../../components/atoms/Title/Title";
import { Container } from "../../../components/atoms/Container/Container";
import { Text } from "../../../components/atoms/Text/text.jsx";
import { List } from "../../../components/atoms/List/list_jackpot.jsx";
import ModalAddJackpot from "../../mollecules/modals/modal_jackpot/add_jackpot";
import useModalAdd from "../../hooks/useModalAddJackpot";
import ModalAddJackpotHistory from "../../mollecules/modals/modal_jackpot/jackpot_history";
import useModalAddHistory from "../../hooks/useModalAddJackpotHistory";


export const Jackpot = ({...props}) => {

    const [ items_jackpot, setState ] = useState([]);
    const [ items_jackpot_history, setStateHistory ] = useState([]);
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
          console.log(items_jackpot.data);
        };
        dataFetch();

        const getMoneyByJackpot = async () => {
            const items_jackpot_history = await (
              // Get item jackpot_history by id_jackpot 
              await fetch(
                `https://cstp62ov.directus.app/items/jackpot_history`
              )
            ).json();
            setStateHistory(items_jackpot_history.data)
          console.log(items_jackpot_history.data);
        };
        getMoneyByJackpot()
      }, []);

    return (
      <div className="jackpot" id="jackpot">
        <Container
          direction={"column"}
          backgroundColor="yellow"
          padding="20"
        >
          <Title title="Cagnottes"></Title>
          <Text contentText={"Liste des cagnottes"}></Text>

          <List
            items={items_jackpot}
          ></List>

          <Container
            direction={"row"}
          >
            <button className="modal-toggle" onClick={toggleAdd}>
              Add
            </button>
            <ModalAddJackpot isShowingAddJackpot={isShowingAddJackpot} hide={toggleAdd} />
            
            <button className="modal-toggle" onClick={toggleAddHistory}>
              Set money
            </button>
            <ModalAddJackpotHistory isShowingAddJackpotHistory={isShowingAddJackpotHistory} hide={toggleAddHistory} jackpots={items_jackpot}/>
            
          </Container>

        </Container>

        <style jsx="true">{`
          .jackpot {
          }
        `}
        </style>
      </div>
    )
}

