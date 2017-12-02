// ==UserScript==
// @name         no_bait_workchat
// @namespace    fr.mickiewicz.no_bait_workchat
// @version      0.1
// @description  Remove the disturbing notification icon from the Workchat by Facebook layout
// @author       Emmanuel Mickiewicz
// @homepage     http://mickiewicz.fr
// @match        https://*.facebook.com/chat/*
// @grant       GM_addStyle
// ==/UserScript==

(function() {
    // Tested with Workplace by Facebook @ 01/12/2017
    GM_addStyle('#fbNotificationsJewel { display: None; }');
})();
