module.exports = {
  code: `
    $let[selectedTitle;$option[titulo]]
    $let[price;$if[$get[selectedTitle]==Viajante Lunar;250;$if[$get[selectedTitle]==Guardiã das Estrelas;500;900]]]
    $let[currentXP;$getMemberVar[xp;$authorID;$guildID;0]]
    $let[currentLevel;$sum[1;$floor[$math[$get[currentXP]/100]]]]
    $let[requiredLevel;$if[$get[selectedTitle]==Viajante Lunar;1;$if[$get[selectedTitle]==Guardiã das Estrelas;5;10]]]
    $let[stars;$getUserVar[stars;$authorID;0]]
    $onlyIf[$get[currentLevel]>=$get[requiredLevel];Este título exige o nível **$get[requiredLevel]**. Seu nível atual é **$get[currentLevel]**.]
    $onlyIf[$getUserVar[profileTitle;$authorID;]!=$get[selectedTitle];Você já está usando esse título.]
    $onlyIf[$get[stars]>=$get[price];Você precisa de **$get[price] estrelas**. Seu saldo é **$get[stars]**.]
    $setUserVar[stars;$sub[$get[stars];$get[price]];$authorID]
    $setUserVar[profileTitle;$get[selectedTitle];$authorID]
    Título **$get[selectedTitle]** comprado e equipado por **$get[price] estrelas**.
  `,
  data: {
    name: "comprar",
    description: "Compre e equipe um título para seu perfil.",
    options: [
      {
        name: "titulo",
        description: "Escolha um título da loja.",
        type: 3,
        required: true,
        choices: [
          { name: "Viajante Lunar - 250 estrelas", value: "Viajante Lunar" },
          { name: "Guardiã das Estrelas - 500 estrelas", value: "Guardiã das Estrelas" },
          { name: "Filha da Lua - 900 estrelas", value: "Filha da Lua" },
        ],
      },
    ],
  },
};