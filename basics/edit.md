## Basic text editing
i // insert (after character)
c // change

I // insert at the beginning of the line
A // insert at the end of the line
C // change from cursor to eol
S // delete entire line and switch to insert mode

Some examples:
```
ciw
20i= // insert 20 =
```

### Undo / Redo
```
u // undo
Ctrl r // redo
```

Naturally, you can combine:
```
5u
:earlier 3h
:later 3h
```

Undo branches
Vim has its own built in version control:
```
g-
g+
```

It will create a tree of changes.

### Copy text
Yank.
```
yl // copy one character (to the left)
y2l // copy two character
yw // copy word
p // paste

```

Task. Add strikethrough to markdown:
```
* ~~add meta tags~~
* logo in menu~~
```

From line 1:
```
y2l
0jw
P // paste before character
```

### Copy from outside Vim
Some boilerplate:
```
vnoremap <C-c> "*y
```

### Deleting text
```
dw // __delete__ word
d/vim // delete until the first occurrence of vim
x // delete char under the cursor
X // delete char to the left
s // (__sentence__) delete char and puts you in insert mode
r // __replace__ char (from normal mode)
```

From insert mode:
Quick delete:
```
Ctrl h // char
Ctrl w // word
Ctrl u // line
```

### Swap text
Swap characters:
```
xp
```

Swap lines:
```
ddp
```

### Uppercase / Lowercase
```
~ // change case
gUU // uppercase whole line
guu // lowercase whole line
```
