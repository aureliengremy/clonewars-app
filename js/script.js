import { quoteList } from "./quotesList.js";
import { initQuoteList } from "./randomlyQuote";
import { parallax } from "./parallax.js";

const btn = document.querySelector("#btn");

console.log(initQuoteList());

btn.addEventListener("click", initQuoteList);

parallax("#galaxy-img");
