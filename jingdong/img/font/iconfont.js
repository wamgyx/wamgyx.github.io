;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M937.728 838.5536 723.5072 622.5357c-2.4934-2.4996-5.248-4.4083-7.8787-6.4881 36.1861-55.9862 57.3164-122.6742 57.3164-194.5078 0-197.3463-158.6268-357.3023-354.43-357.3023-195.6936 0-354.43 159.956-354.43 357.3023 0 197.374 158.7364 357.2951 354.43 357.2951 71.2274 0 137.4546-21.3576 193.0762-57.8458 2.0255 2.7136 3.884 5.4129 6.3365 7.893l214.2484 216.0445c14.6278 14.7036 33.6783 22.0324 52.7565 22.0324 19.0915 0 38.1553-7.3277 52.7698-21.9976C966.8055 915.5523 966.8055 867.9404 937.728 838.5536M418.5149 666.0076c-133.6812 0-242.4986-109.6847-242.4986-244.4677 0-134.7625 108.8184-244.4759 242.4986-244.4759s242.4986 109.7134 242.4986 244.4759C661.0135 556.3218 552.1951 666.0076 418.5149 666.0076"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiala" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M783.52 370.752 512 642.272 240.48 370.752 195.232 416 512 732.768 828.768 416Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M536.380952 48.713143C334.409143 48.713143 170.666667 215.04 170.666667 420.230095s365.714286 603.721143 365.714286 603.721143S902.095238 625.42019 902.095238 420.230095 738.352762 48.713143 536.380952 48.713143zM536.380952 513.121524c-75.776 0-137.167238-62.366476-137.167238-139.312762S460.604952 234.496 536.380952 234.496c75.727238 0 137.167238 62.366476 137.167238 139.312762S612.10819 513.121524 536.380952 513.121524z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M831.398957 788.813913c-47.037217 0-85.170087 38.13287-85.170087 85.170087 0 47.037217 38.13287 85.170087 85.170087 85.170087s85.170087-38.13287 85.170087-85.170087C916.569043 826.946783 878.436174 788.813913 831.398957 788.813913zM831.398957 916.569043c-23.529739 0-42.585043-19.055304-42.585043-42.585043s19.055304-42.585043 42.585043-42.585043 42.585043 19.055304 42.585043 42.585043S854.906435 916.569043 831.398957 916.569043zM384.24487 788.813913c-47.037217 0-85.170087 38.13287-85.170087 85.170087 0 47.037217 38.13287 85.170087 85.170087 85.170087 47.037217 0 85.170087-38.13287 85.170087-85.170087C469.414957 826.946783 431.282087 788.813913 384.24487 788.813913zM384.24487 916.569043c-23.529739 0-42.585043-19.055304-42.585043-42.585043s19.055304-42.585043 42.585043-42.585043 42.585043 19.055304 42.585043 42.585043S407.752348 916.569043 384.24487 916.569043zM953.165913 557.278609c0 0 48.573217-278.238609 48.573217-279.507478 0-47.037217-38.13287-85.170087-85.170087-85.170087L201.371826 192.601043 188.638609 125.68487C178.109217 90.579478 145.942261 64.845913 107.430957 64.845913l-63.888696 0C31.788522 64.845913 22.26087 74.373565 22.26087 86.127304c0 11.776 9.527652 21.303652 21.303652 21.303652l63.888696 0c20.413217 0 37.420522 14.380522 41.583304 33.52487l93.718261 531.545043c0.400696 3.027478 2.470957 11.820522 2.470957 11.820522 9.616696 33.636174 39.134609 59.169391 75.152696 61.885217l596.190609 0c11.753739 0 21.303652-9.527652 21.303652-21.281391 0-11.776-9.549913-21.303652-21.303652-21.303652L326.745043 703.621565c-19.366957 0-35.528348-13.022609-40.71513-30.72l-9.594435-54.450087 595.411478 0C910.491826 618.451478 942.770087 592.562087 953.165913 557.278609zM268.933565 575.866435 208.873739 235.186087l707.695304 0c23.529739 0 42.585043 19.055304 42.585043 42.585043 0 7.791304-46.83687 268.087652-46.83687 268.087652-5.409391 17.341217-21.348174 29.985391-40.470261 29.985391L268.933565 575.844174z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)