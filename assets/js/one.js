
  	function setGrades() {
		// Define those variables!
		var grade1 = parseFloat(document.getElementById('grade1').value);
		var grade2 = parseFloat(document.getElementById('grade2').value);
		var grade3 = parseFloat(document.getElementById('grade3').value);
		var grade4 = parseFloat(document.getElementById('grade4').value);
		var grade5 = parseFloat(document.getElementById('grade5').value);
		var grade6 = parseFloat(document.getElementById('grade6').value);
		var grade7 = parseFloat(document.getElementById('grade7').value);
		var grade8 = parseFloat(document.getElementById('grade8').value);
		var grade9 = parseFloat(document.getElementById('grade9').value);
		var grade10 = parseFloat(document.getElementById('grade10').value);
        var weight1 = parseFloat(document.getElementById('weight1').value);
		var weight2 = parseFloat(document.getElementById('weight2').value);
		var weight3 = parseFloat(document.getElementById('weight3').value);
		var weight4 = parseFloat(document.getElementById('weight4').value);
		var weight5 = parseFloat(document.getElementById('weight5').value);
		var weight6 = parseFloat(document.getElementById('weight6').value);
		var weight7 = parseFloat(document.getElementById('weight7').value);
		var weight8 = parseFloat(document.getElementById('weight8').value);
		var weight9 = parseFloat(document.getElementById('weight9').value);
		var weight10 = parseFloat(document.getElementById('weight10').value);
        var grade10 = parseFloat(document.getElementById('grade10').value);
        var final1 = grade1/100*weight1/100;
		var final2 = grade2/100*weight2/100;
		var final3 = grade3/100*weight3/100;
		var final4 = grade4/100*weight4/100;
		var final5 = grade5/100*weight5/100;
		var final6 = grade6/100*weight6/100;
		var final7 = grade7/100*weight7/100;
		var final8 = grade8/100*weight8/100;
		var final9 = grade9/100*weight9/100;
		var final10 = grade10/100*weight10/100;
        var totalgrade = (grade1 + grade2 + grade3 + grade4 +grade5 + grade6 + grade7 + grade8 + grade9 + grade10);
        var totalpercentage = (final1 + final2 + final3 + final4 +final5 + final6 + final7 + final8 + final9 + final10)*100;
        var totalweight = (weight1 + weight2 + weight3 +weight4 + weight5 + weight6 +weight7 +weight8 +weight9 +weight10);
        var tempp = (totalpercentage/totalweight*100);
		document.getElementById('total').value = tempp.toFixed(2);
        var finalweight = 100 - totalweight;
        document.getElementById('finalweight').value = finalweight.toFixed(2);
        document.getElementById('min').value = (totalpercentage/100*100).toFixed(2);
        document.getElementById('max').value = (totalpercentage+(100*finalweight/100)).toFixed(2);
        var desiredgrade = parseFloat(document.getElementById('desired').value);
        document.getElementById('needed').value = (((desiredgrade*100)-((totalpercentage/totalweight*100)*totalweight))/finalweight).toFixed(2);
    
		
		// Select letter grade!
		
	}
