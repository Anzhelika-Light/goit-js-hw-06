// Task 1.1 first option

const categoriesListRef = document.querySelector('#categories');

console.log('Number of categories: ', categoriesListRef.children.length);

// Task 1.1 second option

// const listItemRef = document.querySelectorAll('.item');
// console.log('Number of categories: ', listItemRef.length);



// Task 1.2

const listItemRef = document.querySelectorAll('.item');

listItemRef.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements: ', element.firstElementChild.nextElementSibling.children.length);
});

