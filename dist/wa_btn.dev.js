"use strict";

function getData() {
  var url, response, data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // let url = "https://api.jsonbin.io/b/621bc0f4c4790b3406248418/3"
          url = "./info.json";
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function multiNumbersEvents() {
  var wa_btn_widget = document.getElementById("wa_btn_widget");
  var wa_container_chat = document.getElementById("wa_container_chat");
  var wa_btn_close = document.getElementById("wa_btn_close");
  var wa_img_logo = document.getElementById("wa_img_logo");
  var wa_widget_container = document.getElementById("wa_widget_container");
  var text_wa_popup = document.getElementById("text_wa_popup");
  wa_btn_widget.addEventListener("click", function () {
    wa_container_chat.classList.toggle("active");
    wa_btn_close.classList.toggle("active");
    wa_img_logo.classList.toggle("active");
    wa_widget_container.classList.toggle("active");
  });
}

function oneNumberWA(data) {
  var insert_wa = document.getElementById("wa_widget_insert");
  insert_wa.outerHTML = "\n    <div class=\"wa_widget_container animationOneNumber\" id=\"wa_widget_container\">\n    <div class=\"wa_container\">\n    <a href=\"".concat(data.urlIfOneNumber, "\" target=\"_blank\">\n    <div class=\"wa_btn_widget\" id=\"wa_btn_widget\">\n      <div class=\"wa_btn_logo\">\n        <img class=\"wa_img_logo active\" id=\"wa_img_logo\" src=\"whatsapp_logo.svg\" alt=\"\" />\n      </div>\n     \n      <div class=\"wa-btn_text\" id=\"text_wa_popup\" style=\"display: none;\">\xBFnecesitas ayuda?</div>\n   \n    </div>\n    </a>\n  </div>\n  </div>\n    ");
}

function widgetWA(data) {
  if (data.multiNumbers === true) {
    var insert_wa = document.getElementById("wa_widget_insert");
    insert_wa.outerHTML = "\n        <div class=\"wa_container_chat\" id=\"wa_container_chat\">\n        <div class=\"wa_header\">\n          <div class=\"text-header\">\n            <div class=\"title\">".concat(data.title, "</div>\n            <div class=\"subtitle\">").concat(data.subtitle, "</div>\n          </div>\n         \n            <img src=\"whatsapp_logo.svg\" alt=\"\" />\n   \n        </div>\n        <div class=\"wa_content\">\n          <div class=\"wa_content_message\">\n            ").concat(data.contentMessage, "\n          </div>\n\n          <div class=\"wa_links\" id=\"wa_links\">    \n          </div>\n        </div>\n      </div>\n      <div class=\"wa_widget_container\" id=\"wa_widget_container\">\n      <div class=\"wa_container\">\n        <a href=\"#\">\n        <div class=\"wa_btn_widget\" id=\"wa_btn_widget\">\n          <div class=\"wa_btn_logo\">\n            <img class=\"wa_img_logo active\" id=\"wa_img_logo\" src=\"whatsapp_logo.svg\" alt=\"\" />\n            <div class=\"wa_btn_close\" id=\"wa_btn_close\">\n                <img src=\"x_icon.svg\" alt=\"\"/>\n            </div>\n          </div>\n         \n          <div class=\"wa-btn_text\" id=\"text_wa_popup\" style=\"display: none;\">\xBFnecesitas ayuda?</div>\n       \n        </div>\n        </a>\n      </div>\n        ");
    multiNumbersEvents();
    linksMultiNumbers(data);
  } else {
    oneNumberWA(data);
  }
}

function linksMultiNumbers(data) {
  var wa_links = document.getElementById("wa_links");
  data.numbers.map(function (element) {
    wa_links.innerHTML += "\n        <a href=\"".concat(element.url, "\" target=\"blank\">\n        <div>\n          <div class=\"wa_link_left\">\n            <img src=\"").concat(element.img, "\" alt=\"\">\n          </div>\n          <div class=\"wa_link_center\">\n            <p> ").concat(element.name, " </p>\n          </div>\n          <div class=\"wa_link_rigth\">\n            <img src=\"whatsapp_logo_green.svg\" alt=\"\">\n          </div>\n        </div>\n      </a>\n        ");
  });
}

document.addEventListener("DOMContentLoaded", function _callee() {
  var data;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = {};
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(getData());

        case 4:
          data = _context2.sent;
          widgetWA(data);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.error("Error: ".concat(_context2.t0));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
});