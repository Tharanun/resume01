function DayToSec() {
    const number1 = document.getElementById('demo3').value;
    if (!isNaN(number1)) {
        let day = parseInt(number1)
        let hour = day * 24
        let sec = hour * 60 * 60
        document.getElementById('total').innerHTML = `${day} วัน เท่ากับ ${sec} วินาที`;
    } else {
        document.getElementById('total').innerHTML = 'กรุณากรอกตัวเลขที่ถูกต้อง';
    }
}

console.log(DayToSec(2), 'วินาที');
function printAlphabets(callback) {
    function printNextAlphabet(i) {
        if (i <= 90) {
            const alphabet = String.fromCharCode(i);
            document.getElementById("demo").innerHTML = alphabet;
            setTimeout(() => {
                printNextAlphabet(i + 1);
            }, 1000);
        } else {
            callback();
        }
    }

    printNextAlphabet(65);
}

printAlphabets(() => {
    console.log("All alphabets are printed!");
});