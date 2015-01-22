define([], function(){
	function Task(defaults){
		var data = defaults || {
			id : -1,
			name : "",
			isCompleted : false
		};
		this.toggle = function(){
			this.set("isCompleted", !this.get("isCompleted"))
		}
		this.get = function(attrName){
			return data[attrName];
		};
		this.set = function(attrName, value){
			data[attrName] = value;
			triggerEvents(attrName);
			triggerEvents('all');
		};
		this.destroy = function(){
			triggerEvents("removed");
		};
		this.toJSON = function(){
			return {
				id : data.id,
				name : data.name,
				isCompleted : data.isCompleted
			};
		};

		var events = {};
		this.addSubscriber = function(attrName, subscriptionFn){
			events[attrName] = events[attrName] || []
			events[attrName].push(subscriptionFn);
		}
		function triggerEvents(attrName){
			var subscriptionFns = events[attrName] || [];
			subscriptionFns.forEach(function(fn){
				fn();
			});
		}

	}
	return Task;
});