import { Howl } from "howler";
import sound from "@/assets/audio/static-noise.ogg";

const startStaticNoise = () => {
  const staticHoise = new Howl({
    src: [sound],
    loop: true,
  });

  staticHoise.play();
};

export { startStaticNoise };
