import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
    },
  },
});
