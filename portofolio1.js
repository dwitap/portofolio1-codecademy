const messagesArr = [
  '"Learn as if you will live forever, live like you will die tomorrow." — Mahatma Gandhi',
  '"The secret of getting ahead is getting started." —Mark Twain',
  '"Dont limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve." —Mary Kay Ash',
  '"All our dreams can come true, if we have the courage to pursue them." —Walt Disney',
  '"Whatever you are, be a good one." ―Abraham Lincoln',
  '"Its no use going back to yesterday, because you was a different person then." ―Lewis Carroll',
  '"One day or day one. You decide."',
  '"Work hard in silence, let your success be the noise." ―Frank Ocean',
  '"You need to fight harder"',
  '"The best way out is always through." ―Robert Frost',
];

const answerArr = [
  "It is Certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

const mixAnswer = (a) => {
  let randomAnswer = a[Math.floor(Math.random() * a.length)];
  return `Here is my answer '${randomAnswer}'`;
};

const mixMessages = (b) => {
  let randomMessages = b[Math.floor(Math.random() * b.length)];
  return `Here some quotes for you ${randomMessages}`;
};

const show = () => {
  document.getElementById("p1").innerHTML = mixAnswer(answerArr);
  document.getElementById("p2").innerHTML = mixMessages(messagesArr);
};
