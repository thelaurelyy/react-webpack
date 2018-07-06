/*    原生
function  component() {
    var elment = document.createElement('div');
    elment.innerHTML = "hello yy  aaaa";
    return elment;
}

document.body.appendChild(component());*/




/*  react  */
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<div>hello thelaurelyy</div>,
    document.getElementById("app")
);




