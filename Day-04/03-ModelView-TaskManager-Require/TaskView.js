define(['jquery'], function($){
	function TaskView(task){
		var $root = this.$root = $("<li></li>");
		var self = this;
		this.initialize = function(){
			task.addSubscriber("all", (function(){
				this.render();
			}).bind(this));

			task.addSubscriber("removed", function(){
				$root.remove();
			})

			$root.click(function(){
				task.toggle();
			});
		};
		this.render = function(){
			$root.html(task.get("name"))
			if (task.get("isCompleted")){
				$root.addClass("completed");
			} else {
				$root.removeClass("completed");
			}
			return this;
		}
	}
	return TaskView;
});