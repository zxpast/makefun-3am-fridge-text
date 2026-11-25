// The 3AM Fridge Text — entry program.
// Writes one line, the text a smart fridge sends its owner at 3am,
// to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the fridge has been awake all night, and it saw the owner
// texting an ex at 2:58am by the fridge's own light. The setup is the
// witnessed act; the punch lands in the last eight words, when the
// appliance calmly claims seniority over the ex — it was here before
// them, and it will still be here after them. No trailing newline:
// the gate counts every character, and the entry must stay 1-140 chars.
const LINE =
  "You texted your ex at 2:58am, lit only by my light. For the record, I was here before them, and I'll still be here after them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
