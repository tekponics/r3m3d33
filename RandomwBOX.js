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
This code creates a window with a button labeled “Generate”. When you click the button, it generates a random number between 1 and 100 and displays it in the window. You can modify the range of numbers by changing the arguments of the randint function.


import java.util.Random;
import javax.swing.*;

public class RandomNumberGenerator {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Random Number Generator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 100);

        JLabel label = new JLabel();
        label.setHorizontalAlignment(SwingConstants.CENTER);
        frame.add(label);

        JButton button = new JButton("Generate");
        button.addActionListener(e -> {
            Random rand = new Random();
            int randomNum = rand.nextInt(100) + 1;
            label.setText(String.valueOf(randomNum));
        });
        frame.add(button, "South");

        frame.setVisible(true);
    }
}