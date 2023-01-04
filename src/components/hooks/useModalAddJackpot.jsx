import { useState } from "react";

const useModalAdd = () => {
  const [isShowingAddJackpot, setIsShowing] = useState(false);

  function toggleAdd() {
    setIsShowing(!isShowingAddJackpot);
  }

  return {
    isShowingAddJackpot,
    toggleAdd
  };
};

export default useModalAdd;