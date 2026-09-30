module.exports = {
  code: `
    $disableAllMentions
    $let[userId;$findUser[$option[usuário];true]]
    $let[serverId;$if[$option[servidor]==;$guildID;$if[$guildExists[$option[servidor]]==true;$option[servidor];$guildID]]]
    $if[$authorID==$get[userId];Ver **você** te enche de **DETERMINAÇÃO**]
    $let[userAvatar;$userAvatar[$get[userId]]]
    $let[guildAvatar;$memberAvatar[$get[serverId];$get[userId]]]
    $let[avatarUser;$if[$includes[$get[userAvatar];.webp;.png;.jpg]==true;webp;gif]]
    $let[avatarMember;$if[$includes[$get[guildAvatar];.webp;.png;.jpg]==true;webp;gif]]
    $if[$get[userAvatar]!=$get[guildAvatar];$attachment[$get[guildAvatar];avatar_de_$username[$get[userId]].$get[avatarMember]];]
    $attachment[$get[userAvatar];avatar_de_$username[$get[userId]].$get[avatarUser]]

  `,
  data: {
    name: "avatar",
    description: "[🖼] - Bateu curiosidade de ver fotos?",
    options: [
      {
        name: "usuário",
        description: "[@] - deseja ver de alguma outra pessoa?",
        type: 6, 
        required: false
      },
      {
        name: "servidor",
        description: "[@] - deseja ver de algum outro servidor? essa função só funciona se eu estiver no servidor.",
        type: 3,
        required: false
      }
    ]
  },
};