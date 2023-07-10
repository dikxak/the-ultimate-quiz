import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import CategoryMenu from "@/views/CategoryMenu/CategoryMenu";
import Settings from "@/views/Settings/Settings";

const GameView = ({ isGameStarted }) => {
  const { currentView } = useSelector(state => state.view);

  if (!isGameStarted) return null;

  switch (currentView) {
    case "category":
      return <CategoryMenu />;
    case "setting":
      return <Settings />;
    default:
      return null;
  }
};

GameView.propTypes = {
  isGameStarted: PropTypes.bool.isRequired,
};

export default GameView;
