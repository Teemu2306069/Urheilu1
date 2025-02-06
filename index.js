class Henkilo {
  constructor(etunimet, sukunimet, kutsumanimi, syntymävuosi) {
    this.etunimet = etunimet;
    this.sukunimet = sukunimet;
    this.kutsumanimi = kutsumanimi;
    this.syntymävuosi = syntymävuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimet,
    kutsumanimi,
    syntymävuosi,
    linkkiKuvaan,
    omapaino,
    laji,
    saavutukset
  ) {
    //Perityt
    super(etunimet, sukunimet, kutsumanimi, syntymävuosi);
    //Luokan omat
    this._linkkiKuvaan = linkkiKuvaan;
    this._omapaino = omapaino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }

  //Get ja set
  get linkkiKuvaan() {
    return this._linkkiKuvaan;
  }
  set linkkiKuvaan(uusiLinkkiKuvaan) {
    this._linkkiKuvaan = uusiLinkkiKuvaan;
  }

  get omapaino() {
    return this._omapaino;
  }
  set omapaino(uusiPaino) {
    if (uusiPaino > 0) {
      this._omapaino = uusiPaino;
    } else {
      console.log("Liian kevyt meininki");
    }
  }

  get laji() {
    return this._laji;
  }
  set laji(uusiLaji) {
    this._laji = uusiLaji;
  }

  get saavutukset() {
    return this._saavutukset;
  }
  set saavutukset(uusiSaavutukset) {
    this._saavutukset = uusiSaavutukset;
  }
}

const urheilija1 = new Urheilija(
  "Matti",
  "Esimerkki",
  "Masa",
  1990,
  "https://example.com/image.jpg",
  75,
  "Juoksu",
  ["Olympiakulta", "MM-hopea"]
);

console.log(urheilija1);
