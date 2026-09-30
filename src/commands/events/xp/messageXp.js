module.exports = {
  type: "messageCreate",
  code: `
    $onlyIf[$guildID!=;]
    $onlyIf[$isBot[$authorID]==false;]
    $onlyIf[$charCount[$message]>3;]
    $let[lastAward;$getMemberVar[lastXPAwardAt;$authorID;$guildID;0]]
    $if[$math[$getTimestamp-$get[lastAward]]>=60;
      $let[messageHash;$sha256[$message]]
      $let[lastMessageHash;$getMemberVar[lastXPMessageHash;$authorID;$guildID;]]
      $if[$get[messageHash]!=$get[lastMessageHash];
        $let[currentXP;$getMemberVar[xp;$authorID;$guildID;0]]
        $let[earnedXP;$randomNumber[5;10]]
        $setMemberVar[xp;$sum[$get[currentXP];$get[earnedXP]];$authorID;$guildID]
        $setMemberVar[lastXPAwardAt;$getTimestamp;$authorID;$guildID]
        $setMemberVar[lastXPMessageHash;$get[messageHash];$authorID;$guildID]
        $let[questProgress;$getMemberVar[weeklyQuestProgress;$authorID;$guildID;0]]
        $setMemberVar[weeklyQuestProgress;$sum[$get[questProgress];1];$authorID;$guildID]
      ]
    ]
  `,
};