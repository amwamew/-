if (typeof HTMLElement != "undefined" && !HTMLElement.prototype.insertAdjacentElement) {
	HTMLElement.prototype.insertAdjacentElement = function(where, parsedNode) {
		switch (where) {
		case 'beforeBegin':
			this.parentNode.insertBefore(parsedNode, this);
			break;
		case 'afterBegin':
			this.insertBefore(parsedNode, this.firstChild);
			break;
		case 'beforeEnd':
			this.appendChild(parsedNode);
			break;
		case 'afterEnd':
			if (this.nextSibling) this.parentNode.insertBefore(parsedNode, this.nextSibling);
			else this.parentNode.appendChild(parsedNode);
			break
		}
	}
	HTMLElement.prototype.insertAdjacentHTML = function(where, htmlStr) {
		var r = this.ownerDocument.createRange();
		r.setStartBefore(this);
		var parsedHTML = r.createContextualFragment(htmlStr);
		this.insertAdjacentElement(where, parsedHTML)
	}
	HTMLElement.prototype.insertAdjacentText = function(where, txtStr) {
		var parsedText = document.createTextNode(txtStr);
		this.insertAdjacentElement(where, parsedText)
	}
}

if (typeof HTMLElement != "undefined" && !HTMLElement.prototype.computedStyle) {
	HTMLElement.prototype.computedStyle = function (prop) {
		var obj = this;
		if (obj.currentStyle) {
			return obj.currentStyle[prop]
		} else if (window.getComputedStyle) {
			propprop = prop.replace(/([A-Z])/g, "-$1");
			propprop = prop.toLowerCase();
			return document.defaultView.getComputedStyle(obj, null)[prop]
		}
		return null
	}
}

if (!String.prototype.subString) {
	String.prototype.subString = function(length, han, dot, dotstr) {
		han = han || 2;
		dotstr = dotstr || "…";
		var newLength = 0;
		var newStr = "";
		var chineseRegex = /[^\x00-\xff]/g;
		var singleChar = "";
		var strLength = this.replace(chineseRegex, "**").length;
		for (var i = 0; i < strLength; i++) {
			singleChar = this.charAt(i).toString();
			if (singleChar.match(chineseRegex) != null) {
				newLength += han
			} else {
				newLength++
			}
			if (newLength > length) {
				break
			}
			newStr += singleChar
		}
		if (dot && strLength > length) {
			newStr += dotstr
		}
		return newStr
	}
}

if (!String.prototype.superSplit) {
	String.prototype.superSplit = function(start, end) {
		var ret = Array();
		var temp = this.split(start);
		var i;
		for (i = 1; i < temp.length; i++) {
			if(temp[i].indexOf(end) > -1) ret.push(temp[i].split(end)[0]);
		}
		return ret
	}
}

if (!String.prototype.utf8UrlEncode) {
	String.prototype.utf8UrlEncode= function() {
		var input = this;
		function EncodeChar(input) {
			if (input <= 0x7F) return "%" + input.toString(16);
			var leadByte = 0xFF80;
			var hexString = "";
			var leadByteSpace = 5;
			while (input > (Math.pow(2, leadByteSpace + 1) - 1)) {
				hexString = "%" + ((input & 0x3F) | 0x80).toString(16) + hexString;
				leadByte = (leadByte >> 1);
				leadByteSpace--;
				input = input >> 6
			}
			return ("%" + (input | (leadByte & 0xFF)).toString(16) + hexString).toUpperCase()
		}
	
		var output = "";
		var currentChar = '';
		for (var counter = 0; counter < input.length; counter++) {
			currentChar = input.charCodeAt(counter);
			if ((48 <= currentChar) && (currentChar <= 57)) output = output + input.charAt(counter);
			else if ((65 <= currentChar) && (currentChar <= 90)) output = output + input.charAt(counter);
			else if ((97 <= currentChar) && (currentChar <= 122)) output = output + input.charAt(counter);
			else output = output + EncodeChar(currentChar)
		}
		return output
	}
}

if (!String.prototype.utf8UrlDecode) {
	String.prototype.utf8UrlDecode = function() {
		var inputStr = this;
		var resultArr = [];
		for (var i = 0; i < inputStr.length; i++) {
			var chr = inputStr.charAt(i);
			if (chr == "+") {
				resultArr[resultArr.length] = " ";
			} else if (chr == "%") {
				var asc = inputStr.substring(i + 1, i + 3);
				if (parseInt("0x" + asc) > 0x7f) {
					resultArr[resultArr.length] = decodeURI(inputStr.substring(i, i + 9));
					i += 8;
				} else {
					resultArr[resultArr.length] = String.fromCharCode(parseInt("0x" + asc));
					i += 2;
				}
			} else {
				resultArr[resultArr.length] = chr;
			}
		}
		return resultArr.join("");
	}
}

if (!String.prototype.htmlEncode) {
	String.prototype.htmlEncode = function() {
		var temp = document.createElement("div");
		(temp.textContent != null) ? (temp.textContent = this) : (temp.innerText = this);
		var output = temp.innerHTML;
		temp = null;
		return output
	}
}

if (!String.prototype.htmlDecode) {
	String.prototype.htmlDecode = function() {
		var temp = document.createElement("div");
		temp.innerHTML = this;
		var output = temp.innerText || temp.textContent;
		temp = null;
		return output
	}
}

