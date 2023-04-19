var soaps = require('../models/soaps');
// List of all soapss
exports.soaps_list = async function(req, res) {

 try{
    thesoaps = await soaps.find();
    res.send(thesoaps);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// for a specific soaps.
/*
exports.soaps_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps detail: ' + req.params.id);
};*/
// Handle soaps create on POST.
// Handle soaps create on POST.
exports.soaps_create_post = async function(req, res) {
    console.log(req.body)
    let document = new soaps();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"soaps_type":"goat", "cost":12, "size":"large"}
    document.Soap_Name = req.body.Soap_Name;
    document.Soap_cost = req.body.Soap_cost;
    document.Soap_Color = req.body.Soap_Color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    


// Handle soaps delete form on DELETE.
/*
exports.soaps_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps delete DELETE ' + req.params.id);
};*/
exports.soaps_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await soaps.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle soaps update form on PUT.
/*
exports.soaps_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps update PUT' + req.params.id);
};*/

//Handle soaps update form on PUT.
exports.soaps_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await soaps.findById( req.params.id)
// Do updates of properties
if(req.body.Soap_Name) toUpdate.Soap_Name = req.body.Soap_Name;
if(req.body.Soap_cost) toUpdate.Soap_cost = req.body.Soap_cost;
if(req.body.Soap_Color) toUpdate.Soap_Color = req.body.Soap_Color;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// VIEWS
// Handle a show all view
exports.soaps_view_all_Page = async function(req, res) {
    try{
    thesoaps = await soaps.find();
    res.render('soaps', { title: 'soaps Search Results', results: thesoaps });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.soaps_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await soaps.findById( req.query.id)
    res.render('soapsdetail',
   { title: 'Soaps Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
  
   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.soaps_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('soapscreate', { title: 'Soaps Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
exports.soaps_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await soaps.findById(req.query.id)
    res.render('soapsupdate', { title: 'Soaps Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
exports.soaps_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await soaps.findById(req.query.id)
    res.render('soapsdelete', { title: 'Soaps Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    

   // for a specific soaps.
    exports.soaps_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await soaps.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };