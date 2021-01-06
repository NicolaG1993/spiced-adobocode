const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// ask();

// function ask() {
//     rl.question("Do you enjoy learning Node.js?", function (answer) {
//         if (answer === "yes") {
//             console.log("great!");
//             rl.close();
//         } else {
//             console.log("WRONG ANSWER!!!!");
//             ask();
//         }
//     });
// }

engine(story);

function engine(obj) {
    rl.question(obj.q, (answer) => {
        if (!obj.answers[answer]) {
            // there is no matching property
            // that means the user typed an invalid answer
            console.log(chalk.red("You are not cooperating!"));
            engine(obj);
        }
        if (typeof obj.answers[answer] == "string") {
            console.log(chalk.green(obj.answers[answer]));
            rl.close();
        } else if (typeof obj.answers[answer] == "object") {
            engine(obj.answers[answer]);
        }
    });
    // the answer the user types corresponds to an object
    // continue the game
    // ask the next question
}
