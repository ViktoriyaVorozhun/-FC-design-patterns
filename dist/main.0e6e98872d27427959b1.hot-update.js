webpackHotUpdate("main",{

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




window.onload = function () {
  //Event Listener - submit class button click
  document.querySelector('.submit').onclick = function (e) {
    e.preventDefault();
    disableButton(this);
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./News.js */ "./js/News.js")).then(function (module) {
      var news = new module.News(getInputValue('country'), getInputValue('category'), getInputValue('pagesize'));
      createNews(news);
    });
  };

  function createNews(_x) {
    return _createNews.apply(this, arguments);
  } //Get input value from UI


  function _createNews() {
    _createNews = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(news) {
      var newsContainer, articles, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, val;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newsContainer = getNewsContainer();
              hideTitle();
              _context.prev = 2;
              _context.next = 5;
              return news.getData();

            case 5:
              articles = _context.sent;

              if (!articles) {
                _context.next = 27;
                break;
              }

              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context.prev = 10;

              for (_iterator2 = articles[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                val = _step2.value;
                newsContainer.appendChild(val.generateArticle());
              }

              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](10);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t0;

            case 18:
              _context.prev = 18;
              _context.prev = 19;

              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }

            case 21:
              _context.prev = 21;

              if (!_didIteratorError2) {
                _context.next = 24;
                break;
              }

              throw _iteratorError2;

            case 24:
              return _context.finish(21);

            case 25:
              return _context.finish(18);

            case 26:
              addShowMoreClickListener();

            case 27:
              _context.next = 32;
              break;

            case 29:
              _context.prev = 29;
              _context.t1 = _context["catch"](2);
              __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Modal.js */ "./js/Modal.js")).then(function (module) {
                document.querySelector('body').appendChild(module.generateModalWindow(_context.t1));
              });

            case 32:
              showTitle();
              enableButton('.submit');

            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 29], [10, 14, 18, 26], [19,, 21, 25]]);
    }));
    return _createNews.apply(this, arguments);
  }

  function getInputValue(element) {
    return document.getElementById(element).value;
  } //Disable submit button, prevent multiclick


  function disableButton(button) {
    button.setAttribute('disabled', 'disabled');
    button.innerHTML = 'Loading';
  }

  function enableButton(button) {
    document.querySelector(button).removeAttribute('disabled');
    document.querySelector(button).innerHTML = 'Get news';
  } //Get and clear news container in DOM


  function getNewsContainer() {
    var newscontainer = document.querySelector('.news__container');
    newscontainer.innerHTML = '';
    return newscontainer;
  } //Hide News Title


  function hideTitle() {
    document.querySelector('.news__title').style.display = "none";
  } //Show News Title


  function showTitle() {
    document.querySelector('.news__title').style.display = "block";
  } //Event listener - show more button click


  function addShowMoreClickListener() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = document.querySelectorAll('.article_show-more')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var val = _step.value;

        val.onclick = function () {
          this.parentNode.querySelector('.article__body').style.display = 'block';
          this.parentNode.querySelector('.article_show-more').style.display = 'none';
        };
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function showAlertMessage() {
    document.querySelector('.news__title').innerHTML = 'Something went wrong. Try again later';
  }
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zY3JpcHQuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVCdXR0b24iLCJ0aGVuIiwibW9kdWxlIiwibmV3cyIsIk5ld3MiLCJnZXRJbnB1dFZhbHVlIiwiY3JlYXRlTmV3cyIsIm5ld3NDb250YWluZXIiLCJnZXROZXdzQ29udGFpbmVyIiwiaGlkZVRpdGxlIiwiZ2V0RGF0YSIsImFydGljbGVzIiwidmFsIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZUFydGljbGUiLCJhZGRTaG93TW9yZUNsaWNrTGlzdGVuZXIiLCJnZW5lcmF0ZU1vZGFsV2luZG93Iiwic2hvd1RpdGxlIiwiZW5hYmxlQnV0dG9uIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuZXdzY29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJzaG93QWxlcnRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQVc7QUFDdkI7QUFDQUMsVUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDQyxPQUFsQyxHQUE0QyxVQUFVQyxDQUFWLEVBQWE7QUFDckRBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBLG1IQUFvQkMsSUFBcEIsQ0FBeUIsVUFBQUMsTUFBTSxFQUFJO0FBQy9CLFVBQUlDLElBQUksR0FBRyxJQUFJRCxNQUFNLENBQUNFLElBQVgsQ0FBZ0JDLGFBQWEsQ0FBQyxTQUFELENBQTdCLEVBQTBDQSxhQUFhLENBQUMs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O0FBQzNEQSxXQUFHLENBQUNmLE9BQUosR0FBYyxZQUFZO0FBQ3RCLGVBQUtpQyxVQUFMLENBQWdCbEMsYUFBaEIsQ0FBOEIsZ0JBQTlCLEVBQWdEK0IsS0FBaEQsQ0FBc0RDLE9BQXRELEdBQWdFLE9BQWhFO0FBQ0EsZUFBS0UsVUFBTCxDQUFnQmxDLGFBQWhCLENBQThCLG9CQUE5QixFQUFvRCtCLEtBQXBELENBQTBEQyxPQUExRCxHQUFvRSxNQUFwRTtBQUNILFNBSEQ7QUFJSDtBQU4rQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT25DOztBQUVELFdBQVNHLGdCQUFULEdBQTRCO0FBQ3hCcEMsWUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDNEIsU0FBdkMsR0FBbUQsdUNBQW5EO0FBQ0g7QUFHSixDQWxGRCxDIiwiZmlsZSI6Im1haW4uMGU2ZTk4ODcyZDI3NDI3OTU5YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgXCJAYmFiZWwvcG9seWZpbGxcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vRXZlbnQgTGlzdGVuZXIgLSBzdWJtaXQgY2xhc3MgYnV0dG9uIGNsaWNrXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jykub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpc2FibGVCdXR0b24odGhpcyk7XHJcbiAgICAgICAgaW1wb3J0KCcuL05ld3MuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdzID0gbmV3IG1vZHVsZS5OZXdzKGdldElucHV0VmFsdWUoJ2NvdW50cnknKSwgZ2V0SW5wdXRWYWx1ZSgnY2F0ZWdvcnknKSwgZ2V0SW5wdXRWYWx1ZSgncGFnZXNpemUnKSk7XHJcbiAgICAgICAgICAgIGNyZWF0ZU5ld3MobmV3cyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdzKG5ld3MpIHtcclxuICAgICAgICBsZXQgbmV3c0NvbnRhaW5lciA9IGdldE5ld3NDb250YWluZXIoKTtcclxuICAgICAgICBoaWRlVGl0bGUoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFydGljbGVzID0gYXdhaXQgbmV3cy5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGlmKGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgdmFsIG9mIGFydGljbGVzKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbC5nZW5lcmF0ZUFydGljbGUoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFkZFNob3dNb3JlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGltcG9ydCgnLi9Nb2RhbC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChtb2R1bGUuZ2VuZXJhdGVNb2RhbFdpbmRvdyhlcnIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3dUaXRsZSgpO1xyXG4gICAgICAgIGVuYWJsZUJ1dHRvbignLnN1Ym1pdCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBpbnB1dCB2YWx1ZSBmcm9tIFVJXHJcbiAgICBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCkudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9EaXNhYmxlIHN1Ym1pdCBidXR0b24sIHByZXZlbnQgbXVsdGljbGlja1xyXG4gICAgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbihidXR0b24pIHtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnTG9hZGluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW5hYmxlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24pLmlubmVySFRNTCA9ICdHZXQgbmV3cyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgYW5kIGNsZWFyIG5ld3MgY29udGFpbmVyIGluIERPTVxyXG4gICAgZnVuY3Rpb24gZ2V0TmV3c0NvbnRhaW5lcigpIHtcclxuICAgICAgICBjb25zdCBuZXdzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIG5ld3Njb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcmV0dXJuIG5ld3Njb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9IaWRlIE5ld3MgVGl0bGVcclxuICAgIGZ1bmN0aW9uIGhpZGVUaXRsZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaG93IE5ld3MgVGl0bGVcclxuICAgIGZ1bmN0aW9uIHNob3dUaXRsZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRXZlbnQgbGlzdGVuZXIgLSBzaG93IG1vcmUgYnV0dG9uIGNsaWNrXHJcbiAgICBmdW5jdGlvbiBhZGRTaG93TW9yZUNsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgZm9yKGxldCB2YWwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGVfc2hvdy1tb3JlJykpe1xyXG4gICAgICAgICAgICB2YWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX3Nob3ctbW9yZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0FsZXJ0TWVzc2FnZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGl0bGUnKS5pbm5lckhUTUwgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFRyeSBhZ2FpbiBsYXRlcic7XHJcbiAgICB9XHJcblxyXG5cclxufTsiXSwic291cmNlUm9vdCI6IiJ9