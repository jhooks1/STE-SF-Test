function salesforceLogin() {
    if (window.device == null) {
        loginWeb();
    } else {
        loginDevice();
    }
}

function loginWeb() {
    window.open(getLoginUrl(), "_blank");
    window.addEventListener('message', messageListener, false);
}

function loginDevice() {
    // This is the code that opens the login window for Salesforce.  Disabled here because we are not using it.
    //var ref = window.open(getLoginUrl(), "_blank", 'location=yes');
    //ref.addEventListener('loadstart', loadStartListener, false);
    //window.browser = ref;
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {
        //alert("readyState: " + xmlhttp.readyState + "\nstatus: " + xmlhttp.status + "\nresponseText: " + xmlhttp.responseText);
        if (xmlhttp.readyState == 4) {
            var response = JSON.parse(xmlhttp.responseText);
            //alert("accessToken:" + response.access_token);
            if (!tryToSaveAccessToken('#access_token=' + response.access_token + "&instance_url=" + response.instance_url)) {
                alert("Error authorizing access to Salesforce: " + xmlhttp.responseText);
            } else {
                putTokenToServiceSettings();
            }
        }
    };
    xmlhttp.open("POST","https://login.salesforce.com/services/oauth2/token",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     xmlhttp.send("grant_type=password&client_id=3MVG9fMtCkV6eLhcWDG1EiwH.Q9RIKCP05e8tNQAbqSGH9_5Iw5m1Q70cQTC6NXyiZq2OdJIzGP57hTaHlasP&client_secret=8408279896327989483&username=e%40mail.com&password=act9ouv1PhfeVlrSqOFZN9yeykEoygXPp");

}

function tryToSaveAccessToken(url) {
    if (url.indexOf("access_token") != -1) {
        var url_params = [];
        var params = url.slice(url.indexOf('#') + 1);
        params = params.split('&');
        for (var i in params) {
            var item = params[i].split('=');
            url_params[item[0]] = item[1];
        }
        sessionStorage.setItem('salesforce_access_token', "Bearer " + decodeURI(url_params.access_token));
        sessionStorage.setItem('salesforce_instance_url', decodeURIComponent(url_params.instance_url));
        return true;
    }
    return false;
}

function messageListener(event) {
    var msg = event.data;
    sessionStorage.setItem('salesforce_access_token', msg['access_token']);
    sessionStorage.setItem('salesforce_instance_url', msg['instance_url']);
    putTokenToServiceSettings();
    window.removeEventListener('message', messageListener);
}

function loadStartListener(event) {
    if (tryToSaveAccessToken(event.url)) {
        putTokenToServiceSettings();
        window.browser.removeEventListener('loadstart', loadStartListener, false);
        window.browser.close();
        delete window.browser;
    }
}

function getLoginUrl() {
    var client_id = Salesforce_settings['client_id'];
    var redirect_url = Salesforce_settings['redirect_url'];
    
    var login_url = Salesforce_settings['login_url'];
    return login_url + "?response_type=token&display=touch&client_id=" + client_id + "&redirect_uri=" + encodeURI(redirect_url);
}

function putTokenToServiceSettings() {
    Salesforce_settings['salesforce_instance_url'] = sessionStorage.getItem('salesforce_instance_url');
    Salesforce_settings['salesforce_access_token'] = sessionStorage.getItem('salesforce_access_token');
}