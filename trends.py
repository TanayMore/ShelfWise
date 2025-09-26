import pandas as pd
from datetime import datetime, timedelta

def analyze_trends(sales_csv, top_n=5, period_days=7):
    # Load data
    sales_df = pd.read_csv(sales_csv)

    # Ensure date is datetime
    sales_df['date'] = pd.to_datetime(sales_df['date'])

    # Define date ranges
    max_date = sales_df['date'].max()
    this_period_start = max_date - timedelta(days=period_days)
    prev_period_start = this_period_start - timedelta(days=period_days)

    # This period sales
    this_period = sales_df[(sales_df['date'] > this_period_start) & (sales_df['date'] <= max_date)]
    this_summary = this_period.groupby(['product_id', 'product_name'])['quantity_sold'].sum().reset_index()
    this_summary.rename(columns={'quantity_sold': 'this_sales'}, inplace=True)

    # Previous period sales
    prev_period = sales_df[(sales_df['date'] > prev_period_start) & (sales_df['date'] <= this_period_start)]
    prev_summary = prev_period.groupby(['product_id', 'product_name'])['quantity_sold'].sum().reset_index()
    prev_summary.rename(columns={'quantity_sold': 'prev_sales'}, inplace=True)

    # Merge summaries
    merged = pd.merge(this_summary, prev_summary, on=['product_id', 'product_name'], how='left')
    merged['prev_sales'] = merged['prev_sales'].fillna(0)

    # Calculate growth
    merged['growth'] = ((merged['this_sales'] - merged['prev_sales']) / merged['prev_sales'].replace(0, 1)) * 100

    # Rank top N
    top_products = merged.sort_values(by='this_sales', ascending=False).head(top_n)

    # Format results
    results = []
    for _, row in top_products.iterrows():
        trend = "Rising 📈" if row['growth'] > 10 else "Falling 📉" if row['growth'] < -10 else "Steady ➡️"
        results.append({
            "product_id": int(row['product_id']),
            "product_name": row['product_name'],
            "sales_this_period": int(row['this_sales']),
            "sales_last_period": int(row['prev_sales']),
            "growth_percent": round(row['growth'], 2),
            "trend": trend
        })

    return results


# Example usage
if __name__ == "__main__":
    forecast = analyze_trends("Sales.csv", top_n=5, period_days=7)
    import json
    print(json.dumps(forecast, indent=4))
