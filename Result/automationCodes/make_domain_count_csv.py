import os
import pandas as pd

# Task 0: Load 'domain_whole_list.csv' data and convert to 'ABC' pandas data frame.
abc_df = pd.read_csv('domain_whole_list.csv')

# Task 1-5: Loop through each file in the directory
for filename in os.listdir('network_traffic_urls'):
    if filename.endswith('.txt'):
        print('file name :', filename)
        # Task 1: Append filename as a new column in ABC dataframe
        file_df = pd.DataFrame(columns=['domain_name', filename[:-4]])
        
        # Task 2: Load file's domain lists
        with open(os.path.join('04.network_traffic_urls', filename), 'r') as f:
            lines = f.readlines()
            lines = [x.strip() for x in lines]
        line_count = 0
        # Task 3-5: Check loaded domains and count if they exist in ABC dataframe
        for domain in lines:
            print('\t\tdomain name :', domain)
            line_count = line_count + 1
            if domain in abc_df['domain_name'].tolist():
                file_df.loc[len(file_df)] = [domain, 1]
        print('total loaded domain number : ', line_count)

        # Append the file dataframe to ABC dataframe
        abc_df = abc_df.merge(file_df, on='domain_name', how='outer')

# Save the final dataframe to a CSV file
abc_df.to_csv('domain_whole_list_count.csv', index=False)
