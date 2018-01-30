# Use shell commands inside Vim
There is no need to exit vim if you want to interact with the command line.
```
:!pwd
```

We can also run multiple commands with
```
:shell // clarify
```

Both will put vim in the background. You will see this printed in your command
line:
```
[1]+  Stopped                 vim .
```
All you need to do is bring it to the foreground again.
```
fg
```

```
:edit $MYVIMRC
:source $MYVIMRC
```

// TODO faster source vimrc
