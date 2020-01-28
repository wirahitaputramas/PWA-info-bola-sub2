var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cYsnYKypzxE:APA91bH3ELK9Insw9L728kT9LFnbjWtMfRVMWqXwmxHkYTQ-LYyTt_Qg_PGBoj_7KGBU4R39vZYBrBeLkZqk3D5QmeYL-qsRV9KzsfcbzGS3ExyI80ZYVt_Ay4oA46LelmvkktSygNP_",
    "keys": {
        "p256dh": "BCEBV/y+J6GfY7KF2tWeoq5Y5u60mczxZ5jOn5N0P50LaCtFXhmPO3w4A4U81IsnNOYEvIV06g/IzHAjKh9rs+M=",
        "auth": "2dxd73CyI97NEUgxz4/o5A=="
    }
};
var payload = 'Here is a payload!';
var options = {
    gcmAPIKey: '1022536098970',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);