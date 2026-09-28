module.exports = {
  code: `
    $let[userId;$findUser[$option[usuário];true]]
    $let[userAvatar;$userAvatar[$get[userId]]] 
    $let[bgId;$getUserVar[backgroundID;$get[userId];0]]
    $let[style;$getUserVar[styleID;$get[userId];0]]
$createCanvas[profile;820;720;
$drawImage[;src/handler/profileSources/style/$get[style].png;0;0;]
$drawImage[;$get[userAvatar];45;65;224;224;150]
]
$drawText[profile;fill;$userGlobalName[$get[userId]];40px Nexa;#ffffff;297;260;450;false;erase-character;;;true]
$drawText[profile;fill;406920934226657281;13px Nexa;#dedede;44;690;0;false;word;1;left;true]
$renderCanvas[profile]
ainda em beta uwu
  `,
  data: {
    name: "perfil",
    description: "[🖼] - Oh, que tal um quadro só seu?",
    options: [
      {
        name: "usuário",
        description: "[@] - deseja ver de alguma outra pessoa?",
        type: 6, 
        required: false
      }
    ]
  },
};
