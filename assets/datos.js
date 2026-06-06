/* Datos extraídos de los archivos macro_periodos.csv, empresarial_*.csv y gobernabilidad_*.md */
window.DATA = {
  macro: {
    periodos: [
      // presidente, [inicio, fin], pibIni, pibFin, pibpcIni, pibpcFin, infIni, infFin, desIni, desFin, giniFin, deudaIni, deudaFin, trmFin
      {pre:"Samper",        i:1994, f:1998, pibIni:5.4, pibFin:0.6, pibpcIni:2326, pibpcFin:2605, infIni:22.9, infFin:18.7, desIni:8.3, desFin:15.0, gini:56.3, deuIni:11.4, deuFin:22.0, trm:1426},
      {pre:"Pastrana",      i:1998, f:2002, pibIni:3.4, pibFin:2.5, pibpcIni:2605, pibpcFin:2429, infIni:18.7, infFin:6.4, desIni:15.0, desFin:14.5, gini:56.0, deuIni:22.0, deuFin:39.4, trm:2505},
      {pre:"Uribe I",       i:2002, f:2006, pibIni:2.5, pibFin:6.7, pibpcIni:2429, pibpcFin:3790, infIni:6.4, infFin:4.3, desIni:14.5, desFin:11.1, gini:53.9, deuIni:39.4, deuFin:31.8, trm:2359},
      {pre:"Uribe II",      i:2006, f:2010, pibIni:6.7, pibFin:4.5, pibpcIni:3790, pibpcFin:6398, infIni:4.3, infFin:2.3, desIni:11.1, desFin:11.2, gini:54.4, deuIni:31.8, deuFin:27.7, trm:1899},
      {pre:"Santos I",      i:2010, f:2014, pibIni:4.5, pibFin:7.0, pibpcIni:6398, pibpcFin:7401, infIni:2.3, infFin:3.4, desIni:11.2, desFin:10.3, gini:53.3, deuIni:27.7, deuFin:26.7, trm:1848},
      {pre:"Santos II",     i:2014, f:2018, pibIni:4.5, pibFin:3.2, pibpcIni:8187, pibpcFin:6473, infIni:2.9, infFin:3.2, desIni:8.8, desFin:10.3, gini:51.6, deuIni:30.7, deuFin:40.7, trm:2956},
      {pre:"Duque",         i:2018, f:2022, pibIni:3.2, pibFin:7.3, pibpcIni:6817, pibpcFin:6680, infIni:3.2, infFin:10.2, desIni:9.4, desFin:10.5, gini:54.8, deuIni:40.7, deuFin:54.9, trm:4256},
      {pre:"Petro (parc.)", i:2022, f:2026, pibIni:7.3, pibFin:2.6, pibpcIni:6680, pibpcFin:null, infIni:10.2, infFin:5.1, desIni:10.5, desFin:8.3, gini:54.4, deuIni:54.9, deuFin:58.5, trm:4053}
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
    aprob: [
      {pre:"Samper",     vals:[55, 40, 28, 25, 26], label:"Proceso 8000"},
      {pre:"Pastrana",   vals:[45, 35, 30, 25, 22], label:"Colapso Caguán"},
      {pre:"Uribe I",    vals:[72, 78, 75, 70], label:"Mayor aprobación serie"},
      {pre:"Uribe II",   vals:[68, 65, 60, 57, 50], label:"Chuzadas DAS"},
      {pre:"Santos I",   vals:[55, 50, 45, 30], label:"Caída por proceso paz"},
      {pre:"Santos II",  vals:[38, 32, 25, 35], label:"Plebiscito 2016"},
      {pre:"Duque",      vals:[35, 30, 28, 32, 28], label:"Aprobación más baja inicial"},
      {pre:"Petro",      vals:[50, 40, 38, 42, 45], label:"Recuperación parcial 2025-26"}
    ],
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
      fecha:"2016-10-02",
      no: 6.726112, // millones
      si: 6.431229,
      participacion: 38.45
    }
  }
};
