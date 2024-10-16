/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Google API Key - Enter your Google Generative AI API Key */
  "googleApiKey": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `grammar-fix` command */
  export type GrammarFix = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `grammar-fix` command */
  export type GrammarFix = {}
}



