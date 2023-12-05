function printAlphabets(callback) {
    function printNextAlphabet(i) {
      if (i <= 90) {
        const alphabet = String.fromCharCode(i);
        document.getElementById('result').innerText += alphabet + ' ';
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
  document.getElementById('result').innerText += 'พิมพ์ตัวอักษรเสร็จแล้ว!';
});