import fs from "node:fs";
import path from "node:path";
import { music } from "./generateMusic.js";

const moveMusic = () => {
  const dest = path.join("song");

  for (let i = 0; i < music.length; i++) {
    const [artistRow] = music[i].split(" - ");
    const artist = artistRow.trim();
    const folder = path.join(dest, artist);
    const isExist = fs.existsSync(folder);

    if (!isExist) {
      fs.mkdirSync(folder);
    }

    const filename = `${music[i]}.mp3`;
    if (fs.existsSync(path.join(dest, filename))) {
      fs.renameSync(path.join(dest, filename), path.join(folder, filename));
    }
  }
};

export default moveMusic;
