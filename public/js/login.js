var self = {
	init: function () {
		this.addEvent();
	},

	addEvent: function () {
		// bind login
		$("#login-btn").bind("click", this.login);

		// set locale
		$("#zh-btn").bind("click", () => {
			$.cookie('locale', 'zh');
		});
		$("#en-btn").bind("click", () => {
			$.cookie('locale', 'en');
		});

		// custom alert
		window.alert = function (msg) {
			$("#alertContentId").html(msg);
			$("#alertModalId").modal('show');
		};
	},

	// getCookie
	getCookie: function (c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=")
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1
				c_end = document.cookie.indexOf(";", c_start)
				if (c_end == -1) c_end = document.cookie.length
				return unescape(document.cookie.substring(c_start, c_end))
			}
		}
		return ""
	},

	login: function () {

		var email = $("#email").val();
		var password = $("#password").val();
		var data = {
			"email": email,
			"password": password
		}

		if (!email || !password) {
			var language = self.getCookie("locale");
			if (language == "en") {
				alert("Please fill out the email or password!");
			} else {
				alert("请填好账号密码！");
			}
			return;
		}

		$.ajax({
			url: "authenticate",
			type: "post",
			data: data,
			success: function (result) {
				if (result.code == 0) {
					self.success(result);
				} else {
					self.failure("帐号密码错误！");
				}
			},
			error: function (err) {
				self.failure(err);
			}
		})
	},

	success: function (result) {
		window.location.href = "/RPYW"
	},

	failure: function (err) {
		alert(err);
	},
};

self.init();
