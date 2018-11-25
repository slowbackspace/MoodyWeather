const TITLES = [
  "What's the weather?",
  "Is it freezing yet?",
  "Tell me some good news!",
  "Sun is shining",
  "Is it safe?",
  "Can I go outside?",
  "How much snow is there?",
  "Is the world drowning?",
  "Hot or cold?"
];

export const randomSubmitTitle = () => {
  return TITLES[Math.floor(Math.random()*TITLES.length)];
};
