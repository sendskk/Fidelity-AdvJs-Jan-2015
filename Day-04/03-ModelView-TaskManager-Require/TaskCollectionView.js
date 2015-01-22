define(['jquery','TaskView','text!taskCollectionTemplate.html'], function($, TaskView, templateHTML){
	function TaskCollectionView(taskCollection){
		var $root = this.$root = $("<div></div>");
		this.init = function(){
			$root.on("click", "#btnAddTask", function(){
				var taskName = $("#txtTask", $root).val();
				taskCollection.add(taskName);
			});

			$root.on("click", "#btnRemoveCompleted", function(){
				taskCollection.removeCompleted();
			});

			taskCollection.addSubscriber("add", function(task){
				var newTaskView = new TaskView(task);
				newTaskView.initialize();
				newTaskView.render();
				newTaskView.$root.appendTo($root.find("#olTaskList"));
			});
		};
		var self = this;
		this.render = function(){
			$root.html(templateHTML);
			return this;
		}
	}
	return TaskCollectionView;
});
