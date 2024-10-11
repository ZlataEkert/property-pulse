import { json } from "next/dist/client/components/react-dev-overlay/server/shared";

export function convertToSerializableObject(leanDocument) {
  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key].toJSON && leanDocument[key].toString) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }
  return leanDocument;
}
