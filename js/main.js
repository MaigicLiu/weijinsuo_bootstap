/**
 * Created by LiuJie on 2017/6/27.
 */
$(function(){
    var resizes = function(){
        var screenW = (window.innerWidth<768) ? true : false;


            $('.ad-owl  .item > .owl').each(function(i,dom){
                $dom = $(dom);
                i = i+1;
                if(screenW){
                    $dom.html('<img class="img-responsive" src="./img/slide_0'+ i +'_640x340.jpg" > ');
                }else{
                    console.log($dom.css('backgroundImage'));
                    if($dom.css('backgroundImage') == 'none'){
                        $dom.css('backgroundImage','url("./img/slide_0'+ i +'_2000x410.jpg")');
                        console.log(11);
                    }


                    $dom.html('');
                }
            });


        console.log(screenW);
    };
    //resize();
    $(window).on('resize',resizes).trigger('resize');
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

var aa = function(){
    console.log(111);
}
