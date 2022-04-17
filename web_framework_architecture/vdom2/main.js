import createElement from './createElement.js';
import render from './render.js';
import insertElement from './insert.js';
import diff from './diff.js';

let myElement = createElement('div', {
    attrs: { class: 'container'},
    children: [createElement('img', {
        attrs: { id: 'img', src: 'https://i.picsum.photos/id/1/200/300.jpg' },
        children: []
    })]
})


let element = render(myElement);
let rootElemet = insertElement(element, document.querySelector('#root'));

let count = 0;

setInterval(()=> {
    count += 1;
    let myVirtualElemet = createElement('div', {
        attrs: { class: 'img'},
        children: [createElement('img', {
            attrs: { id: 'img', src: `https://i.picsum.photos/id/${count}/200/300.jpg` },
            children: []
        })]
    })

    const patch = diff(myElement, myVirtualElemet);

    rootElemet = patch(rootElemet);


    myElement = myVirtualElemet;

}, 1000);
