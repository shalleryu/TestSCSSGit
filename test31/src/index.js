import bar from './bar';
import _ from 'lodash';

document.getElementById("bar").innerText = bar();

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());