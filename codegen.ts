import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: "src/**/*.graphql",
  schema: [
    {
      "https://graphql.anilist.co": {
        method: "POST",
      },
    },
  ],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
