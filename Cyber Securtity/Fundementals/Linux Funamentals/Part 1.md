Hyperlinks:
- [[#Interacting With the Filesystem]]
- [[#Searching for Files]]
- [[#Linux operators]]
## Introduction

The name "Linux" is actually an umbrella term for multiple OS's that are based on UNIX (another operating system). Thanks to Linux being open-source, variants of Linux come in all shapes and sizes - suited best for what the system is being used for.

For example, Ubuntu & Debian are some of the more commonplace distributions of Linux because it is so extensible. I.e. you can run Ubuntu as a server (such as websites & web applications) or as a fully-fledged desktop. 

_Ubuntu Server can run on systems with only 512MB of RAM_
#### Some essential commands

Let's get started with two of the first commands which I have broken down in the table below:

| Command | Description                                     |
| ------- | ----------------------------------------------- |
| echo    | Output any text that we provide                 |
| whoami  | Find out what user we're currently logged in as |
## Interacting With the Filesystem

Being able to navigate the machine that you are logged into without relying on a desktop environment is pretty important. After all, what's the point of logging in if we can't go anywhere?

| Command | Full Name               |
| ------- | ----------------------- |
| ls      | listing                 |
| cd      | change directory        |
| cat     | concatenate             |
| pwd     | print working directory |
#### Listing Files in Our Current Directory (ls)

Before we can do anything such as finding out the contents of any files or folders, we need to know what exists in the first place. This can be done using the "ls" command (short for listing)

_Pro tip: You can list the contents of a directory without having to navigate to it by using **ls** and the name of the directory. I.e. `ls Pictures
`
#### Changing Our Current Directory (cd)

Now that we know what folders exist, we need to use the "**cd**" command (short for **c**hange **d**irectory) to change to that directory. Say if I wanted to open the "Pictures" directory - I'd do "**cd Pictures**". Where again, we want to find out the contents of this "Pictures" directory and to do so, we'd use "**ls**" again.

#### Outputting the Contents of a File (cat)

Whilst knowing about the existence of files is great — it's not all that useful unless we're able to view the contents of them.

We will come on to discuss some of the tools available to us that allows us to transfer files from one machine to another in a later room. But for now, we're going to talk about simply seeing the contents of text files using a command called "cat".

"Cat" is short for concatenating & is a fantastic way for us to output the contents of files (not just text files!).

In the screenshot below, you can see how I have combined the use of "ls" to list the files within a directory called "Documents"

#### Finding out our Current Working Directory (pwd)

It's easy to lose track of where we are on the filesystem exactly, which is why I want to introduce "pwd". This stands for print working directory.
##### Let's break this down:

- We already know we're in "Documents" thanks to our terminal, but at this point in time, we have no idea where "Documents" is stored so that we can get back to it easily in the future.
- I have used the "**pwd**" (print working directory) command to find the full file path of this "Documents" folder.
- We're helpfully told by Linux that this "Documents" directory is stored at "/home/ubuntu/Documents" on the machine — great to know!
- Now in the future, if we find ourselves in a different location, we can just use **cd /home/ubuntu/Documents** to change our working directory to this "Documents" directory.

## Searching for Files
One fantastic way to show just how efficient you can be with systems like this is using a set of commands to quickly search for files across the entire system that our user has access to. No need to consistently use cd and ls to find out what is where. Instead, we can use commands such as find to automate things like this for us!
### Using Find
The find command is fantastic in the sense that it can be used both very simply or rather complex depending upon what it is you want to do exactly. However, let's stick to the fundamentals first.

Now, of course, directories can contain even more directories within themselves. It becomes a headache when we're having to look through every single one just to try and look for specific files. We can use find to do just this for us!

If we remember the filename, we can simply use find -name passwords.txt where the command will look through every folder in our current directory for that specific file like so:
![[Pasted image 20241102143737.png]]

If we don't know the file name, we can simply use what's known as a wildcard `*` to search for anything that has .txt at the end. In our case, we want to find every .txt file that's in our current directory. We will construct a command such as `find -name *.txt` . Where "Find" has been able to find every .txt file and has then given us the location of each one:
![[Pasted image 20241102144738.png]]
### Using Grep
The grep command allows us to search the contents of files for specific values that we are looking for.

Take for example, the access log of a web server. In this case, the access.log of a web server has 244 entries.![[Pasted image 20241102145346.png]]

Using a command like cat isn't going to cut it too well here. Let's say for example if we wanted to search this log file to see the things that a certain user/IP address visited? Looking through 244 entries isn't all that efficient considering we want to find a specific value.

We can use grep to search the entire contents of this file for any entries of the value that we are searching for. Going with the example of a web server's access log, we want to see everything that the IP address "81.143.211.90" has visited![[Pasted image 20241102145507.png]]
## Linux operators

| Symbol / Operator | Description                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| &                 | This operator allows you to run commands in the background of your terminal.                                                                     |
| &&                | This operator allows you to combine multiple commands together in one line of your terminal.                                                     |
| >                 | This operator is a redirector - meaning that we can take the output from a command (such as using cat to output a file) and direct it elsewhere. |
| >>                | This operator does the same function of the > operator but appends the output rather than replacing (meaning nothing is overwritten).            |
Let's cover these in a bit more detail.

### Operator "&"

The "&" shell operator allows us to execute a command and have it run in the background (such as this file copy) allowing us to do other things!
### Operator "&&"

Unlike the "&" operator, we can use "&&" to make a list of commands to run for example command1 && command2. However, it's worth noting that command2 will only run if command1 was successful.

### Operator ">"

This operator is what's known as an output redirector. What this essentially means is that we take the output from a command we run and send that output to somewhere else.

A great example of this is redirecting the output of the echo command. Let's say we wanted to create a file named "welcome" with the message "hey". We can run echo hey > welcome where we want the file created with the contents "hey".
### Operator ">>"

This operator is also an output redirector like in the previous operator (>) we discussed. However, what makes this operator different is that rather than overwriting any contents within a file, for example, it instead just puts the output at the end.![[Pasted image 20241102180447.png]]