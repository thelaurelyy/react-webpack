function  component() {
    var elment = document.createElement('div');
    elment.innerHTML = "hello yy  aaaa";
    return elment;
}

document.body.appendChild(component());