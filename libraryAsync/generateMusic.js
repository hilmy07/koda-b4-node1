import fs from "node:fs/promises";
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

const generateMusic = async () => {
  const dest = path.join("song");

  try {
    await fs.mkdir(dest, { recursive: true });

    const tasks = music.map((item) => {
      const filename = `${item}.mp3`;
      return fs.writeFile(path.join(dest, filename), "");
    });

    await Promise.all(tasks);

    return `Sukses membuat ${music.length} file di folder '${dest}'`;
  } catch (err) {
    throw new Error(`Gagal generate music: ${err.message}`);
  }
};

export default generateMusic;
