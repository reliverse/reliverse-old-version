import { consola } from "consola";
// import { showReliverseMenu } from "~/prompts/00-showReliverseMenu";

async function main() {
  // await showReliverseMenu();

  consola.warn(
    "✨ Use this command instead 👉 `npx @reliverse/cli` OR `pnpm dlx @reliverse/cli` OR `bunx @reliverse/cli`",
  );
}

main().catch((error) => {
  consola.error(`An error occurred: ${String(error)}`);
  process.exit(1);
});
