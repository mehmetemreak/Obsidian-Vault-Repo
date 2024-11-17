Hyperlinks:
- [[#Variables]]
- [[#Data structures]]
- [[#Operators]]
- [[#If Statement]]
- [[#Loops]]
- [[#Functions]]
- [[#Files]]
- [[#Import]]


# Variables

Variables allow you to store and update data in a computer program. You have a variable name and store data to that name.  
```python
food = "ice cream"
money = 2000
```

Variables are powerful as you can change them throughout your program. The following example sets the age variable to 30, then we increase this age variable by 1, making the final variable data 31. Feel free to copy and paste this into the editor, run the code, and see its output.
```python
age = 30
age = age + 1
print(age)
```

# Data structures

Let's talk about Data Types, which is the type of data being stored in a variable. You can store text, or numbers, and many other types. The data types to know are:

- **String** - Used for combinations of characters, such as letters or symbols
- **Integer** - Whole numbers
- **Float** - Numbers that contain decimal points or for fractions
- **Boolean** - Used for data that is restricted to True or False options
- **List** - Series of different data types stored in a collection  

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5bec5dfd73790a7d06282266/room-content/1d06d9ac2b8f1e9f75f61f60169e7b2e.png)

# Operators

Logical operators allow assignment and comparisons to be made and are used in conditional testing (such as if statements).

| **Logical Operation**    | **Operator** | **Example** |
| ------------------------ | ------------ | ----------- |
| Equivalence              | ==           | if x == 5   |
| Less than                | <            | if x < 5    |
| Less than or equal to    | <=           | if x <= 5   |
| Greater than             | >            | if x > 5    |
| Greater than or equal to | >=           | if x >= 5   |

Boolean operators are used to connect and compare relationships between statements. Like an if statement, conditions can be true or false.

| **Boolean Operation**                                     | Operator | **Example**                                                                                |
| --------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| Both conditions must be true for the statement to be true | **AND**  | if x >= 5 **AND** x <= 100  <br>  <br>Returns TRUE if x is  <br>a number between 5 and 100 |
| Only one condition of the statement needs to be true      | **OR**   | if x == 1 **OR** x == 10  <br>  <br>Returns TRUE if X is 1 or 10                           |
| If a condition is the opposite of an argument             | **NOT**  | if **NOT** y  <br>  <br>Returns TRUE if the y value is False                               |

# If Statement

Using "if statements" allows programs to make decisions. They let a program chose a decision based on a condition. Below is an example of how an if statement can be used to determine the section of code (which print statement) to use.

```python
if age < 17:
    print('You are NOT old enough to drive')
else:
    print('You are old enough to drive')
```

There are some key components we note from our code example above:

- The `if` keyword indicates the beginning of the if statement, followed by a set of conditions.
- The if statement is only run if the condition (or sets of conditions) is true. In our example, it's `age < 17`; if that condition is true (age is below 17), the code within the if statement runs. Per the example, if certain conditions are not met, the program can default to running code shown in the `else` part of the if statement. 
- A colon `:` marks the end of the if statement.
- Note the indentation. Anything after the colon that is indented, is considered part of the if statement, which the program will execute.
##### Quiz
   create a program that calculates the total  
    cost of a customers shopping basket, including shipping.  
    
   - If a customer spends over $100, they get free shipping  
   - If a customer spends < $100, the shipping cost is $1.20 per kg of the baskets weight  
  
   Print the customers total basket cost (including shipping) to complete this exercise. 
  
`customer_basket_cost = 101`  
`customer_basket_weight = 44`  
###### CLICK FOR THE ANSWER
`shipping_cost=0`  
`if customer_basket_cost > 100:`  
  `shipping_cost=0`  
`else:`  
    `shipping_cost=customer_basket_weight*1.20`  
`print(customer_basket_cost+shipping_cost)`

# Loops

In programming, loops allow programs to iterate and perform actions a number of times. There are two types of loops, [[#For Loops]] and [[#While Loops]].
## While Loops

We can have the loop run indefinitely or (similar to an if statement) determine how many times the loop should run based on a condition.
```python
i = 1
while i <= 10:
     print(i)
     i = i + 1
```
This while loop will run 10 times, outputting the value of the i variable each time it iterates (loops). Let's break this down:
- The i variable is set to 1
- The while statement specifies where the start of the loop should begin
- Every time it loops, it will start at the top (outputting the value of i)
- Then it goes to the next line in the loop, which increases the value of i by 1
- Then (as there is no more code for the program to execute), it goes to the top of the loop, starting the process over again
- The program will keep on looping until the value of the i variable is greater than 10
## For Loops

A for loop is used to iterate over a sequence such as a list. Lists are used to store multiple items in a single variable, and are created using square brackets
```python
websites = ["facebook.com", "google.com", "amazon.com"]
for site in websites:
     print(site)
```
This for loop shown in the code block above, will run 3 times, outputting each website in the list. Let's break this down:

- The list variable called websites is storing 3 elements
- The loop iterates through each element, printing out the element
- The program stops looping when it's been through each element in the loop

In Python, we can also iterate through a range of numbers using the range function. Below is some example Python code that will print the numbers from 0 to 4. In programming, 0 is often the starting number, so counting to 5 is 0 to 4 (but has 5 numbers: 0, 1, 2, 3, and 4)
```python
for i in range(5):
     print(i)
```
# Functions

As programs start to get bigger and more complex, some of your code will be repetitive, writing the same code to do the same calculations, and this is where functions come in. A function is a block of code that can be called at different places in your program.
```python
def sayHello(name):
     print("Hello " + name + "! Nice to meet you.")

sayHello("Ben") # Output is: Hello Ben! Nice to meet you
```

There are some key components we can note from this function:

- The `def` keyword indicates the beginning of a function. The function is followed by a `name` that the programmer defines (and is a function parameter). In our example, it's sayHello.
- Following the function name is a pair of parenthesis `()` that holds input values, data that we can pass into the function. In our example, it's a name.
- A colon `:` marks the end of the function header.
##### Question

You've invested in Bitcoin and want to write a program that tells you when the value of Bitcoin falls below a particular value in dollars.

 Write a function called **bitcoinToUSD** with two parameters: **bitcoin_amount**, the amount of Bitcoin you own, and **bitcoin_value_usd**, the value of bitcoin in USD. The function should return usd_value, which is your bitcoin value in USD (to calculate this, in the function, you times bitcoin_amount variable by bitcoin_value_usd variable and return the value). The start of the function should look like this:

```python
investment_in_bitcoin = 1.2
bitcoin_to_usd = 40000
def bitcoinToUSD(bitcoin_amount, bitcoin_value_usd):
```

Once you've written the bitcoinToUSD function, use it to calculate the value of your Bitcoin in USD, and then create an if statement to determine if the value falls below $30,000; if it does, output a message to alert you (via a print statement).

Answer:
```python
investment_in_bitcoin = 1.2
bitcoin_to_usd = 40000
# 1) write a function to calculate bitcoin to usd
def bitcoinToUSD(bitcoin_amount, bitcoin_value_usd):
  usd_value = investment_in_bitcoin * bitcoin_to_usd
  return usd_value

investment_in_usd = bitcoinToUSD(investment_in_bitcoin, bitcoin_to_usd)
if investment_in_usd <= bitcoinToUSD:
  print("Investment below $30,000! SELL!")
else:
  print("Investment above $30,000")
```
 - [ ] 🔼 ⏳ 2024-11-19 🏁 delete. This code above is broken, I'll fix it later 

# Files

It's common to write a script and import or export it from a file; whether that be as a way to store the output of your script or to import a list of 100's of websites from a file to enumerate.
##### Read
```python
f = open("file_name", "r")
print(f.read())
```
- To open the file, we use the built-in `open()` function, and the "r" parameter stands for "read" and is used as we're reading the contents of the file.
- The variable has a `read()` method for reading the contents of the file.
- You can also use the `readlines()` method and loop over each line in the file
##### Write
```python
f = open("demofile1.txt", "a") # Append to an existing file
f.write("The file will include more text..")
f.close()

f = open("demofile2.txt", "w") # Creating and writing to a new file
f.write("demofile2 file created, with this content in!")
f.close()
```
- If you're writing to an existing file, you open the file first and use the "a" in the open function after the filename call (which stands for append).
- If you're writing to a new file, you use "w" (write) instead of "a".

Notice we use the close() method after writing to a file; this closes the file so no more writing to the file (within the program) can occur.
# Import

In Python, we can import libraries, which are a collection of files that contain functions. For example, there is a "date" library that gives you access to hundreds of different functions for anything date and time-related.
```python
import datetime
current_time = datetime.datetime.now()
print(current_time)
```
We import other libraries using the `import` keyword. Then in Python, we use that import's library name to reference its functions.

Here are some popular libraries you may find useful in scripting as a pentester:

- Request - simple HTTP library.
- [Scapy](https://scapy.readthedocs.io/en/latest/introduction.html) - send, sniff, dissect and forge network packets
- [Pwntools](https://docs.pwntools.com/en/stable/) - a CTF & exploit development library.

Libraries written by other programmers not already installed in your machine can be installed using an application called pip, which is Python's package manager.

Let's say you want to install the "scapy" library (which allows you to craft your own packets in code and send them to other machines);
you install it first by running the command `pip install scapy`, after which in your program you can now import the scapy library.