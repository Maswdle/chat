// const axios = require('axios').default;
// import qs from 'qs'
document.getElementById("enter_a").addEventListener("click", enter_a_click);
document.getElementById("enter_b").addEventListener("click", enter_b_click);


var id_l = [], userID, defaultURL = "http://v6.nm1v1.cn/randomdeskrynew.html?touserid=[USERID]&tousername=[USERNAME]/";

function change_select(res_json) {
    var obj = document.getElementById("select1");
    obj.options.length = 0; //清空列表
    for (var p in res_json) {
        obj.options.add(new Option(res_json[p].nickname));
    }

}

function id_check() {
    if (userID.length != 32) return false;
    var re = /^[0-9a-z]*$/
    if (re.test(userID)) return true;
    return false;
}


axios.defaults.withCredentials = true // 若跨域请求需要带 cookie 身份识别
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'



function enter_a_click() {
    userID = document.getElementById("id_input").value;
    if (!id_check()) {
        alert("不合法!")
        userID = "";
        return;
    }
    axios(
        //todo 伪造Referer
        {
            // headers: {
            //     'Referer': 'http://v2.ozvzzs.cn/randomdeskrynewafwekb.html?v=afwekb'
            // },
            method: 'get',
            url: 'http://requestbin.cn:80/stomm0st',
            // url: 'http://v1.nmcp.cn:668/asmx/method.asmx/randomVIPGetHistoryUserList_Random/',
            // data:
            // {
            //     myUserID: userID,
            //     vipcode: "",
            //     severPort: "1001"
            // }

        }

    )
        // .then((result) => {
        //     var obj = document.getElementById("select1");
        //     obj.options.length = 0; //清空列表
        //     for (var p in result) {
        //         obj.options.add(new Option(res_json[p].nickname));
        //     }
        // })
}

function enter_b_click() {

}