module.exports = {
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "<api server url>",
};
