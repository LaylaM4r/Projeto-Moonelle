module.exports = {
    type: 'debug',
    code: `
    $webhookSend[$djsEval[process.env.WEBHOOKLOG];### 🤖 | Debug ForgeClient - $discordTimestamp[$getTimestamp;ShortTime]

$codeBlock[$debug;js]]
    `
}