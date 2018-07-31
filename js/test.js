//  var Instafeed = require("instafeed.js");
//  $(function(){
//       var userFeed = new Instafeed({
//            get: 'user',
//           userId: '1776199106',
//           sortBy: 'none',
//           limit: 20,
//           //template: '<webview src="{{link}}" plugins="on">{{like}}</webview>', 
//           template: '<a href="{{link}}" target="_blank"><img src="{{image}}" />내용 : {{caption}}, 좋아요 : {{likes}}</a> <br />', 
//           // {{link}} : 게시물 링크, {{image}} : 사진 url, {{caption}} : 게시물 텍스트
//           accessToken: '1776199106.c961016.6f08914f0af642b8b32d9605ac4c2fd0'    
//       });
//       userFeed.run();
//  });
$(function(){
    getInstagram();
});
function getInstagram(){
    $.ajax({
        type : 'GET'
        , url : 'http://kr-api.awesomewallhq.com/posts/jajuapp'
        , data : {
            'limit' : '31'
            , 'featured' : '1'
            // , 'type' : 'image'
        }
        ,dataType : 'json'
        ,success : function(data){
            if(data != null){
                var jsonlist = data.items;
                let html = '';
                for(let i = 0; i < jsonlist.length; i++){
                    html += '<span>-------------------------------------------------------------------------------------</span>' + '<br />';
                    html += '<span>Type : ' + jsonlist[i].type + '</span><br />';
                    html += '<img src=\"' + jsonlist[i].thumbnail + '\">' + '<br />';
                    html += jsonlist[i].caption + '<br />';
                    html += '<span>-------------------------------------------------------------------------------------</span>' + '<br />';
                    //html += jsonlist[i].next_id + '<br />';
                }
                html += '<button onclick=\"onclickMethod(\'' + data.next + '\');\">다음</button>';
                $('#test').html(html);
            }
        }
        ,error:function(xhr, status, error) {
            alert(error.toString);
        }
    });
}

function onclickMethod(url){
    $.ajax({
        type : 'GET'
        , url : url
        ,dataType : 'json'
        ,success : function(data){
            if(data != null){
                var jsonlist = data.items;
                let html = '';
                for(let i = 0; i < jsonlist.length; i++){
                    html += '<span>-------------------------------------------------------------------------------------</span>' + '<br />';
                    html += '<span>Type : ' + jsonlist[i].type + '</span><br />';
                    html += '<img src=\"' + jsonlist[i].thumbnail + '\"><br />';
                    html += jsonlist[i].caption + '<br />';
                    html += '<span>-------------------------------------------------------------------------------------</span>' + '<br />';
                }
                html += '<button onclick=\"onclickMethod(\'' + data.next + '\');\">다음</button>';
                $('#test').html(html);
            }
        }
        ,error:function(xhr, status, error) {

        }
    });
}

$("#test").click(function(){
    swal ( "test click" ,  "이쁜 경고창" ,  "success" ); // "warning", "error", "success" and "info".
});