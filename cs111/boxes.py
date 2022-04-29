"""
A manufacturing company needs a program that will help its 
employees pack manufactured items into boxes for shipping. 
Write a Python program named boxes.py that asks the user for two integers:

1. the number of manufactured items
2. the number of items that the user will pack per box

Your program must compute and print the number of boxes necessary to hold the
items. This must be a whole number. Note that the last box may be packed with 
fewer items than the other boxes.
"""

import math

total_itens = int(input("Enter the number of items: "))

itens_per_box = int(input("Enter the number of items per box: "))

boxes = math.ceil(total_itens / itens_per_box)


print(f"For {total_itens} items, packing {itens_per_box} items in each box, you will need {boxes} boxes.")