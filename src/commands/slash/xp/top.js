module.exports = {
  code: `
    $onlyIf[$guildID!=;Use este comando em um servidor.]
    $disableAllMentions
    $let[entries;$memberLeaderboard[xp;$guildID;desc;10;1;\n;topUser;topPosition;**$env[topPosition]**. <@$env[topUser;id]> — $env[topUser;value] XP]]
    $if[$get[entries]==;Ainda não há pessoas no ranking.;## Top 10 de XP
$get[entries]]
  `,
  data: {
    name: "top",
    description: "[✨] - Veja as 10 pessoas com mais XP neste servidor.",
  },
};