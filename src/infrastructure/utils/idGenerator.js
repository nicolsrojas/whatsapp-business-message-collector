function createSafeFirebaseId(id) {
  return id.replace(/[.#$/[\]]/g, '_');
}
module.exports = {
  createSafeFirebaseId
};