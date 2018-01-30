## Move around a file
You can navigate code easily with Vim:
```
:{line number}  // :35
```

Or:

```
H
M
L
```

Then redraw the screen:
```
zz
zt
zb
```

You can even do:
```
50%
```
to move to the 50% of the file!

Navigating blocks of code:
```
%
```

The above will either move between brackets or blocks of code, like if / else.

## Jump to files
```
gf // go to file
Ctrl ^ // go back to previous file
```

```
gx // opens the link under the cursor in the browser
```

## Manipulate files
Open a file at a specific line number:
```
vi +11 file.js
vi +$ README.md
```

You can also execute commands with the `-c` flag.

I forgot a console.log at line 21:
```
vi +21 server/server.js -c d -c w -c q && git diff
```
