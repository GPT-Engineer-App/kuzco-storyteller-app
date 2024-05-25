# kuzco-storyteller-app

create an app based on this:

import OpenAI from "openai";

const oai = new OpenAI({
  baseURL: "https://relay.kuzco.xyz/v1",
  apiKey: `kuzco-47f40e77cad64425830f45069c73a469`, // obtainable from https://kuzco.xyz/register
  timeout: 5 * 60 * 1000,
});

try {
  const response = await oai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Tell me a short story about an emperor named Kuzco.`,
      },
    ],
    model: "llama3:latest",
    stream: false, // streaming is disabled in Kuzco for now
  });

  console.log(response.choices[0].message.content);
} catch (e) {
  console.error(e);
}



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/kuzco-storyteller-app.git
cd kuzco-storyteller-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
