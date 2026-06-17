(function () {
	const x = document.createElement("link").relList;
	if (x && x.supports && x.supports("modulepreload")) return;
	for (const H of document.querySelectorAll('link[rel="modulepreload"]')) d(H);
	new MutationObserver((H) => {
		for (const Y of H)
			if (Y.type === "childList")
				for (const Z of Y.addedNodes)
					Z.tagName === "LINK" && Z.rel === "modulepreload" && d(Z);
	}).observe(document, { childList: !0, subtree: !0 });
	function A(H) {
		const Y = {};
		return (
			H.integrity && (Y.integrity = H.integrity),
			H.referrerPolicy && (Y.referrerPolicy = H.referrerPolicy),
			H.crossOrigin === "use-credentials"
				? (Y.credentials = "include")
				: H.crossOrigin === "anonymous"
					? (Y.credentials = "omit")
					: (Y.credentials = "same-origin"),
			Y
		);
	}
	function d(H) {
		if (H.ep) return;
		H.ep = !0;
		const Y = A(H);
		fetch(H.href, Y);
	}
})();
function G2(y) {
	return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default")
		? y.default
		: y;
}
var of = { exports: {} },
	_u = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var p2;
function mm() {
	if (p2) return _u;
	p2 = 1;
	var y = Symbol.for("react.transitional.element"),
		x = Symbol.for("react.fragment");
	function A(d, H, Y) {
		var Z = null;
		if (
			(Y !== void 0 && (Z = "" + Y),
			H.key !== void 0 && (Z = "" + H.key),
			"key" in H)
		) {
			Y = {};
			for (var il in H) il !== "key" && (Y[il] = H[il]);
		} else Y = H;
		return (
			(H = Y.ref),
			{ $$typeof: y, type: d, key: Z, ref: H !== void 0 ? H : null, props: Y }
		);
	}
	return ((_u.Fragment = x), (_u.jsx = A), (_u.jsxs = A), _u);
}
var _2;
function rm() {
	return (_2 || ((_2 = 1), (of.exports = mm())), of.exports);
}
var r = rm(),
	df = { exports: {} },
	Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z2;
function hm() {
	if (z2) return Q;
	z2 = 1;
	var y = Symbol.for("react.transitional.element"),
		x = Symbol.for("react.portal"),
		A = Symbol.for("react.fragment"),
		d = Symbol.for("react.strict_mode"),
		H = Symbol.for("react.profiler"),
		Y = Symbol.for("react.consumer"),
		Z = Symbol.for("react.context"),
		il = Symbol.for("react.forward_ref"),
		j = Symbol.for("react.suspense"),
		T = Symbol.for("react.memo"),
		G = Symbol.for("react.lazy"),
		D = Symbol.for("react.activity"),
		X = Symbol.iterator;
	function zl(o) {
		return o === null || typeof o != "object"
			? null
			: ((o = (X && o[X]) || o["@@iterator"]),
				typeof o == "function" ? o : null);
	}
	var Ol = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		cl = Object.assign,
		Vl = {};
	function Ll(o, E, O) {
		((this.props = o),
			(this.context = E),
			(this.refs = Vl),
			(this.updater = O || Ol));
	}
	((Ll.prototype.isReactComponent = {}),
		(Ll.prototype.setState = function (o, E) {
			if (typeof o != "object" && typeof o != "function" && o != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables.",
				);
			this.updater.enqueueSetState(this, o, E, "setState");
		}),
		(Ll.prototype.forceUpdate = function (o) {
			this.updater.enqueueForceUpdate(this, o, "forceUpdate");
		}));
	function rt() {}
	rt.prototype = Ll.prototype;
	function Cl(o, E, O) {
		((this.props = o),
			(this.context = E),
			(this.refs = Vl),
			(this.updater = O || Ol));
	}
	var Nl = (Cl.prototype = new rt());
	((Nl.constructor = Cl), cl(Nl, Ll.prototype), (Nl.isPureReactComponent = !0));
	var Rl = Array.isArray;
	function El() {}
	var J = { H: null, A: null, T: null, S: null },
		Xl = Object.prototype.hasOwnProperty;
	function ht(o, E, O) {
		var C = O.ref;
		return {
			$$typeof: y,
			type: o,
			key: E,
			ref: C !== void 0 ? C : null,
			props: O,
		};
	}
	function It(o, E) {
		return ht(o.type, E, o.props);
	}
	function tt(o) {
		return typeof o == "object" && o !== null && o.$$typeof === y;
	}
	function P(o) {
		var E = { "=": "=0", ":": "=2" };
		return (
			"$" +
			o.replace(/[=:]/g, function (O) {
				return E[O];
			})
		);
	}
	var jl = /\/+/g;
	function Ot(o, E) {
		return typeof o == "object" && o !== null && o.key != null
			? P("" + o.key)
			: E.toString(36);
	}
	function at(o) {
		switch (o.status) {
			case "fulfilled":
				return o.value;
			case "rejected":
				throw o.reason;
			default:
				switch (
					(typeof o.status == "string"
						? o.then(El, El)
						: ((o.status = "pending"),
							o.then(
								function (E) {
									o.status === "pending" &&
										((o.status = "fulfilled"), (o.value = E));
								},
								function (E) {
									o.status === "pending" &&
										((o.status = "rejected"), (o.reason = E));
								},
							)),
					o.status)
				) {
					case "fulfilled":
						return o.value;
					case "rejected":
						throw o.reason;
				}
		}
		throw o;
	}
	function p(o, E, O, C, V) {
		var w = typeof o;
		(w === "undefined" || w === "boolean") && (o = null);
		var el = !1;
		if (o === null) el = !0;
		else
			switch (w) {
				case "bigint":
				case "string":
				case "number":
					el = !0;
					break;
				case "object":
					switch (o.$$typeof) {
						case y:
						case x:
							el = !0;
							break;
						case G:
							return ((el = o._init), p(el(o._payload), E, O, C, V));
					}
			}
		if (el)
			return (
				(V = V(o)),
				(el = C === "" ? "." + Ot(o, 0) : C),
				Rl(V)
					? ((O = ""),
						el != null && (O = el.replace(jl, "$&/") + "/"),
						p(V, E, O, "", function (Oe) {
							return Oe;
						}))
					: V != null &&
						(tt(V) &&
							(V = It(
								V,
								O +
									(V.key == null || (o && o.key === V.key)
										? ""
										: ("" + V.key).replace(jl, "$&/") + "/") +
									el,
							)),
						E.push(V)),
				1
			);
		el = 0;
		var Kl = C === "" ? "." : C + ":";
		if (Rl(o))
			for (var bl = 0; bl < o.length; bl++)
				((C = o[bl]), (w = Kl + Ot(C, bl)), (el += p(C, E, O, w, V)));
		else if (((bl = zl(o)), typeof bl == "function"))
			for (o = bl.call(o), bl = 0; !(C = o.next()).done; )
				((C = C.value), (w = Kl + Ot(C, bl++)), (el += p(C, E, O, w, V)));
		else if (w === "object") {
			if (typeof o.then == "function") return p(at(o), E, O, C, V);
			throw (
				(E = String(o)),
				Error(
					"Objects are not valid as a React child (found: " +
						(E === "[object Object]"
							? "object with keys {" + Object.keys(o).join(", ") + "}"
							: E) +
						"). If you meant to render a collection of children, use an array instead.",
				)
			);
		}
		return el;
	}
	function M(o, E, O) {
		if (o == null) return o;
		var C = [],
			V = 0;
		return (
			p(o, C, "", "", function (w) {
				return E.call(O, w, V++);
			}),
			C
		);
	}
	function q(o) {
		if (o._status === -1) {
			var E = o._result;
			((E = E()),
				E.then(
					function (O) {
						(o._status === 0 || o._status === -1) &&
							((o._status = 1), (o._result = O));
					},
					function (O) {
						(o._status === 0 || o._status === -1) &&
							((o._status = 2), (o._result = O));
					},
				),
				o._status === -1 && ((o._status = 0), (o._result = E)));
		}
		if (o._status === 1) return o._result.default;
		throw o._result;
	}
	var fl =
			typeof reportError == "function"
				? reportError
				: function (o) {
						if (
							typeof window == "object" &&
							typeof window.ErrorEvent == "function"
						) {
							var E = new window.ErrorEvent("error", {
								bubbles: !0,
								cancelable: !0,
								message:
									typeof o == "object" &&
									o !== null &&
									typeof o.message == "string"
										? String(o.message)
										: String(o),
								error: o,
							});
							if (!window.dispatchEvent(E)) return;
						} else if (
							typeof process == "object" &&
							typeof process.emit == "function"
						) {
							process.emit("uncaughtException", o);
							return;
						}
						console.error(o);
					},
		ml = {
			map: M,
			forEach: function (o, E, O) {
				M(
					o,
					function () {
						E.apply(this, arguments);
					},
					O,
				);
			},
			count: function (o) {
				var E = 0;
				return (
					M(o, function () {
						E++;
					}),
					E
				);
			},
			toArray: function (o) {
				return (
					M(o, function (E) {
						return E;
					}) || []
				);
			},
			only: function (o) {
				if (!tt(o))
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				return o;
			},
		};
	return (
		(Q.Activity = D),
		(Q.Children = ml),
		(Q.Component = Ll),
		(Q.Fragment = A),
		(Q.Profiler = H),
		(Q.PureComponent = Cl),
		(Q.StrictMode = d),
		(Q.Suspense = j),
		(Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
		(Q.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (o) {
				return J.H.useMemoCache(o);
			},
		}),
		(Q.cache = function (o) {
			return function () {
				return o.apply(null, arguments);
			};
		}),
		(Q.cacheSignal = function () {
			return null;
		}),
		(Q.cloneElement = function (o, E, O) {
			if (o == null)
				throw Error(
					"The argument must be a React element, but you passed " + o + ".",
				);
			var C = cl({}, o.props),
				V = o.key;
			if (E != null)
				for (w in (E.key !== void 0 && (V = "" + E.key), E))
					!Xl.call(E, w) ||
						w === "key" ||
						w === "__self" ||
						w === "__source" ||
						(w === "ref" && E.ref === void 0) ||
						(C[w] = E[w]);
			var w = arguments.length - 2;
			if (w === 1) C.children = O;
			else if (1 < w) {
				for (var el = Array(w), Kl = 0; Kl < w; Kl++)
					el[Kl] = arguments[Kl + 2];
				C.children = el;
			}
			return ht(o.type, V, C);
		}),
		(Q.createContext = function (o) {
			return (
				(o = {
					$$typeof: Z,
					_currentValue: o,
					_currentValue2: o,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(o.Provider = o),
				(o.Consumer = { $$typeof: Y, _context: o }),
				o
			);
		}),
		(Q.createElement = function (o, E, O) {
			var C,
				V = {},
				w = null;
			if (E != null)
				for (C in (E.key !== void 0 && (w = "" + E.key), E))
					Xl.call(E, C) &&
						C !== "key" &&
						C !== "__self" &&
						C !== "__source" &&
						(V[C] = E[C]);
			var el = arguments.length - 2;
			if (el === 1) V.children = O;
			else if (1 < el) {
				for (var Kl = Array(el), bl = 0; bl < el; bl++)
					Kl[bl] = arguments[bl + 2];
				V.children = Kl;
			}
			if (o && o.defaultProps)
				for (C in ((el = o.defaultProps), el))
					V[C] === void 0 && (V[C] = el[C]);
			return ht(o, w, V);
		}),
		(Q.createRef = function () {
			return { current: null };
		}),
		(Q.forwardRef = function (o) {
			return { $$typeof: il, render: o };
		}),
		(Q.isValidElement = tt),
		(Q.lazy = function (o) {
			return { $$typeof: G, _payload: { _status: -1, _result: o }, _init: q };
		}),
		(Q.memo = function (o, E) {
			return { $$typeof: T, type: o, compare: E === void 0 ? null : E };
		}),
		(Q.startTransition = function (o) {
			var E = J.T,
				O = {};
			J.T = O;
			try {
				var C = o(),
					V = J.S;
				(V !== null && V(O, C),
					typeof C == "object" &&
						C !== null &&
						typeof C.then == "function" &&
						C.then(El, fl));
			} catch (w) {
				fl(w);
			} finally {
				(E !== null && O.types !== null && (E.types = O.types), (J.T = E));
			}
		}),
		(Q.unstable_useCacheRefresh = function () {
			return J.H.useCacheRefresh();
		}),
		(Q.use = function (o) {
			return J.H.use(o);
		}),
		(Q.useActionState = function (o, E, O) {
			return J.H.useActionState(o, E, O);
		}),
		(Q.useCallback = function (o, E) {
			return J.H.useCallback(o, E);
		}),
		(Q.useContext = function (o) {
			return J.H.useContext(o);
		}),
		(Q.useDebugValue = function () {}),
		(Q.useDeferredValue = function (o, E) {
			return J.H.useDeferredValue(o, E);
		}),
		(Q.useEffect = function (o, E) {
			return J.H.useEffect(o, E);
		}),
		(Q.useEffectEvent = function (o) {
			return J.H.useEffectEvent(o);
		}),
		(Q.useId = function () {
			return J.H.useId();
		}),
		(Q.useImperativeHandle = function (o, E, O) {
			return J.H.useImperativeHandle(o, E, O);
		}),
		(Q.useInsertionEffect = function (o, E) {
			return J.H.useInsertionEffect(o, E);
		}),
		(Q.useLayoutEffect = function (o, E) {
			return J.H.useLayoutEffect(o, E);
		}),
		(Q.useMemo = function (o, E) {
			return J.H.useMemo(o, E);
		}),
		(Q.useOptimistic = function (o, E) {
			return J.H.useOptimistic(o, E);
		}),
		(Q.useReducer = function (o, E, O) {
			return J.H.useReducer(o, E, O);
		}),
		(Q.useRef = function (o) {
			return J.H.useRef(o);
		}),
		(Q.useState = function (o) {
			return J.H.useState(o);
		}),
		(Q.useSyncExternalStore = function (o, E, O) {
			return J.H.useSyncExternalStore(o, E, O);
		}),
		(Q.useTransition = function () {
			return J.H.useTransition();
		}),
		(Q.version = "19.2.1"),
		Q
	);
}
var E2;
function Sf() {
	return (E2 || ((E2 = 1), (df.exports = hm())), df.exports);
}
var lt = Sf();
const Va = G2(lt);
var mf = { exports: {} },
	zu = {},
	rf = { exports: {} },
	hf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var T2;
function vm() {
	return (
		T2 ||
			((T2 = 1),
			(function (y) {
				function x(p, M) {
					var q = p.length;
					p.push(M);
					l: for (; 0 < q; ) {
						var fl = (q - 1) >>> 1,
							ml = p[fl];
						if (0 < H(ml, M)) ((p[fl] = M), (p[q] = ml), (q = fl));
						else break l;
					}
				}
				function A(p) {
					return p.length === 0 ? null : p[0];
				}
				function d(p) {
					if (p.length === 0) return null;
					var M = p[0],
						q = p.pop();
					if (q !== M) {
						p[0] = q;
						l: for (var fl = 0, ml = p.length, o = ml >>> 1; fl < o; ) {
							var E = 2 * (fl + 1) - 1,
								O = p[E],
								C = E + 1,
								V = p[C];
							if (0 > H(O, q))
								C < ml && 0 > H(V, O)
									? ((p[fl] = V), (p[C] = q), (fl = C))
									: ((p[fl] = O), (p[E] = q), (fl = E));
							else if (C < ml && 0 > H(V, q))
								((p[fl] = V), (p[C] = q), (fl = C));
							else break l;
						}
					}
					return M;
				}
				function H(p, M) {
					var q = p.sortIndex - M.sortIndex;
					return q !== 0 ? q : p.id - M.id;
				}
				if (
					((y.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var Y = performance;
					y.unstable_now = function () {
						return Y.now();
					};
				} else {
					var Z = Date,
						il = Z.now();
					y.unstable_now = function () {
						return Z.now() - il;
					};
				}
				var j = [],
					T = [],
					G = 1,
					D = null,
					X = 3,
					zl = !1,
					Ol = !1,
					cl = !1,
					Vl = !1,
					Ll = typeof setTimeout == "function" ? setTimeout : null,
					rt = typeof clearTimeout == "function" ? clearTimeout : null,
					Cl = typeof setImmediate < "u" ? setImmediate : null;
				function Nl(p) {
					for (var M = A(T); M !== null; ) {
						if (M.callback === null) d(T);
						else if (M.startTime <= p)
							(d(T), (M.sortIndex = M.expirationTime), x(j, M));
						else break;
						M = A(T);
					}
				}
				function Rl(p) {
					if (((cl = !1), Nl(p), !Ol))
						if (A(j) !== null) ((Ol = !0), El || ((El = !0), P()));
						else {
							var M = A(T);
							M !== null && at(Rl, M.startTime - p);
						}
				}
				var El = !1,
					J = -1,
					Xl = 5,
					ht = -1;
				function It() {
					return Vl ? !0 : !(y.unstable_now() - ht < Xl);
				}
				function tt() {
					if (((Vl = !1), El)) {
						var p = y.unstable_now();
						ht = p;
						var M = !0;
						try {
							l: {
								((Ol = !1), cl && ((cl = !1), rt(J), (J = -1)), (zl = !0));
								var q = X;
								try {
									t: {
										for (
											Nl(p), D = A(j);
											D !== null && !(D.expirationTime > p && It());
										) {
											var fl = D.callback;
											if (typeof fl == "function") {
												((D.callback = null), (X = D.priorityLevel));
												var ml = fl(D.expirationTime <= p);
												if (((p = y.unstable_now()), typeof ml == "function")) {
													((D.callback = ml), Nl(p), (M = !0));
													break t;
												}
												(D === A(j) && d(j), Nl(p));
											} else d(j);
											D = A(j);
										}
										if (D !== null) M = !0;
										else {
											var o = A(T);
											(o !== null && at(Rl, o.startTime - p), (M = !1));
										}
									}
									break l;
								} finally {
									((D = null), (X = q), (zl = !1));
								}
								M = void 0;
							}
						} finally {
							M ? P() : (El = !1);
						}
					}
				}
				var P;
				if (typeof Cl == "function")
					P = function () {
						Cl(tt);
					};
				else if (typeof MessageChannel < "u") {
					var jl = new MessageChannel(),
						Ot = jl.port2;
					((jl.port1.onmessage = tt),
						(P = function () {
							Ot.postMessage(null);
						}));
				} else
					P = function () {
						Ll(tt, 0);
					};
				function at(p, M) {
					J = Ll(function () {
						p(y.unstable_now());
					}, M);
				}
				((y.unstable_IdlePriority = 5),
					(y.unstable_ImmediatePriority = 1),
					(y.unstable_LowPriority = 4),
					(y.unstable_NormalPriority = 3),
					(y.unstable_Profiling = null),
					(y.unstable_UserBlockingPriority = 2),
					(y.unstable_cancelCallback = function (p) {
						p.callback = null;
					}),
					(y.unstable_forceFrameRate = function (p) {
						0 > p || 125 < p
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (Xl = 0 < p ? Math.floor(1e3 / p) : 5);
					}),
					(y.unstable_getCurrentPriorityLevel = function () {
						return X;
					}),
					(y.unstable_next = function (p) {
						switch (X) {
							case 1:
							case 2:
							case 3:
								var M = 3;
								break;
							default:
								M = X;
						}
						var q = X;
						X = M;
						try {
							return p();
						} finally {
							X = q;
						}
					}),
					(y.unstable_requestPaint = function () {
						Vl = !0;
					}),
					(y.unstable_runWithPriority = function (p, M) {
						switch (p) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								p = 3;
						}
						var q = X;
						X = p;
						try {
							return M();
						} finally {
							X = q;
						}
					}),
					(y.unstable_scheduleCallback = function (p, M, q) {
						var fl = y.unstable_now();
						switch (
							(typeof q == "object" && q !== null
								? ((q = q.delay),
									(q = typeof q == "number" && 0 < q ? fl + q : fl))
								: (q = fl),
							p)
						) {
							case 1:
								var ml = -1;
								break;
							case 2:
								ml = 250;
								break;
							case 5:
								ml = 1073741823;
								break;
							case 4:
								ml = 1e4;
								break;
							default:
								ml = 5e3;
						}
						return (
							(ml = q + ml),
							(p = {
								id: G++,
								callback: M,
								priorityLevel: p,
								startTime: q,
								expirationTime: ml,
								sortIndex: -1,
							}),
							q > fl
								? ((p.sortIndex = q),
									x(T, p),
									A(j) === null &&
										p === A(T) &&
										(cl ? (rt(J), (J = -1)) : (cl = !0), at(Rl, q - fl)))
								: ((p.sortIndex = ml),
									x(j, p),
									Ol || zl || ((Ol = !0), El || ((El = !0), P()))),
							p
						);
					}),
					(y.unstable_shouldYield = It),
					(y.unstable_wrapCallback = function (p) {
						var M = X;
						return function () {
							var q = X;
							X = M;
							try {
								return p.apply(this, arguments);
							} finally {
								X = q;
							}
						};
					}));
			})(hf)),
		hf
	);
}
var A2;
function ym() {
	return (A2 || ((A2 = 1), (rf.exports = vm())), rf.exports);
}
var vf = { exports: {} },
	Ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x2;
function gm() {
	if (x2) return Ql;
	x2 = 1;
	var y = Sf();
	function x(j) {
		var T = "https://react.dev/errors/" + j;
		if (1 < arguments.length) {
			T += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var G = 2; G < arguments.length; G++)
				T += "&args[]=" + encodeURIComponent(arguments[G]);
		}
		return (
			"Minified React error #" +
			j +
			"; visit " +
			T +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function A() {}
	var d = {
			d: {
				f: A,
				r: function () {
					throw Error(x(522));
				},
				D: A,
				C: A,
				L: A,
				m: A,
				X: A,
				S: A,
				M: A,
			},
			p: 0,
			findDOMNode: null,
		},
		H = Symbol.for("react.portal");
	function Y(j, T, G) {
		var D =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: H,
			key: D == null ? null : "" + D,
			children: j,
			containerInfo: T,
			implementation: G,
		};
	}
	var Z = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function il(j, T) {
		if (j === "font") return "";
		if (typeof T == "string") return T === "use-credentials" ? T : "";
	}
	return (
		(Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
		(Ql.createPortal = function (j, T) {
			var G =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
				throw Error(x(299));
			return Y(j, T, null, G);
		}),
		(Ql.flushSync = function (j) {
			var T = Z.T,
				G = d.p;
			try {
				if (((Z.T = null), (d.p = 2), j)) return j();
			} finally {
				((Z.T = T), (d.p = G), d.d.f());
			}
		}),
		(Ql.preconnect = function (j, T) {
			typeof j == "string" &&
				(T
					? ((T = T.crossOrigin),
						(T =
							typeof T == "string"
								? T === "use-credentials"
									? T
									: ""
								: void 0))
					: (T = null),
				d.d.C(j, T));
		}),
		(Ql.prefetchDNS = function (j) {
			typeof j == "string" && d.d.D(j);
		}),
		(Ql.preinit = function (j, T) {
			if (typeof j == "string" && T && typeof T.as == "string") {
				var G = T.as,
					D = il(G, T.crossOrigin),
					X = typeof T.integrity == "string" ? T.integrity : void 0,
					zl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
				G === "style"
					? d.d.S(j, typeof T.precedence == "string" ? T.precedence : void 0, {
							crossOrigin: D,
							integrity: X,
							fetchPriority: zl,
						})
					: G === "script" &&
						d.d.X(j, {
							crossOrigin: D,
							integrity: X,
							fetchPriority: zl,
							nonce: typeof T.nonce == "string" ? T.nonce : void 0,
						});
			}
		}),
		(Ql.preinitModule = function (j, T) {
			if (typeof j == "string")
				if (typeof T == "object" && T !== null) {
					if (T.as == null || T.as === "script") {
						var G = il(T.as, T.crossOrigin);
						d.d.M(j, {
							crossOrigin: G,
							integrity: typeof T.integrity == "string" ? T.integrity : void 0,
							nonce: typeof T.nonce == "string" ? T.nonce : void 0,
						});
					}
				} else T == null && d.d.M(j);
		}),
		(Ql.preload = function (j, T) {
			if (
				typeof j == "string" &&
				typeof T == "object" &&
				T !== null &&
				typeof T.as == "string"
			) {
				var G = T.as,
					D = il(G, T.crossOrigin);
				d.d.L(j, G, {
					crossOrigin: D,
					integrity: typeof T.integrity == "string" ? T.integrity : void 0,
					nonce: typeof T.nonce == "string" ? T.nonce : void 0,
					type: typeof T.type == "string" ? T.type : void 0,
					fetchPriority:
						typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
					referrerPolicy:
						typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
					imageSrcSet:
						typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
					imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
					media: typeof T.media == "string" ? T.media : void 0,
				});
			}
		}),
		(Ql.preloadModule = function (j, T) {
			if (typeof j == "string")
				if (T) {
					var G = il(T.as, T.crossOrigin);
					d.d.m(j, {
						as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
						crossOrigin: G,
						integrity: typeof T.integrity == "string" ? T.integrity : void 0,
					});
				} else d.d.m(j);
		}),
		(Ql.requestFormReset = function (j) {
			d.d.r(j);
		}),
		(Ql.unstable_batchedUpdates = function (j, T) {
			return j(T);
		}),
		(Ql.useFormState = function (j, T, G) {
			return Z.H.useFormState(j, T, G);
		}),
		(Ql.useFormStatus = function () {
			return Z.H.useHostTransitionStatus();
		}),
		(Ql.version = "19.2.1"),
		Ql
	);
}
var M2;
function Sm() {
	if (M2) return vf.exports;
	M2 = 1;
	function y() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
			} catch (x) {
				console.error(x);
			}
	}
	return (y(), (vf.exports = gm()), vf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O2;
function bm() {
	if (O2) return zu;
	O2 = 1;
	var y = ym(),
		x = Sf(),
		A = Sm();
	function d(l) {
		var t = "https://react.dev/errors/" + l;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var a = 2; a < arguments.length; a++)
				t += "&args[]=" + encodeURIComponent(arguments[a]);
		}
		return (
			"Minified React error #" +
			l +
			"; visit " +
			t +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function H(l) {
		return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
	}
	function Y(l) {
		var t = l,
			a = l;
		if (l.alternate) for (; t.return; ) t = t.return;
		else {
			l = t;
			do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
			while (l);
		}
		return t.tag === 3 ? a : null;
	}
	function Z(l) {
		if (l.tag === 13) {
			var t = l.memoizedState;
			if (
				(t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
				t !== null)
			)
				return t.dehydrated;
		}
		return null;
	}
	function il(l) {
		if (l.tag === 31) {
			var t = l.memoizedState;
			if (
				(t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
				t !== null)
			)
				return t.dehydrated;
		}
		return null;
	}
	function j(l) {
		if (Y(l) !== l) throw Error(d(188));
	}
	function T(l) {
		var t = l.alternate;
		if (!t) {
			if (((t = Y(l)), t === null)) throw Error(d(188));
			return t !== l ? null : l;
		}
		for (var a = l, e = t; ; ) {
			var u = a.return;
			if (u === null) break;
			var n = u.alternate;
			if (n === null) {
				if (((e = u.return), e !== null)) {
					a = e;
					continue;
				}
				break;
			}
			if (u.child === n.child) {
				for (n = u.child; n; ) {
					if (n === a) return (j(u), l);
					if (n === e) return (j(u), t);
					n = n.sibling;
				}
				throw Error(d(188));
			}
			if (a.return !== e.return) ((a = u), (e = n));
			else {
				for (var i = !1, c = u.child; c; ) {
					if (c === a) {
						((i = !0), (a = u), (e = n));
						break;
					}
					if (c === e) {
						((i = !0), (e = u), (a = n));
						break;
					}
					c = c.sibling;
				}
				if (!i) {
					for (c = n.child; c; ) {
						if (c === a) {
							((i = !0), (a = n), (e = u));
							break;
						}
						if (c === e) {
							((i = !0), (e = n), (a = u));
							break;
						}
						c = c.sibling;
					}
					if (!i) throw Error(d(189));
				}
			}
			if (a.alternate !== e) throw Error(d(190));
		}
		if (a.tag !== 3) throw Error(d(188));
		return a.stateNode.current === a ? l : t;
	}
	function G(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return l;
		for (l = l.child; l !== null; ) {
			if (((t = G(l)), t !== null)) return t;
			l = l.sibling;
		}
		return null;
	}
	var D = Object.assign,
		X = Symbol.for("react.element"),
		zl = Symbol.for("react.transitional.element"),
		Ol = Symbol.for("react.portal"),
		cl = Symbol.for("react.fragment"),
		Vl = Symbol.for("react.strict_mode"),
		Ll = Symbol.for("react.profiler"),
		rt = Symbol.for("react.consumer"),
		Cl = Symbol.for("react.context"),
		Nl = Symbol.for("react.forward_ref"),
		Rl = Symbol.for("react.suspense"),
		El = Symbol.for("react.suspense_list"),
		J = Symbol.for("react.memo"),
		Xl = Symbol.for("react.lazy"),
		ht = Symbol.for("react.activity"),
		It = Symbol.for("react.memo_cache_sentinel"),
		tt = Symbol.iterator;
	function P(l) {
		return l === null || typeof l != "object"
			? null
			: ((l = (tt && l[tt]) || l["@@iterator"]),
				typeof l == "function" ? l : null);
	}
	var jl = Symbol.for("react.client.reference");
	function Ot(l) {
		if (l == null) return null;
		if (typeof l == "function")
			return l.$$typeof === jl ? null : l.displayName || l.name || null;
		if (typeof l == "string") return l;
		switch (l) {
			case cl:
				return "Fragment";
			case Ll:
				return "Profiler";
			case Vl:
				return "StrictMode";
			case Rl:
				return "Suspense";
			case El:
				return "SuspenseList";
			case ht:
				return "Activity";
		}
		if (typeof l == "object")
			switch (l.$$typeof) {
				case Ol:
					return "Portal";
				case Cl:
					return l.displayName || "Context";
				case rt:
					return (l._context.displayName || "Context") + ".Consumer";
				case Nl:
					var t = l.render;
					return (
						(l = l.displayName),
						l ||
							((l = t.displayName || t.name || ""),
							(l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
						l
					);
				case J:
					return (
						(t = l.displayName || null),
						t !== null ? t : Ot(l.type) || "Memo"
					);
				case Xl:
					((t = l._payload), (l = l._init));
					try {
						return Ot(l(t));
					} catch {}
			}
		return null;
	}
	var at = Array.isArray,
		p = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		M = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		q = { pending: !1, data: null, method: null, action: null },
		fl = [],
		ml = -1;
	function o(l) {
		return { current: l };
	}
	function E(l) {
		0 > ml || ((l.current = fl[ml]), (fl[ml] = null), ml--);
	}
	function O(l, t) {
		(ml++, (fl[ml] = l.current), (l.current = t));
	}
	var C = o(null),
		V = o(null),
		w = o(null),
		el = o(null);
	function Kl(l, t) {
		switch ((O(w, t), O(V, l), O(C, null), t.nodeType)) {
			case 9:
			case 11:
				l = (l = t.documentElement) && (l = l.namespaceURI) ? V1(l) : 0;
				break;
			default:
				if (((l = t.tagName), (t = t.namespaceURI)))
					((t = V1(t)), (l = L1(t, l)));
				else
					switch (l) {
						case "svg":
							l = 1;
							break;
						case "math":
							l = 2;
							break;
						default:
							l = 0;
					}
		}
		(E(C), O(C, l));
	}
	function bl() {
		(E(C), E(V), E(w));
	}
	function Oe(l) {
		l.memoizedState !== null && O(el, l);
		var t = C.current,
			a = L1(t, l.type);
		t !== a && (O(V, l), O(C, a));
	}
	function Eu(l) {
		(V.current === l && (E(C), E(V)),
			el.current === l && (E(el), (gu._currentValue = q)));
	}
	var Kn, bf;
	function Ta(l) {
		if (Kn === void 0)
			try {
				throw Error();
			} catch (a) {
				var t = a.stack.trim().match(/\n( *(at )?)/);
				((Kn = (t && t[1]) || ""),
					(bf =
						-1 <
						a.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < a.stack.indexOf("@")
								? "@unknown:0:0"
								: ""));
			}
		return (
			`
` +
			Kn +
			l +
			bf
		);
	}
	var Jn = !1;
	function wn(l, t) {
		if (!l || Jn) return "";
		Jn = !0;
		var a = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var e = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var z = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(z.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(z, []);
								} catch (S) {
									var g = S;
								}
								Reflect.construct(l, [], z);
							} else {
								try {
									z.call();
								} catch (S) {
									g = S;
								}
								l.call(z.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (S) {
								g = S;
							}
							(z = l()) &&
								typeof z.catch == "function" &&
								z.catch(function () {});
						}
					} catch (S) {
						if (S && g && typeof S.stack == "string") return [S.stack, g.stack];
					}
					return [null, null];
				},
			};
			e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var u = Object.getOwnPropertyDescriptor(
				e.DetermineComponentFrameRoot,
				"name",
			);
			u &&
				u.configurable &&
				Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var n = e.DetermineComponentFrameRoot(),
				i = n[0],
				c = n[1];
			if (i && c) {
				var f = i.split(`
`),
					v = c.split(`
`);
				for (
					u = e = 0;
					e < f.length && !f[e].includes("DetermineComponentFrameRoot");
				)
					e++;
				for (; u < v.length && !v[u].includes("DetermineComponentFrameRoot"); )
					u++;
				if (e === f.length || u === v.length)
					for (
						e = f.length - 1, u = v.length - 1;
						1 <= e && 0 <= u && f[e] !== v[u];
					)
						u--;
				for (; 1 <= e && 0 <= u; e--, u--)
					if (f[e] !== v[u]) {
						if (e !== 1 || u !== 1)
							do
								if ((e--, u--, 0 > u || f[e] !== v[u])) {
									var b =
										`
` + f[e].replace(" at new ", " at ");
									return (
										l.displayName &&
											b.includes("<anonymous>") &&
											(b = b.replace("<anonymous>", l.displayName)),
										b
									);
								}
							while (1 <= e && 0 <= u);
						break;
					}
			}
		} finally {
			((Jn = !1), (Error.prepareStackTrace = a));
		}
		return (a = l ? l.displayName || l.name : "") ? Ta(a) : "";
	}
	function Q2(l, t) {
		switch (l.tag) {
			case 26:
			case 27:
			case 5:
				return Ta(l.type);
			case 16:
				return Ta("Lazy");
			case 13:
				return l.child !== t && t !== null
					? Ta("Suspense Fallback")
					: Ta("Suspense");
			case 19:
				return Ta("SuspenseList");
			case 0:
			case 15:
				return wn(l.type, !1);
			case 11:
				return wn(l.type.render, !1);
			case 1:
				return wn(l.type, !0);
			case 31:
				return Ta("Activity");
			default:
				return "";
		}
	}
	function pf(l) {
		try {
			var t = "",
				a = null;
			do ((t += Q2(l, a)), (a = l), (l = l.return));
			while (l);
			return t;
		} catch (e) {
			return (
				`
Error generating stack: ` +
				e.message +
				`
` +
				e.stack
			);
		}
	}
	var Wn = Object.prototype.hasOwnProperty,
		$n = y.unstable_scheduleCallback,
		kn = y.unstable_cancelCallback,
		V2 = y.unstable_shouldYield,
		L2 = y.unstable_requestPaint,
		et = y.unstable_now,
		K2 = y.unstable_getCurrentPriorityLevel,
		_f = y.unstable_ImmediatePriority,
		zf = y.unstable_UserBlockingPriority,
		Tu = y.unstable_NormalPriority,
		J2 = y.unstable_LowPriority,
		Ef = y.unstable_IdlePriority,
		w2 = y.log,
		W2 = y.unstable_setDisableYieldValue,
		Ne = null,
		ut = null;
	function Pt(l) {
		if (
			(typeof w2 == "function" && W2(l),
			ut && typeof ut.setStrictMode == "function")
		)
			try {
				ut.setStrictMode(Ne, l);
			} catch {}
	}
	var nt = Math.clz32 ? Math.clz32 : F2,
		$2 = Math.log,
		k2 = Math.LN2;
	function F2(l) {
		return ((l >>>= 0), l === 0 ? 32 : (31 - (($2(l) / k2) | 0)) | 0);
	}
	var Au = 256,
		xu = 262144,
		Mu = 4194304;
	function Aa(l) {
		var t = l & 42;
		if (t !== 0) return t;
		switch (l & -l) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
				return l & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return l & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return l & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return l;
		}
	}
	function Ou(l, t, a) {
		var e = l.pendingLanes;
		if (e === 0) return 0;
		var u = 0,
			n = l.suspendedLanes,
			i = l.pingedLanes;
		l = l.warmLanes;
		var c = e & 134217727;
		return (
			c !== 0
				? ((e = c & ~n),
					e !== 0
						? (u = Aa(e))
						: ((i &= c),
							i !== 0
								? (u = Aa(i))
								: a || ((a = c & ~l), a !== 0 && (u = Aa(a)))))
				: ((c = e & ~n),
					c !== 0
						? (u = Aa(c))
						: i !== 0
							? (u = Aa(i))
							: a || ((a = e & ~l), a !== 0 && (u = Aa(a)))),
			u === 0
				? 0
				: t !== 0 &&
					  t !== u &&
					  (t & n) === 0 &&
					  ((n = u & -u),
					  (a = t & -t),
					  n >= a || (n === 32 && (a & 4194048) !== 0))
					? t
					: u
		);
	}
	function je(l, t) {
		return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
	}
	function I2(l, t) {
		switch (l) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function Tf() {
		var l = Mu;
		return ((Mu <<= 1), (Mu & 62914560) === 0 && (Mu = 4194304), l);
	}
	function Fn(l) {
		for (var t = [], a = 0; 31 > a; a++) t.push(l);
		return t;
	}
	function De(l, t) {
		((l.pendingLanes |= t),
			t !== 268435456 &&
				((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
	}
	function P2(l, t, a, e, u, n) {
		var i = l.pendingLanes;
		((l.pendingLanes = a),
			(l.suspendedLanes = 0),
			(l.pingedLanes = 0),
			(l.warmLanes = 0),
			(l.expiredLanes &= a),
			(l.entangledLanes &= a),
			(l.errorRecoveryDisabledLanes &= a),
			(l.shellSuspendCounter = 0));
		var c = l.entanglements,
			f = l.expirationTimes,
			v = l.hiddenUpdates;
		for (a = i & ~a; 0 < a; ) {
			var b = 31 - nt(a),
				z = 1 << b;
			((c[b] = 0), (f[b] = -1));
			var g = v[b];
			if (g !== null)
				for (v[b] = null, b = 0; b < g.length; b++) {
					var S = g[b];
					S !== null && (S.lane &= -536870913);
				}
			a &= ~z;
		}
		(e !== 0 && Af(l, e, 0),
			n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
	}
	function Af(l, t, a) {
		((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
		var e = 31 - nt(t);
		((l.entangledLanes |= t),
			(l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 261930)));
	}
	function xf(l, t) {
		var a = (l.entangledLanes |= t);
		for (l = l.entanglements; a; ) {
			var e = 31 - nt(a),
				u = 1 << e;
			((u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u));
		}
	}
	function Mf(l, t) {
		var a = t & -t;
		return (
			(a = (a & 42) !== 0 ? 1 : In(a)),
			(a & (l.suspendedLanes | t)) !== 0 ? 0 : a
		);
	}
	function In(l) {
		switch (l) {
			case 2:
				l = 1;
				break;
			case 8:
				l = 4;
				break;
			case 32:
				l = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				l = 128;
				break;
			case 268435456:
				l = 134217728;
				break;
			default:
				l = 0;
		}
		return l;
	}
	function Pn(l) {
		return (
			(l &= -l),
			2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function Of() {
		var l = M.p;
		return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : r2(l.type));
	}
	function Nf(l, t) {
		var a = M.p;
		try {
			return ((M.p = l), t());
		} finally {
			M.p = a;
		}
	}
	var la = Math.random().toString(36).slice(2),
		Bl = "__reactFiber$" + la,
		wl = "__reactProps$" + la,
		La = "__reactContainer$" + la,
		li = "__reactEvents$" + la,
		lo = "__reactListeners$" + la,
		to = "__reactHandles$" + la,
		jf = "__reactResources$" + la,
		Ce = "__reactMarker$" + la;
	function ti(l) {
		(delete l[Bl], delete l[wl], delete l[li], delete l[lo], delete l[to]);
	}
	function Ka(l) {
		var t = l[Bl];
		if (t) return t;
		for (var a = l.parentNode; a; ) {
			if ((t = a[La] || a[Bl])) {
				if (
					((a = t.alternate),
					t.child !== null || (a !== null && a.child !== null))
				)
					for (l = F1(l); l !== null; ) {
						if ((a = l[Bl])) return a;
						l = F1(l);
					}
				return t;
			}
			((l = a), (a = l.parentNode));
		}
		return null;
	}
	function Ja(l) {
		if ((l = l[Bl] || l[La])) {
			var t = l.tag;
			if (
				t === 5 ||
				t === 6 ||
				t === 13 ||
				t === 31 ||
				t === 26 ||
				t === 27 ||
				t === 3
			)
				return l;
		}
		return null;
	}
	function Ue(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
		throw Error(d(33));
	}
	function wa(l) {
		var t = l[jf];
		return (
			t ||
				(t = l[jf] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			t
		);
	}
	function Ul(l) {
		l[Ce] = !0;
	}
	var Df = new Set(),
		Cf = {};
	function xa(l, t) {
		(Wa(l, t), Wa(l + "Capture", t));
	}
	function Wa(l, t) {
		for (Cf[l] = t, l = 0; l < t.length; l++) Df.add(t[l]);
	}
	var ao = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
		),
		Uf = {},
		Hf = {};
	function eo(l) {
		return Wn.call(Hf, l)
			? !0
			: Wn.call(Uf, l)
				? !1
				: ao.test(l)
					? (Hf[l] = !0)
					: ((Uf[l] = !0), !1);
	}
	function Nu(l, t, a) {
		if (eo(t))
			if (a === null) l.removeAttribute(t);
			else {
				switch (typeof a) {
					case "undefined":
					case "function":
					case "symbol":
						l.removeAttribute(t);
						return;
					case "boolean":
						var e = t.toLowerCase().slice(0, 5);
						if (e !== "data-" && e !== "aria-") {
							l.removeAttribute(t);
							return;
						}
				}
				l.setAttribute(t, "" + a);
			}
	}
	function ju(l, t, a) {
		if (a === null) l.removeAttribute(t);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					l.removeAttribute(t);
					return;
			}
			l.setAttribute(t, "" + a);
		}
	}
	function Ht(l, t, a, e) {
		if (e === null) l.removeAttribute(a);
		else {
			switch (typeof e) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					l.removeAttribute(a);
					return;
			}
			l.setAttributeNS(t, a, "" + e);
		}
	}
	function vt(l) {
		switch (typeof l) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return l;
			case "object":
				return l;
			default:
				return "";
		}
	}
	function Rf(l) {
		var t = l.type;
		return (
			(l = l.nodeName) &&
			l.toLowerCase() === "input" &&
			(t === "checkbox" || t === "radio")
		);
	}
	function uo(l, t, a) {
		var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
		if (
			!l.hasOwnProperty(t) &&
			typeof e < "u" &&
			typeof e.get == "function" &&
			typeof e.set == "function"
		) {
			var u = e.get,
				n = e.set;
			return (
				Object.defineProperty(l, t, {
					configurable: !0,
					get: function () {
						return u.call(this);
					},
					set: function (i) {
						((a = "" + i), n.call(this, i));
					},
				}),
				Object.defineProperty(l, t, { enumerable: e.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (i) {
						a = "" + i;
					},
					stopTracking: function () {
						((l._valueTracker = null), delete l[t]);
					},
				}
			);
		}
	}
	function ai(l) {
		if (!l._valueTracker) {
			var t = Rf(l) ? "checked" : "value";
			l._valueTracker = uo(l, t, "" + l[t]);
		}
	}
	function Bf(l) {
		if (!l) return !1;
		var t = l._valueTracker;
		if (!t) return !0;
		var a = t.getValue(),
			e = "";
		return (
			l && (e = Rf(l) ? (l.checked ? "true" : "false") : l.value),
			(l = e),
			l !== a ? (t.setValue(l), !0) : !1
		);
	}
	function Du(l) {
		if (
			((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
		)
			return null;
		try {
			return l.activeElement || l.body;
		} catch {
			return l.body;
		}
	}
	var no = /[\n"\\]/g;
	function yt(l) {
		return l.replace(no, function (t) {
			return "\\" + t.charCodeAt(0).toString(16) + " ";
		});
	}
	function ei(l, t, a, e, u, n, i, c) {
		((l.name = ""),
			i != null &&
			typeof i != "function" &&
			typeof i != "symbol" &&
			typeof i != "boolean"
				? (l.type = i)
				: l.removeAttribute("type"),
			t != null
				? i === "number"
					? ((t === 0 && l.value === "") || l.value != t) &&
						(l.value = "" + vt(t))
					: l.value !== "" + vt(t) && (l.value = "" + vt(t))
				: (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
			t != null
				? ui(l, i, vt(t))
				: a != null
					? ui(l, i, vt(a))
					: e != null && l.removeAttribute("value"),
			u == null && n != null && (l.defaultChecked = !!n),
			u != null &&
				(l.checked = u && typeof u != "function" && typeof u != "symbol"),
			c != null &&
			typeof c != "function" &&
			typeof c != "symbol" &&
			typeof c != "boolean"
				? (l.name = "" + vt(c))
				: l.removeAttribute("name"));
	}
	function qf(l, t, a, e, u, n, i, c) {
		if (
			(n != null &&
				typeof n != "function" &&
				typeof n != "symbol" &&
				typeof n != "boolean" &&
				(l.type = n),
			t != null || a != null)
		) {
			if (!((n !== "submit" && n !== "reset") || t != null)) {
				ai(l);
				return;
			}
			((a = a != null ? "" + vt(a) : ""),
				(t = t != null ? "" + vt(t) : a),
				c || t === l.value || (l.value = t),
				(l.defaultValue = t));
		}
		((e = e ?? u),
			(e = typeof e != "function" && typeof e != "symbol" && !!e),
			(l.checked = c ? l.checked : !!e),
			(l.defaultChecked = !!e),
			i != null &&
				typeof i != "function" &&
				typeof i != "symbol" &&
				typeof i != "boolean" &&
				(l.name = i),
			ai(l));
	}
	function ui(l, t, a) {
		(t === "number" && Du(l.ownerDocument) === l) ||
			l.defaultValue === "" + a ||
			(l.defaultValue = "" + a);
	}
	function $a(l, t, a, e) {
		if (((l = l.options), t)) {
			t = {};
			for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
			for (a = 0; a < l.length; a++)
				((u = t.hasOwnProperty("$" + l[a].value)),
					l[a].selected !== u && (l[a].selected = u),
					u && e && (l[a].defaultSelected = !0));
		} else {
			for (a = "" + vt(a), t = null, u = 0; u < l.length; u++) {
				if (l[u].value === a) {
					((l[u].selected = !0), e && (l[u].defaultSelected = !0));
					return;
				}
				t !== null || l[u].disabled || (t = l[u]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Yf(l, t, a) {
		if (
			t != null &&
			((t = "" + vt(t)), t !== l.value && (l.value = t), a == null)
		) {
			l.defaultValue !== t && (l.defaultValue = t);
			return;
		}
		l.defaultValue = a != null ? "" + vt(a) : "";
	}
	function Gf(l, t, a, e) {
		if (t == null) {
			if (e != null) {
				if (a != null) throw Error(d(92));
				if (at(e)) {
					if (1 < e.length) throw Error(d(93));
					e = e[0];
				}
				a = e;
			}
			(a == null && (a = ""), (t = a));
		}
		((a = vt(t)),
			(l.defaultValue = a),
			(e = l.textContent),
			e === a && e !== "" && e !== null && (l.value = e),
			ai(l));
	}
	function ka(l, t) {
		if (t) {
			var a = l.firstChild;
			if (a && a === l.lastChild && a.nodeType === 3) {
				a.nodeValue = t;
				return;
			}
		}
		l.textContent = t;
	}
	var io = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function Zf(l, t, a) {
		var e = t.indexOf("--") === 0;
		a == null || typeof a == "boolean" || a === ""
			? e
				? l.setProperty(t, "")
				: t === "float"
					? (l.cssFloat = "")
					: (l[t] = "")
			: e
				? l.setProperty(t, a)
				: typeof a != "number" || a === 0 || io.has(t)
					? t === "float"
						? (l.cssFloat = a)
						: (l[t] = ("" + a).trim())
					: (l[t] = a + "px");
	}
	function Xf(l, t, a) {
		if (t != null && typeof t != "object") throw Error(d(62));
		if (((l = l.style), a != null)) {
			for (var e in a)
				!a.hasOwnProperty(e) ||
					(t != null && t.hasOwnProperty(e)) ||
					(e.indexOf("--") === 0
						? l.setProperty(e, "")
						: e === "float"
							? (l.cssFloat = "")
							: (l[e] = ""));
			for (var u in t)
				((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && Zf(l, u, e));
		} else for (var n in t) t.hasOwnProperty(n) && Zf(l, n, t[n]);
	}
	function ni(l) {
		if (l.indexOf("-") === -1) return !1;
		switch (l) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var co = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		fo =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Cu(l) {
		return fo.test("" + l)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: l;
	}
	function Rt() {}
	var ii = null;
	function ci(l) {
		return (
			(l = l.target || l.srcElement || window),
			l.correspondingUseElement && (l = l.correspondingUseElement),
			l.nodeType === 3 ? l.parentNode : l
		);
	}
	var Fa = null,
		Ia = null;
	function Qf(l) {
		var t = Ja(l);
		if (t && (l = t.stateNode)) {
			var a = l[wl] || null;
			l: switch (((l = t.stateNode), t.type)) {
				case "input":
					if (
						(ei(
							l,
							a.value,
							a.defaultValue,
							a.defaultValue,
							a.checked,
							a.defaultChecked,
							a.type,
							a.name,
						),
						(t = a.name),
						a.type === "radio" && t != null)
					) {
						for (a = l; a.parentNode; ) a = a.parentNode;
						for (
							a = a.querySelectorAll(
								'input[name="' + yt("" + t) + '"][type="radio"]',
							),
								t = 0;
							t < a.length;
							t++
						) {
							var e = a[t];
							if (e !== l && e.form === l.form) {
								var u = e[wl] || null;
								if (!u) throw Error(d(90));
								ei(
									e,
									u.value,
									u.defaultValue,
									u.defaultValue,
									u.checked,
									u.defaultChecked,
									u.type,
									u.name,
								);
							}
						}
						for (t = 0; t < a.length; t++)
							((e = a[t]), e.form === l.form && Bf(e));
					}
					break l;
				case "textarea":
					Yf(l, a.value, a.defaultValue);
					break l;
				case "select":
					((t = a.value), t != null && $a(l, !!a.multiple, t, !1));
			}
		}
	}
	var fi = !1;
	function Vf(l, t, a) {
		if (fi) return l(t, a);
		fi = !0;
		try {
			var e = l(t);
			return e;
		} finally {
			if (
				((fi = !1),
				(Fa !== null || Ia !== null) &&
					(pn(), Fa && ((t = Fa), (l = Ia), (Ia = Fa = null), Qf(t), l)))
			)
				for (t = 0; t < l.length; t++) Qf(l[t]);
		}
	}
	function He(l, t) {
		var a = l.stateNode;
		if (a === null) return null;
		var e = a[wl] || null;
		if (e === null) return null;
		a = e[t];
		l: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				((e = !e.disabled) ||
					((l = l.type),
					(e = !(
						l === "button" ||
						l === "input" ||
						l === "select" ||
						l === "textarea"
					))),
					(l = !e));
				break l;
			default:
				l = !1;
		}
		if (l) return null;
		if (a && typeof a != "function") throw Error(d(231, t, typeof a));
		return a;
	}
	var Bt = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		si = !1;
	if (Bt)
		try {
			var Re = {};
			(Object.defineProperty(Re, "passive", {
				get: function () {
					si = !0;
				},
			}),
				window.addEventListener("test", Re, Re),
				window.removeEventListener("test", Re, Re));
		} catch {
			si = !1;
		}
	var ta = null,
		oi = null,
		Uu = null;
	function Lf() {
		if (Uu) return Uu;
		var l,
			t = oi,
			a = t.length,
			e,
			u = "value" in ta ? ta.value : ta.textContent,
			n = u.length;
		for (l = 0; l < a && t[l] === u[l]; l++);
		var i = a - l;
		for (e = 1; e <= i && t[a - e] === u[n - e]; e++);
		return (Uu = u.slice(l, 1 < e ? 1 - e : void 0));
	}
	function Hu(l) {
		var t = l.keyCode;
		return (
			"charCode" in l
				? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
				: (l = t),
			l === 10 && (l = 13),
			32 <= l || l === 13 ? l : 0
		);
	}
	function Ru() {
		return !0;
	}
	function Kf() {
		return !1;
	}
	function Wl(l) {
		function t(a, e, u, n, i) {
			((this._reactName = a),
				(this._targetInst = u),
				(this.type = e),
				(this.nativeEvent = n),
				(this.target = i),
				(this.currentTarget = null));
			for (var c in l)
				l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
			return (
				(this.isDefaultPrevented = (
					n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
				)
					? Ru
					: Kf),
				(this.isPropagationStopped = Kf),
				this
			);
		}
		return (
			D(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var a = this.nativeEvent;
					a &&
						(a.preventDefault
							? a.preventDefault()
							: typeof a.returnValue != "unknown" && (a.returnValue = !1),
						(this.isDefaultPrevented = Ru));
				},
				stopPropagation: function () {
					var a = this.nativeEvent;
					a &&
						(a.stopPropagation
							? a.stopPropagation()
							: typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
						(this.isPropagationStopped = Ru));
				},
				persist: function () {},
				isPersistent: Ru,
			}),
			t
		);
	}
	var Ma = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (l) {
				return l.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Bu = Wl(Ma),
		Be = D({}, Ma, { view: 0, detail: 0 }),
		so = Wl(Be),
		di,
		mi,
		qe,
		qu = D({}, Be, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: hi,
			button: 0,
			buttons: 0,
			relatedTarget: function (l) {
				return l.relatedTarget === void 0
					? l.fromElement === l.srcElement
						? l.toElement
						: l.fromElement
					: l.relatedTarget;
			},
			movementX: function (l) {
				return "movementX" in l
					? l.movementX
					: (l !== qe &&
							(qe && l.type === "mousemove"
								? ((di = l.screenX - qe.screenX), (mi = l.screenY - qe.screenY))
								: (mi = di = 0),
							(qe = l)),
						di);
			},
			movementY: function (l) {
				return "movementY" in l ? l.movementY : mi;
			},
		}),
		Jf = Wl(qu),
		oo = D({}, qu, { dataTransfer: 0 }),
		mo = Wl(oo),
		ro = D({}, Be, { relatedTarget: 0 }),
		ri = Wl(ro),
		ho = D({}, Ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		vo = Wl(ho),
		yo = D({}, Ma, {
			clipboardData: function (l) {
				return "clipboardData" in l ? l.clipboardData : window.clipboardData;
			},
		}),
		go = Wl(yo),
		So = D({}, Ma, { data: 0 }),
		wf = Wl(So),
		bo = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		po = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		_o = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function zo(l) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(l)
			: (l = _o[l])
				? !!t[l]
				: !1;
	}
	function hi() {
		return zo;
	}
	var Eo = D({}, Be, {
			key: function (l) {
				if (l.key) {
					var t = bo[l.key] || l.key;
					if (t !== "Unidentified") return t;
				}
				return l.type === "keypress"
					? ((l = Hu(l)), l === 13 ? "Enter" : String.fromCharCode(l))
					: l.type === "keydown" || l.type === "keyup"
						? po[l.keyCode] || "Unidentified"
						: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: hi,
			charCode: function (l) {
				return l.type === "keypress" ? Hu(l) : 0;
			},
			keyCode: function (l) {
				return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
			},
			which: function (l) {
				return l.type === "keypress"
					? Hu(l)
					: l.type === "keydown" || l.type === "keyup"
						? l.keyCode
						: 0;
			},
		}),
		To = Wl(Eo),
		Ao = D({}, qu, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Wf = Wl(Ao),
		xo = D({}, Be, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: hi,
		}),
		Mo = Wl(xo),
		Oo = D({}, Ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		No = Wl(Oo),
		jo = D({}, qu, {
			deltaX: function (l) {
				return "deltaX" in l
					? l.deltaX
					: "wheelDeltaX" in l
						? -l.wheelDeltaX
						: 0;
			},
			deltaY: function (l) {
				return "deltaY" in l
					? l.deltaY
					: "wheelDeltaY" in l
						? -l.wheelDeltaY
						: "wheelDelta" in l
							? -l.wheelDelta
							: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		Do = Wl(jo),
		Co = D({}, Ma, { newState: 0, oldState: 0 }),
		Uo = Wl(Co),
		Ho = [9, 13, 27, 32],
		vi = Bt && "CompositionEvent" in window,
		Ye = null;
	Bt && "documentMode" in document && (Ye = document.documentMode);
	var Ro = Bt && "TextEvent" in window && !Ye,
		$f = Bt && (!vi || (Ye && 8 < Ye && 11 >= Ye)),
		kf = " ",
		Ff = !1;
	function If(l, t) {
		switch (l) {
			case "keyup":
				return Ho.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function Pf(l) {
		return (
			(l = l.detail),
			typeof l == "object" && "data" in l ? l.data : null
		);
	}
	var Pa = !1;
	function Bo(l, t) {
		switch (l) {
			case "compositionend":
				return Pf(t);
			case "keypress":
				return t.which !== 32 ? null : ((Ff = !0), kf);
			case "textInput":
				return ((l = t.data), l === kf && Ff ? null : l);
			default:
				return null;
		}
	}
	function qo(l, t) {
		if (Pa)
			return l === "compositionend" || (!vi && If(l, t))
				? ((l = Lf()), (Uu = oi = ta = null), (Pa = !1), l)
				: null;
		switch (l) {
			case "paste":
				return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend":
				return $f && t.locale !== "ko" ? null : t.data;
			default:
				return null;
		}
	}
	var Yo = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function l0(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return t === "input" ? !!Yo[l.type] : t === "textarea";
	}
	function t0(l, t, a, e) {
		(Fa ? (Ia ? Ia.push(e) : (Ia = [e])) : (Fa = e),
			(t = Mn(t, "onChange")),
			0 < t.length &&
				((a = new Bu("onChange", "change", null, a, e)),
				l.push({ event: a, listeners: t })));
	}
	var Ge = null,
		Ze = null;
	function Go(l) {
		q1(l, 0);
	}
	function Yu(l) {
		var t = Ue(l);
		if (Bf(t)) return l;
	}
	function a0(l, t) {
		if (l === "change") return t;
	}
	var e0 = !1;
	if (Bt) {
		var yi;
		if (Bt) {
			var gi = "oninput" in document;
			if (!gi) {
				var u0 = document.createElement("div");
				(u0.setAttribute("oninput", "return;"),
					(gi = typeof u0.oninput == "function"));
			}
			yi = gi;
		} else yi = !1;
		e0 = yi && (!document.documentMode || 9 < document.documentMode);
	}
	function n0() {
		Ge && (Ge.detachEvent("onpropertychange", i0), (Ze = Ge = null));
	}
	function i0(l) {
		if (l.propertyName === "value" && Yu(Ze)) {
			var t = [];
			(t0(t, Ze, l, ci(l)), Vf(Go, t));
		}
	}
	function Zo(l, t, a) {
		l === "focusin"
			? (n0(), (Ge = t), (Ze = a), Ge.attachEvent("onpropertychange", i0))
			: l === "focusout" && n0();
	}
	function Xo(l) {
		if (l === "selectionchange" || l === "keyup" || l === "keydown")
			return Yu(Ze);
	}
	function Qo(l, t) {
		if (l === "click") return Yu(t);
	}
	function Vo(l, t) {
		if (l === "input" || l === "change") return Yu(t);
	}
	function Lo(l, t) {
		return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
	}
	var it = typeof Object.is == "function" ? Object.is : Lo;
	function Xe(l, t) {
		if (it(l, t)) return !0;
		if (
			typeof l != "object" ||
			l === null ||
			typeof t != "object" ||
			t === null
		)
			return !1;
		var a = Object.keys(l),
			e = Object.keys(t);
		if (a.length !== e.length) return !1;
		for (e = 0; e < a.length; e++) {
			var u = a[e];
			if (!Wn.call(t, u) || !it(l[u], t[u])) return !1;
		}
		return !0;
	}
	function c0(l) {
		for (; l && l.firstChild; ) l = l.firstChild;
		return l;
	}
	function f0(l, t) {
		var a = c0(l);
		l = 0;
		for (var e; a; ) {
			if (a.nodeType === 3) {
				if (((e = l + a.textContent.length), l <= t && e >= t))
					return { node: a, offset: t - l };
				l = e;
			}
			l: {
				for (; a; ) {
					if (a.nextSibling) {
						a = a.nextSibling;
						break l;
					}
					a = a.parentNode;
				}
				a = void 0;
			}
			a = c0(a);
		}
	}
	function s0(l, t) {
		return l && t
			? l === t
				? !0
				: l && l.nodeType === 3
					? !1
					: t && t.nodeType === 3
						? s0(l, t.parentNode)
						: "contains" in l
							? l.contains(t)
							: l.compareDocumentPosition
								? !!(l.compareDocumentPosition(t) & 16)
								: !1
			: !1;
	}
	function o0(l) {
		l =
			l != null &&
			l.ownerDocument != null &&
			l.ownerDocument.defaultView != null
				? l.ownerDocument.defaultView
				: window;
		for (var t = Du(l.document); t instanceof l.HTMLIFrameElement; ) {
			try {
				var a = typeof t.contentWindow.location.href == "string";
			} catch {
				a = !1;
			}
			if (a) l = t.contentWindow;
			else break;
			t = Du(l.document);
		}
		return t;
	}
	function Si(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return (
			t &&
			((t === "input" &&
				(l.type === "text" ||
					l.type === "search" ||
					l.type === "tel" ||
					l.type === "url" ||
					l.type === "password")) ||
				t === "textarea" ||
				l.contentEditable === "true")
		);
	}
	var Ko = Bt && "documentMode" in document && 11 >= document.documentMode,
		le = null,
		bi = null,
		Qe = null,
		pi = !1;
	function d0(l, t, a) {
		var e =
			a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
		pi ||
			le == null ||
			le !== Du(e) ||
			((e = le),
			"selectionStart" in e && Si(e)
				? (e = { start: e.selectionStart, end: e.selectionEnd })
				: ((e = (
						(e.ownerDocument && e.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(e = {
						anchorNode: e.anchorNode,
						anchorOffset: e.anchorOffset,
						focusNode: e.focusNode,
						focusOffset: e.focusOffset,
					})),
			(Qe && Xe(Qe, e)) ||
				((Qe = e),
				(e = Mn(bi, "onSelect")),
				0 < e.length &&
					((t = new Bu("onSelect", "select", null, t, a)),
					l.push({ event: t, listeners: e }),
					(t.target = le))));
	}
	function Oa(l, t) {
		var a = {};
		return (
			(a[l.toLowerCase()] = t.toLowerCase()),
			(a["Webkit" + l] = "webkit" + t),
			(a["Moz" + l] = "moz" + t),
			a
		);
	}
	var te = {
			animationend: Oa("Animation", "AnimationEnd"),
			animationiteration: Oa("Animation", "AnimationIteration"),
			animationstart: Oa("Animation", "AnimationStart"),
			transitionrun: Oa("Transition", "TransitionRun"),
			transitionstart: Oa("Transition", "TransitionStart"),
			transitioncancel: Oa("Transition", "TransitionCancel"),
			transitionend: Oa("Transition", "TransitionEnd"),
		},
		_i = {},
		m0 = {};
	Bt &&
		((m0 = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete te.animationend.animation,
			delete te.animationiteration.animation,
			delete te.animationstart.animation),
		"TransitionEvent" in window || delete te.transitionend.transition);
	function Na(l) {
		if (_i[l]) return _i[l];
		if (!te[l]) return l;
		var t = te[l],
			a;
		for (a in t) if (t.hasOwnProperty(a) && a in m0) return (_i[l] = t[a]);
		return l;
	}
	var r0 = Na("animationend"),
		h0 = Na("animationiteration"),
		v0 = Na("animationstart"),
		Jo = Na("transitionrun"),
		wo = Na("transitionstart"),
		Wo = Na("transitioncancel"),
		y0 = Na("transitionend"),
		g0 = new Map(),
		zi =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	zi.push("scrollEnd");
	function At(l, t) {
		(g0.set(l, t), xa(t, [l]));
	}
	var Gu =
			typeof reportError == "function"
				? reportError
				: function (l) {
						if (
							typeof window == "object" &&
							typeof window.ErrorEvent == "function"
						) {
							var t = new window.ErrorEvent("error", {
								bubbles: !0,
								cancelable: !0,
								message:
									typeof l == "object" &&
									l !== null &&
									typeof l.message == "string"
										? String(l.message)
										: String(l),
								error: l,
							});
							if (!window.dispatchEvent(t)) return;
						} else if (
							typeof process == "object" &&
							typeof process.emit == "function"
						) {
							process.emit("uncaughtException", l);
							return;
						}
						console.error(l);
					},
		gt = [],
		ae = 0,
		Ei = 0;
	function Zu() {
		for (var l = ae, t = (Ei = ae = 0); t < l; ) {
			var a = gt[t];
			gt[t++] = null;
			var e = gt[t];
			gt[t++] = null;
			var u = gt[t];
			gt[t++] = null;
			var n = gt[t];
			if (((gt[t++] = null), e !== null && u !== null)) {
				var i = e.pending;
				(i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
					(e.pending = u));
			}
			n !== 0 && S0(a, u, n);
		}
	}
	function Xu(l, t, a, e) {
		((gt[ae++] = l),
			(gt[ae++] = t),
			(gt[ae++] = a),
			(gt[ae++] = e),
			(Ei |= e),
			(l.lanes |= e),
			(l = l.alternate),
			l !== null && (l.lanes |= e));
	}
	function Ti(l, t, a, e) {
		return (Xu(l, t, a, e), Qu(l));
	}
	function ja(l, t) {
		return (Xu(l, null, null, t), Qu(l));
	}
	function S0(l, t, a) {
		l.lanes |= a;
		var e = l.alternate;
		e !== null && (e.lanes |= a);
		for (var u = !1, n = l.return; n !== null; )
			((n.childLanes |= a),
				(e = n.alternate),
				e !== null && (e.childLanes |= a),
				n.tag === 22 &&
					((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
				(l = n),
				(n = n.return));
		return l.tag === 3
			? ((n = l.stateNode),
				u &&
					t !== null &&
					((u = 31 - nt(a)),
					(l = n.hiddenUpdates),
					(e = l[u]),
					e === null ? (l[u] = [t]) : e.push(t),
					(t.lane = a | 536870912)),
				n)
			: null;
	}
	function Qu(l) {
		if (50 < ou) throw ((ou = 0), (Uc = null), Error(d(185)));
		for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
		return l.tag === 3 ? l.stateNode : null;
	}
	var ee = {};
	function $o(l, t, a, e) {
		((this.tag = l),
			(this.key = a),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = e),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null));
	}
	function ct(l, t, a, e) {
		return new $o(l, t, a, e);
	}
	function Ai(l) {
		return ((l = l.prototype), !(!l || !l.isReactComponent));
	}
	function qt(l, t) {
		var a = l.alternate;
		return (
			a === null
				? ((a = ct(l.tag, t, l.key, l.mode)),
					(a.elementType = l.elementType),
					(a.type = l.type),
					(a.stateNode = l.stateNode),
					(a.alternate = l),
					(l.alternate = a))
				: ((a.pendingProps = t),
					(a.type = l.type),
					(a.flags = 0),
					(a.subtreeFlags = 0),
					(a.deletions = null)),
			(a.flags = l.flags & 65011712),
			(a.childLanes = l.childLanes),
			(a.lanes = l.lanes),
			(a.child = l.child),
			(a.memoizedProps = l.memoizedProps),
			(a.memoizedState = l.memoizedState),
			(a.updateQueue = l.updateQueue),
			(t = l.dependencies),
			(a.dependencies =
				t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(a.sibling = l.sibling),
			(a.index = l.index),
			(a.ref = l.ref),
			(a.refCleanup = l.refCleanup),
			a
		);
	}
	function b0(l, t) {
		l.flags &= 65011714;
		var a = l.alternate;
		return (
			a === null
				? ((l.childLanes = 0),
					(l.lanes = t),
					(l.child = null),
					(l.subtreeFlags = 0),
					(l.memoizedProps = null),
					(l.memoizedState = null),
					(l.updateQueue = null),
					(l.dependencies = null),
					(l.stateNode = null))
				: ((l.childLanes = a.childLanes),
					(l.lanes = a.lanes),
					(l.child = a.child),
					(l.subtreeFlags = 0),
					(l.deletions = null),
					(l.memoizedProps = a.memoizedProps),
					(l.memoizedState = a.memoizedState),
					(l.updateQueue = a.updateQueue),
					(l.type = a.type),
					(t = a.dependencies),
					(l.dependencies =
						t === null
							? null
							: { lanes: t.lanes, firstContext: t.firstContext })),
			l
		);
	}
	function Vu(l, t, a, e, u, n) {
		var i = 0;
		if (((e = l), typeof l == "function")) Ai(l) && (i = 1);
		else if (typeof l == "string")
			i = lm(l, a, C.current)
				? 26
				: l === "html" || l === "head" || l === "body"
					? 27
					: 5;
		else
			l: switch (l) {
				case ht:
					return (
						(l = ct(31, a, t, u)),
						(l.elementType = ht),
						(l.lanes = n),
						l
					);
				case cl:
					return Da(a.children, u, n, t);
				case Vl:
					((i = 8), (u |= 24));
					break;
				case Ll:
					return (
						(l = ct(12, a, t, u | 2)),
						(l.elementType = Ll),
						(l.lanes = n),
						l
					);
				case Rl:
					return (
						(l = ct(13, a, t, u)),
						(l.elementType = Rl),
						(l.lanes = n),
						l
					);
				case El:
					return (
						(l = ct(19, a, t, u)),
						(l.elementType = El),
						(l.lanes = n),
						l
					);
				default:
					if (typeof l == "object" && l !== null)
						switch (l.$$typeof) {
							case Cl:
								i = 10;
								break l;
							case rt:
								i = 9;
								break l;
							case Nl:
								i = 11;
								break l;
							case J:
								i = 14;
								break l;
							case Xl:
								((i = 16), (e = null));
								break l;
						}
					((i = 29),
						(a = Error(d(130, l === null ? "null" : typeof l, ""))),
						(e = null));
			}
		return (
			(t = ct(i, a, t, u)),
			(t.elementType = l),
			(t.type = e),
			(t.lanes = n),
			t
		);
	}
	function Da(l, t, a, e) {
		return ((l = ct(7, l, e, t)), (l.lanes = a), l);
	}
	function xi(l, t, a) {
		return ((l = ct(6, l, null, t)), (l.lanes = a), l);
	}
	function p0(l) {
		var t = ct(18, null, null, 0);
		return ((t.stateNode = l), t);
	}
	function Mi(l, t, a) {
		return (
			(t = ct(4, l.children !== null ? l.children : [], l.key, t)),
			(t.lanes = a),
			(t.stateNode = {
				containerInfo: l.containerInfo,
				pendingChildren: null,
				implementation: l.implementation,
			}),
			t
		);
	}
	var _0 = new WeakMap();
	function St(l, t) {
		if (typeof l == "object" && l !== null) {
			var a = _0.get(l);
			return a !== void 0
				? a
				: ((t = { value: l, source: t, stack: pf(t) }), _0.set(l, t), t);
		}
		return { value: l, source: t, stack: pf(t) };
	}
	var ue = [],
		ne = 0,
		Lu = null,
		Ve = 0,
		bt = [],
		pt = 0,
		aa = null,
		Nt = 1,
		jt = "";
	function Yt(l, t) {
		((ue[ne++] = Ve), (ue[ne++] = Lu), (Lu = l), (Ve = t));
	}
	function z0(l, t, a) {
		((bt[pt++] = Nt), (bt[pt++] = jt), (bt[pt++] = aa), (aa = l));
		var e = Nt;
		l = jt;
		var u = 32 - nt(e) - 1;
		((e &= ~(1 << u)), (a += 1));
		var n = 32 - nt(t) + u;
		if (30 < n) {
			var i = u - (u % 5);
			((n = (e & ((1 << i) - 1)).toString(32)),
				(e >>= i),
				(u -= i),
				(Nt = (1 << (32 - nt(t) + u)) | (a << u) | e),
				(jt = n + l));
		} else ((Nt = (1 << n) | (a << u) | e), (jt = l));
	}
	function Oi(l) {
		l.return !== null && (Yt(l, 1), z0(l, 1, 0));
	}
	function Ni(l) {
		for (; l === Lu; )
			((Lu = ue[--ne]), (ue[ne] = null), (Ve = ue[--ne]), (ue[ne] = null));
		for (; l === aa; )
			((aa = bt[--pt]),
				(bt[pt] = null),
				(jt = bt[--pt]),
				(bt[pt] = null),
				(Nt = bt[--pt]),
				(bt[pt] = null));
	}
	function E0(l, t) {
		((bt[pt++] = Nt),
			(bt[pt++] = jt),
			(bt[pt++] = aa),
			(Nt = t.id),
			(jt = t.overflow),
			(aa = l));
	}
	var ql = null,
		hl = null,
		I = !1,
		ea = null,
		_t = !1,
		ji = Error(d(519));
	function ua(l) {
		var t = Error(
			d(
				418,
				1 < arguments.length && arguments[1] !== void 0 && arguments[1]
					? "text"
					: "HTML",
				"",
			),
		);
		throw (Le(St(t, l)), ji);
	}
	function T0(l) {
		var t = l.stateNode,
			a = l.type,
			e = l.memoizedProps;
		switch (((t[Bl] = l), (t[wl] = e), a)) {
			case "dialog":
				($("cancel", t), $("close", t));
				break;
			case "iframe":
			case "object":
			case "embed":
				$("load", t);
				break;
			case "video":
			case "audio":
				for (a = 0; a < mu.length; a++) $(mu[a], t);
				break;
			case "source":
				$("error", t);
				break;
			case "img":
			case "image":
			case "link":
				($("error", t), $("load", t));
				break;
			case "details":
				$("toggle", t);
				break;
			case "input":
				($("invalid", t),
					qf(
						t,
						e.value,
						e.defaultValue,
						e.checked,
						e.defaultChecked,
						e.type,
						e.name,
						!0,
					));
				break;
			case "select":
				$("invalid", t);
				break;
			case "textarea":
				($("invalid", t), Gf(t, e.value, e.defaultValue, e.children));
		}
		((a = e.children),
			(typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
			t.textContent === "" + a ||
			e.suppressHydrationWarning === !0 ||
			X1(t.textContent, a)
				? (e.popover != null && ($("beforetoggle", t), $("toggle", t)),
					e.onScroll != null && $("scroll", t),
					e.onScrollEnd != null && $("scrollend", t),
					e.onClick != null && (t.onclick = Rt),
					(t = !0))
				: (t = !1),
			t || ua(l, !0));
	}
	function A0(l) {
		for (ql = l.return; ql; )
			switch (ql.tag) {
				case 5:
				case 31:
				case 13:
					_t = !1;
					return;
				case 27:
				case 3:
					_t = !0;
					return;
				default:
					ql = ql.return;
			}
	}
	function ie(l) {
		if (l !== ql) return !1;
		if (!I) return (A0(l), (I = !0), !1);
		var t = l.tag,
			a;
		if (
			((a = t !== 3 && t !== 27) &&
				((a = t === 5) &&
					((a = l.type),
					(a =
						!(a !== "form" && a !== "button") || Wc(l.type, l.memoizedProps))),
				(a = !a)),
			a && hl && ua(l),
			A0(l),
			t === 13)
		) {
			if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
				throw Error(d(317));
			hl = k1(l);
		} else if (t === 31) {
			if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
				throw Error(d(317));
			hl = k1(l);
		} else
			t === 27
				? ((t = hl), Sa(l.type) ? ((l = Pc), (Pc = null), (hl = l)) : (hl = t))
				: (hl = ql ? Et(l.stateNode.nextSibling) : null);
		return !0;
	}
	function Ca() {
		((hl = ql = null), (I = !1));
	}
	function Di() {
		var l = ea;
		return (
			l !== null &&
				(Il === null ? (Il = l) : Il.push.apply(Il, l), (ea = null)),
			l
		);
	}
	function Le(l) {
		ea === null ? (ea = [l]) : ea.push(l);
	}
	var Ci = o(null),
		Ua = null,
		Gt = null;
	function na(l, t, a) {
		(O(Ci, t._currentValue), (t._currentValue = a));
	}
	function Zt(l) {
		((l._currentValue = Ci.current), E(Ci));
	}
	function Ui(l, t, a) {
		for (; l !== null; ) {
			var e = l.alternate;
			if (
				((l.childLanes & t) !== t
					? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
					: e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
				l === a)
			)
				break;
			l = l.return;
		}
	}
	function Hi(l, t, a, e) {
		var u = l.child;
		for (u !== null && (u.return = l); u !== null; ) {
			var n = u.dependencies;
			if (n !== null) {
				var i = u.child;
				n = n.firstContext;
				l: for (; n !== null; ) {
					var c = n;
					n = u;
					for (var f = 0; f < t.length; f++)
						if (c.context === t[f]) {
							((n.lanes |= a),
								(c = n.alternate),
								c !== null && (c.lanes |= a),
								Ui(n.return, a, l),
								e || (i = null));
							break l;
						}
					n = c.next;
				}
			} else if (u.tag === 18) {
				if (((i = u.return), i === null)) throw Error(d(341));
				((i.lanes |= a),
					(n = i.alternate),
					n !== null && (n.lanes |= a),
					Ui(i, a, l),
					(i = null));
			} else i = u.child;
			if (i !== null) i.return = u;
			else
				for (i = u; i !== null; ) {
					if (i === l) {
						i = null;
						break;
					}
					if (((u = i.sibling), u !== null)) {
						((u.return = i.return), (i = u));
						break;
					}
					i = i.return;
				}
			u = i;
		}
	}
	function ce(l, t, a, e) {
		l = null;
		for (var u = t, n = !1; u !== null; ) {
			if (!n) {
				if ((u.flags & 524288) !== 0) n = !0;
				else if ((u.flags & 262144) !== 0) break;
			}
			if (u.tag === 10) {
				var i = u.alternate;
				if (i === null) throw Error(d(387));
				if (((i = i.memoizedProps), i !== null)) {
					var c = u.type;
					it(u.pendingProps.value, i.value) ||
						(l !== null ? l.push(c) : (l = [c]));
				}
			} else if (u === el.current) {
				if (((i = u.alternate), i === null)) throw Error(d(387));
				i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
					(l !== null ? l.push(gu) : (l = [gu]));
			}
			u = u.return;
		}
		(l !== null && Hi(t, l, a, e), (t.flags |= 262144));
	}
	function Ku(l) {
		for (l = l.firstContext; l !== null; ) {
			if (!it(l.context._currentValue, l.memoizedValue)) return !0;
			l = l.next;
		}
		return !1;
	}
	function Ha(l) {
		((Ua = l),
			(Gt = null),
			(l = l.dependencies),
			l !== null && (l.firstContext = null));
	}
	function Yl(l) {
		return x0(Ua, l);
	}
	function Ju(l, t) {
		return (Ua === null && Ha(l), x0(l, t));
	}
	function x0(l, t) {
		var a = t._currentValue;
		if (((t = { context: t, memoizedValue: a, next: null }), Gt === null)) {
			if (l === null) throw Error(d(308));
			((Gt = t),
				(l.dependencies = { lanes: 0, firstContext: t }),
				(l.flags |= 524288));
		} else Gt = Gt.next = t;
		return a;
	}
	var ko =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var l = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (a, e) {
									l.push(e);
								},
							});
						this.abort = function () {
							((t.aborted = !0),
								l.forEach(function (a) {
									return a();
								}));
						};
					},
		Fo = y.unstable_scheduleCallback,
		Io = y.unstable_NormalPriority,
		Tl = {
			$$typeof: Cl,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Ri() {
		return { controller: new ko(), data: new Map(), refCount: 0 };
	}
	function Ke(l) {
		(l.refCount--,
			l.refCount === 0 &&
				Fo(Io, function () {
					l.controller.abort();
				}));
	}
	var Je = null,
		Bi = 0,
		fe = 0,
		se = null;
	function Po(l, t) {
		if (Je === null) {
			var a = (Je = []);
			((Bi = 0),
				(fe = Gc()),
				(se = {
					status: "pending",
					value: void 0,
					then: function (e) {
						a.push(e);
					},
				}));
		}
		return (Bi++, t.then(M0, M0), t);
	}
	function M0() {
		if (--Bi === 0 && Je !== null) {
			se !== null && (se.status = "fulfilled");
			var l = Je;
			((Je = null), (fe = 0), (se = null));
			for (var t = 0; t < l.length; t++) (0, l[t])();
		}
	}
	function ld(l, t) {
		var a = [],
			e = {
				status: "pending",
				value: null,
				reason: null,
				then: function (u) {
					a.push(u);
				},
			};
		return (
			l.then(
				function () {
					((e.status = "fulfilled"), (e.value = t));
					for (var u = 0; u < a.length; u++) (0, a[u])(t);
				},
				function (u) {
					for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
						(0, a[u])(void 0);
				},
			),
			e
		);
	}
	var O0 = p.S;
	p.S = function (l, t) {
		((d1 = et()),
			typeof t == "object" &&
				t !== null &&
				typeof t.then == "function" &&
				Po(l, t),
			O0 !== null && O0(l, t));
	};
	var Ra = o(null);
	function qi() {
		var l = Ra.current;
		return l !== null ? l : rl.pooledCache;
	}
	function wu(l, t) {
		t === null ? O(Ra, Ra.current) : O(Ra, t.pool);
	}
	function N0() {
		var l = qi();
		return l === null ? null : { parent: Tl._currentValue, pool: l };
	}
	var oe = Error(d(460)),
		Yi = Error(d(474)),
		Wu = Error(d(542)),
		$u = { then: function () {} };
	function j0(l) {
		return ((l = l.status), l === "fulfilled" || l === "rejected");
	}
	function D0(l, t, a) {
		switch (
			((a = l[a]),
			a === void 0 ? l.push(t) : a !== t && (t.then(Rt, Rt), (t = a)),
			t.status)
		) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw ((l = t.reason), U0(l), l);
			default:
				if (typeof t.status == "string") t.then(Rt, Rt);
				else {
					if (((l = rl), l !== null && 100 < l.shellSuspendCounter))
						throw Error(d(482));
					((l = t),
						(l.status = "pending"),
						l.then(
							function (e) {
								if (t.status === "pending") {
									var u = t;
									((u.status = "fulfilled"), (u.value = e));
								}
							},
							function (e) {
								if (t.status === "pending") {
									var u = t;
									((u.status = "rejected"), (u.reason = e));
								}
							},
						));
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw ((l = t.reason), U0(l), l);
				}
				throw ((qa = t), oe);
		}
	}
	function Ba(l) {
		try {
			var t = l._init;
			return t(l._payload);
		} catch (a) {
			throw a !== null && typeof a == "object" && typeof a.then == "function"
				? ((qa = a), oe)
				: a;
		}
	}
	var qa = null;
	function C0() {
		if (qa === null) throw Error(d(459));
		var l = qa;
		return ((qa = null), l);
	}
	function U0(l) {
		if (l === oe || l === Wu) throw Error(d(483));
	}
	var de = null,
		we = 0;
	function ku(l) {
		var t = we;
		return ((we += 1), de === null && (de = []), D0(de, l, t));
	}
	function We(l, t) {
		((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
	}
	function Fu(l, t) {
		throw t.$$typeof === X
			? Error(d(525))
			: ((l = Object.prototype.toString.call(t)),
				Error(
					d(
						31,
						l === "[object Object]"
							? "object with keys {" + Object.keys(t).join(", ") + "}"
							: l,
					),
				));
	}
	function H0(l) {
		function t(m, s) {
			if (l) {
				var h = m.deletions;
				h === null ? ((m.deletions = [s]), (m.flags |= 16)) : h.push(s);
			}
		}
		function a(m, s) {
			if (!l) return null;
			for (; s !== null; ) (t(m, s), (s = s.sibling));
			return null;
		}
		function e(m) {
			for (var s = new Map(); m !== null; )
				(m.key !== null ? s.set(m.key, m) : s.set(m.index, m), (m = m.sibling));
			return s;
		}
		function u(m, s) {
			return ((m = qt(m, s)), (m.index = 0), (m.sibling = null), m);
		}
		function n(m, s, h) {
			return (
				(m.index = h),
				l
					? ((h = m.alternate),
						h !== null
							? ((h = h.index), h < s ? ((m.flags |= 67108866), s) : h)
							: ((m.flags |= 67108866), s))
					: ((m.flags |= 1048576), s)
			);
		}
		function i(m) {
			return (l && m.alternate === null && (m.flags |= 67108866), m);
		}
		function c(m, s, h, _) {
			return s === null || s.tag !== 6
				? ((s = xi(h, m.mode, _)), (s.return = m), s)
				: ((s = u(s, h)), (s.return = m), s);
		}
		function f(m, s, h, _) {
			var R = h.type;
			return R === cl
				? b(m, s, h.props.children, _, h.key)
				: s !== null &&
					  (s.elementType === R ||
							(typeof R == "object" &&
								R !== null &&
								R.$$typeof === Xl &&
								Ba(R) === s.type))
					? ((s = u(s, h.props)), We(s, h), (s.return = m), s)
					: ((s = Vu(h.type, h.key, h.props, null, m.mode, _)),
						We(s, h),
						(s.return = m),
						s);
		}
		function v(m, s, h, _) {
			return s === null ||
				s.tag !== 4 ||
				s.stateNode.containerInfo !== h.containerInfo ||
				s.stateNode.implementation !== h.implementation
				? ((s = Mi(h, m.mode, _)), (s.return = m), s)
				: ((s = u(s, h.children || [])), (s.return = m), s);
		}
		function b(m, s, h, _, R) {
			return s === null || s.tag !== 7
				? ((s = Da(h, m.mode, _, R)), (s.return = m), s)
				: ((s = u(s, h)), (s.return = m), s);
		}
		function z(m, s, h) {
			if (
				(typeof s == "string" && s !== "") ||
				typeof s == "number" ||
				typeof s == "bigint"
			)
				return ((s = xi("" + s, m.mode, h)), (s.return = m), s);
			if (typeof s == "object" && s !== null) {
				switch (s.$$typeof) {
					case zl:
						return (
							(h = Vu(s.type, s.key, s.props, null, m.mode, h)),
							We(h, s),
							(h.return = m),
							h
						);
					case Ol:
						return ((s = Mi(s, m.mode, h)), (s.return = m), s);
					case Xl:
						return ((s = Ba(s)), z(m, s, h));
				}
				if (at(s) || P(s))
					return ((s = Da(s, m.mode, h, null)), (s.return = m), s);
				if (typeof s.then == "function") return z(m, ku(s), h);
				if (s.$$typeof === Cl) return z(m, Ju(m, s), h);
				Fu(m, s);
			}
			return null;
		}
		function g(m, s, h, _) {
			var R = s !== null ? s.key : null;
			if (
				(typeof h == "string" && h !== "") ||
				typeof h == "number" ||
				typeof h == "bigint"
			)
				return R !== null ? null : c(m, s, "" + h, _);
			if (typeof h == "object" && h !== null) {
				switch (h.$$typeof) {
					case zl:
						return h.key === R ? f(m, s, h, _) : null;
					case Ol:
						return h.key === R ? v(m, s, h, _) : null;
					case Xl:
						return ((h = Ba(h)), g(m, s, h, _));
				}
				if (at(h) || P(h)) return R !== null ? null : b(m, s, h, _, null);
				if (typeof h.then == "function") return g(m, s, ku(h), _);
				if (h.$$typeof === Cl) return g(m, s, Ju(m, h), _);
				Fu(m, h);
			}
			return null;
		}
		function S(m, s, h, _, R) {
			if (
				(typeof _ == "string" && _ !== "") ||
				typeof _ == "number" ||
				typeof _ == "bigint"
			)
				return ((m = m.get(h) || null), c(s, m, "" + _, R));
			if (typeof _ == "object" && _ !== null) {
				switch (_.$$typeof) {
					case zl:
						return (
							(m = m.get(_.key === null ? h : _.key) || null),
							f(s, m, _, R)
						);
					case Ol:
						return (
							(m = m.get(_.key === null ? h : _.key) || null),
							v(s, m, _, R)
						);
					case Xl:
						return ((_ = Ba(_)), S(m, s, h, _, R));
				}
				if (at(_) || P(_)) return ((m = m.get(h) || null), b(s, m, _, R, null));
				if (typeof _.then == "function") return S(m, s, h, ku(_), R);
				if (_.$$typeof === Cl) return S(m, s, h, Ju(s, _), R);
				Fu(s, _);
			}
			return null;
		}
		function N(m, s, h, _) {
			for (
				var R = null, ll = null, U = s, K = (s = 0), F = null;
				U !== null && K < h.length;
				K++
			) {
				U.index > K ? ((F = U), (U = null)) : (F = U.sibling);
				var tl = g(m, U, h[K], _);
				if (tl === null) {
					U === null && (U = F);
					break;
				}
				(l && U && tl.alternate === null && t(m, U),
					(s = n(tl, s, K)),
					ll === null ? (R = tl) : (ll.sibling = tl),
					(ll = tl),
					(U = F));
			}
			if (K === h.length) return (a(m, U), I && Yt(m, K), R);
			if (U === null) {
				for (; K < h.length; K++)
					((U = z(m, h[K], _)),
						U !== null &&
							((s = n(U, s, K)),
							ll === null ? (R = U) : (ll.sibling = U),
							(ll = U)));
				return (I && Yt(m, K), R);
			}
			for (U = e(U); K < h.length; K++)
				((F = S(U, m, K, h[K], _)),
					F !== null &&
						(l && F.alternate !== null && U.delete(F.key === null ? K : F.key),
						(s = n(F, s, K)),
						ll === null ? (R = F) : (ll.sibling = F),
						(ll = F)));
			return (
				l &&
					U.forEach(function (Ea) {
						return t(m, Ea);
					}),
				I && Yt(m, K),
				R
			);
		}
		function B(m, s, h, _) {
			if (h == null) throw Error(d(151));
			for (
				var R = null, ll = null, U = s, K = (s = 0), F = null, tl = h.next();
				U !== null && !tl.done;
				K++, tl = h.next()
			) {
				U.index > K ? ((F = U), (U = null)) : (F = U.sibling);
				var Ea = g(m, U, tl.value, _);
				if (Ea === null) {
					U === null && (U = F);
					break;
				}
				(l && U && Ea.alternate === null && t(m, U),
					(s = n(Ea, s, K)),
					ll === null ? (R = Ea) : (ll.sibling = Ea),
					(ll = Ea),
					(U = F));
			}
			if (tl.done) return (a(m, U), I && Yt(m, K), R);
			if (U === null) {
				for (; !tl.done; K++, tl = h.next())
					((tl = z(m, tl.value, _)),
						tl !== null &&
							((s = n(tl, s, K)),
							ll === null ? (R = tl) : (ll.sibling = tl),
							(ll = tl)));
				return (I && Yt(m, K), R);
			}
			for (U = e(U); !tl.done; K++, tl = h.next())
				((tl = S(U, m, K, tl.value, _)),
					tl !== null &&
						(l &&
							tl.alternate !== null &&
							U.delete(tl.key === null ? K : tl.key),
						(s = n(tl, s, K)),
						ll === null ? (R = tl) : (ll.sibling = tl),
						(ll = tl)));
			return (
				l &&
					U.forEach(function (dm) {
						return t(m, dm);
					}),
				I && Yt(m, K),
				R
			);
		}
		function dl(m, s, h, _) {
			if (
				(typeof h == "object" &&
					h !== null &&
					h.type === cl &&
					h.key === null &&
					(h = h.props.children),
				typeof h == "object" && h !== null)
			) {
				switch (h.$$typeof) {
					case zl:
						l: {
							for (var R = h.key; s !== null; ) {
								if (s.key === R) {
									if (((R = h.type), R === cl)) {
										if (s.tag === 7) {
											(a(m, s.sibling),
												(_ = u(s, h.props.children)),
												(_.return = m),
												(m = _));
											break l;
										}
									} else if (
										s.elementType === R ||
										(typeof R == "object" &&
											R !== null &&
											R.$$typeof === Xl &&
											Ba(R) === s.type)
									) {
										(a(m, s.sibling),
											(_ = u(s, h.props)),
											We(_, h),
											(_.return = m),
											(m = _));
										break l;
									}
									a(m, s);
									break;
								} else t(m, s);
								s = s.sibling;
							}
							h.type === cl
								? ((_ = Da(h.props.children, m.mode, _, h.key)),
									(_.return = m),
									(m = _))
								: ((_ = Vu(h.type, h.key, h.props, null, m.mode, _)),
									We(_, h),
									(_.return = m),
									(m = _));
						}
						return i(m);
					case Ol:
						l: {
							for (R = h.key; s !== null; ) {
								if (s.key === R)
									if (
										s.tag === 4 &&
										s.stateNode.containerInfo === h.containerInfo &&
										s.stateNode.implementation === h.implementation
									) {
										(a(m, s.sibling),
											(_ = u(s, h.children || [])),
											(_.return = m),
											(m = _));
										break l;
									} else {
										a(m, s);
										break;
									}
								else t(m, s);
								s = s.sibling;
							}
							((_ = Mi(h, m.mode, _)), (_.return = m), (m = _));
						}
						return i(m);
					case Xl:
						return ((h = Ba(h)), dl(m, s, h, _));
				}
				if (at(h)) return N(m, s, h, _);
				if (P(h)) {
					if (((R = P(h)), typeof R != "function")) throw Error(d(150));
					return ((h = R.call(h)), B(m, s, h, _));
				}
				if (typeof h.then == "function") return dl(m, s, ku(h), _);
				if (h.$$typeof === Cl) return dl(m, s, Ju(m, h), _);
				Fu(m, h);
			}
			return (typeof h == "string" && h !== "") ||
				typeof h == "number" ||
				typeof h == "bigint"
				? ((h = "" + h),
					s !== null && s.tag === 6
						? (a(m, s.sibling), (_ = u(s, h)), (_.return = m), (m = _))
						: (a(m, s), (_ = xi(h, m.mode, _)), (_.return = m), (m = _)),
					i(m))
				: a(m, s);
		}
		return function (m, s, h, _) {
			try {
				we = 0;
				var R = dl(m, s, h, _);
				return ((de = null), R);
			} catch (U) {
				if (U === oe || U === Wu) throw U;
				var ll = ct(29, U, null, m.mode);
				return ((ll.lanes = _), (ll.return = m), ll);
			} finally {
			}
		};
	}
	var Ya = H0(!0),
		R0 = H0(!1),
		ia = !1;
	function Gi(l) {
		l.updateQueue = {
			baseState: l.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function Zi(l, t) {
		((l = l.updateQueue),
			t.updateQueue === l &&
				(t.updateQueue = {
					baseState: l.baseState,
					firstBaseUpdate: l.firstBaseUpdate,
					lastBaseUpdate: l.lastBaseUpdate,
					shared: l.shared,
					callbacks: null,
				}));
	}
	function ca(l) {
		return { lane: l, tag: 0, payload: null, callback: null, next: null };
	}
	function fa(l, t, a) {
		var e = l.updateQueue;
		if (e === null) return null;
		if (((e = e.shared), (al & 2) !== 0)) {
			var u = e.pending;
			return (
				u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
				(e.pending = t),
				(t = Qu(l)),
				S0(l, null, a),
				t
			);
		}
		return (Xu(l, e, t, a), Qu(l));
	}
	function $e(l, t, a) {
		if (
			((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
		) {
			var e = t.lanes;
			((e &= l.pendingLanes), (a |= e), (t.lanes = a), xf(l, a));
		}
	}
	function Xi(l, t) {
		var a = l.updateQueue,
			e = l.alternate;
		if (e !== null && ((e = e.updateQueue), a === e)) {
			var u = null,
				n = null;
			if (((a = a.firstBaseUpdate), a !== null)) {
				do {
					var i = {
						lane: a.lane,
						tag: a.tag,
						payload: a.payload,
						callback: null,
						next: null,
					};
					(n === null ? (u = n = i) : (n = n.next = i), (a = a.next));
				} while (a !== null);
				n === null ? (u = n = t) : (n = n.next = t);
			} else u = n = t;
			((a = {
				baseState: e.baseState,
				firstBaseUpdate: u,
				lastBaseUpdate: n,
				shared: e.shared,
				callbacks: e.callbacks,
			}),
				(l.updateQueue = a));
			return;
		}
		((l = a.lastBaseUpdate),
			l === null ? (a.firstBaseUpdate = t) : (l.next = t),
			(a.lastBaseUpdate = t));
	}
	var Qi = !1;
	function ke() {
		if (Qi) {
			var l = se;
			if (l !== null) throw l;
		}
	}
	function Fe(l, t, a, e) {
		Qi = !1;
		var u = l.updateQueue;
		ia = !1;
		var n = u.firstBaseUpdate,
			i = u.lastBaseUpdate,
			c = u.shared.pending;
		if (c !== null) {
			u.shared.pending = null;
			var f = c,
				v = f.next;
			((f.next = null), i === null ? (n = v) : (i.next = v), (i = f));
			var b = l.alternate;
			b !== null &&
				((b = b.updateQueue),
				(c = b.lastBaseUpdate),
				c !== i &&
					(c === null ? (b.firstBaseUpdate = v) : (c.next = v),
					(b.lastBaseUpdate = f)));
		}
		if (n !== null) {
			var z = u.baseState;
			((i = 0), (b = v = f = null), (c = n));
			do {
				var g = c.lane & -536870913,
					S = g !== c.lane;
				if (S ? (k & g) === g : (e & g) === g) {
					(g !== 0 && g === fe && (Qi = !0),
						b !== null &&
							(b = b.next =
								{
									lane: 0,
									tag: c.tag,
									payload: c.payload,
									callback: null,
									next: null,
								}));
					l: {
						var N = l,
							B = c;
						g = t;
						var dl = a;
						switch (B.tag) {
							case 1:
								if (((N = B.payload), typeof N == "function")) {
									z = N.call(dl, z, g);
									break l;
								}
								z = N;
								break l;
							case 3:
								N.flags = (N.flags & -65537) | 128;
							case 0:
								if (
									((N = B.payload),
									(g = typeof N == "function" ? N.call(dl, z, g) : N),
									g == null)
								)
									break l;
								z = D({}, z, g);
								break l;
							case 2:
								ia = !0;
						}
					}
					((g = c.callback),
						g !== null &&
							((l.flags |= 64),
							S && (l.flags |= 8192),
							(S = u.callbacks),
							S === null ? (u.callbacks = [g]) : S.push(g)));
				} else
					((S = {
						lane: g,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null,
					}),
						b === null ? ((v = b = S), (f = z)) : (b = b.next = S),
						(i |= g));
				if (((c = c.next), c === null)) {
					if (((c = u.shared.pending), c === null)) break;
					((S = c),
						(c = S.next),
						(S.next = null),
						(u.lastBaseUpdate = S),
						(u.shared.pending = null));
				}
			} while (!0);
			(b === null && (f = z),
				(u.baseState = f),
				(u.firstBaseUpdate = v),
				(u.lastBaseUpdate = b),
				n === null && (u.shared.lanes = 0),
				(ra |= i),
				(l.lanes = i),
				(l.memoizedState = z));
		}
	}
	function B0(l, t) {
		if (typeof l != "function") throw Error(d(191, l));
		l.call(t);
	}
	function q0(l, t) {
		var a = l.callbacks;
		if (a !== null)
			for (l.callbacks = null, l = 0; l < a.length; l++) B0(a[l], t);
	}
	var me = o(null),
		Iu = o(0);
	function Y0(l, t) {
		((l = $t), O(Iu, l), O(me, t), ($t = l | t.baseLanes));
	}
	function Vi() {
		(O(Iu, $t), O(me, me.current));
	}
	function Li() {
		(($t = Iu.current), E(me), E(Iu));
	}
	var ft = o(null),
		zt = null;
	function sa(l) {
		var t = l.alternate;
		(O(pl, pl.current & 1),
			O(ft, l),
			zt === null &&
				(t === null || me.current !== null || t.memoizedState !== null) &&
				(zt = l));
	}
	function Ki(l) {
		(O(pl, pl.current), O(ft, l), zt === null && (zt = l));
	}
	function G0(l) {
		l.tag === 22
			? (O(pl, pl.current), O(ft, l), zt === null && (zt = l))
			: oa();
	}
	function oa() {
		(O(pl, pl.current), O(ft, ft.current));
	}
	function st(l) {
		(E(ft), zt === l && (zt = null), E(pl));
	}
	var pl = o(0);
	function Pu(l) {
		for (var t = l; t !== null; ) {
			if (t.tag === 13) {
				var a = t.memoizedState;
				if (a !== null && ((a = a.dehydrated), a === null || Fc(a) || Ic(a)))
					return t;
			} else if (
				t.tag === 19 &&
				(t.memoizedProps.revealOrder === "forwards" ||
					t.memoizedProps.revealOrder === "backwards" ||
					t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
					t.memoizedProps.revealOrder === "together")
			) {
				if ((t.flags & 128) !== 0) return t;
			} else if (t.child !== null) {
				((t.child.return = t), (t = t.child));
				continue;
			}
			if (t === l) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === l) return null;
				t = t.return;
			}
			((t.sibling.return = t.return), (t = t.sibling));
		}
		return null;
	}
	var Xt = 0,
		L = null,
		sl = null,
		Al = null,
		ln = !1,
		re = !1,
		Ga = !1,
		tn = 0,
		Ie = 0,
		he = null,
		td = 0;
	function gl() {
		throw Error(d(321));
	}
	function Ji(l, t) {
		if (t === null) return !1;
		for (var a = 0; a < t.length && a < l.length; a++)
			if (!it(l[a], t[a])) return !1;
		return !0;
	}
	function wi(l, t, a, e, u, n) {
		return (
			(Xt = n),
			(L = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(p.H = l === null || l.memoizedState === null ? zs : fc),
			(Ga = !1),
			(n = a(e, u)),
			(Ga = !1),
			re && (n = X0(t, a, e, u)),
			Z0(l),
			n
		);
	}
	function Z0(l) {
		p.H = tu;
		var t = sl !== null && sl.next !== null;
		if (((Xt = 0), (Al = sl = L = null), (ln = !1), (Ie = 0), (he = null), t))
			throw Error(d(300));
		l === null ||
			xl ||
			((l = l.dependencies), l !== null && Ku(l) && (xl = !0));
	}
	function X0(l, t, a, e) {
		L = l;
		var u = 0;
		do {
			if ((re && (he = null), (Ie = 0), (re = !1), 25 <= u))
				throw Error(d(301));
			if (((u += 1), (Al = sl = null), l.updateQueue != null)) {
				var n = l.updateQueue;
				((n.lastEffect = null),
					(n.events = null),
					(n.stores = null),
					n.memoCache != null && (n.memoCache.index = 0));
			}
			((p.H = Es), (n = t(a, e)));
		} while (re);
		return n;
	}
	function ad() {
		var l = p.H,
			t = l.useState()[0];
		return (
			(t = typeof t.then == "function" ? Pe(t) : t),
			(l = l.useState()[0]),
			(sl !== null ? sl.memoizedState : null) !== l && (L.flags |= 1024),
			t
		);
	}
	function Wi() {
		var l = tn !== 0;
		return ((tn = 0), l);
	}
	function $i(l, t, a) {
		((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
	}
	function ki(l) {
		if (ln) {
			for (l = l.memoizedState; l !== null; ) {
				var t = l.queue;
				(t !== null && (t.pending = null), (l = l.next));
			}
			ln = !1;
		}
		((Xt = 0), (Al = sl = L = null), (re = !1), (Ie = tn = 0), (he = null));
	}
	function Jl() {
		var l = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (Al === null ? (L.memoizedState = Al = l) : (Al = Al.next = l), Al);
	}
	function _l() {
		if (sl === null) {
			var l = L.alternate;
			l = l !== null ? l.memoizedState : null;
		} else l = sl.next;
		var t = Al === null ? L.memoizedState : Al.next;
		if (t !== null) ((Al = t), (sl = l));
		else {
			if (l === null)
				throw L.alternate === null ? Error(d(467)) : Error(d(310));
			((sl = l),
				(l = {
					memoizedState: sl.memoizedState,
					baseState: sl.baseState,
					baseQueue: sl.baseQueue,
					queue: sl.queue,
					next: null,
				}),
				Al === null ? (L.memoizedState = Al = l) : (Al = Al.next = l));
		}
		return Al;
	}
	function an() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function Pe(l) {
		var t = Ie;
		return (
			(Ie += 1),
			he === null && (he = []),
			(l = D0(he, l, t)),
			(t = L),
			(Al === null ? t.memoizedState : Al.next) === null &&
				((t = t.alternate),
				(p.H = t === null || t.memoizedState === null ? zs : fc)),
			l
		);
	}
	function en(l) {
		if (l !== null && typeof l == "object") {
			if (typeof l.then == "function") return Pe(l);
			if (l.$$typeof === Cl) return Yl(l);
		}
		throw Error(d(438, String(l)));
	}
	function Fi(l) {
		var t = null,
			a = L.updateQueue;
		if ((a !== null && (t = a.memoCache), t == null)) {
			var e = L.alternate;
			e !== null &&
				((e = e.updateQueue),
				e !== null &&
					((e = e.memoCache),
					e != null &&
						(t = {
							data: e.data.map(function (u) {
								return u.slice();
							}),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			a === null && ((a = an()), (L.updateQueue = a)),
			(a.memoCache = t),
			(a = t.data[t.index]),
			a === void 0)
		)
			for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = It;
		return (t.index++, a);
	}
	function Qt(l, t) {
		return typeof t == "function" ? t(l) : t;
	}
	function un(l) {
		var t = _l();
		return Ii(t, sl, l);
	}
	function Ii(l, t, a) {
		var e = l.queue;
		if (e === null) throw Error(d(311));
		e.lastRenderedReducer = a;
		var u = l.baseQueue,
			n = e.pending;
		if (n !== null) {
			if (u !== null) {
				var i = u.next;
				((u.next = n.next), (n.next = i));
			}
			((t.baseQueue = u = n), (e.pending = null));
		}
		if (((n = l.baseState), u === null)) l.memoizedState = n;
		else {
			t = u.next;
			var c = (i = null),
				f = null,
				v = t,
				b = !1;
			do {
				var z = v.lane & -536870913;
				if (z !== v.lane ? (k & z) === z : (Xt & z) === z) {
					var g = v.revertLane;
					if (g === 0)
						(f !== null &&
							(f = f.next =
								{
									lane: 0,
									revertLane: 0,
									gesture: null,
									action: v.action,
									hasEagerState: v.hasEagerState,
									eagerState: v.eagerState,
									next: null,
								}),
							z === fe && (b = !0));
					else if ((Xt & g) === g) {
						((v = v.next), g === fe && (b = !0));
						continue;
					} else
						((z = {
							lane: 0,
							revertLane: v.revertLane,
							gesture: null,
							action: v.action,
							hasEagerState: v.hasEagerState,
							eagerState: v.eagerState,
							next: null,
						}),
							f === null ? ((c = f = z), (i = n)) : (f = f.next = z),
							(L.lanes |= g),
							(ra |= g));
					((z = v.action),
						Ga && a(n, z),
						(n = v.hasEagerState ? v.eagerState : a(n, z)));
				} else
					((g = {
						lane: z,
						revertLane: v.revertLane,
						gesture: v.gesture,
						action: v.action,
						hasEagerState: v.hasEagerState,
						eagerState: v.eagerState,
						next: null,
					}),
						f === null ? ((c = f = g), (i = n)) : (f = f.next = g),
						(L.lanes |= z),
						(ra |= z));
				v = v.next;
			} while (v !== null && v !== t);
			if (
				(f === null ? (i = n) : (f.next = c),
				!it(n, l.memoizedState) && ((xl = !0), b && ((a = se), a !== null)))
			)
				throw a;
			((l.memoizedState = n),
				(l.baseState = i),
				(l.baseQueue = f),
				(e.lastRenderedState = n));
		}
		return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
	}
	function Pi(l) {
		var t = _l(),
			a = t.queue;
		if (a === null) throw Error(d(311));
		a.lastRenderedReducer = l;
		var e = a.dispatch,
			u = a.pending,
			n = t.memoizedState;
		if (u !== null) {
			a.pending = null;
			var i = (u = u.next);
			do ((n = l(n, i.action)), (i = i.next));
			while (i !== u);
			(it(n, t.memoizedState) || (xl = !0),
				(t.memoizedState = n),
				t.baseQueue === null && (t.baseState = n),
				(a.lastRenderedState = n));
		}
		return [n, e];
	}
	function Q0(l, t, a) {
		var e = L,
			u = _l(),
			n = I;
		if (n) {
			if (a === void 0) throw Error(d(407));
			a = a();
		} else a = t();
		var i = !it((sl || u).memoizedState, a);
		if (
			(i && ((u.memoizedState = a), (xl = !0)),
			(u = u.queue),
			ac(K0.bind(null, e, u, l), [l]),
			u.getSnapshot !== t || i || (Al !== null && Al.memoizedState.tag & 1))
		) {
			if (
				((e.flags |= 2048),
				ve(9, { destroy: void 0 }, L0.bind(null, e, u, a, t), null),
				rl === null)
			)
				throw Error(d(349));
			n || (Xt & 127) !== 0 || V0(e, t, a);
		}
		return a;
	}
	function V0(l, t, a) {
		((l.flags |= 16384),
			(l = { getSnapshot: t, value: a }),
			(t = L.updateQueue),
			t === null
				? ((t = an()), (L.updateQueue = t), (t.stores = [l]))
				: ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
	}
	function L0(l, t, a, e) {
		((t.value = a), (t.getSnapshot = e), J0(t) && w0(l));
	}
	function K0(l, t, a) {
		return a(function () {
			J0(t) && w0(l);
		});
	}
	function J0(l) {
		var t = l.getSnapshot;
		l = l.value;
		try {
			var a = t();
			return !it(l, a);
		} catch {
			return !0;
		}
	}
	function w0(l) {
		var t = ja(l, 2);
		t !== null && Pl(t, l, 2);
	}
	function lc(l) {
		var t = Jl();
		if (typeof l == "function") {
			var a = l;
			if (((l = a()), Ga)) {
				Pt(!0);
				try {
					a();
				} finally {
					Pt(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = l),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Qt,
				lastRenderedState: l,
			}),
			t
		);
	}
	function W0(l, t, a, e) {
		return ((l.baseState = a), Ii(l, sl, typeof e == "function" ? e : Qt));
	}
	function ed(l, t, a, e, u) {
		if (fn(l)) throw Error(d(485));
		if (((l = t.action), l !== null)) {
			var n = {
				payload: u,
				action: l,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (i) {
					n.listeners.push(i);
				},
			};
			(p.T !== null ? a(!0) : (n.isTransition = !1),
				e(n),
				(a = t.pending),
				a === null
					? ((n.next = t.pending = n), $0(t, n))
					: ((n.next = a.next), (t.pending = a.next = n)));
		}
	}
	function $0(l, t) {
		var a = t.action,
			e = t.payload,
			u = l.state;
		if (t.isTransition) {
			var n = p.T,
				i = {};
			p.T = i;
			try {
				var c = a(u, e),
					f = p.S;
				(f !== null && f(i, c), k0(l, t, c));
			} catch (v) {
				tc(l, t, v);
			} finally {
				(n !== null && i.types !== null && (n.types = i.types), (p.T = n));
			}
		} else
			try {
				((n = a(u, e)), k0(l, t, n));
			} catch (v) {
				tc(l, t, v);
			}
	}
	function k0(l, t, a) {
		a !== null && typeof a == "object" && typeof a.then == "function"
			? a.then(
					function (e) {
						F0(l, t, e);
					},
					function (e) {
						return tc(l, t, e);
					},
				)
			: F0(l, t, a);
	}
	function F0(l, t, a) {
		((t.status = "fulfilled"),
			(t.value = a),
			I0(t),
			(l.state = a),
			(t = l.pending),
			t !== null &&
				((a = t.next),
				a === t ? (l.pending = null) : ((a = a.next), (t.next = a), $0(l, a))));
	}
	function tc(l, t, a) {
		var e = l.pending;
		if (((l.pending = null), e !== null)) {
			e = e.next;
			do ((t.status = "rejected"), (t.reason = a), I0(t), (t = t.next));
			while (t !== e);
		}
		l.action = null;
	}
	function I0(l) {
		l = l.listeners;
		for (var t = 0; t < l.length; t++) (0, l[t])();
	}
	function P0(l, t) {
		return t;
	}
	function ls(l, t) {
		if (I) {
			var a = rl.formState;
			if (a !== null) {
				l: {
					var e = L;
					if (I) {
						if (hl) {
							t: {
								for (var u = hl, n = _t; u.nodeType !== 8; ) {
									if (!n) {
										u = null;
										break t;
									}
									if (((u = Et(u.nextSibling)), u === null)) {
										u = null;
										break t;
									}
								}
								((n = u.data), (u = n === "F!" || n === "F" ? u : null));
							}
							if (u) {
								((hl = Et(u.nextSibling)), (e = u.data === "F!"));
								break l;
							}
						}
						ua(e);
					}
					e = !1;
				}
				e && (t = a[0]);
			}
		}
		return (
			(a = Jl()),
			(a.memoizedState = a.baseState = t),
			(e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: P0,
				lastRenderedState: t,
			}),
			(a.queue = e),
			(a = bs.bind(null, L, e)),
			(e.dispatch = a),
			(e = lc(!1)),
			(n = cc.bind(null, L, !1, e.queue)),
			(e = Jl()),
			(u = { state: t, dispatch: null, action: l, pending: null }),
			(e.queue = u),
			(a = ed.bind(null, L, u, n, a)),
			(u.dispatch = a),
			(e.memoizedState = l),
			[t, a, !1]
		);
	}
	function ts(l) {
		var t = _l();
		return as(t, sl, l);
	}
	function as(l, t, a) {
		if (
			((t = Ii(l, t, P0)[0]),
			(l = un(Qt)[0]),
			typeof t == "object" && t !== null && typeof t.then == "function")
		)
			try {
				var e = Pe(t);
			} catch (i) {
				throw i === oe ? Wu : i;
			}
		else e = t;
		t = _l();
		var u = t.queue,
			n = u.dispatch;
		return (
			a !== t.memoizedState &&
				((L.flags |= 2048),
				ve(9, { destroy: void 0 }, ud.bind(null, u, a), null)),
			[e, n, l]
		);
	}
	function ud(l, t) {
		l.action = t;
	}
	function es(l) {
		var t = _l(),
			a = sl;
		if (a !== null) return as(t, a, l);
		(_l(), (t = t.memoizedState), (a = _l()));
		var e = a.queue.dispatch;
		return ((a.memoizedState = l), [t, e, !1]);
	}
	function ve(l, t, a, e) {
		return (
			(l = { tag: l, create: a, deps: e, inst: t, next: null }),
			(t = L.updateQueue),
			t === null && ((t = an()), (L.updateQueue = t)),
			(a = t.lastEffect),
			a === null
				? (t.lastEffect = l.next = l)
				: ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
			l
		);
	}
	function us() {
		return _l().memoizedState;
	}
	function nn(l, t, a, e) {
		var u = Jl();
		((L.flags |= l),
			(u.memoizedState = ve(
				1 | t,
				{ destroy: void 0 },
				a,
				e === void 0 ? null : e,
			)));
	}
	function cn(l, t, a, e) {
		var u = _l();
		e = e === void 0 ? null : e;
		var n = u.memoizedState.inst;
		sl !== null && e !== null && Ji(e, sl.memoizedState.deps)
			? (u.memoizedState = ve(t, n, a, e))
			: ((L.flags |= l), (u.memoizedState = ve(1 | t, n, a, e)));
	}
	function ns(l, t) {
		nn(8390656, 8, l, t);
	}
	function ac(l, t) {
		cn(2048, 8, l, t);
	}
	function nd(l) {
		L.flags |= 4;
		var t = L.updateQueue;
		if (t === null) ((t = an()), (L.updateQueue = t), (t.events = [l]));
		else {
			var a = t.events;
			a === null ? (t.events = [l]) : a.push(l);
		}
	}
	function is(l) {
		var t = _l().memoizedState;
		return (
			nd({ ref: t, nextImpl: l }),
			function () {
				if ((al & 2) !== 0) throw Error(d(440));
				return t.impl.apply(void 0, arguments);
			}
		);
	}
	function cs(l, t) {
		return cn(4, 2, l, t);
	}
	function fs(l, t) {
		return cn(4, 4, l, t);
	}
	function ss(l, t) {
		if (typeof t == "function") {
			l = l();
			var a = t(l);
			return function () {
				typeof a == "function" ? a() : t(null);
			};
		}
		if (t != null)
			return (
				(l = l()),
				(t.current = l),
				function () {
					t.current = null;
				}
			);
	}
	function os(l, t, a) {
		((a = a != null ? a.concat([l]) : null), cn(4, 4, ss.bind(null, t, l), a));
	}
	function ec() {}
	function ds(l, t) {
		var a = _l();
		t = t === void 0 ? null : t;
		var e = a.memoizedState;
		return t !== null && Ji(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
	}
	function ms(l, t) {
		var a = _l();
		t = t === void 0 ? null : t;
		var e = a.memoizedState;
		if (t !== null && Ji(t, e[1])) return e[0];
		if (((e = l()), Ga)) {
			Pt(!0);
			try {
				l();
			} finally {
				Pt(!1);
			}
		}
		return ((a.memoizedState = [e, t]), e);
	}
	function uc(l, t, a) {
		return a === void 0 || ((Xt & 1073741824) !== 0 && (k & 261930) === 0)
			? (l.memoizedState = t)
			: ((l.memoizedState = a), (l = r1()), (L.lanes |= l), (ra |= l), a);
	}
	function rs(l, t, a, e) {
		return it(a, t)
			? a
			: me.current !== null
				? ((l = uc(l, a, e)), it(l, t) || (xl = !0), l)
				: (Xt & 42) === 0 || ((Xt & 1073741824) !== 0 && (k & 261930) === 0)
					? ((xl = !0), (l.memoizedState = a))
					: ((l = r1()), (L.lanes |= l), (ra |= l), t);
	}
	function hs(l, t, a, e, u) {
		var n = M.p;
		M.p = n !== 0 && 8 > n ? n : 8;
		var i = p.T,
			c = {};
		((p.T = c), cc(l, !1, t, a));
		try {
			var f = u(),
				v = p.S;
			if (
				(v !== null && v(c, f),
				f !== null && typeof f == "object" && typeof f.then == "function")
			) {
				var b = ld(f, e);
				lu(l, t, b, mt(l));
			} else lu(l, t, e, mt(l));
		} catch (z) {
			lu(l, t, { then: function () {}, status: "rejected", reason: z }, mt());
		} finally {
			((M.p = n),
				i !== null && c.types !== null && (i.types = c.types),
				(p.T = i));
		}
	}
	function id() {}
	function nc(l, t, a, e) {
		if (l.tag !== 5) throw Error(d(476));
		var u = vs(l).queue;
		hs(
			l,
			u,
			t,
			q,
			a === null
				? id
				: function () {
						return (ys(l), a(e));
					},
		);
	}
	function vs(l) {
		var t = l.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: q,
			baseState: q,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Qt,
				lastRenderedState: q,
			},
			next: null,
		};
		var a = {};
		return (
			(t.next = {
				memoizedState: a,
				baseState: a,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Qt,
					lastRenderedState: a,
				},
				next: null,
			}),
			(l.memoizedState = t),
			(l = l.alternate),
			l !== null && (l.memoizedState = t),
			t
		);
	}
	function ys(l) {
		var t = vs(l);
		(t.next === null && (t = l.alternate.memoizedState),
			lu(l, t.next.queue, {}, mt()));
	}
	function ic() {
		return Yl(gu);
	}
	function gs() {
		return _l().memoizedState;
	}
	function Ss() {
		return _l().memoizedState;
	}
	function cd(l) {
		for (var t = l.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var a = mt();
					l = ca(a);
					var e = fa(t, l, a);
					(e !== null && (Pl(e, t, a), $e(e, t, a)),
						(t = { cache: Ri() }),
						(l.payload = t));
					return;
			}
			t = t.return;
		}
	}
	function fd(l, t, a) {
		var e = mt();
		((a = {
			lane: e,
			revertLane: 0,
			gesture: null,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			fn(l)
				? ps(t, a)
				: ((a = Ti(l, t, a, e)), a !== null && (Pl(a, l, e), _s(a, t, e))));
	}
	function bs(l, t, a) {
		var e = mt();
		lu(l, t, a, e);
	}
	function lu(l, t, a, e) {
		var u = {
			lane: e,
			revertLane: 0,
			gesture: null,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (fn(l)) ps(t, u);
		else {
			var n = l.alternate;
			if (
				l.lanes === 0 &&
				(n === null || n.lanes === 0) &&
				((n = t.lastRenderedReducer), n !== null)
			)
				try {
					var i = t.lastRenderedState,
						c = n(i, a);
					if (((u.hasEagerState = !0), (u.eagerState = c), it(c, i)))
						return (Xu(l, t, u, 0), rl === null && Zu(), !1);
				} catch {
				} finally {
				}
			if (((a = Ti(l, t, u, e)), a !== null))
				return (Pl(a, l, e), _s(a, t, e), !0);
		}
		return !1;
	}
	function cc(l, t, a, e) {
		if (
			((e = {
				lane: 2,
				revertLane: Gc(),
				gesture: null,
				action: e,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			fn(l))
		) {
			if (t) throw Error(d(479));
		} else ((t = Ti(l, a, e, 2)), t !== null && Pl(t, l, 2));
	}
	function fn(l) {
		var t = l.alternate;
		return l === L || (t !== null && t === L);
	}
	function ps(l, t) {
		re = ln = !0;
		var a = l.pending;
		(a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
			(l.pending = t));
	}
	function _s(l, t, a) {
		if ((a & 4194048) !== 0) {
			var e = t.lanes;
			((e &= l.pendingLanes), (a |= e), (t.lanes = a), xf(l, a));
		}
	}
	var tu = {
		readContext: Yl,
		use: en,
		useCallback: gl,
		useContext: gl,
		useEffect: gl,
		useImperativeHandle: gl,
		useLayoutEffect: gl,
		useInsertionEffect: gl,
		useMemo: gl,
		useReducer: gl,
		useRef: gl,
		useState: gl,
		useDebugValue: gl,
		useDeferredValue: gl,
		useTransition: gl,
		useSyncExternalStore: gl,
		useId: gl,
		useHostTransitionStatus: gl,
		useFormState: gl,
		useActionState: gl,
		useOptimistic: gl,
		useMemoCache: gl,
		useCacheRefresh: gl,
	};
	tu.useEffectEvent = gl;
	var zs = {
			readContext: Yl,
			use: en,
			useCallback: function (l, t) {
				return ((Jl().memoizedState = [l, t === void 0 ? null : t]), l);
			},
			useContext: Yl,
			useEffect: ns,
			useImperativeHandle: function (l, t, a) {
				((a = a != null ? a.concat([l]) : null),
					nn(4194308, 4, ss.bind(null, t, l), a));
			},
			useLayoutEffect: function (l, t) {
				return nn(4194308, 4, l, t);
			},
			useInsertionEffect: function (l, t) {
				nn(4, 2, l, t);
			},
			useMemo: function (l, t) {
				var a = Jl();
				t = t === void 0 ? null : t;
				var e = l();
				if (Ga) {
					Pt(!0);
					try {
						l();
					} finally {
						Pt(!1);
					}
				}
				return ((a.memoizedState = [e, t]), e);
			},
			useReducer: function (l, t, a) {
				var e = Jl();
				if (a !== void 0) {
					var u = a(t);
					if (Ga) {
						Pt(!0);
						try {
							a(t);
						} finally {
							Pt(!1);
						}
					}
				} else u = t;
				return (
					(e.memoizedState = e.baseState = u),
					(l = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: l,
						lastRenderedState: u,
					}),
					(e.queue = l),
					(l = l.dispatch = fd.bind(null, L, l)),
					[e.memoizedState, l]
				);
			},
			useRef: function (l) {
				var t = Jl();
				return ((l = { current: l }), (t.memoizedState = l));
			},
			useState: function (l) {
				l = lc(l);
				var t = l.queue,
					a = bs.bind(null, L, t);
				return ((t.dispatch = a), [l.memoizedState, a]);
			},
			useDebugValue: ec,
			useDeferredValue: function (l, t) {
				var a = Jl();
				return uc(a, l, t);
			},
			useTransition: function () {
				var l = lc(!1);
				return (
					(l = hs.bind(null, L, l.queue, !0, !1)),
					(Jl().memoizedState = l),
					[!1, l]
				);
			},
			useSyncExternalStore: function (l, t, a) {
				var e = L,
					u = Jl();
				if (I) {
					if (a === void 0) throw Error(d(407));
					a = a();
				} else {
					if (((a = t()), rl === null)) throw Error(d(349));
					(k & 127) !== 0 || V0(e, t, a);
				}
				u.memoizedState = a;
				var n = { value: a, getSnapshot: t };
				return (
					(u.queue = n),
					ns(K0.bind(null, e, n, l), [l]),
					(e.flags |= 2048),
					ve(9, { destroy: void 0 }, L0.bind(null, e, n, a, t), null),
					a
				);
			},
			useId: function () {
				var l = Jl(),
					t = rl.identifierPrefix;
				if (I) {
					var a = jt,
						e = Nt;
					((a = (e & ~(1 << (32 - nt(e) - 1))).toString(32) + a),
						(t = "_" + t + "R_" + a),
						(a = tn++),
						0 < a && (t += "H" + a.toString(32)),
						(t += "_"));
				} else ((a = td++), (t = "_" + t + "r_" + a.toString(32) + "_"));
				return (l.memoizedState = t);
			},
			useHostTransitionStatus: ic,
			useFormState: ls,
			useActionState: ls,
			useOptimistic: function (l) {
				var t = Jl();
				t.memoizedState = t.baseState = l;
				var a = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = a),
					(t = cc.bind(null, L, !0, a)),
					(a.dispatch = t),
					[l, t]
				);
			},
			useMemoCache: Fi,
			useCacheRefresh: function () {
				return (Jl().memoizedState = cd.bind(null, L));
			},
			useEffectEvent: function (l) {
				var t = Jl(),
					a = { impl: l };
				return (
					(t.memoizedState = a),
					function () {
						if ((al & 2) !== 0) throw Error(d(440));
						return a.impl.apply(void 0, arguments);
					}
				);
			},
		},
		fc = {
			readContext: Yl,
			use: en,
			useCallback: ds,
			useContext: Yl,
			useEffect: ac,
			useImperativeHandle: os,
			useInsertionEffect: cs,
			useLayoutEffect: fs,
			useMemo: ms,
			useReducer: un,
			useRef: us,
			useState: function () {
				return un(Qt);
			},
			useDebugValue: ec,
			useDeferredValue: function (l, t) {
				var a = _l();
				return rs(a, sl.memoizedState, l, t);
			},
			useTransition: function () {
				var l = un(Qt)[0],
					t = _l().memoizedState;
				return [typeof l == "boolean" ? l : Pe(l), t];
			},
			useSyncExternalStore: Q0,
			useId: gs,
			useHostTransitionStatus: ic,
			useFormState: ts,
			useActionState: ts,
			useOptimistic: function (l, t) {
				var a = _l();
				return W0(a, sl, l, t);
			},
			useMemoCache: Fi,
			useCacheRefresh: Ss,
		};
	fc.useEffectEvent = is;
	var Es = {
		readContext: Yl,
		use: en,
		useCallback: ds,
		useContext: Yl,
		useEffect: ac,
		useImperativeHandle: os,
		useInsertionEffect: cs,
		useLayoutEffect: fs,
		useMemo: ms,
		useReducer: Pi,
		useRef: us,
		useState: function () {
			return Pi(Qt);
		},
		useDebugValue: ec,
		useDeferredValue: function (l, t) {
			var a = _l();
			return sl === null ? uc(a, l, t) : rs(a, sl.memoizedState, l, t);
		},
		useTransition: function () {
			var l = Pi(Qt)[0],
				t = _l().memoizedState;
			return [typeof l == "boolean" ? l : Pe(l), t];
		},
		useSyncExternalStore: Q0,
		useId: gs,
		useHostTransitionStatus: ic,
		useFormState: es,
		useActionState: es,
		useOptimistic: function (l, t) {
			var a = _l();
			return sl !== null
				? W0(a, sl, l, t)
				: ((a.baseState = l), [l, a.queue.dispatch]);
		},
		useMemoCache: Fi,
		useCacheRefresh: Ss,
	};
	Es.useEffectEvent = is;
	function sc(l, t, a, e) {
		((t = l.memoizedState),
			(a = a(e, t)),
			(a = a == null ? t : D({}, t, a)),
			(l.memoizedState = a),
			l.lanes === 0 && (l.updateQueue.baseState = a));
	}
	var oc = {
		enqueueSetState: function (l, t, a) {
			l = l._reactInternals;
			var e = mt(),
				u = ca(e);
			((u.payload = t),
				a != null && (u.callback = a),
				(t = fa(l, u, e)),
				t !== null && (Pl(t, l, e), $e(t, l, e)));
		},
		enqueueReplaceState: function (l, t, a) {
			l = l._reactInternals;
			var e = mt(),
				u = ca(e);
			((u.tag = 1),
				(u.payload = t),
				a != null && (u.callback = a),
				(t = fa(l, u, e)),
				t !== null && (Pl(t, l, e), $e(t, l, e)));
		},
		enqueueForceUpdate: function (l, t) {
			l = l._reactInternals;
			var a = mt(),
				e = ca(a);
			((e.tag = 2),
				t != null && (e.callback = t),
				(t = fa(l, e, a)),
				t !== null && (Pl(t, l, a), $e(t, l, a)));
		},
	};
	function Ts(l, t, a, e, u, n, i) {
		return (
			(l = l.stateNode),
			typeof l.shouldComponentUpdate == "function"
				? l.shouldComponentUpdate(e, n, i)
				: t.prototype && t.prototype.isPureReactComponent
					? !Xe(a, e) || !Xe(u, n)
					: !0
		);
	}
	function As(l, t, a, e) {
		((l = t.state),
			typeof t.componentWillReceiveProps == "function" &&
				t.componentWillReceiveProps(a, e),
			typeof t.UNSAFE_componentWillReceiveProps == "function" &&
				t.UNSAFE_componentWillReceiveProps(a, e),
			t.state !== l && oc.enqueueReplaceState(t, t.state, null));
	}
	function Za(l, t) {
		var a = t;
		if ("ref" in t) {
			a = {};
			for (var e in t) e !== "ref" && (a[e] = t[e]);
		}
		if ((l = l.defaultProps)) {
			a === t && (a = D({}, a));
			for (var u in l) a[u] === void 0 && (a[u] = l[u]);
		}
		return a;
	}
	function xs(l) {
		Gu(l);
	}
	function Ms(l) {
		console.error(l);
	}
	function Os(l) {
		Gu(l);
	}
	function sn(l, t) {
		try {
			var a = l.onUncaughtError;
			a(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function () {
				throw e;
			});
		}
	}
	function Ns(l, t, a) {
		try {
			var e = l.onCaughtError;
			e(a.value, {
				componentStack: a.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (u) {
			setTimeout(function () {
				throw u;
			});
		}
	}
	function dc(l, t, a) {
		return (
			(a = ca(a)),
			(a.tag = 3),
			(a.payload = { element: null }),
			(a.callback = function () {
				sn(l, t);
			}),
			a
		);
	}
	function js(l) {
		return ((l = ca(l)), (l.tag = 3), l);
	}
	function Ds(l, t, a, e) {
		var u = a.type.getDerivedStateFromError;
		if (typeof u == "function") {
			var n = e.value;
			((l.payload = function () {
				return u(n);
			}),
				(l.callback = function () {
					Ns(t, a, e);
				}));
		}
		var i = a.stateNode;
		i !== null &&
			typeof i.componentDidCatch == "function" &&
			(l.callback = function () {
				(Ns(t, a, e),
					typeof u != "function" &&
						(ha === null ? (ha = new Set([this])) : ha.add(this)));
				var c = e.stack;
				this.componentDidCatch(e.value, {
					componentStack: c !== null ? c : "",
				});
			});
	}
	function sd(l, t, a, e, u) {
		if (
			((a.flags |= 32768),
			e !== null && typeof e == "object" && typeof e.then == "function")
		) {
			if (
				((t = a.alternate),
				t !== null && ce(t, a, u, !0),
				(a = ft.current),
				a !== null)
			) {
				switch (a.tag) {
					case 31:
					case 13:
						return (
							zt === null ? _n() : a.alternate === null && Sl === 0 && (Sl = 3),
							(a.flags &= -257),
							(a.flags |= 65536),
							(a.lanes = u),
							e === $u
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
									t === null ? (a.updateQueue = new Set([e])) : t.add(e),
									Bc(l, e, u)),
							!1
						);
					case 22:
						return (
							(a.flags |= 65536),
							e === $u
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
									t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([e]),
											}),
											(a.updateQueue = t))
										: ((a = t.retryQueue),
											a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
									Bc(l, e, u)),
							!1
						);
				}
				throw Error(d(435, a.tag));
			}
			return (Bc(l, e, u), _n(), !1);
		}
		if (I)
			return (
				(t = ft.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
						(t.flags |= 65536),
						(t.lanes = u),
						e !== ji && ((l = Error(d(422), { cause: e })), Le(St(l, a))))
					: (e !== ji && ((t = Error(d(423), { cause: e })), Le(St(t, a))),
						(l = l.current.alternate),
						(l.flags |= 65536),
						(u &= -u),
						(l.lanes |= u),
						(e = St(e, a)),
						(u = dc(l.stateNode, e, u)),
						Xi(l, u),
						Sl !== 4 && (Sl = 2)),
				!1
			);
		var n = Error(d(520), { cause: e });
		if (
			((n = St(n, a)),
			su === null ? (su = [n]) : su.push(n),
			Sl !== 4 && (Sl = 2),
			t === null)
		)
			return !0;
		((e = St(e, a)), (a = t));
		do {
			switch (a.tag) {
				case 3:
					return (
						(a.flags |= 65536),
						(l = u & -u),
						(a.lanes |= l),
						(l = dc(a.stateNode, e, l)),
						Xi(a, l),
						!1
					);
				case 1:
					if (
						((t = a.type),
						(n = a.stateNode),
						(a.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == "function" ||
								(n !== null &&
									typeof n.componentDidCatch == "function" &&
									(ha === null || !ha.has(n)))))
					)
						return (
							(a.flags |= 65536),
							(u &= -u),
							(a.lanes |= u),
							(u = js(u)),
							Ds(u, l, a, e),
							Xi(a, u),
							!1
						);
			}
			a = a.return;
		} while (a !== null);
		return !1;
	}
	var mc = Error(d(461)),
		xl = !1;
	function Gl(l, t, a, e) {
		t.child = l === null ? R0(t, null, a, e) : Ya(t, l.child, a, e);
	}
	function Cs(l, t, a, e, u) {
		a = a.render;
		var n = t.ref;
		if ("ref" in e) {
			var i = {};
			for (var c in e) c !== "ref" && (i[c] = e[c]);
		} else i = e;
		return (
			Ha(t),
			(e = wi(l, t, a, i, n, u)),
			(c = Wi()),
			l !== null && !xl
				? ($i(l, t, u), Vt(l, t, u))
				: (I && c && Oi(t), (t.flags |= 1), Gl(l, t, e, u), t.child)
		);
	}
	function Us(l, t, a, e, u) {
		if (l === null) {
			var n = a.type;
			return typeof n == "function" &&
				!Ai(n) &&
				n.defaultProps === void 0 &&
				a.compare === null
				? ((t.tag = 15), (t.type = n), Hs(l, t, n, e, u))
				: ((l = Vu(a.type, null, e, t, t.mode, u)),
					(l.ref = t.ref),
					(l.return = t),
					(t.child = l));
		}
		if (((n = l.child), !pc(l, u))) {
			var i = n.memoizedProps;
			if (
				((a = a.compare), (a = a !== null ? a : Xe), a(i, e) && l.ref === t.ref)
			)
				return Vt(l, t, u);
		}
		return (
			(t.flags |= 1),
			(l = qt(n, e)),
			(l.ref = t.ref),
			(l.return = t),
			(t.child = l)
		);
	}
	function Hs(l, t, a, e, u) {
		if (l !== null) {
			var n = l.memoizedProps;
			if (Xe(n, e) && l.ref === t.ref)
				if (((xl = !1), (t.pendingProps = e = n), pc(l, u)))
					(l.flags & 131072) !== 0 && (xl = !0);
				else return ((t.lanes = l.lanes), Vt(l, t, u));
		}
		return rc(l, t, a, e, u);
	}
	function Rs(l, t, a, e) {
		var u = e.children,
			n = l !== null ? l.memoizedState : null;
		if (
			(l === null &&
				t.stateNode === null &&
				(t.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null,
				}),
			e.mode === "hidden")
		) {
			if ((t.flags & 128) !== 0) {
				if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
					for (e = t.child = l.child, u = 0; e !== null; )
						((u = u | e.lanes | e.childLanes), (e = e.sibling));
					e = u & ~n;
				} else ((e = 0), (t.child = null));
				return Bs(l, t, n, a, e);
			}
			if ((a & 536870912) !== 0)
				((t.memoizedState = { baseLanes: 0, cachePool: null }),
					l !== null && wu(t, n !== null ? n.cachePool : null),
					n !== null ? Y0(t, n) : Vi(),
					G0(t));
			else
				return (
					(e = t.lanes = 536870912),
					Bs(l, t, n !== null ? n.baseLanes | a : a, a, e)
				);
		} else
			n !== null
				? (wu(t, n.cachePool), Y0(t, n), oa(), (t.memoizedState = null))
				: (l !== null && wu(t, null), Vi(), oa());
		return (Gl(l, t, u, a), t.child);
	}
	function au(l, t) {
		return (
			(l !== null && l.tag === 22) ||
				t.stateNode !== null ||
				(t.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null,
				}),
			t.sibling
		);
	}
	function Bs(l, t, a, e, u) {
		var n = qi();
		return (
			(n = n === null ? null : { parent: Tl._currentValue, pool: n }),
			(t.memoizedState = { baseLanes: a, cachePool: n }),
			l !== null && wu(t, null),
			Vi(),
			G0(t),
			l !== null && ce(l, t, e, !0),
			(t.childLanes = u),
			null
		);
	}
	function on(l, t) {
		return (
			(t = mn({ mode: t.mode, children: t.children }, l.mode)),
			(t.ref = l.ref),
			(l.child = t),
			(t.return = l),
			t
		);
	}
	function qs(l, t, a) {
		return (
			Ya(t, l.child, null, a),
			(l = on(t, t.pendingProps)),
			(l.flags |= 2),
			st(t),
			(t.memoizedState = null),
			l
		);
	}
	function od(l, t, a) {
		var e = t.pendingProps,
			u = (t.flags & 128) !== 0;
		if (((t.flags &= -129), l === null)) {
			if (I) {
				if (e.mode === "hidden")
					return ((l = on(t, e)), (t.lanes = 536870912), au(null, l));
				if (
					(Ki(t),
					(l = hl)
						? ((l = $1(l, _t)),
							(l = l !== null && l.data === "&" ? l : null),
							l !== null &&
								((t.memoizedState = {
									dehydrated: l,
									treeContext: aa !== null ? { id: Nt, overflow: jt } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(a = p0(l)),
								(a.return = t),
								(t.child = a),
								(ql = t),
								(hl = null)))
						: (l = null),
					l === null)
				)
					throw ua(t);
				return ((t.lanes = 536870912), null);
			}
			return on(t, e);
		}
		var n = l.memoizedState;
		if (n !== null) {
			var i = n.dehydrated;
			if ((Ki(t), u))
				if (t.flags & 256) ((t.flags &= -257), (t = qs(l, t, a)));
				else if (t.memoizedState !== null)
					((t.child = l.child), (t.flags |= 128), (t = null));
				else throw Error(d(558));
			else if (
				(xl || ce(l, t, a, !1), (u = (a & l.childLanes) !== 0), xl || u)
			) {
				if (
					((e = rl),
					e !== null && ((i = Mf(e, a)), i !== 0 && i !== n.retryLane))
				)
					throw ((n.retryLane = i), ja(l, i), Pl(e, l, i), mc);
				(_n(), (t = qs(l, t, a)));
			} else
				((l = n.treeContext),
					(hl = Et(i.nextSibling)),
					(ql = t),
					(I = !0),
					(ea = null),
					(_t = !1),
					l !== null && E0(t, l),
					(t = on(t, e)),
					(t.flags |= 4096));
			return t;
		}
		return (
			(l = qt(l.child, { mode: e.mode, children: e.children })),
			(l.ref = t.ref),
			(t.child = l),
			(l.return = t),
			l
		);
	}
	function dn(l, t) {
		var a = t.ref;
		if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof a != "function" && typeof a != "object") throw Error(d(284));
			(l === null || l.ref !== a) && (t.flags |= 4194816);
		}
	}
	function rc(l, t, a, e, u) {
		return (
			Ha(t),
			(a = wi(l, t, a, e, void 0, u)),
			(e = Wi()),
			l !== null && !xl
				? ($i(l, t, u), Vt(l, t, u))
				: (I && e && Oi(t), (t.flags |= 1), Gl(l, t, a, u), t.child)
		);
	}
	function Ys(l, t, a, e, u, n) {
		return (
			Ha(t),
			(t.updateQueue = null),
			(a = X0(t, e, a, u)),
			Z0(l),
			(e = Wi()),
			l !== null && !xl
				? ($i(l, t, n), Vt(l, t, n))
				: (I && e && Oi(t), (t.flags |= 1), Gl(l, t, a, n), t.child)
		);
	}
	function Gs(l, t, a, e, u) {
		if ((Ha(t), t.stateNode === null)) {
			var n = ee,
				i = a.contextType;
			(typeof i == "object" && i !== null && (n = Yl(i)),
				(n = new a(e, n)),
				(t.memoizedState =
					n.state !== null && n.state !== void 0 ? n.state : null),
				(n.updater = oc),
				(t.stateNode = n),
				(n._reactInternals = t),
				(n = t.stateNode),
				(n.props = e),
				(n.state = t.memoizedState),
				(n.refs = {}),
				Gi(t),
				(i = a.contextType),
				(n.context = typeof i == "object" && i !== null ? Yl(i) : ee),
				(n.state = t.memoizedState),
				(i = a.getDerivedStateFromProps),
				typeof i == "function" && (sc(t, a, i, e), (n.state = t.memoizedState)),
				typeof a.getDerivedStateFromProps == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function" ||
					(typeof n.UNSAFE_componentWillMount != "function" &&
						typeof n.componentWillMount != "function") ||
					((i = n.state),
					typeof n.componentWillMount == "function" && n.componentWillMount(),
					typeof n.UNSAFE_componentWillMount == "function" &&
						n.UNSAFE_componentWillMount(),
					i !== n.state && oc.enqueueReplaceState(n, n.state, null),
					Fe(t, e, n, u),
					ke(),
					(n.state = t.memoizedState)),
				typeof n.componentDidMount == "function" && (t.flags |= 4194308),
				(e = !0));
		} else if (l === null) {
			n = t.stateNode;
			var c = t.memoizedProps,
				f = Za(a, c);
			n.props = f;
			var v = n.context,
				b = a.contextType;
			((i = ee), typeof b == "object" && b !== null && (i = Yl(b)));
			var z = a.getDerivedStateFromProps;
			((b =
				typeof z == "function" ||
				typeof n.getSnapshotBeforeUpdate == "function"),
				(c = t.pendingProps !== c),
				b ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((c || v !== i) && As(t, n, e, i)),
				(ia = !1));
			var g = t.memoizedState;
			((n.state = g),
				Fe(t, e, n, u),
				ke(),
				(v = t.memoizedState),
				c || g !== v || ia
					? (typeof z == "function" && (sc(t, a, z, e), (v = t.memoizedState)),
						(f = ia || Ts(t, a, f, e, g, v, i))
							? (b ||
									(typeof n.UNSAFE_componentWillMount != "function" &&
										typeof n.componentWillMount != "function") ||
									(typeof n.componentWillMount == "function" &&
										n.componentWillMount(),
									typeof n.UNSAFE_componentWillMount == "function" &&
										n.UNSAFE_componentWillMount()),
								typeof n.componentDidMount == "function" &&
									(t.flags |= 4194308))
							: (typeof n.componentDidMount == "function" &&
									(t.flags |= 4194308),
								(t.memoizedProps = e),
								(t.memoizedState = v)),
						(n.props = e),
						(n.state = v),
						(n.context = i),
						(e = f))
					: (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
						(e = !1)));
		} else {
			((n = t.stateNode),
				Zi(l, t),
				(i = t.memoizedProps),
				(b = Za(a, i)),
				(n.props = b),
				(z = t.pendingProps),
				(g = n.context),
				(v = a.contextType),
				(f = ee),
				typeof v == "object" && v !== null && (f = Yl(v)),
				(c = a.getDerivedStateFromProps),
				(v =
					typeof c == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function") ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((i !== z || g !== f) && As(t, n, e, f)),
				(ia = !1),
				(g = t.memoizedState),
				(n.state = g),
				Fe(t, e, n, u),
				ke());
			var S = t.memoizedState;
			i !== z ||
			g !== S ||
			ia ||
			(l !== null && l.dependencies !== null && Ku(l.dependencies))
				? (typeof c == "function" && (sc(t, a, c, e), (S = t.memoizedState)),
					(b =
						ia ||
						Ts(t, a, b, e, g, S, f) ||
						(l !== null && l.dependencies !== null && Ku(l.dependencies)))
						? (v ||
								(typeof n.UNSAFE_componentWillUpdate != "function" &&
									typeof n.componentWillUpdate != "function") ||
								(typeof n.componentWillUpdate == "function" &&
									n.componentWillUpdate(e, S, f),
								typeof n.UNSAFE_componentWillUpdate == "function" &&
									n.UNSAFE_componentWillUpdate(e, S, f)),
							typeof n.componentDidUpdate == "function" && (t.flags |= 4),
							typeof n.getSnapshotBeforeUpdate == "function" &&
								(t.flags |= 1024))
						: (typeof n.componentDidUpdate != "function" ||
								(i === l.memoizedProps && g === l.memoizedState) ||
								(t.flags |= 4),
							typeof n.getSnapshotBeforeUpdate != "function" ||
								(i === l.memoizedProps && g === l.memoizedState) ||
								(t.flags |= 1024),
							(t.memoizedProps = e),
							(t.memoizedState = S)),
					(n.props = e),
					(n.state = S),
					(n.context = f),
					(e = b))
				: (typeof n.componentDidUpdate != "function" ||
						(i === l.memoizedProps && g === l.memoizedState) ||
						(t.flags |= 4),
					typeof n.getSnapshotBeforeUpdate != "function" ||
						(i === l.memoizedProps && g === l.memoizedState) ||
						(t.flags |= 1024),
					(e = !1));
		}
		return (
			(n = e),
			dn(l, t),
			(e = (t.flags & 128) !== 0),
			n || e
				? ((n = t.stateNode),
					(a =
						e && typeof a.getDerivedStateFromError != "function"
							? null
							: n.render()),
					(t.flags |= 1),
					l !== null && e
						? ((t.child = Ya(t, l.child, null, u)),
							(t.child = Ya(t, null, a, u)))
						: Gl(l, t, a, u),
					(t.memoizedState = n.state),
					(l = t.child))
				: (l = Vt(l, t, u)),
			l
		);
	}
	function Zs(l, t, a, e) {
		return (Ca(), (t.flags |= 256), Gl(l, t, a, e), t.child);
	}
	var hc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function vc(l) {
		return { baseLanes: l, cachePool: N0() };
	}
	function yc(l, t, a) {
		return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= dt), l);
	}
	function Xs(l, t, a) {
		var e = t.pendingProps,
			u = !1,
			n = (t.flags & 128) !== 0,
			i;
		if (
			((i = n) ||
				(i =
					l !== null && l.memoizedState === null ? !1 : (pl.current & 2) !== 0),
			i && ((u = !0), (t.flags &= -129)),
			(i = (t.flags & 32) !== 0),
			(t.flags &= -33),
			l === null)
		) {
			if (I) {
				if (
					(u ? sa(t) : oa(),
					(l = hl)
						? ((l = $1(l, _t)),
							(l = l !== null && l.data !== "&" ? l : null),
							l !== null &&
								((t.memoizedState = {
									dehydrated: l,
									treeContext: aa !== null ? { id: Nt, overflow: jt } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(a = p0(l)),
								(a.return = t),
								(t.child = a),
								(ql = t),
								(hl = null)))
						: (l = null),
					l === null)
				)
					throw ua(t);
				return (Ic(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
			}
			var c = e.children;
			return (
				(e = e.fallback),
				u
					? (oa(),
						(u = t.mode),
						(c = mn({ mode: "hidden", children: c }, u)),
						(e = Da(e, u, a, null)),
						(c.return = t),
						(e.return = t),
						(c.sibling = e),
						(t.child = c),
						(e = t.child),
						(e.memoizedState = vc(a)),
						(e.childLanes = yc(l, i, a)),
						(t.memoizedState = hc),
						au(null, e))
					: (sa(t), gc(t, c))
			);
		}
		var f = l.memoizedState;
		if (f !== null && ((c = f.dehydrated), c !== null)) {
			if (n)
				t.flags & 256
					? (sa(t), (t.flags &= -257), (t = Sc(l, t, a)))
					: t.memoizedState !== null
						? (oa(), (t.child = l.child), (t.flags |= 128), (t = null))
						: (oa(),
							(c = e.fallback),
							(u = t.mode),
							(e = mn({ mode: "visible", children: e.children }, u)),
							(c = Da(c, u, a, null)),
							(c.flags |= 2),
							(e.return = t),
							(c.return = t),
							(e.sibling = c),
							(t.child = e),
							Ya(t, l.child, null, a),
							(e = t.child),
							(e.memoizedState = vc(a)),
							(e.childLanes = yc(l, i, a)),
							(t.memoizedState = hc),
							(t = au(null, e)));
			else if ((sa(t), Ic(c))) {
				if (((i = c.nextSibling && c.nextSibling.dataset), i)) var v = i.dgst;
				((i = v),
					(e = Error(d(419))),
					(e.stack = ""),
					(e.digest = i),
					Le({ value: e, source: null, stack: null }),
					(t = Sc(l, t, a)));
			} else if (
				(xl || ce(l, t, a, !1), (i = (a & l.childLanes) !== 0), xl || i)
			) {
				if (
					((i = rl),
					i !== null && ((e = Mf(i, a)), e !== 0 && e !== f.retryLane))
				)
					throw ((f.retryLane = e), ja(l, e), Pl(i, l, e), mc);
				(Fc(c) || _n(), (t = Sc(l, t, a)));
			} else
				Fc(c)
					? ((t.flags |= 192), (t.child = l.child), (t = null))
					: ((l = f.treeContext),
						(hl = Et(c.nextSibling)),
						(ql = t),
						(I = !0),
						(ea = null),
						(_t = !1),
						l !== null && E0(t, l),
						(t = gc(t, e.children)),
						(t.flags |= 4096));
			return t;
		}
		return u
			? (oa(),
				(c = e.fallback),
				(u = t.mode),
				(f = l.child),
				(v = f.sibling),
				(e = qt(f, { mode: "hidden", children: e.children })),
				(e.subtreeFlags = f.subtreeFlags & 65011712),
				v !== null ? (c = qt(v, c)) : ((c = Da(c, u, a, null)), (c.flags |= 2)),
				(c.return = t),
				(e.return = t),
				(e.sibling = c),
				(t.child = e),
				au(null, e),
				(e = t.child),
				(c = l.child.memoizedState),
				c === null
					? (c = vc(a))
					: ((u = c.cachePool),
						u !== null
							? ((f = Tl._currentValue),
								(u = u.parent !== f ? { parent: f, pool: f } : u))
							: (u = N0()),
						(c = { baseLanes: c.baseLanes | a, cachePool: u })),
				(e.memoizedState = c),
				(e.childLanes = yc(l, i, a)),
				(t.memoizedState = hc),
				au(l.child, e))
			: (sa(t),
				(a = l.child),
				(l = a.sibling),
				(a = qt(a, { mode: "visible", children: e.children })),
				(a.return = t),
				(a.sibling = null),
				l !== null &&
					((i = t.deletions),
					i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
				(t.child = a),
				(t.memoizedState = null),
				a);
	}
	function gc(l, t) {
		return (
			(t = mn({ mode: "visible", children: t }, l.mode)),
			(t.return = l),
			(l.child = t)
		);
	}
	function mn(l, t) {
		return ((l = ct(22, l, null, t)), (l.lanes = 0), l);
	}
	function Sc(l, t, a) {
		return (
			Ya(t, l.child, null, a),
			(l = gc(t, t.pendingProps.children)),
			(l.flags |= 2),
			(t.memoizedState = null),
			l
		);
	}
	function Qs(l, t, a) {
		l.lanes |= t;
		var e = l.alternate;
		(e !== null && (e.lanes |= t), Ui(l.return, t, a));
	}
	function bc(l, t, a, e, u, n) {
		var i = l.memoizedState;
		i === null
			? (l.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: e,
					tail: a,
					tailMode: u,
					treeForkCount: n,
				})
			: ((i.isBackwards = t),
				(i.rendering = null),
				(i.renderingStartTime = 0),
				(i.last = e),
				(i.tail = a),
				(i.tailMode = u),
				(i.treeForkCount = n));
	}
	function Vs(l, t, a) {
		var e = t.pendingProps,
			u = e.revealOrder,
			n = e.tail;
		e = e.children;
		var i = pl.current,
			c = (i & 2) !== 0;
		if (
			(c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
			O(pl, i),
			Gl(l, t, e, a),
			(e = I ? Ve : 0),
			!c && l !== null && (l.flags & 128) !== 0)
		)
			l: for (l = t.child; l !== null; ) {
				if (l.tag === 13) l.memoizedState !== null && Qs(l, a, t);
				else if (l.tag === 19) Qs(l, a, t);
				else if (l.child !== null) {
					((l.child.return = l), (l = l.child));
					continue;
				}
				if (l === t) break l;
				for (; l.sibling === null; ) {
					if (l.return === null || l.return === t) break l;
					l = l.return;
				}
				((l.sibling.return = l.return), (l = l.sibling));
			}
		switch (u) {
			case "forwards":
				for (a = t.child, u = null; a !== null; )
					((l = a.alternate),
						l !== null && Pu(l) === null && (u = a),
						(a = a.sibling));
				((a = u),
					a === null
						? ((u = t.child), (t.child = null))
						: ((u = a.sibling), (a.sibling = null)),
					bc(t, !1, u, a, n, e));
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (a = null, u = t.child, t.child = null; u !== null; ) {
					if (((l = u.alternate), l !== null && Pu(l) === null)) {
						t.child = u;
						break;
					}
					((l = u.sibling), (u.sibling = a), (a = u), (u = l));
				}
				bc(t, !0, a, null, n, e);
				break;
			case "together":
				bc(t, !1, null, null, void 0, e);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function Vt(l, t, a) {
		if (
			(l !== null && (t.dependencies = l.dependencies),
			(ra |= t.lanes),
			(a & t.childLanes) === 0)
		)
			if (l !== null) {
				if ((ce(l, t, a, !1), (a & t.childLanes) === 0)) return null;
			} else return null;
		if (l !== null && t.child !== l.child) throw Error(d(153));
		if (t.child !== null) {
			for (
				l = t.child, a = qt(l, l.pendingProps), t.child = a, a.return = t;
				l.sibling !== null;
			)
				((l = l.sibling),
					(a = a.sibling = qt(l, l.pendingProps)),
					(a.return = t));
			a.sibling = null;
		}
		return t.child;
	}
	function pc(l, t) {
		return (l.lanes & t) !== 0
			? !0
			: ((l = l.dependencies), !!(l !== null && Ku(l)));
	}
	function dd(l, t, a) {
		switch (t.tag) {
			case 3:
				(Kl(t, t.stateNode.containerInfo),
					na(t, Tl, l.memoizedState.cache),
					Ca());
				break;
			case 27:
			case 5:
				Oe(t);
				break;
			case 4:
				Kl(t, t.stateNode.containerInfo);
				break;
			case 10:
				na(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return ((t.flags |= 128), Ki(t), null);
				break;
			case 13:
				var e = t.memoizedState;
				if (e !== null)
					return e.dehydrated !== null
						? (sa(t), (t.flags |= 128), null)
						: (a & t.child.childLanes) !== 0
							? Xs(l, t, a)
							: (sa(t), (l = Vt(l, t, a)), l !== null ? l.sibling : null);
				sa(t);
				break;
			case 19:
				var u = (l.flags & 128) !== 0;
				if (
					((e = (a & t.childLanes) !== 0),
					e || (ce(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
					u)
				) {
					if (e) return Vs(l, t, a);
					t.flags |= 128;
				}
				if (
					((u = t.memoizedState),
					u !== null &&
						((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
					O(pl, pl.current),
					e)
				)
					break;
				return null;
			case 22:
				return ((t.lanes = 0), Rs(l, t, a, t.pendingProps));
			case 24:
				na(t, Tl, l.memoizedState.cache);
		}
		return Vt(l, t, a);
	}
	function Ls(l, t, a) {
		if (l !== null)
			if (l.memoizedProps !== t.pendingProps) xl = !0;
			else {
				if (!pc(l, a) && (t.flags & 128) === 0) return ((xl = !1), dd(l, t, a));
				xl = (l.flags & 131072) !== 0;
			}
		else ((xl = !1), I && (t.flags & 1048576) !== 0 && z0(t, Ve, t.index));
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				l: {
					var e = t.pendingProps;
					if (((l = Ba(t.elementType)), (t.type = l), typeof l == "function"))
						Ai(l)
							? ((e = Za(l, e)), (t.tag = 1), (t = Gs(null, t, l, e, a)))
							: ((t.tag = 0), (t = rc(null, t, l, e, a)));
					else {
						if (l != null) {
							var u = l.$$typeof;
							if (u === Nl) {
								((t.tag = 11), (t = Cs(null, t, l, e, a)));
								break l;
							} else if (u === J) {
								((t.tag = 14), (t = Us(null, t, l, e, a)));
								break l;
							}
						}
						throw ((t = Ot(l) || l), Error(d(306, t, "")));
					}
				}
				return t;
			case 0:
				return rc(l, t, t.type, t.pendingProps, a);
			case 1:
				return ((e = t.type), (u = Za(e, t.pendingProps)), Gs(l, t, e, u, a));
			case 3:
				l: {
					if ((Kl(t, t.stateNode.containerInfo), l === null))
						throw Error(d(387));
					e = t.pendingProps;
					var n = t.memoizedState;
					((u = n.element), Zi(l, t), Fe(t, e, null, a));
					var i = t.memoizedState;
					if (
						((e = i.cache),
						na(t, Tl, e),
						e !== n.cache && Hi(t, [Tl], a, !0),
						ke(),
						(e = i.element),
						n.isDehydrated)
					)
						if (
							((n = { element: e, isDehydrated: !1, cache: i.cache }),
							(t.updateQueue.baseState = n),
							(t.memoizedState = n),
							t.flags & 256)
						) {
							t = Zs(l, t, e, a);
							break l;
						} else if (e !== u) {
							((u = St(Error(d(424)), t)), Le(u), (t = Zs(l, t, e, a)));
							break l;
						} else {
							switch (((l = t.stateNode.containerInfo), l.nodeType)) {
								case 9:
									l = l.body;
									break;
								default:
									l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
							}
							for (
								hl = Et(l.firstChild),
									ql = t,
									I = !0,
									ea = null,
									_t = !0,
									a = R0(t, null, e, a),
									t.child = a;
								a;
							)
								((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
						}
					else {
						if ((Ca(), e === u)) {
							t = Vt(l, t, a);
							break l;
						}
						Gl(l, t, e, a);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					dn(l, t),
					l === null
						? (a = t2(t.type, null, t.pendingProps, null))
							? (t.memoizedState = a)
							: I ||
								((a = t.type),
								(l = t.pendingProps),
								(e = On(w.current).createElement(a)),
								(e[Bl] = t),
								(e[wl] = l),
								Zl(e, a, l),
								Ul(e),
								(t.stateNode = e))
						: (t.memoizedState = t2(
								t.type,
								l.memoizedProps,
								t.pendingProps,
								l.memoizedState,
							)),
					null
				);
			case 27:
				return (
					Oe(t),
					l === null &&
						I &&
						((e = t.stateNode = I1(t.type, t.pendingProps, w.current)),
						(ql = t),
						(_t = !0),
						(u = hl),
						Sa(t.type) ? ((Pc = u), (hl = Et(e.firstChild))) : (hl = u)),
					Gl(l, t, t.pendingProps.children, a),
					dn(l, t),
					l === null && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					l === null &&
						I &&
						((u = e = hl) &&
							((e = Xd(e, t.type, t.pendingProps, _t)),
							e !== null
								? ((t.stateNode = e),
									(ql = t),
									(hl = Et(e.firstChild)),
									(_t = !1),
									(u = !0))
								: (u = !1)),
						u || ua(t)),
					Oe(t),
					(u = t.type),
					(n = t.pendingProps),
					(i = l !== null ? l.memoizedProps : null),
					(e = n.children),
					Wc(u, n) ? (e = null) : i !== null && Wc(u, i) && (t.flags |= 32),
					t.memoizedState !== null &&
						((u = wi(l, t, ad, null, null, a)), (gu._currentValue = u)),
					dn(l, t),
					Gl(l, t, e, a),
					t.child
				);
			case 6:
				return (
					l === null &&
						I &&
						((l = a = hl) &&
							((a = Qd(a, t.pendingProps, _t)),
							a !== null
								? ((t.stateNode = a), (ql = t), (hl = null), (l = !0))
								: (l = !1)),
						l || ua(t)),
					null
				);
			case 13:
				return Xs(l, t, a);
			case 4:
				return (
					Kl(t, t.stateNode.containerInfo),
					(e = t.pendingProps),
					l === null ? (t.child = Ya(t, null, e, a)) : Gl(l, t, e, a),
					t.child
				);
			case 11:
				return Cs(l, t, t.type, t.pendingProps, a);
			case 7:
				return (Gl(l, t, t.pendingProps, a), t.child);
			case 8:
				return (Gl(l, t, t.pendingProps.children, a), t.child);
			case 12:
				return (Gl(l, t, t.pendingProps.children, a), t.child);
			case 10:
				return (
					(e = t.pendingProps),
					na(t, t.type, e.value),
					Gl(l, t, e.children, a),
					t.child
				);
			case 9:
				return (
					(u = t.type._context),
					(e = t.pendingProps.children),
					Ha(t),
					(u = Yl(u)),
					(e = e(u)),
					(t.flags |= 1),
					Gl(l, t, e, a),
					t.child
				);
			case 14:
				return Us(l, t, t.type, t.pendingProps, a);
			case 15:
				return Hs(l, t, t.type, t.pendingProps, a);
			case 19:
				return Vs(l, t, a);
			case 31:
				return od(l, t, a);
			case 22:
				return Rs(l, t, a, t.pendingProps);
			case 24:
				return (
					Ha(t),
					(e = Yl(Tl)),
					l === null
						? ((u = qi()),
							u === null &&
								((u = rl),
								(n = Ri()),
								(u.pooledCache = n),
								n.refCount++,
								n !== null && (u.pooledCacheLanes |= a),
								(u = n)),
							(t.memoizedState = { parent: e, cache: u }),
							Gi(t),
							na(t, Tl, u))
						: ((l.lanes & a) !== 0 && (Zi(l, t), Fe(t, null, null, a), ke()),
							(u = l.memoizedState),
							(n = t.memoizedState),
							u.parent !== e
								? ((u = { parent: e, cache: e }),
									(t.memoizedState = u),
									t.lanes === 0 &&
										(t.memoizedState = t.updateQueue.baseState = u),
									na(t, Tl, e))
								: ((e = n.cache),
									na(t, Tl, e),
									e !== u.cache && Hi(t, [Tl], a, !0))),
					Gl(l, t, t.pendingProps.children, a),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(d(156, t.tag));
	}
	function Lt(l) {
		l.flags |= 4;
	}
	function _c(l, t, a, e, u) {
		if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
			if (((l.flags |= 16777216), (u & 335544128) === u))
				if (l.stateNode.complete) l.flags |= 8192;
				else if (g1()) l.flags |= 8192;
				else throw ((qa = $u), Yi);
		} else l.flags &= -16777217;
	}
	function Ks(l, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
			l.flags &= -16777217;
		else if (((l.flags |= 16777216), !i2(t)))
			if (g1()) l.flags |= 8192;
			else throw ((qa = $u), Yi);
	}
	function rn(l, t) {
		(t !== null && (l.flags |= 4),
			l.flags & 16384 &&
				((t = l.tag !== 22 ? Tf() : 536870912), (l.lanes |= t), (be |= t)));
	}
	function eu(l, t) {
		if (!I)
			switch (l.tailMode) {
				case "hidden":
					t = l.tail;
					for (var a = null; t !== null; )
						(t.alternate !== null && (a = t), (t = t.sibling));
					a === null ? (l.tail = null) : (a.sibling = null);
					break;
				case "collapsed":
					a = l.tail;
					for (var e = null; a !== null; )
						(a.alternate !== null && (e = a), (a = a.sibling));
					e === null
						? t || l.tail === null
							? (l.tail = null)
							: (l.tail.sibling = null)
						: (e.sibling = null);
			}
	}
	function vl(l) {
		var t = l.alternate !== null && l.alternate.child === l.child,
			a = 0,
			e = 0;
		if (t)
			for (var u = l.child; u !== null; )
				((a |= u.lanes | u.childLanes),
					(e |= u.subtreeFlags & 65011712),
					(e |= u.flags & 65011712),
					(u.return = l),
					(u = u.sibling));
		else
			for (u = l.child; u !== null; )
				((a |= u.lanes | u.childLanes),
					(e |= u.subtreeFlags),
					(e |= u.flags),
					(u.return = l),
					(u = u.sibling));
		return ((l.subtreeFlags |= e), (l.childLanes = a), t);
	}
	function md(l, t, a) {
		var e = t.pendingProps;
		switch ((Ni(t), t.tag)) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return (vl(t), null);
			case 1:
				return (vl(t), null);
			case 3:
				return (
					(a = t.stateNode),
					(e = null),
					l !== null && (e = l.memoizedState.cache),
					t.memoizedState.cache !== e && (t.flags |= 2048),
					Zt(Tl),
					bl(),
					a.pendingContext &&
						((a.context = a.pendingContext), (a.pendingContext = null)),
					(l === null || l.child === null) &&
						(ie(t)
							? Lt(t)
							: l === null ||
								(l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
								((t.flags |= 1024), Di())),
					vl(t),
					null
				);
			case 26:
				var u = t.type,
					n = t.memoizedState;
				return (
					l === null
						? (Lt(t),
							n !== null ? (vl(t), Ks(t, n)) : (vl(t), _c(t, u, null, e, a)))
						: n
							? n !== l.memoizedState
								? (Lt(t), vl(t), Ks(t, n))
								: (vl(t), (t.flags &= -16777217))
							: ((l = l.memoizedProps),
								l !== e && Lt(t),
								vl(t),
								_c(t, u, l, e, a)),
					null
				);
			case 27:
				if (
					(Eu(t),
					(a = w.current),
					(u = t.type),
					l !== null && t.stateNode != null)
				)
					l.memoizedProps !== e && Lt(t);
				else {
					if (!e) {
						if (t.stateNode === null) throw Error(d(166));
						return (vl(t), null);
					}
					((l = C.current),
						ie(t) ? T0(t) : ((l = I1(u, e, a)), (t.stateNode = l), Lt(t)));
				}
				return (vl(t), null);
			case 5:
				if ((Eu(t), (u = t.type), l !== null && t.stateNode != null))
					l.memoizedProps !== e && Lt(t);
				else {
					if (!e) {
						if (t.stateNode === null) throw Error(d(166));
						return (vl(t), null);
					}
					if (((n = C.current), ie(t))) T0(t);
					else {
						var i = On(w.current);
						switch (n) {
							case 1:
								n = i.createElementNS("http://www.w3.org/2000/svg", u);
								break;
							case 2:
								n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
								break;
							default:
								switch (u) {
									case "svg":
										n = i.createElementNS("http://www.w3.org/2000/svg", u);
										break;
									case "math":
										n = i.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											u,
										);
										break;
									case "script":
										((n = i.createElement("div")),
											(n.innerHTML = "<script><\/script>"),
											(n = n.removeChild(n.firstChild)));
										break;
									case "select":
										((n =
											typeof e.is == "string"
												? i.createElement("select", { is: e.is })
												: i.createElement("select")),
											e.multiple
												? (n.multiple = !0)
												: e.size && (n.size = e.size));
										break;
									default:
										n =
											typeof e.is == "string"
												? i.createElement(u, { is: e.is })
												: i.createElement(u);
								}
						}
						((n[Bl] = t), (n[wl] = e));
						l: for (i = t.child; i !== null; ) {
							if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
							else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
								((i.child.return = i), (i = i.child));
								continue;
							}
							if (i === t) break l;
							for (; i.sibling === null; ) {
								if (i.return === null || i.return === t) break l;
								i = i.return;
							}
							((i.sibling.return = i.return), (i = i.sibling));
						}
						t.stateNode = n;
						l: switch ((Zl(n, u, e), u)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								e = !!e.autoFocus;
								break l;
							case "img":
								e = !0;
								break l;
							default:
								e = !1;
						}
						e && Lt(t);
					}
				}
				return (
					vl(t),
					_c(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
					null
				);
			case 6:
				if (l && t.stateNode != null) l.memoizedProps !== e && Lt(t);
				else {
					if (typeof e != "string" && t.stateNode === null) throw Error(d(166));
					if (((l = w.current), ie(t))) {
						if (
							((l = t.stateNode),
							(a = t.memoizedProps),
							(e = null),
							(u = ql),
							u !== null)
						)
							switch (u.tag) {
								case 27:
								case 5:
									e = u.memoizedProps;
							}
						((l[Bl] = t),
							(l = !!(
								l.nodeValue === a ||
								(e !== null && e.suppressHydrationWarning === !0) ||
								X1(l.nodeValue, a)
							)),
							l || ua(t, !0));
					} else
						((l = On(l).createTextNode(e)), (l[Bl] = t), (t.stateNode = l));
				}
				return (vl(t), null);
			case 31:
				if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
					if (((e = ie(t)), a !== null)) {
						if (l === null) {
							if (!e) throw Error(d(318));
							if (
								((l = t.memoizedState),
								(l = l !== null ? l.dehydrated : null),
								!l)
							)
								throw Error(d(557));
							l[Bl] = t;
						} else
							(Ca(),
								(t.flags & 128) === 0 && (t.memoizedState = null),
								(t.flags |= 4));
						(vl(t), (l = !1));
					} else
						((a = Di()),
							l !== null &&
								l.memoizedState !== null &&
								(l.memoizedState.hydrationErrors = a),
							(l = !0));
					if (!l) return t.flags & 256 ? (st(t), t) : (st(t), null);
					if ((t.flags & 128) !== 0) throw Error(d(558));
				}
				return (vl(t), null);
			case 13:
				if (
					((e = t.memoizedState),
					l === null ||
						(l.memoizedState !== null && l.memoizedState.dehydrated !== null))
				) {
					if (((u = ie(t)), e !== null && e.dehydrated !== null)) {
						if (l === null) {
							if (!u) throw Error(d(318));
							if (
								((u = t.memoizedState),
								(u = u !== null ? u.dehydrated : null),
								!u)
							)
								throw Error(d(317));
							u[Bl] = t;
						} else
							(Ca(),
								(t.flags & 128) === 0 && (t.memoizedState = null),
								(t.flags |= 4));
						(vl(t), (u = !1));
					} else
						((u = Di()),
							l !== null &&
								l.memoizedState !== null &&
								(l.memoizedState.hydrationErrors = u),
							(u = !0));
					if (!u) return t.flags & 256 ? (st(t), t) : (st(t), null);
				}
				return (
					st(t),
					(t.flags & 128) !== 0
						? ((t.lanes = a), t)
						: ((a = e !== null),
							(l = l !== null && l.memoizedState !== null),
							a &&
								((e = t.child),
								(u = null),
								e.alternate !== null &&
									e.alternate.memoizedState !== null &&
									e.alternate.memoizedState.cachePool !== null &&
									(u = e.alternate.memoizedState.cachePool.pool),
								(n = null),
								e.memoizedState !== null &&
									e.memoizedState.cachePool !== null &&
									(n = e.memoizedState.cachePool.pool),
								n !== u && (e.flags |= 2048)),
							a !== l && a && (t.child.flags |= 8192),
							rn(t, t.updateQueue),
							vl(t),
							null)
				);
			case 4:
				return (bl(), l === null && Vc(t.stateNode.containerInfo), vl(t), null);
			case 10:
				return (Zt(t.type), vl(t), null);
			case 19:
				if ((E(pl), (e = t.memoizedState), e === null)) return (vl(t), null);
				if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
					if (u) eu(e, !1);
					else {
						if (Sl !== 0 || (l !== null && (l.flags & 128) !== 0))
							for (l = t.child; l !== null; ) {
								if (((n = Pu(l)), n !== null)) {
									for (
										t.flags |= 128,
											eu(e, !1),
											l = n.updateQueue,
											t.updateQueue = l,
											rn(t, l),
											t.subtreeFlags = 0,
											l = a,
											a = t.child;
										a !== null;
									)
										(b0(a, l), (a = a.sibling));
									return (
										O(pl, (pl.current & 1) | 2),
										I && Yt(t, e.treeForkCount),
										t.child
									);
								}
								l = l.sibling;
							}
						e.tail !== null &&
							et() > Sn &&
							((t.flags |= 128), (u = !0), eu(e, !1), (t.lanes = 4194304));
					}
				else {
					if (!u)
						if (((l = Pu(n)), l !== null)) {
							if (
								((t.flags |= 128),
								(u = !0),
								(l = l.updateQueue),
								(t.updateQueue = l),
								rn(t, l),
								eu(e, !0),
								e.tail === null &&
									e.tailMode === "hidden" &&
									!n.alternate &&
									!I)
							)
								return (vl(t), null);
						} else
							2 * et() - e.renderingStartTime > Sn &&
								a !== 536870912 &&
								((t.flags |= 128), (u = !0), eu(e, !1), (t.lanes = 4194304));
					e.isBackwards
						? ((n.sibling = t.child), (t.child = n))
						: ((l = e.last),
							l !== null ? (l.sibling = n) : (t.child = n),
							(e.last = n));
				}
				return e.tail !== null
					? ((l = e.tail),
						(e.rendering = l),
						(e.tail = l.sibling),
						(e.renderingStartTime = et()),
						(l.sibling = null),
						(a = pl.current),
						O(pl, u ? (a & 1) | 2 : a & 1),
						I && Yt(t, e.treeForkCount),
						l)
					: (vl(t), null);
			case 22:
			case 23:
				return (
					st(t),
					Li(),
					(e = t.memoizedState !== null),
					l !== null
						? (l.memoizedState !== null) !== e && (t.flags |= 8192)
						: e && (t.flags |= 8192),
					e
						? (a & 536870912) !== 0 &&
							(t.flags & 128) === 0 &&
							(vl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: vl(t),
					(a = t.updateQueue),
					a !== null && rn(t, a.retryQueue),
					(a = null),
					l !== null &&
						l.memoizedState !== null &&
						l.memoizedState.cachePool !== null &&
						(a = l.memoizedState.cachePool.pool),
					(e = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(e = t.memoizedState.cachePool.pool),
					e !== a && (t.flags |= 2048),
					l !== null && E(Ra),
					null
				);
			case 24:
				return (
					(a = null),
					l !== null && (a = l.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					Zt(Tl),
					vl(t),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(d(156, t.tag));
	}
	function rd(l, t) {
		switch ((Ni(t), t.tag)) {
			case 1:
				return (
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 3:
				return (
					Zt(Tl),
					bl(),
					(l = t.flags),
					(l & 65536) !== 0 && (l & 128) === 0
						? ((t.flags = (l & -65537) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return (Eu(t), null);
			case 31:
				if (t.memoizedState !== null) {
					if ((st(t), t.alternate === null)) throw Error(d(340));
					Ca();
				}
				return (
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 13:
				if (
					(st(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(d(340));
					Ca();
				}
				return (
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 19:
				return (E(pl), null);
			case 4:
				return (bl(), null);
			case 10:
				return (Zt(t.type), null);
			case 22:
			case 23:
				return (
					st(t),
					Li(),
					l !== null && E(Ra),
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 24:
				return (Zt(Tl), null);
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Js(l, t) {
		switch ((Ni(t), t.tag)) {
			case 3:
				(Zt(Tl), bl());
				break;
			case 26:
			case 27:
			case 5:
				Eu(t);
				break;
			case 4:
				bl();
				break;
			case 31:
				t.memoizedState !== null && st(t);
				break;
			case 13:
				st(t);
				break;
			case 19:
				E(pl);
				break;
			case 10:
				Zt(t.type);
				break;
			case 22:
			case 23:
				(st(t), Li(), l !== null && E(Ra));
				break;
			case 24:
				Zt(Tl);
		}
	}
	function uu(l, t) {
		try {
			var a = t.updateQueue,
				e = a !== null ? a.lastEffect : null;
			if (e !== null) {
				var u = e.next;
				a = u;
				do {
					if ((a.tag & l) === l) {
						e = void 0;
						var n = a.create,
							i = a.inst;
						((e = n()), (i.destroy = e));
					}
					a = a.next;
				} while (a !== u);
			}
		} catch (c) {
			nl(t, t.return, c);
		}
	}
	function da(l, t, a) {
		try {
			var e = t.updateQueue,
				u = e !== null ? e.lastEffect : null;
			if (u !== null) {
				var n = u.next;
				e = n;
				do {
					if ((e.tag & l) === l) {
						var i = e.inst,
							c = i.destroy;
						if (c !== void 0) {
							((i.destroy = void 0), (u = t));
							var f = a,
								v = c;
							try {
								v();
							} catch (b) {
								nl(u, f, b);
							}
						}
					}
					e = e.next;
				} while (e !== n);
			}
		} catch (b) {
			nl(t, t.return, b);
		}
	}
	function ws(l) {
		var t = l.updateQueue;
		if (t !== null) {
			var a = l.stateNode;
			try {
				q0(t, a);
			} catch (e) {
				nl(l, l.return, e);
			}
		}
	}
	function Ws(l, t, a) {
		((a.props = Za(l.type, l.memoizedProps)), (a.state = l.memoizedState));
		try {
			a.componentWillUnmount();
		} catch (e) {
			nl(l, t, e);
		}
	}
	function nu(l, t) {
		try {
			var a = l.ref;
			if (a !== null) {
				switch (l.tag) {
					case 26:
					case 27:
					case 5:
						var e = l.stateNode;
						break;
					case 30:
						e = l.stateNode;
						break;
					default:
						e = l.stateNode;
				}
				typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
			}
		} catch (u) {
			nl(l, t, u);
		}
	}
	function Dt(l, t) {
		var a = l.ref,
			e = l.refCleanup;
		if (a !== null)
			if (typeof e == "function")
				try {
					e();
				} catch (u) {
					nl(l, t, u);
				} finally {
					((l.refCleanup = null),
						(l = l.alternate),
						l != null && (l.refCleanup = null));
				}
			else if (typeof a == "function")
				try {
					a(null);
				} catch (u) {
					nl(l, t, u);
				}
			else a.current = null;
	}
	function $s(l) {
		var t = l.type,
			a = l.memoizedProps,
			e = l.stateNode;
		try {
			l: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					a.autoFocus && e.focus();
					break l;
				case "img":
					a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
			}
		} catch (u) {
			nl(l, l.return, u);
		}
	}
	function zc(l, t, a) {
		try {
			var e = l.stateNode;
			(Rd(e, l.type, a, t), (e[wl] = t));
		} catch (u) {
			nl(l, l.return, u);
		}
	}
	function ks(l) {
		return (
			l.tag === 5 ||
			l.tag === 3 ||
			l.tag === 26 ||
			(l.tag === 27 && Sa(l.type)) ||
			l.tag === 4
		);
	}
	function Ec(l) {
		l: for (;;) {
			for (; l.sibling === null; ) {
				if (l.return === null || ks(l.return)) return null;
				l = l.return;
			}
			for (
				l.sibling.return = l.return, l = l.sibling;
				l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
			) {
				if (
					(l.tag === 27 && Sa(l.type)) ||
					l.flags & 2 ||
					l.child === null ||
					l.tag === 4
				)
					continue l;
				((l.child.return = l), (l = l.child));
			}
			if (!(l.flags & 2)) return l.stateNode;
		}
	}
	function Tc(l, t, a) {
		var e = l.tag;
		if (e === 5 || e === 6)
			((l = l.stateNode),
				t
					? (a.nodeType === 9
							? a.body
							: a.nodeName === "HTML"
								? a.ownerDocument.body
								: a
						).insertBefore(l, t)
					: ((t =
							a.nodeType === 9
								? a.body
								: a.nodeName === "HTML"
									? a.ownerDocument.body
									: a),
						t.appendChild(l),
						(a = a._reactRootContainer),
						a != null || t.onclick !== null || (t.onclick = Rt)));
		else if (
			e !== 4 &&
			(e === 27 && Sa(l.type) && ((a = l.stateNode), (t = null)),
			(l = l.child),
			l !== null)
		)
			for (Tc(l, t, a), l = l.sibling; l !== null; )
				(Tc(l, t, a), (l = l.sibling));
	}
	function hn(l, t, a) {
		var e = l.tag;
		if (e === 5 || e === 6)
			((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
		else if (
			e !== 4 &&
			(e === 27 && Sa(l.type) && (a = l.stateNode), (l = l.child), l !== null)
		)
			for (hn(l, t, a), l = l.sibling; l !== null; )
				(hn(l, t, a), (l = l.sibling));
	}
	function Fs(l) {
		var t = l.stateNode,
			a = l.memoizedProps;
		try {
			for (var e = l.type, u = t.attributes; u.length; )
				t.removeAttributeNode(u[0]);
			(Zl(t, e, a), (t[Bl] = l), (t[wl] = a));
		} catch (n) {
			nl(l, l.return, n);
		}
	}
	var Kt = !1,
		Ml = !1,
		Ac = !1,
		Is = typeof WeakSet == "function" ? WeakSet : Set,
		Hl = null;
	function hd(l, t) {
		if (((l = l.containerInfo), (Jc = Rn), (l = o0(l)), Si(l))) {
			if ("selectionStart" in l)
				var a = { start: l.selectionStart, end: l.selectionEnd };
			else
				l: {
					a = ((a = l.ownerDocument) && a.defaultView) || window;
					var e = a.getSelection && a.getSelection();
					if (e && e.rangeCount !== 0) {
						a = e.anchorNode;
						var u = e.anchorOffset,
							n = e.focusNode;
						e = e.focusOffset;
						try {
							(a.nodeType, n.nodeType);
						} catch {
							a = null;
							break l;
						}
						var i = 0,
							c = -1,
							f = -1,
							v = 0,
							b = 0,
							z = l,
							g = null;
						t: for (;;) {
							for (
								var S;
								z !== a || (u !== 0 && z.nodeType !== 3) || (c = i + u),
									z !== n || (e !== 0 && z.nodeType !== 3) || (f = i + e),
									z.nodeType === 3 && (i += z.nodeValue.length),
									(S = z.firstChild) !== null;
							)
								((g = z), (z = S));
							for (;;) {
								if (z === l) break t;
								if (
									(g === a && ++v === u && (c = i),
									g === n && ++b === e && (f = i),
									(S = z.nextSibling) !== null)
								)
									break;
								((z = g), (g = z.parentNode));
							}
							z = S;
						}
						a = c === -1 || f === -1 ? null : { start: c, end: f };
					} else a = null;
				}
			a = a || { start: 0, end: 0 };
		} else a = null;
		for (
			wc = { focusedElem: l, selectionRange: a }, Rn = !1, Hl = t;
			Hl !== null;
		)
			if (
				((t = Hl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
			)
				((l.return = t), (Hl = l));
			else
				for (; Hl !== null; ) {
					switch (((t = Hl), (n = t.alternate), (l = t.flags), t.tag)) {
						case 0:
							if (
								(l & 4) !== 0 &&
								((l = t.updateQueue),
								(l = l !== null ? l.events : null),
								l !== null)
							)
								for (a = 0; a < l.length; a++)
									((u = l[a]), (u.ref.impl = u.nextImpl));
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((l & 1024) !== 0 && n !== null) {
								((l = void 0),
									(a = t),
									(u = n.memoizedProps),
									(n = n.memoizedState),
									(e = a.stateNode));
								try {
									var N = Za(a.type, u);
									((l = e.getSnapshotBeforeUpdate(N, n)),
										(e.__reactInternalSnapshotBeforeUpdate = l));
								} catch (B) {
									nl(a, a.return, B);
								}
							}
							break;
						case 3:
							if ((l & 1024) !== 0) {
								if (
									((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
								)
									kc(l);
								else if (a === 1)
									switch (l.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											kc(l);
											break;
										default:
											l.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((l & 1024) !== 0) throw Error(d(163));
					}
					if (((l = t.sibling), l !== null)) {
						((l.return = t.return), (Hl = l));
						break;
					}
					Hl = t.return;
				}
	}
	function Ps(l, t, a) {
		var e = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 15:
				(wt(l, a), e & 4 && uu(5, a));
				break;
			case 1:
				if ((wt(l, a), e & 4))
					if (((l = a.stateNode), t === null))
						try {
							l.componentDidMount();
						} catch (i) {
							nl(a, a.return, i);
						}
					else {
						var u = Za(a.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
						} catch (i) {
							nl(a, a.return, i);
						}
					}
				(e & 64 && ws(a), e & 512 && nu(a, a.return));
				break;
			case 3:
				if ((wt(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
					if (((t = null), a.child !== null))
						switch (a.child.tag) {
							case 27:
							case 5:
								t = a.child.stateNode;
								break;
							case 1:
								t = a.child.stateNode;
						}
					try {
						q0(l, t);
					} catch (i) {
						nl(a, a.return, i);
					}
				}
				break;
			case 27:
				t === null && e & 4 && Fs(a);
			case 26:
			case 5:
				(wt(l, a), t === null && e & 4 && $s(a), e & 512 && nu(a, a.return));
				break;
			case 12:
				wt(l, a);
				break;
			case 31:
				(wt(l, a), e & 4 && a1(l, a));
				break;
			case 13:
				(wt(l, a),
					e & 4 && e1(l, a),
					e & 64 &&
						((l = a.memoizedState),
						l !== null &&
							((l = l.dehydrated),
							l !== null && ((a = Ed.bind(null, a)), Vd(l, a)))));
				break;
			case 22:
				if (((e = a.memoizedState !== null || Kt), !e)) {
					((t = (t !== null && t.memoizedState !== null) || Ml), (u = Kt));
					var n = Ml;
					((Kt = e),
						(Ml = t) && !n ? Wt(l, a, (a.subtreeFlags & 8772) !== 0) : wt(l, a),
						(Kt = u),
						(Ml = n));
				}
				break;
			case 30:
				break;
			default:
				wt(l, a);
		}
	}
	function l1(l) {
		var t = l.alternate;
		(t !== null && ((l.alternate = null), l1(t)),
			(l.child = null),
			(l.deletions = null),
			(l.sibling = null),
			l.tag === 5 && ((t = l.stateNode), t !== null && ti(t)),
			(l.stateNode = null),
			(l.return = null),
			(l.dependencies = null),
			(l.memoizedProps = null),
			(l.memoizedState = null),
			(l.pendingProps = null),
			(l.stateNode = null),
			(l.updateQueue = null));
	}
	var yl = null,
		$l = !1;
	function Jt(l, t, a) {
		for (a = a.child; a !== null; ) (t1(l, t, a), (a = a.sibling));
	}
	function t1(l, t, a) {
		if (ut && typeof ut.onCommitFiberUnmount == "function")
			try {
				ut.onCommitFiberUnmount(Ne, a);
			} catch {}
		switch (a.tag) {
			case 26:
				(Ml || Dt(a, t),
					Jt(l, t, a),
					a.memoizedState
						? a.memoizedState.count--
						: a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
				break;
			case 27:
				Ml || Dt(a, t);
				var e = yl,
					u = $l;
				(Sa(a.type) && ((yl = a.stateNode), ($l = !1)),
					Jt(l, t, a),
					hu(a.stateNode),
					(yl = e),
					($l = u));
				break;
			case 5:
				Ml || Dt(a, t);
			case 6:
				if (
					((e = yl),
					(u = $l),
					(yl = null),
					Jt(l, t, a),
					(yl = e),
					($l = u),
					yl !== null)
				)
					if ($l)
						try {
							(yl.nodeType === 9
								? yl.body
								: yl.nodeName === "HTML"
									? yl.ownerDocument.body
									: yl
							).removeChild(a.stateNode);
						} catch (n) {
							nl(a, t, n);
						}
					else
						try {
							yl.removeChild(a.stateNode);
						} catch (n) {
							nl(a, t, n);
						}
				break;
			case 18:
				yl !== null &&
					($l
						? ((l = yl),
							w1(
								l.nodeType === 9
									? l.body
									: l.nodeName === "HTML"
										? l.ownerDocument.body
										: l,
								a.stateNode,
							),
							Me(l))
						: w1(yl, a.stateNode));
				break;
			case 4:
				((e = yl),
					(u = $l),
					(yl = a.stateNode.containerInfo),
					($l = !0),
					Jt(l, t, a),
					(yl = e),
					($l = u));
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				(da(2, a, t), Ml || da(4, a, t), Jt(l, t, a));
				break;
			case 1:
				(Ml ||
					(Dt(a, t),
					(e = a.stateNode),
					typeof e.componentWillUnmount == "function" && Ws(a, t, e)),
					Jt(l, t, a));
				break;
			case 21:
				Jt(l, t, a);
				break;
			case 22:
				((Ml = (e = Ml) || a.memoizedState !== null), Jt(l, t, a), (Ml = e));
				break;
			default:
				Jt(l, t, a);
		}
	}
	function a1(l, t) {
		if (
			t.memoizedState === null &&
			((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
		) {
			l = l.dehydrated;
			try {
				Me(l);
			} catch (a) {
				nl(t, t.return, a);
			}
		}
	}
	function e1(l, t) {
		if (
			t.memoizedState === null &&
			((l = t.alternate),
			l !== null &&
				((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
		)
			try {
				Me(l);
			} catch (a) {
				nl(t, t.return, a);
			}
	}
	function vd(l) {
		switch (l.tag) {
			case 31:
			case 13:
			case 19:
				var t = l.stateNode;
				return (t === null && (t = l.stateNode = new Is()), t);
			case 22:
				return (
					(l = l.stateNode),
					(t = l._retryCache),
					t === null && (t = l._retryCache = new Is()),
					t
				);
			default:
				throw Error(d(435, l.tag));
		}
	}
	function vn(l, t) {
		var a = vd(l);
		t.forEach(function (e) {
			if (!a.has(e)) {
				a.add(e);
				var u = Td.bind(null, l, e);
				e.then(u, u);
			}
		});
	}
	function kl(l, t) {
		var a = t.deletions;
		if (a !== null)
			for (var e = 0; e < a.length; e++) {
				var u = a[e],
					n = l,
					i = t,
					c = i;
				l: for (; c !== null; ) {
					switch (c.tag) {
						case 27:
							if (Sa(c.type)) {
								((yl = c.stateNode), ($l = !1));
								break l;
							}
							break;
						case 5:
							((yl = c.stateNode), ($l = !1));
							break l;
						case 3:
						case 4:
							((yl = c.stateNode.containerInfo), ($l = !0));
							break l;
					}
					c = c.return;
				}
				if (yl === null) throw Error(d(160));
				(t1(n, i, u),
					(yl = null),
					($l = !1),
					(n = u.alternate),
					n !== null && (n.return = null),
					(u.return = null));
			}
		if (t.subtreeFlags & 13886)
			for (t = t.child; t !== null; ) (u1(t, l), (t = t.sibling));
	}
	var xt = null;
	function u1(l, t) {
		var a = l.alternate,
			e = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				(kl(t, l),
					Fl(l),
					e & 4 && (da(3, l, l.return), uu(3, l), da(5, l, l.return)));
				break;
			case 1:
				(kl(t, l),
					Fl(l),
					e & 512 && (Ml || a === null || Dt(a, a.return)),
					e & 64 &&
						Kt &&
						((l = l.updateQueue),
						l !== null &&
							((e = l.callbacks),
							e !== null &&
								((a = l.shared.hiddenCallbacks),
								(l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
				break;
			case 26:
				var u = xt;
				if (
					(kl(t, l),
					Fl(l),
					e & 512 && (Ml || a === null || Dt(a, a.return)),
					e & 4)
				) {
					var n = a !== null ? a.memoizedState : null;
					if (((e = l.memoizedState), a === null))
						if (e === null)
							if (l.stateNode === null) {
								l: {
									((e = l.type),
										(a = l.memoizedProps),
										(u = u.ownerDocument || u));
									t: switch (e) {
										case "title":
											((n = u.getElementsByTagName("title")[0]),
												(!n ||
													n[Ce] ||
													n[Bl] ||
													n.namespaceURI === "http://www.w3.org/2000/svg" ||
													n.hasAttribute("itemprop")) &&
													((n = u.createElement(e)),
													u.head.insertBefore(
														n,
														u.querySelector("head > title"),
													)),
												Zl(n, e, a),
												(n[Bl] = l),
												Ul(n),
												(e = n));
											break l;
										case "link":
											var i = u2("link", "href", u).get(e + (a.href || ""));
											if (i) {
												for (var c = 0; c < i.length; c++)
													if (
														((n = i[c]),
														n.getAttribute("href") ===
															(a.href == null || a.href === ""
																? null
																: a.href) &&
															n.getAttribute("rel") ===
																(a.rel == null ? null : a.rel) &&
															n.getAttribute("title") ===
																(a.title == null ? null : a.title) &&
															n.getAttribute("crossorigin") ===
																(a.crossOrigin == null ? null : a.crossOrigin))
													) {
														i.splice(c, 1);
														break t;
													}
											}
											((n = u.createElement(e)),
												Zl(n, e, a),
												u.head.appendChild(n));
											break;
										case "meta":
											if (
												(i = u2("meta", "content", u).get(
													e + (a.content || ""),
												))
											) {
												for (c = 0; c < i.length; c++)
													if (
														((n = i[c]),
														n.getAttribute("content") ===
															(a.content == null ? null : "" + a.content) &&
															n.getAttribute("name") ===
																(a.name == null ? null : a.name) &&
															n.getAttribute("property") ===
																(a.property == null ? null : a.property) &&
															n.getAttribute("http-equiv") ===
																(a.httpEquiv == null ? null : a.httpEquiv) &&
															n.getAttribute("charset") ===
																(a.charSet == null ? null : a.charSet))
													) {
														i.splice(c, 1);
														break t;
													}
											}
											((n = u.createElement(e)),
												Zl(n, e, a),
												u.head.appendChild(n));
											break;
										default:
											throw Error(d(468, e));
									}
									((n[Bl] = l), Ul(n), (e = n));
								}
								l.stateNode = e;
							} else n2(u, l.type, l.stateNode);
						else l.stateNode = e2(u, e, l.memoizedProps);
					else
						n !== e
							? (n === null
									? a.stateNode !== null &&
										((a = a.stateNode), a.parentNode.removeChild(a))
									: n.count--,
								e === null
									? n2(u, l.type, l.stateNode)
									: e2(u, e, l.memoizedProps))
							: e === null &&
								l.stateNode !== null &&
								zc(l, l.memoizedProps, a.memoizedProps);
				}
				break;
			case 27:
				(kl(t, l),
					Fl(l),
					e & 512 && (Ml || a === null || Dt(a, a.return)),
					a !== null && e & 4 && zc(l, l.memoizedProps, a.memoizedProps));
				break;
			case 5:
				if (
					(kl(t, l),
					Fl(l),
					e & 512 && (Ml || a === null || Dt(a, a.return)),
					l.flags & 32)
				) {
					u = l.stateNode;
					try {
						ka(u, "");
					} catch (N) {
						nl(l, l.return, N);
					}
				}
				(e & 4 &&
					l.stateNode != null &&
					((u = l.memoizedProps), zc(l, u, a !== null ? a.memoizedProps : u)),
					e & 1024 && (Ac = !0));
				break;
			case 6:
				if ((kl(t, l), Fl(l), e & 4)) {
					if (l.stateNode === null) throw Error(d(162));
					((e = l.memoizedProps), (a = l.stateNode));
					try {
						a.nodeValue = e;
					} catch (N) {
						nl(l, l.return, N);
					}
				}
				break;
			case 3:
				if (
					((Dn = null),
					(u = xt),
					(xt = Nn(t.containerInfo)),
					kl(t, l),
					(xt = u),
					Fl(l),
					e & 4 && a !== null && a.memoizedState.isDehydrated)
				)
					try {
						Me(t.containerInfo);
					} catch (N) {
						nl(l, l.return, N);
					}
				Ac && ((Ac = !1), n1(l));
				break;
			case 4:
				((e = xt),
					(xt = Nn(l.stateNode.containerInfo)),
					kl(t, l),
					Fl(l),
					(xt = e));
				break;
			case 12:
				(kl(t, l), Fl(l));
				break;
			case 31:
				(kl(t, l),
					Fl(l),
					e & 4 &&
						((e = l.updateQueue),
						e !== null && ((l.updateQueue = null), vn(l, e))));
				break;
			case 13:
				(kl(t, l),
					Fl(l),
					l.child.flags & 8192 &&
						(l.memoizedState !== null) !=
							(a !== null && a.memoizedState !== null) &&
						(gn = et()),
					e & 4 &&
						((e = l.updateQueue),
						e !== null && ((l.updateQueue = null), vn(l, e))));
				break;
			case 22:
				u = l.memoizedState !== null;
				var f = a !== null && a.memoizedState !== null,
					v = Kt,
					b = Ml;
				if (
					((Kt = v || u),
					(Ml = b || f),
					kl(t, l),
					(Ml = b),
					(Kt = v),
					Fl(l),
					e & 8192)
				)
					l: for (
						t = l.stateNode,
							t._visibility = u ? t._visibility & -2 : t._visibility | 1,
							u && (a === null || f || Kt || Ml || Xa(l)),
							a = null,
							t = l;
						;
					) {
						if (t.tag === 5 || t.tag === 26) {
							if (a === null) {
								f = a = t;
								try {
									if (((n = f.stateNode), u))
										((i = n.style),
											typeof i.setProperty == "function"
												? i.setProperty("display", "none", "important")
												: (i.display = "none"));
									else {
										c = f.stateNode;
										var z = f.memoizedProps.style,
											g =
												z != null && z.hasOwnProperty("display")
													? z.display
													: null;
										c.style.display =
											g == null || typeof g == "boolean" ? "" : ("" + g).trim();
									}
								} catch (N) {
									nl(f, f.return, N);
								}
							}
						} else if (t.tag === 6) {
							if (a === null) {
								f = t;
								try {
									f.stateNode.nodeValue = u ? "" : f.memoizedProps;
								} catch (N) {
									nl(f, f.return, N);
								}
							}
						} else if (t.tag === 18) {
							if (a === null) {
								f = t;
								try {
									var S = f.stateNode;
									u ? W1(S, !0) : W1(f.stateNode, !1);
								} catch (N) {
									nl(f, f.return, N);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === l) &&
							t.child !== null
						) {
							((t.child.return = t), (t = t.child));
							continue;
						}
						if (t === l) break l;
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === l) break l;
							(a === t && (a = null), (t = t.return));
						}
						(a === t && (a = null),
							(t.sibling.return = t.return),
							(t = t.sibling));
					}
				e & 4 &&
					((e = l.updateQueue),
					e !== null &&
						((a = e.retryQueue),
						a !== null && ((e.retryQueue = null), vn(l, a))));
				break;
			case 19:
				(kl(t, l),
					Fl(l),
					e & 4 &&
						((e = l.updateQueue),
						e !== null && ((l.updateQueue = null), vn(l, e))));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				(kl(t, l), Fl(l));
		}
	}
	function Fl(l) {
		var t = l.flags;
		if (t & 2) {
			try {
				for (var a, e = l.return; e !== null; ) {
					if (ks(e)) {
						a = e;
						break;
					}
					e = e.return;
				}
				if (a == null) throw Error(d(160));
				switch (a.tag) {
					case 27:
						var u = a.stateNode,
							n = Ec(l);
						hn(l, n, u);
						break;
					case 5:
						var i = a.stateNode;
						a.flags & 32 && (ka(i, ""), (a.flags &= -33));
						var c = Ec(l);
						hn(l, c, i);
						break;
					case 3:
					case 4:
						var f = a.stateNode.containerInfo,
							v = Ec(l);
						Tc(l, v, f);
						break;
					default:
						throw Error(d(161));
				}
			} catch (b) {
				nl(l, l.return, b);
			}
			l.flags &= -3;
		}
		t & 4096 && (l.flags &= -4097);
	}
	function n1(l) {
		if (l.subtreeFlags & 1024)
			for (l = l.child; l !== null; ) {
				var t = l;
				(n1(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(l = l.sibling));
			}
	}
	function wt(l, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; ) (Ps(l, t.alternate, t), (t = t.sibling));
	}
	function Xa(l) {
		for (l = l.child; l !== null; ) {
			var t = l;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					(da(4, t, t.return), Xa(t));
					break;
				case 1:
					Dt(t, t.return);
					var a = t.stateNode;
					(typeof a.componentWillUnmount == "function" && Ws(t, t.return, a),
						Xa(t));
					break;
				case 27:
					hu(t.stateNode);
				case 26:
				case 5:
					(Dt(t, t.return), Xa(t));
					break;
				case 22:
					t.memoizedState === null && Xa(t);
					break;
				case 30:
					Xa(t);
					break;
				default:
					Xa(t);
			}
			l = l.sibling;
		}
	}
	function Wt(l, t, a) {
		for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
			var e = t.alternate,
				u = l,
				n = t,
				i = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					(Wt(u, n, a), uu(4, n));
					break;
				case 1:
					if (
						(Wt(u, n, a),
						(e = n),
						(u = e.stateNode),
						typeof u.componentDidMount == "function")
					)
						try {
							u.componentDidMount();
						} catch (v) {
							nl(e, e.return, v);
						}
					if (((e = n), (u = e.updateQueue), u !== null)) {
						var c = e.stateNode;
						try {
							var f = u.shared.hiddenCallbacks;
							if (f !== null)
								for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
									B0(f[u], c);
						} catch (v) {
							nl(e, e.return, v);
						}
					}
					(a && i & 64 && ws(n), nu(n, n.return));
					break;
				case 27:
					Fs(n);
				case 26:
				case 5:
					(Wt(u, n, a), a && e === null && i & 4 && $s(n), nu(n, n.return));
					break;
				case 12:
					Wt(u, n, a);
					break;
				case 31:
					(Wt(u, n, a), a && i & 4 && a1(u, n));
					break;
				case 13:
					(Wt(u, n, a), a && i & 4 && e1(u, n));
					break;
				case 22:
					(n.memoizedState === null && Wt(u, n, a), nu(n, n.return));
					break;
				case 30:
					break;
				default:
					Wt(u, n, a);
			}
			t = t.sibling;
		}
	}
	function xc(l, t) {
		var a = null;
		(l !== null &&
			l.memoizedState !== null &&
			l.memoizedState.cachePool !== null &&
			(a = l.memoizedState.cachePool.pool),
			(l = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(l = t.memoizedState.cachePool.pool),
			l !== a && (l != null && l.refCount++, a != null && Ke(a)));
	}
	function Mc(l, t) {
		((l = null),
			t.alternate !== null && (l = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== l && (t.refCount++, l != null && Ke(l)));
	}
	function Mt(l, t, a, e) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) (i1(l, t, a, e), (t = t.sibling));
	}
	function i1(l, t, a, e) {
		var u = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				(Mt(l, t, a, e), u & 2048 && uu(9, t));
				break;
			case 1:
				Mt(l, t, a, e);
				break;
			case 3:
				(Mt(l, t, a, e),
					u & 2048 &&
						((l = null),
						t.alternate !== null && (l = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== l && (t.refCount++, l != null && Ke(l))));
				break;
			case 12:
				if (u & 2048) {
					(Mt(l, t, a, e), (l = t.stateNode));
					try {
						var n = t.memoizedProps,
							i = n.id,
							c = n.onPostCommit;
						typeof c == "function" &&
							c(
								i,
								t.alternate === null ? "mount" : "update",
								l.passiveEffectDuration,
								-0,
							);
					} catch (f) {
						nl(t, t.return, f);
					}
				} else Mt(l, t, a, e);
				break;
			case 31:
				Mt(l, t, a, e);
				break;
			case 13:
				Mt(l, t, a, e);
				break;
			case 23:
				break;
			case 22:
				((n = t.stateNode),
					(i = t.alternate),
					t.memoizedState !== null
						? n._visibility & 2
							? Mt(l, t, a, e)
							: iu(l, t)
						: n._visibility & 2
							? Mt(l, t, a, e)
							: ((n._visibility |= 2),
								ye(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
					u & 2048 && xc(i, t));
				break;
			case 24:
				(Mt(l, t, a, e), u & 2048 && Mc(t.alternate, t));
				break;
			default:
				Mt(l, t, a, e);
		}
	}
	function ye(l, t, a, e, u) {
		for (
			u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
			t !== null;
		) {
			var n = l,
				i = t,
				c = a,
				f = e,
				v = i.flags;
			switch (i.tag) {
				case 0:
				case 11:
				case 15:
					(ye(n, i, c, f, u), uu(8, i));
					break;
				case 23:
					break;
				case 22:
					var b = i.stateNode;
					(i.memoizedState !== null
						? b._visibility & 2
							? ye(n, i, c, f, u)
							: iu(n, i)
						: ((b._visibility |= 2), ye(n, i, c, f, u)),
						u && v & 2048 && xc(i.alternate, i));
					break;
				case 24:
					(ye(n, i, c, f, u), u && v & 2048 && Mc(i.alternate, i));
					break;
				default:
					ye(n, i, c, f, u);
			}
			t = t.sibling;
		}
	}
	function iu(l, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var a = l,
					e = t,
					u = e.flags;
				switch (e.tag) {
					case 22:
						(iu(a, e), u & 2048 && xc(e.alternate, e));
						break;
					case 24:
						(iu(a, e), u & 2048 && Mc(e.alternate, e));
						break;
					default:
						iu(a, e);
				}
				t = t.sibling;
			}
	}
	var cu = 8192;
	function ge(l, t, a) {
		if (l.subtreeFlags & cu)
			for (l = l.child; l !== null; ) (c1(l, t, a), (l = l.sibling));
	}
	function c1(l, t, a) {
		switch (l.tag) {
			case 26:
				(ge(l, t, a),
					l.flags & cu &&
						l.memoizedState !== null &&
						tm(a, xt, l.memoizedState, l.memoizedProps));
				break;
			case 5:
				ge(l, t, a);
				break;
			case 3:
			case 4:
				var e = xt;
				((xt = Nn(l.stateNode.containerInfo)), ge(l, t, a), (xt = e));
				break;
			case 22:
				l.memoizedState === null &&
					((e = l.alternate),
					e !== null && e.memoizedState !== null
						? ((e = cu), (cu = 16777216), ge(l, t, a), (cu = e))
						: ge(l, t, a));
				break;
			default:
				ge(l, t, a);
		}
	}
	function f1(l) {
		var t = l.alternate;
		if (t !== null && ((l = t.child), l !== null)) {
			t.child = null;
			do ((t = l.sibling), (l.sibling = null), (l = t));
			while (l !== null);
		}
	}
	function fu(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var e = t[a];
					((Hl = e), o1(e, l));
				}
			f1(l);
		}
		if (l.subtreeFlags & 10256)
			for (l = l.child; l !== null; ) (s1(l), (l = l.sibling));
	}
	function s1(l) {
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				(fu(l), l.flags & 2048 && da(9, l, l.return));
				break;
			case 3:
				fu(l);
				break;
			case 12:
				fu(l);
				break;
			case 22:
				var t = l.stateNode;
				l.memoizedState !== null &&
				t._visibility & 2 &&
				(l.return === null || l.return.tag !== 13)
					? ((t._visibility &= -3), yn(l))
					: fu(l);
				break;
			default:
				fu(l);
		}
	}
	function yn(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var e = t[a];
					((Hl = e), o1(e, l));
				}
			f1(l);
		}
		for (l = l.child; l !== null; ) {
			switch (((t = l), t.tag)) {
				case 0:
				case 11:
				case 15:
					(da(8, t, t.return), yn(t));
					break;
				case 22:
					((a = t.stateNode),
						a._visibility & 2 && ((a._visibility &= -3), yn(t)));
					break;
				default:
					yn(t);
			}
			l = l.sibling;
		}
	}
	function o1(l, t) {
		for (; Hl !== null; ) {
			var a = Hl;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					da(8, a, t);
					break;
				case 23:
				case 22:
					if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
						var e = a.memoizedState.cachePool.pool;
						e != null && e.refCount++;
					}
					break;
				case 24:
					Ke(a.memoizedState.cache);
			}
			if (((e = a.child), e !== null)) ((e.return = a), (Hl = e));
			else
				l: for (a = l; Hl !== null; ) {
					e = Hl;
					var u = e.sibling,
						n = e.return;
					if ((l1(e), e === a)) {
						Hl = null;
						break l;
					}
					if (u !== null) {
						((u.return = n), (Hl = u));
						break l;
					}
					Hl = n;
				}
		}
	}
	var yd = {
			getCacheForType: function (l) {
				var t = Yl(Tl),
					a = t.data.get(l);
				return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
			},
			cacheSignal: function () {
				return Yl(Tl).controller.signal;
			},
		},
		gd = typeof WeakMap == "function" ? WeakMap : Map,
		al = 0,
		rl = null,
		W = null,
		k = 0,
		ul = 0,
		ot = null,
		ma = !1,
		Se = !1,
		Oc = !1,
		$t = 0,
		Sl = 0,
		ra = 0,
		Qa = 0,
		Nc = 0,
		dt = 0,
		be = 0,
		su = null,
		Il = null,
		jc = !1,
		gn = 0,
		d1 = 0,
		Sn = 1 / 0,
		bn = null,
		ha = null,
		Dl = 0,
		va = null,
		pe = null,
		kt = 0,
		Dc = 0,
		Cc = null,
		m1 = null,
		ou = 0,
		Uc = null;
	function mt() {
		return (al & 2) !== 0 && k !== 0 ? k & -k : p.T !== null ? Gc() : Of();
	}
	function r1() {
		if (dt === 0)
			if ((k & 536870912) === 0 || I) {
				var l = xu;
				((xu <<= 1), (xu & 3932160) === 0 && (xu = 262144), (dt = l));
			} else dt = 536870912;
		return ((l = ft.current), l !== null && (l.flags |= 32), dt);
	}
	function Pl(l, t, a) {
		(((l === rl && (ul === 2 || ul === 9)) || l.cancelPendingCommit !== null) &&
			(_e(l, 0), ya(l, k, dt, !1)),
			De(l, a),
			((al & 2) === 0 || l !== rl) &&
				(l === rl &&
					((al & 2) === 0 && (Qa |= a), Sl === 4 && ya(l, k, dt, !1)),
				Ct(l)));
	}
	function h1(l, t, a) {
		if ((al & 6) !== 0) throw Error(d(327));
		var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || je(l, t),
			u = e ? pd(l, t) : Rc(l, t, !0),
			n = e;
		do {
			if (u === 0) {
				Se && !e && ya(l, t, 0, !1);
				break;
			} else {
				if (((a = l.current.alternate), n && !Sd(a))) {
					((u = Rc(l, t, !1)), (n = !1));
					continue;
				}
				if (u === 2) {
					if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
					else
						((i = l.pendingLanes & -536870913),
							(i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
					if (i !== 0) {
						t = i;
						l: {
							var c = l;
							u = su;
							var f = c.current.memoizedState.isDehydrated;
							if ((f && (_e(c, i).flags |= 256), (i = Rc(c, i, !1)), i !== 2)) {
								if (Oc && !f) {
									((c.errorRecoveryDisabledLanes |= n), (Qa |= n), (u = 4));
									break l;
								}
								((n = Il),
									(Il = u),
									n !== null &&
										(Il === null ? (Il = n) : Il.push.apply(Il, n)));
							}
							u = i;
						}
						if (((n = !1), u !== 2)) continue;
					}
				}
				if (u === 1) {
					(_e(l, 0), ya(l, t, 0, !0));
					break;
				}
				l: {
					switch (((e = l), (n = u), n)) {
						case 0:
						case 1:
							throw Error(d(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							ya(e, t, dt, !ma);
							break l;
						case 2:
							Il = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(d(329));
					}
					if ((t & 62914560) === t && ((u = gn + 300 - et()), 10 < u)) {
						if ((ya(e, t, dt, !ma), Ou(e, 0, !0) !== 0)) break l;
						((kt = t),
							(e.timeoutHandle = K1(
								v1.bind(
									null,
									e,
									a,
									Il,
									bn,
									jc,
									t,
									dt,
									Qa,
									be,
									ma,
									n,
									"Throttled",
									-0,
									0,
								),
								u,
							)));
						break l;
					}
					v1(e, a, Il, bn, jc, t, dt, Qa, be, ma, n, null, -0, 0);
				}
			}
			break;
		} while (!0);
		Ct(l);
	}
	function v1(l, t, a, e, u, n, i, c, f, v, b, z, g, S) {
		if (
			((l.timeoutHandle = -1),
			(z = t.subtreeFlags),
			z & 8192 || (z & 16785408) === 16785408)
		) {
			((z = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Rt,
			}),
				c1(t, n, z));
			var N =
				(n & 62914560) === n ? gn - et() : (n & 4194048) === n ? d1 - et() : 0;
			if (((N = am(z, N)), N !== null)) {
				((kt = n),
					(l.cancelPendingCommit = N(
						E1.bind(null, l, t, n, a, e, u, i, c, f, b, z, null, g, S),
					)),
					ya(l, n, i, !v));
				return;
			}
		}
		E1(l, t, n, a, e, u, i, c, f);
	}
	function Sd(l) {
		for (var t = l; ; ) {
			var a = t.tag;
			if (
				(a === 0 || a === 11 || a === 15) &&
				t.flags & 16384 &&
				((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
			)
				for (var e = 0; e < a.length; e++) {
					var u = a[e],
						n = u.getSnapshot;
					u = u.value;
					try {
						if (!it(n(), u)) return !1;
					} catch {
						return !1;
					}
				}
			if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
				((a.return = t), (t = a));
			else {
				if (t === l) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === l) return !0;
					t = t.return;
				}
				((t.sibling.return = t.return), (t = t.sibling));
			}
		}
		return !0;
	}
	function ya(l, t, a, e) {
		((t &= ~Nc),
			(t &= ~Qa),
			(l.suspendedLanes |= t),
			(l.pingedLanes &= ~t),
			e && (l.warmLanes |= t),
			(e = l.expirationTimes));
		for (var u = t; 0 < u; ) {
			var n = 31 - nt(u),
				i = 1 << n;
			((e[n] = -1), (u &= ~i));
		}
		a !== 0 && Af(l, a, t);
	}
	function pn() {
		return (al & 6) === 0 ? (du(0), !1) : !0;
	}
	function Hc() {
		if (W !== null) {
			if (ul === 0) var l = W.return;
			else ((l = W), (Gt = Ua = null), ki(l), (de = null), (we = 0), (l = W));
			for (; l !== null; ) (Js(l.alternate, l), (l = l.return));
			W = null;
		}
	}
	function _e(l, t) {
		var a = l.timeoutHandle;
		(a !== -1 && ((l.timeoutHandle = -1), Yd(a)),
			(a = l.cancelPendingCommit),
			a !== null && ((l.cancelPendingCommit = null), a()),
			(kt = 0),
			Hc(),
			(rl = l),
			(W = a = qt(l.current, null)),
			(k = t),
			(ul = 0),
			(ot = null),
			(ma = !1),
			(Se = je(l, t)),
			(Oc = !1),
			(be = dt = Nc = Qa = ra = Sl = 0),
			(Il = su = null),
			(jc = !1),
			(t & 8) !== 0 && (t |= t & 32));
		var e = l.entangledLanes;
		if (e !== 0)
			for (l = l.entanglements, e &= t; 0 < e; ) {
				var u = 31 - nt(e),
					n = 1 << u;
				((t |= l[u]), (e &= ~n));
			}
		return (($t = t), Zu(), a);
	}
	function y1(l, t) {
		((L = null),
			(p.H = tu),
			t === oe || t === Wu
				? ((t = C0()), (ul = 3))
				: t === Yi
					? ((t = C0()), (ul = 4))
					: (ul =
							t === mc
								? 8
								: t !== null &&
									  typeof t == "object" &&
									  typeof t.then == "function"
									? 6
									: 1),
			(ot = t),
			W === null && ((Sl = 1), sn(l, St(t, l.current))));
	}
	function g1() {
		var l = ft.current;
		return l === null
			? !0
			: (k & 4194048) === k
				? zt === null
				: (k & 62914560) === k || (k & 536870912) !== 0
					? l === zt
					: !1;
	}
	function S1() {
		var l = p.H;
		return ((p.H = tu), l === null ? tu : l);
	}
	function b1() {
		var l = p.A;
		return ((p.A = yd), l);
	}
	function _n() {
		((Sl = 4),
			ma || ((k & 4194048) !== k && ft.current !== null) || (Se = !0),
			((ra & 134217727) === 0 && (Qa & 134217727) === 0) ||
				rl === null ||
				ya(rl, k, dt, !1));
	}
	function Rc(l, t, a) {
		var e = al;
		al |= 2;
		var u = S1(),
			n = b1();
		((rl !== l || k !== t) && ((bn = null), _e(l, t)), (t = !1));
		var i = Sl;
		l: do
			try {
				if (ul !== 0 && W !== null) {
					var c = W,
						f = ot;
					switch (ul) {
						case 8:
							(Hc(), (i = 6));
							break l;
						case 3:
						case 2:
						case 9:
						case 6:
							ft.current === null && (t = !0);
							var v = ul;
							if (((ul = 0), (ot = null), ze(l, c, f, v), a && Se)) {
								i = 0;
								break l;
							}
							break;
						default:
							((v = ul), (ul = 0), (ot = null), ze(l, c, f, v));
					}
				}
				(bd(), (i = Sl));
				break;
			} catch (b) {
				y1(l, b);
			}
		while (!0);
		return (
			t && l.shellSuspendCounter++,
			(Gt = Ua = null),
			(al = e),
			(p.H = u),
			(p.A = n),
			W === null && ((rl = null), (k = 0), Zu()),
			i
		);
	}
	function bd() {
		for (; W !== null; ) p1(W);
	}
	function pd(l, t) {
		var a = al;
		al |= 2;
		var e = S1(),
			u = b1();
		rl !== l || k !== t
			? ((bn = null), (Sn = et() + 500), _e(l, t))
			: (Se = je(l, t));
		l: do
			try {
				if (ul !== 0 && W !== null) {
					t = W;
					var n = ot;
					t: switch (ul) {
						case 1:
							((ul = 0), (ot = null), ze(l, t, n, 1));
							break;
						case 2:
						case 9:
							if (j0(n)) {
								((ul = 0), (ot = null), _1(t));
								break;
							}
							((t = function () {
								((ul !== 2 && ul !== 9) || rl !== l || (ul = 7), Ct(l));
							}),
								n.then(t, t));
							break l;
						case 3:
							ul = 7;
							break l;
						case 4:
							ul = 5;
							break l;
						case 7:
							j0(n)
								? ((ul = 0), (ot = null), _1(t))
								: ((ul = 0), (ot = null), ze(l, t, n, 7));
							break;
						case 5:
							var i = null;
							switch (W.tag) {
								case 26:
									i = W.memoizedState;
								case 5:
								case 27:
									var c = W;
									if (i ? i2(i) : c.stateNode.complete) {
										((ul = 0), (ot = null));
										var f = c.sibling;
										if (f !== null) W = f;
										else {
											var v = c.return;
											v !== null ? ((W = v), zn(v)) : (W = null);
										}
										break t;
									}
							}
							((ul = 0), (ot = null), ze(l, t, n, 5));
							break;
						case 6:
							((ul = 0), (ot = null), ze(l, t, n, 6));
							break;
						case 8:
							(Hc(), (Sl = 6));
							break l;
						default:
							throw Error(d(462));
					}
				}
				_d();
				break;
			} catch (b) {
				y1(l, b);
			}
		while (!0);
		return (
			(Gt = Ua = null),
			(p.H = e),
			(p.A = u),
			(al = a),
			W !== null ? 0 : ((rl = null), (k = 0), Zu(), Sl)
		);
	}
	function _d() {
		for (; W !== null && !V2(); ) p1(W);
	}
	function p1(l) {
		var t = Ls(l.alternate, l, $t);
		((l.memoizedProps = l.pendingProps), t === null ? zn(l) : (W = t));
	}
	function _1(l) {
		var t = l,
			a = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Ys(a, t, t.pendingProps, t.type, void 0, k);
				break;
			case 11:
				t = Ys(a, t, t.pendingProps, t.type.render, t.ref, k);
				break;
			case 5:
				ki(t);
			default:
				(Js(a, t), (t = W = b0(t, $t)), (t = Ls(a, t, $t)));
		}
		((l.memoizedProps = l.pendingProps), t === null ? zn(l) : (W = t));
	}
	function ze(l, t, a, e) {
		((Gt = Ua = null), ki(t), (de = null), (we = 0));
		var u = t.return;
		try {
			if (sd(l, u, t, a, k)) {
				((Sl = 1), sn(l, St(a, l.current)), (W = null));
				return;
			}
		} catch (n) {
			if (u !== null) throw ((W = u), n);
			((Sl = 1), sn(l, St(a, l.current)), (W = null));
			return;
		}
		t.flags & 32768
			? (I || e === 1
					? (l = !0)
					: Se || (k & 536870912) !== 0
						? (l = !1)
						: ((ma = l = !0),
							(e === 2 || e === 9 || e === 3 || e === 6) &&
								((e = ft.current),
								e !== null && e.tag === 13 && (e.flags |= 16384))),
				z1(t, l))
			: zn(t);
	}
	function zn(l) {
		var t = l;
		do {
			if ((t.flags & 32768) !== 0) {
				z1(t, ma);
				return;
			}
			l = t.return;
			var a = md(t.alternate, t, $t);
			if (a !== null) {
				W = a;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				W = t;
				return;
			}
			W = t = l;
		} while (t !== null);
		Sl === 0 && (Sl = 5);
	}
	function z1(l, t) {
		do {
			var a = rd(l.alternate, l);
			if (a !== null) {
				((a.flags &= 32767), (W = a));
				return;
			}
			if (
				((a = l.return),
				a !== null &&
					((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
				!t && ((l = l.sibling), l !== null))
			) {
				W = l;
				return;
			}
			W = l = a;
		} while (l !== null);
		((Sl = 6), (W = null));
	}
	function E1(l, t, a, e, u, n, i, c, f) {
		l.cancelPendingCommit = null;
		do En();
		while (Dl !== 0);
		if ((al & 6) !== 0) throw Error(d(327));
		if (t !== null) {
			if (t === l.current) throw Error(d(177));
			if (
				((n = t.lanes | t.childLanes),
				(n |= Ei),
				P2(l, a, n, i, c, f),
				l === rl && ((W = rl = null), (k = 0)),
				(pe = t),
				(va = l),
				(kt = a),
				(Dc = n),
				(Cc = u),
				(m1 = e),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((l.callbackNode = null),
						(l.callbackPriority = 0),
						Ad(Tu, function () {
							return (O1(), null);
						}))
					: ((l.callbackNode = null), (l.callbackPriority = 0)),
				(e = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || e)
			) {
				((e = p.T), (p.T = null), (u = M.p), (M.p = 2), (i = al), (al |= 4));
				try {
					hd(l, t, a);
				} finally {
					((al = i), (M.p = u), (p.T = e));
				}
			}
			((Dl = 1), T1(), A1(), x1());
		}
	}
	function T1() {
		if (Dl === 1) {
			Dl = 0;
			var l = va,
				t = pe,
				a = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || a) {
				((a = p.T), (p.T = null));
				var e = M.p;
				M.p = 2;
				var u = al;
				al |= 4;
				try {
					u1(t, l);
					var n = wc,
						i = o0(l.containerInfo),
						c = n.focusedElem,
						f = n.selectionRange;
					if (
						i !== c &&
						c &&
						c.ownerDocument &&
						s0(c.ownerDocument.documentElement, c)
					) {
						if (f !== null && Si(c)) {
							var v = f.start,
								b = f.end;
							if ((b === void 0 && (b = v), "selectionStart" in c))
								((c.selectionStart = v),
									(c.selectionEnd = Math.min(b, c.value.length)));
							else {
								var z = c.ownerDocument || document,
									g = (z && z.defaultView) || window;
								if (g.getSelection) {
									var S = g.getSelection(),
										N = c.textContent.length,
										B = Math.min(f.start, N),
										dl = f.end === void 0 ? B : Math.min(f.end, N);
									!S.extend && B > dl && ((i = dl), (dl = B), (B = i));
									var m = f0(c, B),
										s = f0(c, dl);
									if (
										m &&
										s &&
										(S.rangeCount !== 1 ||
											S.anchorNode !== m.node ||
											S.anchorOffset !== m.offset ||
											S.focusNode !== s.node ||
											S.focusOffset !== s.offset)
									) {
										var h = z.createRange();
										(h.setStart(m.node, m.offset),
											S.removeAllRanges(),
											B > dl
												? (S.addRange(h), S.extend(s.node, s.offset))
												: (h.setEnd(s.node, s.offset), S.addRange(h)));
									}
								}
							}
						}
						for (z = [], S = c; (S = S.parentNode); )
							S.nodeType === 1 &&
								z.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
						for (
							typeof c.focus == "function" && c.focus(), c = 0;
							c < z.length;
							c++
						) {
							var _ = z[c];
							((_.element.scrollLeft = _.left), (_.element.scrollTop = _.top));
						}
					}
					((Rn = !!Jc), (wc = Jc = null));
				} finally {
					((al = u), (M.p = e), (p.T = a));
				}
			}
			((l.current = t), (Dl = 2));
		}
	}
	function A1() {
		if (Dl === 2) {
			Dl = 0;
			var l = va,
				t = pe,
				a = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || a) {
				((a = p.T), (p.T = null));
				var e = M.p;
				M.p = 2;
				var u = al;
				al |= 4;
				try {
					Ps(l, t.alternate, t);
				} finally {
					((al = u), (M.p = e), (p.T = a));
				}
			}
			Dl = 3;
		}
	}
	function x1() {
		if (Dl === 4 || Dl === 3) {
			((Dl = 0), L2());
			var l = va,
				t = pe,
				a = kt,
				e = m1;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (Dl = 5)
				: ((Dl = 0), (pe = va = null), M1(l, l.pendingLanes));
			var u = l.pendingLanes;
			if (
				(u === 0 && (ha = null),
				Pn(a),
				(t = t.stateNode),
				ut && typeof ut.onCommitFiberRoot == "function")
			)
				try {
					ut.onCommitFiberRoot(Ne, t, void 0, (t.current.flags & 128) === 128);
				} catch {}
			if (e !== null) {
				((t = p.T), (u = M.p), (M.p = 2), (p.T = null));
				try {
					for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
						var c = e[i];
						n(c.value, { componentStack: c.stack });
					}
				} finally {
					((p.T = t), (M.p = u));
				}
			}
			((kt & 3) !== 0 && En(),
				Ct(l),
				(u = l.pendingLanes),
				(a & 261930) !== 0 && (u & 42) !== 0
					? l === Uc
						? ou++
						: ((ou = 0), (Uc = l))
					: (ou = 0),
				du(0));
		}
	}
	function M1(l, t) {
		(l.pooledCacheLanes &= t) === 0 &&
			((t = l.pooledCache), t != null && ((l.pooledCache = null), Ke(t)));
	}
	function En() {
		return (T1(), A1(), x1(), O1());
	}
	function O1() {
		if (Dl !== 5) return !1;
		var l = va,
			t = Dc;
		Dc = 0;
		var a = Pn(kt),
			e = p.T,
			u = M.p;
		try {
			((M.p = 32 > a ? 32 : a), (p.T = null), (a = Cc), (Cc = null));
			var n = va,
				i = kt;
			if (((Dl = 0), (pe = va = null), (kt = 0), (al & 6) !== 0))
				throw Error(d(331));
			var c = al;
			if (
				((al |= 4),
				s1(n.current),
				i1(n, n.current, i, a),
				(al = c),
				du(0, !1),
				ut && typeof ut.onPostCommitFiberRoot == "function")
			)
				try {
					ut.onPostCommitFiberRoot(Ne, n);
				} catch {}
			return !0;
		} finally {
			((M.p = u), (p.T = e), M1(l, t));
		}
	}
	function N1(l, t, a) {
		((t = St(a, t)),
			(t = dc(l.stateNode, t, 2)),
			(l = fa(l, t, 2)),
			l !== null && (De(l, 2), Ct(l)));
	}
	function nl(l, t, a) {
		if (l.tag === 3) N1(l, l, a);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					N1(t, l, a);
					break;
				} else if (t.tag === 1) {
					var e = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == "function" ||
						(typeof e.componentDidCatch == "function" &&
							(ha === null || !ha.has(e)))
					) {
						((l = St(a, l)),
							(a = js(2)),
							(e = fa(t, a, 2)),
							e !== null && (Ds(a, e, t, l), De(e, 2), Ct(e)));
						break;
					}
				}
				t = t.return;
			}
	}
	function Bc(l, t, a) {
		var e = l.pingCache;
		if (e === null) {
			e = l.pingCache = new gd();
			var u = new Set();
			e.set(t, u);
		} else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
		u.has(a) ||
			((Oc = !0), u.add(a), (l = zd.bind(null, l, t, a)), t.then(l, l));
	}
	function zd(l, t, a) {
		var e = l.pingCache;
		(e !== null && e.delete(t),
			(l.pingedLanes |= l.suspendedLanes & a),
			(l.warmLanes &= ~a),
			rl === l &&
				(k & a) === a &&
				(Sl === 4 || (Sl === 3 && (k & 62914560) === k && 300 > et() - gn)
					? (al & 2) === 0 && _e(l, 0)
					: (Nc |= a),
				be === k && (be = 0)),
			Ct(l));
	}
	function j1(l, t) {
		(t === 0 && (t = Tf()), (l = ja(l, t)), l !== null && (De(l, t), Ct(l)));
	}
	function Ed(l) {
		var t = l.memoizedState,
			a = 0;
		(t !== null && (a = t.retryLane), j1(l, a));
	}
	function Td(l, t) {
		var a = 0;
		switch (l.tag) {
			case 31:
			case 13:
				var e = l.stateNode,
					u = l.memoizedState;
				u !== null && (a = u.retryLane);
				break;
			case 19:
				e = l.stateNode;
				break;
			case 22:
				e = l.stateNode._retryCache;
				break;
			default:
				throw Error(d(314));
		}
		(e !== null && e.delete(t), j1(l, a));
	}
	function Ad(l, t) {
		return $n(l, t);
	}
	var Tn = null,
		Ee = null,
		qc = !1,
		An = !1,
		Yc = !1,
		ga = 0;
	function Ct(l) {
		(l !== Ee &&
			l.next === null &&
			(Ee === null ? (Tn = Ee = l) : (Ee = Ee.next = l)),
			(An = !0),
			qc || ((qc = !0), Md()));
	}
	function du(l, t) {
		if (!Yc && An) {
			Yc = !0;
			do
				for (var a = !1, e = Tn; e !== null; ) {
					if (l !== 0) {
						var u = e.pendingLanes;
						if (u === 0) var n = 0;
						else {
							var i = e.suspendedLanes,
								c = e.pingedLanes;
							((n = (1 << (31 - nt(42 | l) + 1)) - 1),
								(n &= u & ~(i & ~c)),
								(n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
						}
						n !== 0 && ((a = !0), H1(e, n));
					} else
						((n = k),
							(n = Ou(
								e,
								e === rl ? n : 0,
								e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
							)),
							(n & 3) === 0 || je(e, n) || ((a = !0), H1(e, n)));
					e = e.next;
				}
			while (a);
			Yc = !1;
		}
	}
	function xd() {
		D1();
	}
	function D1() {
		An = qc = !1;
		var l = 0;
		ga !== 0 && qd() && (l = ga);
		for (var t = et(), a = null, e = Tn; e !== null; ) {
			var u = e.next,
				n = C1(e, t);
			(n === 0
				? ((e.next = null),
					a === null ? (Tn = u) : (a.next = u),
					u === null && (Ee = a))
				: ((a = e), (l !== 0 || (n & 3) !== 0) && (An = !0)),
				(e = u));
		}
		((Dl !== 0 && Dl !== 5) || du(l), ga !== 0 && (ga = 0));
	}
	function C1(l, t) {
		for (
			var a = l.suspendedLanes,
				e = l.pingedLanes,
				u = l.expirationTimes,
				n = l.pendingLanes & -62914561;
			0 < n;
		) {
			var i = 31 - nt(n),
				c = 1 << i,
				f = u[i];
			(f === -1
				? ((c & a) === 0 || (c & e) !== 0) && (u[i] = I2(c, t))
				: f <= t && (l.expiredLanes |= c),
				(n &= ~c));
		}
		if (
			((t = rl),
			(a = k),
			(a = Ou(
				l,
				l === t ? a : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
			)),
			(e = l.callbackNode),
			a === 0 ||
				(l === t && (ul === 2 || ul === 9)) ||
				l.cancelPendingCommit !== null)
		)
			return (
				e !== null && e !== null && kn(e),
				(l.callbackNode = null),
				(l.callbackPriority = 0)
			);
		if ((a & 3) === 0 || je(l, a)) {
			if (((t = a & -a), t === l.callbackPriority)) return t;
			switch ((e !== null && kn(e), Pn(a))) {
				case 2:
				case 8:
					a = zf;
					break;
				case 32:
					a = Tu;
					break;
				case 268435456:
					a = Ef;
					break;
				default:
					a = Tu;
			}
			return (
				(e = U1.bind(null, l)),
				(a = $n(a, e)),
				(l.callbackPriority = t),
				(l.callbackNode = a),
				t
			);
		}
		return (
			e !== null && e !== null && kn(e),
			(l.callbackPriority = 2),
			(l.callbackNode = null),
			2
		);
	}
	function U1(l, t) {
		if (Dl !== 0 && Dl !== 5)
			return ((l.callbackNode = null), (l.callbackPriority = 0), null);
		var a = l.callbackNode;
		if (En() && l.callbackNode !== a) return null;
		var e = k;
		return (
			(e = Ou(
				l,
				l === rl ? e : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
			)),
			e === 0
				? null
				: (h1(l, e, t),
					C1(l, et()),
					l.callbackNode != null && l.callbackNode === a
						? U1.bind(null, l)
						: null)
		);
	}
	function H1(l, t) {
		if (En()) return null;
		h1(l, t, !0);
	}
	function Md() {
		Gd(function () {
			(al & 6) !== 0 ? $n(_f, xd) : D1();
		});
	}
	function Gc() {
		if (ga === 0) {
			var l = fe;
			(l === 0 && ((l = Au), (Au <<= 1), (Au & 261888) === 0 && (Au = 256)),
				(ga = l));
		}
		return ga;
	}
	function R1(l) {
		return l == null || typeof l == "symbol" || typeof l == "boolean"
			? null
			: typeof l == "function"
				? l
				: Cu("" + l);
	}
	function B1(l, t) {
		var a = t.ownerDocument.createElement("input");
		return (
			(a.name = t.name),
			(a.value = t.value),
			l.id && a.setAttribute("form", l.id),
			t.parentNode.insertBefore(a, t),
			(l = new FormData(l)),
			a.parentNode.removeChild(a),
			l
		);
	}
	function Od(l, t, a, e, u) {
		if (t === "submit" && a && a.stateNode === u) {
			var n = R1((u[wl] || null).action),
				i = e.submitter;
			i &&
				((t = (t = i[wl] || null)
					? R1(t.formAction)
					: i.getAttribute("formAction")),
				t !== null && ((n = t), (i = null)));
			var c = new Bu("action", "action", null, e, u);
			l.push({
				event: c,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (e.defaultPrevented) {
								if (ga !== 0) {
									var f = i ? B1(u, i) : new FormData(u);
									nc(
										a,
										{ pending: !0, data: f, method: u.method, action: n },
										null,
										f,
									);
								}
							} else
								typeof n == "function" &&
									(c.preventDefault(),
									(f = i ? B1(u, i) : new FormData(u)),
									nc(
										a,
										{ pending: !0, data: f, method: u.method, action: n },
										n,
										f,
									));
						},
						currentTarget: u,
					},
				],
			});
		}
	}
	for (var Zc = 0; Zc < zi.length; Zc++) {
		var Xc = zi[Zc],
			Nd = Xc.toLowerCase(),
			jd = Xc[0].toUpperCase() + Xc.slice(1);
		At(Nd, "on" + jd);
	}
	(At(r0, "onAnimationEnd"),
		At(h0, "onAnimationIteration"),
		At(v0, "onAnimationStart"),
		At("dblclick", "onDoubleClick"),
		At("focusin", "onFocus"),
		At("focusout", "onBlur"),
		At(Jo, "onTransitionRun"),
		At(wo, "onTransitionStart"),
		At(Wo, "onTransitionCancel"),
		At(y0, "onTransitionEnd"),
		Wa("onMouseEnter", ["mouseout", "mouseover"]),
		Wa("onMouseLeave", ["mouseout", "mouseover"]),
		Wa("onPointerEnter", ["pointerout", "pointerover"]),
		Wa("onPointerLeave", ["pointerout", "pointerover"]),
		xa(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		xa(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		xa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		xa(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		xa(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		xa(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		));
	var mu =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		Dd = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(mu),
		);
	function q1(l, t) {
		t = (t & 4) !== 0;
		for (var a = 0; a < l.length; a++) {
			var e = l[a],
				u = e.event;
			e = e.listeners;
			l: {
				var n = void 0;
				if (t)
					for (var i = e.length - 1; 0 <= i; i--) {
						var c = e[i],
							f = c.instance,
							v = c.currentTarget;
						if (((c = c.listener), f !== n && u.isPropagationStopped()))
							break l;
						((n = c), (u.currentTarget = v));
						try {
							n(u);
						} catch (b) {
							Gu(b);
						}
						((u.currentTarget = null), (n = f));
					}
				else
					for (i = 0; i < e.length; i++) {
						if (
							((c = e[i]),
							(f = c.instance),
							(v = c.currentTarget),
							(c = c.listener),
							f !== n && u.isPropagationStopped())
						)
							break l;
						((n = c), (u.currentTarget = v));
						try {
							n(u);
						} catch (b) {
							Gu(b);
						}
						((u.currentTarget = null), (n = f));
					}
			}
		}
	}
	function $(l, t) {
		var a = t[li];
		a === void 0 && (a = t[li] = new Set());
		var e = l + "__bubble";
		a.has(e) || (Y1(t, l, 2, !1), a.add(e));
	}
	function Qc(l, t, a) {
		var e = 0;
		(t && (e |= 4), Y1(a, l, e, t));
	}
	var xn = "_reactListening" + Math.random().toString(36).slice(2);
	function Vc(l) {
		if (!l[xn]) {
			((l[xn] = !0),
				Df.forEach(function (a) {
					a !== "selectionchange" && (Dd.has(a) || Qc(a, !1, l), Qc(a, !0, l));
				}));
			var t = l.nodeType === 9 ? l : l.ownerDocument;
			t === null || t[xn] || ((t[xn] = !0), Qc("selectionchange", !1, t));
		}
	}
	function Y1(l, t, a, e) {
		switch (r2(t)) {
			case 2:
				var u = nm;
				break;
			case 8:
				u = im;
				break;
			default:
				u = uf;
		}
		((a = u.bind(null, t, a, l)),
			(u = void 0),
			!si ||
				(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
				(u = !0),
			e
				? u !== void 0
					? l.addEventListener(t, a, { capture: !0, passive: u })
					: l.addEventListener(t, a, !0)
				: u !== void 0
					? l.addEventListener(t, a, { passive: u })
					: l.addEventListener(t, a, !1));
	}
	function Lc(l, t, a, e, u) {
		var n = e;
		if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
			l: for (;;) {
				if (e === null) return;
				var i = e.tag;
				if (i === 3 || i === 4) {
					var c = e.stateNode.containerInfo;
					if (c === u) break;
					if (i === 4)
						for (i = e.return; i !== null; ) {
							var f = i.tag;
							if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
								return;
							i = i.return;
						}
					for (; c !== null; ) {
						if (((i = Ka(c)), i === null)) return;
						if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
							e = n = i;
							continue l;
						}
						c = c.parentNode;
					}
				}
				e = e.return;
			}
		Vf(function () {
			var v = n,
				b = ci(a),
				z = [];
			l: {
				var g = g0.get(l);
				if (g !== void 0) {
					var S = Bu,
						N = l;
					switch (l) {
						case "keypress":
							if (Hu(a) === 0) break l;
						case "keydown":
						case "keyup":
							S = To;
							break;
						case "focusin":
							((N = "focus"), (S = ri));
							break;
						case "focusout":
							((N = "blur"), (S = ri));
							break;
						case "beforeblur":
						case "afterblur":
							S = ri;
							break;
						case "click":
							if (a.button === 2) break l;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							S = Jf;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							S = mo;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							S = Mo;
							break;
						case r0:
						case h0:
						case v0:
							S = vo;
							break;
						case y0:
							S = No;
							break;
						case "scroll":
						case "scrollend":
							S = so;
							break;
						case "wheel":
							S = Do;
							break;
						case "copy":
						case "cut":
						case "paste":
							S = go;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							S = Wf;
							break;
						case "toggle":
						case "beforetoggle":
							S = Uo;
					}
					var B = (t & 4) !== 0,
						dl = !B && (l === "scroll" || l === "scrollend"),
						m = B ? (g !== null ? g + "Capture" : null) : g;
					B = [];
					for (var s = v, h; s !== null; ) {
						var _ = s;
						if (
							((h = _.stateNode),
							(_ = _.tag),
							(_ !== 5 && _ !== 26 && _ !== 27) ||
								h === null ||
								m === null ||
								((_ = He(s, m)), _ != null && B.push(ru(s, _, h))),
							dl)
						)
							break;
						s = s.return;
					}
					0 < B.length &&
						((g = new S(g, N, null, a, b)), z.push({ event: g, listeners: B }));
				}
			}
			if ((t & 7) === 0) {
				l: {
					if (
						((g = l === "mouseover" || l === "pointerover"),
						(S = l === "mouseout" || l === "pointerout"),
						g &&
							a !== ii &&
							(N = a.relatedTarget || a.fromElement) &&
							(Ka(N) || N[La]))
					)
						break l;
					if (
						(S || g) &&
						((g =
							b.window === b
								? b
								: (g = b.ownerDocument)
									? g.defaultView || g.parentWindow
									: window),
						S
							? ((N = a.relatedTarget || a.toElement),
								(S = v),
								(N = N ? Ka(N) : null),
								N !== null &&
									((dl = Y(N)),
									(B = N.tag),
									N !== dl || (B !== 5 && B !== 27 && B !== 6)) &&
									(N = null))
							: ((S = null), (N = v)),
						S !== N)
					) {
						if (
							((B = Jf),
							(_ = "onMouseLeave"),
							(m = "onMouseEnter"),
							(s = "mouse"),
							(l === "pointerout" || l === "pointerover") &&
								((B = Wf),
								(_ = "onPointerLeave"),
								(m = "onPointerEnter"),
								(s = "pointer")),
							(dl = S == null ? g : Ue(S)),
							(h = N == null ? g : Ue(N)),
							(g = new B(_, s + "leave", S, a, b)),
							(g.target = dl),
							(g.relatedTarget = h),
							(_ = null),
							Ka(b) === v &&
								((B = new B(m, s + "enter", N, a, b)),
								(B.target = h),
								(B.relatedTarget = dl),
								(_ = B)),
							(dl = _),
							S && N)
						)
							t: {
								for (B = Cd, m = S, s = N, h = 0, _ = m; _; _ = B(_)) h++;
								_ = 0;
								for (var R = s; R; R = B(R)) _++;
								for (; 0 < h - _; ) ((m = B(m)), h--);
								for (; 0 < _ - h; ) ((s = B(s)), _--);
								for (; h--; ) {
									if (m === s || (s !== null && m === s.alternate)) {
										B = m;
										break t;
									}
									((m = B(m)), (s = B(s)));
								}
								B = null;
							}
						else B = null;
						(S !== null && G1(z, g, S, B, !1),
							N !== null && dl !== null && G1(z, dl, N, B, !0));
					}
				}
				l: {
					if (
						((g = v ? Ue(v) : window),
						(S = g.nodeName && g.nodeName.toLowerCase()),
						S === "select" || (S === "input" && g.type === "file"))
					)
						var ll = a0;
					else if (l0(g))
						if (e0) ll = Vo;
						else {
							ll = Xo;
							var U = Zo;
						}
					else
						((S = g.nodeName),
							!S ||
							S.toLowerCase() !== "input" ||
							(g.type !== "checkbox" && g.type !== "radio")
								? v && ni(v.elementType) && (ll = a0)
								: (ll = Qo));
					if (ll && (ll = ll(l, v))) {
						t0(z, ll, a, b);
						break l;
					}
					(U && U(l, g, v),
						l === "focusout" &&
							v &&
							g.type === "number" &&
							v.memoizedProps.value != null &&
							ui(g, "number", g.value));
				}
				switch (((U = v ? Ue(v) : window), l)) {
					case "focusin":
						(l0(U) || U.contentEditable === "true") &&
							((le = U), (bi = v), (Qe = null));
						break;
					case "focusout":
						Qe = bi = le = null;
						break;
					case "mousedown":
						pi = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						((pi = !1), d0(z, a, b));
						break;
					case "selectionchange":
						if (Ko) break;
					case "keydown":
					case "keyup":
						d0(z, a, b);
				}
				var K;
				if (vi)
					l: {
						switch (l) {
							case "compositionstart":
								var F = "onCompositionStart";
								break l;
							case "compositionend":
								F = "onCompositionEnd";
								break l;
							case "compositionupdate":
								F = "onCompositionUpdate";
								break l;
						}
						F = void 0;
					}
				else
					Pa
						? If(l, a) && (F = "onCompositionEnd")
						: l === "keydown" &&
							a.keyCode === 229 &&
							(F = "onCompositionStart");
				(F &&
					($f &&
						a.locale !== "ko" &&
						(Pa || F !== "onCompositionStart"
							? F === "onCompositionEnd" && Pa && (K = Lf())
							: ((ta = b),
								(oi = "value" in ta ? ta.value : ta.textContent),
								(Pa = !0))),
					(U = Mn(v, F)),
					0 < U.length &&
						((F = new wf(F, l, null, a, b)),
						z.push({ event: F, listeners: U }),
						K ? (F.data = K) : ((K = Pf(a)), K !== null && (F.data = K)))),
					(K = Ro ? Bo(l, a) : qo(l, a)) &&
						((F = Mn(v, "onBeforeInput")),
						0 < F.length &&
							((U = new wf("onBeforeInput", "beforeinput", null, a, b)),
							z.push({ event: U, listeners: F }),
							(U.data = K))),
					Od(z, l, v, a, b));
			}
			q1(z, t);
		});
	}
	function ru(l, t, a) {
		return { instance: l, listener: t, currentTarget: a };
	}
	function Mn(l, t) {
		for (var a = t + "Capture", e = []; l !== null; ) {
			var u = l,
				n = u.stateNode;
			if (
				((u = u.tag),
				(u !== 5 && u !== 26 && u !== 27) ||
					n === null ||
					((u = He(l, a)),
					u != null && e.unshift(ru(l, u, n)),
					(u = He(l, t)),
					u != null && e.push(ru(l, u, n))),
				l.tag === 3)
			)
				return e;
			l = l.return;
		}
		return [];
	}
	function Cd(l) {
		if (l === null) return null;
		do l = l.return;
		while (l && l.tag !== 5 && l.tag !== 27);
		return l || null;
	}
	function G1(l, t, a, e, u) {
		for (var n = t._reactName, i = []; a !== null && a !== e; ) {
			var c = a,
				f = c.alternate,
				v = c.stateNode;
			if (((c = c.tag), f !== null && f === e)) break;
			((c !== 5 && c !== 26 && c !== 27) ||
				v === null ||
				((f = v),
				u
					? ((v = He(a, n)), v != null && i.unshift(ru(a, v, f)))
					: u || ((v = He(a, n)), v != null && i.push(ru(a, v, f)))),
				(a = a.return));
		}
		i.length !== 0 && l.push({ event: t, listeners: i });
	}
	var Ud = /\r\n?/g,
		Hd = /\u0000|\uFFFD/g;
	function Z1(l) {
		return (typeof l == "string" ? l : "" + l)
			.replace(
				Ud,
				`
`,
			)
			.replace(Hd, "");
	}
	function X1(l, t) {
		return ((t = Z1(t)), Z1(l) === t);
	}
	function ol(l, t, a, e, u, n) {
		switch (a) {
			case "children":
				typeof e == "string"
					? t === "body" || (t === "textarea" && e === "") || ka(l, e)
					: (typeof e == "number" || typeof e == "bigint") &&
						t !== "body" &&
						ka(l, "" + e);
				break;
			case "className":
				ju(l, "class", e);
				break;
			case "tabIndex":
				ju(l, "tabindex", e);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				ju(l, a, e);
				break;
			case "style":
				Xf(l, e, n);
				break;
			case "data":
				if (t !== "object") {
					ju(l, "data", e);
					break;
				}
			case "src":
			case "href":
				if (e === "" && (t !== "a" || a !== "href")) {
					l.removeAttribute(a);
					break;
				}
				if (
					e == null ||
					typeof e == "function" ||
					typeof e == "symbol" ||
					typeof e == "boolean"
				) {
					l.removeAttribute(a);
					break;
				}
				((e = Cu("" + e)), l.setAttribute(a, e));
				break;
			case "action":
			case "formAction":
				if (typeof e == "function") {
					l.setAttribute(
						a,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				} else
					typeof n == "function" &&
						(a === "formAction"
							? (t !== "input" && ol(l, t, "name", u.name, u, null),
								ol(l, t, "formEncType", u.formEncType, u, null),
								ol(l, t, "formMethod", u.formMethod, u, null),
								ol(l, t, "formTarget", u.formTarget, u, null))
							: (ol(l, t, "encType", u.encType, u, null),
								ol(l, t, "method", u.method, u, null),
								ol(l, t, "target", u.target, u, null)));
				if (e == null || typeof e == "symbol" || typeof e == "boolean") {
					l.removeAttribute(a);
					break;
				}
				((e = Cu("" + e)), l.setAttribute(a, e));
				break;
			case "onClick":
				e != null && (l.onclick = Rt);
				break;
			case "onScroll":
				e != null && $("scroll", l);
				break;
			case "onScrollEnd":
				e != null && $("scrollend", l);
				break;
			case "dangerouslySetInnerHTML":
				if (e != null) {
					if (typeof e != "object" || !("__html" in e)) throw Error(d(61));
					if (((a = e.__html), a != null)) {
						if (u.children != null) throw Error(d(60));
						l.innerHTML = a;
					}
				}
				break;
			case "multiple":
				l.multiple = e && typeof e != "function" && typeof e != "symbol";
				break;
			case "muted":
				l.muted = e && typeof e != "function" && typeof e != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					e == null ||
					typeof e == "function" ||
					typeof e == "boolean" ||
					typeof e == "symbol"
				) {
					l.removeAttribute("xlink:href");
					break;
				}
				((a = Cu("" + e)),
					l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				e != null && typeof e != "function" && typeof e != "symbol"
					? l.setAttribute(a, "" + e)
					: l.removeAttribute(a);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				e && typeof e != "function" && typeof e != "symbol"
					? l.setAttribute(a, "")
					: l.removeAttribute(a);
				break;
			case "capture":
			case "download":
				e === !0
					? l.setAttribute(a, "")
					: e !== !1 &&
						  e != null &&
						  typeof e != "function" &&
						  typeof e != "symbol"
						? l.setAttribute(a, e)
						: l.removeAttribute(a);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				e != null &&
				typeof e != "function" &&
				typeof e != "symbol" &&
				!isNaN(e) &&
				1 <= e
					? l.setAttribute(a, e)
					: l.removeAttribute(a);
				break;
			case "rowSpan":
			case "start":
				e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
					? l.removeAttribute(a)
					: l.setAttribute(a, e);
				break;
			case "popover":
				($("beforetoggle", l), $("toggle", l), Nu(l, "popover", e));
				break;
			case "xlinkActuate":
				Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
				break;
			case "xlinkArcrole":
				Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
				break;
			case "xlinkRole":
				Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
				break;
			case "xlinkShow":
				Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
				break;
			case "xlinkTitle":
				Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
				break;
			case "xlinkType":
				Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
				break;
			case "xmlBase":
				Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
				break;
			case "xmlLang":
				Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
				break;
			case "xmlSpace":
				Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
				break;
			case "is":
				Nu(l, "is", e);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < a.length) ||
					(a[0] !== "o" && a[0] !== "O") ||
					(a[1] !== "n" && a[1] !== "N")) &&
					((a = co.get(a) || a), Nu(l, a, e));
		}
	}
	function Kc(l, t, a, e, u, n) {
		switch (a) {
			case "style":
				Xf(l, e, n);
				break;
			case "dangerouslySetInnerHTML":
				if (e != null) {
					if (typeof e != "object" || !("__html" in e)) throw Error(d(61));
					if (((a = e.__html), a != null)) {
						if (u.children != null) throw Error(d(60));
						l.innerHTML = a;
					}
				}
				break;
			case "children":
				typeof e == "string"
					? ka(l, e)
					: (typeof e == "number" || typeof e == "bigint") && ka(l, "" + e);
				break;
			case "onScroll":
				e != null && $("scroll", l);
				break;
			case "onScrollEnd":
				e != null && $("scrollend", l);
				break;
			case "onClick":
				e != null && (l.onclick = Rt);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!Cf.hasOwnProperty(a))
					l: {
						if (
							a[0] === "o" &&
							a[1] === "n" &&
							((u = a.endsWith("Capture")),
							(t = a.slice(2, u ? a.length - 7 : void 0)),
							(n = l[wl] || null),
							(n = n != null ? n[a] : null),
							typeof n == "function" && l.removeEventListener(t, n, u),
							typeof e == "function")
						) {
							(typeof n != "function" &&
								n !== null &&
								(a in l
									? (l[a] = null)
									: l.hasAttribute(a) && l.removeAttribute(a)),
								l.addEventListener(t, e, u));
							break l;
						}
						a in l
							? (l[a] = e)
							: e === !0
								? l.setAttribute(a, "")
								: Nu(l, a, e);
					}
		}
	}
	function Zl(l, t, a) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				($("error", l), $("load", l));
				var e = !1,
					u = !1,
					n;
				for (n in a)
					if (a.hasOwnProperty(n)) {
						var i = a[n];
						if (i != null)
							switch (n) {
								case "src":
									e = !0;
									break;
								case "srcSet":
									u = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(d(137, t));
								default:
									ol(l, t, n, i, a, null);
							}
					}
				(u && ol(l, t, "srcSet", a.srcSet, a, null),
					e && ol(l, t, "src", a.src, a, null));
				return;
			case "input":
				$("invalid", l);
				var c = (n = i = u = null),
					f = null,
					v = null;
				for (e in a)
					if (a.hasOwnProperty(e)) {
						var b = a[e];
						if (b != null)
							switch (e) {
								case "name":
									u = b;
									break;
								case "type":
									i = b;
									break;
								case "checked":
									f = b;
									break;
								case "defaultChecked":
									v = b;
									break;
								case "value":
									n = b;
									break;
								case "defaultValue":
									c = b;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (b != null) throw Error(d(137, t));
									break;
								default:
									ol(l, t, e, b, a, null);
							}
					}
				qf(l, n, c, f, v, i, u, !1);
				return;
			case "select":
				($("invalid", l), (e = i = n = null));
				for (u in a)
					if (a.hasOwnProperty(u) && ((c = a[u]), c != null))
						switch (u) {
							case "value":
								n = c;
								break;
							case "defaultValue":
								i = c;
								break;
							case "multiple":
								e = c;
							default:
								ol(l, t, u, c, a, null);
						}
				((t = n),
					(a = i),
					(l.multiple = !!e),
					t != null ? $a(l, !!e, t, !1) : a != null && $a(l, !!e, a, !0));
				return;
			case "textarea":
				($("invalid", l), (n = u = e = null));
				for (i in a)
					if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
						switch (i) {
							case "value":
								e = c;
								break;
							case "defaultValue":
								u = c;
								break;
							case "children":
								n = c;
								break;
							case "dangerouslySetInnerHTML":
								if (c != null) throw Error(d(91));
								break;
							default:
								ol(l, t, i, c, a, null);
						}
				Gf(l, e, u, n);
				return;
			case "option":
				for (f in a)
					if (a.hasOwnProperty(f) && ((e = a[f]), e != null))
						switch (f) {
							case "selected":
								l.selected =
									e && typeof e != "function" && typeof e != "symbol";
								break;
							default:
								ol(l, t, f, e, a, null);
						}
				return;
			case "dialog":
				($("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l));
				break;
			case "iframe":
			case "object":
				$("load", l);
				break;
			case "video":
			case "audio":
				for (e = 0; e < mu.length; e++) $(mu[e], l);
				break;
			case "image":
				($("error", l), $("load", l));
				break;
			case "details":
				$("toggle", l);
				break;
			case "embed":
			case "source":
			case "link":
				($("error", l), $("load", l));
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (v in a)
					if (a.hasOwnProperty(v) && ((e = a[v]), e != null))
						switch (v) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(d(137, t));
							default:
								ol(l, t, v, e, a, null);
						}
				return;
			default:
				if (ni(t)) {
					for (b in a)
						a.hasOwnProperty(b) &&
							((e = a[b]), e !== void 0 && Kc(l, t, b, e, a, void 0));
					return;
				}
		}
		for (c in a)
			a.hasOwnProperty(c) && ((e = a[c]), e != null && ol(l, t, c, e, a, null));
	}
	function Rd(l, t, a, e) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var u = null,
					n = null,
					i = null,
					c = null,
					f = null,
					v = null,
					b = null;
				for (S in a) {
					var z = a[S];
					if (a.hasOwnProperty(S) && z != null)
						switch (S) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								f = z;
							default:
								e.hasOwnProperty(S) || ol(l, t, S, null, e, z);
						}
				}
				for (var g in e) {
					var S = e[g];
					if (((z = a[g]), e.hasOwnProperty(g) && (S != null || z != null)))
						switch (g) {
							case "type":
								n = S;
								break;
							case "name":
								u = S;
								break;
							case "checked":
								v = S;
								break;
							case "defaultChecked":
								b = S;
								break;
							case "value":
								i = S;
								break;
							case "defaultValue":
								c = S;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (S != null) throw Error(d(137, t));
								break;
							default:
								S !== z && ol(l, t, g, S, e, z);
						}
				}
				ei(l, i, c, f, v, b, n, u);
				return;
			case "select":
				S = i = c = g = null;
				for (n in a)
					if (((f = a[n]), a.hasOwnProperty(n) && f != null))
						switch (n) {
							case "value":
								break;
							case "multiple":
								S = f;
							default:
								e.hasOwnProperty(n) || ol(l, t, n, null, e, f);
						}
				for (u in e)
					if (
						((n = e[u]),
						(f = a[u]),
						e.hasOwnProperty(u) && (n != null || f != null))
					)
						switch (u) {
							case "value":
								g = n;
								break;
							case "defaultValue":
								c = n;
								break;
							case "multiple":
								i = n;
							default:
								n !== f && ol(l, t, u, n, e, f);
						}
				((t = c),
					(a = i),
					(e = S),
					g != null
						? $a(l, !!a, g, !1)
						: !!e != !!a &&
							(t != null ? $a(l, !!a, t, !0) : $a(l, !!a, a ? [] : "", !1)));
				return;
			case "textarea":
				S = g = null;
				for (c in a)
					if (
						((u = a[c]),
						a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
					)
						switch (c) {
							case "value":
								break;
							case "children":
								break;
							default:
								ol(l, t, c, null, e, u);
						}
				for (i in e)
					if (
						((u = e[i]),
						(n = a[i]),
						e.hasOwnProperty(i) && (u != null || n != null))
					)
						switch (i) {
							case "value":
								g = u;
								break;
							case "defaultValue":
								S = u;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(d(91));
								break;
							default:
								u !== n && ol(l, t, i, u, e, n);
						}
				Yf(l, g, S);
				return;
			case "option":
				for (var N in a)
					if (
						((g = a[N]),
						a.hasOwnProperty(N) && g != null && !e.hasOwnProperty(N))
					)
						switch (N) {
							case "selected":
								l.selected = !1;
								break;
							default:
								ol(l, t, N, null, e, g);
						}
				for (f in e)
					if (
						((g = e[f]),
						(S = a[f]),
						e.hasOwnProperty(f) && g !== S && (g != null || S != null))
					)
						switch (f) {
							case "selected":
								l.selected =
									g && typeof g != "function" && typeof g != "symbol";
								break;
							default:
								ol(l, t, f, g, e, S);
						}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var B in a)
					((g = a[B]),
						a.hasOwnProperty(B) &&
							g != null &&
							!e.hasOwnProperty(B) &&
							ol(l, t, B, null, e, g));
				for (v in e)
					if (
						((g = e[v]),
						(S = a[v]),
						e.hasOwnProperty(v) && g !== S && (g != null || S != null))
					)
						switch (v) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (g != null) throw Error(d(137, t));
								break;
							default:
								ol(l, t, v, g, e, S);
						}
				return;
			default:
				if (ni(t)) {
					for (var dl in a)
						((g = a[dl]),
							a.hasOwnProperty(dl) &&
								g !== void 0 &&
								!e.hasOwnProperty(dl) &&
								Kc(l, t, dl, void 0, e, g));
					for (b in e)
						((g = e[b]),
							(S = a[b]),
							!e.hasOwnProperty(b) ||
								g === S ||
								(g === void 0 && S === void 0) ||
								Kc(l, t, b, g, e, S));
					return;
				}
		}
		for (var m in a)
			((g = a[m]),
				a.hasOwnProperty(m) &&
					g != null &&
					!e.hasOwnProperty(m) &&
					ol(l, t, m, null, e, g));
		for (z in e)
			((g = e[z]),
				(S = a[z]),
				!e.hasOwnProperty(z) ||
					g === S ||
					(g == null && S == null) ||
					ol(l, t, z, g, e, S));
	}
	function Q1(l) {
		switch (l) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link":
				return !0;
			default:
				return !1;
		}
	}
	function Bd() {
		if (typeof performance.getEntriesByType == "function") {
			for (
				var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0;
				e < a.length;
				e++
			) {
				var u = a[e],
					n = u.transferSize,
					i = u.initiatorType,
					c = u.duration;
				if (n && c && Q1(i)) {
					for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
						var f = a[e],
							v = f.startTime;
						if (v > c) break;
						var b = f.transferSize,
							z = f.initiatorType;
						b &&
							Q1(z) &&
							((f = f.responseEnd), (i += b * (f < c ? 1 : (c - v) / (f - v))));
					}
					if ((--e, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
						break;
				}
			}
			if (0 < l) return t / l / 1e6;
		}
		return navigator.connection &&
			((l = navigator.connection.downlink), typeof l == "number")
			? l
			: 5;
	}
	var Jc = null,
		wc = null;
	function On(l) {
		return l.nodeType === 9 ? l : l.ownerDocument;
	}
	function V1(l) {
		switch (l) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function L1(l, t) {
		if (l === 0)
			switch (t) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return l === 1 && t === "foreignObject" ? 0 : l;
	}
	function Wc(l, t) {
		return (
			l === "textarea" ||
			l === "noscript" ||
			typeof t.children == "string" ||
			typeof t.children == "number" ||
			typeof t.children == "bigint" ||
			(typeof t.dangerouslySetInnerHTML == "object" &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var $c = null;
	function qd() {
		var l = window.event;
		return l && l.type === "popstate"
			? l === $c
				? !1
				: (($c = l), !0)
			: (($c = null), !1);
	}
	var K1 = typeof setTimeout == "function" ? setTimeout : void 0,
		Yd = typeof clearTimeout == "function" ? clearTimeout : void 0,
		J1 = typeof Promise == "function" ? Promise : void 0,
		Gd =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof J1 < "u"
					? function (l) {
							return J1.resolve(null).then(l).catch(Zd);
						}
					: K1;
	function Zd(l) {
		setTimeout(function () {
			throw l;
		});
	}
	function Sa(l) {
		return l === "head";
	}
	function w1(l, t) {
		var a = t,
			e = 0;
		do {
			var u = a.nextSibling;
			if ((l.removeChild(a), u && u.nodeType === 8))
				if (((a = u.data), a === "/$" || a === "/&")) {
					if (e === 0) {
						(l.removeChild(u), Me(t));
						return;
					}
					e--;
				} else if (
					a === "$" ||
					a === "$?" ||
					a === "$~" ||
					a === "$!" ||
					a === "&"
				)
					e++;
				else if (a === "html") hu(l.ownerDocument.documentElement);
				else if (a === "head") {
					((a = l.ownerDocument.head), hu(a));
					for (var n = a.firstChild; n; ) {
						var i = n.nextSibling,
							c = n.nodeName;
						(n[Ce] ||
							c === "SCRIPT" ||
							c === "STYLE" ||
							(c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
							a.removeChild(n),
							(n = i));
					}
				} else a === "body" && hu(l.ownerDocument.body);
			a = u;
		} while (a);
		Me(t);
	}
	function W1(l, t) {
		var a = l;
		l = 0;
		do {
			var e = a.nextSibling;
			if (
				(a.nodeType === 1
					? t
						? ((a._stashedDisplay = a.style.display),
							(a.style.display = "none"))
						: ((a.style.display = a._stashedDisplay || ""),
							a.getAttribute("style") === "" && a.removeAttribute("style"))
					: a.nodeType === 3 &&
						(t
							? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
							: (a.nodeValue = a._stashedText || "")),
				e && e.nodeType === 8)
			)
				if (((a = e.data), a === "/$")) {
					if (l === 0) break;
					l--;
				} else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
			a = e;
		} while (a);
	}
	function kc(l) {
		var t = l.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var a = t;
			switch (((t = t.nextSibling), a.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					(kc(a), ti(a));
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (a.rel.toLowerCase() === "stylesheet") continue;
			}
			l.removeChild(a);
		}
	}
	function Xd(l, t, a, e) {
		for (; l.nodeType === 1; ) {
			var u = a;
			if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
			} else if (e) {
				if (!l[Ce])
					switch (t) {
						case "meta":
							if (!l.hasAttribute("itemprop")) break;
							return l;
						case "link":
							if (
								((n = l.getAttribute("rel")),
								n === "stylesheet" && l.hasAttribute("data-precedence"))
							)
								break;
							if (
								n !== u.rel ||
								l.getAttribute("href") !==
									(u.href == null || u.href === "" ? null : u.href) ||
								l.getAttribute("crossorigin") !==
									(u.crossOrigin == null ? null : u.crossOrigin) ||
								l.getAttribute("title") !== (u.title == null ? null : u.title)
							)
								break;
							return l;
						case "style":
							if (l.hasAttribute("data-precedence")) break;
							return l;
						case "script":
							if (
								((n = l.getAttribute("src")),
								(n !== (u.src == null ? null : u.src) ||
									l.getAttribute("type") !== (u.type == null ? null : u.type) ||
									l.getAttribute("crossorigin") !==
										(u.crossOrigin == null ? null : u.crossOrigin)) &&
									n &&
									l.hasAttribute("async") &&
									!l.hasAttribute("itemprop"))
							)
								break;
							return l;
						default:
							return l;
					}
			} else if (t === "input" && l.type === "hidden") {
				var n = u.name == null ? null : "" + u.name;
				if (u.type === "hidden" && l.getAttribute("name") === n) return l;
			} else return l;
			if (((l = Et(l.nextSibling)), l === null)) break;
		}
		return null;
	}
	function Qd(l, t, a) {
		if (t === "") return null;
		for (; l.nodeType !== 3; )
			if (
				((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
					!a) ||
				((l = Et(l.nextSibling)), l === null)
			)
				return null;
		return l;
	}
	function $1(l, t) {
		for (; l.nodeType !== 8; )
			if (
				((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
					!t) ||
				((l = Et(l.nextSibling)), l === null)
			)
				return null;
		return l;
	}
	function Fc(l) {
		return l.data === "$?" || l.data === "$~";
	}
	function Ic(l) {
		return (
			l.data === "$!" ||
			(l.data === "$?" && l.ownerDocument.readyState !== "loading")
		);
	}
	function Vd(l, t) {
		var a = l.ownerDocument;
		if (l.data === "$~") l._reactRetry = t;
		else if (l.data !== "$?" || a.readyState !== "loading") t();
		else {
			var e = function () {
				(t(), a.removeEventListener("DOMContentLoaded", e));
			};
			(a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
		}
	}
	function Et(l) {
		for (; l != null; l = l.nextSibling) {
			var t = l.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (
					((t = l.data),
					t === "$" ||
						t === "$!" ||
						t === "$?" ||
						t === "$~" ||
						t === "&" ||
						t === "F!" ||
						t === "F")
				)
					break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return l;
	}
	var Pc = null;
	function k1(l) {
		l = l.nextSibling;
		for (var t = 0; l; ) {
			if (l.nodeType === 8) {
				var a = l.data;
				if (a === "/$" || a === "/&") {
					if (t === 0) return Et(l.nextSibling);
					t--;
				} else
					(a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
						t++;
			}
			l = l.nextSibling;
		}
		return null;
	}
	function F1(l) {
		l = l.previousSibling;
		for (var t = 0; l; ) {
			if (l.nodeType === 8) {
				var a = l.data;
				if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
					if (t === 0) return l;
					t--;
				} else (a !== "/$" && a !== "/&") || t++;
			}
			l = l.previousSibling;
		}
		return null;
	}
	function I1(l, t, a) {
		switch (((t = On(a)), l)) {
			case "html":
				if (((l = t.documentElement), !l)) throw Error(d(452));
				return l;
			case "head":
				if (((l = t.head), !l)) throw Error(d(453));
				return l;
			case "body":
				if (((l = t.body), !l)) throw Error(d(454));
				return l;
			default:
				throw Error(d(451));
		}
	}
	function hu(l) {
		for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
		ti(l);
	}
	var Tt = new Map(),
		P1 = new Set();
	function Nn(l) {
		return typeof l.getRootNode == "function"
			? l.getRootNode()
			: l.nodeType === 9
				? l
				: l.ownerDocument;
	}
	var Ft = M.d;
	M.d = { f: Ld, r: Kd, D: Jd, C: wd, L: Wd, m: $d, X: Fd, S: kd, M: Id };
	function Ld() {
		var l = Ft.f(),
			t = pn();
		return l || t;
	}
	function Kd(l) {
		var t = Ja(l);
		t !== null && t.tag === 5 && t.type === "form" ? ys(t) : Ft.r(l);
	}
	var Te = typeof document > "u" ? null : document;
	function l2(l, t, a) {
		var e = Te;
		if (e && typeof t == "string" && t) {
			var u = yt(t);
			((u = 'link[rel="' + l + '"][href="' + u + '"]'),
				typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
				P1.has(u) ||
					(P1.add(u),
					(l = { rel: l, crossOrigin: a, href: t }),
					e.querySelector(u) === null &&
						((t = e.createElement("link")),
						Zl(t, "link", l),
						Ul(t),
						e.head.appendChild(t))));
		}
	}
	function Jd(l) {
		(Ft.D(l), l2("dns-prefetch", l, null));
	}
	function wd(l, t) {
		(Ft.C(l, t), l2("preconnect", l, t));
	}
	function Wd(l, t, a) {
		Ft.L(l, t, a);
		var e = Te;
		if (e && l && t) {
			var u = 'link[rel="preload"][as="' + yt(t) + '"]';
			t === "image" && a && a.imageSrcSet
				? ((u += '[imagesrcset="' + yt(a.imageSrcSet) + '"]'),
					typeof a.imageSizes == "string" &&
						(u += '[imagesizes="' + yt(a.imageSizes) + '"]'))
				: (u += '[href="' + yt(l) + '"]');
			var n = u;
			switch (t) {
				case "style":
					n = Ae(l);
					break;
				case "script":
					n = xe(l);
			}
			Tt.has(n) ||
				((l = D(
					{
						rel: "preload",
						href: t === "image" && a && a.imageSrcSet ? void 0 : l,
						as: t,
					},
					a,
				)),
				Tt.set(n, l),
				e.querySelector(u) !== null ||
					(t === "style" && e.querySelector(vu(n))) ||
					(t === "script" && e.querySelector(yu(n))) ||
					((t = e.createElement("link")),
					Zl(t, "link", l),
					Ul(t),
					e.head.appendChild(t)));
		}
	}
	function $d(l, t) {
		Ft.m(l, t);
		var a = Te;
		if (a && l) {
			var e = t && typeof t.as == "string" ? t.as : "script",
				u =
					'link[rel="modulepreload"][as="' + yt(e) + '"][href="' + yt(l) + '"]',
				n = u;
			switch (e) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					n = xe(l);
			}
			if (
				!Tt.has(n) &&
				((l = D({ rel: "modulepreload", href: l }, t)),
				Tt.set(n, l),
				a.querySelector(u) === null)
			) {
				switch (e) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (a.querySelector(yu(n))) return;
				}
				((e = a.createElement("link")),
					Zl(e, "link", l),
					Ul(e),
					a.head.appendChild(e));
			}
		}
	}
	function kd(l, t, a) {
		Ft.S(l, t, a);
		var e = Te;
		if (e && l) {
			var u = wa(e).hoistableStyles,
				n = Ae(l);
			t = t || "default";
			var i = u.get(n);
			if (!i) {
				var c = { loading: 0, preload: null };
				if ((i = e.querySelector(vu(n)))) c.loading = 5;
				else {
					((l = D({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
						(a = Tt.get(n)) && lf(l, a));
					var f = (i = e.createElement("link"));
					(Ul(f),
						Zl(f, "link", l),
						(f._p = new Promise(function (v, b) {
							((f.onload = v), (f.onerror = b));
						})),
						f.addEventListener("load", function () {
							c.loading |= 1;
						}),
						f.addEventListener("error", function () {
							c.loading |= 2;
						}),
						(c.loading |= 4),
						jn(i, t, e));
				}
				((i = { type: "stylesheet", instance: i, count: 1, state: c }),
					u.set(n, i));
			}
		}
	}
	function Fd(l, t) {
		Ft.X(l, t);
		var a = Te;
		if (a && l) {
			var e = wa(a).hoistableScripts,
				u = xe(l),
				n = e.get(u);
			n ||
				((n = a.querySelector(yu(u))),
				n ||
					((l = D({ src: l, async: !0 }, t)),
					(t = Tt.get(u)) && tf(l, t),
					(n = a.createElement("script")),
					Ul(n),
					Zl(n, "link", l),
					a.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				e.set(u, n));
		}
	}
	function Id(l, t) {
		Ft.M(l, t);
		var a = Te;
		if (a && l) {
			var e = wa(a).hoistableScripts,
				u = xe(l),
				n = e.get(u);
			n ||
				((n = a.querySelector(yu(u))),
				n ||
					((l = D({ src: l, async: !0, type: "module" }, t)),
					(t = Tt.get(u)) && tf(l, t),
					(n = a.createElement("script")),
					Ul(n),
					Zl(n, "link", l),
					a.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				e.set(u, n));
		}
	}
	function t2(l, t, a, e) {
		var u = (u = w.current) ? Nn(u) : null;
		if (!u) throw Error(d(446));
		switch (l) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof a.precedence == "string" && typeof a.href == "string"
					? ((t = Ae(a.href)),
						(a = wa(u).hoistableStyles),
						(e = a.get(t)),
						e ||
							((e = { type: "style", instance: null, count: 0, state: null }),
							a.set(t, e)),
						e)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					a.rel === "stylesheet" &&
					typeof a.href == "string" &&
					typeof a.precedence == "string"
				) {
					l = Ae(a.href);
					var n = wa(u).hoistableStyles,
						i = n.get(l);
					if (
						(i ||
							((u = u.ownerDocument || u),
							(i = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							n.set(l, i),
							(n = u.querySelector(vu(l))) &&
								!n._p &&
								((i.instance = n), (i.state.loading = 5)),
							Tt.has(l) ||
								((a = {
									rel: "preload",
									as: "style",
									href: a.href,
									crossOrigin: a.crossOrigin,
									integrity: a.integrity,
									media: a.media,
									hrefLang: a.hrefLang,
									referrerPolicy: a.referrerPolicy,
								}),
								Tt.set(l, a),
								n || Pd(u, l, a, i.state))),
						t && e === null)
					)
						throw Error(d(528, ""));
					return i;
				}
				if (t && e !== null) throw Error(d(529, ""));
				return null;
			case "script":
				return (
					(t = a.async),
					(a = a.src),
					typeof a == "string" &&
					t &&
					typeof t != "function" &&
					typeof t != "symbol"
						? ((t = xe(a)),
							(a = wa(u).hoistableScripts),
							(e = a.get(t)),
							e ||
								((e = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								a.set(t, e)),
							e)
						: { type: "void", instance: null, count: 0, state: null }
				);
			default:
				throw Error(d(444, l));
		}
	}
	function Ae(l) {
		return 'href="' + yt(l) + '"';
	}
	function vu(l) {
		return 'link[rel="stylesheet"][' + l + "]";
	}
	function a2(l) {
		return D({}, l, { "data-precedence": l.precedence, precedence: null });
	}
	function Pd(l, t, a, e) {
		l.querySelector('link[rel="preload"][as="style"][' + t + "]")
			? (e.loading = 1)
			: ((t = l.createElement("link")),
				(e.preload = t),
				t.addEventListener("load", function () {
					return (e.loading |= 1);
				}),
				t.addEventListener("error", function () {
					return (e.loading |= 2);
				}),
				Zl(t, "link", a),
				Ul(t),
				l.head.appendChild(t));
	}
	function xe(l) {
		return '[src="' + yt(l) + '"]';
	}
	function yu(l) {
		return "script[async]" + l;
	}
	function e2(l, t, a) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case "style":
					var e = l.querySelector('style[data-href~="' + yt(a.href) + '"]');
					if (e) return ((t.instance = e), Ul(e), e);
					var u = D({}, a, {
						"data-href": a.href,
						"data-precedence": a.precedence,
						href: null,
						precedence: null,
					});
					return (
						(e = (l.ownerDocument || l).createElement("style")),
						Ul(e),
						Zl(e, "style", u),
						jn(e, a.precedence, l),
						(t.instance = e)
					);
				case "stylesheet":
					u = Ae(a.href);
					var n = l.querySelector(vu(u));
					if (n) return ((t.state.loading |= 4), (t.instance = n), Ul(n), n);
					((e = a2(a)),
						(u = Tt.get(u)) && lf(e, u),
						(n = (l.ownerDocument || l).createElement("link")),
						Ul(n));
					var i = n;
					return (
						(i._p = new Promise(function (c, f) {
							((i.onload = c), (i.onerror = f));
						})),
						Zl(n, "link", e),
						(t.state.loading |= 4),
						jn(n, a.precedence, l),
						(t.instance = n)
					);
				case "script":
					return (
						(n = xe(a.src)),
						(u = l.querySelector(yu(n)))
							? ((t.instance = u), Ul(u), u)
							: ((e = a),
								(u = Tt.get(n)) && ((e = D({}, a)), tf(e, u)),
								(l = l.ownerDocument || l),
								(u = l.createElement("script")),
								Ul(u),
								Zl(u, "link", e),
								l.head.appendChild(u),
								(t.instance = u))
					);
				case "void":
					return null;
				default:
					throw Error(d(443, t.type));
			}
		else
			t.type === "stylesheet" &&
				(t.state.loading & 4) === 0 &&
				((e = t.instance), (t.state.loading |= 4), jn(e, a.precedence, l));
		return t.instance;
	}
	function jn(l, t, a) {
		for (
			var e = a.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				u = e.length ? e[e.length - 1] : null,
				n = u,
				i = 0;
			i < e.length;
			i++
		) {
			var c = e[i];
			if (c.dataset.precedence === t) n = c;
			else if (n !== u) break;
		}
		n
			? n.parentNode.insertBefore(l, n.nextSibling)
			: ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
	}
	function lf(l, t) {
		(l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.title == null && (l.title = t.title));
	}
	function tf(l, t) {
		(l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.integrity == null && (l.integrity = t.integrity));
	}
	var Dn = null;
	function u2(l, t, a) {
		if (Dn === null) {
			var e = new Map(),
				u = (Dn = new Map());
			u.set(a, e);
		} else ((u = Dn), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
		if (e.has(l)) return e;
		for (
			e.set(l, null), a = a.getElementsByTagName(l), u = 0;
			u < a.length;
			u++
		) {
			var n = a[u];
			if (
				!(
					n[Ce] ||
					n[Bl] ||
					(l === "link" && n.getAttribute("rel") === "stylesheet")
				) &&
				n.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var i = n.getAttribute(t) || "";
				i = l + i;
				var c = e.get(i);
				c ? c.push(n) : e.set(i, [n]);
			}
		}
		return e;
	}
	function n2(l, t, a) {
		((l = l.ownerDocument || l),
			l.head.insertBefore(
				a,
				t === "title" ? l.querySelector("head > title") : null,
			));
	}
	function lm(l, t, a) {
		if (a === 1 || t.itemProp != null) return !1;
		switch (l) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof t.precedence != "string" ||
					typeof t.href != "string" ||
					t.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof t.rel != "string" ||
					typeof t.href != "string" ||
					t.href === "" ||
					t.onLoad ||
					t.onError
				)
					break;
				switch (t.rel) {
					case "stylesheet":
						return (
							(l = t.disabled),
							typeof t.precedence == "string" && l == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					t.async &&
					typeof t.async != "function" &&
					typeof t.async != "symbol" &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function i2(l) {
		return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
	}
	function tm(l, t, a, e) {
		if (
			a.type === "stylesheet" &&
			(typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
			(a.state.loading & 4) === 0
		) {
			if (a.instance === null) {
				var u = Ae(e.href),
					n = t.querySelector(vu(u));
				if (n) {
					((t = n._p),
						t !== null &&
							typeof t == "object" &&
							typeof t.then == "function" &&
							(l.count++, (l = Cn.bind(l)), t.then(l, l)),
						(a.state.loading |= 4),
						(a.instance = n),
						Ul(n));
					return;
				}
				((n = t.ownerDocument || t),
					(e = a2(e)),
					(u = Tt.get(u)) && lf(e, u),
					(n = n.createElement("link")),
					Ul(n));
				var i = n;
				((i._p = new Promise(function (c, f) {
					((i.onload = c), (i.onerror = f));
				})),
					Zl(n, "link", e),
					(a.instance = n));
			}
			(l.stylesheets === null && (l.stylesheets = new Map()),
				l.stylesheets.set(a, t),
				(t = a.state.preload) &&
					(a.state.loading & 3) === 0 &&
					(l.count++,
					(a = Cn.bind(l)),
					t.addEventListener("load", a),
					t.addEventListener("error", a)));
		}
	}
	var af = 0;
	function am(l, t) {
		return (
			l.stylesheets && l.count === 0 && Hn(l, l.stylesheets),
			0 < l.count || 0 < l.imgCount
				? function (a) {
						var e = setTimeout(function () {
							if ((l.stylesheets && Hn(l, l.stylesheets), l.unsuspend)) {
								var n = l.unsuspend;
								((l.unsuspend = null), n());
							}
						}, 6e4 + t);
						0 < l.imgBytes && af === 0 && (af = 62500 * Bd());
						var u = setTimeout(
							function () {
								if (
									((l.waitingForImages = !1),
									l.count === 0 &&
										(l.stylesheets && Hn(l, l.stylesheets), l.unsuspend))
								) {
									var n = l.unsuspend;
									((l.unsuspend = null), n());
								}
							},
							(l.imgBytes > af ? 50 : 800) + t,
						);
						return (
							(l.unsuspend = a),
							function () {
								((l.unsuspend = null), clearTimeout(e), clearTimeout(u));
							}
						);
					}
				: null
		);
	}
	function Cn() {
		if (
			(this.count--,
			this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
		) {
			if (this.stylesheets) Hn(this, this.stylesheets);
			else if (this.unsuspend) {
				var l = this.unsuspend;
				((this.unsuspend = null), l());
			}
		}
	}
	var Un = null;
	function Hn(l, t) {
		((l.stylesheets = null),
			l.unsuspend !== null &&
				(l.count++,
				(Un = new Map()),
				t.forEach(em, l),
				(Un = null),
				Cn.call(l)));
	}
	function em(l, t) {
		if (!(t.state.loading & 4)) {
			var a = Un.get(l);
			if (a) var e = a.get(null);
			else {
				((a = new Map()), Un.set(l, a));
				for (
					var u = l.querySelectorAll(
							"link[data-precedence],style[data-precedence]",
						),
						n = 0;
					n < u.length;
					n++
				) {
					var i = u[n];
					(i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
						(a.set(i.dataset.precedence, i), (e = i));
				}
				e && a.set(null, e);
			}
			((u = t.instance),
				(i = u.getAttribute("data-precedence")),
				(n = a.get(i) || e),
				n === e && a.set(null, u),
				a.set(i, u),
				this.count++,
				(e = Cn.bind(this)),
				u.addEventListener("load", e),
				u.addEventListener("error", e),
				n
					? n.parentNode.insertBefore(u, n.nextSibling)
					: ((l = l.nodeType === 9 ? l.head : l),
						l.insertBefore(u, l.firstChild)),
				(t.state.loading |= 4));
		}
	}
	var gu = {
		$$typeof: Cl,
		Provider: null,
		Consumer: null,
		_currentValue: q,
		_currentValue2: q,
		_threadCount: 0,
	};
	function um(l, t, a, e, u, n, i, c, f) {
		((this.tag = 1),
			(this.containerInfo = l),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = Fn(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Fn(0)),
			(this.hiddenUpdates = Fn(null)),
			(this.identifierPrefix = e),
			(this.onUncaughtError = u),
			(this.onCaughtError = n),
			(this.onRecoverableError = i),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = f),
			(this.incompleteTransitions = new Map()));
	}
	function c2(l, t, a, e, u, n, i, c, f, v, b, z) {
		return (
			(l = new um(l, t, a, i, f, v, b, z, c)),
			(t = 1),
			n === !0 && (t |= 24),
			(n = ct(3, null, null, t)),
			(l.current = n),
			(n.stateNode = l),
			(t = Ri()),
			t.refCount++,
			(l.pooledCache = t),
			t.refCount++,
			(n.memoizedState = { element: e, isDehydrated: a, cache: t }),
			Gi(n),
			l
		);
	}
	function f2(l) {
		return l ? ((l = ee), l) : ee;
	}
	function s2(l, t, a, e, u, n) {
		((u = f2(u)),
			e.context === null ? (e.context = u) : (e.pendingContext = u),
			(e = ca(t)),
			(e.payload = { element: a }),
			(n = n === void 0 ? null : n),
			n !== null && (e.callback = n),
			(a = fa(l, e, t)),
			a !== null && (Pl(a, l, t), $e(a, l, t)));
	}
	function o2(l, t) {
		if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
			var a = l.retryLane;
			l.retryLane = a !== 0 && a < t ? a : t;
		}
	}
	function ef(l, t) {
		(o2(l, t), (l = l.alternate) && o2(l, t));
	}
	function d2(l) {
		if (l.tag === 13 || l.tag === 31) {
			var t = ja(l, 67108864);
			(t !== null && Pl(t, l, 67108864), ef(l, 67108864));
		}
	}
	function m2(l) {
		if (l.tag === 13 || l.tag === 31) {
			var t = mt();
			t = In(t);
			var a = ja(l, t);
			(a !== null && Pl(a, l, t), ef(l, t));
		}
	}
	var Rn = !0;
	function nm(l, t, a, e) {
		var u = p.T;
		p.T = null;
		var n = M.p;
		try {
			((M.p = 2), uf(l, t, a, e));
		} finally {
			((M.p = n), (p.T = u));
		}
	}
	function im(l, t, a, e) {
		var u = p.T;
		p.T = null;
		var n = M.p;
		try {
			((M.p = 8), uf(l, t, a, e));
		} finally {
			((M.p = n), (p.T = u));
		}
	}
	function uf(l, t, a, e) {
		if (Rn) {
			var u = nf(e);
			if (u === null) (Lc(l, t, e, Bn, a), h2(l, e));
			else if (fm(u, l, t, a, e)) e.stopPropagation();
			else if ((h2(l, e), t & 4 && -1 < cm.indexOf(l))) {
				for (; u !== null; ) {
					var n = Ja(u);
					if (n !== null)
						switch (n.tag) {
							case 3:
								if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
									var i = Aa(n.pendingLanes);
									if (i !== 0) {
										var c = n;
										for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
											var f = 1 << (31 - nt(i));
											((c.entanglements[1] |= f), (i &= ~f));
										}
										(Ct(n), (al & 6) === 0 && ((Sn = et() + 500), du(0)));
									}
								}
								break;
							case 31:
							case 13:
								((c = ja(n, 2)), c !== null && Pl(c, n, 2), pn(), ef(n, 2));
						}
					if (((n = nf(e)), n === null && Lc(l, t, e, Bn, a), n === u)) break;
					u = n;
				}
				u !== null && e.stopPropagation();
			} else Lc(l, t, e, null, a);
		}
	}
	function nf(l) {
		return ((l = ci(l)), cf(l));
	}
	var Bn = null;
	function cf(l) {
		if (((Bn = null), (l = Ka(l)), l !== null)) {
			var t = Y(l);
			if (t === null) l = null;
			else {
				var a = t.tag;
				if (a === 13) {
					if (((l = Z(t)), l !== null)) return l;
					l = null;
				} else if (a === 31) {
					if (((l = il(t)), l !== null)) return l;
					l = null;
				} else if (a === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					l = null;
				} else t !== l && (l = null);
			}
		}
		return ((Bn = l), null);
	}
	function r2(l) {
		switch (l) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (K2()) {
					case _f:
						return 2;
					case zf:
						return 8;
					case Tu:
					case J2:
						return 32;
					case Ef:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var ff = !1,
		ba = null,
		pa = null,
		_a = null,
		Su = new Map(),
		bu = new Map(),
		za = [],
		cm =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function h2(l, t) {
		switch (l) {
			case "focusin":
			case "focusout":
				ba = null;
				break;
			case "dragenter":
			case "dragleave":
				pa = null;
				break;
			case "mouseover":
			case "mouseout":
				_a = null;
				break;
			case "pointerover":
			case "pointerout":
				Su.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				bu.delete(t.pointerId);
		}
	}
	function pu(l, t, a, e, u, n) {
		return l === null || l.nativeEvent !== n
			? ((l = {
					blockedOn: t,
					domEventName: a,
					eventSystemFlags: e,
					nativeEvent: n,
					targetContainers: [u],
				}),
				t !== null && ((t = Ja(t)), t !== null && d2(t)),
				l)
			: ((l.eventSystemFlags |= e),
				(t = l.targetContainers),
				u !== null && t.indexOf(u) === -1 && t.push(u),
				l);
	}
	function fm(l, t, a, e, u) {
		switch (t) {
			case "focusin":
				return ((ba = pu(ba, l, t, a, e, u)), !0);
			case "dragenter":
				return ((pa = pu(pa, l, t, a, e, u)), !0);
			case "mouseover":
				return ((_a = pu(_a, l, t, a, e, u)), !0);
			case "pointerover":
				var n = u.pointerId;
				return (Su.set(n, pu(Su.get(n) || null, l, t, a, e, u)), !0);
			case "gotpointercapture":
				return (
					(n = u.pointerId),
					bu.set(n, pu(bu.get(n) || null, l, t, a, e, u)),
					!0
				);
		}
		return !1;
	}
	function v2(l) {
		var t = Ka(l.target);
		if (t !== null) {
			var a = Y(t);
			if (a !== null) {
				if (((t = a.tag), t === 13)) {
					if (((t = Z(a)), t !== null)) {
						((l.blockedOn = t),
							Nf(l.priority, function () {
								m2(a);
							}));
						return;
					}
				} else if (t === 31) {
					if (((t = il(a)), t !== null)) {
						((l.blockedOn = t),
							Nf(l.priority, function () {
								m2(a);
							}));
						return;
					}
				} else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
					l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
					return;
				}
			}
		}
		l.blockedOn = null;
	}
	function qn(l) {
		if (l.blockedOn !== null) return !1;
		for (var t = l.targetContainers; 0 < t.length; ) {
			var a = nf(l.nativeEvent);
			if (a === null) {
				a = l.nativeEvent;
				var e = new a.constructor(a.type, a);
				((ii = e), a.target.dispatchEvent(e), (ii = null));
			} else return ((t = Ja(a)), t !== null && d2(t), (l.blockedOn = a), !1);
			t.shift();
		}
		return !0;
	}
	function y2(l, t, a) {
		qn(l) && a.delete(t);
	}
	function sm() {
		((ff = !1),
			ba !== null && qn(ba) && (ba = null),
			pa !== null && qn(pa) && (pa = null),
			_a !== null && qn(_a) && (_a = null),
			Su.forEach(y2),
			bu.forEach(y2));
	}
	function Yn(l, t) {
		l.blockedOn === t &&
			((l.blockedOn = null),
			ff ||
				((ff = !0),
				y.unstable_scheduleCallback(y.unstable_NormalPriority, sm)));
	}
	var Gn = null;
	function g2(l) {
		Gn !== l &&
			((Gn = l),
			y.unstable_scheduleCallback(y.unstable_NormalPriority, function () {
				Gn === l && (Gn = null);
				for (var t = 0; t < l.length; t += 3) {
					var a = l[t],
						e = l[t + 1],
						u = l[t + 2];
					if (typeof e != "function") {
						if (cf(e || a) === null) continue;
						break;
					}
					var n = Ja(a);
					n !== null &&
						(l.splice(t, 3),
						(t -= 3),
						nc(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
				}
			}));
	}
	function Me(l) {
		function t(f) {
			return Yn(f, l);
		}
		(ba !== null && Yn(ba, l),
			pa !== null && Yn(pa, l),
			_a !== null && Yn(_a, l),
			Su.forEach(t),
			bu.forEach(t));
		for (var a = 0; a < za.length; a++) {
			var e = za[a];
			e.blockedOn === l && (e.blockedOn = null);
		}
		for (; 0 < za.length && ((a = za[0]), a.blockedOn === null); )
			(v2(a), a.blockedOn === null && za.shift());
		if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
			for (e = 0; e < a.length; e += 3) {
				var u = a[e],
					n = a[e + 1],
					i = u[wl] || null;
				if (typeof n == "function") i || g2(a);
				else if (i) {
					var c = null;
					if (n && n.hasAttribute("formAction")) {
						if (((u = n), (i = n[wl] || null))) c = i.formAction;
						else if (cf(u) !== null) continue;
					} else c = i.action;
					(typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)),
						g2(a));
				}
			}
	}
	function S2() {
		function l(n) {
			n.canIntercept &&
				n.info === "react-transition" &&
				n.intercept({
					handler: function () {
						return new Promise(function (i) {
							return (u = i);
						});
					},
					focusReset: "manual",
					scroll: "manual",
				});
		}
		function t() {
			(u !== null && (u(), (u = null)), e || setTimeout(a, 20));
		}
		function a() {
			if (!e && !navigation.transition) {
				var n = navigation.currentEntry;
				n &&
					n.url != null &&
					navigation.navigate(n.url, {
						state: n.getState(),
						info: "react-transition",
						history: "replace",
					});
			}
		}
		if (typeof navigation == "object") {
			var e = !1,
				u = null;
			return (
				navigation.addEventListener("navigate", l),
				navigation.addEventListener("navigatesuccess", t),
				navigation.addEventListener("navigateerror", t),
				setTimeout(a, 100),
				function () {
					((e = !0),
						navigation.removeEventListener("navigate", l),
						navigation.removeEventListener("navigatesuccess", t),
						navigation.removeEventListener("navigateerror", t),
						u !== null && (u(), (u = null)));
				}
			);
		}
	}
	function sf(l) {
		this._internalRoot = l;
	}
	((Zn.prototype.render = sf.prototype.render =
		function (l) {
			var t = this._internalRoot;
			if (t === null) throw Error(d(409));
			var a = t.current,
				e = mt();
			s2(a, e, l, t, null, null);
		}),
		(Zn.prototype.unmount = sf.prototype.unmount =
			function () {
				var l = this._internalRoot;
				if (l !== null) {
					this._internalRoot = null;
					var t = l.containerInfo;
					(s2(l.current, 2, null, l, null, null), pn(), (t[La] = null));
				}
			}));
	function Zn(l) {
		this._internalRoot = l;
	}
	Zn.prototype.unstable_scheduleHydration = function (l) {
		if (l) {
			var t = Of();
			l = { blockedOn: null, target: l, priority: t };
			for (var a = 0; a < za.length && t !== 0 && t < za[a].priority; a++);
			(za.splice(a, 0, l), a === 0 && v2(l));
		}
	};
	var b2 = x.version;
	if (b2 !== "19.2.1") throw Error(d(527, b2, "19.2.1"));
	M.findDOMNode = function (l) {
		var t = l._reactInternals;
		if (t === void 0)
			throw typeof l.render == "function"
				? Error(d(188))
				: ((l = Object.keys(l).join(",")), Error(d(268, l)));
		return (
			(l = T(t)),
			(l = l !== null ? G(l) : null),
			(l = l === null ? null : l.stateNode),
			l
		);
	};
	var om = {
		bundleType: 0,
		version: "19.2.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: p,
		reconcilerVersion: "19.2.1",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Xn.isDisabled && Xn.supportsFiber)
			try {
				((Ne = Xn.inject(om)), (ut = Xn));
			} catch {}
	}
	return (
		(zu.createRoot = function (l, t) {
			if (!H(l)) throw Error(d(299));
			var a = !1,
				e = "",
				u = xs,
				n = Ms,
				i = Os;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (a = !0),
					t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
					t.onCaughtError !== void 0 && (n = t.onCaughtError),
					t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
				(t = c2(l, 1, !1, null, null, a, e, null, u, n, i, S2)),
				(l[La] = t.current),
				Vc(l),
				new sf(t)
			);
		}),
		(zu.hydrateRoot = function (l, t, a) {
			if (!H(l)) throw Error(d(299));
			var e = !1,
				u = "",
				n = xs,
				i = Ms,
				c = Os,
				f = null;
			return (
				a != null &&
					(a.unstable_strictMode === !0 && (e = !0),
					a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
					a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
					a.onCaughtError !== void 0 && (i = a.onCaughtError),
					a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
					a.formState !== void 0 && (f = a.formState)),
				(t = c2(l, 1, !0, t, a ?? null, e, u, f, n, i, c, S2)),
				(t.context = f2(null)),
				(a = t.current),
				(e = mt()),
				(e = In(e)),
				(u = ca(e)),
				(u.callback = null),
				fa(a, u, e),
				(a = e),
				(t.current.lanes = a),
				De(t, a),
				Ct(t),
				(l[La] = t.current),
				Vc(l),
				new Zn(t)
			);
		}),
		(zu.version = "19.2.1"),
		zu
	);
}
var N2;
function pm() {
	if (N2) return mf.exports;
	N2 = 1;
	function y() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
			} catch (x) {
				console.error(x);
			}
	}
	return (y(), (mf.exports = bm()), mf.exports);
}
var _m = pm();
const zm =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='22.604'%20height='24.552'%20viewBox='0%200%2022.604%2024.552'%3e%3cdefs%3e%3clinearGradient%20id='linear-gradient'%20x1='0.5'%20x2='0.5'%20y2='1'%20gradientUnits='objectBoundingBox'%3e%3cstop%20offset='0'%20stop-color='%2311e0e6'/%3e%3cstop%20offset='1'%20stop-color='%230048a9'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='logo-grad'%20transform='translate(-21.633)'%3e%3cg%20id='Grupo_7'%20data-name='Grupo%207'%20transform='translate(21.633)'%3e%3crect%20id='Retângulo_87'%20data-name='Retângulo%2087'%20width='3.308'%20height='21.961'%20transform='translate(0%202.592)'%20fill='url(%23linear-gradient)'/%3e%3crect%20id='Retângulo_88'%20data-name='Retângulo%2088'%20width='3.308'%20height='9.947'%20transform='translate(4.824%2014.606)'%20fill='url(%23linear-gradient)'/%3e%3crect%20id='Retângulo_89'%20data-name='Retângulo%2089'%20width='3.308'%20height='18.699'%20transform='translate(9.648%205.854)'%20fill='url(%23linear-gradient)'/%3e%3crect%20id='Retângulo_90'%20data-name='Retângulo%2090'%20width='3.308'%20height='12.841'%20transform='translate(14.472%2011.711)'%20fill='url(%23linear-gradient)'/%3e%3crect%20id='Retângulo_91'%20data-name='Retângulo%2091'%20width='3.308'%20height='14.908'%20transform='translate(19.296%209.644)'%20fill='url(%23linear-gradient)'/%3e%3crect%20id='Retângulo_92'%20data-name='Retângulo%2092'%20width='3.308'%20height='1.6'%20transform='translate(0)'%20fill='url(%23linear-gradient)'/%3e%3crect%20id='Retângulo_93'%20data-name='Retângulo%2093'%20width='3.308'%20height='1.6'%20transform='translate(9.648%203.427)'%20fill='url(%23linear-gradient)'/%3e%3crect%20id='Retângulo_94'%20data-name='Retângulo%2094'%20width='3.308'%20height='1.6'%20transform='translate(14.472%209.326)'%20fill='url(%23linear-gradient)'/%3e%3crect%20id='Retângulo_95'%20data-name='Retângulo%2095'%20width='3.308'%20height='1.6'%20transform='translate(19.296%207.217)'%20fill='url(%23linear-gradient)'/%3e%3crect%20id='Retângulo_96'%20data-name='Retângulo%2096'%20width='3.308'%20height='1.6'%20transform='translate(4.824%2012.179)'%20fill='url(%23linear-gradient)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
	Em = () =>
		r.jsx("header", {
			className: "header_content",
			children: r.jsxs("div", {
				className: "container flex",
				children: [
					r.jsxs("div", {
						className: "header_logo flex",
						children: [
							r.jsx("div", {
								className: "header_logo__img flex",
								children: r.jsx("img", { src: zm, alt: "responsive logo" }),
							}),
							r.jsx("h1", { children: "responsive player" }),
						],
					}),
					r.jsxs("div", {
						className: "header_user flex",
						children: [
							r.jsx("div", {
								className: "header_user__img flex",
								children: r.jsx("img", {
									src: "https://xat.com/content/web/R00244/img/xatplanet.svg",
									href: "https://xat.com/fondos",
									alt: "logo",
								}),
							}),
							r.jsx("span", { children: "๖ۣۜBʏDᴇsɪɢɴۣۜ" }),
						],
					}),
				],
			}),
		}),
	Tm = ({ children: y }) =>
		r.jsx("div", { className: "viewport_top flex column", children: y });
var Z2 = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	j2 = Va.createContext && Va.createContext(Z2),
	Am = ["attr", "size", "title"];
function xm(y, x) {
	if (y == null) return {};
	var A = Mm(y, x),
		d,
		H;
	if (Object.getOwnPropertySymbols) {
		var Y = Object.getOwnPropertySymbols(y);
		for (H = 0; H < Y.length; H++)
			((d = Y[H]),
				!(x.indexOf(d) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(y, d) &&
					(A[d] = y[d]));
	}
	return A;
}
function Mm(y, x) {
	if (y == null) return {};
	var A = {};
	for (var d in y)
		if (Object.prototype.hasOwnProperty.call(y, d)) {
			if (x.indexOf(d) >= 0) continue;
			A[d] = y[d];
		}
	return A;
}
function Vn() {
	return (
		(Vn = Object.assign
			? Object.assign.bind()
			: function (y) {
					for (var x = 1; x < arguments.length; x++) {
						var A = arguments[x];
						for (var d in A)
							Object.prototype.hasOwnProperty.call(A, d) && (y[d] = A[d]);
					}
					return y;
				}),
		Vn.apply(this, arguments)
	);
}
function D2(y, x) {
	var A = Object.keys(y);
	if (Object.getOwnPropertySymbols) {
		var d = Object.getOwnPropertySymbols(y);
		(x &&
			(d = d.filter(function (H) {
				return Object.getOwnPropertyDescriptor(y, H).enumerable;
			})),
			A.push.apply(A, d));
	}
	return A;
}
function Ln(y) {
	for (var x = 1; x < arguments.length; x++) {
		var A = arguments[x] != null ? arguments[x] : {};
		x % 2
			? D2(Object(A), !0).forEach(function (d) {
					Om(y, d, A[d]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(y, Object.getOwnPropertyDescriptors(A))
				: D2(Object(A)).forEach(function (d) {
						Object.defineProperty(y, d, Object.getOwnPropertyDescriptor(A, d));
					});
	}
	return y;
}
function Om(y, x, A) {
	return (
		(x = Nm(x)),
		x in y
			? Object.defineProperty(y, x, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0,
				})
			: (y[x] = A),
		y
	);
}
function Nm(y) {
	var x = jm(y, "string");
	return typeof x == "symbol" ? x : x + "";
}
function jm(y, x) {
	if (typeof y != "object" || !y) return y;
	var A = y[Symbol.toPrimitive];
	if (A !== void 0) {
		var d = A.call(y, x);
		if (typeof d != "object") return d;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (x === "string" ? String : Number)(y);
}
function X2(y) {
	return (
		y &&
		y.map((x, A) =>
			Va.createElement(x.tag, Ln({ key: A }, x.attr), X2(x.child)),
		)
	);
}
function Ut(y) {
	return (x) =>
		Va.createElement(Dm, Vn({ attr: Ln({}, y.attr) }, x), X2(y.child));
}
function Dm(y) {
	var x = (A) => {
		var { attr: d, size: H, title: Y } = y,
			Z = xm(y, Am),
			il = H || A.size || "1em",
			j;
		return (
			A.className && (j = A.className),
			y.className && (j = (j ? j + " " : "") + y.className),
			Va.createElement(
				"svg",
				Vn(
					{ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
					A.attr,
					d,
					Z,
					{
						className: j,
						style: Ln(Ln({ color: y.color || A.color }, A.style), y.style),
						height: il,
						width: il,
						xmlns: "http://www.w3.org/2000/svg",
					},
				),
				Y && Va.createElement("title", null, Y),
				y.children,
			)
		);
	};
	return j2 !== void 0
		? Va.createElement(j2.Consumer, null, (A) => x(A))
		: x(Z2);
}
function Cm(y) {
	return Ut({
		attr: { viewBox: "0 0 640 512" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z",
				},
				child: [],
			},
		],
	})(y);
}
function C2(y) {
	return Ut({
		attr: { viewBox: "0 0 512 512" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M160 32c-16 0-32 16-32 32v384c0 16 16 32 32 32h192c16 0 32-16 32-32V64c0-16-16-32-32-32H160zm21.68 23h96v18h-96V55zM304 55h32v18h-32V55zM154 96h204v320H154V96zm70 342h63.984c16 0 16 16 16 16v6H208v-6s0-16 16-16z",
				},
				child: [],
			},
		],
	})(y);
}
function U2(y) {
	return Ut({
		attr: { viewBox: "0 0 512 512" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M409 39c-4.5-4.5-10.6-7-16.9-7H119.9c-6.4 0-12.4 2.5-16.9 7-4.5 4.5-7 10.6-7 16.9V456c0 6.4 2.5 12.4 7 16.9 4.5 4.5 10.6 7 16.9 7H392c6.4 0 12.4-2.5 16.9-7 4.5-4.5 7-10.6 7-16.9V55.9c.1-6.3-2.4-12.4-6.9-16.9zm-153.4 9.7c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7c0-3.8 3.2-7 7-7zM256 470c-7.7 0-14-6.5-14-14.1 0-7.5 6.2-14 14-14 7.7 0 14.1 6.4 14.1 14-.1 7.6-6.4 14.1-14.1 14.1zm144-38H112V80h288v352z",
				},
				child: [],
			},
		],
	})(y);
}
function H2(y) {
	return Ut({
		attr: { viewBox: "0 0 24 24" },
		child: [
			{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
			{
				tag: "path",
				attr: {
					d: "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
				},
				child: [],
			},
		],
	})(y);
}
function Um(y) {
	return Ut({
		attr: { viewBox: "0 0 512 512" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z",
				},
				child: [],
			},
		],
	})(y);
}
function R2(y) {
	return Ut({
		attr: { viewBox: "0 0 512 512" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M480 48H32a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm-20 36v216H52V84zM240.13 354.08a16 16 0 1 1 13.79 13.79 16 16 0 0 1-13.79-13.79z",
				},
				child: [],
			},
		],
	})(y);
}
function B2(y) {
	return Ut({
		attr: { viewBox: "0 0 512 512" },
		child: [
			{
				tag: "rect",
				attr: {
					width: "448",
					height: "272",
					x: "32",
					y: "96",
					fill: "none",
					strokeLinejoin: "round",
					strokeWidth: "32",
					rx: "32.14",
					ry: "32.14",
				},
				child: [],
			},
			{
				tag: "path",
				attr: {
					strokeLinecap: "round",
					strokeMiterlimit: "10",
					strokeWidth: "32",
					d: "M128 416h256",
				},
				child: [],
			},
		],
	})(y);
}
const Hm =
		"data:image/svg+xml,%3csvg%20id='smartphne'%20xmlns='http://www.w3.org/2000/svg'%20width='35.625'%20height='57'%20viewBox='0%200%2035.625%2057'%3e%3cg%20id='Grupo_28'%20data-name='Grupo%2028'%20transform='translate(0%201.187)'%3e%3cpath%20id='Caminho_175'%20data-name='Caminho%20175'%20d='M97.186,64A1.187,1.187,0,0,0,96,65.186v2.375a1.188,1.188,0,0,0,2.375,0V65.186A1.188,1.188,0,0,0,97.186,64Z'%20transform='translate(-95.999%20-58.061)'%20fill='%23434a54'/%3e%3cpath%20id='Caminho_176'%20data-name='Caminho%20176'%20d='M97.186,117.335A1.187,1.187,0,0,0,96,118.522v4.75a1.188,1.188,0,1,0,2.375,0v-4.75A1.188,1.188,0,0,0,97.186,117.335Z'%20transform='translate(-95.999%20-105.459)'%20fill='%23434a54'/%3e%3cpath%20id='Caminho_177'%20data-name='Caminho%20177'%20d='M97.186,192A1.187,1.187,0,0,0,96,193.186v4.751a1.188,1.188,0,0,0,2.375,0v-4.751A1.188,1.188,0,0,0,97.186,192Z'%20transform='translate(-95.999%20-171.811)'%20fill='%23434a54'/%3e%3cpath%20id='Caminho_178'%20data-name='Caminho%20178'%20d='M395.843,128a1.188,1.188,0,0,0-1.19,1.187v4.751a1.188,1.188,0,0,0,2.376,0v-4.751A1.187,1.187,0,0,0,395.843,128Z'%20transform='translate(-361.404%20-114.936)'%20fill='%23434a54'/%3e%3cpath%20id='Caminho_179'%20data-name='Caminho%20179'%20d='M120.9,65.289a3.566,3.566,0,0,1-3.563-3.562v-47.5a3.567,3.567,0,0,1,3.563-3.562h23.748a3.566,3.566,0,0,1,3.563,3.562v47.5a3.565,3.565,0,0,1-3.563,3.562H120.9Z'%20transform='translate(-114.96%20-10.664)'%20fill='%23434a54'/%3e%3c/g%3e%3crect%20id='Retângulo_140'%20data-name='Retângulo%20140'%20width='30.81'%20height='37.937'%20transform='translate(2.426%208.384)'%20fill='%235d9cec'/%3e%3cg%20id='Grupo_29'%20data-name='Grupo%2029'%20transform='translate(1.187)'%3e%3cpath%20id='Caminho_180'%20data-name='Caminho%20180'%20d='M135.162,0H111.414a4.75,4.75,0,0,0-4.751,4.75v47.5A4.751,4.751,0,0,0,111.414,57h23.748a4.752,4.752,0,0,0,4.752-4.751V4.75A4.751,4.751,0,0,0,135.162,0Zm3.563,52.249a3.565,3.565,0,0,1-3.563,3.562H111.414a3.566,3.566,0,0,1-3.563-3.562V4.75a3.567,3.567,0,0,1,3.563-3.562h23.748a3.566,3.566,0,0,1,3.563,3.562Z'%20transform='translate(-106.663)'%20fill='%23656d78'/%3e%3cpath%20id='Caminho_181'%20data-name='Caminho%20181'%20d='M227.561,426.669a3.562,3.562,0,1,0,3.563,3.563A3.563,3.563,0,0,0,227.561,426.669Zm0,4.749a1.187,1.187,0,1,1,1.187-1.186A1.188,1.188,0,0,1,227.561,431.418Z'%20transform='translate(-210.935%20-379.168)'%20fill='%23656d78'/%3e%3c/g%3e%3cpath%20id='Caminho_182'%20data-name='Caminho%20182'%20d='M194.373,33.186A1.188,1.188,0,1,1,193.185,32,1.189,1.189,0,0,1,194.373,33.186Z'%20transform='translate(-181.311%20-28.437)'%20fill='%235d9cec'/%3e%3cpath%20id='Caminho_183'%20data-name='Caminho%20183'%20d='M229.938,32h-4.751a1.188,1.188,0,0,0,0,2.375h4.751a1.188,1.188,0,0,0,0-2.375Z'%20transform='translate(-209.749%20-28.437)'%20opacity='0.2'/%3e%3cpath%20id='Caminho_184'%20data-name='Caminho%20184'%20d='M200.162,112.675h-6.828l7.125-38.012h6.827Z'%20transform='translate(-182.498%20-66.351)'%20fill='%23fff'%20opacity='0.1'/%3e%3c/svg%3e",
	Rm =
		"data:image/svg+xml,%3csvg%20id='tablet'%20xmlns='http://www.w3.org/2000/svg'%20width='40.377'%20height='57'%20viewBox='0%200%2040.377%2057'%3e%3cpath%20id='Caminho_185'%20data-name='Caminho%20185'%20d='M84.152,61.147a4.16,4.16,0,0,1-4.157-4.154V9.492a4.161,4.161,0,0,1,4.157-4.156h30.874a4.161,4.161,0,0,1,4.157,4.156v47.5a4.16,4.16,0,0,1-4.157,4.154H84.152Z'%20transform='translate(-79.401%20-4.742)'%20fill='%23434a54'/%3e%3crect%20id='Retângulo_141'%20data-name='Retângulo%20141'%20width='37.906'%20height='42.751'%20transform='translate(1.188%205.938)'%20fill='%235d9cec'/%3e%3cg%20id='Grupo_30'%20data-name='Grupo%2030'%20transform='translate(0)'%3e%3cpath%20id='Caminho_186'%20data-name='Caminho%20186'%20d='M110.283,0H79.41a4.75,4.75,0,0,0-4.751,4.75v47.5A4.749,4.749,0,0,0,79.41,57h30.874a4.751,4.751,0,0,0,4.752-4.749V4.75A4.752,4.752,0,0,0,110.283,0Zm3.563,52.251a3.567,3.567,0,0,1-3.563,3.562H79.41a3.568,3.568,0,0,1-3.563-3.562V4.75A3.567,3.567,0,0,1,79.41,1.187h30.874a3.566,3.566,0,0,1,3.563,3.562Z'%20transform='translate(-74.659)'%20fill='%23656d78'/%3e%3cpath%20id='Caminho_187'%20data-name='Caminho%20187'%20d='M239.41,450.373A2.376,2.376,0,1,1,237.033,448,2.374,2.374,0,0,1,239.41,450.373Z'%20transform='translate(-216.845%20-398.122)'%20fill='%23656d78'/%3e%3c/g%3e%3cellipse%20id='Elipse_42'%20data-name='Elipse%2042'%20cx='1.187'%20cy='1.187'%20rx='1.187'%20ry='1.187'%20transform='translate(19.001%202.375)'%20fill='%235d9cec'/%3e%3cpath%20id='Caminho_188'%20data-name='Caminho%20188'%20d='M243.863,96.072h-9.2l7.124-42.753h9.205Z'%20transform='translate(-216.845%20-47.383)'%20fill='%23fff'%20opacity='0.1'/%3e%3c/svg%3e",
	Bm =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='76'%20height='45.915'%20viewBox='0%200%2076%2045.915'%3e%3cg%20id='laptop'%20transform='translate(0)'%3e%3crect%20id='Retângulo_138'%20data-name='Retângulo%20138'%20width='59.503'%20height='32.754'%20transform='translate(8.213%202.078)'%20fill='%235d9cec'/%3e%3cpath%20id='Caminho_171'%20data-name='Caminho%20171'%20d='M102.83,101.339h-57a3.168,3.168,0,0,0-3.167,3.167V144.09H106V104.506A3.169,3.169,0,0,0,102.83,101.339Zm0,41.165h-57v-38h57v38Z'%20transform='translate(-36.33%20-101.339)'%20fill='%23434a54'/%3e%3cpath%20id='Caminho_172'%20data-name='Caminho%20172'%20d='M76,362.1a3.166,3.166,0,0,1-3.168,3.164H3.167A3.164,3.164,0,0,1,0,362.1v-4.75H76v4.75Z'%20transform='translate(0%20-319.345)'%20fill='%23656d78'/%3e%3crect%20id='Retângulo_139'%20data-name='Retângulo%20139'%20width='60.067'%20height='3.168'%20transform='translate(7.647%2034.832)'%20fill='%23434a54'/%3e%3cpath%20id='Caminho_173'%20data-name='Caminho%20173'%20d='M204.267,154.341H192l9.5-31.666h12.269Z'%20transform='translate(-163.498%20-119.508)'%20fill='%23fff'%20opacity='0.1'/%3e%3cpath%20id='Caminho_174'%20data-name='Caminho%20174'%20d='M213.167,357.346H197.334v1.582a1.58,1.58,0,0,0,1.583,1.582h14.25a1.579,1.579,0,0,0,1.582-1.582v-1.582Z'%20transform='translate(-168.042%20-319.345)'%20fill='%23aab2bc'/%3e%3c/g%3e%3c/svg%3e",
	qm =
		"data:image/svg+xml,%3csvg%20id='desktop'%20xmlns='http://www.w3.org/2000/svg'%20width='68.398'%20height='57'%20viewBox='0%200%2068.398%2057'%3e%3cg%20id='monitor-tv-svgrepo-com_1_'%20data-name='monitor-tv-svgrepo-com(1)'%20transform='translate(0)'%3e%3cpath%20id='Caminho_208'%20data-name='Caminho%20208'%20d='M12.089,98.928A1.426,1.426,0,0,1,10.663,97.5V54.756a1.427,1.427,0,0,1,1.426-1.425h62.7a1.428,1.428,0,0,1,1.428,1.425V97.5a1.428,1.428,0,0,1-1.428,1.424Z'%20transform='translate(-9.239%20-51.905)'%20fill='%235d9cec'/%3e%3cpath%20id='Caminho_209'%20data-name='Caminho%20209'%20d='M65.546,42.659H2.85A2.851,2.851,0,0,0,0,45.509V88.258a2.851,2.851,0,0,0,2.85,2.851h62.7A2.852,2.852,0,0,0,68.4,88.258V45.509A2.852,2.852,0,0,0,65.546,42.659Zm0,45.6H2.85V45.509h62.7Z'%20transform='translate(0%20-42.659)'%20fill='%23656d78'/%3e%3cpath%20id='Caminho_210'%20data-name='Caminho%20210'%20d='M193.464,395.45h-22.8l2.842-11.388,17.112,0Z'%20transform='translate(-147.864%20-338.45)'%20fill='%23434a54'/%3e%3crect%20id='Retângulo_144'%20data-name='Retângulo%20144'%20width='64.138'%20height='8.153'%20transform='translate(2.13%2039.901)'%20fill='%23656d78'/%3e%3cpath%20id='Caminho_211'%20data-name='Caminho%20211'%20d='M248.183,364.078a1.425,1.425,0,1,1-1.425-1.428A1.425,1.425,0,0,1,248.183,364.078Z'%20transform='translate(-212.56%20-319.902)'%20fill='%23aab2bc'/%3e%3cpath%20id='Caminho_212'%20data-name='Caminho%20212'%20d='M184.225,447.993h-22.8a1.426,1.426,0,0,0,0,2.851h22.8a1.426,1.426,0,0,0,0-2.851Z'%20transform='translate(-138.625%20-393.844)'%20fill='%23656d78'/%3e%3cpath%20id='Caminho_213'%20data-name='Caminho%20213'%20d='M264.193,101.045H256l8.55-37.05h8.195Z'%20transform='translate(-221.799%20-61.145)'%20fill='%23fff'%20opacity='0.1'/%3e%3c/g%3e%3c/svg%3e",
	Ym =
		"data:image/svg+xml,%3csvg%20id='full-screen'%20xmlns='http://www.w3.org/2000/svg'%20width='76'%20height='57'%20viewBox='0%200%2076%2057'%3e%3crect%20id='Retângulo_142'%20data-name='Retângulo%20142'%20width='25.335'%20height='5.277'%20transform='translate(25.332%2049.629)'%20fill='%23434a54'/%3e%3cpath%20id='Caminho_203'%20data-name='Caminho%20203'%20d='M156.917,426.653h-38a1.584,1.584,0,0,0,0,3.168h38a1.584,1.584,0,0,0,0-3.168Z'%20transform='translate(-99.917%20-372.821)'%20fill='%23656d78'/%3e%3cpath%20id='Caminho_204'%20data-name='Caminho%20204'%20d='M12.247,122.162a1.585,1.585,0,0,1-1.584-1.582V76.247a1.586,1.586,0,0,1,1.584-1.584H81.912A1.587,1.587,0,0,1,83.5,76.247V120.58a1.586,1.586,0,0,1-1.587,1.582Z'%20transform='translate(-9.08%20-73.08)'%20fill='%235d9cec'/%3e%3cg%20id='Grupo_32'%20data-name='Grupo%2032'%20transform='translate(0%200)'%3e%3cpath%20id='Caminho_205'%20data-name='Caminho%20205'%20d='M72.832,64H3.167A3.167,3.167,0,0,0,0,67.166V111.5a3.168,3.168,0,0,0,3.167,3.168H72.832A3.168,3.168,0,0,0,76,111.5V67.166A3.166,3.166,0,0,0,72.832,64Zm0,47.5H3.167V67.166H72.832Z'%20transform='translate(0%20-63.999)'%20fill='%23656d78'/%3e%3crect%20id='Retângulo_143'%20data-name='Retângulo%20143'%20width='71.476'%20height='6.782'%20transform='translate(3.167%2041.168)'%20fill='%23656d78'/%3e%3c/g%3e%3cpath%20id='Caminho_206'%20data-name='Caminho%20206'%20d='M248.5,364.241a1.583,1.583,0,1,1-1.583-1.586A1.583,1.583,0,0,1,248.5,364.241Z'%20transform='translate(-208.917%20-318.322)'%20fill='%23aab2bc'/%3e%3cpath%20id='Caminho_207'%20data-name='Caminho%20207'%20d='M289.611,123.412H277.342l9.5-38h12.269Z'%20transform='translate(-236.174%20-82.234)'%20fill='%23fff'%20opacity='0.1'/%3e%3c/svg%3e",
	Gm = ({ children: y }) =>
		r.jsx("div", {
			className: "viewport_bottom",
			children: r.jsx("div", { className: "container", children: y }),
		});
function Zm(y) {
	return Ut({
		attr: { viewBox: "0 0 24 24", fill: "currentColor" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z",
				},
				child: [],
			},
		],
	})(y);
}
function Xm(y) {
	return Ut({
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		child: [
			{
				tag: "path",
				attr: {
					d: "M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747",
				},
				child: [],
			},
			{ tag: "path", attr: { d: "M20 4v5h-5" }, child: [] },
		],
	})(y);
}
var yf, q2;
function Qm() {
	return (
		q2 ||
			((q2 = 1),
			(yf = function () {
				var y = document.getSelection();
				if (!y.rangeCount) return function () {};
				for (
					var x = document.activeElement, A = [], d = 0;
					d < y.rangeCount;
					d++
				)
					A.push(y.getRangeAt(d));
				switch (x.tagName.toUpperCase()) {
					case "INPUT":
					case "TEXTAREA":
						x.blur();
						break;
					default:
						x = null;
						break;
				}
				return (
					y.removeAllRanges(),
					function () {
						(y.type === "Caret" && y.removeAllRanges(),
							y.rangeCount ||
								A.forEach(function (H) {
									y.addRange(H);
								}),
							x && x.focus());
					}
				);
			})),
		yf
	);
}
var gf, Y2;
function Vm() {
	if (Y2) return gf;
	Y2 = 1;
	var y = Qm(),
		x = { "text/plain": "Text", "text/html": "Url", default: "Text" },
		A = "Copy to clipboard: #{key}, Enter";
	function d(Y) {
		var Z = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
		return Y.replace(/#{\s*key\s*}/g, Z);
	}
	function H(Y, Z) {
		var il,
			j,
			T,
			G,
			D,
			X,
			zl = !1;
		(Z || (Z = {}), (il = Z.debug || !1));
		try {
			((T = y()),
				(G = document.createRange()),
				(D = document.getSelection()),
				(X = document.createElement("span")),
				(X.textContent = Y),
				(X.ariaHidden = "true"),
				(X.style.all = "unset"),
				(X.style.position = "fixed"),
				(X.style.top = 0),
				(X.style.clip = "rect(0, 0, 0, 0)"),
				(X.style.whiteSpace = "pre"),
				(X.style.webkitUserSelect = "text"),
				(X.style.MozUserSelect = "text"),
				(X.style.msUserSelect = "text"),
				(X.style.userSelect = "text"),
				X.addEventListener("copy", function (cl) {
					if ((cl.stopPropagation(), Z.format))
						if ((cl.preventDefault(), typeof cl.clipboardData > "u")) {
							(il && console.warn("unable to use e.clipboardData"),
								il && console.warn("trying IE specific stuff"),
								window.clipboardData.clearData());
							var Vl = x[Z.format] || x.default;
							window.clipboardData.setData(Vl, Y);
						} else
							(cl.clipboardData.clearData(),
								cl.clipboardData.setData(Z.format, Y));
					Z.onCopy && (cl.preventDefault(), Z.onCopy(cl.clipboardData));
				}),
				document.body.appendChild(X),
				G.selectNodeContents(X),
				D.addRange(G));
			var Ol = document.execCommand("copy");
			if (!Ol) throw new Error("copy command was unsuccessful");
			zl = !0;
		} catch (cl) {
			(il && console.error("unable to copy using execCommand: ", cl),
				il && console.warn("trying IE specific stuff"));
			try {
				(window.clipboardData.setData(Z.format || "text", Y),
					Z.onCopy && Z.onCopy(window.clipboardData),
					(zl = !0));
			} catch (Vl) {
				(il && console.error("unable to copy using clipboardData: ", Vl),
					il && console.error("falling back to prompt"),
					(j = d("message" in Z ? Z.message : A)),
					window.prompt(j, Y));
			}
		} finally {
			(D &&
				(typeof D.removeRange == "function"
					? D.removeRange(G)
					: D.removeAllRanges()),
				X && document.body.removeChild(X),
				T());
		}
		return zl;
	}
	return ((gf = H), gf);
}
var Lm = Vm();
const Km = G2(Lm),
	Jm = "https://xat.com/content/web/R00244/img/xatplanet.svg",
	wm = () =>
		r.jsx("footer", {
			className: "footer_content",
			children: r.jsxs("div", {
				className: "container flex column",
				children: [
					r.jsx("div", {
						className: "xatradio_img flex",
						children: r.jsx("img", { src: Jm, alt: "xatradio logo" }),
					}),
					r.jsx("p", {
						children:
							"If this project was helpful to you in any way, please leave a comment in the forum section of this post. Your feedback encourages me to keep creating new projects.",
					}),
					r.jsx("a", {
						href: "https://xat.com/fondos",
						className: "btn-gradient",
						target: "_blank",
						children: "Chat",
					}),
				],
			}),
		}),
	Wm = () =>
		r.jsxs("div", {
			className: "iframe_load flex column",
			children: [
				r.jsx("div", { className: "frame_load__circle" }),
				r.jsx("span", { children: "loading..." }),
			],
		});
function Qn(y) {
	return Ut({
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		child: [
			{
				tag: "path",
				attr: { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" },
				child: [],
			},
			{ tag: "polyline", attr: { points: "22 4 12 14.01 9 11.01" }, child: [] },
		],
	})(y);
}
const $m = () => {
		const [y, x] = lt.useState(""),
			[A, d] = lt.useState(""),
			[H, Y] = lt.useState("https://bydesign-xat.github.io/Promo/44.html"),
			[Z, il] = lt.useState(""),
			[j, T] = lt.useState(""),
			[G, D] = lt.useState(null),
			[X, zl] = lt.useState(!1),
			[Ol, cl] = lt.useState(j),
			[Vl, Ll] = lt.useState(!1),
			rt = lt.useRef(null),
			Cl = () => {
				rt.current && rt.current.contentWindow.location.reload();
			},
			Nl = {
				mobile: { width: 400, name: "Mobile" },
				tablet: { width: 768, name: "Tablet" },
				laptop: { width: 920, name: "Notbook" },
				desktop: { width: 1280, name: "Desktop" },
				large: { width: 1920, name: "Large" },
			},
			Rl = {
				mobile: { width: 400, height: 600 },
				tablet: { width: 768, height: 600 },
				laptop: { width: 920, height: 920 },
				desktop: { width: 1280, height: 920 },
				large: { width: 100, height: 920 },
			};
		(lt.useEffect(() => {
			const P = () => {
				const jl = window.innerWidth;
				jl <= 440
					? (x("mobile (< 440px)"), D(Rl.mobile))
					: jl > 441 && jl < 768
						? (x("tablet (< 768px)"), D(Rl.tablet))
						: jl >= 769 && jl < 920
							? (x("notbook (768px - 919px)"), D(Rl.laptop))
							: jl >= 921 && jl < 1280
								? (x("desktop (920px - 1279px)"), D(Rl.desktop))
								: jl >= 1280 && (x("large ( ≥ 1280px)"), D(Rl.large));
			};
			return (
				P(),
				window.addEventListener("resize", P),
				() => window.removeEventListener("resize", P)
			);
		}, []),
			lt.useEffect(() => {
				G && tt(H);
			}, [G, H]));
		const El = (P) => {
				(d(P), D(Rl[P]));
			},
			J = () => {
				var P;
				return (A && ((P = Nl[A]) == null ? void 0 : P.width)) || "100%";
			},
			Xl = () => {
				var P;
				return A
					? ((P = Nl[A]) == null ? void 0 : P.name) || ""
					: "Full Screen";
			},
			ht = (P) => {
				(P.preventDefault(), Z && (Y(Z), tt(Z)));
			},
			It = () => {
				(Km(Ol), zl(!0), setTimeout(() => zl(!1), 2e3));
			},
			tt = (P) => {
				const jl = new URL(P);
				if (jl.hostname !== "xatradio.com") {
					(T("[Invalid URL player]"), cl("Invalid URL"));
					return;
				}
				const at = jl.pathname.split("/").slice(-1)[0].split(".")[0],
					p = `[radiohtml:${(G == null ? void 0 : G.width) === 100 ? "100%" : G == null ? void 0 : G.width}:${G == null ? void 0 : G.height}:${at}]`;
				(T(p), cl(p));
			};
		return r.jsxs("div", {
			className: "viewport_content",
			children: [
				r.jsxs(Tm, {
					children: [
						r.jsx(Em, {}),
						r.jsx("div", {
							className: "header_description flex column",
							children: r.jsxs("div", {
								className: "container flex column",
								children: [
									r.jsxs("h1", {
										children: [
											"New ",
											r.jsx("span", {
												className: "text-clip",
												children: "Responsive Radio Player",
											}),
											" — Modern, Fluid, And Perfect For Any Screen",
										],
									}),
									r.jsxs("div", {
										className: "current_viewport flex",
										children: [
											r.jsx("span", { children: "current breakpoint:" }),
											r.jsx("strong", {
												className: "btn-gradient",
												children: y,
											}),
										],
									}),
								],
							}),
						}),
						r.jsx("div", {
							className: "viewport_selector",
							children: r.jsxs("div", {
								className: "container flex column",
								children: [
									r.jsx("h4", { children: "select viewport" }),
									r.jsxs("div", {
										className: "selector_btn__group grid",
										children: [
											r.jsxs("button", {
												type: "button",
												className: `btn ${A === "" || A === "large" ? "active" : ""}`,
												onClick: () => El("large"),
												children: [
													r.jsx("div", {
														className: "btn_selector__img flex",
														children: r.jsx("img", {
															src: Ym,
															alt: "desktop-img",
														}),
													}),
													r.jsx("span", { children: "full screen" }),
													r.jsx("div", { className: "btn_selector__dot" }),
												],
											}),
											r.jsxs("button", {
												type: "button",
												className: `btn ${A === "mobile" ? "active" : ""}`,
												onClick: () => El("mobile"),
												children: [
													r.jsx("div", {
														className: "btn_selector__img flex",
														children: r.jsx("img", {
															src: Hm,
															alt: "mobile_img",
														}),
													}),
													r.jsxs("span", {
														children: ["mobile (", Nl.mobile.width, "px)"],
													}),
													r.jsx("div", { className: "btn_selector__dot" }),
												],
											}),
											r.jsxs("button", {
												type: "button",
												className: `btn ${A === "tablet" ? "active" : ""}`,
												onClick: () => El("tablet"),
												children: [
													r.jsx("div", {
														className: "btn_selector__img flex",
														children: r.jsx("img", {
															src: Rm,
															alt: "tablet_img",
														}),
													}),
													r.jsxs("span", {
														children: ["tablet (", Nl.tablet.width, "px)"],
													}),
													r.jsx("div", { className: "btn_selector__dot" }),
												],
											}),
											r.jsxs("button", {
												type: "button",
												className: `btn ${A === "laptop" ? "active" : ""}`,
												onClick: () => El("laptop"),
												children: [
													r.jsx("div", {
														className: "btn_selector__img flex",
														children: r.jsx("img", {
															src: Bm,
															alt: "leptop_img",
														}),
													}),
													r.jsxs("span", {
														children: ["notbook (", Nl.laptop.width, "px)"],
													}),
													r.jsx("div", { className: "btn_selector__dot" }),
												],
											}),
											r.jsxs("button", {
												type: "button",
												className: `btn ${A === "desktop" ? "active" : ""}`,
												onClick: () => El("desktop"),
												children: [
													r.jsx("div", {
														className: "btn_selector__img flex",
														children: r.jsx("img", {
															src: qm,
															alt: "desktop-img",
														}),
													}),
													r.jsxs("span", {
														children: ["desktop (", Nl.desktop.width, "px)"],
													}),
													r.jsx("div", { className: "btn_selector__dot" }),
												],
											}),
										],
									}),
								],
							}),
						}),
						r.jsx("div", {
							className: "url_input__get",
							children: r.jsx("div", {
								className: "container flex",
								children: r.jsxs("div", {
									className: "input_group flex",
									children: [
										r.jsx("input", {
											type: "text",
											value: Z,
											onChange: (P) => il(P.target.value),
											placeholder: "Enter your player URL",
											className: "url_input",
										}),
										r.jsx("button", {
											className: "btn_load btn-gradient",
											onClick: ht,
											children: r.jsx("span", { children: "load player" }),
										}),
									],
								}),
							}),
						}),
					],
				}),
				r.jsx(Gm, {
					children: r.jsxs("div", {
						className: "iframe_content",
						children: [
							r.jsxs("div", {
								className: "iframe_header flex",
								children: [
									r.jsxs("div", {
										className: "iframe_header__title flex",
										children: [
											r.jsxs("span", {
												children: [
													A === "mobile" && r.jsx(C2, {}),
													A === "tablet" && r.jsx(U2, {}),
													A === "notbook" && r.jsx(H2, {}),
													A === "desktop" && r.jsx(R2, {}),
													A === "large" && r.jsx(Cm, {}),
													!A && r.jsx(B2, {}),
												],
											}),
											r.jsxs("h3", {
												children: ["Preview: ", Xl(), " ", A && ` (${J()})`],
											}),
										],
									}),
									r.jsxs("div", {
										className: "iframe_header__action flex",
										children: [
											r.jsxs("button", {
												type: "button",
												className: "btn_action flex",
												onClick: () => window.open(H, "_blank"),
												children: [
													r.jsx("span", { children: r.jsx(Zm, {}) }),
													r.jsx("p", { children: "Open in new tab" }),
												],
											}),
											r.jsxs("button", {
												type: "button",
												className: "btn_action flex",
												onClick: Cl,
												children: [
													r.jsx("span", { children: r.jsx(Xm, {}) }),
													r.jsx("p", { children: "Reload..." }),
												],
											}),
										],
									}),
								],
							}),
							r.jsx("div", {
								className: "iframe_content__box",
								children: r.jsxs("div", {
									className: "iframe_wrapper",
									style: {
										maxWidth: J() !== "100%" ? `${J()}px` : "100%",
										margin: J() !== "100%" ? "0 auto" : "0",
									},
									children: [
										!Vl && r.jsx(Wm, {}),
										r.jsx("iframe", {
											ref: rt,
											src: H,
											onLoad: () => Ll(!0),
											title: "Player Preview",
											className: "app_iframe",
											style: { width: "100%", height: "920px" },
											sandbox:
												"allow-same-origin allow-scripts allow-forms allow-popups allow-modals",
											allow: "camera; microphone; geolocation",
										}),
									],
								}),
							}),
							r.jsxs("div", {
								className: "breakpoint_indicators grid",
								children: [
									r.jsxs("div", {
										className: `indicator ${y.includes("mobile") ? "active" : ""}`,
										children: [
											r.jsx("div", { className: "indicator_dot" }),
											r.jsxs("div", {
												className: "indicator_icon flex",
												children: [
													r.jsx("span", {
														className: "flex",
														children: r.jsx(C2, {}),
													}),
													r.jsx("strong", { children: "mobile" }),
												],
											}),
											r.jsx("small", { children: "≤ 440px" }),
										],
									}),
									r.jsxs("div", {
										className: `indicator ${y.includes("tablet") ? "active" : ""}`,
										children: [
											r.jsx("div", { className: "indicator_dot" }),
											r.jsxs("div", {
												className: "indicator_icon flex",
												children: [
													r.jsx("span", {
														className: "flex",
														children: r.jsx(U2, {}),
													}),
													r.jsx("strong", { children: "tablet" }),
												],
											}),
											r.jsx("small", { children: "440px - 768px" }),
										],
									}),
									r.jsxs("div", {
										className: `indicator ${y.includes("notbook") ? "active" : ""}`,
										children: [
											r.jsx("div", { className: "indicator_dot" }),
											r.jsxs("div", {
												className: "indicator_icon flex",
												children: [
													r.jsx("span", {
														className: "flex",
														children: r.jsx(H2, {}),
													}),
													r.jsx("strong", { children: "notbook" }),
												],
											}),
											r.jsx("small", { children: "768px - 920px" }),
										],
									}),
									r.jsxs("div", {
										className: `indicator ${y.includes("desktop") ? "active" : ""}`,
										children: [
											r.jsx("div", { className: "indicator_dot" }),
											r.jsxs("div", {
												className: "indicator_icon flex",
												children: [
													r.jsx("span", {
														className: "flex",
														children: r.jsx(R2, {}),
													}),
													r.jsx("strong", { children: "desktop" }),
												],
											}),
											r.jsx("small", { children: "920px - 1280px" }),
										],
									}),
									r.jsxs("div", {
										className: `indicator ${y.includes("large ( ≥") ? "active" : ""}`,
										children: [
											r.jsx("div", { className: "indicator_dot" }),
											r.jsxs("div", {
												className: "indicator_icon flex",
												children: [
													r.jsx("span", {
														className: "flex",
														children: r.jsx(B2, {}),
													}),
													r.jsx("strong", { children: "large" }),
												],
											}),
											r.jsx("small", { children: "≥ 1280px" }),
										],
									}),
								],
							}),
						],
					}),
				}),
				r.jsx("div", {
					className: "clipboart_content",
					children: r.jsxs("div", {
						className: "container flex column",
						children: [
							r.jsxs("div", {
								className: "description_wrapper flex column",
								children: [
									r.jsx("h3", {
										className: "text-clip",
										children: "how to use",
									}),
									r.jsx("h5", { children: "Exclusive for xat.com users" }),
									r.jsxs("ul", {
										className: "flex column",
										children: [
											r.jsxs("li", {
												className: "flex",
												children: [
													r.jsx("span", {
														className: "flex",
														children: r.jsx(Qn, {}),
													}),
													r.jsx("p", {
														children:
															"Enter your player link in the search field.",
													}),
												],
											}),
											r.jsxs("li", {
												className: "flex",
												children: [
													r.jsx("span", {
														className: "flex",
														children: r.jsx(Qn, {}),
													}),
													r.jsx("p", {
														children: "Select the desired screen size.",
													}),
												],
											}),
											r.jsxs("li", {
												className: "flex",
												children: [
													r.jsx("span", {
														className: "flex",
														children: r.jsx(Qn, {}),
													}),
													r.jsx("p", {
														children: "Copy the automatically generated code.",
													}),
												],
											}),
											r.jsxs("li", {
												className: "flex",
												children: [
													r.jsx("span", {
														className: "flex",
														children: r.jsx(Qn, {}),
													}),
													r.jsx("p", {
														children:
															"Paste the code into your chat (xat.com/room).",
													}),
												],
											}),
										],
									}),
								],
							}),
							r.jsxs("div", {
								className: "clipboard_wrapper flex",
								children: [
									r.jsx("p", { children: Ol }),
									r.jsx("button", {
										type: "button",
										className: "btn-gradient",
										onClick: () => It(),
										children: r.jsx("span", { children: "copy" }),
									}),
								],
							}),
						],
					}),
				}),
				r.jsx(wm, {}),
				r.jsxs("div", {
					className: X ? "clipboard_alert active flex" : "clipboard_alert flex",
					children: [
						r.jsx("span", { className: "flex", children: r.jsx(Um, {}) }),
						r.jsx("p", { children: "Copied to clipboard!" }),
					],
				}),
			],
		});
	},
	km = () =>
		r.jsx("div", { className: "app_content", children: r.jsx($m, {}) });
_m.createRoot(document.getElementById("root")).render(
	r.jsx(lt.StrictMode, { children: r.jsx(km, {}) }),
);
