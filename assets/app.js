/* Lógica de gráficos y tablas */
(function(){
  'use strict';
  const PALETTE = {
    blue:   '#1f4e79',
    blueLt: '#2e75b6',
    gray:   '#595959',
    grayLt: '#a6a6a6',
    bg:     '#f5f7fa',
    border: '#d0d7de',
    red:    '#c00000',
    green:  '#548235'
  };
  Chart.defaults.font.family = 'Segoe UI, Roboto, system-ui, sans-serif';
  Chart.defaults.color = PALETTE.gray;
  Chart.defaults.borderColor = PALETTE.border;

  // 1. PIB crecimiento
  new Chart(document.getElementById('chartPib'), {
    type:'bar',
    data:{
      labels: window.DATA.macro.periodos.map(p=>p.pre),
      datasets:[
        {label:'PIB inicio (%)', data: window.DATA.macro.periodos.map(p=>p.pibIni), backgroundColor:PALETTE.grayLt, borderColor:PALETTE.gray, borderWidth:1},
        {label:'PIB fin (%)',    data: window.DATA.macro.periodos.map(p=>p.pibFin), backgroundColor:PALETTE.blue,   borderColor:PALETTE.blue,  borderWidth:1}
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{position:'top'}, tooltip:{mode:'index', intersect:false}},
      scales:{y:{beginAtZero:false, ticks:{callback:v=>v+'%'}}}
    }
  });

  // 2. PIB per cápita USD
  new Chart(document.getElementById('chartPibPc'), {
    type:'line',
    data:{
      labels: window.DATA.macro.periodos.map(p=>p.pre),
      datasets:[
        {label:'PIB per cápita USD', data: window.DATA.macro.periodos.map(p=>p.pibpcFin),
         borderColor:PALETTE.blue, backgroundColor:'rgba(31,78,121,0.1)', fill:true, tension:0.3, pointRadius:5}
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{y:{ticks:{callback:v=>'$'+v.toLocaleString()}}}
    }
  });

  // 3. Inflación inicio vs fin
  new Chart(document.getElementById('chartInf'), {
    type:'bar',
    data:{
      labels: window.DATA.macro.periodos.map(p=>p.pre),
      datasets:[
        {label:'Inflación inicio', data: window.DATA.macro.periodos.map(p=>p.infIni), backgroundColor:PALETTE.grayLt, borderColor:PALETTE.gray, borderWidth:1},
        {label:'Inflación cierre', data: window.DATA.macro.periodos.map(p=>p.infFin), backgroundColor:PALETTE.blueLt, borderColor:PALETTE.blueLt, borderWidth:1}
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{position:'top'}},
      scales:{y:{ticks:{callback:v=>v+'%'}}}
    }
  });

  // 4. Deuda/PIB trayectoria
  new Chart(document.getElementById('chartDeuda'), {
    type:'line',
    data:{
      labels: window.DATA.macro.periodos.map(p=>p.pre),
      datasets:[{
        label:'Deuda GNC / PIB (%)', data: window.DATA.macro.periodos.map(p=>p.deuFin),
        borderColor:PALETTE.red, backgroundColor:'rgba(192,0,0,0.08)', fill:true, tension:0.25, pointRadius:5
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{y:{ticks:{callback:v=>v+'%'}}}
    }
  });

  // 5. SMMLV real acumulado por gobierno
  new Chart(document.getElementById('chartSmmlvReal'), {
    type:'bar',
    data:{
      labels: window.DATA.macro.smmlvRealAcum.map(p=>p.pre),
      datasets:[{
        label:'Variación real acumulada SMMLV (%)',
        data: window.DATA.macro.smmlvRealAcum.map(p=>p.val),
        backgroundColor: window.DATA.macro.smmlvRealAcum.map(p=>p.val>=0?PALETTE.green:PALETTE.red),
        borderColor: window.DATA.macro.smmlvRealAcum.map(p=>p.val>=0?PALETTE.green:PALETTE.red),
        borderWidth:1
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{y:{ticks:{callback:v=>v+'%'}}}
    }
  });

  // 6. Empresas creadas anual 2011-2024
  new Chart(document.getElementById('chartEmpresas'), {
    type:'line',
    data:{
      labels: window.DATA.empresarial.anual.map(e=>e.y),
      datasets:[{
        label:'Empresas nuevas matriculadas',
        data: window.DATA.empresarial.anual.map(e=>e.c),
        borderColor:PALETTE.blue, backgroundColor:'rgba(31,78,121,0.1)', fill:true, tension:0.25, pointRadius:4
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{y:{ticks:{callback:v=>(v/1000).toFixed(0)+'k'}}}
    }
  });

  // 7. Aprobación presidencial - line chart por gobierno
  const aprobLabels = ['1994','1998','2002','2006','2010','2014','2018','2022','2026'];
  // aplanar a serie temporal
  const aprSeries = [];
  window.DATA.gobernabilidad.aprob.forEach(g=>{
    g.vals.forEach((v,i)=>aprSeries.push({y: 1994 + g.vals.length*1 + i*0, v, pre:g.pre, idx:i}));
  });
  // Construir serie anual limpia: año, aprobación, presidente
  const aprPlot = [];
  let yearCursor = 1994;
  window.DATA.gobernabilidad.aprob.forEach((g,gi)=>{
    g.vals.forEach((v,i)=>{
      aprPlot.push({y: yearCursor, v, pre: g.pre});
      yearCursor++;
    });
  });

  new Chart(document.getElementById('chartAprob'), {
    type:'line',
    data:{
      labels: aprPlot.map(p=>p.y),
      datasets:[{
        label:'Aprobación presidencial promedio (%)',
        data: aprPlot.map(p=>p.v),
        borderColor:PALETTE.blue, backgroundColor:'rgba(31,78,121,0.08)', fill:true, tension:0.2, pointRadius:4
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}, tooltip:{callbacks:{label: ctx=>{const p=aprPlot[ctx.dataIndex]; return p.pre+' '+p.y+': '+p.v+'%';}}}},
      scales:{
        y:{min:0,max:100, ticks:{callback:v=>v+'%'}},
        x:{ticks:{maxTicksLimit:10}}
      }
    }
  });

  // 8. Mociones de censura intentadas
  new Chart(document.getElementById('chartMociones'), {
    type:'bar',
    data:{
      labels: window.DATA.gobernabilidad.mociones.map(m=>m.pre),
      datasets:[{
        label:'Mociones intentadas',
        data: window.DATA.gobernabilidad.mociones.map(m=>m.n),
        backgroundColor:PALETTE.grayLt, borderColor:PALETTE.gray, borderWidth:1
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}}
    }
  });

  // 9. Plebiscito 2016 - doughnut
  new Chart(document.getElementById('chartPlebiscito'), {
    type:'doughnut',
    data:{
      labels:['No: 6.726.112 (50.21%)','Sí: 6.431.229 (49.78%)','En blanco: 91.334'],
      datasets:[{
        data:[6.726112, 6.431229, 0.091334],
        backgroundColor:[PALETTE.gray, PALETTE.blue, PALETTE.grayLt],
        borderColor:PALETTE.bg, borderWidth:2
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{position:'bottom'}, tooltip:{callbacks:{label: ctx=>{const t=ctx.dataset.data.reduce((a,b)=>a+b,0); return ctx.label+' ('+(ctx.raw/t*100).toFixed(2)+'%)';}}}}
    }
  });

})();
