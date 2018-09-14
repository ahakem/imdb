var model = {
  currentActor: null,
  cast: [
      {
        name : 'Matthew McConaughey',
        character : 'Copper',
        imgSrc : 'images/cast/matthew.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
      },
      {
        name : 'Anne Hathaway',
        character : 'Brand',
        imgSrc : 'images/cast/anne.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'Jessica Chastainy',
        character : 'Murph',
        imgSrc : 'images/cast/jessica.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'Michael Caine',
        character : 'Professor Brand',
        imgSrc : 'images/cast/michel.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'Mackenzie Foy',
        character : 'Murph',
        imgSrc : 'images/cast/Mackenzie.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'Matt Damon',
        character : 'Mann',
        imgSrc : 'images/cast/matt.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'Casey Affleck',
        character : 'Tom',
        imgSrc : 'images/cast/casey.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'Timothee Chalamet',
        character : 'Tom',
        imgSrc : 'images/cast/timothee.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'Wes Bentely',
        character : 'Doyle',
        imgSrc : 'images/cast/wes.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'topher Grace',
        character : 'Getty',
        imgSrc : 'images/cast/topher.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'Ellen Burstyn',
        character : 'Murph',
        imgSrc : 'images/cast/elean.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      {
        name : 'John Lithgow',
        character : 'Donald',
        imgSrc : 'images/cast/john.jpg',
        bio: 'Matthew David McConaughey is an American actor, producer, model, writer, and director. He first gained notice for his breakout role in the coming-of-age comedy Dazed and Confused',
        spouse:' Camila Alves',
        born:'November 4, 1969',
        Height: '1.83 m',
        upcoming: 'movie: Serenity',
        children: ' Levi Alves McConaughey, Vida Alves McConaughey, Livingston Alves McConaughey',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2vOVxJG7UrX6PiqaxMUSsn4KMDwuUtzv4kDDQ0rjEgjWkBGr',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlywggy7jzlDCKQb5DOjxi3OqpnMNRX-w8gOfUp-Fp7ONEoPP',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoje42677BFEDRTCS4LEIYQ0Zqb0hYXojXCKJRAYLxyuDmIj0SgA'
        ]
        
      },
      
  ]
};
