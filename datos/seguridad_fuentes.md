# Fuentes de Datos - Seguridad y Conflicto en Colombia 1994-2026

## Fuentes Primarias

### Policía Nacional de Colombia
- **URL**: https://www.policia.gov.co/estadistica-delictiva
- **Datos**: Homicidios, secuestros, extorsión, hurtos
- **Cobertura**: 1994-presente
- **Notas**: Serie SIEDCO - Sistema de Estadísticas Delictivas
- **Dashboard ArcGIS**: https://www.arcgis.com/apps/dashboards/ae7be6e94afe4c7395d06dbb22bb7a88

### Ministerio de Justicia - SIPC
- **URL**: https://www.minjusticia.gov.co/programas-co/politica-criminal/Paginas/SIPC-Tasa-de-Homicidios-Basada-en-reporte-de-homicidios-de-la-Policia-Nacional.aspx
- **Datos**: Tasa de homicidios basada en Policía Nacional
- **Cobertura**: 1979-presente

### Indepaz - Observatorio de DDHH y Conflictividades
- **URL**: https://indepaz.org.co
- **Datos**: Masacres, líderes sociales asesinados, firmantes de paz asesinados
- **Cobertura**: 2016-presente (sistemático), retroactivo para masacres
- **Metodología**: Masacre = 3+ personas en mismo hecho/tiempo/lugar
- **Informe masacres**: https://indepaz.org.co/informe-de-masacres-en-colombia-durante-el-2020-2021/

### UNODC - Monitoreo de Cultivos Ilícitos (SIMCI)
- **URL**: https://www.unodc.org/colombia/es/monitoreo-de-cultivos-ilicitos.html
- **Datos**: Hectáreas de coca, amapola
- **Cobertura**: 1999-presente (no hay dato oficial antes de 1999)
- **Informes anuales**: Colombia Coca Survey (2000-2024)

### DANE - Microdatos
- **URL**: https://microdatos.dane.gov.co
- **Catálogo 432**: Estadísticas de Secuestro y Extorsión 1996-2015
- **Datos**: Secuestro, extorsión por departamento

### UARIV - Unidad de Víctimas
- **URL**: https://www.unidadvictimas.gov.co
- **Datos**: Víctimas del conflicto acumuladas, desplazamiento
- **Sistema**: Registro Único de Víctimas (RUV)
- **Cobertura**: 1985-presente

### CODHES
- **URL**: http://www.codhes.org.co
- **Datos**: Desplazamiento forzado (independiente)
- **Notas**: Cifras generalmente más altas que UARIV

### OAICRE - Programa Acción Integral contra Minas Antipersona
- **URL**: https://www.accioncontraminas.gov.co
- **Datos**: Víctimas de minas antipersona
- **Cobertura**: 1990-presente

### Defensoría del Pueblo - SAT
- **URL**: https://www.defensoria.gov.co
- **Datos**: Sistema de Alertas Tempranas, acciones de grupos armados

### FIP - Fundación Ideas para la Paz
- **URL**: https://fundacionideaspaz.org
- **Datos**: Acciones armadas de grupos ilegales
- **Análisis**: Disidencias, ELN, Clan del Golfo

### JEP - Jurisdicción Especial para la Paz
- **URL**: https://www.jep.gov.co
- **Datos**: Falsos positivos, crímenes de lesa humanidad
- **Cobertura**: Casos 1994-2016 (principalmente)

## Fuentes Secundarias Internacionales

### Banco Mundial
- **URL**: https://datos.bancomundial.org/indicador/VC.IHR.PSRC.P5?locations=CO
- **Datos**: Tasa de homicidios internacional (UNODC)
- **Cobertura**: 1990-presente

### INEGI (México) - Referencia
- **URL**: https://www.inegi.org.mx
- **Uso**: Marco metodológico para estadísticas de seguridad

### OEA - Observatorio Hemisférico de Seguridad
- **URL**: https://www.sdv.oas.org
- **Datos**: Comparativos regionales de violencia

## Notas Metodológicas

### Homicidios
- **Fuente primaria**: Policía Nacional (SIEDCO)
- **Fuente secundaria**: Medicina Legal/INS (puede diferir)
- **Diferencia**: Policía registra como delito; Medicina Legal registra como defunción
- **Recomendación**: Usar Policía para series delictivas, Medicina Legal para salud pública

### Secuestros
- **Fuente**: DANE/MinDefensa consolidación CONASE
- **Tipos**: Secuestro extorsivo, secuestro político
- **Plan Rescate**: Operativo militar para liberación (no cuenta como resolución estadística)

### Masacres
- **Fuente**: Indepaz
- **Definición**: 3+ personas asesinadas en mismo hecho/tiempo/lugar
- **Nota**: No todos los homicidios colectivos son masacres según esta definición

### Cultivos de Coca
- **Fuente**: UNODC SIMCI
- **Inicio serie**: 1999 (no hay dato oficial antes)
- **Metodología**: Monitoreo satelital + verificación campo
- **Nota**: Pico histórico 2022-2023 (~230,000-253,000 ha)

### Líderes Sociales
- **Fuente**: Indepaz
- **Inicio conteo sistemático**: 2016
- **Definición**: Personas con rol de liderazgo comunitario, territorial, étnico
- **Nota**: Antes de 2016 el conteo era difuso/no sistemático

### Firmantes de Paz
- **Fuente**: Indepaz
- **Inicio**: 2016 (post-Acuerdo)
- **Definición**: Excombatientes FARC-EP que firmaron Acuerdo de Paz

### Desplazamiento
- **Fuentes**: UARIV (oficial), CODHES (independiente)
- **Diferencia**: UARIV requiere registro; CODHES estima total
- **Recomendación**: Usar UARIV para oficial, CODHES para contexto

## Actualizaciones

| Fecha | Actualización |
|-------|--------------|
| 2026-03 | Indepaz masacres 2025 completo |
| 2026-03 | Indepaz líderes sociales 2025 |
| 2024-10 | UNODC coca 2023 (253,000 ha) |
| 2024-12 | Policía Nacional homicidios 2024 |

## Contactos

- **Indepaz**: informes@indepaz.org.co
- **UNODC Colombia**: unodc-colombia@un.org
- **Policía Nacional - DIJIN**: estadisticas@policia.gov.co
- **UARIV**: atencion@unidadvictimas.gov.co
