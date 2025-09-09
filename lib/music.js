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

export default function generateMusic() {
  if (!fs.existsSync("music")) {
    fs.mkdirSync("music");
  } else {
    console.log("folder 'music' sudah ada!");
  }

  for (let i = 0; i < music.length; i++) {
    let filename = music[i];
    if (!filename.endsWith(".mp3")) {
      filename += ".mp3";
    }
    const filePath = path.join("music", filename);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "");
    } else {
      console.log(`${music[i]} sudah ada di folder music.`);
    }
  }
}
