# Moving around text
Basic motions:
```
h left
l right
j down
k up
```

## Move faster
```
w forwards beginning of word
e forwards to end of word
b back start of word
ge back end of word
% matching brackets
{ } paragraphs
g, previous change
g; next change
```

The commands can of course be combined:
```
we // sometimes using just `w` will take you to the next line
```

Move with `find`:
```
f{char}
; // next occurrence
, // prev occurrence
```

See "search" for more.

## Move within selection
Press `o` to go to the opposite ends of the selection
```
"Select from here to here"
```

To move quicker around files, see `code/files.md`

* Why l is not for left? *
Three fingers rest on the keyboard the way they are supposed to: the right hand
fingers on `j`, `k`, `l` and `;`.

If the middle finger is pivot, the one to its right will move the cursor to the right.
Note: you should not use h and l to move around much. They are often used
for off-by-one errors.

## Move within file, window
```
G
gg

H
M
L
```

Redraw the screen:
```
zz
zp
zb
```
