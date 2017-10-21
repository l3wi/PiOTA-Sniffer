(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mam.client", [], factory);
	else if(typeof exports === 'object')
		exports["mam.client"] = factory();
	else
		root["mam.client"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(6));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./evpkdf"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                var block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                var block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                var modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                var modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                var wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                var salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 *
 *   Conversion functions
 *
 **/

var RADIX = 3;
var RADIX_BYTES = 256;
var MAX_TRIT_VALUE = 1;
var MIN_TRIT_VALUE = -1;
var BYTE_HASH_LENGTH = 48;

// All possible tryte values
var trytesAlphabet = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// map of all trits representations
var trytesTrits = [
    [ 0,  0,  0],
    [ 1,  0,  0],
    [-1,  1,  0],
    [ 0,  1,  0],
    [ 1,  1,  0],
    [-1, -1,  1],
    [ 0, -1,  1],
    [ 1, -1,  1],
    [-1,  0,  1],
    [ 0,  0,  1],
    [ 1,  0,  1],
    [-1,  1,  1],
    [ 0,  1,  1],
    [ 1,  1,  1],
    [-1, -1, -1],
    [ 0, -1, -1],
    [ 1, -1, -1],
    [-1,  0, -1],
    [ 0,  0, -1],
    [ 1,  0, -1],
    [-1,  1, -1],
    [ 0,  1, -1],
    [ 1,  1, -1],
    [-1, -1,  0],
    [ 0, -1,  0],
    [ 1, -1,  0],
    [-1,  0,  0]
];

/**
 *   Converts trytes into trits
 *
 *   @method trits
 *   @param {String|Int} input Tryte value to be converted. Can either be string or int
 *   @param {Array} state (optional) state to be modified
 *   @returns {Array} trits
 **/
var trits = function( input, state ) {

    var trits = state || [];

    if (Number.isInteger(input)) {

        var absoluteValue = input < 0 ? -input : input;

        while (absoluteValue > 0) {

            var remainder = absoluteValue % 3;
            absoluteValue = Math.floor(absoluteValue / 3);

            if (remainder > 1) {
                remainder = -1;
                absoluteValue++;
            }

            trits[trits.length] = remainder;
        }
        if (input < 0) {

            for (var i = 0; i < trits.length; i++) {

                trits[i] = -trits[i];
            }
        }
    } else {

        for (var i = 0; i < input.length; i++) {

            var index = trytesAlphabet.indexOf(input.charAt(i));
            trits[i * 3] = trytesTrits[index][0];
            trits[i * 3 + 1] = trytesTrits[index][1];
            trits[i * 3 + 2] = trytesTrits[index][2];
        }
    }

    return trits;
}

/**
 *   Converts trits into trytes
 *
 *   @method trytes
 *   @param {Array} trits
 *   @returns {String} trytes
 **/
var trytes = function(trits) {

    var trytes = "";

    for ( var i = 0; i < trits.length; i += 3 ) {

        // Iterate over all possible tryte values to find correct trit representation
        for ( var j = 0; j < trytesAlphabet.length; j++ ) {

            if ( trytesTrits[ j ][ 0 ] === trits[ i ] && trytesTrits[ j ][ 1 ] === trits[ i + 1 ] && trytesTrits[ j ][ 2 ] === trits[ i + 2 ] ) {

                trytes += trytesAlphabet.charAt( j );
                break;

            }

        }

    }

    return trytes;
}

/**
 *   Converts trits into an integer value
 *
 *   @method value
 *   @param {Array} trits
 *   @returns {int} value
 **/
var value = function(trits) {

    var returnValue = 0;

    for ( var i = trits.length; i-- > 0; ) {

        returnValue = returnValue * 3 + trits[ i ];
    }

    return returnValue;
}

/**
 *   Converts an integer value to trits
 *
 *   @method value
 *   @param {Int} value
 *   @returns {Array} trits
 **/
var fromValue = function(value) {

    var destination = [];
    var absoluteValue = value < 0 ? -value : value;
    var i = 0;

    while( absoluteValue > 0 ) {

        var remainder = ( absoluteValue % RADIX );
        absoluteValue = Math.floor( absoluteValue / RADIX );

        if ( remainder > MAX_TRIT_VALUE ) {

            remainder = MIN_TRIT_VALUE;
            absoluteValue++;

        }

        destination[ i ] = remainder;
        i++;

    }

    if ( value < 0 ) {

        for ( var j = 0; j < destination.length; j++ ) {

            // switch values
            destination[ j ] = destination[ j ] === 0 ? 0: -destination[ j ];

        }

    }

    return destination;
}

module.exports = {
    trits           : trits,
    trytes          : trytes,
    value           : value,
    fromValue       : fromValue
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 *
 *   Conversion functions
 *
 **/

var RADIX = 3;
var RADIX_BYTES = 256;
var MAX_TRIT_VALUE = 1;
var MIN_TRIT_VALUE = -1;
var BYTE_HASH_LENGTH = 48;

// All possible tryte values
var trytesAlphabet = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// map of all trits representations
var trytesTrits = [
    [ 0,  0,  0],
    [ 1,  0,  0],
    [-1,  1,  0],
    [ 0,  1,  0],
    [ 1,  1,  0],
    [-1, -1,  1],
    [ 0, -1,  1],
    [ 1, -1,  1],
    [-1,  0,  1],
    [ 0,  0,  1],
    [ 1,  0,  1],
    [-1,  1,  1],
    [ 0,  1,  1],
    [ 1,  1,  1],
    [-1, -1, -1],
    [ 0, -1, -1],
    [ 1, -1, -1],
    [-1,  0, -1],
    [ 0,  0, -1],
    [ 1,  0, -1],
    [-1,  1, -1],
    [ 0,  1, -1],
    [ 1,  1, -1],
    [-1, -1,  0],
    [ 0, -1,  0],
    [ 1, -1,  0],
    [-1,  0,  0]
];

/**
 *   Converts trytes into trits
 *
 *   @method trits
 *   @param {String|Int} input Tryte value to be converted. Can either be string or int
 *   @param {Array} state (optional) state to be modified
 *   @returns {Array} trits
 **/
var trits = function( input, state ) {

    var trits = state || [];

    if (Number.isInteger(input)) {

        var absoluteValue = input < 0 ? -input : input;

        while (absoluteValue > 0) {

            var remainder = absoluteValue % 3;
            absoluteValue = Math.floor(absoluteValue / 3);

            if (remainder > 1) {
                remainder = -1;
                absoluteValue++;
            }

            trits[trits.length] = remainder;
        }
        if (input < 0) {

            for (var i = 0; i < trits.length; i++) {

                trits[i] = -trits[i];
            }
        }
    } else {

        for (var i = 0; i < input.length; i++) {

            var index = trytesAlphabet.indexOf(input.charAt(i));
            trits[i * 3] = trytesTrits[index][0];
            trits[i * 3 + 1] = trytesTrits[index][1];
            trits[i * 3 + 2] = trytesTrits[index][2];
        }
    }

    return trits;
}

/**
 *   Converts trits into trytes
 *
 *   @method trytes
 *   @param {Array} trits
 *   @returns {String} trytes
 **/
var trytes = function(trits) {

    var trytes = "";

    for ( var i = 0; i < trits.length; i += 3 ) {

        // Iterate over all possible tryte values to find correct trit representation
        for ( var j = 0; j < trytesAlphabet.length; j++ ) {

            if ( trytesTrits[ j ][ 0 ] === trits[ i ] && trytesTrits[ j ][ 1 ] === trits[ i + 1 ] && trytesTrits[ j ][ 2 ] === trits[ i + 2 ] ) {

                trytes += trytesAlphabet.charAt( j );
                break;

            }

        }

    }

    return trytes;
}

/**
 *   Converts trits into an integer value
 *
 *   @method value
 *   @param {Array} trits
 *   @returns {int} value
 **/
var value = function(trits) {

    var returnValue = 0;

    for ( var i = trits.length; i-- > 0; ) {

        returnValue = returnValue * 3 + trits[ i ];
    }

    return returnValue;
}

/**
 *   Converts an integer value to trits
 *
 *   @method value
 *   @param {Int} value
 *   @returns {Array} trits
 **/
var fromValue = function(value) {

    var destination = [];
    var absoluteValue = value < 0 ? -value : value;
    var i = 0;

    while( absoluteValue > 0 ) {

        var remainder = ( absoluteValue % RADIX );
        absoluteValue = Math.floor( absoluteValue / RADIX );

        if ( remainder > MAX_TRIT_VALUE ) {

            remainder = MIN_TRIT_VALUE;
            absoluteValue++;

        }

        destination[ i ] = remainder;
        i++;

    }

    if ( value < 0 ) {

        for ( var j = 0; j < destination.length; j++ ) {

            // switch values
            destination[ j ] = destination[ j ] === 0 ? 0: -destination[ j ];

        }

    }

    return destination;
}

module.exports = {
    trits           : trits,
    trytes          : trytes,
    value           : value,
    fromValue       : fromValue
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Converter = __webpack_require__(2);

/**
**      Cryptographic related functions to IOTA's Curl (sponge function)
**/

var NUMBER_OF_ROUNDS = 81;
var HASH_LENGTH = 243;
var STATE_LENGTH = 3 * HASH_LENGTH;

function Curl(rounds) {
    if (rounds) {
      this.rounds = rounds;
    } else {
      this.rounds = NUMBER_OF_ROUNDS;
    }
    // truth table
    this.truthTable = [1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0];
}

Curl.HASH_LENGTH = HASH_LENGTH;

/**
*   Initializes the state with STATE_LENGTH trits
*
*   @method initialize
**/
Curl.prototype.initialize = function(state, length) {

    if (state) {

        this.state = state;

    } else {

        this.state = [];

        for (var i = 0; i < STATE_LENGTH; i++) {

            this.state[i] = 0;

        }
    }
}

/**
*   Sponge absorb function
*
*   @method absorb
**/
Curl.prototype.absorb = function(trits, offset, length) {

    do {

        var i = 0;
        var limit = (length < HASH_LENGTH ? length : HASH_LENGTH);

        while (i < limit) {

            this.state[i++] = trits[offset++];
        }

        this.transform();

    } while (( length -= HASH_LENGTH ) > 0)

}

/**
*   Sponge squeeze function
*
*   @method squeeze
**/
Curl.prototype.squeeze = function(trits, offset, length) {

    do {

        var i = 0;
        var limit = (length < HASH_LENGTH ? length : HASH_LENGTH);

        while (i < limit) {

            trits[offset++] = this.state[i++];
        }

        this.transform();

    } while (( length -= HASH_LENGTH ) > 0)
}

/**
*   Sponge transform function
*
*   @method transform
**/
Curl.prototype.transform = function() {

    var stateCopy = [], index = 0;

    for (var round = 0; round < this.rounds; round++) {

        stateCopy = this.state.slice();

        for (var i = 0; i < STATE_LENGTH; i++) {

            this.state[i] = this.truthTable[stateCopy[index] + (stateCopy[index += (index < 365 ? 364 : -365)] << 2) + 5];
        }
    }
}

module.exports = Curl


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Converter = __webpack_require__(3);

/**
**      Cryptographic related functions to IOTA's Curl (sponge function)
**/

var NUMBER_OF_ROUNDS = 81;
var HASH_LENGTH = 243;
var STATE_LENGTH = 3 * HASH_LENGTH;

function Curl(rounds) {
    if (rounds) {
      this.rounds = rounds;
    } else {
      this.rounds = NUMBER_OF_ROUNDS;
    }
    // truth table
    this.truthTable = [1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0];
}

Curl.HASH_LENGTH = HASH_LENGTH;

/**
*   Initializes the state with STATE_LENGTH trits
*
*   @method initialize
**/
Curl.prototype.initialize = function(state, length) {

    if (state) {

        this.state = state;

    } else {

        this.state = [];

        for (var i = 0; i < STATE_LENGTH; i++) {

            this.state[i] = 0;

        }
    }
}

/**
*   Sponge absorb function
*
*   @method absorb
**/
Curl.prototype.absorb = function(trits, offset, length) {

    do {

        var i = 0;
        var limit = (length < HASH_LENGTH ? length : HASH_LENGTH);

        while (i < limit) {

            this.state[i++] = trits[offset++];
        }

        this.transform();

    } while (( length -= HASH_LENGTH ) > 0)

}

/**
*   Sponge squeeze function
*
*   @method squeeze
**/
Curl.prototype.squeeze = function(trits, offset, length) {

    do {

        var i = 0;
        var limit = (length < HASH_LENGTH ? length : HASH_LENGTH);

        while (i < limit) {

            trits[offset++] = this.state[i++];
        }

        this.transform();

    } while (( length -= HASH_LENGTH ) > 0)
}

/**
*   Sponge transform function
*
*   @method transform
**/
Curl.prototype.transform = function() {

    var stateCopy = [], index = 0;

    for (var round = 0; round < this.rounds; round++) {

        stateCopy = this.state.slice();

        for (var i = 0; i < STATE_LENGTH; i++) {

            this.state[i] = this.truthTable[stateCopy[index] + (stateCopy[index += (index < 365 ? 364 : -365)] << 2) + 5];
        }
    }
}

module.exports = Curl


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(20), __webpack_require__(21));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha1", "./hmac"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                var block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(12);
var Converter = __webpack_require__(2);
var Curl = __webpack_require__(4);
var WConverter = __webpack_require__(60);

var BIT_HASH_LENGTH = 384;

function Kerl() {


    this.k = CryptoJS.algo.SHA3.create();
    this.k.init({
        outputLength: BIT_HASH_LENGTH
    });
}

Kerl.BIT_HASH_LENGTH = BIT_HASH_LENGTH;
Kerl.HASH_LENGTH = Curl.HASH_LENGTH;

Kerl.prototype.initialize = function(state) {}

Kerl.prototype.reset = function() {

    this.k.reset();

}

Kerl.prototype.absorb = function(trits, offset, length) {


    if (length && ((length % 243) !== 0)) {

        throw new Error('Illegal length provided');

    }

    do {
        var limit = (length < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH);

        var trit_state = trits.slice(offset, offset + limit);
        offset += limit;

        // convert trit state to words
        var wordsToAbsorb = WConverter.trits_to_words(trit_state);

        // absorb the trit stat as wordarray
        this.k.update(
            CryptoJS.lib.WordArray.create(wordsToAbsorb));

    } while ((length -= Curl.HASH_LENGTH) > 0);

}



Kerl.prototype.squeeze = function(trits, offset, length) {

    if (length && ((length % 243) !== 0)) {

        throw new Error('Illegal length provided');

    }
    do {

        // get the hash digest
        var kCopy = this.k.clone();
        var final = kCopy.finalize();

        // Convert words to trits and then map it into the internal state
        var trit_state = WConverter.words_to_trits(final.words);

        var i = 0;
        var limit = (length < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH);

        while (i < limit) {
            trits[offset++] = trit_state[i++];
        }

        this.reset();

        for (i = 0; i < final.words.length; i++) {
            final.words[i] = final.words[i] ^ 0xFFFFFFFF;
        }

        this.k.update(final);

    } while ((length -= Curl.HASH_LENGTH) > 0);
}

module.exports = Kerl;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
*   checks if input is correct address
*
*   @method isAddress
*   @param {string} address
*   @returns {boolean}
**/
var isAddress = function(address) {
    // TODO: In the future check checksum

    // Check if address with checksum
    if (address.length === 90) {

        if (!isTrytes(address, 90)) {
            return false;
        }
    } else {

        if (!isTrytes(address, 81)) {
            return false;
        }
    }

    return true;
}

/**
*   checks if input is correct trytes consisting of A-Z9
*   optionally validate length
*
*   @method isTrytes
*   @param {string} trytes
*   @param {integer} length optional
*   @returns {boolean}
**/
var isTrytes = function(trytes, length) {

    // If no length specified, just validate the trytes
    if (!length) length = "0,"

    var regexTrytes = new RegExp("^[9A-Z]{" + length +"}$");
    return regexTrytes.test(trytes) && isString(trytes);
}

/**
*   checks if input is correct trytes consisting of A-Z9
*   optionally validate length
*
*   @method isNinesTrytes
*   @param {string} trytes
*   @returns {boolean}
**/
var isNinesTrytes = function(trytes) {

    return /^[9]+$/.test(trytes) && isString(trytes);
}

/**
*   checks if integer value
*
*   @method isValue
*   @param {string} value
*   @returns {boolean}
**/
var isValue = function(value) {

    // check if correct number
    return Number.isInteger(value)
}

/**
*   checks whether input is a value or not. Can be a string, float or integer
*
*   @method isNum
*   @param {int}
*   @returns {boolean}
**/
var isNum = function(input) {

    return /^(\d+\.?\d{0,15}|\.\d{0,15})$/.test(input);
}

/**
*   checks if input is correct hash
*
*   @method isHash
*   @param {string} hash
*   @returns {boolean}
**/
var isHash = function(hash) {

    // Check if valid, 81 trytes
    if (!isTrytes(hash, 81)) {

        return false;
    }

    return true;
}

/**
*   checks whether input is a string or not
*
*   @method isString
*   @param {string}
*   @returns {boolean}
**/
var isString = function(string) {

    return typeof string === 'string';
}


/**
*   checks whether input is an array or not
*
*   @method isArray
*   @param {object}
*   @returns {boolean}
**/
var isArray = function(array) {

    return array instanceof Array;
}


/**
*   checks whether input is object or not
*
*   @method isObject
*   @param {object}
*   @returns {boolean}
**/
var isObject = function(object) {

    return typeof object === 'object';
}



/**
*   checks if input is correct hash
*
*   @method isTransfersArray
*   @param {array} hash
*   @returns {boolean}
**/
var isTransfersArray = function(transfersArray) {

    if (!isArray(transfersArray)) return false;

    for (var i = 0; i < transfersArray.length; i++) {

        var transfer = transfersArray[i];

        // Check if valid address
        var address = transfer.address;
        if (!isAddress(address)) {
            return false;
        }

        // Validity check for value
        var value = transfer.value;
        if (!isValue(value)) {
            return false;
        }

        // Check if message is correct trytes of any length
        var message = transfer.message;
        if (!isTrytes(message, "0,")) {
            return false;
        }

        // Check if tag is correct trytes of {0,27} trytes
        var tag = transfer.tag || transfer.obsoleteTag;
        if (!isTrytes(tag, "0,27")) {
            return false;
        }

    }

    return true;
}

/**
*   checks if input is list of correct trytes
*
*   @method isArrayOfHashes
*   @param {list} hashesArray
*   @returns {boolean}
**/
var isArrayOfHashes = function(hashesArray) {

    if (!isArray(hashesArray)) return false;

    for (var i = 0; i < hashesArray.length; i++) {

        var hash = hashesArray[i];

        // Check if address with checksum
        if (hash.length === 90) {

            if (!isTrytes(hash, 90)) {
                return false;
            }
        } else {

            if (!isTrytes(hash, 81)) {
                return false;
            }
        }
    }

    return true;
}

/**
*   checks if input is list of correct trytes
*
*   @method isArrayOfTrytes
*   @param {list} trytesArray
*   @returns {boolean}
**/
var isArrayOfTrytes = function(trytesArray) {

    if (!isArray(trytesArray)) return false;

    for (var i = 0; i < trytesArray.length; i++) {

        var tryteValue = trytesArray[i];

        // Check if correct 2673 trytes
        if (!isTrytes(tryteValue, 2673)) {
            return false;
        }
    }

    return true;
}

/**
*   checks if attached trytes if last 241 trytes are non-zero
*
*   @method isArrayOfAttachedTrytes
*   @param {array} trytesArray
*   @returns {boolean}
**/
var isArrayOfAttachedTrytes = function(trytesArray) {

    if (!isArray(trytesArray)) return false;

    for (var i = 0; i < trytesArray.length; i++) {

        var tryteValue = trytesArray[i];

        // Check if correct 2673 trytes
        if (!isTrytes(tryteValue, 2673)) {
            return false;
        }

        var lastTrytes = tryteValue.slice(2673 - (3 * 81));

        if (/^[9]+$/.test(lastTrytes)) {
            return false;
        }
    }

    return true;
}

/**
*   checks if correct bundle with transaction object
*
*   @method isArrayOfTxObjects
*   @param {array} bundle
*   @returns {boolean}
**/
var isArrayOfTxObjects = function(bundle) {

    if (!isArray(bundle) || bundle.length === 0) return false;

    var validArray = true;

    bundle.forEach(function(txObject) {

        var keysToValidate = [
            {
                key: 'hash',
                validator: isHash,
                args: null
            }, {
                key: 'signatureMessageFragment',
                validator: isTrytes,
                args: 2187
            }, {
                key: 'address',
                validator: isHash,
                args: null
            }, {
                key: 'value',
                validator: isValue,
                args: null
            }, {
                key: 'obsoleteTag',
                validator: isTrytes,
                args: 27
            }, {
                key: 'timestamp',
                validator: isValue,
                args: null
            }, {
                key: 'currentIndex',
                validator: isValue,
                args: null
            },{
                key: 'lastIndex',
                validator: isValue,
                args: null
            }, {
                key: 'bundle',
                validator: isHash,
                args: null
            }, {
                key: 'trunkTransaction',
                validator: isHash,
                args: null
            }, {
                key: 'branchTransaction',
                validator: isHash,
                args: null
            }, {
                key: 'tag',
                validator: isTrytes,
                args: 27
            }, {
                key: 'attachmentTimestamp',
                validator: isValue,
                args: null
            }, {
                key: 'attachmentTimestampLowerBound',
                validator: isValue,
                args: null
            }, {
                key: 'attachmentTimestampUpperBound',
                validator: isValue,
                args: null
            }, {
                key: 'nonce',
                validator: isTrytes,
                args: 27
            }
        ]

        for (var i = 0; i < keysToValidate.length; i++) {

            var key = keysToValidate[i].key;
            var validator = keysToValidate[i].validator;
            var args = keysToValidate[i].args

            // If input does not have keyIndex and address, return false
            if (!txObject.hasOwnProperty(key)) {
                validArray = false;
                break;
            }

            // If input validator function does not return true, exit
            if (!validator(txObject[key], args)) {
                validArray = false;
                break;
            }
        }
    })

    return validArray;
}

/**
*   checks if correct inputs list
*
*   @method isInputs
*   @param {array} inputs
*   @returns {boolean}
**/
var isInputs = function(inputs) {

    if (!isArray(inputs)) return false;

    for (var i = 0; i < inputs.length; i++) {

        var input = inputs[i];

        // If input does not have keyIndex and address, return false
        if (!input.hasOwnProperty('security') || !input.hasOwnProperty('keyIndex') || !input.hasOwnProperty('address')) return false;

        if (!isAddress(input.address)) {
            return false;
        }

        if (!isValue(input.security)) {
            return false;
        }

        if (!isValue(input.keyIndex)) {
            return false;
        }
    }

    return true;
}

/**
*   Checks that a given uri is valid
*
*   Valid Examples:
*   udp://[2001:db8:a0b:12f0::1]:14265
*   udp://[2001:db8:a0b:12f0::1]
*   udp://8.8.8.8:14265
*   udp://domain.com
*   udp://domain2.com:14265
*
*   @method isUri
*   @param {string} node
*   @returns {bool} valid
**/
var isUri = function(node) {

    var getInside = /^(udp|tcp):\/\/([\[][^\]\.]*[\]]|[^\[\]:]*)[:]{0,1}([0-9]{1,}$|$)/i;

    var stripBrackets = /[\[]{0,1}([^\[\]]*)[\]]{0,1}/;

    var uriTest = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))|(^\s*((?=.{1,255}$)(?=.*[A-Za-z].*)[0-9A-Za-z](?:(?:[0-9A-Za-z]|\b-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|\b-){0,61}[0-9A-Za-z])?)*)\s*$)/;

    if(!getInside.test(node)) {
        return false;
    }

    return uriTest.test(stripBrackets.exec(getInside.exec(node)[1])[1]);
}

module.exports = {
    isAddress: isAddress,
    isTrytes: isTrytes,
    isNinesTrytes: isNinesTrytes,
    isValue: isValue,
    isHash: isHash,
    isTransfersArray: isTransfersArray,
    isArrayOfHashes: isArrayOfHashes,
    isArrayOfTrytes: isArrayOfTrytes,
    isArrayOfAttachedTrytes: isArrayOfAttachedTrytes,
    isArrayOfTxObjects: isArrayOfTxObjects,
    isInputs: isInputs,
    isString: isString,
    isNum: isNum,
    isArray: isArray,
    isObject: isObject,
    isUri: isUri
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(12);
var Converter = __webpack_require__(3);
var Curl = __webpack_require__(5);
var WConverter = __webpack_require__(74);

var BIT_HASH_LENGTH = 384;

function Kerl() {


    this.k = CryptoJS.algo.SHA3.create();
    this.k.init({
        outputLength: BIT_HASH_LENGTH
    });
}

Kerl.BIT_HASH_LENGTH = BIT_HASH_LENGTH;
Kerl.HASH_LENGTH = Curl.HASH_LENGTH;

Kerl.prototype.initialize = function(state) {}

Kerl.prototype.reset = function() {

    this.k.reset();

}

Kerl.prototype.absorb = function(trits, offset, length) {


    if (length && ((length % 243) !== 0)) {

        throw new Error('Illegal length provided');

    }

    do {
        var limit = (length < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH);

        var trit_state = trits.slice(offset, offset + limit);
        offset += limit;

        // convert trit state to words
        var wordsToAbsorb = WConverter.trits_to_words(trit_state);

        // absorb the trit stat as wordarray
        this.k.update(
            CryptoJS.lib.WordArray.create(wordsToAbsorb));

    } while ((length -= Curl.HASH_LENGTH) > 0);

}



Kerl.prototype.squeeze = function(trits, offset, length) {

    if (length && ((length % 243) !== 0)) {

        throw new Error('Illegal length provided');

    }
    do {

        // get the hash digest
        var kCopy = this.k.clone();
        var final = kCopy.finalize();

        // Convert words to trits and then map it into the internal state
        var trit_state = WConverter.words_to_trits(final.words);

        var i = 0;
        var limit = (length < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH);

        while (i < limit) {
            trits[offset++] = trit_state[i++];
        }

        this.reset();

        for (i = 0; i < final.words.length; i++) {
            final.words[i] = final.words[i] ^ 0xFFFFFFFF;
        }

        this.k.update(final);

    } while ((length -= Curl.HASH_LENGTH) > 0);
}

module.exports = Kerl;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(13), __webpack_require__(37), __webpack_require__(38), __webpack_require__(8), __webpack_require__(9), __webpack_require__(20), __webpack_require__(28), __webpack_require__(39), __webpack_require__(29), __webpack_require__(40), __webpack_require__(41), __webpack_require__(42), __webpack_require__(21), __webpack_require__(43), __webpack_require__(6), __webpack_require__(1), __webpack_require__(44), __webpack_require__(45), __webpack_require__(46), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49), __webpack_require__(50), __webpack_require__(51), __webpack_require__(52), __webpack_require__(53), __webpack_require__(54), __webpack_require__(55), __webpack_require__(56), __webpack_require__(57), __webpack_require__(58), __webpack_require__(59));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	return CryptoJS;

}));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Curl = __webpack_require__(4);
var Kerl = __webpack_require__(7);
var Converter = __webpack_require__(2);

/**
*
*   @constructor bundle
**/
function Bundle() {

    // Declare empty bundle
    this.bundle = [];
}

/**
*
*
**/

Bundle.prototype.addEntry = function(signatureMessageLength, address, value, tag, timestamp, index) {

    for (var i = 0; i < signatureMessageLength; i++) {

        var transactionObject = new Object();
        transactionObject.address = address;
        transactionObject.value = i == 0 ? value : 0;
        transactionObject.tag = tag;
        transactionObject.timestamp = timestamp;

        this.bundle[this.bundle.length] = transactionObject;
    }
}

/**
*
*
**/
Bundle.prototype.addTrytes = function(signatureFragments) {

    var emptySignatureFragment = '';
    var emptyHash = '999999999999999999999999999999999999999999999999999999999999999999999999999999999';

    for (var j = 0; emptySignatureFragment.length < 2187; j++) {
        emptySignatureFragment += '9';
    }

    for (var i = 0; i < this.bundle.length; i++) {

        // Fill empty signatureMessageFragment
        this.bundle[i].signatureMessageFragment = signatureFragments[i] ? signatureFragments[i] : emptySignatureFragment;

        // Fill empty trunkTransaction
        this.bundle[i].trunkTransaction = emptyHash;

        // Fill empty branchTransaction
        this.bundle[i].branchTransaction = emptyHash;

        // Fill empty nonce
        this.bundle[i].nonce = emptyHash;
    }
}


/**
*
*
**/
Bundle.prototype.finalize = function() {

    var kerl = new Kerl();
    kerl.initialize();

    for (var i = 0; i < this.bundle.length; i++) {

        var valueTrits = Converter.trits(this.bundle[i].value);
        while (valueTrits.length < 81) {
            valueTrits[valueTrits.length] = 0;
        }

        var timestampTrits = Converter.trits(this.bundle[i].timestamp);
        while (timestampTrits.length < 27) {
            timestampTrits[timestampTrits.length] = 0;
        }

        var currentIndexTrits = Converter.trits(this.bundle[i].currentIndex = i);
        while (currentIndexTrits.length < 27) {
            currentIndexTrits[currentIndexTrits.length] = 0;
        }

        var lastIndexTrits = Converter.trits(this.bundle[i].lastIndex = this.bundle.length - 1);
        while (lastIndexTrits.length < 27) {
            lastIndexTrits[lastIndexTrits.length] = 0;
        }

        var bundleEssence = Converter.trits(this.bundle[i].address + Converter.trytes(valueTrits) + this.bundle[i].tag + Converter.trytes(timestampTrits) + Converter.trytes(currentIndexTrits) + Converter.trytes(lastIndexTrits));
        kerl.absorb(bundleEssence, 0, bundleEssence.length);
    }

    var hash = [];
    kerl.squeeze(hash, 0, Curl.HASH_LENGTH);
    hash = Converter.trytes(hash);

    for (var i = 0; i < this.bundle.length; i++) {

        this.bundle[i].bundle = hash;
    }
}

/**
*   Normalizes the bundle hash
*
**/
Bundle.prototype.normalizedBundle = function(bundleHash) {

    var normalizedBundle = [];

    for (var i = 0; i < 3; i++) {

        var sum = 0;
        for (var j = 0; j < 27; j++) {

            sum += (normalizedBundle[i * 27 + j] = Converter.value(Converter.trits(bundleHash.charAt(i * 27 + j))));
        }

        if (sum >= 0) {

            while (sum-- > 0) {

                for (var j = 0; j < 27; j++) {

                    if (normalizedBundle[i * 27 + j] > -13) {

                        normalizedBundle[i * 27 + j]--;
                        break;
                    }
                }
            }
        } else {

            while (sum++ < 0) {

                for (var j = 0; j < 27; j++) {

                    if (normalizedBundle[i * 27 + j] < 13) {

                        normalizedBundle[i * 27 + j]++;
                        break;
                    }
                }
            }
        }
    }

    return normalizedBundle;
}

module.exports = Bundle;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Curl = __webpack_require__(4);
var Kerl = __webpack_require__(7);
var Converter = __webpack_require__(2);
var Bundle = __webpack_require__(14);
var add = __webpack_require__(30);
var oldSigning = __webpack_require__(61);
var errors = __webpack_require__(22);

/**
*           Signing related functions
*
**/
var key = function(seed, index, length) {

    while ((seed.length % 243) !== 0) {
      seed.push(0);
    }

    var indexTrits = Converter.fromValue( index );
    var subseed = add( seed.slice( ), indexTrits );

    var kerl = new Kerl( );

    kerl.initialize( );
    kerl.absorb(subseed, 0, subseed.length);
    kerl.squeeze(subseed, 0, subseed.length);

    kerl.reset( );
    kerl.absorb(subseed, 0, subseed.length);

    var key = [], offset = 0, buffer = [];

    while (length-- > 0) {

        for (var i = 0; i < 27; i++) {

            kerl.squeeze(buffer, 0, subseed.length);
            for (var j = 0; j < 243; j++) {

                key[offset++] = buffer[j];
            }
        }
    }
    return key;
}

/**
*
*
**/
var digests = function(key) {

    var digests = [], buffer = [];

    for (var i = 0; i < Math.floor(key.length / 6561); i++) {

        var keyFragment = key.slice(i * 6561, (i + 1) * 6561);

        for (var j = 0; j < 27; j++) {

            buffer = keyFragment.slice(j * 243, (j + 1) * 243);

            for (var k = 0; k < 26; k++) {

                var kKerl = new Kerl();
                kKerl.initialize();
                kKerl.absorb(buffer, 0, buffer.length);
                kKerl.squeeze(buffer, 0, Curl.HASH_LENGTH);
            }

            for (var k = 0; k < 243; k++) {

                keyFragment[j * 243 + k] = buffer[k];
            }
        }

        var kerl = new Kerl()

        kerl.initialize();
        kerl.absorb(keyFragment, 0, keyFragment.length);
        kerl.squeeze(buffer, 0, Curl.HASH_LENGTH);

        for (var j = 0; j < 243; j++) {

            digests[i * 243 + j] = buffer[j];
        }
    }
    return digests;
}

/**
*
*
**/
var address = function(digests) {

    var addressTrits = [];

    var kerl = new Kerl();

    kerl.initialize();
    kerl.absorb(digests, 0, digests.length);
    kerl.squeeze(addressTrits, 0, Curl.HASH_LENGTH);

    return addressTrits;
}

/**
*
*
**/
var digest = function(normalizedBundleFragment, signatureFragment) {

    var buffer = []

    var kerl = new Kerl();

    kerl.initialize();

    for (var i = 0; i< 27; i++) {
        buffer = signatureFragment.slice(i * 243, (i + 1) * 243);

        for (var j = normalizedBundleFragment[i] + 13; j-- > 0; ) {

            var jKerl = new Kerl();

            jKerl.initialize();
            jKerl.absorb(buffer, 0, buffer.length);
            jKerl.squeeze(buffer, 0, Curl.HASH_LENGTH);
        }

        kerl.absorb(buffer, 0, buffer.length);
    }

    kerl.squeeze(buffer, 0, Curl.HASH_LENGTH);
    return buffer;
}

/**
*
*
**/
var signatureFragment = function(normalizedBundleFragment, keyFragment) {

    var signatureFragment = keyFragment.slice(), hash = [];

    var kerl = new Kerl();

    for (var i = 0; i < 27; i++) {

        hash = signatureFragment.slice(i * 243, (i + 1) * 243);

        for (var j = 0; j < 13 - normalizedBundleFragment[i]; j++) {

            kerl.initialize();
            kerl.reset();
            kerl.absorb(hash, 0, hash.length);
            kerl.squeeze(hash, 0, Curl.HASH_LENGTH);
        }

        for (var j = 0; j < 243; j++) {

            signatureFragment[i * 243 + j] = hash[j];
        }
    }

    return signatureFragment;
}

/**
*
*
**/
var validateSignatures = function(expectedAddress, signatureFragments, bundleHash) {
    if (!bundleHash) {
        throw errors.invalidBundleHash();
    }

    var self = this;
    var bundle = new Bundle();

    var normalizedBundleFragments = [];
    var normalizedBundleHash = bundle.normalizedBundle(bundleHash);

    // Split hash into 3 fragments
    for (var i = 0; i < 3; i++) {
        normalizedBundleFragments[i] = normalizedBundleHash.slice(i * 27, (i + 1) * 27);
    }

    // Get digests
    var digests = [];

    for (var i = 0; i < signatureFragments.length; i++) {

        var digestBuffer = digest(normalizedBundleFragments[i % 3], Converter.trits(signatureFragments[i]));

        for (var j = 0; j < 243; j++) {

            digests[i * 243 + j] = digestBuffer[j]
        }
    }

    var address = Converter.trytes(self.address(digests));

    return (expectedAddress === address);
}


module.exports = {
    key                 : key,
    digests             : digests,
    address             : address,
    digest              : digest,
    signatureFragment   : signatureFragment,
    validateSignatures  : validateSignatures
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
*   checks if input is correct address
*
*   @method isAddress
*   @param {string} address
*   @returns {boolean}
**/
var isAddress = function(address) {
    // TODO: In the future check checksum

    // Check if address with checksum
    if (address.length === 90) {

        if (!isTrytes(address, 90)) {
            return false;
        }
    } else {

        if (!isTrytes(address, 81)) {
            return false;
        }
    }

    return true;
}

/**
*   checks if input is correct trytes consisting of A-Z9
*   optionally validate length
*
*   @method isTrytes
*   @param {string} trytes
*   @param {integer} length optional
*   @returns {boolean}
**/
var isTrytes = function(trytes, length) {

    // If no length specified, just validate the trytes
    if (!length) length = "0,"

    var regexTrytes = new RegExp("^[9A-Z]{" + length +"}$");
    return regexTrytes.test(trytes) && isString(trytes);
}

/**
*   checks if input is correct trytes consisting of A-Z9
*   optionally validate length
*
*   @method isNinesTrytes
*   @param {string} trytes
*   @returns {boolean}
**/
var isNinesTrytes = function(trytes) {

    return /^[9]+$/.test(trytes) && isString(trytes);
}

/**
*   checks if integer value
*
*   @method isValue
*   @param {string} value
*   @returns {boolean}
**/
var isValue = function(value) {

    // check if correct number
    return Number.isInteger(value)
}

/**
*   checks whether input is a value or not. Can be a string, float or integer
*
*   @method isNum
*   @param {int}
*   @returns {boolean}
**/
var isNum = function(input) {

    return /^(\d+\.?\d{0,15}|\.\d{0,15})$/.test(input);
}

/**
*   checks if input is correct hash
*
*   @method isHash
*   @param {string} hash
*   @returns {boolean}
**/
var isHash = function(hash) {

    // Check if valid, 81 trytes
    if (!isTrytes(hash, 81)) {

        return false;
    }

    return true;
}

/**
*   checks whether input is a string or not
*
*   @method isString
*   @param {string}
*   @returns {boolean}
**/
var isString = function(string) {

    return typeof string === 'string';
}


/**
*   checks whether input is an array or not
*
*   @method isArray
*   @param {object}
*   @returns {boolean}
**/
var isArray = function(array) {

    return array instanceof Array;
}


/**
*   checks whether input is object or not
*
*   @method isObject
*   @param {object}
*   @returns {boolean}
**/
var isObject = function(object) {

    return typeof object === 'object';
}



/**
*   checks if input is correct hash
*
*   @method isTransfersArray
*   @param {array} hash
*   @returns {boolean}
**/
var isTransfersArray = function(transfersArray) {

    if (!isArray(transfersArray)) return false;

    for (var i = 0; i < transfersArray.length; i++) {

        var transfer = transfersArray[i];

        // Check if valid address
        var address = transfer.address;
        if (!isAddress(address)) {
            return false;
        }

        // Validity check for value
        var value = transfer.value;
        if (!isValue(value)) {
            return false;
        }

        // Check if message is correct trytes of any length
        var message = transfer.message;
        if (!isTrytes(message, "0,")) {
            return false;
        }

        // Check if tag is correct trytes of {0,27} trytes
        var tag = transfer.tag;
        if (!isTrytes(tag, "0,27")) {
            return false;
        }

    }

    return true;
}

/**
*   checks if input is list of correct trytes
*
*   @method isArrayOfHashes
*   @param {list} hashesArray
*   @returns {boolean}
**/
var isArrayOfHashes = function(hashesArray) {

    if (!isArray(hashesArray)) return false;

    for (var i = 0; i < hashesArray.length; i++) {

        var hash = hashesArray[i];

        // Check if address with checksum
        if (hash.length === 90) {

            if (!isTrytes(hash, 90)) {
                return false;
            }
        } else {

            if (!isTrytes(hash, 81)) {
                return false;
            }
        }
    }

    return true;
}

/**
*   checks if input is list of correct trytes
*
*   @method isArrayOfTrytes
*   @param {list} trytesArray
*   @returns {boolean}
**/
var isArrayOfTrytes = function(trytesArray) {

    if (!isArray(trytesArray)) return false;

    for (var i = 0; i < trytesArray.length; i++) {

        var tryteValue = trytesArray[i];

        // Check if correct 2673 trytes
        if (!isTrytes(tryteValue, 2673)) {
            return false;
        }
    }

    return true;
}

/**
*   checks if attached trytes if last 241 trytes are non-zero
*
*   @method isArrayOfAttachedTrytes
*   @param {array} trytesArray
*   @returns {boolean}
**/
var isArrayOfAttachedTrytes = function(trytesArray) {

    if (!isArray(trytesArray)) return false;

    for (var i = 0; i < trytesArray.length; i++) {

        var tryteValue = trytesArray[i];

        // Check if correct 2673 trytes
        if (!isTrytes(tryteValue, 2673)) {
            return false;
        }

        var lastTrytes = tryteValue.slice(2673 - (3 * 81));

        if (/^[9]+$/.test(lastTrytes)) {
            return false;
        }
    }

    return true;
}

/**
*   checks if correct bundle with transaction object
*
*   @method isArrayOfTxObjects
*   @param {array} bundle
*   @returns {boolean}
**/
var isArrayOfTxObjects = function(bundle) {

    if (!isArray(bundle) || bundle.length === 0) return false;

    var validArray = true;

    bundle.forEach(function(txObject) {

        var keysToValidate = [
            {
                key: 'hash',
                validator: isHash,
                args: null
            }, {
                key: 'signatureMessageFragment',
                validator: isTrytes,
                args: 2187
            }, {
                key: 'address',
                validator: isHash,
                args: null
            }, {
                key: 'value',
                validator: isValue,
                args: null
            }, {
                key: 'obsoleteTag',
                validator: isTrytes,
                args: 27
            }, {
                key: 'timestamp',
                validator: isValue,
                args: null
            }, {
                key: 'currentIndex',
                validator: isValue,
                args: null
            },{
                key: 'lastIndex',
                validator: isValue,
                args: null
            }, {
                key: 'bundle',
                validator: isHash,
                args: null
            }, {
                key: 'trunkTransaction',
                validator: isHash,
                args: null
            }, {
                key: 'branchTransaction',
                validator: isHash,
                args: null
            }, {
                key: 'tag',
                validator: isTrytes,
                args: 27
            }, {
                key: 'attachmentTimestamp',
                validator: isValue,
                args: null
            }, {
                key: 'attachmentTimestampLowerBound',
                validator: isValue,
                args: null
            }, {
                key: 'attachmentTimestampUpperBound',
                validator: isValue,
                args: null
            }, {
                key: 'nonce',
                validator: isTrytes,
                args: 27
            }
        ]

        for (var i = 0; i < keysToValidate.length; i++) {

            var key = keysToValidate[i].key;
            var validator = keysToValidate[i].validator;
            var args = keysToValidate[i].args

            // If input does not have keyIndex and address, return false
            if (!txObject.hasOwnProperty(key)) {
                validArray = false;
                break;
            }

            // If input validator function does not return true, exit
            if (!validator(txObject[key], args)) {
                validArray = false;
                break;
            }
        }
    })

    return validArray;
}

/**
*   checks if correct inputs list
*
*   @method isInputs
*   @param {array} inputs
*   @returns {boolean}
**/
var isInputs = function(inputs) {

    if (!isArray(inputs)) return false;

    for (var i = 0; i < inputs.length; i++) {

        var input = inputs[i];

        // If input does not have keyIndex and address, return false
        if (!input.hasOwnProperty('security') || !input.hasOwnProperty('keyIndex') || !input.hasOwnProperty('address')) return false;

        if (!isAddress(input.address)) {
            return false;
        }

        if (!isValue(input.security)) {
            return false;
        }

        if (!isValue(input.keyIndex)) {
            return false;
        }
    }

    return true;
}

/**
*   Checks that a given uri is valid
*
*   Valid Examples:
*   udp://[2001:db8:a0b:12f0::1]:14265
*   udp://[2001:db8:a0b:12f0::1]
*   udp://8.8.8.8:14265
*   udp://domain.com
*   udp://domain2.com:14265
*
*   @method isUri
*   @param {string} node
*   @returns {bool} valid
**/
var isUri = function(node) {

    var getInside = /^(udp|tcp):\/\/([\[][^\]\.]*[\]]|[^\[\]:]*)[:]{0,1}([0-9]{1,}$|$)/i;

    var stripBrackets = /[\[]{0,1}([^\[\]]*)[\]]{0,1}/;

    var uriTest = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))|(^\s*((?=.{1,255}$)(?=.*[A-Za-z].*)[0-9A-Za-z](?:(?:[0-9A-Za-z]|\b-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|\b-){0,61}[0-9A-Za-z])?)*)\s*$)/;

    if(!getInside.test(node)) {
        return false;
    }

    return uriTest.test(stripBrackets.exec(getInside.exec(node)[1])[1]);
}

module.exports = {
    isAddress: isAddress,
    isTrytes: isTrytes,
    isNinesTrytes: isNinesTrytes,
    isValue: isValue,
    isHash: isHash,
    isTransfersArray: isTransfersArray,
    isArrayOfHashes: isArrayOfHashes,
    isArrayOfTrytes: isArrayOfTrytes,
    isArrayOfAttachedTrytes: isArrayOfAttachedTrytes,
    isArrayOfTxObjects: isArrayOfTxObjects,
    isInputs: isInputs,
    isString: isString,
    isNum: isNum,
    isArray: isArray,
    isObject: isObject,
    isUri: isUri
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var inputValidator  =   __webpack_require__(10);
var makeRequest     =   __webpack_require__(32);
var Curl            =   __webpack_require__(5);
var Kerl            =   __webpack_require__(11);
var Converter       =   __webpack_require__(3);
var Signing         =   __webpack_require__(18);
var CryptoJS        =   __webpack_require__(12);
var ascii           =   __webpack_require__(34);
var extractJson     =   __webpack_require__(76);


/**
*   Table of IOTA Units based off of the standard System of Units
**/
var unitMap = {
    'i'   :   1,
    'Ki'  :   1000,
    'Mi'  :   1000000,
    'Gi'  :   1000000000,
    'Ti'  :   1000000000000,
    'Pi'  :   1000000000000000  // For the very, very rich
}

/**
*   converts IOTA units
*
*   @method convertUnits
*   @param {string || int || float} value
*   @param {string} fromUnit
*   @param {string} toUnit
*   @returns {integer} converted
**/
var convertUnits = function(value, fromUnit, toUnit) {

    // Check if wrong unit provided
    if (unitMap[fromUnit] === undefined || unitMap[toUnit] === undefined) {

        throw new Error("Invalid unit provided");
    }

    var afterComma = String(value).match(/\.([\d]+)$/);

    if (afterComma && afterComma[1].length > String(unitMap[fromUnit]).length - 1) {

        throw new Error("Too many digits after comma");
    }

    // If not valid value, throw error
    if (!inputValidator.isNum(value)) {

        throw new Error("Invalid value");
    }


    var floatValue = parseFloat(value);

    var converted = (floatValue * unitMap[fromUnit]) / unitMap[toUnit];

    return converted;
}

/**
*   Generates the 9-tryte checksum of an address
*
*   @method addChecksum
*   @param {string | list} inputValue
*   @param {int} checksumLength
@   @param {bool} isAddress default is true
*   @returns {string | list} address (with checksum)
**/
var addChecksum = function(inputValue, checksumLength, isAddress) {

    // checksum length is either user defined, or 9 trytes
    var checksumLength = checksumLength || 9;
    var isAddress = (isAddress !== false);

    // the length of the trytes to be validated
    var validationLength = isAddress ? 81 : null;

    var isSingleInput = inputValidator.isString( inputValue );

    // If only single address, turn it into an array
    if ( isSingleInput ) inputValue = new Array( inputValue );

    var inputsWithChecksum = [];

    inputValue.forEach(function(thisValue) {

        // check if correct trytes
        if (!inputValidator.isTrytes(thisValue, validationLength)) {
            throw new Error("Invalid input");
        }

        var kerl = new Kerl();
        kerl.initialize();

        // Address trits
        var addressTrits = Converter.trits(thisValue);

        // Checksum trits
        var checksumTrits = [];

        // Absorb address trits
        kerl.absorb(addressTrits, 0, addressTrits.length);

        // Squeeze checksum trits
        kerl.squeeze(checksumTrits, 0, Curl.HASH_LENGTH);

        // First 9 trytes as checksum
        var checksum = Converter.trytes( checksumTrits ).substring( 81 - checksumLength, 81 );
        inputsWithChecksum.push( thisValue + checksum );
    });

    if (isSingleInput) {

        return inputsWithChecksum[ 0 ];

    } else {

        return inputsWithChecksum;

    }
}

/**
*   Removes the 9-tryte checksum of an address
*
*   @method noChecksum
*   @param {string | list} address
*   @returns {string | list} address (without checksum)
**/
var noChecksum = function(address) {

    var isSingleAddress = inputValidator.isString(address)

    // If only single address, turn it into an array
    if (isSingleAddress) address = new Array(address);

    var addressesWithChecksum = [];

    address.forEach(function(thisAddress) {
        addressesWithChecksum.push(thisAddress.slice(0, 81))
    })

    // return either string or the list
    if (isSingleAddress) {

        return addressesWithChecksum[0];

    } else {

        return addressesWithChecksum;

    }
}

/**
*   Validates the checksum of an address
*
*   @method isValidChecksum
*   @param {string} addressWithChecksum
*   @returns {bool}
**/
var isValidChecksum = function(addressWithChecksum) {

    var addressWithoutChecksum = noChecksum(addressWithChecksum);

    var newChecksum = addChecksum(addressWithoutChecksum);

    return newChecksum === addressWithChecksum;
}

/**
*   Converts transaction trytes of 2673 trytes into a transaction object
*
*   @method transactionObject
*   @param {string} trytes
*   @returns {String} transactionObject
**/
var transactionObject = function(trytes) {

    if (!trytes) return;

    // validity check
    for (var i = 2279; i < 2295; i++) {

        if (trytes.charAt(i) !== "9") {

            return null;

        }
    }

    var thisTransaction = {};
    var transactionTrits = Converter.trits(trytes);
    var hash = [];

    var curl = new Curl();

    // generate the correct transaction hash
    curl.initialize();
    curl.absorb(transactionTrits, 0, transactionTrits.length);
    curl.squeeze(hash, 0, 243);

    thisTransaction.hash = Converter.trytes(hash);
    thisTransaction.signatureMessageFragment = trytes.slice(0, 2187);
    thisTransaction.address = trytes.slice(2187, 2268);
    thisTransaction.value = Converter.value(transactionTrits.slice(6804, 6837));
    thisTransaction.obsoleteTag = trytes.slice(2295, 2322);
    thisTransaction.timestamp = Converter.value(transactionTrits.slice(6966, 6993));
    thisTransaction.currentIndex = Converter.value(transactionTrits.slice(6993, 7020));
    thisTransaction.lastIndex = Converter.value(transactionTrits.slice(7020, 7047));
    thisTransaction.bundle = trytes.slice(2349, 2430);
    thisTransaction.trunkTransaction = trytes.slice(2430, 2511);
    thisTransaction.branchTransaction = trytes.slice(2511, 2592);

    thisTransaction.tag = trytes.slice(2592, 2619);
    thisTransaction.attachmentTimestamp = Converter.value(transactionTrits.slice(7857, 7884));
    thisTransaction.attachmentTimestampLowerBound = Converter.value(transactionTrits.slice(7884, 7911));
    thisTransaction.attachmentTimestampUpperBound = Converter.value(transactionTrits.slice(7911, 7938));
    thisTransaction.nonce = trytes.slice(2646, 2673);

    return thisTransaction;
}

/**
*   Converts a transaction object into trytes
*
*   @method transactionTrytes
*   @param {object} transactionTrytes
*   @returns {String} trytes
**/
var transactionTrytes = function(transaction) {

    var valueTrits = Converter.trits(transaction.value);
    while (valueTrits.length < 81) {
        valueTrits[valueTrits.length] = 0;
    }

    var timestampTrits = Converter.trits(transaction.timestamp);
    while (timestampTrits.length < 27) {
        timestampTrits[timestampTrits.length] = 0;
    }

    var currentIndexTrits = Converter.trits(transaction.currentIndex);
    while (currentIndexTrits.length < 27) {
        currentIndexTrits[currentIndexTrits.length] = 0;
    }

    var lastIndexTrits = Converter.trits(transaction.lastIndex);
    while (lastIndexTrits.length < 27) {
        lastIndexTrits[lastIndexTrits.length] = 0;
    }

    var attachmentTimestampTrits = Converter.trits(transaction.attachmentTimestamp || 0);
    while (attachmentTimestampTrits.length < 27) {
        attachmentTimestampTrits[attachmentTimestampTrits.length] = 0;
    }

    var attachmentTimestampLowerBoundTrits = Converter.trits(transaction.attachmentTimestampLowerBound || 0);
    while (attachmentTimestampLowerBoundTrits.length < 27) {
        attachmentTimestampLowerBoundTrits[attachmentTimestampLowerBoundTrits.length] = 0;
    }

    var attachmentTimestampUpperBoundTrits = Converter.trits(transaction.attachmentTimestampUpperBound || 0);
    while (attachmentTimestampUpperBoundTrits.length < 27) {
        attachmentTimestampUpperBoundTrits[attachmentTimestampUpperBoundTrits.length] = 0;
    }

    transaction.tag = transaction.tag || transaction.obsoleteTag;

    return transaction.signatureMessageFragment
    + transaction.address
    + Converter.trytes(valueTrits)
    + transaction.obsoleteTag
    + Converter.trytes(timestampTrits)
    + Converter.trytes(currentIndexTrits)
    + Converter.trytes(lastIndexTrits)
    + transaction.bundle
    + transaction.trunkTransaction
    + transaction.branchTransaction
    + transaction.tag
    + Converter.trytes(attachmentTimestampTrits)
    + Converter.trytes(attachmentTimestampLowerBoundTrits)
    + Converter.trytes(attachmentTimestampUpperBoundTrits)
    + transaction.nonce;
}

/**
*   Categorizes a list of transfers between sent and received
*
*   @method categorizeTransfers
*   @param {object} transfers Transfers (bundles)
*   @param {list} addresses List of addresses that belong to the user
*   @returns {String} trytes
**/
var categorizeTransfers = function(transfers, addresses) {

    var categorized = {
        'sent'      : [],
        'received'  : []
    }

    // Iterate over all bundles and sort them between incoming and outgoing transfers
    transfers.forEach(function(bundle) {

        var spentAlreadyAdded = false;

        // Iterate over every bundle entry
        bundle.forEach(function(bundleEntry, bundleIndex) {

            // If bundle address in the list of addresses associated with the seed
            // add the bundle to the
            if (addresses.indexOf(bundleEntry.address) > -1) {

                // Check if it's a remainder address
                var isRemainder = (bundleEntry.currentIndex === bundleEntry.lastIndex) && bundleEntry.lastIndex !== 0;

                // check if sent transaction
                if (bundleEntry.value < 0 && !spentAlreadyAdded && !isRemainder) {

                    categorized.sent.push(bundle);

                    // too make sure we do not add transactions twice
                    spentAlreadyAdded = true;
                }
                // check if received transaction, or 0 value (message)
                // also make sure that this is not a 2nd tx for spent inputs
                else if (bundleEntry.value >= 0 && !spentAlreadyAdded && !isRemainder) {

                    categorized.received.push(bundle);
                }
            }
        })
    })

    return categorized;
}


/**
*   Validates the signatures
*
*   @method validateSignatures
*   @param {array} signedBundle
*   @param {string} inputAddress
*   @returns {bool}
**/
var validateSignatures = function(signedBundle, inputAddress) {


    var bundleHash;
    var signatureFragments = [];

    for (var i = 0; i < signedBundle.length; i++) {

        if (signedBundle[i].address === inputAddress) {

            bundleHash = signedBundle[i].bundle;

            // if we reached remainder bundle
            if (inputValidator.isNinesTrytes(signedBundle[i].signatureMessageFragment)) {
                break;
            }

            signatureFragments.push(signedBundle[i].signatureMessageFragment)
        }
    }

    if (!bundleHash) {
        return false;
    }

    return Signing.validateSignatures(inputAddress, signatureFragments, bundleHash);
}


/**
*   Checks is a Bundle is valid. Validates signatures and overall structure. Has to be tail tx first.
*
*   @method isValidBundle
*   @param {array} bundle
*   @returns {bool} valid
**/
var isBundle = function(bundle) {

    // If not correct bundle
    if (!inputValidator.isArrayOfTxObjects(bundle)) return false;

    var totalSum = 0, lastIndex, bundleHash = bundle[0].bundle;

    // Prepare to absorb txs and get bundleHash
    var bundleFromTxs = [];

    var kerl = new Kerl();
    kerl.initialize();

    // Prepare for signature validation
    var signaturesToValidate = [];

    bundle.forEach(function(bundleTx, index) {

        totalSum += bundleTx.value;

        // currentIndex has to be equal to the index in the array
        if (bundleTx.currentIndex !== index) return false;

        // Get the transaction trytes
        var thisTxTrytes = transactionTrytes(bundleTx);

        // Absorb bundle hash + value + timestamp + lastIndex + currentIndex trytes.
        var thisTxTrits = Converter.trits(thisTxTrytes.slice(2187, 2187 + 162));
        kerl.absorb(thisTxTrits, 0, thisTxTrits.length);

        // Check if input transaction
        if (bundleTx.value < 0) {
            var thisAddress = bundleTx.address;

            var newSignatureToValidate = {
                'address': thisAddress,
                'signatureFragments': Array(bundleTx.signatureMessageFragment)
            }

            // Find the subsequent txs with the remaining signature fragment
            for (var i = index; i < bundle.length - 1; i++) {
                var newBundleTx = bundle[i + 1];

                // Check if new tx is part of the signature fragment
                if (newBundleTx.address === thisAddress && newBundleTx.value === 0) {
                    newSignatureToValidate.signatureFragments.push(newBundleTx.signatureMessageFragment);
                }
            }

            signaturesToValidate.push(newSignatureToValidate);
        }
    });

    // Check for total sum, if not equal 0 return error
    if (totalSum !== 0) return false;

    // get the bundle hash from the bundle transactions
    kerl.squeeze(bundleFromTxs, 0, Curl.HASH_LENGTH);
    var bundleFromTxs = Converter.trytes(bundleFromTxs);

    // Check if bundle hash is the same as returned by tx object
    if (bundleFromTxs !== bundleHash) return false;

    // Last tx in the bundle should have currentIndex === lastIndex
    if (bundle[bundle.length - 1].currentIndex !== bundle[bundle.length - 1].lastIndex) return false;

    // Validate the signatures
    for (var i = 0; i < signaturesToValidate.length; i++) {

        var isValidSignature = Signing.validateSignatures(signaturesToValidate[i].address, signaturesToValidate[i].signatureFragments, bundleHash);

        if (!isValidSignature) return false;
    }

    return true;
}

module.exports = {
    convertUnits        : convertUnits,
    addChecksum         : addChecksum,
    noChecksum          : noChecksum,
    isValidChecksum     : isValidChecksum,
    transactionObject   : transactionObject,
    transactionTrytes   : transactionTrytes,
    categorizeTransfers : categorizeTransfers,
    toTrytes            : ascii.toTrytes,
    fromTrytes          : ascii.fromTrytes,
    extractJson         : extractJson,
    validateSignatures  : validateSignatures,
    isBundle            : isBundle
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Curl = __webpack_require__(5);
var Kerl = __webpack_require__(11);
var Converter = __webpack_require__(3);
var Bundle = __webpack_require__(19);
var add = __webpack_require__(33);
var oldSigning = __webpack_require__(75);
var errors = __webpack_require__(25);

/**
*           Signing related functions
*
**/
var key = function(seed, index, length) {

    while ((seed.length % 243) !== 0) {
      seed.push(0);
    }

    var indexTrits = Converter.fromValue( index );
    var subseed = add( seed.slice( ), indexTrits );

    var kerl = new Kerl( );

    kerl.initialize( );
    kerl.absorb(subseed, 0, subseed.length);
    kerl.squeeze(subseed, 0, subseed.length);

    kerl.reset( );
    kerl.absorb(subseed, 0, subseed.length);

    var key = [], offset = 0, buffer = [];

    while (length-- > 0) {

        for (var i = 0; i < 27; i++) {

            kerl.squeeze(buffer, 0, subseed.length);
            for (var j = 0; j < 243; j++) {

                key[offset++] = buffer[j];
            }
        }
    }
    return key;
}

/**
*
*
**/
var digests = function(key) {

    var digests = [], buffer = [];

    for (var i = 0; i < Math.floor(key.length / 6561); i++) {

        var keyFragment = key.slice(i * 6561, (i + 1) * 6561);

        for (var j = 0; j < 27; j++) {

            buffer = keyFragment.slice(j * 243, (j + 1) * 243);

            for (var k = 0; k < 26; k++) {

                var kKerl = new Kerl();
                kKerl.initialize();
                kKerl.absorb(buffer, 0, buffer.length);
                kKerl.squeeze(buffer, 0, Curl.HASH_LENGTH);
            }

            for (var k = 0; k < 243; k++) {

                keyFragment[j * 243 + k] = buffer[k];
            }
        }

        var kerl = new Kerl()

        kerl.initialize();
        kerl.absorb(keyFragment, 0, keyFragment.length);
        kerl.squeeze(buffer, 0, Curl.HASH_LENGTH);

        for (var j = 0; j < 243; j++) {

            digests[i * 243 + j] = buffer[j];
        }
    }
    return digests;
}

/**
*
*
**/
var address = function(digests) {

    var addressTrits = [];

    var kerl = new Kerl();

    kerl.initialize();
    kerl.absorb(digests, 0, digests.length);
    kerl.squeeze(addressTrits, 0, Curl.HASH_LENGTH);

    return addressTrits;
}

/**
*
*
**/
var digest = function(normalizedBundleFragment, signatureFragment) {

    var buffer = []

    var kerl = new Kerl();

    kerl.initialize();

    for (var i = 0; i< 27; i++) {
        buffer = signatureFragment.slice(i * 243, (i + 1) * 243);

        for (var j = normalizedBundleFragment[i] + 13; j-- > 0; ) {

            var jKerl = new Kerl();

            jKerl.initialize();
            jKerl.absorb(buffer, 0, buffer.length);
            jKerl.squeeze(buffer, 0, Curl.HASH_LENGTH);
        }

        kerl.absorb(buffer, 0, buffer.length);
    }

    kerl.squeeze(buffer, 0, Curl.HASH_LENGTH);
    return buffer;
}

/**
*
*
**/
var signatureFragment = function(normalizedBundleFragment, keyFragment) {

    var signatureFragment = keyFragment.slice(), hash = [];

    var kerl = new Kerl();

    for (var i = 0; i < 27; i++) {

        hash = signatureFragment.slice(i * 243, (i + 1) * 243);

        for (var j = 0; j < 13 - normalizedBundleFragment[i]; j++) {

            kerl.initialize();
            kerl.reset();
            kerl.absorb(hash, 0, hash.length);
            kerl.squeeze(hash, 0, Curl.HASH_LENGTH);
        }

        for (var j = 0; j < 243; j++) {

            signatureFragment[i * 243 + j] = hash[j];
        }
    }

    return signatureFragment;
}

/**
*
*
**/
var validateSignatures = function(expectedAddress, signatureFragments, bundleHash) {
    if (!bundleHash) {
        throw errors.invalidBundleHash();
    }

    var self = this;
    var bundle = new Bundle();

    var normalizedBundleFragments = [];
    var normalizedBundleHash = bundle.normalizedBundle(bundleHash);

    // Split hash into 3 fragments
    for (var i = 0; i < 3; i++) {
        normalizedBundleFragments[i] = normalizedBundleHash.slice(i * 27, (i + 1) * 27);
    }

    // Get digests
    var digests = [];

    for (var i = 0; i < signatureFragments.length; i++) {

        var digestBuffer = digest(normalizedBundleFragments[i % 3], Converter.trits(signatureFragments[i]));

        for (var j = 0; j < 243; j++) {

            digests[i * 243 + j] = digestBuffer[j]
        }
    }

    var address = Converter.trytes(self.address(digests));

    return (expectedAddress === address);
}


module.exports = {
    key                 : key,
    digests             : digests,
    address             : address,
    digest              : digest,
    signatureFragment   : signatureFragment,
    validateSignatures  : validateSignatures
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Curl = __webpack_require__(5);
var Kerl = __webpack_require__(11);
var Converter = __webpack_require__(3);

/**
*
*   @constructor bundle
**/
function Bundle() {

    // Declare empty bundle
    this.bundle = [];
}

/**
*
*
**/

Bundle.prototype.addEntry = function(signatureMessageLength, address, value, tag, timestamp, index) {

    for (var i = 0; i < signatureMessageLength; i++) {

        var transactionObject = new Object();
        transactionObject.address = address;
        transactionObject.value = i == 0 ? value : 0;
        transactionObject.obsoleteTag = tag;
        transactionObject.timestamp = timestamp;

        this.bundle[this.bundle.length] = transactionObject;
    }
}

/**
*
*
**/
Bundle.prototype.addTrytes = function(signatureFragments) {

    var emptySignatureFragment = '';
    var emptyHash = '999999999999999999999999999999999999999999999999999999999999999999999999999999999';
    var emptyTag = '9'.repeat(27);
    var emptyTimestamp = '9'.repeat(9);

    for (var j = 0; emptySignatureFragment.length < 2187; j++) {
        emptySignatureFragment += '9';
    }

    for (var i = 0; i < this.bundle.length; i++) {

        // Fill empty signatureMessageFragment
        this.bundle[i].signatureMessageFragment = signatureFragments[i] ? signatureFragments[i] : emptySignatureFragment;

        // Fill empty trunkTransaction
        this.bundle[i].trunkTransaction = emptyHash;

        // Fill empty branchTransaction
        this.bundle[i].branchTransaction = emptyHash;

        // Fill empty tag
        this.bundle[i].tag = emptyTag;

        this.bundle[i].attachmentTimestamp = emptyTimestamp;
        this.bundle[i].attachmentTimestampLowerBound = emptyTimestamp;
        this.bundle[i].attachmentTimestampUpperBound = emptyTimestamp;
        // Fill empty nonce
        this.bundle[i].nonce = emptyTag;
    }
}


/**
*
*
**/
Bundle.prototype.finalize = function() {

    var kerl = new Kerl();
    kerl.initialize();

    for (var i = 0; i < this.bundle.length; i++) {

        var valueTrits = Converter.trits(this.bundle[i].value);
        while (valueTrits.length < 81) {
            valueTrits[valueTrits.length] = 0;
        }

        var timestampTrits = Converter.trits(this.bundle[i].timestamp);
        while (timestampTrits.length < 27) {
            timestampTrits[timestampTrits.length] = 0;
        }

        var currentIndexTrits = Converter.trits(this.bundle[i].currentIndex = i);
        while (currentIndexTrits.length < 27) {
            currentIndexTrits[currentIndexTrits.length] = 0;
        }

        var lastIndexTrits = Converter.trits(this.bundle[i].lastIndex = this.bundle.length - 1);
        while (lastIndexTrits.length < 27) {
            lastIndexTrits[lastIndexTrits.length] = 0;
        }

        var bundleEssence = Converter.trits(this.bundle[i].address + Converter.trytes(valueTrits) + this.bundle[i].obsoleteTag + Converter.trytes(timestampTrits) + Converter.trytes(currentIndexTrits) + Converter.trytes(lastIndexTrits));
        kerl.absorb(bundleEssence, 0, bundleEssence.length);
    }

    var hash = [];
    kerl.squeeze(hash, 0, Curl.HASH_LENGTH);
    hash = Converter.trytes(hash);

    for (var i = 0; i < this.bundle.length; i++) {

        this.bundle[i].bundle = hash;
    }
}

/**
*   Normalizes the bundle hash
*
**/
Bundle.prototype.normalizedBundle = function(bundleHash) {

    var normalizedBundle = [];

    for (var i = 0; i < 3; i++) {

        var sum = 0;
        for (var j = 0; j < 27; j++) {

            sum += (normalizedBundle[i * 27 + j] = Converter.value(Converter.trits(bundleHash.charAt(i * 27 + j))));
        }

        if (sum >= 0) {

            while (sum-- > 0) {

                for (var j = 0; j < 27; j++) {

                    if (normalizedBundle[i * 27 + j] > -13) {

                        normalizedBundle[i * 27 + j]--;
                        break;
                    }
                }
            }
        } else {

            while (sum++ < 0) {

                for (var j = 0; j < 27; j++) {

                    if (normalizedBundle[i * 27 + j] < 13) {

                        normalizedBundle[i * 27 + j]++;
                        break;
                    }
                }
            }
        }
    }

    return normalizedBundle;
}

module.exports = Bundle;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),
/* 22 */
/***/ (function(module, exports) {


module.exports = {

    invalidTrytes: function() {
        return new Error("Invalid Trytes provided");
    },
    invalidSeed: function() {
        return new Error("Invalid Seed provided");
    },
    invalidIndex: function() {
        return new Error("Invalid Index option provided");
    }, 
    invalidSecurity: function() {
        return new Error("Invalid Security option provided");
    },
    invalidChecksum: function(address) {
        return new Error("Invalid Checksum supplied for address: " + address)
    },
    invalidAttachedTrytes: function() {
        return new Error("Invalid attached Trytes provided");
    },
    invalidTransfers: function() {
        return new Error("Invalid transfers object");
    },
    invalidKey: function() {
        return new Error("You have provided an invalid key value");
    },
    invalidTrunkOrBranch: function(hash) {
        return new Error("You have provided an invalid hash as a trunk/branch: " + hash);
    },
    invalidUri: function(uri) {
        return new Error("You have provided an invalid URI for your Neighbor: " + uri)
    },
    notInt: function() {
        return new Error("One of your inputs is not an integer");
    },
    invalidInputs: function() {
        return new Error("Invalid inputs provided");
    }
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var inputValidator  =   __webpack_require__(16);
var Curl            =   __webpack_require__(4);
var Kerl            =   __webpack_require__(7);
var Converter       =   __webpack_require__(2);
var Signing         =   __webpack_require__(15);
var CryptoJS        =   __webpack_require__(12);
var ascii           =   __webpack_require__(31);
var extractJson     =   __webpack_require__(64);


/**
*   Table of IOTA Units based off of the standard System of Units
**/
var unitMap = {
    'i'   :   1,
    'Ki'  :   1000,
    'Mi'  :   1000000,
    'Gi'  :   1000000000,
    'Ti'  :   1000000000000,
    'Pi'  :   1000000000000000  // For the very, very rich
}

/**
*   converts IOTA units
*
*   @method convertUnits
*   @param {string || int || float} value
*   @param {string} fromUnit
*   @param {string} toUnit
*   @returns {integer} converted
**/
var convertUnits = function(value, fromUnit, toUnit) {

    // Check if wrong unit provided
    if (unitMap[fromUnit] === undefined || unitMap[toUnit] === undefined) {

        throw new Error("Invalid unit provided");
    }

    var afterComma = String(value).match(/\.([\d]+)$/);

    if (afterComma && afterComma[1].length > String(unitMap[fromUnit]).length - 1) {

        throw new Error("Too many digits after comma");
    }

    // If not valid value, throw error
    if (!inputValidator.isNum(value)) {

        throw new Error("Invalid value");
    }


    var floatValue = parseFloat(value);

    var converted = (floatValue * unitMap[fromUnit]) / unitMap[toUnit];

    return converted;
}

/**
*   Generates the 9-tryte checksum of an address
*
*   @method addChecksum
*   @param {string | list} inputValue
*   @param {int} checksumLength
@   @param {bool} isAddress default is true
*   @returns {string | list} address (with checksum)
**/
var addChecksum = function(inputValue, checksumLength, isAddress) {

    // checksum length is either user defined, or 9 trytes
    var checksumLength = checksumLength || 9;
    var isAddress = (isAddress !== false);

    // the length of the trytes to be validated
    var validationLength = isAddress ? 81 : null;

    var isSingleInput = inputValidator.isString( inputValue );

    // If only single address, turn it into an array
    if ( isSingleInput ) inputValue = new Array( inputValue );

    var inputsWithChecksum = [];

    inputValue.forEach(function(thisValue) {

        // check if correct trytes
        if (!inputValidator.isTrytes(thisValue, validationLength)) {
            throw new Error("Invalid input");
        }

        var kerl = new Kerl();
        kerl.initialize();

        // Address trits
        var addressTrits = Converter.trits(thisValue);

        // Checksum trits
        var checksumTrits = [];

        // Absorb address trits
        kerl.absorb(addressTrits, 0, addressTrits.length);

        // Squeeze checksum trits
        kerl.squeeze(checksumTrits, 0, Curl.HASH_LENGTH);

        // First 9 trytes as checksum
        var checksum = Converter.trytes( checksumTrits ).substring( 81 - checksumLength, 81 );
        inputsWithChecksum.push( thisValue + checksum );
    });

    if (isSingleInput) {

        return inputsWithChecksum[ 0 ];

    } else {

        return inputsWithChecksum;

    }
}

/**
*   Removes the 9-tryte checksum of an address
*
*   @method noChecksum
*   @param {string | list} address
*   @returns {string | list} address (without checksum)
**/
var noChecksum = function(address) {

    var isSingleAddress = inputValidator.isString(address)

    // If only single address, turn it into an array
    if (isSingleAddress) address = new Array(address);

    var addressesWithChecksum = [];

    address.forEach(function(thisAddress) {
        addressesWithChecksum.push(thisAddress.slice(0, 81))
    })

    // return either string or the list
    if (isSingleAddress) {

        return addressesWithChecksum[0];

    } else {

        return addressesWithChecksum;

    }
}

/**
*   Validates the checksum of an address
*
*   @method isValidChecksum
*   @param {string} addressWithChecksum
*   @returns {bool}
**/
var isValidChecksum = function(addressWithChecksum) {

    var addressWithoutChecksum = noChecksum(addressWithChecksum);

    var newChecksum = addChecksum(addressWithoutChecksum);

    return newChecksum === addressWithChecksum;
}

/**
*   Converts transaction trytes of 2673 trytes into a transaction object
*
*   @method transactionObject
*   @param {string} trytes
*   @returns {String} transactionObject
**/
var transactionObject = function(trytes) {

    if (!trytes) return;

    // validity check
    for (var i = 2279; i < 2295; i++) {

        if (trytes.charAt(i) !== "9") {

            return null;

        }
    }

    var thisTransaction = {};
    var transactionTrits = Converter.trits(trytes);
    var hash = [];

    var curl = new Curl();

    // generate the correct transaction hash
    curl.initialize();
    curl.absorb(transactionTrits, 0, transactionTrits.length);
    curl.squeeze(hash, 0, 243);

    thisTransaction.hash = Converter.trytes(hash);
    thisTransaction.signatureMessageFragment = trytes.slice(0, 2187);
    thisTransaction.address = trytes.slice(2187, 2268);
    thisTransaction.value = Converter.value(transactionTrits.slice(6804, 6837));
    thisTransaction.obsoleteTag = trytes.slice(2295, 2322);
    thisTransaction.timestamp = Converter.value(transactionTrits.slice(6966, 6993));
    thisTransaction.currentIndex = Converter.value(transactionTrits.slice(6993, 7020));
    thisTransaction.lastIndex = Converter.value(transactionTrits.slice(7020, 7047));
    thisTransaction.bundle = trytes.slice(2349, 2430);
    thisTransaction.trunkTransaction = trytes.slice(2430, 2511);
    thisTransaction.branchTransaction = trytes.slice(2511, 2592);

    thisTransaction.tag = trytes.slice(2592, 2619);
    thisTransaction.attachmentTimestamp = Converter.value(transactionTrits.slice(7857, 7884));
    thisTransaction.attachmentTimestampLowerBound = Converter.value(transactionTrits.slice(7884, 7911));
    thisTransaction.attachmentTimestampUpperBound = Converter.value(transactionTrits.slice(7911, 7938));
    thisTransaction.nonce = trytes.slice(2646, 2673);

    return thisTransaction;
}

/**
*   Converts a transaction object into trytes
*
*   @method transactionTrytes
*   @param {object} transactionTrytes
*   @returns {String} trytes
**/
var transactionTrytes = function(transaction) {

    var valueTrits = Converter.trits(transaction.value);
    while (valueTrits.length < 81) {
        valueTrits[valueTrits.length] = 0;
    }

    var timestampTrits = Converter.trits(transaction.timestamp);
    while (timestampTrits.length < 27) {
        timestampTrits[timestampTrits.length] = 0;
    }

    var currentIndexTrits = Converter.trits(transaction.currentIndex);
    while (currentIndexTrits.length < 27) {
        currentIndexTrits[currentIndexTrits.length] = 0;
    }

    var lastIndexTrits = Converter.trits(transaction.lastIndex);
    while (lastIndexTrits.length < 27) {
        lastIndexTrits[lastIndexTrits.length] = 0;
    }

    var attachmentTimestampTrits = Converter.trits(transaction.attachmentTimestamp);
    while (attachmentTimestampTrits.length < 27) {
        attachmentTimestampTrits[attachmentTimestampTrits.length] = 0;
    }

    var attachmentTimestampLowerBoundTrits = Converter.trits(transaction.attachmentTimestampLowerBound);
    while (attachmentTimestampLowerBoundTrits.length < 27) {
        attachmentTimestampLowerBoundTrits[attachmentTimestampLowerBoundTrits.length] = 0;
    }

    var attachmentTimestampUpperBoundTrits = Converter.trits(transaction.attachmentTimestampUpperBound);
    while (attachmentTimestampUpperBoundTrits.length < 27) {
        attachmentTimestampUpperBoundTrits[attachmentTimestampUpperBoundTrits.length] = 0;
    }

    return transaction.signatureMessageFragment
    + transaction.address
    + Converter.trytes(valueTrits)
    + transaction.obsoleteTag
    + Converter.trytes(timestampTrits)
    + Converter.trytes(currentIndexTrits)
    + Converter.trytes(lastIndexTrits)
    + transaction.bundle
    + transaction.trunkTransaction
    + transaction.branchTransaction
    + transaction.tag
    + Converter.trytes(attachmentTimestampTrits)
    + Converter.trytes(attachmentTimestampLowerBoundTrits)
    + Converter.trytes(attachmentTimestampUpperBoundTrits)
    + transaction.nonce;
}

/**
*   Categorizes a list of transfers between sent and received
*
*   @method categorizeTransfers
*   @param {object} transfers Transfers (bundles)
*   @param {list} addresses List of addresses that belong to the user
*   @returns {String} trytes
**/
var categorizeTransfers = function(transfers, addresses) {

    var categorized = {
        'sent'      : [],
        'received'  : []
    }

    // Iterate over all bundles and sort them between incoming and outgoing transfers
    transfers.forEach(function(bundle) {

        var spentAlreadyAdded = false;

        // Iterate over every bundle entry
        bundle.forEach(function(bundleEntry, bundleIndex) {

            // If bundle address in the list of addresses associated with the seed
            // add the bundle to the
            if (addresses.indexOf(bundleEntry.address) > -1) {

                // Check if it's a remainder address
                var isRemainder = (bundleEntry.currentIndex === bundleEntry.lastIndex) && bundleEntry.lastIndex !== 0;

                // check if sent transaction
                if (bundleEntry.value < 0 && !spentAlreadyAdded && !isRemainder) {

                    categorized.sent.push(bundle);

                    // too make sure we do not add transactions twice
                    spentAlreadyAdded = true;
                }
                // check if received transaction, or 0 value (message)
                // also make sure that this is not a 2nd tx for spent inputs
                else if (bundleEntry.value >= 0 && !spentAlreadyAdded && !isRemainder) {

                    categorized.received.push(bundle);
                }
            }
        })
    })

    return categorized;
}


/**
*   Validates the signatures
*
*   @method validateSignatures
*   @param {array} signedBundle
*   @param {string} inputAddress
*   @returns {bool}
**/
var validateSignatures = function(signedBundle, inputAddress) {


    var bundleHash;
    var signatureFragments = [];

    for (var i = 0; i < signedBundle.length; i++) {

        if (signedBundle[i].address === inputAddress) {

            bundleHash = signedBundle[i].bundle;

            // if we reached remainder bundle
            if (inputValidator.isNinesTrytes(signedBundle[i].signatureMessageFragment)) {
                break;
            }

            signatureFragments.push(signedBundle[i].signatureMessageFragment)
        }
    }

    if (!bundleHash) {
        return false;
    }

    return Signing.validateSignatures(inputAddress, signatureFragments, bundleHash);
}


/**
*   Checks is a Bundle is valid. Validates signatures and overall structure. Has to be tail tx first.
*
*   @method isValidBundle
*   @param {array} bundle
*   @returns {bool} valid
**/
var isBundle = function(bundle) {

    // If not correct bundle
    if (!inputValidator.isArrayOfTxObjects(bundle)) return false;

    var totalSum = 0, lastIndex, bundleHash = bundle[0].bundle;

    // Prepare to absorb txs and get bundleHash
    var bundleFromTxs = [];

    var kerl = new Kerl();
    kerl.initialize();

    // Prepare for signature validation
    var signaturesToValidate = [];

    bundle.forEach(function(bundleTx, index) {

        totalSum += bundleTx.value;

        // currentIndex has to be equal to the index in the array
        if (bundleTx.currentIndex !== index) return false;

        // Get the transaction trytes
        var thisTxTrytes = transactionTrytes(bundleTx);

        // Absorb bundle hash + value + timestamp + lastIndex + currentIndex trytes.
        var thisTxTrits = Converter.trits(thisTxTrytes.slice(2187, 2187 + 162));
        kerl.absorb(thisTxTrits, 0, thisTxTrits.length);

        // Check if input transaction
        if (bundleTx.value < 0) {
            var thisAddress = bundleTx.address;

            var newSignatureToValidate = {
                'address': thisAddress,
                'signatureFragments': Array(bundleTx.signatureMessageFragment)
            }

            // Find the subsequent txs with the remaining signature fragment
            for (var i = index; i < bundle.length - 1; i++) {
                var newBundleTx = bundle[i + 1];

                // Check if new tx is part of the signature fragment
                if (newBundleTx.address === thisAddress && newBundleTx.value === 0) {
                    newSignatureToValidate.signatureFragments.push(newBundleTx.signatureMessageFragment);
                }
            }

            signaturesToValidate.push(newSignatureToValidate);
        }
    });

    // Check for total sum, if not equal 0 return error
    if (totalSum !== 0) return false;

    // get the bundle hash from the bundle transactions
    kerl.squeeze(bundleFromTxs, 0, Curl.HASH_LENGTH);
    var bundleFromTxs = Converter.trytes(bundleFromTxs);

    // Check if bundle hash is the same as returned by tx object
    if (bundleFromTxs !== bundleHash) return false;

    // Last tx in the bundle should have currentIndex === lastIndex
    if (bundle[bundle.length - 1].currentIndex !== bundle[bundle.length - 1].lastIndex) return false;

    // Validate the signatures
    for (var i = 0; i < signaturesToValidate.length; i++) {

        var isValidSignature = Signing.validateSignatures(signaturesToValidate[i].address, signaturesToValidate[i].signatureFragments, bundleHash);

        if (!isValidSignature) return false;
    }

    return true;
}

module.exports = {
    convertUnits        : convertUnits,
    addChecksum         : addChecksum,
    noChecksum          : noChecksum,
    isValidChecksum     : isValidChecksum,
    transactionObject   : transactionObject,
    transactionTrytes   : transactionTrytes,
    categorizeTransfers : categorizeTransfers,
    toTrytes            : ascii.toTrytes,
    fromTrytes          : ascii.fromTrytes,
    extractJson         : extractJson,
    validateSignatures  : validateSignatures,
    isBundle            : isBundle,
    inputValidator      : inputValidator
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 25 */
/***/ (function(module, exports) {


module.exports = {

    invalidTrytes: function() {
        return new Error("Invalid Trytes provided");
    },
    invalidSeed: function() {
        return new Error("Invalid Seed provided");
    },
    invalidIndex: function() {
        return new Error("Invalid Index option provided");
    }, 
    invalidSecurity: function() {
        return new Error("Invalid Security option provided");
    },
    invalidChecksum: function(address) {
        return new Error("Invalid Checksum supplied for address: " + address)
    },
    invalidAttachedTrytes: function() {
        return new Error("Invalid attached Trytes provided");
    },
    invalidTransfers: function() {
        return new Error("Invalid transfers object");
    },
    invalidKey: function() {
        return new Error("You have provided an invalid key value");
    },
    invalidTrunkOrBranch: function(hash) {
        return new Error("You have provided an invalid hash as a trunk/branch: " + hash);
    },
    invalidUri: function(uri) {
        return new Error("You have provided an invalid URI for your Neighbor: " + uri)
    },
    notInt: function() {
        return new Error("One of your inputs is not an integer");
    },
    invalidInputs: function() {
        return new Error("Invalid inputs provided");
    }
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  curl: __webpack_require__(4),
  kerl: __webpack_require__(7),
  bundle: __webpack_require__(14),
  converter: __webpack_require__(2),
  signing: __webpack_require__(15),
  hmac: __webpack_require__(62),
  multisig: __webpack_require__(63),
  utils: __webpack_require__(23),
  valid: __webpack_require__(22)
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(13));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    var Wih = Wi.high = M[offset + i * 2]     | 0;
	                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    var Wil = gamma0l + Wi7l;
	                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    var Wil = Wil + gamma1l;
	                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    var Wil = Wil + Wi16l;
	                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	return CryptoJS.SHA512;

}));

/***/ }),
/* 30 */
/***/ (function(module, exports) {

/* copyright Paul Handy, 2017 */

function sum( a, b ) {

    var s = a + b;

    switch( s ) {

        case 2: return -1;
        case -2: return 1;
        default: return s;

    }
}

function cons( a, b ) {

    if( a === b ) {

        return a;

    }

    return 0;
}

function any( a, b ) {

    var s = a + b;

    if ( s > 0 ) {

        return 1;

    } else if ( s < 0 ) {

        return -1;

    }

    return 0;
}

function full_add( a, b, c ) {

    var s_a     =   sum( a, b );
    var c_a     =   cons( a, b );
    var c_b     =   cons( s_a, c );
    var c_out   =   any( c_a, c_b );
    var s_out   =   sum( s_a, c );

    return [ s_out, c_out ];

}

function add( a, b ) {

    var out = new Array( Math.max( a.length, b.length ) );
    var carry = 0;
    var a_i, b_i;

    for( var i = 0; i < out.length; i++ ) {

        a_i = i < a.length ? a[ i ] : 0;
        b_i = i < b.length ? b[ i ] : 0;
        var f_a = full_add( a_i, b_i, carry );
        out[ i ] = f_a[ 0 ];
        carry = f_a[ 1 ];

    }

    return out;

}

module.exports = add;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

//
//  Conversion of ascii encoded bytes to trytes.
//  Input is a string (can be stringified JSON object), return value is Trytes
//
//  How the conversion works:
//    2 Trytes === 1 Byte
//    There are a total of 27 different tryte values: 9ABCDEFGHIJKLMNOPQRSTUVWXYZ
//
//    1. We get the decimal value of an individual ASCII character
//    2. From the decimal value, we then derive the two tryte values by basically calculating the tryte equivalent (e.g. 100 === 19 + 3 * 27)
//      a. The first tryte value is the decimal value modulo 27 (27 trytes)
//      b. The second value is the remainder (decimal value - first value), divided by 27
//    3. The two values returned from Step 2. are then input as indices into the available values list ('9ABCDEFGHIJKLMNOPQRSTUVWXYZ') to get the correct tryte value
//
//   EXAMPLES
//      Lets say we want to convert the ASCII character "Z".
//        1. 'Z' has a decimal value of 90.
//        2. 90 can be represented as 9 + 3 * 27. To make it simpler:
//           a. First value: 90 modulo 27 is 9. This is now our first value
//           b. Second value: (90 - 9) / 27 is 3. This is our second value.
//        3. Our two values are now 9 and 3. To get the tryte value now we simply insert it as indices into '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//           a. The first tryte value is '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'[9] === "I"
//           b. The second tryte value is '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'[3] === "C"
//        Our tryte pair is "IC"
//
//      RESULT:
//        The ASCII char "Z" is represented as "IC" in trytes.
//
function toTrytes(input) {

    // If input is not a string, return null
    if ( typeof input !== 'string' ) return null

    var TRYTE_VALUES = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var trytes = "";

    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        var asciiValue = char.charCodeAt(0);

        // If not recognizable ASCII character, return null
        if (asciiValue > 255) {
            //asciiValue = 32
            return null;
        }

        var firstValue = asciiValue % 27;
        var secondValue = (asciiValue - firstValue) / 27;

        var trytesValue = TRYTE_VALUES[firstValue] + TRYTE_VALUES[secondValue];

        trytes += trytesValue;
    }

    return trytes;
}


//
//  Trytes to bytes
//  Reverse operation from the byteToTrytes function in send.js
//  2 Trytes == 1 Byte
//  We assume that the trytes are a JSON encoded object thus for our encoding:
//    First character = {
//    Last character = }
//    Everything after that is 9's padding
//
function fromTrytes(inputTrytes) {

    // If input is not a string, return null
    if ( typeof inputTrytes !== 'string' ) return null

    // If input length is odd, return null
    if ( inputTrytes.length % 2 ) return null

    var TRYTE_VALUES = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var outputString = "";

    for (var i = 0; i < inputTrytes.length; i += 2) {
        // get a trytes pair
        var trytes = inputTrytes[i] + inputTrytes[i + 1];

        var firstValue = TRYTE_VALUES.indexOf(trytes[0]);
        var secondValue = TRYTE_VALUES.indexOf(trytes[1]);

        var decimalValue = firstValue + secondValue * 27;

        var character = String.fromCharCode(decimalValue);

        outputString += character;
    }

    return outputString;
}

module.exports = {
    toTrytes: toTrytes,
    fromTrytes: fromTrytes
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var XMLHttpRequest = __webpack_require__(68).XMLHttpRequest;
var errors = __webpack_require__(73);


function makeRequest(provider, token) {

    this.provider = provider || "http://localhost:14265";
    this.token = token;
}

/**
*   Change the HTTP provider
*
*   @method setProvider
*   @param {String} provider
**/
makeRequest.prototype.setProvider = function(provider) {

    this.provider = provider || "http://localhost:14265";
}

/**
*   creates an XMLHttpRequest Object
*
*   @method open
*   @param {object} command
*   @returns {object} request
**/
makeRequest.prototype.open = function() {

    var request = new XMLHttpRequest();
    request.open('POST', this.provider, true);
    //request.setRequestHeader('Content-Type','application/json');

    if (this.token) {
        //request.withCredentials = true;
        request.setRequestHeader('Authorization', 'token ' + this.token);
    }

    return request;
}

/**
*   sends an http request to a specified host
*
*   @method send
*   @param {object} command
*   @param {function} callback
**/
makeRequest.prototype.send = function(command, callback) {

    var self = this;
    var request = this.open();

    request.onreadystatechange = function() {

        if (request.readyState === 4) {

            var result = request.responseText;
            // Prepare the result
            return self.prepareResult(result, command.command, callback);
        }
    }

    try {

        request.send(JSON.stringify(command));
    } catch(error) {

        return callback(errors.invalidResponse(error));
    }
}

/**
*   sends an http request to a specified host
*
*   @method sandboxSend
*   @param {object} command
*   @param {function} callback
**/
makeRequest.prototype.sandboxSend = function(job, callback) {

    // Check every 15 seconds if the job finished or not
    // If failed, return error

    var newInterval = setInterval(function() {

        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {

            if (request.readyState === 4) {

                var result;

                // Prepare the result, check that it's JSON
                try {

                    result = JSON.parse(request.responseText);
                } catch(e) {

                    return callback(errors.invalidResponse(e));
                }

                if (result.status === "FINISHED") {

                    var attachedTrytes = result.attachToTangleResponse.trytes;
                    clearInterval(newInterval);

                    return callback(null, attachedTrytes);

                }
                else if (result.status === "FAILED") {

                    clearInterval(newInterval);
                    return callback(new Error("Sandbox transaction processing failed. Please retry."))
                }
            }
        }

        try {
            request.open('GET', job, true);
            request.send(JSON.stringify());
        } catch(error) {

            return callback(new Error("No connection to Sandbox, failed with job: ", job));
        }

    }, 5000)

}

/**
*   prepares the returned values from the request
*
*   @method prepareResult
*   @param {string} result
*   @param {function} callback
**/
makeRequest.prototype.prepareResult = function(result, requestCommand, callback) {

    // Result map of the commands we want to format
    var resultMap = {
        'getNeighbors'          :   'neighbors',
        'addNeighbors'          :   'addedNeighbors',
        'removeNeighbors'       :   'removedNeighbors',
        'getTips'               :   'hashes',
        'findTransactions'      :   'hashes',
        'getTrytes'             :   'trytes',
        'getInclusionStates'    :   'states',
        'attachToTangle'        :   'trytes'
    }

    var error;

    try {
        result = JSON.parse(result);
    } catch(e) {
        error = errors.invalidResponse(result);
        result = null;
    }

    //
    //    TODO: PREPARE ERROR MESSAGES BETTER
    //
    if (!error && result.error) {
        error = errors.requestError(result.error);
        result = null;
    }

    if (!error && result.exception) {
        error = errors.requestError(result.exception);
        result = null;
    }

    // If correct result and we want to prepare the result
    if (result && resultMap.hasOwnProperty(requestCommand)) {

        // If the response is from the sandbox, don't prepare the result
        if (requestCommand === 'attachToTangle' && result.hasOwnProperty('id')) {

            result = result;
        } else {

            result = result[resultMap[requestCommand]];
        }
    }

    return callback(error, result);
}


module.exports = makeRequest;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/* copyright Paul Handy, 2017 */

function sum( a, b ) {

    var s = a + b;

    switch( s ) {

        case 2: return -1;
        case -2: return 1;
        default: return s;

    }
}

function cons( a, b ) {

    if( a === b ) {

        return a;

    }

    return 0;
}

function any( a, b ) {

    var s = a + b;

    if ( s > 0 ) {

        return 1;

    } else if ( s < 0 ) {

        return -1;

    }

    return 0;
}

function full_add( a, b, c ) {

    var s_a     =   sum( a, b );
    var c_a     =   cons( a, b );
    var c_b     =   cons( s_a, c );
    var c_out   =   any( c_a, c_b );
    var s_out   =   sum( s_a, c );

    return [ s_out, c_out ];

}

function add( a, b ) {

    var out = new Array( Math.max( a.length, b.length ) );
    var carry = 0;
    var a_i, b_i;

    for( var i = 0; i < out.length; i++ ) {

        a_i = i < a.length ? a[ i ] : 0;
        b_i = i < b.length ? b[ i ] : 0;
        var f_a = full_add( a_i, b_i, carry );
        out[ i ] = f_a[ 0 ];
        carry = f_a[ 1 ];

    }

    return out;

}

module.exports = add;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

//
//  Conversion of ascii encoded bytes to trytes.
//  Input is a string (can be stringified JSON object), return value is Trytes
//
//  How the conversion works:
//    2 Trytes === 1 Byte
//    There are a total of 27 different tryte values: 9ABCDEFGHIJKLMNOPQRSTUVWXYZ
//
//    1. We get the decimal value of an individual ASCII character
//    2. From the decimal value, we then derive the two tryte values by basically calculating the tryte equivalent (e.g. 100 === 19 + 3 * 27)
//      a. The first tryte value is the decimal value modulo 27 (27 trytes)
//      b. The second value is the remainder (decimal value - first value), divided by 27
//    3. The two values returned from Step 2. are then input as indices into the available values list ('9ABCDEFGHIJKLMNOPQRSTUVWXYZ') to get the correct tryte value
//
//   EXAMPLES
//      Lets say we want to convert the ASCII character "Z".
//        1. 'Z' has a decimal value of 90.
//        2. 90 can be represented as 9 + 3 * 27. To make it simpler:
//           a. First value: 90 modulo 27 is 9. This is now our first value
//           b. Second value: (90 - 9) / 27 is 3. This is our second value.
//        3. Our two values are now 9 and 3. To get the tryte value now we simply insert it as indices into '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//           a. The first tryte value is '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'[9] === "I"
//           b. The second tryte value is '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'[3] === "C"
//        Our tryte pair is "IC"
//
//      RESULT:
//        The ASCII char "Z" is represented as "IC" in trytes.
//
function toTrytes(input) {

    // If input is not a string, return null
    if ( typeof input !== 'string' ) return null

    var TRYTE_VALUES = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var trytes = "";

    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        var asciiValue = char.charCodeAt(0);

        // If not recognizable ASCII character, return null
        if (asciiValue > 255) {
            //asciiValue = 32
            return null;
        }

        var firstValue = asciiValue % 27;
        var secondValue = (asciiValue - firstValue) / 27;

        var trytesValue = TRYTE_VALUES[firstValue] + TRYTE_VALUES[secondValue];

        trytes += trytesValue;
    }

    return trytes;
}


//
//  Trytes to bytes
//  Reverse operation from the byteToTrytes function in send.js
//  2 Trytes == 1 Byte
//  We assume that the trytes are a JSON encoded object thus for our encoding:
//    First character = {
//    Last character = }
//    Everything after that is 9's padding
//
function fromTrytes(inputTrytes) {

    // If input is not a string, return null
    if ( typeof inputTrytes !== 'string' ) return null

    // If input length is odd, return null
    if ( inputTrytes.length % 2 ) return null

    var TRYTE_VALUES = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var outputString = "";

    for (var i = 0; i < inputTrytes.length; i += 2) {
        // get a trytes pair
        var trytes = inputTrytes[i] + inputTrytes[i + 1];

        var firstValue = TRYTE_VALUES.indexOf(trytes[0]);
        var secondValue = TRYTE_VALUES.indexOf(trytes[1]);

        var decimalValue = firstValue + secondValue * 27;

        var character = String.fromCharCode(decimalValue);

        outputString += character;
    }

    return outputString;
}

module.exports = {
    toTrytes: toTrytes,
    fromTrytes: fromTrytes
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/// Deps
const crypto = __webpack_require__(26);
const Crypto = __webpack_require__(27);
const Encryption = __webpack_require__(66);
const IOTA = __webpack_require__(67);
const pify = __webpack_require__(85);

/// MAM Interface
var MAM = __webpack_require__(86);
// Setup Provider
let iota = new IOTA({ provider: `http://p101.iotaledger.net:14700` });

const init = (seed = keyGen(81), security = 2) => {
  // Setup Personal Channel
  var channelSeed = Encryption.hash(Crypto.converter.trits(seed.slice()));
  var channelKey = Crypto.converter.trytes(channelSeed.slice());
  var channel = {
    side_key: null,
    next_root: null,
    security: security,
    start: 0,
    count: 1,
    next_count: 1,
    index: 0
    // Setup Subs
  };const subscribed = [];
  return {
    subscribed: subscribed,
    channel: channel,
    seed: seed
  };
};

const subscribe = (state, channelRoot, channelKey = null) => {
  state.subscribed[channelRoot] = {
    channelKey: channelKey,
    timeout: 5000,
    root: channelRoot,
    next_root: null,
    active: true
  };
  return state;
};

const create = (state, message) => {
  var channel = state.channel;
  let mam = MAM.createMessage(state.seed, message, null, channel);
  // If the tree is exhausted.
  if (channel.index == channel.count - 1) {
    // change start to begining of next tree.
    channel.start = channel.next_count + channel.start;
    // Reset index.
    channel.index = 0;
  } else {
    //Else step the tree.
    channel.index++;
  }
  channel.next_root = mam.next_root;
  state.channel = channel;
  return {
    state,
    payload: mam.payload,
    root: mam.root
  };
};

// Current root
const getRoot = state => {
  return MAM.getRoot(state.seed, state.channel);
};
const decode = (payload, side_key, root) => {
  let mam = MAM.decodeMessage(payload, side_key, root);
  return mam;
};

const fetch = async address => {
  let consumedAll = false;
  let messages = [];
  let nextRoot = address;

  let transactionCount = 0;
  let messageCount = 0;

  while (!consumedAll) {
    console.log("Looking up data at: ", nextRoot);
    let hashes = await pify(iota.api.findTransactions.bind(iota.api))({
      addresses: [nextRoot]
    });

    if (hashes.length == 0) {
      consumedAll = true;
      break;
    }

    transactionCount += hashes.length;
    messageCount++;

    let messagesGen = await txHashesToMessages(hashes);
    for (let message of messagesGen) {
      try {
        var payload = message;
        let unmasked = decode(payload, null, nextRoot);
        messages.push(unmasked.payload);
        nextRoot = unmasked.next_root;
      } catch (e) {
        console.error("failed to parse: ", e);
      }
    }
  }

  console.log("Total transaction count: ", transactionCount);

  return {
    nextRoot: nextRoot,
    messages: messages
  };
};

const listen = (channel, callback) => {
  var root = channel.root;
  return setTimeout(async () => {
    console.log("Fetching");
    var resp = await fetch(root);
    root = resp.nextRoot;
    callback(resp.messages);
  }, channel.timeout);
};

// Sync requests
const txHashesToMessages = async hashes => {
  let bundles = {};

  let processTx = txo => {
    let bundle = txo.bundle;
    let msg = txo.signatureMessageFragment;
    let idx = txo.currentIndex;
    let maxIdx = txo.lastIndex;

    if (bundle in bundles) {
      bundles[bundle].push([idx, msg]);
    } else {
      bundles[bundle] = [[idx, msg]];
    }

    if (bundles[bundle].length == maxIdx + 1) {
      let l = bundles[bundle];
      delete bundles[bundle];
      return l.sort((a, b) => b[0] < a[0]).reduce((acc, n) => acc + n[1], "");
    }
  };

  let objs = await pify(iota.api.getTransactionsObjects.bind(iota.api))(hashes);
  return objs.map(result => processTx(result)).filter(item => item !== undefined);
};

const attach = async (trytes, root) => {
  var transfers = [{
    address: root,
    value: 0,
    message: trytes
  }];
  // if (isClient) curl.overrideAttachToTangle(iota)
  try {
    let objs = await pify(iota.api.sendTransfer.bind(iota.api))(keyGen(81), 5, 9, transfers);
    console.log("Message attached");
    return objs;
  } catch (e) {
    return console.error("failed to attach message:", "\n", e);
  }
};

const isClient = typeof window !== "undefined" && window.document && window.document.createElement;

const keyGen = length => {
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9";
  var values = crypto.randomBytes(length);
  var result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = charset[values[i] % charset.length];
  }
  return result.join("");
};

module.exports = {
  init: init,
  subscribe: subscribe,
  create: create,
  decode: decode,
  fetch: fetch,
  attach: attach,
  listen: listen,
  getRoot: getRoot,
  iota: iota
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(28));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha256"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	return CryptoJS.SHA224;

}));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(13), __webpack_require__(29));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core", "./sha512"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	return CryptoJS.SHA384;

}));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(13));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	return CryptoJS.SHA3;

}));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	return CryptoJS.RIPEMD160;

}));

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(20), __webpack_require__(21));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha1", "./hmac"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA1 = C_algo.SHA1;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA1,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.PBKDF2;

}));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            var keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            var keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	            i--;
	        }
	        data.sigBytes = i + 1;
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(8), __webpack_require__(9), __webpack_require__(6), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(8), __webpack_require__(9), __webpack_require__(6), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
	            this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
	            this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	return CryptoJS.TripleDES;

}));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(8), __webpack_require__(9), __webpack_require__(6), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	return CryptoJS.RC4;

}));

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(8), __webpack_require__(9), __webpack_require__(6), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	return CryptoJS.Rabbit;

}));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(8), __webpack_require__(9), __webpack_require__(6), __webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	return CryptoJS.RabbitLegacy;

}));

/***/ }),
/* 60 */
/***/ (function(module, exports) {

var INT_LENGTH = 12;
var BYTE_LENGTH = 48;
var RADIX = 3;
/// hex representation of (3^242)/2
var HALF_3 = new Uint32Array([
    0xa5ce8964,
    0x9f007669,
    0x1484504f,
    0x3ade00d9,
    0x0c24486e,
    0x50979d57,
    0x79a4c702,
    0x48bbae36,
    0xa9f6808b,
    0xaa06a805,
    0xa87fabdf,
    0x5e69ebef
]);

var ta_reverse = function(array) {
    if (array.reverse !== undefined) {
        array.reverse();
        return;
    }

    var i = 0,
        n = array.length,
        middle = Math.floor(n / 2),
        temp = null;

    for (; i < middle; i += 1) {
        temp = array[i];
        array[i] = array[n - 1 - i];
        array[n - 1 - i] = temp;
    }
};

/// negates the (unsigned) input array
var bigint_not = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = (~arr[i]) >>> 0;
    }
};

/// rshift that works with up to 53
/// JS's shift operators only work on 32 bit integers
/// ours is up to 33 or 34 bits though, so
/// we need to implement shifting manually
var rshift = function(number, shift) {
    return (number / Math.pow(2, shift)) >>> 0;
};

/// swaps endianness
var swap32 = function(val) {
    return ((val & 0xFF) << 24) |
        ((val & 0xFF00) << 8) |
        ((val >> 8) & 0xFF00) |
        ((val >> 24) & 0xFF);
}

/// add with carry
var full_add = function(lh, rh, carry) {
    var v = lh + rh;
    var l = (rshift(v, 32)) & 0xFFFFFFFF;
    var r = (v & 0xFFFFFFFF) >>> 0;
    var carry1 = l != 0;

    if (carry) {
        v = r + 1;
    }
    l = (rshift(v, 32)) & 0xFFFFFFFF;
    r = (v & 0xFFFFFFFF) >>> 0;
    var carry2 = l != 0;

    return [r, carry1 || carry2];
};

/// subtracts rh from base
var bigint_sub = function(base, rh) {
    var noborrow = true;

    for (var i = 0; i < base.length; i++) {
        var vc = full_add(base[i], (~rh[i] >>> 0), noborrow);
        base[i] = vc[0];
        noborrow = vc[1];
    }

    if (!noborrow) {
        throw "noborrow";
    }
};

/// compares two (unsigned) big integers
var bigint_cmp = function(lh, rh) {
    for (var i = lh.length; i-- > 0;) {
        var a = lh[i] >>> 0;
        var b = rh[i] >>> 0;
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    }
    return 0;
};

/// adds rh to base in place
var bigint_add = function(base, rh) {
    var carry = false;
    for (var i = 0; i < base.length; i++) {
        var vc = full_add(base[i], rh[i], carry);
        base[i] = vc[0];
        carry = vc[1];
    }
};

/// adds a small (i.e. <32bit) number to base
var bigint_add_small = function(base, other) {
    var vc = full_add(base[0], other, false);
    base[0] = vc[0];
    var carry = vc[1];

    var i = 1;
    while (carry && i < base.length) {
        var vc = full_add(base[i], 0, carry);
        base[i] = vc[0];
        carry = vc[1];
        i += 1;
    }

    return i;
};

/// converts the given byte array to trits
var words_to_trits = function(words) {
    if (words.length != INT_LENGTH) {
        throw "Invalid words length";
    }

    var trits = new Int8Array(243);
    var base = new Uint32Array(words);

    ta_reverse(base);

    var flip_trits = false;
    if (base[INT_LENGTH - 1] >> 31 == 0) {
        // positive two's complement number.
        // add HALF_3 to move it to the right place.
        bigint_add(base, HALF_3);
    } else {
        // negative number.
        bigint_not(base);
        if (bigint_cmp(base, HALF_3) > 0) {
            bigint_sub(base, HALF_3);
            flip_trits = true;
        } else {
            /// bigint is between (unsigned) HALF_3 and (2**384 - 3**242/2).
            bigint_add_small(base, 1);
            var tmp = HALF_3.slice(0);
            bigint_sub(tmp, base);
            base = tmp;
        }
    }


    var rem = 0;

    for (var i = 0; i < 242; i++) {
        rem = 0;
        for (var j = INT_LENGTH - 1; j >= 0; j--) {
            var lhs = (rem != 0 ? rem * 0xFFFFFFFF + rem : 0) + base[j];
            var rhs = RADIX;

            var q = (lhs / rhs) >>> 0;
            var r = (lhs % rhs) >>> 0;

            base[j] = q;
            rem = r;
        }

        trits[i] = rem - 1;
    }

    if (flip_trits) {
        for (var i = 0; i < trits.length; i++) {
            trits[i] = -trits[i];
        }
    }

    return trits;
}

var is_null = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            return false;
            break;
        }
    }
    return true;
}

var trits_to_words = function(trits) {
    if (trits.length != 243) {
        throw "Invalid trits length";
    }

    var base = new Uint32Array(INT_LENGTH);

    if (trits.slice(0, 242).every(function(a) {
            a == -1
        })) {
        base = HALF_3.slice(0);
        bigint_not(base);
        bigint_add_small(base, 1);
    } else {
        var size = 1;
        for (var i = trits.length - 1; i-- > 0;) {
            var trit = trits[i] + 1;

            //multiply by radix
            {
                var sz = size;
                var carry = 0;

                for (var j = 0; j < sz; j++) {
                    var v = base[j] * RADIX + carry;
                    carry = rshift(v, 32);
                    base[j] = (v & 0xFFFFFFFF) >>> 0;
                }

                if (carry > 0) {
                    base[sz] = carry;
                    size += 1;
                }
            }

            //addition
            {
                var sz = bigint_add_small(base, trit);
                if (sz > size) {
                    size = sz;
                }
            }
        }

        if (!is_null(base)) {
            if (bigint_cmp(HALF_3, base) <= 0) {
                // base >= HALF_3
                // just do base - HALF_3
                bigint_sub(base, HALF_3);
            } else {
                // base < HALF_3
                // so we need to transform it to a two's complement representation
                // of (base - HALF_3).
                // as we don't have a wrapping (-), we need to use some bit magic
                var tmp = HALF_3.slice(0);
                bigint_sub(tmp, base);
                bigint_not(tmp);
                bigint_add_small(tmp, 1);
                base = tmp;
            }
        }
    }

    ta_reverse(base);

    for (var i = 0; i < base.length; i++) {
        base[i] = swap32(base[i]);
    }

    return base;
};

module.exports = {
    trits_to_words: trits_to_words,
    words_to_trits: words_to_trits
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var Curl = __webpack_require__(4);
var Converter = __webpack_require__(2);
var Bundle = __webpack_require__(14);
var add = __webpack_require__(30);

/**
*           Signing related functions
*
**/
var key = function(seed, index, length) {

    while ((seed.length % 243) !== 0) {
      seed.push(0);
    }

    var indexTrits = Converter.fromValue( index );
    var subseed = add( seed.slice( ), indexTrits );

    var curl = new Curl( );

    curl.initialize( );
    curl.absorb(subseed, 0, subseed.length);
    curl.squeeze(subseed, 0, subseed.length);

    curl.reset( );
    curl.absorb(subseed, 0, subseed.length);

    var key = [], offset = 0, buffer = [];

    while (length-- > 0) {

        for (var i = 0; i < 27; i++) {

            curl.squeeze(buffer, 0, subseed.length);
            for (var j = 0; j < 243; j++) {

                key[offset++] = buffer[j];
            }
        }
    }
    return key;
}

/**
*
*
**/
var digests = function(key) {

    var digests = [], buffer = [];

    for (var i = 0; i < Math.floor(key.length / 6561); i++) {

        var keyFragment = key.slice(i * 6561, (i + 1) * 6561);

        for (var j = 0; j < 27; j++) {

            buffer = keyFragment.slice(j * 243, (j + 1) * 243);

            for (var k = 0; k < 26; k++) {

                var kCurl = new Curl();
                kCurl.initialize();
                kCurl.absorb(buffer, 0, buffer.length);
                kCurl.squeeze(buffer, 0, Curl.HASH_LENGTH);
            }

            for (var k = 0; k < 243; k++) {

                keyFragment[j * 243 + k] = buffer[k];
            }
        }

        var curl = new Curl()

        curl.initialize();
        curl.absorb(keyFragment, 0, keyFragment.length);
        curl.squeeze(buffer, 0, Curl.HASH_LENGTH);

        for (var j = 0; j < 243; j++) {

            digests[i * 243 + j] = buffer[j];
        }
    }
    return digests;
}

/**
*
*
**/
var address = function(digests) {

    var addressTrits = [];

    var curl = new Curl();

    curl.initialize();
    curl.absorb(digests, 0, digests.length);
    curl.squeeze(addressTrits, 0, Curl.HASH_LENGTH);

    return addressTrits;
}

/**
*
*
**/
var digest = function(normalizedBundleFragment, signatureFragment) {

    var buffer = []

    var curl = new Curl();

    curl.initialize();

    for (var i = 0; i< 27; i++) {
        buffer = signatureFragment.slice(i * 243, (i + 1) * 243);

        for (var j = normalizedBundleFragment[i] + 13; j-- > 0; ) {

            var jCurl = new Curl();

            jCurl.initialize();
            jCurl.absorb(buffer, 0, buffer.length);
            jCurl.squeeze(buffer, 0, Curl.HASH_LENGTH);
        }

        curl.absorb(buffer, 0, buffer.length);
    }

    curl.squeeze(buffer, 0, Curl.HASH_LENGTH);
    return buffer;
}

/**
*
*
**/
var signatureFragment = function(normalizedBundleFragment, keyFragment) {

    var signatureFragment = keyFragment.slice(), hash = [];

    var curl = new Curl();

    for (var i = 0; i < 27; i++) {

        hash = signatureFragment.slice(i * 243, (i + 1) * 243);

        for (var j = 0; j < 13 - normalizedBundleFragment[i]; j++) {

            curl.initialize();
            curl.reset();
            curl.absorb(hash, 0, hash.length);
            curl.squeeze(hash, 0, Curl.HASH_LENGTH);
        }

        for (var j = 0; j < 243; j++) {

            signatureFragment[i * 243 + j] = hash[j];
        }
    }

    return signatureFragment;
}

/**
*
*
**/
var validateSignatures = function(expectedAddress, signatureFragments, bundleHash) {

    var self = this;
    var bundle = new Bundle();

    var normalizedBundleFragments = [];
    var normalizedBundleHash = bundle.normalizedBundle(bundleHash);

    // Split hash into 3 fragments
    for (var i = 0; i < 3; i++) {
        normalizedBundleFragments[i] = normalizedBundleHash.slice(i * 27, (i + 1) * 27);
    }

    // Get digests
    var digests = [];

    for (var i = 0; i < signatureFragments.length; i++) {

        var digestBuffer = digest(normalizedBundleFragments[i % 3], Converter.trits(signatureFragments[i]));

        for (var j = 0; j < 243; j++) {

            digests[i * 243 + j] = digestBuffer[j]
        }
    }

    var address = Converter.trytes(self.address(digests));

    return (expectedAddress === address);
}


module.exports = {
    key                 : key,
    digests             : digests,
    address             : address,
    digest              : digest,
    signatureFragment   : signatureFragment,
    validateSignatures  : validateSignatures
}


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Curl = __webpack_require__(4);
var Converter = __webpack_require__(2);
var HMAC_ROUNDS = 27;

function hmac(key) {
    this._key = Converter.trits(key);
}

hmac.prototype.addHMAC = function(bundle) {
    var curl = new Curl(HMAC_ROUNDS);
    var key = this._key;
    for(var i = 0; i < bundle.bundle.length; i++) {
        if (bundle.bundle[i].value > 0) {
            var bundleHashTrits = Converter.trits(bundle.bundle[i].bundle);
            var hmac = new Int8Array(243);
            curl.initialize();
            curl.absorb(key);
            curl.absorb(bundleHashTrits);
            curl.squeeze(hmac);
            var hmacTrytes = Converter.trytes(hmac);
            bundle.bundle[i].signatureMessageFragment = hmacTrytes + bundle.bundle[i].signatureMessageFragment.substring(81, 2187);
        }
    }
}

module.exports = hmac;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var Signing         =  __webpack_require__(15);
var Converter       =  __webpack_require__(2);
var Kerl            =  __webpack_require__(7);
var Curl            =  __webpack_require__(4);
var Bundle          =  __webpack_require__(14);
var Utils           =  __webpack_require__(23);
var inputValidator  =  __webpack_require__(16);
var errors          =  __webpack_require__(22);
var Address         =  __webpack_require__(65);

function Multisig(provider) {

    this._makeRequest = provider;
}


/**
*   Gets the key value of a seed
*
*   @method getKey
*   @param {string} seed
*   @param {int} index
*   @param {int} security Security level to be used for the private key / address. Can be 1, 2 or 3
*   @returns {string} digest trytes
**/
Multisig.getKey = function(seed, index, security) {

    return Converter.trytes(Signing.key(Converter.trits(seed), index, security));
}

/**
*   Gets the digest value of a seed
*
*   @method getDigest
*   @param {string} seed
*   @param {int} index
*   @param {int} security Security level to be used for the private key / address. Can be 1, 2 or 3
*   @returns {string} digest trytes
**/
Multisig.getDigest = function(seed, index, security) {

    var key = Signing.key(Converter.trits(seed), index, security);
    return Converter.trytes(Signing.digests(key));
}

/**
*   Multisig address constructor
*/
Multisig.address = Address;

/**
*   Validates  a generated multisig address
*
*   @method validateAddress
*   @param {string} multisigAddress
*   @param {array} digests
*   @returns {bool}
**/
Multisig.validateAddress = function(multisigAddress, digests) {

    var kerl = new Kerl();

    // initialize Kerl with the provided state
    kerl.initialize();

    // Absorb all key digests
    digests.forEach(function(keyDigest) {
        var trits = Converter.trits(keyDigest);
        kerl.absorb(Converter.trits(keyDigest), 0, trits.length);
    })

    // Squeeze address trits
    var addressTrits = [];
    kerl.squeeze(addressTrits, 0, Curl.HASH_LENGTH);

    // Convert trits into trytes and return the address
    return Converter.trytes(addressTrits) === multisigAddress;
}


/**
*   Prepares transfer by generating the bundle with the corresponding cosigner transactions
*   Does not contain signatures
*
*   @method initiateTransfer
*   @param {object} input the input addresses as well as the securitySum, and balance
*                   where `address` is the input multisig address
*                   and `securitySum` is the sum of security levels used by all co-signers
*                   and `balance` is the expected balance, if you wish to override getBalances
*   @param {string} remainderAddress Has to be generated by the cosigners before initiating the transfer, can be null if fully spent
*   @param {object} transfers
*   @param {function} callback
*   @returns {array} Array of transaction objects
**/
Multisig.initiateTransfer = function(input, remainderAddress, transfers, callback) {

    var self = this;

    // If message or tag is not supplied, provide it
    // Also remove the checksum of the address if it's there
    transfers.forEach(function(thisTransfer) {
        thisTransfer.message = thisTransfer.message ? thisTransfer.message : '';
        thisTransfer.tag = thisTransfer.tag ? thisTransfer.tag : '';
        thisTransfer.address = Utils.noChecksum(thisTransfer.address);
    })

    // Input validation of transfers object
    if (!inputValidator.isTransfersArray(transfers)) {
        return callback(errors.invalidTransfers());
    }

    // check if int
    if (!inputValidator.isValue(input.securitySum)) {
        return callback(errors.invalidInputs());
    }

    // validate input address
    if (!inputValidator.isAddress(input.address)) {
        return callback(errors.invalidTrytes());
    }

    // validate remainder address
    if (remainderAddress && !inputValidator.isAddress(remainderAddress)) {
        return callback(errors.invalidTrytes());
    }

    // Create a new bundle
    var bundle = new Bundle();

    var totalValue = 0;
    var signatureFragments = [];
    var tag;

    //
    //  Iterate over all transfers, get totalValue
    //  and prepare the signatureFragments, message and tag
    //
    for (var i = 0; i < transfers.length; i++) {

        var signatureMessageLength = 1;

        // If message longer than 2187 trytes, increase signatureMessageLength (add multiple transactions)
        if (transfers[i].message.length > 2187) {

            // Get total length, message / maxLength (2187 trytes)
            signatureMessageLength += Math.floor(transfers[i].message.length / 2187);

            var msgCopy = transfers[i].message;

            // While there is still a message, copy it
            while (msgCopy) {

                var fragment = msgCopy.slice(0, 2187);
                msgCopy = msgCopy.slice(2187, msgCopy.length);

                // Pad remainder of fragment
                for (var j = 0; fragment.length < 2187; j++) {
                    fragment += '9';
                }

                signatureFragments.push(fragment);
            }

        } else {
            // Else, get single fragment with 2187 of 9's trytes
            var fragment = '';

            if (transfers[i].message) {
                fragment = transfers[i].message.slice(0, 2187)
            }

            for (var j = 0; fragment.length < 2187; j++) {
                fragment += '9';
            }

            signatureFragments.push(fragment);
        }

        // get current timestamp in seconds
        var timestamp = Math.floor(Date.now() / 1000);

        // If no tag defined, get 27 tryte tag.
        tag = transfers[i].tag ? transfers[i].tag : '999999999999999999999999999';

        // Pad for required 27 tryte length
        for (var j = 0; tag.length < 27; j++) {
            tag += '9';
        }

        // Add first entries to the bundle
        // Slice the address in case the user provided a checksummed one
        bundle.addEntry(signatureMessageLength, transfers[i].address.slice(0, 81), transfers[i].value, tag, timestamp);

        // Sum up total value
        totalValue += parseInt(transfers[i].value);
    }

    // Get inputs if we are sending tokens
    if (totalValue) {

        function createBundle(totalBalance, callback) {
            if (totalBalance > 0) {

                var toSubtract = 0 - totalBalance;
                var timestamp = Math.floor(Date.now() / 1000);

                // Add input as bundle entry
                // Only a single entry, signatures will be added later
                bundle.addEntry(input.securitySum, input.address, toSubtract, tag, timestamp);
            }

            if (totalValue > totalBalance) {
                return callback(new Error("Not enough balance."));
            }


            // If there is a remainder value
            // Add extra output to send remaining funds to
            if (totalBalance > totalValue) {

                var remainder = totalBalance - totalValue;

                // Remainder bundle entry if necessary
                if (!remainderAddress) {
                    return callback(new Error("No remainder address defined"));
                }

                bundle.addEntry(1, remainderAddress, remainder, tag, timestamp);
            }

            bundle.finalize();
            bundle.addTrytes(signatureFragments);

            return callback(null, bundle.bundle);
        };

        if (input.balance) {
          createBundle(input.balance, callback);
        } else {
          var command = {
              'command': 'getBalances',
              'addresses': new Array(input.address),
              'threshold': 100
          }
          self._makeRequest.send(command, function(e, balances) {
              if (e) return callback(e);
              createBundle(parseInt(balances.balances[0]), callback);
          });
        }

    } else {

        return callback(new Error("Invalid value transfer: the transfer does not require a signature."));
    }

}


/**
*   Adds the cosigner signatures to the corresponding bundle transaction
*
*   @method addSignature
*   @param {array} bundleToSign
*   @param {int} cosignerIndex
*   @param {string} inputAddress
*   @param {string} key
*   @param {function} callback
*   @returns {array} trytes Returns bundle trytes
**/
Multisig.addSignature = function(bundleToSign, inputAddress, key, callback) {

    var bundle = new Bundle();
    bundle.bundle = bundleToSign;

    // Get the security used for the private key
    // 1 security level = 2187 trytes
    var security = (key.length / 2187);

    // convert private key trytes into trits
    var key = Converter.trits(key);


    // First get the total number of already signed transactions
    // use that for the bundle hash calculation as well as knowing
    // where to add the signature
    var numSignedTxs = 0;

    for (var i = 0; i < bundle.bundle.length; i++) {

        if (bundle.bundle[i].address === inputAddress) {

            // If transaction is already signed, increase counter
            if (!inputValidator.isNinesTrytes(bundle.bundle[i].signatureMessageFragment)) {

                numSignedTxs++;
            }
            // Else sign the transactionse
            else {

                var bundleHash = bundle.bundle[i].bundle;

                //  First 6561 trits for the firstFragment
                var firstFragment = key.slice(0, 6561);

                //  Get the normalized bundle hash
                var normalizedBundleHash = bundle.normalizedBundle(bundleHash);
                var normalizedBundleFragments = [];

                // Split hash into 3 fragments
                for (var k = 0; k < 3; k++) {
                    normalizedBundleFragments[k] = normalizedBundleHash.slice(k * 27, (k + 1) * 27);
                }

                //  First bundle fragment uses 27 trytes
                var firstBundleFragment = normalizedBundleFragments[numSignedTxs % 3];

                //  Calculate the new signatureFragment with the first bundle fragment
                var firstSignedFragment = Signing.signatureFragment(firstBundleFragment, firstFragment);

                //  Convert signature to trytes and assign the new signatureFragment
                bundle.bundle[i].signatureMessageFragment = Converter.trytes(firstSignedFragment);

                for (var j = 1; j < security; j++) {

                    //  Next 6561 trits for the firstFragment
                    var nextFragment = key.slice(6561 * j, (j + 1) * 6561);

                    //  Use the next 27 trytes
                    var nextBundleFragment = normalizedBundleFragments[(numSignedTxs + j) % 3];

                    //  Calculate the new signatureFragment with the first bundle fragment
                    var nextSignedFragment = Signing.signatureFragment(nextBundleFragment, nextFragment);

                    //  Convert signature to trytes and add new bundle entry at i + j position
                    // Assign the signature fragment
                    bundle.bundle[i + j].signatureMessageFragment = Converter.trytes(nextSignedFragment);
                }

                break;
            }
        }
    }

    return callback(null, bundle.bundle);
}

module.exports = Multisig;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var ascii = __webpack_require__(31);
var inputValidator = __webpack_require__(16);

/**
*   extractJson takes a bundle as input and from the signatureMessageFragments extracts the correct JSON
*   data which was encoded and sent with the transaction.
*
*   @method extractJson
*   @param {array} bundle
*   @returns {Object}
**/
function extractJson(bundle) {

    // if wrong input return null
    if ( !inputValidator.isArray(bundle) || bundle[0] === undefined ) return null;


    // Sanity check: if the first tryte pair is not opening bracket, it's not a message
    var firstTrytePair = bundle[0].signatureMessageFragment[0] + bundle[0].signatureMessageFragment[1];

    if (firstTrytePair !== "OD") return null;

    var index = 0;
    var notEnded = true;
    var trytesChunk = '';
    var trytesChecked = 0;
    var preliminaryStop = false;
    var finalJson = '';

    while (index < bundle.length && notEnded) {

        var messageChunk = bundle[index].signatureMessageFragment;

        // We iterate over the message chunk, reading 9 trytes at a time
        for (var i = 0; i < messageChunk.length; i += 9) {

            // get 9 trytes
            var trytes = messageChunk.slice(i, i + 9);
            trytesChunk += trytes;

            // Get the upper limit of the tytes that need to be checked
            // because we only check 2 trytes at a time, there is sometimes a leftover
            var upperLimit = trytesChunk.length - trytesChunk.length % 2;

            var trytesToCheck = trytesChunk.slice(trytesChecked, upperLimit);

            // We read 2 trytes at a time and check if it equals the closing bracket character
            for (var j = 0; j < trytesToCheck.length; j += 2) {

                var trytePair = trytesToCheck[j] + trytesToCheck[j + 1];

                // If closing bracket char was found, and there are only trailing 9's
                // we quit and remove the 9's from the trytesChunk.
                if ( preliminaryStop && trytePair === '99' ) {

                    notEnded = false;
                    // TODO: Remove the trailing 9's from trytesChunk
                    //var closingBracket = trytesToCheck.indexOf('QD') + 1;

                    //trytesChunk = trytesChunk.slice( 0, ( trytesChunk.length - trytesToCheck.length ) + ( closingBracket % 2 === 0 ? closingBracket : closingBracket + 1 ) );

                    break;
                }

                finalJson += ascii.fromTrytes(trytePair);

                // If tryte pair equals closing bracket char, we set a preliminary stop
                // the preliminaryStop is useful when we have a nested JSON object
                if (trytePair === "QD") {
                    preliminaryStop = true;
                }
            }

            if (!notEnded)
                break;

            trytesChecked += trytesToCheck.length;
        }

        // If we have not reached the end of the message yet, we continue with the next
        // transaction in the bundle
        index += 1;

    }

    // If we did not find any JSON, return null
    if (notEnded) {

        return null;

    } else {

        return finalJson;

    }
}

module.exports = extractJson;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var Converter      =  __webpack_require__(2);
var Curl           =  __webpack_require__(4);
var Kerl           =  __webpack_require__(7);
var Signing        =  __webpack_require__(15);
var Utils          =  __webpack_require__(23);
var inputValidator =  __webpack_require__(16);


/**
*   Initializes a new multisig address
*
*   @method addDigest
*   @param {string|array} digest digest trytes
*   @return {object} address instance
*
**/
function Address(digests) {

  if (!(this instanceof Address)) {
    return new Address(digests);
  }

  // Initialize kerl instance
  this._kerl = new Kerl();
  this._kerl.initialize();


  // Add digests if any
  if (digests) {

    this.absorb(digests);
  }
}

/**
*   Absorbs key digests
*
*   @method absorb
*   @param {string|array} digest digest trytes
*   @return {object} address instance
*
**/
Address.prototype.absorb = function (digest) {

  // Construct array
  var digests = Array.isArray(digest) ? digest : [digest];

  // Add digests
  for (var i = 0; i < digests.length; i++) {

    // Get trits of digest
    var digestTrits = Converter.trits(digests[i]);

    // Absorb digest
    this._kerl.absorb(digestTrits, 0, digestTrits.length);
  }

  return this;
}

/**
*   Finalizes and returns the multisig address in trytes
*
*   @method finalize
*   @param {string} digest digest trytes, optional
*   @return {string} address trytes
*
**/
Address.prototype.finalize = function (digest) {

    // Absorb last digest if provided
    if (digest) {
      this.absorb(digest);
    }

    // Squeeze the address trits
    var addressTrits = [];
    this._kerl.squeeze(addressTrits, 0, Curl.HASH_LENGTH);

    // Convert trits into trytes and return the address
    return Converter.trytes(addressTrits);
}


module.exports = Address;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Crypto = __webpack_require__(27);

function trinarySum(a, b) {
  const result = a + b;
  return result == 2 ? -1 : result == -2 ? 1 : result;
}

function increment(subseed, count) {
  let index = count == null || count < 1 ? 1 : count;
  while (index-- > 0) {
    for (let j = 0; j < 243; j++) {
      if (++subseed[j] > 1) {
        subseed[j] = -1;
      } else {
        break;
      }
    }
  }
  return subseed;
}

function hash(...keys) {
  const curl = new Crypto.curl();
  const key = new Int32Array(243);
  curl.initialize();
  keys.map(k => curl.absorb(k, 0, k.length));
  curl.squeeze(key, 0, 243);
  return key;
}

function encrypt(message, key, salt) {
  const curl = new Crypto.curl();
  curl.initialize();
  curl.absorb(Crypto.converter.trits(key), 0, key.length);
  if (salt != null) {
    curl.absorb(Crypto.converter.trits(salt), 0, salt.length);
  }
  const length = message.length * 3;
  const outTrits = new Int32Array(length);
  const intermedaiteKey = new Int32Array(curl.HASH_LENGTH);
  return message.match(/.{1,81}/g).map(m => {
    curl.squeeze(intermedaiteKey, 0, curl.HASH_LENGTH);
    const out = Crypto.converter.trytes(Crypto.converter.trits(m).map((t, i) => trinarySum(t, intermedaiteKey[i])));
    return out;
  }).join("");
}

function decrypt(message, key, salt) {
  const curl = new Crypto.curl();
  curl.initialize();
  curl.absorb(Crypto.converter.trits(key), 0, key.length);
  if (salt != null) {
    curl.absorb(Crypto.converter.trits(salt), 0, salt.length);
  }
  const messageTrits = Crypto.converter.trits(message);
  const length = messageTrits.length;
  const plainTrits = new Int32Array(length);
  const intermedaiteKey = new Int32Array(curl.HASH_LENGTH);
  return message.match(/.{1,81}/g).map(m => {
    curl.squeeze(intermedaiteKey, 0, curl.HASH_LENGTH);
    const out = Crypto.converter.trytes(Crypto.converter.trits(m).map((t, i) => trinarySum(t, -intermedaiteKey[i])));
    return out;
  }).join("");
}

module.exports = {
  encrypt,
  decrypt,
  increment,
  hash
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(17);
var makeRequest = __webpack_require__(32);
var api = __webpack_require__(77);
var Multisig = __webpack_require__(82);


function IOTA(settings) {
    this.setSettings(settings);
}


/**
*   Reset the libraries settings and internal objects
*
*   @method setSettings
*   @param {Object} settings
**/
IOTA.prototype.setSettings = function(settings) {
    // IF NO SETTINGS, SET DEFAULT TO localhost:14265
    settings = settings || {};
    this.version = __webpack_require__(84).version;
    this.host = settings.host ? settings.host : "http://localhost";
    this.port = settings.port ? settings.port : 14265;
    this.provider = settings.provider || this.host.replace(/\/$/, '') + ":" + this.port;
    this.sandbox = settings.sandbox || false;
    this.token = settings.token || false;

    if (this.sandbox) {
        // remove backslash character
        this.sandbox = this.provider.replace(/\/$/, '');
        this.provider = this.sandbox + '/commands';
    }

    this._makeRequest = new makeRequest(this.provider, this.token);
    this.api = new api(this._makeRequest, this.sandbox);
    // this.mam
    // this.flash
    this.utils = utils;
    this.valid = __webpack_require__(10);
    this.multisig = new Multisig(this._makeRequest);
};


/**
*   Change the Node the user connects to
*
*   @method changeNode
*   @param {Object} settings
**/
IOTA.prototype.changeNode = function(settings) {
    this.setSettings(settings);
};

module.exports = IOTA;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */

var Url = __webpack_require__(69);
var spawn = __webpack_require__(70).spawn;
var fs = __webpack_require__(24);

exports.XMLHttpRequest = function() {
  "use strict";

  /**
   * Private variables
   */
  var self = this;
  var http = __webpack_require__(71);
  var https = __webpack_require__(72);

  // Holds http.js objects
  var request;
  var response;

  // Request settings
  var settings = {};

  // Disable header blacklist.
  // Not part of XHR specs.
  var disableHeaderCheck = false;

  // Set some default headers
  var defaultHeaders = {
    "User-Agent": "node-XMLHttpRequest",
    "Accept": "*/*",
  };

  var headers = {};
  var headersCase = {};

  // These headers are not user setable.
  // The following are allowed but banned in the spec:
  // * user-agent
  var forbiddenRequestHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "content-transfer-encoding",
    "cookie",
    "cookie2",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "via"
  ];

  // These request methods are not allowed
  var forbiddenRequestMethods = [
    "TRACE",
    "TRACK",
    "CONNECT"
  ];

  // Send flag
  var sendFlag = false;
  // Error flag, used when errors occur or abort is called
  var errorFlag = false;

  // Event listeners
  var listeners = {};

  /**
   * Constants
   */

  this.UNSENT = 0;
  this.OPENED = 1;
  this.HEADERS_RECEIVED = 2;
  this.LOADING = 3;
  this.DONE = 4;

  /**
   * Public vars
   */

  // Current state
  this.readyState = this.UNSENT;

  // default ready state change handler in case one is not set or is set late
  this.onreadystatechange = null;

  // Result & response
  this.responseText = "";
  this.responseXML = "";
  this.status = null;
  this.statusText = null;
  
  // Whether cross-site Access-Control requests should be made using
  // credentials such as cookies or authorization headers
  this.withCredentials = false;

  /**
   * Private methods
   */

  /**
   * Check if the specified header is allowed.
   *
   * @param string header Header to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpHeader = function(header) {
    return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
  };

  /**
   * Check if the specified method is allowed.
   *
   * @param string method Request method to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpMethod = function(method) {
    return (method && forbiddenRequestMethods.indexOf(method) === -1);
  };

  /**
   * Public methods
   */

  /**
   * Open the connection. Currently supports local server requests.
   *
   * @param string method Connection method (eg GET, POST)
   * @param string url URL for the connection.
   * @param boolean async Asynchronous connection. Default is true.
   * @param string user Username for basic authentication (optional)
   * @param string password Password for basic authentication (optional)
   */
  this.open = function(method, url, async, user, password) {
    this.abort();
    errorFlag = false;

    // Check for valid request method
    if (!isAllowedHttpMethod(method)) {
      throw new Error("SecurityError: Request method not allowed");
    }

    settings = {
      "method": method,
      "url": url.toString(),
      "async": (typeof async !== "boolean" ? true : async),
      "user": user || null,
      "password": password || null
    };

    setState(this.OPENED);
  };

  /**
   * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
   * This does not conform to the W3C spec.
   *
   * @param boolean state Enable or disable header checking.
   */
  this.setDisableHeaderCheck = function(state) {
    disableHeaderCheck = state;
  };

  /**
   * Sets a header for the request or appends the value if one is already set.
   *
   * @param string header Header name
   * @param string value Header value
   */
  this.setRequestHeader = function(header, value) {
    if (this.readyState !== this.OPENED) {
      throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
    }
    if (!isAllowedHttpHeader(header)) {
      console.warn("Refused to set unsafe header \"" + header + "\"");
      return;
    }
    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send flag is true");
    }
    header = headersCase[header.toLowerCase()] || header;
    headersCase[header.toLowerCase()] = header;
    headers[header] = headers[header] ? headers[header] + ', ' + value : value;
  };

  /**
   * Gets a header from the server response.
   *
   * @param string header Name of header to get.
   * @return string Text of the header or null if it doesn't exist.
   */
  this.getResponseHeader = function(header) {
    if (typeof header === "string"
      && this.readyState > this.OPENED
      && response
      && response.headers
      && response.headers[header.toLowerCase()]
      && !errorFlag
    ) {
      return response.headers[header.toLowerCase()];
    }

    return null;
  };

  /**
   * Gets all the response headers.
   *
   * @return string A string with all response headers separated by CR+LF
   */
  this.getAllResponseHeaders = function() {
    if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
      return "";
    }
    var result = "";

    for (var i in response.headers) {
      // Cookie headers are excluded
      if (i !== "set-cookie" && i !== "set-cookie2") {
        result += i + ": " + response.headers[i] + "\r\n";
      }
    }
    return result.substr(0, result.length - 2);
  };

  /**
   * Gets a request header
   *
   * @param string name Name of header to get
   * @return string Returns the request header or empty string if not set
   */
  this.getRequestHeader = function(name) {
    if (typeof name === "string" && headersCase[name.toLowerCase()]) {
      return headers[headersCase[name.toLowerCase()]];
    }

    return "";
  };

  /**
   * Sends the request to the server.
   *
   * @param string data Optional data to send as request body.
   */
  this.send = function(data) {
    if (this.readyState !== this.OPENED) {
      throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
    }

    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send has already been called");
    }

    var ssl = false, local = false;
    var url = Url.parse(settings.url);
    var host;
    // Determine the server
    switch (url.protocol) {
      case "https:":
        ssl = true;
        // SSL & non-SSL both need host, no break here.
      case "http:":
        host = url.hostname;
        break;

      case "file:":
        local = true;
        break;

      case undefined:
      case null:
      case "":
        host = "localhost";
        break;

      default:
        throw new Error("Protocol not supported.");
    }

    // Load files off the local filesystem (file://)
    if (local) {
      if (settings.method !== "GET") {
        throw new Error("XMLHttpRequest: Only GET method is supported");
      }

      if (settings.async) {
        fs.readFile(url.pathname, "utf8", function(error, data) {
          if (error) {
            self.handleError(error);
          } else {
            self.status = 200;
            self.responseText = data;
            setState(self.DONE);
          }
        });
      } else {
        try {
          this.responseText = fs.readFileSync(url.pathname, "utf8");
          this.status = 200;
          setState(self.DONE);
        } catch(e) {
          this.handleError(e);
        }
      }

      return;
    }

    // Default to port 80. If accessing localhost on another port be sure
    // to use http://localhost:port/path
    var port = url.port || (ssl ? 443 : 80);
    // Add query string if one is used
    var uri = url.pathname + (url.search ? url.search : "");

    // Set the defaults if they haven't been set
    for (var name in defaultHeaders) {
      if (!headersCase[name.toLowerCase()]) {
        headers[name] = defaultHeaders[name];
      }
    }

    // Set the Host header or the server may reject the request
    headers.Host = host;
    if (!((ssl && port === 443) || port === 80)) {
      headers.Host += ":" + url.port;
    }

    // Set Basic Auth if necessary
    if (settings.user) {
      if (typeof settings.password === "undefined") {
        settings.password = "";
      }
      var authBuf = new Buffer(settings.user + ":" + settings.password);
      headers.Authorization = "Basic " + authBuf.toString("base64");
    }

    // Set content length header
    if (settings.method === "GET" || settings.method === "HEAD") {
      data = null;
    } else if (data) {
      headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);

      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "text/plain;charset=UTF-8";
      }
    } else if (settings.method === "POST") {
      // For a post with no data set Content-Length: 0.
      // This is required by buggy servers that don't meet the specs.
      headers["Content-Length"] = 0;
    }

    var options = {
      host: host,
      port: port,
      path: uri,
      method: settings.method,
      headers: headers,
      agent: false,
      withCredentials: self.withCredentials
    };

    // Reset error flag
    errorFlag = false;

    // Handle async requests
    if (settings.async) {
      // Use the proper protocol
      var doRequest = ssl ? https.request : http.request;

      // Request is being sent, set send flag
      sendFlag = true;

      // As per spec, this is called here for historical reasons.
      self.dispatchEvent("readystatechange");

      // Handler for the response
      var responseHandler = function responseHandler(resp) {
        // Set response var to the response we got back
        // This is so it remains accessable outside this scope
        response = resp;
        // Check for redirect
        // @TODO Prevent looped redirects
        if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
          // Change URL to the redirect location
          settings.url = response.headers.location;
          var url = Url.parse(settings.url);
          // Set host var in case it's used later
          host = url.hostname;
          // Options for the new request
          var newOptions = {
            hostname: url.hostname,
            port: url.port,
            path: url.path,
            method: response.statusCode === 303 ? "GET" : settings.method,
            headers: headers,
            withCredentials: self.withCredentials
          };

          // Issue the new request
          request = doRequest(newOptions, responseHandler).on("error", errorHandler);
          request.end();
          // @TODO Check if an XHR event needs to be fired here
          return;
        }

        response.setEncoding("utf8");

        setState(self.HEADERS_RECEIVED);
        self.status = response.statusCode;

        response.on("data", function(chunk) {
          // Make sure there's some data
          if (chunk) {
            self.responseText += chunk;
          }
          // Don't emit state changes if the connection has been aborted.
          if (sendFlag) {
            setState(self.LOADING);
          }
        });

        response.on("end", function() {
          if (sendFlag) {
            // Discard the end event if the connection has been aborted
            setState(self.DONE);
            sendFlag = false;
          }
        });

        response.on("error", function(error) {
          self.handleError(error);
        });
      };

      // Error handler for the request
      var errorHandler = function errorHandler(error) {
        self.handleError(error);
      };

      // Create the request
      request = doRequest(options, responseHandler).on("error", errorHandler);

      // Node 0.4 and later won't accept empty data. Make sure it's needed.
      if (data) {
        request.write(data);
      }

      request.end();

      self.dispatchEvent("loadstart");
    } else { // Synchronous
      // Create a temporary file for communication with the other Node process
      var contentFile = ".node-xmlhttprequest-content-" + process.pid;
      var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
      fs.writeFileSync(syncFile, "", "utf8");
      // The async request the other Node process executes
      var execString = "var http = require('http'), https = require('https'), fs = require('fs');"
        + "var doRequest = http" + (ssl ? "s" : "") + ".request;"
        + "var options = " + JSON.stringify(options) + ";"
        + "var responseText = '';"
        + "var req = doRequest(options, function(response) {"
        + "response.setEncoding('utf8');"
        + "response.on('data', function(chunk) {"
        + "  responseText += chunk;"
        + "});"
        + "response.on('end', function() {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText}}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "response.on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: error}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "}).on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: error}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + (data ? "req.write('" + JSON.stringify(data).slice(1,-1).replace(/'/g, "\\'") + "');":"")
        + "req.end();";
      // Start the other Node Process, executing this string
      var syncProc = spawn(process.argv[0], ["-e", execString]);
      while(fs.existsSync(syncFile)) {
        // Wait while the sync file is empty
      }
      var resp = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
      // Kill the child process once the file has data
      syncProc.stdin.end();
      // Remove the temporary file
      fs.unlinkSync(contentFile);

      if (resp.err) {
        self.handleError(resp.err);
      } else {
        response = resp.data;
        self.status = resp.data.statusCode;
        self.responseText = resp.data.text;
        setState(self.DONE);
      }
    }
  };

  /**
   * Called when an error is encountered to deal with it.
   */
  this.handleError = function(error) {
    this.status = 0;
    this.statusText = error;
    this.responseText = error.stack;
    errorFlag = true;
    setState(this.DONE);
    this.dispatchEvent('error');
  };

  /**
   * Aborts a request.
   */
  this.abort = function() {
    if (request) {
      request.abort();
      request = null;
    }

    headers = defaultHeaders;
    this.status = 0;
    this.responseText = "";
    this.responseXML = "";

    errorFlag = true;

    if (this.readyState !== this.UNSENT
        && (this.readyState !== this.OPENED || sendFlag)
        && this.readyState !== this.DONE) {
      sendFlag = false;
      setState(this.DONE);
    }
    this.readyState = this.UNSENT;
    this.dispatchEvent('abort');
  };

  /**
   * Adds an event listener. Preferred method of binding to events.
   */
  this.addEventListener = function(event, callback) {
    if (!(event in listeners)) {
      listeners[event] = [];
    }
    // Currently allows duplicate callbacks. Should it?
    listeners[event].push(callback);
  };

  /**
   * Remove an event callback that has already been bound.
   * Only works on the matching funciton, cannot be a copy.
   */
  this.removeEventListener = function(event, callback) {
    if (event in listeners) {
      // Filter will return a new array with the callback removed
      listeners[event] = listeners[event].filter(function(ev) {
        return ev !== callback;
      });
    }
  };

  /**
   * Dispatch any events, including both "on" methods and events attached using addEventListener.
   */
  this.dispatchEvent = function(event) {
    if (typeof self["on" + event] === "function") {
      self["on" + event]();
    }
    if (event in listeners) {
      for (var i = 0, len = listeners[event].length; i < len; i++) {
        listeners[event][i].call(self);
      }
    }
  };

  /**
   * Changes readyState and calls onreadystatechange.
   *
   * @param int state New state
   */
  var setState = function(state) {
    if (state == self.LOADING || self.readyState !== state) {
      self.readyState = state;

      if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
        self.dispatchEvent("readystatechange");
      }

      if (self.readyState === self.DONE && !errorFlag) {
        self.dispatchEvent("load");
        // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
        self.dispatchEvent("loadend");
      }
    }
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 73 */
/***/ (function(module, exports) {


module.exports = {

  invalidResponse: function(response) {
    return new Error("Invalid Response: " + response);
  },
  noConnection: function(host) {
    return new Error("No connection to host: " + host);
  },
  requestError: function(error) {
    return new Error("Request Error: " + error);
  }
}


/***/ }),
/* 74 */
/***/ (function(module, exports) {

var INT_LENGTH = 12;
var BYTE_LENGTH = 48;
var RADIX = 3;
/// hex representation of (3^242)/2
var HALF_3 = new Uint32Array([
    0xa5ce8964,
    0x9f007669,
    0x1484504f,
    0x3ade00d9,
    0x0c24486e,
    0x50979d57,
    0x79a4c702,
    0x48bbae36,
    0xa9f6808b,
    0xaa06a805,
    0xa87fabdf,
    0x5e69ebef
]);

var ta_reverse = function(array) {
    if (array.reverse !== undefined) {
        array.reverse();
        return;
    }

    var i = 0,
        n = array.length,
        middle = Math.floor(n / 2),
        temp = null;

    for (; i < middle; i += 1) {
        temp = array[i];
        array[i] = array[n - 1 - i];
        array[n - 1 - i] = temp;
    }
};

/// negates the (unsigned) input array
var bigint_not = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = (~arr[i]) >>> 0;
    }
};

/// rshift that works with up to 53
/// JS's shift operators only work on 32 bit integers
/// ours is up to 33 or 34 bits though, so
/// we need to implement shifting manually
var rshift = function(number, shift) {
    return (number / Math.pow(2, shift)) >>> 0;
};

/// swaps endianness
var swap32 = function(val) {
    return ((val & 0xFF) << 24) |
        ((val & 0xFF00) << 8) |
        ((val >> 8) & 0xFF00) |
        ((val >> 24) & 0xFF);
}

/// add with carry
var full_add = function(lh, rh, carry) {
    var v = lh + rh;
    var l = (rshift(v, 32)) & 0xFFFFFFFF;
    var r = (v & 0xFFFFFFFF) >>> 0;
    var carry1 = l != 0;

    if (carry) {
        v = r + 1;
    }
    l = (rshift(v, 32)) & 0xFFFFFFFF;
    r = (v & 0xFFFFFFFF) >>> 0;
    var carry2 = l != 0;

    return [r, carry1 || carry2];
};

/// subtracts rh from base
var bigint_sub = function(base, rh) {
    var noborrow = true;

    for (var i = 0; i < base.length; i++) {
        var vc = full_add(base[i], (~rh[i] >>> 0), noborrow);
        base[i] = vc[0];
        noborrow = vc[1];
    }

    if (!noborrow) {
        throw "noborrow";
    }
};

/// compares two (unsigned) big integers
var bigint_cmp = function(lh, rh) {
    for (var i = lh.length; i-- > 0;) {
        var a = lh[i] >>> 0;
        var b = rh[i] >>> 0;
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    }
    return 0;
};

/// adds rh to base in place
var bigint_add = function(base, rh) {
    var carry = false;
    for (var i = 0; i < base.length; i++) {
        var vc = full_add(base[i], rh[i], carry);
        base[i] = vc[0];
        carry = vc[1];
    }
};

/// adds a small (i.e. <32bit) number to base
var bigint_add_small = function(base, other) {
    var vc = full_add(base[0], other, false);
    base[0] = vc[0];
    var carry = vc[1];

    var i = 1;
    while (carry && i < base.length) {
        var vc = full_add(base[i], 0, carry);
        base[i] = vc[0];
        carry = vc[1];
        i += 1;
    }

    return i;
};

/// converts the given byte array to trits
var words_to_trits = function(words) {
    if (words.length != INT_LENGTH) {
        throw "Invalid words length";
    }

    var trits = new Int8Array(243);
    var base = new Uint32Array(words);

    ta_reverse(base);

    var flip_trits = false;
    if (base[INT_LENGTH - 1] >> 31 == 0) {
        // positive two's complement number.
        // add HALF_3 to move it to the right place.
        bigint_add(base, HALF_3);
    } else {
        // negative number.
        bigint_not(base);
        if (bigint_cmp(base, HALF_3) > 0) {
            bigint_sub(base, HALF_3);
            flip_trits = true;
        } else {
            /// bigint is between (unsigned) HALF_3 and (2**384 - 3**242/2).
            bigint_add_small(base, 1);
            var tmp = HALF_3.slice(0);
            bigint_sub(tmp, base);
            base = tmp;
        }
    }


    var rem = 0;

    for (var i = 0; i < 242; i++) {
        rem = 0;
        for (var j = INT_LENGTH - 1; j >= 0; j--) {
            var lhs = (rem != 0 ? rem * 0xFFFFFFFF + rem : 0) + base[j];
            var rhs = RADIX;

            var q = (lhs / rhs) >>> 0;
            var r = (lhs % rhs) >>> 0;

            base[j] = q;
            rem = r;
        }

        trits[i] = rem - 1;
    }

    if (flip_trits) {
        for (var i = 0; i < trits.length; i++) {
            trits[i] = -trits[i];
        }
    }

    return trits;
}

var is_null = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            return false;
            break;
        }
    }
    return true;
}

var trits_to_words = function(trits) {
    if (trits.length != 243) {
        throw "Invalid trits length";
    }

    var base = new Uint32Array(INT_LENGTH);

    if (trits.slice(0, 242).every(function(a) {
            a == -1
        })) {
        base = HALF_3.slice(0);
        bigint_not(base);
        bigint_add_small(base, 1);
    } else {
        var size = 1;
        for (var i = trits.length - 1; i-- > 0;) {
            var trit = trits[i] + 1;

            //multiply by radix
            {
                var sz = size;
                var carry = 0;

                for (var j = 0; j < sz; j++) {
                    var v = base[j] * RADIX + carry;
                    carry = rshift(v, 32);
                    base[j] = (v & 0xFFFFFFFF) >>> 0;
                }

                if (carry > 0) {
                    base[sz] = carry;
                    size += 1;
                }
            }

            //addition
            {
                var sz = bigint_add_small(base, trit);
                if (sz > size) {
                    size = sz;
                }
            }
        }

        if (!is_null(base)) {
            if (bigint_cmp(HALF_3, base) <= 0) {
                // base >= HALF_3
                // just do base - HALF_3
                bigint_sub(base, HALF_3);
            } else {
                // base < HALF_3
                // so we need to transform it to a two's complement representation
                // of (base - HALF_3).
                // as we don't have a wrapping (-), we need to use some bit magic
                var tmp = HALF_3.slice(0);
                bigint_sub(tmp, base);
                bigint_not(tmp);
                bigint_add_small(tmp, 1);
                base = tmp;
            }
        }
    }

    ta_reverse(base);

    for (var i = 0; i < base.length; i++) {
        base[i] = swap32(base[i]);
    }

    return base;
};

module.exports = {
    trits_to_words: trits_to_words,
    words_to_trits: words_to_trits
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var Curl = __webpack_require__(5);
var Converter = __webpack_require__(3);
var Bundle = __webpack_require__(19);
var add = __webpack_require__(33);

/**
*           Signing related functions
*
**/
var key = function(seed, index, length) {

    while ((seed.length % 243) !== 0) {
      seed.push(0);
    }

    var indexTrits = Converter.fromValue( index );
    var subseed = add( seed.slice( ), indexTrits );

    var curl = new Curl( );

    curl.initialize( );
    curl.absorb(subseed, 0, subseed.length);
    curl.squeeze(subseed, 0, subseed.length);

    curl.reset( );
    curl.absorb(subseed, 0, subseed.length);

    var key = [], offset = 0, buffer = [];

    while (length-- > 0) {

        for (var i = 0; i < 27; i++) {

            curl.squeeze(buffer, 0, subseed.length);
            for (var j = 0; j < 243; j++) {

                key[offset++] = buffer[j];
            }
        }
    }
    return key;
}

/**
*
*
**/
var digests = function(key) {

    var digests = [], buffer = [];

    for (var i = 0; i < Math.floor(key.length / 6561); i++) {

        var keyFragment = key.slice(i * 6561, (i + 1) * 6561);

        for (var j = 0; j < 27; j++) {

            buffer = keyFragment.slice(j * 243, (j + 1) * 243);

            for (var k = 0; k < 26; k++) {

                var kCurl = new Curl();
                kCurl.initialize();
                kCurl.absorb(buffer, 0, buffer.length);
                kCurl.squeeze(buffer, 0, Curl.HASH_LENGTH);
            }

            for (var k = 0; k < 243; k++) {

                keyFragment[j * 243 + k] = buffer[k];
            }
        }

        var curl = new Curl()

        curl.initialize();
        curl.absorb(keyFragment, 0, keyFragment.length);
        curl.squeeze(buffer, 0, Curl.HASH_LENGTH);

        for (var j = 0; j < 243; j++) {

            digests[i * 243 + j] = buffer[j];
        }
    }
    return digests;
}

/**
*
*
**/
var address = function(digests) {

    var addressTrits = [];

    var curl = new Curl();

    curl.initialize();
    curl.absorb(digests, 0, digests.length);
    curl.squeeze(addressTrits, 0, Curl.HASH_LENGTH);

    return addressTrits;
}

/**
*
*
**/
var digest = function(normalizedBundleFragment, signatureFragment) {

    var buffer = []

    var curl = new Curl();

    curl.initialize();

    for (var i = 0; i< 27; i++) {
        buffer = signatureFragment.slice(i * 243, (i + 1) * 243);

        for (var j = normalizedBundleFragment[i] + 13; j-- > 0; ) {

            var jCurl = new Curl();

            jCurl.initialize();
            jCurl.absorb(buffer, 0, buffer.length);
            jCurl.squeeze(buffer, 0, Curl.HASH_LENGTH);
        }

        curl.absorb(buffer, 0, buffer.length);
    }

    curl.squeeze(buffer, 0, Curl.HASH_LENGTH);
    return buffer;
}

/**
*
*
**/
var signatureFragment = function(normalizedBundleFragment, keyFragment) {

    var signatureFragment = keyFragment.slice(), hash = [];

    var curl = new Curl();

    for (var i = 0; i < 27; i++) {

        hash = signatureFragment.slice(i * 243, (i + 1) * 243);

        for (var j = 0; j < 13 - normalizedBundleFragment[i]; j++) {

            curl.initialize();
            curl.reset();
            curl.absorb(hash, 0, hash.length);
            curl.squeeze(hash, 0, Curl.HASH_LENGTH);
        }

        for (var j = 0; j < 243; j++) {

            signatureFragment[i * 243 + j] = hash[j];
        }
    }

    return signatureFragment;
}

/**
*
*
**/
var validateSignatures = function(expectedAddress, signatureFragments, bundleHash) {

    var self = this;
    var bundle = new Bundle();

    var normalizedBundleFragments = [];
    var normalizedBundleHash = bundle.normalizedBundle(bundleHash);

    // Split hash into 3 fragments
    for (var i = 0; i < 3; i++) {
        normalizedBundleFragments[i] = normalizedBundleHash.slice(i * 27, (i + 1) * 27);
    }

    // Get digests
    var digests = [];

    for (var i = 0; i < signatureFragments.length; i++) {

        var digestBuffer = digest(normalizedBundleFragments[i % 3], Converter.trits(signatureFragments[i]));

        for (var j = 0; j < 243; j++) {

            digests[i * 243 + j] = digestBuffer[j]
        }
    }

    var address = Converter.trytes(self.address(digests));

    return (expectedAddress === address);
}


module.exports = {
    key                 : key,
    digests             : digests,
    address             : address,
    digest              : digest,
    signatureFragment   : signatureFragment,
    validateSignatures  : validateSignatures
}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var ascii = __webpack_require__(34);
var inputValidator = __webpack_require__(10);

/**
*   extractJson takes a bundle as input and from the signatureMessageFragments extracts the correct JSON
*   data which was encoded and sent with the transaction.
*
*   @method extractJson
*   @param {array} bundle
*   @returns {Object}
**/
function extractJson(bundle) {

    // if wrong input return null
    if ( !inputValidator.isArray(bundle) || bundle[0] === undefined ) return null;


    // Sanity check: if the first tryte pair is not opening bracket, it's not a message
    var firstTrytePair = bundle[0].signatureMessageFragment[0] + bundle[0].signatureMessageFragment[1];

    if (firstTrytePair !== "OD") return null;

    var index = 0;
    var notEnded = true;
    var trytesChunk = '';
    var trytesChecked = 0;
    var preliminaryStop = false;
    var finalJson = '';

    while (index < bundle.length && notEnded) {

        var messageChunk = bundle[index].signatureMessageFragment;

        // We iterate over the message chunk, reading 9 trytes at a time
        for (var i = 0; i < messageChunk.length; i += 9) {

            // get 9 trytes
            var trytes = messageChunk.slice(i, i + 9);
            trytesChunk += trytes;

            // Get the upper limit of the tytes that need to be checked
            // because we only check 2 trytes at a time, there is sometimes a leftover
            var upperLimit = trytesChunk.length - trytesChunk.length % 2;

            var trytesToCheck = trytesChunk.slice(trytesChecked, upperLimit);

            // We read 2 trytes at a time and check if it equals the closing bracket character
            for (var j = 0; j < trytesToCheck.length; j += 2) {

                var trytePair = trytesToCheck[j] + trytesToCheck[j + 1];

                // If closing bracket char was found, and there are only trailing 9's
                // we quit and remove the 9's from the trytesChunk.
                if ( preliminaryStop && trytePair === '99' ) {

                    notEnded = false;
                    // TODO: Remove the trailing 9's from trytesChunk
                    //var closingBracket = trytesToCheck.indexOf('QD') + 1;

                    //trytesChunk = trytesChunk.slice( 0, ( trytesChunk.length - trytesToCheck.length ) + ( closingBracket % 2 === 0 ? closingBracket : closingBracket + 1 ) );

                    break;
                }

                finalJson += ascii.fromTrytes(trytePair);

                // If tryte pair equals closing bracket char, we set a preliminary stop
                // the preliminaryStop is useful when we have a nested JSON object
                if (trytePair === "QD") {
                    preliminaryStop = true;
                }
            }

            if (!notEnded)
                break;

            trytesChecked += trytesToCheck.length;
        }

        // If we have not reached the end of the message yet, we continue with the next
        // transaction in the bundle
        index += 1;

    }

    // If we did not find any JSON, return null
    if (notEnded) {

        return null;

    } else {

        return finalJson;

    }
}

module.exports = extractJson;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var apiCommands     =   __webpack_require__(78)
var errors          =   __webpack_require__(25);
var inputValidator  =   __webpack_require__(10);
var HMAC            =   __webpack_require__(79);
var Converter       =   __webpack_require__(3);
var Signing         =   __webpack_require__(18);
var Bundle          =   __webpack_require__(19);
var Utils           =   __webpack_require__(17);
var async           =   __webpack_require__(80);

'use strict';
var nullHashTrytes = (new Array(244).join('9'));

/**
*  Making API requests, including generalized wrapper functions
**/
function api(provider, isSandbox) {

    this._makeRequest = provider;
    this.sandbox = isSandbox;
}

/**
*   General function that makes an HTTP request to the local node
*
*   @method sendCommand
*   @param {object} command
*   @param {function} callback
*   @returns {object} success
**/
api.prototype.sendCommand = function(command, callback) {

    return this._makeRequest.send(command, callback);
}

/**
*   @method attachToTangle
*   @param {string} trunkTransaction
*   @param {string} branchTransaction
*   @param {integer} minWeightMagnitude
*   @param {array} trytes
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.attachToTangle = function(trunkTransaction, branchTransaction, minWeightMagnitude, trytes, callback) {

    // inputValidator: Check if correct hash
    if (!inputValidator.isHash(trunkTransaction)) {

        return callback(errors.invalidTrunkOrBranch(trunkTransaction));
    }

    // inputValidator: Check if correct hash
    if (!inputValidator.isHash(branchTransaction)) {

        return callback(errors.invalidTrunkOrBranch(branchTransaction));
    }

    // inputValidator: Check if int
    if (!inputValidator.isValue(minWeightMagnitude)) {

        return callback(errors.notInt());
    }

    // inputValidator: Check if array of trytes
    if (!inputValidator.isArrayOfTrytes(trytes)) {

        return callback(errors.invalidTrytes());
    }


    var command = apiCommands.attachToTangle(trunkTransaction, branchTransaction, minWeightMagnitude, trytes)

    return this.sendCommand(command, callback)
}

/**
*   @method findTransactions
*   @param {object} searchValues
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.findTransactions = function(searchValues, callback) {

    // If not an object, return error
    if (!inputValidator.isObject(searchValues)) {
        return callback(errors.invalidKey());
    }

    // Get search key from input object
    var searchKeys = Object.keys(searchValues);
    var availableKeys = ['bundles', 'addresses', 'tags', 'approvees'];

    var keyError = false;

    searchKeys.forEach(function(key) {

        if (availableKeys.indexOf(key) === -1) {

            keyError = errors.invalidKey();
            return
        }


        var hashes = searchValues[key];

        // If tags, append to 27 trytes
        if (key === 'tags') {

            searchValues.tags = hashes.map(function(hash) {

                // Simple padding to 27 trytes
                while (hash.length < 27) {
                    hash += '9';
                }

                // validate hash
                if (!inputValidator.isTrytes(hash, 27)) {

                    keyError = errors.invalidTrytes();
                    return
                }
                return hash;
            })

        } else {

            // Check if correct array of hashes
            if (!inputValidator.isArrayOfHashes(hashes)) {

                keyError = errors.invalidTrytes();
                return
            }
        }


    })

    // If invalid key found, return
    if (keyError) {
        callback(keyError);
        return
    }

    var command = apiCommands.findTransactions(searchValues);

    return this.sendCommand(command, callback)
}

/**
*   @method getBalances
*   @param {array} addresses
*   @param {int} threshold
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.getBalances = function(addresses, threshold, callback) {

    // Check if correct transaction hashes
    if (!inputValidator.isArrayOfHashes(addresses)) {

        return callback(errors.invalidTrytes());
    }

    var command = apiCommands.getBalances(addresses, threshold);

    return this.sendCommand(command, callback)
}

/**
*   @method getInclusionStates
*   @param {array} transactions
*   @param {array} tips
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.getInclusionStates = function(transactions, tips, callback) {

    // Check if correct transaction hashes
    if (!inputValidator.isArrayOfHashes(transactions)) {

        return callback(errors.invalidTrytes());
    }

    // Check if correct tips
    if (!inputValidator.isArrayOfHashes(tips)) {

        return callback(errors.invalidTrytes());
    }

    var command = apiCommands.getInclusionStates(transactions, tips);

    return this.sendCommand(command, callback)
}

/**
*   @method getNodeInfo
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.getNodeInfo = function(callback) {

    var command = apiCommands.getNodeInfo();

    return this.sendCommand(command, callback)
}

/**
*   @method getNeighbors
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.getNeighbors = function(callback) {

    var command = apiCommands.getNeighbors();

    return this.sendCommand(command, callback)
}

/**
*   @method addNeighbors
*   @param {Array} uris List of URI's
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.addNeighbors = function(uris, callback) {

    // Validate URIs
    for (var i = 0; i < uris.length; i++) {
        if (!inputValidator.isUri(uris[i])) return callback(errors.invalidUri(uris[i]));
    }

    var command = apiCommands.addNeighbors(uris);

    return this.sendCommand(command, callback)
}

/**
*   @method removeNeighbors
*   @param {Array} uris List of URI's
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.removeNeighbors = function(uris, callback) {

    // Validate URIs
    for (var i = 0; i < uris.length; i++) {
        if (!inputValidator.isUri(uris[i])) return callback(errors.invalidUri(uris[i]));
    }

    var command = apiCommands.removeNeighbors(uris);

    return this.sendCommand(command, callback)
}

/**
*   @method getTips
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.getTips = function(callback) {

    var command = apiCommands.getTips();

    return this.sendCommand(command, callback)
}

/**
*   @method getTransactionsToApprove
*   @param {int} depth
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.getTransactionsToApprove = function(depth, callback) {

    // Check if correct depth
    if (!inputValidator.isValue(depth)) {

        return callback(errors.invalidInputs());
    }

    var command = apiCommands.getTransactionsToApprove(depth);

    return this.sendCommand(command, callback)
}

/**
*   @method getTrytes
*   @param {array} hashes
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.getTrytes = function(hashes, callback) {

    if (!inputValidator.isArrayOfHashes(hashes)) {

        return callback(errors.invalidTrytes());
    }

    var command = apiCommands.getTrytes(hashes);

    return this.sendCommand(command, callback)
}

/**
*   @method interruptAttachingToTangle
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.interruptAttachingToTangle = function(callback) {

    var command = apiCommands.interruptAttachingToTangle();

    return this.sendCommand(command, callback)
}

/**
*   @method broadcastTransactions
*   @param {array} trytes
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.broadcastTransactions = function(trytes, callback) {

    if (!inputValidator.isArrayOfAttachedTrytes(trytes)) {

        return callback(errors.invalidAttachedTrytes());
    }

    var command = apiCommands.broadcastTransactions(trytes);

    return this.sendCommand(command, callback)
}

/**
*   @method storeTransactions
*   @param {array} trytes
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.storeTransactions = function(trytes, callback) {

    if (!inputValidator.isArrayOfAttachedTrytes(trytes)) {

        return callback(errors.invalidAttachedTrytes());
    }

    var command = apiCommands.storeTransactions(trytes);

    return this.sendCommand(command, callback)
}



/*************************************

WRAPPER AND CUSTOM  FUNCTIONS

**************************************/


/**
*   Wrapper function for getTrytes and transactionObjects
*   gets the trytes and transaction object from a list of transaction hashes
*
*   @method getTransactionsObjects
*   @param {array} hashes
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.getTransactionsObjects = function(hashes, callback) {

    // If not array of hashes, return error
    if (!inputValidator.isArrayOfHashes(hashes)) {
        return callback(errors.invalidInputs);
    }

    // get the trytes of the transaction hashes
    this.getTrytes(hashes, function(error, trytes) {

        if (error) return callback(error);

        var transactionObjects = [];

        // call transactionObjects for each trytes
        trytes.forEach(function(thisTrytes) {

            // If no trytes returned, simply push null as placeholder
            if (!thisTrytes) {
                transactionObject.push(null);
            } else {
                transactionObjects.push(Utils.transactionObject(thisTrytes));
            }
        })

        return callback(null, transactionObjects);
    })
}

/**
*   Wrapper function for findTransactions, getTrytes and transactionObjects
*   Returns the transactionObject of a transaction hash. The input can be a valid
*   findTransactions input
*
*   @method getTransactionsObjects
*   @param {object} input
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.findTransactionObjects = function(input, callback) {

    var self = this;

    self.findTransactions(input, function(error, transactions) {

        if (error) return callback(error);

        // get the transaction objects of the transactions
        self.getTransactionsObjects(transactions, callback);
    })
}

/**
*   Wrapper function for getNodeInfo and getInclusionStates
*
*   @method getLatestInclusion
*   @param {array} hashes
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.getLatestInclusion = function(hashes, callback) {

    var self = this;

    self.getNodeInfo(function(e, nodeInfo) {

        if (e) return callback(e);

        var latestMilestone = nodeInfo.latestSolidSubtangleMilestone;

        return self.getInclusionStates(hashes, Array(latestMilestone), callback);
    })
}

/**
*   Broadcasts and stores transaction trytes
*
*   @method storeAndBroadcast
*   @param {array} trytes
*   @returns {function} callback
*   @returns {object} success
**/
api.prototype.storeAndBroadcast = function(trytes, callback) {

    var self = this;

    self.storeTransactions(trytes, function(error, success) {


        if (error) return callback(error);

        // If no error
        return self.broadcastTransactions(trytes, callback)
    })
}

/**
*   Gets transactions to approve, attaches to Tangle, broadcasts and stores
*
*   @method sendTrytes
*   @param {array} trytes
*   @param {int} depth
*   @param {int} minWeightMagnitude
*   @param {function} callback
*   @returns {object} analyzed Transaction objects
**/
api.prototype.sendTrytes = function(trytes, depth, minWeightMagnitude, callback) {

    var self = this;

    // Check if correct depth and minWeightMagnitude
    if (!inputValidator.isValue(depth) || !inputValidator.isValue(minWeightMagnitude)) {

        return callback(errors.invalidInputs());
    }

    // Get branch and trunk
    self.getTransactionsToApprove(depth, function(error, toApprove) {

        if (error) {
            return callback(error)
        }

        // attach to tangle - do pow
        self.attachToTangle(toApprove.trunkTransaction, toApprove.branchTransaction, minWeightMagnitude, trytes, function(error, attached) {

            if (error) {
                return callback(error)
            }

            // If the user is connected to the sandbox, we have to monitor the POW queue
            // to check if the POW job was completed
            if (self.sandbox) {

                var job = self.sandbox + '/jobs/' + attached.id;

                // Do the Sandbox send function
                self._makeRequest.sandboxSend(job, function(e, attachedTrytes) {

                    if (e) {
                        return callback(e);
                    }

                    self.storeAndBroadcast(attachedTrytes, function(error, success) {

                        if (error) {
                            return callback(error);
                        }

                        var finalTxs = [];

                        attachedTrytes.forEach(function(trytes) {
                            finalTxs.push(Utils.transactionObject(trytes));
                        })

                        return callback(null, finalTxs);

                    })
                })
            } else {

                // Broadcast and store tx
                self.storeAndBroadcast(attached, function(error, success) {

                    if (error) {
                        return callback(error);
                    }

                    var finalTxs = [];

                    attached.forEach(function(trytes) {
                        finalTxs.push(Utils.transactionObject(trytes));
                    })

                    return callback(null, finalTxs);

                })
            }
        })
    })
}

/**
*   Prepares Transfer, gets transactions to approve
*   attaches to Tangle, broadcasts and stores
*
*   @method sendTransfer
*   @param {string} seed
*   @param {int} depth
*   @param {int} minWeightMagnitude
*   @param {array} transfers
*   @param {object} options
*       @property {array} inputs List of inputs used for funding the transfer
*       @property {string} address if defined, this address wil be used for sending the remainder value to
*   @param {function} callback
*   @returns {object} analyzed Transaction objects
**/
api.prototype.sendTransfer = function(seed, depth, minWeightMagnitude, transfers, options, callback) {

    var self = this;

    // Validity check for number of arguments
    if (arguments.length < 5) {
        return callback(new Error("Invalid number of arguments"));
    }

    // If no options provided, switch arguments
    if (arguments.length === 5 && Object.prototype.toString.call(options) === "[object Function]") {
        callback = options;
        options = {};
    }

    // Check if correct depth and minWeightMagnitude
    if (!inputValidator.isValue(depth) || !inputValidator.isValue(minWeightMagnitude)) {

        return callback(errors.invalidInputs());
    }

    self.prepareTransfers(seed, transfers, options, function(error, trytes) {

        if (error) {
            return callback(error)
        }

        self.sendTrytes(trytes, depth, minWeightMagnitude, callback);
    })
}

/**
*   Replays a transfer by doing Proof of Work again
*
*   @method replayBundle
*   @param {string} tail
*   @param {int} depth
*   @param {int} minWeightMagnitude
*   @param {function} callback
*   @returns {object} analyzed Transaction objects
**/
api.prototype.replayBundle = function(tail, depth, minWeightMagnitude, callback) {

    var self = this;

    // Check if correct tail hash
    if (!inputValidator.isHash(tail)) {

        return callback(errors.invalidTrytes());
    }


    // Check if correct depth and minWeightMagnitude
    if (!inputValidator.isValue(depth) || !inputValidator.isValue(minWeightMagnitude)) {

        return callback(errors.invalidInputs());
    }


    self.getBundle(tail, function(error, bundle) {

        if (error) return callback(error);

        // Get the trytes of all the bundle objects
        var bundleTrytes = [];

        bundle.forEach(function(bundleTx) {
            bundleTrytes.push(Utils.transactionTrytes(bundleTx));
        })

        return self.sendTrytes(bundleTrytes.reverse(), depth, minWeightMagnitude, callback);
    })
}

/**
*   Re-Broadcasts a transfer
*
*   @method broadcastBundle
*   @param {string} tail
*   @param {function} callback
*   @returns {object} analyzed Transaction objects
**/
api.prototype.broadcastBundle = function(tail, callback) {

    var self = this;

    // Check if correct tail hash
    if (!inputValidator.isHash(tail)) {

        return callback(errors.invalidTrytes());
    }

    self.getBundle(tail, function(error, bundle) {

        if (error) return callback(error);

        // Get the trytes of all the bundle objects
        var bundleTrytes = [];
        bundle.forEach(function(bundleTx) {
            bundleTrytes.push(Utils.transactionTrytes(bundleTx));
        })

        return self.broadcastTransactions(bundleTrytes.reverse(), callback);
    })
}


/**
*   Generates a new address
*
*   @method newAddress
*   @param      {string} seed
*   @param      {int} index
*   @param      {int} security      Security level of the private key
*   @param      {bool} checksum
*   @returns    {string} address     Transaction objects
**/
api.prototype._newAddress = function(seed, index, security, checksum) {

    var key = Signing.key(Converter.trits(seed), index, security);
    var digests = Signing.digests(key);
    var addressTrits = Signing.address(digests);
    var address = Converter.trytes(addressTrits)

    if (checksum) {
        address = Utils.addChecksum(address);
    }

    return address;
}

/**
*   Generates a new address either deterministically or index-based
*
*   @method getNewAddress
*   @param {string} seed
*   @param {object} options
*       @property   {int} index         Key index to start search from
*       @property   {bool} checksum     add 9-tryte checksum
*       @property   {int} total         Total number of addresses to return
*       @property   {int} security      Security level to be used for the private key / address. Can be 1, 2 or 3
*       @property   {bool} returnAll    return all searched addresses
*   @param {function} callback
*   @returns {string | array} address List of addresses
**/
api.prototype.getNewAddress = function(seed, options, callback) {

    var self = this;

    // If no options provided, switch arguments
    if (arguments.length === 2 && Object.prototype.toString.call(options) === "[object Function]") {
        callback = options;
        options = {};
    }

    // validate the seed
    if (!inputValidator.isTrytes(seed)) {

        return callback(errors.invalidSeed());
    }

    // default index value
    var index = 0;

    if ('index' in options) {

        index = options.index;

        // validate the index option
        if (!inputValidator.isValue(index) || index < 0) {

            return callback(errors.invalidIndex());
        }
    }

    var checksum = options.checksum || false;
    var total = options.total || null;

    // If no user defined security, use the standard value of 2
    var security = 2;

    if ('security' in options) {

      security = options.security;

      // validate the security option
      if (!inputValidator.isValue(security) || security < 1 || security > 3) {

        return callback(errors.invalidSecurity());
      }
    }


    var allAddresses = [];


    // Case 1: total
    //
    // If total number of addresses to generate is supplied, simply generate
    // and return the list of all addresses
    if (total) {
        // Increase index with each iteration
        for (var i = 0; i < total; i++, index++) {

            var address = self._newAddress(seed, index, security, checksum);
            allAddresses.push(address);
        }

        return callback(null, allAddresses);
    }
    //  Case 2: no total provided
    //
    //  Continue calling findTransactions to see if address was already created
    //  if null, return list of addresses
    //
    else {

        async.doWhilst(function(callback) {
            // Iteratee function

            var newAddress = self._newAddress(seed, index, security, checksum);

            self.findTransactions({'addresses': Array(newAddress)}, function(error, transactions) {

                if (error) {
                    return callback(error);
                }
                callback(null, newAddress, transactions)
            })

        }, function(address, transactions) {
            // Test function with validity check

            if (options.returnAll) {
                allAddresses.push(address)
            }

            // Increase the index
            index += 1;

            // Validity check
            return transactions.length > 0;

        }, function(err, address) {
            // Final callback

            if (err) {
                return callback(err);
            } else {

                // If returnAll, return list of allAddresses
                // else return the last address that was generated
                var addressToReturn = options.returnAll ? allAddresses : address;

                return callback(null, addressToReturn);
            }
        })
    }
}

/**
*   Gets the inputs of a seed
*
*   @method getInputs
*   @param {string} seed
*   @param {object} options
*       @property {int} start Starting key index
*       @property {int} end Ending key index
*       @property {int} threshold Min balance required
*       @property {int} security secuirty level of private key / seed
*   @param {function} callback
**/
api.prototype.getInputs = function(seed, options, callback) {

    var self = this;

    // If no options provided, switch arguments
    if (arguments.length === 2 && Object.prototype.toString.call(options) === "[object Function]") {
        callback = options;
        options = {};
    }

    // validate the seed
    if (!inputValidator.isTrytes(seed)) {

        return callback(errors.invalidSeed());
    }

    var start = options.start || 0;
    var end = options.end || null;
    var threshold = options.threshold || null;
    // If no user defined security, use the standard value of 2
    var security = options.security || 2;

    // If start value bigger than end, return error
    // or if difference between end and start is bigger than 500 keys
    if (options.end && (start > end || end > (start + 500))) {
        return callback(new Error("Invalid inputs provided"))
    }

    //  Case 1: start and end
    //
    //  If start and end is defined by the user, simply iterate through the keys
    //  and call getBalances
    if (end) {

        var allAddresses = [];

        for (var i = start; i < end; i++) {

            var address = self._newAddress(seed, i, security, false);
            allAddresses.push(address);
        }

        getBalanceAndFormat(allAddresses);
    }
    //  Case 2: iterate till threshold || end
    //
    //  Either start from index: 0 or start (if defined) until threshold is reached.
    //  Calls getNewAddress and deterministically generates and returns all addresses
    //  We then do getBalance, format the output and return it
    else {

        self.getNewAddress(seed, {'index': start, 'returnAll': true, 'security': security}, function(error, addresses) {

            if (error) {
                return callback(error);
            } else {
                getBalanceAndFormat(addresses);
            }
        })
    }


    //  Calls getBalances and formats the output
    //  returns the final inputsObject then
    function getBalanceAndFormat(addresses) {

        self.getBalances(addresses, 100, function(error, balances) {

            if (error) {
                return callback(error);
            } else {

                var inputsObject = {
                    'inputs': [],
                    'totalBalance': 0
                }

                // If threshold defined, keep track of whether reached or not
                // else set default to true
                var thresholdReached = threshold ? false : true;

                for (var i = 0; i < addresses.length; i++) {

                    var balance = parseInt(balances.balances[i]);

                    if (balance > 0) {

                        var newEntry = {
                            'address': addresses[i],
                            'balance': balance,
                            'keyIndex': start + i,
                            'security': security
                        }

                        // Add entry to inputs
                        inputsObject.inputs.push(newEntry);
                        // Increase totalBalance of all aggregated inputs
                        inputsObject.totalBalance += balance;

                        if (threshold && inputsObject.totalBalance >= threshold) {

                            thresholdReached = true;
                            break;
                        }
                    }
                }

                if (thresholdReached) {
                    return callback(null, inputsObject);
                } else {
                    return callback(new Error("Not enough balance"));
                }
            }
        })
    }
}


/**
*   Prepares transfer by generating bundle, finding and signing inputs
*
*   @method prepareTransfers
*   @param {string} seed
*   @param {object} transfers
*   @param {object} options
*       @property {array} inputs Inputs used for signing. Needs to have correct security, keyIndex and address value
*       @property {string} address Remainder address
*       @property {int} security security level to be used for getting inputs and addresses
*       @property {string} hmacKey HMAC key used for attaching an HMAC
*   @param {function} callback
*   @returns {array} trytes Returns bundle trytes
**/
api.prototype.prepareTransfers = function(seed, transfers, options, callback) {

    var self = this;
    var addHMAC = false;
    var addedHMAC = false;

    // If no options provided, switch arguments
    if (arguments.length === 3 && Object.prototype.toString.call(options) === "[object Function]") {
        callback = options;
        options = {};
    }

    // validate the seed
    if (!inputValidator.isTrytes(seed)) {

        return callback(errors.invalidSeed());
    }

    if (options.hasOwnProperty('hmacKey') && options.hmacKey) {

        if(!inputValidator.isTrytes(options.hmacKey)) {
            return callback(errors.invalidTrytes());
        }
        addHMAC = true;
    }

    // If message or tag is not supplied, provide it
    // Also remove the checksum of the address if it's there after validating it
    transfers.forEach(function(thisTransfer) {

        thisTransfer.message = thisTransfer.message ? thisTransfer.message : '';
        thisTransfer.obsoleteTag = thisTransfer.obsoleteTag ? thisTransfer.obsoleteTag : '';

        if (addHMAC && thisTransfer.value > 0) {
            thisTransfer.message = nullHashTrytes + thisTransfer.message;
            addedHMAC = true;
        }

        // If address with checksum, validate it
        if (thisTransfer.address.length === 90) {

            if (!Utils.isValidChecksum(thisTransfer.address)) {

                return callback(errors.invalidChecksum(thisTransfer.address));

            }
        }

        thisTransfer.address = Utils.noChecksum(thisTransfer.address);
    })

    // Input validation of transfers object
    if (!inputValidator.isTransfersArray(transfers)) {
        return callback(errors.invalidTransfers());
    }

    // If inputs provided, validate the format
    if (options.inputs && !inputValidator.isInputs(options.inputs)) {
        return callback(errors.invalidInputs());
    }

    var remainderAddress = options.address || null;
    var chosenInputs = options.inputs || [];
    var security = options.security || 2;

    // Create a new bundle
    var bundle = new Bundle();

    var totalValue = 0;
    var signatureFragments = [];
    var tag;

    //
    //  Iterate over all transfers, get totalValue
    //  and prepare the signatureFragments, message and tag
    //
    for (var i = 0; i < transfers.length; i++) {

        var signatureMessageLength = 1;

        // If message longer than 2187 trytes, increase signatureMessageLength (add 2nd transaction)
        if (transfers[i].message.length > 2187) {

            // Get total length, message / maxLength (2187 trytes)
            signatureMessageLength += Math.floor(transfers[i].message.length / 2187);

            var msgCopy = transfers[i].message;

            // While there is still a message, copy it
            while (msgCopy) {

                var fragment = msgCopy.slice(0, 2187);
                msgCopy = msgCopy.slice(2187, msgCopy.length);

                // Pad remainder of fragment
                for (var j = 0; fragment.length < 2187; j++) {
                    fragment += '9';
                }

                signatureFragments.push(fragment);
            }
        } else {
            // Else, get single fragment with 2187 of 9's trytes
            var fragment = '';

            if (transfers[i].message) {
                fragment = transfers[i].message.slice(0, 2187)
            }

            for (var j = 0; fragment.length < 2187; j++) {
                fragment += '9';
            }

            signatureFragments.push(fragment);
        }

        // get current timestamp in seconds
        var timestamp = Math.floor(Date.now() / 1000);

        // If no tag defined, get 27 tryte tag.
        tag = transfers[i].obsoleteTag ? transfers[i].obsoleteTag : '999999999999999999999999999';

        // Pad for required 27 tryte length
        for (var j = 0; tag.length < 27; j++) {
            tag += '9';
        }

        // Add first entries to the bundle
        // Slice the address in case the user provided a checksummed one
        bundle.addEntry(signatureMessageLength, transfers[i].address, transfers[i].value, tag, timestamp)
        // Sum up total value
        totalValue += parseInt(transfers[i].value);
    }

    // Get inputs if we are sending tokens
    if (totalValue) {

        //  Case 1: user provided inputs
        //
        //  Validate the inputs by calling getBalances
        if (options.inputs) {

            // Get list if addresses of the provided inputs
            var inputsAddresses = [];
            options.inputs.forEach(function(inputEl) {
                inputsAddresses.push(inputEl.address);
            })

            self.getBalances(inputsAddresses, 100, function(error, balances) {

                if (error) return callback(error);

                var confirmedInputs = [];
                var totalBalance = 0;
                for (var i = 0; i < balances.balances.length; i++) {
                    var thisBalance = parseInt(balances.balances[i]);

                    // If input has balance, add it to confirmedInputs
                    if (thisBalance > 0) {
                        totalBalance += thisBalance;

                        var inputEl = options.inputs[i];
                        inputEl.balance = thisBalance;

                        confirmedInputs.push(inputEl);

                        // if we've already reached the intended input value, break out of loop
                        if (totalBalance >= totalValue) {
                            break;
                        }
                    }
                }

                // Return not enough balance error
                if (totalValue > totalBalance) {
                    return callback(new Error("Not enough balance"));
                }

                addRemainder(confirmedInputs);
            });

        }

        //  Case 2: Get inputs deterministically
        //
        //  If no inputs provided, derive the addresses from the seed and
        //  confirm that the inputs exceed the threshold
        else {

            self.getInputs(seed, { 'threshold': totalValue, 'security': security }, function(error, inputs) {

                // If inputs with enough balance
                if (!error) {

                    addRemainder(inputs.inputs);
                } else {

                    return callback(error);
                }
            })
        }
    } else {

        // If no input required, don't sign and simply finalize the bundle
        bundle.finalize();
        bundle.addTrytes(signatureFragments);

        var bundleTrytes = []
        bundle.bundle.forEach(function(tx) {
            bundleTrytes.push(Utils.transactionTrytes(tx))
        })

        return callback(null, bundleTrytes.reverse());
    }



    function addRemainder(inputs) {

        var totalTransferValue = totalValue;
        for (var i = 0; i < inputs.length; i++) {

            var thisBalance = inputs[i].balance;
            var toSubtract = 0 - thisBalance;
            var timestamp = Math.floor(Date.now() / 1000);

            // Add input as bundle entry
            bundle.addEntry(inputs[i].security, inputs[i].address, toSubtract, tag, timestamp);

            // If there is a remainder value
            // Add extra output to send remaining funds to
            if (thisBalance >= totalTransferValue) {

                var remainder = thisBalance - totalTransferValue;

                // If user has provided remainder address
                // Use it to send remaining funds to
                if (remainder > 0 && remainderAddress) {

                    // Remainder bundle entry
                    bundle.addEntry(1, remainderAddress, remainder, tag, timestamp);

                    // Final function for signing inputs
                    signInputsAndReturn(inputs);
                }
                else if (remainder > 0) {

                    // Generate a new Address by calling getNewAddress
                    self.getNewAddress(seed, {'security': security}, function(error, address) {

                        if (error) return callback(error)

                        var timestamp = Math.floor(Date.now() / 1000);

                        // Remainder bundle entry
                        bundle.addEntry(1, address, remainder, tag, timestamp);

                        // Final function for signing inputs
                        signInputsAndReturn(inputs);
                    })
                } else {

                    // If there is no remainder, do not add transaction to bundle
                    // simply sign and return
                    signInputsAndReturn(inputs);
                }

            // If multiple inputs provided, subtract the totalTransferValue by
            // the inputs balance
            } else {

                totalTransferValue -= thisBalance;
            }
        }
    }

    function signInputsAndReturn(inputs) {

        bundle.finalize();
        bundle.addTrytes(signatureFragments);

        //  SIGNING OF INPUTS
        //
        //  Here we do the actual signing of the inputs
        //  Iterate over all bundle transactions, find the inputs
        //  Get the corresponding private key and calculate the signatureFragment
        for (var i = 0; i < bundle.bundle.length; i++) {

            if (bundle.bundle[i].value < 0) {

                var thisAddress = bundle.bundle[i].address;

                // Get the corresponding keyIndex and security of the address
                var keyIndex;
                var keySecurity;
                for (var k = 0; k < inputs.length; k++) {

                    if (inputs[k].address === thisAddress) {

                        keyIndex = inputs[k].keyIndex;
                        keySecurity = inputs[k].security ? inputs[k].security : security;
                        break;
                    }
                }

                var bundleHash = bundle.bundle[i].bundle;

                // Get corresponding private key of address
                var key = Signing.key(Converter.trits(seed), keyIndex, keySecurity);

                //  Get the normalized bundle hash
                var normalizedBundleHash = bundle.normalizedBundle(bundleHash);
                var normalizedBundleFragments = [];

                // Split hash into 3 fragments
                for (var l = 0; l < 3; l++) {
                    normalizedBundleFragments[l] = normalizedBundleHash.slice(l * 27, (l + 1) * 27);
                }

                //  First 6561 trits for the firstFragment
                var firstFragment = key.slice(0, 6561);

                //  First bundle fragment uses the first 27 trytes
                var firstBundleFragment = normalizedBundleFragments[0];

                //  Calculate the new signatureFragment with the first bundle fragment
                var firstSignedFragment = Signing.signatureFragment(firstBundleFragment, firstFragment);

                //  Convert signature to trytes and assign the new signatureFragment
                bundle.bundle[i].signatureMessageFragment = Converter.trytes(firstSignedFragment);

                // if user chooses higher than 27-tryte security
                // for each security level, add an additional signature
                for (var j = 1; j < keySecurity; j++) {

                    //  Because the signature is > 2187 trytes, we need to
                    //  find the subsequent transaction to add the remainder of the signature
                    //  Same address as well as value = 0 (as we already spent the input)
                    if (bundle.bundle[i + j].address === thisAddress && bundle.bundle[i + j].value === 0) {

                        // Use the next 6561 trits
                        var nextFragment = key.slice(6561 * j,  (j + 1) * 6561);

                        var nextBundleFragment = normalizedBundleFragments[j];

                        //  Calculate the new signature
                        var nextSignedFragment = Signing.signatureFragment(nextBundleFragment, nextFragment);

                        //  Convert signature to trytes and assign it again to this bundle entry
                        bundle.bundle[i + j].signatureMessageFragment = Converter.trytes(nextSignedFragment);
                    }
                }
            }
        }

        if(addedHMAC) {
            var hmac = new HMAC(options.hmacKey);
            hmac.addHMAC(bundle);
        }

        var bundleTrytes = []

        // Convert all bundle entries into trytes
        bundle.bundle.forEach(function(tx) {
            bundleTrytes.push(Utils.transactionTrytes(tx))
        })

        return callback(null, bundleTrytes.reverse());
    }
}



/**
*   Basically traverse the Bundle by going down the trunkTransactions until
*   the bundle hash of the transaction is no longer the same. In case the input
*   transaction hash is not a tail, we return an error.
*
*   @method traverseBundle
*   @param {string} trunkTx Hash of a trunk or a tail transaction  of a bundle
*   @param {string} bundleHash
*   @param {array} bundle List of bundles to be populated
*   @returns {array} bundle Transaction objects
**/
api.prototype.traverseBundle = function(trunkTx, bundleHash, bundle, callback) {

    var self = this;

    // Get trytes of transaction hash
    self.getTrytes(Array(trunkTx), function(error, trytesList) {

        if (error) return callback(error);

        var trytes = trytesList[0]

        if (!trytes) return callback(new Error("Bundle transactions not visible"))

        // get the transaction object
        var txObject = Utils.transactionObject(trytes);

        if (!txObject) return callback(new Error("Invalid trytes, could not create object"));

        // If first transaction to search is not a tail, return error
        if (!bundleHash && txObject.currentIndex !== 0) {

            return callback(new Error("Invalid tail transaction supplied."));
        }

        // If no bundle hash, define it
        if (!bundleHash) {

            bundleHash = txObject.bundle;
        }

        // If different bundle hash, return with bundle
        if (bundleHash !== txObject.bundle) {

            return callback(null, bundle);
        }

        // If only one bundle element, return
        if (txObject.lastIndex === 0 && txObject.currentIndex === 0) {

            return callback(null, Array(txObject));
        }

        // Define new trunkTransaction for search
        var trunkTx = txObject.trunkTransaction;

        // Add transaction object to bundle
        bundle.push(txObject);

        // Continue traversing with new trunkTx
        return self.traverseBundle(trunkTx, bundleHash, bundle, callback);
    })
}

/**
*   Gets the associated bundle transactions of a single transaction
*   Does validation of signatures, total sum as well as bundle order
*
*   @method getBundle
*   @param {string} transaction Hash of a tail transaction
*   @returns {list} bundle Transaction objects
**/
api.prototype.getBundle = function(transaction, callback) {

    var self = this;

    // inputValidator: Check if correct hash
    if (!inputValidator.isHash(transaction)) {

        return callback(errors.invalidInputs(transaction));
    }

    // Initiate traverseBundle
    self.traverseBundle(transaction, null, Array(), function(error, bundle) {

        if (error) return callback(error);

        if (!Utils.isBundle(bundle)) {

            return callback(new Error("Invalid Bundle provided"))

        } else {

            // Return bundle element
            return callback(null, bundle);

        }
    })
}


/**
*   Internal function to get the formatted bundles of a list of addresses
*
*   @method _bundlesFromAddresses
*   @param {list} addresses List of addresses
*   @param {bool} inclusionStates
*   @returns {list} bundles Transaction objects
**/
api.prototype._bundlesFromAddresses = function(addresses, inclusionStates, callback) {

    var self = this;

    // call wrapper function to get txs associated with addresses
    self.findTransactionObjects({'addresses': addresses}, function(error, transactionObjects) {

        if (error) return callback(error);

        // set of tail transactions
        var tailTransactions = new Set();
        var nonTailBundleHashes = new Set();

        transactionObjects.forEach(function(thisTransaction) {

            // Sort tail and nonTails
            if (thisTransaction.currentIndex === 0) {

                tailTransactions.add(thisTransaction.hash);
            } else {

                nonTailBundleHashes.add(thisTransaction.bundle)
            }
        })

        // Get tail transactions for each nonTail via the bundle hash
        self.findTransactionObjects({'bundles': Array.from(nonTailBundleHashes)}, function(error, bundleObjects) {

            if (error) return callback(error);

            bundleObjects.forEach(function(thisTransaction) {

                if (thisTransaction.currentIndex === 0) {

                    tailTransactions.add(thisTransaction.hash);
                }
            })

            var finalBundles = [];
            var tailTxArray = Array.from(tailTransactions);

            // If inclusionStates, get the confirmation status
            // of the tail transactions, and thus the bundles
            async.waterfall([

                //
                // 1. Function
                //
                function(cb) {

                    if (inclusionStates) {

                        self.getLatestInclusion(tailTxArray, function(error, states) {

                            // If error, return it to original caller
                            if (error) return callback(error);

                            cb(null, states);
                        })
                    } else {
                        cb(null, []);
                    }
                },

                //
                // 2. Function
                //
                function(tailTxStates, cb) {

                    // Map each tail transaction to the getBundle function
                    // format the returned bundles and add inclusion states if necessary
                    async.mapSeries(tailTxArray, function(tailTx, cb2) {

                         self.getBundle(tailTx, function(error, bundle) {

                             // If error returned from getBundle, simply ignore it
                             // because the bundle was most likely incorrect
                             if (!error) {

                                 // If inclusion states, add to each bundle entry
                                 if (inclusionStates) {
                                     var thisInclusion = tailTxStates[tailTxArray.indexOf(tailTx)];

                                     bundle.forEach(function(bundleTx) {

                                         bundleTx['persistence'] = thisInclusion;
                                     })
                                 }

                                 finalBundles.push(bundle);
                             }
                             cb2(null, true);
                         })
                    }, function(error, results) {

                        // credit: http://stackoverflow.com/a/8837505
                        // Sort bundles by timestamp
                        finalBundles.sort(function(a, b) {
                            var x = parseInt(a[0]['attachmentTimestamp']); var y = parseInt(b[0]['attachmentTimestamp']);
                            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                        });

                        return callback(error, finalBundles);
                    })
                }
            ])
        })
    })
}

/**
*   @method getTransfers
*   @param {string} seed
*   @param {object} options
*       @property {int} start Starting key index
*       @property {int} end Ending key index
*       @property {int} security security level to be used for getting inputs and addresses
*       @property {bool} inclusionStates returns confirmation status of all transactions
*   @param {function} callback
*   @returns {object} success
**/
api.prototype.getTransfers = function(seed, options, callback) {

    var self = this;

    // If no options provided, switch arguments
    if (arguments.length === 2 && Object.prototype.toString.call(options) === "[object Function]") {
        callback = options;
        options = {};
    }

    // inputValidator: Check if correct seed
    if (!inputValidator.isTrytes(seed)) {

        return callback(errors.invalidSeed(seed));
    }

    var start = options.start || 0;
    var end = options.end || null;
    var inclusionStates = options.inclusionStates || null;
    var security = options.security || 2;

    // If start value bigger than end, return error
    // or if difference between end and start is bigger than 500 keys
    if (start > end || end > (start + 500)) {
        return callback(new Error("Invalid inputs provided"))
    }

    // first call findTransactions
    // If a transaction is non tail, get the tail transactions associated with it
    // add it to the list of tail transactions

    var addressOptions = {
        index: start,
        total: end ? end - start : null,
        returnAll: true,
        security: security
    }

    //  Get a list of all addresses associated with the users seed
    self.getNewAddress(seed, addressOptions, function(error, addresses) {

        if (error) return callback(error);

        return self._bundlesFromAddresses(addresses, inclusionStates, callback);
    })
}


/**
*   Similar to getTransfers, just that it returns additional account data
*
*   @method getAccountData
*   @param {string} seed
*   @param {object} options
*       @property {int} start Starting key index
*       @property {int} security security level to be used for getting inputs and addresses
*       @property {int} end Ending key index
*   @param {function} callback
*   @returns {object} success
**/
api.prototype.getAccountData = function(seed, options, callback) {

    var self = this;

    // If no options provided, switch arguments
    if (arguments.length === 2 && Object.prototype.toString.call(options) === "[object Function]") {
        callback = options;
        options = {};
    }

    // inputValidator: Check if correct seed
    if (!inputValidator.isTrytes(seed)) {

        return callback(errors.invalidSeed(seed));
    }

    var start = options.start || 0;
    var end = options.end || null;
    var security = options.security || 2;

    // If start value bigger than end, return error
    // or if difference between end and start is bigger than 1000 keys
    if (start > end || end > (start + 1000)) {
        return callback(new Error("Invalid inputs provided"))
    }

    //  These are the values that will be returned to the original caller
    //  @latestAddress: latest unused address
    //  @addresses:     all addresses associated with this seed that have been used
    //  @transfers:     all sent / received transfers
    //  @inputs:        all inputs of the account
    //  @balance:       the confirmed balance
    var valuesToReturn = {
        'latestAddress' : '',
        'addresses'     : [],
        'transfers'     : [],
        'inputs'        : [],
        'balance'       : 0
    }

    // first call findTransactions
    // If a transaction is non tail, get the tail transactions associated with it
    // add it to the list of tail transactions
    var addressOptions = {
        index: start,
        total: end ? end - start : null,
        returnAll: true,
        security: security
    }

    //  Get a list of all addresses associated with the users seed
    self.getNewAddress(seed, addressOptions, function(error, addresses) {

        if (error) return callback(error);

        // assign the last address as the latest address
        // since it has no transactions associated with it
        valuesToReturn.latestAddress = addresses[addresses.length - 1];

        // Add all returned addresses to the lsit of addresses
        // remove the last element as that is the most recent address
        valuesToReturn.addresses = addresses.slice(0, -1);

        // get all bundles from a list of addresses
        self._bundlesFromAddresses(addresses, true, function(error, bundles) {

            if (error) return callback(error);

            // add all transfers
            valuesToReturn.transfers = bundles;

            // Get the correct balance count of all addresses
            self.getBalances(valuesToReturn.addresses, 100, function(error, balances) {

                if (error) return callback(error);

                balances.balances.forEach(function(balance, index) {

                    var balance = parseInt(balance);

                    valuesToReturn.balance += balance;

                    if (balance > 0) {

                        var newInput = {
                            'address': valuesToReturn.addresses[index],
                            'keyIndex': index,
                            'security': security,
                            'balance': balance
                        }

                        valuesToReturn.inputs.push(newInput);

                    }
                })

                return callback(null, valuesToReturn);
            })
        })
    })
}

/**
*   Determines whether you should replay a transaction
*   or make a new one (either with the same input, or a different one)
*
*   @method isReattachable
*   @param {String || Array} inputAddresses Input address you want to have tested
*   @returns {Bool}
**/
api.prototype.isReattachable = function(inputAddresses, callback) {

    var self = this;

    // if string provided, make array
    if (inputValidator.isString(inputAddresses)) inputAddresses = new Array(inputAddresses)

    // Categorized value transactions
    // hash -> txarray map
    var addressTxsMap = {};
    var addresses = [];

    for (var i = 0; i < inputAddresses.length; i++) {

        var address = inputAddresses[i];

        if (!inputValidator.isAddress(address)) {

            return callback(errors.invalidInputs());

        }

        var address = Utils.noChecksum(address);

        addressTxsMap[address] = new Array();
        addresses.push(address);
    }

    self.findTransactionObjects( { 'addresses': addresses }, function( e, transactions ) {

        if (e) return callback(e);


        var valueTransactions = [];

        transactions.forEach(function(thisTransaction) {

            if (thisTransaction.value < 0) {

                var txAddress = thisTransaction.address;
                var txHash = thisTransaction.hash;

                // push hash to map
                addressTxsMap[txAddress].push(txHash)

                valueTransactions.push(txHash);

            }
        })

        if ( valueTransactions.length > 0 ) {

            // get the includion states of all the transactions
            self.getLatestInclusion( valueTransactions, function( e, inclusionStates ) {

                // bool array
                var results = addresses.map(function(address) {

                    var txs = addressTxsMap[address];
                    var numTxs = txs.length;

                    if (numTxs === 0) {
                        return true;
                    }

                    var shouldReattach = true;

                    for (var i = 0; i < numTxs; i++) {

                        var tx = txs[i];

                        var txIndex = valueTransactions.indexOf(tx);
                        var isConfirmed = inclusionStates[txIndex];
                        shouldReattach = isConfirmed ? false : true;

                        // if tx confirmed, break
                        if (isConfirmed)
                            break;
                    }


                    return shouldReattach;

                })

                // If only one entry, return first
                if (results.length === 1) {
                    results = results[0];
                }

                return callback(null, results);

            })

        } else {

            var results = [];
            var numAddresses = addresses.length;

            // prepare results array if multiple addresses
            if ( numAddresses > 1 ) {

                for ( var i = 0; i < numAddresses; i++ ) {
                    results.push(true);
                }

            } else {
                results = true;
            }

            return callback(null, results);
        }
    })
}

module.exports = api;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/**
*   @method attachToTangle
*   @param {string} trunkTransaction
*   @param {string} branchTransaction
*   @param {integer} minWeightMagnitude
*   @param {array} trytes
*   @returns {object} command
**/
var attachToTangle = function(trunkTransaction, branchTransaction, minWeightMagnitude, trytes) {

    var command = {
        'command'             : 'attachToTangle',
        'trunkTransaction'    : trunkTransaction,
        'branchTransaction'   : branchTransaction,
        'minWeightMagnitude'  : minWeightMagnitude,
        'trytes'              : trytes
    }

    return command;
}

/**
*   @method findTransactions
*   @param {object} searchValues Can be bundles, addresses, tags and approvees
*   @returns {object} command
**/
var findTransactions = function(searchValues) {

    var command = {
        'command' : 'findTransactions'
    }

    var searchKey = Object.keys(searchValues);

    searchKey.forEach(function(key) {
        command[key] = searchValues[key];
    })

    return command;
}

/**
*   @method getBalances
*   @param {array} addresses
*   @param {int} threshold
*   @returns {object} command
**/
var getBalances = function(addresses, threshold) {

    var command = {
        'command'    : 'getBalances',
        'addresses'  : addresses,
        'threshold'  : threshold
    }

    return command;
}

/**
*   @method getInclusionStates
*   @param {array} transactions
*   @param {array} tips
*   @returns {object} command
**/
var getInclusionStates = function(transactions, tips) {

    var command = {
        'command'       : 'getInclusionStates',
        'transactions'  : transactions,
        'tips'          : tips
    }

    return command;
}

/**
*   @method getNodeInfo
*   @returns {object} command
**/
var getNodeInfo = function() {

    var command = {
        'command' : 'getNodeInfo'
    }

    return command;
}

/**
*   @method getNeighbors
*   @returns {object} command
**/
var getNeighbors = function() {

    var command = {
        'command' : 'getNeighbors'
    }

    return command;
}

/**
*   @method addNeighbors
*   @param {Array} uris
*   @returns {object} command
**/
var addNeighbors = function(uris) {

    var command = {
        'command' : 'addNeighbors',
        'uris'    : uris
    }

    return command;
}

/**
*   @method removeNeighbors
*   @param {Array} uris
*   @returns {object} command
**/
var removeNeighbors = function(uris) {

    var command = {
        'command' : 'removeNeighbors',
        'uris'    : uris
    }

    return command;
}

/**
*   @method getTips
*   @returns {object} command
**/
var getTips = function() {

    var command = {
        'command' : 'getTips'
    }

    return command;
}

/**
*   @method getTransactionsToApprove
*   @param {int} depth
*   @returns {object} command
**/
var getTransactionsToApprove = function(depth) {

    var command = {
        'command'   : 'getTransactionsToApprove',
        'depth'     : depth
    }

    return command;
}

/**
*   @method getTrytes
*   @param {array} hashes
*   @returns {object} command
**/
var getTrytes = function(hashes) {

    var command = {
        'command' :'getTrytes',
        'hashes'  : hashes
    }

    return command;
}

/**
*   @method interruptAttachingToTangle
*   @returns {object} command
**/
var interruptAttachingToTangle = function() {

    var command = {
        'command' : 'interruptAttachingToTangle'
    }

    return command;
}

/**
*   @method broadcastTransactions
*   @param {array} trytes
*   @returns {object} command
**/
var broadcastTransactions = function(trytes) {

    var command = {
        'command' : 'broadcastTransactions',
        'trytes'  : trytes
    }

    return command;
}

/**
*   @method storeTransactions
*   @param {array} trytes
*   @returns {object} command
**/
var storeTransactions = function(trytes) {

    var command = {
        'command' : 'storeTransactions',
        'trytes'  : trytes
    }

    return command;
}


module.exports = {
    attachToTangle              : attachToTangle,
    findTransactions            : findTransactions,
    getBalances                 : getBalances,
    getInclusionStates          : getInclusionStates,
    getNodeInfo                 : getNodeInfo,
    getNeighbors                : getNeighbors,
    addNeighbors                : addNeighbors,
    removeNeighbors             : removeNeighbors,
    getTips                     : getTips,
    getTransactionsToApprove    : getTransactionsToApprove,
    getTrytes                   : getTrytes,
    interruptAttachingToTangle  : interruptAttachingToTangle,
    broadcastTransactions       : broadcastTransactions,
    storeTransactions           : storeTransactions
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Curl = __webpack_require__(5);
var Converter = __webpack_require__(3);
var HMAC_ROUNDS = 27;

function hmac(key) {
    this._key = Converter.trits(key);
}

hmac.prototype.addHMAC = function(bundle) {
    var curl = new Curl(HMAC_ROUNDS);
    var key = this._key;
    for(var i = 0; i < bundle.bundle.length; i++) {
        if (bundle.bundle[i].value > 0) {
            var bundleHashTrits = Converter.trits(bundle.bundle[i].bundle);
            var hmac = new Int8Array(243);
            curl.initialize();
            curl.absorb(key);
            curl.absorb(bundleHashTrits);
            curl.squeeze(hmac);
            var hmacTrytes = Converter.trytes(hmac);
            bundle.bundle[i].signatureMessageFragment = hmacTrytes + bundle.bundle[i].signatureMessageFragment.substring(81, 2187);
        }
    }
}

module.exports = hmac;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.async = global.async || {})));
}(this, (function (exports) { 'use strict';

function slice(arrayLike, start) {
    start = start|0;
    var newLen = Math.max(arrayLike.length - start, 0);
    var newArr = Array(newLen);
    for(var idx = 0; idx < newLen; idx++)  {
        newArr[idx] = arrayLike[start + idx];
    }
    return newArr;
}

var initialParams = function (fn) {
    return function (/*...args, callback*/) {
        var args = slice(arguments);
        var callback = args.pop();
        fn.call(this, args, callback);
    };
};

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
    setTimeout(fn, 0);
}

function wrap(defer) {
    return function (fn/*, ...args*/) {
        var args = slice(arguments, 1);
        defer(function () {
            fn.apply(null, args);
        });
    };
}

var _defer;

if (hasSetImmediate) {
    _defer = setImmediate;
} else if (hasNextTick) {
    _defer = process.nextTick;
} else {
    _defer = fallback;
}

var setImmediate$1 = wrap(_defer);

/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */
function asyncify(func) {
    return initialParams(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if (isObject(result) && typeof result.then === 'function') {
            result.then(function(value) {
                invokeCallback(callback, null, value);
            }, function(err) {
                invokeCallback(callback, err.message ? err : new Error(err));
            });
        } else {
            callback(null, result);
        }
    });
}

function invokeCallback(callback, error, value) {
    try {
        callback(error, value);
    } catch (e) {
        setImmediate$1(rethrow, e);
    }
}

function rethrow(error) {
    throw error;
}

var supportsSymbol = typeof Symbol === 'function';

function isAsync(fn) {
    return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
}

function wrapAsync(asyncFn) {
    return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
}

function applyEach$1(eachfn) {
    return function(fns/*, ...args*/) {
        var args = slice(arguments, 1);
        var go = initialParams(function(args, callback) {
            var that = this;
            return eachfn(fns, function (fn, cb) {
                wrapAsync(fn).apply(that, args.concat(cb));
            }, callback);
        });
        if (args.length) {
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  value = Object(value);
  return (symToStringTag && symToStringTag in value)
    ? getRawTag(value)
    : objectToString(value);
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
var breakLoop = {};

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

function once(fn) {
    return function () {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

var getIterator = function (coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
};

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? {value: coll[i], key: i} : null;
    }
}

function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done)
            return null;
        i++;
        return {value: item.value, key: i};
    }
}

function createObjectIterator(obj) {
    var okeys = keys(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        return i < len ? {value: obj[key], key: key} : null;
    };
}

function iterator(coll) {
    if (isArrayLike(coll)) {
        return createArrayIterator(coll);
    }

    var iterator = getIterator(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}

function onlyOnce(fn) {
    return function() {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
        callback = once(callback || noop);
        if (limit <= 0 || !obj) {
            return callback(null);
        }
        var nextElem = iterator(obj);
        var done = false;
        var running = 0;

        function iterateeCallback(err, value) {
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            }
            else if (value === breakLoop || (done && running <= 0)) {
                done = true;
                return callback(null);
            }
            else {
                replenish();
            }
        }

        function replenish () {
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
            }
        }

        replenish();
    };
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachOfLimit(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
}

function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
    };
}

// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback) {
    callback = once(callback || noop);
    var index = 0,
        completed = 0,
        length = coll.length;
    if (length === 0) {
        callback(null);
    }

    function iteratorCallback(err, value) {
        if (err) {
            callback(err);
        } else if ((++completed === length) || value === breakLoop) {
            callback(null);
        }
    }

    for (; index < length; index++) {
        iteratee(coll[index], index, onlyOnce(iteratorCallback));
    }
}

// a generic version of eachOf which can handle array, object, and iterator cases.
var eachOfGeneric = doLimit(eachOfLimit, Infinity);

/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
 * var configs = {};
 *
 * async.forEachOf(obj, function (value, key, callback) {
 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
 *         if (err) return callback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }, function (err) {
 *     if (err) console.error(err.message);
 *     // configs is now a map of JSON data
 *     doSomethingWith(configs);
 * });
 */
var eachOf = function(coll, iteratee, callback) {
    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
    eachOfImplementation(coll, wrapAsync(iteratee), callback);
};

function doParallel(fn) {
    return function (obj, iteratee, callback) {
        return fn(eachOf, obj, wrapAsync(iteratee), callback);
    };
}

function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || noop;
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = wrapAsync(iteratee);

    eachfn(arr, function (value, _, callback) {
        var index = counter++;
        _iteratee(value, function (err, v) {
            results[index] = v;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}

/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */
var map = doParallel(_asyncMap);

/**
 * Applies the provided arguments to each function in the array, calling
 * `callback` after all functions have completed. If you only provide the first
 * argument, `fns`, then it will return a function which lets you pass in the
 * arguments as if it were a single function call. If more arguments are
 * provided, `callback` is required while `args` is still optional.
 *
 * @name applyEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
 * to all call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument, `fns`, is provided, it will
 * return a function which lets you pass in the arguments as if it were a single
 * function call. The signature is `(..args, callback)`. If invoked with any
 * arguments, `callback` is required.
 * @example
 *
 * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
 *
 * // partial application example:
 * async.each(
 *     buckets,
 *     async.applyEach([enableSearch, updateSchema]),
 *     callback
 * );
 */
var applyEach = applyEach$1(map);

function doParallelLimit(fn) {
    return function (obj, limit, iteratee, callback) {
        return fn(_eachOfLimit(limit), obj, wrapAsync(iteratee), callback);
    };
}

/**
 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
 *
 * @name mapLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
var mapLimit = doParallelLimit(_asyncMap);

/**
 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
 *
 * @name mapSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
var mapSeries = doLimit(mapLimit, 1);

/**
 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
 *
 * @name applyEachSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
 * call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument is provided, it will return
 * a function which lets you pass in the arguments as if it were a single
 * function call.
 */
var applyEachSeries = applyEach$1(mapSeries);

/**
 * Creates a continuation function with some arguments already applied.
 *
 * Useful as a shorthand when combined with other control flow functions. Any
 * arguments passed to the returned function are added to the arguments
 * originally passed to apply.
 *
 * @name apply
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {Function} fn - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
 * @returns {Function} the partially-applied function
 * @example
 *
 * // using apply
 * async.parallel([
 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
 *     async.apply(fs.writeFile, 'testfile2', 'test2')
 * ]);
 *
 *
 * // the same process without using apply
 * async.parallel([
 *     function(callback) {
 *         fs.writeFile('testfile1', 'test1', callback);
 *     },
 *     function(callback) {
 *         fs.writeFile('testfile2', 'test2', callback);
 *     }
 * ]);
 *
 * // It's possible to pass any number of additional arguments when calling the
 * // continuation:
 *
 * node> var fn = async.apply(sys.puts, 'one');
 * node> fn('two', 'three');
 * one
 * two
 * three
 */
var apply = function(fn/*, ...args*/) {
    var args = slice(arguments, 1);
    return function(/*callArgs*/) {
        var callArgs = slice(arguments);
        return fn.apply(null, args.concat(callArgs));
    };
};

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
 * their requirements. Each function can optionally depend on other functions
 * being completed first, and each function is run as soon as its requirements
 * are satisfied.
 *
 * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
 * will stop. Further tasks will not execute (so any other functions depending
 * on it will not run), and the main `callback` is immediately called with the
 * error.
 *
 * {@link AsyncFunction}s also receive an object containing the results of functions which
 * have completed so far as the first argument, if they have dependencies. If a
 * task function has no dependencies, it will only be passed a callback.
 *
 * @name auto
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Object} tasks - An object. Each of its properties is either a
 * function or an array of requirements, with the {@link AsyncFunction} itself the last item
 * in the array. The object's key of a property serves as the name of the task
 * defined by that property, i.e. can be used when specifying requirements for
 * other tasks. The function receives one or two arguments:
 * * a `results` object, containing the results of the previously executed
 *   functions, only passed if the task has any dependencies,
 * * a `callback(err, result)` function, which must be called when finished,
 *   passing an `error` (which can be `null`) and the result of the function's
 *   execution.
 * @param {number} [concurrency=Infinity] - An optional `integer` for
 * determining the maximum number of tasks that can be run in parallel. By
 * default, as many as possible.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback. Results are always returned; however, if an
 * error occurs, no further `tasks` will be performed, and the results object
 * will only contain partial results. Invoked with (err, results).
 * @returns undefined
 * @example
 *
 * async.auto({
 *     // this function will just be passed a callback
 *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
 *     showData: ['readData', function(results, cb) {
 *         // results.readData is the file's contents
 *         // ...
 *     }]
 * }, callback);
 *
 * async.auto({
 *     get_data: function(callback) {
 *         console.log('in get_data');
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         console.log('in make_folder');
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: ['get_data', 'make_folder', function(results, callback) {
 *         console.log('in write_file', JSON.stringify(results));
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(results, callback) {
 *         console.log('in email_link', JSON.stringify(results));
 *         // once the file is written let's email a link to it...
 *         // results.write_file contains the filename returned by write_file.
 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *     }]
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('results = ', results);
 * });
 */
var auto = function (tasks, concurrency, callback) {
    if (typeof concurrency === 'function') {
        // concurrency is optional, shift the args.
        callback = concurrency;
        concurrency = null;
    }
    callback = once(callback || noop);
    var keys$$1 = keys(tasks);
    var numTasks = keys$$1.length;
    if (!numTasks) {
        return callback(null);
    }
    if (!concurrency) {
        concurrency = numTasks;
    }

    var results = {};
    var runningTasks = 0;
    var hasError = false;

    var listeners = Object.create(null);

    var readyTasks = [];

    // for cycle detection:
    var readyToCheck = []; // tasks that have been identified as reachable
    // without the possibility of returning to an ancestor task
    var uncheckedDependencies = {};

    baseForOwn(tasks, function (task, key) {
        if (!isArray(task)) {
            // no dependencies
            enqueueTask(key, [task]);
            readyToCheck.push(key);
            return;
        }

        var dependencies = task.slice(0, task.length - 1);
        var remainingDependencies = dependencies.length;
        if (remainingDependencies === 0) {
            enqueueTask(key, task);
            readyToCheck.push(key);
            return;
        }
        uncheckedDependencies[key] = remainingDependencies;

        arrayEach(dependencies, function (dependencyName) {
            if (!tasks[dependencyName]) {
                throw new Error('async.auto task `' + key +
                    '` has a non-existent dependency `' +
                    dependencyName + '` in ' +
                    dependencies.join(', '));
            }
            addListener(dependencyName, function () {
                remainingDependencies--;
                if (remainingDependencies === 0) {
                    enqueueTask(key, task);
                }
            });
        });
    });

    checkForDeadlocks();
    processQueue();

    function enqueueTask(key, task) {
        readyTasks.push(function () {
            runTask(key, task);
        });
    }

    function processQueue() {
        if (readyTasks.length === 0 && runningTasks === 0) {
            return callback(null, results);
        }
        while(readyTasks.length && runningTasks < concurrency) {
            var run = readyTasks.shift();
            run();
        }

    }

    function addListener(taskName, fn) {
        var taskListeners = listeners[taskName];
        if (!taskListeners) {
            taskListeners = listeners[taskName] = [];
        }

        taskListeners.push(fn);
    }

    function taskComplete(taskName) {
        var taskListeners = listeners[taskName] || [];
        arrayEach(taskListeners, function (fn) {
            fn();
        });
        processQueue();
    }


    function runTask(key, task) {
        if (hasError) return;

        var taskCallback = onlyOnce(function(err, result) {
            runningTasks--;
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            }
            if (err) {
                var safeResults = {};
                baseForOwn(results, function(val, rkey) {
                    safeResults[rkey] = val;
                });
                safeResults[key] = result;
                hasError = true;
                listeners = Object.create(null);

                callback(err, safeResults);
            } else {
                results[key] = result;
                taskComplete(key);
            }
        });

        runningTasks++;
        var taskFn = wrapAsync(task[task.length - 1]);
        if (task.length > 1) {
            taskFn(results, taskCallback);
        } else {
            taskFn(taskCallback);
        }
    }

    function checkForDeadlocks() {
        // Kahn's algorithm
        // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
        // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
        var currentTask;
        var counter = 0;
        while (readyToCheck.length) {
            currentTask = readyToCheck.pop();
            counter++;
            arrayEach(getDependents(currentTask), function (dependent) {
                if (--uncheckedDependencies[dependent] === 0) {
                    readyToCheck.push(dependent);
                }
            });
        }

        if (counter !== numTasks) {
            throw new Error(
                'async.auto cannot execute tasks due to a recursive dependency'
            );
        }
    }

    function getDependents(taskName) {
        var result = [];
        baseForOwn(tasks, function (task, key) {
            if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
                result.push(key);
            }
        });
        return result;
    }
};

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
var rsComboSymbolsRange = '\\u20d0-\\u20f0';
var rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff';
var rsComboMarksRange$1 = '\\u0300-\\u036f\\ufe20-\\ufe23';
var rsComboSymbolsRange$1 = '\\u20d0-\\u20f0';
var rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']';
var rsCombo = '[' + rsComboMarksRange$1 + rsComboSymbolsRange$1 + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange$1 + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange$1 + ']?';
var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

var FN_ARGS = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /(=.+)?(\s*)$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

function parseParams(func) {
    func = func.toString().replace(STRIP_COMMENTS, '');
    func = func.match(FN_ARGS)[2].replace(' ', '');
    func = func ? func.split(FN_ARG_SPLIT) : [];
    func = func.map(function (arg){
        return trim(arg.replace(FN_ARG, ''));
    });
    return func;
}

/**
 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
 * tasks are specified as parameters to the function, after the usual callback
 * parameter, with the parameter names matching the names of the tasks it
 * depends on. This can provide even more readable task graphs which can be
 * easier to maintain.
 *
 * If a final callback is specified, the task results are similarly injected,
 * specified as named parameters after the initial error parameter.
 *
 * The autoInject function is purely syntactic sugar and its semantics are
 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
 *
 * @name autoInject
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.auto]{@link module:ControlFlow.auto}
 * @category Control Flow
 * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
 * the form 'func([dependencies...], callback). The object's key of a property
 * serves as the name of the task defined by that property, i.e. can be used
 * when specifying requirements for other tasks.
 * * The `callback` parameter is a `callback(err, result)` which must be called
 *   when finished, passing an `error` (which can be `null`) and the result of
 *   the function's execution. The remaining parameters name other tasks on
 *   which the task is dependent, and the results from those tasks are the
 *   arguments of those parameters.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback, and a `results` object with any completed
 * task results, similar to `auto`.
 * @example
 *
 * //  The example from `auto` can be rewritten as follows:
 * async.autoInject({
 *     get_data: function(callback) {
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: function(get_data, make_folder, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     },
 *     email_link: function(write_file, callback) {
 *         // once the file is written let's email a link to it...
 *         // write_file contains the filename returned by write_file.
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 *
 * // If you are using a JS minifier that mangles parameter names, `autoInject`
 * // will not work with plain functions, since the parameter names will be
 * // collapsed to a single letter identifier.  To work around this, you can
 * // explicitly specify the names of the parameters your task function needs
 * // in an array, similar to Angular.js dependency injection.
 *
 * // This still has an advantage over plain `auto`, since the results a task
 * // depends on are still spread into arguments.
 * async.autoInject({
 *     //...
 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(write_file, callback) {
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }]
 *     //...
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 */
function autoInject(tasks, callback) {
    var newTasks = {};

    baseForOwn(tasks, function (taskFn, key) {
        var params;
        var fnIsAsync = isAsync(taskFn);
        var hasNoDeps =
            (!fnIsAsync && taskFn.length === 1) ||
            (fnIsAsync && taskFn.length === 0);

        if (isArray(taskFn)) {
            params = taskFn.slice(0, -1);
            taskFn = taskFn[taskFn.length - 1];

            newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
        } else if (hasNoDeps) {
            // no dependencies, use the function as-is
            newTasks[key] = taskFn;
        } else {
            params = parseParams(taskFn);
            if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
                throw new Error("autoInject task functions require explicit parameters.");
            }

            // remove callback param
            if (!fnIsAsync) params.pop();

            newTasks[key] = params.concat(newTask);
        }

        function newTask(results, taskCb) {
            var newArgs = arrayMap(params, function (name) {
                return results[name];
            });
            newArgs.push(taskCb);
            wrapAsync(taskFn).apply(null, newArgs);
        }
    });

    auto(newTasks, callback);
}

// Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
// used for queues. This implementation assumes that the node provided by the user can be modified
// to adjust the next and last properties. We implement only the minimal functionality
// for queue support.
function DLL() {
    this.head = this.tail = null;
    this.length = 0;
}

function setInitial(dll, node) {
    dll.length = 1;
    dll.head = dll.tail = node;
}

DLL.prototype.removeLink = function(node) {
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;
    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;

    node.prev = node.next = null;
    this.length -= 1;
    return node;
};

DLL.prototype.empty = function () {
    while(this.head) this.shift();
    return this;
};

DLL.prototype.insertAfter = function(node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;
    else this.tail = newNode;
    node.next = newNode;
    this.length += 1;
};

DLL.prototype.insertBefore = function(node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev) node.prev.next = newNode;
    else this.head = newNode;
    node.prev = newNode;
    this.length += 1;
};

DLL.prototype.unshift = function(node) {
    if (this.head) this.insertBefore(this.head, node);
    else setInitial(this, node);
};

DLL.prototype.push = function(node) {
    if (this.tail) this.insertAfter(this.tail, node);
    else setInitial(this, node);
};

DLL.prototype.shift = function() {
    return this.head && this.removeLink(this.head);
};

DLL.prototype.pop = function() {
    return this.tail && this.removeLink(this.tail);
};

DLL.prototype.toArray = function () {
    var arr = Array(this.length);
    var curr = this.head;
    for(var idx = 0; idx < this.length; idx++) {
        arr[idx] = curr.data;
        curr = curr.next;
    }
    return arr;
};

DLL.prototype.remove = function (testFn) {
    var curr = this.head;
    while(!!curr) {
        var next = curr.next;
        if (testFn(curr)) {
            this.removeLink(curr);
        }
        curr = next;
    }
    return this;
};

function queue(worker, concurrency, payload) {
    if (concurrency == null) {
        concurrency = 1;
    }
    else if(concurrency === 0) {
        throw new Error('Concurrency must not be zero');
    }

    var _worker = wrapAsync(worker);
    var numRunning = 0;
    var workersList = [];

    function _insert(data, insertAtFront, callback) {
        if (callback != null && typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0 && q.idle()) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                callback: callback || noop
            };

            if (insertAtFront) {
                q._tasks.unshift(item);
            } else {
                q._tasks.push(item);
            }
        }
        setImmediate$1(q.process);
    }

    function _next(tasks) {
        return function(err){
            numRunning -= 1;

            for (var i = 0, l = tasks.length; i < l; i++) {
                var task = tasks[i];

                var index = baseIndexOf(workersList, task, 0);
                if (index >= 0) {
                    workersList.splice(index, 1);
                }

                task.callback.apply(task, arguments);

                if (err != null) {
                    q.error(err, task.data);
                }
            }

            if (numRunning <= (q.concurrency - q.buffer) ) {
                q.unsaturated();
            }

            if (q.idle()) {
                q.drain();
            }
            q.process();
        };
    }

    var isProcessing = false;
    var q = {
        _tasks: new DLL(),
        concurrency: concurrency,
        payload: payload,
        saturated: noop,
        unsaturated:noop,
        buffer: concurrency / 4,
        empty: noop,
        drain: noop,
        error: noop,
        started: false,
        paused: false,
        push: function (data, callback) {
            _insert(data, false, callback);
        },
        kill: function () {
            q.drain = noop;
            q._tasks.empty();
        },
        unshift: function (data, callback) {
            _insert(data, true, callback);
        },
        remove: function (testFn) {
            q._tasks.remove(testFn);
        },
        process: function () {
            // Avoid trying to start too many processing operations. This can occur
            // when callbacks resolve synchronously (#1267).
            if (isProcessing) {
                return;
            }
            isProcessing = true;
            while(!q.paused && numRunning < q.concurrency && q._tasks.length){
                var tasks = [], data = [];
                var l = q._tasks.length;
                if (q.payload) l = Math.min(l, q.payload);
                for (var i = 0; i < l; i++) {
                    var node = q._tasks.shift();
                    tasks.push(node);
                    workersList.push(node);
                    data.push(node.data);
                }

                numRunning += 1;

                if (q._tasks.length === 0) {
                    q.empty();
                }

                if (numRunning === q.concurrency) {
                    q.saturated();
                }

                var cb = onlyOnce(_next(tasks));
                _worker(data, cb);
            }
            isProcessing = false;
        },
        length: function () {
            return q._tasks.length;
        },
        running: function () {
            return numRunning;
        },
        workersList: function () {
            return workersList;
        },
        idle: function() {
            return q._tasks.length + numRunning === 0;
        },
        pause: function () {
            q.paused = true;
        },
        resume: function () {
            if (q.paused === false) { return; }
            q.paused = false;
            setImmediate$1(q.process);
        }
    };
    return q;
}

/**
 * A cargo of tasks for the worker function to complete. Cargo inherits all of
 * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
 * @typedef {Object} CargoObject
 * @memberOf module:ControlFlow
 * @property {Function} length - A function returning the number of items
 * waiting to be processed. Invoke like `cargo.length()`.
 * @property {number} payload - An `integer` for determining how many tasks
 * should be process per round. This property can be changed after a `cargo` is
 * created to alter the payload on-the-fly.
 * @property {Function} push - Adds `task` to the `queue`. The callback is
 * called once the `worker` has finished processing the task. Instead of a
 * single task, an array of `tasks` can be submitted. The respective callback is
 * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
 * @property {Function} saturated - A callback that is called when the
 * `queue.length()` hits the concurrency and further tasks will be queued.
 * @property {Function} empty - A callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - A callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke like `cargo.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
 */

/**
 * Creates a `cargo` object with the specified payload. Tasks added to the
 * cargo will be processed altogether (up to the `payload` limit). If the
 * `worker` is in progress, the task is queued until it becomes available. Once
 * the `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, cargo passes an array of tasks to a single worker, repeating
 * when the worker is finished.
 *
 * @name cargo
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargo and inner queue.
 * @example
 *
 * // create a cargo object with payload 2
 * var cargo = async.cargo(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2);
 *
 * // add some items
 * cargo.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargo.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * cargo.push({name: 'baz'}, function(err) {
 *     console.log('finished processing baz');
 * });
 */
function cargo(worker, payload) {
    return queue(worker, 1, payload);
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
 *
 * @name eachOfSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Invoked with (err).
 */
var eachOfSeries = doLimit(eachOfLimit, 1);

/**
 * Reduces `coll` into a single value using an async `iteratee` to return each
 * successive step. `memo` is the initial state of the reduction. This function
 * only operates in series.
 *
 * For performance reasons, it may make sense to split a call to this function
 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
 * results. This function is for situations where each step in the reduction
 * needs to be async; if you can get the data before reducing it, then it's
 * probably a good idea to do so.
 *
 * @name reduce
 * @static
 * @memberOf module:Collections
 * @method
 * @alias inject
 * @alias foldl
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @example
 *
 * async.reduce([1,2,3], 0, function(memo, item, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         callback(null, memo + item)
 *     });
 * }, function(err, result) {
 *     // result is now equal to the last value of memo, which is 6
 * });
 */
function reduce(coll, memo, iteratee, callback) {
    callback = once(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    eachOfSeries(coll, function(x, i, callback) {
        _iteratee(memo, x, function(err, v) {
            memo = v;
            callback(err);
        });
    }, function(err) {
        callback(err, memo);
    });
}

/**
 * Version of the compose function that is more natural to read. Each function
 * consumes the return value of the previous function. It is the equivalent of
 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name seq
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.compose]{@link module:ControlFlow.compose}
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} a function that composes the `functions` in order
 * @example
 *
 * // Requires lodash (or underscore), express3 and dresende's orm2.
 * // Part of an app, that fetches cats of the logged user.
 * // This example uses `seq` function to avoid overnesting and error
 * // handling clutter.
 * app.get('/cats', function(request, response) {
 *     var User = request.models.User;
 *     async.seq(
 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
 *         function(user, fn) {
 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
 *         }
 *     )(req.session.user_id, function (err, cats) {
 *         if (err) {
 *             console.error(err);
 *             response.json({ status: 'error', message: err.message });
 *         } else {
 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
 *         }
 *     });
 * });
 */
function seq(/*...functions*/) {
    var _functions = arrayMap(arguments, wrapAsync);
    return function(/*...args*/) {
        var args = slice(arguments);
        var that = this;

        var cb = args[args.length - 1];
        if (typeof cb == 'function') {
            args.pop();
        } else {
            cb = noop;
        }

        reduce(_functions, args, function(newargs, fn, cb) {
            fn.apply(that, newargs.concat(function(err/*, ...nextargs*/) {
                var nextargs = slice(arguments, 1);
                cb(err, nextargs);
            }));
        },
        function(err, results) {
            cb.apply(that, [err].concat(results));
        });
    };
}

/**
 * Creates a function which is a composition of the passed asynchronous
 * functions. Each function consumes the return value of the function that
 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name compose
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} an asynchronous function that is the composed
 * asynchronous `functions`
 * @example
 *
 * function add1(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n + 1);
 *     }, 10);
 * }
 *
 * function mul3(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n * 3);
 *     }, 10);
 * }
 *
 * var add1mul3 = async.compose(mul3, add1);
 * add1mul3(4, function (err, result) {
 *     // result now equals 15
 * });
 */
var compose = function(/*...args*/) {
    return seq.apply(null, slice(arguments).reverse());
};

var _concat = Array.prototype.concat;

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
 *
 * @name concatLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
var concatLimit = function(coll, limit, iteratee, callback) {
    callback = callback || noop;
    var _iteratee = wrapAsync(iteratee);
    mapLimit(coll, limit, function(val, callback) {
        _iteratee(val, function(err /*, ...args*/) {
            if (err) return callback(err);
            return callback(null, slice(arguments, 1));
        });
    }, function(err, mapResults) {
        var result = [];
        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                result = _concat.apply(result, mapResults[i]);
            }
        }

        return callback(err, result);
    });
};

/**
 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
 * the concatenated list. The `iteratee`s are called in parallel, and the
 * results are concatenated as they return. There is no guarantee that the
 * results array will be returned in the original order of `coll` passed to the
 * `iteratee` function.
 *
 * @name concat
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @example
 *
 * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
 *     // files is now a list of filenames that exist in the 3 directories
 * });
 */
var concat = doLimit(concatLimit, Infinity);

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
 *
 * @name concatSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
 * The iteratee should complete with an array an array of results.
 * Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
var concatSeries = doLimit(concatLimit, 1);

/**
 * Returns a function that when called, calls-back with the values provided.
 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
 * [`auto`]{@link module:ControlFlow.auto}.
 *
 * @name constant
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {...*} arguments... - Any number of arguments to automatically invoke
 * callback with.
 * @returns {AsyncFunction} Returns a function that when invoked, automatically
 * invokes the callback with the previous given arguments.
 * @example
 *
 * async.waterfall([
 *     async.constant(42),
 *     function (value, next) {
 *         // value === 42
 *     },
 *     //...
 * ], callback);
 *
 * async.waterfall([
 *     async.constant(filename, "utf8"),
 *     fs.readFile,
 *     function (fileData, next) {
 *         //...
 *     }
 *     //...
 * ], callback);
 *
 * async.auto({
 *     hostname: async.constant("https://server.net/"),
 *     port: findFreePort,
 *     launchServer: ["hostname", "port", function (options, cb) {
 *         startServer(options, cb);
 *     }],
 *     //...
 * }, callback);
 */
var constant = function(/*...values*/) {
    var values = slice(arguments);
    var args = [null].concat(values);
    return function (/*...ignoredArgs, callback*/) {
        var callback = arguments[arguments.length - 1];
        return callback.apply(this, args);
    };
};

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

function _createTester(check, getResult) {
    return function(eachfn, arr, iteratee, cb) {
        cb = cb || noop;
        var testPassed = false;
        var testResult;
        eachfn(arr, function(value, _, callback) {
            iteratee(value, function(err, result) {
                if (err) {
                    callback(err);
                } else if (check(result) && !testResult) {
                    testPassed = true;
                    testResult = getResult(true, value);
                    callback(null, breakLoop);
                } else {
                    callback();
                }
            });
        }, function(err) {
            if (err) {
                cb(err);
            } else {
                cb(null, testPassed ? testResult : getResult(false));
            }
        });
    };
}

function _findGetResult(v, x) {
    return x;
}

/**
 * Returns the first value in `coll` that passes an async truth test. The
 * `iteratee` is applied in parallel, meaning the first iteratee to return
 * `true` will fire the detect `callback` with that result. That means the
 * result might not be the first item in the original `coll` (in terms of order)
 * that passes the test.

 * If order within the original `coll` is important, then look at
 * [`detectSeries`]{@link module:Collections.detectSeries}.
 *
 * @name detect
 * @static
 * @memberOf module:Collections
 * @method
 * @alias find
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @example
 *
 * async.detect(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // result now equals the first file in the list that exists
 * });
 */
var detect = doParallel(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name detectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findLimit
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
 *
 * @name detectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findSeries
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectSeries = doLimit(detectLimit, 1);

function consoleFunc(name) {
    return function (fn/*, ...args*/) {
        var args = slice(arguments, 1);
        args.push(function (err/*, ...args*/) {
            var args = slice(arguments, 1);
            if (typeof console === 'object') {
                if (err) {
                    if (console.error) {
                        console.error(err);
                    }
                } else if (console[name]) {
                    arrayEach(args, function (x) {
                        console[name](x);
                    });
                }
            }
        });
        wrapAsync(fn).apply(null, args);
    };
}

/**
 * Logs the result of an [`async` function]{@link AsyncFunction} to the
 * `console` using `console.dir` to display the properties of the resulting object.
 * Only works in Node.js or in browsers that support `console.dir` and
 * `console.error` (such as FF and Chrome).
 * If multiple arguments are returned from the async function,
 * `console.dir` is called on each argument in order.
 *
 * @name dir
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, {hello: name});
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.dir(hello, 'world');
 * {hello: 'world'}
 */
var dir = consoleFunc('dir');

/**
 * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
 * the order of operations, the arguments `test` and `fn` are switched.
 *
 * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
 * @name doDuring
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.during]{@link module:ControlFlow.during}
 * @category Control Flow
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `fn`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error if one occurred, otherwise `null`.
 */
function doDuring(fn, test, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync(fn);
    var _test = wrapAsync(test);

    function next(err/*, ...args*/) {
        if (err) return callback(err);
        var args = slice(arguments, 1);
        args.push(check);
        _test.apply(this, args);
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    check(null, true);

}

/**
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 */
function doWhilst(iteratee, test, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    var next = function(err/*, ...args*/) {
        if (err) return callback(err);
        var args = slice(arguments, 1);
        if (test.apply(this, args)) return _iteratee(next);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}

/**
 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
 * argument ordering differs from `until`.
 *
 * @name doUntil
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function doUntil(iteratee, test, callback) {
    doWhilst(iteratee, function() {
        return !test.apply(this, arguments);
    }, callback);
}

/**
 * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
 * is passed a callback in the form of `function (err, truth)`. If error is
 * passed to `test` or `fn`, the main callback is immediately called with the
 * value of the error.
 *
 * @name during
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (callback).
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error, if one occurred, otherwise `null`.
 * @example
 *
 * var count = 0;
 *
 * async.during(
 *     function (callback) {
 *         return callback(null, count < 5);
 *     },
 *     function (callback) {
 *         count++;
 *         setTimeout(callback, 1000);
 *     },
 *     function (err) {
 *         // 5 seconds have passed
 *     }
 * );
 */
function during(test, fn, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync(fn);
    var _test = wrapAsync(test);

    function next(err) {
        if (err) return callback(err);
        _test(check);
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    _test(check);
}

function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}

/**
 * Applies the function `iteratee` to each item in `coll`, in parallel.
 * The `iteratee` is called with an item from the list, and a callback for when
 * it has finished. If the `iteratee` passes an error to its `callback`, the
 * main `callback` (for the `each` function) is immediately called with the
 * error.
 *
 * Note, that since this function applies `iteratee` to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
 *
 * @name each
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEach
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to
 * each item in `coll`. Invoked with (item, callback).
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOf`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * // assuming openFiles is an array of file names and saveFile is a function
 * // to save the modified contents of that file:
 *
 * async.each(openFiles, saveFile, function(err){
 *   // if any of the saves produced an error, err would equal that error
 * });
 *
 * // assuming openFiles is an array of file names
 * async.each(openFiles, function(file, callback) {
 *
 *     // Perform operation on file here.
 *     console.log('Processing file ' + file);
 *
 *     if( file.length > 32 ) {
 *       console.log('This file name is too long');
 *       callback('File name too long');
 *     } else {
 *       // Do work to process file here
 *       console.log('File processed');
 *       callback();
 *     }
 * }, function(err) {
 *     // if any of the file processing produced an error, err would equal that error
 *     if( err ) {
 *       // One of the iterations produced an error.
 *       // All processing will now stop.
 *       console.log('A file failed to process');
 *     } else {
 *       console.log('All files have been processed successfully');
 *     }
 * });
 */
function eachLimit(coll, iteratee, callback) {
    eachOf(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachLimit$1(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
var eachSeries = doLimit(eachLimit$1, 1);

/**
 * Wrap an async function and ensure it calls its callback on a later tick of
 * the event loop.  If the function already calls its callback on a next tick,
 * no extra deferral is added. This is useful for preventing stack overflows
 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
 * contained. ES2017 `async` functions are returned as-is -- they are immune
 * to Zalgo's corrupting influences, as they always resolve on a later tick.
 *
 * @name ensureAsync
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - an async function, one that expects a node-style
 * callback as its last argument.
 * @returns {AsyncFunction} Returns a wrapped function with the exact same call
 * signature as the function passed in.
 * @example
 *
 * function sometimesAsync(arg, callback) {
 *     if (cache[arg]) {
 *         return callback(null, cache[arg]); // this would be synchronous!!
 *     } else {
 *         doSomeIO(arg, callback); // this IO would be asynchronous
 *     }
 * }
 *
 * // this has a risk of stack overflows if many results are cached in a row
 * async.mapSeries(args, sometimesAsync, done);
 *
 * // this will defer sometimesAsync's callback if necessary,
 * // preventing stack overflows
 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
 */
function ensureAsync(fn) {
    if (isAsync(fn)) return fn;
    return initialParams(function (args, callback) {
        var sync = true;
        args.push(function () {
            var innerArgs = arguments;
            if (sync) {
                setImmediate$1(function () {
                    callback.apply(null, innerArgs);
                });
            } else {
                callback.apply(null, innerArgs);
            }
        });
        fn.apply(this, args);
        sync = false;
    });
}

function notId(v) {
    return !v;
}

/**
 * Returns `true` if every element in `coll` satisfies an async test. If any
 * iteratee call returns `false`, the main `callback` is immediately called.
 *
 * @name every
 * @static
 * @memberOf module:Collections
 * @method
 * @alias all
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @example
 *
 * async.every(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then every file exists
 * });
 */
var every = doParallel(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everyLimit = doParallelLimit(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
 *
 * @name everySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in series.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everySeries = doLimit(everyLimit, 1);

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, function (x, index, callback) {
        iteratee(x, function (err, v) {
            truthValues[index] = !!v;
            callback(err);
        });
    }, function (err) {
        if (err) return callback(err);
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            if (truthValues[i]) results.push(arr[i]);
        }
        callback(null, results);
    });
}

function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, function (x, index, callback) {
        iteratee(x, function (err, v) {
            if (err) {
                callback(err);
            } else {
                if (v) {
                    results.push({index: index, value: x});
                }
                callback();
            }
        });
    }, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, arrayMap(results.sort(function (a, b) {
                return a.index - b.index;
            }), baseProperty('value')));
        }
    });
}

function _filter(eachfn, coll, iteratee, callback) {
    var filter = isArrayLike(coll) ? filterArray : filterGeneric;
    filter(eachfn, coll, wrapAsync(iteratee), callback || noop);
}

/**
 * Returns a new array of all the values in `coll` which pass an async truth
 * test. This operation is performed in parallel, but the results array will be
 * in the same order as the original.
 *
 * @name filter
 * @static
 * @memberOf module:Collections
 * @method
 * @alias select
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.filter(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of the existing files
 * });
 */
var filter = doParallel(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name filterLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var filterLimit = doParallelLimit(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
 *
 * @name filterSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results)
 */
var filterSeries = doLimit(filterLimit, 1);

/**
 * Calls the asynchronous function `fn` with a callback parameter that allows it
 * to call itself again, in series, indefinitely.

 * If an error is passed to the callback then `errback` is called with the
 * error, and execution stops, otherwise it will never be called.
 *
 * @name forever
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} fn - an async function to call repeatedly.
 * Invoked with (next).
 * @param {Function} [errback] - when `fn` passes an error to it's callback,
 * this function will be called, and execution stops. Invoked with (err).
 * @example
 *
 * async.forever(
 *     function(next) {
 *         // next is suitable for passing to things that need a callback(err [, whatever]);
 *         // it will result in this function being called again.
 *     },
 *     function(err) {
 *         // if next is called with a value in its first parameter, it will appear
 *         // in here as 'err', and execution will stop.
 *     }
 * );
 */
function forever(fn, errback) {
    var done = onlyOnce(errback || noop);
    var task = wrapAsync(ensureAsync(fn));

    function next(err) {
        if (err) return done(err);
        task(next);
    }
    next();
}

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
 *
 * @name groupByLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupByLimit = function(coll, limit, iteratee, callback) {
    callback = callback || noop;
    var _iteratee = wrapAsync(iteratee);
    mapLimit(coll, limit, function(val, callback) {
        _iteratee(val, function(err, key) {
            if (err) return callback(err);
            return callback(null, {key: key, val: val});
        });
    }, function(err, mapResults) {
        var result = {};
        // from MDN, handle object having an `hasOwnProperty` prop
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                var key = mapResults[i].key;
                var val = mapResults[i].val;

                if (hasOwnProperty.call(result, key)) {
                    result[key].push(val);
                } else {
                    result[key] = [val];
                }
            }
        }

        return callback(err, result);
    });
};

/**
 * Returns a new object, where each value corresponds to an array of items, from
 * `coll`, that returned the corresponding key. That is, the keys of the object
 * correspond to the values passed to the `iteratee` callback.
 *
 * Note: Since this function applies the `iteratee` to each item in parallel,
 * there is no guarantee that the `iteratee` functions will complete in order.
 * However, the values for each key in the `result` will be in the same order as
 * the original `coll`. For Objects, the values will roughly be in the order of
 * the original Objects' keys (but this can vary across JavaScript engines).
 *
 * @name groupBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @example
 *
 * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
 *     db.findById(userId, function(err, user) {
 *         if (err) return callback(err);
 *         return callback(null, user.age);
 *     });
 * }, function(err, result) {
 *     // result is object containing the userIds grouped by age
 *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
 * });
 */
var groupBy = doLimit(groupByLimit, Infinity);

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
 *
 * @name groupBySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupBySeries = doLimit(groupByLimit, 1);

/**
 * Logs the result of an `async` function to the `console`. Only works in
 * Node.js or in browsers that support `console.log` and `console.error` (such
 * as FF and Chrome). If multiple arguments are returned from the async
 * function, `console.log` is called on each argument in order.
 *
 * @name log
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, 'hello ' + name);
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.log(hello, 'world');
 * 'hello world'
 */
var log = consoleFunc('log');

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name mapValuesLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
function mapValuesLimit(obj, limit, iteratee, callback) {
    callback = once(callback || noop);
    var newObj = {};
    var _iteratee = wrapAsync(iteratee);
    eachOfLimit(obj, limit, function(val, key, next) {
        _iteratee(val, key, function (err, result) {
            if (err) return next(err);
            newObj[key] = result;
            next();
        });
    }, function (err) {
        callback(err, newObj);
    });
}

/**
 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
 *
 * Produces a new Object by mapping each value of `obj` through the `iteratee`
 * function. The `iteratee` is called each `value` and `key` from `obj` and a
 * callback for when it has finished processing. Each of these callbacks takes
 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
 * passes an error to its callback, the main `callback` (for the `mapValues`
 * function) is immediately called with the error.
 *
 * Note, the order of the keys in the result is not guaranteed.  The keys will
 * be roughly in the order they complete, (but this is very engine-specific)
 *
 * @name mapValues
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @example
 *
 * async.mapValues({
 *     f1: 'file1',
 *     f2: 'file2',
 *     f3: 'file3'
 * }, function (file, key, callback) {
 *   fs.stat(file, callback);
 * }, function(err, result) {
 *     // result is now a map of stats for each file, e.g.
 *     // {
 *     //     f1: [stats for file1],
 *     //     f2: [stats for file2],
 *     //     f3: [stats for file3]
 *     // }
 * });
 */

var mapValues = doLimit(mapValuesLimit, Infinity);

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
 *
 * @name mapValuesSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
var mapValuesSeries = doLimit(mapValuesLimit, 1);

function has(obj, key) {
    return key in obj;
}

/**
 * Caches the results of an async function. When creating a hash to store
 * function results against, the callback is omitted from the hash and an
 * optional hash function can be used.
 *
 * If no hash function is specified, the first argument is used as a hash key,
 * which may work reasonably if it is a string or a data type that converts to a
 * distinct string. Note that objects and arrays will not behave reasonably.
 * Neither will cases where the other arguments are significant. In such cases,
 * specify your own hash function.
 *
 * The cache of results is exposed as the `memo` property of the function
 * returned by `memoize`.
 *
 * @name memoize
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function to proxy and cache results from.
 * @param {Function} hasher - An optional function for generating a custom hash
 * for storing results. It has all the arguments applied to it apart from the
 * callback, and must be synchronous.
 * @returns {AsyncFunction} a memoized version of `fn`
 * @example
 *
 * var slow_fn = function(name, callback) {
 *     // do something
 *     callback(null, result);
 * };
 * var fn = async.memoize(slow_fn);
 *
 * // fn can now be used as if it were slow_fn
 * fn('some name', function() {
 *     // callback
 * });
 */
function memoize(fn, hasher) {
    var memo = Object.create(null);
    var queues = Object.create(null);
    hasher = hasher || identity;
    var _fn = wrapAsync(fn);
    var memoized = initialParams(function memoized(args, callback) {
        var key = hasher.apply(null, args);
        if (has(memo, key)) {
            setImmediate$1(function() {
                callback.apply(null, memo[key]);
            });
        } else if (has(queues, key)) {
            queues[key].push(callback);
        } else {
            queues[key] = [callback];
            _fn.apply(null, args.concat(function(/*args*/) {
                var args = slice(arguments);
                memo[key] = args;
                var q = queues[key];
                delete queues[key];
                for (var i = 0, l = q.length; i < l; i++) {
                    q[i].apply(null, args);
                }
            }));
        }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
}

/**
 * Calls `callback` on a later loop around the event loop. In Node.js this just
 * calls `setImmediate`.  In the browser it will use `setImmediate` if
 * available, otherwise `setTimeout(callback, 0)`, which means other higher
 * priority events may precede the execution of `callback`.
 *
 * This is used internally for browser-compatibility purposes.
 *
 * @name nextTick
 * @static
 * @memberOf module:Utils
 * @method
 * @alias setImmediate
 * @category Util
 * @param {Function} callback - The function to call on a later loop around
 * the event loop. Invoked with (args...).
 * @param {...*} args... - any number of additional arguments to pass to the
 * callback on the next tick.
 * @example
 *
 * var call_order = [];
 * async.nextTick(function() {
 *     call_order.push('two');
 *     // call_order now equals ['one','two']
 * });
 * call_order.push('one');
 *
 * async.setImmediate(function (a, b, c) {
 *     // a, b, and c equal 1, 2, and 3
 * }, 1, 2, 3);
 */
var _defer$1;

if (hasNextTick) {
    _defer$1 = process.nextTick;
} else if (hasSetImmediate) {
    _defer$1 = setImmediate;
} else {
    _defer$1 = fallback;
}

var nextTick = wrap(_defer$1);

function _parallel(eachfn, tasks, callback) {
    callback = callback || noop;
    var results = isArrayLike(tasks) ? [] : {};

    eachfn(tasks, function (task, key, callback) {
        wrapAsync(task)(function (err, result) {
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            }
            results[key] = result;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}

/**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 *
 * @example
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // the results array will equal ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equals to: {one: 1, two: 2}
 * });
 */
function parallelLimit(tasks, callback) {
    _parallel(eachOf, tasks, callback);
}

/**
 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name parallelLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.parallel]{@link module:ControlFlow.parallel}
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 */
function parallelLimit$1(tasks, limit, callback) {
    _parallel(_eachOfLimit(limit), tasks, callback);
}

/**
 * A queue of tasks for the worker function to complete.
 * @typedef {Object} QueueObject
 * @memberOf module:ControlFlow
 * @property {Function} length - a function returning the number of items
 * waiting to be processed. Invoke with `queue.length()`.
 * @property {boolean} started - a boolean indicating whether or not any
 * items have been pushed and processed by the queue.
 * @property {Function} running - a function returning the number of items
 * currently being processed. Invoke with `queue.running()`.
 * @property {Function} workersList - a function returning the array of items
 * currently being processed. Invoke with `queue.workersList()`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
 * @property {number} concurrency - an integer for determining how many `worker`
 * functions should be run in parallel. This property can be changed after a
 * `queue` is created to alter the concurrency on-the-fly.
 * @property {Function} push - add a new task to the `queue`. Calls `callback`
 * once the `worker` has finished processing the task. Instead of a single task,
 * a `tasks` array can be submitted. The respective callback is used for every
 * task in the list. Invoke with `queue.push(task, [callback])`,
 * @property {Function} unshift - add a new task to the front of the `queue`.
 * Invoke with `queue.unshift(task, [callback])`.
 * @property {Function} remove - remove items from the queue that match a test
 * function.  The test function will be passed an object with a `data` property,
 * and a `priority` property, if this is a
 * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
 * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
 * `function ({data, priority}) {}` and returns a Boolean.
 * @property {Function} saturated - a callback that is called when the number of
 * running workers hits the `concurrency` limit, and further tasks will be
 * queued.
 * @property {Function} unsaturated - a callback that is called when the number
 * of running workers is less than the `concurrency` & `buffer` limits, and
 * further tasks will not be queued.
 * @property {number} buffer - A minimum threshold buffer in order to say that
 * the `queue` is `unsaturated`.
 * @property {Function} empty - a callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - a callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} error - a callback that is called when a task errors.
 * Has the signature `function(error, task)`.
 * @property {boolean} paused - a boolean for determining whether the queue is
 * in a paused state.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke with `queue.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. No more tasks
 * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
 */

/**
 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
 * `queue` are processed in parallel (up to the `concurrency` limit). If all
 * `worker`s are in progress, the task is queued until one becomes available.
 * Once a `worker` completes a `task`, that `task`'s callback is called.
 *
 * @name queue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`. Invoked with (task, callback).
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the queue.
 * @example
 *
 * // create a queue object with concurrency 2
 * var q = async.queue(function(task, callback) {
 *     console.log('hello ' + task.name);
 *     callback();
 * }, 2);
 *
 * // assign a callback
 * q.drain = function() {
 *     console.log('all items have been processed');
 * };
 *
 * // add some items to the queue
 * q.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * q.push({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 *
 * // add some items to the queue (batch-wise)
 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
 *     console.log('finished processing item');
 * });
 *
 * // add some items to the front of the queue
 * q.unshift({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 */
var queue$1 = function (worker, concurrency) {
    var _worker = wrapAsync(worker);
    return queue(function (items, cb) {
        _worker(items[0], cb);
    }, concurrency, 1);
};

/**
 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
 * completed in ascending priority order.
 *
 * @name priorityQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`.
 * Invoked with (task, callback).
 * @param {number} concurrency - An `integer` for determining how many `worker`
 * functions should be run in parallel.  If omitted, the concurrency defaults to
 * `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
 * differences between `queue` and `priorityQueue` objects:
 * * `push(task, priority, [callback])` - `priority` should be a number. If an
 *   array of `tasks` is given, all tasks will be assigned the same priority.
 * * The `unshift` method was removed.
 */
var priorityQueue = function(worker, concurrency) {
    // Start with a normal queue
    var q = queue$1(worker, concurrency);

    // Override push to accept second parameter representing priority
    q.push = function(data, priority, callback) {
        if (callback == null) callback = noop;
        if (typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
        }

        priority = priority || 0;
        var nextNode = q._tasks.head;
        while (nextNode && priority >= nextNode.priority) {
            nextNode = nextNode.next;
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                priority: priority,
                callback: callback
            };

            if (nextNode) {
                q._tasks.insertBefore(nextNode, item);
            } else {
                q._tasks.push(item);
            }
        }
        setImmediate$1(q.process);
    };

    // Remove unshift function
    delete q.unshift;

    return q;
};

/**
 * Runs the `tasks` array of functions in parallel, without waiting until the
 * previous function has completed. Once any of the `tasks` complete or pass an
 * error to its callback, the main `callback` is immediately called. It's
 * equivalent to `Promise.race()`.
 *
 * @name race
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
 * to run. Each function can complete with an optional `result` value.
 * @param {Function} callback - A callback to run once any of the functions have
 * completed. This function gets an error or result from the first function that
 * completed. Invoked with (err, result).
 * @returns undefined
 * @example
 *
 * async.race([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // main callback
 * function(err, result) {
 *     // the result will be equal to 'two' as it finishes earlier
 * });
 */
function race(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
    if (!tasks.length) return callback();
    for (var i = 0, l = tasks.length; i < l; i++) {
        wrapAsync(tasks[i])(callback);
    }
}

/**
 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
 *
 * @name reduceRight
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reduce]{@link module:Collections.reduce}
 * @alias foldr
 * @category Collection
 * @param {Array} array - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 */
function reduceRight (array, memo, iteratee, callback) {
    var reversed = slice(array).reverse();
    reduce(reversed, memo, iteratee, callback);
}

/**
 * Wraps the async function in another function that always completes with a
 * result object, even when it errors.
 *
 * The result object has either the property `error` or `value`.
 *
 * @name reflect
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function you want to wrap
 * @returns {Function} - A function that always passes null to it's callback as
 * the error. The second argument to the callback will be an `object` with
 * either an `error` or a `value` property.
 * @example
 *
 * async.parallel([
 *     async.reflect(function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff but error ...
 *         callback('bad stuff happened');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     })
 * ],
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = 'bad stuff happened'
 *     // results[2].value = 'two'
 * });
 */
function reflect(fn) {
    var _fn = wrapAsync(fn);
    return initialParams(function reflectOn(args, reflectCallback) {
        args.push(function callback(error, cbArg) {
            if (error) {
                reflectCallback(null, { error: error });
            } else {
                var value;
                if (arguments.length <= 2) {
                    value = cbArg;
                } else {
                    value = slice(arguments, 1);
                }
                reflectCallback(null, { value: value });
            }
        });

        return _fn.apply(this, args);
    });
}

function reject$1(eachfn, arr, iteratee, callback) {
    _filter(eachfn, arr, function(value, cb) {
        iteratee(value, function(err, v) {
            cb(err, !v);
        });
    }, callback);
}

/**
 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
 *
 * @name reject
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.reject(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of missing files
 *     createFiles(results);
 * });
 */
var reject = doParallel(reject$1);

/**
 * A helper function that wraps an array or an object of functions with `reflect`.
 *
 * @name reflectAll
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.reflect]{@link module:Utils.reflect}
 * @category Util
 * @param {Array|Object|Iterable} tasks - The collection of
 * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
 * @returns {Array} Returns an array of async functions, each wrapped in
 * `async.reflect`
 * @example
 *
 * let tasks = [
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         // do some more stuff but error ...
 *         callback(new Error('bad stuff happened'));
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ];
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = Error('bad stuff happened')
 *     // results[2].value = 'two'
 * });
 *
 * // an example using an object instead of an array
 * let tasks = {
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         callback('two');
 *     },
 *     three: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'three');
 *         }, 100);
 *     }
 * };
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results.one.value = 'one'
 *     // results.two.error = 'two'
 *     // results.three.value = 'three'
 * });
 */
function reflectAll(tasks) {
    var results;
    if (isArray(tasks)) {
        results = arrayMap(tasks, reflect);
    } else {
        results = {};
        baseForOwn(tasks, function(task, key) {
            results[key] = reflect.call(this, task);
        });
    }
    return results;
}

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name rejectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectLimit = doParallelLimit(reject$1);

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
 *
 * @name rejectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectSeries = doLimit(rejectLimit, 1);

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

/**
 * Attempts to get a successful response from `task` no more than `times` times
 * before returning an error. If the task is successful, the `callback` will be
 * passed the result of the successful task. If all attempts fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name retry
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @see [async.retryable]{@link module:ControlFlow.retryable}
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
 * object with `times` and `interval` or a number.
 * * `times` - The number of attempts to make before giving up.  The default
 *   is `5`.
 * * `interval` - The time to wait between retries, in milliseconds.  The
 *   default is `0`. The interval may also be specified as a function of the
 *   retry count (see example).
 * * `errorFilter` - An optional synchronous function that is invoked on
 *   erroneous result. If it returns `true` the retry attempts will continue;
 *   if the function returns `false` the retry flow is aborted with the current
 *   attempt's error and result being returned to the final callback.
 *   Invoked with (err).
 * * If `opts` is a number, the number specifies the number of times to retry,
 *   with the default interval of `0`.
 * @param {AsyncFunction} task - An async function to retry.
 * Invoked with (callback).
 * @param {Function} [callback] - An optional callback which is called when the
 * task has succeeded, or after the final failed attempt. It receives the `err`
 * and `result` arguments of the last attempt at completing the `task`. Invoked
 * with (err, results).
 *
 * @example
 *
 * // The `retry` function can be used as a stand-alone control flow by passing
 * // a callback, as shown below:
 *
 * // try calling apiMethod 3 times
 * async.retry(3, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 3 times, waiting 200 ms between each retry
 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 10 times with exponential backoff
 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
 * async.retry({
 *   times: 10,
 *   interval: function(retryCount) {
 *     return 50 * Math.pow(2, retryCount);
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod the default 5 times no delay between each retry
 * async.retry(apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod only when error condition satisfies, all other
 * // errors will abort the retry control flow and return to final callback
 * async.retry({
 *   errorFilter: function(err) {
 *     return err.message === 'Temporary error'; // only retry on a specific error
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // It can also be embedded within other control flow functions to retry
 * // individual methods that are not as reliable, like this:
 * async.auto({
 *     users: api.getUsers.bind(api),
 *     payments: async.retryable(3, api.getPayments.bind(api))
 * }, function(err, results) {
 *     // do something with the results
 * });
 *
 */
function retry(opts, task, callback) {
    var DEFAULT_TIMES = 5;
    var DEFAULT_INTERVAL = 0;

    var options = {
        times: DEFAULT_TIMES,
        intervalFunc: constant$1(DEFAULT_INTERVAL)
    };

    function parseTimes(acc, t) {
        if (typeof t === 'object') {
            acc.times = +t.times || DEFAULT_TIMES;

            acc.intervalFunc = typeof t.interval === 'function' ?
                t.interval :
                constant$1(+t.interval || DEFAULT_INTERVAL);

            acc.errorFilter = t.errorFilter;
        } else if (typeof t === 'number' || typeof t === 'string') {
            acc.times = +t || DEFAULT_TIMES;
        } else {
            throw new Error("Invalid arguments for async.retry");
        }
    }

    if (arguments.length < 3 && typeof opts === 'function') {
        callback = task || noop;
        task = opts;
    } else {
        parseTimes(options, opts);
        callback = callback || noop;
    }

    if (typeof task !== 'function') {
        throw new Error("Invalid arguments for async.retry");
    }

    var _task = wrapAsync(task);

    var attempt = 1;
    function retryAttempt() {
        _task(function(err) {
            if (err && attempt++ < options.times &&
                (typeof options.errorFilter != 'function' ||
                    options.errorFilter(err))) {
                setTimeout(retryAttempt, options.intervalFunc(attempt));
            } else {
                callback.apply(null, arguments);
            }
        });
    }

    retryAttempt();
}

/**
 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
 * wraps a task and makes it retryable, rather than immediately calling it
 * with retries.
 *
 * @name retryable
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.retry]{@link module:ControlFlow.retry}
 * @category Control Flow
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
 * options, exactly the same as from `retry`
 * @param {AsyncFunction} task - the asynchronous function to wrap.
 * This function will be passed any arguments passed to the returned wrapper.
 * Invoked with (...args, callback).
 * @returns {AsyncFunction} The wrapped function, which when invoked, will
 * retry on an error, based on the parameters specified in `opts`.
 * This function will accept the same parameters as `task`.
 * @example
 *
 * async.auto({
 *     dep1: async.retryable(3, getFromFlakyService),
 *     process: ["dep1", async.retryable(3, function (results, cb) {
 *         maybeProcessData(results.dep1, cb);
 *     })]
 * }, callback);
 */
var retryable = function (opts, task) {
    if (!task) {
        task = opts;
        opts = null;
    }
    var _task = wrapAsync(task);
    return initialParams(function (args, callback) {
        function taskFn(cb) {
            _task.apply(null, args.concat(cb));
        }

        if (opts) retry(opts, taskFn, callback);
        else retry(taskFn, callback);

    });
};

/**
 * Run the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function, and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 *  results from {@link async.series}.
 *
 * **Note** that while many implementations preserve the order of object
 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
 * explicitly states that
 *
 * > The mechanics and order of enumerating the properties is not specified.
 *
 * So if you rely on the order in which your series of functions are executed,
 * and want this to work on all platforms, consider using an array.
 *
 * @name series
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing
 * [async functions]{@link AsyncFunction} to run in series.
 * Each function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array (or object)
 * containing all the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 * @example
 * async.series([
 *     function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     },
 *     function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // results is now equal to ['one', 'two']
 * });
 *
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback){
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equal to: {one: 1, two: 2}
 * });
 */
function series(tasks, callback) {
    _parallel(eachOfSeries, tasks, callback);
}

/**
 * Returns `true` if at least one element in the `coll` satisfies an async test.
 * If any iteratee call returns `true`, the main `callback` is immediately
 * called.
 *
 * @name some
 * @static
 * @memberOf module:Collections
 * @method
 * @alias any
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @example
 *
 * async.some(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then at least one of the files exists
 * });
 */
var some = doParallel(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
 *
 * @name someLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anyLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someLimit = doParallelLimit(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
 *
 * @name someSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anySeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in series.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someSeries = doLimit(someLimit, 1);

/**
 * Sorts a list by the results of running each `coll` value through an async
 * `iteratee`.
 *
 * @name sortBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a value to use as the sort criteria as
 * its `result`.
 * Invoked with (item, callback).
 * @param {Function} callback - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is the items
 * from the original `coll` sorted by the values returned by the `iteratee`
 * calls. Invoked with (err, results).
 * @example
 *
 * async.sortBy(['file1','file2','file3'], function(file, callback) {
 *     fs.stat(file, function(err, stats) {
 *         callback(err, stats.mtime);
 *     });
 * }, function(err, results) {
 *     // results is now the original array of files sorted by
 *     // modified date
 * });
 *
 * // By modifying the callback parameter the
 * // sorting order can be influenced:
 *
 * // ascending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x);
 * }, function(err,result) {
 *     // result callback
 * });
 *
 * // descending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
 * }, function(err,result) {
 *     // result callback
 * });
 */
function sortBy (coll, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    map(coll, function (x, callback) {
        _iteratee(x, function (err, criteria) {
            if (err) return callback(err);
            callback(null, {value: x, criteria: criteria});
        });
    }, function (err, results) {
        if (err) return callback(err);
        callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
    });

    function comparator(left, right) {
        var a = left.criteria, b = right.criteria;
        return a < b ? -1 : a > b ? 1 : 0;
    }
}

/**
 * Sets a time limit on an asynchronous function. If the function does not call
 * its callback within the specified milliseconds, it will be called with a
 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
 *
 * @name timeout
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} asyncFn - The async function to limit in time.
 * @param {number} milliseconds - The specified time limit.
 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
 * to timeout Error for more information..
 * @returns {AsyncFunction} Returns a wrapped function that can be used with any
 * of the control flow functions.
 * Invoke this function with the same parameters as you would `asyncFunc`.
 * @example
 *
 * function myFunction(foo, callback) {
 *     doAsyncTask(foo, function(err, data) {
 *         // handle errors
 *         if (err) return callback(err);
 *
 *         // do some stuff ...
 *
 *         // return processed data
 *         return callback(null, data);
 *     });
 * }
 *
 * var wrapped = async.timeout(myFunction, 1000);
 *
 * // call `wrapped` as you would `myFunction`
 * wrapped({ bar: 'bar' }, function(err, data) {
 *     // if `myFunction` takes < 1000 ms to execute, `err`
 *     // and `data` will have their expected values
 *
 *     // else `err` will be an Error with the code 'ETIMEDOUT'
 * });
 */
function timeout(asyncFn, milliseconds, info) {
    var fn = wrapAsync(asyncFn);

    return initialParams(function (args, callback) {
        var timedOut = false;
        var timer;

        function timeoutCallback() {
            var name = asyncFn.name || 'anonymous';
            var error  = new Error('Callback function "' + name + '" timed out.');
            error.code = 'ETIMEDOUT';
            if (info) {
                error.info = info;
            }
            timedOut = true;
            callback(error);
        }

        args.push(function () {
            if (!timedOut) {
                callback.apply(null, arguments);
                clearTimeout(timer);
            }
        });

        // setup timer and call original function
        timer = setTimeout(timeoutCallback, milliseconds);
        fn.apply(null, args);
    });
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;
var nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/**
 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name timesLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} count - The number of times to run the function.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
 */
function timeLimit(count, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    mapLimit(baseRange(0, count, 1), limit, _iteratee, callback);
}

/**
 * Calls the `iteratee` function `n` times, and accumulates results in the same
 * manner you would use with [map]{@link module:Collections.map}.
 *
 * @name times
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @example
 *
 * // Pretend this is some complicated async factory
 * var createUser = function(id, callback) {
 *     callback(null, {
 *         id: 'user' + id
 *     });
 * };
 *
 * // generate 5 users
 * async.times(5, function(n, next) {
 *     createUser(n, function(err, user) {
 *         next(err, user);
 *     });
 * }, function(err, users) {
 *     // we should now have 5 users
 * });
 */
var times = doLimit(timeLimit, Infinity);

/**
 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
 *
 * @name timesSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 */
var timesSeries = doLimit(timeLimit, 1);

/**
 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
 * element in series, each step potentially mutating an `accumulator` value.
 * The type of the accumulator defaults to the type of collection passed in.
 *
 * @name transform
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
 * it will default to an empty Object or Array, depending on the type of `coll`
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator.
 * Invoked with (accumulator, item, key, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the transformed accumulator.
 * Invoked with (err, result).
 * @example
 *
 * async.transform([1,2,3], function(acc, item, index, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         acc.push(item * 2)
 *         callback(null)
 *     });
 * }, function(err, result) {
 *     // result is now equal to [2, 4, 6]
 * });
 *
 * @example
 *
 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
 *     setImmediate(function () {
 *         obj[key] = val * 2;
 *         callback();
 *     })
 * }, function (err, result) {
 *     // result is equal to {a: 2, b: 4, c: 6}
 * })
 */
function transform (coll, accumulator, iteratee, callback) {
    if (arguments.length <= 3) {
        callback = iteratee;
        iteratee = accumulator;
        accumulator = isArray(coll) ? [] : {};
    }
    callback = once(callback || noop);
    var _iteratee = wrapAsync(iteratee);

    eachOf(coll, function(v, k, cb) {
        _iteratee(accumulator, v, k, cb);
    }, function(err) {
        callback(err, accumulator);
    });
}

/**
 * It runs each task in series but stops whenever any of the functions were
 * successful. If one of the tasks were successful, the `callback` will be
 * passed the result of the successful task. If all tasks fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name tryEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing functions to
 * run, each function is passed a `callback(err, result)` it must call on
 * completion with an error `err` (which can be `null`) and an optional `result`
 * value.
 * @param {Function} [callback] - An optional callback which is called when one
 * of the tasks has succeeded, or all have failed. It receives the `err` and
 * `result` arguments of the last attempt at completing the `task`. Invoked with
 * (err, results).
 * @example
 * async.try([
 *     function getDataFromFirstWebsite(callback) {
 *         // Try getting the data from the first website
 *         callback(err, data);
 *     },
 *     function getDataFromSecondWebsite(callback) {
 *         // First website failed,
 *         // Try getting the data from the backup website
 *         callback(err, data);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     Now do something with the data.
 * });
 *
 */
function tryEach(tasks, callback) {
    var error = null;
    var result;
    callback = callback || noop;
    eachSeries(tasks, function(task, callback) {
        wrapAsync(task)(function (err, res/*, ...args*/) {
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            } else {
                result = res;
            }
            error = err;
            callback(!err);
        });
    }, function () {
        callback(error, result);
    });
}

/**
 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
 * unmemoized form. Handy for testing.
 *
 * @name unmemoize
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.memoize]{@link module:Utils.memoize}
 * @category Util
 * @param {AsyncFunction} fn - the memoized function
 * @returns {AsyncFunction} a function that calls the original unmemoized function
 */
function unmemoize(fn) {
    return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
    };
}

/**
 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs.
 *
 * @name whilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns undefined
 * @example
 *
 * var count = 0;
 * async.whilst(
 *     function() { return count < 5; },
 *     function(callback) {
 *         count++;
 *         setTimeout(function() {
 *             callback(null, count);
 *         }, 1000);
 *     },
 *     function (err, n) {
 *         // 5 seconds have passed, n = 5
 *     }
 * );
 */
function whilst(test, iteratee, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    if (!test()) return callback(null);
    var next = function(err/*, ...args*/) {
        if (err) return callback(err);
        if (test()) return _iteratee(next);
        var args = slice(arguments, 1);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}

/**
 * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs. `callback` will be passed an error and any
 * arguments passed to the final `iteratee`'s callback.
 *
 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
 *
 * @name until
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function until(test, iteratee, callback) {
    whilst(function() {
        return !test.apply(this, arguments);
    }, iteratee, callback);
}

/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */
var waterfall = function(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
        var task = wrapAsync(tasks[taskIndex++]);
        args.push(onlyOnce(next));
        task.apply(null, args);
    }

    function next(err/*, ...args*/) {
        if (err || taskIndex === tasks.length) {
            return callback.apply(null, arguments);
        }
        nextTask(slice(arguments, 1));
    }

    nextTask([]);
};

/**
 * An "async function" in the context of Async is an asynchronous function with
 * a variable number of parameters, with the final parameter being a callback.
 * (`function (arg1, arg2, ..., callback) {}`)
 * The final callback is of the form `callback(err, results...)`, which must be
 * called once the function is completed.  The callback should be called with a
 * Error as its first argument to signal that an error occurred.
 * Otherwise, if no error occurred, it should be called with `null` as the first
 * argument, and any additional `result` arguments that may apply, to signal
 * successful completion.
 * The callback must be called exactly once, ideally on a later tick of the
 * JavaScript event loop.
 *
 * This type of function is also referred to as a "Node-style async function",
 * or a "continuation passing-style function" (CPS). Most of the methods of this
 * library are themselves CPS/Node-style async functions, or functions that
 * return CPS/Node-style async functions.
 *
 * Wherever we accept a Node-style async function, we also directly accept an
 * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
 * In this case, the `async` function will not be passed a final callback
 * argument, and any thrown error will be used as the `err` argument of the
 * implicit callback, and the return value will be used as the `result` value.
 * (i.e. a `rejected` of the returned Promise becomes the `err` callback
 * argument, and a `resolved` value becomes the `result`.)
 *
 * Note, due to JavaScript limitations, we can only detect native `async`
 * functions and not transpilied implementations.
 * Your environment must have `async`/`await` support for this to work.
 * (e.g. Node > v7.6, or a recent version of a modern browser).
 * If you are using `async` functions through a transpiler (e.g. Babel), you
 * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
 * because the `async function` will be compiled to an ordinary function that
 * returns a promise.
 *
 * @typedef {Function} AsyncFunction
 * @static
 */

/**
 * Async is a utility module which provides straight-forward, powerful functions
 * for working with asynchronous JavaScript. Although originally designed for
 * use with [Node.js](http://nodejs.org) and installable via
 * `npm install --save async`, it can also be used directly in the browser.
 * @module async
 * @see AsyncFunction
 */


/**
 * A collection of `async` functions for manipulating collections, such as
 * arrays and objects.
 * @module Collections
 */

/**
 * A collection of `async` functions for controlling the flow through a script.
 * @module ControlFlow
 */

/**
 * A collection of `async` utility functions.
 * @module Utils
 */

var index = {
    applyEach: applyEach,
    applyEachSeries: applyEachSeries,
    apply: apply,
    asyncify: asyncify,
    auto: auto,
    autoInject: autoInject,
    cargo: cargo,
    compose: compose,
    concat: concat,
    concatLimit: concatLimit,
    concatSeries: concatSeries,
    constant: constant,
    detect: detect,
    detectLimit: detectLimit,
    detectSeries: detectSeries,
    dir: dir,
    doDuring: doDuring,
    doUntil: doUntil,
    doWhilst: doWhilst,
    during: during,
    each: eachLimit,
    eachLimit: eachLimit$1,
    eachOf: eachOf,
    eachOfLimit: eachOfLimit,
    eachOfSeries: eachOfSeries,
    eachSeries: eachSeries,
    ensureAsync: ensureAsync,
    every: every,
    everyLimit: everyLimit,
    everySeries: everySeries,
    filter: filter,
    filterLimit: filterLimit,
    filterSeries: filterSeries,
    forever: forever,
    groupBy: groupBy,
    groupByLimit: groupByLimit,
    groupBySeries: groupBySeries,
    log: log,
    map: map,
    mapLimit: mapLimit,
    mapSeries: mapSeries,
    mapValues: mapValues,
    mapValuesLimit: mapValuesLimit,
    mapValuesSeries: mapValuesSeries,
    memoize: memoize,
    nextTick: nextTick,
    parallel: parallelLimit,
    parallelLimit: parallelLimit$1,
    priorityQueue: priorityQueue,
    queue: queue$1,
    race: race,
    reduce: reduce,
    reduceRight: reduceRight,
    reflect: reflect,
    reflectAll: reflectAll,
    reject: reject,
    rejectLimit: rejectLimit,
    rejectSeries: rejectSeries,
    retry: retry,
    retryable: retryable,
    seq: seq,
    series: series,
    setImmediate: setImmediate$1,
    some: some,
    someLimit: someLimit,
    someSeries: someSeries,
    sortBy: sortBy,
    timeout: timeout,
    times: times,
    timesLimit: timeLimit,
    timesSeries: timesSeries,
    transform: transform,
    tryEach: tryEach,
    unmemoize: unmemoize,
    until: until,
    waterfall: waterfall,
    whilst: whilst,

    // aliases
    all: every,
    any: some,
    forEach: eachLimit,
    forEachSeries: eachSeries,
    forEachLimit: eachLimit$1,
    forEachOf: eachOf,
    forEachOfSeries: eachOfSeries,
    forEachOfLimit: eachOfLimit,
    inject: reduce,
    foldl: reduce,
    foldr: reduceRight,
    select: filter,
    selectLimit: filterLimit,
    selectSeries: filterSeries,
    wrapSync: asyncify
};

exports['default'] = index;
exports.applyEach = applyEach;
exports.applyEachSeries = applyEachSeries;
exports.apply = apply;
exports.asyncify = asyncify;
exports.auto = auto;
exports.autoInject = autoInject;
exports.cargo = cargo;
exports.compose = compose;
exports.concat = concat;
exports.concatLimit = concatLimit;
exports.concatSeries = concatSeries;
exports.constant = constant;
exports.detect = detect;
exports.detectLimit = detectLimit;
exports.detectSeries = detectSeries;
exports.dir = dir;
exports.doDuring = doDuring;
exports.doUntil = doUntil;
exports.doWhilst = doWhilst;
exports.during = during;
exports.each = eachLimit;
exports.eachLimit = eachLimit$1;
exports.eachOf = eachOf;
exports.eachOfLimit = eachOfLimit;
exports.eachOfSeries = eachOfSeries;
exports.eachSeries = eachSeries;
exports.ensureAsync = ensureAsync;
exports.every = every;
exports.everyLimit = everyLimit;
exports.everySeries = everySeries;
exports.filter = filter;
exports.filterLimit = filterLimit;
exports.filterSeries = filterSeries;
exports.forever = forever;
exports.groupBy = groupBy;
exports.groupByLimit = groupByLimit;
exports.groupBySeries = groupBySeries;
exports.log = log;
exports.map = map;
exports.mapLimit = mapLimit;
exports.mapSeries = mapSeries;
exports.mapValues = mapValues;
exports.mapValuesLimit = mapValuesLimit;
exports.mapValuesSeries = mapValuesSeries;
exports.memoize = memoize;
exports.nextTick = nextTick;
exports.parallel = parallelLimit;
exports.parallelLimit = parallelLimit$1;
exports.priorityQueue = priorityQueue;
exports.queue = queue$1;
exports.race = race;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reflect = reflect;
exports.reflectAll = reflectAll;
exports.reject = reject;
exports.rejectLimit = rejectLimit;
exports.rejectSeries = rejectSeries;
exports.retry = retry;
exports.retryable = retryable;
exports.seq = seq;
exports.series = series;
exports.setImmediate = setImmediate$1;
exports.some = some;
exports.someLimit = someLimit;
exports.someSeries = someSeries;
exports.sortBy = sortBy;
exports.timeout = timeout;
exports.times = times;
exports.timesLimit = timeLimit;
exports.timesSeries = timesSeries;
exports.transform = transform;
exports.tryEach = tryEach;
exports.unmemoize = unmemoize;
exports.until = until;
exports.waterfall = waterfall;
exports.whilst = whilst;
exports.all = every;
exports.allLimit = everyLimit;
exports.allSeries = everySeries;
exports.any = some;
exports.anyLimit = someLimit;
exports.anySeries = someSeries;
exports.find = detect;
exports.findLimit = detectLimit;
exports.findSeries = detectSeries;
exports.forEach = eachLimit;
exports.forEachSeries = eachSeries;
exports.forEachLimit = eachLimit$1;
exports.forEachOf = eachOf;
exports.forEachOfSeries = eachOfSeries;
exports.forEachOfLimit = eachOfLimit;
exports.inject = reduce;
exports.foldl = reduce;
exports.foldr = reduceRight;
exports.select = filter;
exports.selectLimit = filterLimit;
exports.selectSeries = filterSeries;
exports.wrapSync = asyncify;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)(module)))

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var Signing         =  __webpack_require__(18);
var Converter       =  __webpack_require__(3);
var Kerl            =  __webpack_require__(11);
var Curl            =  __webpack_require__(5);
var Bundle          =  __webpack_require__(19);
var Utils           =  __webpack_require__(17);
var inputValidator  =  __webpack_require__(10);
var errors          =  __webpack_require__(25);
var Address         =  __webpack_require__(83);

function Multisig(provider) {

    this._makeRequest = provider;
}


/**
*   Gets the key value of a seed
*
*   @method getKey
*   @param {string} seed
*   @param {int} index
*   @param {int} security Security level to be used for the private key / address. Can be 1, 2 or 3
*   @returns {string} digest trytes
**/
Multisig.prototype.getKey = function(seed, index, security) {

    return Converter.trytes(Signing.key(Converter.trits(seed), index, security));
}

/**
*   Gets the digest value of a seed
*
*   @method getDigest
*   @param {string} seed
*   @param {int} index
*   @param {int} security Security level to be used for the private key / address. Can be 1, 2 or 3
*   @returns {string} digest trytes
**/
Multisig.prototype.getDigest = function(seed, index, security) {

    var key = Signing.key(Converter.trits(seed), index, security);
    return Converter.trytes(Signing.digests(key));
}

/**
*   Multisig address constructor
*/
Multisig.prototype.address = Address;

/**
*   Validates  a generated multisig address
*
*   @method validateAddress
*   @param {string} multisigAddress
*   @param {array} digests
*   @returns {bool}
**/
Multisig.prototype.validateAddress = function(multisigAddress, digests) {

    var kerl = new Kerl();

    // initialize Kerl with the provided state
    kerl.initialize();

    // Absorb all key digests
    digests.forEach(function(keyDigest) {
        var trits = Converter.trits(keyDigest);
        kerl.absorb(Converter.trits(keyDigest), 0, trits.length);
    })

    // Squeeze address trits
    var addressTrits = [];
    kerl.squeeze(addressTrits, 0, Curl.HASH_LENGTH);

    // Convert trits into trytes and return the address
    return Converter.trytes(addressTrits) === multisigAddress;
}


/**
*   Prepares transfer by generating the bundle with the corresponding cosigner transactions
*   Does not contain signatures
*
*   @method initiateTransfer
*   @param {object} input the input addresses as well as the securitySum, and balance
*                   where `address` is the input multisig address
*                   and `securitySum` is the sum of security levels used by all co-signers
*                   and `balance` is the expected balance, if you wish to override getBalances
*   @param {string} remainderAddress Has to be generated by the cosigners before initiating the transfer, can be null if fully spent
*   @param {object} transfers
*   @param {function} callback
*   @returns {array} Array of transaction objects
**/
Multisig.prototype.initiateTransfer = function(input, remainderAddress, transfers, callback) {

    var self = this;

    // If message or tag is not supplied, provide it
    // Also remove the checksum of the address if it's there
    transfers.forEach(function(thisTransfer) {
        thisTransfer.message = thisTransfer.message ? thisTransfer.message : '';
        thisTransfer.tag = thisTransfer.tag ? thisTransfer.tag : '';
        thisTransfer.address = Utils.noChecksum(thisTransfer.address);
    })

    // Input validation of transfers object
    if (!inputValidator.isTransfersArray(transfers)) {
        return callback(errors.invalidTransfers());
    }

    // check if int
    if (!inputValidator.isValue(input.securitySum)) {
        return callback(errors.invalidInputs());
    }

    // validate input address
    if (!inputValidator.isAddress(input.address)) {
        return callback(errors.invalidTrytes());
    }

    // validate remainder address
    if (remainderAddress && !inputValidator.isAddress(remainderAddress)) {
        return callback(errors.invalidTrytes());
    }

    // Create a new bundle
    var bundle = new Bundle();

    var totalValue = 0;
    var signatureFragments = [];
    var tag;

    //
    //  Iterate over all transfers, get totalValue
    //  and prepare the signatureFragments, message and tag
    //
    for (var i = 0; i < transfers.length; i++) {

        var signatureMessageLength = 1;

        // If message longer than 2187 trytes, increase signatureMessageLength (add multiple transactions)
        if (transfers[i].message.length > 2187) {

            // Get total length, message / maxLength (2187 trytes)
            signatureMessageLength += Math.floor(transfers[i].message.length / 2187);

            var msgCopy = transfers[i].message;

            // While there is still a message, copy it
            while (msgCopy) {

                var fragment = msgCopy.slice(0, 2187);
                msgCopy = msgCopy.slice(2187, msgCopy.length);

                // Pad remainder of fragment
                for (var j = 0; fragment.length < 2187; j++) {
                    fragment += '9';
                }

                signatureFragments.push(fragment);
            }

        } else {
            // Else, get single fragment with 2187 of 9's trytes
            var fragment = '';

            if (transfers[i].message) {
                fragment = transfers[i].message.slice(0, 2187)
            }

            for (var j = 0; fragment.length < 2187; j++) {
                fragment += '9';
            }

            signatureFragments.push(fragment);
        }

        // get current timestamp in seconds
        var timestamp = Math.floor(Date.now() / 1000);

        // If no tag defined, get 27 tryte tag.
        tag = transfers[i].tag ? transfers[i].tag : '999999999999999999999999999';

        // Pad for required 27 tryte length
        for (var j = 0; tag.length < 27; j++) {
            tag += '9';
        }

        // Add first entries to the bundle
        // Slice the address in case the user provided a checksummed one
        bundle.addEntry(signatureMessageLength, transfers[i].address.slice(0, 81), transfers[i].value, tag, timestamp);

        // Sum up total value
        totalValue += parseInt(transfers[i].value);
    }

    // Get inputs if we are sending tokens
    if (totalValue) {

        function createBundle(totalBalance, callback) {
            if (totalBalance > 0) {

                var toSubtract = 0 - totalBalance;
                var timestamp = Math.floor(Date.now() / 1000);

                // Add input as bundle entry
                // Only a single entry, signatures will be added later
                bundle.addEntry(input.securitySum, input.address, toSubtract, tag, timestamp);
            }

            if (totalValue > totalBalance) {
                return callback(new Error("Not enough balance."));
            }


            // If there is a remainder value
            // Add extra output to send remaining funds to
            if (totalBalance > totalValue) {

                var remainder = totalBalance - totalValue;

                // Remainder bundle entry if necessary
                if (!remainderAddress) {
                    return callback(new Error("No remainder address defined"));
                }

                bundle.addEntry(1, remainderAddress, remainder, tag, timestamp);
            }

            bundle.finalize();
            bundle.addTrytes(signatureFragments);

            return callback(null, bundle.bundle);
        };

        if (input.balance) {
          createBundle(input.balance, callback);
        } else {
          var command = {
              'command': 'getBalances',
              'addresses': new Array(input.address),
              'threshold': 100
          }
          self._makeRequest.send(command, function(e, balances) {
              if (e) return callback(e);
              createBundle(parseInt(balances.balances[0]), callback);
          });
        }

    } else {

        return callback(new Error("Invalid value transfer: the transfer does not require a signature."));
    }

}


/**
*   Adds the cosigner signatures to the corresponding bundle transaction
*
*   @method addSignature
*   @param {array} bundleToSign
*   @param {int} cosignerIndex
*   @param {string} inputAddress
*   @param {string} key
*   @param {function} callback
*   @returns {array} trytes Returns bundle trytes
**/
Multisig.prototype.addSignature = function(bundleToSign, inputAddress, key, callback) {

    var bundle = new Bundle();
    bundle.bundle = bundleToSign;

    // Get the security used for the private key
    // 1 security level = 2187 trytes
    var security = (key.length / 2187);

    // convert private key trytes into trits
    var key = Converter.trits(key);


    // First get the total number of already signed transactions
    // use that for the bundle hash calculation as well as knowing
    // where to add the signature
    var numSignedTxs = 0;

    for (var i = 0; i < bundle.bundle.length; i++) {

        if (bundle.bundle[i].address === inputAddress) {

            // If transaction is already signed, increase counter
            if (!inputValidator.isNinesTrytes(bundle.bundle[i].signatureMessageFragment)) {

                numSignedTxs++;
            }
            // Else sign the transactionse
            else {

                var bundleHash = bundle.bundle[i].bundle;

                //  First 6561 trits for the firstFragment
                var firstFragment = key.slice(0, 6561);

                //  Get the normalized bundle hash
                var normalizedBundleHash = bundle.normalizedBundle(bundleHash);
                var normalizedBundleFragments = [];

                // Split hash into 3 fragments
                for (var k = 0; k < 3; k++) {
                    normalizedBundleFragments[k] = normalizedBundleHash.slice(k * 27, (k + 1) * 27);
                }

                //  First bundle fragment uses 27 trytes
                var firstBundleFragment = normalizedBundleFragments[numSignedTxs % 3];

                //  Calculate the new signatureFragment with the first bundle fragment
                var firstSignedFragment = Signing.signatureFragment(firstBundleFragment, firstFragment);

                //  Convert signature to trytes and assign the new signatureFragment
                bundle.bundle[i].signatureMessageFragment = Converter.trytes(firstSignedFragment);

                for (var j = 1; j < security; j++) {

                    //  Next 6561 trits for the firstFragment
                    var nextFragment = key.slice(6561 * j, (j + 1) * 6561);

                    //  Use the next 27 trytes
                    var nextBundleFragment = normalizedBundleFragments[(numSignedTxs + j) % 3];

                    //  Calculate the new signatureFragment with the first bundle fragment
                    var nextSignedFragment = Signing.signatureFragment(nextBundleFragment, nextFragment);

                    //  Convert signature to trytes and add new bundle entry at i + j position
                    // Assign the signature fragment
                    bundle.bundle[i + j].signatureMessageFragment = Converter.trytes(nextSignedFragment);
                }

                break;
            }
        }
    }

    return callback(null, bundle.bundle);
}

module.exports = Multisig;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var Converter      =  __webpack_require__(3);
var Curl           =  __webpack_require__(5);
var Kerl           =  __webpack_require__(11);
var Signing        =  __webpack_require__(18);
var Utils          =  __webpack_require__(17);
var inputValidator =  __webpack_require__(10);


/**
*   Initializes a new multisig address
*
*   @method addDigest
*   @param {string|array} digest digest trytes
*   @return {object} address instance
*
**/
function Address(digests) {

  if (!(this instanceof Address)) {
    return new Address(digests);
  }

  // Initialize kerl instance
  this._kerl = new Kerl();
  this._kerl.initialize();


  // Add digests if any
  if (digests) {

    this.absorb(digests);
  }
}

/**
*   Absorbs key digests
*
*   @method absorb
*   @param {string|array} digest digest trytes
*   @return {object} address instance
*
**/
Address.prototype.absorb = function (digest) {

  // Construct array
  var digests = Array.isArray(digest) ? digest : [digest];

  // Add digests
  for (var i = 0; i < digests.length; i++) {

    // Get trits of digest
    var digestTrits = Converter.trits(digests[i]);

    // Absorb digest
    this._kerl.absorb(digestTrits, 0, digestTrits.length);
  }

  return this;
}

/**
*   Finalizes and returns the multisig address in trytes
*
*   @method finalize
*   @param {string} digest digest trytes, optional
*   @return {string} address trytes
*
**/
Address.prototype.finalize = function (digest) {

    // Absorb last digest if provided
    if (digest) {
      this.absorb(digest);
    }

    // Squeeze the address trits
    var addressTrits = [];
    this._kerl.squeeze(addressTrits, 0, Curl.HASH_LENGTH);

    // Convert trits into trytes and return the address
    return Converter.trytes(addressTrits);
}


module.exports = Address;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {"name":"iota.lib.js","version":"0.4.1","description":"Javascript Library for IOTA","main":"./lib/iota.js","scripts":{"build":"gulp","test":"mocha"},"author":{"name":"Dominik Schiener (IOTA Foundation)","website":"https://iota.org"},"keywords":["iota","tangle","library","browser","javascript","nodejs","API"],"license":"MIT","bugs":{"url":"https://github.com/iotaledger/iota.lib.js/issues"},"repository":{"type":"git","url":"https://github.com/iotaledger/iota.lib.js.git"},"dependencies":{"async":"^2.5.0","crypto-js":"^3.1.9-1","xmlhttprequest":"^1.8.0"},"devDependencies":{"bower":">=1.8.0","browserify":">=14.1.0","chai":"^4.0.2","del":"^3.0.0","gulp":"^3.9.1","gulp-jshint":"^2.0.2","gulp-nsp":">=2.4.2","gulp-rename":">=1.2.2","gulp-replace":"^0.6.1","gulp-uglify":"^3.0.0","jshint":"^2.9.4","mocha":"^3.2.0","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0"}}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const processFn = (fn, opts) => function () {
	const P = opts.promiseModule;
	const args = new Array(arguments.length);

	for (let i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
	}

	return new P((resolve, reject) => {
		if (opts.errorFirst) {
			args.push(function (err, result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 1; i < arguments.length; i++) {
						results[i - 1] = arguments[i];
					}

					if (err) {
						results.unshift(err);
						reject(results);
					} else {
						resolve(results);
					}
				} else if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		} else {
			args.push(function (result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 0; i < arguments.length; i++) {
						results[i] = arguments[i];
					}

					resolve(results);
				} else {
					resolve(result);
				}
			});
		}

		fn.apply(this, args);
	});
};

module.exports = (obj, opts) => {
	opts = Object.assign({
		exclude: [/.+(Sync|Stream)$/],
		errorFirst: true,
		promiseModule: Promise
	}, opts);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
		return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
	};

	let ret;
	if (typeof obj === 'function') {
		ret = function () {
			if (opts.excludeMain) {
				return obj.apply(this, arguments);
			}

			return processFn(obj, opts).apply(this, arguments);
		};
	} else {
		ret = Object.create(Object.getPrototypeOf(obj));
	}

	for (const key in obj) { // eslint-disable-line guard-for-in
		const x = obj[key];
		ret[key] = typeof x === 'function' && filter(key) ? processFn(x, opts) : x;
	}

	return ret;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const IOTA = __webpack_require__(87);

/* ======= CTrits bindings ======= */
const TritEncoding = {
  BYTE: 1,
  TRIT: 2,
  TRYTE: 3

  /* ======= Rust bindings ======= */

};const iota_ctrits_drop = IOTA.cwrap("iota_ctrits_drop", "", ["number"]);
const iota_ctrits_convert = IOTA.cwrap("iota_ctrits_convert", "number", ["number", "number"]);
const iota_ctrits_ctrits_from_trytes = IOTA.cwrap("iota_ctrits_ctrits_from_trytes", "number", ["string", "number"]);
const iota_ctrits_ctrits_from_bytes = IOTA.cwrap("iota_ctrits_ctrits_from_bytes", "number", ["number", "number"]);
const iota_ctrits_ctrits_from_trits = IOTA.cwrap("iota_ctrits_ctrits_from_trits", "number", ["number", "number"]);

// For accessing the struct members
const iota_ctrits_ctrits_encoding = IOTA.cwrap("iota_ctrits_ctrits_encoding", "number", ["number"]);
const iota_ctrits_ctrits_length = IOTA.cwrap("iota_ctrits_ctrits_length", "number", ["number"]);
const iota_ctrits_ctrits_data = IOTA.cwrap("iota_ctrits_ctrits_data", "number", ["number"]);
const iota_ctrits_ctrits_byte_length = IOTA.cwrap("iota_ctrits_ctrits_byte_length", "number", ["number"]);

// (seed, message, key, root, siblings, next_root, start, index, security) -> encoded_message
const iota_mam_create = IOTA.cwrap("iota_mam_create", "number", ["number", "number", "number", "number", "number", "number", "number", "number", "number"]);
// (encoded_message, key, root, index) -> message
const iota_mam_parse = IOTA.cwrap("iota_mam_parse", "number", ["number", "number", "number", "number"]);

// (seed, index, count, securit) -> MerkleTree instance
const iota_merkle_create = IOTA.cwrap("iota_merkle_create", "number", ["number", "number", "number", "number"]);
// (MerkleTree instance) -> ()
const iota_merkle_drop = IOTA.cwrap("iota_merkle_drop", "", ["number"]);
// (MerkleTree instance) -> (siblings as number)
const iota_merkle_siblings = IOTA.cwrap("iota_merkle_siblings", "number", ["number"]);
// (MerkleTree instance, index) -> (MerkleBranch instance)
const iota_merkle_branch = IOTA.cwrap("iota_merkle_branch", "number", ["number", "number"]);
// (MerkleBranch instance) -> ()
const iota_merkle_branch_drop = IOTA.cwrap("iota_merkle_branch_drop", "", ["number"]);
// (MerkleBranch instance) -> (number)
const iota_merkle_branch_len = IOTA.cwrap("iota_merkle_branch_len", "", ["number"]);
// (address, siblings, index) -> (root as number)
const iota_merkle_root = IOTA.cwrap("iota_merkle_root", "number", ["number", "number", "number"]);
// (MerkleTree instance) -> root hash
const iota_merkle_slice = IOTA.cwrap("iota_merkle_slice", "number", ["number"]);

const string_to_ctrits_trits = str => {
  let strin = iota_ctrits_ctrits_from_trytes(str, str.length);
  let out = iota_ctrits_convert(strin, TritEncoding.TRIT);
  iota_ctrits_drop(strin);
  return out;
};

const ctrits_trits_to_string = ctrits => {
  let str_trits = iota_ctrits_convert(ctrits, TritEncoding.TRYTE);
  let ptr = iota_ctrits_ctrits_data(str_trits);
  let len = iota_ctrits_ctrits_length(str_trits);
  let out = IOTA.Pointer_stringify(ptr, len);
  iota_ctrits_drop(str_trits);
  return out;
};

function getRoot(SEED, CHANNEL) {
  let SEED_trits = string_to_ctrits_trits(SEED);
  let root_merkle = iota_merkle_create(SEED_trits, CHANNEL.start, CHANNEL.count, CHANNEL.security);
  return ctrits_trits_to_string(iota_merkle_slice(root_merkle));
}

function createMessage(SEED, MESSAGE, SIDE_KEY, CHANNEL) {
  if (!SIDE_KEY) SIDE_KEY = `999999999999999999999999999999999999999999999999999999999999999999999999999999999`;
  // MAM settings
  let SEED_trits = string_to_ctrits_trits(SEED);
  let MESSAGE_trits = string_to_ctrits_trits(MESSAGE);
  let SIDE_KEY_trits = string_to_ctrits_trits(SIDE_KEY);

  const SECURITY = CHANNEL.security;
  const START = CHANNEL.start;
  const COUNT = CHANNEL.count;
  const NEXT_START = START + COUNT;
  const NEXT_COUNT = CHANNEL.next_count;
  const INDEX = CHANNEL.index;

  const HASH_LENGTH = 81;

  // set up merkle tree
  let root_merkle = iota_merkle_create(SEED_trits, START, COUNT, SECURITY);
  let next_root_merkle = iota_merkle_create(SEED_trits, NEXT_START, NEXT_COUNT, SECURITY);

  let root_branch = iota_merkle_branch(root_merkle, INDEX);
  let root_siblings = iota_merkle_siblings(root_branch);

  let next_root_branch = iota_merkle_branch(next_root_merkle, INDEX);
  let next_root_siblings = iota_merkle_siblings(next_root_branch);

  let root = iota_merkle_slice(root_merkle);
  let next_root = iota_merkle_slice(next_root_merkle);

  let masked_payload = iota_mam_create(SEED_trits, MESSAGE_trits, SIDE_KEY_trits, root, root_siblings, next_root, START, INDEX, SECURITY);

  let response = {
    payload: ctrits_trits_to_string(masked_payload),
    root: ctrits_trits_to_string(root),
    next_root: ctrits_trits_to_string(next_root),
    side_key: SIDE_KEY
    // Clean up memory. Unneccessary for this example script, but should be done when running in a production
    // environment.
  };iota_merkle_branch_drop(root_branch);
  iota_merkle_branch_drop(next_root_branch);
  iota_merkle_drop(root_merkle);
  iota_merkle_drop(next_root_merkle);[SEED_trits, MESSAGE_trits, SIDE_KEY_trits, root, next_root].forEach(iota_ctrits_drop);
  return response;
}

function decodeMessage(PAYLOAD, SIDE_KEY, ROOT) {
  if (!SIDE_KEY) SIDE_KEY = `999999999999999999999999999999999999999999999999999999999999999999999999999999999`;

  let PAYLOAD_trits = string_to_ctrits_trits(PAYLOAD);
  let SIDE_KEY_trits = string_to_ctrits_trits(SIDE_KEY);
  let ROOT_trits = string_to_ctrits_trits(ROOT);

  let parse_result = iota_mam_parse(PAYLOAD_trits, SIDE_KEY_trits, ROOT_trits);
  let unmasked_payload_ctrits = IOTA.getValue(parse_result, "i32");
  let unmasked_payload = ctrits_trits_to_string(unmasked_payload_ctrits);
  iota_ctrits_drop(unmasked_payload_ctrits);

  let unmasked_next_root_ctrits = IOTA.getValue(parse_result + 4, "i32");
  let unmasked_next_root = ctrits_trits_to_string(unmasked_next_root_ctrits);
  iota_ctrits_drop(unmasked_next_root_ctrits);
  IOTA._free(parse_result);
  return { payload: unmasked_payload, next_root: unmasked_next_root };
}

module.exports = {
  createMessage: createMessage,
  decodeMessage: decodeMessage,
  getRoot: getRoot
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
var Module;if(!Module)Module=(typeof Module!=="undefined"?Module:null)||{};var moduleOverrides={};for(var key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;if(Module["ENVIRONMENT"]){if(Module["ENVIRONMENT"]==="WEB"){ENVIRONMENT_IS_WEB=true}else if(Module["ENVIRONMENT"]==="WORKER"){ENVIRONMENT_IS_WORKER=true}else if(Module["ENVIRONMENT"]==="NODE"){ENVIRONMENT_IS_NODE=true}else if(Module["ENVIRONMENT"]==="SHELL"){ENVIRONMENT_IS_SHELL=true}else{throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.")}}else{ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&"function"==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER}if(ENVIRONMENT_IS_NODE){if(!Module["print"])Module["print"]=console.log;if(!Module["printErr"])Module["printErr"]=console.warn;var nodeFS;var nodePath;Module["read"]=function shell_read(filename,binary){if(!nodeFS)nodeFS=__webpack_require__(24);if(!nodePath)nodePath=__webpack_require__(35);filename=nodePath["normalize"](filename);var ret=nodeFS["readFileSync"](filename);return binary?ret:ret.toString()};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};Module["load"]=function load(f){globalEval(read(f))};if(!Module["thisProgram"]){if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}else{Module["thisProgram"]="unknown-program"}}Module["arguments"]=process["argv"].slice(2);if(true){module["exports"]=Module}process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));Module["inspect"]=(function(){return"[Emscripten Module object]"})}else if(ENVIRONMENT_IS_SHELL){if(!Module["print"])Module["print"]=print;if(typeof printErr!="undefined")Module["printErr"]=printErr;if(typeof read!="undefined"){Module["read"]=read}else{Module["read"]=function shell_read(){throw"no read() available"}}Module["readBinary"]=function readBinary(f){if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}var data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){Module["arguments"]=scriptArgs}else if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof quit==="function"){Module["quit"]=(function(status,toThrow){quit(status)})}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){Module["read"]=function shell_read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){Module["readBinary"]=function readBinary(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}Module["readAsync"]=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response)}else{onerror()}};xhr.onerror=onerror;xhr.send(null)};if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof console!=="undefined"){if(!Module["print"])Module["print"]=function shell_print(x){console.log(x)};if(!Module["printErr"])Module["printErr"]=function shell_printErr(x){console.warn(x)}}else{var TRY_USE_DUMP=false;if(!Module["print"])Module["print"]=TRY_USE_DUMP&&typeof dump!=="undefined"?(function(x){dump(x)}):(function(x){})}if(ENVIRONMENT_IS_WORKER){Module["load"]=importScripts}if(typeof Module["setWindowTitle"]==="undefined"){Module["setWindowTitle"]=(function(title){document.title=title})}}else{throw"Unknown runtime environment. Where are we?"}function globalEval(x){eval.call(null,x)}if(!Module["load"]&&Module["read"]){Module["load"]=function load(f){globalEval(Module["read"](f))}}if(!Module["print"]){Module["print"]=(function(){})}if(!Module["printErr"]){Module["printErr"]=Module["print"]}if(!Module["arguments"]){Module["arguments"]=[]}if(!Module["thisProgram"]){Module["thisProgram"]="./this.program"}if(!Module["quit"]){Module["quit"]=(function(status,toThrow){throw toThrow})}Module.print=Module["print"];Module.printErr=Module["printErr"];Module["preRun"]=[];Module["postRun"]=[];for(var key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=undefined;var Runtime={setTempRet0:(function(value){tempRet0=value;return value}),getTempRet0:(function(){return tempRet0}),stackSave:(function(){return STACKTOP}),stackRestore:(function(stackTop){STACKTOP=stackTop}),getNativeTypeSize:(function(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return Runtime.QUANTUM_SIZE}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0);return bits/8}else{return 0}}}}),getNativeFieldSize:(function(type){return Math.max(Runtime.getNativeTypeSize(type),Runtime.QUANTUM_SIZE)}),STACK_ALIGN:16,prepVararg:(function(ptr,type){if(type==="double"||type==="i64"){if(ptr&7){assert((ptr&7)===4);ptr+=4}}else{assert((ptr&3)===0)}return ptr}),getAlignSize:(function(type,size,vararg){if(!vararg&&(type=="i64"||type=="double"))return 8;if(!type)return Math.min(size,8);return Math.min(size||(type?Runtime.getNativeFieldSize(type):0),Runtime.QUANTUM_SIZE)}),dynCall:(function(sig,ptr,args){if(args&&args.length){return Module["dynCall_"+sig].apply(null,[ptr].concat(args))}else{return Module["dynCall_"+sig].call(null,ptr)}}),functionPointers:[],addFunction:(function(func){for(var i=0;i<Runtime.functionPointers.length;i++){if(!Runtime.functionPointers[i]){Runtime.functionPointers[i]=func;return 2*(1+i)}}throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."}),removeFunction:(function(index){Runtime.functionPointers[(index-2)/2]=null}),warnOnce:(function(text){if(!Runtime.warnOnce.shown)Runtime.warnOnce.shown={};if(!Runtime.warnOnce.shown[text]){Runtime.warnOnce.shown[text]=1;Module.printErr(text)}}),funcWrappers:{},getFuncWrapper:(function(func,sig){if(!func)return;assert(sig);if(!Runtime.funcWrappers[sig]){Runtime.funcWrappers[sig]={}}var sigCache=Runtime.funcWrappers[sig];if(!sigCache[func]){if(sig.length===1){sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func)}}else if(sig.length===2){sigCache[func]=function dynCall_wrapper(arg){return Runtime.dynCall(sig,func,[arg])}}else{sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func,Array.prototype.slice.call(arguments))}}}return sigCache[func]}),getCompilerSetting:(function(name){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"}),stackAlloc:(function(size){var ret=STACKTOP;STACKTOP=STACKTOP+size|0;STACKTOP=STACKTOP+15&-16;return ret}),staticAlloc:(function(size){var ret=STATICTOP;STATICTOP=STATICTOP+size|0;STATICTOP=STATICTOP+15&-16;return ret}),dynamicAlloc:(function(size){var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=(ret+size+15|0)&-16;HEAP32[DYNAMICTOP_PTR>>2]=end;if(end>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){HEAP32[DYNAMICTOP_PTR>>2]=ret;return 0}}return ret}),alignMemory:(function(size,quantum){var ret=size=Math.ceil(size/(quantum?quantum:16))*(quantum?quantum:16);return ret}),makeBigInt:(function(low,high,unsigned){var ret=unsigned?+(low>>>0)+ +(high>>>0)*+4294967296:+(low>>>0)+ +(high|0)*+4294967296;return ret}),GLOBAL_BASE:8,QUANTUM_SIZE:4,__dummy__:0};Module["Runtime"]=Runtime;var ABORT=0;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];if(!func){try{func=eval("_"+ident)}catch(e){}}assert(func,"Cannot call unknown function "+ident+" (perhaps LLVM optimizations or closure removed it?)");return func}var cwrap,ccall;((function(){var JSfuncs={"stackSave":(function(){Runtime.stackSave()}),"stackRestore":(function(){Runtime.stackRestore()}),"arrayToC":(function(arr){var ret=Runtime.stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}),"stringToC":(function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=Runtime.stackAlloc(len);stringToUTF8(str,ret,len)}return ret})};var toC={"string":JSfuncs["stringToC"],"array":JSfuncs["arrayToC"]};ccall=function ccallFunc(ident,returnType,argTypes,args,opts){var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=Runtime.stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);if(returnType==="string")ret=Pointer_stringify(ret);if(stack!==0){if(opts&&opts.async){EmterpreterAsync.asyncFinalizers.push((function(){Runtime.stackRestore(stack)}));return}Runtime.stackRestore(stack)}return ret};var sourceRegex=/^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;function parseJSFunc(jsfunc){var parsed=jsfunc.toString().match(sourceRegex).slice(1);return{arguments:parsed[0],body:parsed[1],returnValue:parsed[2]}}var JSsource=null;function ensureJSsource(){if(!JSsource){JSsource={};for(var fun in JSfuncs){if(JSfuncs.hasOwnProperty(fun)){JSsource[fun]=parseJSFunc(JSfuncs[fun])}}}}cwrap=function cwrap(ident,returnType,argTypes){argTypes=argTypes||[];var cfunc=getCFunc(ident);var numericArgs=argTypes.every((function(type){return type==="number"}));var numericRet=returnType!=="string";if(numericRet&&numericArgs){return cfunc}var argNames=argTypes.map((function(x,i){return"$"+i}));var funcstr="(function("+argNames.join(",")+") {";var nargs=argTypes.length;if(!numericArgs){ensureJSsource();funcstr+="var stack = "+JSsource["stackSave"].body+";";for(var i=0;i<nargs;i++){var arg=argNames[i],type=argTypes[i];if(type==="number")continue;var convertCode=JSsource[type+"ToC"];funcstr+="var "+convertCode.arguments+" = "+arg+";";funcstr+=convertCode.body+";";funcstr+=arg+"=("+convertCode.returnValue+");"}}var cfuncname=parseJSFunc((function(){return cfunc})).returnValue;funcstr+="var ret = "+cfuncname+"("+argNames.join(",")+");";if(!numericRet){var strgfy=parseJSFunc((function(){return Pointer_stringify})).returnValue;funcstr+="ret = "+strgfy+"(ret);"}if(!numericArgs){ensureJSsource();funcstr+=JSsource["stackRestore"].body.replace("()","(stack)")+";"}funcstr+="return ret})";return eval(funcstr)}}))();Module["ccall"]=ccall;Module["cwrap"]=cwrap;function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=+1?tempDouble>+0?(Math_min(+Math_floor(tempDouble/+4294967296),+4294967295)|0)>>>0:~~+Math_ceil((tempDouble- +(~~tempDouble>>>0))/+4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}Module["setValue"]=setValue;function getValue(ptr,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];default:abort("invalid type for setValue: "+type)}return null}Module["getValue"]=getValue;var ALLOC_NORMAL=0;var ALLOC_STACK=1;var ALLOC_STATIC=2;var ALLOC_DYNAMIC=3;var ALLOC_NONE=4;Module["ALLOC_NORMAL"]=ALLOC_NORMAL;Module["ALLOC_STACK"]=ALLOC_STACK;Module["ALLOC_STATIC"]=ALLOC_STATIC;Module["ALLOC_DYNAMIC"]=ALLOC_DYNAMIC;Module["ALLOC_NONE"]=ALLOC_NONE;function allocate(slab,types,allocator,ptr){var zeroinit,size;if(typeof slab==="number"){zeroinit=true;size=slab}else{zeroinit=false;size=slab.length}var singleType=typeof types==="string"?types:null;var ret;if(allocator==ALLOC_NONE){ret=ptr}else{ret=[typeof _malloc==="function"?_malloc:Runtime.staticAlloc,Runtime.stackAlloc,Runtime.staticAlloc,Runtime.dynamicAlloc][allocator===undefined?ALLOC_STATIC:allocator](Math.max(size,singleType?1:types.length))}if(zeroinit){var ptr=ret,stop;assert((ret&3)==0);stop=ret+(size&~3);for(;ptr<stop;ptr+=4){HEAP32[ptr>>2]=0}stop=ret+size;while(ptr<stop){HEAP8[ptr++>>0]=0}return ret}if(singleType==="i8"){if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var i=0,type,typeSize,previousType;while(i<size){var curr=slab[i];if(typeof curr==="function"){curr=Runtime.getFunctionIndex(curr)}type=singleType||types[i];if(type===0){i++;continue}if(type=="i64")type="i32";setValue(ret+i,curr,type);if(previousType!==type){typeSize=Runtime.getNativeTypeSize(type);previousType=type}i+=typeSize}return ret}Module["allocate"]=allocate;function getMemory(size){if(!staticSealed)return Runtime.staticAlloc(size);if(!runtimeInitialized)return Runtime.dynamicAlloc(size);return _malloc(size)}Module["getMemory"]=getMemory;function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return Module["UTF8ToString"](ptr)}Module["Pointer_stringify"]=Pointer_stringify;function AsciiToString(ptr){var str="";while(1){var ch=HEAP8[ptr++>>0];if(!ch)return str;str+=String.fromCharCode(ch)}}Module["AsciiToString"]=AsciiToString;function stringToAscii(str,outPtr){return writeAsciiToMemory(str,outPtr,false)}Module["stringToAscii"]=stringToAscii;var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx){var endPtr=idx;while(u8Array[endPtr])++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}}Module["UTF8ArrayToString"]=UTF8ArrayToString;function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}Module["UTF8ToString"]=UTF8ToString;function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}Module["stringToUTF8Array"]=stringToUTF8Array;function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}Module["stringToUTF8"]=stringToUTF8;function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}Module["lengthBytesUTF8"]=lengthBytesUTF8;var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function demangle(func){var __cxa_demangle_func=Module["___cxa_demangle"]||Module["__cxa_demangle"];if(__cxa_demangle_func){try{var s=func.substr(1);var len=lengthBytesUTF8(s)+1;var buf=_malloc(len);stringToUTF8(s,buf,len);var status=_malloc(4);var ret=__cxa_demangle_func(buf,0,0,status);if(getValue(status,"i32")===0&&ret){return Pointer_stringify(ret)}}catch(e){}finally{if(buf)_free(buf);if(status)_free(status);if(ret)_free(ret)}return func}Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");return func}function demangleAll(text){var regex=/__Z[\w\d_]+/g;return text.replace(regex,(function(x){var y=demangle(x);return x===y?x:x+" ["+y+"]"}))}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}function stackTrace(){var js=jsStackTrace();if(Module["extraStackTrace"])js+="\n"+Module["extraStackTrace"]();return demangleAll(js)}Module["stackTrace"]=stackTrace;var HEAP,buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferViews(){Module["HEAP8"]=HEAP8=new Int8Array(buffer);Module["HEAP16"]=HEAP16=new Int16Array(buffer);Module["HEAP32"]=HEAP32=new Int32Array(buffer);Module["HEAPU8"]=HEAPU8=new Uint8Array(buffer);Module["HEAPU16"]=HEAPU16=new Uint16Array(buffer);Module["HEAPU32"]=HEAPU32=new Uint32Array(buffer);Module["HEAPF32"]=HEAPF32=new Float32Array(buffer);Module["HEAPF64"]=HEAPF64=new Float64Array(buffer)}var STATIC_BASE,STATICTOP,staticSealed;var STACK_BASE,STACKTOP,STACK_MAX;var DYNAMIC_BASE,DYNAMICTOP_PTR;STATIC_BASE=STATICTOP=STACK_BASE=STACKTOP=STACK_MAX=DYNAMIC_BASE=DYNAMICTOP_PTR=0;staticSealed=false;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function enlargeMemory(){abortOnCannotGrowMemory()}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||16777216;if(TOTAL_MEMORY<TOTAL_STACK)Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+TOTAL_MEMORY+"! (TOTAL_STACK="+TOTAL_STACK+")");if(Module["buffer"]){buffer=Module["buffer"]}else{{buffer=new ArrayBuffer(TOTAL_MEMORY)}}updateGlobalBufferViews();function getTotalMemory(){return TOTAL_MEMORY}HEAP32[0]=1668509029;HEAP16[1]=25459;if(HEAPU8[2]!==115||HEAPU8[3]!==99)throw"Runtime error: expected the system to be little-endian!";Module["HEAP"]=HEAP;Module["buffer"]=buffer;Module["HEAP8"]=HEAP8;Module["HEAP16"]=HEAP16;Module["HEAP32"]=HEAP32;Module["HEAPU8"]=HEAPU8;Module["HEAPU16"]=HEAPU16;Module["HEAPU32"]=HEAPU32;Module["HEAPF32"]=HEAPF32;Module["HEAPF64"]=HEAPF64;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}Module["addOnPreRun"]=addOnPreRun;function addOnInit(cb){__ATINIT__.unshift(cb)}Module["addOnInit"]=addOnInit;function addOnPreMain(cb){__ATMAIN__.unshift(cb)}Module["addOnPreMain"]=addOnPreMain;function addOnExit(cb){__ATEXIT__.unshift(cb)}Module["addOnExit"]=addOnExit;function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}Module["addOnPostRun"]=addOnPostRun;function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}Module["intArrayFromString"]=intArrayFromString;function intArrayToString(array){var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")}Module["intArrayToString"]=intArrayToString;function writeStringToMemory(string,buffer,dontAddNull){Runtime.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var lastChar,end;if(dontAddNull){end=buffer+lengthBytesUTF8(string);lastChar=HEAP8[end]}stringToUTF8(string,buffer,Infinity);if(dontAddNull)HEAP8[end]=lastChar}Module["writeStringToMemory"]=writeStringToMemory;function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}Module["writeArrayToMemory"]=writeArrayToMemory;function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}Module["writeAsciiToMemory"]=writeAsciiToMemory;if(!Math["imul"]||Math["imul"](4294967295,5)!==-5)Math["imul"]=function imul(a,b){var ah=a>>>16;var al=a&65535;var bh=b>>>16;var bl=b&65535;return al*bl+(ah*bl+al*bh<<16)|0};Math.imul=Math["imul"];if(!Math["clz32"])Math["clz32"]=(function(x){x=x>>>0;for(var i=0;i<32;i++){if(x&1<<31-i)return i}return 32});Math.clz32=Math["clz32"];if(!Math["trunc"])Math["trunc"]=(function(x){return x<0?Math.ceil(x):Math.floor(x)});Math.trunc=Math["trunc"];var Math_abs=Math.abs;var Math_cos=Math.cos;var Math_sin=Math.sin;var Math_tan=Math.tan;var Math_acos=Math.acos;var Math_asin=Math.asin;var Math_atan=Math.atan;var Math_atan2=Math.atan2;var Math_exp=Math.exp;var Math_log=Math.log;var Math_sqrt=Math.sqrt;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_pow=Math.pow;var Math_imul=Math.imul;var Math_fround=Math.fround;var Math_round=Math.round;var Math_min=Math.min;var Math_clz32=Math.clz32;var Math_trunc=Math.trunc;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}Module["addRunDependency"]=addRunDependency;function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["removeRunDependency"]=removeRunDependency;Module["preloadedImages"]={};Module["preloadedAudios"]={};var ASM_CONSTS=[];STATIC_BASE=Runtime.GLOBAL_BASE;STATICTOP=STATIC_BASE+30208;__ATINIT__.push();allocate([2,0,0,0,4,0,0,0,4,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,12,0,0,0,4,0,0,0,1,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,6,0,0,0,16,0,0,0,4,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,7,0,0,0,12,0,0,0,4,0,0,0,2,0,0,0,3,0,0,0,2,0,0,0,5,0,0,0,6,0,0,0,8,0,0,0,4,0,0,0,4,0,0,0,7,0,0,0,9,0,0,0,4,0,0,0,4,0,0,0,3,0,0,0,8,0,0,0,9,0,0,0,10,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,5,0,0,0,3,0,0,0,10,0,0,0,11,0,0,0,11,0,0,0,4,0,0,0,4,0,0,0,12,0,0,0,13,0,0,0,8,0,0,0,4,0,0,0,4,0,0,0,14,0,0,0,4,0,0,0,4,0,0,0,13,0,0,0,15,0,0,0,4,0,0,0,4,0,0,0,14,0,0,0,16,0,0,0,4,0,0,0,4,0,0,0,15,0,0,0,17,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,4,0,0,0,4,0,0,0,18,0,0,0,1,0,0,0,0,0,0,0,130,128,0,0,0,0,0,0,138,128,0,0,0,0,0,128,0,128,0,128,0,0,0,128,139,128,0,0,0,0,0,0,1,0,0,128,0,0,0,0,129,128,0,128,0,0,0,128,9,128,0,0,0,0,0,128,138,0,0,0,0,0,0,0,136,0,0,0,0,0,0,0,9,128,0,128,0,0,0,0,10,0,0,128,0,0,0,0,139,128,0,128,0,0,0,0,139,0,0,0,0,0,0,128,137,128,0,0,0,0,0,128,3,128,0,0,0,0,0,128,2,128,0,0,0,0,0,128,128,0,0,0,0,0,0,128,10,128,0,0,0,0,0,0,10,0,0,128,0,0,0,128,129,128,0,128,0,0,0,128,128,128,0,0,0,0,0,128,1,0,0,128,0,0,0,0,8,128,0,128,0,0,0,128,19,0,0,0,4,0,0,0,4,0,0,0,19,0,0,0,20,0,0,0,4,0,0,0,4,0,0,0,20,0,0,0,21,0,0,0,4,0,0,0,4,0,0,0,21,0,0,0,0,0,0,0,0,0,255,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,3,0,0,0,0,0,0,48,8,0,0,13,0,0,0,92,91,0,0,192,1,0,0,152,8,0,0,13,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,2,0,2,3,0,0,0,0,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,3,2,0,0,0,0,6,0,2,0,0,7,0,0,2,8,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0,0,2,4,0,0,12,0,2,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,2,3,3,3,4,3,3,3,3,3,3,5,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,192,255,0,0,0,0,255,3,0,0,0,0,0,0,0,0,255,3,0,0,255,3,0,0,0,0,0,0,0,0,0,0,0,192,1,0,192,255,0,0,0,0,0,0,255,3,255,3,0,0,0,0,0,0,0,0,0,0,255,3,0,0,0,0,255,255,255,255,231,1,0,0,0,0,0,0,128,0,0,0,254,3,0,7,0,0,255,3,0,0,255,3,0,0,0,0,0,0,0,0,255,255,255,255,255,255,31,0,2,4,0,0,0,0,0,0,0,0,62,0,0,0,0,0,0,0,0,0,255,3,0,0,0,0,0,0,192,255,0,0,0,0,0,0,0,0,255,3,0,0,0,0,0,0,192,255,0,0,255,3,0,0,0,0,255,3,0,0,0,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,127,0,0,0,192,255,255,255,255,255,255,22,0,0,0,4,0,0,0,4,0,0,0,22,0,0,0,23,0,0,0,8,0,0,0,4,0,0,0,5,0,0,0,23,0,0,0,24,0,0,0,24,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,25,0,0,0,26,0,0,0,25,0,0,0,4,0,0,0,4,0,0,0,27,0,0,0,26,0,0,0,4,0,0,0,4,0,0,0,28,0,0,0,27,0,0,0,4,0,0,0,4,0,0,0,29,0,0,0,28,0,0,0,4,0,0,0,4,0,0,0,30,0,0,0,0,0,0,0,1,0,0,0,13,67,0,0,43,0,0,0,56,67,0,0,31,0,0,0,79,1,0,0,20,0,0,0,252,112,0,0,0,0,0,0,218,59,0,0,2,0,0,0,187,59,0,0,31,0,0,0,138,3,0,0,4,0,0,0,167,66,0,0,34,0,0,0,128,3,0,0,16,0,0,0,109,66,0,0,45,0,0,0,154,66,0,0,12,0,0,0,166,66,0,0,1,0,0,0,66,60,0,0,40,0,0,0,55,0,0,0,8,0,0,0,66,60,0,0,40,0,0,0,57,0,0,0,8,0,0,0,66,60,0,0,40,0,0,0,59,0,0,0,8,0,0,0,66,60,0,0,40,0,0,0,61,0,0,0,8,0,0,0,13,66,0,0,39,0,0,0,54,0,0,0,12,0,0,0,13,66,0,0,39,0,0,0,59,0,0,0,12,0,0,0,219,65,0,0,50,0,0,0,183,60,0,0,43,0,0,0,248,60,0,0,32,0,0,0,226,60,0,0,21,0,0,0,247,60,0,0,1,0,0,0,145,63,0,0,44,0,0,0,155,0,0,0,13,0,0,0,0,0,0,0,5,0,0,0,118,63,0,0,8,0,0,0,126,63,0,0,15,0,0,0,141,63,0,0,3,0,0,0,144,63,0,0,1,0,0,0,144,63,0,0,1,0,0,0,247,60,0,0,1,0,0,0,236,62,0,0,88,0,0,0,219,62,0,0,17,0,0,0,10,0,0,0,214,62,0,0,2,0,0,0,218,59,0,0,2,0,0,0,216,62,0,0,3,0,0,0,1,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,1,0,0,0,1,0,0,0,32,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,214,62,0,0,2,0,0,0,218,59,0,0,2,0,0,0,1,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,22,62,0,0,51,0,0,0,137,62,0,0,34,0,0,0,58,3,0,0,10,0,0,0,101,62,0,0,36,0,0,0,230,3,0,0,20,0,0,0,101,62,0,0,36,0,0,0,46,4,0,0,20,0,0,0,101,62,0,0,36,0,0,0,59,4,0,0,20,0,0,0,136,65,0,0,17,0,0,0,153,65,0,0,33,0,0,0,202,2,0,0,8,0,0,0,216,63,0,0,36,0,0,0,252,63,0,0,3,0,0,0,189,63,0,0,27,0,0,0,239,0,0,0,8,0,0,0,104,65,0,0,32,0,0,0,209,0,0,0,42,0,0,0,252,112,0,0,0,0,0,0,252,112,0,0,0,0,0,0,40,65,0,0,11,0,0,0,213,61,0,0,1,0,0,0,69,65,0,0,35,0,0,0,101,0,0,0,12,0,0,0,0,0,0,0,12,0,0,0,209,66,0,0,36,0,0,0,153,65,0,0,33,0,0,0,109,2,0,0,8,0,0,0,160,67,0,0,45,0,0,0,21,0,0,0,4,0,0,0,113,67,0,0,47,0,0,0,193,0,0,0,8,0,0,0,241,67,0,0,21,0,0,0,6,68,0,0,1,0,0,0,81,68,0,0,17,0,0,0,98,68,0,0,33,0,0,0,202,2,0,0,8,0,0,0,7,68,0,0,43,0,0,0,50,68,0,0,31,0,0,0,79,1,0,0,20,0,0,0,131,68,0,0,88,0,0,0,25,0,0,0,42,0,0,0,82,71,0,0,17,0,0,0,99,71,0,0,33,0,0,0,202,2,0,0,8,0,0,0,66,71,0,0,11,0,0,0,77,71,0,0,5,0,0,0,246,70,0,0,76,0,0,0,85,0,0,0,4,0,0,0,194,70,0,0,52,0,0,0,219,68,0,0,34,0,0,0,144,2,0,0,8,0,0,0,103,70,0,0,14,0,0,0,20,70,0,0,83,0,0,0,12,0,0,0,13,0,0,0,188,69,0,0,88,0,0,0,41,0,0,0,13,0,0,0,136,69,0,0,52,0,0,0,253,68,0,0,81,0,0,0,42,0,0,0,4,0,0,0,78,69,0,0,45,0,0,0,123,69,0,0,12,0,0,0,135,69,0,0,1,0,0,0,253,68,0,0,81,0,0,0,136,0,0,0,4,0,0,0,219,68,0,0,34,0,0,0,58,3,0,0,10,0,0,0,117,70,0,0,77,0,0,0,50,0,0,0,43,0,0,0,117,70,0,0,77,0,0,0,62,0,0,0,44,0,0,0,253,68,0,0,81,0,0,0,228,0,0,0,4,0,0,0,132,71,0,0,43,0,0,0,175,71,0,0,31,0,0,0,79,1,0,0,20,0,0,0,36,72,0,0,52,0,0,0,88,72,0,0,34,0,0,0,144,2,0,0,8,0,0,0,210,71,0,0,82,0,0,0,57,0,0,0,13,0,0,0,172,72,0,0,36,0,0,0,139,72,0,0,33,0,0,0,109,2,0,0,8,0,0,0,122,72,0,0,17,0,0,0,139,72,0,0,33,0,0,0,202,2,0,0,8,0,0,0,37,73,0,0,45,0,0,0,82,73,0,0,12,0,0,0,94,73,0,0,1,0,0,0,208,72,0,0,85,0,0,0,73,0,0,0,4,0,0,0,208,72,0,0,85,0,0,0,78,0,0,0,4,0,0,0,208,72,0,0,85,0,0,0,83,0,0,0,4,0,0,0,108,73,0,0,18,0,0,0,126,73,0,0,29,0,0,0,180,4,0,0,8,0,0,0,155,73,0,0,20,0,0,0,208,72,0,0,85,0,0,0,180,0,0,0,16,0,0,0,208,72,0,0,85,0,0,0,166,0,0,0,40,0,0,0,53,74,0,0,24,0,0,0,208,72,0,0,85,0,0,0,205,0,0,0,20,0,0,0,126,73,0,0,29,0,0,0,27,6,0,0,14,0,0,0,5,74,0,0,48,0,0,0,175,73,0,0,86,0,0,0,23,0,0,0,4,0,0,0,175,73,0,0,86,0,0,0,25,0,0,0,20,0,0,0,252,112,0,0,0,0,0,0,151,74,0,0,2,0,0,0,120,74,0,0,31,0,0,0,138,3,0,0,4,0,0,0,153,74,0,0,17,0,0,0,170,74,0,0,33,0,0,0,202,2,0,0,8,0,0,0,132,75,0,0,42,0,0,0,174,75,0,0,81,0,0,0,22,0,0,0,4,0,0,0,46,75,0,0,52,0,0,0,98,75,0,0,34,0,0,0,144,2,0,0,8,0,0,0,214,74,0,0,88,0,0,0,25,0,0,0,42,0,0,0,141,76,0,0,45,0,0,0,186,76,0,0,12,0,0,0,198,76,0,0,1,0,0,0,51,76,0,0,90,0,0,0,38,0,0,0,4,0,0,0,255,75,0,0,52,0,0,0,174,75,0,0,81,0,0,0,42,0,0,0,4,0,0,0,174,75,0,0,81,0,0,0,72,0,0,0,4,0,0,0,199,76,0,0,47,0,0,0,174,75,0,0,81,0,0,0,74,0,0,0,4,0,0,0,174,75,0,0,81,0,0,0,79,0,0,0,41,0,0,0,174,75,0,0,81,0,0,0,133,0,0,0,4,0,0,0,174,75,0,0,81,0,0,0,136,0,0,0,4,0,0,0,98,75,0,0,34,0,0,0,58,3,0,0,10,0,0,0,246,76,0,0,18,0,0,0,8,77,0,0,29,0,0,0,180,4,0,0,8,0,0,0,174,75,0,0,81,0,0,0,225,0,0,0,4,0,0,0,174,75,0,0,81,0,0,0,228,0,0,0,4,0,0,0,120,77,0,0,14,0,0,0,37,77,0,0,83,0,0,0,12,0,0,0,13,0,0,0,153,74,0,0,17,0,0,0,170,74,0,0,33,0,0,0,12,2,0,0,24,0,0,0,134,77,0,0,16,0,0,0,37,77,0,0,83,0,0,0,28,0,0,0,8,0,0,0,226,77,0,0,98,0,0,0,18,0,0,0,4,0,0,0,252,112,0,0,0,0,0,0,224,77,0,0,2,0,0,0,193,77,0,0,31,0,0,0,138,3,0,0,4,0,0,0,68,78,0,0,98,0,0,0,18,0,0,0,4,0,0,0,9,79,0,0,12,0,0,0,21,79,0,0,86,0,0,0,176,0,0,0,13,0,0,0,179,78,0,0,52,0,0,0,231,78,0,0,34,0,0,0,144,2,0,0,8,0,0,0,9,79,0,0,12,0,0,0,21,79,0,0,86,0,0,0,201,0,0,0,13,0,0,0,0,0,0,0,108,1,0,0,216,2,0,0,107,1,0,0,215,2,0,0,106,1,0,0,214,2,0,0,105,1,0,0,213,2,0,0,104,1,0,0,212,2,0,0,103,1,0,0,211,2,0,0,102,1,0,0,210,2,0,0,101,1,0,0,209,2,0,0,100,1,0,0,208,2,0,0,99,1,0,0,207,2,0,0,98,1,0,0,206,2,0,0,97,1,0,0,205,2,0,0,96,1,0,0,204,2,0,0,95,1,0,0,203,2,0,0,94,1,0,0,202,2,0,0,93,1,0,0,201,2,0,0,92,1,0,0,200,2,0,0,91,1,0,0,199,2,0,0,90,1,0,0,198,2,0,0,89,1,0,0,197,2,0,0,88,1,0,0,196,2,0,0,87,1,0,0,195,2,0,0,86,1,0,0,194,2,0,0,85,1,0,0,193,2,0,0,84,1,0,0,192,2,0,0,83,1,0,0,191,2,0,0,82,1,0,0,190,2,0,0,81,1,0,0,189,2,0,0,80,1,0,0,188,2,0,0,79,1,0,0,187,2,0,0,78,1,0,0,186,2,0,0,77,1,0,0,185,2,0,0,76,1,0,0,184,2,0,0,75,1,0,0,183,2,0,0,74,1,0,0,182,2,0,0,73,1,0,0,181,2,0,0,72,1,0,0,180,2,0,0,71,1,0,0,179,2,0,0,70,1,0,0,178,2,0,0,69,1,0,0,177,2,0,0,68,1,0,0,176,2,0,0,67,1,0,0,175,2,0,0,66,1,0,0,174,2,0,0,65,1,0,0,173,2,0,0,64,1,0,0,172,2,0,0,63,1,0,0,171,2,0,0,62,1,0,0,170,2,0,0,61,1,0,0,169,2,0,0,60,1,0,0,168,2,0,0,59,1,0,0,167,2,0,0,58,1,0,0,166,2,0,0,57,1,0,0,165,2,0,0,56,1,0,0,164,2,0,0,55,1,0,0,163,2,0,0,54,1,0,0,162,2,0,0,53,1,0,0,161,2,0,0,52,1,0,0,160,2,0,0,51,1,0,0,159,2,0,0,50,1,0,0,158,2,0,0,49,1,0,0,157,2,0,0,48,1,0,0,156,2,0,0,47,1,0,0,155,2,0,0,46,1,0,0,154,2,0,0,45,1,0,0,153,2,0,0,44,1,0,0,152,2,0,0,43,1,0,0,151,2,0,0,42,1,0,0,150,2,0,0,41,1,0,0,149,2,0,0,40,1,0,0,148,2,0,0,39,1,0,0,147,2,0,0,38,1,0,0,146,2,0,0,37,1,0,0,145,2,0,0,36,1,0,0,144,2,0,0,35,1,0,0,143,2,0,0,34,1,0,0,142,2,0,0,33,1,0,0,141,2,0,0,32,1,0,0,140,2,0,0,31,1,0,0,139,2,0,0,30,1,0,0,138,2,0,0,29,1,0,0,137,2,0,0,28,1,0,0,136,2,0,0,27,1,0,0,135,2,0,0,26,1,0,0,134,2,0,0,25,1,0,0,133,2,0,0,24,1,0,0,132,2,0,0,23,1,0,0,131,2,0,0,22,1,0,0,130,2,0,0,21,1,0,0,129,2,0,0,20,1,0,0,128,2,0,0,19,1,0,0,127,2,0,0,18,1,0,0,126,2,0,0,17,1,0,0,125,2,0,0,16,1,0,0,124,2,0,0,15,1,0,0,123,2,0,0,14,1,0,0,122,2,0,0,13,1,0,0,121,2,0,0,12,1,0,0,120,2,0,0,11,1,0,0,119,2,0,0,10,1,0,0,118,2,0,0,9,1,0,0,117,2,0,0,8,1,0,0,116,2,0,0,7,1,0,0,115,2,0,0,6,1,0,0,114,2,0,0,5,1,0,0,113,2,0,0,4,1,0,0,112,2,0,0,3,1,0,0,111,2,0,0,2,1,0,0,110,2,0,0,1,1,0,0,109,2,0,0,0,1,0,0,108,2,0,0,255,0,0,0,107,2,0,0,254,0,0,0,106,2,0,0,253,0,0,0,105,2,0,0,252,0,0,0,104,2,0,0,251,0,0,0,103,2,0,0,250,0,0,0,102,2,0,0,249,0,0,0,101,2,0,0,248,0,0,0,100,2,0,0,247,0,0,0,99,2,0,0,246,0,0,0,98,2,0,0,245,0,0,0,97,2,0,0,244,0,0,0,96,2,0,0,243,0,0,0,95,2,0,0,242,0,0,0,94,2,0,0,241,0,0,0,93,2,0,0,240,0,0,0,92,2,0,0,239,0,0,0,91,2,0,0,238,0,0,0,90,2,0,0,237,0,0,0,89,2,0,0,236,0,0,0,88,2,0,0,235,0,0,0,87,2,0,0,234,0,0,0,86,2,0,0,233,0,0,0,85,2,0,0,232,0,0,0,84,2,0,0,231,0,0,0,83,2,0,0,230,0,0,0,82,2,0,0,229,0,0,0,81,2,0,0,228,0,0,0,80,2,0,0,227,0,0,0,79,2,0,0,226,0,0,0,78,2,0,0,225,0,0,0,77,2,0,0,224,0,0,0,76,2,0,0,223,0,0,0,75,2,0,0,222,0,0,0,74,2,0,0,221,0,0,0,73,2,0,0,220,0,0,0,72,2,0,0,219,0,0,0,71,2,0,0,218,0,0,0,70,2,0,0,217,0,0,0,69,2,0,0,216,0,0,0,68,2,0,0,215,0,0,0,67,2,0,0,214,0,0,0,66,2,0,0,213,0,0,0,65,2,0,0,212,0,0,0,64,2,0,0,211,0,0,0,63,2,0,0,210,0,0,0,62,2,0,0,209,0,0,0,61,2,0,0,208,0,0,0,60,2,0,0,207,0,0,0,59,2,0,0,206,0,0,0,58,2,0,0,205,0,0,0,57,2,0,0,204,0,0,0,56,2,0,0,203,0,0,0,55,2,0,0,202,0,0,0,54,2,0,0,201,0,0,0,53,2,0,0,200,0,0,0,52,2,0,0,199,0,0,0,51,2,0,0,198,0,0,0,50,2,0,0,197,0,0,0,49,2,0,0,196,0,0,0,48,2,0,0,195,0,0,0,47,2,0,0,194,0,0,0,46,2,0,0,193,0,0,0,45,2,0,0,192,0,0,0,44,2,0,0,191,0,0,0,43,2,0,0,190,0,0,0,42,2,0,0,189,0,0,0,41,2,0,0,188,0,0,0,40,2,0,0,187,0,0,0,39,2,0,0,186,0,0,0,38,2,0,0,185,0,0,0,37,2,0,0,184,0,0,0,36,2,0,0,183,0,0,0,35,2,0,0,182,0,0,0,34,2,0,0,181,0,0,0,33,2,0,0,180,0,0,0,32,2,0,0,179,0,0,0,31,2,0,0,178,0,0,0,30,2,0,0,177,0,0,0,29,2,0,0,176,0,0,0,28,2,0,0,175,0,0,0,27,2,0,0,174,0,0,0,26,2,0,0,173,0,0,0,25,2,0,0,172,0,0,0,24,2,0,0,171,0,0,0,23,2,0,0,170,0,0,0,22,2,0,0,169,0,0,0,21,2,0,0,168,0,0,0,20,2,0,0,167,0,0,0,19,2,0,0,166,0,0,0,18,2,0,0,165,0,0,0,17,2,0,0,164,0,0,0,16,2,0,0,163,0,0,0,15,2,0,0,162,0,0,0,14,2,0,0,161,0,0,0,13,2,0,0,160,0,0,0,12,2,0,0,159,0,0,0,11,2,0,0,158,0,0,0,10,2,0,0,157,0,0,0,9,2,0,0,156,0,0,0,8,2,0,0,155,0,0,0,7,2,0,0,154,0,0,0,6,2,0,0,153,0,0,0,5,2,0,0,152,0,0,0,4,2,0,0,151,0,0,0,3,2,0,0,150,0,0,0,2,2,0,0,149,0,0,0,1,2,0,0,148,0,0,0,0,2,0,0,147,0,0,0,255,1,0,0,146,0,0,0,254,1,0,0,145,0,0,0,253,1,0,0,144,0,0,0,252,1,0,0,143,0,0,0,251,1,0,0,142,0,0,0,250,1,0,0,141,0,0,0,249,1,0,0,140,0,0,0,248,1,0,0,139,0,0,0,247,1,0,0,138,0,0,0,246,1,0,0,137,0,0,0,245,1,0,0,136,0,0,0,244,1,0,0,135,0,0,0,243,1,0,0,134,0,0,0,242,1,0,0,133,0,0,0,241,1,0,0,132,0,0,0,240,1,0,0,131,0,0,0,239,1,0,0,130,0,0,0,238,1,0,0,129,0,0,0,237,1,0,0,128,0,0,0,236,1,0,0,127,0,0,0,235,1,0,0,126,0,0,0,234,1,0,0,125,0,0,0,233,1,0,0,124,0,0,0,232,1,0,0,123,0,0,0,231,1,0,0,122,0,0,0,230,1,0,0,121,0,0,0,229,1,0,0,120,0,0,0,228,1,0,0,119,0,0,0,227,1,0,0,118,0,0,0,226,1,0,0,117,0,0,0,225,1,0,0,116,0,0,0,224,1,0,0,115,0,0,0,223,1,0,0,114,0,0,0,222,1,0,0,113,0,0,0,221,1,0,0,112,0,0,0,220,1,0,0,111,0,0,0,219,1,0,0,110,0,0,0,218,1,0,0,109,0,0,0,217,1,0,0,108,0,0,0,216,1,0,0,107,0,0,0,215,1,0,0,106,0,0,0,214,1,0,0,105,0,0,0,213,1,0,0,104,0,0,0,212,1,0,0,103,0,0,0,211,1,0,0,102,0,0,0,210,1,0,0,101,0,0,0,209,1,0,0,100,0,0,0,208,1,0,0,99,0,0,0,207,1,0,0,98,0,0,0,206,1,0,0,97,0,0,0,205,1,0,0,96,0,0,0,204,1,0,0,95,0,0,0,203,1,0,0,94,0,0,0,202,1,0,0,93,0,0,0,201,1,0,0,92,0,0,0,200,1,0,0,91,0,0,0,199,1,0,0,90,0,0,0,198,1,0,0,89,0,0,0,197,1,0,0,88,0,0,0,196,1,0,0,87,0,0,0,195,1,0,0,86,0,0,0,194,1,0,0,85,0,0,0,193,1,0,0,84,0,0,0,192,1,0,0,83,0,0,0,191,1,0,0,82,0,0,0,190,1,0,0,81,0,0,0,189,1,0,0,80,0,0,0,188,1,0,0,79,0,0,0,187,1,0,0,78,0,0,0,186,1,0,0,77,0,0,0,185,1,0,0,76,0,0,0,184,1,0,0,75,0,0,0,183,1,0,0,74,0,0,0,182,1,0,0,73,0,0,0,181,1,0,0,72,0,0,0,180,1,0,0,71,0,0,0,179,1,0,0,70,0,0,0,178,1,0,0,69,0,0,0,177,1,0,0,68,0,0,0,176,1,0,0,67,0,0,0,175,1,0,0,66,0,0,0,174,1,0,0,65,0,0,0,173,1,0,0,64,0,0,0,172,1,0,0,63,0,0,0,171,1,0,0,62,0,0,0,170,1,0,0,61,0,0,0,169,1,0,0,60,0,0,0,168,1,0,0,59,0,0,0,167,1,0,0,58,0,0,0,166,1,0,0,57,0,0,0,165,1,0,0,56,0,0,0,164,1,0,0,55,0,0,0,163,1,0,0,54,0,0,0,162,1,0,0,53,0,0,0,161,1,0,0,52,0,0,0,160,1,0,0,51,0,0,0,159,1,0,0,50,0,0,0,158,1,0,0,49,0,0,0,157,1,0,0,48,0,0,0,156,1,0,0,47,0,0,0,155,1,0,0,46,0,0,0,154,1,0,0,45,0,0,0,153,1,0,0,44,0,0,0,152,1,0,0,43,0,0,0,151,1,0,0,42,0,0,0,150,1,0,0,41,0,0,0,149,1,0,0,40,0,0,0,148,1,0,0,39,0,0,0,147,1,0,0,38,0,0,0,146,1,0,0,37,0,0,0,145,1,0,0,36,0,0,0,144,1,0,0,35,0,0,0,143,1,0,0,34,0,0,0,142,1,0,0,33,0,0,0,141,1,0,0,32,0,0,0,140,1,0,0,31,0,0,0,139,1,0,0,30,0,0,0,138,1,0,0,29,0,0,0,137,1,0,0,28,0,0,0,136,1,0,0,27,0,0,0,135,1,0,0,26,0,0,0,134,1,0,0,25,0,0,0,133,1,0,0,24,0,0,0,132,1,0,0,23,0,0,0,131,1,0,0,22,0,0,0,130,1,0,0,21,0,0,0,129,1,0,0,20,0,0,0,128,1,0,0,19,0,0,0,127,1,0,0,18,0,0,0,126,1,0,0,17,0,0,0,125,1,0,0,16,0,0,0,124,1,0,0,15,0,0,0,123,1,0,0,14,0,0,0,122,1,0,0,13,0,0,0,121,1,0,0,12,0,0,0,120,1,0,0,11,0,0,0,119,1,0,0,10,0,0,0,118,1,0,0,9,0,0,0,117,1,0,0,8,0,0,0,116,1,0,0,7,0,0,0,115,1,0,0,6,0,0,0,114,1,0,0,5,0,0,0,113,1,0,0,4,0,0,0,112,1,0,0,3,0,0,0,111,1,0,0,2,0,0,0,110,1,0,0,1,0,0,0,109,1,0,0,0,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE);allocate([255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,27,0,0,0,193,79,0,0,45,0,0,0,238,79,0,0,12,0,0,0,250,79,0,0,1,0,0,0,107,79,0,0,86,0,0,0,11,0,0,0,4,0,0,0,243,0,0,0,108,80,0,0,45,0,0,0,153,80,0,0,12,0,0,0,165,80,0,0,1,0,0,0,251,79,0,0,87,0,0,0,25,0,0,0,4,0,0,0,48,0,0,0,251,79,0,0,87,0,0,0,26,0,0,0,4,0,0,0,251,79,0,0,87,0,0,0,173,0,0,0,31,0,0,0,100,137,206,165,105,118,0,159,79,80,132,20,217,0,222,58,110,72,36,12,87,157,151,80,2,199,164,121,54,174,187,72,139,128,246,169,5,168,6,170,223,171,127,168,239,235,105,94,82,80,0,0,26,0,0,0,251,79,0,0,87,0,0,0,213,0,0,0,4,0,0,0,251,79,0,0,87,0,0,0,57,0,0,0,30,0,0,0,251,79,0,0,87,0,0,0,64,0,0,0,21,0,0,0,251,79,0,0,87,0,0,0,101,0,0,0,4,0,0,0,251,79,0,0,87,0,0,0,102,0,0,0,4,0,0,0,251,79,0,0,87,0,0,0,149,0,0,0,9,0,0,0,34,81,0,0,82,0,0,0,46,0,0,0,8,0,0,0,166,80,0,0,40,0,0,0,206,80,0,0,84,0,0,0,127,0,0,0,4,0,0,0,34,81,0,0,82,0,0,0,56,0,0,0,8,0,0,0,116,81,0,0,34,0,0,0,64,3,0,0,14,0,0,0,206,80,0,0,84,0,0,0,13,1,0,0,9,0,0,0,150,81,0,0,88,0,0,0,12,0,0,0,29,0,0,0,150,81,0,0,88,0,0,0,14,0,0,0,13,0,0,0,67,82,0,0,57,0,0,0,238,81,0,0,85,0,0,0,29,0,0,0,24,0,0,0,124,82,0,0,48,0,0,0,238,81,0,0,85,0,0,0,29,0,0,0,24,0,0,0,67,82,0,0,57,0,0,0,238,81,0,0,85,0,0,0,31,0,0,0,17,0,0,0,67,82,0,0,57,0,0,0,238,81,0,0,85,0,0,0,41,0,0,0,25,0,0,0,67,82,0,0,57,0,0,0,238,81,0,0,85,0,0,0,46,0,0,0,37,0,0,0,238,81,0,0,85,0,0,0,46,0,0,0,17,0,0,0,67,82,0,0,57,0,0,0,238,81,0,0,85,0,0,0,49,0,0,0,40,0,0,0,238,81,0,0,85,0,0,0,51,0,0,0,17,0,0,0,238,81,0,0,85,0,0,0,54,0,0,0,25,0,0,0,238,81,0,0,85,0,0,0,64,0,0,0,13,0,0,0,172,82,0,0,17,0,0,0,189,82,0,0,33,0,0,0,202,2,0,0,8,0,0,0,1,0,0,0,58,83,0,0,45,0,0,0,103,83,0,0,12,0,0,0,115,83,0,0,1,0,0,0,222,82,0,0,92,0,0,0,73,0,0,0,4,0,0,0,2,0,0,0,222,82,0,0,92,0,0,0,78,0,0,0,4,0,0,0,3,0,0,0,222,82,0,0,92,0,0,0,83,0,0,0,4,0,0,0,222,82,0,0,92,0,0,0,98,0,0,0,4,0,0,0,57,0,0,0,65,0,0,0,66,0,0,0,67,0,0,0,68,0,0,0,69,0,0,0,70,0,0,0,71,0,0,0,72,0,0,0,73,0,0,0,74,0,0,0,75,0,0,0,76,0,0,0,77,0,0,0,78,0,0,0,79,0,0,0,80,0,0,0,81,0,0,0,82,0,0,0,83,0,0,0,84,0,0,0,85,0,0,0,86,0,0,0,87,0,0,0,88,0,0,0,89,0,0,0,90,0,0,0,129,83,0,0,20,0,0,0,222,82,0,0,92,0,0,0,180,0,0,0,16,0,0,0,222,82,0,0,92,0,0,0,166,0,0,0,40,0,0,0,58,84,0,0,47,0,0,0,230,83,0,0,84,0,0,0,10,0,0,0,4,0,0,0,230,83,0,0,84,0,0,0,14,0,0,0,33,0,0,0,230,83,0,0,84,0,0,0,28,0,0,0,6,0,0,0,40,89,0,0,95,0,0,0,66,0,0,0,22,0,0,0,172,89,0,0,40,0,0,0,135,89,0,0,37,0,0,0,49,0,0,0,4,0,0,0,239,113,0,0,0,0,0,0,203,90,0,0,17,0,0,0,220,90,0,0,33,0,0,0,202,2,0,0,8,0,0,0,58,91,0,0,34,0,0,0,58,3,0,0,10,0,0,0,20,91,0,0,38,0,0,0,86,0,0,0,28,0,0,0,20,91,0,0,38,0,0,0,90,0,0,0,28,0,0,0,66,93,0,0,45,0,0,0,111,93,0,0,12,0,0,0,123,93,0,0,1,0,0,0,30,93,0,0,36,0,0,0,136,2,0,0,8,0,0,0,28,93,0,0,2,0,0,0,1,0,0,0,0,0,0,0,32,0,0,0,8,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,132,94,0,0,34,0,0,0,58,3,0,0,10,0,0,0,166,94,0,0,32,0,0,0,198,94,0,0,18,0,0,0,160,95,0,0,6,0,0,0,166,95,0,0,34,0,0,0,132,94,0,0,34,0,0,0,234,2,0,0,4,0,0,0,201,95,0,0,22,0,0,0,223,95,0,0,13,0,0,0,132,94,0,0,34,0,0,0,240,2,0,0,4,0,0,0,17,96,0,0,11,0,0,0,212,101,0,0,22,0,0,0,200,95,0,0,1,0,0,0,241,95,0,0,32,0,0,0,167,8,0,0,8,0,0,0,178,101,0,0,14,0,0,0,192,101,0,0,4,0,0,0,196,101,0,0,16,0,0,0,200,95,0,0,1,0,0,0,241,95,0,0,32,0,0,0,171,8,0,0,4,0,0,0,104,101,0,0,43,0,0,0,147,101,0,0,31,0,0,0,79,1,0,0,20,0,0,0,17,96,0,0,11,0,0,0,28,96,0,0,38,0,0,0,66,96,0,0,8,0,0,0,74,96,0,0,6,0,0,0,200,95,0,0,1,0,0,0,241,95,0,0,32,0,0,0,184,8,0,0,4,0,0,0,239,113,0,0,0,0,0,0,112,96,0,0,2,0,0,0,80,96,0,0,32,0,0,0,247,3,0,0,17,0,0,0,80,96,0,0,32,0,0,0,235,3,0,0,40,0,0,0,239,113,0,0,0,0,0,0,234,101,0,0,1,0,0,0,1,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,1,0,0,0,1,0,0,0,32,0,0,0,4,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,239,113,0,0,0,0,0,0,239,113,0,0,0,0,0,0,239,113,0,0,0,0,0,0,239,113,0,0,0,0,0,0,147,101,0,0,31,0,0,0,71,3,0,0,4,0,0,0,239,113,0,0,0,0,0,0,234,101,0,0,1,0,0,0,12,102,0,0,2,0,0,0,1,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,1,0,0,0,1,0,0,0,32,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,1,0,0,0,2,0,0,0,32,0,0,0,4,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,239,113,0,0,0,0,0,0,236,101,0,0,1,0,0,0,12,102,0,0,2,0,0,0,239,113,0,0,0,0,0,0,239,113,0,0,0,0,0,0,20,102,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,8,0,0,0,247,113,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,59,0,0,65,99,99,101,115,115,69,114,114,111,114,97,108,114,101,97,100,121,32,98,111,114,114,111,119,101,100,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,114,101,115,117,108,116,46,114,115,58,32,116,104,114,101,97,100,32,110,97,109,101,32,109,97,121,32,110,111,116,32,99,111,110,116,97,105,110,32,105,110,116,101,114,105,111,114,32,110,117,108,108,32,98,121,116,101,115,102,97,105,108,101,100,32,116,111,32,103,101,110,101,114,97,116,101,32,117,110,105,113,117,101,32,116,104,114,101,97,100,32,73,68,58,32,98,105,116,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,47,115,121,115,47,117,110,105,120,47,99,111,110,100,118,97,114,46,114,115,114,119,108,111,99,107,32,109,97,120,105,109,117,109,32,114,101,97,100,101,114,32,99,111,117,110,116,32,101,120,99,101,101,100,101,100,114,119,108,111,99,107,32,114,101,97,100,32,108,111,99,107,32,119,111,117,108,100,32,114,101,115,117,108,116,32,105,110,32,100,101,97,100,108,111,99,107,116,104,114,101,97,100,32,112,97,110,105,99,107,101,100,32,119,104,105,108,101,32,112,97,110,105,99,107,105,110,103,46,32,97,98,111,114,116,105,110,103,46,10,102,97,116,97,108,32,114,117,110,116,105,109,101,32,101,114,114,111,114,58,32,10,102,97,105,108,101,100,32,116,111,32,105,110,105,116,105,97,116,101,32,112,97,110,105,99,44,32,101,114,114,111,114,32,82,85,83,84,95,66,65,67,75,84,82,65,67,69,105,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,101,110,116,101,114,101,100,32,117,110,114,101,97,99,104,97,98,108,101,32,99,111,100,101,48,102,117,108,108,66,111,120,60,65,110,121,62,60,117,110,110,97,109,101,100,62,102,111,114,109,97,116,116,101,114,32,101,114,114,111,114,83,116,114,105,110,103,69,114,114,111,114,102,97,105,108,101,100,32,116,111,32,119,114,105,116,101,32,119,104,111,108,101,32,98,117,102,102,101,114,1,60,117,110,107,110,111,119,110,62,69,95,90,78,90,78,49,55,104,58,58,95,36,46,36,36,83,80,36,64,36,66,80,36,42,36,82,70,36,38,36,76,84,36,60,36,71,84,36,62,36,76,80,36,40,36,82,80,36,41,36,67,36,44,36,117,55,101,36,126,36,117,50,48,36,32,36,117,50,55,36,39,36,117,53,98,36,91,36,117,53,100,36,93,36,117,55,98,36,123,36,117,55,100,36,125,36,117,51,98,36,59,36,117,50,98,36,43,36,117,50,50,36,34,110,111,116,101,58,32,82,117,110,32,119,105,116,104,32,96,82,85,83,84,95,66,65,67,75,84,82,65,67,69,61,49,96,32,102,111,114,32,97,32,98,97,99,107,116,114,97,99,101,46,10,95,95,114,117,115,116,95,98,101,103,105,110,95,115,104,111,114,116,95,98,97,99,107,116,114,97,99,101,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,116,114,47,112,97,116,116,101,114,110,46,114,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,108,105,99,101,47,109,111,100,46,114,115,99,97,108,108,101,100,32,96,82,101,115,117,108,116,58,58,117,110,119,114,97,112,40,41,96,32,111,110,32,97,110,32,96,69,114,114,96,32,118,97,108,117,101,32,32,32,45,32,115,116,97,99,107,32,98,97,99,107,116,114,97,99,101,58,10,110,111,116,101,58,32,83,111,109,101,32,100,101,116,97,105,108,115,32,97,114,101,32,111,109,105,116,116,101,100,44,32,114,117,110,32,119,105,116,104,32,96,82,85,83,84,95,66,65,67,75,84,82,65,67,69,61,102,117,108,108,96,32,102,111,114,32,97,32,118,101,114,98,111,115,101,32,98,97,99,107,116,114,97,99,101,46,10,85,110,119,105,110,100,69,114,114,111,114,117,110,101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,119,104,105,108,101,32,117,110,119,105,110,100,105,110,103,116,104,114,101,97,100,32,39,39,32,112,97,110,105,99,107,101,100,32,97,116,32,39,39,44,32,58,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,47,115,121,115,95,99,111,109,109,111,110,47,98,97,99,107,116,114,97,99,101,46,114,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,47,101,110,118,46,114,115,102,97,105,108,101,100,32,116,111,32,103,101,116,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,96,96,58,32,101,110,116,105,116,121,32,110,111,116,32,102,111,117,110,100,99,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,99,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,99,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,110,111,116,32,99,111,110,110,101,99,116,101,100,97,100,100,114,101,115,115,32,105,110,32,117,115,101,97,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,98,114,111,107,101,110,32,112,105,112,101,101,110,116,105,116,121,32,97,108,114,101,97,100,121,32,101,120,105,115,116,115,111,112,101,114,97,116,105,111,110,32,119,111,117,108,100,32,98,108,111,99,107,105,110,118,97,108,105,100,32,105,110,112,117,116,32,112,97,114,97,109,101,116,101,114,105,110,118,97,108,105,100,32,100,97,116,97,116,105,109,101,100,32,111,117,116,119,114,105,116,101,32,122,101,114,111,111,112,101,114,97,116,105,111,110,32,105,110,116,101,114,114,117,112,116,101,100,111,116,104,101,114,32,111,115,32,101,114,114,111,114,117,110,101,120,112,101,99,116,101,100,32,101,110,100,32,111,102,32,102,105,108,101,112,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,32,40,111,115,32,101,114,114,111,114,32,115,116,114,101,114,114,111,114,95,114,32,102,97,105,108,117,114,101,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,47,115,121,115,47,117,110,105,120,47,111,115,46,114,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,47,105,111,47,101,114,114,111,114,46,114,115,99,97,112,97,99,105,116,121,32,111,118,101,114,102,108,111,119,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,97,108,108,111,99,47,114,97,119,95,118,101,99,46,114,115,100,97,116,97,32,112,114,111,118,105,100,101,100,32,99,111,110,116,97,105,110,115,32,97,32,110,117,108,32,98,121,116,101,116,104,114,101,97,100,32,112,97,110,105,99,107,101,100,32,119,104,105,108,101,32,112,114,111,99,101,115,115,105,110,103,32,112,97,110,105,99,46,32,97,98,111,114,116,105,110,103,46,10,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,47,115,121,115,47,117,110,105,120,47,114,119,108,111,99,107,46,114,115,99,97,110,110,111,116,32,97,99,99,101,115,115,32,97,32,84,76,83,32,118,97,108,117,101,32,100,117,114,105,110,103,32,111,114,32,97,102,116,101,114,32,105,116,32,105,115,32,100,101,115,116,114,111,121,101,100,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,96,40,108,101,102,116,32,61,61,32,114,105,103,104,116,41,96,10,32,32,108,101,102,116,58,32,96,96,44,10,32,114,105,103,104,116,58,32,96,96,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,47,116,104,114,101,97,100,47,109,111,100,46,114,115,78,117,108,69,114,114,111,114,84,114,105,101,100,32,116,111,32,115,104,114,105,110,107,32,116,111,32,97,32,108,97,114,103,101,114,32,99,97,112,97,99,105,116,121,97,108,114,101,97,100,121,32,109,117,116,97,98,108,121,32,98,111,114,114,111,119,101,100,99,97,108,108,101,100,32,96,79,112,116,105,111,110,58,58,117,110,119,114,97,112,40,41,96,32,111,110,32,97,32,96,78,111,110,101,96,32,118,97,108,117,101,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,111,112,116,105,111,110,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,107,101,121,32,33,61,32,48,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,47,115,121,115,95,99,111,109,109,111,110,47,116,104,114,101,97,100,95,108,111,99,97,108,46,114,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,47,115,121,115,47,117,110,105,120,47,116,104,114,101,97,100,95,108,111,99,97,108,46,114,115,99,97,110,110,111,116,32,99,104,97,110,103,101,32,97,108,105,103,110,109,101,110,116,32,111,110,32,96,114,101,97,108,108,111,99,96,102,97,116,97,108,32,114,117,110,116,105,109,101,32,101,114,114,111,114,58,32,10,99,97,108,108,101,100,32,96,79,112,116,105,111,110,58,58,117,110,119,114,97,112,40,41,96,32,111,110,32,97,32,96,78,111,110,101,96,32,118,97,108,117,101,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,111,112,116,105,111,110,46,114,115,99,97,112,97,99,105,116,121,32,111,118,101,114,102,108,111,119,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,97,108,108,111,99,47,114,97,119,95,118,101,99,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,99,117,114,108,45,99,112,117,47,115,114,99,47,115,105,109,112,108,101,46,114,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,108,105,99,101,47,109,111,100,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,115,105,103,110,47,115,114,99,47,105,115,115,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,96,40,108,101,102,116,32,61,61,32,114,105,103,104,116,41,96,10,32,32,108,101,102,116,58,32,96,96,44,10,32,114,105,103,104,116,58,32,96,96,83,101,99,117,114,105,116,121,32,115,112,97,99,101,32,115,105,122,101,32,109,117,115,116,32,98,101,32,97,32,109,117,108,116,105,112,108,101,32,111,102,32,75,69,89,95,76,69,78,71,84,72,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,99,117,114,108,45,99,112,117,47,115,114,99,47,115,101,97,114,99,104,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,116,114,121,116,101,115,47,115,114,99,47,98,99,116,46,114,115,73,110,118,97,108,105,100,32,84,114,105,116,58,32,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,109,97,109,45,50,52,102,101,50,53,99,51,48,53,97,102,48,99,52,52,47,52,49,51,102,48,52,55,47,109,97,109,47,115,114,99,47,109,97,115,107,46,114,115,100,101,115,116,105,110,97,116,105,111,110,32,97,110,100,32,115,111,117,114,99,101,32,115,108,105,99,101,115,32,104,97,118,101,32,100,105,102,102,101,114,101,110,116,32,108,101,110,103,116,104,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,109,97,109,45,50,52,102,101,50,53,99,51,48,53,97,102,48,99,52,52,47,52,49,51,102,48,52,55,47,109,97,109,47,115,114,99,47,109,97,109,46,114,115,115,104,111,117,108,100,32,98,101,58,32,44,32,105,115,32,99,97,112,97,99,105,116,121,32,111,118,101,114,102,108,111,119,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,97,108,108,111,99,47,114,97,119,95,118,101,99,46,114,115,99,97,108,108,101,100,32,96,79,112,116,105,111,110,58,58,117,110,119,114,97,112,40,41,96,32,111,110,32,97,32,96,78,111,110,101,96,32,118,97,108,117,101,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,111,112,116,105,111,110,46,114,115,1,0,0,255,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,109,97,109,45,50,52,102,101,50,53,99,51,48,53,97,102,48,99,52,52,47,52,49,51,102,48,52,55,47,112,97,115,99,97,108,47,115,114,99,47,112,97,115,99,97,108,46,114,115,100,101,115,116,105,110,97,116,105,111,110,32,97,110,100,32,115,111,117,114,99,101,32,115,108,105,99,101,115,32,104,97,118,101,32,100,105,102,102,101,114,101,110,116,32,108,101,110,103,116,104,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,108,105,99,101,47,109,111,100,46,114,115,99,97,112,97,99,105,116,121,32,111,118,101,114,102,108,111,119,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,97,108,108,111,99,47,114,97,119,95,118,101,99,46,114,115,84,114,105,101,100,32,116,111,32,115,104,114,105,110,107,32,116,111,32,97,32,108,97,114,103,101,114,32,99,97,112,97,99,105,116,121,47,85,115,101,114,115,47,108,101,119,105,47,68,111,99,117,109,101,110,116,115,47,105,111,116,97,47,108,105,98,114,97,114,105,101,115,47,109,97,109,46,99,108,105,101,110,116,46,106,115,47,105,111,116,97,45,98,105,110,100,105,110,103,115,47,115,104,97,114,101,100,47,115,114,99,47,99,116,114,105,116,115,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,96,40,108,101,102,116,32,61,61,32,114,105,103,104,116,41,96,10,32,32,108,101,102,116,58,32,96,96,44,10,32,114,105,103,104,116,58,32,96,96,66,89,84,69,84,82,73,84,84,82,89,84,69,96,97,116,96,32,111,117,116,32,111,102,32,98,111,117,110,100,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,97,108,108,111,99,47,118,101,99,46,114,115,73,110,118,97,108,105,100,32,116,114,105,116,32,108,101,110,103,116,104,46,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,116,114,121,116,101,115,47,115,114,99,47,115,116,114,105,110,103,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,116,114,105,116,115,46,108,101,110,40,41,32,60,61,32,84,82,73,84,83,95,80,69,82,95,84,82,89,84,69,73,110,118,97,108,105,100,32,99,104,97,114,97,99,116,101,114,32,102,111,117,110,100,46,99,97,108,108,101,100,32,96,82,101,115,117,108,116,58,58,117,110,119,114,97,112,40,41,96,32,111,110,32,97,110,32,96,69,114,114,96,32,118,97,108,117,101,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,114,101,115,117,108,116,46,114,115,58,32,99,97,112,97,99,105,116,121,32,111,118,101,114,102,108,111,119,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,97,108,108,111,99,47,114,97,119,95,118,101,99,46,114,115,1,0,255,2,1,255,0,2,255,1,0,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,99,117,114,108,45,99,112,117,47,115,114,99,47,115,105,109,112,108,101,46,114,115,100,101,115,116,105,110,97,116,105,111,110,32,97,110,100,32,115,111,117,114,99,101,32,115,108,105,99,101,115,32,104,97,118,101,32,100,105,102,102,101,114,101,110,116,32,108,101,110,103,116,104,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,108,105,99,101,47,109,111,100,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,111,117,116,46,108,101,110,40,41,32,62,61,32,72,65,83,72,95,76,69,78,71,84,72,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,115,105,103,110,47,115,114,99,47,105,115,115,46,114,115,83,101,99,117,114,105,116,121,32,115,112,97,99,101,32,115,105,122,101,32,109,117,115,116,32,98,101,32,97,32,109,117,108,116,105,112,108,101,32,111,102,32,75,69,89,95,76,69,78,71,84,72,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,98,105,110,100,105,110,103,115,47,115,114,99,47,115,105,103,110,47,105,115,115,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,96,40,108,101,102,116,32,61,61,32,114,105,103,104,116,41,96,10,32,32,108,101,102,116,58,32,96,96,44,10,32,114,105,103,104,116,58,32,96,96,68,105,103,101,115,116,32,115,112,97,99,101,32,115,105,122,101,32,109,117,115,116,32,98,101,32,113,117,97,108,32,116,111,32,68,73,71,69,83,84,95,76,69,78,71,84,72,96,97,116,96,32,111,117,116,32,111,102,32,98,111,117,110,100,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,97,108,108,111,99,47,118,101,99,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,116,114,121,116,101,115,47,115,114,99,47,98,99,116,46,114,115,73,110,118,97,108,105,100,32,84,114,105,116,58,32,73,110,118,97,108,105,100,32,66,67,84,114,105,116,58,32,99,97,108,108,101,100,32,96,82,101,115,117,108,116,58,58,117,110,119,114,97,112,40,41,96,32,111,110,32,97,110,32,96,69,114,114,96,32,118,97,108,117,101,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,114,101,115,117,108,116,46,114,115,58,32,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,98,105,110,100,105,110,103,115,47,115,114,99,47,109,111,100,101,108,115,47,118,49,47,98,117,110,100,108,101,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,98,105,110,100,105,110,103,115,47,115,114,99,47,109,111,100,101,108,115,47,118,50,47,98,117,110,100,108,101,46,114,115,73,110,118,97,108,105,100,76,101,110,103,116,104,100,101,115,116,105,110,97,116,105,111,110,32,97,110,100,32,115,111,117,114,99,101,32,115,108,105,99,101,115,32,104,97,118,101,32,100,105,102,102,101,114,101,110,116,32,108,101,110,103,116,104,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,108,105,99,101,47,109,111,100,46,114,115,69,114,114,111,114,44,32,100,117,100,101,33,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,109,101,114,107,108,101,47,115,114,99,47,115,105,109,112,108,101,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,115,105,103,110,47,115,114,99,47,99,104,101,99,107,115,117,109,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,96,40,108,101,102,116,32,61,61,32,114,105,103,104,116,41,96,10,32,32,108,101,102,116,58,32,96,96,44,10,32,114,105,103,104,116,58,32,96,96,47,85,115,101,114,115,47,108,101,119,105,47,46],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE+10240);allocate([99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,107,101,114,108,47,115,114,99,47,99,111,110,118,101,114,116,101,114,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,110,111,98,111,114,114,111,119,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,96,40,108,101,102,116,32,61,61,32,114,105,103,104,116,41,96,10,32,32,108,101,102,116,58,32,96,96,44,10,32,114,105,103,104,116,58,32,96,96,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,100,115,116,46,108,101,110,40,41,32,60,61,32,115,114,99,46,108,101,110,40,41,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,107,101,114,108,47,115,114,99,47,107,101,99,99,97,107,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,107,101,114,108,47,115,114,99,47,107,101,114,108,46,114,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,108,105,99,101,47,109,111,100,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,116,109,97,116,104,47,115,114,99,47,105,110,99,114,101,109,101,110,116,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,116,109,97,116,104,47,115,114,99,47,111,102,102,115,101,116,46,114,115,97,116,116,101,109,112,116,32,116,111,32,99,97,108,99,117,108,97,116,101,32,116,104,101,32,114,101,109,97,105,110,100,101,114,32,119,105,116,104,32,97,32,100,105,118,105,115,111,114,32,111,102,32,122,101,114,111,97,116,116,101,109,112,116,32,116,111,32,99,97,108,99,117,108,97,116,101,32,116,104,101,32,114,101,109,97,105,110,100,101,114,32,119,105,116,104,32,111,118,101,114,102,108,111,119,99,97,112,97,99,105,116,121,32,111,118,101,114,102,108,111,119,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,97,108,108,111,99,47,114,97,119,95,118,101,99,46,114,115,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,45,98,105,110,100,105,110,103,115,45,52,48,50,102,101,98,56,102,99,102,53,97,100,53,50,100,47,52,56,51,51,57,98,97,47,115,104,97,114,101,100,47,115,114,99,47,99,116,114,105,116,115,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,96,40,108,101,102,116,32,61,61,32,114,105,103,104,116,41,96,10,32,32,108,101,102,116,58,32,96,96,44,10,32,114,105,103,104,116,58,32,96,96,66,89,84,69,84,82,73,84,84,82,89,84,69,73,110,118,97,108,105,100,32,116,114,105,116,32,108,101,110,103,116,104,46,0,0,0,1,0,0,255,1,0,0,1,0,1,1,0,255,255,1,0,255,1,1,255,1,255,0,1,0,0,1,1,0,1,255,1,1,0,1,1,1,1,1,255,255,255,0,255,255,1,255,255,255,0,255,0,0,255,1,0,255,255,1,255,0,1,255,1,1,255,255,255,0,0,255,0,1,255,0,255,0,0,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,116,114,121,116,101,115,47,115,114,99,47,98,121,116,101,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,116,114,105,116,115,46,108,101,110,40,41,32,60,61,32,84,82,73,84,83,95,80,69,82,95,66,89,84,69,0,0,0,0,0,1,0,0,0,0,255,1,0,0,0,0,1,0,0,0,1,1,0,0,0,255,255,1,0,0,0,255,1,0,0,1,255,1,0,0,255,0,1,0,0,0,0,1,0,0,1,0,1,0,0,255,1,1,0,0,0,1,1,0,0,1,1,1,0,0,255,255,255,1,0,0,255,255,1,0,1,255,255,1,0,255,0,255,1,0,0,0,255,1,0,1,0,255,1,0,255,1,255,1,0,0,1,255,1,0,1,1,255,1,0,255,255,0,1,0,0,255,0,1,0,1,255,0,1,0,255,0,0,1,0,0,0,0,1,0,1,0,0,1,0,255,1,0,1,0,0,1,0,1,0,1,1,0,1,0,255,255,1,1,0,0,255,1,1,0,1,255,1,1,0,255,0,1,1,0,0,0,1,1,0,1,0,1,1,0,255,1,1,1,0,0,1,1,1,0,1,1,1,1,0,255,255,255,255,1,0,255,255,255,1,1,255,255,255,1,255,0,255,255,1,0,0,255,255,1,1,0,255,255,1,255,1,255,255,1,0,1,255,255,1,1,1,255,255,1,255,255,0,255,1,0,255,0,255,1,1,255,0,255,1,255,0,0,255,1,0,0,0,255,1,1,0,0,255,1,255,1,0,255,1,0,1,0,255,1,1,1,0,255,1,255,255,1,255,1,0,255,1,255,1,1,255,1,255,1,255,0,1,255,1,0,0,1,255,1,1,0,1,255,1,255,1,1,255,1,0,1,1,255,1,1,1,1,255,1,255,255,255,0,1,0,255,255,0,1,1,255,255,0,1,255,0,255,0,1,0,0,255,0,1,1,0,255,0,1,255,1,255,0,1,0,1,255,0,1,1,1,255,0,1,255,255,0,0,1,0,255,0,0,1,1,255,0,0,1,255,0,0,0,1,0,0,0,0,1,1,0,0,0,1,255,1,0,0,1,0,1,0,0,1,1,1,0,0,1,255,255,1,0,1,0,255,1,0,1,1,255,1,0,1,255,0,1,0,1,0,0,1,0,1,1,0,1,0,1,255,1,1,0,1,0,1,1,0,1,1,1,1,0,1,255,255,255,1,1,0,255,255,1,1,1,255,255,1,1,255,0,255,1,1,0,0,255,1,1,1,0,255,1,1,255,1,255,1,1,0,1,255,1,1,1,1,255,1,1,255,255,0,1,1,0,255,0,1,1,1,255,0,1,1,255,0,0,1,1,0,0,0,1,1,1,0,0,1,1,255,1,0,1,1,0,1,0,1,1,1,1,0,1,1,255,255,1,1,1,0,255,1,1,1,1,255,1,1,1,255,0,1,1,1,0,0,1,1,1,1,0,1,1,1,255,1,1,1,1,0,1,1,1,1,1,1,1,1,1,255,255,255,255,255,0,255,255,255,255,1,255,255,255,255,255,0,255,255,255,0,0,255,255,255,1,0,255,255,255,255,1,255,255,255,0,1,255,255,255,1,1,255,255,255,255,255,0,255,255,0,255,0,255,255,1,255,0,255,255,255,0,0,255,255,0,0,0,255,255,1,0,0,255,255,255,1,0,255,255,0,1,0,255,255,1,1,0,255,255,255,255,1,255,255,0,255,1,255,255,1,255,1,255,255,255,0,1,255,255,0,0,1,255,255,1,0,1,255,255,255,1,1,255,255,0,1,1,255,255,1,1,1,255,255,255,255,255,0,255,0,255,255,0,255,1,255,255,0,255,255,0,255,0,255,0,0,255,0,255,1,0,255,0,255,255,1,255,0,255,0,1,255,0,255,1,1,255,0,255,255,255,0,0,255,0,255,0,0,255,1,255,0,0,255,255,0,0,0,255,0,0,0,0,255,1,0,0,0,255,255,1,0,0,255,0,1,0,0,255,1,1,0,0,255,255,255,1,0,255,0,255,1,0,255,1,255,1,0,255,255,0,1,0,255,0,0,1,0,255,1,0,1,0,255,255,1,1,0,255,0,1,1,0,255,1,1,1,0,255,255,255,255,1,255,0,255,255,1,255,1,255,255,1,255,255,0,255,1,255,0,0,255,1,255,1,0,255,1,255,255,1,255,1,255,0,1,255,1,255,1,1,255,1,255,255,255,0,1,255,0,255,0,1,255,1,255,0,1,255,255,0,0,1,255,0,0,0,1,255,1,0,0,1,255,255,1,0,1,255,0,1,0,1,255,1,1,0,1,255,255,255,1,1,255,0,255,1,1,255,1,255,1,1,255,255,0,1,1,255,0,0,1,1,255,1,0,1,1,255,255,1,1,1,255,0,1,1,1,255,1,1,1,1,255,255,255,255,255,0,0,255,255,255,0,1,255,255,255,0,255,0,255,255,0,0,0,255,255,0,1,0,255,255,0,255,1,255,255,0,0,1,255,255,0,1,1,255,255,0,255,255,0,255,0,0,255,0,255,0,1,255,0,255,0,255,0,0,255,0,0,0,0,255,0,1,0,0,255,0,255,1,0,255,0,0,1,0,255,0,1,1,0,255,0,255,255,1,255,0,0,255,1,255,0,1,255,1,255,0,255,0,1,255,0,0,0,1,255,0,1,0,1,255,0,255,1,1,255,0,0,1,1,255,0,1,1,1,255,0,255,255,255,0,0,0,255,255,0,0,1,255,255,0,0,255,0,255,0,0,0,0,255,0,0,1,0,255,0,0,255,1,255,0,0,0,1,255,0,0,1,1,255,0,0,255,255,0,0,0,0,255,0,0,0,1,255,0,0,0,255,0,0,0,0,47,85,115,101,114,115,47,108,101,119,105,47,46,99,97,114,103,111,47,103,105,116,47,99,104,101,99,107,111,117,116,115,47,105,111,116,97,46,114,115,45,49,55,57,50,102,54,55,57,98,101,53,49,56,51,55,99,47,53,54,50,48,53,101,54,47,116,114,121,116,101,115,47,115,114,99,47,109,117,108,116,105,112,108,101,120,47,100,101,109,117,120,46,114,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,112,97,110,105,99,95,117,110,119,105,110,100,47,101,109,99,99,46,114,115,105,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,101,110,116,101,114,101,100,32,117,110,114,101,97,99,104,97,98,108,101,32,99,111,100,101,95,85,82,67,95,78,79,95,82,69,65,83,79,78,95,85,82,67,95,70,79,82,69,73,71,78,95,69,88,67,69,80,84,73,79,78,95,67,65,85,71,72,84,95,85,82,67,95,70,65,84,65,76,95,80,72,65,83,69,50,95,69,82,82,79,82,95,85,82,67,95,70,65,84,65,76,95,80,72,65,83,69,49,95,69,82,82,79,82,95,85,82,67,95,78,79,82,77,65,76,95,83,84,79,80,95,85,82,67,95,69,78,68,95,79,70,95,83,84,65,67,75,95,85,82,67,95,72,65,78,68,76,69,82,95,70,79,85,78,68,95,85,82,67,95,73,78,83,84,65,76,76,95,67,79,78,84,69,88,84,95,85,82,67,95,67,79,78,84,73,78,85,69,95,85,78,87,73,78,68,95,85,82,67,95,70,65,73,76,85,82,69,97,108,108,111,99,97,116,111,114,32,109,101,109,111,114,121,32,101,120,104,97,117,115,116,101,100,117,110,115,117,112,112,111,114,116,101,100,32,97,108,108,111,99,97,116,111,114,32,114,101,113,117,101,115,116,99,97,112,97,99,105,116,121,32,111,118,101,114,102,108,111,119,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,97,108,108,111,99,47,114,97,119,95,118,101,99,46,114,115,70,114,111,109,85,116,102,56,69,114,114,111,114,98,121,116,101,115,101,114,114,111,114,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,115,116,100,95,117,110,105,99,111,100,101,47,116,97,98,108,101,115,46,114,115,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,108,105,99,101,47,109,111,100,46,114,115,0,0,0,0,0,1,0,0,0,0,0,0,0,2,0,3,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,6,7,0,0,8,0,0,0,6,0,0,0,0,0,8,0,8,0,0,0,0,0,8,0,9,6,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,92,120,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,105,116,101,114,47,116,114,97,105,116,115,46,114,115,97,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,96,40,108,101,102,116,32,61,61,32,114,105,103,104,116,41,96,10,32,32,108,101,102,116,58,32,96,96,44,10,32,114,105,103,104,116,58,32,96,96,78,111,110,101,83,111,109,101,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,108,105,99,101,47,109,111,100,46,114,115,105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,58,32,116,104,101,32,108,101,110,32,105,115,32,32,98,117,116,32,116,104,101,32,105,110,100,101,120,32,105,115,32,48,48,48,49,48,50,48,51,48,52,48,53,48,54,48,55,48,56,48,57,49,48,49,49,49,50,49,51,49,52,49,53,49,54,49,55,49,56,49,57,50,48,50,49,50,50,50,51,50,52,50,53,50,54,50,55,50,56,50,57,51,48,51,49,51,50,51,51,51,52,51,53,51,54,51,55,51,56,51,57,52,48,52,49,52,50,52,51,52,52,52,53,52,54,52,55,52,56,52,57,53,48,53,49,53,50,53,51,53,52,53,53,53,54,53,55,53,56,53,57,54,48,54,49,54,50,54,51,54,52,54,53,54,54,54,55,54,56,54,57,55,48,55,49,55,50,55,51,55,52,55,53,55,54,55,55,55,56,55,57,56,48,56,49,56,50,56,51,56,52,56,53,56,54,56,55,56,56,56,57,57,48,57,49,57,50,57,51,57,52,57,53,57,54,57,55,57,56,57,57,105,110,100,101,120,32,32,111,117,116,32,111,102,32,114,97,110,103,101,32,102,111,114,32,115,108,105,99,101,32,111,102,32,108,101,110,103,116,104,32,96,115,108,105,99,101,32,105,110,100,101,120,32,115,116,97,114,116,115,32,97,116,32,32,98,117,116,32,101,110,100,115,32,97,116,32,91,46,46,46,93,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,115,116,114,47,109,111,100,46,114,115,98,121,116,101,32,105,110,100,101,120,32,32,105,115,32,110,111,116,32,97,32,99,104,97,114,32,98,111,117,110,100,97,114,121,59,32,105,116,32,105,115,32,105,110,115,105,100,101,32,32,40,98,121,116,101,115,32,41,32,111,102,32,96,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,102,109,116,47,109,111,100,46,114,115,46,46,0,1,3,5,5,8,6,3,7,4,8,7,9,16,10,27,11,24,12,22,13,20,14,22,15,4,16,3,18,18,19,9,22,1,23,5,24,2,25,3,26,7,28,1,31,22,32,3,35,1,43,5,44,2,45,11,46,1,48,3,49,1,50,2,167,1,168,2,169,2,170,4,171,8,250,2,251,5,253,4,254,3,255,9,173,120,121,139,141,162,48,87,88,96,136,139,140,144,28,29,221,14,15,75,76,46,47,63,92,93,181,226,132,141,142,145,146,169,177,186,187,197,198,201,202,222,228,229,4,17,18,41,49,52,55,58,59,61,73,74,93,132,142,146,169,177,180,186,187,198,202,206,207,228,229,4,13,14,17,18,41,49,52,58,59,69,70,73,74,94,100,101,132,145,155,157,201,206,207,4,13,17,41,69,73,87,100,101,132,141,145,169,180,186,187,197,201,223,228,229,240,4,13,17,59,60,69,73,100,101,128,129,132,178,188,190,191,213,215,240,241,131,133,134,137,139,140,152,160,164,166,168,169,172,186,190,191,197,199,206,207,218,219,72,152,189,205,198,206,207,73,78,79,87,89,94,95,137,142,143,177,182,183,191,193,198,199,215,17,22,23,91,92,246,247,254,255,128,13,109,113,222,223,14,15,31,110,111,28,29,95,125,126,174,175,247,22,23,30,31,70,71,78,79,88,90,92,94,126,127,181,197,212,213,220,240,241,245,114,115,143,255,116,117,150,151,201,47,95,38,46,47,167,175,183,191,199,207,215,223,154,64,151,152,143,31,255,175,254,255,206,255,78,79,90,91,7,8,15,16,39,47,238,239,110,111,55,61,63,66,69,144,145,254,255,83,103,117,200,201,208,209,216,217,231,254,255,0,32,95,34,130,223,4,130,68,8,27,5,5,17,129,172,14,59,5,95,65,30,22,128,223,3,25,8,1,4,32,5,10,4,52,4,7,3,1,7,6,7,16,11,80,15,18,7,1,7,77,8,2,4,28,10,9,3,8,3,7,3,2,3,3,3,12,4,5,3,11,6,1,14,21,5,58,3,17,7,6,5,16,8,86,7,2,7,21,14,79,4,67,3,45,3,1,4,17,6,15,12,58,4,29,37,13,6,76,32,109,4,106,37,128,200,5,130,176,3,26,6,130,253,3,89,7,21,11,23,9,20,12,20,12,106,6,10,6,26,6,88,8,43,5,70,10,44,4,12,4,1,3,49,11,44,4,26,6,11,3,128,172,6,10,6,31,65,76,4,45,3,116,8,60,3,15,3,60,55,8,8,42,6,128,246,5,130,4,17,24,8,47,17,45,3,31,17,33,15,128,140,4,130,151,25,11,21,135,90,3,21,26,4,16,128,244,5,47,5,59,7,2,14,24,9,128,165,59,116,12,128,214,26,12,5,128,255,5,41,3,128,138,5,36,12,155,198,10,210,22,42,132,141,3,55,9,129,92,20,128,184,8,128,184,63,53,4,10,6,56,8,70,8,12,6,116,11,30,3,90,4,89,9,128,131,24,28,10,22,9,70,10,128,138,6,171,164,12,23,4,49,161,4,129,218,38,7,12,5,5,128,165,17,129,109,16,120,40,42,6,76,4,128,141,4,128,190,3,27,3,15,13,0,6,1,1,3,1,4,2,8,8,9,2,10,3,11,2,16,1,17,4,18,5,19,18,20,2,21,2,28,5,36,1,106,3,107,2,188,2,209,2,212,12,213,9,214,2,215,2,218,1,224,5,232,2,238,32,240,4,241,1,249,4,12,39,59,62,78,79,143,158,158,159,6,7,9,54,61,62,86,243,208,209,4,20,24,86,87,189,53,206,207,224,18,135,137,142,158,4,13,14,17,18,41,49,52,58,59,69,70,73,74,78,79,100,101,90,92,182,183,9,55,144,145,168,111,95,238,239,90,98,154,155,39,40,85,157,160,161,163,164,167,168,173,186,188,196,6,11,12,21,29,58,63,69,81,166,167,204,205,160,7,25,26,34,37,197,198,4,32,35,37,38,40,51,56,58,72,74,76,80,83,85,86,88,90,92,94,96,99,101,102,107,115,120,125,127,138,164,170,175,176,192,208,47,31,49,50,63,94,34,123,5,3,4,45,3,101,4,1,47,46,128,130,29,3,49,15,28,4,36,12,27,5,43,5,68,4,14,42,128,170,6,36,4,36,4,40,8,52,11,1,128,144,129,55,9,22,10,8,128,152,57,3,99,8,9,48,22,5,33,3,27,5,1,64,56,4,75,5,40,4,3,4,9,8,9,7,64,32,39,4,12,9,54,3,58,5,26,7,4,12,7,80,73,55,51,13,51,7,6,129,96,31,129,129,78,4,30,15,67,14,25,7,10,6,68,12,39,9,117,11,63,65,42,6,59,5,10,6,81,6,1,5,16,3,5,128,139,94,34,72,8,10,128,166,94,34,69,11,10,6,13,19,56,8,10,54,26,3,15,4,16,129,96,83,12,1,129,192,57,129,7,70,10,29,3,71,131,73,131,154,102,117,11,128,196,138,188,132,47,143,209,130,71,161,185,130,57,7,42,4,2,96,38,10,70,10,40,5,19,131,112,69,11,47,16,17,64,1,31,151,237,19,130,243,165,13,2,139,254,107,5,13,3,9,7,16,147,96,128,246,10,115,8,110,23,70,128,186,87,9,18,128,142,129,71,3,133,66,15,21,133,80,43,135,213,128,215,41,75,5,10,4,2,132,160,60,6,1,4,85,5,27,52,2,129,14,44,4,100,12,86,10,13,3,92,4,61,57,29,13,44,4,9,7,2,128,174,131,211,13,13,3,7,9,116,12,85,43,12,4,56,8,10,6,40,8,30,98,24,8,28,4,15,33,18,46,1,134,63,99,97,108,108,101,100,32,96,79,112,116,105,111,110,58,58,117,110,119,114,97,112,40,41,96,32,111,110,32,97,32,96,78,111,110,101,96,32,118,97,108,117,101,47,99,104,101,99,107,111,117,116,47,115,114,99,47,108,105,98,99,111,114,101,47,111,112,116,105,111,110,46,114,115,98,101,103,105,110,32,60,61,32,101,110,100,32,40,32,60,61,32,41,32,119,104,101,110,32,115,108,105,99,105,110,103,32,96,32,105,115,32,111,117,116,32,111,102,32,98,111,117,110,100,115,32,111,102,32,96,10,41,32,32,32,32,32,66,111,114,114,111,119,69,114,114,111,114,66,111,114,114,111,119,77,117,116,69,114,114,111,114,32,123,58,32,10,125,32,125,44,32,91,107,105,110,100,69,109,112,116,121,48,120,80,97,114,115,101,73,110,116,69,114,114,111,114,73,110,118,97,108,105,100,68,105,103,105,116,79,118,101,114,102,108,111,119,85,110,100,101,114,102,108,111,119,85,116,102,56,69,114,114,111,114,118,97,108,105,100,95,117,112,95,116,111,101,114,114,111,114,95,108,101,110,78,111,110,101,83,111,109,101,84,33,34,25,13,1,2,3,17,75,28,12,16,4,11,29,18,30,39,104,110,111,112,113,98,32,5,6,15,19,20,21,26,8,22,7,40,36,23,24,9,10,14,27,31,37,35,131,130,125,38,42,43,60,61,62,63,67,71,74,77,88,89,90,91,92,93,94,95,96,97,99,100,101,102,103,105,106,107,108,114,115,116,121,122,123,124,0,73,108,108,101,103,97,108,32,98,121,116,101,32,115,101,113,117,101,110,99,101,0,68,111,109,97,105,110,32,101,114,114,111,114,0,82,101,115,117,108,116,32,110,111,116,32,114,101,112,114,101,115,101,110,116,97,98,108,101,0,78,111,116,32,97,32,116,116,121,0,80,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,0,79,112,101,114,97,116,105,111,110,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,78,111,32,115,117,99,104,32,102,105,108,101,32,111,114,32,100,105,114,101,99,116,111,114,121,0,78,111,32,115,117,99,104,32,112,114,111,99,101,115,115,0,70,105,108,101,32,101,120,105,115,116,115,0,86,97,108,117,101,32,116,111,111,32,108,97,114,103,101,32,102,111,114,32,100,97,116,97,32,116,121,112,101,0,78,111,32,115,112,97,99,101,32,108,101,102,116,32,111,110,32,100,101,118,105,99,101,0,79,117,116,32,111,102,32,109,101,109,111,114,121,0,82,101,115,111,117,114,99,101,32,98,117,115,121,0,73,110,116,101,114,114,117,112,116,101,100,32,115,121,115,116,101,109,32,99,97,108,108,0,82,101,115,111,117,114,99,101,32,116,101,109,112,111,114,97,114,105,108,121,32,117,110,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,115,101,101,107,0,67,114,111,115,115,45,100,101,118,105,99,101,32,108,105,110,107,0,82,101,97,100,45,111,110,108,121,32,102,105,108,101,32,115,121,115,116,101,109,0,68,105,114,101,99,116,111,114,121,32,110,111,116,32,101,109,112,116,121,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,112,101,101,114,0,79,112,101,114,97,116,105,111,110,32,116,105,109,101,100,32,111,117,116,0,67,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,0,72,111,115,116,32,105,115,32,100,111,119,110,0,72,111,115,116,32,105,115,32,117,110,114,101,97,99,104,97,98,108,101,0,65,100,100,114,101,115,115,32,105,110,32,117,115,101,0,66,114,111,107,101,110,32,112,105,112,101,0,73,47,79,32,101,114,114,111,114,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,32,111,114,32,97,100,100,114,101,115,115,0,66,108,111,99,107,32,100,101,118,105,99,101,32,114,101,113,117,105,114,101,100,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,0,78,111,116,32,97,32,100,105,114,101,99,116,111,114,121,0,73,115,32,97,32,100,105,114,101,99,116,111,114,121,0,84,101,120,116,32,102,105,108,101,32,98,117,115,121,0,69,120,101,99,32,102,111,114,109,97,116,32,101,114,114,111,114,0,73,110,118,97,108,105,100,32,97,114,103,117,109,101,110,116,0,65,114,103,117,109,101,110,116,32,108,105,115,116,32,116,111,111,32,108,111,110,103,0,83,121,109,98,111,108,105,99,32,108,105,110,107,32,108,111,111,112,0,70,105,108,101,110,97,109,101,32,116,111,111,32,108,111,110,103,0,84,111,111,32,109,97,110,121,32,111,112,101,110,32,102,105,108,101,115,32,105,110,32,115,121,115,116,101,109,0,78,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,97,118,97,105,108,97,98,108,101,0,66,97,100,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,0,78,111,32,99,104,105,108,100,32,112,114,111,99,101,115,115,0,66,97,100,32,97,100,100,114,101,115,115,0,70,105,108,101,32,116,111,111,32,108,97,114,103,101,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,78,111,32,108,111,99,107,115,32,97,118,97,105,108,97,98,108,101,0,82,101,115,111,117,114,99,101,32,100,101,97,100,108,111,99,107,32,119,111,117,108,100,32,111,99,99,117,114,0,83,116,97,116,101,32,110,111,116,32,114,101,99,111,118,101,114,97,98,108,101,0,80,114,101,118,105,111,117,115,32,111,119,110,101,114,32,100,105,101,100,0,79,112,101,114,97,116,105,111,110,32,99,97,110,99,101,108,101,100,0,70,117,110,99,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,78,111,32,109,101,115,115,97,103,101,32,111,102,32,100,101,115,105,114,101,100,32,116,121,112,101,0,73,100,101,110,116,105,102,105,101,114,32,114,101,109,111,118,101,100,0,68,101,118,105,99,101,32,110,111,116,32,97,32,115,116,114,101,97,109,0,78,111,32,100,97,116,97,32,97,118,97,105,108,97,98,108,101,0,68,101,118,105,99,101,32,116,105,109,101,111,117,116,0,79,117,116,32,111,102,32,115,116,114,101,97,109,115,32,114,101,115,111,117,114,99,101,115,0,76,105,110,107,32,104,97,115,32,98,101,101,110,32,115,101,118,101,114,101,100,0,80,114,111,116,111,99,111,108,32,101,114,114,111,114,0,66,97,100,32,109,101,115,115,97,103,101,0,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,105,110,32,98,97,100,32,115,116,97,116,101,0,78,111,116,32,97,32,115,111,99,107,101,116,0,68,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,32,114,101,113,117,105,114,101,100,0,77,101,115,115,97,103,101,32,116,111,111,32,108,97,114,103,101,0,80,114,111,116,111,99,111,108,32,119,114,111,110,103,32,116,121,112,101,32,102,111,114,32,115,111,99,107,101,116,0,80,114,111,116,111,99,111,108,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,80,114,111,116,111,99,111,108,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,83,111,99,107,101,116,32,116,121,112,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,78,111,116,32,115,117,112,112,111,114,116,101,100,0,80,114,111,116,111,99,111,108,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,65,100,100,114,101,115,115,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,112,114,111,116,111,99,111,108,0,65,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,78,101,116,119,111,114,107,32,105,115,32,100,111,119,110,0,78,101,116,119,111,114,107,32,117,110,114,101,97,99,104,97,98,108,101,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,110,101,116,119,111,114,107,0,67,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,0,78,111,32,98,117,102,102,101,114,32,115,112,97,99,101,32,97,118,97,105,108,97,98,108,101,0,83,111,99,107,101,116,32,105,115,32,99,111,110,110,101,99,116,101,100,0,83,111,99,107,101,116,32,110,111,116,32,99,111,110,110,101,99,116,101,100,0,67,97,110,110,111,116,32,115,101,110,100,32,97,102,116,101,114,32,115,111,99,107,101,116,32,115,104,117,116,100,111,119,110,0,79,112,101,114,97,116,105,111,110,32,97,108,114,101,97,100,121,32,105,110,32,112,114,111,103,114,101,115,115,0,79,112,101,114,97,116,105,111,110,32,105,110,32,112,114,111,103,114,101,115,115,0,83,116,97,108,101,32,102,105,108,101,32,104,97,110,100,108,101,0,82,101,109,111,116,101,32,73,47,79,32,101,114,114,111,114,0,81,117,111,116,97,32,101,120,99,101,101,100,101,100,0,78,111,32,109,101,100,105,117,109,32,102,111,117,110,100,0,87,114,111,110,103,32,109,101,100,105,117,109,32,116,121,112,101,0,78,111,32,101,114,114,111,114,32,105,110,102,111,114,109,97,116,105,111,110,0,0],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE+20480);var tempDoublePtr=STATICTOP;STATICTOP+=16;function _pthread_mutex_destroy(){}function __ZSt18uncaught_exceptionv(){return!!__ZSt18uncaught_exceptionv.uncaught_exception}var EXCEPTIONS={last:0,caught:[],infos:{},deAdjust:(function(adjusted){if(!adjusted||EXCEPTIONS.infos[adjusted])return adjusted;for(var ptr in EXCEPTIONS.infos){var info=EXCEPTIONS.infos[ptr];if(info.adjusted===adjusted){return ptr}}return adjusted}),addRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount++}),decRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];assert(info.refcount>0);info.refcount--;if(info.refcount===0&&!info.rethrown){if(info.destructor){Module["dynCall_vi"](info.destructor,ptr)}delete EXCEPTIONS.infos[ptr];___cxa_free_exception(ptr)}}),clearRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount=0})};function ___resumeException(ptr){if(!EXCEPTIONS.last){EXCEPTIONS.last=ptr}throw ptr}function ___cxa_find_matching_catch(){var thrown=EXCEPTIONS.last;if(!thrown){return(Runtime.setTempRet0(0),0)|0}var info=EXCEPTIONS.infos[thrown];var throwntype=info.type;if(!throwntype){return(Runtime.setTempRet0(0),thrown)|0}var typeArray=Array.prototype.slice.call(arguments);var pointer=Module["___cxa_is_pointer_type"](throwntype);if(!___cxa_find_matching_catch.buffer)___cxa_find_matching_catch.buffer=_malloc(4);HEAP32[___cxa_find_matching_catch.buffer>>2]=thrown;thrown=___cxa_find_matching_catch.buffer;for(var i=0;i<typeArray.length;i++){if(typeArray[i]&&Module["___cxa_can_catch"](typeArray[i],throwntype,thrown)){thrown=HEAP32[thrown>>2];info.adjusted=thrown;return(Runtime.setTempRet0(typeArray[i]),thrown)|0}}thrown=HEAP32[thrown>>2];return(Runtime.setTempRet0(throwntype),thrown)|0}function ___cxa_throw(ptr,type,destructor){EXCEPTIONS.infos[ptr]={ptr:ptr,adjusted:ptr,type:type,destructor:destructor,refcount:0,caught:false,rethrown:false};EXCEPTIONS.last=ptr;if(!("uncaught_exception"in __ZSt18uncaught_exceptionv)){__ZSt18uncaught_exceptionv.uncaught_exception=1}else{__ZSt18uncaught_exceptionv.uncaught_exception++}throw ptr}function __Unwind_FindEnclosingFunction(){return 0}function _pthread_mutexattr_settype(){}function _abort(){Module["abort"]()}function _pthread_cond_destroy(){return 0}function _pthread_condattr_destroy(){return 0}var cttz_i8=allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",ALLOC_STATIC);function ___lock(){}function ___unlock(){}var PTHREAD_SPECIFIC={};function _pthread_getspecific(key){return PTHREAD_SPECIFIC[key]||0}var PTHREAD_SPECIFIC_NEXT_KEY=1;var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _pthread_key_create(key,destructor){if(key==0){return ERRNO_CODES.EINVAL}HEAP32[key>>2]=PTHREAD_SPECIFIC_NEXT_KEY;PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY]=0;PTHREAD_SPECIFIC_NEXT_KEY++;return 0}function _pthread_mutex_init(){}function _pthread_key_delete(key){if(key in PTHREAD_SPECIFIC){delete PTHREAD_SPECIFIC[key];return 0}return ERRNO_CODES.EINVAL}function _pthread_setspecific(key,value){if(!(key in PTHREAD_SPECIFIC)){return ERRNO_CODES.EINVAL}PTHREAD_SPECIFIC[key]=value;return 0}function _pthread_mutexattr_destroy(){}function ___cxa_allocate_exception(size){return _malloc(size)}var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}var PATH={splitPath:(function(filename){var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)}),normalizeArray:(function(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts}),normalize:(function(path){var isAbsolute=path.charAt(0)==="/",trailingSlash=path.substr(-1)==="/";path=PATH.normalizeArray(path.split("/").filter((function(p){return!!p})),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path}),dirname:(function(path){var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir}),basename:(function(path){if(path==="/")return"/";var lastSlash=path.lastIndexOf("/");if(lastSlash===-1)return path;return path.substr(lastSlash+1)}),extname:(function(path){return PATH.splitPath(path)[3]}),join:(function(){var paths=Array.prototype.slice.call(arguments,0);return PATH.normalize(paths.join("/"))}),join2:(function(l,r){return PATH.normalize(l+"/"+r)}),resolve:(function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:FS.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/"}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter((function(p){return!!p})),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."}),relative:(function(from,to){from=PATH.resolve(from).substr(1);to=PATH.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")})};var TTY={ttys:[],init:(function(){}),shutdown:(function(){}),register:(function(dev,ops){TTY.ttys[dev]={input:[],output:[],ops:ops};FS.registerDevice(dev,TTY.stream_ops)}),stream_ops:{open:(function(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}stream.tty=tty;stream.seekable=false}),close:(function(stream){stream.tty.ops.flush(stream.tty)}),flush:(function(stream){stream.tty.ops.flush(stream.tty)}),read:(function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(ERRNO_CODES.ENXIO)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EIO)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead}),write:(function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(ERRNO_CODES.ENXIO)}for(var i=0;i<length;i++){try{stream.tty.ops.put_char(stream.tty,buffer[offset+i])}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EIO)}}if(length){stream.node.timestamp=Date.now()}return i})},default_tty_ops:{get_char:(function(tty){if(!tty.input.length){var result=null;if(ENVIRONMENT_IS_NODE){var BUFSIZE=256;var buf=new Buffer(BUFSIZE);var bytesRead=0;var isPosixPlatform=process.platform!="win32";var fd=process.stdin.fd;if(isPosixPlatform){var usingDevice=false;try{fd=fs.openSync("/dev/stdin","r");usingDevice=true}catch(e){}}try{bytesRead=fs.readSync(fd,buf,0,BUFSIZE,null)}catch(e){if(e.toString().indexOf("EOF")!=-1)bytesRead=0;else throw e}if(usingDevice){fs.closeSync(fd)}if(bytesRead>0){result=buf.slice(0,bytesRead).toString("utf-8")}else{result=null}}else if(typeof window!="undefined"&&typeof window.prompt=="function"){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else if(typeof readline=="function"){result=readline();if(result!==null){result+="\n"}}if(!result){return null}tty.input=intArrayFromString(result,true)}return tty.input.shift()}),put_char:(function(tty,val){if(val===null||val===10){Module["print"](UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}}),flush:(function(tty){if(tty.output&&tty.output.length>0){Module["print"](UTF8ArrayToString(tty.output,0));tty.output=[]}})},default_tty1_ops:{put_char:(function(tty,val){if(val===null||val===10){Module["printErr"](UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}}),flush:(function(tty){if(tty.output&&tty.output.length>0){Module["printErr"](UTF8ArrayToString(tty.output,0));tty.output=[]}})}};var MEMFS={ops_table:null,mount:(function(mount){return MEMFS.createNode(null,"/",16384|511,0)}),createNode:(function(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(!MEMFS.ops_table){MEMFS.ops_table={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,allocate:MEMFS.stream_ops.allocate,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}}}var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.timestamp=Date.now();if(parent){parent.contents[name]=node}return node}),getFileDataAsRegularArray:(function(node){if(node.contents&&node.contents.subarray){var arr=[];for(var i=0;i<node.usedBytes;++i)arr.push(node.contents[i]);return arr}return node.contents}),getFileDataAsTypedArray:(function(node){if(!node.contents)return new Uint8Array;if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)}),expandFileStorage:(function(node,newCapacity){if(node.contents&&node.contents.subarray&&newCapacity>node.contents.length){node.contents=MEMFS.getFileDataAsRegularArray(node);node.usedBytes=node.contents.length}if(!node.contents||node.contents.subarray){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)|0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0);return}if(!node.contents&&newCapacity>0)node.contents=[];while(node.contents.length<newCapacity)node.contents.push(0)}),resizeFileStorage:(function(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0;return}if(!node.contents||node.contents.subarray){var oldContents=node.contents;node.contents=new Uint8Array(new ArrayBuffer(newSize));if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize;return}if(!node.contents)node.contents=[];if(node.contents.length>newSize)node.contents.length=newSize;else while(node.contents.length<newSize)node.contents.push(0);node.usedBytes=newSize}),node_ops:{getattr:(function(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.timestamp);attr.mtime=new Date(node.timestamp);attr.ctime=new Date(node.timestamp);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr}),setattr:(function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}}),lookup:(function(parent,name){throw FS.genericErrors[ERRNO_CODES.ENOENT]}),mknod:(function(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)}),rename:(function(old_node,new_dir,new_name){if(FS.isDir(old_node.mode)){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){for(var i in new_node.contents){throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY)}}}delete old_node.parent.contents[old_node.name];old_node.name=new_name;new_dir.contents[new_name]=old_node;old_node.parent=new_dir}),unlink:(function(parent,name){delete parent.contents[name]}),rmdir:(function(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY)}delete parent.contents[name]}),readdir:(function(node){var entries=[".",".."];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key)}return entries}),symlink:(function(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node}),readlink:(function(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return node.link})},stream_ops:{read:(function(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);assert(size>=0);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size}),write:(function(stream,buffer,offset,length,position,canOwn){if(!length)return 0;var node=stream.node;node.timestamp=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=new Uint8Array(buffer.subarray(offset,offset+length));node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray)node.contents.set(buffer.subarray(offset,offset+length),position);else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length}),llseek:(function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return position}),allocate:(function(stream,offset,length){MEMFS.expandFileStorage(stream.node,offset+length);stream.node.usedBytes=Math.max(stream.node.usedBytes,offset+length)}),mmap:(function(stream,buffer,offset,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&(contents.buffer===buffer||contents.buffer===buffer.buffer)){allocated=false;ptr=contents.byteOffset}else{if(position>0||position+length<stream.node.usedBytes){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}allocated=true;ptr=_malloc(length);if(!ptr){throw new FS.ErrnoError(ERRNO_CODES.ENOMEM)}buffer.set(contents,ptr)}return{ptr:ptr,allocated:allocated}}),msync:(function(stream,buffer,offset,length,mmapFlags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}if(mmapFlags&2){return 0}var bytesWritten=MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0})}};var IDBFS={dbs:{},indexedDB:(function(){if(typeof indexedDB!=="undefined")return indexedDB;var ret=null;if(typeof window==="object")ret=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;assert(ret,"IDBFS used, but indexedDB not supported");return ret}),DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:(function(mount){return MEMFS.mount.apply(null,arguments)}),syncfs:(function(mount,populate,callback){IDBFS.getLocalSet(mount,(function(err,local){if(err)return callback(err);IDBFS.getRemoteSet(mount,(function(err,remote){if(err)return callback(err);var src=populate?remote:local;var dst=populate?local:remote;IDBFS.reconcile(src,dst,callback)}))}))}),getDB:(function(name,callback){var db=IDBFS.dbs[name];if(db){return callback(null,db)}var req;try{req=IDBFS.indexedDB().open(name,IDBFS.DB_VERSION)}catch(e){return callback(e)}if(!req){return callback("Unable to connect to IndexedDB")}req.onupgradeneeded=(function(e){var db=e.target.result;var transaction=e.target.transaction;var fileStore;if(db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)){fileStore=transaction.objectStore(IDBFS.DB_STORE_NAME)}else{fileStore=db.createObjectStore(IDBFS.DB_STORE_NAME)}if(!fileStore.indexNames.contains("timestamp")){fileStore.createIndex("timestamp","timestamp",{unique:false})}});req.onsuccess=(function(){db=req.result;IDBFS.dbs[name]=db;callback(null,db)});req.onerror=(function(e){callback(this.error);e.preventDefault()})}),getLocalSet:(function(mount,callback){var entries={};function isRealDir(p){return p!=="."&&p!==".."}function toAbsolute(root){return(function(p){return PATH.join2(root,p)})}var check=FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));while(check.length){var path=check.pop();var stat;try{stat=FS.stat(path)}catch(e){return callback(e)}if(FS.isDir(stat.mode)){check.push.apply(check,FS.readdir(path).filter(isRealDir).map(toAbsolute(path)))}entries[path]={timestamp:stat.mtime}}return callback(null,{type:"local",entries:entries})}),getRemoteSet:(function(mount,callback){var entries={};IDBFS.getDB(mount.mountpoint,(function(err,db){if(err)return callback(err);var transaction=db.transaction([IDBFS.DB_STORE_NAME],"readonly");transaction.onerror=(function(e){callback(this.error);e.preventDefault()});var store=transaction.objectStore(IDBFS.DB_STORE_NAME);var index=store.index("timestamp");index.openKeyCursor().onsuccess=(function(event){var cursor=event.target.result;if(!cursor){return callback(null,{type:"remote",db:db,entries:entries})}entries[cursor.primaryKey]={timestamp:cursor.key};cursor.continue()})}))}),loadLocalEntry:(function(path,callback){var stat,node;try{var lookup=FS.lookupPath(path);node=lookup.node;stat=FS.stat(path)}catch(e){return callback(e)}if(FS.isDir(stat.mode)){return callback(null,{timestamp:stat.mtime,mode:stat.mode})}else if(FS.isFile(stat.mode)){node.contents=MEMFS.getFileDataAsTypedArray(node);return callback(null,{timestamp:stat.mtime,mode:stat.mode,contents:node.contents})}else{return callback(new Error("node type not supported"))}}),storeLocalEntry:(function(path,entry,callback){try{if(FS.isDir(entry.mode)){FS.mkdir(path,entry.mode)}else if(FS.isFile(entry.mode)){FS.writeFile(path,entry.contents,{encoding:"binary",canOwn:true})}else{return callback(new Error("node type not supported"))}FS.chmod(path,entry.mode);FS.utime(path,entry.timestamp,entry.timestamp)}catch(e){return callback(e)}callback(null)}),removeLocalEntry:(function(path,callback){try{var lookup=FS.lookupPath(path);var stat=FS.stat(path);if(FS.isDir(stat.mode)){FS.rmdir(path)}else if(FS.isFile(stat.mode)){FS.unlink(path)}}catch(e){return callback(e)}callback(null)}),loadRemoteEntry:(function(store,path,callback){var req=store.get(path);req.onsuccess=(function(event){callback(null,event.target.result)});req.onerror=(function(e){callback(this.error);e.preventDefault()})}),storeRemoteEntry:(function(store,path,entry,callback){var req=store.put(entry,path);req.onsuccess=(function(){callback(null)});req.onerror=(function(e){callback(this.error);e.preventDefault()})}),removeRemoteEntry:(function(store,path,callback){var req=store.delete(path);req.onsuccess=(function(){callback(null)});req.onerror=(function(e){callback(this.error);e.preventDefault()})}),reconcile:(function(src,dst,callback){var total=0;var create=[];Object.keys(src.entries).forEach((function(key){var e=src.entries[key];var e2=dst.entries[key];if(!e2||e.timestamp>e2.timestamp){create.push(key);total++}}));var remove=[];Object.keys(dst.entries).forEach((function(key){var e=dst.entries[key];var e2=src.entries[key];if(!e2){remove.push(key);total++}}));if(!total){return callback(null)}var completed=0;var db=src.type==="remote"?src.db:dst.db;var transaction=db.transaction([IDBFS.DB_STORE_NAME],"readwrite");var store=transaction.objectStore(IDBFS.DB_STORE_NAME);function done(err){if(err){if(!done.errored){done.errored=true;return callback(err)}return}if(++completed>=total){return callback(null)}}transaction.onerror=(function(e){done(this.error);e.preventDefault()});create.sort().forEach((function(path){if(dst.type==="local"){IDBFS.loadRemoteEntry(store,path,(function(err,entry){if(err)return done(err);IDBFS.storeLocalEntry(path,entry,done)}))}else{IDBFS.loadLocalEntry(path,(function(err,entry){if(err)return done(err);IDBFS.storeRemoteEntry(store,path,entry,done)}))}}));remove.sort().reverse().forEach((function(path){if(dst.type==="local"){IDBFS.removeLocalEntry(path,done)}else{IDBFS.removeRemoteEntry(store,path,done)}}))})};var NODEFS={isWindows:false,staticInit:(function(){NODEFS.isWindows=!!process.platform.match(/^win/)}),mount:(function(mount){assert(ENVIRONMENT_IS_NODE);return NODEFS.createNode(null,"/",NODEFS.getMode(mount.opts.root),0)}),createNode:(function(parent,name,mode,dev){if(!FS.isDir(mode)&&!FS.isFile(mode)&&!FS.isLink(mode)){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var node=FS.createNode(parent,name,mode);node.node_ops=NODEFS.node_ops;node.stream_ops=NODEFS.stream_ops;return node}),getMode:(function(path){var stat;try{stat=fs.lstatSync(path);if(NODEFS.isWindows){stat.mode=stat.mode|(stat.mode&146)>>1}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}return stat.mode}),realPath:(function(node){var parts=[];while(node.parent!==node){parts.push(node.name);node=node.parent}parts.push(node.mount.opts.root);parts.reverse();return PATH.join.apply(null,parts)}),flagsToPermissionStringMap:{0:"r",1:"r+",2:"r+",64:"r",65:"r+",66:"r+",129:"rx+",193:"rx+",514:"w+",577:"w",578:"w+",705:"wx",706:"wx+",1024:"a",1025:"a",1026:"a+",1089:"a",1090:"a+",1153:"ax",1154:"ax+",1217:"ax",1218:"ax+",4096:"rs",4098:"rs+"},flagsToPermissionString:(function(flags){flags&=~2097152;flags&=~2048;flags&=~32768;flags&=~524288;if(flags in NODEFS.flagsToPermissionStringMap){return NODEFS.flagsToPermissionStringMap[flags]}else{throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}}),node_ops:{getattr:(function(node){var path=NODEFS.realPath(node);var stat;try{stat=fs.lstatSync(path)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}if(NODEFS.isWindows&&!stat.blksize){stat.blksize=4096}if(NODEFS.isWindows&&!stat.blocks){stat.blocks=(stat.size+stat.blksize-1)/stat.blksize|0}return{dev:stat.dev,ino:stat.ino,mode:stat.mode,nlink:stat.nlink,uid:stat.uid,gid:stat.gid,rdev:stat.rdev,size:stat.size,atime:stat.atime,mtime:stat.mtime,ctime:stat.ctime,blksize:stat.blksize,blocks:stat.blocks}}),setattr:(function(node,attr){var path=NODEFS.realPath(node);try{if(attr.mode!==undefined){fs.chmodSync(path,attr.mode);node.mode=attr.mode}if(attr.timestamp!==undefined){var date=new Date(attr.timestamp);fs.utimesSync(path,date,date)}if(attr.size!==undefined){fs.truncateSync(path,attr.size)}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),lookup:(function(parent,name){var path=PATH.join2(NODEFS.realPath(parent),name);var mode=NODEFS.getMode(path);return NODEFS.createNode(parent,name,mode)}),mknod:(function(parent,name,mode,dev){var node=NODEFS.createNode(parent,name,mode,dev);var path=NODEFS.realPath(node);try{if(FS.isDir(node.mode)){fs.mkdirSync(path,node.mode)}else{fs.writeFileSync(path,"",{mode:node.mode})}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}return node}),rename:(function(oldNode,newDir,newName){var oldPath=NODEFS.realPath(oldNode);var newPath=PATH.join2(NODEFS.realPath(newDir),newName);try{fs.renameSync(oldPath,newPath)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),unlink:(function(parent,name){var path=PATH.join2(NODEFS.realPath(parent),name);try{fs.unlinkSync(path)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),rmdir:(function(parent,name){var path=PATH.join2(NODEFS.realPath(parent),name);try{fs.rmdirSync(path)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),readdir:(function(node){var path=NODEFS.realPath(node);try{return fs.readdirSync(path)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),symlink:(function(parent,newName,oldPath){var newPath=PATH.join2(NODEFS.realPath(parent),newName);try{fs.symlinkSync(oldPath,newPath)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),readlink:(function(node){var path=NODEFS.realPath(node);try{path=fs.readlinkSync(path);path=NODEJS_PATH.relative(NODEJS_PATH.resolve(node.mount.opts.root),path);return path}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}})},stream_ops:{open:(function(stream){var path=NODEFS.realPath(stream.node);try{if(FS.isFile(stream.node.mode)){stream.nfd=fs.openSync(path,NODEFS.flagsToPermissionString(stream.flags))}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),close:(function(stream){try{if(FS.isFile(stream.node.mode)&&stream.nfd){fs.closeSync(stream.nfd)}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),read:(function(stream,buffer,offset,length,position){if(length===0)return 0;var nbuffer=new Buffer(length);var res;try{res=fs.readSync(stream.nfd,nbuffer,0,length,position)}catch(e){throw new FS.ErrnoError(ERRNO_CODES[e.code])}if(res>0){for(var i=0;i<res;i++){buffer[offset+i]=nbuffer[i]}}return res}),write:(function(stream,buffer,offset,length,position){var nbuffer=new Buffer(buffer.subarray(offset,offset+length));var res;try{res=fs.writeSync(stream.nfd,nbuffer,0,length,position)}catch(e){throw new FS.ErrnoError(ERRNO_CODES[e.code])}return res}),llseek:(function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){try{var stat=fs.fstatSync(stream.nfd);position+=stat.size}catch(e){throw new FS.ErrnoError(ERRNO_CODES[e.code])}}}if(position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return position})}};var WORKERFS={DIR_MODE:16895,FILE_MODE:33279,reader:null,mount:(function(mount){assert(ENVIRONMENT_IS_WORKER);if(!WORKERFS.reader)WORKERFS.reader=new FileReaderSync;var root=WORKERFS.createNode(null,"/",WORKERFS.DIR_MODE,0);var createdParents={};function ensureParent(path){var parts=path.split("/");var parent=root;for(var i=0;i<parts.length-1;i++){var curr=parts.slice(0,i+1).join("/");if(!createdParents[curr]){createdParents[curr]=WORKERFS.createNode(parent,parts[i],WORKERFS.DIR_MODE,0)}parent=createdParents[curr]}return parent}function base(path){var parts=path.split("/");return parts[parts.length-1]}Array.prototype.forEach.call(mount.opts["files"]||[],(function(file){WORKERFS.createNode(ensureParent(file.name),base(file.name),WORKERFS.FILE_MODE,0,file,file.lastModifiedDate)}));(mount.opts["blobs"]||[]).forEach((function(obj){WORKERFS.createNode(ensureParent(obj["name"]),base(obj["name"]),WORKERFS.FILE_MODE,0,obj["data"])}));(mount.opts["packages"]||[]).forEach((function(pack){pack["metadata"].files.forEach((function(file){var name=file.filename.substr(1);WORKERFS.createNode(ensureParent(name),base(name),WORKERFS.FILE_MODE,0,pack["blob"].slice(file.start,file.end))}))}));return root}),createNode:(function(parent,name,mode,dev,contents,mtime){var node=FS.createNode(parent,name,mode);node.mode=mode;node.node_ops=WORKERFS.node_ops;node.stream_ops=WORKERFS.stream_ops;node.timestamp=(mtime||new Date).getTime();assert(WORKERFS.FILE_MODE!==WORKERFS.DIR_MODE);if(mode===WORKERFS.FILE_MODE){node.size=contents.size;node.contents=contents}else{node.size=4096;node.contents={}}if(parent){parent.contents[name]=node}return node}),node_ops:{getattr:(function(node){return{dev:1,ino:undefined,mode:node.mode,nlink:1,uid:0,gid:0,rdev:undefined,size:node.size,atime:new Date(node.timestamp),mtime:new Date(node.timestamp),ctime:new Date(node.timestamp),blksize:4096,blocks:Math.ceil(node.size/4096)}}),setattr:(function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp}}),lookup:(function(parent,name){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}),mknod:(function(parent,name,mode,dev){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),rename:(function(oldNode,newDir,newName){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),unlink:(function(parent,name){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),rmdir:(function(parent,name){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),readdir:(function(node){var entries=[".",".."];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key)}return entries}),symlink:(function(parent,newName,oldPath){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),readlink:(function(node){throw new FS.ErrnoError(ERRNO_CODES.EPERM)})},stream_ops:{read:(function(stream,buffer,offset,length,position){if(position>=stream.node.size)return 0;var chunk=stream.node.contents.slice(position,position+length);var ab=WORKERFS.reader.readAsArrayBuffer(chunk);buffer.set(new Uint8Array(ab),offset);return chunk.size}),write:(function(stream,buffer,offset,length,position){throw new FS.ErrnoError(ERRNO_CODES.EIO)}),llseek:(function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.size}}if(position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return position})}};STATICTOP+=16;STATICTOP+=16;STATICTOP+=16;var FS={root:null,mounts:[],devices:[null],streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:(function(e){if(!(e instanceof FS.ErrnoError))throw e+" : "+stackTrace();return ___setErrNo(e.errno)}),lookupPath:(function(path,opts){path=PATH.resolve(FS.cwd(),path);opts=opts||{};if(!path)return{path:"",node:null};var defaults={follow_mount:true,recurse_count:0};for(var key in defaults){if(opts[key]===undefined){opts[key]=defaults[key]}}if(opts.recurse_count>8){throw new FS.ErrnoError(ERRNO_CODES.ELOOP)}var parts=PATH.normalizeArray(path.split("/").filter((function(p){return!!p})),false);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}current=FS.lookupNode(current,parts[i]);current_path=PATH.join2(current_path,parts[i]);if(FS.isMountpoint(current)){if(!islast||islast&&opts.follow_mount){current=current.mounted.root}}if(!islast||opts.follow){var count=0;while(FS.isLink(current.mode)){var link=FS.readlink(current_path);current_path=PATH.resolve(PATH.dirname(current_path),link);var lookup=FS.lookupPath(current_path,{recurse_count:opts.recurse_count});current=lookup.node;if(count++>40){throw new FS.ErrnoError(ERRNO_CODES.ELOOP)}}}}return{path:current_path,node:current}}),getPath:(function(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?mount+"/"+path:mount+path}path=path?node.name+"/"+path:node.name;node=node.parent}}),hashName:(function(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length}),hashAddNode:(function(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node}),hashRemoveNode:(function(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}}),lookupNode:(function(parent,name){var err=FS.mayLookup(parent);if(err){throw new FS.ErrnoError(err,parent)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)}),createNode:(function(parent,name,mode,rdev){if(!FS.FSNode){FS.FSNode=(function(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.mounted=null;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.node_ops={};this.stream_ops={};this.rdev=rdev});FS.FSNode.prototype={};var readMode=292|73;var writeMode=146;Object.defineProperties(FS.FSNode.prototype,{read:{get:(function(){return(this.mode&readMode)===readMode}),set:(function(val){val?this.mode|=readMode:this.mode&=~readMode})},write:{get:(function(){return(this.mode&writeMode)===writeMode}),set:(function(val){val?this.mode|=writeMode:this.mode&=~writeMode})},isFolder:{get:(function(){return FS.isDir(this.mode)})},isDevice:{get:(function(){return FS.isChrdev(this.mode)})}})}var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node}),destroyNode:(function(node){FS.hashRemoveNode(node)}),isRoot:(function(node){return node===node.parent}),isMountpoint:(function(node){return!!node.mounted}),isFile:(function(mode){return(mode&61440)===32768}),isDir:(function(mode){return(mode&61440)===16384}),isLink:(function(mode){return(mode&61440)===40960}),isChrdev:(function(mode){return(mode&61440)===8192}),isBlkdev:(function(mode){return(mode&61440)===24576}),isFIFO:(function(mode){return(mode&61440)===4096}),isSocket:(function(mode){return(mode&49152)===49152}),flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:(function(str){var flags=FS.flagModes[str];if(typeof flags==="undefined"){throw new Error("Unknown file open mode: "+str)}return flags}),flagsToPermissionString:(function(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms}),nodePermissions:(function(node,perms){if(FS.ignorePermissions){return 0}if(perms.indexOf("r")!==-1&&!(node.mode&292)){return ERRNO_CODES.EACCES}else if(perms.indexOf("w")!==-1&&!(node.mode&146)){return ERRNO_CODES.EACCES}else if(perms.indexOf("x")!==-1&&!(node.mode&73)){return ERRNO_CODES.EACCES}return 0}),mayLookup:(function(dir){var err=FS.nodePermissions(dir,"x");if(err)return err;if(!dir.node_ops.lookup)return ERRNO_CODES.EACCES;return 0}),mayCreate:(function(dir,name){try{var node=FS.lookupNode(dir,name);return ERRNO_CODES.EEXIST}catch(e){}return FS.nodePermissions(dir,"wx")}),mayDelete:(function(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var err=FS.nodePermissions(dir,"wx");if(err){return err}if(isdir){if(!FS.isDir(node.mode)){return ERRNO_CODES.ENOTDIR}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return ERRNO_CODES.EBUSY}}else{if(FS.isDir(node.mode)){return ERRNO_CODES.EISDIR}}return 0}),mayOpen:(function(node,flags){if(!node){return ERRNO_CODES.ENOENT}if(FS.isLink(node.mode)){return ERRNO_CODES.ELOOP}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!=="r"||flags&512){return ERRNO_CODES.EISDIR}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))}),MAX_OPEN_FDS:4096,nextfd:(function(fd_start,fd_end){fd_start=fd_start||0;fd_end=fd_end||FS.MAX_OPEN_FDS;for(var fd=fd_start;fd<=fd_end;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(ERRNO_CODES.EMFILE)}),getStream:(function(fd){return FS.streams[fd]}),createStream:(function(stream,fd_start,fd_end){if(!FS.FSStream){FS.FSStream=(function(){});FS.FSStream.prototype={};Object.defineProperties(FS.FSStream.prototype,{object:{get:(function(){return this.node}),set:(function(val){this.node=val})},isRead:{get:(function(){return(this.flags&2097155)!==1})},isWrite:{get:(function(){return(this.flags&2097155)!==0})},isAppend:{get:(function(){return this.flags&1024})}})}var newStream=new FS.FSStream;for(var p in stream){newStream[p]=stream[p]}stream=newStream;var fd=FS.nextfd(fd_start,fd_end);stream.fd=fd;FS.streams[fd]=stream;return stream}),closeStream:(function(fd){FS.streams[fd]=null}),chrdev_stream_ops:{open:(function(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;if(stream.stream_ops.open){stream.stream_ops.open(stream)}}),llseek:(function(){throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)})},major:(function(dev){return dev>>8}),minor:(function(dev){return dev&255}),makedev:(function(ma,mi){return ma<<8|mi}),registerDevice:(function(dev,ops){FS.devices[dev]={stream_ops:ops}}),getDevice:(function(dev){return FS.devices[dev]}),getMounts:(function(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push.apply(check,m.mounts)}return mounts}),syncfs:(function(populate,callback){if(typeof populate==="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){console.log("warning: "+FS.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work")}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(err){assert(FS.syncFSRequests>0);FS.syncFSRequests--;return callback(err)}function done(err){if(err){if(!done.errored){done.errored=true;return doCallback(err)}return}if(++completed>=mounts.length){doCallback(null)}}mounts.forEach((function(mount){if(!mount.type.syncfs){return done(null)}mount.type.syncfs(mount,populate,done)}))}),mount:(function(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR)}}var mount={type:type,opts:opts,mountpoint:mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot}),unmount:(function(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);Object.keys(FS.nameTable).forEach((function(hash){var current=FS.nameTable[hash];while(current){var next=current.name_next;if(mounts.indexOf(current.mount)!==-1){FS.destroyNode(current)}current=next}}));node.mounted=null;var idx=node.mount.mounts.indexOf(mount);assert(idx!==-1);node.mount.mounts.splice(idx,1)}),lookup:(function(parent,name){return parent.node_ops.lookup(parent,name)}),mknod:(function(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name||name==="."||name===".."){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var err=FS.mayCreate(parent,name);if(err){throw new FS.ErrnoError(err)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}return parent.node_ops.mknod(parent,name,mode,dev)}),create:(function(path,mode){mode=mode!==undefined?mode:438;mode&=4095;mode|=32768;return FS.mknod(path,mode,0)}),mkdir:(function(path,mode){mode=mode!==undefined?mode:511;mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)}),mkdirTree:(function(path,mode){var dirs=path.split("/");var d="";for(var i=0;i<dirs.length;++i){if(!dirs[i])continue;d+="/"+dirs[i];try{FS.mkdir(d,mode)}catch(e){if(e.errno!=ERRNO_CODES.EEXIST)throw e}}}),mkdev:(function(path,mode,dev){if(typeof dev==="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)}),symlink:(function(oldpath,newpath){if(!PATH.resolve(oldpath)){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}var newname=PATH.basename(newpath);var err=FS.mayCreate(parent,newname);if(err){throw new FS.ErrnoError(err)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}return parent.node_ops.symlink(parent,newname,oldpath)}),rename:(function(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;try{lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}if(!old_dir||!new_dir)throw new FS.ErrnoError(ERRNO_CODES.ENOENT);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(ERRNO_CODES.EXDEV)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}relative=PATH.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var err=FS.mayDelete(old_dir,old_name,isdir);if(err){throw new FS.ErrnoError(err)}err=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(err){throw new FS.ErrnoError(err)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}if(new_dir!==old_dir){err=FS.nodePermissions(old_dir,"w");if(err){throw new FS.ErrnoError(err)}}try{if(FS.trackingDelegate["willMovePath"]){FS.trackingDelegate["willMovePath"](old_path,new_path)}}catch(e){console.log("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: "+e.message)}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name)}catch(e){throw e}finally{FS.hashAddNode(old_node)}try{if(FS.trackingDelegate["onMovePath"])FS.trackingDelegate["onMovePath"](old_path,new_path)}catch(e){console.log("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: "+e.message)}}),rmdir:(function(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var err=FS.mayDelete(parent,name,true);if(err){throw new FS.ErrnoError(err)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}try{if(FS.trackingDelegate["willDeletePath"]){FS.trackingDelegate["willDeletePath"](path)}}catch(e){console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: "+e.message)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node);try{if(FS.trackingDelegate["onDeletePath"])FS.trackingDelegate["onDeletePath"](path)}catch(e){console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: "+e.message)}}),readdir:(function(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node.node_ops.readdir){throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR)}return node.node_ops.readdir(node)}),unlink:(function(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var err=FS.mayDelete(parent,name,false);if(err){throw new FS.ErrnoError(err)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}try{if(FS.trackingDelegate["willDeletePath"]){FS.trackingDelegate["willDeletePath"](path)}}catch(e){console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: "+e.message)}parent.node_ops.unlink(parent,name);FS.destroyNode(node);try{if(FS.trackingDelegate["onDeletePath"])FS.trackingDelegate["onDeletePath"](path)}catch(e){console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: "+e.message)}}),readlink:(function(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}if(!link.node_ops.readlink){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return PATH.resolve(FS.getPath(link.parent),link.node_ops.readlink(link))}),stat:(function(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;if(!node){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}if(!node.node_ops.getattr){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}return node.node_ops.getattr(node)}),lstat:(function(path){return FS.stat(path,true)}),chmod:(function(path,mode,dontFollow){var node;if(typeof path==="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}node.node_ops.setattr(node,{mode:mode&4095|node.mode&~4095,timestamp:Date.now()})}),lchmod:(function(path,mode){FS.chmod(path,mode,true)}),fchmod:(function(fd,mode){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}FS.chmod(stream.node,mode)}),chown:(function(path,uid,gid,dontFollow){var node;if(typeof path==="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}node.node_ops.setattr(node,{timestamp:Date.now()})}),lchown:(function(path,uid,gid){FS.chown(path,uid,gid,true)}),fchown:(function(fd,uid,gid){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}FS.chown(stream.node,uid,gid)}),truncate:(function(path,len){if(len<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var node;if(typeof path==="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(FS.isDir(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EISDIR)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var err=FS.nodePermissions(node,"w");if(err){throw new FS.ErrnoError(err)}node.node_ops.setattr(node,{size:len,timestamp:Date.now()})}),ftruncate:(function(fd,len){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}FS.truncate(stream.node,len)}),utime:(function(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;node.node_ops.setattr(node,{timestamp:Math.max(atime,mtime)})}),open:(function(path,flags,mode,fd_start,fd_end){if(path===""){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}flags=typeof flags==="string"?FS.modeStringToFlags(flags):flags;mode=typeof mode==="undefined"?438:mode;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;if(typeof path==="object"){node=path}else{path=PATH.normalize(path);try{var lookup=FS.lookupPath(path,{follow:!(flags&131072)});node=lookup.node}catch(e){}}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(ERRNO_CODES.EEXIST)}}else{node=FS.mknod(path,mode,0);created=true}}if(!node){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR)}if(!created){var err=FS.mayOpen(node,flags);if(err){throw new FS.ErrnoError(err)}}if(flags&512){FS.truncate(node,0)}flags&=~(128|512);var stream=FS.createStream({node:node,path:FS.getPath(node),flags:flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false},fd_start,fd_end);if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(Module["logReadFiles"]&&!(flags&1)){if(!FS.readFiles)FS.readFiles={};if(!(path in FS.readFiles)){FS.readFiles[path]=1;Module["printErr"]("read file: "+path)}}try{if(FS.trackingDelegate["onOpenFile"]){var trackingFlags=0;if((flags&2097155)!==1){trackingFlags|=FS.tracking.openFlags.READ}if((flags&2097155)!==0){trackingFlags|=FS.tracking.openFlags.WRITE}FS.trackingDelegate["onOpenFile"](path,trackingFlags)}}catch(e){console.log("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: "+e.message)}return stream}),close:(function(stream){if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}}),llseek:(function(stream,offset,whence){if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position}),read:(function(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EISDIR)}if(!stream.stream_ops.read){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var seeking=true;if(typeof position==="undefined"){position=stream.position;seeking=false}else if(!stream.seekable){throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead}),write:(function(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EISDIR)}if(!stream.stream_ops.write){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}if(stream.flags&1024){FS.llseek(stream,0,2)}var seeking=true;if(typeof position==="undefined"){position=stream.position;seeking=false}else if(!stream.seekable){throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;try{if(stream.path&&FS.trackingDelegate["onWriteToFile"])FS.trackingDelegate["onWriteToFile"](stream.path)}catch(e){console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: "+e.message)}return bytesWritten}),allocate:(function(stream,offset,length){if(offset<0||length<=0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}if(!FS.isFile(stream.node.mode)&&!FS.isDir(stream.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}if(!stream.stream_ops.allocate){throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP)}stream.stream_ops.allocate(stream,offset,length)}),mmap:(function(stream,buffer,offset,length,position,prot,flags){if((stream.flags&2097155)===1){throw new FS.ErrnoError(ERRNO_CODES.EACCES)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}return stream.stream_ops.mmap(stream,buffer,offset,length,position,prot,flags)}),msync:(function(stream,buffer,offset,length,mmapFlags){if(!stream||!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)}),munmap:(function(stream){return 0}),ioctl:(function(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(ERRNO_CODES.ENOTTY)}return stream.stream_ops.ioctl(stream,cmd,arg)}),readFile:(function(path,opts){opts=opts||{};opts.flags=opts.flags||"r";opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){throw new Error('Invalid encoding type "'+opts.encoding+'"')}var ret;var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){ret=UTF8ArrayToString(buf,0)}else if(opts.encoding==="binary"){ret=buf}FS.close(stream);return ret}),writeFile:(function(path,data,opts){opts=opts||{};opts.flags=opts.flags||"w";opts.encoding=opts.encoding||"utf8";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){throw new Error('Invalid encoding type "'+opts.encoding+'"')}var stream=FS.open(path,opts.flags,opts.mode);if(opts.encoding==="utf8"){var buf=new Uint8Array(lengthBytesUTF8(data)+1);var actualNumBytes=stringToUTF8Array(data,buf,0,buf.length);FS.write(stream,buf,0,actualNumBytes,0,opts.canOwn)}else if(opts.encoding==="binary"){FS.write(stream,data,0,data.length,0,opts.canOwn)}FS.close(stream)}),cwd:(function(){return FS.currentPath}),chdir:(function(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR)}var err=FS.nodePermissions(lookup.node,"x");if(err){throw new FS.ErrnoError(err)}FS.currentPath=lookup.path}),createDefaultDirectories:(function(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")}),createDefaultDevices:(function(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:(function(){return 0}),write:(function(stream,buffer,offset,length,pos){return length})});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var random_device;if(typeof crypto!=="undefined"){var randomBuffer=new Uint8Array(1);random_device=(function(){crypto.getRandomValues(randomBuffer);return randomBuffer[0]})}else if(ENVIRONMENT_IS_NODE){random_device=(function(){return __webpack_require__(26).randomBytes(1)[0]})}else{random_device=(function(){return Math.random()*256|0})}FS.createDevice("/dev","random",random_device);FS.createDevice("/dev","urandom",random_device);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")}),createSpecialDirectories:(function(){FS.mkdir("/proc");FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount:(function(){var node=FS.createNode("/proc/self","fd",16384|511,73);node.node_ops={lookup:(function(parent,name){var fd=+name;var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(ERRNO_CODES.EBADF);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:(function(){return stream.path})}};ret.parent=ret;return ret})};return node})},{},"/proc/self/fd")}),createStandardStreams:(function(){if(Module["stdin"]){FS.createDevice("/dev","stdin",Module["stdin"])}else{FS.symlink("/dev/tty","/dev/stdin")}if(Module["stdout"]){FS.createDevice("/dev","stdout",null,Module["stdout"])}else{FS.symlink("/dev/tty","/dev/stdout")}if(Module["stderr"]){FS.createDevice("/dev","stderr",null,Module["stderr"])}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin","r");assert(stdin.fd===0,"invalid handle for stdin ("+stdin.fd+")");var stdout=FS.open("/dev/stdout","w");assert(stdout.fd===1,"invalid handle for stdout ("+stdout.fd+")");var stderr=FS.open("/dev/stderr","w");assert(stderr.fd===2,"invalid handle for stderr ("+stderr.fd+")")}),ensureErrnoError:(function(){if(FS.ErrnoError)return;FS.ErrnoError=function ErrnoError(errno,node){this.node=node;this.setErrno=(function(errno){this.errno=errno;for(var key in ERRNO_CODES){if(ERRNO_CODES[key]===errno){this.code=key;break}}});this.setErrno(errno);this.message=ERRNO_MESSAGES[errno]};FS.ErrnoError.prototype=new Error;FS.ErrnoError.prototype.constructor=FS.ErrnoError;[ERRNO_CODES.ENOENT].forEach((function(code){FS.genericErrors[code]=new FS.ErrnoError(code);FS.genericErrors[code].stack="<generic error, no stack>"}))}),staticInit:(function(){FS.ensureErrnoError();FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={"MEMFS":MEMFS,"IDBFS":IDBFS,"NODEFS":NODEFS,"WORKERFS":WORKERFS}}),init:(function(input,output,error){assert(!FS.init.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");FS.init.initialized=true;FS.ensureErrnoError();Module["stdin"]=input||Module["stdin"];Module["stdout"]=output||Module["stdout"];Module["stderr"]=error||Module["stderr"];FS.createStandardStreams()}),quit:(function(){FS.init.initialized=false;var fflush=Module["_fflush"];if(fflush)fflush(0);for(var i=0;i<FS.streams.length;i++){var stream=FS.streams[i];if(!stream){continue}FS.close(stream)}}),getMode:(function(canRead,canWrite){var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode}),joinPath:(function(parts,forceRelative){var path=PATH.join.apply(null,parts);if(forceRelative&&path[0]=="/")path=path.substr(1);return path}),absolutePath:(function(relative,base){return PATH.resolve(base,relative)}),standardizePath:(function(path){return PATH.normalize(path)}),findObject:(function(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(ret.exists){return ret.object}else{___setErrNo(ret.error);return null}}),analyzePath:(function(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret}),createFolder:(function(parent,name,canRead,canWrite){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(canRead,canWrite);return FS.mkdir(path,mode)}),createPath:(function(parent,path,canRead,canWrite){parent=typeof parent==="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){}parent=current}return current}),createFile:(function(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(canRead,canWrite);return FS.create(path,mode)}),createDataFile:(function(parent,name,data,canRead,canWrite,canOwn){var path=name?PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name):parent;var mode=FS.getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data==="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,"w");FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}return node}),createDevice:(function(parent,name,input,output){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(!!input,!!output);if(!FS.createDevice.major)FS.createDevice.major=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open:(function(stream){stream.seekable=false}),close:(function(stream){if(output&&output.buffer&&output.buffer.length){output(10)}}),read:(function(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EIO)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead}),write:(function(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EIO)}}if(length){stream.node.timestamp=Date.now()}return i})});return FS.mkdev(path,mode,dev)}),createLink:(function(parent,name,target,canRead,canWrite){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);return FS.symlink(target,path)}),forceLoadFile:(function(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;var success=true;if(typeof XMLHttpRequest!=="undefined"){throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else if(Module["read"]){try{obj.contents=intArrayFromString(Module["read"](obj.url),true);obj.usedBytes=obj.contents.length}catch(e){success=false}}else{throw new Error("Cannot load without read() or XMLHttpRequest.")}if(!success)___setErrNo(ERRNO_CODES.EIO);return success}),createLazyFile:(function(parent,name,url,canRead,canWrite){function LazyUint8Array(){this.lengthKnown=false;this.chunks=[]}LazyUint8Array.prototype.get=function LazyUint8Array_get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]};LazyUint8Array.prototype.setDataGetter=function LazyUint8Array_setDataGetter(getter){this.getter=getter};LazyUint8Array.prototype.cacheLength=function LazyUint8Array_cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(function(from,to){if(from>to)throw new Error("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)throw new Error("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);if(typeof Uint8Array!="undefined")xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}else{return intArrayFromString(xhr.responseText||"",true)}});var lazyArray=this;lazyArray.setDataGetter((function(chunkNum){var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]==="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]==="undefined")throw new Error("doXHR failed!");return lazyArray.chunks[chunkNum]}));if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;console.log("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true};if(typeof XMLHttpRequest!=="undefined"){if(!ENVIRONMENT_IS_WORKER)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var lazyArray=new LazyUint8Array;Object.defineProperties(lazyArray,{length:{get:(function(){if(!this.lengthKnown){this.cacheLength()}return this._length})},chunkSize:{get:(function(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize})}});var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url:url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:(function(){return this.contents.length})}});var stream_ops={};var keys=Object.keys(node.stream_ops);keys.forEach((function(key){var fn=node.stream_ops[key];stream_ops[key]=function forceLoadLazyFile(){if(!FS.forceLoadFile(node)){throw new FS.ErrnoError(ERRNO_CODES.EIO)}return fn.apply(null,arguments)}}));stream_ops.read=function stream_ops_read(stream,buffer,offset,length,position){if(!FS.forceLoadFile(node)){throw new FS.ErrnoError(ERRNO_CODES.EIO)}var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);assert(size>=0);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size};node.stream_ops=stream_ops;return node}),createPreloadedFile:(function(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish){Browser.init();var fullname=name?PATH.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency("cp "+fullname);function processData(byteArray){function finish(byteArray){if(preFinish)preFinish();if(!dontCreateFile){FS.createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}if(onload)onload();removeRunDependency(dep)}var handled=false;Module["preloadPlugins"].forEach((function(plugin){if(handled)return;if(plugin["canHandle"](fullname)){plugin["handle"](byteArray,fullname,finish,(function(){if(onerror)onerror();removeRunDependency(dep)}));handled=true}}));if(!handled)finish(byteArray)}addRunDependency(dep);if(typeof url=="string"){Browser.asyncLoad(url,(function(byteArray){processData(byteArray)}),onerror)}else{processData(url)}}),indexedDB:(function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB}),DB_NAME:(function(){return"EM_FS_"+window.location.pathname}),DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:(function(paths,onload,onerror){onload=onload||(function(){});onerror=onerror||(function(){});var indexedDB=FS.indexedDB();try{var openRequest=indexedDB.open(FS.DB_NAME(),FS.DB_VERSION)}catch(e){return onerror(e)}openRequest.onupgradeneeded=function openRequest_onupgradeneeded(){console.log("creating db");var db=openRequest.result;db.createObjectStore(FS.DB_STORE_NAME)};openRequest.onsuccess=function openRequest_onsuccess(){var db=openRequest.result;var transaction=db.transaction([FS.DB_STORE_NAME],"readwrite");var files=transaction.objectStore(FS.DB_STORE_NAME);var ok=0,fail=0,total=paths.length;function finish(){if(fail==0)onload();else onerror()}paths.forEach((function(path){var putRequest=files.put(FS.analyzePath(path).object.contents,path);putRequest.onsuccess=function putRequest_onsuccess(){ok++;if(ok+fail==total)finish()};putRequest.onerror=function putRequest_onerror(){fail++;if(ok+fail==total)finish()}}));transaction.onerror=onerror};openRequest.onerror=onerror}),loadFilesFromDB:(function(paths,onload,onerror){onload=onload||(function(){});onerror=onerror||(function(){});var indexedDB=FS.indexedDB();try{var openRequest=indexedDB.open(FS.DB_NAME(),FS.DB_VERSION)}catch(e){return onerror(e)}openRequest.onupgradeneeded=onerror;openRequest.onsuccess=function openRequest_onsuccess(){var db=openRequest.result;try{var transaction=db.transaction([FS.DB_STORE_NAME],"readonly")}catch(e){onerror(e);return}var files=transaction.objectStore(FS.DB_STORE_NAME);var ok=0,fail=0,total=paths.length;function finish(){if(fail==0)onload();else onerror()}paths.forEach((function(path){var getRequest=files.get(path);getRequest.onsuccess=function getRequest_onsuccess(){if(FS.analyzePath(path).exists){FS.unlink(path)}FS.createDataFile(PATH.dirname(path),PATH.basename(path),getRequest.result,true,true,true);ok++;if(ok+fail==total)finish()};getRequest.onerror=function getRequest_onerror(){fail++;if(ok+fail==total)finish()}}));transaction.onerror=onerror};openRequest.onerror=onerror})};var SYSCALLS={DEFAULT_POLLMASK:5,mappings:{},umask:511,calculateAt:(function(dirfd,path){if(path[0]!=="/"){var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=FS.getStream(dirfd);if(!dirstream)throw new FS.ErrnoError(ERRNO_CODES.EBADF);dir=dirstream.path}path=PATH.join2(dir,path)}return path}),doStat:(function(func,path,buf){try{var stat=func(path)}catch(e){if(e&&e.node&&PATH.normalize(path)!==PATH.normalize(FS.getPath(e.node))){return-ERRNO_CODES.ENOTDIR}throw e}HEAP32[buf>>2]=stat.dev;HEAP32[buf+4>>2]=0;HEAP32[buf+8>>2]=stat.ino;HEAP32[buf+12>>2]=stat.mode;HEAP32[buf+16>>2]=stat.nlink;HEAP32[buf+20>>2]=stat.uid;HEAP32[buf+24>>2]=stat.gid;HEAP32[buf+28>>2]=stat.rdev;HEAP32[buf+32>>2]=0;HEAP32[buf+36>>2]=stat.size;HEAP32[buf+40>>2]=4096;HEAP32[buf+44>>2]=stat.blocks;HEAP32[buf+48>>2]=stat.atime.getTime()/1e3|0;HEAP32[buf+52>>2]=0;HEAP32[buf+56>>2]=stat.mtime.getTime()/1e3|0;HEAP32[buf+60>>2]=0;HEAP32[buf+64>>2]=stat.ctime.getTime()/1e3|0;HEAP32[buf+68>>2]=0;HEAP32[buf+72>>2]=stat.ino;return 0}),doMsync:(function(addr,stream,len,flags){var buffer=new Uint8Array(HEAPU8.subarray(addr,addr+len));FS.msync(stream,buffer,0,len,flags)}),doMkdir:(function(path,mode){path=PATH.normalize(path);if(path[path.length-1]==="/")path=path.substr(0,path.length-1);FS.mkdir(path,mode,0);return 0}),doMknod:(function(path,mode,dev){switch(mode&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-ERRNO_CODES.EINVAL}FS.mknod(path,mode,dev);return 0}),doReadlink:(function(path,buf,bufsize){if(bufsize<=0)return-ERRNO_CODES.EINVAL;var ret=FS.readlink(path);var len=Math.min(bufsize,lengthBytesUTF8(ret));var endChar=HEAP8[buf+len];stringToUTF8(ret,buf,bufsize+1);HEAP8[buf+len]=endChar;return len}),doAccess:(function(path,amode){if(amode&~7){return-ERRNO_CODES.EINVAL}var node;var lookup=FS.lookupPath(path,{follow:true});node=lookup.node;var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return-ERRNO_CODES.EACCES}return 0}),doDup:(function(path,flags,suggestFD){var suggest=FS.getStream(suggestFD);if(suggest)FS.close(suggest);return FS.open(path,flags,0,suggestFD,suggestFD).fd}),doReadv:(function(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break}return ret}),doWritev:(function(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr}return ret}),varargs:0,get:(function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret}),getStr:(function(){var ret=Pointer_stringify(SYSCALLS.get());return ret}),getStreamFromFD:(function(){var stream=FS.getStream(SYSCALLS.get());if(!stream)throw new FS.ErrnoError(ERRNO_CODES.EBADF);return stream}),getSocketFromFD:(function(){var socket=SOCKFS.getSocket(SYSCALLS.get());if(!socket)throw new FS.ErrnoError(ERRNO_CODES.EBADF);return socket}),getSocketAddress:(function(allowNull){var addrp=SYSCALLS.get(),addrlen=SYSCALLS.get();if(allowNull&&addrp===0)return null;var info=__read_sockaddr(addrp,addrlen);if(info.errno)throw new FS.ErrnoError(info.errno);info.addr=DNS.lookup_addr(info.addr)||info.addr;return info}),get64:(function(){var low=SYSCALLS.get(),high=SYSCALLS.get();if(low>=0)assert(high===0);else assert(high===-1);return low}),getZero:(function(){assert(SYSCALLS.get()===0)})};function ___syscall54(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),op=SYSCALLS.get();switch(op){case 21505:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;return 0};case 21506:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;return 0};case 21519:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;var argp=SYSCALLS.get();HEAP32[argp>>2]=0;return 0};case 21520:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;return-ERRNO_CODES.EINVAL};case 21531:{var argp=SYSCALLS.get();return FS.ioctl(stream,op,argp)};case 21523:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;return 0};default:abort("bad ioctl syscall "+op)}}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function __Unwind_GetIPInfo(){abort("Unwind_GetIPInfo")}function _llvm_trap(){abort("trap!")}function _pthread_cond_init(){return 0}function __emscripten_traverse_stack(args){if(!args||!args.callee||!args.callee.name){return[null,"",""]}var funstr=args.callee.toString();var funcname=args.callee.name;var str="(";var first=true;for(i in args){var a=args[i];if(!first){str+=", "}first=false;if(typeof a==="number"||typeof a==="string"){str+=a}else{str+="("+typeof a+")"}}str+=")";var caller=args.callee.caller;args=caller?caller.arguments:[];if(first)str="";return[args,funcname,str]}function _emscripten_get_callstack_js(flags){var callstack=jsStackTrace();var iThisFunc=callstack.lastIndexOf("_emscripten_log");var iThisFunc2=callstack.lastIndexOf("_emscripten_get_callstack");var iNextLine=callstack.indexOf("\n",Math.max(iThisFunc,iThisFunc2))+1;callstack=callstack.slice(iNextLine);if(flags&8&&typeof emscripten_source_map==="undefined"){Runtime.warnOnce('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.');flags^=8;flags|=16}var stack_args=null;if(flags&128){var stack_args=__emscripten_traverse_stack(arguments);while(stack_args[1].indexOf("_emscripten_")>=0)stack_args=__emscripten_traverse_stack(stack_args[0])}lines=callstack.split("\n");callstack="";var newFirefoxRe=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");var firefoxRe=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");var chromeRe=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(l in lines){var line=lines[l];var jsSymbolName="";var file="";var lineno=0;var column=0;var parts=chromeRe.exec(line);if(parts&&parts.length==5){jsSymbolName=parts[1];file=parts[2];lineno=parts[3];column=parts[4]}else{parts=newFirefoxRe.exec(line);if(!parts)parts=firefoxRe.exec(line);if(parts&&parts.length>=4){jsSymbolName=parts[1];file=parts[2];lineno=parts[3];column=parts[4]|0}else{callstack+=line+"\n";continue}}var cSymbolName=flags&32?demangle(jsSymbolName):jsSymbolName;if(!cSymbolName){cSymbolName=jsSymbolName}var haveSourceMap=false;if(flags&8){var orig=emscripten_source_map.originalPositionFor({line:lineno,column:column});haveSourceMap=orig&&orig.source;if(haveSourceMap){if(flags&64){orig.source=orig.source.substring(orig.source.replace(/\\/g,"/").lastIndexOf("/")+1)}callstack+="    at "+cSymbolName+" ("+orig.source+":"+orig.line+":"+orig.column+")\n"}}if(flags&16||!haveSourceMap){if(flags&64){file=file.substring(file.replace(/\\/g,"/").lastIndexOf("/")+1)}callstack+=(haveSourceMap?"     = "+jsSymbolName:"    at "+cSymbolName)+" ("+file+":"+lineno+":"+column+")\n"}if(flags&128&&stack_args[0]){if(stack_args[1]==jsSymbolName&&stack_args[2].length>0){callstack=callstack.replace(/\s+$/,"");callstack+=" with values: "+stack_args[1]+stack_args[2]+"\n"}stack_args=__emscripten_traverse_stack(stack_args[0])}}callstack=callstack.replace(/\s+$/,"");return callstack}function __Unwind_Backtrace(func,arg){var trace=_emscripten_get_callstack_js();var parts=trace.split("\n");for(var i=0;i<parts.length;i++){var ret=Module["dynCall_iii"](func,0,arg);if(ret!==0)return}}function _pthread_condattr_setclock(){return 0}var _environ=STATICTOP;STATICTOP+=16;function ___buildEnvironment(env){var MAX_ENV_VALUES=64;var TOTAL_ENV_SIZE=1024;var poolPtr;var envPtr;if(!___buildEnvironment.called){___buildEnvironment.called=true;ENV["USER"]=ENV["LOGNAME"]="web_user";ENV["PATH"]="/";ENV["PWD"]="/";ENV["HOME"]="/home/web_user";ENV["LANG"]="C";ENV["_"]=Module["thisProgram"];poolPtr=allocate(TOTAL_ENV_SIZE,"i8",ALLOC_STATIC);envPtr=allocate(MAX_ENV_VALUES*4,"i8*",ALLOC_STATIC);HEAP32[envPtr>>2]=poolPtr;HEAP32[_environ>>2]=envPtr}else{envPtr=HEAP32[_environ>>2];poolPtr=HEAP32[envPtr>>2]}var strings=[];var totalSize=0;for(var key in env){if(typeof env[key]==="string"){var line=key+"="+env[key];strings.push(line);totalSize+=line.length}}if(totalSize>TOTAL_ENV_SIZE){throw new Error("Environment size exceeded TOTAL_ENV_SIZE!")}var ptrSize=4;for(var i=0;i<strings.length;i++){var line=strings[i];writeAsciiToMemory(line,poolPtr);HEAP32[envPtr+i*ptrSize>>2]=poolPtr;poolPtr+=line.length+1}HEAP32[envPtr+strings.length*ptrSize>>2]=0}var ENV={};function _getenv(name){if(name===0)return 0;name=Pointer_stringify(name);if(!ENV.hasOwnProperty(name))return 0;if(_getenv.ret)_free(_getenv.ret);_getenv.ret=allocate(intArrayFromString(ENV[name]),"i8",ALLOC_NORMAL);return _getenv.ret}function _pthread_rwlock_rdlock(){return 0}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}function ___syscall6(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD();FS.close(stream);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function _dladdr(addr,info){var fname=allocate(intArrayFromString(Module["thisProgram"]||"./this.program"),"i8",ALLOC_NORMAL);HEAP32[addr>>2]=fname;HEAP32[addr+4>>2]=0;HEAP32[addr+8>>2]=0;HEAP32[addr+12>>2]=0;return 1}function ___gxx_personality_v0(){}function _pthread_mutexattr_init(){}function ___syscall4(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),buf=SYSCALLS.get(),count=SYSCALLS.get();return FS.write(stream,HEAP8,buf,count)}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function _pthread_condattr_init(){return 0}function ___cxa_find_matching_catch_2(){return ___cxa_find_matching_catch.apply(null,arguments)}function ___syscall140(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),offset_high=SYSCALLS.get(),offset_low=SYSCALLS.get(),result=SYSCALLS.get(),whence=SYSCALLS.get();var offset=offset_low;FS.llseek(stream,offset,whence);HEAP32[result>>2]=stream.position;if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall146(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();return SYSCALLS.doWritev(stream,iov,iovcnt)}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function _pthread_rwlock_unlock(){return 0}FS.staticInit();__ATINIT__.unshift((function(){if(!Module["noFSInit"]&&!FS.init.initialized)FS.init()}));__ATMAIN__.push((function(){FS.ignorePermissions=false}));__ATEXIT__.push((function(){FS.quit()}));Module["FS_createFolder"]=FS.createFolder;Module["FS_createPath"]=FS.createPath;Module["FS_createDataFile"]=FS.createDataFile;Module["FS_createPreloadedFile"]=FS.createPreloadedFile;Module["FS_createLazyFile"]=FS.createLazyFile;Module["FS_createLink"]=FS.createLink;Module["FS_createDevice"]=FS.createDevice;Module["FS_unlink"]=FS.unlink;__ATINIT__.unshift((function(){TTY.init()}));__ATEXIT__.push((function(){TTY.shutdown()}));if(ENVIRONMENT_IS_NODE){var fs=__webpack_require__(24);var NODEJS_PATH=__webpack_require__(35);NODEFS.staticInit()}___buildEnvironment(ENV);DYNAMICTOP_PTR=allocate(1,"i32",ALLOC_STATIC);STACK_BASE=STACKTOP=Runtime.alignMemory(STATICTOP);STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=Runtime.alignMemory(STACK_MAX);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;staticSealed=true;function invoke_iiii(index,a1,a2,a3){try{return Module["dynCall_iiii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){try{Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiii(index,a1,a2,a3,a4,a5){try{Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_i(index){try{return Module["dynCall_i"](index)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_vi(index,a1){try{Module["dynCall_vi"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_vii(index,a1,a2){try{Module["dynCall_vii"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_ii(index,a1){try{return Module["dynCall_ii"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viii(index,a1,a2,a3){try{Module["dynCall_viii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){try{Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_v(index){try{Module["dynCall_v"](index)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9){try{Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6){try{Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_iii(index,a1,a2){try{return Module["dynCall_iii"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiii(index,a1,a2,a3,a4){try{Module["dynCall_viiii"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}Module.asmGlobalArg={"Math":Math,"Int8Array":Int8Array,"Int16Array":Int16Array,"Int32Array":Int32Array,"Uint8Array":Uint8Array,"Uint16Array":Uint16Array,"Uint32Array":Uint32Array,"Float32Array":Float32Array,"Float64Array":Float64Array,"NaN":NaN,"Infinity":Infinity};Module.asmLibraryArg={"abort":abort,"assert":assert,"enlargeMemory":enlargeMemory,"getTotalMemory":getTotalMemory,"abortOnCannotGrowMemory":abortOnCannotGrowMemory,"invoke_iiii":invoke_iiii,"invoke_viiiiiiiiii":invoke_viiiiiiiiii,"invoke_viiiii":invoke_viiiii,"invoke_i":invoke_i,"invoke_vi":invoke_vi,"invoke_vii":invoke_vii,"invoke_ii":invoke_ii,"invoke_viii":invoke_viii,"invoke_viiiiiiii":invoke_viiiiiiii,"invoke_v":invoke_v,"invoke_viiiiiiiii":invoke_viiiiiiiii,"invoke_viiiiii":invoke_viiiiii,"invoke_iii":invoke_iii,"invoke_viiii":invoke_viiii,"_pthread_key_create":_pthread_key_create,"__Unwind_FindEnclosingFunction":__Unwind_FindEnclosingFunction,"_emscripten_get_callstack_js":_emscripten_get_callstack_js,"___gxx_personality_v0":___gxx_personality_v0,"_pthread_rwlock_unlock":_pthread_rwlock_unlock,"___cxa_find_matching_catch_2":___cxa_find_matching_catch_2,"___cxa_find_matching_catch":___cxa_find_matching_catch,"___buildEnvironment":___buildEnvironment,"_pthread_cond_init":_pthread_cond_init,"__Unwind_GetIPInfo":__Unwind_GetIPInfo,"_pthread_mutexattr_destroy":_pthread_mutexattr_destroy,"___setErrNo":___setErrNo,"_pthread_key_delete":_pthread_key_delete,"___cxa_allocate_exception":___cxa_allocate_exception,"_pthread_rwlock_rdlock":_pthread_rwlock_rdlock,"___resumeException":___resumeException,"__ZSt18uncaught_exceptionv":__ZSt18uncaught_exceptionv,"_pthread_condattr_setclock":_pthread_condattr_setclock,"_pthread_getspecific":_pthread_getspecific,"_emscripten_memcpy_big":_emscripten_memcpy_big,"__emscripten_traverse_stack":__emscripten_traverse_stack,"_pthread_mutex_destroy":_pthread_mutex_destroy,"_abort":_abort,"_pthread_condattr_init":_pthread_condattr_init,"_pthread_mutexattr_settype":_pthread_mutexattr_settype,"_getenv":_getenv,"_pthread_condattr_destroy":_pthread_condattr_destroy,"___syscall54":___syscall54,"___unlock":___unlock,"___syscall140":___syscall140,"_pthread_mutexattr_init":_pthread_mutexattr_init,"_pthread_setspecific":_pthread_setspecific,"_dladdr":_dladdr,"___cxa_throw":___cxa_throw,"___lock":___lock,"___syscall6":___syscall6,"___syscall4":___syscall4,"_pthread_cond_destroy":_pthread_cond_destroy,"_llvm_trap":_llvm_trap,"_pthread_mutex_init":_pthread_mutex_init,"__Unwind_Backtrace":__Unwind_Backtrace,"___syscall146":___syscall146,"DYNAMICTOP_PTR":DYNAMICTOP_PTR,"tempDoublePtr":tempDoublePtr,"ABORT":ABORT,"STACKTOP":STACKTOP,"STACK_MAX":STACK_MAX,"cttz_i8":cttz_i8};// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.DYNAMICTOP_PTR|0;var j=env.tempDoublePtr|0;var k=env.ABORT|0;var l=env.STACKTOP|0;var m=env.STACK_MAX|0;var n=env.cttz_i8|0;var o=0;var p=0;var q=0;var r=0;var s=global.NaN,t=global.Infinity;var u=0,v=0,w=0,x=0,y=0.0;var z=0;var A=global.Math.floor;var B=global.Math.abs;var C=global.Math.sqrt;var D=global.Math.pow;var E=global.Math.cos;var F=global.Math.sin;var G=global.Math.tan;var H=global.Math.acos;var I=global.Math.asin;var J=global.Math.atan;var K=global.Math.atan2;var L=global.Math.exp;var M=global.Math.log;var N=global.Math.ceil;var O=global.Math.imul;var P=global.Math.min;var Q=global.Math.max;var R=global.Math.clz32;var S=env.abort;var T=env.assert;var U=env.enlargeMemory;var V=env.getTotalMemory;var W=env.abortOnCannotGrowMemory;var X=env.invoke_iiii;var Y=env.invoke_viiiiiiiiii;var Z=env.invoke_viiiii;var _=env.invoke_i;var $=env.invoke_vi;var aa=env.invoke_vii;var ba=env.invoke_ii;var ca=env.invoke_viii;var da=env.invoke_viiiiiiii;var ea=env.invoke_v;var fa=env.invoke_viiiiiiiii;var ga=env.invoke_viiiiii;var ha=env.invoke_iii;var ia=env.invoke_viiii;var ja=env._pthread_key_create;var ka=env.__Unwind_FindEnclosingFunction;var la=env._emscripten_get_callstack_js;var ma=env.___gxx_personality_v0;var na=env._pthread_rwlock_unlock;var oa=env.___cxa_find_matching_catch_2;var pa=env.___cxa_find_matching_catch;var qa=env.___buildEnvironment;var ra=env._pthread_cond_init;var sa=env.__Unwind_GetIPInfo;var ta=env._pthread_mutexattr_destroy;var ua=env.___setErrNo;var va=env._pthread_key_delete;var wa=env.___cxa_allocate_exception;var xa=env._pthread_rwlock_rdlock;var ya=env.___resumeException;var za=env.__ZSt18uncaught_exceptionv;var Aa=env._pthread_condattr_setclock;var Ba=env._pthread_getspecific;var Ca=env._emscripten_memcpy_big;var Da=env.__emscripten_traverse_stack;var Ea=env._pthread_mutex_destroy;var Fa=env._abort;var Ga=env._pthread_condattr_init;var Ha=env._pthread_mutexattr_settype;var Ia=env._getenv;var Ja=env._pthread_condattr_destroy;var Ka=env.___syscall54;var La=env.___unlock;var Ma=env.___syscall140;var Na=env._pthread_mutexattr_init;var Oa=env._pthread_setspecific;var Pa=env._dladdr;var Qa=env.___cxa_throw;var Ra=env.___lock;var Sa=env.___syscall6;var Ta=env.___syscall4;var Ua=env._pthread_cond_destroy;var Va=env._llvm_trap;var Wa=env._pthread_mutex_init;var Xa=env.__Unwind_Backtrace;var Ya=env.___syscall146;var Za=0.0;
// EMSCRIPTEN_START_FUNCS
function He(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;n=l;l=l+16|0;m=n;k=a+8|0;f=c[k>>2]|0;j=a+4|0;g=c[j>>2]|0;if((g-f|0)>>>0>=d>>>0){m=f;a=c[a>>2]|0;j=m+d|0;c[k>>2]=j;m=a+m|0;Il(m|0,b|0,d|0)|0;l=n;return}e=f+d|0;if(e>>>0<f>>>0)Wj(18554,17);i=g<<1;i=e>>>0>=i>>>0?e:i;if((i|0)<0)xj(3584);if(!g){h=tb(i,1,m)|0;e=0;f=0;g=(h|0)==0&1}else{h=wb(c[a>>2]|0,g,1,i,1,m)|0;o=(h|0)==0;f=m+4|0;e=c[f>>2]|0;f=c[f+4>>2]|0;g=o&1;h=o?c[m>>2]|0:h}if(g|0){c[m>>2]=h;o=m+4|0;c[o>>2]=e;c[o+4>>2]=f;Be(m)}c[a>>2]=h;c[j>>2]=i;o=c[k>>2]|0;m=h;a=o+d|0;c[k>>2]=a;o=m+o|0;Il(o|0,b|0,d|0)|0;l=n;return}function Ie(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b,1);return}function Je(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;n=l;l=l+16|0;m=n;k=a+8|0;f=c[k>>2]|0;j=a+4|0;g=c[j>>2]|0;if((g-f|0)>>>0>=d>>>0){m=f;a=c[a>>2]|0;j=m+d|0;c[k>>2]=j;m=a+m|0;Il(m|0,b|0,d|0)|0;l=n;return}e=f+d|0;if(e>>>0<f>>>0)Wj(18554,17);i=g<<1;i=e>>>0>=i>>>0?e:i;if((i|0)<0)xj(3584);if(!g){h=tb(i,1,m)|0;e=0;f=0;g=(h|0)==0&1}else{h=wb(c[a>>2]|0,g,1,i,1,m)|0;o=(h|0)==0;f=m+4|0;e=c[f>>2]|0;f=c[f+4>>2]|0;g=o&1;h=o?c[m>>2]|0:h}if(g|0){c[m>>2]=h;o=m+4|0;c[o>>2]=e;c[o+4>>2]=f;Be(m)}c[a>>2]=h;c[j>>2]=i;o=c[k>>2]|0;m=h;a=o+d|0;c[k>>2]=a;o=m+o|0;Il(o|0,b|0,d|0)|0;l=n;return}function Ke(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0;q=l;l=l+80|0;m=q+48|0;n=q+32|0;k=q+16|0;f=q;e=c[d>>2]|0;switch(e&3){case 1:{c[k>>2]=d;c[n>>2]=13756;if((e|0)!=1){c[f>>2]=k;c[f+4>>2]=55;c[f+8>>2]=n;c[f+12>>2]=55;c[m>>2]=3608;c[m+4>>2]=3;c[m+8>>2]=0;c[m+16>>2]=f;c[m+20>>2]=2;uj(m,3632)}h=c[d+8>>2]|0;i=d+12|0;j=c[i>>2]|0;e=c[d+4>>2]|0;if((e|0)<0)xj(3584);if(e){f=tb(e,1,m)|0;if(!f)Be(m);else g=f}else g=1;c[k>>2]=g;c[k+4>>2]=e;c[k+8>>2]=0;a:do if(!j)p=28;else{f=0;while(1){if(f>>>0>=j>>>0)break;o=0;g=ba(13,a[h+f>>0]|0)|0;n=o;o=0;if(n&1)break a;if(e>>>0<=5){o=0;ca(14,k|0,g|0,e|0);n=o;o=0;if(n&1)break a;else e=0}else{o=0;ca(14,k|0,g|0,5);n=o;o=0;if(n&1)break a;e=e+-5|0}f=f+1|0;if(f>>>0>=(c[i>>2]|0)>>>0){p=28;break a}}o=0;ca(11,3728,f|0,j|0);o=0}while(0);do if((p|0)==28){if(e|0){o=0;$(30,3704);o=0;break};c[b>>2]=c[k>>2];c[b+4>>2]=c[k+4>>2];c[b+8>>2]=c[k+8>>2];l=q;return}while(0);q=oa()|0;Ie(k);ya(q|0)}case 2:{c[k>>2]=d;c[n>>2]=13800;if((e|0)!=2){c[f>>2]=k;c[f+4>>2]=55;c[f+8>>2]=n;c[f+12>>2]=55;c[m>>2]=3608;c[m+4>>2]=3;c[m+8>>2]=0;c[m+16>>2]=f;c[m+20>>2]=2;uj(m,3648)}g=c[d+8>>2]|0;e=c[d+4>>2]|0;if((e|0)<0)xj(3584);if(e){f=tb(e,1,m)|0;if(!f)Be(m);else h=f}else h=1;c[n>>2]=h;c[n+4>>2]=e;c[n+8>>2]=0;o=0;ca(14,n|0,g|0,e|0);p=o;o=0;if(p&1){q=oa()|0;Ie(n);ya(q|0)};c[b>>2]=c[n>>2];c[b+4>>2]=c[n+4>>2];c[b+8>>2]=c[n+8>>2];l=q;return}default:{c[k>>2]=d;c[n>>2]=13820;if((e|0)!=3){c[f>>2]=k;c[f+4>>2]=55;c[f+8>>2]=n;c[f+12>>2]=55;c[m>>2]=3608;c[m+4>>2]=3;c[m+8>>2]=0;c[m+16>>2]=f;c[m+20>>2]=2;uj(m,3664)}e=c[d+8>>2]|0;f=c[d+4>>2]|0;g=f*3|0;if((g|0)<0)xj(3584);if(g){h=tb(g,1,m)|0;if(!h)Be(m);else i=h}else i=1;c[n>>2]=i;c[n+4>>2]=g;c[n+8>>2]=0;k=e+f|0;while(1){if((e|0)==(k|0)){p=52;break}f=e+1|0;h=f;d=a[e>>0]|0;if(d<<24>>24<=-1){j=d&31;if((f|0)==(k|0)){i=k;f=0;e=h}else{e=e+2|0;i=e;f=a[f>>0]&63}g=f&255;f=g|j<<6;if((d&255)>223){if((i|0)==(k|0)){h=k;f=0}else{e=i+1|0;h=e;f=a[i>>0]&63}g=f&255|g<<6;f=g|j<<12;if((d&255)>239){if((h|0)==(k|0))f=0;else{f=a[h>>0]&63;e=h+1|0}g=g<<6|j<<18&1835008|f&255}else g=f}else g=f}else{g=d&255;e=h}f=0;while(1){if(f>>>0>=27){f=21397;break}if((c[13856+(f<<2)>>2]|0)==(g|0)){p=56;break}else f=f+1|0}if((p|0)==56){p=0;f=21397+(f*3|0)|0}o=0;ca(14,n|0,f|0,3);m=o;o=0;if(m&1){p=58;break}}if((p|0)==52){c[b>>2]=c[n>>2];c[b+4>>2]=c[n+4>>2];c[b+8>>2]=c[n+8>>2];l=q;return}else if((p|0)==58){q=oa()|0;Ie(n);ya(q|0)}}}}function Le(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;v=l;l=l+64|0;u=v+32|0;s=v+16|0;t=v;r=v+52|0;switch(c[e>>2]&3){case 1:{Ke(s,e);j=c[s+8>>2]|0;m=(j>>>0)/3|0;a:do if(j>>>0>2){k=c[s>>2]|0;e=k;i=0;while(1){h=i+1|0;f=i*3|0;if(j>>>0<f>>>0){n=47;break}g=j-f|0;if(g>>>0<3){n=49;break}o=0;f=ha(57,k+f|0,3)|0;u=o;o=0;if(u&1)break;if(j>>>0<=i>>>0){n=52;break}a[k+i>>0]=f;if(h>>>0<m>>>0)i=h;else break a}if((n|0)==47){o=0;aa(12,f|0,j|0);o=0}else if((n|0)==49){o=0;aa(8,3,g|0);o=0}else if((n|0)==52){o=0;ca(11,3768,i|0,j|0);o=0}v=oa()|0;Ie(s);ya(v|0)}else e=c[s>>2]|0;while(0);u=c[s+4>>2]|0;c[b>>2]=e;c[b+4>>2]=u;c[b+8>>2]=m;l=v;return}case 2:{g=c[e+8>>2]|0;e=c[e+4>>2]|0;c[t>>2]=1;r=t+4|0;c[r>>2]=0;s=t+8|0;c[s>>2]=0;f=e>>>0<3?e:3;b:do if(e|0){p=u+1|0;q=u+2|0;m=e-f|0;n=f;k=g+f|0;e=g;while(1){o=0;j=ha(57,e|0,n|0)|0;i=o;o=0;if(i&1)break;e=j>>>0<65536;if(j>>>0>=128){c[u>>2]=0;do if(j>>>0>=2048)if(e){a[u>>0]=j>>>12&15|-32;e=2;f=-128;g=63;h=p;i=3;break}else{a[u>>0]=j>>>18&7|-16;a[p>>0]=j>>>12&63|-128;e=3;f=-128;g=63;h=q;i=4;break}else{e=1;f=-64;g=31;h=u;i=2}while(0);a[h>>0]=j>>>6&g&255|f;a[u+e>>0]=j&63|-128;o=0;ca(13,t|0,u|0,i|0);j=o;o=0;if(j&1)break}else{f=j&255;e=c[s>>2]|0;if((e|0)==(c[r>>2]|0)){o=0;$(40,t|0);j=o;o=0;if(j&1)break;e=c[s>>2]|0}a[(c[t>>2]|0)+e>>0]=f;c[s>>2]=e+1}e=(m|0)==0;f=m>>>0<3?m:3;if((k|0)==0|e)break b;else{j=k;m=e?0:m-f|0;n=e?n:f;k=e?k:k+f|0;e=j}}v=oa()|0;De(t);ya(v|0)}while(0);c[b>>2]=c[t>>2];c[b+4>>2]=c[t+4>>2];c[b+8>>2]=c[t+8>>2];l=v;return}default:{p=c[e+8>>2]|0;n=c[e+4>>2]|0;i=p+n|0;j=(n|0)==0;c:do if(!j){k=p;d:while(1){h=d[k>>0]|0;k=k+1|0;m=13856;e=27;e:while(1){f:while(1){f=e>>>1;g=m+(f<<2)|0;e=e-f|0;if(!e)break d;w=c[g>>2]|0;switch(((w|0)==(h|0)?0:w>>>0<h>>>0?-1:1)|0){case 0:break e;case -1:break f;default:e=f}}m=g+4|0;e=e+-1|0}if((k|0)==(i|0))break c}xj(3744)}while(0);if((n|0)<0)xj(3584);if(!j){e=tb(n,1,u)|0;if(!e)Be(u);else q=e}else q=1;c[s>>2]=q;c[s+4>>2]=n;c[s+8>>2]=0;o=0;ca(13,s|0,p|0,n|0);w=o;o=0;if(w&1){w=oa()|0;Ee(s);ya(w|0)};c[t>>2]=c[s>>2];c[t+4>>2]=c[s+4>>2];c[t+8>>2]=c[s+8>>2];c[s>>2]=c[t>>2];c[s+4>>2]=c[t+4>>2];c[s+8>>2]=c[t+8>>2];o=0;ca(5,u|0,c[s>>2]|0,c[s+8>>2]|0);w=o;o=0;if(w&1){w=oa()|0;Ee(s);ya(w|0)}if(!(c[u>>2]|0)){c[r>>2]=c[s>>2];c[r+4>>2]=c[s+4>>2];c[r+8>>2]=c[s+8>>2];e=1;f=0;g=0}else{g=u+4|0;f=c[g>>2]|0;g=c[g+4>>2]|0;c[r>>2]=c[s>>2];c[r+4>>2]=c[s+4>>2];c[r+8>>2]=c[s+8>>2];e=0};c[s>>2]=c[r>>2];c[s+4>>2]=c[r+4>>2];c[s+8>>2]=c[r+8>>2];if(!e){c[u>>2]=c[s>>2];c[u+4>>2]=c[s+4>>2];c[u+8>>2]=c[s+8>>2];w=u+12|0;c[w>>2]=f;c[w+4>>2]=g;Me(u)};c[b>>2]=c[s>>2];c[b+4>>2]=c[s+4>>2];c[b+8>>2]=c[s+8>>2];l=v;return}}}function Me(a){a=a|0;var b=0,d=0,e=0,f=0;f=l;l=l+80|0;e=f+56|0;d=f+32|0;b=f+8|0;c[f>>2]=19021;c[f+4>>2]=43;c[b>>2]=c[a>>2];c[b+4>>2]=c[a+4>>2];c[b+8>>2]=c[a+8>>2];c[b+12>>2]=c[a+12>>2];c[b+16>>2]=c[a+16>>2];c[e>>2]=f;c[e+4>>2]=58;c[e+8>>2]=b;c[e+12>>2]=59;c[d>>2]=3824;c[d+4>>2]=2;c[d+8>>2]=0;c[d+16>>2]=e;c[d+20>>2]=2;o=0;aa(7,d|0,3840);o=0;a=oa()|0;Pe(b);ya(a|0)}function Ne(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+16|0;i=k;if(d>>>0>3)xj(3784);h=(d|0)==3;f=(i|0)==(b|0);g=(i|0)==(b|0);e=21397;d=0;while(1){a[i>>0]=a[e>>0]|0;a[i+1>>0]=a[e+1>>0]|0;a[i+2>>0]=a[e+2>>0]|0;if(h){if(f){j=8;break}if(!(ol(i,b,3)|0))break;m=e+3|0;a[i>>0]=a[m>>0]|0;a[i+1>>0]=a[m+1>>0]|0;a[i+2>>0]=a[m+2>>0]|0;if(!(ol(i,b,3)|0)){j=12;break}m=e+6|0;a[i>>0]=a[m>>0]|0;a[i+1>>0]=a[m+1>>0]|0;a[i+2>>0]=a[m+2>>0]|0;if(!(ol(i,b,3)|0)){j=17;break}m=e+9|0;a[i>>0]=a[m>>0]|0;a[i+1>>0]=a[m+1>>0]|0;a[i+2>>0]=a[m+2>>0]|0;if(g){j=15;break}if(!(ol(i,b,3)|0)){j=19;break}}e=e+12|0;d=d+4|0;if(((21478-e|0)/3|0)>>>0<=3){j=4;break}}a:do if((j|0)==4){if((e|0)==21478){m=45;l=k;return m|0}f=(i|0)==(b|0);while(1){a[i>>0]=a[e>>0]|0;a[i+1>>0]=a[e+1>>0]|0;a[i+2>>0]=a[e+2>>0]|0;e=e+3|0;if(h){if(f){j=23;break}if(!(ol(i,b,3)|0))break a}if((e|0)==21478){d=45;j=27;break}else d=d+1|0}if((j|0)==23)break;else if((j|0)==27){l=k;return d|0}}else if((j|0)!=8)if((j|0)==12)d=d|1;else if((j|0)==15)j=19;else if((j|0)==17)d=d|2;while(0);if((j|0)==19)d=d|3;if(d>>>0>=27)sj(3808,d,27);m=c[13856+(d<<2)>>2]|0;l=k;return m|0}function Oe(a,b){a=a|0;b=b|0;return ok(c[a>>2]|0,c[a+4>>2]|0,b)|0}function Pe(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b,1);return}function Qe(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0;k=l;l=l+32|0;j=k+16|0;h=k;switch(e|0){case 1:{Ge(j,d);g=c[j>>2]|0;j=j+4|0;c[h>>2]=c[j>>2];c[h+4>>2]=c[j+4>>2];c[h+8>>2]=c[j+8>>2];j=c[h+8>>2]|0;i=c[h>>2]|0;c[b>>2]=1;c[b+4>>2]=g;c[b+8>>2]=i;c[b+12>>2]=j;l=k;return}case 2:{Ke(j,d);i=c[j+8>>2]|0;j=c[j>>2]|0;c[b>>2]=2;c[b+4>>2]=i;c[b+8>>2]=j;c[b+12>>2]=i;l=k;return}default:{Le(h,d);d=c[h+8>>2]|0;g=h+4|0;e=c[g>>2]|0;if(e>>>0<d>>>0){o=0;$(30,3560);o=0;k=oa()|0;De(h);ya(k|0)}do if(d){if((e|0)!=(d|0)){e=wb(c[h>>2]|0,e,1,d,1,j)|0;if(!e){e=j+4|0;d=c[e>>2]|0;e=c[e+4>>2]|0;c[j>>2]=c[j>>2];g=j+4|0;c[g>>2]=d;c[g+4>>2]=e;Be(j)}else{c[h>>2]=e;i=3;break}}}else{if(e|0)vb(c[h>>2]|0,e,1);c[h>>2]=1;d=0;i=3}while(0);if((i|0)==3)c[g>>2]=d;c[j>>2]=c[h>>2];c[j+4>>2]=c[h+4>>2];c[j+8>>2]=c[h+8>>2];e=j+8|0;d=c[e>>2]|0;if(!((d|0)!=0?(f=c[j>>2]|0,(a[f+(d+-1)>>0]|0)==0):0)){do if((d|0)==(c[j+4>>2]|0)){o=0;$(40,j|0);i=o;o=0;if(!(i&1)){d=c[e>>2]|0;break}k=oa()|0;Ee(j);ya(k|0)}while(0);f=c[j>>2]|0;a[f+d>>0]=0;d=d+1|0;c[e>>2]=d}c[b>>2]=3;c[b+4>>2]=d+-1;c[b+8>>2]=f;c[b+12>>2]=d;l=k;return}}}function Re(a){a=a|0;return}function Se(){var a=0,b=0,c=0,d=0;d=l;l=l+448|0;b=d+432|0;c=d+216|0;a=d;qi(a);Il(c|0,a|0,216)|0;a=tb(216,8,b)|0;if(!a)Te(b);else{Il(a|0,c|0,216)|0;l=d;return a|0}return 0}function Te(a){a=a|0;var b=0;b=l;l=l+16|0;c[b>>2]=c[a>>2];c[b+4>>2]=c[a+4>>2];c[b+8>>2]=c[a+8>>2];ub(b)}function Ue(a){a=a|0;vb(a,216,8);return}function Ve(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=l;l=l+32|0;d=f;e=f+8|0;if((c[b>>2]|0)==2){Di(d,b);ui(a,c[d>>2]|0,c[d+4>>2]|0);l=f;return}Hi(e,b);d=c[e>>2]|0;o=0;ca(15,a|0,d|0,c[e+8>>2]|0);a=o;o=0;if(a&1){f=oa()|0;We(e);ya(f|0)}b=c[e+4>>2]|0;if(b|0)vb(d,b,1);l=f;return}function We(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b,1);return}function Xe(a){a=a|0;si(a);return}function Ye(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;m=l;l=l+64|0;j=m+48|0;k=m+32|0;g=m+16|0;i=m;if((b|0)<0)xj(3856);if(b){e=xb(b,1,j)|0;d=j+4|0;f=c[d>>2]|0;d=c[d+4>>2]|0;if(!e){c[j>>2]=c[j>>2];e=j+4|0;c[e>>2]=f;c[e+4>>2]=d;Te(j)}else h=e}else h=1;c[i>>2]=h;c[i+4>>2]=b;c[i+8>>2]=b;o=0;ca(16,a|0,h|0,b|0);h=o;o=0;if(h&1){m=oa()|0;We(i);ya(m|0)};c[j>>2]=c[i>>2];c[j+4>>2]=c[i+4>>2];c[j+8>>2]=c[i+8>>2];Ai(g,j);c[k>>2]=c[g>>2];c[k+4>>2]=c[g+4>>2];c[k+8>>2]=c[g+8>>2];c[k+12>>2]=c[g+12>>2];a=tb(16,4,j)|0;if(!a)Te(j);else{c[a>>2]=c[k>>2];c[a+4>>2]=c[k+4>>2];c[a+8>>2]=c[k+8>>2];c[a+12>>2]=c[k+12>>2];l=m;return a|0}return 0}function Ze(a){a=a|0;var b=0,d=0,e=0,f=0;f=l;l=l+48|0;b=f+16|0;d=f;e=f+24|0;ti(d,a);d=c[d>>2]|0;ti(b,a);a=c[b+4>>2]|0;b=tb(16,4,e)|0;if(!b)Te(e);else{c[b>>2]=1;c[b+4>>2]=a;c[b+8>>2]=d;c[b+12>>2]=a;l=f;return b|0}return 0}function _e(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0;q=l;l=l+80|0;f=q;k=q+56|0;p=q+40|0;i=q+24|0;n=q+8|0;h=xb(243,1,k)|0;e=k+4|0;g=c[e>>2]|0;e=c[e+4>>2]|0;if(!h){c[k>>2]=c[k>>2];r=k+4|0;c[r>>2]=g;c[r+4>>2]=e;Te(k)}c[n>>2]=h;c[n+4>>2]=243;c[n+8>>2]=243;do if((c[a>>2]|0)==2){o=0;aa(13,f|0,a|0);r=o;o=0;if(!(r&1)?(o=0,ga(1,c[f>>2]|0,c[f+4>>2]|0,b|0,h|0,243,d|0),r=o,o=0,!(r&1)):0)j=12;else j=18}else{o=0;aa(16,p|0,a|0);r=o;o=0;if(r&1)j=18;else{e=c[p>>2]|0;o=0;ga(1,e|0,c[p+8>>2]|0,b|0,h|0,243,d|0);r=o;o=0;if(r&1){m=oa()|0;We(p);break}a=c[p+4>>2]|0;if(a|0)vb(e,a,1);j=12}}while(0);if((j|0)==12){o=0;$(39,d|0);r=o;o=0;if(!(r&1)){c[k>>2]=c[n>>2];c[k+4>>2]=c[n+4>>2];c[k+8>>2]=c[n+8>>2];o=0;aa(15,i|0,k|0);r=o;o=0;if(r&1){r=oa()|0;ya(r|0)};c[p>>2]=c[i>>2];c[p+4>>2]=c[i+4>>2];c[p+8>>2]=c[i+8>>2];c[p+12>>2]=c[i+12>>2];a=tb(16,4,k)|0;if(!a)Te(k);else{c[a>>2]=c[p>>2];c[a+4>>2]=c[p+4>>2];c[a+8>>2]=c[p+8>>2];c[a+12>>2]=c[p+12>>2];l=q;return a|0}}else j=18}if((j|0)==18)m=oa()|0;We(n);r=m;ya(r|0);return 0}function $e(b,c,d,e,f,g){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0;if(f>>>0<243)xj(3880);h=f>>>0<=c>>>0?f:c;if(c>>>0>f>>>0)xj(3904);if(h|0)Il(e|0,b|0,h|0)|0;a:do if((d|0)<0){m=0;l=0;b=0-d|0;while(1){if((b|0)==0&l<<24>>24==0)break a;j=b+1|0;d=1-(((j|0)%3|0)&255)<<24>>24;k=e+m|0;m=m+1|0;i=a[k>>0]|0;b=i+d<<24>>24;switch(b<<24>>24){case 2:{b=-1;break}case -2:{b=1;break}default:{}}h=b+l<<24>>24;switch(h<<24>>24){case 2:{h=-1;break}case -2:{h=1;break}default:{}}b=(b<<24>>24==l<<24>>24?b:0)+(i<<24>>24==d<<24>>24?i:0)<<24>>24;a[k>>0]=h;if(m>>>0>=f>>>0)break a;else{l=b<<24>>24>0?1:(b<<24>>24!=0)<<31>>31;b=(j|0)/3|0}}}else{m=0;l=0;b=d;while(1){if((b|0)==0&l<<24>>24==0)break a;j=b+1|0;d=(((j|0)%3|0)&255)+-1<<24>>24;k=e+m|0;m=m+1|0;i=a[k>>0]|0;b=i+d<<24>>24;switch(b<<24>>24){case 2:{b=-1;break}case -2:{b=1;break}default:{}}h=b+l<<24>>24;switch(h<<24>>24){case 2:{h=-1;break}case -2:{h=1;break}default:{}}b=(b<<24>>24==l<<24>>24?b:0)+(i<<24>>24==d<<24>>24?i:0)<<24>>24;a[k>>0]=h;if(m>>>0>=f>>>0)break a;else{l=b<<24>>24>0?1:(b<<24>>24!=0)<<31>>31;b=(j|0)/3|0}}}while(0);af(g,e,c);bf(g,e,243);ei(g);return}function af(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0;r=l;l=l+1472|0;q=r+729|0;p=r;f=e>>>0<243?e:243;if(!e){l=r;return}n=b+729|0;m=e-f|0;g=d;o=f;k=d+f|0;a:while(1){if(o>>>0>729){e=5;break}if(o|0)Il(b|0,g|0,o|0)|0;Al(p|0,0,729)|0;h=a[n>>0]|0;if(h<<24>>24){j=0;do{i=(j&255)>254;e=j;j=i?j:j+1<<24>>24;if(i)break;d=(e&1)==0;e=d?p:b;Il(q|0,(d?b:p)|0,729)|0;d=a[q>>0]|0;f=0;do{g=f;f=f+1|0;i=d;d=a[q+(c[4376+(f<<2)>>2]|0)>>0]|0;i=(i<<24>>24)+5+(d<<24>>24<<2)|0;if(i>>>0>=11){e=16;break a}a[e+g>>0]=a[19147+i>>0]|0}while(f>>>0<729)}while((j&255)<(h&255));if(a[n>>0]&1)Il(b|0,p|0,729)|0}e=(m|0)==0;f=m>>>0<243?m:243;d=k;if((k|0)==0|e){e=3;break}else{m=e?0:m-f|0;g=d;o=e?o:f;k=e?k:d+f|0}}if((e|0)==3){l=r;return}else if((e|0)==5)rj(o,729);else if((e|0)==16)sj(3928,i,11)}function bf(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;t=l;l=l+1472|0;r=t+729|0;q=t;n=(e>>>0)/243|0;a:do if(e>>>0>242){o=b+729|0;p=0;b:while(1){f=p*243|0;p=p+1|0;g=f+243|0;if(g>>>0>e>>>0){s=11;break}Il(d+f|0,b|0,243)|0;Al(q|0,0,729)|0;k=a[o>>0]|0;if(k<<24>>24){m=0;do{j=(m&255)>254;f=m;m=j?m:m+1<<24>>24;if(j)break;g=(f&1)==0;f=g?q:b;Il(r|0,(g?b:q)|0,729)|0;g=a[r>>0]|0;i=0;do{j=i;i=i+1|0;h=g;g=a[r+(c[4376+(i<<2)>>2]|0)>>0]|0;h=(h<<24>>24)+5+(g<<24>>24<<2)|0;if(h>>>0>=11){s=20;break b}a[f+j>>0]=a[19147+h>>0]|0}while(i>>>0<729)}while((m&255)<(k&255));if(a[o>>0]&1)Il(b|0,q|0,729)|0}if(p>>>0>=n>>>0)break a}if((s|0)==11)rj(g,e);else if((s|0)==20)sj(3928,h,11)}while(0);f=n*243|0;g=e-f|0;if(f>>>0>e>>>0)yj(f,e);if(g>>>0>729)rj(g,729);if(g|0)Il(d+f|0,b|0,g|0)|0;if(!((e>>>0)%243|0)){l=t;return}Al(q|0,0,729)|0;k=b+729|0;m=a[k>>0]|0;if(m<<24>>24){n=0;c:do{e=(n&255)>254;f=n;n=e?n:n+1<<24>>24;if(e)break;g=(f&1)==0;f=g?q:b;Il(r|0,(g?b:q)|0,729)|0;g=a[r>>0]|0;i=0;do{j=i;i=i+1|0;h=g;g=a[r+(c[4376+(i<<2)>>2]|0)>>0]|0;h=(h<<24>>24)+5+(g<<24>>24<<2)|0;if(h>>>0>=11){s=30;break c}a[f+j>>0]=a[19147+h>>0]|0}while(i>>>0<729)}while((n&255)<(m&255));if((s|0)==30)sj(3928,h,11);if(a[k>>0]&1)Il(b|0,q|0,729)|0}l=t;return}function cf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;w=l;l=l+128|0;k=w;r=w+96|0;u=w+80|0;n=w+64|0;h=w+48|0;g=w+24|0;j=w+112|0;i=w+108|0;s=w+8|0;m=b*6561|0;if((m|0)<0)xj(3856);if(m){f=xb(m,1,r)|0;e=r+4|0;b=c[e>>2]|0;e=c[e+4>>2]|0;if(!f){c[r>>2]=c[r>>2];f=r+4|0;c[f>>2]=b;c[f+4>>2]=e;Te(r)}else q=f}else q=1;c[s>>2]=q;c[s+4>>2]=m;c[s+8>>2]=m;f=a+4|0;c[i>>2]=f;c[j>>2]=13172;a:do if((c[f>>2]|0)==243){b=m>>>0<243;do if((c[a>>2]|0)==2){if(b){o=0;aa(8,243,m|0);o=0;v=41;break a}o=0;aa(13,k|0,a|0);a=o;o=0;if(a&1){v=41;break a}if((c[k+4>>2]|0)==243){Il(q|0,c[k>>2]|0,243)|0;break}else{o=0;$(30,3904);o=0;v=41;break a}}else{if(b){o=0;aa(8,243,m|0);o=0;v=41;break a}o=0;aa(16,u|0,a|0);k=o;o=0;if(k&1){v=41;break a}if((c[u+8>>2]|0)!=243){o=0;$(30,3904);o=0;t=oa()|0;We(u);break a}e=c[u>>2]|0;Il(q|0,e|0,243)|0;b=c[u+4>>2]|0;if(b|0)vb(e,b,1)}while(0);if((m>>>0)%6561|0|0){o=0;$(30,3984);o=0;v=41;break}o=0;ca(17,d|0,q|0,243);k=o;o=0;if(!(k&1)?(o=0,ca(18,d|0,q|0,m|0),k=o,o=0,!(k&1)):0){f=(m>>>0)/243|0;g=0;do{b=g*243|0;g=g+1|0;o=0;$(39,d|0);k=o;o=0;if(k&1){v=41;break a}e=b+243|0;if(e>>>0>m>>>0){v=32;break}b=q+b|0;o=0;ca(17,d|0,b|0,243);k=o;o=0;if(k&1){v=41;break a}Il(b|0,d|0,243)|0}while(g>>>0<f>>>0);if((v|0)==32){o=0;aa(8,e|0,m|0);o=0;v=41;break}o=0;$(39,d|0);q=o;o=0;if(!(q&1)?(o=0,$(39,d|0),q=o,o=0,!(q&1)):0){c[r>>2]=c[s>>2];c[r+4>>2]=c[s+4>>2];c[r+8>>2]=c[s+8>>2];o=0;aa(15,n|0,r|0);q=o;o=0;if(q&1){w=oa()|0;ya(w|0)};c[u>>2]=c[n>>2];c[u+4>>2]=c[n+4>>2];c[u+8>>2]=c[n+8>>2];c[u+12>>2]=c[n+12>>2];b=tb(16,4,r)|0;if(!b)Te(r);else{c[b>>2]=c[u>>2];c[b+4>>2]=c[u+4>>2];c[b+8>>2]=c[u+8>>2];c[b+12>>2]=c[u+12>>2];l=w;return b|0}}else v=41}else v=41}else{c[h>>2]=i;c[h+4>>2]=18;c[h+8>>2]=j;c[h+12>>2]=18;c[g>>2]=3944;c[g+4>>2]=3;c[g+8>>2]=0;c[g+16>>2]=h;c[g+20>>2]=2;o=0;aa(7,g|0,3968);o=0;v=41}while(0);if((v|0)==41)t=oa()|0;We(s);w=t;ya(w|0);return 0}function df(a,b){a=a|0;b=b|0;return Ej(c[a>>2]|0,b)|0}function ef(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0;q=l;l=l+80|0;f=q;m=q+56|0;p=q+40|0;i=q+24|0;k=q+8|0;h=xb(243,1,m)|0;e=m+4|0;g=c[e>>2]|0;e=c[e+4>>2]|0;if(!h){c[m>>2]=c[m>>2];r=m+4|0;c[r>>2]=g;c[r+4>>2]=e;Te(m)}c[k>>2]=h;c[k+4>>2]=243;c[k+8>>2]=243;do if((c[a>>2]|0)==2){o=0;aa(13,f|0,a|0);r=o;o=0;if(!(r&1)?(o=0,ga(2,c[f>>2]|0,c[f+4>>2]|0,h|0,243,b|0,d|0),r=o,o=0,!(r&1)):0)j=12;else j=19}else{o=0;aa(16,p|0,a|0);r=o;o=0;if(r&1)j=19;else{e=c[p>>2]|0;o=0;ga(2,e|0,c[p+8>>2]|0,h|0,243,b|0,d|0);r=o;o=0;if(r&1){n=oa()|0;We(p);break}a=c[p+4>>2]|0;if(a|0)vb(e,a,1);j=12}}while(0);if((j|0)==12){o=0;$(39,b|0);r=o;o=0;if(!(r&1)?(o=0,$(39,d|0),r=o,o=0,!(r&1)):0){c[m>>2]=c[k>>2];c[m+4>>2]=c[k+4>>2];c[m+8>>2]=c[k+8>>2];o=0;aa(15,i|0,m|0);r=o;o=0;if(r&1){r=oa()|0;ya(r|0)};c[p>>2]=c[i>>2];c[p+4>>2]=c[i+4>>2];c[p+8>>2]=c[i+8>>2];c[p+12>>2]=c[i+12>>2];a=tb(16,4,m)|0;if(!a)Te(m);else{c[a>>2]=c[p>>2];c[a+4>>2]=c[p+4>>2];c[a+8>>2]=c[p+8>>2];c[a+12>>2]=c[p+12>>2];l=q;return a|0}}else j=19}if((j|0)==19)n=oa()|0;We(k);r=n;ya(r|0);return 0}function ff(b,d,e,f,g,h){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,m=0,n=0,o=0,p=0;n=l;l=l+288|0;m=n+24|0;i=n;k=n+276|0;j=n+272|0;p=n+268|0;o=(d>>>0)%6561|0;c[p>>2]=o;c[j>>2]=28348;c[k>>2]=p;if(o|0){c[m>>2]=j;c[m+4>>2]=18;c[m+8>>2]=k;c[m+12>>2]=18;c[i>>2]=3944;c[i+4>>2]=3;c[i+8>>2]=0;c[i+16>>2]=m;c[i+20>>2]=2;uj(i,4008)}if((f|0)!=243)xj(4024);if(!d)sj(4048,0,0);Al(m|0,a[b>>0]|0,243)|0;i=(d>>>0)/243|0;if(d>>>0<=242){bf(g,e,243);ei(h);ei(g);l=n;return}k=0;while(1){f=k*243|0;k=k+1|0;j=f+243|0;if(j>>>0>d>>>0){f=10;break}Il(m|0,b+f|0,243)|0;f=0;do{f=f+1<<24>>24;ei(h);af(h,m,243);Il(m|0,h|0,243)|0}while(f<<24>>24<26);af(g,m,243);if(k>>>0>=i>>>0){f=8;break}}if((f|0)==8){bf(g,e,243);ei(h);ei(g);l=n;return}else if((f|0)==10)rj(j,d)}function gf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+64|0;i=k+48|0;j=k+32|0;e=k+16|0;h=k;Hi(h,a);g=c[h>>2]|0;d=h+8|0;a=c[d>>2]|0;o=0;ca(17,b|0,g|0,a|0);m=o;o=0;do if(!(m&1)){if(a>>>0<243){o=0;aa(8,243,a|0);o=0;break}o=0;ca(18,b|0,g|0,243);m=o;o=0;if((!(m&1)?(o=0,$(39,b|0),m=o,o=0,!(m&1)):0)?(o=0,$(39,b|0),m=o,o=0,!(m&1)):0){a=a+-243|0;if((a|0)<0){o=0;$(30,3856);o=0;break}if(a){b=tb(a,1,i)|0;if(!b){c[i>>2]=0;Te(i)}else f=b}else f=1;c[d>>2]=243;Il(f|0,g+243|0,a|0)|0;c[i>>2]=f;c[i+4>>2]=a;c[i+8>>2]=a;o=0;aa(15,e|0,i|0);m=o;o=0;if(!(m&1)){c[j>>2]=c[e>>2];c[j+4>>2]=c[e+4>>2];c[j+8>>2]=c[e+8>>2];c[j+12>>2]=c[e+12>>2];b=tb(16,4,i)|0;if(!b)Te(i);c[b>>2]=c[j>>2];c[b+4>>2]=c[j+4>>2];c[b+8>>2]=c[j+8>>2];c[b+12>>2]=c[j+12>>2];a=c[h+4>>2]|0;if(!a){l=k;return b|0}vb(g,a,1);l=k;return b|0}}}while(0);m=oa()|0;We(h);ya(m|0);return 0}function hf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;m=l;l=l+80|0;e=m;h=m+56|0;k=m+40|0;f=m+24|0;j=m+8|0;Hi(j,b);do if((c[a>>2]|0)==2){o=0;aa(13,e|0,a|0);g=o;o=0;if(!(g&1)?(o=0,Z(1,c[e>>2]|0,c[e+4>>2]|0,c[j>>2]|0,c[j+8>>2]|0,d|0),g=o,o=0,!(g&1)):0)g=10;else g=16}else{o=0;aa(16,k|0,a|0);e=o;o=0;if(e&1)g=16;else{b=c[k>>2]|0;o=0;Z(1,b|0,c[k+8>>2]|0,c[j>>2]|0,c[j+8>>2]|0,d|0);e=o;o=0;if(e&1){i=oa()|0;We(k);break}a=c[k+4>>2]|0;if(a|0)vb(b,a,1);g=10}}while(0);if((g|0)==10){o=0;$(39,d|0);d=o;o=0;if(!(d&1)){c[h>>2]=c[j>>2];c[h+4>>2]=c[j+4>>2];c[h+8>>2]=c[j+8>>2];o=0;aa(15,f|0,h|0);d=o;o=0;if(d&1){m=oa()|0;ya(m|0)};c[k>>2]=c[f>>2];c[k+4>>2]=c[f+4>>2];c[k+8>>2]=c[f+8>>2];c[k+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[k>>2];c[a+4>>2]=c[k+4>>2];c[a+8>>2]=c[k+8>>2];c[a+12>>2]=c[k+12>>2];l=m;return a|0}}else g=16}if((g|0)==16)i=oa()|0;We(j);m=i;ya(m|0);return 0}function jf(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,m=0,n=0,o=0;o=l;l=l+64|0;j=o+24|0;i=o;n=o+52|0;k=o+48|0;h=o+44|0;m=o+40|0;c[h>>2]=d;c[k>>2]=13172;c[n>>2]=h;if((d|0)!=243){c[j>>2]=k;c[j+4>>2]=18;c[j+8>>2]=n;c[j+12>>2]=18;c[i>>2]=3944;c[i+4>>2]=3;c[i+8>>2]=0;c[i+16>>2]=j;c[i+20>>2]=2;uj(i,4064)}d=(ji(b,243)|0)*6561|0;c[m>>2]=d;c[h>>2]=f;c[k>>2]=m;c[n>>2]=h;if((d|0)!=(f|0)){c[j>>2]=k;c[j+4>>2]=18;c[j+8>>2]=n;c[j+12>>2]=18;c[i>>2]=3944;c[i+4>>2]=3;c[i+8>>2]=0;c[i+16>>2]=j;c[i+20>>2]=2;uj(i,4080)}k=(f>>>0)/243|0;if(f>>>0<=242){ei(g);l=o;return}m=0;while(1){h=m*3|0;if(h>>>0>=243){d=10;break}i=h+1|0;if(i>>>0>=243){d=12;break}j=h+2|0;if(j>>>0>=243){d=14;break}i=((13-(a[b+h>>0]|0)<<24>>24)+((a[b+i>>0]|0)*253|0)<<24>>24)+((a[b+j>>0]|0)*247|0)<<24>>24;d=i<<24>>24>0;if(d){j=m*243|0;h=j+243|0;j=e+j|0;if(h>>>0>f>>>0){d=18;break}d=d&1;while(1){ei(g);af(g,j,243);Il(j|0,g|0,243)|0;h=d<<24>>24<i<<24>>24;if(h)d=(h&1)+d<<24>>24;else break}}m=m+1|0;if(m>>>0>=k>>>0){d=8;break}}if((d|0)==8){ei(g);l=o;return}else if((d|0)==10)sj(4096,h,243);else if((d|0)==12)sj(4096,i,243);else if((d|0)==14)sj(4096,j,243);else if((d|0)==18){ei(g);rj(h,f)}}function kf(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;z=l;l=l+176|0;n=z+48|0;p=z+32|0;k=z+16|0;m=z;x=z+152|0;y=z+136|0;w=z+120|0;s=z+104|0;q=z+88|0;r=z+72|0;A=z+56|0;t=d*6561|0;if((t|0)<0)xj(3856);if(t){h=xb(t,1,x)|0;j=x+4|0;i=c[j>>2]|0;j=c[j+4>>2]|0;if(!h){c[x>>2]=c[x>>2];h=x+4|0;c[h>>2]=i;c[h+4>>2]=j;Te(x)}else u=h}else u=1;c[A>>2]=u;c[A+4>>2]=t;c[A+8>>2]=t;h=(c[b>>2]|0)==2;a:do if((c[a>>2]|0)==2){if(h){o=0;aa(13,m|0,a|0);i=c[m>>2]|0;h=c[m+4>>2]|0;v=o;o=0;if(v&1){v=41;break}o=0;aa(13,p|0,b|0);v=o;o=0;if(v&1){v=41;break}o=0;fa(1,i|0,h|0,c[p>>2]|0,c[p+4>>2]|0,u|0,t|0,d|0,e|0,f|0);v=o;o=0;if(v&1){v=41;break}else{v=13;break}}o=0;aa(13,k|0,a|0);j=c[k>>2]|0;h=c[k+4>>2]|0;s=o;o=0;if(!(s&1)?(o=0,aa(16,r|0,b|0),b=o,o=0,!(b&1)):0){i=c[r>>2]|0;o=0;fa(1,j|0,h|0,i|0,c[r+8>>2]|0,u|0,t|0,d|0,e|0,f|0);u=o;o=0;if(u&1){g=oa()|0;We(r);break}h=c[r+4>>2]|0;if(h|0)vb(i,h,1);v=13}else v=41}else{if(h){o=0;aa(16,q|0,a|0);s=o;o=0;if(s&1){v=41;break}i=c[q>>2]|0;h=c[q+8>>2]|0;o=0;aa(13,n|0,b|0);b=o;o=0;if(!(b&1)?(o=0,fa(1,i|0,h|0,c[n>>2]|0,c[n+4>>2]|0,u|0,t|0,d|0,e|0,f|0),u=o,o=0,!(u&1)):0){h=c[q+4>>2]|0;if(h|0)vb(i,h,1);v=13;break}g=oa()|0;We(q);break}o=0;aa(16,s|0,a|0);r=o;o=0;if(r&1)v=41;else{j=c[s>>2]|0;h=c[s+8>>2]|0;o=0;aa(16,y|0,b|0);b=o;o=0;do if(b&1)g=oa()|0;else{i=c[y>>2]|0;o=0;fa(1,j|0,h|0,i|0,c[y+8>>2]|0,u|0,t|0,d|0,e|0,f|0);u=o;o=0;if(u&1){g=oa()|0;We(y);break}h=c[y+4>>2]|0;if(h|0)vb(i,h,1);h=c[s+4>>2]|0;if(h|0)vb(j,h,1);v=13;break a}while(0);We(s)}}while(0);if((v|0)==13){o=0;$(39,e|0);e=o;o=0;if(!(e&1)?(o=0,$(39,f|0),f=o,o=0,!(f&1)):0){c[x>>2]=c[A>>2];c[x+4>>2]=c[A+4>>2];c[x+8>>2]=c[A+8>>2];o=0;aa(15,w|0,x|0);f=o;o=0;if(f&1){A=oa()|0;ya(A|0)};c[y>>2]=c[w>>2];c[y+4>>2]=c[w+4>>2];c[y+8>>2]=c[w+8>>2];c[y+12>>2]=c[w+12>>2];h=tb(16,4,x)|0;if(!h)Te(x);else{c[h>>2]=c[y>>2];c[h+4>>2]=c[y+4>>2];c[h+8>>2]=c[y+8>>2];c[h+12>>2]=c[y+12>>2];l=z;return h|0}}else v=41}if((v|0)==41)g=oa()|0;We(A);A=g;ya(A|0);return 0}function lf(b,c,d,e,f,g,h,i,j){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0,l=0,m=0,n=0;ei(i);if(e>>>0<243)rj(243,e);n=h*6561|0;af(i,d,243);m=(n>>>0)/243|0;if(n>>>0<=242){ei(i);ei(j);return}n=0;while(1){d=n*243|0;ei(j);e=d+243|0;if(e>>>0>g>>>0){d=8;break}l=f+d|0;bf(i,l,243);af(j,l,243);Il(l|0,j|0,243)|0;e=n*3|0;n=n+1|0;if(e>>>0>=c>>>0){d=10;break}h=e+1|0;if(h>>>0>=c>>>0){d=12;break}k=e+2|0;if(k>>>0>=c>>>0){d=14;break}d=((13-(a[b+e>>0]|0)<<24>>24)+((a[b+h>>0]|0)*253|0)<<24>>24)+((a[b+k>>0]|0)*247|0)<<24>>24;if(d<<24>>24>0){e=0;do{e=e+1<<24>>24;ei(j);af(j,l,243);Il(l|0,j|0,243)|0}while(e<<24>>24<d<<24>>24)}if(n>>>0>=m>>>0){d=6;break}}if((d|0)==6){ei(i);ei(j);return}else if((d|0)==8)rj(e,g);else if((d|0)==10)sj(4096,e,c);else if((d|0)==12)sj(4096,h,c);else if((d|0)==14)sj(4096,k,c)}function mf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0;r=l;l=l+80|0;h=r;n=r+56|0;q=r+40|0;k=r+24|0;p=r+8|0;Hi(p,b);if((c[a>>2]|0)==2){o=0;aa(13,h|0,a|0);b=o;o=0;if(!(b&1)?(i=c[p>>2]|0,g=c[p+8>>2]|0,o=0,Z(2,c[h>>2]|0,c[h+4>>2]|0,i|0,g|0,d|0),h=o,o=0,!(h&1)):0){e=g;f=i;j=10}}else{o=0;aa(16,q|0,a|0);i=o;o=0;if(!(i&1)){b=c[q>>2]|0;f=c[p>>2]|0;e=c[p+8>>2]|0;o=0;Z(2,b|0,c[q+8>>2]|0,f|0,e|0,d|0);j=o;o=0;if(j&1){r=oa()|0;We(q);We(p);ya(r|0)}a=c[q+4>>2]|0;if(a|0)vb(b,a,1);j=10}}do if((j|0)==10?(o=0,$(39,d|0),d=o,o=0,!(d&1)):0){b=p+8|0;if(e>>>0<243){o=0;$(30,4112);o=0;break}a=e+-243|0;if((a|0)<0){o=0;$(30,3856);o=0;break}if(a){e=tb(a,1,n)|0;if(!e){c[n>>2]=0;Te(n)}else m=e}else m=1;c[b>>2]=243;Il(m|0,f+243|0,a|0)|0;c[n>>2]=m;c[n+4>>2]=a;c[n+8>>2]=a;o=0;aa(15,k|0,n|0);m=o;o=0;if(!(m&1)){c[q>>2]=c[k>>2];c[q+4>>2]=c[k+4>>2];c[q+8>>2]=c[k+8>>2];c[q+12>>2]=c[k+12>>2];e=tb(16,4,n)|0;if(!e)Te(n);c[e>>2]=c[q>>2];c[e+4>>2]=c[q+4>>2];c[e+8>>2]=c[q+8>>2];c[e+12>>2]=c[q+12>>2];a=c[p+4>>2]|0;if(!a){l=r;return e|0}vb(f,a,1);l=r;return e|0}}while(0);r=oa()|0;We(p);ya(r|0);return 0}function nf(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0;p=l;l=l+64|0;j=p+24|0;i=p;m=p+52|0;k=p+48|0;h=p+44|0;o=p+40|0;c[h>>2]=d;c[k>>2]=13172;c[m>>2]=h;if((d|0)!=243){c[j>>2]=k;c[j+4>>2]=18;c[j+8>>2]=m;c[j+12>>2]=18;c[i>>2]=3944;c[i+4>>2]=3;c[i+8>>2]=0;c[i+16>>2]=j;c[i+20>>2]=2;uj(i,4136)}n=(ji(b,243)|0)*6561|0;c[o>>2]=n;c[h>>2]=f;c[k>>2]=o;c[m>>2]=h;if((n|0)!=(f|0)){c[j>>2]=k;c[j+4>>2]=18;c[j+8>>2]=m;c[j+12>>2]=18;c[i>>2]=3944;c[i+4>>2]=3;c[i+8>>2]=0;c[i+16>>2]=j;c[i+20>>2]=2;uj(i,4152)}k=(f>>>0)/243|0;a:do if(f>>>0>242){m=0;n=0;while(1){d=(m*243|0)+243|0;if(d>>>0>f>>>0){h=11;break}d=m*3|0;m=m+1|0;if(d>>>0>=243){h=13;break}i=d+1|0;if(i>>>0>=243){h=15;break}j=d+2|0;if(j>>>0>=243){h=17;break}j=(((a[b+d>>0]|0)+13<<24>>24)+((a[b+i>>0]|0)*3|0)<<24>>24)+((a[b+j>>0]|0)*9|0)<<24>>24;h=j<<24>>24>0;d=n;n=n+243|0;if(h){i=e+d|0;if(n>>>0>f>>>0){h=21;break}d=h&1;while(1){ei(g);af(g,i,243);Il(i|0,g|0,243)|0;h=d<<24>>24<j<<24>>24;if(h)d=(h&1)+d<<24>>24;else break}}if(m>>>0>=k>>>0)break a}if((h|0)==11)rj(d,f);else if((h|0)==13)sj(4096,d,243);else if((h|0)==15)sj(4096,i,243);else if((h|0)==17)sj(4096,j,243);else if((h|0)==21){ei(g);rj(n,f)}}while(0);ei(g);d=c[o>>2]|0;if(d>>>0>f>>>0)rj(d,f);else{af(g,e,d);l=p;return}}function of(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0;p=l;l=l+80|0;e=p;k=p+56|0;n=p+40|0;i=p+24|0;j=p+8|0;g=xb(27,1,k)|0;d=k+4|0;f=c[d>>2]|0;d=c[d+4>>2]|0;if(!g){c[k>>2]=c[k>>2];q=k+4|0;c[q>>2]=f;c[q+4>>2]=d;Te(k)}c[j>>2]=g;c[j+4>>2]=27;c[j+8>>2]=27;do if((c[a>>2]|0)==2){o=0;aa(13,e|0,a|0);q=o;o=0;if(!(q&1)?(o=0,Z(3,c[e>>2]|0,c[e+4>>2]|0,g|0,27,b|0),q=o,o=0,!(q&1)):0)h=12;else h=17}else{o=0;aa(16,n|0,a|0);q=o;o=0;if(q&1)h=17;else{d=c[n>>2]|0;o=0;Z(3,d|0,c[n+8>>2]|0,g|0,27,b|0);q=o;o=0;if(q&1){m=oa()|0;We(n);break}a=c[n+4>>2]|0;if(a|0)vb(d,a,1);h=12}}while(0);if((h|0)==12){c[k>>2]=c[j>>2];c[k+4>>2]=c[j+4>>2];c[k+8>>2]=c[j+8>>2];o=0;aa(15,i|0,k|0);q=o;o=0;if(q&1){q=oa()|0;ya(q|0)};c[n>>2]=c[i>>2];c[n+4>>2]=c[i+4>>2];c[n+8>>2]=c[i+8>>2];c[n+12>>2]=c[i+12>>2];a=tb(16,4,k)|0;if(!a)Te(k);else{c[a>>2]=c[n>>2];c[a+4>>2]=c[n+4>>2];c[a+8>>2]=c[n+8>>2];c[a+12>>2]=c[n+12>>2];l=p;return a|0}}else if((h|0)==17)m=oa()|0;We(j);q=m;ya(q|0);return 0}function pf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;g=l;l=l+32|0;d=g;f=g+8|0;if((c[a>>2]|0)==2){Di(d,a);f=mi(c[d>>2]|0,c[d+4>>2]|0,b)|0;l=g;return f|0}Hi(f,a);e=c[f>>2]|0;o=0;d=X(10,e|0,c[f+8>>2]|0,b|0)|0;b=o;o=0;if(b&1){g=oa()|0;We(f);ya(g|0)}a=c[f+4>>2]|0;if(a|0)vb(e,a,1);f=d;l=g;return f|0}function qf(){var a=0,b=0,c=0,d=0;d=l;l=l+1488|0;b=d+1472|0;c=d+736|0;a=d;fi(a);Il(c|0,a|0,730)|0;a=tb(730,1,b)|0;if(!a)Te(b);else{Il(a|0,c|0,730)|0;l=d;return a|0}return 0}function rf(a){a=a|0;vb(a,730,1);return}function sf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=l;l=l+32|0;d=f;e=f+8|0;if((c[b>>2]|0)==2){Di(d,b);af(a,c[d>>2]|0,c[d+4>>2]|0);l=f;return}Hi(e,b);d=c[e>>2]|0;o=0;ca(17,a|0,d|0,c[e+8>>2]|0);a=o;o=0;if(a&1){f=oa()|0;We(e);ya(f|0)}b=c[e+4>>2]|0;if(b|0)vb(d,b,1);l=f;return}function tf(a){a=a|0;ei(a);return}function uf(b){b=b|0;return a[b+729>>0]|0}function vf(b,c){b=b|0;c=c|0;a[b+729>>0]=c;return}function wf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;m=l;l=l+64|0;j=m+48|0;k=m+32|0;g=m+16|0;i=m;if((b|0)<0)xj(3856);if(b){e=xb(b,1,j)|0;d=j+4|0;f=c[d>>2]|0;d=c[d+4>>2]|0;if(!e){c[j>>2]=c[j>>2];e=j+4|0;c[e>>2]=f;c[e+4>>2]=d;Te(j)}else h=e}else h=1;c[i>>2]=h;c[i+4>>2]=b;c[i+8>>2]=b;o=0;ca(18,a|0,h|0,b|0);h=o;o=0;if(h&1){m=oa()|0;We(i);ya(m|0)};c[j>>2]=c[i>>2];c[j+4>>2]=c[i+4>>2];c[j+8>>2]=c[i+8>>2];Ai(g,j);c[k>>2]=c[g>>2];c[k+4>>2]=c[g+4>>2];c[k+8>>2]=c[g+8>>2];c[k+12>>2]=c[g+12>>2];a=tb(16,4,j)|0;if(!a)Te(j);else{c[a>>2]=c[k>>2];c[a+4>>2]=c[k+4>>2];c[a+8>>2]=c[k+8>>2];c[a+12>>2]=c[k+12>>2];l=m;return a|0}return 0}function xf(a){a=a|0;var b=0,d=0,e=0;e=l;l=l+16|0;d=e;b=tb(16,4,d)|0;if(!b)Te(d);else{c[b>>2]=3;c[b+4>>2]=729;c[b+8>>2]=a;c[b+12>>2]=729;l=e;return b|0}return 0}function yf(){var a=0,b=0,c=0,d=0;d=l;l=l+11696|0;b=d+11680|0;c=d+5840|0;a=d;ii(a);Il(c|0,a|0,5836)|0;a=tb(5836,4,b)|0;if(!a)Te(b);else{Il(a|0,c|0,5836)|0;l=d;return a|0}return 0}function zf(a){a=a|0;vb(a,5836,4);return}function Af(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u=0;u=l;l=l+112|0;e=u;n=u+80|0;q=u+104|0;r=u+64|0;f=u+48|0;m=u+32|0;p=u+24|0;s=u+8|0;if((c[d>>2]|0)==2){Di(e,d);f=c[e>>2]|0;d=c[e+4>>2]|0;i=f+d|0;c[r>>2]=4;c[r+4>>2]=0;j=r+8|0;c[j>>2]=0;o=0;aa(17,r|0,d|0);m=o;o=0;if(m&1){u=oa()|0;Df(r);ya(u|0)}e=c[j>>2]|0;a:do if(!d)d=e;else{d=e;h=(c[r>>2]|0)+(e<<3)|0;b:while(1){m=a[f>>0]|0;f=f+1|0;a[q>>0]=m;switch(m<<24>>24){case -1:{e=0;g=-1;break}case 1:{e=-1;g=0;break}case 0:{e=-1;g=-1;break}default:break b}c[h>>2]=g;c[h+4>>2]=e;d=d+1|0;if((f|0)==(i|0))break a;else h=h+8|0}c[p>>2]=q;c[p+4>>2]=51;c[n>>2]=4168;c[n+4>>2]=1;c[n+8>>2]=0;c[n+16>>2]=p;c[n+20>>2]=1;o=0;aa(7,n|0,4176);o=0;u=oa()|0;Cf(j,d);Df(r);ya(u|0)}while(0);c[j>>2]=d;c[s>>2]=c[r>>2];c[s+4>>2]=c[r+4>>2];c[s+8>>2]=c[r+8>>2]}else{Hi(n,d);i=c[n>>2]|0;h=c[n+4>>2]|0;j=c[n+8>>2]|0;c[m>>2]=4;c[m+4>>2]=0;k=m+8|0;c[k>>2]=0;c[f>>2]=i;c[f+4>>2]=h;c[f+8>>2]=i;c[f+12>>2]=i+j;o=0;aa(17,m|0,j|0);j=o;o=0;if(j&1){u=oa()|0;Ef(f);Df(m);ya(u|0)}g=c[m>>2]|0;e=c[k>>2]|0;c[r>>2]=c[f>>2];c[r+4>>2]=c[f+4>>2];c[r+8>>2]=c[f+8>>2];c[r+12>>2]=c[f+12>>2];i=r+8|0;d=c[i>>2]|0;j=r+12|0;c:do if((d|0)!=(c[j>>2]|0)){h=e;f=g+(e<<3)|0;d:while(1){c[i>>2]=d+1;g=a[d>>0]|0;a[q>>0]=g;switch(g<<24>>24){case -1:{d=0;e=-1;break}case 1:{d=-1;e=0;break}case 0:{d=-1;e=-1;break}default:break d}c[f>>2]=e;c[f+4>>2]=d;e=h+1|0;d=c[i>>2]|0;if((d|0)==(c[j>>2]|0))break c;else{h=e;f=f+8|0}}c[p>>2]=q;c[p+4>>2]=51;c[n>>2]=4168;c[n+4>>2]=1;c[n+8>>2]=0;c[n+16>>2]=p;c[n+20>>2]=1;o=0;aa(7,n|0,4176);o=0;u=oa()|0;Ef(r);Cf(k,h);Df(m);ya(u|0)}while(0);d=c[r+4>>2]|0;if(d|0)vb(c[r>>2]|0,d,1);c[k>>2]=e;c[s>>2]=c[m>>2];c[s+4>>2]=c[m+4>>2];c[s+8>>2]=c[m+8>>2]}k=c[s>>2]|0;d=c[s+8>>2]|0;e=d>>>0<243?d:243;e:do if(d|0){h=d-e|0;i=k;j=e;g=k+(e<<3)|0;while(1){if(j>>>0>729)break;if(j|0){d=0;do{r=c[i+(d<<3)+4>>2]|0;c[b+(d<<3)>>2]=c[i+(d<<3)>>2];c[b+(d<<3)+4>>2]=r;d=d+1|0}while((d|0)!=(j|0))}o=0;$(37,b|0);r=o;o=0;if(r&1){t=37;break}d=(h|0)==0;f=h>>>0<243?h:243;e=g;if(d|(g|0)==0)break e;else{h=d?0:h-f|0;i=e;j=d?j:f;g=d?g:e+(f<<3)|0}}if((t|0)==37){u=oa()|0;Df(s);ya(u|0)}o=0;aa(8,j|0,729);o=0;u=oa()|0;Df(s);ya(u|0)}while(0);d=c[s+4>>2]|0;if(!d){l=u;return}vb(k,d<<3,4);l=u;return}function Bf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;j=l;l=l+16|0;i=j;d=c[a+8>>2]|0;h=a+4|0;e=c[h>>2]|0;if((e-d|0)>>>0>=b>>>0){l=j;return}b=d+b|0;if(b>>>0<d>>>0)Wj(19097,17);g=e<<1;g=b>>>0>=g>>>0?b:g;b=g<<3;if(g>>>0>536870911)xj(4192);if((b|0)<0)xj(3856);if(!e){f=tb(b,4,i)|0;b=0;d=0;e=(f|0)==0&1}else{f=wb(c[a>>2]|0,e<<3,4,b,4,i)|0;k=(f|0)==0;d=i+4|0;b=c[d>>2]|0;d=c[d+4>>2]|0;e=k&1;f=k?c[i>>2]|0:f}if(e|0){c[i>>2]=f;k=i+4|0;c[k>>2]=b;c[k+4>>2]=d;Te(i)}c[a>>2]=f;c[h>>2]=g;l=j;return}function Cf(a,b){a=a|0;b=b|0;c[a>>2]=b;return}function Df(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b<<3,4);return}function Ef(a){a=a|0;var b=0,d=0;b=a+8|0;d=c[a+12>>2]|0;if((c[b>>2]|0)!=(d|0))c[b>>2]=d;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b,1);return}function Ff(a){a=a|0;hi(a);return}function Gf(b){b=b|0;return a[b+5832>>0]|0}function Hf(b,c){b=b|0;c=c|0;a[b+5832>>0]=c;return}function If(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;w=l;l=l+144|0;s=w+112|0;v=w+96|0;p=w+80|0;q=w+64|0;m=w+48|0;u=w+32|0;k=w+16|0;r=w;e=d<<3;do if(d>>>0>536870911){o=0;aa(18,19097,17);o=0}else{if((e|0)<0){o=0;$(30,3856);o=0;break}do if(e){e=tb(e,4,s)|0;if(!e)Te(s);else{f=e;break}}else f=4;while(0);c[v>>2]=f;c[v+4>>2]=d;h=v+8|0;c[h>>2]=0;o=0;aa(17,v|0,d|0);i=o;o=0;if(i&1){w=oa()|0;Df(v);ya(w|0)}g=c[v>>2]|0;e=c[h>>2]|0;f=g+(e<<3)|0;if(d>>>0<=1){if(d)j=13}else{Al(f|0,0,(d<<3)+-8|0)|0;f=d+-1+e|0;e=f;f=g+(f<<3)|0;j=13}if((j|0)==13){c[f>>2]=0;c[f+4>>2]=0;e=e+1|0}c[h>>2]=e;c[k>>2]=c[v>>2];c[k+4>>2]=c[v+4>>2];c[k+8>>2]=c[v+8>>2];i=c[k>>2]|0;h=c[k+8>>2]|0;g=(h>>>0)/243|0;a:do if(h>>>0>242){d=0;while(1){e=d*243|0;d=d+1|0;f=e+243|0;if(f>>>0>h>>>0)break;e=i+(e<<3)|0;f=0;do{x=c[b+(f<<3)+4>>2]|0;c[e+(f<<3)>>2]=c[b+(f<<3)>>2];c[e+(f<<3)+4>>2]=x;f=f+1|0}while((f|0)!=243);o=0;$(37,b|0);x=o;o=0;if(x&1)break a;if(d>>>0>=g>>>0){j=18;break a}}o=0;aa(8,f|0,h|0);o=0}else j=18;while(0);do if((j|0)==18){e=g*243|0;g=h-e|0;if(h>>>0<e>>>0){o=0;aa(12,e|0,h|0);o=0;break}e=i+(e<<3)|0;if(g>>>0>729){o=0;aa(8,g|0,729);o=0;break}if(g|0){f=0;do{x=c[b+(f<<3)+4>>2]|0;c[e+(f<<3)>>2]=c[b+(f<<3)>>2];c[e+(f<<3)+4>>2]=x;f=f+1|0}while((f|0)!=(g|0))}if((h>>>0)%243|0|0?(o=0,$(37,b|0),x=o,o=0,x&1):0)break;x=c[k+4>>2]|0;c[u>>2]=1;c[u+4>>2]=0;b=u+8|0;c[b>>2]=0;c[m>>2]=i;c[m+4>>2]=x;c[m+8>>2]=i;c[m+12>>2]=i+(h<<3);o=0;aa(19,u|0,(h<<3|0)/8|0|0);x=o;o=0;b:do if(!(x&1)){d=c[u>>2]|0;g=c[b>>2]|0;c[q>>2]=c[m>>2];c[q+4>>2]=c[m+4>>2];c[q+8>>2]=c[m+8>>2];c[q+12>>2]=c[m+12>>2];h=q+8|0;i=q+12|0;j=v+4|0;e=c[h>>2]|0;c:do if((e|0)==(c[i>>2]|0))f=g;else{f=g;d=d+g|0;while(1){c[h>>2]=e+8;g=e;e=c[g>>2]|0;g=c[g+4>>2]|0;c[v>>2]=e;c[j>>2]=g;if(!((e|0)==-1&(g|0)==0))if(!((e|0)==0&(g|0)==-1))if((g&e|0)==-1&0==0)e=0;else break;else e=1;else e=-1;a[d>>0]=e;f=f+1|0;e=c[h>>2]|0;if((e|0)==(c[i>>2]|0))break c;else d=d+1|0}c[p>>2]=v;c[p+4>>2]=60;c[s>>2]=4216;c[s+4>>2]=1;c[s+8>>2]=0;c[s+16>>2]=p;c[s+20>>2]=1;o=0;aa(7,s|0,4224);o=0;t=oa()|0;Lf(q);Cf(b,f);break b}while(0);e=c[q+4>>2]|0;if(e|0)vb(c[q>>2]|0,e<<3,4);c[b>>2]=f;c[r>>2]=c[u>>2];c[r+4>>2]=c[u+4>>2];c[r+8>>2]=c[u+8>>2];c[s>>2]=c[r>>2];c[s+4>>2]=c[r+4>>2];c[s+8>>2]=c[r+8>>2];Ai(p,s);c[v>>2]=c[p>>2];c[v+4>>2]=c[p+4>>2];c[v+8>>2]=c[p+8>>2];c[v+12>>2]=c[p+12>>2];e=tb(16,4,s)|0;if(!e)Te(s);else{c[e>>2]=c[v>>2];c[e+4>>2]=c[v+4>>2];c[e+8>>2]=c[v+8>>2];c[e+12>>2]=c[v+12>>2];l=w;return e|0}}else{t=oa()|0;Lf(m)}while(0);We(u);x=t;ya(x|0)}while(0);x=oa()|0;Df(k);ya(x|0)}while(0);x=oa()|0;ya(x|0);return 0}function Jf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;j=l;l=l+16|0;i=j;d=c[a+8>>2]|0;h=a+4|0;e=c[h>>2]|0;if((e-d|0)>>>0>=b>>>0){l=j;return}b=d+b|0;if(b>>>0<d>>>0)Wj(19097,17);g=e<<1;g=b>>>0>=g>>>0?b:g;if((g|0)<0)xj(3856);if(!e){f=tb(g,1,i)|0;b=0;d=0;e=(f|0)==0&1}else{f=wb(c[a>>2]|0,e,1,g,1,i)|0;k=(f|0)==0;d=i+4|0;b=c[d>>2]|0;d=c[d+4>>2]|0;e=k&1;f=k?c[i>>2]|0:f}if(e|0){c[i>>2]=f;k=i+4|0;c[k>>2]=b;c[k+4>>2]=d;Te(i)}c[a>>2]=f;c[h>>2]=g;l=j;return}function Kf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=l;l=l+32|0;f=d+16|0;g=d+12|0;e=d;kk(e,b,28924,0);c[g>>2]=a;c[f>>2]=a+4;Ij(e,g,312)|0;Ij(e,f,312)|0;b=ak(e)|0;l=d;return b|0}function Lf(a){a=a|0;var b=0,d=0,e=0;b=a+8|0;d=c[b>>2]|0;e=c[a+12>>2]|0;if((d|0)!=(e|0))c[b>>2]=d+(((e+-8-d|0)>>>3)+1<<3);b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b<<3,4);return}function Mf(a){a=a|0;return}function Nf(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0;r=l;l=l+2768|0;g=r;p=r+2744|0;q=r+2488|0;j=r+2232|0;i=r+2216|0;n=r+1480|0;m=r+744|0;k=r+8|0;fi(k);fi(m);fi(n);if((c[b>>2]|0)==2){Di(g,b);h=c[g>>2]|0;g=c[g+4>>2]|0;b=f&255;switch(e|0){case 0:{a[j>>0]=1;break}case 1:{Of(j,h,g,d,b,k,m,n);break}default:Pf(j,h,g,d,e,(-1>>>(R(e+-1|0)|0))+1|0,b,k,m,n)}Il(q|0,j|0,252)|0;b=tb(252,4,p)|0;if(!b)Te(p);Il(b|0,q|0,252)|0;q=b;l=r;return q|0}Hi(i,b);h=c[i>>2]|0;g=c[i+8>>2]|0;b=f&255;switch(e|0){case 0:{a[j>>0]=1;break}case 1:{o=0;da(1,j|0,h|0,g|0,d|0,b|0,k|0,m|0,n|0);n=o;o=0;if(n&1){r=oa()|0;We(i);ya(r|0)}break}default:{f=(-1>>>(R(e+-1|0)|0))+1|0;o=0;Y(1,j|0,h|0,g|0,d|0,e|0,f|0,b|0,k|0,m|0,n|0);n=o;o=0;if(n&1){r=oa()|0;We(i);ya(r|0)}}}Il(q|0,j|0,252)|0;g=tb(252,4,p)|0;if(!g)Te(p);Il(g|0,q|0,252)|0;b=c[i+4>>2]|0;if(b|0)vb(h,b,1);q=g;l=r;return q|0}function Of(b,c,d,e,f,g,h,i){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,m=0;k=l;l=l+496|0;j=k+243|0;m=k;Al(m|0,0,243)|0;Al(j|0,0,243)|0;$e(c,d,e,m,243,g);ei(g);f=f*6561|0;c=(f>>>0)/243|0;af(g,m,243);if(f>>>0>242){d=0;do{bf(g,j,243);e=0;do{e=e+1<<24>>24;ei(h);af(h,j,243);Il(j|0,h|0,243)|0}while(e<<24>>24<27);d=d+1|0;af(i,j,243)}while(d>>>0<c>>>0)}bf(i,j,243);ei(g);ei(h);ei(i);af(g,j,243);bf(g,j,243);ei(g);ei(g);a[b>>0]=0;Il(b+1|0,j|0,243)|0;l=k;return}function Pf(b,d,e,f,g,h,i,j,k,m){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;m=m|0;var n=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;w=l;l=l+1744|0;u=w+768|0;v=w+512|0;t=w+1497|0;r=w+1254|0;n=w+1011|0;s=w+256|0;p=w;if(!g){a[b>>0]=1;l=w;return}switch(h|0){case 0:{a[b>>0]=1;l=w;return}case 1:{Of(b,d,e,f,i,j,k,m);l=w;return}default:{x=((-1>>>(R(g+-1|0)|0))+1|0)>>>1;x=g>>>0<2?0:x;g=g-x|0;h=h>>>1;Pf(p,d,e,f,g,h,i,j,k,m);o=0;Y(1,s|0,d|0,e|0,g+f|0,x|0,h|0,i|0,j|0,k|0,m|0);m=o;o=0;if(m&1){x=oa()|0;Qf(p);ya(x|0)}switch(a[p>>0]&3){case 0:{Il(n|0,p+1|0,243)|0;o=0;ca(17,j|0,n|0,243);x=o;o=0;if(!(x&1))q=11;break}case 2:{Il(t|0,p+1|0,243)|0;o=0;ca(17,j|0,t|0,243);x=o;o=0;if(!(x&1))q=11;break}default:{o=0;ca(17,j|0,28924,243);x=o;o=0;if(!(x&1))q=11}}a:do if((q|0)==11){switch(a[s>>0]&3){case 0:{Il(v|0,s+1|0,243)|0;o=0;ca(17,j|0,v|0,243);x=o;o=0;if(x&1)break a;break}case 2:{Il(u|0,s+1|0,243)|0;o=0;ca(17,j|0,u|0,243);x=o;o=0;if(x&1)break a;break}default:{o=0;ca(17,j|0,28924,243);x=o;o=0;if(x&1)break a}}Al(r|0,0,243)|0;o=0;ca(18,j|0,r|0,243);x=o;o=0;if(!(x&1)?(o=0,$(39,j|0),x=o,o=0,!(x&1)):0){Il(v|0,p|0,252)|0;e=tb(252,4,u)|0;if(!e)Te(u);Il(e|0,v|0,252)|0;Il(t|0,r|0,243)|0;Il(v|0,s|0,252)|0;d=tb(252,4,u)|0;if(!d)Te(u);Il(d|0,v|0,252)|0;a[b>>0]=2;c[b+244>>2]=e;Il(b+1|0,t|0,243)|0;c[b+248>>2]=d;l=w;return}}while(0);x=oa()|0;Qf(s);Qf(p);ya(x|0)}}}function Qf(a){a=a|0;var b=0,e=0;if((d[a>>0]|0)<2)return;b=a+244|0;o=0;$(41,c[b>>2]|0);e=o;o=0;if(e&1){e=oa()|0;Rf(c[b>>2]|0);Sf(a+248|0);ya(e|0)}vb(c[b>>2]|0,252,4);a=a+248|0;o=0;$(41,c[a>>2]|0);e=o;o=0;if(e&1){e=oa()|0;Rf(c[a>>2]|0);ya(e|0)}vb(c[a>>2]|0,252,4);return}function Rf(a){a=a|0;vb(a,252,4);return}function Sf(a){a=a|0;var b=0;o=0;$(41,c[a>>2]|0);b=o;o=0;if(b&1){b=oa()|0;Rf(c[a>>2]|0);ya(b|0)}else{vb(c[a>>2]|0,252,4);return}}function Tf(a){a=a|0;var b=0;o=0;$(41,a|0);b=o;o=0;if(b&1){b=oa()|0;Rf(a);ya(b|0)}else{vb(a,252,4);return}}function Uf(a){a=a|0;return Zh(a)|0}function Vf(a){a=a|0;return _h(a)|0}function Wf(a){a=a|0;return $h(a)|0}function Xf(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;j=l;l=l+64|0;h=j+48|0;i=j+32|0;f=j+16|0;g=j;b=xb(243,1,h)|0;e=h+4|0;d=c[e>>2]|0;e=c[e+4>>2]|0;if(!b){c[h>>2]=c[h>>2];k=h+4|0;c[k>>2]=d;c[k+4>>2]=e;Te(h)}c[g>>2]=b;c[g+4>>2]=243;c[g+8>>2]=243;o=0;ca(19,a|0,b|0,243);k=o;o=0;if(k&1){k=oa()|0;We(g);ya(k|0)};c[h>>2]=c[g>>2];c[h+4>>2]=c[g+4>>2];c[h+8>>2]=c[g+8>>2];Ai(f,h);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Yf(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;e=l;l=l+512|0;c=e+496|0;d=e+248|0;f=e;bi(f,a,b);Il(d|0,f|0,248)|0;a=tb(248,4,c)|0;if(!a)Te(c);else{Il(a|0,d|0,248)|0;l=e;return a|0}return 0}function Zf(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;c[d>>2]=a;_f(d);l=b;return}function _f(a){a=a|0;var b=0,d=0;b=c[a>>2]|0;d=b+244|0;if(!(c[d>>2]|0)){d=b;vb(d,248,4);return}o=0;$(42,d|0);d=o;o=0;if(d&1){d=oa()|0;$f(c[a>>2]|0);ya(d|0)}d=c[a>>2]|0;vb(d,248,4);return}function $f(a){a=a|0;vb(a,248,4);return}function ag(a){a=a|0;return ci(a)|0}function bg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;m=l;l=l+64|0;j=m+48|0;k=m+32|0;g=m+16|0;h=m;d=(ci(a)|0)*243|0;if((d|0)<0)xj(3856);if(d){e=xb(d,1,j)|0;b=j+4|0;f=c[b>>2]|0;b=c[b+4>>2]|0;if(!e){c[j>>2]=c[j>>2];e=j+4|0;c[e>>2]=f;c[e+4>>2]=b;Te(j)}else i=e}else i=1;c[h>>2]=i;c[h+4>>2]=d;c[h+8>>2]=d;o=0;ia(3,a|0,d+-243|0,i|0,d|0);i=o;o=0;if(i&1){m=oa()|0;We(h);ya(m|0)};c[j>>2]=c[h>>2];c[j+4>>2]=c[h+4>>2];c[j+8>>2]=c[h+8>>2];Ai(g,j);c[k>>2]=c[g>>2];c[k+4>>2]=c[g+4>>2];c[k+8>>2]=c[g+8>>2];c[k+12>>2]=c[g+12>>2];a=tb(16,4,j)|0;if(!a)Te(j);else{c[a>>2]=c[k>>2];c[a+4>>2]=c[k+4>>2];c[a+8>>2]=c[k+8>>2];c[a+12>>2]=c[k+12>>2];l=m;return a|0}return 0}function cg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0;t=l;l=l+832|0;h=t+16|0;f=t;r=t+808|0;s=t+792|0;q=t+776|0;n=t+760|0;p=t+24|0;fi(p);Di(f,a);e=c[f>>2]|0;f=c[f+4>>2]|0;Di(h,b);m=c[h>>2]|0;h=c[h+4>>2]|0;if((f|0)<0)xj(3856);if(f){a=tb(f,1,r)|0;if(!a){c[r>>2]=0;Te(r)}else g=a}else g=1;c[s>>2]=g;c[s+4>>2]=f;a=s+8|0;c[a>>2]=0;o=0;aa(19,s|0,f|0);k=o;o=0;if(k&1){t=oa()|0;We(s);ya(t|0)}b=c[a>>2]|0;c[a>>2]=b+f;Il((c[s>>2]|0)+b|0,e|0,f|0)|0;c[q>>2]=c[s>>2];c[q+4>>2]=c[s+4>>2];c[q+8>>2]=c[s+8>>2];b=h>>>0<243?h:243;a:do if(h|0){k=c[q>>2]|0;a=c[q+8>>2]|0;b:do if((a|0)!=243){o=0;$(39,p|0);t=o;o=0;if(!(t&1)){if(!(d&1)){o=0;ca(17,p|0,k|0,a|0);t=o;o=0;if(t&1)break;o=0;ca(17,p|0,m|0,b|0);t=o;o=0;if(t&1)break}else{o=0;ca(17,p|0,m|0,b|0);t=o;o=0;if(t&1)break;o=0;ca(17,p|0,k|0,a|0);t=o;o=0;if(t&1)break}o=0;$(30,3904);o=0}}else{g=h-b|0;h=m;i=b;j=1;f=m+b|0;while(1){o=0;$(39,p|0);m=o;o=0;if(m&1)break b;if(!(j&d)){o=0;ca(17,p|0,k|0,243);m=o;o=0;if(m&1)break b;o=0;ca(17,p|0,h|0,i|0);m=o;o=0;if(m&1)break b}else{o=0;ca(17,p|0,h|0,i|0);m=o;o=0;if(m&1)break b;o=0;ca(17,p|0,k|0,243);m=o;o=0;if(m&1)break b}Il(k|0,p|0,243)|0;a=(g|0)==0;e=g>>>0<243?g:243;b=f;if(a|(f|0)==0)break a;else{g=a?0:g-e|0;h=b;i=a?i:e;j=j<<1;f=a?f:b+e|0}}}while(0);t=oa()|0;We(q);ya(t|0)}while(0);a=c[q+4>>2]|0;if(a|0)vb(c[q>>2]|0,a,1);a=tb(243,1,r)|0;if(!a){c[r>>2]=0;Te(r)}c[s>>2]=a;c[s+4>>2]=243;a=s+8|0;c[a>>2]=0;o=0;aa(19,s|0,243);d=o;o=0;if(d&1){t=oa()|0;We(s);ya(t|0)}d=c[a>>2]|0;c[a>>2]=d+243;Il((c[s>>2]|0)+d|0,p|0,243)|0;c[q>>2]=c[s>>2];c[q+4>>2]=c[s+4>>2];c[q+8>>2]=c[s+8>>2];Ai(n,q);c[s>>2]=c[n>>2];c[s+4>>2]=c[n+4>>2];c[s+8>>2]=c[n+8>>2];c[s+12>>2]=c[n+12>>2];a=tb(16,4,r)|0;if(!a)Te(r);else{c[a>>2]=c[s>>2];c[a+4>>2]=c[s+4>>2];c[a+8>>2]=c[s+8>>2];c[a+12>>2]=c[s+12>>2];l=t;return a|0}return 0}function dg(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,A=0,B=0;B=l;l=l+592|0;q=B+16|0;n=B;x=B+344|0;A=B+320|0;w=B+304|0;v=B+288|0;s=B+40|0;y=B+24|0;p=b+(d<<4)|0;k=(d|0)==0;if(k)f=0;else{g=b;f=0;do{f=((c[g>>2]|0)!=2&1)+f|0;g=g+16|0}while((g|0)!=(p|0))}c[s>>2]=f;c[v>>2]=28348;c[w>>2]=s;if(f|0){c[x>>2]=v;c[x+4>>2]=18;c[x+8>>2]=w;c[x+12>>2]=18;c[A>>2]=3944;c[A+4>>2]=3;c[A+8>>2]=0;c[A+16>>2]=x;c[A+20>>2]=2;uj(A,4240)}c[A>>2]=4;h=A+4|0;c[h>>2]=0;m=A+8|0;c[m>>2]=0;j=d<<4;g=(j|0)/16|0;a:do if((j|15)>>>0>30){f=g<<3;do if(g>>>0<=536870911){if((f|0)<0){o=0;$(30,3856);o=0;break}f=tb(f,4,x)|0;if(!f){c[x>>2]=0;Te(x)}else{c[A>>2]=f;c[h>>2]=g;g=f;break a}}else{o=0;$(30,4192);o=0}while(0);B=oa()|0;fg(A);ya(B|0)}else g=4;while(0);i=x+4|0;j=x+8|0;b:do if(k)f=0;else{f=0;while(1){o=0;aa(13,n|0,b|0);b=b+16|0;k=o;o=0;if(k&1)break;o=0;ca(20,x|0,c[n>>2]|0,c[n+4>>2]|0);k=o;o=0;if(k&1)break;if(a[x>>0]|0){t=18;break}h=c[i>>2]|0;d=c[j>>2]|0;if(!h)break b;k=g;c[k>>2]=h;c[k+4>>2]=d;f=f+1|0;if((b|0)==(p|0))break b;else g=g+8|0}if((t|0)==18){o=0;$(43,a[x+1>>0]|0);o=0}B=oa()|0;Cf(m,f);fg(A);ya(B|0)}while(0);c[m>>2]=f;c[y>>2]=c[A>>2];c[y+4>>2]=c[A+4>>2];c[y+8>>2]=c[A+8>>2];j=c[y>>2]|0;f=c[y+8>>2]|0;c:do if(f|0){g=j+(f<<3)|0;b=0;d:while(1){i=j;while(1){if((i|0)==(g|0))break;o=0;h=ba(15,i|0)|0;d=z;p=o;o=0;if(p&1){t=47;break d}if((h|0)==(b|0)&(d|0)==0){t=33;break}else i=i+8|0}b=b+1|0;if((t|0)==33){t=0;o=0;aa(20,q|0,i|0);p=o;o=0;if(p&1){t=48;break}o=0;ca(15,e|0,c[q>>2]|0,c[q+4>>2]|0);p=o;o=0;if(p&1){t=48;break}}if(b>>>0>=f>>>0)break c}if((t|0)==47){B=oa()|0;fg(y);ya(B|0)}else if((t|0)==48){B=oa()|0;fg(y);ya(B|0)}}while(0);o=0;$(44,x|0);t=o;o=0;if((((!(t&1)?(o=0,r=ba(14,x|0)|0,t=o,o=0,!(t&1)):0)?(o=0,ca(16,e|0,r|0,243),t=o,o=0,!(t&1)):0)?(o=0,$(45,e|0),t=o,o=0,!(t&1)):0)?(Il(s|0,x|0,243)|0,o=0,u=ba(16,s|0)|0,t=o,o=0,!(t&1)):0){f=tb(243,1,x)|0;if(!f){c[x>>2]=0;Te(x)}c[A>>2]=f;c[A+4>>2]=243;f=A+8|0;c[f>>2]=0;o=0;aa(19,A|0,243);t=o;o=0;if(t&1){B=oa()|0;We(A);fg(y);ya(B|0)}t=c[f>>2]|0;c[f>>2]=t+243;Il((c[A>>2]|0)+t|0,u|0,243)|0;c[w>>2]=c[A>>2];c[w+4>>2]=c[A+4>>2];c[w+8>>2]=c[A+8>>2];o=0;aa(15,v|0,w|0);w=o;o=0;if(!(w&1)){c[A>>2]=c[v>>2];c[A+4>>2]=c[v+4>>2];c[A+8>>2]=c[v+8>>2];c[A+12>>2]=c[v+12>>2];g=tb(16,4,x)|0;if(!g)Te(x);c[g>>2]=c[A>>2];c[g+4>>2]=c[A+4>>2];c[g+8>>2]=c[A+8>>2];c[g+12>>2]=c[A+12>>2];f=c[y+4>>2]|0;if(!f){l=B;return g|0}vb(j,f<<3,4);l=B;return g|0}}B=oa()|0;fg(y);ya(B|0);return 0}function eg(b){b=b|0;var d=0,e=0,f=0,g=0;g=l;l=l+64|0;e=g+32|0;d=g+8|0;f=g+48|0;c[g>>2]=19862;c[g+4>>2]=43;a[f>>0]=b;c[e>>2]=g;c[e+4>>2]=61;c[e+8>>2]=f;c[e+12>>2]=62;c[d>>2]=4256;c[d+4>>2]=2;c[d+8>>2]=0;c[d+16>>2]=e;c[d+20>>2]=2;uj(d,4272)}function fg(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b<<3,4);return}function gg(a,b){a=a|0;b=b|0;return ok(c[a>>2]|0,c[a+4>>2]|0,b)|0}function hg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);ph(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function ig(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);qh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function jg(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;Di(d,a);a=rh(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function kg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);sh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function lg(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;Di(d,a);a=th(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function mg(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;Di(d,a);a=uh(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function ng(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;Di(d,a);a=vh(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function og(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);wh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function pg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);xh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function qg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);yh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function rg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);zh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function sg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Ah(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function tg(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;d=f;Ei(d,a);e=c[d>>2]|0;d=c[d+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(d>>>0<6561)rj(6561,d);if(b>>>0>6561)rj(b,6561);if(b|0?(Il(e|0,a|0,b|0)|0,(b|0)==6561):0){l=f;return}a=6561-b|0;if(!a){l=f;return}Al(e+b|0,0,a|0)|0;l=f;return}function ug(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;e=f;Ei(e,a);d=c[e>>2]|0;e=c[e+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(e>>>0<6804)rj(6804,e);if((b|0)==243){Il(d+6561|0,a|0,243)|0;l=f;return}else xj(3904)}function vg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<6885)rj(6885,e);else{Ki(b,d,a+6804|0,81);l=f;return}}function wg(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;g=l;l=l+32|0;h=g+16|0;f=g;Ei(f,b);e=c[f>>2]|0;f=c[f+4>>2]|0;Di(h,d);b=c[h>>2]|0;d=c[h+4>>2]|0;if(f>>>0<6966)rj(6966,f);if((d|0)==81){e=e+6885|0;d=e+81|0;do{a[e>>0]=a[b>>0]|0;e=e+1|0;b=b+1|0}while((e|0)<(d|0));l=g;return}else xj(3904)}function xg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<6993)rj(6993,e);else{Ki(b,d,a+6966|0,27);l=f;return}}function yg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<7020)rj(7020,e);else{Ki(b,d,a+6993|0,27);l=f;return}}function zg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<7020)rj(7020,e);else{Ki(b,d,a+6993|0,27);l=f;return}}function Ag(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;e=f;Ei(e,a);d=c[e>>2]|0;e=c[e+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(e>>>0<7290)rj(7290,e);if((b|0)==243){Il(d+7047|0,a|0,243)|0;l=f;return}else xj(3904)}function Bg(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;e=f;Ei(e,a);d=c[e>>2]|0;e=c[e+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(e>>>0<7533)rj(7533,e);if((b|0)==243){Il(d+7290|0,a|0,243)|0;l=f;return}else xj(3904)}function Cg(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;e=f;Ei(e,a);d=c[e>>2]|0;e=c[e+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(e>>>0<7776)rj(7776,e);if((b|0)==243){Il(d+7533|0,a|0,243)|0;l=f;return}else xj(3904)}function Dg(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;e=f;Ei(e,a);d=c[e>>2]|0;e=c[e+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(e>>>0<8019)rj(8019,e);if((b|0)==243){Il(d+7776|0,a|0,243)|0;l=f;return}else xj(3904)}function Eg(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+560|0;m=i;g=i+304|0;h=i+288|0;f=i+272|0;e=i+256|0;j=i+8|0;Di(m,b);k=c[m>>2]|0;b=c[m+4>>2]|0;Uh(g);a[d+729>>0]=27;af(d,k,b);bf(d,Wh(g)|0,243);ei(d);Il(j|0,g|0,243)|0;d=Vh(j)|0;b=tb(243,1,g)|0;if(!b){c[g>>2]=0;Te(g)}c[h>>2]=b;c[h+4>>2]=243;b=h+8|0;c[b>>2]=0;o=0;aa(19,h|0,243);m=o;o=0;if(m&1){m=oa()|0;We(h);ya(m|0)}m=c[b>>2]|0;c[b>>2]=m+243;Il((c[h>>2]|0)+m|0,d|0,243)|0;c[f>>2]=c[h>>2];c[f+4>>2]=c[h+4>>2];c[f+8>>2]=c[h+8>>2];Ai(e,f);c[h>>2]=c[e>>2];c[h+4>>2]=c[e+4>>2];c[h+8>>2]=c[e+8>>2];c[h+12>>2]=c[e+12>>2];b=tb(16,4,g)|0;if(!b)Te(g);else{c[b>>2]=c[h>>2];c[b+4>>2]=c[h+4>>2];c[b+8>>2]=c[h+8>>2];c[b+12>>2]=c[h+12>>2];l=i;return b|0}return 0}function Fg(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,A=0,B=0;B=l;l=l+592|0;q=B+16|0;n=B;x=B+344|0;A=B+320|0;w=B+304|0;v=B+288|0;s=B+40|0;y=B+24|0;p=b+(d<<4)|0;k=(d|0)==0;if(k)f=0;else{g=b;f=0;do{f=((c[g>>2]|0)!=2&1)+f|0;g=g+16|0}while((g|0)!=(p|0))}c[s>>2]=f;c[v>>2]=28348;c[w>>2]=s;if(f|0){c[x>>2]=v;c[x+4>>2]=18;c[x+8>>2]=w;c[x+12>>2]=18;c[A>>2]=3944;c[A+4>>2]=3;c[A+8>>2]=0;c[A+16>>2]=x;c[A+20>>2]=2;uj(A,4288)}c[A>>2]=4;h=A+4|0;c[h>>2]=0;m=A+8|0;c[m>>2]=0;j=d<<4;g=(j|0)/16|0;a:do if((j|15)>>>0>30){f=g<<3;do if(g>>>0<=536870911){if((f|0)<0){o=0;$(30,3856);o=0;break}f=tb(f,4,x)|0;if(!f){c[x>>2]=0;Te(x)}else{c[A>>2]=f;c[h>>2]=g;g=f;break a}}else{o=0;$(30,4192);o=0}while(0);B=oa()|0;Hg(A);ya(B|0)}else g=4;while(0);i=x+4|0;j=x+8|0;b:do if(k)f=0;else{f=0;while(1){o=0;aa(13,n|0,b|0);b=b+16|0;k=o;o=0;if(k&1)break;o=0;ca(21,x|0,c[n>>2]|0,c[n+4>>2]|0);k=o;o=0;if(k&1)break;if(a[x>>0]|0){t=18;break}h=c[i>>2]|0;d=c[j>>2]|0;if(!h)break b;k=g;c[k>>2]=h;c[k+4>>2]=d;f=f+1|0;if((b|0)==(p|0))break b;else g=g+8|0}if((t|0)==18){o=0;$(46,a[x+1>>0]|0);o=0}B=oa()|0;Cf(m,f);Hg(A);ya(B|0)}while(0);c[m>>2]=f;c[y>>2]=c[A>>2];c[y+4>>2]=c[A+4>>2];c[y+8>>2]=c[A+8>>2];j=c[y>>2]|0;f=c[y+8>>2]|0;c:do if(f|0){g=j+(f<<3)|0;b=0;d:while(1){i=j;while(1){if((i|0)==(g|0))break;o=0;h=ba(17,i|0)|0;d=z;p=o;o=0;if(p&1){t=47;break d}if((h|0)==(b|0)&(d|0)==0){t=33;break}else i=i+8|0}b=b+1|0;if((t|0)==33){t=0;o=0;aa(21,q|0,i|0);p=o;o=0;if(p&1){t=48;break}o=0;ca(15,e|0,c[q>>2]|0,c[q+4>>2]|0);p=o;o=0;if(p&1){t=48;break}}if(b>>>0>=f>>>0)break c}if((t|0)==47){B=oa()|0;Hg(y);ya(B|0)}else if((t|0)==48){B=oa()|0;Hg(y);ya(B|0)}}while(0);o=0;$(44,x|0);t=o;o=0;if((((!(t&1)?(o=0,r=ba(14,x|0)|0,t=o,o=0,!(t&1)):0)?(o=0,ca(16,e|0,r|0,243),t=o,o=0,!(t&1)):0)?(o=0,$(45,e|0),t=o,o=0,!(t&1)):0)?(Il(s|0,x|0,243)|0,o=0,u=ba(16,s|0)|0,t=o,o=0,!(t&1)):0){f=tb(243,1,x)|0;if(!f){c[x>>2]=0;Te(x)}c[A>>2]=f;c[A+4>>2]=243;f=A+8|0;c[f>>2]=0;o=0;aa(19,A|0,243);t=o;o=0;if(t&1){B=oa()|0;We(A);Hg(y);ya(B|0)}t=c[f>>2]|0;c[f>>2]=t+243;Il((c[A>>2]|0)+t|0,u|0,243)|0;c[w>>2]=c[A>>2];c[w+4>>2]=c[A+4>>2];c[w+8>>2]=c[A+8>>2];o=0;aa(15,v|0,w|0);w=o;o=0;if(!(w&1)){c[A>>2]=c[v>>2];c[A+4>>2]=c[v+4>>2];c[A+8>>2]=c[v+8>>2];c[A+12>>2]=c[v+12>>2];g=tb(16,4,x)|0;if(!g)Te(x);c[g>>2]=c[A>>2];c[g+4>>2]=c[A+4>>2];c[g+8>>2]=c[A+8>>2];c[g+12>>2]=c[A+12>>2];f=c[y+4>>2]|0;if(!f){l=B;return g|0}vb(j,f<<3,4);l=B;return g|0}}B=oa()|0;Hg(y);ya(B|0);return 0}function Gg(b){b=b|0;var d=0,e=0,f=0,g=0;g=l;l=l+64|0;e=g+32|0;d=g+8|0;f=g+48|0;c[g>>2]=19862;c[g+4>>2]=43;a[f>>0]=b;c[e>>2]=g;c[e+4>>2]=61;c[e+8>>2]=f;c[e+12>>2]=63;c[d>>2]=4256;c[d+4>>2]=2;c[d+8>>2]=0;c[d+16>>2]=e;c[d+20>>2]=2;uj(d,4272)}function Hg(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b<<3,4);return}function Ig(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Eh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Jg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Fh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Kg(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;Di(d,a);a=Gh(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function Lg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Hh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Mg(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;Di(d,a);a=Ih(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function Ng(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;Di(d,a);a=Jh(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function Og(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;Di(d,a);a=Kh(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function Pg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Lh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Qg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Mh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Rg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Nh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Sg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Oh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Tg(a){a=a|0;var b=0,d=0,e=0;b=l;l=l+32|0;d=b+16|0;e=b;Di(e,a);Oh(d,c[e>>2]|0,c[e+4>>2]|0);a=Ph(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function Ug(a){a=a|0;var b=0,d=0,e=0;b=l;l=l+32|0;d=b+16|0;e=b;Di(e,a);Oh(d,c[e>>2]|0,c[e+4>>2]|0);a=Qh(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function Vg(a){a=a|0;var b=0,d=0,e=0;b=l;l=l+32|0;d=b+16|0;e=b;Di(e,a);Oh(d,c[e>>2]|0,c[e+4>>2]|0);a=Rh(c[d>>2]|0,c[d+4>>2]|0)|0;l=b;return a|0}function Wg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Sh(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Xg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+96|0;d=j+16|0;b=j;h=j+72|0;i=j+56|0;g=j+40|0;f=j+24|0;Di(b,a);Th(d,c[b>>2]|0,c[b+4>>2]|0);b=c[d>>2]|0;d=c[d+4>>2]|0;if((d|0)<0)xj(3856);if(d){a=tb(d,1,h)|0;if(!a){c[h>>2]=0;Te(h)}else e=a}else e=1;c[i>>2]=e;c[i+4>>2]=d;a=i+8|0;c[a>>2]=0;o=0;aa(19,i|0,d|0);e=o;o=0;if(e&1){j=oa()|0;We(i);ya(j|0)}e=c[a>>2]|0;c[a>>2]=e+d;Il((c[i>>2]|0)+e|0,b|0,d|0)|0;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];c[g+8>>2]=c[i+8>>2];Ai(f,g);c[i>>2]=c[f>>2];c[i+4>>2]=c[f+4>>2];c[i+8>>2]=c[f+8>>2];c[i+12>>2]=c[f+12>>2];a=tb(16,4,h)|0;if(!a)Te(h);else{c[a>>2]=c[i>>2];c[a+4>>2]=c[i+4>>2];c[a+8>>2]=c[i+8>>2];c[a+12>>2]=c[i+12>>2];l=j;return a|0}return 0}function Yg(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;d=f;Ei(d,a);e=c[d>>2]|0;d=c[d+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(d>>>0<6561)rj(6561,d);if(b>>>0>6561)rj(b,6561);if(b|0?(Il(e|0,a|0,b|0)|0,(b|0)==6561):0){l=f;return}a=6561-b|0;if(!a){l=f;return}Al(e+b|0,0,a|0)|0;l=f;return}function Zg(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;e=f;Ei(e,a);d=c[e>>2]|0;e=c[e+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(e>>>0<6804)rj(6804,e);if((b|0)==243){Il(d+6561|0,a|0,243)|0;l=f;return}else xj(3904)}function _g(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<7776)rj(7776,e);else{Ki(b,d,a+6804|0,972);l=f;return}}function $g(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;g=l;l=l+32|0;h=g+16|0;f=g;Ei(f,b);e=c[f>>2]|0;f=c[f+4>>2]|0;Di(h,d);b=c[h>>2]|0;d=c[h+4>>2]|0;if(f>>>0<6966)rj(6966,f);if((d|0)==81){e=e+6885|0;d=e+81|0;do{a[e>>0]=a[b>>0]|0;e=e+1|0;b=b+1|0}while((e|0)<(d|0));l=g;return}else xj(3904)}function ah(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<6993)rj(6993,e);else{Ki(b,d,a+6966|0,27);l=f;return}}function bh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<7020)rj(7020,e);else{Ki(b,d,a+6993|0,27);l=f;return}}function ch(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<7020)rj(7020,e);else{Ki(b,d,a+6993|0,27);l=f;return}}function dh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;e=f;Ei(e,a);d=c[e>>2]|0;e=c[e+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(e>>>0<7290)rj(7290,e);if((b|0)==243){Il(d+7047|0,a|0,243)|0;l=f;return}else xj(3904)}function eh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;e=f;Ei(e,a);d=c[e>>2]|0;e=c[e+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(e>>>0<7533)rj(7533,e);if((b|0)==243){Il(d+7290|0,a|0,243)|0;l=f;return}else xj(3904)}function fh(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;f=l;l=l+32|0;g=f+16|0;e=f;Ei(e,a);d=c[e>>2]|0;e=c[e+4>>2]|0;Di(g,b);a=c[g>>2]|0;b=c[g+4>>2]|0;if(e>>>0<7776)rj(7776,e);if((b|0)==243){Il(d+7533|0,a|0,243)|0;l=f;return}else xj(3904)}function gh(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;g=l;l=l+32|0;h=g+16|0;f=g;Ei(f,b);e=c[f>>2]|0;f=c[f+4>>2]|0;Di(h,d);b=c[h>>2]|0;d=c[h+4>>2]|0;if(f>>>0<7857)rj(7857,f);if((d|0)==81){e=e+7776|0;d=e+81|0;do{a[e>>0]=a[b>>0]|0;e=e+1|0;b=b+1|0}while((e|0)<(d|0));l=g;return}else xj(3904)}function hh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<7884)rj(7884,e);else{Ki(b,d,a+7857|0,27);l=f;return}}function ih(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<7911)rj(7911,e);else{Ki(b,d,a+7884|0,27);l=f;return}}function jh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;Ei(e,a);a=c[e>>2]|0;e=c[e+4>>2]|0;if(e>>>0<7938)rj(7938,e);else{Ki(b,d,a+7911|0,27);l=f;return}}function kh(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;g=l;l=l+32|0;h=g+16|0;f=g;Ei(f,b);e=c[f>>2]|0;f=c[f+4>>2]|0;Di(h,d);b=c[h>>2]|0;d=c[h+4>>2]|0;if(f>>>0<8019)rj(8019,f);if((d|0)==81){e=e+7938|0;d=e+81|0;do{a[e>>0]=a[b>>0]|0;e=e+1|0;b=b+1|0}while((e|0)<(d|0));l=g;return}else xj(3904)}function lh(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+560|0;m=i;g=i+304|0;h=i+288|0;f=i+272|0;e=i+256|0;j=i+8|0;Di(m,b);k=c[m>>2]|0;b=c[m+4>>2]|0;Uh(g);a[d+729>>0]=81;af(d,k,b);bf(d,Wh(g)|0,243);ei(d);Il(j|0,g|0,243)|0;d=Vh(j)|0;b=tb(243,1,g)|0;if(!b){c[g>>2]=0;Te(g)}c[h>>2]=b;c[h+4>>2]=243;b=h+8|0;c[b>>2]=0;o=0;aa(19,h|0,243);m=o;o=0;if(m&1){m=oa()|0;We(h);ya(m|0)}m=c[b>>2]|0;c[b>>2]=m+243;Il((c[h>>2]|0)+m|0,d|0,243)|0;c[f>>2]=c[h>>2];c[f+4>>2]=c[h+4>>2];c[f+8>>2]=c[h+8>>2];Ai(e,f);c[h>>2]=c[e>>2];c[h+4>>2]=c[e+4>>2];c[h+8>>2]=c[e+8>>2];c[h+12>>2]=c[e+12>>2];b=tb(16,4,g)|0;if(!b)Te(g);else{c[b>>2]=c[h>>2];c[b+4>>2]=c[h+4>>2];c[b+8>>2]=c[h+8>>2];c[b+12>>2]=c[h+12>>2];l=i;return b|0}return 0}function mh(b,d,e){b=b|0;d=d|0;e=e|0;if((e|0)==8019){a[b>>0]=0;c[b+4>>2]=d;c[b+8>>2]=8019;return}else{a[b>>0]=1;a[b+1>>0]=0;return}}function nh(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(b>>>0<7020)rj(7020,b);else{b=Ji((c[a>>2]|0)+6993|0,27)|0;return b|0}return 0}function oh(a,b){a=a|0;b=b|0;var d=0;d=c[b>>2]|0;b=c[b+4>>2]|0;if(b>>>0<6561)yj(6561,b);b=b+-6561|0;if(b>>>0<486)rj(486,b);else{c[a>>2]=d+6561;c[a+4>>2]=486;return}}function ph(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<6561)rj(6561,d);else{c[a>>2]=b;c[a+4>>2]=6561;return}}function qh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<6804)rj(6804,d);else{c[a>>2]=b+6561;c[a+4>>2]=243;return}}function rh(a,b){a=a|0;b=b|0;if(b>>>0<6885)rj(6885,b);else{b=Ji(a+6804|0,81)|0;return b|0}return 0}function sh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<6966)rj(6966,d);else{c[a>>2]=b+6885;c[a+4>>2]=81;return}}function th(a,b){a=a|0;b=b|0;if(b>>>0<6993)rj(6993,b);else{b=Ji(a+6966|0,27)|0;return b|0}return 0}function uh(a,b){a=a|0;b=b|0;if(b>>>0<7020)rj(7020,b);else{b=Ji(a+6993|0,27)|0;return b|0}return 0}function vh(a,b){a=a|0;b=b|0;if(b>>>0<7047)rj(7047,b);else{b=Ji(a+7020|0,27)|0;return b|0}return 0}function wh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<7290)rj(7290,d);else{c[a>>2]=b+7047;c[a+4>>2]=243;return}}function xh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<7533)rj(7533,d);else{c[a>>2]=b+7290;c[a+4>>2]=243;return}}function yh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<7776)rj(7776,d);else{c[a>>2]=b+7533;c[a+4>>2]=243;return}}function zh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<8019)rj(8019,d);else{c[a>>2]=b+7776;c[a+4>>2]=243;return}}function Ah(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<6561)yj(6561,d);d=d+-6561|0;if(d>>>0<486)rj(486,d);else{c[a>>2]=b+6561;c[a+4>>2]=486;return}}function Bh(b,d,e){b=b|0;d=d|0;e=e|0;if((e|0)==8019){a[b>>0]=0;c[b+4>>2]=d;c[b+8>>2]=8019;return}else{a[b>>0]=1;a[b+1>>0]=0;return}}function Ch(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(b>>>0<7020)rj(7020,b);else{b=Ji((c[a>>2]|0)+6993|0,27)|0;return b|0}return 0}function Dh(a,b){a=a|0;b=b|0;var d=0;d=c[b>>2]|0;b=c[b+4>>2]|0;if(b>>>0<6561)yj(6561,b);b=b+-6561|0;if(b>>>0<486)rj(486,b);else{c[a>>2]=d+6561;c[a+4>>2]=486;return}}function Eh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<6561)rj(6561,d);else{c[a>>2]=b;c[a+4>>2]=6561;return}}function Fh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<6804)rj(6804,d);else{c[a>>2]=b+6561;c[a+4>>2]=243;return}}function Gh(a,b){a=a|0;b=b|0;if(b>>>0<6885)rj(6885,b);else{b=Ji(a+6804|0,81)|0;return b|0}return 0}function Hh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<6966)rj(6966,d);else{c[a>>2]=b+6885;c[a+4>>2]=81;return}}function Ih(a,b){a=a|0;b=b|0;if(b>>>0<6993)rj(6993,b);else{b=Ji(a+6966|0,27)|0;return b|0}return 0}function Jh(a,b){a=a|0;b=b|0;if(b>>>0<7020)rj(7020,b);else{b=Ji(a+6993|0,27)|0;return b|0}return 0}function Kh(a,b){a=a|0;b=b|0;if(b>>>0<7047)rj(7047,b);else{b=Ji(a+7020|0,27)|0;return b|0}return 0}function Lh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<7290)rj(7290,d);else{c[a>>2]=b+7047;c[a+4>>2]=243;return}}function Mh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<7533)rj(7533,d);else{c[a>>2]=b+7290;c[a+4>>2]=243;return}}function Nh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<7776)rj(7776,d);else{c[a>>2]=b+7533;c[a+4>>2]=243;return}}function Oh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<7857)rj(7857,d);else{c[a>>2]=b+7776;c[a+4>>2]=81;return}}function Ph(a,b){a=a|0;b=b|0;if(b>>>0<7884)rj(7884,b);else{b=Ji(a+7857|0,27)|0;return b|0}return 0}function Qh(a,b){a=a|0;b=b|0;if(b>>>0<7911)rj(7911,b);else{b=Ji(a+7884|0,27)|0;return b|0}return 0}function Rh(a,b){a=a|0;b=b|0;if(b>>>0<7938)rj(7938,b);else{b=Ji(a+7911|0,27)|0;return b|0}return 0}function Sh(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<8019)rj(8019,d);else{c[a>>2]=b+7938;c[a+4>>2]=81;return}}function Th(a,b,d){a=a|0;b=b|0;d=d|0;if(d>>>0<6561)yj(6561,d);d=d+-6561|0;if(d>>>0<486)rj(486,d);else{c[a>>2]=b+6561;c[a+4>>2]=486;return}}function Uh(a){a=a|0;Al(a|0,0,243)|0;return}function Vh(a){a=a|0;return a|0}function Wh(a){a=a|0;return a|0}function Xh(a,b){a=a|0;b=b|0;var c=0;a=l;l=l+16|0;c=a;kk(c,b,20134,13);b=ak(c)|0;l=a;return b|0}function Yh(a,b){a=a|0;b=b|0;var c=0;a=l;l=l+16|0;c=a;kk(c,b,20134,13);b=ak(c)|0;l=a;return b|0}function Zh(b){b=b|0;switch(a[b>>0]&3){case 0:{b=1;return b|0}case 1:{b=0;return b|0}default:return (Zh(c[b+244>>2]|0)|0)+1+(Zh(c[b+248>>2]|0)|0)|0}return 0}function _h(b){b=b|0;switch(a[b>>0]&3){case 0:{b=1;return b|0}case 1:{b=0;return b|0}default:return (_h(c[b+244>>2]|0)|0)+1|0}return 0}function $h(b){b=b|0;switch(a[b>>0]&3){case 0:{b=1;return b|0}case 1:{b=0;return b|0}default:return ($h(c[b+244>>2]|0)|0)+($h(c[b+248>>2]|0)|0)|0}return 0}function ai(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+496|0;f=g+243|0;e=g;switch(a[b>>0]&3){case 0:{Il(e|0,b+1|0,243)|0;if((d|0)!=243)xj(4328);Il(c|0,e|0,243)|0;l=g;return}case 2:{Il(f|0,b+1|0,243)|0;if((d|0)!=243)xj(4328);Il(c|0,f|0,243)|0;l=g;return}default:xj(4304)}}function bi(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0;p=l;l=l+1232|0;n=p+496|0;o=p+248|0;j=p;m=p+982|0;k=p+739|0;switch(a[d>>0]&3){case 0:{c[b+244>>2]=0;l=p;return}case 2:{Al(k|0,0,243)|0;g=c[d+244>>2]|0;h=$h(g)|0;i=h>>>0>e>>>0;d=c[d+248>>2]|0;f=i?d:g;switch(a[f>>0]&3){case 0:{f=f+1|0;Il(o|0,f|0,243)|0;Il(k|0,f|0,243)|0;break}case 2:{f=f+1|0;Il(n|0,f|0,243)|0;Il(k|0,f|0,243)|0;break}default:xj(4304)}Il(m|0,k|0,243)|0;bi(j,i?g:d,e-(i?0:h)|0);Il(o|0,j|0,248)|0;d=tb(248,4,n)|0;if(!d)ub(n);Il(d|0,o|0,248)|0;Il(b|0,m|0,243)|0;c[b+244>>2]=d;l=p;return}default:xj(4352)}}function ci(a){a=a|0;var b=0;b=0;while(1){a=c[a+244>>2]|0;if(!a)break;else b=b+1|0}return b|0}function di(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;h=l;l=l+256|0;g=h;f=c[a+244>>2]|0;if(!f){l=h;return}Il(g|0,a|0,243)|0;a=b+243|0;if(b>>>0>4294967052)yj(b,a);if(a>>>0>e>>>0)rj(a,e);Il(d+b|0,g|0,243)|0;if(!b){l=h;return}di(f,b>>>0<243?0:b-243|0,d,e);l=h;return}function ei(a){a=a|0;Al(a|0,0,729)|0;return}function fi(b){b=b|0;Al(b|0,0,729)|0;a[b+729>>0]=27;return}function gi(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0;k=l;l=l+11664|0;j=k+5832|0;i=k;Al(i|0,0,5832)|0;f=b+5832|0;g=a[f>>0]|0;a:do if(g<<24>>24){h=0;do{e=(h&255)>254;d=h;h=e?h:h+1<<24>>24;if(e)break a;e=(d&1)==0;d=e?i:b;Il(j|0,(e?b:i)|0,5832)|0;e=0;do{m=e;e=e+1|0;p=c[4376+(m<<2)>>2]|0;n=c[j+(p<<3)>>2]|0;q=c[4376+(e<<2)>>2]|0;o=c[j+(q<<3)+4>>2]|0;p=(n|~o)&(c[j+(q<<3)>>2]^c[j+(p<<3)+4>>2]);c[d+(m<<3)>>2]=~p;c[d+(m<<3)+4>>2]=p|o^n}while(e>>>0<729)}while((h&255)<(g&255))}while(0);if(!(a[f>>0]&1)){l=k;return}Il(b|0,i|0,5832)|0;l=k;return}function hi(a){a=a|0;var b=0,d=0;b=0;do{d=c[7296+(b<<3)+4>>2]|0;c[a+(b<<3)>>2]=c[7296+(b<<3)>>2];c[a+(b<<3)+4>>2]=d;b=b+1|0}while((b|0)!=729);return}function ii(b){b=b|0;Al(b|0,-1,5832)|0;a[b+5832>>0]=27;return}function ji(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0;if(c>>>0<81)rj(81,c);else{d=0;f=0}do{h=d;d=d+1|0;f=(a[b+h>>0]|0)+f<<24>>24}while((d|0)!=81);if(!(f<<24>>24)){h=1;return h|0}if(c>>>0<162)rj(162,c);else{e=0;g=0}do{h=e;e=e+1|0;g=(a[b+h>>0]|0)+g<<24>>24}while((e|0)!=162);if(!(g<<24>>24)){h=2;return h|0}e=b+c|0;if(!c){h=3;return h|0}else d=0;do{h=b;b=b+1|0;d=(a[h>>0]|0)+d<<24>>24}while((b|0)!=(e|0));h=d<<24>>24==0?3:0;return h|0}function ki(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,m=0,n=0;m=l;l=l+288|0;k=m+24|0;h=m;j=m+276|0;i=m+272|0;n=m+268|0;c[n>>2]=f;c[i>>2]=n;c[j>>2]=13128;if((f|0)==27){Al(k|0,0,243)|0;ui(g,b,d);wi(g,k,243);si(g);b=k+216|0;d=e+27|0;do{a[e>>0]=a[b>>0]|0;e=e+1|0;b=b+1|0}while((e|0)<(d|0));l=m;return}else{c[k>>2]=i;c[k+4>>2]=64;c[k+8>>2]=j;c[k+12>>2]=64;c[h>>2]=13132;c[h+4>>2]=3;c[h+8>>2]=0;c[h+16>>2]=k;c[h+20>>2]=2;uj(h,13156)}}function li(a,b){a=a|0;b=b|0;return Ej(c[a>>2]|0,b)|0}function mi(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+272|0;f=j+27|0;i=j;if(c>>>0<28){i=1;l=j;return i|0}c=c+-27|0;e=b+c|0;g=i;h=g+27|0;do{a[g>>0]=0;g=g+1|0}while((g|0)<(h|0));Al(f|0,0,243)|0;ui(d,b,c);wi(d,f,243);si(d);g=i;c=f+216|0;h=g+27|0;do{a[g>>0]=a[c>>0]|0;g=g+1|0;c=c+1|0}while((g|0)<(h|0));if((i|0)!=(e|0)){i=(ol(e,i,27)|0)!=0;l=j;return (i?2:0)|0}i=0;l=j;return i|0}function ni(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0;_=l;l=l+96|0;Z=_+24|0;h=_;j=_+80|0;i=_+76|0;g=_+72|0;c[g>>2]=d;c[i>>2]=g;c[j>>2]=13172;if((d|0)!=243){c[Z>>2]=i;c[Z+4>>2]=65;c[Z+8>>2]=j;c[Z+12>>2]=65;c[h>>2]=13176;c[h+4>>2]=3;c[h+8>>2]=0;c[h+16>>2]=Z;c[h+20>>2]=2;uj(h,13200)}c[g>>2]=f;c[i>>2]=g;c[j>>2]=13216;if((f|0)!=48){c[Z>>2]=i;c[Z+4>>2]=65;c[Z+8>>2]=j;c[Z+12>>2]=65;c[h>>2]=13176;c[h+4>>2]=3;c[h+8>>2]=0;c[h+16>>2]=Z;c[h+20>>2]=2;uj(h,13220)}C=e+4|0;D=e+8|0;E=e+12|0;F=e+16|0;G=e+20|0;H=e+24|0;I=e+28|0;J=e+32|0;K=e+36|0;L=e+40|0;M=e+44|0;f=e;g=f+48|0;do{c[f>>2]=0;f=f+4|0}while((f|0)<(g|0));d=b+242|0;f=0;while(1){if((f|0)==242){j=8;break}if((a[b+f>>0]|0)==-1)f=f+1|0;else{i=1;j=11;break}}a:do if((j|0)==8){c[C>>2]=1627359638;c[D>>2]=-344215632;c[E>>2]=-987627738;c[F>>2]=-203704431;c[G>>2]=-1352113496;c[H>>2]=-2040841987;c[I>>2]=-1220259383;c[J>>2]=1443463028;c[K>>2]=1442404346;c[L>>2]=1468027936;c[M>>2]=-1583999984;c[e>>2]=1513191068}else if((j|0)==11){b:while(1){d=d+-1|0;if(i){g=0;h=0;while(1){f=h+1|0;if(h>>>0>=12){j=41;break b}B=e+(h<<2)|0;A=Ll(c[B>>2]|0,0,3,0)|0;A=zl(A|0,z|0,g|0,0)|0;g=z;c[B>>2]=A;if(f>>>0>=i>>>0)break;else h=f}if(!g)g=i;else{if(i>>>0>=12){j=42;break}c[e+(i<<2)>>2]=g;g=i+1|0}}else g=0;B=c[e>>2]|0;A=B+((a[d>>0]|0)+1<<24>>24<<24>>24)|0;c[e>>2]=A;if(A>>>0<B>>>0){f=1;do{if(f>>>0>=12){j=20;break b}A=e+(f<<2)|0;B=c[A>>2]|0;c[A>>2]=B+1;f=f+1|0}while(B>>>0>4294967294)}else f=1;if((d|0)==(b|0)){d=0;j=9;break}else{i=f>>>0>g>>>0?f:g;j=11}}if((j|0)==9){while(1){j=0;if((d|0)==12)break a;if(!(c[e+(d<<2)>>2]|0)){d=d+1|0;j=9}else break}g=e+48|0;h=13300;do{if((h|0)==13252){f=e;g=0;h=1;j=28;break}h=h+-4|0;if((g|0)==(e|0)){f=e;g=0;h=1;j=28;break}g=g+-4|0;f=c[h>>2]|0;d=c[g>>2]|0;if(f>>>0<d>>>0){f=e;g=0;h=1;j=28;break}}while(f>>>0<=d>>>0);if((j|0)==28){while(1){d=g+1|0;y=c[f>>2]|0;A=y+~c[13252+(g<<2)>>2]|0;B=A+(h&1)|0;h=A>>>0<y>>>0|B>>>0<A>>>0;c[f>>2]=B;if((d|0)==12)break;else{f=e+(d<<2)|0;g=d;j=28}}if(h)break;xj(13300)}f=Z;d=13252;g=f+48|0;do{c[f>>2]=c[d>>2];f=f+4|0;d=d+4|0}while((f|0)<(g|0));B=~c[e>>2];h=B+-1513191068|0;c[Z>>2]=h+1;d=Z+4|0;f=1;h=B>>>0>1513191067|h>>>0>4294967294;while(1){y=c[d>>2]|0;g=f+1|0;A=y+~c[e+(f<<2)>>2]|0;B=A+(h&1)|0;h=A>>>0<y>>>0|B>>>0<A>>>0;c[d>>2]=B;if((g|0)==12)break;else{d=Z+(g<<2)|0;f=g}}if(!h)xj(13300);$=~c[Z>>2];q=Z+4|0;k=~c[q>>2];c[q>>2]=k;t=Z+8|0;m=~c[t>>2];c[t>>2]=m;u=Z+12|0;n=~c[u>>2];c[u>>2]=n;v=Z+16|0;o=~c[v>>2];c[v>>2]=o;w=Z+20|0;p=~c[w>>2];c[w>>2]=p;x=Z+24|0;f=~c[x>>2];c[x>>2]=f;y=Z+28|0;g=~c[y>>2];c[y>>2]=g;A=Z+32|0;h=~c[A>>2];c[A>>2]=h;B=Z+36|0;i=~c[B>>2];c[B>>2]=i;r=Z+40|0;j=~c[r>>2];c[r>>2]=j;s=Z+44|0;b=~c[s>>2];c[s>>2]=b;d=$+1|0;c[Z>>2]=d;do if($>>>0>4294967294){d=1;while(1){if(d>>>0>=12){j=37;break}p=Z+(d<<2)|0;$=c[p>>2]|0;c[p>>2]=$+1;if($>>>0>4294967294)d=d+1|0;else{j=38;break}}if((j|0)==37)sj(13236,d,12);else if((j|0)==38){N=c[q>>2]|0;O=c[r>>2]|0;P=c[s>>2]|0;Q=c[t>>2]|0;R=c[u>>2]|0;S=c[v>>2]|0;T=c[w>>2]|0;U=c[x>>2]|0;V=c[y>>2]|0;W=c[A>>2]|0;X=c[B>>2]|0;Y=c[Z>>2]|0;break}}else{N=k;O=j;P=b;Q=m;R=n;S=o;T=p;U=f;V=g;W=h;X=i;Y=d}while(0);c[e>>2]=Y;c[C>>2]=N;c[D>>2]=Q;c[E>>2]=R;c[F>>2]=S;c[G>>2]=T;c[H>>2]=U;c[I>>2]=V;c[J>>2]=W;c[K>>2]=X;c[L>>2]=O;c[M>>2]=P;break}else if((j|0)==20)sj(13236,f,12);else if((j|0)==41)sj(13324,h,12);else if((j|0)==42)sj(13340,i,12)}while(0);Z=e+47|0;Y=a[e>>0]|0;a[e>>0]=a[Z>>0]|0;a[Z>>0]=Y;Z=e+1|0;Y=e+46|0;$=a[Z>>0]|0;a[Z>>0]=a[Y>>0]|0;a[Y>>0]=$;Y=e+2|0;$=e+45|0;Z=a[Y>>0]|0;a[Y>>0]=a[$>>0]|0;a[$>>0]=Z;$=e+3|0;Z=e+44|0;Y=a[$>>0]|0;a[$>>0]=a[Z>>0]|0;a[Z>>0]=Y;Z=e+4|0;Y=e+43|0;$=a[Z>>0]|0;a[Z>>0]=a[Y>>0]|0;a[Y>>0]=$;Y=e+5|0;$=e+42|0;Z=a[Y>>0]|0;a[Y>>0]=a[$>>0]|0;a[$>>0]=Z;$=e+6|0;Z=e+41|0;Y=a[$>>0]|0;a[$>>0]=a[Z>>0]|0;a[Z>>0]=Y;Z=e+7|0;Y=e+40|0;$=a[Z>>0]|0;a[Z>>0]=a[Y>>0]|0;a[Y>>0]=$;Y=e+8|0;$=e+39|0;Z=a[Y>>0]|0;a[Y>>0]=a[$>>0]|0;a[$>>0]=Z;$=e+9|0;Z=e+38|0;Y=a[$>>0]|0;a[$>>0]=a[Z>>0]|0;a[Z>>0]=Y;Z=e+10|0;Y=e+37|0;$=a[Z>>0]|0;a[Z>>0]=a[Y>>0]|0;a[Y>>0]=$;Y=e+11|0;$=e+36|0;Z=a[Y>>0]|0;a[Y>>0]=a[$>>0]|0;a[$>>0]=Z;$=e+12|0;Z=e+35|0;Y=a[$>>0]|0;a[$>>0]=a[Z>>0]|0;a[Z>>0]=Y;Z=e+13|0;Y=e+34|0;$=a[Z>>0]|0;a[Z>>0]=a[Y>>0]|0;a[Y>>0]=$;Y=e+14|0;$=e+33|0;Z=a[Y>>0]|0;a[Y>>0]=a[$>>0]|0;a[$>>0]=Z;$=e+15|0;Z=e+32|0;Y=a[$>>0]|0;a[$>>0]=a[Z>>0]|0;a[Z>>0]=Y;Z=e+16|0;Y=e+31|0;$=a[Z>>0]|0;a[Z>>0]=a[Y>>0]|0;a[Y>>0]=$;Y=e+17|0;$=e+30|0;Z=a[Y>>0]|0;a[Y>>0]=a[$>>0]|0;a[$>>0]=Z;$=e+18|0;Z=e+29|0;Y=a[$>>0]|0;a[$>>0]=a[Z>>0]|0;a[Z>>0]=Y;Z=e+19|0;Y=e+28|0;$=a[Z>>0]|0;a[Z>>0]=a[Y>>0]|0;a[Y>>0]=$;Y=e+20|0;$=e+27|0;Z=a[Y>>0]|0;a[Y>>0]=a[$>>0]|0;a[$>>0]=Z;$=e+21|0;Z=e+26|0;Y=a[$>>0]|0;a[$>>0]=a[Z>>0]|0;a[Z>>0]=Y;Z=e+22|0;Y=e+25|0;$=a[Z>>0]|0;a[Z>>0]=a[Y>>0]|0;a[Y>>0]=$;Y=e+23|0;$=e+24|0;Z=a[Y>>0]|0;a[Y>>0]=a[$>>0]|0;a[$>>0]=Z;l=_;return}function oi(a,b){a=a|0;b=b|0;return Ej(c[a>>2]|0,b)|0}function pi(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;y=l;l=l+96|0;v=y+24|0;h=y;j=y+80|0;i=y+76|0;g=y+72|0;c[g>>2]=d;c[i>>2]=g;c[j>>2]=13216;if((d|0)!=48){c[v>>2]=i;c[v+4>>2]=65;c[v+8>>2]=j;c[v+12>>2]=65;c[h>>2]=13176;c[h+4>>2]=3;c[h+8>>2]=0;c[h+16>>2]=v;c[h+20>>2]=2;uj(h,13356)}c[g>>2]=f;c[i>>2]=g;c[j>>2]=13172;if((f|0)!=243){c[v>>2]=i;c[v+4>>2]=65;c[v+8>>2]=j;c[v+12>>2]=65;c[h>>2]=13176;c[h+4>>2]=3;c[h+8>>2]=0;c[h+16>>2]=v;c[h+20>>2]=2;uj(h,13372)}a[e+242>>0]=0;u=b+47|0;t=a[b>>0]|0;a[b>>0]=a[u>>0]|0;a[u>>0]=t;u=b+1|0;t=b+46|0;d=a[u>>0]|0;a[u>>0]=a[t>>0]|0;a[t>>0]=d;t=b+2|0;d=b+45|0;u=a[t>>0]|0;a[t>>0]=a[d>>0]|0;a[d>>0]=u;d=b+3|0;u=b+44|0;t=a[d>>0]|0;a[d>>0]=a[u>>0]|0;a[u>>0]=t;u=b+4|0;t=b+43|0;d=a[u>>0]|0;a[u>>0]=a[t>>0]|0;a[t>>0]=d;t=b+5|0;d=b+42|0;u=a[t>>0]|0;a[t>>0]=a[d>>0]|0;a[d>>0]=u;d=b+6|0;u=b+41|0;t=a[d>>0]|0;a[d>>0]=a[u>>0]|0;a[u>>0]=t;u=b+7|0;t=b+40|0;d=a[u>>0]|0;a[u>>0]=a[t>>0]|0;a[t>>0]=d;t=b+8|0;d=b+39|0;u=a[t>>0]|0;a[t>>0]=a[d>>0]|0;a[d>>0]=u;d=b+9|0;u=b+38|0;t=a[d>>0]|0;a[d>>0]=a[u>>0]|0;a[u>>0]=t;u=b+10|0;t=b+37|0;d=a[u>>0]|0;a[u>>0]=a[t>>0]|0;a[t>>0]=d;t=b+11|0;d=b+36|0;u=a[t>>0]|0;a[t>>0]=a[d>>0]|0;a[d>>0]=u;d=b+12|0;u=b+35|0;t=a[d>>0]|0;a[d>>0]=a[u>>0]|0;a[u>>0]=t;u=b+13|0;t=b+34|0;d=a[u>>0]|0;a[u>>0]=a[t>>0]|0;a[t>>0]=d;t=b+14|0;d=b+33|0;u=a[t>>0]|0;a[t>>0]=a[d>>0]|0;a[d>>0]=u;d=b+15|0;u=b+32|0;t=a[d>>0]|0;a[d>>0]=a[u>>0]|0;a[u>>0]=t;u=b+16|0;t=b+31|0;d=a[u>>0]|0;a[u>>0]=a[t>>0]|0;a[t>>0]=d;t=b+17|0;d=b+30|0;u=a[t>>0]|0;a[t>>0]=a[d>>0]|0;a[d>>0]=u;d=b+18|0;u=b+29|0;t=a[d>>0]|0;a[d>>0]=a[u>>0]|0;a[u>>0]=t;u=b+19|0;t=b+28|0;d=a[u>>0]|0;a[u>>0]=a[t>>0]|0;a[t>>0]=d;t=b+20|0;d=b+27|0;u=a[t>>0]|0;a[t>>0]=a[d>>0]|0;a[d>>0]=u;d=b+21|0;u=b+26|0;t=a[d>>0]|0;a[d>>0]=a[u>>0]|0;a[u>>0]=t;u=b+22|0;t=b+25|0;d=a[u>>0]|0;a[u>>0]=a[t>>0]|0;a[t>>0]=d;t=b+23|0;d=b+24|0;u=a[t>>0]|0;a[t>>0]=a[d>>0]|0;a[d>>0]=u;d=0;while(1){if((d|0)==12){d=0;x=8;break}if(!(c[b+(d<<2)>>2]|0))d=d+1|0;else break}if((x|0)==8){while(1){a[e+d>>0]=a[28924+d>>0]|0;d=d+1|0;if((d|0)==243)break;else x=8}l=y;return}j=b+44|0;d=c[j>>2]|0;do if((d|0)<=-1){i=~c[b>>2];c[b>>2]=i;k=b+4|0;c[k>>2]=~c[k>>2];n=b+8|0;c[n>>2]=~c[n>>2];o=b+12|0;c[o>>2]=~c[o>>2];p=b+16|0;c[p>>2]=~c[p>>2];q=b+20|0;c[q>>2]=~c[q>>2];r=b+24|0;c[r>>2]=~c[r>>2];s=b+28|0;c[s>>2]=~c[s>>2];t=b+32|0;c[t>>2]=~c[t>>2];u=b+36|0;c[u>>2]=~c[u>>2];m=b+40|0;c[m>>2]=~c[m>>2];c[j>>2]=~d;g=13300;h=b+48|0;while(1){if((h|0)==(b|0))break;h=h+-4|0;if((g|0)==13252)break;g=g+-4|0;f=c[h>>2]|0;d=c[g>>2]|0;if(f>>>0<d>>>0)break;if(f>>>0>d>>>0){x=17;break}}if((x|0)==17){h=i+1513191067|0;c[b>>2]=h+1;d=b+4|0;f=1;h=i>>>0>2781776228|h>>>0>4294967294;while(1){A=c[d>>2]|0;g=f+1|0;z=A+~c[13252+(f<<2)>>2]|0;f=z+(h&1)|0;h=z>>>0<A>>>0|f>>>0<z>>>0;c[d>>2]=f;if((g|0)==12)break;else{d=b+(g<<2)|0;f=g}}if(h){w=1;break}xj(13300)}c[b>>2]=i+1;a:do if(i>>>0>4294967294){d=1;while(1){if(d>>>0>=12)break;z=b+(d<<2)|0;A=c[z>>2]|0;c[z>>2]=A+1;if(A>>>0>4294967294)d=d+1|0;else break a}sj(13236,d,12)}while(0);d=v;f=13252;g=d+48|0;do{c[d>>2]=c[f>>2];d=d+4|0;f=f+4|0}while((d|0)<(g|0));A=~c[b>>2];h=A+-1513191068|0;c[v>>2]=h+1;d=v+4|0;f=1;h=A>>>0>1513191067|h>>>0>4294967294;while(1){i=c[d>>2]|0;g=f+1|0;z=i+~c[b+(f<<2)>>2]|0;A=z+(h&1)|0;h=z>>>0<i>>>0|A>>>0<z>>>0;c[d>>2]=A;if((g|0)==12)break;else{d=v+(g<<2)|0;f=g}}if(h){c[b>>2]=c[v>>2];c[k>>2]=c[v+4>>2];c[n>>2]=c[v+8>>2];c[o>>2]=c[v+12>>2];c[p>>2]=c[v+16>>2];c[q>>2]=c[v+20>>2];c[r>>2]=c[v+24>>2];c[s>>2]=c[v+28>>2];c[t>>2]=c[v+32>>2];c[u>>2]=c[v+36>>2];c[m>>2]=c[v+40>>2];c[j>>2]=c[v+44>>2];w=0;break}else xj(13300)}else{i=b;j=13252;f=0;d=0;while(1){d=d+1|0;h=c[i>>2]|0;g=h+(c[j>>2]|0)|0;f=g+(f&1)|0;c[i>>2]=f;if((d|0)==12){w=0;break}else{i=b+(d<<2)|0;j=13252+(d<<2)|0;f=g>>>0<h>>>0|f>>>0<g>>>0}}}while(0);g=0;while(1){d=g+1|0;f=11;h=0;while(1){A=b+(f<<2)|0;v=c[A>>2]|0;z=h;h=Ol(v|0,h|0,3,0)|0;z=Jl(v|0,z|0,3,0)|0;c[A>>2]=z;if(!f)break;else f=f+-1|0}if(g>>>0>=243){x=37;break}a[e+g>>0]=(h&255)+-1<<24>>24;if(d>>>0<242)g=d;else break}if((x|0)==37)sj(13388,g,243);if(w)d=0;else{l=y;return}do{A=e+d|0;d=d+1|0;a[A>>0]=0-(a[A>>0]|0)<<24>>24}while((d|0)!=243);l=y;return}function qi(b){b=b|0;Al(b|0,0,204)|0;c[b+204>>2]=104;a[b+208>>0]=1;return}function ri(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0,bb=0,cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=0,lb=0,mb=0,nb=0,ob=0,pb=0,qb=0,rb=0,sb=0,tb=0,ub=0,vb=0,wb=0;b=a+40|0;n=a+80|0;t=a+120|0;ia=a+160|0;sa=a+8|0;ta=a+48|0;ua=a+88|0;va=a+128|0;wa=a+168|0;d=a+16|0;e=a+56|0;f=a+96|0;g=a+136|0;h=a+176|0;i=a+24|0;j=a+64|0;k=a+104|0;l=a+144|0;m=a+184|0;o=a+32|0;p=a+72|0;q=a+112|0;r=a+152|0;s=a+192|0;x=a;w=b;A=n;C=t;E=ia;I=sa;H=ta;K=ua;M=va;O=wa;S=d;R=e;U=f;W=g;Y=h;aa=i;$=j;ca=k;ea=l;ga=m;la=o;ka=p;na=q;pa=r;ra=s;u=c[w>>2]|0;v=c[x>>2]|0;w=c[w+4>>2]|0;x=c[x+4>>2]|0;y=c[A>>2]|0;A=c[A+4>>2]|0;B=c[C>>2]|0;C=c[C+4>>2]|0;D=c[E>>2]|0;E=c[E+4>>2]|0;F=c[H>>2]|0;G=c[I>>2]|0;H=c[H+4>>2]|0;I=c[I+4>>2]|0;J=c[K>>2]|0;K=c[K+4>>2]|0;L=c[M>>2]|0;M=c[M+4>>2]|0;N=c[O>>2]|0;O=c[O+4>>2]|0;P=c[R>>2]|0;Q=c[S>>2]|0;R=c[R+4>>2]|0;S=c[S+4>>2]|0;T=c[U>>2]|0;U=c[U+4>>2]|0;V=c[W>>2]|0;W=c[W+4>>2]|0;X=c[Y>>2]|0;Y=c[Y+4>>2]|0;Z=c[$>>2]|0;_=c[aa>>2]|0;$=c[$+4>>2]|0;aa=c[aa+4>>2]|0;ba=c[ca>>2]|0;ca=c[ca+4>>2]|0;da=c[ea>>2]|0;ea=c[ea+4>>2]|0;fa=c[ga>>2]|0;ga=c[ga+4>>2]|0;ha=c[ka>>2]|0;ja=c[la>>2]|0;ka=c[ka+4>>2]|0;la=c[la+4>>2]|0;ma=c[na>>2]|0;na=c[na+4>>2]|0;oa=c[pa>>2]|0;pa=c[pa+4>>2]|0;qa=c[ra>>2]|0;ra=c[ra+4>>2]|0;xa=0;do{ya=xa;xa=xa+1|0;lb=u^v^y^B^D;Pa=w^x^A^C^E;ib=F^G^J^L^N;mb=H^I^K^M^O;db=P^Q^T^V^X;Ua=R^S^U^W^Y;Aa=Z^_^ba^da^fa;La=$^aa^ca^ea^ga;Ja=ha^ja^ma^oa^qa;kb=ka^la^na^pa^ra;Ca=Nl(ib|0,mb|0,1)|0;cb=z;Na=Fl(ib|0,mb|0,63)|0;Na=Ja^(Ca|Na);cb=kb^(cb|z);Ca=Na^v;za=cb^x;nb=u^Na;Ta=w^cb;_a=y^Na;qb=A^cb;Ra=B^Na;Ma=C^cb;Na=D^Na;cb=E^cb;pb=Nl(db|0,Ua|0,1)|0;Ka=z;rb=Fl(db|0,Ua|0,63)|0;rb=(pb|rb)^lb;Ka=(Ka|z)^Pa;pb=G^rb;ab=I^Ka;wb=F^rb;Da=H^Ka;Va=J^rb;Ya=K^Ka;Ga=L^rb;ob=M^Ka;rb=N^rb;Ka=O^Ka;Xa=Nl(Aa|0,La|0,1)|0;$a=z;Ia=Fl(Aa|0,La|0,63)|0;ib=(Xa|Ia)^ib;mb=($a|z)^mb;$a=Q^ib;Ia=S^mb;Xa=P^ib;bb=R^mb;Fa=T^ib;Ea=U^mb;tb=V^ib;Wa=W^mb;ib=X^ib;mb=Y^mb;Ha=Nl(Ja|0,kb|0,1)|0;Qa=z;kb=Fl(Ja|0,kb|0,63)|0;db=(Ha|kb)^db;Ua=(Qa|z)^Ua;Qa=_^db;kb=aa^Ua;Ha=Z^db;Ja=$^Ua;Ba=ba^db;gb=ca^Ua;hb=da^db;ub=ea^Ua;db=fa^db;Ua=ga^Ua;Sa=Nl(lb|0,Pa|0,1)|0;sb=z;Pa=Fl(lb|0,Pa|0,63)|0;Pa=Aa^(Sa|Pa);sb=La^(sb|z);La=ja^Pa;Sa=la^sb;Aa=ha^Pa;lb=ka^sb;jb=ma^Pa;Oa=na^sb;fb=oa^Pa;eb=pa^sb;Pa=qa^Pa;sb=ra^sb;vb=Nl(pb|0,ab|0,1)|0;Za=z;ab=Fl(pb|0,ab|0,63)|0;ab=vb|ab;Za=Za|z;vb=Nl(_a|0,qb|0,3)|0;pb=z;qb=Fl(_a|0,qb|0,61)|0;qb=vb|qb;pb=pb|z;vb=Nl(Xa|0,bb|0,6)|0;_a=z;bb=Fl(Xa|0,bb|0,58)|0;bb=vb|bb;_a=_a|z;vb=Nl(Va|0,Ya|0,10)|0;Xa=z;Ya=Fl(Va|0,Ya|0,54)|0;Ya=vb|Ya;Xa=Xa|z;vb=Nl(tb|0,Wa|0,15)|0;Va=z;Wa=Fl(tb|0,Wa|0,49)|0;Wa=vb|Wa;Va=Va|z;vb=Nl(hb|0,ub|0,21)|0;tb=z;ub=Fl(hb|0,ub|0,43)|0;ub=vb|ub;tb=tb|z;vb=Nl(Qa|0,kb|0,28)|0;hb=z;kb=Fl(Qa|0,kb|0,36)|0;kb=vb|kb;hb=hb|z;vb=Nl(nb|0,Ta|0,36)|0;Qa=z;Ta=Fl(nb|0,Ta|0,28)|0;Ta=vb|Ta;Qa=Qa|z;vb=Nl(Ga|0,ob|0,45)|0;nb=z;ob=Fl(Ga|0,ob|0,19)|0;ob=vb|ob;nb=nb|z;vb=Nl(Ha|0,Ja|0,55)|0;Ga=z;Ja=Fl(Ha|0,Ja|0,9)|0;Ja=vb|Ja;Ga=Ga|z;vb=Nl(rb|0,Ka|0,2)|0;Ha=z;Ka=Fl(rb|0,Ka|0,62)|0;Ka=vb|Ka;Ha=Ha|z;vb=Nl(Pa|0,sb|0,14)|0;rb=z;sb=Fl(Pa|0,sb|0,50)|0;sb=vb|sb;rb=rb|z;vb=Nl(La|0,Sa|0,27)|0;Pa=z;Sa=Fl(La|0,Sa|0,37)|0;Sa=vb|Sa;Pa=Pa|z;vb=Nl(Ra|0,Ma|0,41)|0;La=z;Ma=Fl(Ra|0,Ma|0,23)|0;Ma=vb|Ma;La=La|z;vb=Nl(db|0,Ua|0,56)|0;Ra=z;Ua=Fl(db|0,Ua|0,8)|0;Ua=vb|Ua;Ra=Ra|z;vb=Nl(fb|0,eb|0,8)|0;db=z;eb=Fl(fb|0,eb|0,56)|0;eb=vb|eb;db=db|z;vb=Nl(Ba|0,gb|0,25)|0;fb=z;gb=Fl(Ba|0,gb|0,39)|0;gb=vb|gb;fb=fb|z;vb=Nl(Fa|0,Ea|0,43)|0;Ba=z;Ea=Fl(Fa|0,Ea|0,21)|0;Ea=vb|Ea;Ba=Ba|z;vb=Nl($a|0,Ia|0,62)|0;Fa=z;Ia=Fl($a|0,Ia|0,2)|0;Ia=vb|Ia;Fa=Fa|z;vb=Nl(Na|0,cb|0,18)|0;$a=z;cb=Fl(Na|0,cb|0,46)|0;cb=vb|cb;$a=$a|z;vb=Nl(jb|0,Oa|0,39)|0;Na=z;Oa=Fl(jb|0,Oa|0,25)|0;Oa=vb|Oa;Na=Na|z;vb=Nl(ib|0,mb|0,61)|0;jb=z;mb=Fl(ib|0,mb|0,3)|0;mb=vb|mb;jb=jb|z;vb=Nl(Aa|0,lb|0,20)|0;ib=z;lb=Fl(Aa|0,lb|0,44)|0;lb=vb|lb;ib=ib|z;vb=Nl(wb|0,Da|0,44)|0;Aa=z;Da=Fl(wb|0,Da|0,20)|0;Da=vb|Da;Aa=Aa|z;G=ub&~Ea^Da;I=tb&~Ba^Aa;Q=sb&~ub^Ea;S=rb&~tb^Ba;_=Ca&~sb^ub;aa=za&~rb^tb;ja=sb^Da&~Ca;la=rb^Aa&~za;u=qb&~lb^kb;w=pb&~ib^hb;F=ob&~qb^lb;H=nb&~pb^ib;P=mb&~ob^qb;R=jb&~nb^pb;Z=kb&~mb^ob;$=hb&~jb^nb;ha=mb^lb&~kb;ka=jb^ib&~hb;y=gb&~bb^ab;A=fb&~_a^Za;J=eb&~gb^bb;K=db&~fb^_a;T=cb&~eb^gb;U=$a&~db^fb;ba=ab&~cb^eb;ca=Za&~$a^db;ma=cb^bb&~ab;na=$a^_a&~Za;B=Ya&~Ta^Sa;C=Xa&~Qa^Pa;L=Wa&~Ya^Ta;M=Va&~Xa^Qa;V=Ua&~Wa^Ya;W=Ra&~Va^Xa;da=Sa&~Ua^Wa;ea=Pa&~Ra^Va;oa=Ua^Ta&~Sa;pa=Ra^Qa&~Pa;D=Oa&~Ja^Ia;E=Na&~Ga^Fa;N=Ma&~Oa^Ja;O=La&~Na^Ga;X=Ka&~Ma^Oa;Y=Ha&~La^Na;fa=Ia&~Ka^Ma;ga=Fa&~Ha^La;qa=Ka^Ja&~Ia;ra=Ha^Ga&~Fa;ya=328+(ya<<3)|0;v=Ea&~Da^Ca^c[ya>>2];x=Ba&~Aa^za^c[ya+4>>2]}while(xa>>>0<24);wb=a;c[wb>>2]=v;c[wb+4>>2]=x;wb=b;c[wb>>2]=u;c[wb+4>>2]=w;wb=n;c[wb>>2]=y;c[wb+4>>2]=A;wb=t;c[wb>>2]=B;c[wb+4>>2]=C;wb=ia;c[wb>>2]=D;c[wb+4>>2]=E;wb=sa;c[wb>>2]=G;c[wb+4>>2]=I;wb=ta;c[wb>>2]=F;c[wb+4>>2]=H;wb=ua;c[wb>>2]=J;c[wb+4>>2]=K;wb=va;c[wb>>2]=L;c[wb+4>>2]=M;wb=wa;c[wb>>2]=N;c[wb+4>>2]=O;wb=d;c[wb>>2]=Q;c[wb+4>>2]=S;wb=e;c[wb>>2]=P;c[wb+4>>2]=R;wb=f;c[wb>>2]=T;c[wb+4>>2]=U;wb=g;c[wb>>2]=V;c[wb+4>>2]=W;wb=h;c[wb>>2]=X;c[wb+4>>2]=Y;wb=i;c[wb>>2]=_;c[wb+4>>2]=aa;wb=j;c[wb>>2]=Z;c[wb+4>>2]=$;wb=k;c[wb>>2]=ba;c[wb+4>>2]=ca;wb=l;c[wb>>2]=da;c[wb+4>>2]=ea;wb=m;c[wb>>2]=fa;c[wb+4>>2]=ga;wb=o;c[wb>>2]=ja;c[wb+4>>2]=la;wb=p;c[wb>>2]=ha;c[wb+4>>2]=ka;wb=q;c[wb>>2]=ma;c[wb+4>>2]=na;wb=r;c[wb>>2]=oa;c[wb+4>>2]=pa;wb=s;c[wb>>2]=qa;c[wb+4>>2]=ra;return}function si(b){b=b|0;Al(b|0,0,204)|0;c[b+204>>2]=104;a[b+208>>0]=1;return}function ti(a,b){a=a|0;b=b|0;c[a>>2]=b;c[a+4>>2]=200;return}function ui(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;m=l;l=l+96|0;k=m+24|0;f=m;h=m+80|0;g=m+76|0;i=m+72|0;j=(e>>>0)%243|0;c[i>>2]=j;c[g>>2]=i;c[h>>2]=28348;if(j|0){c[k>>2]=g;c[k+4>>2]=65;c[k+8>>2]=h;c[k+12>>2]=65;c[f>>2]=13176;c[f+4>>2]=3;c[f+8>>2]=0;c[f+16>>2]=k;c[f+20>>2]=2;uj(f,13404)}f=k;g=f+48|0;do{a[f>>0]=0;f=f+1|0}while((f|0)<(g|0));f=e>>>0<243?e:243;if(!e){l=m;return}j=f;i=f;h=e;while(1){h=h-j|0;ni(d,i,k,48);d=d+j|0;vi(b,k);f=(h|0)==0;g=h>>>0<243?h:243;if((d|0)==0|f)break;else{j=g;i=f?i:g}}l=m;return}function vi(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;m=b+204|0;p=b+200|0;g=c[p>>2]|0;if(g>>>0>200)yj(g,200);i=(c[m>>2]|0)-g|0;h=b+g|0;e=200-g|0;a:do if(i>>>0<=48){k=e;l=0;e=48;j=i;while(1){if(j>>>0>k>>>0){e=5;break}if(l>>>0>48){e=7;break}if(j>>>0>(48-l|0)>>>0){e=11;break}if(j|0){g=0;i=d+l|0;while(1){g=g+1|0;a[h>>0]=a[h>>0]^a[i>>0];if((g|0)==(j|0))break;else{h=h+1|0;i=i+1|0}}}ri(b);g=j+l|0;e=e-j|0;i=c[m>>2]|0;if(e>>>0<i>>>0){n=200;f=b;o=g;q=e;r=0;break a}else{k=200;h=b;l=g;j=i}}if((e|0)==5)rj(j,k);else if((e|0)==7)yj(l,48);else if((e|0)==11)xj(13420)}else{n=e;f=h;o=0;q=48;r=g}while(0);if(q>>>0>n>>>0)rj(q,n);if(o>>>0>48)yj(o,48);if(q>>>0>(48-o|0)>>>0)xj(13420);if(!q){r=r+q|0;c[p>>2]=r;return}g=0;e=d+o|0;while(1){g=g+1|0;a[f>>0]=a[f>>0]^a[e>>0];if((g|0)==(q|0))break;else{f=f+1|0;e=e+1|0}}r=r+q|0;c[p>>2]=r;return}function wi(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ja=0,ka=0,la=0,ma=0,na=0,pa=0,qa=0,ra=0;ra=l;l=l+96|0;qa=ra+24|0;pa=ra;na=ra+48|0;f=ra+44|0;la=ra+40|0;ma=(e>>>0)%243|0;c[la>>2]=ma;c[f>>2]=la;c[na>>2]=28348;if(ma|0){c[qa>>2]=f;c[qa+4>>2]=65;c[qa+8>>2]=na;c[qa+12>>2]=65;c[pa>>2]=13176;c[pa+4>>2]=3;c[pa+8>>2]=0;c[pa+16>>2]=qa;c[pa+20>>2]=2;uj(pa,13444)}g=na;h=g+48|0;do{a[g>>0]=0;g=g+1|0}while((g|0)<(h|0));f=e>>>0<243?e:243;if(!e){l=ra;return}n=b+200|0;p=b+208|0;q=b+204|0;la=pa+4|0;ma=pa+8|0;r=na+1|0;s=na+2|0;t=na+3|0;u=na+4|0;v=na+5|0;w=na+6|0;x=na+7|0;y=na+8|0;z=na+9|0;A=na+10|0;B=na+11|0;C=na+12|0;D=na+13|0;E=na+14|0;F=na+15|0;G=na+16|0;H=na+17|0;I=na+18|0;J=na+19|0;K=na+20|0;L=na+21|0;M=na+22|0;N=na+23|0;O=na+24|0;P=na+25|0;Q=na+26|0;R=na+27|0;S=na+28|0;T=na+29|0;U=na+30|0;V=na+31|0;W=na+32|0;X=na+33|0;Y=na+34|0;Z=na+35|0;_=na+36|0;$=na+37|0;aa=na+38|0;ba=na+39|0;ca=na+40|0;da=na+41|0;ea=na+42|0;fa=na+43|0;ga=na+44|0;ha=na+45|0;ja=na+46|0;ka=na+47|0;j=e-f|0;k=d;m=f;i=d+f|0;a:while(1){e=c[n>>2]|0;if(e>>>0>=200){f=9;break}h=c[q>>2]|0;e=b+e|0;a[e>>0]=a[e>>0]^a[p>>0];e=h+-1|0;if(e>>>0>=200){f=8;break}d=b+e|0;a[d>>0]=a[d>>0]^-128;ri(b);c[n>>2]=0;d=c[q>>2]|0;g=48;h=0;while(1){f=na+h|0;e=48-h|0;if(g>>>0<d>>>0)break;if(d>>>0>e>>>0){f=14;break a}if(d>>>0>200){f=16;break a}Il(f|0,b|0,d|0)|0;ri(b);f=c[q>>2]|0;h=f+h|0;if(h>>>0>48){f=11;break a}else{d=f;g=g-f|0}}if(g>>>0>e>>>0){f=19;break}if(g>>>0>200){f=21;break}Il(f|0,b|0,g|0)|0;Al(b|0,0,204)|0;c[q>>2]=104;a[p>>0]=1;f=tb(48,1,qa)|0;if(!f){f=23;break}e=f;g=f;d=na;h=g+48|0;do{a[g>>0]=a[d>>0]|0;g=g+1|0;d=d+1|0}while((g|0)<(h|0));c[pa>>2]=e;c[la>>2]=48;c[ma>>2]=48;o=0;ia(4,f|0,48,k|0,m|0);k=o;o=0;if(k&1){f=26;break}vb(f,48,1);a[na>>0]=~a[na>>0];a[r>>0]=~a[r>>0];a[s>>0]=~a[s>>0];a[t>>0]=~a[t>>0];a[u>>0]=~a[u>>0];a[v>>0]=~a[v>>0];a[w>>0]=~a[w>>0];a[x>>0]=~a[x>>0];a[y>>0]=~a[y>>0];a[z>>0]=~a[z>>0];a[A>>0]=~a[A>>0];a[B>>0]=~a[B>>0];a[C>>0]=~a[C>>0];a[D>>0]=~a[D>>0];a[E>>0]=~a[E>>0];a[F>>0]=~a[F>>0];a[G>>0]=~a[G>>0];a[H>>0]=~a[H>>0];a[I>>0]=~a[I>>0];a[J>>0]=~a[J>>0];a[K>>0]=~a[K>>0];a[L>>0]=~a[L>>0];a[M>>0]=~a[M>>0];a[N>>0]=~a[N>>0];a[O>>0]=~a[O>>0];a[P>>0]=~a[P>>0];a[Q>>0]=~a[Q>>0];a[R>>0]=~a[R>>0];a[S>>0]=~a[S>>0];a[T>>0]=~a[T>>0];a[U>>0]=~a[U>>0];a[V>>0]=~a[V>>0];a[W>>0]=~a[W>>0];a[X>>0]=~a[X>>0];a[Y>>0]=~a[Y>>0];a[Z>>0]=~a[Z>>0];a[_>>0]=~a[_>>0];a[$>>0]=~a[$>>0];a[aa>>0]=~a[aa>>0];a[ba>>0]=~a[ba>>0];a[ca>>0]=~a[ca>>0];a[da>>0]=~a[da>>0];a[ea>>0]=~a[ea>>0];a[fa>>0]=~a[fa>>0];a[ga>>0]=~a[ga>>0];a[ha>>0]=~a[ha>>0];a[ja>>0]=~a[ja>>0];a[ka>>0]=~a[ka>>0];vi(b,na);f=(j|0)==0;d=j>>>0<243?j:243;e=i;if((i|0)==0|f){f=5;break}else{j=f?0:j-d|0;k=e;m=f?m:d;i=f?i:e+d|0}}switch(f|0){case 5:{l=ra;return}case 8:{sj(13460,e,200);break}case 9:{sj(13476,e,200);break}case 11:{yj(h,48);break}case 14:{rj(d,e);break}case 16:{rj(d,200);break}case 19:{rj(g,e);break}case 21:{rj(g,200);break}case 23:{ub(qa);break}case 26:{ra=oa()|0;xi(pa);ya(ra|0)}}}function xi(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b,1);return}function yi(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;g=a+4|0;f=c[g>>2]|0;h=0;while(1){if(h>>>0>=f>>>0){b=4;break}if(h>>>0>4294967294){b=4;break}d=c[g>>2]|0;if(h>>>0>=d>>>0){b=10;break}d=c[a>>2]|0;e=d+(h<<3)|0;b=c[e>>2]|0;d=c[d+(h<<3)+4>>2]|0;c[e>>2]=d^b;e=c[g>>2]|0;if(h>>>0>=e>>>0){b=11;break}c[(c[a>>2]|0)+(h<<3)+4>>2]=b;if(!(d&~b)){b=8;break}else h=h+1|0}if((b|0)==4){h=(c[g>>2]|0)+1|0;return h|0}else if((b|0)==8){h=c[g>>2]|0;return h|0}else if((b|0)==10)sj(13492,h,d);else if((b|0)==11)sj(13508,h,e);return 0}function zi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;m=1;while(1){h=m>>>0>1;if(h){f=1;e=3;g=m;while(1){f=O((g&1|0)==0?1:e,f)|0;d=g>>>1;e=O(e,e)|0;if(g>>>0>3)g=d;else break}}else{f=1;e=3;d=m}if(((O((d|0)==1?e:1,f)|0)&255)<32)m=m+1|0;else break}if(h){f=1;e=3;g=m;while(1){f=O((g&1|0)==0?1:e,f)|0;d=g>>>1;e=O(e,e)|0;if(g>>>0>3)g=d;else break}}else{f=1;e=3;d=m}d=O((d|0)==1?e:1,f)|0;e=(d|0)==0;do if((b|0)<0){if(e)xj(13524);if((b|0)==-2147483648&(d|0)==-1)xj(13548);else{i=((b|0)%(d|0)|0)+d|0;break}}else if(e)xj(13572);else{i=(b|0)%(d|0)|0;break}while(0);if(!m)return;l=a+4|0;j=3;b=0;k=0;h=i;a:while(1){i=k+1|0;if(!k){f=1;e=3;d=1}else{f=1;e=3;g=i;while(1){f=O((g&1|0)==0?1:e,f)|0;d=g>>>1;e=O(e,e)|0;if(g>>>0>3)g=d;else break}}d=O((d|0)==1?e:1,f)|0;f=d<<24>>24;g=(f>>>0)/3|0;if(!h)h=0;else{if(!(d<<24>>24)){d=39;break}e=(h>>>0)%(f>>>0)|0;b=e+b|0;h=h-e|0}d=d<<24>>24==0;if(b>>>0<32){if(d){d=40;break}e=c[l>>2]|0;if(k>>>0>=e>>>0){d=41;break}d=(b>>>0)%(f>>>0)|0;c[(c[a>>2]|0)+(k<<3)+4>>2]=j>>>(d&31)}else{if(d){d=42;break}d=(b>>>0)%(f>>>0)|0}d=f-d|0;if(d>>>0<32)do{e=c[l>>2]|0;if(k>>>0>=e>>>0){d=43;break a}e=(c[a>>2]|0)+(k<<3)+4|0;c[e>>2]=j<<(d&31)|j>>>(0-d&31)|c[e>>2];d=d+f|0}while(d>>>0<32);e=c[l>>2]|0;if(k>>>0>=e>>>0){d=44;break}e=c[a>>2]|0;c[e+(k<<3)>>2]=(c[e+(k<<3)+4>>2]|0)>>>(g&31);d=d-g|0;d=d-(d>>>0>31?f:0)|0;if((d|0)<0)d=j>>>(0-d&31)|j<<(d&31);else d=j<<(d&31)|j>>>(0-d&31);e=c[l>>2]|0;if(k>>>0>=e>>>0){d=45;break}e=(c[a>>2]|0)+(k<<3)|0;c[e>>2]=c[e>>2]|d;d=(f<<1>>>0)/3|0;d=j>>>(0-d&31)|j|j<<(d&31);e=g<<1;if(i>>>0<m>>>0){j=d>>>(0-e&30)|d|d<<(e&30);b=b+g|0;k=i}else{d=15;break}}if((d|0)==15)return;else if((d|0)==39)xj(13596);else if((d|0)==40)xj(13620);else if((d|0)==41)sj(13644,k,e);else if((d|0)==42)xj(13660);else if((d|0)==43)sj(13684,k,e);else if((d|0)==44)sj(13700,k,e);else if((d|0)==45)sj(13716,k,e)}function Ai(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=l;l=l+16|0;f=d;c[f>>2]=c[b>>2];c[f+4>>2]=c[b+4>>2];c[f+8>>2]=c[b+8>>2];e=c[f>>2]|0;b=c[f+8>>2]|0;c[a>>2]=2;c[a+4>>2]=b;c[a+8>>2]=e;c[a+12>>2]=b;l=d;return}function Bi(a){a=a|0;var b=0;b=l;l=l+16|0;c[b>>2]=c[a>>2];c[b+4>>2]=c[a+4>>2];c[b+8>>2]=c[a+8>>2];ub(b)}function Ci(a,b){a=a|0;b=b|0;var d=0,e=0;e=l;l=l+16|0;d=e;switch(c[c[a>>2]>>2]&3){case 1:{kk(d,b,21364,4);d=ak(d)|0;l=e;return d|0}case 2:{kk(d,b,21368,4);d=ak(d)|0;l=e;return d|0}default:{kk(d,b,21372,5);d=ak(d)|0;l=e;return d|0}}return 0}function Di(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=l;l=l+48|0;e=h+24|0;d=h;g=h+44|0;f=h+40|0;c[f>>2]=b;c[g>>2]=13800;if((c[b>>2]|0)==2){g=c[b+4>>2]|0;c[a>>2]=c[b+8>>2];c[a+4>>2]=g;l=h;return}else{c[e>>2]=f;c[e+4>>2]=66;c[e+8>>2]=g;c[e+12>>2]=66;c[d>>2]=13760;c[d+4>>2]=3;c[d+8>>2]=0;c[d+16>>2]=e;c[d+20>>2]=2;uj(d,13804)}}function Ei(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;h=l;l=l+48|0;e=h+24|0;d=h;g=h+44|0;f=h+40|0;c[f>>2]=b;c[g>>2]=13800;if((c[b>>2]|0)==2){g=c[b+4>>2]|0;c[a>>2]=c[b+8>>2];c[a+4>>2]=g;l=h;return}else{c[e>>2]=f;c[e+4>>2]=66;c[e+8>>2]=g;c[e+12>>2]=66;c[d>>2]=13760;c[d+4>>2]=3;c[d+8>>2]=0;c[d+16>>2]=e;c[d+20>>2]=2;uj(d,13840)}}function Fi(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b,1);return}function Gi(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;n=l;l=l+16|0;m=n;k=a+8|0;f=c[k>>2]|0;j=a+4|0;g=c[j>>2]|0;if((g-f|0)>>>0>=d>>>0){m=f;a=c[a>>2]|0;j=m+d|0;c[k>>2]=j;m=a+m|0;Il(m|0,b|0,d|0)|0;l=n;return}e=f+d|0;if(e>>>0<f>>>0)Wj(21164,17);i=g<<1;i=e>>>0>=i>>>0?e:i;if((i|0)<0)xj(13732);if(!g){h=tb(i,1,m)|0;e=0;f=0;g=(h|0)==0&1}else{h=wb(c[a>>2]|0,g,1,i,1,m)|0;o=(h|0)==0;f=m+4|0;e=c[f>>2]|0;f=c[f+4>>2]|0;g=o&1;h=o?c[m>>2]|0:h}if(g|0){c[m>>2]=h;o=m+4|0;c[o>>2]=e;c[o+4>>2]=f;Bi(m)}c[a>>2]=h;c[j>>2]=i;o=c[k>>2]|0;m=h;a=o+d|0;c[k>>2]=a;o=m+o|0;Il(o|0,b|0,d|0)|0;l=n;return}function Hi(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,p=0,q=0;q=l;l=l+80|0;m=q+48|0;n=q+32|0;k=q+16|0;f=q;e=c[d>>2]|0;switch(e&3){case 1:{c[k>>2]=d;c[n>>2]=13756;if((e|0)!=1){c[f>>2]=k;c[f+4>>2]=66;c[f+8>>2]=n;c[f+12>>2]=66;c[m>>2]=13760;c[m+4>>2]=3;c[m+8>>2]=0;c[m+16>>2]=f;c[m+20>>2]=2;uj(m,13784)}h=c[d+8>>2]|0;i=d+12|0;j=c[i>>2]|0;e=c[d+4>>2]|0;if((e|0)<0)xj(13732);if(e){f=tb(e,1,m)|0;if(!f)Bi(m);else g=f}else g=1;c[k>>2]=g;c[k+4>>2]=e;c[k+8>>2]=0;a:do if(!j)p=28;else{f=0;while(1){if(f>>>0>=j>>>0)break;o=0;g=ba(13,a[h+f>>0]|0)|0;n=o;o=0;if(n&1)break a;if(e>>>0<=5){o=0;ca(22,k|0,g|0,e|0);n=o;o=0;if(n&1)break a;else e=0}else{o=0;ca(22,k|0,g|0,5);n=o;o=0;if(n&1)break a;e=e+-5|0}f=f+1|0;if(f>>>0>=(c[i>>2]|0)>>>0){p=28;break a}}o=0;ca(11,13988,f|0,j|0);o=0}while(0);do if((p|0)==28){if(e|0){o=0;$(30,13964);o=0;break};c[b>>2]=c[k>>2];c[b+4>>2]=c[k+4>>2];c[b+8>>2]=c[k+8>>2];l=q;return}while(0);q=oa()|0;Fi(k);ya(q|0)}case 2:{c[k>>2]=d;c[n>>2]=13800;if((e|0)!=2){c[f>>2]=k;c[f+4>>2]=66;c[f+8>>2]=n;c[f+12>>2]=66;c[m>>2]=13760;c[m+4>>2]=3;c[m+8>>2]=0;c[m+16>>2]=f;c[m+20>>2]=2;uj(m,13804)}g=c[d+8>>2]|0;e=c[d+4>>2]|0;if((e|0)<0)xj(13732);if(e){f=tb(e,1,m)|0;if(!f)Bi(m);else h=f}else h=1;c[n>>2]=h;c[n+4>>2]=e;c[n+8>>2]=0;o=0;ca(22,n|0,g|0,e|0);p=o;o=0;if(p&1){q=oa()|0;Fi(n);ya(q|0)};c[b>>2]=c[n>>2];c[b+4>>2]=c[n+4>>2];c[b+8>>2]=c[n+8>>2];l=q;return}default:{c[k>>2]=d;c[n>>2]=13820;if((e|0)!=3){c[f>>2]=k;c[f+4>>2]=66;c[f+8>>2]=n;c[f+12>>2]=66;c[m>>2]=13760;c[m+4>>2]=3;c[m+8>>2]=0;c[m+16>>2]=f;c[m+20>>2]=2;uj(m,13824)}e=c[d+8>>2]|0;f=c[d+4>>2]|0;g=f*3|0;if((g|0)<0)xj(13732);if(g){h=tb(g,1,m)|0;if(!h)Bi(m);else i=h}else i=1;c[n>>2]=i;c[n+4>>2]=g;c[n+8>>2]=0;k=e+f|0;while(1){if((e|0)==(k|0)){p=52;break}f=e+1|0;h=f;d=a[e>>0]|0;if(d<<24>>24<=-1){j=d&31;if((f|0)==(k|0)){i=k;f=0;e=h}else{e=e+2|0;i=e;f=a[f>>0]&63}g=f&255;f=g|j<<6;if((d&255)>223){if((i|0)==(k|0)){h=k;f=0}else{e=i+1|0;h=e;f=a[i>>0]&63}g=f&255|g<<6;f=g|j<<12;if((d&255)>239){if((h|0)==(k|0))f=0;else{f=a[h>>0]&63;e=h+1|0}g=g<<6|j<<18&1835008|f&255}else g=f}else g=f}else{g=d&255;e=h}f=0;while(1){if(f>>>0>=27){f=21397;break}if((c[13856+(f<<2)>>2]|0)==(g|0)){p=56;break}else f=f+1|0}if((p|0)==56){p=0;f=21397+(f*3|0)|0}o=0;ca(22,n|0,f|0,3);m=o;o=0;if(m&1){p=58;break}}if((p|0)==52){c[b>>2]=c[n>>2];c[b+4>>2]=c[n+4>>2];c[b+8>>2]=c[n+8>>2];l=q;return}else if((p|0)==58){q=oa()|0;Fi(n);ya(q|0)}}}}function Ii(a){a=a|0;return}function Ji(b,c){b=b|0;c=c|0;var d=0,e=0,f=0;if(!c){c=0;b=0;z=c;return b|0}d=0;e=0;c=b+c|0;do{c=c+-1|0;f=a[c>>0]|0;d=Ll(d|0,e|0,3,0)|0;e=f<<24>>24;d=zl(e|0,((e|0)<0)<<31>>31|0,d|0,z|0)|0;e=z}while((c|0)!=(b|0));z=e;return d|0}function Ki(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;if(!e)return;if((c|0)>=0){f=b;g=c;h=0;while(1){if((f|0)==0&(g|0)==0){f=7;break}i=zl(f|0,g|0,1,0)|0;g=z;j=Hl(i|0,g|0,3,0)|0;a[d+h>>0]=(j&255)+-1<<24>>24;h=h+1|0;f=El(i|0,g|0,3,0)|0;if(h>>>0>=e>>>0){f=7;break}else g=z}if((f|0)==7)return}f=yl(0,0,b|0,c|0)|0;g=z;h=0;while(1){if((f|0)==0&(g|0)==0){f=7;break}i=zl(f|0,g|0,1,0)|0;j=z;c=Hl(i|0,j|0,3,0)|0;a[d+h>>0]=1-(c&255)<<24>>24;h=h+1|0;f=El(i|0,j|0,3,0)|0;if(h>>>0>=e>>>0){f=7;break}else g=z}if((f|0)==7)return}function Li(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;e=Hl(a|0,b|0,3,0)|0;c=z;d=(e|0)==0&(c|0)==0;f=zl(a|0,b|0,3,0)|0;c=yl(f|0,z|0,e|0,c|0)|0;z=d?b:z;return (d?a:c)|0}function Mi(b,c){b=b|0;c=c|0;var d=0,e=0;if(c>>>0>5)xj(14004);if(!c){c=0;return c|0}else{e=c;d=0}while(1){e=e+-1|0;if(e>>>0>=c>>>0){b=7;break}d=(a[b+e>>0]|0)+(d*3|0)<<24>>24;if(!e){b=4;break}}if((b|0)==4)return d|0;else if((b|0)==7)sj(14028,e,c);return 0}function Ni(a){a=a|0;var b=0;b=a<<24>>24;a=a<<24>>24<0?b+243|0:b;if(a>>>0<243)return 21609+(a*5|0)|0;else sj(14044,a,243);return 0}function Oi(a){a=a|0;var b=0,d=0,e=0,f=0;d=c[a>>2]|0;b=c[a+8>>2]|0;if(d>>>0<(c[b+4>>2]|0)>>>0){f=c[b>>2]|0;e=c[a+4>>2]&31;b=(c[f+(d<<3)>>2]|0)>>>e&1;e=(c[f+(d<<3)+4>>2]|0)>>>e&1;c[a>>2]=d+1;if((b|0)!=0&(e|0)==0){a=1;b=-256}else{a=1;b=((b|0)==0&(e|0)!=0&1)<<8&65535}}else{a=0;b=0}return a|b|0}function Pi(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function Qi(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=0;c[a+4>>2]=d;c[a+8>>2]=b;return}function Ri(a){a=a|0;var b=0;if(!(c[a+4>>2]|0))sj(14060,0,0);else{a=c[a>>2]|0;b=R(c[a>>2]|0)|0;a=R(c[a+4>>2]|0)|0;return 32-(b>>>0<=a>>>0?b:a)|0}return 0}function Si(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return ma(a|0,b|0,c|0,d|0,e|0,f|0)|0}function Ti(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=wa(8)|0;e=a;f=b;if(d|0){c[d>>2]=a;c[d+4>>2]=b;Qa(d|0,0,0)}o=0;$(c[b>>2]|0,e|0);d=o;o=0;if(d&1){f=oa()|0;Ui(a,b);ya(f|0)}a=c[f+4>>2]|0;if(!a)return 3;vb(e,a,c[f+8>>2]|0);return 3}function Ui(a,b){a=a|0;b=b|0;var d=0;d=c[b+4>>2]|0;if(!d)return;vb(a,d,c[b+8>>2]|0);return}function Vi(a,b){a=a|0;b=b|0;var d=0,e=0;e=l;l=l+16|0;d=e;do switch(c[a>>2]&15){case 0:{kk(d,b,22996,14);d=ak(d)|0;l=e;return d|0}case 1:{kk(d,b,23010,29);d=ak(d)|0;l=e;return d|0}case 2:{kk(d,b,23039,23);d=ak(d)|0;l=e;return d|0}case 3:{kk(d,b,23062,23);d=ak(d)|0;l=e;return d|0}case 4:{kk(d,b,23085,16);d=ak(d)|0;l=e;return d|0}case 5:{kk(d,b,23101,17);d=ak(d)|0;l=e;return d|0}case 6:{kk(d,b,23118,18);d=ak(d)|0;l=e;return d|0}case 7:{kk(d,b,23136,20);d=ak(d)|0;l=e;return d|0}case 8:{kk(d,b,23156,20);d=ak(d)|0;l=e;return d|0}default:{kk(d,b,23176,12);d=ak(d)|0;l=e;return d|0}}while(0);return 0}function Wi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=l;l=l+48|0;g=d+32|0;f=d+24|0;e=d;a=(c[a>>2]|0)==0;c[g>>2]=a?23188:23214;c[g+4>>2]=a?26:29;c[f>>2]=g;c[f+4>>2]=67;c[e>>2]=14100;c[e+4>>2]=1;c[e+8>>2]=0;c[e+16>>2]=f;c[e+20>>2]=1;b=hk(b,e)|0;l=d;return b|0}function Xi(a,b){a=a|0;b=b|0;return ok(c[a>>2]|0,c[a+4>>2]|0,b)|0}function Yi(a){a=a|0;var b=0;b=l;l=l+16|0;c[b>>2]=c[a>>2];c[b+4>>2]=c[a+4>>2];c[b+8>>2]=c[a+8>>2];ub(b)}function Zi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;j=l;l=l+16|0;i=j;d=c[a+8>>2]|0;h=a+4|0;e=c[h>>2]|0;if((e-d|0)>>>0>=b>>>0){l=j;return}b=d+b|0;if(b>>>0<d>>>0)Wj(23243,17);g=e<<1;g=b>>>0>=g>>>0?b:g;if((g|0)<0)xj(14108);if(!e){f=tb(g,1,i)|0;b=0;d=0;e=(f|0)==0&1}else{f=wb(c[a>>2]|0,e,1,g,1,i)|0;k=(f|0)==0;d=i+4|0;b=c[d>>2]|0;d=c[d+4>>2]|0;e=k&1;f=k?c[i>>2]|0:f}if(e|0){c[i>>2]=f;k=i+4|0;c[k>>2]=b;c[k+4>>2]=d;Yi(i)}c[a>>2]=f;c[h>>2]=g;l=j;return}function _i(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+48|0;f=j+32|0;i=j+16|0;h=j;if((d|0)<0)xj(14108);if(d){e=tb(d,1,f)|0;if(!e)Yi(f);else g=e}else g=1;c[i>>2]=g;c[i+4>>2]=d;e=i+8|0;c[e>>2]=0;o=0;aa(22,i|0,d|0);g=o;o=0;if(g&1){j=oa()|0;$i(i);ya(j|0)}else{g=c[e>>2]|0;c[e>>2]=g+d;Il((c[i>>2]|0)+g|0,b|0,d|0)|0;c[h>>2]=c[i>>2];c[h+4>>2]=c[i+4>>2];c[h+8>>2]=c[i+8>>2];c[a>>2]=c[h>>2];c[a+4>>2]=c[h+4>>2];c[a+8>>2]=c[h+8>>2];l=j;return}}function $i(a){a=a|0;var b=0;b=c[a+4>>2]|0;if(!b)return;vb(c[a>>2]|0,b,1);return}function aj(a,b,c){a=a|0;b=b|0;c=c|0;_i(a,b,c);return}

// EMSCRIPTEN_END_FUNCS
var _a=[dm,ud,Fc,Jc,Vd,Lj,Pj,Zk,Tk,Fj,mi,Sk,dm,dm,dm,dm];var $a=[em,Pf];var ab=[fm,jf,nf,ki];var bb=[gm,Xb];var cb=[hm,Jd,td,Vb,nc,kc,vc,xc,Dc,Ic,Xc,bd,qd,yd,Fd,Bd,Dd,Ud,Mf,fj,dj,hj,pj,Kj,Oj,sk,qk,yk,Fk,Bb,xj,Pb,xd,Zb,_b,dc,wc,gi,hi,ei,Ce,Qf,_f,eg,Uh,si,Gg,hm,hm,hm,hm,hm,hm,hm,hm,hm,hm,hm,hm,hm,hm,hm,hm,hm];var db=[im,pc,yc,zc,Yc,Zc,Hd,uj,rj,fd,hd,Tb,yj,Di,zi,Ai,Hi,Bf,Wj,Jf,oh,Dh,Zi,im,im,im,im,im,im,im,im,im];var eb=[jm,sd,Ac,_c,zd,Rk,Gb,fc,Db,we,yi,Ri,Oi,Ni,Wh,nh,Vh,Ch,jm,jm,jm,jm,jm,jm,jm,jm,jm,jm,jm,jm,jm,jm];var fb=[km,rc,Nb,ec,aj,Yj,je,xe,ne,Pi,Qi,sj,ke,He,Je,ui,wi,af,bf,ai,mh,Bh,Gi,km,km,km,km,km,km,km,km,km];var gb=[lm,Of];var hb=[mm,Fb,Hb,Yb];var ib=[nm,lf];var jb=[om,$e,ff,om];var kb=[pm,vd,wd,Gc,Hc,Bc,Cc,Ec,Kc,Lc,$c,ad,cd,Gd,Cd,Ed,Wd,Xd,df,gj,ej,ij,qj,Mj,Nj,Qj,Rj,tk,rk,zk,Gk,Sb,Kb,Sj,Tj,Ad,yb,vk,fk,jd,kd,tj,Pc,Wc,xk,Vi,nd,Dk,hk,Ek,Wi,Ak,Li,ji,oe,Fe,Mi,Ne,Oe,cj,Kf,gg,Xh,Yh,li,oi,Ci,Xi,oj,uk,Bj,Cj,Dj,Ej,Gj,Jj,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm];var lb=[qm,oc,qc,di,pi,qm,qm,qm];return{_iota_models_v2_tx_address:Jg,_iota_models_v1_tx_hash:Eg,_iota_models_v2_tx_set_value:_g,_iota_models_v2_tx_set_obsolete_tag:$g,_iota_sign_iss_subseed:_e,_bitshift64Lshr:Fl,_iota_sign_checksum_validate:pf,_iota_ctrits_ctrits_data:he,_iota_ctrits_ctrits_encoding:fe,_iota_models_v2_tx_trunk:Qg,_iota_models_v2_tx_set_address:Zg,_iota_models_v2_tx_timestamp:Mg,_iota_models_v1_tx_branch:qg,_iota_kerl_trit_reset:Xe,_iota_models_v2_tx_set_signature_or_message:Yg,_iota_models_v2_tx_current_index:Ng,_iota_sign_checksum:of,_iota_kerl_trit_state:Ze,_memcpy:Il,_iota_models_v2_tx_last_index:Og,_iota_models_v2_tx_set_attachment_timestamp:hh,_iota_ctrits_ctrits_from_trits:de,dynCall_vi:Vl,dynCall_viiiiiiii:Zl,dynCall_iiii:Rl,dynCall_ii:Xl,_iota_merkle_siblings:bg,_iota_models_v1_tx_set_branch:Cg,_emscripten_get_global_libc:Qk,_iota_curl_bctrit_absorb:Af,_iota_models_v2_tx_set_attachment_timestamp_lower:ih,stackSave:nb,dynCall_viiiii:Tl,_free:Jk,runPostSets:xl,dynCall_viiiiii:am,_iota_merkle_root:cg,___divdi3:El,_iota_models_v1_bundle_hash:dg,_iota_kerl_trit_delete:Ue,_iota_models_v2_bundle_hash:Fg,_iota_merkle_slice:Xf,_iota_ctrits_ctrits_length:ge,_iota_models_v2_tx_essence:Xg,_iota_models_v1_tx_current_index:mg,_iota_curl_bctrit_delete:zf,_iota_models_v1_tx_set_value:vg,_i64Add:zl,_iota_merkle_branch_drop:Zf,stackAlloc:mb,_iota_models_v2_tx_set_bundle:dh,_iota_ctrits_drop:Yd,_iota_models_v1_tx_trunk:pg,getTempRet0:sb,_ntohs:ul,_iota_models_v2_tx_tag:Sg,_iota_models_v1_tx_address:ig,_iota_models_v1_tx_set_tag:wg,_iota_curl_trit_squeeze:wf,dynCall_viiii:cm,_llvm_bswap_i32:Pl,_iota_kerl_trit_squeeze:Ye,_iota_models_v2_tx_attachment_timestamp_upper:Vg,dynCall_v:_l,_iota_mam_create:me,establishStackSpace:pb,_iota_sign_iss_subseed_to_signature:kf,_iota_models_v2_tx_hash:lh,_iota_models_v2_tx_branch:Rg,_pthread_mutex_lock:Bl,_iota_models_v1_tx_set_last_index:zg,_iota_models_v1_tx_signature_or_message:hg,_iota_sign_iss_signature:hf,_iota_merkle_create:Nf,_iota_models_v2_tx_value:Kg,_iota_models_v1_tx_set_current_index:yg,dynCall_viiiiiiiiii:Sl,dynCall_viii:Yl,_iota_merkle_count:Wf,_iota_models_v2_tx_set_branch:fh,_iota_models_v1_tx_tag:kg,_sbrk:Ml,_iota_mam_parse:qe,_iota_models_v2_tx_nonce:Wg,dynCall_iii:bm,_iota_curl_trit_rounds:uf,_memset:Al,_iota_models_v1_tx_set_signature_or_message:tg,_iota_curl_trit_reset:tf,_iota_sign_iss_digest_bundle_signature:mf,_iota_curl_trit_new:qf,_iota_curl_bctrit_reset:Ff,_iota_curl_bctrit_squeeze:If,_iota_models_v2_tx_set_trunk:eh,_iota_models_v2_tx_set_nonce:kh,_iota_sign_iss_digest_key:ef,_iota_models_v1_tx_last_index:ng,_iota_models_v1_tx_timestamp:lg,_llvm_bswap_i16:Ql,___remdi3:Hl,_iota_curl_bctrit_set_rounds:Hf,_iota_models_v1_tx_set_bundle:Ag,___udivdi3:Jl,_iota_curl_bctrit_rounds:Gf,dynCall_i:Ul,setThrew:qb,_malloc:Ik,_iota_merkle_branch_len:ag,_iota_ctrits_ctrits_from_bytes:ee,_iota_curl_trit_set_rounds:vf,_iota_curl_bctrit_new:yf,_iota_ctrits_ctrits_from_trytes:ae,_iota_kerl_trit_new:Se,_iota_ctrits_ctrits_byte_length:ie,_iota_sign_iss_key:cf,_iota_sign_iss_address:gf,_iota_curl_trit_delete:rf,_i64Subtract:yl,_iota_curl_trit_absorb:sf,_iota_merkle_drop:Tf,_iota_models_v2_tx_attachment_timestamp:Tg,_iota_curl_trit_state:xf,_iota_models_v2_tx_bundle:Pg,_iota_models_v1_tx_set_nonce:Dg,_bitshift64Shl:Nl,_iota_models_v2_tx_set_attachment_timestamp_upper:jh,_fflush:il,setTempRet0:rb,_iota_models_v1_tx_bundle:og,_iota_models_v2_tx_obsolete_tag:Lg,_iota_models_v1_tx_essence:sg,___muldi3:Ll,_iota_models_v2_tx_signature_or_message:Ig,_iota_models_v2_tx_set_tag:gh,___uremdi3:Ol,_iota_models_v2_tx_set_current_index:bh,dynCall_vii:Wl,_iota_models_v2_tx_attachment_timestamp_lower:Ug,_htonl:ql,_iota_kerl_trit_absorb:Ve,_iota_models_v1_tx_nonce:rg,_iota_models_v2_tx_set_last_index:ch,_iota_models_v1_tx_set_address:ug,_pthread_mutex_unlock:Gl,stackRestore:ob,_iota_merkle_depth:Vf,_iota_merkle_branch:Yf,_htons:sl,_iota_models_v1_tx_set_trunk:Bg,___errno_location:Vk,_iota_merkle_size:Uf,_iota_models_v1_tx_set_timestamp:xg,_iota_models_v2_tx_set_timestamp:ah,_iota_models_v1_tx_value:jg,_iota_ctrits_convert:_d,dynCall_viiiiiiiii:$l}})


// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg,Module.asmLibraryArg,buffer);var _iota_models_v2_tx_address=Module["_iota_models_v2_tx_address"]=asm["_iota_models_v2_tx_address"];var _iota_models_v1_tx_hash=Module["_iota_models_v1_tx_hash"]=asm["_iota_models_v1_tx_hash"];var _iota_models_v2_tx_set_value=Module["_iota_models_v2_tx_set_value"]=asm["_iota_models_v2_tx_set_value"];var _iota_models_v2_tx_set_obsolete_tag=Module["_iota_models_v2_tx_set_obsolete_tag"]=asm["_iota_models_v2_tx_set_obsolete_tag"];var _iota_sign_iss_subseed=Module["_iota_sign_iss_subseed"]=asm["_iota_sign_iss_subseed"];var _bitshift64Lshr=Module["_bitshift64Lshr"]=asm["_bitshift64Lshr"];var _iota_sign_checksum_validate=Module["_iota_sign_checksum_validate"]=asm["_iota_sign_checksum_validate"];var _iota_ctrits_ctrits_data=Module["_iota_ctrits_ctrits_data"]=asm["_iota_ctrits_ctrits_data"];var _iota_ctrits_ctrits_encoding=Module["_iota_ctrits_ctrits_encoding"]=asm["_iota_ctrits_ctrits_encoding"];var _iota_models_v2_tx_trunk=Module["_iota_models_v2_tx_trunk"]=asm["_iota_models_v2_tx_trunk"];var _iota_models_v2_tx_timestamp=Module["_iota_models_v2_tx_timestamp"]=asm["_iota_models_v2_tx_timestamp"];var _iota_models_v1_tx_branch=Module["_iota_models_v1_tx_branch"]=asm["_iota_models_v1_tx_branch"];var _iota_kerl_trit_reset=Module["_iota_kerl_trit_reset"]=asm["_iota_kerl_trit_reset"];var _iota_models_v2_tx_set_signature_or_message=Module["_iota_models_v2_tx_set_signature_or_message"]=asm["_iota_models_v2_tx_set_signature_or_message"];var _iota_models_v2_tx_current_index=Module["_iota_models_v2_tx_current_index"]=asm["_iota_models_v2_tx_current_index"];var _iota_sign_checksum=Module["_iota_sign_checksum"]=asm["_iota_sign_checksum"];var _sbrk=Module["_sbrk"]=asm["_sbrk"];var _memcpy=Module["_memcpy"]=asm["_memcpy"];var _iota_models_v2_tx_last_index=Module["_iota_models_v2_tx_last_index"]=asm["_iota_models_v2_tx_last_index"];var _iota_models_v2_tx_set_attachment_timestamp=Module["_iota_models_v2_tx_set_attachment_timestamp"]=asm["_iota_models_v2_tx_set_attachment_timestamp"];var _iota_ctrits_ctrits_from_trits=Module["_iota_ctrits_ctrits_from_trits"]=asm["_iota_ctrits_ctrits_from_trits"];var _iota_merkle_siblings=Module["_iota_merkle_siblings"]=asm["_iota_merkle_siblings"];var _iota_models_v1_tx_set_branch=Module["_iota_models_v1_tx_set_branch"]=asm["_iota_models_v1_tx_set_branch"];var _emscripten_get_global_libc=Module["_emscripten_get_global_libc"]=asm["_emscripten_get_global_libc"];var _iota_curl_bctrit_absorb=Module["_iota_curl_bctrit_absorb"]=asm["_iota_curl_bctrit_absorb"];var _iota_models_v2_tx_set_attachment_timestamp_lower=Module["_iota_models_v2_tx_set_attachment_timestamp_lower"]=asm["_iota_models_v2_tx_set_attachment_timestamp_lower"];var stackSave=Module["stackSave"]=asm["stackSave"];var _free=Module["_free"]=asm["_free"];var runPostSets=Module["runPostSets"]=asm["runPostSets"];var _iota_merkle_root=Module["_iota_merkle_root"]=asm["_iota_merkle_root"];var _iota_models_v1_tx_trunk=Module["_iota_models_v1_tx_trunk"]=asm["_iota_models_v1_tx_trunk"];var _iota_models_v1_bundle_hash=Module["_iota_models_v1_bundle_hash"]=asm["_iota_models_v1_bundle_hash"];var _iota_kerl_trit_delete=Module["_iota_kerl_trit_delete"]=asm["_iota_kerl_trit_delete"];var _iota_models_v2_bundle_hash=Module["_iota_models_v2_bundle_hash"]=asm["_iota_models_v2_bundle_hash"];var _iota_merkle_slice=Module["_iota_merkle_slice"]=asm["_iota_merkle_slice"];var _iota_ctrits_ctrits_length=Module["_iota_ctrits_ctrits_length"]=asm["_iota_ctrits_ctrits_length"];var _iota_models_v2_tx_essence=Module["_iota_models_v2_tx_essence"]=asm["_iota_models_v2_tx_essence"];var _iota_models_v1_tx_set_timestamp=Module["_iota_models_v1_tx_set_timestamp"]=asm["_iota_models_v1_tx_set_timestamp"];var _iota_models_v1_tx_current_index=Module["_iota_models_v1_tx_current_index"]=asm["_iota_models_v1_tx_current_index"];var _iota_curl_bctrit_delete=Module["_iota_curl_bctrit_delete"]=asm["_iota_curl_bctrit_delete"];var _iota_models_v1_tx_set_value=Module["_iota_models_v1_tx_set_value"]=asm["_iota_models_v1_tx_set_value"];var _iota_models_v1_tx_nonce=Module["_iota_models_v1_tx_nonce"]=asm["_iota_models_v1_tx_nonce"];var _iota_merkle_branch_drop=Module["_iota_merkle_branch_drop"]=asm["_iota_merkle_branch_drop"];var _iota_kerl_trit_new=Module["_iota_kerl_trit_new"]=asm["_iota_kerl_trit_new"];var stackAlloc=Module["stackAlloc"]=asm["stackAlloc"];var _iota_models_v2_tx_set_bundle=Module["_iota_models_v2_tx_set_bundle"]=asm["_iota_models_v2_tx_set_bundle"];var _iota_ctrits_drop=Module["_iota_ctrits_drop"]=asm["_iota_ctrits_drop"];var ___divdi3=Module["___divdi3"]=asm["___divdi3"];var getTempRet0=Module["getTempRet0"]=asm["getTempRet0"];var _ntohs=Module["_ntohs"]=asm["_ntohs"];var _iota_models_v2_tx_tag=Module["_iota_models_v2_tx_tag"]=asm["_iota_models_v2_tx_tag"];var _iota_models_v1_tx_address=Module["_iota_models_v1_tx_address"]=asm["_iota_models_v1_tx_address"];var _iota_models_v1_tx_set_tag=Module["_iota_models_v1_tx_set_tag"]=asm["_iota_models_v1_tx_set_tag"];var _iota_curl_trit_squeeze=Module["_iota_curl_trit_squeeze"]=asm["_iota_curl_trit_squeeze"];var _llvm_bswap_i32=Module["_llvm_bswap_i32"]=asm["_llvm_bswap_i32"];var _iota_kerl_trit_squeeze=Module["_iota_kerl_trit_squeeze"]=asm["_iota_kerl_trit_squeeze"];var _iota_models_v2_tx_attachment_timestamp_upper=Module["_iota_models_v2_tx_attachment_timestamp_upper"]=asm["_iota_models_v2_tx_attachment_timestamp_upper"];var _iota_mam_create=Module["_iota_mam_create"]=asm["_iota_mam_create"];var establishStackSpace=Module["establishStackSpace"]=asm["establishStackSpace"];var _iota_curl_trit_set_rounds=Module["_iota_curl_trit_set_rounds"]=asm["_iota_curl_trit_set_rounds"];var _iota_models_v2_tx_hash=Module["_iota_models_v2_tx_hash"]=asm["_iota_models_v2_tx_hash"];var _iota_models_v2_tx_branch=Module["_iota_models_v2_tx_branch"]=asm["_iota_models_v2_tx_branch"];var _pthread_mutex_lock=Module["_pthread_mutex_lock"]=asm["_pthread_mutex_lock"];var _iota_models_v1_tx_set_last_index=Module["_iota_models_v1_tx_set_last_index"]=asm["_iota_models_v1_tx_set_last_index"];var _iota_models_v1_tx_signature_or_message=Module["_iota_models_v1_tx_signature_or_message"]=asm["_iota_models_v1_tx_signature_or_message"];var _iota_sign_iss_signature=Module["_iota_sign_iss_signature"]=asm["_iota_sign_iss_signature"];var _iota_merkle_create=Module["_iota_merkle_create"]=asm["_iota_merkle_create"];var _iota_models_v2_tx_value=Module["_iota_models_v2_tx_value"]=asm["_iota_models_v2_tx_value"];var _iota_models_v1_tx_set_current_index=Module["_iota_models_v1_tx_set_current_index"]=asm["_iota_models_v1_tx_set_current_index"];var _iota_merkle_count=Module["_iota_merkle_count"]=asm["_iota_merkle_count"];var _iota_models_v1_tx_set_trunk=Module["_iota_models_v1_tx_set_trunk"]=asm["_iota_models_v1_tx_set_trunk"];var _iota_models_v1_tx_tag=Module["_iota_models_v1_tx_tag"]=asm["_iota_models_v1_tx_tag"];var _iota_kerl_trit_state=Module["_iota_kerl_trit_state"]=asm["_iota_kerl_trit_state"];var _iota_mam_parse=Module["_iota_mam_parse"]=asm["_iota_mam_parse"];var _iota_models_v2_tx_nonce=Module["_iota_models_v2_tx_nonce"]=asm["_iota_models_v2_tx_nonce"];var _iota_sign_iss_address=Module["_iota_sign_iss_address"]=asm["_iota_sign_iss_address"];var _memset=Module["_memset"]=asm["_memset"];var _iota_models_v1_tx_set_signature_or_message=Module["_iota_models_v1_tx_set_signature_or_message"]=asm["_iota_models_v1_tx_set_signature_or_message"];var _iota_curl_trit_reset=Module["_iota_curl_trit_reset"]=asm["_iota_curl_trit_reset"];var _iota_sign_iss_digest_bundle_signature=Module["_iota_sign_iss_digest_bundle_signature"]=asm["_iota_sign_iss_digest_bundle_signature"];var _iota_curl_trit_new=Module["_iota_curl_trit_new"]=asm["_iota_curl_trit_new"];var _iota_curl_bctrit_reset=Module["_iota_curl_bctrit_reset"]=asm["_iota_curl_bctrit_reset"];var _iota_curl_bctrit_squeeze=Module["_iota_curl_bctrit_squeeze"]=asm["_iota_curl_bctrit_squeeze"];var _iota_models_v2_tx_set_trunk=Module["_iota_models_v2_tx_set_trunk"]=asm["_iota_models_v2_tx_set_trunk"];var _iota_models_v2_tx_set_nonce=Module["_iota_models_v2_tx_set_nonce"]=asm["_iota_models_v2_tx_set_nonce"];var _iota_sign_iss_digest_key=Module["_iota_sign_iss_digest_key"]=asm["_iota_sign_iss_digest_key"];var _iota_models_v1_tx_last_index=Module["_iota_models_v1_tx_last_index"]=asm["_iota_models_v1_tx_last_index"];var _llvm_bswap_i16=Module["_llvm_bswap_i16"]=asm["_llvm_bswap_i16"];var ___remdi3=Module["___remdi3"]=asm["___remdi3"];var _iota_curl_bctrit_set_rounds=Module["_iota_curl_bctrit_set_rounds"]=asm["_iota_curl_bctrit_set_rounds"];var _iota_models_v1_tx_set_bundle=Module["_iota_models_v1_tx_set_bundle"]=asm["_iota_models_v1_tx_set_bundle"];var _iota_curl_trit_absorb=Module["_iota_curl_trit_absorb"]=asm["_iota_curl_trit_absorb"];var _iota_curl_bctrit_rounds=Module["_iota_curl_bctrit_rounds"]=asm["_iota_curl_bctrit_rounds"];var setThrew=Module["setThrew"]=asm["setThrew"];var _malloc=Module["_malloc"]=asm["_malloc"];var _iota_merkle_branch_len=Module["_iota_merkle_branch_len"]=asm["_iota_merkle_branch_len"];var _iota_ctrits_ctrits_from_bytes=Module["_iota_ctrits_ctrits_from_bytes"]=asm["_iota_ctrits_ctrits_from_bytes"];var _iota_sign_iss_subseed_to_signature=Module["_iota_sign_iss_subseed_to_signature"]=asm["_iota_sign_iss_subseed_to_signature"];var _iota_ctrits_ctrits_from_trytes=Module["_iota_ctrits_ctrits_from_trytes"]=asm["_iota_ctrits_ctrits_from_trytes"];var _iota_models_v2_tx_set_address=Module["_iota_models_v2_tx_set_address"]=asm["_iota_models_v2_tx_set_address"];var _iota_ctrits_ctrits_byte_length=Module["_iota_ctrits_ctrits_byte_length"]=asm["_iota_ctrits_ctrits_byte_length"];var _iota_sign_iss_key=Module["_iota_sign_iss_key"]=asm["_iota_sign_iss_key"];var _iota_curl_trit_rounds=Module["_iota_curl_trit_rounds"]=asm["_iota_curl_trit_rounds"];var _iota_curl_trit_delete=Module["_iota_curl_trit_delete"]=asm["_iota_curl_trit_delete"];var _i64Subtract=Module["_i64Subtract"]=asm["_i64Subtract"];var ___udivdi3=Module["___udivdi3"]=asm["___udivdi3"];var _iota_curl_trit_state=Module["_iota_curl_trit_state"]=asm["_iota_curl_trit_state"];var _iota_merkle_drop=Module["_iota_merkle_drop"]=asm["_iota_merkle_drop"];var _iota_models_v2_tx_attachment_timestamp=Module["_iota_models_v2_tx_attachment_timestamp"]=asm["_iota_models_v2_tx_attachment_timestamp"];var _iota_models_v1_tx_timestamp=Module["_iota_models_v1_tx_timestamp"]=asm["_iota_models_v1_tx_timestamp"];var _iota_models_v2_tx_bundle=Module["_iota_models_v2_tx_bundle"]=asm["_iota_models_v2_tx_bundle"];var _iota_models_v1_tx_set_nonce=Module["_iota_models_v1_tx_set_nonce"]=asm["_iota_models_v1_tx_set_nonce"];var _bitshift64Shl=Module["_bitshift64Shl"]=asm["_bitshift64Shl"];var _iota_models_v2_tx_set_attachment_timestamp_upper=Module["_iota_models_v2_tx_set_attachment_timestamp_upper"]=asm["_iota_models_v2_tx_set_attachment_timestamp_upper"];var _fflush=Module["_fflush"]=asm["_fflush"];var setTempRet0=Module["setTempRet0"]=asm["setTempRet0"];var _iota_models_v1_tx_bundle=Module["_iota_models_v1_tx_bundle"]=asm["_iota_models_v1_tx_bundle"];var _iota_models_v2_tx_obsolete_tag=Module["_iota_models_v2_tx_obsolete_tag"]=asm["_iota_models_v2_tx_obsolete_tag"];var _iota_models_v1_tx_essence=Module["_iota_models_v1_tx_essence"]=asm["_iota_models_v1_tx_essence"];var ___muldi3=Module["___muldi3"]=asm["___muldi3"];var _iota_models_v2_tx_signature_or_message=Module["_iota_models_v2_tx_signature_or_message"]=asm["_iota_models_v2_tx_signature_or_message"];var _iota_models_v2_tx_set_tag=Module["_iota_models_v2_tx_set_tag"]=asm["_iota_models_v2_tx_set_tag"];var ___uremdi3=Module["___uremdi3"]=asm["___uremdi3"];var _iota_models_v2_tx_set_current_index=Module["_iota_models_v2_tx_set_current_index"]=asm["_iota_models_v2_tx_set_current_index"];var _iota_models_v2_tx_attachment_timestamp_lower=Module["_iota_models_v2_tx_attachment_timestamp_lower"]=asm["_iota_models_v2_tx_attachment_timestamp_lower"];var _htonl=Module["_htonl"]=asm["_htonl"];var _iota_kerl_trit_absorb=Module["_iota_kerl_trit_absorb"]=asm["_iota_kerl_trit_absorb"];var _i64Add=Module["_i64Add"]=asm["_i64Add"];var _iota_models_v2_tx_set_last_index=Module["_iota_models_v2_tx_set_last_index"]=asm["_iota_models_v2_tx_set_last_index"];var _iota_models_v1_tx_set_address=Module["_iota_models_v1_tx_set_address"]=asm["_iota_models_v1_tx_set_address"];var _pthread_mutex_unlock=Module["_pthread_mutex_unlock"]=asm["_pthread_mutex_unlock"];var stackRestore=Module["stackRestore"]=asm["stackRestore"];var _iota_merkle_depth=Module["_iota_merkle_depth"]=asm["_iota_merkle_depth"];var _iota_merkle_branch=Module["_iota_merkle_branch"]=asm["_iota_merkle_branch"];var _htons=Module["_htons"]=asm["_htons"];var _iota_models_v2_tx_set_branch=Module["_iota_models_v2_tx_set_branch"]=asm["_iota_models_v2_tx_set_branch"];var ___errno_location=Module["___errno_location"]=asm["___errno_location"];var _iota_merkle_size=Module["_iota_merkle_size"]=asm["_iota_merkle_size"];var _iota_curl_bctrit_new=Module["_iota_curl_bctrit_new"]=asm["_iota_curl_bctrit_new"];var _iota_models_v2_tx_set_timestamp=Module["_iota_models_v2_tx_set_timestamp"]=asm["_iota_models_v2_tx_set_timestamp"];var _iota_models_v1_tx_value=Module["_iota_models_v1_tx_value"]=asm["_iota_models_v1_tx_value"];var _iota_ctrits_convert=Module["_iota_ctrits_convert"]=asm["_iota_ctrits_convert"];var dynCall_iiii=Module["dynCall_iiii"]=asm["dynCall_iiii"];var dynCall_viiiiiiiiii=Module["dynCall_viiiiiiiiii"]=asm["dynCall_viiiiiiiiii"];var dynCall_viiiii=Module["dynCall_viiiii"]=asm["dynCall_viiiii"];var dynCall_i=Module["dynCall_i"]=asm["dynCall_i"];var dynCall_vi=Module["dynCall_vi"]=asm["dynCall_vi"];var dynCall_vii=Module["dynCall_vii"]=asm["dynCall_vii"];var dynCall_ii=Module["dynCall_ii"]=asm["dynCall_ii"];var dynCall_viii=Module["dynCall_viii"]=asm["dynCall_viii"];var dynCall_viiiiiiii=Module["dynCall_viiiiiiii"]=asm["dynCall_viiiiiiii"];var dynCall_v=Module["dynCall_v"]=asm["dynCall_v"];var dynCall_viiiiiiiii=Module["dynCall_viiiiiiiii"]=asm["dynCall_viiiiiiiii"];var dynCall_viiiiii=Module["dynCall_viiiiii"]=asm["dynCall_viiiiii"];var dynCall_iii=Module["dynCall_iii"]=asm["dynCall_iii"];var dynCall_viiii=Module["dynCall_viiii"]=asm["dynCall_viiii"];Runtime.stackAlloc=Module["stackAlloc"];Runtime.stackSave=Module["stackSave"];Runtime.stackRestore=Module["stackRestore"];Runtime.establishStackSpace=Module["establishStackSpace"];Runtime.setTempRet0=Module["setTempRet0"];Runtime.getTempRet0=Module["getTempRet0"];Module["asm"]=asm;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;var preloadStartTime=null;var calledMain=false;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};Module["callMain"]=Module.callMain=function callMain(args){args=args||[];ensureInitRuntime();var argc=args.length+1;function pad(){for(var i=0;i<4-1;i++){argv.push(0)}}var argv=[allocate(intArrayFromString(Module["thisProgram"]),"i8",ALLOC_NORMAL)];pad();for(var i=0;i<argc-1;i=i+1){argv.push(allocate(intArrayFromString(args[i]),"i8",ALLOC_NORMAL));pad()}argv.push(0);argv=allocate(argv,"i32",ALLOC_NORMAL);try{var ret=Module["_main"](argc,argv,0);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="SimulateInfiniteLoop"){Module["noExitRuntime"]=true;return}else{var toLog=e;if(e&&typeof e==="object"&&e.stack){toLog=[e,e.stack]}Module.printErr("exception thrown: "+toLog);Module["quit"](1,e)}}finally{calledMain=true}};function run(args){args=args||Module["arguments"];if(preloadStartTime===null)preloadStartTime=Date.now();if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(Module["_main"]&&shouldRunNow)Module["callMain"](args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=Module.run=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["exit"](status)}Module["quit"](status,new ExitStatus(status))}Module["exit"]=Module.exit=exit;var abortDecorators=[];function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;var extra="\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";var output="abort("+what+") at "+stackTrace()+extra;if(abortDecorators){abortDecorators.forEach((function(decorator){output=decorator(output,what)}))}throw output}Module["abort"]=Module.abort=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"]){shouldRunNow=false}run()





})();

/***/ })
/******/ ]);
});
//# sourceMappingURL=mam.client.js.map