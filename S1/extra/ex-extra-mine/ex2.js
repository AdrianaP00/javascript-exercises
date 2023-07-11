let fru = 0;

for (let i = 0; i < foodSchedule.length; i++) {

const food = foodSchedule[i];

    if(!foodSchedule.isVegan){
                food.name = fruits[fru];
                fru++;
    } 
}