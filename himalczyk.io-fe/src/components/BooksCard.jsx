import React from 'react';

const mockBooks = [
    {
        id: 1,
        title: "The Pragmatic Programmer",
        image_url: "https://m.media-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg",
        review: "A must-read for any developer. This book teaches you how to be a better programmer through practical examples and timeless principles.",
        amazon_link: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052"
    },
    {
        id: 2,
        title: "Clean Code",
        image_url: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        review: "Robert C. Martin's classic on writing maintainable, clean code. The principles in this book have shaped modern software development.",
        amazon_link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
    },
    {
        id: 3,
        title: "Design Patterns",
        image_url: "https://m.media-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg",
        review: "The famous 'Gang of Four' book that introduced design patterns to the world of software development. Still relevant today.",
        amazon_link: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612"
    }
];

const BooksCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {mockBooks.map((book) => (
                <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-64">
                        <img
                            src={book.image_url}
                            alt={book.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                        <p className="text-gray-600 mb-4">{book.review}</p>
                        <a
                            href={book.amazon_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            Buy on Amazon
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BooksCard; 
