import fs from "node:fs/promises";
import path from "node:path";
import { music } from "./generateMusic.js";

const moveMusic = async () => {
  const dest = path.join("song");

  try {
    for (let i = 0; i < music.length; i++) {
      const [artistRow] = music[i].split(" - ");
      const artist = artistRow.trim();
      const folder = path.join(dest, artist);

      // buat folder artist kalau belum ada
      await fs.mkdir(folder, { recursive: true });

      const filename = `${music[i]}.mp3`;
      const sourcePath = path.join(dest, filename);
      const targetPath = path.join(folder, filename);

      try {
        await fs.access(sourcePath);
        await fs.rename(sourcePath, targetPath);
        console.log(`Moved: ${filename} -> ${folder}`);
      } catch {
        console.log(`Skip (not found): ${filename}`);
      }
    }

    return `Semua file sudah dipindahkan ke folder artis masing-masing`;
  } catch (err) {
    throw new Error(`Gagal move music: ${err.message}`);
  }
};

export default moveMusic;
