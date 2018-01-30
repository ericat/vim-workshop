# Customisations
* Enable arrows in insert mode
* Enable mouse
* Set your leader key
* Remap ESC

Settings for all the above:
* touch ~/.vimrc
* add the following:
```
set mouse=a
let mapleader=" "
imap jk <ESC>
```

## Key Bindings
```
:map // all modes
:imap // insert mode only
:cmap // command mode only
:nmap // normal mode only
:vmap // visual mode only
```

Example:
```
:map <C-s> :w<cr> // <cr> is what executes the commands
```

## Temporary vs. permanent settings
Temporary settings are prefixed by a colon ":" - this way you can apply customisation on the fly.

To make it permanent, add it to vimrc, like so:
```
set spell
```

Check your settings:
```
:set spell?
```

Example: tabs vs. spaces.

```
:set expandtab
:set noexpandtab
```

## Abbreviations
Everything is designed to make you faster:
```
:e for :edit
:set noet for noexpandtab
:set ai for autoindent

and so on...
```

# Tips
To debug, is useful to start vi without .vimrc:
```
vi -u NONE file.js
```

Edit .vimrc within Vim:
```
:e $MYVIMRC
:source $MYVIMRC
```

To apply changes immediately:
```
select whole file
gq
```

Add useful shortcuts in bash profile:
```
alias vi='vim'
alias vimrc='vi ~/.vimrc'
alias vimconfig='vi ~/.vim'
```

Sample .vimrc structure:
```
set nocompatible

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" Plugins
" your plugins

call vundle#end()            " required for Vundle
filetype plugin indent on    " required for Vundle
                             " filetype detection is on, plugins too. This
                             " allows customisation based on language.

" Fix common misspellings
source ~/.vim/.abbreviations.vim

syntax on
colorscheme molokai
imap jk <ESC>
let mapleader=" "

set mouse=a                  " enable mouse
set noswapfile               " disable swapfiles
set nobackup                 " disable backups
set clipboard=unnamed        " access clipboard
set tabstop=2                " number of spaces <tab> will count for
set softtabstop=2
set shiftwidth=2
set expandtab                " use <space>s rather than <tab>
set autoindent               " use current line indentation when copying
set number
set cursorline               " highlight line
set laststatus=2
set statusline=%F%m%r%h%w%=(%{&ff}/%Y)\ (line\ %l\/%L,\ col\ %c)\

" comfort commands
command! -bar -bang Q quit<bang>
command! W w
command! WQ wq
command! Wq wq
command! Q q

// some plugin boilerplate
// iterm mappings
```

