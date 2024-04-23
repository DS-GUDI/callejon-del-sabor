## Important notes
Every hard change or some additions to this project must be declared on this documentation. 
If you haven't some process or workflow clear please send me a request to modify and put the 
necessary information here.

## Project Structure

Every component, data file or modification must be declared on the next directory tree.
If it isn't a confortable process to you, create new README.md in every created directory that 
you need to explain more deeper.

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
For example if we add in `src/parges` a component called `nosotros.astro` the automatic created route by astro will be. `/nosotros`

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |