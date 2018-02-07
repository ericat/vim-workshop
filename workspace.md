# Tasks and Examples
### Task 1: norm command
Delete inside tags:
```
<ul class="none">
  <li>@fa[thumbs-down] Delete is actually cut</li>
  <li>@fa[thumbs-down] Copy and paste can be tricky to setup</li>
  <li>@fa[thumbs-down] Global search and replace</li>
  <li>@fa[thumbs-down] Typos</li>
</ul>
```

```
:12,15norm dit
```

###  Task 2: ranges
Delete a range of lines:
```
:12,17d
```
### Task 3: generate a numbered list
```
:put =range(1,5)
```

### Task 4: Increase / decrease numbers
Increment array indices:
```
array[0] = 0;
array[0] = 0;
array[0] = 0;
array[0] = 0;
array[0] = 0;
```

Cursor placed on [0]:
```
Ctrl v
3j
g
Ctrl a
```

### Task 5: Copy / Delete entire file
```
:%y
:%d
```

### Task 6: Visual Block
Add pipe | at beginning and the end
```
| Service | Address | Comments |
| ------------- |:-------------:| -----:|
http://app.checkoutlocal.com
http://api.checkoutlocal.com/
http://logger.checkoutlocal.com/
https://qa.checkout.seatwave.com/
https://checkout.seatwave.com
```

```
i | // line 56
Esc
Ctrl v
4j
.
```

### Task 7: Increment / Decrement
```
.href--logo {
  position: absolute;
  top: 5px;
  left: 20px;
  display: flex;
}
```


### Task 8: replace when not part of a word
```
prototype
col
```

```
:s/\<y\>/col
```


