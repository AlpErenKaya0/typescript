// let number = 5;
// number = 'a';
// let a: number ;
// a = 5;
// a = 'a';
// a=true;

//aşağıdaki error'a sebep olur çünkü array tipi number olarak verilmiştir. ama string eklenmiştir.
let a: number[] = [1,2,"a"];

//aşağıdakinde sorun yoktur. girdi tipi any olarak tanımlanmış.
let b:any[] = [1,2,"a"];

let f:Array<any>= [1,2,3];

//aşağıdaki örnekte sırasıyla gelecek verilerin tipi belirtilmiş ve gelecek veriler böyle alınacak denmiş
let c: [string, number, boolean] = ["a",4,true];

enum Payment {kredi=0, havale=1,kapidaodeme=3 ,  eft=2};

let kredi = Payment.kredi;
let havale = Payment.havale;
let eft= Payment.eft;
let kapidaodeme = Payment.kapidaodeme;