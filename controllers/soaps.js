var soaps = require('../models/soaps');
// List of all Costumes
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

// for a specific Costume.
exports.soaps_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.soaps_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps create POST');
};
// Handle Costume delete form on DELETE.
exports.soaps_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.soaps_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps update PUT' + req.params.id);
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