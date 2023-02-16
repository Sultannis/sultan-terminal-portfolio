import { Howl } from "howler";
import sound from "@/assets/audio/static-noise.ogg";
import glitchSounds from "@/assets/audio/glitch-sounds.mp3";

const startStaticNoise = () => {
  const staticHoise = new Howl({
    src: [sound],
    loop: true,
  });

  staticHoise.play();
};

const useGlitchSound = () => {
  const glitchSound = new Howl({
    src: [glitchSounds],
    loop: true,
    volume: 0.5,
  });

  const startGlitchSound = () => {
    glitchSound.play();
  };
  const stopGlitchSound = () => {
    glitchSound.pause();
  };

  return { startGlitchSound, stopGlitchSound };
};

export { startStaticNoise, useGlitchSound };
