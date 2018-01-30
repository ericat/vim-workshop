# Replace text
Replace a character:
```
r
```

To change a word, you will have to either cut / paste or change a word (`cw`).

Substitute on a line:
```
:s/y/col
```

Substitute on the entire file:
```
:%s/y/col
```

Replace with "dry run":
```
:%s/y/col/c
```

Replace only whole words:
```
:%s/\<y\>/col
```

You can also act on a range of lines:
```
:4,10s/substitute/replace
```

To avoid adding /g to every substitute command:
```
set gdefault     " perform global substitutions by default
```

