const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
require('dotenv').config();

// VARIAVEIS
vars = require("./src/handler/vars.js");

// CLIENTE
const client = new ForgeClient({
    intents: [ "GuildMessages", "Guilds" ],
    events: [ "clientReady", "debug" ], 
    prefixes: [ "m.", "M." ], 
    extensions: [ new ForgeDB() ],
    prefixCaseInsensitive: true,
    respondOnEdit: true
});

// CARREGANDO VARIAVEIS
ForgeDB.variables(vars); //VARIAVEIS DO CLIENTE
   
// Pasta de comandos de eventos
client.commands.load("./src/commands/events");
// Pasta dos comandos comuns por prefixo
client.applicationCommands.load("./src/commands/slash");

// Token do bot no arquivo .env
client.login(process.env.BOT_TOKEN);