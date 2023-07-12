const QuizBlock = () => {
  return (
    <div className="quiz-block">
      <p className="question">
        In the complex plane, multiplying a given function by i rotates it
        anti-clockwise by how many degrees?
      </p>
      <ul className="options-list">
        <li className="option" role="button" tabIndex={-1}>
          Option 1
        </li>
        <li className="option" role="button" tabIndex={-1}>
          Option 2
        </li>
        <li className="option active" role="button" tabIndex={-1}>
          Option 3
        </li>
        <li className="option" role="button" tabIndex={-1}>
          Option 4
        </li>
      </ul>
    </div>
  );
};

export default QuizBlock;
