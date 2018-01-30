## Using Vim for Front End Development
### Using Vim with a file watcher
Vim can save in two ways:
* make a copy of the file and overwrite the original one
* rename the file and write a new one

The setting that regulates this is called `backupcopy`

Tell Vim not to save backup copies or swap files:
```
set noswapfile    " disable swapfiles
set nobackup      " disable backups
```
