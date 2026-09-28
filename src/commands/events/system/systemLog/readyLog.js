module.exports = {
    type: 'clientReady',
    code: `
    $setTimezone[America/Sao_Paulo]
    $registerFont[src/handler/fonts/Nexa-Heavy.ttf;Nexa]
    $webhookSend[$djsEval[process.env.WEBHOOKLOG];## ✅ $username[$botID] *Conectado*! - $discordTimestamp[$getTimestamp;ShortTime]
### 🖥️ Dados da máquina:
> - **CPU**: \`$cpuModel - $cpuArch - $cpuCores\`
> - **% da CPU**: \`$cpu%\`
> - **Uso de RAM**: \`$ram MB - $ramTotal GB\`
> - **Ping Inicial**: \`$ping ms\`
> - **Sistema Operacional**: \`$os\`

### 📦 Versões de Dependencias:
> - **Node.Js**: \`$nodeVersion\`
> - **Discord.Js**: \`$djsVersion\`
> - **Forge.DB**: \`$extensionVersion[forge.db]\`
> - **Forge.Canvas**: \`$extensionVersion[forge.canvas]\`
> - **ForgeScript**: \`$version\`

### 🤖 Dados da $username[$botID]
> - **Dono**: \`$username[$botOwnerID]\`
> - **Servidores**: \`$guildCount\`
> - **Quantiedade de SHARDS**: \`$shardCount\`

### 🖼️ Dados do Forge.Canvas
> - Fontes Carregadas: \`$fontFamilies\`
]
$setStatus[Tia Layla;Listening;Tia Layla]
    $log[✅ $username[$botID] Conectada!]
    `
}