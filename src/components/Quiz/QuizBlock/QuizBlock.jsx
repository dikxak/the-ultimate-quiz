import PropTypes from "prop-types";

import randomizeOptions from "@/utils/randomizeOptions";
import getDecodedHtmlEntityValue from "@/utils/getDecodedHtmlEntityValue";

const QuizBlock = ({ currentQuestion }) => {
  const {
    question,
    incorrect_answers: incorrectAnswers,
    correct_answer: correctAnswer,
  } = currentQuestion;
  const allOptions = [...incorrectAnswers, correctAnswer];
  const randomOptions = randomizeOptions(allOptions);

  return (
    <div className="quiz-block">
      <p className="question">{getDecodedHtmlEntityValue(question)}</p>
      <ul className="options-list">
        {randomOptions.map(option => (
          <li key={option} className="option" role="button" tabIndex={-1}>
            {getDecodedHtmlEntityValue(option)}
          </li>
        ))}
      </ul>
    </div>
  );
};

QuizBlock.propTypes = {
  currentQuestion: PropTypes.shape([PropTypes.shape({})]).isRequired,
};

export default QuizBlock;
