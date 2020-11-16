function getMenu() {
    console.log("called me");
    document.getElementById("nav").innerHTML +=
      '<nav class="navbar navbar-expand-lg navbar-light nav-color col-12"> <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> <div class="navbar-nav w-100"> <a class="navbar-brand" href="./jogos.html"> <img src="img/video-game.png" width="30" height="25" alt=""/> Jogos </a> <a class="navbar-brand" href="./AcervoJogos.html"> <img src="img/video-camera.png" width="30" height="25" alt=""/> Acervo de Jogos </a> <a class="navbar-brand" href="./images.html"> <img src="img/painting.png" width="30" height="25" alt=""/> Screenshots </a> <a class="navbar-brand" href="./document.html"> <img src="img/document.png" width="30" height="25" alt=""/> Generos </a> </div></div></nav>';
  }
  function hideSpinner() {
    document.getElementById("spiner").classList.add("invisible");
  }
  function showSpinner() {
    document.getElementById("spiner").classList.remove("invisible");
  }
  
  async function fetchData(url) {
    content = null;
    content = await fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err.message));
  }
  'use strict';

/**
 * Recursively flatten an array or arrays. Uses the fastest
 * implementation of array flatten for node.js
 *
 * ```js
 * flatten(['a', ['b', ['c']], 'd', ['e']]);
 * //=> ['a', 'b', 'c', 'd', 'e']
 * ```
 *
 * @name .flatten
 * @param {Array} `array`
 * @return {Array} Flattened array
 * @api public
 */

module.exports = require('arr-flatten');

'use strict';

var isNumber = require('is-number');

/**
 * Returns the first item, or first `n` items of an array.
 *
 * ```js
 * first(['a', 'b', 'c', 'd', 'e'], 2)
 * //=> ['a', 'b']
 * ```
 *
 * @name .first
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting at `0`.
 * @return {Array}
 * @api public
 */

module.exports = function first(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.first() expects an array.');
  }

  var len = arr.length;
  if (len === 0) {
    return [];
  }

  if (!fn) return arr[0];

  if (isNumber(fn)) {
    return arr.slice(0, fn);
  }

  if (typeof fn === 'function') {
    var val, i = 0;

    while (len--) {
      val = arr[i++];
      if (fn(val, i, arr)) {
        return val;
      }
    }
  }
  return [];
};
'use strict';

/**
 * Loop over each item in an array and call the given function on every element.
 *
 * ```js
 * each(['a', 'b', 'c'], function (ele) {
 *   return ele + ele;
 * });
 * //=> ['aa', 'bb', 'cc']
 *
 * each(['a', 'b', 'c'], function (ele, i) {
 *   return i + ele;
 * });
 * //=> ['0a', '1b', '2c']
 * ```
 *
 * @name .each
 * @alias .forEach
 * @param {Array} `array`
 * @param {Function} `fn`
 * @param {Object} `thisArg` Optionally pass a `thisArg` to be used as the context in which to call the function.
 * @return {Array}
 * @api public
 */

module.exports = require('array-each');

'use strict';

var diff = require('arr-diff');

/**
 * Return the difference between the first array and
 * additional arrays.
 *
 * ```js
 * var a = ['a', 'b', 'c', 'd'];
 * var b = ['b', 'c'];
 *
 * diff(a, b);
 * //=> ['a', 'd']
 * ```
 *
 * @name .difference
 * @param  {Array} `a`
 * @param  {Array} `b`
 * @return {Array}
 * @api public
 */

module.exports = function difference_(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.difference() expects an array.');
  }
  return diff.apply(diff, arguments);
};
'use strict';

/**
 * Remove all falsey values from an array.
 *
 * ```js
 * compact([null, a, undefined, 0, false, b, c, '']);
 * //=> [a, b, c]
 * ```
 *
 * @name .compact
 * @param {Array} `arr`
 * @return {Array}
 * @api public
 */

module.exports = function compact(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.compact() expects an array.');
  }
  return arr.filter(Boolean);
};
'use strict';

/**
 * Returns all of the items in an array up to the specified number
 * Opposite of `<%= after() %`.
 *
 * ```js
 * before(['a', 'b', 'c'], 2)
 * //=> ['a', 'b']
 * ```
 *
 * @name .before
 * @param {Array} `array`
 * @param {Number} `n`
 * @return {Array} Array excluding items after the given number.
 * @crosslink after
 * @api public
 */

module.exports = function before(arr, n) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.before() expects an array.');
  }
  return arr ? arr.slice(0, -n) : null;
};
'use strict';

/**
 * Cast the give `value` to an array.
 *
 * ```js
 * arrayify('abc')
 * //=> ['abc']
 *
 * arrayify(['abc'])
 * //=> ['abc']
 * ```
 *
 * @name .arrayify
 * @param {*} `val`
 * @return {Array}
 * @api public
 */

module.exports = function arrayify(val) {
  return !Array.isArray(val) ? [val] : val;
};
'use strict';

/**
 * Returns all of the items in an array after the specified index.
 *
 * ```js
 * after(['a', 'b', 'c'], 1)
 * //=> ['c']
 * ```
 *
 * @name .after
 * @param {Array} `array` Collection
 * @param {Number} `n` Starting index (number of items to exclude)
 * @return {Array} Array exluding `n` items.
 * @crosslink before
 * @api public
 */

module.exports = function after_(arr, n) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.after() expects an array.');
  }
  return arr ? arr.slice(n) : null;
};
