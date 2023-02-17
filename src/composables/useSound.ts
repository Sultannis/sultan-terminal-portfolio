import { Howl } from "howler";
import sound from "@/assets/audio/static-noise.ogg";
import glitchSounds from "@/assets/audio/glitch-sounds.mp3";

const startStaticNoise = () => {
  const staticHoise = new Howl({
    src: [sound],
    loop: true,
    volume: 0.8,
    onplay() {
      staticHoise.fade(0, 1, 1000);
    },
  });

  staticHoise.play();
};

const useGlitchSound = () => {
  const glitchSound = new Howl({
    src: [glitchSounds],
    loop: true,
    volume: 0.3,
  });

  let soundId: number = 0;

  const startGlitchSound = () => {
    if (!soundId) {
      soundId = glitchSound.play();
    } else {
      glitchSound.play(soundId);
    }
  };

  const stopGlitchSound = () => {
    glitchSound.pause(soundId);
  };

  return { startGlitchSound, stopGlitchSound };
};

export { startStaticNoise, useGlitchSound };
