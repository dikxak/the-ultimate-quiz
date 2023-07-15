/**
 *
 * @param {Array} allOptions - Array with all the options
 * @returns Randomized options using Fisher-Yates shuffle algorithm
 */

export default allOptions => {
  // Generate array with empty values of the length allOptions.
  const randomOptions = [...allOptions];
  let currentIndex = allOptions.length - 1;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);

    // Swap the element
    [randomOptions[currentIndex], randomOptions[randomIndex]] = [
      randomOptions[randomIndex],
      randomOptions[currentIndex],
    ];

    currentIndex--;
  }

  return randomOptions;
};
