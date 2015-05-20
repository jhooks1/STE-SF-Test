/*
 * Service settings
 */
var stemobiledb_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "54a42b32e4b08ad5d670e676"
}
var Salesforce_settings = {
    "client_id": "3MVG9fMtCkV6eLhcWDG1EiwH.Q9RIKCP05e8tNQAbqSGH9_5Iw5m1Q70cQTC6NXyiZq2OdJIzGP57hTaHlasP",
    "redirect_url": "https://appery.io/app/salesforce/apperyio-salesforce-callback",
    "login_url": "https://login.salesforce.com/services/oauth2/authorize",
    "salesforce_api_version": "v32.0",
    "salesforce_instance_url": "",
    "salesforce_access_token": "",
    "client_secret": "8408279896327989483"
}

/*
 * Services
 */

var Salesforce_Account_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551904',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Material__c_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551904',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Account/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551905',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var stemobiledb_Shifts_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Shifts/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Locations_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Locations/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var Salesforce_Truck__c_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Truck__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551905',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Visit__c_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Visit__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551905',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Truck__c_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Truck__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551905',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Truck__c_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551905',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var stemobiledb_Shifts_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Shifts',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Locations_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Locations',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Customers_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Customers',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var Display_Service = new Apperyio.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
});

var GPSLocationTracking_Locations_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Locations',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var Salesforce_shift__c_update_service_clone_1 = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/shift__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551905',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var PlotAPI = new Apperyio.RestService({
    'url': 'https://admin.plotprojects.com/api/v1/account',
    'dataType': 'json',
    'type': 'get',
});

var stemobiledb_Trucks_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Trucks',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Material_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Material',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Trucks_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Trucks',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Material_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Material',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Drivers_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Drivers',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});
var GeolocationService = new Apperyio.GeolocationService({});

var Salesforce_Box__c_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Box__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551906',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_shift__c_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/shift__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551906',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var stemobiledb_Shifts_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Shifts',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var Salesforce_Material__c_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Material__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551906',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var stemobiledb_Shifts_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Shifts/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Events_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Events/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Events_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Events',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Visits_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Visits',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var Salesforce_shift__c_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/shift__c',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551906',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Visit__c_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var stemobiledb_Boxes_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Boxes/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var Salesforce_Visit__c_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Visit__c',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var stemobiledb_Boxes_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Boxes',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Trucks_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Trucks/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var stemobiledb_Boxes_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Boxes',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': stemobiledb_settings
});

var Salesforce_Employee__c_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Employee__c_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Employee__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var stemobiledb_Visits_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Visits/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': stemobiledb_settings
});

var Salesforce_Employee__c_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Employee__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_ShiftEvent__c_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/ShiftEvent__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Box__c_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_ShiftEvent__c_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Box__c_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/Box__c/{Id}',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_shift__c_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/query',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_ShiftEvent__c_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': '{salesforce_instance_url}/services/data/{salesforce_api_version}/sobjects/ShiftEvent__c',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1432143551907',
        'appery-rest': 'bd22f0a8-2281-462b-97ac-46eb7ebfc5b6'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});