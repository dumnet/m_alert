// M ALERT ~ V1.0
// AUTHOR: MARVIC MACALINTAL
// JANUARY 30, 2017

var m = 
{

	alert:function(str)
	{

		var modal_body_css="",close_btn_css="";

		var modal_body_style = 
		{
			"font-family":"Arial",
			"font-size":"13px",
			"text-align":"center",
			"background":"#000",
			"opacity":"0.5",
			"color":"#fff",
			"padding":"10px",
			"width":"300px",
			"position":"absolute",
			"height":"90px",
			"margin": "150px auto", 
			"top":"0", 
			"left":"0", 
			"bottom":"0", 
			"right":"0" 
		}

		var close_btn_style = 
		{
			"width":"10px",
			"height":"10px",
			"line-height":"0.4em",
			"padding":"15px",
			"padding-left":"7px",
			"font-size":"12px",
			"background":"#fff",
			"color":"red",
			"border-radius":"50%",
			"border":"2px solid #000",
			"font-weight":"bold",
			"position":"relative",
			"right":"0px",
			"top":"-15px",
			"right":"-98%",
			"cursor":"pointer"
		}

		// CREATE A SESSION STORAGE TO STORE A TEMPORARY MODAL ID
		if (sessionStorage.id) 
		{
			sessionStorage.id = Number(sessionStorage.id) + 1;
		} 
		else 
		{
			sessionStorage.id = 1;
		}

		// MODAL BODY
		var div = document.createElement("div");
		div.setAttribute("id","m_alert_modal_"+sessionStorage.id);

		// CLOSE BUTTON
		var cb = document.createElement("div");
		cb.innerHTML = "X";
		cb.setAttribute("onclick","m.hide('"+sessionStorage.id+"')");

		for(var prop in close_btn_style)
		{
			close_btn_css+=prop+":"+close_btn_style[prop]+";";
		}
		cb.setAttribute("style",close_btn_css);
		div.appendChild(cb);

		for(var prop in modal_body_style)
		{
			modal_body_css+=prop+":"+modal_body_style[prop]+";";
		}
		div.setAttribute("style",modal_body_css);
		div.innerHTML += str;
		document.body.appendChild(div);										
	},
	
	hide:function(arg)
	{
		var div = document.getElementById("m_alert_modal_"+arg);
		div.setAttribute("style","display:none;");
	},
	
	autoclose:function(num)
	{
		num = num * 1000;
		var ss = sessionStorage.id;
		setTimeout(function()
		{
			var div = document.getElementById("m_alert_modal_"+ss);
			div.setAttribute("style","display:none;");
		},num);
	}
}
