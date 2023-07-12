import { viewActions } from "@/store/slices/view";
import { configActions } from "@/store/slices/config";

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

      console.log(quizQuestions);
    } catch (errors) {
      console.error(errors);
    }
  };
};
