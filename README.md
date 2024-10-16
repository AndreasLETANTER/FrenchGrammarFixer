# French Grammar Fixer

**French Grammar Fixer** is a Raycast extension that helps you correct French grammar errors in real time. It works by analyzing the highlighted text from the front-most app, using Google's Gemini API to fix any grammar mistakes, and replacing the text with the corrected version. This makes it easier to enhance your French writing across various apps.

## Features
- Captures highlighted text from the active app.
- Corrects French grammar using Google's Gemini API.
- Replaces the original text with the corrected version.
- Seamless integration into your workflow.

## Extension Name
**French Grammar Fixer**

## Command Name
`Fix French Grammar`

## Requirements
1. **Raycast**: Make sure you have Raycast installed. If not, you can download it [here](https://www.raycast.com/).
2. **Google Gemini Key**: You’ll need to have a Google account and create a Gemini API Key [here](https://aistudio.google.com/app/apikey).

## Installation

### Step 1: Clone the Repository
```bash
git clone git@github.com:AndreasLETANTER/FrenchGrammarFixer.git
cd FrenchGrammarFixer
```

### Step 2: Install Dependencies
Run the following command to install necessary dependencies:
```bash
npm install
```

### Step 3: Configure Raycast Permissions
You need to allow Raycast access to your Mac's accessibility settings to interact with highlighted text. Follow these steps:
1. Go to **System Settings** > **Privacy & Security** > **Accessibility**.
2. Add **Raycast** to the list of apps with access.

### Step 4: Add Your Google Gemini Key (First Run)
- On the first run, the extension will prompt you to enter your **Google Gemini API key**.
- To get the key, go to [Google AI Studio](https://aistudio.google.com/app/apikey), sign in with your Google account, and generate an API key.
- Enter the key when prompted by the extension, and you're ready to go!

## How to Run the Extension
1. Open **Raycast** using the shortcut (`Cmd + Space` by default).
2. Search for the command `Fix French Grammar`.
3. Highlight the text in any front-most app that you want to correct.
4. Run the command, and the corrected text will automatically replace the original.

## Troubleshooting

### Permission Issues
- Ensure that Raycast has accessibility permissions in **Privacy & Security**.

### Updating the API Key
- If you encounter an error with the Google Gemini key, or if you need to update it, you can do so by following these steps:
  1. Run the `Fix French Grammar` command again in Raycast.
  2. The extension will prompt you to enter a new API key if the current one is invalid.
  3. Re-enter or update your Google Gemini key, and the extension will continue to function.

## License
This project is licensed under the MIT License.
