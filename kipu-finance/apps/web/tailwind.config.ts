import os
import zipfile

# Define the updated tailwind.config.ts content with the requested neon theme
tailwind_config_content = """import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // KIPU Finance Palette
        background: "#0a0a0c", // Deep dark background
        card: "#121217",       // Slightly lighter dark for cards
        primary: {
          blue: "#00d4ff",
          green: "#00ff9d",
          turquoise: "#40e0d0",
          purple: "#9d4edd",
          yellow: "#fca311",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a0a0a0",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
"""

# Ensure the directory exists
os.makedirs("kipu-finance/apps/web", exist_ok=True)

# Update the file
with open("kipu-finance/apps/web/tailwind.config.ts", "w") as f:
    f.write(tailwind_config_content)

# Re-zip the project
zip_filename = "kipu-finance.zip"
with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk("kipu-finance"):
        for file in files:
            zipf.write(os.path.join(root, file))

print(f"File updated and project re-compressed: {zip_filename}")
