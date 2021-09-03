# What it does?

Fetches the link of the audio based on the search string from youtube.


# Installation:

`npm install yt-audio-link --save`

Then...

```
const ytml = require("yt-audio-link");

const anyFunction = async () => {
    const audioLink = await ytml("never gonna give you up");
    console.log(audioLink);
} 
```