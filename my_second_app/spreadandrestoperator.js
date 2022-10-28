const pop = {
    name: "rahul",
    age : 25,
    greet(){
        console.log("hey "+this.name);
    }
};

const pop1 = (...args) => {
    return args;
};

// const p = ['12','435','23545'];
const p = [12,32];
const q = {...pop};
// const a = p.slice();
console.log(q);
console.log(pop1(1,3,4,5));

//destructuring

const func1 = ({name}) => {
    console.log(name);
};

func1(pop);

const {name,age} = pop;
const [a,b] = p;
console.log(a);
console.log(name);
console.log(a);