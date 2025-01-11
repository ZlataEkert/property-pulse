export function convertToSerializableObject(leanDocument) {
  for (const key of Object.keys(leanDocument)) {
    const value = leanDocument[key];
    if (
      value &&
      typeof value.toJSON === "function" &&
      typeof value.toString === "function"
    ) {
      leanDocument[key] = value.toString();
    }
  }
  return leanDocument;
}
