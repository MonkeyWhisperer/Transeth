!function(d){d(document).ready(function(){device.tablet()||device.mobile()?d(".video-background").addClass("video-background-default-image"):d(".player").mb_YTPlayer()})}(jQuery),$("#clock").countdown("2022/2/30").on("update.countdown",function(d){$(this).html(d.strftime("<div><span>%-w</span>week%!w</div><div><span>%-d</span>day%!d</div><div><span>%H</span>hr</div><div><span>%M</span>min</div><div><span>%S</span>sec</div>"));/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&$(this).find("span").css("padding-bottom","10px")});