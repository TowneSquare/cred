import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

const createMagic = (key : string) => {
  return (
    typeof window !== "undefined" &&
    new Magic(key, {
      extensions: [new OAuthExtension()],
    })
  );
};

export const magic: any = createMagic("pk_live_CA547FCC1F472701");
