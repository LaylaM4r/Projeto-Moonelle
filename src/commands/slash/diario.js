module.exports = {
  code: `
  $setTimezone[America/Sao_Paulo]
  $let[userId;$authorID]
  
  $let[hour;$sub[24;$hour]] $let[minute;$sub[60;$minute]] $let[second;$sub[60;$second]]
  $usercooldown[$get[userId];$get[hour]h$get[minute]m$get[second]s;Caldownn, espere $discordTimestamp[$sum[$getUserCooldownTime[$get[userId]];$getTimestamp];RelativeTime]]
  $let[starsValue;$getUserVar[stars;$get[userId];0]]
  $let[randomDaily;$randomNumber[480;700]]
  $let[dailySumAll;$sum[$get[starsValue];$get[randomDaily]]]
    você ganhou $get[randomDaily] estrelas!
  $setUserVar[stars;$get[dailySumAll];$get[userId]]
  `,
  data: {
    name: "diario",
    description: "[⭐] - Pegue suas estrelas diárias!",
  },
};