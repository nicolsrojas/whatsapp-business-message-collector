const { Buffer } = require("buffer");

function decodeBase64ToJson(encodedString) {
  try {
    const json = Buffer.from(encodedString, "base64").toString("utf-8");
    return JSON.parse(json);
  } catch (err) {
    throw new Error("Invalid base64 encoded JSON: " + err.message);
  }
}

module.exports = { decodeBase64ToJson };