//Rendering the SIGN UP page
module.exports.signUp = async function(req,res){
    try{
        return res.render('signup', {
            title: "SIGN UP",
        });
    }catch(err){
        console.log('Error', err);
        return;
    }  
}

//Rendering the SIGN IN page
module.exports.signIn = async function(req,res){
    try{
        return res.render('signin', {
            title: "SIGN IN",
        });
    }catch(err){
        console.log('Error', err);
        return;
    }  
}