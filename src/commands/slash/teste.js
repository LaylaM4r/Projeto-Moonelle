/*module.exports = {
  code: `
  $setTimezone[America/Sao_Paulo]
  $let[hour;$sub[24;$hour]]
    $let[minute;$sub[60;$minute]]
    $let[second;$sub[60;$second]]
$get[hour]h $get[minute]m $get[second]s
parse string: $parseString[$get[hour]h$get[minute]m$get[second]s]
ShortTime: $discordTimestamp[$sum[$parseString[$get[hour]h$get[minute]m$get[second]s];$getTimestamp];FullDateShortTime]
  `,
  data: {
    name: "teste",
    description: "Teste",
  },
};*/