const books = [
    {
        title: "The Martian", author: "Andy Weir", year: "2026", status: "Reading"
    },
    {
        title: "Project Hail Mary", author: "Andy Weir", year: "2026", status: "Completed"
    },
    {
        title: "Processed Cheese", author: "Stephen Wright", year: "2026", status: "DNF" 
    },
    {
        title: "A Game of Thrones", author: "George RR Martin", year: "-", status: "Completed"
    },
    {
        title: "A Clash of Kings", author: "George RR Martin", year: "-", status: "Completed"
    },
    {
        title: "A Storm of Swords", author: "George RR Martin", year: "-", status: "Completed"
    },
    {
        title: "A Feast for Crows", author: "George RR Martin", year: "-", status: "Completed", 
    },
    {
        title: "A Dance with Dragons", author: "George RR Martin", year: "-", status: "Completed"
    },
    {
        title: "A Knight of the Seven Kingdoms", author: "George RR Martin", year: "-", status: "Completed"
    },
    {
        title: "Fire and Blood", author: "George RR Martin", year: "-", status: "Completed"
    },
    {
        title: "The Way of Kings", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Words of Radiance", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Oathbringer", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Rhythm of War", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Wind and Truth", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Edgedancer", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Dawnshard", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Whitesand", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Elantris", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Warbreaker", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Mistborn", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "The Well of Ascension", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "The Hero of Ages", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "The Alloy of Law", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Shadows of Self", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "The Bands of Mourning", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "The Lost Metal", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Tress of the Emerald Sea", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Yumi and the Nightmare Painter", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "The Sunlit Man", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Dragonsteel Prime", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Arcanum Unbounded", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Mistborn: Secret History", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "The Emperor's Soul", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "The Rithmatist", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Skyward", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Starsight", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Skyward Flight", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Cytonic", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Defiant", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Long Chills & Case Dough", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "Legion", author: "Brandon Sanderson", year: "-", status: "Completed"
    },
    {
        title: "The Blade Itself", author: "Joe Abercrombie", year: "-", status: "Completed"
    },
    {
        title: "Before They Are Hanged", author: "Joe Abercrombie", year: "-", status: "Completed"
    },
    {
        title: "Last Argument of Kings", author: "Joe Abercrombie", year: "-", status: "Completed"
    },
    {
        title: "Best Served Cold", author: "Joe Abercrombie", year: "-", status: "Completed"
    },
    {
        title: "The Heroes", author: "Joe Abercrombie", year: "-", status: "Completed"
    },
    {
        title: "The Hunger Games", author: "Suzanne Collins", year: "-", status: "Completed"
    },
    {
        title: "Catching Fire", author: "Suzanne Collins", year: "-", status: "Completed"
    },
    {
        title: "Mockingjay", author: "Suzanne Collins", year: "-", status: "Completed"
    },
    {
        title: "The Ballad of Songbirds and Snakes", author: "Suzanne Collins", year: "-", status: "Completed"
    },
    {
        title: "Sunrise on the Reaping", author: "Suzanne Collins", year: "-", status: "Completed"
    }
];

function populateTable(bookList) {
    const tableBody = document.getElementById('book-list-body');
    tableBody.innerHTML = '';

    for (let book of bookList) {
        const statusClass = book.status.toLowerCase();
        tableBody.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
                <td>
                    <span class="status ${statusClass}">${book.status}</span>
                </td>
            </tr>
        `;
    }
}
populateTable(books);

