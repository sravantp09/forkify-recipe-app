import * as model from './model.js';
import icons from 'url:../img/icons.svg'; // loading the icons path (parcel)
import 'core-js/stable'; // polifill latest js feature
import 'regenerator-runtime/runtime'; // polifill async await

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// Function that create spinner element
function renderSpinner(parentElement) {
  const html = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
  parentElement.innerHTML = '';
  parentElement.insertAdjacentHTML('afterbegin', html);
}

// Function that displays recipe inside the container.
async function showRecipe() {
  try {
    const recipeId = window.location.hash.slice(1); // getting hash from the url (if the url is localhost:3000/#1234)
    // then hash value will be #1234

    if (!recipeId) return;

    // displaying spinner (once the data is loaded we will clear the container and attach data)
    renderSpinner(recipeContainer);

    //  calling function to fetch data from recipe details
    await model.loadRecipe(recipeId);

    const { recipe } = model.state;

    console.log('Inside controller.js');
    console.log(model.state.recipe);

    // Rendering recipe details
    const html = `
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="Recipe" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            recipe.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            recipe.servings
          }</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients
            .map(ingredient => {
              // rendering ingredient
              return `
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${icons}#icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${ingredient.quantity}</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${ingredient.unit}</span>
                    ${ingredient.description}
                  </div>
                </li>
                      `;
            })
            .join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            recipe.publisher
          }</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
    // emptying the recipe container (removes spinner also)
    recipeContainer.innerHTML = '';

    // adding the recipe details to the DOM
    recipeContainer.insertAdjacentHTML('afterbegin', html);
  } catch (err) {
    console.error(err.message);
  }
}

// showRecipe();

// listening for hash change event in the url
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);

// improved event listener
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
