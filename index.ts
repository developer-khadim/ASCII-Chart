import inquirer from "inquirer";

async function main() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "numChars",
        message: "Enter the number of characters you want to enter:",
      },
    ])
    .then((answers) => {
      const numChars = parseInt(answers.numChars);

      const questions = [];
      for (let i = 0; i < numChars; ++i) {
        questions.push({
          type: "input",
          name: `char${i}`,
          message: `Enter character ${i + 1}:`,
        });
      }

      inquirer.prompt(questions).then((charAnswers) => {
        for (let i = 0; i < numChars; ++i) {
          const ch = charAnswers[`char${i}`];
          const asciiCode = ch.charCodeAt(0);
          const binaryRepresentation = asciiCode.toString(2);
          console.log(`ASCII code of '${ch}' is: ${asciiCode}`);
          console.log(
            `Binary representation of '${ch}' is: ${binaryRepresentation}`
          );
        }
      });
    });
}

main();
