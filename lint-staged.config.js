export default {
  "frontend/**/*.{ts,tsx}": [
    "npm --prefix frontend exec -- eslint --fix --max-warnings=0",
    "npm --prefix frontend exec -- prettier --write",
  ],
  "frontend/**/*.{js,json,css,html,md,yml,yaml}":
    "npm --prefix frontend exec -- prettier --write",
};
