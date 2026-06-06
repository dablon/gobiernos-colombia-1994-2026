/* Lógica de gráficos y tablas */
(function(){
  'use strict';
  const P = {blue:'#1f4e79', blueLt:'#2e75b6', gray:'#595959', grayLt:'#a6a6a6', bg:'#f5f7fa', border:'#d0d7de', red:'#c00000', green:'#548235'};
  Chart.defaults.font.family = 'Segoe UI, Roboto, system-ui, sans-serif';
  Chart.defaults.color = P.gray; Chart.defaults.borderColor = P.border;

  // 1. PIB crecimiento
  new Chart(document.getElementById('chartPib'), {type:'bar', data:{
    labels: window.DATA.macro.periodos.map(p=>p.pre),
    datasets:[
      {label:'PIB inicio (%)', data: window.DATA.macro.periodos.map(p=>p.pibIni), backgroundColor:P.grayLt, borderColor:P.gray, borderWidth:1},
      {label:'PIB fin (%)',    data: window.DATA.macro.periodos.map(p=>p.pibFin), backgroundColor:P.blue,   borderColor:P.blue,  borderWidth:1}
    ]}, options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'top'}, tooltip:{mode:'index', intersect:false}}, scales:{y:{beginAtZero:false, ticks:{callback:v=>v+'%'}}}}});

  // 2. PIB per cápita USD
  new Chart(document.getElementById('chartPibPc'), {type:'line', data:{
    labels: window.DATA.macro.periodos.map(p=>p.pre),
    datasets:[{label:'PIB per cápita USD', data: window.DATA.macro.periodos.map(p=>p.pibpcFin), borderColor:P.blue, backgroundColor:'rgba(31,78,121,0.1)', fill:true, tension:0.3, pointRadius:5}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{y:{ticks:{callback:v=>'$'+v.toLocaleString()}}}}});

  // 3. Inflación
  new Chart(document.getElementById('chartInf'), {type:'bar', data:{
    labels: window.DATA.macro.periodos.map(p=>p.pre),
    datasets:[
      {label:'Inflación inicio', data: window.DATA.macro.periodos.map(p=>p.infIni), backgroundColor:P.grayLt, borderColor:P.gray, borderWidth:1},
      {label:'Inflación cierre', data: window.DATA.macro.periodos.map(p=>p.infFin), backgroundColor:P.blueLt, borderColor:P.blueLt, borderWidth:1}
    ]}, options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'top'}}, scales:{y:{ticks:{callback:v=>v+'%'}}}}});

  // 4. Deuda/PIB
  new Chart(document.getElementById('chartDeuda'), {type:'line', data:{
    labels: window.DATA.macro.periodos.map(p=>p.pre),
    datasets:[{label:'Deuda GNC / PIB (%)', data: window.DATA.macro.periodos.map(p=>p.deuFin), borderColor:P.red, backgroundColor:'rgba(192,0,0,0.08)', fill:true, tension:0.25, pointRadius:5}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{y:{ticks:{callback:v=>v+'%'}}}}});

  // 5. SMMLV real
  new Chart(document.getElementById('chartSmmlvReal'), {type:'bar', data:{
    labels: window.DATA.macro.smmlvRealAcum.map(p=>p.pre),
    datasets:[{label:'Variación real acumulada SMMLV (%)', data: window.DATA.macro.smmlvRealAcum.map(p=>p.val),
      backgroundColor: window.DATA.macro.smmlvRealAcum.map(p=>p.val>=0?P.green:P.red),
      borderColor: window.DATA.macro.smmlvRealAcum.map(p=>p.val>=0?P.green:P.red), borderWidth:1}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{y:{ticks:{callback:v=>v+'%'}}}}});

  // 6. Empresas
  new Chart(document.getElementById('chartEmpresas'), {type:'line', data:{
    labels: window.DATA.empresarial.anual.map(e=>e.y),
    datasets:[{label:'Empresas nuevas', data: window.DATA.empresarial.anual.map(e=>e.c), borderColor:P.blue, backgroundColor:'rgba(31,78,121,0.1)', fill:true, tension:0.25, pointRadius:4}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{y:{ticks:{callback:v=>(v/1000).toFixed(0)+'k'}}}}});

  // 7. Aprobación presidencial
  const ap = window.DATA.gobernabilidad.aprPlot;
  new Chart(document.getElementById('chartAprob'), {type:'line', data:{
    labels: ap.map(p=>p.y),
    datasets:[{label:'Aprobación presidencial promedio (%)', data: ap.map(p=>p.v), borderColor:P.blue, backgroundColor:'rgba(31,78,121,0.08)', fill:true, tension:0.2, pointRadius:4}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}, tooltip:{callbacks:{label: ctx=>{const p=ap[ctx.dataIndex]; return p.pre+' '+p.y+': '+p.v+'%';}}}}, scales:{y:{min:0,max:100, ticks:{callback:v=>v+'%'}}, x:{ticks:{maxTicksLimit:10}}}}});

  // 8. Mociones
  new Chart(document.getElementById('chartMociones'), {type:'bar', data:{
    labels: window.DATA.gobernabilidad.mociones.map(m=>m.pre),
    datasets:[{label:'Mociones intentadas', data: window.DATA.gobernabilidad.mociones.map(m=>m.n), backgroundColor:P.grayLt, borderColor:P.gray, borderWidth:1}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}}}});

  // 9. Plebiscito 2016
  const pl = window.DATA.gobernabilidad.plebiscito;
  new Chart(document.getElementById('chartPlebiscito'), {type:'doughnut', data:{
    labels:['No: 6.726.112 (50.21%)','Sí: 6.431.229 (49.78%)','En blanco: 91.334'],
    datasets:[{data:[pl.no, pl.si, pl.blanco], backgroundColor:[P.gray, P.blue, P.grayLt], borderColor:P.bg, borderWidth:2}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}, tooltip:{callbacks:{label: ctx=>{const t=ctx.dataset.data.reduce((a,b)=>a+b,0); return ctx.label+' ('+(ctx.raw/t*100).toFixed(2)+'%)';}}}}}});

  // 10. Tasa de homicidios
  new Chart(document.getElementById('chartHomicidios'), {type:'line', data:{
    labels: window.DATA.seguridad.tasaHomicidios.map(h=>h.pre),
    datasets:[{label:'Tasa de homicidio (por 100k hab.)', data: window.DATA.seguridad.tasaHomicidios.map(h=>h.val), borderColor:P.red, backgroundColor:'rgba(192,0,0,0.08)', fill:true, tension:0.3, pointRadius:5}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{y:{ticks:{callback:v=>v+'/100k'}}}}});

  // 11. Coca
  new Chart(document.getElementById('chartCoca'), {type:'bar', data:{
    labels: window.DATA.seguridad.coca.map(c=>c.pre),
    datasets:[{label:'Cultivos de coca (ha)', data: window.DATA.seguridad.coca.map(c=>c.val), backgroundColor:P.grayLt, borderColor:P.gray, borderWidth:1}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{y:{ticks:{callback:v=>(v/1000).toFixed(0)+'k ha'}}}}});

  // 12. Líderes sociales asesinados
  new Chart(document.getElementById('chartLideres'), {type:'line', data:{
    labels: window.DATA.seguridad.lideres.map(l=>l.pre+' '+l.year),
    datasets:[{label:'Líderes sociales asesinados', data: window.DATA.seguridad.lideres.map(l=>l.n), borderColor:P.red, backgroundColor:'rgba(192,0,0,0.08)', fill:true, tension:0.25, pointRadius:5}]},
    options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true}}}}});

})();
