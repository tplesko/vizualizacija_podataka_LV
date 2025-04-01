// Originalni podaci
const fs = require('fs');

const rawData = {
    "columns": [
      { "code": "Kategorija", "text": "Kategorija", "type": "d" },
      { "code": "Godina", "text": "Godina", "type": "d" },
      { "code": "Tablica 2. Proizvodnja svježih mliječnih proizvoda u mljekarama u tonama", "text": "Tablica 2. Proizvodnja svježih mliječnih proizvoda u mljekarama u tonama", "type": "c" }
    ],
    "data": [
        {"key":["0","0"],"values":["340952"]},
        {"key":["0","1"],"values":["327678"]},
        {"key":["0","2"],"values":["334405"]},
        {"key":["0","3"],"values":["331989"]},
        {"key":["0","4"],"values":["310851"]},
        {"key":["0","5"],"values":["294125"]},
        {"key":["0","6"],"values":["276380"]},
        {"key":["0","7"],"values":["296793"]},
        {"key":["0","8"],"values":["293445"]},
        {"key":["0","9"],"values":["279195"]},
        {"key":["0","10"],"values":["291871"]},
        {"key":["0","11"],"values":["296746"]},
        {"key":["0","12"],"values":["281820"]},
        {"key":["0","13"],"values":["264776"]},
        {"key":["0","14"],"values":["277769"]},
        {"key":["0","15"],"values":["252898"]},
        {"key":["1","0"],"values":["149647"]},
        {"key":["1","1"],"values":["142453"]},
        {"key":["1","2"],"values":["148044"]},
        {"key":["1","3"],"values":["140541"]},
        {"key":["1","4"],"values":["138489"]},
        {"key":["1","5"],"values":["144427"]},
        {"key":["1","6"],"values":["135523"]},
        {"key":["1","7"],"values":["150152"]},
        {"key":["1","8"],"values":["149958"]},
        {"key":["1","9"],"values":["149877"]},
        {"key":["1","10"],"values":["152868"]},
        {"key":["1","11"],"values":["157270"]},
        {"key":["1","12"],"values":["155362"]},
        {"key":["1","13"],"values":["137135"]},
        {"key":["1","14"],"values":["144465"]},
        {"key":["1","15"],"values":["129226"]},
        {"key":["2","0"],"values":["161734"]},
        {"key":["2","1"],"values":["160429"]},
        {"key":["2","2"],"values":["170927"]},
        {"key":["2","3"],"values":["179878"]},
        {"key":["2","4"],"values":["165121"]},
        {"key":["2","5"],"values":["144004"]},
        {"key":["2","6"],"values":["135506"]},
        {"key":["2","7"],"values":["142003"]},
        {"key":["2","8"],"values":["139712"]},
        {"key":["2","9"],"values":["126072"]},
        {"key":["2","10"],"values":["135955"]},
        {"key":["2","11"],"values":["136614"]},
        {"key":["2","12"],"values":["123396"]},
        {"key":["2","13"],"values":["125123"]},
        {"key":["2","14"],"values":["130208"]},
        {"key":["2","15"],"values":["120610"]},
        {"key":["3","0"],"values":["29571"]},
        {"key":["3","1"],"values":["24796"]},
        {"key":["3","2"],"values":["15434"]},
        {"key":["3","3"],"values":["11570"]},
        {"key":["3","4"],"values":["7241"]},
        {"key":["3","5"],"values":["5694"]},
        {"key":["3","6"],"values":["5351"]},
        {"key":["3","7"],"values":["4638"]},
        {"key":["3","8"],"values":["3775"]},
        {"key":["3","9"],"values":["3246"]},
        {"key":["3","10"],"values":["3048"]},
        {"key":["3","11"],"values":["2862"]},
        {"key":["3","12"],"values":["3062"]},
        {"key":["3","13"],"values":["2518"]},
        {"key":["3","14"],"values":["3096"]},
        {"key":["3","15"],"values":["3062"]},
        {"key":["4","0"],"values":["1009"]},
        {"key":["4","1"],"values":["1461"]},
        {"key":["4","2"],"values":["1142"]},
        {"key":["4","3"],"values":["1277"]},
        {"key":["4","4"],"values":["1438"]},
        {"key":["4","5"],"values":["1554"]},
        {"key":["4","6"],"values":["z"]},
        {"key":["4","7"],"values":["z"]},
        {"key":["4","8"],"values":["z"]},
        {"key":["4","9"],"values":["z"]},
        {"key":["4","10"],"values":["z"]},
        {"key":["4","11"],"values":["z"]},
        {"key":["4","12"],"values":["z"]},
        {"key":["4","13"],"values":["z"]},
        {"key":["4","14"],"values":["z"]},
        {"key":["4","15"],"values":["z"]},
        {"key":["5","0"],"values":["26274"]},
        {"key":["5","1"],"values":["26731"]},
        {"key":["5","2"],"values":["26201"]},
        {"key":["5","3"],"values":["25988"]},
        {"key":["5","4"],"values":["26504"]},
        {"key":["5","5"],"values":["26660"]},
        {"key":["5","6"],"values":["26350"]},
        {"key":["5","7"],"values":["27342"]},
        {"key":["5","8"],"values":["29408"]},
        {"key":["5","9"],"values":["30506"]},
        {"key":["5","10"],"values":["32037"]},
        {"key":["5","11"],"values":["35406"]},
        {"key":["5","12"],"values":["33033"]},
        {"key":["5","13"],"values":["32096"]},
        {"key":["5","14"],"values":["32458"]},
        {"key":["5","15"],"values":["32114"]},
        {"key":["6","0"],"values":["86378"]},
        {"key":["6","1"],"values":["82076"]},
        {"key":["6","2"],"values":["78476"]},
        {"key":["6","3"],"values":["81943"]},
        {"key":["6","4"],"values":["81464"]},
        {"key":["6","5"],"values":["73981"]},
        {"key":["6","6"],"values":["71515"]},
        {"key":["6","7"],"values":["84972"]},
        {"key":["6","8"],"values":["90384"]},
        {"key":["6","9"],"values":["85960"]},
        {"key":["6","10"],"values":["96098"]},
        {"key":["6","11"],"values":["94715"]},
        {"key":["6","12"],"values":["89522"]},
        {"key":["6","13"],"values":["89917"]},
        {"key":["6","14"],"values":["90069"]},
        {"key":["6","15"],"values":["92851"]},
        {"key":["7","0"],"values":["13552"]},
        {"key":["7","1"],"values":["22226"]},
        {"key":["7","2"],"values":["21255"]},
        {"key":["7","3"],"values":["21981"]},
        {"key":["7","4"],"values":["19175"]},
        {"key":["7","5"],"values":["21774"]},
        {"key":["7","6"],"values":["20102"]},
        {"key":["7","7"],"values":["19506"]},
        {"key":["7","8"],"values":["18949"]},
        {"key":["7","9"],"values":["19432"]},
        {"key":["7","10"],"values":["21968"]},
        {"key":["7","11"],"values":["23630"]},
        {"key":["7","12"],"values":["22777"]},
        {"key":["7","13"],"values":["22512"]},
        {"key":["7","14"],"values":["20012"]},
        {"key":["7","15"],"values":["17784"]},
        {"key":["8","0"],"values":["6350"]},
        {"key":["8","1"],"values":["6295"]},
        {"key":["8","2"],"values":["5725"]},
        {"key":["8","3"],"values":["6115"]},
        {"key":["8","4"],"values":["6424"]},
        {"key":["8","5"],"values":["7808"]},
        {"key":["8","6"],"values":["z"]},
        {"key":["8","7"],"values":["z"]},
        {"key":["8","8"],"values":["z"]},
        {"key":["8","9"],"values":["z"]},
        {"key":["8","10"],"values":["z"]},
        {"key":["8","11"],"values":["z"]},
        {"key":["8","12"],"values":["z"]},
        {"key":["8","13"],"values":["z"]},
        {"key":["8","14"],"values":["z"]},
        {"key":["8","15"],"values":["12177"]}
    ] 
};
  
  
  const transformData = rawData.data.map(entry => {
    const year = 2008 + parseInt(entry.key[1]);  // Pretpostavljamo da je prvi element ključ za godinu
    const categoryIndex = entry.key[0];  // Kategorija u key[0]
    
    // Mapa za kategorije na tekstualne nazive
    const categories = [
      "Mlijeko za piće (konzumno)",  // 0
      "Neobrano i sirovo mlijeko",  // 1
      "Djelomično obrano mlijeko",  // 2
      "Obrano mlijeko",  // 3
      "Mlaćenica", //4
      "Vrhnje",  // 5
      "Fermentirani proizvodi (jogurti, napici od jogurta i dr.)",  // 6
      "Napici s mliječnom bazom", // 7
      "Ostali svježi proizvodi (mliječni žele i sl.)", //8
    ];
  
    const category = categories[categoryIndex];
    
    const proizvodnja = entry.values[0] === "z" ? 0 : parseInt(entry.values[0]);

    return {
      godina: year,
      kategorija: category,
      proizvodnja: proizvodnja  // Proizvodnja je vrijednost u 'values'
    };
  });
  
  // Ispis transformiranih podataka
  fs.writeFile('transformirani_podaci.json', JSON.stringify(transformData, null, 2), (err) => {
    if (err) {
      console.log('Došlo je do pogreške prilikom spremanja datoteke:', err);
    } else {
      console.log('Podaci su uspješno spremljeni u transformirani_podaci.json');
    }
});
  