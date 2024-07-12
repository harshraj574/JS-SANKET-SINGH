
COMMANDS 
-> cd -> change directory
-> ls -> to se the files/sub-directories of a directory
  -> ls -l -> It list down more details like owner details,permissions,size,etc.
  -> ls -a -> also list files/folder starting with .(hidden folder)
-> pwd -> present working directory

 '~' -> this tilda sign refers to the home directory.(home directory is present inside the rot directory)
 '/' -> this forward slash sign refers to the root directory.

 RELATIVE PATH VS ABSOLUTE PATH
 Relative path: It describe the location of a file/folder from a current folder.
 ABSOLUTE PATH: The entire path from the root to the file/folder we have to open. (~)

 -> When you give absolute path of a file/fodler u will give the whole path of that file/folder.Whereas in Relative path  do jumps relative to the current working directory.

 'clear' -> clear the working space and moves you to the top of thw terminal

'mkdir' -> make a new directory
'rmdir' <foldername> -> remove a empty directory

'touch' -> create a new file
'rm' <filename> -> remove a file
'rm -r <foldername>' -> first deletes the content of the folder recursively and then delete the folder itself

'cat' -> Prints the whole content of the file
'tail <filename>' ->prints the last few lines of the file
'tail -n <filename>'->whatever u specify on n what many last n lines will be printed
'head <filename>' -> prints the first few lines of the file
'head -n <filename>'->whatever u specify on n what many first n lines will be printed
'echo "harsh"' -> echo acts as a print statement in shell
'echo "harsh" > <filename>' -> this will dump the result of lhs i.e echo print statment into the file.(give the greaterthan sign)-> this will replace the old content of the file
'pwd >> <filename> ' -> this will not replace but append the pwd log into the file
'ls | grep python'-> this will actually pass the output of ls as an input to grep,
grep does a substring search of pyhton on the output of ls.
'<command1> && <command2>' -> this executes command1 followed by command2 considering command1 has no error's.
'cp <file1> <file2>' ->  this will copy the content of file1 to file2
'mv <filename> <pathWheretobecopied>' -> this will cut the file to the current pwd to the path specified
'mv <filname1> <filename2>' -> this will cut paste filename1 to filename2 in the same folder so basically renaming the filename.


   < VIM TEXT EDITOR>
   ->Vim <filename> : it will create a file if it doesnt exist and open it in normal mode.
   In normal mode we can't do changes to our file but we can read and navigae the file.
   You can also use vi <filename> to do the same thing.

   -> Now after opening vim if you want ot make changes to your file you cant make them directly as you are in normal mode ,you have to enter insert mode by pressing 'I' then only u can start editing the file.If you wnat to come back to normal mode press 'esc' button.

   -> 'esc + :wq' -> if you wan to exit the file after saving then you can do this.
   -> using 'l,h,j,k' us can move the cursor up,down,left,right.
   -> 'dd' -> in normal mode,what ever line your cursor is at if you press d twice it will delete that line.
   --> 'gg'-> in normal mode, press g twice it will go to the top left of the file
   -> 'G'-> in normal mode,this will make the file pointer go to the end of the file
   -> 'w' > in normal mode, if you press w it will make you jump a word,if you press 2 w's then you ccan jump 2 words
   ->'vw' -> it normal mode,it copies a word
   ->'p' -> in normal mode, to paste the line/word copied








