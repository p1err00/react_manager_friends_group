import { useState } from "react";

const useModalEdit = () => {
  const [isShowingEditRepay, setIsShowing] = useState(false);

  function toggleEdit() {
    setIsShowing(!isShowingEditRepay);
  }

  return {
    isShowingEditRepay,
    toggleEdit
  };
};

export default useModalEdit;