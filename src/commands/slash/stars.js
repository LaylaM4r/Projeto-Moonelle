module.exports = {
  code: `
    $let[userId;$findUser[$option[usuário];true]]
    $let[starsValue;$getUserVar[stars;$get[userId];0]]
    $disableAllMentions
    $if[$authorID==$get[userId];Você tem;$username[$get[userId]]] $get[starsValue] estrelas
  `,
  data: {
    name: "estrelas",
    description: "[⭐] - Veja a Quantia de estrelas você tem!",
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
//