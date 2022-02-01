const { Author, Book } = require('../models');

const seedDB = async () => {
	const dummy_author = await Author.create({
		name: "JK Rowling",
		dob: "July 31, 1965",
		description: "Joanne Rowling, CH, OBE, HonFRSE, FRCPE, FRSL, known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, and screenwriter. She also wrote Harry Potter"
	});
	const dummy_author2 = await Author.create({
		name: "Dr.Seuss",
		dob: "March 2, 1904",
		description: "Seuss, pseudonym of Theodor Seuss Geisel was American writer and illustrator of immensely popular children's books, which were noted for their nonsense words, playful rhymes, and unusual creatures."
	});

	const dummy_book = await Book.create({
		title: "Harry Potter and the Philosopher's Stone",
      	year: "1997"
	});

	await dummy_book.setAuthor(dummy_author);
	
}

module.exports = seedDB;