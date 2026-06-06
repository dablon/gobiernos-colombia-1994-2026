# Fuentes de datos fiscales y de finanzas públicas — Colombia 1994-2026

## Documentos primarios descargados (en `datos/fuentes/`)

| # | Documento | Sigla usada | Período cubierto | URL | Notas |
|---|-----------|-------------|------------------|-----|-------|
| 1 | Marco Fiscal de Mediano Plazo 2025 | MFMP 2025 | 2023-2025 (proyecciones 2026) | https://www.minhacienda.gov.co/webcenter/portal/Minhacienda/pages_planmacroeconomico/mfmp | Documento oficial; cifras 2023-2025 de cierre; series largas mediante Gráficos |
| 2 | Informe Situación Deuda Pública 2024 (CGR) | CGR Deuda 2024 | 2010-2024 SPNF + 2020-2024 GNC + 2024 GG | https://www.contraloria.gov.co | Cuadro 1-6 (déficit fiscal GNC/GG/SPNF), Cuadro 2-2 (deuda SPNF interna/externa 2010-2024) |
| 3 | Memorias Minhacienda 2024-2025 | Memoria MH 2024 | Cierre fiscal 2023-2024 | https://www.minhacienda.gov.co | Tablas 2 (Balance), 4 (Gastos desagregados), 5 (Regla fiscal), 24-26 (SGR) |
| 4 | DIAN - Estudio Tributación y Competitividad 2005 | DIAN 2005 | 1994-2004 | https://www.dian.gov.co | **Fuente clave para serie larga**: Cuadro 1.3 con desagregación renta/IVA/GMF/timbre/patrimonio/externa en % PIB |
| 5 | DIAN Informe de Gestión 2024 | DIAN 2024 | Cierre 2024 | https://www.dian.gov.co | Cifras consolidadas 2024 (recaudo, gestión) |
| 6 | CARF - Seguimiento Fiscal Marzo 2025 | CARF Seg 2025 | 2017-2025 mensual | https://www.carf.gov.co | Recaudo mensual por tipo de impuesto |
| 7 | Fedesarrollo - Tendencias Económicas 256 (2025) | Fedesarrollo TE 256 | Cierre fiscal 2024 | https://www.repository.fedesarrollo.org.co | Análisis cierre fiscal 2024 |
| 8 | CARF - Informe al Congreso Abril 2025 | CARF 2025 | 2024-2025 + serie PIB 1986-2024 | https://www.camara.gov.co | Tabla 6 (Balance fiscal GNC), análisis de regla fiscal |
| 9 | RGI - Brief Regalías Colombia 2020 | RGI 2020 | 2012-2020 (SGR) | https://resourcegovernance.org | Información sistema SGR y reforma AL 05/2019 |

## Series del Banco Mundial (descargadas en `datos/bancos_mundial/`)

| Indicador | Código BM | Cobertura | Notas |
|-----------|-----------|-----------|-------|
| Central Gov Debt % PIB | GC.DOD.TOTL.GD.ZS | 1998-2024 (gaps en 1994-1997, 2001-2002, 2004-2007) | Cobertura 'Central Government' (incluye sub-nacional en algunos años); cifras superiores a CGR-SPNF |
| Central Gov Revenue % PIB | GC.REV.XGRT.GD.ZS | 1998-2024 | Revenue total (incluye no tributario) |
| Central Gov Expense % PIB | GC.XPN.TOTL.GD.ZS | 1998-2024 | Expense total |
| Central Gov Tax % PIB | GC.TAX.TOTL.GD.ZS | 1998-2024 | Solo tributario |
| Central Gov Net Lending % PIB | GC.NLD.TOTL.GD.ZS | 1998-2024 | Proxy del balance total |

## Hitos normativos identificados

### Reformas tributarias (1994-2024)

| Ley | Año | Presidente | Aporte recaudado estimado | Notas |
|-----|-----|-----------|---------------------------|-------|
| Ley 174/1994 | 1994 | Samper | 0,5% PIB | Estatuto Tributario actualizado |
| Ley 223/1995 | 1995 | Samper | n.d. | Reordenamiento tributario |
| Ley 383/1997 | 1997 | Samper | n.d. | Evasión y elusión |
| Decretos 2330-2331/1998 | 1998 | Pastrana | n.d. | Reformas tributarias por decretos (emergencia económica) |
| Ley 633/2000 | 2000 | Pastrana | n.d. | Crea GMF 4xmil (3xmil en 2002) |
| Ley 788/2002 | 2002 | Uribe I | 1,3% PIB | "Antiterrorismo" |
| Ley 863/2003 | 2003 | Uribe I | n.d. | GMF elevado a 4xmil |
| Ley 1111/2006 | 2006 | Uribe II | 0,4% PIB | Reforma tributaria |
| Ley 1370/2009 | 2009 | Uribe II | 0,5% PIB | Reforma tributaria (creación de GMF temporal) |
| Ley 1430/2010 | 2010 | Santos I | 0,5% PIB | |
| Ley 1607/2012 | 2012 | Santos I | 0,8% PIB | **Creación del CREE (impuesto sobre la renta para la equidad)** |
| Ley 1739/2014 | 2014 | Santos II | 0,4% PIB | "Sostenibilidad fiscal" |
| Ley 1819/2016 | 2016 | Santos II | 0,6% PIB | **Reforma estructural; ampliación base IVA, impuesto al consumo, renta** |
| Ley 1943/2018 | 2018 | Duque | 0,7% PIB | "Financiamiento" — **Declarada inexequible** por Corte Constitucional |
| Ley 2010/2019 | 2019 | Duque | 0,5% PIB | "Crecimiento Económico" (reemplazo de 1943) |
| Ley 2155/2021 | 2021 | Duque | 1,0% PIB | "Inversión Social" (extensión del IVA social, sobretasa financiera) |
| Ley 2277/2022 | 2022 | Petro | 1,5-2,0% PIB | **"Igualdad y Justicia Social"**: tarifa renta 35%, sobretasa financiera, impuesto saludables, reducción gradual GMF 4xmil→0, deducciones de regalías eliminadas, tarifa mínima efectiva 15% |

