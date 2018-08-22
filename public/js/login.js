var self = {
	init: function() {
		this.addEvent();
	},

	addEvent: function() {
		$("#login-btn").bind("click", this.login);
		$("#zh-btn").bind("click", () => {
			$.cookie('locale', 'zh');
		});
		$("#en-btn").bind("click", () => {
			$.cookie('locale', 'en');
		});
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
