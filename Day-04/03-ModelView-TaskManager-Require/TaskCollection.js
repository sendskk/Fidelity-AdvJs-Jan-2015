define(['Task'], function(Task){
	function TaskCollection(){
		var data = [];

		this.add = function(taskName){
			var	taskId = new Date().valueOf().toString();
			var newTask = new Task({
				id : taskId,
				name : taskName,
				isCompleted : false
			});
			data.push(newTask);
			triggerEvents("add", newTask)
		}
		this.get = function(index){
			return data[index];
		};
		
		this.toJSON = function(){
			return data;
		};

		this.removeCompleted = function(){
			for(var i=data.length-1; i>=0;i--){
				var task = data[i];
				if (task.get("isCompleted")){
					task.destroy();
					data.splice(i,1);
				}
			}
		}

		var events = {};
		this.addSubscriber = function(evtName, subscriptionFn){
			events[evtName] = events[evtName] || []
			events[evtName].push(subscriptionFn);
		}
		var self = this;
		function triggerEvents(evtName){
			var args = Array.prototype.slice.call(arguments,1);
			var subscriptionFns = events[evtName] || [];
			subscriptionFns.forEach(function(fn){
				fn.apply(self, args);
			});
		}
	}
	return TaskCollection;
});