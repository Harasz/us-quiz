import { Question } from "../interfaces";
import fs from "fs";
import path from "path";

export const getData = async () => {
  const data = fs.readFileSync(path.join(process.cwd(), "utils", "data.csv"));

  const lines = data.toString().split("\n");

  const dd: Question[] = [];

  lines.forEach((line) => {
    const first = line.indexOf(",");
    const second = line.indexOf(",", first + 1);

    if (first <= 0 || second <= 0) {
      return;
    }

    const id = line.slice(0, first);
    const word = line.slice(first + 1, second);
    const description = line.slice(second + 1);

    dd.push({ id, word, description });
  });

  return dd.sort(() => Math.random() - 0.5);
};
