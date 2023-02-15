const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const alignLeftButton = document.getElementById('align-left');
const alignCenterButton = document.getElementById('align-center');
const alignRightButton = document.getElementById('align-right');
const alignJustifyButton = document.getElementById('align-justify');
const copyButton = document.getElementById('copy');
const resetButton = document.getElementById('reset');

// Common Function

function handler(className, element) {
    const text = document.getElementById('text');
    text.classList.toggle(className);
    const button = document.getElementById(element);
    button.classList.toggle('active');
}

function removeClass(element1, element2, element3) {
    const text = document.getElementById('text');
    text.classList.remove(element1, element2, element3);
    document.getElementById(element1).classList.remove('active');
    document.getElementById(element2).classList.remove('active');
    document.getElementById(element3).classList.remove('active');
}

boldButton.addEventListener('click', function(){
    handler('bold', 'bold');
});

italicButton.addEventListener('click', function(){
    handler('italic', 'italic');
});

underlineButton.addEventListener('click', function(){
    handler('underline', 'underline');
});

alignLeftButton.addEventListener('click', function(){
    handler('align-left', 'align-left');
    removeClass('align-center', 'align-right', 'align-justify');
});

alignCenterButton.addEventListener('click', function(){
    handler('align-center', 'align-center');
    removeClass('align-left', 'align-right', 'align-justify');
});

alignRightButton.addEventListener('click', function(){
    handler('align-right', 'align-right');
    removeClass('align-center', 'align-left', 'align-justify');
});

alignJustifyButton.addEventListener('click', function(){
    handler('align-justify', 'align-justify');
    removeClass('align-center', 'align-right', 'align-left');
});

copyButton.addEventListener('click', function(){
    handler('italic', 'italic');
});

resetButton.addEventListener('click', function(){
    const text = document.getElementById('text');
    text.value = '';
});