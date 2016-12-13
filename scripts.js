function theoval() {
   if (location.hostname == "theoval.cmp.uea.ac.uk") {
      var newurl="http://ccawley2011.github.io";
      if (location.pathname.substring(0,5) == "/~gcc") {
         newurl += location.pathname.substring(20);
      } else {
         newurl += location.pathname.substring(15);
      }
      var MsgTheoval = document.createElement("div");
      MsgTheoval.innerHTML = "This site has moved to <a href="+newurl+">http://ccawley2011.github.io/</a>. Please update your bookmarks.";
      MsgTheoval.className = "alert";
      document.body.appendChild(MsgTheoval);
   }
}

function getPluginVersion(plugin) {
   var flash = navigator.plugins[plugin];
   if (flash === undefined) {
      return undefined;
   } else if (flash.version != undefined) {
      return flash.version;
   } else {
      if (plugin == "Shockwave Flash") {
         return flash.description.substring(16,20);
      } else if (plugin == "Shockwave for Director") {
         return flash.description.substring(55);
      } else if (plugin == "Silverlight Plug-In") {
         return flash.description;
      } else {
         return undefined;
      }
   }
}

function getWindowsVer() {
   if (navigator.platform != "Win16" && navigator.platform != "Win32") { return undefined; }
   var userAgent = navigator.userAgent;
   var start = userAgent.indexOf("Windows ");
   var end = userAgent.indexOf(";",start);
   if (userAgent.indexOf(")",start) < end) { end = userAgent.indexOf(")",start); }
   var version = userAgent.substring(start+8,end);
   switch (version) {
      case "XP": version = "NT 5.1";
      case "2000": version = "NT 5.0";
      case "ME": version = "4.9";
      case "98": version = "4.1";
      case "95": version = "4.0";
      case "NT": version = "NT 4.0"; // Assume NT 4.0
   }
   if (userAgent.indexOf("Win 9x ") > 0) {
      var start = userAgent.indexOf("Windows ");
      var end = userAgent.indexOf(";",start);
      if (userAgent.indexOf(")",start) < end) { end = userAgent.indexOf(")",start); }
      var version = userAgent.substring(start+7,end);
   }
   if (userAgent.indexOf("WinNT3.51") > 0) { version = "NT 3.51"; }
   if (userAgent.indexOf("WinNT4.0") > 0) { version = "NT 4.0"; }
   if (userAgent.indexOf("Win98") > 0) { version = "4.1"; }
   if (userAgent.indexOf("Win95") > 0) { version = "4.0"; }
   return version;
}

function getCpuType() {
   var userAgent = navigator.userAgent.toLowerCase()
   var platform = navigator.platform
   if (platform == "Win32") {
      if (userAgent.indexOf("win64")>0 || userAgent.indexOf("wow64")>0) {
         return "x86_64";
      } else {
         return "i386";
      }
   } else if (platform.substring(0,3)=="Mac") {
     if (platform == "MacIntel") {
        // Detect i386 vs x86_64
     } else if (platform == "MacPPC" || userAgent.indexOf("ppc")>0) {
        return "powerpc";
     } else {
        return m68k;
     }
   } else if (platform.substring(0,6)=="Linux " || platform.substring(0,8)=="FreeBSD "
           || platform.substring(0,8)=="OpenBSD " || platform.substring(0,7)=="NetBSD "
           || platform.substring(0,6)=="SunOS ") {
     // get architecture from navigator.platform
   } else if (userAgent.indexOf("amd64")>0 || userAgent.indexOf("x86_64")>0) {
      return "x86_64";
   } else if (userAgent.indexOf("x86")>0 || userAgent.indexOf("i386")>0 || userAgent.indexOf("i86pc")) {
      return "i386";
   } else if (userAgent.indexOf("powerpc")>0 || (userAgent.indexOf("ppc")>0 && platform != "Pocket PC" && platform != "WinCE")) {
      return "powerpc";
   } else if (platform == "Mac68K" || userAgent.indexOf("m68k")>0) {
      return "m68k";
   } else if (userAgent.indexOf("sparc64")>0) {
      return "sparc64";
   } else if (userAgent.indexOf("sparc")>0) {
      return "sparc";
   } else if (userAgent.indexOf("aarch64")>0) {
      return "aarch64";
   } else if (platform == "Nintendo DSi") {
      return "armv5te";
   } else if (platform == "Nintendo Wii" || platform == "Nintendo WiiU") {
      return "powerpc";
   } else if (platform == "Nintendo 3DS" || platform == "New Nintendo 3DS") {
      return "armv6";
   } else if (platform == "PLAYSTATION 3") {
      return "powerpc";
   } else if (platform == "PlayStation 4") {
      return "x86_64";
   } else if (platform == "PSP") {
      return "mips";
   } else {
      return undefined;
   }
}

function getOSName() {
   switch (navigator.platform) {
      case "Win16","Win32": return "Windows";
      case "Mac68K": return "Mac OS";
      case "MacIntel": return "Mac OS X";
      case "Macintosh", "MacPPC":
           if (navigator.userAgent.indexOf("Mac OS X") > -1 && navigator.userAgent.indexOf("like Mac OS X") == -1) {
              return "Mac OS X";
           } else {
              return "Mac OS";
           }
      case "iPod", "iPhone", "iPad", "iPod Simulator", "iPhone Simulator", "iPad Simulator": return "iOS";
   }
   if (platform.substring(0,5)=="Linux") { return "Linux";
   } else if (platform.substring(0,7)=="FreeBSD") { return "FreeBSD";
   } else if (platform.substring(0,7)=="OpenBSD") { return "OpenBSD";
   } else if (platform.substring(0,6)=="NetBSD") { return "NetBSD";
   } else if (platform.substring(0,5)=="SunOS") { return "Solaris";
   } else if (platform.substring(0,6)=="Pike v") { return "iOS";
   }
   return navigator.platform;
}

function getLanguage() {
   if (navigator.language != undefined) {
      return navigator.language;
   } else if (navigator.browserLanguage != undefined) {
      return navigator.browserLanguage;
   } else {
      return undefined;
   }
}

function getBrowserName() {
   if (navigator.userAgent.indexOf("Edge") > -1) {
      return "Edge";
   } else if (navigator.userAgent.indexOf("Chrome") > -1) {
      return "Chrome";
   } else if (navigator.userAgent.indexOf("Safari") > -1) {
      return "Safari";
   } else if (navigator.userAgent.indexOf("Firefox") > -1) {
      return "Firefox";
   } else if (navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("Trident") > -1) {
      return "MSIE";
   } else {
      return undefined;
   }
}

function getBrowserVersion () {
    if (navigator.userAgent.indexOf("MSIE") == -1 && navigator.userAgent.indexOf("Trident") > -1) {
       return "11.0";
    }
    start = navigator.userAgent.search(getBrowserName()) + getBrowserName().length + 1;
    end = navigator.userAgent.indexOf(" ",start);
    if (end == -1) { end = navigator.userAgent.length; }
    version = navigator.userAgent.substring(start,end);
    return version;
}

function loadXMLDoc(path) {
   var xmlhttp;
   if (!window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            return this.responseXML;
         }
      };
      xmlhttp.open("GET", path, true);
      xmlhttp.send();
   } else {
      var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = false;
      xmlDoc.load(path);
      if (xmlDoc.parseError.errorCode != 0) {
         var myErr = xmlDoc.parseError;
         console.log("You have error " + myErr.reason);
         return undefined;
      } else {
         return xmlDoc;
      }
   }
}