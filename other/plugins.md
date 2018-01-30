# Plugins you may need
### Nerdtree
* nice sidebar
* some boilerplate to set up

Basic:
```
Ctrl t // opens and closes
```

Operate on files:
```
mm // rename
md // delete
mr // reveal - open in Finder
```

### Nerdcommenter
Commenting made easy:
```
<leader> cc // comment line
<leader> cu // uncomment line
<leader c$ // comment to eol
```

### Ctrlp
```
Ctrl p
Start typing
```

Useful commands:
```
Ctrl j, k // or arrows to cycle through results
Ctrl t // open in new tab
Ctrl v // open in new window (visual split)
```

### Silver searcher
* Install ag with brew - `brew install ag`;
* Follow their manual - `ag`
```
ag -a <word>
```

### Multiple cursors
Sublime-like feature.

```
Ctrl n
keep on doing Ctrl n
v
do your thing
```

## Syntax
JS, jsx, Pug, Terraform...

Postcss:
```
autocmd BufNewFile,BufRead *.pcss set syntax=css
```

## Linting
