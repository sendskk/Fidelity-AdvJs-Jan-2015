require(['jquery','TaskCollection', 'TaskCollectionView'], function($, TaskCollection, TaskCollectionView){
	window.taskCollection = new TaskCollection();
	window.taskCollectionView = new TaskCollectionView(taskCollection);
	taskCollectionView.init();
	$(function(){
		taskCollectionView.render().$root.appendTo(document.body);
	});
});