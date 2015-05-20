
function siteMonitor() {
    var currentSite = window.localStorage["currentSiteId"];
    var activeVisit = window.localStorage["activeVisitId"];
    //alert("currentSite: " + currentSite);
    //Are you in a Site?
    if (typeof currentSite == 'undefined' || currentSite === null || currentSite == "-1") {
            console.log("Currentsite Status from JSFunction:", (currentSite));
        	return;
        //Yes, isInSite. Is it Active?
    } else {
        console.log("ActiveVisitIdinFunction:",(activeVisit));
        if (currentSite == activeVisit) {
            //Yes. IsinActiveSite. return and do nothing
            return;
        
      //Yes. InSite. No. NotActive.(make it active.)  
       } else {
              // alert("MakingSiteActive: " + currentSite);
           console.log("ShowingPopupinFunction:",(activeVisit));
              var popupElement = Apperyio("weclomeSitepopup_1");
              if (popupElement.popup("option", "positionTo") === "origin") {
                popupElement.popup("open", {
                transition: "slidedown",
                positionTo: "#offsite_box_man" + $(this).attr("offsite_box_man")
                });
             } else {
               popupElement.popup("open", {
               transition: "slidedown"
               });
        }

        try {
             create_sf_visit_service.execute({});
            } catch (e) {
               console.error(e);
               hideSpinner();
             }   
       }
		}
}



var RESEND_QUEUE_INTERVAL = 1000 * 60 * 5; // 5 minutes

/**
 * This function will take a failed service request and save it to our replay database to be
 * submitted later on.
 *
 * Mel Stanley - 5/6/2015
 */
window.storeServiceRequest = function (datasource) {
    // First put the actual ajax parameters back together from the service data
    var ajaxData = { datasource: datasource };
    $.extend(ajaxData, datasource.request, datasource.service.__requestOptions);
    datasource.service.processSubstitutions(ajaxData);
    console.log("%%%%  STORING REQUEST TO RESEND QUEUE: " + JSON.stringify(ajaxData));
    
    var resendQueue = window.fetchResendQueue();
    
    resendQueue.push(ajaxData);
    localStorage['resendQueue'] = JSON.stringify(resendQueue);
    console.log("%%%% RESEND QUEUE SIZE: " + resendQueue.length);
};

/**
 * Common code for fetching the resend queue (if it exists) or creating a new one (if it doesn't).
 *
 * Mel Stanley - 5/8/2015
 */
window.fetchResendQueue = function () {
    var resendQueue = [];

    try { resendQueue = JSON.parse(localStorage['resendQueue']); }
    catch (error) { console.log("%%%% BAD RESEND QUEUE DATA: " + localStorage['resendQueue']); }

    if ((typeof resendQueue === 'undefined') || (resendQueue.constructor !== Array)) {
        console.log("%%%% INITIALIZING RESEND QUEUE");
        resendQueue = [];
    }
    
    return resendQueue;
}

/**
 * This function processes any stored transactions.  We take the first item off the queue and
 * try to resend it.  If it's sucessful we keep going until we see a failure or the queue is
 * empty.  On failure we shedule another retry after RESEND_QUEUE_INTERVAL millisecs have passed.
 *
 * Mel Stanley - 5/11/2015
 */
window.processResendQueue = function () {

    console.log("%%%% PROCESSING RESEND QUEUE");

    var resendQueue = window.fetchResendQueue();

    // Try to process the first item in the queue.  If it succeeds we will remove it from the queue
    // and call this function again until we run out of queued items.
    if (resendQueue.length > 0) {
        var resendData = resendQueue[0];
        console.log("%%%% FOUND " + resendQueue.length + " QUEUED ITEMS.  RESENDING: " + JSON.stringify(resendData));
        resendData['success'] = function () {
        
            resendQueue = window.fetchResendQueue();
            resendQueue.shift();
            localStorage['resendQueue'] = JSON.stringify(resendQueue);
            console.log("%%%% REQUEST COMPLETED.  REMOVED FROM RESEND QUEUE.");

            if (resendQueue.length > 0) {
                // Keep trying to resend if there are more items in the queue
                window.processResendQueue();
            } else {
                setTimeout( window.processResendQueue, RESEND_QUEUE_INTERVAL );
            }
        };
        resendData.error = function() {
            console.log("%%%% FAILED TO RESEND.  SLEEPING FOR NEXT RETRY.");
            setTimeout( window.processResendQueue, RESEND_QUEUE_INTERVAL );
        };
        
        $.ajax(resendData);
        
    } else {
        console.log("%%%% NO QUEUED REQUESTS FOUND.  SLEEPING UNTIL NEXT CHECK.");
        setTimeout( window.processResendQueue, RESEND_QUEUE_INTERVAL );
    }
};

// Check the resend queue when the page loads.  After that it should requeue itself
// so that checks are made every RESEND_QUEUE_INTERVAL milliseconds.
$(document).ready( function () {

    window.processResendQueue();

});



