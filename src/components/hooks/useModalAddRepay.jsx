import {  useState } from "react";

const useModalAdd = () => {
  const [isShowingAddRepay, setIsShowing] = useState(false);
  const [post_repay_item, postRepay] = useState({});


  function toggleAdd() {
    setIsShowing(!isShowingAddRepay);
  }

  const postRepayAction = () => {

    // fetch data
    const dataFetch = async () => {

      const items_repay = await (
        
        await fetch(
          "https://cstp62ov.directus.app/items/repays", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            data: {
              "title" : post_repay_item.title,
              "montant" : post_repay_item.montant,
            }
          },
        )
      );
      console.log(items_repay);

      // set state when the data received
      postRepay(items_repay);
    };
    dataFetch();
  }

  return {
    isShowingAddRepay,
    post_repay_item,
    postRepayAction,
    toggleAdd
  };
};

export default useModalAdd;