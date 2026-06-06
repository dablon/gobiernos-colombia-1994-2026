# Gobiernos de Colombia 1994-2026 — Reporte Comparativo

Reporte analítico comparativo de los gobiernos colombianos desde 1994 hasta 2026, con análisis de los candidatos presidenciales para el período 2026-2030.

> ⚠️ **DISCLAIMER OBLIGATORIO**
>
> Este reporte es un ejercicio analítico generado con asistencia de inteligencia artificial. Los datos provienen de fuentes públicas oficiales (DANE, Banco de la República, DNP, ministerios, Registraduría, Confecámaras, Policía Nacional, Indepaz, UNODC y otras), y deben ser verificados contra las fuentes originales antes de cualquier uso periodístico, académico, electoral o institucional. Las cifras macroeconómicas pueden haber sido revisadas por las fuentes (especialmente PIB y Gini, que se recalculan periódicamente). Las secciones sobre candidatos presidenciales 2026-2030 describen trayectorias públicas, planes de gobierno registrados ante el CNE y patrones históricos de gobernabilidad — **no constituyen predicciones electorales, endoso político, ni juicio moral sobre los candidatos**.

## Alcance

### Gobiernos cubiertos
1. Ernesto Samper (1994-1998)
2. Andrés Pastrana (1998-2002)
3. Álvaro Uribe I (2002-2006)
4. Álvaro Uribe II (2006-2010)
5. Juan Manuel Santos (2010-2014)
6. Juan Manuel Santos II (2014-2018)
7. Iván Duque (2018-2022)
8. Gustavo Petro (2022-2026)

### Dimensiones analizadas

| Dimensión | Indicadores |
|-----------|-------------|
| Macroeconomía | PIB, inflación, desempleo, Gini, pobreza, deuda pública, TRM, salario mínimo (nominal y real), IED, exportaciones |
| Empresarial | Empresas creadas, liquidadas, mortalidad empresarial, sociedades constituidas |
| Fiscal | Recaudo tributario, balance GNC, SGP, regalías |
| Seguridad | Homicidios, secuestro, extorsión, desplazamiento, masacres, cultivos ilícitos, violencia a líderes |
| Sectorial | Educación (cobertura, Saber), Salud (aseguramiento, mortalidad), Minas (petróleo), Energía |
| Gobernabilidad | Aprobación presidencial, conflictos institucionales, huelgas, paros |
| 2026-2030 | Perfiles documentados de Iván Cepeda y Abelardo de la Espriella, análisis de gobernabilidad institucional |

## Estructura del repositorio

```
.
├── README.md                    # Este archivo
├── DISCLAIMER.md                # Disclaimer legal y metodológico
├── METODOLOGIA.md               # Fuentes, criterios, fechas de corte
├── datos/                       # Datos crudos y CSV por dimensión
├── fuentes/                     # URLs y referencias a fuentes primarias
├── agentes/                     # Notas de los sub-agentes de investigación
├── reporte/
│   └── index.html               # Reporte final (auto-contenido, sin CDN público)
└── docs/                        # Documentación complementaria
```

## Cómo se generó

Con asistencia de múltiples sub-agentes de IA en paralelo, cada uno responsable de una dimensión de análisis. Coordinador: rol SRE/DevOps, auditoría de fuentes y QA.

## Licencia

Datos públicos. Documentación bajo CC-BY 4.0. Código bajo MIT.
