---
## Do you even
<img class="cover" src="./assets/img/cover.png" />
---
## Vim Philosophy
<ul class="none">
  <li>@fa[hand-o-right] "Vim grammar" (commands are self-documenting)</li>
  <li>@fa[hand-o-right] Modes: normal, insert, visual, command.</li>
</ul>
---
## Why hate Vim?
- counterintuitive |
- does not seem to respond |
- learning wall |
---
## The Learning Wall
_viewed 1,392,379 times_

@title[Quitting Vim]
![Image-Absolute](assets/img/quitting-so.png)
<span style="font-size:0.5em">[Stack Overflow: Helping One Million Developers Exit Vim](https://stackoverflow.com/questions/11828270/how-to-exit-the-vim-editor)</span>

@fa[arrow-down]

+++
@title[Quitting Vim]
![Image-Absolute](assets/img/quitting.jpg)

@fa[arrow-down]

+++
@title[Quitting Vim]
![Image-Absolute](assets/img/trapped.jpg)
---
## Why learn Vim?
- you dislike the mouse |
- context switch - it slows you down |
- different mindset |
- commands will just "work" elsewhere |
- it sneakily opens |
---
@title[Vim Usage]
![Image-Absolute](assets/img/vim-usage.png)
<br />
<span style="font-size:0.5em">[2018 Developer Skills Report - HackerRank](http://research.hackerrank.com/developer-skills/2018/)</span>
---
## Vim Features
Pretty much everything, plus:
<ul class="none">
  <li>@fa[thumbs-up] simple arithmetic</li>
  <li>@fa[thumbs-up] interact with the shell</li>
  <li>@fa[thumbs-up] save text into registers</li>
  <li>@fa[thumbs-up] built-in version control</li>
</ul>
---
## Where to Start
<div class="terminal">
  $ brew install vim
</div>

...what next?
---
## Configuration Time
- get Vundle  - install plugins with one command
- `touch ~/.vimrc`
- enable arrows in insert mode
- enable mouse
- set your leader key
- remap ESC
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

@fa[arrow-down]

+++?code=assets/vimrc-sample&lang=bash&title=Source: .vimrc

@[43](Enable mouse.)
@[74](Show line number.)
@[86](Highlight matches when searching)
@[151-155](iTerm shortcuts.)
@[159-161](Delete, not cut!)
---
## Vim Modes
- normal
- insert
- visual
- command
---
## Command Mode
- execute commands (:q, :vs, :wa) |
- operate on word/line/ranges without moving the cursor (5,10d) |
- interact with the command line (:source) |

```
:m17
:t17
:!ls // fg
```
---
## Visual Mode
- _visually selecting_ text
- redefine boundaries of selection with o

```
v selects a character; begins selection;
V selects line.
```

Other examples:
```
vit
vi"
vt;
```
---
## Insert Mode
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
```
5u // undo 5 times
:12,15norm dit // norm command
```
---
## Pain points
<ul class="none">
  <li>@fa[thumbs-down] Delete is actually cut</li>
  <li>@fa[thumbs-down] Copy and paste can be tricky to setup</li>
  <li>@fa[thumbs-down] Global search and replace</li>
  <li>@fa[thumbs-down] Typos</li>
</ul>

@fa[arrow-down]

+++
## When things go wrong

![Image-Absolute](assets/img/prototcolpe.jpg)

<p class="error">:s/y/col</p>
<p class="success">:s/\&lt;y/&gt;/col</p>
---
## Resources
<ul class="none">
 <li>@fa[keyboard-o] [Open Vim](http://www.openvim.com/tutorial.html)</li>
 <li>@fa[github-alt] [Vim Galore](https://github.com/mhinz/vim-galore)</li>
 <li>@fa[link] [Vim gifs](https://vimgifs.com/)</li>
 <li>@fa[link] [Vim cheatsheet](https://vim.rtorr.com/)</li>
 <li>@fa[gamepad] [Vim adventure](https://vim-adventures.com/)</li>
 <li>@fa[video-camera] [Learn to Use Vim](https://egghead.io/courses/learn-to-use-vim)</li>
 <li>@fa[book] [Mastering Vim](https://jovicailic.org/mastering-vim-quickly/)</li>
</ul>

@fa[arrow-down]

+++?image=/assets/img/keyboard.jpg
@title[Keyboard Cover]
