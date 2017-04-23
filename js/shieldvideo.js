var arr_video = ["qq.com","leshi.com","bilibili.com","tudou.com","youku.com","plures.net","dwstatic.com","acg.tv","aipai.com","17173cdn.com","hdslb.com"];
var key_value = [["iframe", "src"], ["embed", "src"], ["param", "value"], ["object", "data"], ["script", "src"]];
for (var kv_i = 0; kv_i < key_value.length; kv_i++) {
    $(key_value[kv_i][0]).each(function(i, n) {
        var flash_src = $(this).attr(key_value[kv_i][1]);
        if (flash_src != null && flash_src != undefined) {
            for (var v_i = 0; v_i < arr_video.length; v_i++) {
                if (flash_src.indexOf(arr_video[v_i]) != -1) {
                    $(this).remove();
                    continue;
                }
            }
        }

    })
}