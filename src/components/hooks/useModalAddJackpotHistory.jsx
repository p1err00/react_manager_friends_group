import { useState } from "react";

const useModalAddHistory = () => {
  const [isShowingAddJackpotHistory, setIsShowing] = useState(false);

  function toggleAddHistory() {
    setIsShowing(!isShowingAddJackpotHistory);
  }

  return {
    isShowingAddJackpotHistory,
    toggleAddHistory
  };
};

export default useModalAddHistory;