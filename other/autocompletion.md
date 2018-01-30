## Autocompletion
"She sells sea shells by the"

This will make completion smarter:
```
set infercase
```

```
Ctrl p // insert mode
```

```
Ctrl n,  p // next, previous
Ctrl y // pick selected word - yes
Ctrl e revert
```

## Whole line completion
Scenario: I want to type "She sells sea shells by the" again.

Steps:
```
i
// start typing "S
Ctrl x, Ctrl l
// cycle through
// enter or Ctrl y
```

## Command mode
Use Tab to trigger cycle through suggestions.
```
:colorscheme space Tab
use arrows
// TODO insert gif
```


