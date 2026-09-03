## CodeGraph

This repository is indexed by CodeGraph (`.codegraph/` at the repo root). Before grep/find or
reading files to understand or locate code, use it first:

- **MCP tool** (when available): `codegraph_explore` — answers most code questions in one call
  (relevant symbols' verbatim source plus call paths between them). Name a file or symbol in the
  query to read its current line-numbered source.
- **Shell** (always works): `codegraph explore "<symbol names or question>"`.

After making code changes, run `codegraph sync` so the index stays current.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
