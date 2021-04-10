//array
const animals = ['cat','dog'];

{
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
}

{
    const [first, second] = animals;
    console.log(first,second);
}
