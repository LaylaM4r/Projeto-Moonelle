module.exports = {
  code: `
    $onlyIf[$guildID!=;Use este comando em um servidor.]
    $let[userId;$findUser[$option[usuario];true]]
    $let[userXP;$getMemberVar[xp;$get[userId];$guildID;0]]
    $let[level;$sum[1;$floor[$math[$get[userXP]/100]]]]
    $if[$authorID==$get[userId];Seu rank;$username[$get[userId]] tem]
    **nível $get[level]** e **$get[userXP] XP**.
    $if[$get[userXP]==0;Envie mensagens para entrar no ranking.;Posição no servidor: **#$getMemberLeaderboardValue[xp;desc;$get[userId];$guildID]**.]
  `,
  data: {
    name: "rank",
    description: "Veja seu nível e posição no ranking do servidor.",
    options: [
      {
        name: "usuario",
        description: "Consulte outra pessoa.",
        type: 6,
        required: false,
      },
    ],
  },
};//