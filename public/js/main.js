msg = new Array();
msg[0] = "<p>Hi, I´m Hamilton!</p>";

text1 = "";
text2 = "";
count = 0;
count2 = 0;
text = msg[0].split("");

function writetext() {
    text1 = text2 + " <span color='silver'> " + text[count] + " </span> ";
    text2 += text[count];
    var $apresent = document.querySelector('#apresent');
    $apresent.innerHTML = text1;
    if (count < text.length - 1) {
        count++;
        setTimeout('writetext()', 50);
    } else {
        count = 0;
        if (count2 != 3) {
            count2++;
            text2 += " ";
            text = eval('msg[' + count2 + '].split("")');
            setTimeout('writetext()', 50);
        }
    }
}
document.addEventListener('DOMContentLoaded', function (){
    return writetext();
});