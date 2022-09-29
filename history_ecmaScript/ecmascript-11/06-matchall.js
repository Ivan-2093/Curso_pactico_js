const regex = /\b(Apple)+\b/g;

const fruit = 'Orange, Apple, Banana, Apple, etc...';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}
