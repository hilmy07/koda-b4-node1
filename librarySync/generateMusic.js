import fs from "node:fs";
import path from "node:path";

export const music = [
  "dewa 19 - pupus",
  "dewa 19 - risalah hati",
  "dewa 19 - separuh nafas",
  "dewa 19 - cinta gila",
  "linkin park - in the end",
  "linkin park - numb",
  "linkin park - burn it down",
  "avenged sevenfold - sieze the day",
  "avenged sevenfold - so far away",
  "guns n roses - sweet child",
];

const generateMusic = () => {
  const dest = path.join("song");
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  for (let i = 0; i < music.length; i++) {
    const filename = `${music[i]}.mp3`;
    fs.writeFileSync(path.join(dest, filename), "");
  }
};

export default generateMusic;
