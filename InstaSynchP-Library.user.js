// ==UserScript==
// @name        InstaSynchP Library
// @namespace   InstasynchP
// @description Basic function that are needed by several scripts use with @require

// @version     1
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

if (!window.pluginLibrary) {
    if (typeof String.prototype.startsWith !== 'function') {
        // see below for better implementation!
        String.prototype.startsWith = function (str) {
            return this.indexOf(str) === 0;
        };
    }

    window.isBlackname = function (username) {
        "use strict";
        if (typeof username !== 'string') {
            return false;
        }
        return username.match(/^([A-Za-z0-9]|([\-_](?![\-_]))){5,16}$/) !== null;
    };

    window.activeVideoIndex = function () {
        "use strict";
        return $('#playlist .active').index();
    };

    window.findUserId = function (id) {
        "use strict";
        var i;
        for (i = 0; i < window.users.length; i += 1) {
            if (id === window.users[i].id) {
                return window.users[i];
            }
        }
        return undefined;
    };
    window.findUserName = function (name) {
        "use strict";
        var i;
        for (i = 0; i < window.users.length; i += 1) {
            if (name === window.users[i].name) {
                return window.users[i];
            }
        }
        return undefined;
    };

    window.videojs = function () {
        "use strict";
        return $('.video-js')[0];
    };

    window.reloadPlayer = function () {
        "use strict";
        if (window.video) {
            window.video.destroy();
        }
        window.global.sendcmd('reload', null);
    };

    window.addSystemMessage = function (message) {
        "use strict";
        window.addMessage({
            username: ""
        }, message, 'system');
    };

    window.addErrorMessage = function (message) {
        "use strict";
        window.addMessage({
            username: ""
        }, message, 'errortext');
    };

    window.videoInfoEquals = function (a, b) {
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
    };
    window.pluginLibrary = true;
}
