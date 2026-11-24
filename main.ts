// Vending Machine Pickup Line — one line, spoken by the machine itself.
// Small-snacks wordplay up front, and the punch lands in the last few words:
// the machine offers to jam its own coil for you. Short enough to say in
// one breath, charming rather than creepy — the coil does the flirting.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I don't do small talk, I do small snacks — but for you I'd jam my own coil.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
