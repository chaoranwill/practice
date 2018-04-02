window.data = {};

(function () {
	lib.ScreenSystem(document.getElementById("layout"));
	var layout = document.querySelector( "#layout" );

	var pages = document.querySelectorAll( ".page" );

	var Height = layout.offsetHeight;

	var Width = layout.offsetWidth;



	var audio = document.querySelector( "audio" );

	var musicLogo = document.querySelector( ".music-logo" );

	var isStart = false;



	window.spHeight = Height;

	Z.onTouchStart( pages[0], function () {

		if ( isStart == false ) {

			musicLogo.classList.add( "playing" );

			audio.src = "images/bg.mp3";

			audio.play();

		}

		isStart = true;

	} );

	Z.onTap( musicLogo, function () {

		musicLogo.classList.contains( "playing" ) ? audio.pause() : audio.play();

		musicLogo.classList.toggle( "playing" );

	} );


})(); 



document.addEventListener( 'WeixinJSBridgeReady', function () {

	var WeixinJSBridge = window.WeixinJSBridge;



	// 发送给好友;

	WeixinJSBridge.on( 'menu:share:appmessage', function () {

		WeixinJSBridge.invoke( 'sendAppMessage', {

			"appid" : dataForWeixin.appId,

			"img_url" : dataForWeixin.picture,

			"img_width" : "120",

			"img_height" : "120",

			"link" : dataForWeixin.url,

			"desc" : dataForWeixin.desc,

			"title" : dataForWeixin.title

		}, function ( res ) {

		} );

	} );



	// 分享到朋友圈;

	WeixinJSBridge.on( 'menu:share:timeline', function () {

		WeixinJSBridge.invoke( 'shareTimeline', {

			"img_url" : dataForWeixin.picture,

			"img_width" : "120",

			"img_height" : "120",

			"link" : dataForWeixin.url,

			"desc" : dataForWeixin.desc,

			"title" : dataForWeixin.title

		}, function ( res ) {

		} );

	} );



	// 分享到微博;

	WeixinJSBridge.on( 'menu:share:weibo', function () {

		WeixinJSBridge.invoke( 'shareWeibo', {

			"content" : dataForWeixin.title + ' ' + dataForWeixin.url,

			"url" : dataForWeixin.url

		}, function ( res ) {

		} );

	} );



	// 分享到Facebook

	WeixinJSBridge.on( 'menu:share:facebook', function () {

		WeixinJSBridge.invoke( 'shareFB', {

			"img_url" : dataForWeixin.picture,

			"img_width" : "120",

			"img_height" : "120",

			"link" : dataForWeixin.url,

			"desc" : dataForWeixin.desc,

			"title" : dataForWeixin.title

		}, function ( res ) {

		} );

	} );

}, false );

