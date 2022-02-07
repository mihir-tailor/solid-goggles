let elm = [7, 8, 9, 6, 4, 3, 5, 2, 6];


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
    console.log("~~~~~~~~~~~~~~~ Bubble sort ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    elm.forEach(element => {
        console.log(element);
    });
}