const usermodel=require('./Backend/form/form');
module.exports = {
   
    createUser: function(userObject){
        var user = new usermodel(userObject);
        user.save()
    },
    getAllUsers : function(cb){
        usermodel.find({}, function(err, allUsers){
            cb(err, allUsers);
        })
    }  
}
