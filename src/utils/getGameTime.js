import { DIFFICULTY_LEVELS } from "@/constants/quiz";

export default (difficulty, questionsLength) => {
  switch (questionsLength) {
    case 10: {
      if (difficulty === DIFFICULTY_LEVELS.EASY)
        return { minutes: 3, seconds: 0 };
      else if (difficulty === DIFFICULTY_LEVELS.MEDIUM)
        return { minutes: 5, seconds: 0 };
      else return { minutes: 7, seconds: 0 };
    }

    case 15: {
      if (difficulty === DIFFICULTY_LEVELS.EASY)
        return { minutes: 5, seconds: 0 };
      else if (difficulty === DIFFICULTY_LEVELS.MEDIUM)
        return { minutes: 7, seconds: 0 };
      else return { minutes: 10, seconds: 0 };
    }

    case 20: {
      if (difficulty === DIFFICULTY_LEVELS.EASY)
        return { minutes: 7, seconds: 0 };
      else if (difficulty === DIFFICULTY_LEVELS.MEDIUM)
        return { minutes: 10, seconds: 0 };
      else return { minutes: 15, seconds: 0 };
    }

    case 25: {
      if (difficulty === DIFFICULTY_LEVELS.EASY)
        return { minutes: 10, seconds: 0 };
      else if (difficulty === DIFFICULTY_LEVELS.MEDIUM)
        return { minutes: 15, seconds: 0 };
      else return { minutes: 20, seconds: 0 };
    }

    case 30: {
      if (difficulty === DIFFICULTY_LEVELS.EASY)
        return { minutes: 15, seconds: 0 };
      else if (difficulty === DIFFICULTY_LEVELS.MEDIUM)
        return { minutes: 20, seconds: 0 };
      else return { minutes: 25, seconds: 0 };
    }

    default:
      return { minutes: 0, seconds: 0 };
  }
};
