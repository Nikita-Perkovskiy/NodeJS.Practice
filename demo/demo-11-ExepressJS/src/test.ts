function Component(id: number) {
  console.log("start Component");
  return (target: Function) => {
    console.log("run Component");
    target.prototype.id = id;
  };
}

function Logger(id: number) {
  console.log("start Logger");
  return (target: Function) => {
    console.log("run Logger");
    target.prototype.id = id;
  };
}

function Method(
  target: Object,
  propertyKey: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log(propertyKey);
  const oldValue = propertyDescriptor.value;
  propertyDescriptor.value = function (...args: any[]) {
    return (args[0] = 10);
  };
}

@Logger(1)
@Component(1)
export class User {
  id?: number;

  @Method
  updateId(newId: number) {
    this.id = newId;
    return this.id;
  }
}

console.log(new User().id);
