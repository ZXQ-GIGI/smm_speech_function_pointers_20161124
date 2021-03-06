(function(){
    var trade = window.smm.trade;
    var go_run = function(req,type,res_call){

        if(!req.trim()){
            return res_call("");
        }

        trade.Api.get({
                path   : '/tool/'+type+'/' + trade.Format.base64(req),
                success : function(data){
                    if(data.code != 0 && data.code != "0" ){
                        trade.Pop.alert({
                            title : "执行错误",
                            msg  : data.msg,
                            icon : trade.Pop.error
                        });
                        res_call("");
                        return;
                    }
                    res_call(data.data);
                },
        });
    };
    var source = window.document.getElementsByClassName('source')[0];
    var target = window.document.getElementsByClassName('target')[0];
    var gorun = window.document.getElementsByClassName('gorun')[0];
    var noderun = window.document.getElementsByClassName('noderun')[0];
    gorun.onclick = function(){
        go_run(source.value,"gorun",function(res){
            target.value = res;
        });
        return false;
    };
    noderun.onclick = function(){
        go_run(source.value,"noderun",function(res){
            target.value = res;
        });
        return false;
    };
})();
