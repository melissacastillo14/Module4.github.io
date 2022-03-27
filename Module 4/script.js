var names = new Array();
names[0] = "Yaakov";
names[1] = "John";
names[2] = "Jen";
names[3] = "Paul";
names[4] = "Frank";
names[5] = "Larry";
names[6] = "Paula";
names[7] = "Laura";
names[8] = "Jim";
names[9] = "Kim";


for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("Goodbye " + names[i])
    } else {
        console.log("Hello " + names[i])
    }
}