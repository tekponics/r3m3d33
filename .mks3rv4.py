python
# This script allows you to connect to an offline webserver to store python files with a file name .mk3rvR
import socket
import os

# Create a socket object
s = socket.socket()

# Define the host and port of the webserver
host = 'localhost'
port = 8080

# Connect to the webserver
s.connect((host, port))

# Get the list of python files in the current directory
files = [f for f in os.listdir('.') if f.endswith('.py')]

# For each file, send its name and content to the webserver
for file in files:
    # Send the file name with .mk3rvR extension
    s.send(file + '.mk3rvR')
    # Wait for an acknowledgement from the webserver
    s.recv(1024)
    # Open the file and read its content
    with open(file, 'r') as f:
        content = f.read()
    # Send the file content to the webserver
    s.send(content)
    # Wait for an acknowledgement from the webserver
    s.recv(1024)

# Close the socket connection
s.close()