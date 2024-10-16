import { fetch, Headers } from "undici";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSelectedText, Clipboard, showToast, Toast, getPreferenceValues } from "@raycast/api";

globalThis.fetch = fetch;
globalThis.Headers = Headers;

interface Preferences {
  googleApiKey: string;
}

export default async function main() {
  const preferences = getPreferenceValues<Preferences>();

  try {
    const selectedText = await getSelectedText();

    const genAI = new GoogleGenerativeAI(preferences.googleApiKey);
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `S'il te plaît, corrige les fautes de grammaire et d'orthographe dans ce texte en français, en conservant les mots anglais utilisés. Ne me renvoie que le texte corrigé :\n${selectedText}`;

    const result = await model.generateContent([prompt]);
    
    if (result && result.response.text()) {
      const correctedText = result.response.text();

      await Clipboard.paste(correctedText);
      await showToast({
        style: Toast.Style.Success,
        title: "Text corrected and pasted",
      });
    } else {
      await showToast({
        style: Toast.Style.Failure,
        title: "Error",
        message: "No valid response from the model.",
      });
    }

  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Cannot contact Gemini",
      message: String(error),
    });
  }
}
