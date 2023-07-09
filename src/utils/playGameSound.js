import { Howl } from "howler";

export default soundFileSrc => {
  const sound = new Howl({
    src: [soundFileSrc],
  });

  sound.play();
};
