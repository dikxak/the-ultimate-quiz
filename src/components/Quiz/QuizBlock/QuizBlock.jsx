import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import randomizeOptions from "@/utils/randomizeOptions";
import getDecodedHtmlEntityValue from "@/utils/getDecodedHtmlEntityValue";

import { quizActions } from "@/store/slices/quiz";

const QuizBlock = ({
  currentQuestion,
  setIsOptionSelected,
  quizBlockClassNames,
  setQuizBlockClassNames,
}) => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("");

  const {
    question,
    incorrect_answers: incorrectAnswers,
    correct_answer: correctAnswer,
  } = currentQuestion;
  const { container: containerClassName, child: optionClassName } =
    quizBlockClassNames;

  const randomOptions = useMemo(
    () => randomizeOptions([...incorrectAnswers, correctAnswer]),
    [incorrectAnswers, correctAnswer]
  );

  const handleOptionChange = option => {
    if (option === correctAnswer) dispatch(quizActions.updateScore());

    setSelectedOption(option);
    setIsOptionSelected(true);
    setQuizBlockClassNames({
      container: "disabled",
      child: "pe-none",
    });
  };

  return (
    <div className="quiz-block">
      <p className="question">{getDecodedHtmlEntityValue(question)}</p>
      <ul className={`options-list ${containerClassName}`}>
        {randomOptions.map(option => {
          const activeClassName = selectedOption === option ? "active" : "";

          return (
            <li
              onClick={handleOptionChange.bind(null, option)}
              key={option}
              className={`option ${optionClassName} ${activeClassName}`}
              role="button"
              tabIndex={-1}
            >
              {getDecodedHtmlEntityValue(option)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

QuizBlock.propTypes = {
  currentQuestion: PropTypes.shape([PropTypes.shape({})]).isRequired,
  setIsOptionSelected: PropTypes.func.isRequired,
  quizBlockClassNames: PropTypes.string.isRequired,
  setQuizBlockClassNames: PropTypes.func.isRequired,
};

export default QuizBlock;
