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
			url: "/authenticate",
			type: "post",
			data: data,
			success: function(result) {
				if (result.code == 0){
					self.success(result);
				}else {
					self.failure("帐号密码错误！");
				}
			},
			error: function(err) {
				self.failure(err);
			}		
		})
	},

	success: function(result) {
		window.location.href = "/RPYW"
	},

	failure: function(err) {
		alert("登陆失败:" + err);
	},
};

self.init();
