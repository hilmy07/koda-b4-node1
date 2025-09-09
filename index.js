import generateMusic, { music } from "./lib/music.js";
import fs from "node:fs";
import path from "node:path";

generateMusic();

const baseFolder = "music";
const createFolder = () => {
  for (let i = 0; i < music.length; i++) {
    const [artistRow, titleRow] = music[i].split(" - ");
    const artist = artistRow.trim();

    const artistFolder = path.join(baseFolder, artist);
    if (!fs.existsSync(artistFolder)) {
      fs.mkdirSync(artistFolder);
    }
  }
};
// pisahkan

createFolder();

function moveMusicFiles() {
  for (let i = 0; i < music.length; i++) {
    const [artistRow, titleRow] = music[i].split(" - ");
    const artist = artistRow.trim();
    const title = titleRow.trim();

    const oldPath = path.join(baseFolder, `${artist} - ${title}.mp3`);
    const newPath = path.join(baseFolder, artist, `${title}.mp3`);

    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ ${title}.mp3 dipindahkan ke folder ${artist}`);
    } else {
      console.log(`⚠️ File ${oldPath} tidak ditemukan`);
    }
  }
}

moveMusicFiles();
