document.getElementsByClassName("fname").addEventListener("change", setGradesOptional);

function setGradesOptional() {
		// save those variables!
            var grade = [];
            var weight = [];
        for (let step2 = 1; step2 <11; step2++) {
            var readvariable = 'grade'+step2;
            var readvariable2 = 'weight'+step2;
            grade[step2] = parseFloat(document.getElementById(readvariable).value);
            localStorage.setItem(readvariable, parseFloat(document.getElementById(readvariable).value));
            weight[step2] = parseFloat(document.getElementById(readvariable2).value);
            localStorage.setItem(readvariable2, parseFloat(document.getElementById(readvariable2).value));
        }
            
        // Calculations
//            var final = [];
//            var totalgrade = 0;
//            var totalpercentage = 0;
//            var totalweight = 0;
//        for (let step0 = 1; step0 <11; step0++) {
//            final[step0] = grade[step0]/100*weight[step0]/100;
//            totalgrade = totalgrade + grade[step0];
//            totalpercentage = totalpercentage + final[step0];
//            totalweight = totalweight + weight[step0];
//        }
//            totalpercentage = totalpercentage*100;
//        var tempp = (totalpercentage/totalweight*100);
            
        // return numbers
//		document.getElementById('total').value = tempp.toFixed(2);
//        var finalweight = 100 - totalweight;
//        document.getElementById('finalweight').value = finalweight.toFixed(2);
//        document.getElementById('min').value = (totalpercentage/100*100).toFixed(2);
//        document.getElementById('max').value = (totalpercentage+(100*finalweight/100)).toFixed(2);
        var desiredgrade = parseFloat(document.getElementById('desired').value);
        localStorage.setItem('desiredgrade', desiredgrade);
//        document.getElementById('needed').value = (((desiredgrade*100)-((totalpercentage/totalweight*100)*totalweight))/finalweight).toFixed(2);
        }
