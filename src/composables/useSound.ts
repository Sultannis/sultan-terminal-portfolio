import { Howl } from "howler";
import staticNoiseRecording from "@/assets/audio/static-noise.ogg";
import glitchSoundsRecording from "@/assets/audio/glitch-sounds.mp3";
import keyPressSoundRecording from "@/assets/audio/key-press-sound.m4a?url";
import typingSoundsRecording from "@/assets/audio/keyboard-typing-sounds.m4a?url";
import keyboardDeletingSoundsRecording from "@/assets/audio/keyboard-deleting-sounds.m4a?url";

const startStaticNoise = () => {
  let started = false;
  const staticNoise = new Howl({
    src: [staticNoiseRecording],
    loop: true,
    volume: 0.8,
    onplay(soundId) {
      if (!started) {
        staticNoise.fade(0, 1, 2000, soundId);
        started = true;
      }
    },
  });

  setTimeout(() => {
    staticNoise.play();
  }, 800);
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
  const typingSounds = new Howl({
    src: [typingSoundsRecording],
    loop: true,
    volume: 1,
  });

  const keyboardDeletingSounds = new Howl({
    src: [keyboardDeletingSoundsRecording],
    loop: true,
    volume: 0.7,
  });

  let soundId: number = 0;

  const startTypingSound = () => {
    if (!soundId) {
      soundId = typingSounds.play();
    } else {
      typingSounds.play(soundId);
    }
  };

  const stopTypingSound = () => {
    typingSounds.pause(soundId);
  };

  const startDeletingSound = () => {
    keyboardDeletingSounds.play();
  };

  const stopDeletingSound = () => {
    keyboardDeletingSounds.stop();
  };

  return {
    startTypingSound,
    stopTypingSound,
    startDeletingSound,
    stopDeletingSound,
  };
};

const playKeyPressSound = () => {
  const keyPressSound = new Howl({
    src: [keyPressSoundRecording],
  });

  keyPressSound.play();
};

export { startStaticNoise, useGlitchSound, useTypingSound, playKeyPressSound };
