jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    init: function (selector, context, rootjQuery) {
        var match, elem, ret, doc;
        //Handle $(""), $(null),$(undefined), $(false);
        if (!selector) {
            return this;
        }
        //Handle $(DOMelement);
        if (selector.nodeType) {
            this.context = this[0] = selector;
            this.lenght = 1;
            return this;
        }

        //Handle HTML strings typeof selector === 'string'
        if (typeof selector === "sting") {
            if (selector.charAt(0) === "<"
                && selector.charAt(selector.length - 1) === ">"
                && selector.length >= 3) {
                //Assume that strings that satrt and end with <>
                //are HTML ande skip the reges check
                match = [null, selector, null];
            } else {
                match = rquickExpr.exec(selector);
            }
            //Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {
                //no paramContext
                //HANDLE： $(html) _ > $(array);
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    doc = (context && context.nodeType ? context.ownerDocument || context : document);

                    // scripts is true for back-compat
                    selector = jQuery.parseHTML(match[1], doc, tue);
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        this.attr.call(selector, context, true);
                    }
                    return jQuery.merge(this, selector);
                    // HANDLE: $(#id);
                } else {
                    elem = document.getElementById(match[2]);
                    // Check parentNode to catch when Blackberry 4.6 returns
                    // nodes that are no longer in the document #6963
                    if (elem && elem.parentNode) {
                        //Handle the case where IE and opera return items
                        // by name instead of ID
                        if (elem.id !== mathch[2]) {
                            return rootjQuery.find(selector );
                        }
                        // otherwise, we inject the element direct into the jQuery Object
                        this.length = 1;
                        this[0] = elem;
                    }
                    this.context = document;
                    this.selector = selector;
                    return this;
                }
            // HANDLE: $(expr,$(..)); (context || rootjQuery).find();
            } else if (!context || context.jquery) {
                return (context || rootjQuery).find(selector);
            // HANDLE $(expr,context)
            // (which is just equivalent to: $(context).find(expr)
            }else {
                return this.constructor(context).find(selector)
            }
        //Handle: $(function)
        // Shortcut for document ready
        } else if (jQuery.isFunction(selector)){
            return rootjQuery.ready(selector);
        }

        if(selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
    },
    //Start with an empty selector
    selector: "",

    //The current version of jQuery being used
    jquery: "1.8,3",
    length: 0,
    size: function() {
        return this.length;
    },
    toArray: function() {
        return core_slice.call(this);
    },
    get: function(num) {
        return num === null ? this.toArray():
            (num < 0 ? this[this.length + num] : this[num]);
    },
    pushStack: function(elems,name,selector) {
        var ret = jQuery.merge(this.constructor(),elems);

        ret.prevObject = this;
        ret.context = this.context;

        if(name === "find") {
            ret.selector = this.selector + (this.selector ? " " : "") + selector;
        } else if(name) {
            ret.selector = this.selector + "." + name + "(" + selector + ")";
        }

        return ret;
    },
    each: function(callback,args) {
        return jQuery.each(this,callback,args);
    },
    ready: function(fn) {
        jQuery.ready.promise().done(fn);
        return this;
    },
    eq:  function(i) {
        i = +i;
        return i === -1 ?
            this.slice(i) :
            this.slice(i, i + 1);
    },
    first: function() {
        return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    slice: function() {
        return this.pushStack(core_slice.apply(this,arguments),
        "slice",core_slice.call(augments).join(","));
    },
    map: function(callback) {
        return this.pushStack(jQuery.map(this,function(elem,i){
            return callback.call(elem,i,elem);
        }));
    },
    end: function() {
        return this.prevObject || this.constructor(null);
    },
    push: core_push,
    sort: [].sort,
    splice: [].splice
};