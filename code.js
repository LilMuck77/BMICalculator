$(document).ready(function () {


    var myRules =
        {
            height:
                {
                    required: true,
                    number: true,
                },
            weight:
                {
                    required: true,
                    number: true,
                }
        };

    var myMessages =
        {
            height:
                {
                    required: "This field is required.",
                    number: "Please enter your a number.",
                },
            weight:
                {
                    required: "This field is required.",
                    number: "Please enter your a number.",
                }
        };

    $("form").validate(
        {
            submitHandler: calculateBMI,
            rules: myRules,
            messages: myMessages,
        }
    )


    function calculateBMI() {

        var userHeight = $("#height").val();
        var userWeight = $("#weight").val();
        var bmi = (userWeight / (userHeight * userHeight)) * 703;


        $("#bmiOutput").text(`Your body mass index (BMI) is ${bmi.toFixed(1)}.`);
        if (bmi < 18.5) {
            $("#weightStatus").text("You are underweight.");
        } else if (bmi < 25) {
            $("#weightStatus").text("You are a healthy weight.");
        } else if (bmi < 30) {
            $("#weightStatus").text("You are overweight.");
        } else {
            $("#weightStatus").text("You are obese.");
        }
    }


});