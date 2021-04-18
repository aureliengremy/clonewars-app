const nbrSeason = 7;

const epBySeasonOneToFour = 22;
const epBySeasonFive = 20;
const epBySeasonSix = 13;
const epBySeasonSeven = 8;

const quoteList = {
  S1E01: "Great leaders inspire greatness in others.",
  S1E02: "Belief is not a matter of choice, but of conviction.",
  S1E03: "Easy is the path to wisdom for those not blinded by ego.",
  S1E04: "A plan is only as good as those who see it through.",
  S1E05: "The best confidence builder is experience.",
  S1E06: "Trust in your friends, and they’ll have reason to trust in you.",
  S1E07:
    "You hold onto friends by keeping your heart a little softer than your head.",
  S1E08: "Heroes are made by the times.",
  S1E09: "Ignore your instincts at your peril.",
  S1E10: "Most powerful is he who controls his own power.",
  S1E11:
    "The winding path to peace is always a worthy one, regardless of how many turns it takes.",
  S1E12: "Fail with honor rather than succeed by fraud.",
  S1E13: "Greed and fear of loss are the roots that lead to the tree of evil.",
  S1E14: "When surrounded by war, one must eventually choose a side.",
  S1E15: "Arrogance diminishes wisdom.",
  S1E16:
    "Truth enlightens the mind, but won’t always bring happiness to your heart.",
  S1E17: "Fear is a disease; hope is its only cure.",
  S1E18: "A single chance is a galaxy of hope.",
  S1E19: "It is a rough road that leads to the heights of greatness.",
  S1E20: "The costs of war can never be truly accounted for.",
  S1E21:
    "Compromise is a virtue to be cultivated, not a weakness to be despised.",
  S1E22: "A secret shared is a trust formed.",
  S2E01: "A lesson learned is a lesson earned.",
  S2E02: "Overconfidence is the most dangerous form of carelessness.",
  S2E03: "The first step to correcting a mistake is patience.",
  S2E04: "A true heart should never be doubted.",
  S2E05: "Believe in yourself or no one else will.",
  S2E06: "No gift is more precious than trust.",
  S2E07: "Sometimes, accepting help is harder than offering it.",
  S2E08: "Attachment is not compassion.",
  S2E09: "For everything you gain, you lose something else.",
  S2E10: "It is the quest for honor that makes one honorable.",
  S2E11: "Easy isn’t always simple.",
  S2E12: "If you ignore the past, you jeopardize the future.",
  S2E13: "Fear not for the future, weep not for the past.",
  S2E14: "In war, truth is the first casualty.",
  S2E15: "Searching for the truth is easy, Accepting the truth is hard.",
  S2E16: "A wise leader knows when to follow.",
  S2E17: "Courage makes heroes, but trust builds friendships.",
  S2E18: "Choose what is right, not what is easy.",
  S2E19: "The most dangerous beast is the beast within.",
  S2E20: "Who my father was matters less than my memory of him.",
  S2E21: "Adversity is a friendship’s truest test.",
  S2E22: "Revenge is a confession of pain.",
  S3E01: "Brothers in arms are brothers for life.",
  S3E02:
    "Fighting a war tests a soldier’s skills, defending his home tests a soldier’s heart.",
  S3E03: "Where there’s a will, there’s a way.",
  S3E04: "A child stolen is a hope lost.",
  S3E05: "The challenge of hope is to overcome corruption.",
  S3E06: "Those who enforce the law must obey the law.",
  S3E07: "The future has many paths, choose wisely.",
  S3E08: "A failure in planning is a plan for failure.",
  S3E09: "Love comes in all shapes and sizes.",
  S3E10: "Fear is a great motivator.",
  S3E11: "Truth can strike down the spectre of fear.",
  S3E12: "The swiftest path to destruction is through vengeance.",
  S3E13: "Evil is not born, it is taught.",
  S3E14: "The path to evil may bring great power, but not loyalty.",
  S3E15: "Balance is found in the one who faces his guilt.",
  S3E16: "He who surrenders hope, surrenders life.",
  S3E17: "He who seeks to control fate shall never find peace.",
  S3E18: "Adaptation is the key to survival.",
  S3E19: "Anything that can go wrong will.",
  S3E20: "Without honor, victory is hollow.",
  S3E21: "Without humility, courage is a dangerous game.",
  S3E22: "A great student is what the teacher hopes to be.",
  S4E01: "When destiny calls, the chosen have no choice.",
  S4E02: "Only through fire is a strong sword forged.",
  S4E03: "Crowns are inherited, kingdoms are earned.",
  S4E04: "Who a person truly is cannot be seen with the eye.",
  S4E05: "Understanding is honoring the truth beneath the surface.",
  S4E06: "Who’s the more foolish, the fool or the fool who follows him ?",
  S4E07: "The first step towards loyalty is trust.",
  S4E08: "The path of ignorance is guided by fear.",
  S4E09: "The wise man leads, the strong man follows.",
  S4E10: "Our actions define our legacy.",
  S4E11: "Where we are going always reflects where we came from.",
  S4E12: "Those who enslave others, inevitably become slaves themselves.",
  S4E13: "Great hope can come from small sacrifices.",
  S4E14: "Friendship shows us who we really are.",
  S4E15: "All warfare is based on deception.",
  S4E16: "Keep your friends close, but keep your enemies closer.",
  S4E17: "The strong survive, the noble overcome.",
  S4E18: "Trust is the greatest of gifts, but it must be earned.",
  S4E19: "One must let go of the past to hold on to the future.",
  S4E20: "Who we are never changes, who we think we are does.",
  S4E21:
    "A fallen enemy may rise again, but the reconciled one is truly vanquished.",
  S4E22: "The enemy of my enemy is my friend.",
  S5E01: "Strength of character can defeat strength in numbers.",
  S5E02: "Fear is a malleable weapon.",
  S5E03: "To seek something is to believe in its possibility.",
  S5E04: "Struggles often begin and end with the truth.",
  S5E05: "Disobedience is a demand for change.",
  S5E06: "He who faces himself, finds himself.",
  S5E07: "The young are often underestimated.",
  S5E08: "When we rescue others, we rescue ourselves.",
  S5E09: "Choose your enemies wisely, as they may be your last hope.",
  S5E10: "Humility is the only defense against humiliation.",
  S5E11: "When all seems hopeless, a true hero gives hope.",
  S5E12: "A soldier’s most powerful weapon is courage.",
  S5E13: "You must trust in others or success is impossible.",
  S5E14: "One vision can have many interpretations.",
  S5E15: "Alliances can stall true intentions.",
  S5E16: "Morality separates heroes from villains.",
  S5E17: "Sometimes even the smallest doubt can shake the greatest belief.",
  S5E18: "Courage begins by trusting oneself.",
  S5E19: "Never become desperate enough to trust the untrustworthy.",
  S5E20: "Never give up hope, no matter how dark things seem.",
  S6E01: "The truth about yourself is always the hardest to accept.",
  S6E02: "The wise benefit from a second opinion.",
  S6E03: "When in doubt, go to the source.",
  S6E04: "The popular belief isn’t always the correct one.",
  S6E05: "To love, is to trust, To trust is to believe.",
  S6E06: "Jealousy is the path to chaos.",
  S6E07: "Deceit is the weapon of greed.",
  S6E08: "Without darkness there cannot be light.",
  S6E09: "Wisdom is born in fools as well as wise men.",
  S6E10: "What is lost is often found.",
  S6E11: "Madness can sometimes be the path to truth.",
  S6E12: "Death is just the beginning.",
  S6E13: "Facing all that you fear will free you from yourself.",
  S7E01: "Embrace others for their differences, for that makes you whole.",
  S7E02: "The search for truth begins with belief.",
  S7E03: "Survival is one step on the path to living.",
  S7E04: "Trust placed in another is trust earned.",
  S7E05: "If there is no path before you, create your own.",
  S7E06: "Mistakes are valuable lessons often learned too late.",
  S7E07: "Who you were does not have to define who you are.",
  S7E08: "You can change who you are, but you cannot run from yourself.",
};

export {
  quoteList,
  nbrSeason,
  epBySeasonOneToFour,
  epBySeasonFive,
  epBySeasonSix,
  epBySeasonSeven,
};
