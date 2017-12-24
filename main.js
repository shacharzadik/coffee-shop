// If the drink is part of the drinkRequirements object, reduce the amount of beans by the number of beans required for that drink.



var coffeeShop = {
  beans: 40,


  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
     if (drinkType in coffeeShop.drinkRequirements===false) {
       
      console.log("Sorry, we don't make "+ drinkType);
     
   } else if (drinkType in coffeeShop.drinkRequirements) {
     coffeeShop.beans-= coffeeShop.drinkRequirements[drinkType];
     console.log(coffeeShop.drinkRequirements.latte);
     console.log(coffeeShop.beans);
     console.log(coffeeShop.beans - coffeeShop.drinkRequirements[drinkType]);
   }
   
  }
}

console.log(coffeeShop.beans - coffeeShop.drinkRequirements.latte);

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");