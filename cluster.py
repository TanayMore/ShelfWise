import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

def customer_segmentation(sales_csv, n_clusters=3):
    # Load data
    sales_df = pd.read_csv(sales_csv)

    # Ensure date is datetime
    sales_df['date'] = pd.to_datetime(sales_df['date'])

    # Aggregate per customer
    customer_summary = sales_df.groupby('customer_id').agg({
        'quantity_sold': 'sum',
        'unit_price': 'mean',
        'total_price': 'sum'
    }).reset_index()

    # Features: frequency (quantity_sold), avg spend (unit_price), total spend
    X = customer_summary[['quantity_sold', 'unit_price', 'total_price']]

    # Standardize
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # KMeans clustering
    kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
    customer_summary['segment'] = kmeans.fit_predict(X_scaled)

    # Map segments to meaningful labels
    segment_labels = {
        0: "Frequent, Low Spend",
        1: "Occasional, High Spend",
        2: "Moderate"
    }
    customer_summary['segment_label'] = customer_summary['segment'].map(segment_labels)

    return customer_summary[['customer_id', 'quantity_sold', 'total_price', 'segment_label']]


# Example usage
if __name__ == "__main__":
    segments = customer_segmentation("Sales_with_Customers.csv", n_clusters=3)
    print(segments.head())
