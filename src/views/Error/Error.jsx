import { useDispatch, useSelector } from "react-redux";

import Container from "@/components/Container/Container";
import errorIcon from "@/assets/icons/error-icon.svg";
import Button from "@/components/Button/Button";

import buttonClick from "@/assets/sounds/button-click.mp3";

import { viewActions } from "@/store/slices/view";

import playGameSound from "@/utils/playGameSound";

const Error = () => {
  const { errorMessage } = useSelector(state => state.view);
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(viewActions.updateViewOnBack());

    playGameSound(buttonClick);
  };

  return (
    <Container className="error-container">
      <img className="error-icon" src={errorIcon} alt="Exclamation Mark Icon" />

      <p className="error-description">{errorMessage}</p>

      <Button onClick={handleBack} size="medium" isPill variant="primary">
        <span> &larr;</span> Back
      </Button>
    </Container>
  );
};

export default Error;
