import { useState } from "react";

const useOpenModel = () => {
  const [openModel, setOpenModel] = useState(false);
  const handelClick = (e) => {
  setOpenModel(!openModel);
};
  return { handelClick, openModel, setOpenModel };
};
export default useOpenModel;