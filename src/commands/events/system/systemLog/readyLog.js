module.exports = {
    type: 'clientReady',
    code: `
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
> - **ForgeDB**: \`$extensionVersion[forge.db]\`
> - **ForgeDB**: \`$version\`

### 🤖Dados da $username[$botID]
> - **Dono**: \`$username[$botOwnerID]\`
> - **Servidores**: \`$guildCount\`
> - **Quantiedade de SHARDS**: \`$shardCount\`
]
$setStatus[Tia Layla;Listening;Tia Layla]
    $log[✅ $username[$botID] Conectada!]
    `
}