import random
from tkinter import *

root = Tk()
root.title("Random Number Generator")

def generate_number():
    random_number = random.randint(1, 100)
    number_label.config(text=str(random_number))

number_label = Label(root, text="")
number_label.pack()

generate_button = Button(root, text="Generate", command=generate_number)
generate_button.pack()

root.mainloop()