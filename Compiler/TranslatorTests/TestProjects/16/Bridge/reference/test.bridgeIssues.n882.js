﻿/* global Bridge */

(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N882.Bridge882_Instance', {
        constructor: function () {
            var $t;
            var a = [1, 2, 3];
    
            $t = Bridge.getEnumerator(a);
            while ($t.moveNext()) {
                var v = $t.getCurrent();
    
            }
    }
    });
    
    Bridge.define('Test.BridgeIssues.N882.Bridge882_Instance.Bridge882_A_Instance', {
        constructor: function () {
            var $t;
            var a = [5, 6, 7];
    
            $t = Bridge.getEnumerator(a);
            while ($t.moveNext()) {
                var v = $t.getCurrent();
    
            }
    }
    });
    
    Bridge.define('Test.BridgeIssues.N882.Bridge882_Static', {
        statics: {
            constructor: function () {
                var $t;
                var a = [1, 2, 3];
    
                $t = Bridge.getEnumerator(a);
                while ($t.moveNext()) {
                    var v = $t.getCurrent();
    
                }
        }
    }
    });
    
    Bridge.define('Test.BridgeIssues.N882.Bridge882_Static.Bridge882_A_Static', {
        statics: {
            constructor: function () {
                var $t;
                var a = [5, 6, 7];
    
                $t = Bridge.getEnumerator(a);
                while ($t.moveNext()) {
                    var v = $t.getCurrent();
    
                }
        }
    }
    });
    
    
    
    Bridge.init();
})(this);
