import { defineConfig } from "@rsbuild/core";
import CompressionPlugin from "compression-webpack-plugin";

export default defineConfig({
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
    sourceMap: {
      js: "source-map",
    },
  },
  tools: {
    rspack: {
      plugins: [
        new CompressionPlugin({
          filename: "[path][base].br",
          algorithm: "brotliCompress",
          test: /\.(js|css|html|svg)$/,
          exclude: ["**/*.map"], //Exclude source maps
          deleteOriginalAssets: "keep-source-map",
        }),
      ],
    },
  },
});
