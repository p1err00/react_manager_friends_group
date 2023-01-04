import { useState } from "react";

const useModalEdit = () => {
  const [isShowingEditActivity, setIsShowing] = useState(false);

  function toggleEdit() {
    setIsShowing(!isShowingEditActivity);
  }

  return {
    isShowingEditActivity,
    toggleEdit
  };
};

export default useModalEdit;