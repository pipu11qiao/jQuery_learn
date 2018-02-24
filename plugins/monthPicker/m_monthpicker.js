(function($,window,document,undefined) {
  //月弹框对象
  var defaultOption = {
    str: '201702',
    format: 'yyyy-MM',
    offTop: 0,
    offLeft: 0,
    printEl: null
  };
   var monthPicker = {
     hasInit: false, //是否初始化，挂到页面上去
     $curEl: null, //当前操作对象
     format: '', //当前格式
     yearArr: [], //年份数组
     curYear: null, //当前年份
     curMonth: null, //当前月份
     $element: null, //元素对象
     $printEl: null,
     defaultYear: new Date().getFullYear(),
     defaultMonth: ('00' + (new Date().getMonth() + 1)).slice(-2),
     onSelect: function(){},
     init: function() {
       this.setElement();
       this.renderMonths();
       this.bind();
     },
     renderYears: function() {
       var i,str,curNum,len;
       str = '';
       for(i = 0,len = this.yearArr.length; i < len; i += 1){
         curNum = this.yearArr[i];
         str += '<li><a ' + (curNum == this.curYear ? 'class="active" ' : '') + 'href="#">' + curNum + '</a></li>'
       }
       this.$element.yearBtn.find('a').html(this.curYear + '年');
       this.$element.yearList.html(str);
     },
     setCurYear: function(year) {
       this.curYear = year;
     },
     setYearsArr: function(year) {
       year = year || this.curYear;
       if($.inArray(year,this.yearArr) === -1) {
         this.yearArr = [];
         for(i = -3; i < 5; i += 1){
           this.yearArr.push(-(-year) + i);
         }
       }
     },
     renderMonths: function() {
       var str, i;
       str = '';
       for(i= 0; i < 12; i += 1) {
         str += '<li class="m_l"><a href="#">' + this.dateCover(i + 1) + '</a></li>'
       }
       this.$element.monthList.html(str);
     },
     activeMonth: function() {
       var me = this;
       this.$element.monthList.find('a').each(function() {
         var $el = $(this);
         if($el.html() == me.curMonth) {
            !$el.hasClass('active') && $el.addClass('active');
         } else {
           $el.hasClass('active') && $el.removeClass('active');
         }
       })
     },
     setOption: function($el) {
       // data('monthpicker')是个对象
       // {
       //   str: '201604',
       //   format: '2016-04'
       // }
       var opt,str;
       this.$curEl = $el;
       if(typeof $el.data('monthpicker') === 'object') {
         opt = $el.data('monthpicker');
         str = opt.str ? opt.str + '' : this.defaultYear + '' + this.defaultMonth;
         this.curYear = str.slice(0,4);
         this.curMonth = str.slice(4,6);
         this.onSelect = opt.onSelect || this.onSelect();
         this.offLeft = opt.offLeft || 0;
         this.offTop = opt.offTop || 0;
         this.$printEl = opt.printEl ? $(opt.printEl) : this.$curEl;
       } else {
         this.curYear = this.defaultYear;
         this.curMonth = this.defaultMonth;
       }

     },
     setElement: function() {
       this.$element = {};
       this.$element.container =
           $('<div class="m_monthPicker"></div>')
               .appendTo(document.body)
               .html('<div class="m_yearBox">' +
                    '<a href = "#" class="m_l m_leftBtn" data-value="-1"><b class="arrow"></b></a>' +
                    '<div class="m_l m_yearBtn"><a href = "javascript:void(0);" ></a><b class="arrow"></b></div>' +
                    '<div class="m_yearListBox">' +
                      '<a href="#" class="m_preBtn" data-value="-1"><b class="arrow"></b></a>' +
                      '<ul class="m_yearList"></ul>' +
                      '<a href="#" class="m_nextBtn" data-value="1"><b class="arrow"></b></a>' +
                    '</div>' +
                    '<a href="#" class="m_l m_rightBtn" data-value="1"><b class="arrow"></b></a>' +
               '</div>' +
               '<ul class="m_monthList"></ul>');
       this.$element.yearBtn = this.$element.container.find('.m_yearBtn');
       this.$element.yearBox = this.$element.container.find('.m_yearListBox');
       this.$element.yearList = this.$element.container.find('.m_yearList');
       this.$element.preYearsBtn = this.$element.container.find('.m_preBtn');
       this.$element.nextYearsBtn = this.$element.container.find('.m_nextBtn');
       this.$element.monthList = this.$element.container.find('.m_monthList');
     },
     elClick: function($el){
      //给元素绑定的时间
       this.setOption($el);
       this.setYearsArr();
       this.renderYears();
       this.activeMonth();
       this.show();
     },
     bind: function() {
       var me =this;
       // 关闭
       $(document).on('click.monthpikcer',function () {
          me.hide();
       });
       // 日期选择
       $(document).on('click.monthpikcer', '.m_monthPicker .m_monthList a',function (e) {
         var $el,isInput,obj;
         $el= $(this);
         e.preventDefault();
         e.stopPropagation();

         me.curMonth = $el.html();
         obj = me.$curEl.data('monthpicker');
         obj.str = me.curYear + me.curMonth;
         me.$curEl.data('monthpicker',obj);
         isInput = me.$printEl[0].tagName == 'INPUT' || me.$curEl[0].tagName == 'AREA';
         me.onSelect(me.curYear,me.curMonth);
         if(isInput) {
           me.$printEl.val(me.curYear + '-' + me.curMonth );
         } else {
           me.$printEl.html(me.curYear + '-' + me.curMonth );
         }

         me.hide();
       });
       // 年左右键
       $(document).on('click.monthpikcer', '.m_monthPicker .m_leftBtn,.m_monthPicker .m_rightBtn',function (e) {
         e.preventDefault();
         e.stopPropagation();
         var $el = $(this);
         me.curYear = -(-me.curYear) + (-(-$(this).data('value')));
         me.setYearsArr();
         me.renderYears();
       });
       // 年份框
       $(document).on('click.monthpikcer','.m_monthPicker .m_yearBtn',function (e) {
         e.preventDefault();
         e.stopPropagation();
         me.$element.yearBox.toggleClass('active');
       });
       // 年份按钮
       $(document).on('click.monthpikcer', '.m_monthPicker .m_yearList a',function (e) {
         e.preventDefault();
         e.stopPropagation();
         me.curYear = -(-$(this).html());
         me.renderYears();
         me.$element.yearBox.removeClass('active');
       });

       // 年列表上下键
       $(document).on('click.monthpikcer', '.m_monthPicker .m_preBtn,.m_monthPicker .m_nextBtn',function (e) {
         e.preventDefault();
         e.stopPropagation();
         var $el = $(this);
         me.setYearsArr(-(-$el.siblings('.m_yearList').find('a').eq(3).html()) + 8 * $el.data('value'));
         me.renderYears();
       });

       //阻止默认
       $(document).on('click.monthpikcer', '.m_monthPicker',function (e) {
         e.preventDefault();
         e.stopPropagation();
       });
     },
     dateCover: function(str) {
       return ('000' + str).slice(-2);
     },
     show: function() {
       //获取当前元素位置
       var position;
       position = this.$curEl.position();
       position.left += this.offLeft;
       position.top += this.$curEl.outerHeight() + 6 + this.offTop;
       position.display = 'block';
       this.$element.container.css(position);
     }
     ,
     hide: function() {
       this.$element.yearBox.hasClass('active') && this.$element.yearBox.removeClass('active');
       this.$element.container.hide();
     }
   };//闭包
  //monthPicker.init();
  $.fn.monthPicker = function(option) {
    if(!monthPicker.hasInit) {
      monthPicker.hasInit = true;
      monthPicker.init();
    }
    if(typeof  option === 'function') {
      this.data('monthpicker',{
        onSelect: option
      })
    } else if ( typeof option === 'string') {
      this.data('monthpicker',{
        str:option
      })
    } else if( typeof option === 'object') {
      this.each(function() {
        $(this).data('monthpicker',$.extend({},defaultOption,option))
      });
    }
    return this.each(function() {
      $(this).on('click.monthpicker',function(e) {
        e.stopPropagation();
        e.preventDefault();
        monthPicker.elClick($(this));
      })
    })
  };

}(jQuery,window,document));
