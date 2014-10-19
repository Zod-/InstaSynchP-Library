// ==UserScript==
// @name        InstaSynchP Library
// @namespace   InstaSynchP
// @description Basic function that are needed by several scripts use with @require

// @version     1.0.6
// @author      Zod-
// @source      https://github.com/Zod-/InstaSynchP-Library
// @license     GPL-3.0

// @include     http://*.instasynch.com/*
// @include     http://instasynch.com/*
// @include     http://*.instasync.com/*
// @include     http://instasync.com/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

//http://joquery.com/2012/string-format-for-javascript
if (typeof String.prototype.format !== 'function') {
    String.prototype.format = function () {
        // The string containing the format items (e.g. "{0}")
        // will and always has to be the first argument.
        var theString = this,
            i,
            regEx;

        // start with the second argument (i = 1)
        for (i = 0; i < arguments.length; i += 1) {
            // "gm" = RegEx options for Global search (more than one instance)
            // and for Multiline search
            regEx = new RegExp("\\{" + (i) + "\\}", "gm");
            theString = theString.replace(regEx, arguments[i]);
        }
        return theString;
    };
}
//http://stackoverflow.com/a/646643
if (typeof String.prototype.startsWith !== 'function') {
    // see below for better implementation!
    String.prototype.startsWith = function (str) {
        return this.indexOf(str) === 0;
    };
}

function isBlackname(username) {
    "use strict";
    if (typeof username !== 'string') {
        return false;
    }
    return username.match(/^([A-Za-z0-9]|([\-_](?![\-_]))){5,16}$/) !== null;
}

function htmlDecode(value) {
    "use strict";
    return $('<div/>').html(value).text();
}

function activeVideoIndex() {
    "use strict";
    return $('#playlist .active').index();
}

function findUserId(id) {
    "use strict";
    var i;
    for (i = 0; i < window.users.length; i += 1) {
        if (id === window.users[i].id) {
            return window.users[i];
        }
    }
    return undefined;
}

function findUserName(name) {
    "use strict";
    var i;
    for (i = 0; i < window.users.length; i += 1) {
        if (name === window.users[i].name) {
            return window.users[i];
        }
    }
    return undefined;
}

function videojs() {
    "use strict";
    return $('.video-js')[0];
}

function reloadPlayer() {
    "use strict";
    if (window.video) {
        window.video.destroy();
    }
    window.global.sendcmd('reload', null);
}

function addSystemMessage(message) {
    "use strict";
    window.addMessage({
        username: ""
    }, message, 'system');
}

function addErrorMessage(message) {
    "use strict";
    window.addMessage({
        username: ""
    }, message, 'errortext');
}

function videoInfoEquals(a, b) {
    "use strict";
    if (!a || !b) {
        return false;
    }
    if (a.provider && a.provider === b.provider &&
        a.mediaType && a.mediaType === b.mediaType &&
        a.id && a.id === b.id) {
        return true;
    }
    return false;
}
