import diff from "fast-diff";
import { readFileSync } from "node:fs";

const num = process.argv[2];

const input = readFileSync(`./samples/${num}_in.txt`, "utf-8");
const output = readFileSync(`./samples/${num}_out.txt`, "utf-8");

const ROUNDS = input.length < 1024 ? 10 : 2;

for (let i = 0; i < ROUNDS; ++i) {
  diff(input, output);
}
