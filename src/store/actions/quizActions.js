import { viewActions } from "@/store/slices/view";
import { configActions } from "@/store/slices/config";
import { quizActions } from "@/store/slices/quiz";

import { fetchQuestions } from "@/apis/api";

export const fetchQuizQuestions = quizConfig => {
  return async dispatch => {
    const { questionsLength, difficultyLevel } = quizConfig;

    try {
      dispatch(viewActions.updateView("loading"));
      dispatch(
        configActions.updateConfig({ questionsLength, difficultyLevel })
      );

      const quizQuestions = await fetchQuestions(quizConfig);

      dispatch(viewActions.updateView("quiz"));
      dispatch(quizActions.updateQuiz(quizQuestions.results));
    } catch (errors) {
      // TODO: Handle error logic
    }
  };
};
