function seAnagram(mo1, mo2) {
    return mo1.split('').sort().join('') === mo2.split('').sort().join('');
}

// Fonksyon pou mande itilizate a antre de mo yo
function tchekeAnagram() {
    let mo1 = prompt("Antre premye mo:");
    let mo2 = prompt("Antre dezyem mo:");

    let rezilta = seAnagram(mo1, mo2);

    if (rezilta) {
        console.log("Oui, yo se anagram.");
    } else {
        console.log("Non, yo pa se anagram.");
    }
}

// Rele fonksyon tchekeAnagram pou mande itilizatè a antre mo yo
tchekeAnagram();
