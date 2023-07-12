const BASE_URL = "https://opentdb.com/api.php?";
const QUIZ_TYPE = "multiple";

const getFinalQuizURL = ({ categoryId, questionsLength, difficultyLevel }) => {
  return `${BASE_URL}amount=${questionsLength}&category=${categoryId}&difficulty=${difficultyLevel}&type=${QUIZ_TYPE}`;
};

export const fetchQuestions = async quizConfig => {
  const finalQuizURL = getFinalQuizURL(quizConfig);

  const response = await fetch(finalQuizURL);

  if (!response.ok) throw new Error("Could not fetch quiz questions !");

  const data = await response.json();

  return data;
};
