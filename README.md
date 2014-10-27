InstaSynchP-Library
===================

Basic function that are needed by several scripts use with @require

Functions
---------
#### `String.prototype.format`
[StackOverflow](http://stackoverflow.com/a/4673436)
```javascript
'{0}: {1}'.format(user, message)
```

#### `String.prototype.startsWith`
[StackOverflow](http://stackoverflow.com/a/646643)
```javascript
'string'.startsWith('str')
```
#### `String.prototype.endsWith`
[StackOverflow](http://stackoverflow.com/a/646643)
```javascript
'string'.endsWith('ing')
```

#### `String.prototype.contains`
[StackOverflow](http://stackoverflow.com/a/1978419)
```javascript
'string'.contains('ri')
```

#### `isBlackname`
Checks according to `/^([A-Za-z0-9]|([\-_](?![\-_]))){5,16}$/` regex if the string could be a blackname (greyname would be `{1,16}`)
```javascript
isBlackname('username')
```

#### `htmlDecode`
Decodes html tags from a string
```javascript
htmlDecode('&gt;')
```

#### `activeVideoIndex`
Returns the index of the active video
```javascript
activeVideoIndex()
```

#### `findUserId`
Find user by their id
```javascript
findUserId('id')
```

#### `findUserUsername`
Find user by their username
```javascript
findUserUsername('username')
```

#### `videojs`
Returns the video-js object
```javascript
videojs()
```

#### `reloadPlayer`
Reloads the player
```javascript
reloadPlayer()
```

#### `addSystemMessage`
Add a system message to the chat
```javascript
addSystemMessage('message')
```

#### `addErrorMessage`
Add an error message to the chat
```javascript
addErrorMessage('error message')
```

#### `videoInfoEquals`
Compare two videoinfo objects for equality
```javascript
videoInfoEquals(info1, info2)
```

License
-----------
<InstaSynch - Watch Videos with friends.>
The MIT License (MIT)

Copyright (c) 2014 InstaSynch

<Bibbytube - Modified InstaSynch client code>
Copyright (C) 2014  Zod-

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
