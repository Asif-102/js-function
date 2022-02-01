function burgerKinbo(icca, enoughTaka)
{
    if(icca == true && enoughTaka >= 110)
    {
        return "Yes, Burger Kinbo"
    }
    else
    {
        return "No, Burger Kinbo na"
    }
}

var kinbo = burgerKinbo(false, 300);

console.log(kinbo);

var taka = 200
var icca = true

var abarKinbo = burgerKinbo(icca, taka);

console.log(abarKinbo);