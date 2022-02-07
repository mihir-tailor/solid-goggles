(function () {
    var old = console.log;
    var logger = document.getElementById('Output');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

let elm = [7, 8, 9, 6, 4, 3, 5, 2, 6];
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Unsorted elements");
elm.forEach(element => {
    console.log(element);
});


function BubbleSort() {
    for (let i = 0; i < elm.length; i++) {
        for (let j = 0; j < elm.length; j++) {
            if (elm[j] > elm[j + 1]) {
                let temp = elm[j];
                elm[j] = elm[j + 1];
                elm[j + 1] = temp;
            }
        }
    }

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Bubble sort ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    elm.forEach(element => {
        console.log(element);
    });
}

