import csv

# Load the domain list from the sorted_domain_list.txt file
with open('sorted_whole_domain_list.txt', 'r') as f:
    domain_list = f.read().splitlines()

# Create a new CSV file
with open('domain_whole_list.csv', 'x', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['domain_name'])  # Add the header row
    for domain in domain_list:
        writer.writerow([domain])
