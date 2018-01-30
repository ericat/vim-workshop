## Cutting text
* Yank register is 0
* Unnamed is ""
* black hole is _

Task: copy black into white.
```
  $black: 000;
  // other code
  &:active {
    color: var(--white);
  }
```

The tricky part is to remember to paste from the yank register:
```
yw
/white
dw
"0P
```

A permanent solution would be to remap the delete shortcut so that it actually deletes instead of cutting:
```
" Delete, not cut!
vnoremap d "_d
nnoremap d "_d
```

## Copy into register
Never lose some text again:

"hy // copy into register h
"hp // paste into register p
