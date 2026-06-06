# Metodología

## Fecha de corte de datos
- Datos macroeconómicos, fiscales y sociales: corte a mayo 2026, según disponibilidad de cada fuente.
- Datos de seguridad: corte a abril 2026.
- Datos electorales (campaña 2026): corte a junio 2026.

## Fuentes primarias

### Macroeconomía
- **DANE** — Cuentas nacionales, pobreza, mercado laboral, IPC
  - https://www.dane.gov.co
- **Banco de la República** — TRM, política monetaria, deuda externa
  - https://www.banrep.gov.co
- **Ministerio de Hacienda** — Marco Fiscal de Mediano Plazo, Presupuesto General
  - https://www.minhacienda.gov.co
- **Confecámaras** — Dinámica empresarial (creación, liquidación, sociedades)
  - https://www.confecamaras.org.co

### Fiscal
- **DIAN** — Recaudo tributario
  - https://www.dian.gov.co
- **DNP** — Sinergia, Seguimiento a Metas de Gobierno, Regalías
  - https://www.dnp.gov.co

### Seguridad
- **Policía Nacional** — Homicidios, secuestro
  - https://www.policia.gov.co
- **Indepaz** — Masacres, líderes sociales
  - https://www.indepaz.org.co
- **UNODC** — Cultivos ilícitos
  - https://www.unodc.org

### Sectorial
- **Ministerio de Educación** — Cobertura, Pruebas Saber
- **Ministerio de Salud** — Aseguramiento, mortalidad
- **Ministerio de Minas y Energía** — Producción petróleo, sector energético

### Electoral
- **Registraduría Nacional** — Resultados electorales
  - https://www.registraduria.gov.co
- **Consejo Nacional Electoral (CNE)** — Planes de gobierno registrados
- **Misión de Observación Electoral (MOE)** — Indicadores de gobernabilidad democrática
  - https://moe.org.co

### Perfiles de candidatos
- Hojas de vida pública en páginas oficiales
- Planes de gobierno registrados ante CNE
- Cobertura periodística verificable (El Tiempo, El Espectador, La Silla Vacía, etc.)
- Sentencias y procesos judiciales con fuente pública

## Tratamiento de la información

1. **Trazabilidad.** Cada cifra incluida en el reporte tiene una fuente atable en `fuentes/`. Si no se pudo verificar, se omite.

2. **Período presidencial.** Los datos se atribuyen al período constitucional del presidente, no a su gestión personal necesariamente. Se aclara cuando una tendencia se inicia o continúa de un gobierno a otro.

3. **Inflación acumulada.** Para variaciones que abarcan varios años, se calcula variación nominal y real (deflactada por IPC del período).

4. **TRM.** Se usa la Tasa Representativa del Mercado del Banco de la República, promedio mensual al inicio y fin de cada período presidencial.

5. **Gini y pobreza.** Si la fuente recalculó la serie, se usa la última revisión oficial disponible y se anota.

6. **Datos faltantes.** Si una fuente no publicó una cifra para un año específico, se indica "sin dato público disponible" en la tabla correspondiente, en lugar de interpolar.

## Proceso de generación

1. Sub-agente de IA por dimensión (macroeconomía, sectorial, seguridad, fiscal, candidatos, gobernabilidad, etc.).
2. Cada sub-agente entrega: datos crudos + URLs de fuente + tablas resumidas.
3. Coordinador (DevOps/SRE) audita fuentes, verifica coherencia entre períodos, y arma el HTML final.
4. HTML final: archivo único auto-contenido (CSS y JS embebidos, sin dependencia de CDN público para los datos).

## Limitaciones reconocidas

- No se incluyen datos de economías ilegales (narcotráfico, minería ilegal) salvo donde hay series oficiales de UNODC.
- No se incluyen datos sub-nacionales desagregados por departamento (salvo donde la fuente lo facilita).
- El análisis de candidatos se limita a información pública verificable; no se incluyen análisis basados en información privada, conversaciones off-the-record, o especulación.
