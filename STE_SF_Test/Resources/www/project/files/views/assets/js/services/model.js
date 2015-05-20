/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "coordinates": {
        "type": "object",
        "properties": {
            "speed": {
                "type": "string"
            },
            "lon": {
                "type": "string"
            },
            "lat": {
                "type": "string"
            },
            "GPSResponder": {
                "type": "string"
            }
        }
    },
    "Visit": {
        "type": "object",
        "properties": {
            "visitActive": {
                "type": "string"
            },
            "ActiveVisitId": {
                "type": "string"
            }
        }
    },
    "material": {
        "type": "object",
        "properties": {
            "material_id": {
                "type": "string"
            },
            "materialName": {
                "type": "string"
            }
        }
    },
    "Number": {
        "type": "number"
    },
    "Event": {
        "type": "object",
        "properties": {
            "eventType": {
                "type": "string"
            }
        }
    },
    "shift": {
        "type": "object",
        "properties": {
            "ended_at": {
                "type": "string"
            },
            "status": {
                "type": "string"
            },
            "started_at": {
                "type": "string"
            },
            "shift_id": {
                "type": "string"
            }
        }
    },
    "customer": {
        "type": "object",
        "properties": {
            "customerName": {
                "type": "string"
            },
            "customer_id": {
                "type": "string"
            }
        }
    },
    "truck": {
        "type": "object",
        "properties": {
            "functionType": {
                "type": "string"
            },
            "truck_id": {
                "type": "string"
            },
            "loadStatus": {
                "type": "string"
            },
            "truckName": {
                "type": "string"
            }
        }
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    },
    "box": {
        "type": "object",
        "properties": {
            "box_id": {
                "type": "string"
            },
            "box_SF_object": {
                "type": "string"
            },
            "boxLoadStatus": {
                "type": "string"
            },
            "boxNumber": {
                "type": "string"
            }
        }
    },
    "driver": {
        "type": "object",
        "properties": {
            "driverName": {
                "type": "string"
            },
            "driver_id": {
                "type": "string"
            }
        }
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "shift_id": new $a.LocalStorage("shift_id", "String"),

    "started_at": new $a.LocalStorage("started_at", "String"),

    "ended_at": new $a.LocalStorage("ended_at", "String"),

    "status": new $a.LocalStorage("status", "String"),

    "truck_id": new $a.LocalStorage("truck_id", "String"),

    "truckName": new $a.LocalStorage("truckName", "String"),

    "functionType": new $a.LocalStorage("functionType", "String"),

    "loadStatus": new $a.LocalStorage("loadStatus", "String"),

    "customerName": new $a.LocalStorage("customerName", "String"),

    "customer_id": new $a.LocalStorage("customer_id", "String"),

    "lat": new $a.LocalStorage("lat", "String"),

    "lon": new $a.LocalStorage("lon", "String"),

    "speed": new $a.LocalStorage("speed", "String"),

    "GPSResponder": new $a.WindowStorage("GPSResponder", "String"),

    "device_id": new $a.LocalStorage("device_id", "String"),

    "driverName": new $a.LocalStorage("driverName", "String"),

    "driver_id": new $a.LocalStorage("driver_id", "String"),

    "boxNumber": new $a.LocalStorage("boxNumber", "String"),

    "boxLoadStatus": new $a.LocalStorage("boxLoadStatus", "String"),

    "box_id": new $a.LocalStorage("box_id", "String"),

    "sf_stared_at": new $a.LocalStorage("sf_stared_at", "String"),

    "visit_entered_at": new $a.LocalStorage("visit_entered_at", "String"),

    "visit_id": new $a.LocalStorage("visit_id", "String"),

    "visit_exited_at": new $a.LocalStorage("visit_exited_at", "String"),

    "visitActive": new $a.LocalStorage("visitActive", "Boolean"),

    "currentSiteId": new $a.LocalStorage("currentSiteId", "String"),

    "material_id": new $a.LocalStorage("material_id", "String"),

    "materialName": new $a.LocalStorage("materialName", "String"),

    "eventType": new $a.LocalStorage("eventType", "String"),

    "shift_sf_object": new $a.LocalStorage("shift_sf_object", "String"),

    "shift_sf_object_15": new $a.LocalStorage("shift_sf_object_15", "String"),

    "sf_success": new $a.LocalStorage("sf_success", "String"),

    "sf_error": new $a.LocalStorage("sf_error", "String"),

    "box_sf_object": new $a.LocalStorage("box_sf_object", "String"),

    "driver_sf_id": new $a.LocalStorage("driver_sf_id", "String"),

    "truck_sf_id": new $a.LocalStorage("truck_sf_id", "String"),

    "pinInput": new $a.LocalStorage("pinInput", "String"),

    "account_sf_id": new $a.LocalStorage("account_sf_id", "String"),

    "visit_sf_id": new $a.LocalStorage("visit_sf_id", "String"),

    "event_sf_Id": new $a.LocalStorage("event_sf_Id", "String"),

    "ActiveVisitId": new $a.LocalStorage("ActiveVisitId", "String")
};