$(function(){
    $.getJSON("data/election-data.json", function(data){
        console.log(data)
        //get president list
        $.each(data.President.candidates, function(i, pres) {
            var tblRow = "<tr>" +
                            "<td>" + pres.candidate_id + "</td>" +
                            "<td>" + pres.candidate_name + "</td>" +
                            "<td>" + pres.candidate_party + "</td>" +
                            "<td><img src='images/deped.jpg' alt='logo' width='30' height='30' ></td>" +
                        "</tr>"

            $(tblRow).appendTo("#president tbody")
        });

        //get president list
        $.each(data.Vice_President.candidates, function(i, pres) {
            var tblRow = "<tr>" +
                            "<td>" + pres.candidate_id + "</td>" +
                            "<td>" + pres.candidate_name + "</td>" +
                            "<td>" + pres.candidate_party + "</td>" +
                            "<td><img src='" + pres.party_logo + "' alt='logo' width='30' height='30' ></td>" +
                        "</tr>"

            $(tblRow).appendTo("#vicePresident tbody")
        });
        //get senator list
        $.each(data.Senator.candidates, function(i, pres) {
            var tblRow = "<tr>" +
                            "<td>" + pres.candidate_id + "</td>" +
                            "<td>" + pres.candidate_name + "</td>" +
                            "<td>" + pres.candidate_party + "</td>" +
                            "<td><img src='" + pres.party_logo + "' alt='logo' width='30' height='30' ></td>" +
                        "</tr>"

            $(tblRow).appendTo("#senator tbody")
        });

        //get congres list
        $.each(data.Member_of_Congress.District_1.candidates, function(i, pres) {
            var tblRow = "<tr>" +
                            "<td>" + pres.candidate_id + "</td>" +
                            "<td>" + pres.candidate_name + "</td>" +
                            "<td>" + pres.candidate_party + "</td>" +
                            "<td><img src='" + pres.party_logo + "' alt='logo' width='30' height='30' ></td>" +
                        "</tr>"

            $(tblRow).appendTo("#congresD1 tbody")
        });

        //get congres list
        $.each(data.Member_of_Congress.District_2.candidates, function(i, pres) {
            console.log(pres);
            var tblRow = "<tr>" +
                            "<td>" + pres.candidate_id + "</td>" +
                            "<td>" + pres.candidate_name + "</td>" +
                            "<td>" + pres.candidate_party + "</td>" +
                            "<td><img src='" + pres.party_logo + "' alt='logo' width='30' height='30' ></td>" +
                        "</tr>"

            $(tblRow).appendTo("#congresD2 tbody")
        });
        //get governor list
        $.each(data.Governor.candidates, function(i, pres) {
            console.log(pres);
            var tblRow = "<tr>" +
                            "<td>" + pres.candidate_id + "</td>" +
                            "<td>" + pres.candidate_name + "</td>" +
                            "<td>" + pres.candidate_party + "</td>" +
                            "<td><img src='" + pres.party_logo + "' alt='logo' width='30' height='30' ></td>" +
                        "</tr>"

            $(tblRow).appendTo("#governor tbody")
        });
        //get mayor list
        $.each(data.Mayor.candidates, function(i, pres) {
            console.log(pres);
            var tblRow = "<tr>" +
                            "<td>" + pres.candidate_id + "</td>" +
                            "<td>" + pres.candidate_name + "</td>" +
                            "<td>" + pres.candidate_party + "</td>" +
                            "<td><img src='" + pres.party_logo + "' alt='logo' width='30' height='30' ></td>" +
                        "</tr>"

            $(tblRow).appendTo("#mayor tbody")
        });
        //get vicemayor list
        $.each(data.Vice_Mayor.candidates, function(i, pres) {
            console.log(pres);
            var tblRow = "<tr>" +
                            "<td>" + pres.candidate_id + "</td>" +
                            "<td>" + pres.candidate_name + "</td>" +
                            "<td>" + pres.candidate_party + "</td>" +
                            "<td><img src='" + pres.party_logo + "' alt='logo' width='30' height='30' ></td>" +
                        "</tr>"

            $(tblRow).appendTo("#viceMayor tbody")
        });
    });
});