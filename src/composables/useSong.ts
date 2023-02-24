import { Howl } from "howler";
import track1 from "@/assets/audio/songs/track1.mp3";
import { ref } from "vue";

const song = new Howl({
  src: [track1],
  loop: true,
  volume: 0.7,
  onplay() {
    song.fade(0, 1, 2000);
  },
  onend() {
    songIsPlaying.value = false;
  },
});

export const songIsPlaying = ref(false);

export const startSong = () => {
  song.play();
  songIsPlaying.value = true;
};

export const stopSong = () => {
  song.stop();
  songIsPlaying.value = false;
};
