import { useMemo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import randomizeOptions from "@/utils/randomizeOptions";
import getDecodedHtmlEntityValue from "@/utils/getDecodedHtmlEntityValue";

import { quizActions } from "@/store/slices/quiz";

const QuizBlock = ({ currentQuestion, setIsOptionSelected }) => {
  const dispatch = useDispatch();

  const {
    question,
    incorrect_answers: incorrectAnswers,
    correct_answer: correctAnswer,
  } = currentQuestion;

  const randomOptions = useMemo(
    () => randomizeOptions([...incorrectAnswers, correctAnswer]),
    [incorrectAnswers, correctAnswer]
  );

  const handleOptionChange = option => {
    if (option === correctAnswer) dispatch(quizActions.updateScore());

    setIsOptionSelected(true);
  };

  return (
    <div className="quiz-block">
      <p className="question">{getDecodedHtmlEntityValue(question)}</p>
      <ul className="options-list">
        {randomOptions.map(option => (
          <li
            onClick={handleOptionChange.bind(null, option)}
            key={option}
            className="option"
            role="button"
            tabIndex={-1}
          >
            {getDecodedHtmlEntityValue(option)}
          </li>
        ))}
      </ul>
    </div>
  );
};

QuizBlock.propTypes = {
  currentQuestion: PropTypes.shape([PropTypes.shape({})]).isRequired,
  setIsOptionSelected: PropTypes.func.isRequired,
};

export default QuizBlock;
