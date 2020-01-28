var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BKlDTAfh6U2m-NVImsS9c1mOqIFnWLA4I6zwcqWgrBrxGX5E1NI3H1IPfUnr3v1KG6UhvZup8dfm0YOg5__ndlU",
   "privateKey": "cseHhfnW5upqk99RsbC6r0ypbBrmojAHNH4GIYMa0s0"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
);
 
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cclHp3cEVfA:APA91bEA90HPDiI9BrF-8JX3fxYcHcItwVabgbugpfb_Nzk3xASIyWuNcBhZ778ydLYWKHPsJUmLTeXOElv40PlkpUlQRd9zKbASbfsLIkbV6deoANr9IUuCgiKLVFQJ8Id3uzc2Nuw8",
   "keys": {
       "p256dh": "BEz01ILeu2DWw4D2pg2uO0V8/XlfVbw8nKJOguu2iVEIpswcK3Gaxwr+IrNeWl8azIwUClQ0NoFDXYJqfUtXESo=",
       "auth": "v5YLuNKF/xK9dDxF9Zx2uQ=="
   }
};

var payload = 'Berikut adalah contoh pesan push dari FCM dengan payload ';
 
var options = {
   gcmAPIKey: '1022536098970',
   TTL: 60
};

webPush.sendNotification(
   pushSubscription,
   payload,
   options
);