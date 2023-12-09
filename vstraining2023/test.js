$(function() {
    var people = [];
 
    $.getJSON('data/test-data.json', function(data) {
        console.log(data.ctRoot)
        $.each(data.ctRoot, function(i, f) {
        var tblRow = "<tr>" +
                        "<td>" + f._id + "</td>" +
                        "<td>" + f.name + "</td>" + 
                        "<td>" + f.dob + "</td>" + 
                        "<td>" + f.email + "</td>" + 
                        "<td>" + f.salary + "</td>" + 
                        "<td>" + f.url + "</td>" +
                    "</tr>"

            $(tblRow).appendTo("#candidate tbody");
        });
    });

    //$("#candidate").DataTable();
 });
    