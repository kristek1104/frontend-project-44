import readlineSync from 'readline-sync';

const askAboutName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
};
export default askAboutName;
