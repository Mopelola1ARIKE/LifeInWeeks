function LifeInWeeks(age){

    const year=90;

    var ageC=prompt("How old are you?");

    var Totalleft=year-ageC

    var output="you have"+Totalleft+"years left";

    alert(output);

    var days= Totalleft * 365;

    var weeks= Totalleft * 52;

    var months= Totalleft * 12;

    var TotalRem= "you have" + days + "days" + weeks + "weeks" + months + "month left";

    console.log(TotalRem);

    // alert(TotalRem)



}

LifeInWeeks();