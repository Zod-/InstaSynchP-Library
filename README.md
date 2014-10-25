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
Copyright (C) 2013  InstaSynch

<Bibbytube - Modified InstaSynch client code>
Copyright (C) 2014  Zod-

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

http://opensource.org/licenses/GPL-3.0