### Marco fiscal y presupuestal

| Norma | Año | Presidente | Aporte |
|-------|-----|-----------|--------|
| Ley 60/1993 | 1993 | Gaviria | Creación del régimen de transferencias a municipios (pre-SGP) |
| Ley 617/2000 | 2000 | Pastrana | **"Ley de responsabilidad fiscal territorial"**: límites de gasto de funcionamiento en alcaldías/gobernaciones |
| Ley 715/2001 | 2001 | Pastrana | **Creación del SGP** (reemplaza Ley 60/1993) |
| Ley 819/2003 | 2003 | Uribe I | **"Ley de transparencia fiscal"**: MFMP anual, regla de gasto (primary balance rule) |
| Ley 1176/2007 | 2007 | Uribe II | Modificaciones al SGP (sector agua) |
| Acto Legislativo 03/2007 | 2007 | Uribe II | **Regla fiscal constitucional**: CGR vigilar sostenibilidad, MHCP elaborar plan financiero |
| Acto Legislativo 04/2007 | 2007 | Uribe II | Modifica SGP (contratos plan) |
| Ley 1473/2011 | 2011 | Santos I | **"Regla fiscal": ancla de deuda GNC neta 55% PIB, gatillo 71% PIB, BPNE meta** |
| Acto Legislativo 05/2011 | 2011 | Santos I | **Creación del SGR (Sistema General de Regalías)** — derogado por AL 05/2019 |
| Ley 1530/2012 | 2012 | Santos I | Reglamenta SGR (ciclo de regalías, ahorro, estabilización) |
| Ley 1607/2012 | 2012 | Santos I | Reforma CREE + impuestos |
| Ley 1753/2015 | 2015 | Santos II | Plan Nacional Desarrollo 2014-2018 |
| Acto Legislativo 05/2019 | 2019 | Duque | Reforma SGR (Ley 2056/2020): 60% inversión regional, 15% PdE, 10% ambiental, 5% CTI, 10% funcionamiento |
| Ley 2056/2020 | 2020 | Duque | Reglamenta nuevo SGR |
| Ley 2155/2021 | 2021 | Duque | Modifica regla fiscal (transición 2022-2025) |
| Ley 2277/2022 | 2022 | Petro | Reforma tributaria (ver arriba) |
| Ley 2294/2023 | 2023 | Petro | Plan Nacional Desarrollo "Colombia Potencia Mundial de la Vida" |
| Ley 2441/2024 | 2024 | Petro | Presupuesto SGR bienio 2025-2026 (30,9 bn COP) |
| Acto Legislativo (en discusión) | 2025-2026 | Petro | Reforma al SGP (en trámite; reduce monto de transferencias por municipios ribereños) |

## Cobertura de los datos

- **GNC** (Gobierno Nacional Central): cifras principales en MHCP, CGR, BM
- **SPNF** (Sector Público No Financiero): cifras consolidadas (CGR Cuadro 2-2)
- **GG** (Gobierno General): MHCP memorias, CGR Cuadro 1-6
- **No cubierto**: Empresas públicas, sector financiero

## Conflictos metodológicos identificados

1. **Deuda/PIB BM (Central Government) vs CGR (SPNF)**: BM incluye gobierno sub-nacional; CGR no. La diferencia es 20-30pp del PIB.
2. **GNC BM vs GNC MHCP**: BM es proxy cercano; cifras oficiales de MHCP están en MFMP (series cortas).
3. **DIAN 1994-2004 vs BM 1998-2024**: la serie DIAN incluye Seguridad Democrática y Actividad Externa (conceptos antiguos no usados por BM).
4. **PIB nominal**: cifras DANE retropoladas base 2015 vs base 2005. Usar base 2015.

## Fuentes no consultadas directamente (referenciadas)

- Minhacienda: bloqueado por Radware Bot Manager en 2026-06-06 (no se pudo acceder a la página de Minhacienda). Documentos descargados vía URLs específicas.
- Banrep: requiere JavaScript para la mayoría de series; no descargado en este ejercicio.
- DNP - SICODIS: 404 en URLs de datasets específicos de SGP/SGR en 2026-06-06.
- Datos.gov.co: 404 para el dataset de SGP histórico.

## Tabla de archivos generados

| Archivo | Descripción | Tamaño |
|---------|-------------|--------|
| `fiscal_periodos.csv` | Indicadores por gobierno (inicio/fin) | 8 gobiernos x ~16 indicadores |
| `fiscal_anual.csv` | Serie anual 1994-2026 (con gaps documentados) | 33 años |
| `fiscal_fuentes.md` | Este documento | - |
| `fiscal_resumen.md` | Análisis por gobierno + hitos | - |
