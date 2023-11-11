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

      if (!quizQuestions.results.length) {
        dispatch(
          viewActions.updateViewOnError({
            errorMessage:
              "There are not enough questions for this category. Please select another question length to play the game.",
          })
        );

        return;
      }

      dispatch(viewActions.updateView("quiz"));
      dispatch(quizActions.updateQuestions(quizQuestions.results));
    } catch (errors) {
      dispatch(
        viewActions.updateViewOnError({
          errorMessage: "Something went wrong. Please try again!",
        })
      );
    }
  };
};
