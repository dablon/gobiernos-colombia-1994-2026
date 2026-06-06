import json
import urllib.request
import os

indicators = {
    'GC.DOD.TOTL.GD.ZS': 'central_govt_debt_pct_pib',
    'GC.REV.XGRT.GD.ZS': 'central_govt_revenue_pct_pib',
    'GC.XPN.TOTL.GD.ZS': 'central_govt_expense_pct_pib',
    'GC.NLD.TOTL.GD.ZS': 'central_govt_netlending_pct_pib',
    'GC.TAX.TOTL.GD.ZS': 'central_govt_tax_pct_pib',
    'GC.TAX.YPKG.GD.ZS': 'central_govt_tax_income_pct_pib',
    'GC.TAX.GOODT.GD.ZS': 'central_govt_tax_goods_pct_pib',
    'GC.TAX.INTP.RV.GD.ZS': 'central_govt_tax_international_pct_pib',
    'GC.BAL.CASH.GD.ZS': 'central_govt_cash_surplus_pct_pib',
}

os.makedirs('../bancos_mundial', exist_ok=True)

for ind_id, ind_name in indicators.items():
    url = f'https://api.worldbank.org/v2/country/COL/indicator/{ind_id}?date=1994:2024&format=json&per_page=100'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read())
        if len(data) > 1 and data[1]:
            series = []
            for d in data[1]:
                series.append({'date': int(d['date']), 'value': d['value']})
            series.sort(key=lambda x: x['date'])
            out_path = f'../bancos_mundial/{ind_name}.json'
            with open(out_path, 'w') as f:
                json.dump(series, f, indent=2)
            print(f"OK {ind_name} ({len(series)} años)")
        else:
            print(f"NO DATA {ind_name}")
    except Exception as e:
        print(f"ERROR {ind_name}: {e}")
