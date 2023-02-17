import { Howl } from "howler";
import staticNoiseRecording from "@/assets/audio/static-noise.ogg";
import glitchSoundsRecording from "@/assets/audio/glitch-sounds.mp3";
import keyPressSoundRecording from "@/assets/audio/key-press-sound.mp3";
import keyboardTypingSounds from "@/assets/audio/keyboard-typing-sounds.m4a";

const keyPressSound = new Howl({
  src: [keyPressSoundRecording],
});

const startStaticNoise = () => {
  let started = false;
  const staticNoise = new Howl({
    src: [staticNoiseRecording],
    loop: true,
    volume: 0.8,
    onplay(soundId) {
      if (!started) {
        staticNoise.fade(0, 1, 1000, soundId);
        started = true;
      }
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

const useTypingSound = () => {
  const typingSound = new Howl({
    src: [keyboardTypingSounds],
    loop: true,
  });

  let soundId: number = 0;

  const startTypingSound = () => {
    if (!soundId) {
      soundId = typingSound.play();
    } else {
      typingSound.play(soundId);
    }
  };

  const stopTypingSound = () => {
    typingSound.pause(soundId);
  };

  return { startTypingSound, stopTypingSound };
};

const playKeyPressSound = () => {
  keyPressSound.play();
};

export { startStaticNoise, useGlitchSound, useTypingSound, playKeyPressSound };
