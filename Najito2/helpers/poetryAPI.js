const rootEndpoint = "http://poetrydb.org";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
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
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
