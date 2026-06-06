/* Datos consolidados — 5 de 7 sub-agentes con output completo */
window.DATA = {
  macro: {
    periodos: [
      {pre:"Samper",        i:1994, f:1998, pibIni:5.39, pibFin:0.57, pibpcIni:2325.92, pibpcFin:2604.87, infIni:22.85, infFin:18.68, desIni:8.25, desFin:15.00, gini:56.3, deuIni:11.4, deuFin:22.0, trm:1426.42},
      {pre:"Pastrana",      i:1998, f:2002, pibIni:3.43, pibFin:2.50, pibpcIni:2604.87, pibpcFin:2428.93, infIni:18.68, infFin:6.35, desIni:15.00, desFin:14.48, gini:56.0, deuIni:22.0, deuFin:39.4, trm:2504.68},
      {pre:"Uribe I",       i:2002, f:2006, pibIni:1.68, pibFin:6.72, pibpcIni:2428.93, pibpcFin:3789.85, infIni:6.35, infFin:4.29, desIni:14.48, desFin:11.09, gini:53.5, deuIni:39.4, deuFin:31.8, trm:2358.59},
      {pre:"Uribe II",      i:2006, f:2010, pibIni:4.83, pibFin:4.49, pibpcIni:3789.85, pibpcFin:6398.30, infIni:4.29, infFin:2.27, desIni:11.09, desFin:11.15, gini:54.4, deuIni:31.8, deuFin:27.7, trm:1899.00},
      {pre:"Santos I",      i:2010, f:2014, pibIni:1.14, pibFin:4.50, pibpcIni:6398.30, pibpcFin:8187.21, infIni:2.27, infFin:2.90, desIni:11.15, desFin:8.80, gini:53.6, deuIni:27.7, deuFin:30.7, trm:2001.11},
      {pre:"Santos II",     i:2014, f:2018, pibIni:5.13, pibFin:2.56, pibpcIni:8187.21, pibpcFin:6816.97, infIni:2.90, infFin:3.24, desIni:8.80, desFin:9.36, gini:51.6, deuIni:30.7, deuFin:40.7, trm:2955.70},
      {pre:"Duque",         i:2018, f:2022, pibIni:1.36, pibFin:7.33, pibpcIni:6816.97, pibpcFin:6680.45, infIni:3.24, infFin:10.18, desIni:9.36, desFin:10.54, gini:54.8, deuIni:40.7, deuFin:54.9, trm:4256.19},
      {pre:"Petro (parc.)", i:2022, f:2026, pibIni:10.80, pibFin:2.60, pibpcIni:6680.45, pibpcFin:null, infIni:10.18, infFin:5.10, desIni:10.54, desFin:8.29, gini:54.4, deuIni:54.9, deuFin:58.5, trm:4052.86, trmSpot:3572.85}
    ],
    smmlvRealAcum: [
      {pre:"Samper",     val:-18.1},
      {pre:"Pastrana",   val:-8.1},
      {pre:"Uribe I",    val:-0.1},
      {pre:"Uribe II",   val:+0.6},
      {pre:"Santos I",   val:+4.4},
      {pre:"Santos II",  val:+1.4},
      {pre:"Duque",      val:+2.4},
      {pre:"Petro",      val:+3.2}
    ]
  },
  empresarial: {
    anual: [
      {y:2011, c:211938, label:"Inicio serie RUES"},
      {y:2012, c:214500},
      {y:2013, c:218000},
      {y:2014, c:217000, label:"Fin beneficios Ley 1429"},
      {y:2015, c:171773, label:"Caída -20.9%"},
      {y:2017, c:294896, label:"Pico Ley 1780 (+71.7% vs 2015)"},
      {y:2018, c:303027},
      {y:2019, c:306563, label:"Máx. histórico pre-pandemia"},
      {y:2020, c:278302, label:"COVID: -9.2% (abril -86.9%)"},
      {y:2021, c:307679},
      {y:2022, c:310731, label:"Récord histórico Petro año 1"},
      {y:2023, c:305997, label:"Primer año caída Petro"},
      {y:2024, c:297475, label:"Cancelación récord 16%"}
    ]
  },
  gobernabilidad: {
    aprPlot: (() => {
      // aplanar a serie temporal
      const data = [
        {pre:"Samper",     vals:[55, 40, 28, 25, 26]},
        {pre:"Pastrana",   vals:[45, 35, 30, 25, 22]},
        {pre:"Uribe I",    vals:[72, 78, 75, 70]},
        {pre:"Uribe II",   vals:[68, 65, 60, 57, 50]},
        {pre:"Santos I",   vals:[55, 50, 45, 30]},
        {pre:"Santos II",  vals:[38, 32, 25, 35]},
        {pre:"Duque",      vals:[35, 30, 28, 32, 28]},
        {pre:"Petro",      vals:[50, 40, 38, 42, 45]}
      ];
      const out = []; let y = 1994;
      data.forEach(g => g.vals.forEach(v => { out.push({y, v, pre: g.pre}); y++; }));
      return out;
    })(),
    mociones: [
      {pre:"Samper",     n:4},
      {pre:"Pastrana",   n:3},
      {pre:"Uribe I",    n:2},
      {pre:"Uribe II",   n:4},
      {pre:"Santos I",   n:5},
      {pre:"Santos II",  n:6},
      {pre:"Duque",      n:15},
      {pre:"Petro",      n:20}
    ],
    plebiscito: {
      no: 6.726112, si: 6.431229, blanco: 0.091334
    }
  },
  seguridad: {
    // tasa de homicidio por 100k habitantes, fin de cada gobierno
    tasaHomicidios: [
      {pre:"Samper",    val:61.09, year:1998, evento:"Cierre Caguán"},
      {pre:"Pastrana",  val:70.40, year:2002, evento:"RÉCORD histórico"},
      {pre:"Uribe I",   val:38.50, year:2006, evento:"Seguridad Democrática"},
      {pre:"Uribe II",  val:34.52, year:2010, evento:"Mínimo Uribe + Jaque"},
      {pre:"Santos I",  val:27.80, year:2014, evento:"Diálogos La Habana"},
      {pre:"Santos II", val:23.82, year:2018, evento:"MÍNIMO histórico desde 1979"},
      {pre:"Duque",     val:26.50, year:2022, evento:"Disidencias + crisis post-acuerdo"},
      {pre:"Petro",     val:24.91, year:2026, evento:"Paz Total — estabilización parcial"}
    ],
    coca: [
      {pre:"Pastrana",  val:102071, year:2002},
      {pre:"Uribe I",   val:78000,  year:2006},
      {pre:"Uribe II",  val:62000,  year:2010, evento:"Mínimo histórico"},
      {pre:"Santos I",  val:69000,  year:2014},
      {pre:"Santos II", val:117000, year:2018, evento:"+69% vs 2014"},
      {pre:"Duque",     val:170000, year:2022, evento:"Récord absoluto"},
      {pre:"Petro",     val:130000, year:2025, evento:"Preliminar — reducción parcial"}
    ],
    secuestros: [
      {pre:"Uribe I",  ini:2917, fin:687,  pct:-76, evento:"Plan Rescate"},
      {pre:"Uribe II", ini:687,  fin:213},
      {pre:"Santos I", ini:213,  fin:205},
      {pre:"Santos II",ini:205,  fin:172},
      {pre:"Duque",    ini:172,  fin:264,  evento:"Reactivación"},
      {pre:"Petro",    ini:264,  fin:289}
    ],
    lideres: [
      {pre:"Santos II",  n:78,  year:2016, evento:"Inicio conteo Indepaz"},
      {pre:"Santos II",  n:152, year:2018, evento:"Crisis post-acuerdo"},
      {pre:"Duque",      n:310, year:2020, evento:"Pico histórico"},
      {pre:"Duque",      n:215, year:2022},
      {pre:"Petro",      n:180, year:2025, evento:"Preliminar — Paz Total"}
    ]
  }
};
