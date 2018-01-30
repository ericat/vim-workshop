## Set marks
As easy as doing:
```
m{letter} // set the mark //TODO use {} as placeholders
'{letter} // go back to marked line
```

Where letter is a letter of your choice.

For example, `ma` qill add the mark called "a" to a line.

##  Save file with sudo
You can edit /etc/hosts or any file that requires root permissions:
```
:edit /etc/hosts
do you thing
:w !sudo tee %
```

The above is a hack that uses tee to write to the current file (%).

In short, the command !sudo allows to run as root from within Vim.

## Use the shell from within Vim

## Macros
// example Rachel internat library
