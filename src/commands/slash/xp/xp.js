module.exports = {
  code: `
    $onlyIf[$guildID!=;Use este comando em um servidor.]
    $let[userId;$findUser[$option[usuario];true]]
    $let[userXP;$getMemberVar[xp;$get[userId];$guildID;0]]
    $let[level;$sum[1;$floor[$math[$get[userXP]/100]]]]
    $let[remaining;$sub[$math[$get[level]*100];$get[userXP]]]
    $if[$authorID==$get[userId];Você;$username[$get[userId]]] tem **$get[userXP] XP** e está no **nível $get[level]**. Faltam **$get[remaining] XP** para o próximo nível.
  `,
  data: {
    name: "ver",
    description: "[✨] - Consulte seu XP e nível neste servidor.",
    options: [
      {
        name: "usuario",
        description: "Consulte outra pessoa.",
        type: 6,
        required: false,
      },
    ],
  },
};