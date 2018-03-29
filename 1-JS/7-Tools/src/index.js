

console.log('-index.js-');
import { doTraining } from './training';
import {itemName} from './training/menu';

console.log(itemName);

let btn = document.getElementById('teachBtn');
btn.addEventListener('click', () => {
    doTraining();
})

