import { useGlitchSound } from "./use-sound";

const { startGlitchSound, stopGlitchSound } = useGlitchSound();

const powerGlitchOptions = {
  playMode: "always",
  createContainers: true,
  hideOverflow: false,
  timing: {
    duration: 2650,
  },
  glitchTimeSpan: {
    start: 0,
    end: 1,
  },
  shake: {
    velocity: 19,
    amplitudeX: 0.42,
    amplitudeY: 0,
  },
  slice: {
    count: 5,
    velocity: 11,
    minHeight: 0.01,
    maxHeight: 0.09,
    hueRotate: true,
  },
  pulse: false,
};

const handlePageGlitches = (
  startGlitch: (() => void) | undefined,
  stopGlitch: (() => void) | undefined
) => {
  if (!startGlitch || !stopGlitch) {
    return;
  }

  const functionToCall = () => {
    startGlitch();
    startGlitchSound();

    setTimeout(() => {
      stopGlitch();
      stopGlitchSound();

      const randomDelay = 15000 + Math.floor(Math.random() * 30000);

      setTimeout(functionToCall, randomDelay);
    }, 1000);
  };

  functionToCall();
};

export { handlePageGlitches, powerGlitchOptions };