if (!String.prototype.parseDate) {
	String.prototype.parseDate = function () {
		var datestr = this;
		var par = new Array();
		datestr = datestr.replace(/\//g, '-');
		par[0] = datestr.match(/\d+\-\d+\-\d+/g);
		par[0] = par[0] == null ? "1901-1-1" : par[0].toString();
		par[1] = datestr.match(/\d+:\d+:\d+/g);
		par[1] = par[1] == null ? "0:0:0" : par[1].toString();
		par[2] = datestr.indexOf('T') > -1 ? datestr.split('T')[1] : "";
		par[0] = par[0].split("-");
		par[1] = par[1].split(":");
		var date = new Date(par[0][0], par[0][1] - 1, par[0][2], par[1][0], par[1][1], par[1][2]);
		if(par[2] != "") {
			par[2] = par[2].split(":");
			par[2] = (eval(par[2][0]) * 60 + eval(par[2][1])) * 60000;
			date -= par[2];
			date -= (new Date()).getTimezoneOffset() * 60000;
		}
		return new Date(date)
	}
}

if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/(^\s*)|(\s*$)/g, '');
	}
}

if (!Date.prototype.format) {
	Date.prototype.format = function(format) {
		var o = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S": this.getMilliseconds()
		}
		if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		return format
	}
}

if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(obj, start) {
		for (var i = (start || 0), j = this.length; i < j; i++) {
			if (this[i] === obj) { return i; }
		}
		return -1;
	}
}

if (!String.Format) {
	String.Format = function (string) {
		var args = arguments;
		var pattern = new RegExp("\\$([1-" + arguments.length + "])", "g");
		return String(string).replace(pattern,
		function(match, index) {
			return args[index]
		})
	}
}

function isNullORUndefined(obj) {
	if(typeof(obj) == "undefined") return true;
	if(obj.length == 0) return true;
	if(obj == "") return true;
}

function GetColor(color) {
	if (color.indexOf(',') > -1) {
		color = color.replace(/[^0-9,]*/ig, '');
		var colors = color.split(',');
		colors[0] = parseInt(colors[0], 10).toString(16);
		colors[0] = colors[0].length == 2 ? colors[0] : "0" + colors[0];
		colors[1] = parseInt(colors[1], 10).toString(16);
		colors[1] = colors[1].length == 2 ? colors[1] : "0" + colors[1];
		colors[2] = parseInt(colors[2], 10).toString(16);
		colors[2] = colors[2].length == 2 ? colors[2] : "0" + colors[2];
		color = colors[0] + colors[1] + colors[2];
		color = "#" + color
	}
	return color
}
function GetParameter(param) {
	var query = window.location.search;
	if(query == '') return '';
	query = '&' + query + '&';
	query = query.replace('&?', '&');
	return query.superSplit('&' + param + '=', '&')[0];
}
function InsertCss(css) {
	if(!!window.ActiveXObject){
		var o = document.styleSheets[0];
		var a = css.split("\n");
		for(var i = 0; i < a.length; i++) {
			if(a[i] == "") continue;
			var ad = a[i].replace(/([\s\S]*)\{([\s\S]*)\}/, "$1|$2").split("|");
			o.addRule(ad[0], ad[1]);
		}
	}
	else{
		var style = document.createElement("style");
		style.type = "text/css";
		style.innerHTML = css;
		document.getElementsByTagName("HEAD")[0].appendChild(style);
	}
}
function AddFavorite(title, url) {
	title = typeof(title) == "undefined" ? document.title: title;
	url = typeof(url) == "undefined" ? window.location.href: url;
	if (document.all) window.external.addFavorite(url, title);
	else if (window.sidebar) window.sidebar.addPanel(title, url, "");
}
function AddHomePage(url) {
	url = typeof(url) == "undefined" ? window.location.href : url;
	if (document.all) {
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(url);
	} else if (window.sidebar) {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			} catch(e) {
				alert("\u60a8\u7684\u6d4f\u89c8\u5668\u62d2\u7edd\u6b64\u64cd\u4f5c\uff0c\u5982\u679c\u60f3\u542f\u7528\u8be5\u529f\u80fd\uff0c\u8bf7\u5728\u5730\u5740\u680f\u5185\u8f93\u5165\20about\3aconfig\2c\u7136\u540e\u5c06\u9879\20signed.applets.codebase_principal_support\20\u503c\u8be5\u4e3atrue");
			}
		}
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
		prefs.setCharPref('browser.startup.homepage', url);
	}
}
function Cookie(name, value, options) {
	if (typeof value != 'undefined') {
		options = options || {};
		if (value === null) {
			value = '';
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString();
		}
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else {
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = cookies[i].trim();
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
}

function BaiduADSlot(t) {
	//a1:正文环绕 a2:正文下 l1:顶部横幅 l2:标题下 l3:分页下 k1:对联
	if(typeof(BAIDUADSLOT) == 'undefined') bds = {'a1': '403739', 'a2': '450428', 'l1': '450431', 'l2': '450434', 'l3': '450436', 'k1': '450438'};
	else bds = BAIDUADSLOT;
	var d = bds[t];
	if(typeof(d) != 'undefined') return d;
	else return BAIDUADSLOT[t];
}

function IsMobile(){
	return false;
	var reg = "(nokia|iphone|ipad|android|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|";
	reg += "htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|";
	reg += "blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|";	
	reg += "symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|";
	reg += "jig\s browser|hiptop|^ucweb|^benq|haier|^lct|zunewp7|opera\s*mobi|opera\*mini|320x320|240x320|176x220";
	reg += ")";
	reg = new RegExp(reg, 'i');
	return reg.test(navigator.userAgent.toLowerCase());
}