import { useDispatch } from "react-redux";

import mouseOverSound from "@/assets/sounds/mouse-over.mp3";
import buttonClick from "@/assets/sounds/button-click.mp3";

import Container from "@/components/Container/Container";
import QuizCategory from "@/components/CategoryMenu/QuizCategory";

import { CATEGORIES } from "@/constants/categoryMenu";

import playGameSound from "@/utils/playGameSound";

import { viewActions } from "@/store/slices/view";
import { configActions } from "@/store/slices/config";

const CategoryMenu = () => {
  const dispatch = useDispatch();

  const handleClick = category => {
    playGameSound(buttonClick);
    dispatch(viewActions.updateView("setting"));
    dispatch(configActions.updateConfig({ category: category.toLowerCase() }));
  };

  const handleMouseOver = () => {
    playGameSound(mouseOverSound);
  };

  return (
    <Container className="grid--3-cols">
      {CATEGORIES.map(({ icon, label }) => (
        <QuizCategory
          onClick={handleClick.bind(null, label)}
          onMouseOver={handleMouseOver}
          key={label}
          icon={icon}
          label={label}
        />
      ))}
    </Container>
  );
};

export default CategoryMenu;
