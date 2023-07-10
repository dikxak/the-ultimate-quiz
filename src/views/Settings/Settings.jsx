import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import Select from "@/components/Select/Select";

import scale from "@/assets/icons/scale.svg";
import speedoMeter from "@/assets/icons/speedo-meter.svg";
import buttonClick from "@/assets/sounds/button-click.mp3";

import playGameSound from "@/utils/playGameSound";

import { QUESTION_NUMBERS_OPTIONS } from "@/constants/settings";
import { DIFFICULTY_LEVELS } from "@/constants/settings";

const Settings = () => {
  const handleFormSubmit = e => {
    e.preventDefault();

    playGameSound(buttonClick);
  };

  return (
    <Container className="settings-container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <div>
            <img src={scale} alt="Ruler" />
            <span>Number of questions</span>
          </div>

          <Select
            name="number-of-questions"
            id="number-of-questions"
            options={QUESTION_NUMBERS_OPTIONS}
          />
        </div>

        <div className="form-group">
          <div>
            <img src={speedoMeter} alt="Speedo Meter" />
            <span>Difficulty level</span>
          </div>

          <Select
            name="difficulty-level"
            id="difficulty-level"
            options={DIFFICULTY_LEVELS}
          />
        </div>
        <Button size="medium" variant="outline" type="submit" isPill>
          Next
        </Button>
      </form>
    </Container>
  );
};

export default Settings;
