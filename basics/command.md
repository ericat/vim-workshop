## Execute commands
// Quitting Vim

Sometimes command mode is faster than visual mode.
```
:vs // vertical split
:tabopen
:source
```

### Duplicate or move lines
You don't need to copy the previous line:
```
:m17 // move
:t17 // duplicate (copy to)
```

The above commands also operate across a visual selection.

You can also pipe commands:
```
:t6 | t11 Copy on line 6 and 11
```

Operating on a range of lines:
:{start},{end}

```
:1,10y
:1,$y
```

Can also be a pattern. Delete between two tags:
```
:/<header/,/<\/header>/d
```

Task: copying an entire file. Difference between command and visual mode.

### The global command
The :g flag allows you to execute a particular command on multiple lines that match a pattern.

Delete all lines that contain the word "console" in the current file:

```
:g/console/d
```

Delete all blank lines:
```
:g/^\s*$/d
:g/^\s*$/d_ // send to black hole. Useful if there are a lot of lines
```

Invert all lines in a file:
```
:g/^/m 0
```

### Tips
See a list of changes:
```
:changes
```

Edit a file:
```
:edit {file}
```

Repeat the last command:
```
@:
```

### Move around in command mode
* Certain motions are shared between modes, like Ctrl h, Ctrl w, Ctrl u.
  Example: insert mode and command mode.
* Use Ctrl f and Y to copy a command
* Use arrows to cycle through history
