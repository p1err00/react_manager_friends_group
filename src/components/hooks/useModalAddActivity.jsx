import {  useState } from "react";

const useModalAdd = () => {
  const [isShowingAddActivity, setIsShowing] = useState(false);
  const [post_activity_item, postActivity] = useState({});


  function toggleAdd() {
    setIsShowing(!isShowingAddActivity);
  }

  const postActivityAction = () => {

    // fetch data
    const dataFetch = async () => {

      const items_activity = await (
        
        await fetch(
          "https://cstp62ov.directus.app/items/activities", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            data: {
              "title" : post_activity_item.title,
              "date_start" : post_activity_item.date_start,
              "date_end" : post_activity_item.date_end
            }
          },
        )
      );
      console.log(items_activity);

      // set state when the data received
      postActivity(items_activity);
    };
    dataFetch();
 
    
  }

  return {
    isShowingAddActivity,
    post_activity_item,
    postActivityAction,
    toggleAdd
  };
};

export default useModalAdd;