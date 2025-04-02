// JavaScript source code
//document.write("<h1>Academy</h1>");

class Human {
	#last_name;
	#first_name;
	#age;
	constructor(last_name, first_name, age) {
		//console.log(last_name);
		//document.write(`last_name type: ${typeof (last_name)}`);
		this.#last_name = last_name;
		this.#first_name = first_name;
		this.#age = age;
		console.log("HConstructor");
	}
	get last_name() { return this.#last_name; }
	get first_name() { return this.#first_name; }
	get age() { return this.#age; }
	set last_name(value) { this.#last_name = value; }
	set first_name(value) { this.#first_name = value; }
	set age(value) { this.#age = value; }
	toString() {
		return `${this.last_name} ${this.first_name} ${this.age}`;
	}
}
class Student extends Human {
	#speciality;
	#group;
	#rating;
	#attendance;
	get speciality() { return this.#speciality; }
	get group() { return this.#group; }
	get rating() { return this.#rating; }
	get attendance() { return this.#attendance; }
	set speciality(value) { this.#speciality = value; }
	set group(value) { this.#group = value; }
	set rating(value) { this.#rating = value; }
	set attendance(value) { this.#attendance = value; }

	constructor(last_name, first_name, age, speciality, group, rating, attendance) {

		super(last_name, first_name, age);
		this.speciality = speciality;
		this.group = group;
		this.rating = rating;
		this.attendance = attendance;
	}
	toString() {

		return "<br>" + super.toString() + `${this.speciality} ${this.group} ${this.rating} ${this.attendance}`;
	}
}
class Teacher extends Human {
	#speciality;
	#experience;
	get speciality() { return this.#speciality; }
	get experince() { return this.#experience; }
	set speciality(value) { this.#speciality = value; }
	set experince(value) { this.#experience = value; }
	constructor(last_name, first_name, age, speciality, experince) {
		super(last_name, first_name, age);
		this.speciality = speciality;
		this.experince = experince;
	}
	toString() {
		return '<br>' + super.toString() + ` ${this.speciality} ${this.experince}`;
	}
}

//let human = new Human("Montana", "Antonio", 25);
//document.write(human);

//let student = new Student("Pinkman", "Jessie", "22", "Chemistry", "WW_220", 90, 99);
//document.write(student);

//let teacher = new Teacher("White", "Walter", 50, "Chemistry", 25);
//document.write(teacher);
//document.write('<hr>');

let group =
	[
		new Human("Montana", "Antonio", 25),
		new Student("Pinkman", "Jessie", "22", "Chemistry", "WW_220", 90, 99),
		new Teacher("White", "Walter", 50, "Chemistry", 25),
	];

for (let i in group)
{
	document.write(group[i] + '<hr>');
}

let student =
`{
	"type": "Student",
	"last_name": "Pinkman",
	"first_name": "Jessie",
	"age": 22,
	"speciality": "Chemistry",
	"group": "WW_220",
	"rating": 90,
	"attendance": 99
}`;

console.log(student);
let student_p = JSON.parse(student);
console.log(student_p);

console.log("------------------------------");

console.log(group[2]);

let student_s = JSON.stringify(student_p);
console.log(student_s);