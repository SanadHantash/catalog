class Book {
    constructor(id, title, author, category, rating, description, language, release_date, image) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
        this.rating = rating;
        this.description = description;
        this.language = language;
        this.release_date = release_date;
        this.image = image;
    }
}

function getdata() {
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {
            let cards = document.getElementById('book');
            data.map(element => {
                const book = new Book(element.id, element.title, element.author, element.category, element.rating, element.description, element.language, element.release_date, element.image);

                let card = document.createElement('div');
                card.className = "card";
                card.style = "width: 18rem; height:700px";
                card.innerHTML = `
                    <img src="${book.image}" class="card-img-top" alt="Book Cover" style="max-width: 100%; height:75%" >
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author: ${book.author}</p>
                        <p class="card-text">Category: ${book.category}</p>
                    </div>
                `;

                card.querySelector('.card-img-top').addEventListener('click', () => {
                    window.location.href = 'https://www.kooora.com/';
                });
                cards.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



getdata();



const categorySelect = document.getElementById('category');

categorySelect.addEventListener("change", (e) => {
    const selectedCategory = e.target.value; 

    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {
            let cards = document.getElementById('book');
            cards.innerHTML = ''; 
            data.map(element => {
                if (element.category === selectedCategory) {
                    let card = document.createElement('div');
                    card.className = "card";
                    card.style = "width: 18rem; height:700px";
                    card.innerHTML = `
                        <img src="${element.image}" class="card-img-top" alt="Book Cover" style="max-width: 100%; height:75%" >
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">Author: ${element.author}</p>
                            <p class="card-text">Category: ${element.category}</p>
                        </div>
                    `;
                    card.querySelector('.card-img-top').addEventListener('click', () => {
                        window.location.href = 'https://www.kooora.com/';
                    });
                    cards.appendChild(card);
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const authorSelect = document.getElementById('author');

authorSelect.addEventListener("change", (e) => {
    const selectedAuthor = e.target.value; 

    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {
            let cards = document.getElementById('book');
            cards.innerHTML = ''; 
            data.map(element => {
                if (element.author === selectedAuthor) {
                    let card = document.createElement('div');
                    card.className = "card";
                    card.style = "width: 18rem; height:700px";
                    card.innerHTML = `
                        <img src="${element.image}" class="card-img-top" alt="Book Cover" style="max-width: 100%; height:75%" >
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">Author: ${element.author}</p>
                            <p class="card-text">Category: ${element.category}</p>
                        </div>
                    `;
                    card.querySelector('.card-img-top').addEventListener('click', () => {
                        window.location.href = 'https://www.kooora.com/';
                    });
                    cards.appendChild(card);
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
const languageSelect = document.getElementById('language');

languageSelect.addEventListener("change", (e) => {
    const selectedLanguage = e.target.value; 

    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {
            let cards = document.getElementById('book');
            cards.innerHTML = ''; 

            data.map(element => {
                if (element.language === selectedLanguage) {
                    let card = document.createElement('div');
                    card.className = "card";
                    card.style = "width: 18rem; height:700px";
                    card.innerHTML = `
                        <img src="${element.image}" class="card-img-top" alt="Book Cover" style="max-width: 100%; height:75%" >
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">Author: ${element.author}</p>
                            <p class="card-text">Category: ${element.category}</p>
                        </div>
                    `;
                    card.querySelector('.card-img-top').addEventListener('click', () => {
                        window.location.href = 'https://www.kooora.com/';
                    });
                    cards.appendChild(card);
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});



function searchBooks() {
    let searchQuery = document.getElementById('searchInput').value;
    search(searchQuery);
}

function search(searchQuery) {
    fetch(`http://localhost:3000/books?q=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            let cards = document.getElementById('book');
            cards.innerHTML = '';

            data.map(element => {
                const book = new Book(element.id, element.title, element.author, element.category, element.rating, element.description, element.language, element.release_date, element.image);

                let card = document.createElement('div');
                card.className = "card";
                card.style = "width: 18rem; height:700px";
                card.innerHTML = `
                    <img src="${book.image}" class="card-img-top" alt="Book Cover" style="max-width: 100%; height:75%" >
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author: ${book.author}</p>
                        <p class="card-text">Category: ${book.category}</p>
                    </div>
                `;

                card.querySelector('.card-img-top').addEventListener('click', () => {
                    window.location.href = 'https://www.kooora.com/';
                });
                cards.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


const sortSelect = document.getElementById('sort');

sortSelect.addEventListener("change", (e) => {
    const selectedSort = e.target.value;

    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {
            let cards = document.getElementById('book');
            cards.innerHTML = '';

            if (selectedSort === "A-Z") {
                data = sortDataAlphabetically(data); 
            }

            if (selectedSort === "Z-A") {
                data = sortDataAlphabeticallyreverse(data);
            }

            if (selectedSort === "oldest") {
                data = sortbydateasc(data);
            }
            if (selectedSort === "latest") {
                data = sortbydatedesc(data);
            }

            if (selectedSort === "toprated") {
                data = sortbytoprated(data);
            }

            data.map(element => {
                const book = new Book(element.id, element.title, element.author, element.category, element.rating, element.description, element.language, element.release_date, element.image);

                let card = document.createElement('div');
                card.className = "card";
                card.style = "width: 18rem; height:700px";
                card.innerHTML = `
                    <img src="${book.image}" class="card-img-top" alt="Book Cover" style="max-width: 100%; height:75%" >
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author: ${book.author}</p>
                        <p class="card-text">Category: ${book.category}</p>
                    </div>
                `;

                card.querySelector('.card-img-top').addEventListener('click', () => {
                    window.location.href = 'https://www.kooora.com/';
                });
                cards.appendChild(card);
            
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function sortDataAlphabetically(data) {
    return data.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
}
function sortDataAlphabeticallyreverse(data) {
    return data.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA > titleB) {
            return -1;
        }
        if (titleA < titleB) {
            return 1;
        }
        return 0;
    });
}
function sortbydateasc(data) {
    return data.sort((a, b) => {
        const dateA = new Book(a.release_date);
        const dateB = new Book(b.release_date);
        if (dateA < dateB) {
            return -1;
        }
        if (dateA > dateB) {
            return 1;
        }
        return 0;
    });
}
function sortbydatedesc(data) {
    return data.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        if (dateA > dateB) {
            return -1;
        }
        if (dateA < dateB) {
            return 1;
        }
        return 0;
    });
}
function sortbytoprated(data) {
    return data.sort((a, b) => {
        const rateA = a.rating;
        const rateB = b.rating;
        if (rateA > rateB) {
            return -1;
        }
        if (rateA < rateB) {
            return 1;
        }
        return 0;
    });
}




// function addNewArrival(){
//     fetch('http://localhost:3000/books')
//         .then(response => response.json())
//         .then(json => {
//            const books = json.map(function(element){
//                 book = new Book(element.id, element.image, element.title, element.author, element.category, element.release_date, element.rating, element.description,element.language);
//                 return book;
//             });

//             books.sort()
//             NewArrival = books.sort(
//                 (b1, b2) => (b1.release_date < b2.release_date) ? 1 : (b1.release_date > b2.release_date) ? -1 : 0);

//                 console.log(NewArrival);
//             let cards = '<ul class="cards">';
//             for(i=0; i<10; i++){
//                 cards += `
//                 <li class="card newBooks" onclick="clickCard(${i},'newBooks')"></li>`;
//             }
//             cards += '</ul>';
//             document.getElementById('new-arrival').innerHTML = cards;
//             printCards('newBooks', NewArrival);
//         })
//         .catch(error => console.error('Error:', error));
// }

// // function for book details when (clicked) in home page
// function clickCard(id, section){
//     // get tag by the passed id
//     // let listItems = document.getElementsByTagName('li');
//     let listItems = document.querySelectorAll(`li.${section}`);
//     listItems[id].setAttribute('id','clicked');

//     console.log(`hello ${section}`);
//     // set style to change the width
//     // listItems[id].setAttribute('style','hieght: fit-content; min-width: 57%;');
//     listItems.map(element => {
//         var idAttribute = element.getAttribute("id");
//         if (idAttribute && idAttribute.indexOf('clicked') !== -1) {
//             element.removeAttribute('id');
//         }
//     });
//     console.log(listItems);
//     listItems[id].setAttribute('id','clicked');
//     // add the new content to its document
//     if(section == 'top-rate'){
//         printCards(section, topRated);
//     }else if(section = 'newBooks'){
//         printCards(section, NewArrival);
//     }else if(section == 'recommend'){
//         printCards(section, recommendation);
//     }
// }

// // function to (print the card) based on if it clicked or not
// function printCards(section, books){
//     let list = document.querySelectorAll(section);
//     let listItems = document.querySelectorAll(`li.${section}`);
//     console.log(section);
//     let i = 0;
//     listItems.map(item => {
//         var idAttribute = item.getAttribute("id");
//         console.log(idAttribute);
//         if (idAttribute && idAttribute.indexOf('clicked') !== -1) {
//             console.log('hi' + item);
//             item.setAttribute('style','height: fit-content; min-width: 57%;');
//             item.innerHTML = `
//             <div>
//                 <div class = "d-flex align-items-center justify-content-center" >
//                     <img src="${books[i].image}" class="card-img-top mb-3" alt="Book Cover" style="max-height: 317px; max-width: 208px;">
//                     <div class = "content-container p-3">
//                         <div class="d-flex justify-content-between">
//                             <h3 class="card-title">Title: ${books[i].title}</h3>
//                             <a href="#" style="text-decoration: none; color: black;"><i class="far fa-heart"></i></a>
//                         </div>
//                         <div class="card-content">
//                             <p>Author: ${books[i].author}</p>
//                             <p>Category: ${books[i].category}</p>
//                             <p>Release Date: ${books[i].release_date}</p>
//                             <p>Description: ${books[i].description}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <p>Author: ${books[i].rating} <i class="fas fa-star" style="color: gold;"></i></p>
//             </div>`;
//             i++;
//         }else{
//             item.removeAttribute('style');
//             item.innerHTML = `
//                 <div class = "text-center">
//                     <img src="${books[i].image}" class="card-img-top mb-3" alt="Book Cover" style="height: 200px">
//                     <div class = "content-container px-3">
//                         <div class="d-flex justify-content-between">
//                             <h3 class="card-title">Title: ${books[i].title}</h3>
//                             <a href="#" style="text-decoration: none; color: black;"><i class="far fa-heart"></i></a>
//                         </div>
//                         <div class="card-content">
//                             <p>Author: ${books[i].author}</p>
//                         </div>
//                     </div>
//                 </div>`;
//             i++;
//         }
//     })
// }

// addNewArrival();