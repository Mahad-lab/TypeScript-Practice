// https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md

// 1. Setup TypeScript environment

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let Name: string = "Mahad";
console.log(`Hello ${Name}`);

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log(`Name : ${ Name }`);
console.log(`Name in uppercase : ${ Name.toUpperCase() }`);
console.log(`Name in lowercase: ${ Name.toLowerCase() }`);

// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log('Albert Einstein once said, \"Only a life lived for others is a life worthwhile.\"');

// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let message: string = "Try not to become a man of success. Rather become a man of value.";

console.log(`${ famous_person } once said, "${ message }"`);

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let FullName: string = "\tMahad Ahmed\n";
console.log(FullName);

console.log(FullName.trim());

// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// 8. You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(4 + 4);
console.log(9 - 1);
console.log(2 * 4);
console.log(16 / 2);

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let fav_number: number = 8;
console.log(`My favourite number is ${ fav_number }`);

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// This is a single line comment in TypeScript/JavaScript
/* This is a multi line 
    comment in TypeScript/JavaScript */

// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let Names: string[] = ["Ali", "Haris"];
console.log(`Name 1 : ${ Names[0] }`);
console.log(`Name 2 : ${ Names[1] }`);

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

Names.forEach(name => {
   console.log(`Hello ${ name }`); 
});

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transports: string[] = ["Honda motercycle", "Honda motorcar"];
transports.forEach(name => {
   console.log(`I would like to own a ${ name }.`); 
});

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests: string[] = ["Ali", "Hamza", "Haris"];
guests.forEach(name => {
   console.log(`Dear ${ name }, I would like to our dinner.`); 
});

// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

guests[1] = "Talha";

guests.forEach(name => {
   console.log(`Dear ${ name }, I would like to our dinner.`); 
});


// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.