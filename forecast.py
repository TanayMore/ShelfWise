import pandas as pd
from datetime import datetime, timedelta

def forecast_refill(stock_csv, sales_csv):
    # Load data
    stock_df = pd.read_csv(stock_csv)
    sales_df = pd.read_csv(sales_csv)

    # Ensure date is datetime
    sales_df['date'] = pd.to_datetime(sales_df['date'])

    # Aggregate daily sales per product
    daily_sales = sales_df.groupby(['product_id', 'date'])['quantity_sold'].sum().reset_index()

    results = []

    for product_id in stock_df['product_id'].unique():
        # Filter sales for this product
        product_sales = daily_sales[daily_sales['product_id'] == product_id]

        if product_sales.empty:
            continue

        # Avg daily sales (last 7 days)
        recent_sales = product_sales[product_sales['date'] >= product_sales['date'].max() - pd.Timedelta(days=7)]
        avg_daily_sales = recent_sales['quantity_sold'].mean()

        if pd.isna(avg_daily_sales) or avg_daily_sales == 0:
            avg_daily_sales = 1  # fallback to avoid div by zero

        # Current stock
        current_stock = stock_df.loc[stock_df['product_id'] == product_id, 'current_stock'].values[0]

        # Predict stockout days
        stockout_days = int(current_stock // avg_daily_sales)
        predicted_stockout_date = datetime.today() + timedelta(days=stockout_days)

        # Suggested refill (next 7 days demand)
        refill_qty = int(avg_daily_sales * 7)

        product_name = stock_df.loc[stock_df['product_id'] == product_id, 'product_name'].values[0]

        results.append({
            "product_id": int(product_id),  # ensure int
            "product_name": str(product_name),
            "current_stock": int(current_stock),
            "avg_daily_sales": float(round(avg_daily_sales, 2)),
            "predicted_stockout_in_days": int(stockout_days),
            "predicted_stockout_date": predicted_stockout_date.strftime("%Y-%m-%d"),
            "suggested_refill_qty": int(refill_qty),
            "priority": str("HIGH" if stockout_days <= 3 else "MEDIUM" if stockout_days <= 7 else "LOW")
        })

    return results


# Example usage
if __name__ == "__main__":
    forecast = forecast_refill("Post_Sale_Stock.csv", "Sales.csv")
    import json
    print(json.dumps(forecast, indent=4))
