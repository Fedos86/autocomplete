$(function() {
    // #JSON_array - array which stores JSON
    $( "#JSON_array" ).autocomplete({ 
    minLength: 3, 
    source: function (event, response) { 
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(event.term), "i"); 
        var results = []; 

        for(var i = 0; i < JSON_array.length; i++){ 
            var result = false; 
            result = matcher.test(JSON_array[i].name + "#" + JSON_array[i].room + "#"  + JSON_array[i].email); 

            if (result) {
                results.push(JSON_array[i]);
            }    
        }
    response(results);  
    }
});

