function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key];
  return value;
}
console.log(copy({ name: 'Quill', age: 38 }, 'age'));

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const TmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>;
type REadTodo = Readonly<Todo>;

const fetchData: Promise<String> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
});
fetchData.then((data) => {
  data.toUpperCase();
});
const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];
