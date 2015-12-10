
//definisco una funzione e ne ricavo il risultato con un alert

/*
function cubes (a,b) {

  var num_1= a*a*a ;

  var num_2= b*b*b ;

    var risultato= num_1+num_2;

    return risultato;

  }

alert(cubes (2,3))
*/




//codice ottimizzato

/*
function cubes (a,b) {


    return (a*a*a)+(b*b*b);

  }

alert(cubes (2,3))
*/


//contatore che segna le "e" presenti nella stringa
//var testo = prompt();


function contae (text) {

var conto=0 ;

  if (typeof testo == "string") {

    for (var i = 0; i < testo.length; i++) {

        if (testo.charAt(i)=="e") {

          conto ++;

          return conto;

        }

    }

  }
}

//alert (conto);


//definizione di Array e stampa del numero di elementi contenuti in esso in "console"

//var monkeys = ["Babbuino","Mandrillo","Bertuccia","Orango","Gorilla"]

//console.log(monkeys.length);

//conta la lunghezza dell'ultima parola inserita nell'Arrey

//console.log(monkeys[monkeys.length-1].length);
