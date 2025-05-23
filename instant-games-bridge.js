(()=>{
    var e = {
        550: (e,t,r)=>{
            "use strict";
            r.d(t, {
                Z: ()=>Ln
            });
            var n = {
                VK: "vk",
                YANDEX: "yandex",
                CRAZY_GAMES: "crazy_games",
                ABSOLUTE_GAMES: "absolute_games",
                GAME_DISTRIBUTION: "game_distribution",
                MOCK: "mock"
            }
              , o = {
                PLATFORM: "platform",
                PLAYER: "player",
                GAME: "game",
                STORAGE: "storage",
                ADVERTISEMENT: "advertisement",
                SOCIAL: "social",
                DEVICE: "device",
                LEADERBOARD: "leaderboard"
            }
              , i = {
                INTERSTITIAL_STATE_CHANGED: "interstitial_state_changed",
                REWARDED_STATE_CHANGED: "rewarded_state_changed",
                BANNER_STATE_CHANGED: "banner_state_changed",
                VISIBILITY_STATE_CHANGED: "visibility_state_changed"
            }
              , a = {
                VISIBLE: "visible",
                HIDDEN: "hidden"
            }
              , u = {
                LOADING: "loading",
                OPENED: "opened",
                CLOSED: "closed",
                FAILED: "failed"
            }
              , s = {
                LOADING: "loading",
                OPENED: "opened",
                CLOSED: "closed",
                FAILED: "failed",
                REWARDED: "rewarded"
            }
              , c = {
                LOADING: "loading",
                SHOWN: "shown",
                HIDDEN: "hidden",
                FAILED: "failed"
            }
              , l = {
                LOCAL_STORAGE: "local_storage",
                PLATFORM_INTERNAL: "platform_internal"
            }
              , f = {
                DESKTOP: "desktop",
                MOBILE: "mobile",
                TABLET: "tablet",
                TV: "tv"
            }
              , p = {
                GAME_READY: "game_ready",
                IN_GAME_LOADING_STARTED: "in_game_loading_started",
                IN_GAME_LOADING_STOPPED: "in_game_loading_stopped",
                GAMEPLAY_STARTED: "gameplay_started",
                GAMEPLAY_STOPPED: "gameplay_stopped",
                PLAYER_GOT_ACHIEVEMENT: "player_got_achievement"
            }
              , h = "initialize"
              , y = "authorize_player"
              , d = "add_to_home_screen"
              , m = "rate"
              , v = "set_leaderboard_score"
              , _ = "get_leaderboard_score"
              , g = "get_leaderboard_entries"
              , b = {
                message: "Before using the SDK you must initialize it"
            }
              , S = {
                message: "Storage not supported"
            }
              , w = {
                message: "GameDistribution Game ID is undefined"
            };
            function E(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function P(e, t, r) {
                !function(e, t) {
                    if (t.has(e))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t),
                t.set(e, r)
            }
            function k(e, t, r) {
                return function(e, t, r) {
                    if (t.set)
                        t.set.call(e, r);
                    else {
                        if (!t.writable)
                            throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, A(e, t, "set"), r),
                r
            }
            function O(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, A(e, t, "get"))
            }
            function A(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            var D = new WeakMap
              , T = new WeakMap
              , I = new WeakMap;
            const R = function() {
                function e() {
                    var t = this;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    P(this, D, {
                        writable: !0,
                        value: void 0
                    }),
                    P(this, T, {
                        writable: !0,
                        value: void 0
                    }),
                    P(this, I, {
                        writable: !0,
                        value: void 0
                    }),
                    k(this, D, new Promise((function(e, r) {
                        k(t, T, e),
                        k(t, I, r)
                    }
                    )))
                }
                var t, r;
                return t = e,
                (r = [{
                    key: "promise",
                    get: function() {
                        return O(this, D)
                    }
                }, {
                    key: "resolve",
                    value: function(e) {
                        O(this, T).call(this, e)
                    }
                }, {
                    key: "reject",
                    value: function(e) {
                        O(this, I).call(this, e)
                    }
                }]) && E(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            var j = r(258)
              , L = r.n(j);
            function B(e) {
                return B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                B(e)
            }
            function N(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    r.push.apply(r, n)
                }
                return r
            }
            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function M(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }
            function G(e, t) {
                var r = function(e, t, r) {
                    if (!t.has(e))
                        throw new TypeError("attempted to get private field on non-instance");
                    return t.get(e)
                }(e, t);
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, r)
            }
            var F = new WeakMap
              , z = function() {
                function e(t) {
                    var r, n, o, u = this;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    M(this, "_isInitialized", !1),
                    M(this, "_platformSdk", null),
                    M(this, "_isPlayerAuthorized", !1),
                    M(this, "_playerId", null),
                    M(this, "_playerName", null),
                    M(this, "_playerPhotos", []),
                    M(this, "_visibilityState", null),
                    M(this, "_localStorage", null),
                    M(this, "_defaultStorageType", l.LOCAL_STORAGE),
                    M(this, "_platformStorageCachedData", null),
                    M(this, "_isBannerSupported", !1),
                    M(this, "_interstitialState", null),
                    M(this, "_rewardedState", null),
                    M(this, "_bannerState", null),
                    o = {
                        writable: !0,
                        value: {}
                    },
                    function(e, t) {
                        if (t.has(e))
                            throw new TypeError("Cannot initialize the same private elements twice on an object")
                    }(r = this, n = F),
                    n.set(r, o);
                    try {
                        this._localStorage = window.localStorage
                    } catch (e) {}
                    this._visibilityState = "visible" === document.visibilityState ? a.VISIBLE : a.HIDDEN,
                    document.addEventListener("visibilitychange", (function() {
                        u._visibilityState = "visible" === document.visibilityState ? a.VISIBLE : a.HIDDEN,
                        u.emit(i.VISIBILITY_STATE_CHANGED, u._visibilityState)
                    }
                    )),
                    t && (this._options = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? N(Object(r), !0).forEach((function(t) {
                                M(e, t, r[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }
                            ))
                        }
                        return e
                    }({}, t))
                }
                var t, r;
                return t = e,
                (r = [{
                    key: "platformId",
                    get: function() {
                        return n.MOCK
                    }
                }, {
                    key: "platformSdk",
                    get: function() {
                        return this._platformSdk
                    }
                }, {
                    key: "platformLanguage",
                    get: function() {
                        var e = navigator.language;
                        return "string" == typeof e ? e.substring(0, 2).toLowerCase() : "en"
                    }
                }, {
                    key: "platformPayload",
                    get: function() {
                        return new URL(window.location.href).searchParams.get("payload")
                    }
                }, {
                    key: "platformTld",
                    get: function() {
                        return null
                    }
                }, {
                    key: "visibilityState",
                    get: function() {
                        return this._visibilityState
                    }
                }, {
                    key: "isPlayerAuthorizationSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isPlayerAuthorized",
                    get: function() {
                        return this._isPlayerAuthorized
                    }
                }, {
                    key: "playerId",
                    get: function() {
                        return this._playerId
                    }
                }, {
                    key: "playerName",
                    get: function() {
                        return this._playerName
                    }
                }, {
                    key: "playerPhotos",
                    get: function() {
                        return this._playerPhotos
                    }
                }, {
                    key: "defaultStorageType",
                    get: function() {
                        return this._defaultStorageType
                    }
                }, {
                    key: "isBannerSupported",
                    get: function() {
                        return this._isBannerSupported
                    }
                }, {
                    key: "bannerState",
                    get: function() {
                        return this._bannerState
                    }
                }, {
                    key: "interstitialState",
                    get: function() {
                        return this._interstitialState
                    }
                }, {
                    key: "rewardedState",
                    get: function() {
                        return this._rewardedState
                    }
                }, {
                    key: "isInviteFriendsSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isJoinCommunitySupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isShareSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isCreatePostSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isAddToHomeScreenSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isAddToFavoritesSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isRateSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isExternalLinksAllowed",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "deviceType",
                    get: function() {
                        if (navigator && navigator.userAgent) {
                            var e = navigator.userAgent.toLowerCase();
                            if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(e))
                                return f.MOBILE;
                            if (/ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP)))/.test(e))
                                return f.TABLET
                        }
                        return f.DESKTOP
                    }
                }, {
                    key: "isLeaderboardSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isLeaderboardNativePopupSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isLeaderboardMultipleBoardsSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isLeaderboardSetScoreSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isLeaderboardGetScoreSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "isLeaderboardGetEntriesSupported",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        return Promise.resolve()
                    }
                }, {
                    key: "sendMessage",
                    value: function(e) {
                        return Promise.resolve()
                    }
                }, {
                    key: "authorizePlayer",
                    value: function(e) {
                        return Promise.reject()
                    }
                }, {
                    key: "isStorageSupported",
                    value: function(e) {
                        return e === l.LOCAL_STORAGE && null !== this._localStorage
                    }
                }, {
                    key: "isStorageAvailable",
                    value: function(e) {
                        return e === l.LOCAL_STORAGE && null !== this._localStorage
                    }
                }, {
                    key: "getDataFromStorage",
                    value: function(e, t) {
                        if (t === l.LOCAL_STORAGE) {
                            if (this._localStorage) {
                                if (Array.isArray(e)) {
                                    for (var r = [], n = 0; n < e.length; n++)
                                        r.push(this._getDataFromLocalStorage(e[n]));
                                    return Promise.resolve(r)
                                }
                                var o = this._getDataFromLocalStorage(e);
                                return Promise.resolve(o)
                            }
                            return Promise.reject(S)
                        }
                        return Promise.reject(S)
                    }
                }, {
                    key: "setDataToStorage",
                    value: function(e, t, r) {
                        if (r === l.LOCAL_STORAGE) {
                            if (this._localStorage) {
                                if (Array.isArray(e)) {
                                    for (var n = 0; n < e.length; n++)
                                        this._setDataToLocalStorage(e[n], t[n]);
                                    return Promise.resolve()
                                }
                                return this._setDataToLocalStorage(e, t),
                                Promise.resolve()
                            }
                            return Promise.reject(S)
                        }
                        return Promise.reject(S)
                    }
                }, {
                    key: "deleteDataFromStorage",
                    value: function(e, t) {
                        if (t === l.LOCAL_STORAGE) {
                            if (this._localStorage) {
                                if (Array.isArray(e)) {
                                    for (var r = 0; r < e.length; r++)
                                        this._deleteDataFromLocalStorage(e[r]);
                                    return Promise.resolve()
                                }
                                return this._deleteDataFromLocalStorage(e),
                                Promise.resolve()
                            }
                            return Promise.reject(S)
                        }
                        return Promise.reject(S)
                    }
                }, {
                    key: "showBanner",
                    value: function(e) {
                        this._setBannerState(c.FAILED)
                    }
                }, {
                    key: "hideBanner",
                    value: function() {
                        this._setBannerState(c.HIDDEN)
                    }
                }, {
                    key: "showInterstitial",
                    value: function() {
                        this._setInterstitialState(u.FAILED)
                    }
                }, {
                    key: "showRewarded",
                    value: function() {
                        this._setRewardedState(s.FAILED)
                    }
                }, {
                    key: "inviteFriends",
                    value: function() {
                        return Promise.reject()
                    }
                }, {
                    key: "joinCommunity",
                    value: function() {
                        return Promise.reject()
                    }
                }, {
                    key: "share",
                    value: function() {
                        return Promise.reject()
                    }
                }, {
                    key: "createPost",
                    value: function(e) {
                        return Promise.reject()
                    }
                }, {
                    key: "addToHomeScreen",
                    value: function() {
                        return Promise.reject()
                    }
                }, {
                    key: "addToFavorites",
                    value: function() {
                        return Promise.reject()
                    }
                }, {
                    key: "rate",
                    value: function() {
                        return Promise.reject()
                    }
                }, {
                    key: "setLeaderboardScore",
                    value: function(e) {
                        return Promise.reject()
                    }
                }, {
                    key: "getLeaderboardScore",
                    value: function(e) {
                        return Promise.reject()
                    }
                }, {
                    key: "getLeaderboardEntries",
                    value: function(e) {
                        return Promise.reject()
                    }
                }, {
                    key: "showLeaderboardNativePopup",
                    value: function(e) {
                        return Promise.reject()
                    }
                }, {
                    key: "_getDataFromLocalStorage",
                    value: function(e) {
                        var t = this._localStorage.getItem(e);
                        if ("string" == typeof t)
                            try {
                                t = JSON.parse(t)
                            } catch (e) {}
                        return t
                    }
                }, {
                    key: "_setDataToLocalStorage",
                    value: function(e, t) {
                        "object" === B(t) && (t = JSON.stringify(t)),
                        this._localStorage.setItem(e, t)
                    }
                }, {
                    key: "_deleteDataFromLocalStorage",
                    value: function(e) {
                        this._localStorage.removeItem(e)
                    }
                }, {
                    key: "_setInterstitialState",
                    value: function(e) {
                        this._interstitialState === e && e !== u.FAILED || (this._interstitialState = e,
                        this.emit(i.INTERSTITIAL_STATE_CHANGED, this._interstitialState))
                    }
                }, {
                    key: "_setRewardedState",
                    value: function(e) {
                        this._rewardedState === e && e !== s.FAILED || (this._rewardedState = e,
                        this.emit(i.REWARDED_STATE_CHANGED, this._rewardedState))
                    }
                }, {
                    key: "_setBannerState",
                    value: function(e) {
                        this._bannerState === e && e !== c.FAILED || (this._bannerState = e,
                        this.emit(i.BANNER_STATE_CHANGED, this._bannerState))
                    }
                }, {
                    key: "_createPromiseDecorator",
                    value: function(e) {
                        var t = new R;
                        return G(this, F)[e] = t,
                        t
                    }
                }, {
                    key: "_getPromiseDecorator",
                    value: function(e) {
                        return G(this, F)[e]
                    }
                }, {
                    key: "_resolvePromiseDecorator",
                    value: function(e, t) {
                        G(this, F)[e] && (G(this, F)[e].resolve(t),
                        delete G(this, F)[e])
                    }
                }, {
                    key: "_rejectPromiseDecorator",
                    value: function(e, t) {
                        G(this, F)[e] && (G(this, F)[e].reject(t),
                        delete G(this, F)[e])
                    }
                }]) && C(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            L().mixin(z.prototype);
            const W = z;
            var x = function(e) {
                return new Promise((function(t) {
                    var r = document.createElement("script");
                    r.src = e,
                    r.addEventListener("load", t),
                    document.head.appendChild(r)
                }
                ))
            };
            function H(e) {
                return H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                H(e)
            }
            function V(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function K(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function Y() {
                return Y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                    var n = U(e, t);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
                    }
                }
                ,
                Y.apply(this, arguments)
            }
            function U(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = X(e)); )
                    ;
                return e
            }
            function q(e, t) {
                return q = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                q(e, t)
            }
            function J(e, t) {
                if (t && ("object" === H(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return Z(e)
            }
            function Z(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function X(e) {
                return X = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                X(e)
            }
            function Q(e, t) {
                ee(e, t),
                t.add(e)
            }
            function $(e, t, r) {
                ee(e, t),
                t.set(e, r)
            }
            function ee(e, t) {
                if (t.has(e))
                    throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
            function te(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            function re(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, ne(e, t, "get"))
            }
            function ne(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            var oe = new WeakMap
              , ie = new WeakSet;
            function ae(e, t) {
                var r = this
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "result"
                  , i = this._getPromiseDecorator(e);
                return i || (i = this._createPromiseDecorator(e),
                this._platformSdk.send(t, n).then((function(t) {
                    t[o] ? r._resolvePromiseDecorator(e) : r._rejectPromiseDecorator(e)
                }
                )).catch((function(t) {
                    r._rejectPromiseDecorator(e, t)
                }
                ))),
                i.promise
            }
            const ue = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && q(e, t)
                }(p, e);
                var t, r, o, i, a = (o = p,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = X(o);
                    if (i) {
                        var r = X(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return J(this, e)
                }
                );
                function p() {
                    var e;
                    V(this, p);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                    return Q(Z(e = a.call.apply(a, [this].concat(r))), ie),
                    $(Z(e), oe, {
                        writable: !0,
                        value: void 0
                    }),
                    e
                }
                return t = p,
                (r = [{
                    key: "platformId",
                    get: function() {
                        return n.VK
                    }
                }, {
                    key: "platformLanguage",
                    get: function() {
                        var e = new URL(window.location.href);
                        if (e.searchParams.has("language")) {
                            var t = e.searchParams.get("language");
                            try {
                                t = parseInt(t)
                            } catch (e) {}
                            switch (t) {
                            case 0:
                                return "ru";
                            case 1:
                                return "uk";
                            case 2:
                                return "be";
                            case 3:
                                return "en"
                            }
                        }
                        return Y(X(p.prototype), "platformLanguage", this)
                    }
                }, {
                    key: "platformPayload",
                    get: function() {
                        var e = new URL(window.location.href);
                        return e.searchParams.has("hash") ? e.searchParams.get("hash") : Y(X(p.prototype), "platformPayload", this)
                    }
                }, {
                    key: "deviceType",
                    get: function() {
                        if (re(this, oe))
                            switch (re(this, oe)) {
                            case "html5_ios":
                            case "html5_android":
                            case "html5_mobile":
                                return f.MOBILE;
                            case "web":
                                return f.DESKTOP
                            }
                        return Y(X(p.prototype), "deviceType", this)
                    }
                }, {
                    key: "isPlayerAuthorizationSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isPlayerAuthorized",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isInviteFriendsSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isJoinCommunitySupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isShareSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isCreatePostSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isAddToHomeScreenSupported",
                    get: function() {
                        return "html5_android" === re(this, oe)
                    }
                }, {
                    key: "isAddToFavoritesSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isExternalLinksAllowed",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isLeaderboardSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isLeaderboardNativePopupSupported",
                    get: function() {
                        return this.deviceType === f.MOBILE
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var e = this;
                        if (this._isInitialized)
                            return Promise.resolve();
                        var t, r, n, o = this._getPromiseDecorator(h);
                        if (!o) {
                            o = this._createPromiseDecorator(h);
                            var i = new URL(window.location.href);
                            i.searchParams.has("platform") && (t = this,
                            r = oe,
                            n = i.searchParams.get("platform"),
                            function(e, t, r) {
                                if (t.set)
                                    t.set.call(e, r);
                                else {
                                    if (!t.writable)
                                        throw new TypeError("attempted to set read only private field");
                                    t.value = r
                                }
                            }(t, ne(t, r, "set"), n)),
                            x("https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js").then((function() {
                                e._platformSdk = window.vkBridge,
                                e._platformSdk.send("VKWebAppInit").then((function() {
                                    "html5_android" !== re(e, oe) && "html5_ios" !== re(e, oe) || (e._isBannerSupported = !0),
                                    e._platformSdk.send("VKWebAppGetUserInfo").then((function(t) {
                                        t && (e._playerId = t.id,
                                        e._playerName = t.first_name + " " + t.last_name,
                                        t.photo_100 && e._playerPhotos.push(t.photo_100),
                                        t.photo_200 && e._playerPhotos.push(t.photo_200),
                                        t.photo_max_orig && e._playerPhotos.push(t.photo_max_orig))
                                    }
                                    )).finally((function() {
                                        e._isInitialized = !0,
                                        e._defaultStorageType = l.PLATFORM_INTERNAL,
                                        e._resolvePromiseDecorator(h)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        return o.promise
                    }
                }, {
                    key: "authorizePlayer",
                    value: function(e) {
                        return Promise.resolve()
                    }
                }, {
                    key: "isStorageSupported",
                    value: function(e) {
                        return e === l.PLATFORM_INTERNAL || Y(X(p.prototype), "isStorageSupported", this).call(this, e)
                    }
                }, {
                    key: "isStorageAvailable",
                    value: function(e) {
                        return e === l.PLATFORM_INTERNAL || Y(X(p.prototype), "isStorageAvailable", this).call(this, e)
                    }
                }, {
                    key: "getDataFromStorage",
                    value: function(e, t) {
                        var r = this;
                        return t === l.PLATFORM_INTERNAL ? new Promise((function(t, n) {
                            var o = Array.isArray(e) ? e : [e];
                            r._platformSdk.send("VKWebAppStorageGet", {
                                keys: o
                            }).then((function(r) {
                                if (Array.isArray(e)) {
                                    for (var n = [], o = 0; o < e.length; o++)
                                        if ("" !== r.keys[o].value) {
                                            var i = void 0;
                                            try {
                                                i = JSON.parse(r.keys[o].value)
                                            } catch (e) {
                                                i = r.keys[o].value
                                            }
                                            n.push(i)
                                        } else
                                            n.push(null);
                                    t(n)
                                } else if ("" !== r.keys[0].value) {
                                    var a;
                                    try {
                                        a = JSON.parse(r.keys[0].value)
                                    } catch (e) {
                                        a = r.keys[0].value
                                    }
                                    t(a)
                                } else
                                    t(null)
                            }
                            )).catch((function(e) {
                                e && e.error_data && e.error_data.error_reason ? n(e.error_data.error_reason) : n()
                            }
                            ))
                        }
                        )) : Y(X(p.prototype), "getDataFromStorage", this).call(this, e, t)
                    }
                }, {
                    key: "setDataToStorage",
                    value: function(e, t, r) {
                        var n = this;
                        if (r === l.PLATFORM_INTERNAL) {
                            if (Array.isArray(e)) {
                                for (var o = [], i = 0; i < e.length; i++) {
                                    var a = {
                                        key: e[i],
                                        value: t[i]
                                    };
                                    "string" != typeof t[i] && (a.value = JSON.stringify(t[i])),
                                    o.push(this._platformSdk.send("VKWebAppStorageSet", a))
                                }
                                return Promise.all(o)
                            }
                            var u = {
                                key: e,
                                value: t
                            };
                            return "string" != typeof t && (u.value = JSON.stringify(t)),
                            new Promise((function(e, t) {
                                n._platformSdk.send("VKWebAppStorageSet", u).then((function() {
                                    e()
                                }
                                )).catch((function(e) {
                                    e && e.error_data && e.error_data.error_reason ? t(e.error_data.error_reason) : t()
                                }
                                ))
                            }
                            ))
                        }
                        return Y(X(p.prototype), "setDataToStorage", this).call(this, e, t, r)
                    }
                }, {
                    key: "deleteDataFromStorage",
                    value: function(e, t) {
                        if (t === l.PLATFORM_INTERNAL) {
                            if (Array.isArray(e)) {
                                for (var r = [], n = 0; n < e.length; n++)
                                    r.push(this.setDataToStorage(e[n], "", t));
                                return Promise.all(r)
                            }
                            return this.setDataToStorage(e, "", t)
                        }
                        return Y(X(p.prototype), "deleteDataFromStorage", this).call(this, e, t)
                    }
                }, {
                    key: "showBanner",
                    value: function(e) {
                        var t = this
                          , r = "bottom"
                          , n = "resize"
                          , o = !1;
                        e && ("string" == typeof e.position && (r = e.position),
                        "string" == typeof e.layoutType && (n = e.layoutType),
                        "boolean" == typeof e.canClose && (o = e.canClose)),
                        this._platformSdk.send("VKWebAppShowBannerAd", {
                            banner_location: r,
                            layout_type: n,
                            can_close: o
                        }).then((function(e) {
                            e.result ? t._setBannerState(c.SHOWN) : t._setBannerState(c.FAILED)
                        }
                        )).catch((function(e) {
                            t._setBannerState(c.FAILED)
                        }
                        ))
                    }
                }, {
                    key: "hideBanner",
                    value: function() {
                        var e = this;
                        this._platformSdk.send("VKWebAppHideBannerAd").then((function(t) {
                            t.result && e._setBannerState(c.HIDDEN)
                        }
                        ))
                    }
                }, {
                    key: "showInterstitial",
                    value: function() {
                        var e = this;
                        this._platformSdk.send("VKWebAppCheckNativeAds", {
                            ad_format: "interstitial"
                        }).then((function(t) {
                            t.result && e._setInterstitialState(u.OPENED)
                        }
                        )).finally((function() {
                            e._platformSdk.send("VKWebAppShowNativeAds", {
                                ad_format: "interstitial"
                            }).then((function(t) {
                                e._setInterstitialState(t.result ? u.CLOSED : u.FAILED)
                            }
                            )).catch((function() {
                                e._setInterstitialState(u.FAILED)
                            }
                            ))
                        }
                        ))
                    }
                }, {
                    key: "showRewarded",
                    value: function() {
                        var e = this;
                        this._platformSdk.send("VKWebAppCheckNativeAds", {
                            ad_format: "reward",
                            use_waterfall: !0
                        }).then((function(t) {
                            t.result && e._setRewardedState(s.OPENED)
                        }
                        )).finally((function() {
                            e._platformSdk.send("VKWebAppShowNativeAds", {
                                ad_format: "reward",
                                use_waterfall: !0
                            }).then((function(t) {
                                t.result ? (e._setRewardedState(s.REWARDED),
                                e._setRewardedState(s.CLOSED)) : e._setRewardedState(s.FAILED)
                            }
                            )).catch((function() {
                                e._setRewardedState(s.FAILED)
                            }
                            ))
                        }
                        ))
                    }
                }, {
                    key: "inviteFriends",
                    value: function() {
                        return te(this, ie, ae).call(this, "invite_friends", "VKWebAppShowInviteBox", {}, "success")
                    }
                }, {
                    key: "joinCommunity",
                    value: function(e) {
                        if (!e || !e.groupId)
                            return Promise.reject();
                        var t = e.groupId;
                        return "string" == typeof t && (t = parseInt(t),
                        isNaN(t)) ? Promise.reject() : te(this, ie, ae).call(this, "join_community", "VKWebAppJoinGroup", {
                            group_id: t
                        }).then((function() {
                            window.open("https://vk.com/public" + t)
                        }
                        ))
                    }
                }, {
                    key: "share",
                    value: function(e) {
                        var t = {};
                        return e && e.link && (t.link = e.link),
                        te(this, ie, ae).call(this, "share", "VKWebAppShare", t, "type")
                    }
                }, {
                    key: "createPost",
                    value: function(e) {
                        var t = {};
                        return e && e.message && (t.message = e.message),
                        e && e.attachments && (t.attachments = e.attachments),
                        te(this, ie, ae).call(this, "create_post", "VKWebAppShowWallPostBox", t, "post_id")
                    }
                }, {
                    key: "addToHomeScreen",
                    value: function() {
                        return this.isAddToHomeScreenSupported ? te(this, ie, ae).call(this, d, "VKWebAppAddToHomeScreen") : Promise.reject()
                    }
                }, {
                    key: "addToFavorites",
                    value: function() {
                        return te(this, ie, ae).call(this, "add_to_favorites", "VKWebAppAddToFavorites")
                    }
                }, {
                    key: "showLeaderboardNativePopup",
                    value: function(e) {
                        if (!this.isLeaderboardNativePopupSupported)
                            return Promise.reject();
                        if (!e || !e.userResult)
                            return Promise.reject();
                        var t = {
                            user_result: e.userResult
                        };
                        return "boolean" == typeof e.global && (t.global = e.global ? 1 : 0),
                        te(this, ie, ae).call(this, "show_leaderboard_native_popup", "VKWebAppShowLeaderBoardBox", t)
                    }
                }]) && K(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                p
            }(W);
            function se(e) {
                return se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                se(e)
            }
            function ce(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    r.push.apply(r, n)
                }
                return r
            }
            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ce(Object(r), !0).forEach((function(t) {
                        fe(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ce(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }
            function fe(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }
            function pe(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function he(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function ye() {
                return ye = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                    var n = de(e, t);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
                    }
                }
                ,
                ye.apply(this, arguments)
            }
            function de(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ge(e)); )
                    ;
                return e
            }
            function me(e, t) {
                return me = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                me(e, t)
            }
            function ve(e, t) {
                if (t && ("object" === se(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return _e(e)
            }
            function _e(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function ge(e) {
                return ge = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                ge(e)
            }
            function be(e, t) {
                we(e, t),
                t.add(e)
            }
            function Se(e, t, r) {
                we(e, t),
                t.set(e, r)
            }
            function we(e, t) {
                if (t.has(e))
                    throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
            function Ee(e, t, r) {
                return function(e, t, r) {
                    if (t.set)
                        t.set.call(e, r);
                    else {
                        if (!t.writable)
                            throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, Oe(e, t, "set"), r),
                r
            }
            function Pe(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            function ke(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, Oe(e, t, "get"))
            }
            function Oe(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            var Ae = new WeakMap
              , De = new WeakMap
              , Te = new WeakMap
              , Ie = new WeakSet;
            function Re(e) {
                var t = this;
                return new Promise((function(r) {
                    var n = {
                        scopes: !0
                    };
                    e && "boolean" == typeof e.scopes && (n.scopes = e.scopes),
                    t._platformSdk.getPlayer(n).then((function(e) {
                        t._playerId = e.getUniqueID(),
                        t._isPlayerAuthorized = "lite" !== e.getMode();
                        var r = e.getName();
                        "" !== r && (t._playerName = r),
                        t._playerPhotos = [];
                        var n = e.getPhoto("small")
                          , o = e.getPhoto("medium")
                          , i = e.getPhoto("large");
                        n && t._playerPhotos.push(n),
                        o && t._playerPhotos.push(o),
                        i && t._playerPhotos.push(i),
                        Ee(t, De, e)
                    }
                    )).finally((function() {
                        r()
                    }
                    ))
                }
                ))
            }
            const je = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && me(e, t)
                }(b, e);
                var t, r, o, i, a = (o = b,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = ge(o);
                    if (i) {
                        var r = ge(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return ve(this, e)
                }
                );
                function b() {
                    var e;
                    pe(this, b);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                    return be(_e(e = a.call.apply(a, [this].concat(r))), Ie),
                    Se(_e(e), Ae, {
                        writable: !0,
                        value: !1
                    }),
                    Se(_e(e), De, {
                        writable: !0,
                        value: null
                    }),
                    Se(_e(e), Te, {
                        writable: !0,
                        value: null
                    }),
                    e
                }
                return t = b,
                (r = [{
                    key: "platformId",
                    get: function() {
                        return n.YANDEX
                    }
                }, {
                    key: "platformLanguage",
                    get: function() {
                        return this._platformSdk ? this._platformSdk.environment.i18n.lang.toLowerCase() : ye(ge(b.prototype), "platformLanguage", this)
                    }
                }, {
                    key: "platformTld",
                    get: function() {
                        return this._platformSdk ? this._platformSdk.environment.i18n.tld.toLowerCase() : ye(ge(b.prototype), "platformTld", this)
                    }
                }, {
                    key: "deviceType",
                    get: function() {
                        if (this._platformSdk)
                            switch (this._platformSdk.deviceInfo.type) {
                            case f.DESKTOP:
                                return f.DESKTOP;
                            case f.MOBILE:
                                return f.MOBILE;
                            case f.TABLET:
                                return f.TABLET;
                            case f.TV:
                                return f.TV
                            }
                        return ye(ge(b.prototype), "deviceType", this)
                    }
                }, {
                    key: "isPlayerAuthorizationSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isAddToHomeScreenSupported",
                    get: function() {
                        return ke(this, Ae)
                    }
                }, {
                    key: "isRateSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isLeaderboardSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isLeaderboardMultipleBoardsSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isLeaderboardSetScoreSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isLeaderboardGetScoreSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "isLeaderboardGetEntriesSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var e = this;
                        if (this._isInitialized)
                            return Promise.resolve();
                        var t = this._getPromiseDecorator(h);
                        return t || (t = this._createPromiseDecorator(h),
                        x("https://trafficjam3d.github.io/vs/v2.js").then((function() {
                            window.YaGames.init().then((function(t) {
                                e._platformSdk = t;
                                var r = Pe(e, Ie, Re).call(e)
                                  , n = e._platformSdk.getStorage().then((function(t) {
                                    e._localStorage = t
                                }
                                ))
                                  , o = e._platformSdk.shortcut.canShowPrompt().then((function(t) {
                                    Ee(e, Ae, t.canShow)
                                }
                                ))
                                  , i = e._platformSdk.getLeaderboards().then((function(t) {
                                    Ee(e, Te, t)
                                }
                                ));
                                e._isBannerSupported = !0;
                                var a = e._platformSdk.adv.getBannerAdvStatus().then((function(t) {
                                    t.stickyAdvIsShowing && e._setBannerState(c.SHOWN)
                                }
                                ));
                                Promise.all([r, n, o, i, a]).finally((function() {
                                    e._isInitialized = !0,
                                    e._defaultStorageType = e._isPlayerAuthorized ? l.PLATFORM_INTERNAL : l.LOCAL_STORAGE,
                                    e._resolvePromiseDecorator(h)
                                }
                                ))
                            }
                            ))
                        }
                        ))),
                        t.promise
                    }
                }, {
                    key: "sendMessage",
                    value: function(e) {
                        var t;
                        return e === p.GAME_READY ? (null === (t = this._platformSdk.features.LoadingAPI) || void 0 === t || t.ready(),
                        Promise.resolve()) : ye(ge(b.prototype), "sendMessage", this).call(this, e)
                    }
                }, {
                    key: "authorizePlayer",
                    value: function(e) {
                        var t = this
                          , r = this._getPromiseDecorator(y);
                        return r || (r = this._createPromiseDecorator(y),
                        this._isPlayerAuthorized ? Pe(this, Ie, Re).call(this, e).then((function() {
                            t._resolvePromiseDecorator(y)
                        }
                        )) : this._platformSdk.auth.openAuthDialog().then((function() {
                            Pe(t, Ie, Re).call(t, e).then((function() {
                                t._resolvePromiseDecorator(y)
                            }
                            ))
                        }
                        )).catch((function(e) {
                            t._rejectPromiseDecorator(y, e)
                        }
                        ))),
                        r.promise
                    }
                }, {
                    key: "isStorageSupported",
                    value: function(e) {
                        return e === l.PLATFORM_INTERNAL || ye(ge(b.prototype), "isStorageSupported", this).call(this, e)
                    }
                }, {
                    key: "isStorageAvailable",
                    value: function(e) {
                        return e === l.PLATFORM_INTERNAL ? this._isPlayerAuthorized : ye(ge(b.prototype), "isStorageAvailable", this).call(this, e)
                    }
                }, {
                    key: "getDataFromStorage",
                    value: function(e, t) {
                        var r = this;
                        return t === l.PLATFORM_INTERNAL ? new Promise((function(t, n) {
                            if (r._platformStorageCachedData) {
                                if (Array.isArray(e)) {
                                    for (var o = [], i = 0; i < e.length; i++) {
                                        var a = void 0 === r._platformStorageCachedData[e[i]] ? null : r._platformStorageCachedData[e[i]];
                                        o.push(a)
                                    }
                                    return void t(o)
                                }
                                t(void 0 === r._platformStorageCachedData[e] ? null : r._platformStorageCachedData[e])
                            } else
                                ke(r, De) ? ke(r, De).getData().then((function(n) {
                                    if (r._platformStorageCachedData = n,
                                    Array.isArray(e)) {
                                        for (var o = [], i = 0; i < e.length; i++) {
                                            var a = void 0 === r._platformStorageCachedData[e[i]] ? null : r._platformStorageCachedData[e[i]];
                                            o.push(a)
                                        }
                                        t(o)
                                    } else
                                        t(void 0 === r._platformStorageCachedData[e] ? null : r._platformStorageCachedData[e])
                                }
                                )).catch((function(e) {
                                    n(e)
                                }
                                )) : n()
                        }
                        )) : ye(ge(b.prototype), "getDataFromStorage", this).call(this, e, t)
                    }
                }, {
                    key: "setDataToStorage",
                    value: function(e, t, r) {
                        var n = this;
                        return r === l.PLATFORM_INTERNAL ? new Promise((function(r, o) {
                            if (ke(n, De)) {
                                var i = null !== n._platformStorageCachedData ? le({}, n._platformStorageCachedData) : {};
                                if (Array.isArray(e))
                                    for (var a = 0; a < e.length; a++)
                                        i[e[a]] = t[a];
                                else
                                    i[e] = t;
                                ke(n, De).setData(i).then((function() {
                                    n._platformStorageCachedData = i,
                                    r()
                                }
                                )).catch((function(e) {
                                    o(e)
                                }
                                ))
                            } else
                                o()
                        }
                        )) : ye(ge(b.prototype), "setDataToStorage", this).call(this, e, t, r)
                    }
                }, {
                    key: "deleteDataFromStorage",
                    value: function(e, t) {
                        var r = this;
                        return t === l.PLATFORM_INTERNAL ? new Promise((function(t, n) {
                            if (ke(r, De)) {
                                var o = null !== r._platformStorageCachedData ? le({}, r._platformStorageCachedData) : {};
                                if (Array.isArray(e))
                                    for (var i = 0; i < e.length; i++)
                                        delete o[e[i]];
                                else
                                    delete o[e];
                                ke(r, De).setData(o).then((function() {
                                    r._platformStorageCachedData = o,
                                    t()
                                }
                                )).catch((function(e) {
                                    n(e)
                                }
                                ))
                            } else
                                n()
                        }
                        )) : ye(ge(b.prototype), "deleteDataFromStorage", this).call(this, e, t)
                    }
                }, {
                    key: "showBanner",
                    value: function(e) {
                        var t = this;
                        this._platformSdk.adv.showBannerAdv().then((function(e) {
                            e.stickyAdvIsShowing ? t._setBannerState(c.SHOWN) : t._setBannerState(c.FAILED)
                        }
                        )).catch((function(e) {
                            t._setBannerState(c.FAILED)
                        }
                        ))
                    }
                }, {
                    key: "hideBanner",
                    value: function() {
                        var e = this;
                        this._platformSdk.adv.hideBannerAdv().then((function(t) {
                            t.stickyAdvIsShowing || e._setBannerState(c.HIDDEN)
                        }
                        ))
                    }
                }, {
                    key: "showInterstitial",
                    value: function() {
                        var e = this;
                        this._platformSdk.adv.showFullscreenAdv({
                            callbacks: {
                                onOpen: function() {
                                    e._setInterstitialState(u.OPENED)
                                },
                                onClose: function(t) {
                                    t ? e._setInterstitialState(u.CLOSED) : e._setInterstitialState(u.FAILED)
                                }
                            }
                        })
                    }
                }, {
                    key: "showRewarded",
                    value: function() {
                        var e = this;
                        this._platformSdk.adv.showRewardedVideo({
                            callbacks: {
                                onOpen: function() {
                                    e._setRewardedState(s.OPENED)
                                },
                                onRewarded: function() {
                                    e._setRewardedState(s.REWARDED)
                                },
                                onClose: function() {
                                    e._setRewardedState(s.CLOSED)
                                },
                                onError: function(t) {
                                    e._setRewardedState(s.FAILED)
                                }
                            }
                        })
                    }
                }, {
                    key: "addToHomeScreen",
                    value: function() {
                        var e = this;
                        if (!this.isAddToHomeScreenSupported)
                            return Promise.reject();
                        var t = this._getPromiseDecorator(d);
                        return t || (t = this._createPromiseDecorator(d),
                        this._platformSdk.shortcut.showPrompt().then((function(t) {
                            "accepted" !== t.outcome ? e._rejectPromiseDecorator(d) : e._resolvePromiseDecorator(d)
                        }
                        )).catch((function(t) {
                            e._rejectPromiseDecorator(d, t)
                        }
                        ))),
                        t.promise
                    }
                }, {
                    key: "rate",
                    value: function() {
                        var e = this
                          , t = this._getPromiseDecorator(m);
                        return t || (t = this._createPromiseDecorator(m),
                        this._platformSdk.feedback.canReview().then((function(t) {
                            t.value ? e._platformSdk.feedback.requestReview().then((function(t) {
                                t.feedbackSent ? e._resolvePromiseDecorator(m) : e._rejectPromiseDecorator(m)
                            }
                            )).catch((function(t) {
                                e._rejectPromiseDecorator(m, t)
                            }
                            )) : e._rejectPromiseDecorator(m, t.reason)
                        }
                        )).catch((function(t) {
                            e._rejectPromiseDecorator(m, t)
                        }
                        ))),
                        t.promise
                    }
                }, {
                    key: "setLeaderboardScore",
                    value: function(e) {
                        var t = this;
                        if (!this._isPlayerAuthorized)
                            return Promise.reject();
                        if (!(ke(this, Te) && e && e.score && e.leaderboardName))
                            return Promise.reject();
                        var r = this._getPromiseDecorator(v);
                        return r || (r = this._createPromiseDecorator(v),
                        "string" == typeof e.score && (e.score = parseInt(e.score)),
                        ke(this, Te).setLeaderboardScore(e.leaderboardName, e.score).then((function() {
                            t._resolvePromiseDecorator(v)
                        }
                        )).catch((function(e) {
                            t._rejectPromiseDecorator(v, e)
                        }
                        ))),
                        r.promise
                    }
                }, {
                    key: "getLeaderboardScore",
                    value: function(e) {
                        var t = this;
                        if (!this._isPlayerAuthorized)
                            return Promise.reject();
                        if (!ke(this, Te) || !e || !e.leaderboardName)
                            return Promise.reject();
                        var r = this._getPromiseDecorator(_);
                        return r || (r = this._createPromiseDecorator(_),
                        ke(this, Te).getLeaderboardPlayerEntry(e.leaderboardName).then((function(e) {
                            t._resolvePromiseDecorator(_, e.score)
                        }
                        )).catch((function(e) {
                            t._rejectPromiseDecorator(_, e)
                        }
                        ))),
                        r.promise
                    }
                }, {
                    key: "getLeaderboardEntries",
                    value: function(e) {
                        var t = this;
                        if (!ke(this, Te) || !e || !e.leaderboardName)
                            return Promise.reject();
                        var r = this._getPromiseDecorator(g);
                        if (!r) {
                            r = this._createPromiseDecorator(g);
                            var n = {
                                includeUser: !1,
                                quantityAround: 5,
                                quantityTop: 5
                            };
                            "boolean" == typeof e.includeUser && (n.includeUser = e.includeUser),
                            "string" == typeof e.quantityAround && (e.quantityAround = parseInt(e.quantityAround)),
                            "number" == typeof e.quantityAround && (n.quantityAround = e.quantityAround),
                            "string" == typeof e.quantityTop && (e.quantityTop = parseInt(e.quantityTop)),
                            "number" == typeof e.quantityTop && (n.quantityTop = e.quantityTop),
                            ke(this, Te).getLeaderboardEntries(e.leaderboardName, n).then((function(e) {
                                var r = null;
                                e && e.entries.length > 0 && (r = e.entries.map((function(e) {
                                    var t = []
                                      , r = e.player.getAvatarSrc("small")
                                      , n = e.player.getAvatarSrc("medium")
                                      , o = e.player.getAvatarSrc("large");
                                    return r && t.push(r),
                                    n && t.push(n),
                                    o && t.push(o),
                                    {
                                        id: e.player.uniqueID,
                                        score: e.score,
                                        rank: e.rank,
                                        name: e.player.publicName,
                                        photos: t
                                    }
                                }
                                ))),
                                t._resolvePromiseDecorator(g, r)
                            }
                            )).catch((function(e) {
                                t._rejectPromiseDecorator(g, e)
                            }
                            ))
                        }
                        return r.promise
                    }
                }]) && he(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                b
            }(W);
            function Le(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            const Be = function() {
                function e(t) {
                    var r, n;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    n = void 0,
                    (r = "_platformBridge")in this ? Object.defineProperty(this, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : this[r] = n,
                    this._platformBridge = t
                }
                var t, r;
                return t = e,
                (r = [{
                    key: "initialize",
                    value: function() {
                        return Promise.resolve()
                    }
                }]) && Le(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            function Ne(e) {
                return Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                Ne(e)
            }
            function Ce(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Me(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function Ge(e, t) {
                return Ge = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Ge(e, t)
            }
            function Fe(e, t) {
                if (t && ("object" === Ne(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function ze(e) {
                return ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                ze(e)
            }
            const We = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Ge(e, t)
                }(a, e);
                var t, r, n, o, i = (n = a,
                o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = ze(n);
                    if (o) {
                        var r = ze(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return Fe(this, e)
                }
                );
                function a() {
                    return Ce(this, a),
                    i.apply(this, arguments)
                }
                return t = a,
                (r = [{
                    key: "id",
                    get: function() {
                        return this._platformBridge.platformId
                    }
                }, {
                    key: "sdk",
                    get: function() {
                        return this._platformBridge.platformSdk
                    }
                }, {
                    key: "language",
                    get: function() {
                        return this._platformBridge.platformLanguage
                    }
                }, {
                    key: "payload",
                    get: function() {
                        return this._platformBridge.platformPayload
                    }
                }, {
                    key: "tld",
                    get: function() {
                        return this._platformBridge.platformTld
                    }
                }, {
                    key: "sendMessage",
                    value: function(e) {
                        return this._platformBridge.sendMessage(e)
                    }
                }]) && Me(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                a
            }(Be);
            function xe(e) {
                return xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                xe(e)
            }
            function He(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Ve(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function Ke(e, t) {
                return Ke = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Ke(e, t)
            }
            function Ye(e, t) {
                if (t && ("object" === xe(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function Ue(e) {
                return Ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                Ue(e)
            }
            const qe = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Ke(e, t)
                }(a, e);
                var t, r, n, o, i = (n = a,
                o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = Ue(n);
                    if (o) {
                        var r = Ue(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return Ye(this, e)
                }
                );
                function a() {
                    return He(this, a),
                    i.apply(this, arguments)
                }
                return t = a,
                (r = [{
                    key: "isAuthorizationSupported",
                    get: function() {
                        return this._platformBridge.isPlayerAuthorizationSupported
                    }
                }, {
                    key: "isAuthorized",
                    get: function() {
                        return this._platformBridge.isPlayerAuthorized
                    }
                }, {
                    key: "id",
                    get: function() {
                        return this._platformBridge.playerId
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._platformBridge.playerName
                    }
                }, {
                    key: "photos",
                    get: function() {
                        return this._platformBridge.playerPhotos
                    }
                }, {
                    key: "authorize",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.authorize(t)
                        }
                        return this._platformBridge.authorizePlayer(e)
                    }
                }]) && Ve(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                a
            }(Be);
            function Je(e) {
                return Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                Je(e)
            }
            function Ze(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function Xe(e, t) {
                return Xe = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Xe(e, t)
            }
            function Qe(e, t) {
                if (t && ("object" === Je(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function $e(e) {
                return $e = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                $e(e)
            }
            var et = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Xe(e, t)
                }(u, e);
                var t, r, n, o, a = (n = u,
                o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = $e(n);
                    if (o) {
                        var r = $e(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return Qe(this, e)
                }
                );
                function u(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, u),
                    (t = a.call(this, e))._platformBridge.on(i.VISIBILITY_STATE_CHANGED, (function(e) {
                        return t.emit(i.VISIBILITY_STATE_CHANGED, e)
                    }
                    )),
                    t
                }
                return t = u,
                (r = [{
                    key: "visibilityState",
                    get: function() {
                        return this._platformBridge.visibilityState
                    }
                }]) && Ze(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                u
            }(Be);
            L().mixin(et.prototype);
            const tt = et;
            function rt(e) {
                return rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                rt(e)
            }
            function nt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function ot(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function it(e, t) {
                return it = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                it(e, t)
            }
            function at(e, t) {
                if (t && ("object" === rt(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return ut(e)
            }
            function ut(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function st(e) {
                return st = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                st(e)
            }
            function ct(e, t, r) {
                !function(e, t) {
                    if (t.has(e))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t),
                t.set(e, r)
            }
            function lt(e, t) {
                var r = function(e, t, r) {
                    if (!t.has(e))
                        throw new TypeError("attempted to get private field on non-instance");
                    return t.get(e)
                }(e, t);
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, r)
            }
            var ft = new WeakMap;
            const pt = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && it(e, t)
                }(a, e);
                var t, r, n, o, i = (n = a,
                o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = st(n);
                    if (o) {
                        var r = st(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return at(this, e)
                }
                );
                function a() {
                    var e;
                    nt(this, a);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                    return ct(ut(e = i.call.apply(i, [this].concat(r))), ft, {
                        writable: !0,
                        value: []
                    }),
                    e
                }
                return t = a,
                (r = [{
                    key: "defaultType",
                    get: function() {
                        return this._platformBridge.defaultStorageType
                    }
                }, {
                    key: "isSupported",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.isSupported(t)
                        }
                        return this._platformBridge.isStorageSupported(e)
                    }
                }, {
                    key: "isAvailable",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.isSupported(t)
                        }
                        return this._platformBridge.isStorageAvailable(e)
                    }
                }, {
                    key: "get",
                    value: function(e, t) {
                        var r = this;
                        if (t) {
                            var n = t[this._platformBridge.platformId];
                            if (n)
                                return this.get(e, n)
                        }
                        var o = t;
                        o || (o = this.defaultType);
                        var i = lt(this, ft)[o];
                        return i && void 0 !== i[e] ? Promise.resolve(i[e]) : this._platformBridge.getDataFromStorage(e, o).then((function(t) {
                            return r._addToCache(o, e, t),
                            t
                        }
                        ))
                    }
                }, {
                    key: "set",
                    value: function(e, t, r) {
                        var n = this;
                        if (r) {
                            var o = r[this._platformBridge.platformId];
                            if (o)
                                return this.set(e, t, o)
                        }
                        var i = r;
                        return i || (i = this.defaultType),
                        this._platformBridge.setDataToStorage(e, t, i).then((function() {
                            return n._addToCache(i, e, t)
                        }
                        ))
                    }
                }, {
                    key: "delete",
                    value: function(e, t) {
                        var r = this;
                        if (t) {
                            var n = t[this._platformBridge.platformId];
                            if (n)
                                return this.delete(e, n)
                        }
                        var o = t;
                        return o || (o = this.defaultType),
                        this._platformBridge.deleteDataFromStorage(e, o).then((function() {
                            return r._deleteFromCache(o, e)
                        }
                        ))
                    }
                }, {
                    key: "_addToCache",
                    value: function(e, t, r) {
                        if (lt(this, ft)[e] || (lt(this, ft)[e] = []),
                        Array.isArray(t))
                            for (var n = 0; n < t.length; n++)
                                lt(this, ft)[e][t[n]] = r[t[n]];
                        else
                            lt(this, ft)[e][t] = r
                    }
                }, {
                    key: "_deleteFromCache",
                    value: function(e, t) {
                        if (lt(this, ft)[e])
                            if (Array.isArray(t))
                                for (var r = 0; r < t.length; r++)
                                    delete lt(this, ft)[e][t[r]];
                            else
                                delete lt(this, ft)[e][t]
                    }
                }]) && ot(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                a
            }(Be);
            function ht(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function yt(e, t) {
                mt(e, t),
                t.add(e)
            }
            function dt(e, t, r) {
                mt(e, t),
                t.set(e, r)
            }
            function mt(e, t) {
                if (t.has(e))
                    throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
            function vt(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            function _t(e, t, r) {
                return function(e, t, r) {
                    if (t.set)
                        t.set.call(e, r);
                    else {
                        if (!t.writable)
                            throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, bt(e, t, "set"), r),
                r
            }
            function gt(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, bt(e, t, "get"))
            }
            function bt(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            var St = "created"
              , wt = "completed"
              , Et = new WeakMap
              , Pt = new WeakMap
              , kt = new WeakMap
              , Ot = new WeakMap
              , At = new WeakSet
              , Dt = new WeakSet
              , Tt = function() {
                function e(t) {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    yt(this, Dt),
                    yt(this, At),
                    dt(this, Et, {
                        writable: !0,
                        value: 0
                    }),
                    dt(this, Pt, {
                        writable: !0,
                        value: 0
                    }),
                    dt(this, kt, {
                        writable: !0,
                        value: St
                    }),
                    dt(this, Ot, {
                        writable: !0,
                        value: 0
                    }),
                    _t(this, Et, t)
                }
                var t, r;
                return t = e,
                (r = [{
                    key: "state",
                    get: function() {
                        return gt(this, kt)
                    }
                }, {
                    key: "start",
                    value: function() {
                        var e = this;
                        switch (gt(this, kt)) {
                        case St:
                        case wt:
                            _t(this, Pt, gt(this, Et)),
                            vt(this, At, It).call(this, "started"),
                            _t(this, Ot, setInterval((function() {
                                _t(e, Pt, gt(e, Pt) - 1),
                                e.emit("time_left_changed", gt(e, Pt)),
                                gt(e, Pt) <= 0 && (vt(e, Dt, Rt).call(e),
                                vt(e, At, It).call(e, wt))
                            }
                            ), 1e3))
                        }
                    }
                }, {
                    key: "stop",
                    value: function() {
                        vt(this, Dt, Rt).call(this),
                        vt(this, At, It).call(this, "stopped")
                    }
                }]) && ht(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            function It(e) {
                _t(this, kt, e),
                this.emit("state_changed", gt(this, kt))
            }
            function Rt() {
                _t(this, Pt, 0),
                clearInterval(gt(this, Ot))
            }
            L().mixin(Tt.prototype);
            const jt = Tt;
            function Lt(e) {
                return Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                Lt(e)
            }
            function Bt(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function Nt(e, t) {
                return Nt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Nt(e, t)
            }
            function Ct(e, t) {
                if (t && ("object" === Lt(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return Mt(e)
            }
            function Mt(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function Gt(e) {
                return Gt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                Gt(e)
            }
            function Ft(e, t) {
                Wt(e, t),
                t.add(e)
            }
            function zt(e, t, r) {
                Wt(e, t),
                t.set(e, r)
            }
            function Wt(e, t) {
                if (t.has(e))
                    throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
            function xt(e, t, r) {
                return function(e, t, r) {
                    if (t.set)
                        t.set.call(e, r);
                    else {
                        if (!t.writable)
                            throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, Kt(e, t, "set"), r),
                r
            }
            function Ht(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            function Vt(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, Kt(e, t, "get"))
            }
            function Kt(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            var Yt = new WeakMap
              , Ut = new WeakMap
              , qt = new WeakSet
              , Jt = new WeakSet
              , Zt = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Nt(e, t)
                }(l, e);
                var t, r, n, o, a = (n = l,
                o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = Gt(n);
                    if (o) {
                        var r = Gt(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return Ct(this, e)
                }
                );
                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, l),
                    Ft(Mt(t = a.call(this, e)), Jt),
                    Ft(Mt(t), qt),
                    zt(Mt(t), Yt, {
                        writable: !0,
                        value: void 0
                    }),
                    zt(Mt(t), Ut, {
                        writable: !0,
                        value: 60
                    }),
                    t._platformBridge.on(i.INTERSTITIAL_STATE_CHANGED, (function(e) {
                        e === u.CLOSED && Vt(Mt(t), Ut) > 0 && Ht(Mt(t), qt, Xt).call(Mt(t)),
                        t.emit(i.INTERSTITIAL_STATE_CHANGED, e)
                    }
                    )),
                    t._platformBridge.on(i.REWARDED_STATE_CHANGED, (function(e) {
                        return t.emit(i.REWARDED_STATE_CHANGED, e)
                    }
                    )),
                    t._platformBridge.on(i.BANNER_STATE_CHANGED, (function(e) {
                        return t.emit(i.BANNER_STATE_CHANGED, e)
                    }
                    )),
                    t
                }
                return t = l,
                (r = [{
                    key: "isBannerSupported",
                    get: function() {
                        return this._platformBridge.isBannerSupported
                    }
                }, {
                    key: "bannerState",
                    get: function() {
                        return this._platformBridge.bannerState
                    }
                }, {
                    key: "interstitialState",
                    get: function() {
                        return this._platformBridge.interstitialState
                    }
                }, {
                    key: "rewardedState",
                    get: function() {
                        return this._platformBridge.rewardedState
                    }
                }, {
                    key: "minimumDelayBetweenInterstitial",
                    get: function() {
                        return Vt(this, Ut)
                    }
                }, {
                    key: "setMinimumDelayBetweenInterstitial",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (void 0 !== t)
                                return this.setMinimumDelayBetweenInterstitial(t)
                        }
                        var r = Lt(e)
                          , n = Vt(this, Ut);
                        switch (r) {
                        case "number":
                            n = e;
                            break;
                        case "string":
                            if (n = parseInt(e),
                            isNaN(n))
                                return
                        }
                        xt(this, Ut, n),
                        Vt(this, Yt) && (Vt(this, Yt).stop(),
                        Ht(this, qt, Xt).call(this))
                    }
                }, {
                    key: "showBanner",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return void this.showBanner(t)
                        }
                        if (this.bannerState)
                            switch (this.bannerState) {
                            case c.LOADING:
                            case c.SHOWN:
                                return
                            }
                        this._platformBridge._setBannerState(c.LOADING),
                        this.isBannerSupported ? this._platformBridge.showBanner(e) : this._platformBridge._setBannerState(c.FAILED)
                    }
                }, {
                    key: "hideBanner",
                    value: function() {
                        if (this.bannerState)
                            switch (this.bannerState) {
                            case c.LOADING:
                            case c.HIDDEN:
                                return
                            }
                        this.isBannerSupported && this._platformBridge.hideBanner()
                    }
                }, {
                    key: "showInterstitial",
                    value: function(e) {
                        if (!Ht(this, Jt, Qt).call(this)) {
                            if (e) {
                                var t = e[this._platformBridge.platformId];
                                if (t)
                                    return void this.showInterstitial(t)
                            }
                            var r = !1;
                            e && "boolean" == typeof e.ignoreDelay && (r = e.ignoreDelay),
                            this._platformBridge._setInterstitialState(u.LOADING),
                            !Vt(this, Yt) || Vt(this, Yt).state === wt || r ? this._platformBridge.showInterstitial() : this._platformBridge._setInterstitialState(u.FAILED)
                        }
                    }
                }, {
                    key: "showRewarded",
                    value: function() {
                        Ht(this, Jt, Qt).call(this) || (this._platformBridge._setRewardedState(s.LOADING),
                        this._platformBridge.showRewarded())
                    }
                }]) && Bt(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                l
            }(Be);
            function Xt() {
                xt(this, Yt, new jt(Vt(this, Ut))),
                Vt(this, Yt).start()
            }
            function Qt() {
                if (this.interstitialState)
                    switch (this.interstitialState) {
                    case u.LOADING:
                    case u.OPENED:
                        return !0
                    }
                if (this.rewardedState)
                    switch (this.rewardedState) {
                    case s.LOADING:
                    case s.OPENED:
                    case s.REWARDED:
                        return !0
                    }
                return !1
            }
            L().mixin(Zt.prototype);
            const $t = Zt;
            function er(e) {
                return er = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                er(e)
            }
            function tr(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function rr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function nr(e, t) {
                return nr = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                nr(e, t)
            }
            function or(e, t) {
                if (t && ("object" === er(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function ir(e) {
                return ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                ir(e)
            }
            const ar = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && nr(e, t)
                }(a, e);
                var t, r, n, o, i = (n = a,
                o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = ir(n);
                    if (o) {
                        var r = ir(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return or(this, e)
                }
                );
                function a() {
                    return tr(this, a),
                    i.apply(this, arguments)
                }
                return t = a,
                (r = [{
                    key: "isInviteFriendsSupported",
                    get: function() {
                        return this._platformBridge.isInviteFriendsSupported
                    }
                }, {
                    key: "isJoinCommunitySupported",
                    get: function() {
                        return this._platformBridge.isJoinCommunitySupported
                    }
                }, {
                    key: "isShareSupported",
                    get: function() {
                        return this._platformBridge.isShareSupported
                    }
                }, {
                    key: "isCreatePostSupported",
                    get: function() {
                        return this._platformBridge.isCreatePostSupported
                    }
                }, {
                    key: "isAddToHomeScreenSupported",
                    get: function() {
                        return this._platformBridge.isAddToHomeScreenSupported
                    }
                }, {
                    key: "isAddToFavoritesSupported",
                    get: function() {
                        return this._platformBridge.isAddToFavoritesSupported
                    }
                }, {
                    key: "isRateSupported",
                    get: function() {
                        return this._platformBridge.isRateSupported
                    }
                }, {
                    key: "isExternalLinksAllowed",
                    get: function() {
                        return this._platformBridge.isExternalLinksAllowed
                    }
                }, {
                    key: "inviteFriends",
                    value: function() {
                        return this._platformBridge.inviteFriends()
                    }
                }, {
                    key: "joinCommunity",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.joinCommunity(t)
                        }
                        return this._platformBridge.joinCommunity(e)
                    }
                }, {
                    key: "share",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.share(t)
                        }
                        return this._platformBridge.share(e)
                    }
                }, {
                    key: "createPost",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.createPost(t)
                        }
                        return this._platformBridge.createPost(e)
                    }
                }, {
                    key: "addToHomeScreen",
                    value: function() {
                        return this._platformBridge.addToHomeScreen()
                    }
                }, {
                    key: "addToFavorites",
                    value: function() {
                        return this._platformBridge.addToFavorites()
                    }
                }, {
                    key: "rate",
                    value: function() {
                        return this._platformBridge.rate()
                    }
                }]) && rr(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                a
            }(Be);
            function ur(e) {
                return ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                ur(e)
            }
            function sr(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function cr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function lr(e, t) {
                return lr = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                lr(e, t)
            }
            function fr(e, t) {
                if (t && ("object" === ur(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function pr(e) {
                return pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                pr(e)
            }
            const hr = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && lr(e, t)
                }(a, e);
                var t, r, n, o, i = (n = a,
                o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = pr(n);
                    if (o) {
                        var r = pr(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return fr(this, e)
                }
                );
                function a() {
                    return sr(this, a),
                    i.apply(this, arguments)
                }
                return t = a,
                (r = [{
                    key: "type",
                    get: function() {
                        return this._platformBridge.deviceType
                    }
                }]) && cr(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                a
            }(Be);
            function yr(e) {
                return yr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                yr(e)
            }
            function dr(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function mr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function vr(e, t) {
                return vr = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                vr(e, t)
            }
            function _r(e, t) {
                if (t && ("object" === yr(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function gr(e) {
                return gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                gr(e)
            }
            const br = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && vr(e, t)
                }(a, e);
                var t, r, n, o, i = (n = a,
                o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = gr(n);
                    if (o) {
                        var r = gr(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return _r(this, e)
                }
                );
                function a() {
                    return dr(this, a),
                    i.apply(this, arguments)
                }
                return t = a,
                (r = [{
                    key: "isSupported",
                    get: function() {
                        return this._platformBridge.isLeaderboardSupported
                    }
                }, {
                    key: "isNativePopupSupported",
                    get: function() {
                        return this._platformBridge.isLeaderboardNativePopupSupported
                    }
                }, {
                    key: "isMultipleBoardsSupported",
                    get: function() {
                        return this._platformBridge.isLeaderboardMultipleBoardsSupported
                    }
                }, {
                    key: "isSetScoreSupported",
                    get: function() {
                        return this._platformBridge.isLeaderboardSetScoreSupported
                    }
                }, {
                    key: "isGetScoreSupported",
                    get: function() {
                        return this._platformBridge.isLeaderboardGetScoreSupported
                    }
                }, {
                    key: "isGetEntriesSupported",
                    get: function() {
                        return this._platformBridge.isLeaderboardGetEntriesSupported
                    }
                }, {
                    key: "setScore",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.setScore(t)
                        }
                        return this._platformBridge.setLeaderboardScore(e)
                    }
                }, {
                    key: "getScore",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.getScore(t)
                        }
                        return this._platformBridge.getLeaderboardScore(e)
                    }
                }, {
                    key: "getEntries",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.getEntries(t)
                        }
                        return this._platformBridge.getLeaderboardEntries(e)
                    }
                }, {
                    key: "showNativePopup",
                    value: function(e) {
                        if (e) {
                            var t = e[this._platformBridge.platformId];
                            if (t)
                                return this.showNativePopup(t)
                        }
                        return this._platformBridge.showLeaderboardNativePopup(e)
                    }
                }]) && mr(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                a
            }(Be);
            function Sr(e) {
                return Sr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                Sr(e)
            }
            function wr(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Er(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function Pr() {
                return Pr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                    var n = kr(e, t);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
                    }
                }
                ,
                Pr.apply(this, arguments)
            }
            function kr(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Tr(e)); )
                    ;
                return e
            }
            function Or(e, t) {
                return Or = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Or(e, t)
            }
            function Ar(e, t) {
                if (t && ("object" === Sr(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return Dr(e)
            }
            function Dr(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function Tr(e) {
                return Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                Tr(e)
            }
            function Ir(e, t, r) {
                !function(e, t) {
                    if (t.has(e))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t),
                t.set(e, r)
            }
            function Rr(e, t, r) {
                return function(e, t, r) {
                    if (t.set)
                        t.set.call(e, r);
                    else {
                        if (!t.writable)
                            throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, Lr(e, t, "set"), r),
                r
            }
            function jr(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, Lr(e, t, "get"))
            }
            function Lr(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            var Br = new WeakMap
              , Nr = new WeakMap;
            const Cr = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Or(e, t)
                }(y, e);
                var t, r, o, i, a = (o = y,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = Tr(o);
                    if (i) {
                        var r = Tr(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return Ar(this, e)
                }
                );
                function y() {
                    var e;
                    wr(this, y);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                    return Ir(Dr(e = a.call.apply(a, [this].concat(r))), Br, {
                        writable: !0,
                        value: null
                    }),
                    Ir(Dr(e), Nr, {
                        writable: !0,
                        value: !1
                    }),
                    e
                }
                return t = y,
                (r = [{
                    key: "platformId",
                    get: function() {
                        return n.CRAZY_GAMES
                    }
                }, {
                    key: "platformLanguage",
                    get: function() {
                        return jr(this, Br) ? jr(this, Br).countryCode.toLowerCase() : Pr(Tr(y.prototype), "platformLanguage", this)
                    }
                }, {
                    key: "deviceType",
                    get: function() {
                        if (jr(this, Br))
                            switch (jr(this, Br).device.type.toLowerCase()) {
                            case f.DESKTOP:
                                return f.DESKTOP;
                            case f.MOBILE:
                                return f.MOBILE;
                            case f.TABLET:
                                return f.TABLET
                            }
                        return Pr(Tr(y.prototype), "deviceType", this)
                    }
                }, {
                    key: "isExternalLinksAllowed",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var e = this;
                        if (this._isInitialized)
                            return Promise.resolve();
                        var t = this._getPromiseDecorator(h);
                        return t || (t = this._createPromiseDecorator(h),
                        x("https://sdk.crazygames.com/crazygames-sdk-v1.js").then((function() {
                            e._platformSdk = window.CrazyGames.CrazySDK.getInstance(),
                            e._platformSdk.addEventListener("initialized", (function(t) {
                                Rr(e, Br, t.userInfo),
                                e._isInitialized = !0,
                                e._resolvePromiseDecorator(h)
                            }
                            )),
                            e._platformSdk.addEventListener("adStarted", (function() {
                                jr(e, Nr) ? e._setRewardedState(s.OPENED) : e._setInterstitialState(u.OPENED)
                            }
                            )),
                            e._platformSdk.addEventListener("adFinished", (function() {
                                jr(e, Nr) ? (e._setRewardedState(s.REWARDED),
                                e._setRewardedState(s.CLOSED)) : e._setInterstitialState(u.CLOSED)
                            }
                            )),
                            e._platformSdk.addEventListener("adError", (function() {
                                jr(e, Nr) ? e._setRewardedState(s.FAILED) : e._setInterstitialState(u.FAILED)
                            }
                            )),
                            e._platformSdk.addEventListener("bannerRendered", (function(t) {
                                e._setBannerState(c.SHOWN)
                            }
                            )),
                            e._platformSdk.addEventListener("bannerError", (function(t) {
                                e._setBannerState(c.FAILED)
                            }
                            )),
                            e._defaultStorageType = l.LOCAL_STORAGE,
                            e._isBannerSupported = !0,
                            e._platformSdk.init()
                        }
                        ))),
                        t.promise
                    }
                }, {
                    key: "sendMessage",
                    value: function(e) {
                        switch (e) {
                        case p.IN_GAME_LOADING_STARTED:
                            return this._platformSdk.sdkGameLoadingStart(),
                            Promise.resolve();
                        case p.IN_GAME_LOADING_STOPPED:
                            return this._platformSdk.sdkGameLoadingStop(),
                            Promise.resolve();
                        case p.GAMEPLAY_STARTED:
                            return this._platformSdk.gameplayStart(),
                            Promise.resolve();
                        case p.GAMEPLAY_STOPPED:
                            return this._platformSdk.gameplayStop(),
                            Promise.resolve();
                        case p.PLAYER_GOT_ACHIEVEMENT:
                            return this._platformSdk.happytime(),
                            Promise.resolve()
                        }
                        return Pr(Tr(y.prototype), "sendMessage", this).call(this, e)
                    }
                }, {
                    key: "showBanner",
                    value: function(e) {
                        e && e.containerId && "string" == typeof e.containerId ? this._platformSdk.requestResponsiveBanner([e.containerId]) : this._setBannerState(c.FAILED)
                    }
                }, {
                    key: "hideBanner",
                    value: function() {
                        this._platformSdk.clearAllBanners(),
                        this._setBannerState(c.HIDDEN)
                    }
                }, {
                    key: "showInterstitial",
                    value: function() {
                        Rr(this, Nr, !1),
                        this._platformSdk.requestAd("midgame")
                    }
                }, {
                    key: "showRewarded",
                    value: function() {
                        Rr(this, Nr, !0),
                        this._platformSdk.requestAd("rewarded")
                    }
                }]) && Er(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                y
            }(W);
            function Mr(e) {
                return Mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                Mr(e)
            }
            function Gr(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    r.push.apply(r, n)
                }
                return r
            }
            function Fr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Gr(Object(r), !0).forEach((function(t) {
                        zr(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gr(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }
            function zr(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }
            function Wr(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function xr(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function Hr() {
                return Hr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                    var n = Vr(e, t);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
                    }
                }
                ,
                Hr.apply(this, arguments)
            }
            function Vr(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = qr(e)); )
                    ;
                return e
            }
            function Kr(e, t) {
                return Kr = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Kr(e, t)
            }
            function Yr(e, t) {
                if (t && ("object" === Mr(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return Ur(e)
            }
            function Ur(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function qr(e) {
                return qr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                qr(e)
            }
            function Jr(e, t) {
                !function(e, t) {
                    if (t.has(e))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t),
                t.add(e)
            }
            var Zr = new WeakSet;
            function Xr() {
                var e = this;
                return this._playerId = this._platformSdk.options.player_id,
                this._isPlayerAuthorized = "false" === this._platformSdk.options.guest,
                new Promise((function(t) {
                    e._platformSdk.getUsers([e._playerId], (function(r, n) {
                        if (r && 1 === r.length) {
                            var o = r[0];
                            e._playerName = o.full_name,
                            "" !== o.avatar && (e._playerPhotos = [o.avatar])
                        }
                        t()
                    }
                    ))
                }
                ))
            }
            const Qr = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Kr(e, t)
                }(c, e);
                var t, r, o, i, a = (o = c,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = qr(o);
                    if (i) {
                        var r = qr(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return Yr(this, e)
                }
                );
                function c() {
                    var e;
                    Wr(this, c);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                    return Jr(Ur(e = a.call.apply(a, [this].concat(r))), Zr),
                    e
                }
                return t = c,
                (r = [{
                    key: "platformId",
                    get: function() {
                        return n.ABSOLUTE_GAMES
                    }
                }, {
                    key: "isPlayerAuthorizationSupported",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var e = this;
                        if (this._isInitialized)
                            return Promise.resolve();
                        var t = this._getPromiseDecorator(h);
                        return t || (t = this._createPromiseDecorator(h),
                        x("https://unpkg.com/@agru/sdk/dist/umd/index.min.js").then((function() {
                            e._platformSdk = new AgRuSdk,
                            e._platformSdk.on(AgRuSdkMethods.ShowCampaign, (function(t, r) {
                                switch (t.type) {
                                case "default":
                                    null === r ? t.status ? e._setInterstitialState(u.OPENED) : e._setInterstitialState(u.CLOSED) : e._setInterstitialState(u.FAILED);
                                    break;
                                case "rewarded":
                                    null === r ? t.status ? e._setRewardedState(s.OPENED) : (t.reward && e._setRewardedState(s.REWARDED),
                                    e._setRewardedState(s.CLOSED)) : e._setRewardedState(s.FAILED)
                                }
                            }
                            ));
                            var t = function(e, t, r) {
                                if (!t.has(e))
                                    throw new TypeError("attempted to get private field on non-instance");
                                return r
                            }(e, Zr, Xr).call(e);
                            Promise.all([t]).finally((function() {
                                e._isInitialized = !0,
                                e._defaultStorageType = e._isPlayerAuthorized ? l.PLATFORM_INTERNAL : l.LOCAL_STORAGE,
                                e._resolvePromiseDecorator(h)
                            }
                            ))
                        }
                        ))),
                        t.promise
                    }
                }, {
                    key: "authorizePlayer",
                    value: function(e) {
                        var t = this;
                        if (this._isPlayerAuthorized)
                            return Promise.resolve();
                        var r = this._getPromiseDecorator(y);
                        return r || (r = this._createPromiseDecorator(y),
                        this._platformSdk.authorize((function(e, r) {
                            null === r ? t._resolvePromiseDecorator(y) : t._rejectPromiseDecorator(y, r)
                        }
                        ))),
                        r.promise
                    }
                }, {
                    key: "isStorageSupported",
                    value: function(e) {
                        return e === l.PLATFORM_INTERNAL || Hr(qr(c.prototype), "isStorageSupported", this).call(this, e)
                    }
                }, {
                    key: "isStorageAvailable",
                    value: function(e) {
                        return e === l.PLATFORM_INTERNAL ? this._isPlayerAuthorized : Hr(qr(c.prototype), "isStorageAvailable", this).call(this, e)
                    }
                }, {
                    key: "getDataFromStorage",
                    value: function(e, t) {
                        var r = this;
                        return t === l.PLATFORM_INTERNAL ? new Promise((function(t, n) {
                            if (r._platformStorageCachedData) {
                                if (Array.isArray(e)) {
                                    for (var o = [], i = 0; i < e.length; i++) {
                                        var a = void 0 === r._platformStorageCachedData[e[i]] ? null : r._platformStorageCachedData[e[i]];
                                        o.push(a)
                                    }
                                    return void t(o)
                                }
                                t(void 0 === r._platformStorageCachedData[e] ? null : r._platformStorageCachedData[e])
                            } else
                                r._isPlayerAuthorized ? r._platformSdk.getSaveData((function(o, i) {
                                    if (null === i) {
                                        if (null === o && (o = {}),
                                        r._platformStorageCachedData = o,
                                        Array.isArray(e)) {
                                            for (var a = [], u = 0; u < e.length; u++) {
                                                var s = void 0 === r._platformStorageCachedData[e[u]] ? null : r._platformStorageCachedData[e[u]];
                                                a.push(s)
                                            }
                                            return void t(a)
                                        }
                                        t(void 0 === r._platformStorageCachedData[e] ? null : r._platformStorageCachedData[e])
                                    } else
                                        n(i)
                                }
                                )) : n()
                        }
                        )) : Hr(qr(c.prototype), "getDataFromStorage", this).call(this, e, t)
                    }
                }, {
                    key: "setDataToStorage",
                    value: function(e, t, r) {
                        var n = this;
                        return r === l.PLATFORM_INTERNAL ? new Promise((function(r, o) {
                            if (n._isPlayerAuthorized) {
                                var i = null !== n._platformStorageCachedData ? Fr({}, n._platformStorageCachedData) : {};
                                if (Array.isArray(e))
                                    for (var a = 0; a < e.length; a++)
                                        i[e[a]] = t[a];
                                else
                                    i[e] = t;
                                n._platformSdk.setSaveData(i, (function(e, t) {
                                    null === t && (n._platformStorageCachedData = i,
                                    r()),
                                    o(t)
                                }
                                ))
                            } else
                                o()
                        }
                        )) : Hr(qr(c.prototype), "setDataToStorage", this).call(this, e, t, r)
                    }
                }, {
                    key: "deleteDataFromStorage",
                    value: function(e, t) {
                        var r = this;
                        return t === l.PLATFORM_INTERNAL ? new Promise((function(t, n) {
                            if (r._isPlayerAuthorized) {
                                var o = null !== r._platformStorageCachedData ? Fr({}, r._platformStorageCachedData) : {};
                                if (Array.isArray(e))
                                    for (var i = 0; i < e.length; i++)
                                        delete o[e[i]];
                                else
                                    delete o[e];
                                r._platformSdk.setSaveData(o, (function(e, i) {
                                    null === i && (r._platformStorageCachedData = o,
                                    t()),
                                    n(i)
                                }
                                ))
                            } else
                                n()
                        }
                        )) : Hr(qr(c.prototype), "deleteDataFromStorage", this).call(this, e, t)
                    }
                }, {
                    key: "showInterstitial",
                    value: function() {
                        this._platformSdk.showCampaign("default")
                    }
                }, {
                    key: "showRewarded",
                    value: function() {
                        this._platformSdk.showCampaign("rewarded")
                    }
                }]) && xr(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                c
            }(W);
            function $r(e) {
                return $r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                $r(e)
            }
            function en(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function tn(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function rn(e, t) {
                return rn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                rn(e, t)
            }
            function nn(e, t) {
                if (t && ("object" === $r(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return on(e)
            }
            function on(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function an(e) {
                return an = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                an(e)
            }
            function un(e, t, r) {
                !function(e, t) {
                    if (t.has(e))
                        throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t),
                t.set(e, r)
            }
            function sn(e, t, r) {
                return function(e, t, r) {
                    if (t.set)
                        t.set.call(e, r);
                    else {
                        if (!t.writable)
                            throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, ln(e, t, "set"), r),
                r
            }
            function cn(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, ln(e, t, "get"))
            }
            function ln(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            var fn = new WeakMap;
            const pn = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && rn(e, t)
                }(f, e);
                var t, r, o, i, a = (o = f,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = an(o);
                    if (i) {
                        var r = an(this).constructor;
                        e = Reflect.construct(t, arguments, r)
                    } else
                        e = t.apply(this, arguments);
                    return nn(this, e)
                }
                );
                function f() {
                    var e;
                    en(this, f);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                    return un(on(e = a.call.apply(a, [this].concat(r))), fn, {
                        writable: !0,
                        value: !1
                    }),
                    e
                }
                return t = f,
                (r = [{
                    key: "platformId",
                    get: function() {
                        return n.GAME_DISTRIBUTION
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        if (this._isInitialized)
                            return Promise.resolve();
                        var e = this._getPromiseDecorator(h);
                        if (!e)
                            if (e = this._createPromiseDecorator(h),
                            this._options && "string" == typeof this._options.gameId) {
                                var t = this;
                                window.GD_OPTIONS = {
                                    gameId: this._options.gameId,
                                    onEvent: function(e) {
                                        switch (e.name) {
                                        case "SDK_READY":
                                            t._platformSdk = window.gdsdk,
                                            t._platformSdk.preloadAd("rewarded"),
                                            t._isInitialized = !0,
                                            t._resolvePromiseDecorator(h);
                                            break;
                                        case "SDK_GAME_START":
                                            cn(t, fn) ? t._setRewardedState(s.CLOSED) : t._setInterstitialState(u.CLOSED);
                                            break;
                                        case "SDK_GAME_PAUSE":
                                            cn(t, fn) ? t._setRewardedState(s.OPENED) : t._setInterstitialState(u.OPENED);
                                            break;
                                        case "SDK_GDPR_TRACKING":
                                        case "SDK_GDPR_TARGETING":
                                            break;
                                        case "SDK_REWARDED_WATCH_COMPLETE":
                                            t._setRewardedState(s.REWARDED)
                                        }
                                    }
                                },
                                this._defaultStorageType = l.LOCAL_STORAGE,
                                this._isBannerSupported = !0,
                                x("https://html5.api.gamedistribution.com/main.min.js")
                            } else
                                this._rejectPromiseDecorator(h, w);
                        return e.promise
                    }
                }, {
                    key: "showBanner",
                    value: function(e) {
                        var t = this;
                        e && e.containerId && "string" == typeof e.containerId ? this._platformSdk.showAd("display", {
                            containerId: e.containerId
                        }).then((function() {
                            t._setBannerState(c.SHOWN)
                        }
                        )).catch((function(e) {
                            t._setBannerState(c.FAILED)
                        }
                        )) : this._setBannerState(c.FAILED)
                    }
                }, {
                    key: "hideBanner",
                    value: function() {
                        this._setBannerState(c.HIDDEN)
                    }
                }, {
                    key: "showInterstitial",
                    value: function() {
                        var e = this;
                        sn(this, fn, !1),
                        this._platformSdk ? this._platformSdk.showAd().catch((function(t) {
                            e._setInterstitialState(u.FAILED)
                        }
                        )) : this._setInterstitialState(u.FAILED)
                    }
                }, {
                    key: "showRewarded",
                    value: function() {
                        var e = this;
                        sn(this, fn, !0),
                        this._platformSdk ? this._platformSdk.showAd("rewarded").catch((function(t) {
                            e._setRewardedState(s.FAILED)
                        }
                        )) : this._setRewardedState(s.FAILED)
                    }
                }]) && tn(t.prototype, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                f
            }(W);
            function hn(e) {
                return hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                hn(e)
            }
            function yn(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    r.push.apply(r, n)
                }
                return r
            }
            function dn(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }
            function mn(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function vn(e, t) {
                gn(e, t),
                t.add(e)
            }
            function _n(e, t, r) {
                gn(e, t),
                t.set(e, r)
            }
            function gn(e, t) {
                if (t.has(e))
                    throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
            function bn(e, t, r) {
                return function(e, t, r) {
                    if (t.set)
                        t.set.call(e, r);
                    else {
                        if (!t.writable)
                            throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, En(e, t, "set"), r),
                r
            }
            function Sn(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            function wn(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, En(e, t, "get"))
            }
            function En(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            e = r.hmd(e);
            var Pn = new WeakMap
              , kn = new WeakMap
              , On = new WeakMap
              , An = new WeakMap
              , Dn = new WeakMap
              , Tn = new WeakSet
              , In = new WeakSet;
            function Rn() {
                var e = n.YANDEX;
                if (this._options && this._options.forciblySetPlatformId)
                    switch (this._options.forciblySetPlatformId) {
                    case n.VK:
                        e = n.VK;
                        break;
                    case n.YANDEX:
                        e = n.YANDEX;
                        break;
                    case n.CRAZY_GAMES:
                        e = n.CRAZY_GAMES;
                        break;
                    case n.ABSOLUTE_GAMES:
                        e = n.ABSOLUTE_GAMES;
                        break;
                    case n.GAME_DISTRIBUTION:
                        e = n.GAME_DISTRIBUTION
                    }
                else {
                    var t = new URL(window.location.href)
                      , r = ["y", "a", "n", "d", "e", "x", ".", "n", "e", "t"].join("");
                    t.hostname.includes(r) || t.hash.includes("yandex") ? e = n.YANDEX : t.hostname.includes("crazygames.") || t.hostname.includes("1001juegos.com") ? e = n.CRAZY_GAMES : t.hostname.includes("gamedistribution.com") ? e = n.GAME_DISTRIBUTION : t.searchParams.has("api_id") && t.searchParams.has("viewer_id") && t.searchParams.has("auth_key") ? e = n.VK : t.searchParams.has("app_id") && t.searchParams.has("player_id") && t.searchParams.has("game_sid") && t.searchParams.has("auth_key") && (e = n.ABSOLUTE_GAMES)
                }
                switch (e) {
                case n.VK:
                    bn(this, On, new ue(this._options && this._options.platforms && this._options.platforms[n.VK]));
                    break;
                case n.YANDEX:
                    bn(this, On, new je(this._options && this._options.platforms && this._options.platforms[n.YANDEX]));
                    break;
                case n.CRAZY_GAMES:
                    bn(this, On, new Cr(this._options && this._options.platforms && this._options.platforms[n.CRAZY_GAMES]));
                    break;
                case n.ABSOLUTE_GAMES:
                    bn(this, On, new Qr(this._options && this._options.platforms && this._options.platforms[n.ABSOLUTE_GAMES]));
                    break;
                case n.GAME_DISTRIBUTION:
                    bn(this, On, new pn(this._options && this._options.platforms && this._options.platforms[n.GAME_DISTRIBUTION]));
                    break;
                case n.MOCK:
                    bn(this, On, new W)
                }
            }
            function jn(e) {
                return wn(this, Pn) || console.error(b),
                wn(this, Dn)[e] ? wn(this, Dn)[e] : wn(this, An)[e]
            }
            const Ln = function() {
                function t() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    vn(this, In),
                    vn(this, Tn),
                    _n(this, Pn, {
                        writable: !0,
                        value: !1
                    }),
                    _n(this, kn, {
                        writable: !0,
                        value: null
                    }),
                    _n(this, On, {
                        writable: !0,
                        value: null
                    }),
                    _n(this, An, {
                        writable: !0,
                        value: {}
                    }),
                    _n(this, Dn, {
                        writable: !0,
                        value: {}
                    })
                }
                var r, h;
                return r = t,
                h = [{
                    key: "version",
                    get: function() {
                        return "1.9.0"
                    }
                }, {
                    key: "isInitialized",
                    get: function() {
                        return wn(this, Pn)
                    }
                }, {
                    key: "platform",
                    get: function() {
                        return Sn(this, In, jn).call(this, o.PLATFORM)
                    }
                }, {
                    key: "player",
                    get: function() {
                        return Sn(this, In, jn).call(this, o.PLAYER)
                    }
                }, {
                    key: "game",
                    get: function() {
                        return Sn(this, In, jn).call(this, o.GAME)
                    }
                }, {
                    key: "storage",
                    get: function() {
                        return Sn(this, In, jn).call(this, o.STORAGE)
                    }
                }, {
                    key: "advertisement",
                    get: function() {
                        return Sn(this, In, jn).call(this, o.ADVERTISEMENT)
                    }
                }, {
                    key: "social",
                    get: function() {
                        return Sn(this, In, jn).call(this, o.SOCIAL)
                    }
                }, {
                    key: "device",
                    get: function() {
                        return Sn(this, In, jn).call(this, o.DEVICE)
                    }
                }, {
                    key: "leaderboard",
                    get: function() {
                        return Sn(this, In, jn).call(this, o.LEADERBOARD)
                    }
                }, {
                    key: "PLATFORM_ID",
                    get: function() {
                        return n
                    }
                }, {
                    key: "PLATFORM_MESSAGE",
                    get: function() {
                        return p
                    }
                }, {
                    key: "MODULE_NAME",
                    get: function() {
                        return o
                    }
                }, {
                    key: "EVENT_NAME",
                    get: function() {
                        return i
                    }
                }, {
                    key: "INTERSTITIAL_STATE",
                    get: function() {
                        return u
                    }
                }, {
                    key: "REWARDED_STATE",
                    get: function() {
                        return s
                    }
                }, {
                    key: "BANNER_STATE",
                    get: function() {
                        return c
                    }
                }, {
                    key: "STORAGE_TYPE",
                    get: function() {
                        return l
                    }
                }, {
                    key: "VISIBILITY_STATE",
                    get: function() {
                        return a
                    }
                }, {
                    key: "DEVICE_TYPE",
                    get: function() {
                        return f
                    }
                }, {
                    key: "initialize",
                    value: function(e) {
                        var t = this;
                        return wn(this, Pn) ? Promise.resolve() : (wn(this, kn) || (bn(this, kn, new R),
                        this._options = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? yn(Object(r), !0).forEach((function(t) {
                                    dn(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yn(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }({}, e),
                        Sn(this, Tn, Rn).call(this),
                        wn(this, On).initialize().then((function() {
                            wn(t, An)[o.PLATFORM] = new We(wn(t, On)),
                            wn(t, An)[o.PLAYER] = new qe(wn(t, On)),
                            wn(t, An)[o.GAME] = new tt(wn(t, On)),
                            wn(t, An)[o.STORAGE] = new pt(wn(t, On)),
                            wn(t, An)[o.ADVERTISEMENT] = new $t(wn(t, On)),
                            wn(t, An)[o.SOCIAL] = new ar(wn(t, On)),
                            wn(t, An)[o.DEVICE] = new hr(wn(t, On)),
                            wn(t, An)[o.LEADERBOARD] = new br(wn(t, On)),
                            bn(t, Pn, !0),
                            console.log("%c InstantGamesBridge v." + t.version + " initialized. ", "background: #01A5DA; color: white"),
                            wn(t, kn) && (wn(t, kn).resolve(),
                            bn(t, kn, null))
                        }
                        ))),
                        wn(this, kn).promise)
                    }
                }, {
                    key: "overrideModule",
                    value: function(t, r) {
                        "object" === hn(r) && (wn(this, Dn)[t] = r,
                        "function" == typeof r.initialize && r.initialize(e))
                    }
                }],
                h && mn(r.prototype, h),
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                t
            }()
        }
        ,
        258: e=>{
            !function(t) {
                e.exports = t;
                var r = {
                    on: function(e, t) {
                        return i(this, e).push(t),
                        this
                    },
                    once: function(e, t) {
                        var r = this;
                        return n.originalListener = t,
                        i(r, e).push(n),
                        r;
                        function n() {
                            o.call(r, e, n),
                            t.apply(this, arguments)
                        }
                    },
                    off: o,
                    emit: function(e, t) {
                        var r = this
                          , n = i(r, e, !0);
                        if (!n)
                            return !1;
                        var o = arguments.length;
                        if (1 === o)
                            n.forEach(u);
                        else if (2 === o)
                            n.forEach(s);
                        else {
                            var a = Array.prototype.slice.call(arguments, 1);
                            n.forEach(c)
                        }
                        return !!n.length;
                        function u(e) {
                            e.call(r)
                        }
                        function s(e) {
                            e.call(r, t)
                        }
                        function c(e) {
                            e.apply(r, a)
                        }
                    }
                };
                function n(e) {
                    for (var t in r)
                        e[t] = r[t];
                    return e
                }
                function o(e, t) {
                    var r, n = this;
                    if (arguments.length) {
                        if (t) {
                            if (r = i(n, e, !0)) {
                                if (!(r = r.filter(a)).length)
                                    return o.call(n, e);
                                n.listeners[e] = r
                            }
                        } else if ((r = n.listeners) && (delete r[e],
                        !Object.keys(r).length))
                            return o.call(n)
                    } else
                        delete n.listeners;
                    return n;
                    function a(e) {
                        return e !== t && e.originalListener !== t
                    }
                }
                function i(e, t, r) {
                    if (!r || e.listeners) {
                        var n = e.listeners || (e.listeners = {});
                        return n[t] || (n[t] = [])
                    }
                }
                n(t.prototype),
                t.mixin = n
            }((function e() {
                if (!(this instanceof e))
                    return new e
            }
            ))
        }
    }
      , t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o)
            return o.exports;
        var i = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n](i, i.exports, r),
        i.loaded = !0,
        i.exports
    }
    r.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e,t)=>{
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.hmd = e=>((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: ()=>{
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        "use strict";
        var e = r(550);
        window.instantGamesBridge = window.bridge = new e.Z
    }
    )()
}
)();
