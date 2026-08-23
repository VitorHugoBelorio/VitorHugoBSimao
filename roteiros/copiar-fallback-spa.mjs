import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const diretorioDist = resolve("dist");

await copyFile(resolve(diretorioDist, "index.html"), resolve(diretorioDist, "404.html"));
