


function setWb(type){
    if(type == 'redmine'){
        $('#wb').attr('src', 'http://issue.cesco.biz/');
    }
    else if(type == 'anysupport'){
        $('#wb').attr('src', 'http://as82.kr/cesco/');
    }
    else if(type == ''){

    }else{
        return;
    }
}

