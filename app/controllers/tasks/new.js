import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		saveTask: function(){
			var title = this.get('title');
			var desc = this.get('desc');
			var newTask = this.store.createRecord('task',{
				title:title,
				desc:desc,
			
			});
			
			newTask.save();

			this.setProperties({
				title:'',
				desc:'',
			
			})
		}	
	}
});
