! function(i) {
	"use strict";
	i("#toastr-one").on("click", function(t) {
		i.NotificationApp.send("Heads up!", "This alert needs your attention, but it is not super important.", "top-right", "rgba(0,0,0,0.2)", "info")
	}), i("#toastr-two").on("click", function(t) {
		i.NotificationApp.send("Heads up!", "Check below fields please.", "top-center", "rgba(0,0,0,0.2)", "warning")
	}), i("#toastr-three").on("click", function(t) {
		i.NotificationApp.send("Request approved successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-four").on("click", function(t) {
		i.NotificationApp.send("Request declined!", "", "top-right", "rgba(0,0,0,0.2)", "error")
	}), i("#toastr-five").on("click", function(t) {
		i.NotificationApp.send("User updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-six").on("click", function(t) {
		i.NotificationApp.send("Blotter updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-resolve").on("click", function(t) {
		i.NotificationApp.send("Blotter marked as resolved!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-seven").on("click", function(t) {
		i.NotificationApp.send("", "Set the `hideAfter` property to false and the toast will become sticky.", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-eight").on("click", function(t) {
		i.NotificationApp.send("", "Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.", "top-right", "rgba(0,0,0,0.2)", "info", 3e3, 1, "fade")
	})
}(window.jQuery);