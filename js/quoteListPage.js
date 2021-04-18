import { quoteList } from "./quotesList.js";

// ----- Page List -----
const listPage = document.querySelector(".list-quote");

quoteList.forEach((quote) => console.log(quote));

// (quote, index) => `<li class="quote-${index}">${quote[1]}</li>`

initQuoteListPage();

// sendQuote.innerHTML = listPage;
