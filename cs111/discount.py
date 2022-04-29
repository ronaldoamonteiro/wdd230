# Import the datetime class from the datetime
# module so that it can be used in this program.
from datetime import datetime

# Call the now() method to get the current
# date and time as a datetime object from
# the computer's operating system.
current_date_and_time = datetime.now()

# Call the weekday() method to get the day of the
# week from the current_date_and_time object.
day_of_week = current_date_and_time.weekday()

# Get the subtotal amount
subtotal = float(input("Please enter the subtotal: "))

if subtotal >= 50 and (day_of_week == 1 or day_of_week == 2):
    discount = subtotal * 0.10
    tax = (subtotal - discount) * 0.06
    total = subtotal + tax - discount
    print(f"Discount amount: {discount:.2f}")
    print(f"Sales tax amount: {tax:.2f}")
    print(f"Total: {total:.2f}")
else:
    tax = subtotal * 0.06
    total = subtotal + tax
    print(f"Sales tax amount: {tax:.2f}")
    print(f"Total: {total:.2f}")

