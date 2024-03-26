# Text-to-Speech Server

This is a simple Express.js server that uses the `node-gtts` (Google Text-to-Speech) library to convert text to speech.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
```
2. Navigate into the cloned repository:

```
cd your-repo-name
```

3. Install the dependencies:
```
npm install
npm run build && npm run start
```
### Usage
The server runs on port 3000 by default, but you can set a different port by setting the PORT environment variable.

To convert text to speech, make a GET request to the root (/) of the server with the following query parameters:

text: The text to convert to speech.
locale: The locale to use for the speech (default is 'en').
Example:
```
http://localhost:3000/?text=Hello%20World&locale=en
```
This will return an audio file of the text "Hello World" spoken in English.