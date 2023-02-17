import { Howl } from "howler";
import staticNoiseRecording from "@/assets/audio/static-noise.ogg";
import glitchSoundsRecording from "@/assets/audio/glitch-sounds.mp3";
import keyPressSoundRecording from "@/assets/audio/key-press-sound.mp3";

const keyPressSound = new Howl({
  src: [keyPressSoundRecording],
});

const startStaticNoise = () => {
  const staticNoise = new Howl({
    src: [staticNoiseRecording],
    loop: true,
    volume: 0.8,
    onplay() {
      staticNoise.fade(0, 1, 1000);
    },
  });

  staticNoise.play();
};

const useGlitchSound = () => {
  const glitchSound = new Howl({
    src: [glitchSoundsRecording],
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

const playKeyPressSound = () => {
  keyPressSound.play();
};

export { startStaticNoise, useGlitchSound, playKeyPressSound };
