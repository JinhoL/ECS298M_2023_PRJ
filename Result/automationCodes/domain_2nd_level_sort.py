import os

def get_second_level_domain(domain):
    # Split the domain name into a list based on the dots
    domain_parts = domain.split('.')
    
    # If the domain has at least 3 parts, return the 2nd level domain
    if len(domain_parts) >= 3:
        return domain_parts[-2] + '.' + domain_parts[-1]
    # Otherwise, return the entire domain
    else:
        return domain

# Load the list of domains from the file
with open('all_domain_list.txt', 'r') as f:
    domains = f.read().splitlines()

# Sort the domains based on the 2nd level domain
sorted_domains = sorted(domains, key=get_second_level_domain)

# Save the sorted list of domains to a file
with open('sorted_domain_list.txt', 'w') as f:
    for domain in sorted_domains:
        f.write(domain + '\n')
