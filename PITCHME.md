---
## Do you even
<img class="cover" src="./assets/cover.png" />
---
## Vim Philosophy
* @fa[hand-o-right] "Vim grammar" (commands are self-documenting)
* @fa[hand-o-right] Modes: normal, insert, visual, command.
---
## Why hate Vim?
- counterintuitive |
- does not seem to respond |
- learning wall |

<p id="wall">Sample styled element</p>
---
## The Learning Wall
_viewed 1,392,379 times_

@title[Quitting Vim]

![Image-Absolute](assets/quitting-so.png)

<span style="font-size:0.5em">[Stack Overflow: Helping One Million Developers Exit Vim](https://stackoverflow.com/questions/11828270/how-to-exit-the-vim-editor)</span>

@fa[arrow-down]

+++
@title[Quitting Vim]

![Image-Absolute](assets/quitting.jpg)
---
## Why learn Vim?
- you dislike the mouse |
- context switch |
- different mindset |
- commands will just "work" elsewhere |
- it sneakily opens |
---
<img width="450px" src="./assets/vim-usage.png" />
@title[Vim Usage]
---
## Vim Features
Pretty much everything you do with your favourite editor, plus:
- simple arithmetic |
- interact with the shell |
- save text into registers |
- built-in version control |
---
## Where to Start
@fa[terminal] _brew install vim_

...what next?
---
## Configuration Time
* get Vundle  - install plugins with one command
* `touch ~/.vimrc`
* enable arrows in insert mode
* enable mouse
* set your leader key
* remap ESC
---
## Your .vimrc
Edit directly from Vim:
```
:edit or :e $MYVIMRC
:source $MYVIMRC
```

Optional, but good to have:
```
alias vimrc='vi ~/.vimrc'
```
+++?code=vimrc-sample&lang=bash&title=Plugins or Native Features?

@fa[arrow-down]

@[9-24](Plugins)

@fa[arrow-down]

+++?code=vimrc-sample&lang=bash&title=Set your preferences

@fa[arrow-down]

@[43](Enable mouse), @[74](Show line number), @[86](Highlight matches when searching)

@fa[arrow-down]

+++?code=vimrc-sample&lang=bash&title=Map key combinations

@[151-155](iTerm shortcuts)

+++?code=vimrc-sample&lang=bash&title=Change behaviour
@[159-161](Delete, not cut)
---
## Vim Modes
// TODO examples
---
## Vim Grammar
// TODO examples, like dw, ciw
---
## Exit Vim
```
:w
:q
:wq
:wa
```

Comfort settings:
```
command! -bar -bang Q quit<bang>
command! W w
command! WQ wq
command! Wq wq
command! Q q
```
---
## Autocomplete
---
## Productivity
---
## Pain points
- Delete is actually cut |
- Copy and paste can be tricky to setup |
- Global search and replace |
- Ongoing learning |
- Typos |

@fa[arrow-down]

+++
Here is a replace gone wrong:

![Image-Absolute](assets/prototcolpe.jpg)

The list includes: committng files called ":w", and much more...
---
## Resouces
* [Open Vim](http://www.openvim.com/tutorial.html) @fa[keyboard-o]
* [Vim Galore](https://github.com/mhinz/vim-galore) @fa[github-alt]
* [Vim gifs](https://vimgifs.com/)
* [Vim cheatsheet](https://vim.rtorr.com/)
* [Vim adventure](https://vim-adventures.com/) @fa[gamepad]
* [Learn to Use Vim](https://egghead.io/courses/learn-to-use-vim) @fa[video-camera]
* [Mastering Vim](https://jovicailic.org/mastering-vim-quickly/) @fa[book]

@fa[arrow-down]

+++?image=/assets/keyboard.jpg
@title[Keyboard Cover]
