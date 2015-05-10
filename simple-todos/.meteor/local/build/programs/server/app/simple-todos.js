(function(){// simple-todos.js

Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function(){
		return Tasks.find({});
	}
  });
  
  Template.body.events({
	  "submit .new-task": function (event){
		  var text = event.target.text.value;
		  Tasks.insert({
			  text: text,
			  createdAt: new Date()
		  });
		  event.target.text.value = "";
		  
		  return false;
	  }
  })
}

})();