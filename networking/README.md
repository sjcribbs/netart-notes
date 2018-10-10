Net Art && Cultures
<br>
BRIZ, Nick
<br>
Oct 03
<br>
<!-- ♫ Aphex Twin: Piano ♫ -->
<br>
## Networking

- Connie Glynn: <a href= "https://www.youtube.com/watch?v=sV_SEs9li2s">Create or Die: Did Social Media Kill Fun?</a>
<br><br>
#### *Terminal *
- "**terminal**" references the old computers
- terminal's interface is the command line interface
- **command prompt**: the line when you first open terminal: "Sarahs-MacBook-Pro-3:~ scribbs$"
  - name of your computer ("Sarahs-Macbook-Pro-3") === **host name**, **user name** ("scribbs"), **folder you are currently in** "~" ( === "/Users/scribbs")
- "**route**" === the beginning of any kind of tree-like structure
- "**/**" === means the **route**
- "**path**" === files and folders that start at the route and work towards the file or folder you are accessing; "/Users/scribbs/Desktop"
- ***absolute path***: will always get you there no matter what folder you are in; "cd /Users/scribbs/Desktop"; *identifiable by the path starting with a "/"*
- ***relative path***: will allow you to access the files and folders in the the folder you are already in; "./Desktop": starting from the current folder "." go into "/" the Desktop "Desktop"; or you can use the double dot ".." to go back to the previous folder
- command is a program, but we interfere with it more as a function  
- spaces is how you separate arguments in the Terminal
- "**pwd**" === present working directory
- "**ls**" === list
- once the program is finished running, the command prompt will restate itself
- "**cd**" === change directory; jumps into a new folder
- "**option**" === always start with a "-" if the option is abbreviated, "--" if the option is a full word; "ls -a" (hidden folders start with a "."); also called "flags"
- "ls -l": show everything in a list form with extra information, add "-a" and get the hidden files as well, or list them like this "ls -la"
- options and arguments at the same time: (ping is a program that most people use to check if they're connected to the internet) "ping google.com" and runs forever, quitting it is **Control + C** or add the option "**-c**" and the argument "**[#]**", ping will run # times and then quit
- **"[program] -h" or "[program] --help"** Help file
- **"man [program]"** will open the program's manual (more in depth than help); "**q**" quits the manual
- "**mkdir**" make directory
- "**touch**" makes a file (but it'll have no data)
- "**nano**" in the text editor
- "buffer" === a collection of data
- "**rm**" === remove (deletes the file completely); deleting folders with files use "**-r**"
- "**cp**" === copy file : **"cp [file] [copied file name]"**
- ***"rm -rf /" will delete all files in your route***
- "**-d**" === to delete a single file
- "**sudo**" === use when you know you need admin permission and it will prompt you with your password; it won't show anything when you are typing in your password

 <br>

#### *Networking*
- <a href="netart.rocks/notes/thewwweb">WWW</a>

 <br>

#### *Server*
- curl: terminal web client
- the server is the program, the physical machine running the server is a computer
- writing our own servers
  - connect your computer to a router and add another computer, or a few computers
  - find a folder that you have the html file in
  - navigate to that folder through the Terminal
  - type this command to launch: "python -m SimpleHTTPServer"
  - then it should say "Serving HTTP on 0.0.0.0 port 8000 ..."
  - to view index.html type in "[the servers IP Address]:8000"
  - you should be able to see the page
  - you can specify the port by adding an argument: "python -m SimpleHTTPServer 80"
  - 80 is the default for the web
  - Domain Name System: phone books that match IP Addresses to the names
  - "nslookup": gives you the ip address for the domain you asked for
  - "nano /etc/hosts": internal dns
    - localhost or 127.0.0.1 is yourself
  - "ssh": secure shell
  - "ssh [what's the computer you're trying to log into] [what's the user you're trying to access]"
    - for rasp pi: "ssh pi@192.168.1.17"
    - if it's your first time trying to access that computer, then terminal will ask if you really want to and if you do and you haven't just copy+pasted from the web type "yes"
    - then the name should change to "pi@raspberrypi:~$"


  - urls normally behave like absolute paths

***http protocol, address, server, file path***

***
## Homework
- Learn the Command Line (codecademy): #1-3
- Learn Git (codecademy): all
- review && edit brushes
- get comfortable with the <a href="netart.rocks/notes/commandline">terminal</a> && review networking notes
