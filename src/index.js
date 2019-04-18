// import _ from 'lodash'
import {cube} from './math.js'
import printMe from './print.js'
// import './style.css'
// import Icon from './01.png'
// import Data from './data.xml'
function creatEl(){
    // let el = document.createElement('div');
    let el = document.createElement('pre');
    var btn =document.createElement('button')
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // el.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // btn.innerHTML='Click me and check the console!'
    // btn.onclick = printMe;
    // el.appendChild(btn);
    el.innerHTML= [
      'Hello webpack',
      '5 cubed is equal to' + cube(5)
    ].join('\n\n')
    return el
}

document.body.appendChild(creatEl())

if (module.hot) {
     module.hot.accept('./print.js', function() {
       console.log('Accepting the updated printMe module!');
         printMe();
       })
     }