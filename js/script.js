import { quoteList } from "./quotesList.js";
import { initQuoteList } from "./randomlyQuote.js";
import { parallax } from "./parallax.js";

const btn = document.querySelector("#btn");

btn.addEventListener("click", initQuoteList);

parallax("#galaxy-img");
