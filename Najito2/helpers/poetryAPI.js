const rootEndpoint = "http://poetrydb.org";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

_createTabPoems = poems => {
  let tabPoems = [];
  poems.array.forEach(element => {
    [element, ...tabPoems];
  });
  return tabPoems;
};

// retourne une recette de bière au hasard
export const getPoemByTitle = titre =>
  fetch(`${rootEndpoint}/title/` + titre, { headers })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
export const getPoemByAuthor = author =>
  fetch(`${rootEndpoint}/author/` + author, { headers })
    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
