function genres(knex, Promise){
	return function(){
					return knex('genres').del()
						.then(function () {
							return Promise.all([
								 knex('genres').insert({id: 1, name: 'sci-fi'}),
								knex('genres').insert({id: 2, name: 'horror'}),
								knex('genres').insert({id: 3, name: 'fiction'}),
								knex('genres').insert({id: 4, name: 'biography'}),
								knex('genres').insert({id: 5, name: 'comedy'})
							]);
				})
				}
}

function authors(knex, Promise){
	return function(){
					return knex('authors').del()
						.then(function () {
							return Promise.all([
								 knex('authors').insert({id: 1, name: 'JK Rowling', image: 'http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcxMzcxNTYyNTA5.jpg', summary: 'JK Rowling is an English novelist. She is best know for her Harry Potter series. The series have gain worldwide attention and sold more than 400 millions copies'}),
								knex('authors').insert({id: 2, name: 'Yann Martel', image: 'https://i.cbc.ca/1.1612844.1379065116!/httpImage/image.jpg_gen/derivatives/original_300/yann-martel-220.jpg', summary: 'Yann Martel is a Spanish-born Canadian author best known for the Man Booker Prize-winning novel Life of Pi. He currently live in Saskatoon, Saskatchewan with his family.'}),
								knex('authors').insert({id: 3, name: 'Suzanne Collins', image: 'https://en.wikipedia.org/wiki/Suzanne_Collins#/media/File:Suzanne_Collins_David_Shankbone_2010.jpg', summary: 'Suzanne Collins is an American television writer and novelist, best known as the author of the New York Times best selling series The Hunger Games trilogy. She studied at Indiana University for her B.A and NYU Tisch SChool of the Arts for her M.F.A'}),
							]);
				})
				}
}
function books_and_genres(knex, Promise){
	return function(){
					return knex('books_genres').del()
						.then(function () {
							return Promise.all([
								knex('books_genres').insert({id: 1, book_id: 1, genre_id: 2}),
								knex('books_genres').insert({id: 2, book_id: 1, genre_id: 3}),
								knex('books_genres').insert({id: 3, book_id: 2, genre_id: 1}),
							]);
				})
}
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert({id: 1, title: 'Life of Pi', author: 'Yann Martel', image: 'https://images-na.ssl-images-amazon.com/images/I/51xufiFRCtL._SX331_BO1,204,203,200_.jpg', summary: 'Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age'}),
        knex('books').insert({id: 2, title: 'Harry Potter and the Half-blood Price', author: 'JK Rowling', image: 'https://images-na.ssl-images-amazon.com/images/I/51NbOxBO%2BBL.jpg', summary: 'It is the middle of the summer, but there is an unseasonal mist pressing against the windowpanes. Harry Potter is waiting nervously in his bedroom at the Dursleys\' house in Privet Drive for a visit from Professor Dumbledore himself'}),
        knex('books').insert({id: 3, title: 'Harry Potter and the Order of the Phoenix', author: 'JK Rowling', image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg', summary: 'Harry Potter and the Order of the Phoenix is the fifth novel in the Harry Potter series, written by J. K. Rowling. It follows Harry Potter\'s struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry'}),
				knex('books').insert({id: 4, title: 'The High Mountain of Portugal', author: 'Yann Martel', image: 'http://images.gr-assets.com/books/1443034505l/25489094.jpg', summary: 'In Lisbon in 1904, a young man named Tomás discovers an old journal. It hints at the existence of an extraordinary artifact that—if he can find it—would redefine history. Traveling in one of Europe’s earliest automobiles, he sets out in search of this strange treasure.'}),
				knex('books').insert({id: 5, title: 'The Hunger Games', author: 'Suzanne Collins', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/The_Hunger_Games.jpg/220px-The_Hunger_Games.jpg', summary: 'The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation.'}),
				knex('books').insert({id: 6, title: 'Mockingjay', author: 'Suzanne Collins', image: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Mockingjay.JPG', summary: 'Mockingjay is a 2010 science fiction novel by American author Suzanne Collins. It is the last installment of The Hunger Games, following 2008\'s The Hunger Games and 2009\'s Catching Fire.'}),
				knex('books').insert({id: 7, title: 'Catching Fires', author: 'Suzanne Collins', image: 'https://upload.wikimedia.org/wikipedia/en/0/09/Catching_fire.JPG', summary: 'Catching Fire is a 2009 science fiction young adult novel by the American novelist Suzanne Collins, the second book in The Hunger Games trilogy. '}),
				knex('books').insert({id: 8, title: 'Harry Potter and the Chamber of Secrets', author: 'JK Rowling', image: 'https://www.nypl.org/sites/default/files/Harry_Potter_and_the_Chamber_of_Secrets_(US_cover)_0.jpg', summary: 'Harry Potter and the Chamber of Secrets is the second novel in the Harry Potter series, written by J. K. Rowling.'}),
      ]);
    }).then(authors(knex, Promise)).then(genres(knex, Promise)).then(books_and_genres(knex,Promise));
		
};
