import requests
import os
import json
import argparse

def searching(query: str): 
    link = "https://search-tu6dy325kq-uc.a.run.app?query=" + query
    data = requests.get(link).json()
    
    f1 = open("data.json", "w")
    json.dump(data, f1)
    f1.close()

    return "created data.json and put the data into it"

def summary(search: str): 
    link = "https://summary-tu6dy325kq-uc.a.run.app?search=" + search
    data = requests.get(link).text

    f1 = open("data.txt", "w")
    f1.write(data)
    f1.close()

    return "created data.txt and put the data into it"


def main(text: str): 
    while True:
        choice = input("options: 1 - search, 2 - summary : ")
        if choice == "1": 
            return searching(text)
        elif choice == "2": 
            return summary(text)
        
args = argparse.ArgumentParser(prog="pysearch", description="pysearch is searchly cli tool to summarize google searches from the cli")
args.add_argument("-q", "--query", help="query is what term to google and summarize ")

parser = args.parse_args()
print(main(parser.query))