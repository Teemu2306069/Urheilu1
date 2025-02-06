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
    super(etunimet);

    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
}

console.log("something");

joku = new Urheilija();

console.log(joku);
