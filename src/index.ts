import Twitter, { } from "twit"
import Discord, { } from "discord.js"

const TWIT = new Twitter({
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
    ...KEY_TWITTER
})

const client = new Discord.Client({intents:"MessageContent"});