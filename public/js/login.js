// $(function() {
// 	$("input[type='password'][data-eye]").each(function(i) {
// 		var $this = $(this);

// 		$this.wrap($("<div/>", {
// 			style: 'position:relative'
// 		}));
// 		$this.css({
// 			paddingRight: 60
// 		});
// 		$this.after($("<div/>", {
// 			html: 'Show',
// 			class: 'btn btn-primary btn-sm',
// 			id: 'passeye-toggle-'+i,
// 			style: 'position:absolute;right:10px;top:50%;transform:translate(0,-50%);-webkit-transform:translate(0,-50%);-o-transform:translate(0,-50%);padding: 2px 7px;font-size:12px;cursor:pointer;'
// 		}));
// 		$this.after($("<input/>", {
// 			type: 'hidden',
// 			id: 'passeye-' + i
// 		}));
// 		$this.on("keyup paste", function() {
// 			$("#passeye-"+i).val($(this).val());
// 		});
// 		$("#passeye-toggle-"+i).on("click", function() {
// 			if($this.hasClass("show")) {
// 				$this.attr('type', 'password');
// 				$this.removeClass("show");
// 				$(this).removeClass("btn-outline-primary");
// 			}else{
// 				$this.attr('type', 'text');
// 				$this.val($("#passeye-"+i).val());				
// 				$this.addClass("show");
// 				$(this).addClass("btn-outline-primary");
// 			}
// 		});
// 	});

// 	var init = function() {

// 	}

	
// });

var self = {
	init: function() {
		this.addEvent();
	},

	addEvent: function() {
		$("#login-btn").bind("click", this.login);
	},

	login: function() {

		var email = $("#email").val();
		var password = $("#password").val();
		var data = {
			"email": email,
			"password": password
		}

		if (!email || !password) {
			alert("请填好账号密码！")
			return;
		}

		$.ajax({
			url: "/login",
			type: "post",
			data: data,
			success: function(result) {
				console.log(result);
			},
			error: function(err) {
				console.log(err);
			}		
		})
	}	
};

self.init();
