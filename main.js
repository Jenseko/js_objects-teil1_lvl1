console.log("Happy Hippo Flip");

// ≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-2_js-Objects ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

let person = {
    name :  "Jens",
    alter : 35,
    sagNameAlter: function (){
        alert(`Hallo ${this.name}, du scheinst mit ${this.alter} alt genug zu sein.`);
        console.log(person.name,person.alter);
    }
}

// person.sagNameAlter();


// ≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-4_js-Object-Accessing ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

let unsereHaustiere = [
    {
    tiertyp: "Katze",
    names: [ "Gipsy", "Nala", "Dinky"]
    },
    {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"]
    }
];

// console.log(unsereHaustiere[0].names[1]);
// console.log(unsereHaustiere[1].names[2]);
// console.log(unsereHaustiere[0].names);
// console.log(unsereHaustiere[1].names);

// unsereHaustiere[1].names = ["Balu", "Snoopy"];
// console.log(unsereHaustiere[1].names);


// ≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-5_js-Object-Accessing ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

let unserLager = {
    schreibtisch: {
    schublade: "Hefter"
    },
    schrank: {
    "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
    },
    "Untere Schublade": "Cola"
    }
};

// console.log(unserLager.schrank["Obere Schublade"].Ordner2);
// console.log(unserLager.schrank["Untere Schublade"]);
// console.log(unserLager.schreibtisch.schublade);


// ≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-6_js-Objects-Arrays-Accessing ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈


let myMusic = [
    {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
    },
    {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true
    },
    {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV ",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true
    },
    {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
    }
];


// console.log(myMusic[0].kunstler);
// console.log(myMusic[1].formate[3]);
// console.log(myMusic[1].gold);
// console.log(myMusic[2].release_jahr);
// console.log(myMusic[3].release_jahr);
// console.log(myMusic[3].formate[2]);
// console.log(myMusic[3].title.split(" ")[4]);
// console.log(myMusic[2].title.split(" ")[2]);
// console.log(myMusic[1].kunstler.split(" ")[1]);

// myMusic.push({
//     kunstler : "Erra",
//     title : "Erra",
//     release_jahr : 2019,
//     formate: ["LP", "CD", "Download"],
//     gold: false,
// })

// console.log(myMusic);

// ≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-7_js-Objects-Arrays-Loop-Accessing ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈


// myMusic.forEach((elt) => {
//     console.log(elt.kunstler);
//     console.log(elt.title);
//     console.log(elt.formate);
//     document.write(elt.kunstler + "<br>");
//     document.write(elt.title + "<br>");
//     document.write(elt.formate + "<br>" + "<br>");

//     if (elt.release_jahr >= 1975) {
//     console.log(elt)
// };
// });


// ≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-8_js-Objects-Arrays-Loop-Accessing ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

let studentData = [
    {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

// studentData.forEach((elt) => {
//     console.log(elt.name);
//     console.log(elt.coop);
//     console.log(elt.emails);
// })

// studentData.forEach((elt) => {
//     console.log([elt.address.city]);
// })

