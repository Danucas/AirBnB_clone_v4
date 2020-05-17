$(window).on("load", function() {
  let ch_am = []
  $("input").change(function() {
	if (this.checked) {
		console.log("Checked");
		ch_am.push($(this).attr("data-id"));
	} else {
		let index = ch_am.indexOf($(this).attr("data-id"))
		if (index >= 0) {
			ch_am.splice(index);
		}
		console.log("Unchecked");
	}
  });
});
