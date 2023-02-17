import { useGlitchSound } from "./useSound";
import type { PowerGlitchOptions, RecursivePartial } from "powerglitch";

const { startGlitchSound, stopGlitchSound } = useGlitchSound();

const powerGlitchOptions: RecursivePartial<PowerGlitchOptions> = {
  playMode: "manual",
  timing: { duration: 1500, iterations: 1 },
  shake: {
    velocity: 19,
    amplitudeX: 0.25,
    amplitudeY: 0.02,
  },
  slice: {
    count: 5,
    velocity: 11,
    minHeight: 0.01,
    maxHeight: 0.09,
    hueRotate: true,
  },
};

const usePageGlitches = (
  startGlitch: (() => void) | undefined,
  stopGlitch: (() => void) | undefined
) => {
  if (!startGlitch || !stopGlitch) {
    return;
  }

  const functionToCall = () => {
    const glitchSpan = 500 + Math.floor(Math.random() * 1000);

    startGlitch();
    startGlitchSound();

    setTimeout(() => {
      stopGlitch();
      stopGlitchSound();

      const randomDelay = 15000 + Math.floor(Math.random() * 30000);

      setTimeout(functionToCall, randomDelay);
    }, glitchSpan);
  };

  setTimeout(functionToCall, 3000);
};

export { usePageGlitches, powerGlitchOptions };
