module.exports = {
  code: `
    $onlyIf[$guildID!=;Use este comando em um servidor.]
    $let[progress;$getMemberVar[weeklyQuestProgress;$authorID;$guildID;0]]
    $if[$get[progress]<25;
      **Missão semanal:** envie 25 mensagens válidas, com no máximo um crédito por minuto.
      Progresso: **$get[progress]/25**. Ao concluir, use /missao para resgatar **250 estrelas e 100 XP**.
    ;
      $userCooldown[missao-semanal-$guildID;168h;Você já resgatou sua missão semanal. Tente novamente $discordTimestamp[$sum[$getUserCooldownTime[missao-semanal-$guildID];$getTimestamp];RelativeTime].]
      $let[currentStars;$getUserVar[stars;$authorID;0]]
      $let[currentXP;$getMemberVar[xp;$authorID;$guildID;0]]
      $setUserVar[stars;$sum[$get[currentStars];250];$authorID]
      $setMemberVar[xp;$sum[$get[currentXP];100];$authorID;$guildID]
      $setMemberVar[weeklyQuestProgress;0;$authorID;$guildID]
      Missão concluída! Você recebeu **250 estrelas e 100 XP**.
    ]
  `,
  data: {
    name: "missao",
    description: "[🎯] - Acompanhe ou resgate sua missão semanal.",
  },
};