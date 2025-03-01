'use strict';

const allPopulation = [];

const countries = document.querySelectorAll('.population');

for (const country of countries) {
  allPopulation.push(+country.innerHTML.split(',').join(''));
}

const total = document.querySelector('.total-population');
const avarage = document.querySelector('.average-population');

total.innerHTML = allPopulation.reduce((acc, num) => acc + num, 0);
avarage.innerHTML = Math.round(+total.innerHTML / allPopulation.length);
