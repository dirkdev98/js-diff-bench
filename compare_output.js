import diff from "fast-diff";
import { deepEqual } from "node:assert/strict";
import diffmatchpatch from "diff-match-patch";
import { readFileSync } from "node:fs";

const num = process.argv[2];

const input = readFileSync(`./samples/${num}_in.txt`, "utf-8");
const output = readFileSync(`./samples/${num}_out.txt`, "utf-8");

const dmp = new diffmatchpatch().diff_main(input, output)
const fd = diff(input, output)

deepEqual(dmp, fd)

console.log(dmp)
