module.exports = {
  code: `
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
    description: "Avatar",
    options: [
      {
        name: "usuário",
        description: "Usuário",
        type: 6, 
        required: false
      },
      {
        name: "servidor",
        description: "Servidor",
        type: 3,
        required: false
      }
    ]
  },
};

/*
$if[$authorID==$get[userId];Ver **você** te enche de **DETERMINAÇÃO** Server: $option[servidor] | IF: $get[serverId]]
    $let[guildAvatar;$memberAvatar[$get[serverId];$get[userId]]]

    $let[avatarUser;$if[$includes[$get[userAvatar];.webp;.png;.jpg]==true;webp;gif]]
    $let[avatarMember;$if[$includes[$get[guildAvatar];.webp;.png;.jpg]==true;webp;gif]]

    $if[$get[userAvatar]!=$get[guildAvatar];$attachment[$get[guildAvatar];avatar_de_$username[$get[userId]].$get[avatarMember]];]
    $attachment[$get[userAvatar];avatar_de_$username[$get[userId]].$get[avatarUser]]




$let[id;$findUser[$option[avatar];true]]
    $let[finded;.$findUser[$option[avatar];false]]
    $let[findedMember;$findMember[$guildID;$option[avatar];true]]
    $if[$get[finded]==.;$if[$option[avatar]==;;Não consegui encontrar essa pessoa, mas encontrei você!]]
    $if[$authorID==$findUser[$option[avatar];false];pq raios você se marcou? mas tá aí sua foto.]
    $let[userAvatar;$userAvatar[$get[id]]]
    $let[guildAvatar;$memberAvatar[$guildID;$get[findedMember]]]
    $if[$get[id]!=$get[findedMember];$let[guildAvatar;$get[userAvatar]]]
    $let[imageFormat1;$if[$includes[$get[userAvatar];.webp;.png;.jpg]==true;webp;gif]]
    $let[imageFormat2;$if[$includes[$get[guildAvatar];.webp;.png;.jpg]==true;webp;gif]]
    $if[$get[userAvatar]!=$get[guildAvatar];$attachment[$get[guildAvatar];avatar_de_$username[$get[findedMember]].$get[imageFormat2]];]
    $attachment[$get[userAvatar];avatar_de_$username[$get[id]].$get[imageFormat1]]
*/