function ranveseChenn(chenn) {
    let chennTablo = chenn.split('');

    
    let lètFiltre = chennTablo.filter(karakte =>karakte  !== ' ').reverse().join('');

    return lètFiltre;
}

let chennTest = "Ayiti gen moun";
let rezilta = ranveseChenn(chennTest);
console.log(rezilta); 
