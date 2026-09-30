const { ForgeClient, LogPriority  } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const { ForgeCanvas } = require("@tryforge/forge.canvas")
require('dotenv').config();

// VARIAVEIS
vars = require("./src/handler/vars.js");

// CLIENTE
const client = new ForgeClient({
    intents: [ "Guilds", "GuildMembers", "GuildMessages", "GuildMessageReactions", "DirectMessages", "MessageContent" ],
    events: [ "clientReady", "debug", "error", "guildAvailable", "guildCreate", "guildUnavailable", "presenceUpdate", "userUpdate", "voiceStateUpdate", "messageCreate" ],
    prefixes: [ "m.", ], 
    extensions: [ new ForgeDB(), new ForgeCanvas() ],
    prefixCaseInsensitive: true,
    logLevel: LogPriority.High,
    respondOnEdit: true,
    trackers: {
        invites: false,
        voice: true
    }
});

// CARREGANDO VARIAVEIS
ForgeDB.variables(vars); //VARIAVEIS DO CLIENTE
   
// Pasta de comandos de eventos
client.commands.load("./src/commands/events");
// Pasta dos comandos comuns por prefixo
client.applicationCommands.load("./src/commands/slash");

// Token do bot no arquivo .env
client.login(process.env.BOT_TOKEN);