module.exports = {
  code: `
    $onlyForUsers[nananinanão;$botOwnerID]
    $eval[$option[command]]
  `,
  data: {
    name: "eval",
    description: "Eval",
    options: [
      {
        name: "command",
        description: "Comando",
        type: 3,
        required: true
      }
    ]
  },
};