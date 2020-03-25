function loadFile(event) {
    let image = document.getElementsByClassName('imgoutput')[0];
    let input = document.getElementsByClassName('testando')[0];
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(input.files[0]);
    console.log(event.target.files[0])
};

function showTextTop(event) {
    let text1 = document.getElementById('chartextmemetop').value;
    let showText1 = document.getElementById('memetexttop');
    showText1.innerHTML = text1;
}

function showTextBottom(event) {
    let text2 = document.getElementById('chartextmemebottom').value;
    let showText2 = document.getElementById('memetextbottom');
    showText2.innerHTML = text2;
}   
