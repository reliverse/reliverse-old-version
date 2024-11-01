import { consola } from "consola";
// import { showReliverseMenu } from "~/prompts/00-showReliverseMenu";

async function main() {
  // await showReliverseMenu();

  consola.warn("✨ Please use one of the following commands instead:");
  consola.info("👉 `npx reliverse` OR `pnpx reliverse` OR `bunx reliverse`\n");
}

main().catch((error) => {
  consola.error(`An error occurred: ${String(error)}`);
  process.exit(1);
});
