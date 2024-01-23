import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

const magicApiKey = process.env.REACT_APP_MAGIC_API_KEY ?? 'default-key';
const createMagic = (key: string) => {


  return (
    typeof window !== "undefined" &&
    new Magic(key, {
      extensions: [new OAuthExtension()],
    })
  );
};

export const magic: any = createMagic(magicApiKey);
