import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import CategoryMenu from "@/views/CategoryMenu/CategoryMenu";
import Settings from "@/views/Settings/Settings";
import Loading from "@/views/Loading/Loading";
import Quiz from "@/views/Quiz/Quiz";
import Error from "@/views/Error/Error";
import Winner from "@/views/Winner/Winner";
import Loser from "@/views/Loser/Loser";

const GameView = ({ isGameStarted }) => {
  const { currentView } = useSelector(state => state.view);

  if (!isGameStarted) return null;

  switch (currentView) {
    case "category":
      return <CategoryMenu />;
    case "setting":
      return <Settings />;
    case "loading":
      return <Loading />;
    case "quiz":
      return <Quiz />;
    case "error":
      return <Error />;
    case "winner":
      return <Winner />;
    case "loser":
      return <Loser />;
    default:
      return null;
  }
};

GameView.propTypes = {
  isGameStarted: PropTypes.bool.isRequired,
};

export default GameView;
