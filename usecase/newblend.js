(function () {
    window.blend=Blend.ui;
    
    var layer = blend.Layer;

    blend.layerInit("info",function(){
        console.log("info page......");
        //alert(blend.getLayer);
        var mylayer = blend.getLayer("info");
        $("a.back").click(function(e){
            console.log("click.... back... out....")
            mylayer.out();
            return false;
        });

        $("a.reload").click(function(e){
            /*mylayer.reload('newblend2.html');
            return false;*/
            blend.createLayer({
                id:'baidu',
                url:"http://news.baidu.com",
                active:true,
                "afterrender":function(){
                    alert("onrender...");
                }
                ,"onload":function(event){
                    alert("onload...");
                }
                ,"onhide":function(e){
                    alert("onhide...")
                }
            });
            e.preventDefault();
        });
        
    });

    blend.layerInit("0",function(){
        $(document).click(function(e){
            //blend.fire("layercreates","0",{data1:123,data2:[1,2,3]});

            var _layer = window._layer;
            var $t = $(e.target).closest('a');
            if (!$t.length) return true;
            
            e.preventDefault();
            window._layer && window._layer.destroy();
            window._layer = new layer({
                "id":"info",
                "url": $t.attr('href'),
                "active":true
                ,"afterrender":function(){
                    alert("onrender...");
                }
                ,"onload":function(event){
                    alert("onload...");
                }
                ,"changeUrl":function(event){
                    // console.log("onload");
                    console.log(event['url'])
                }
                ,"onhide":function(e){
                    alert("onhide...")
                }
                ,"ptrFn":function(){
                    setTimeout(function(){
                        console.log("refresh callback");
                        _layer.endPullRefresh();

                    },1500);
                    
                }
            });
            // $(".list-block a:first").click();
           
        });
    });
    

    
})();