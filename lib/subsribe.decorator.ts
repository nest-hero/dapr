export function Subscribe(event: string): MethodDecorator {
  console.log(event)
  return function (
    target: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    console.log(target, propertyKey, descriptor)
    Reflect.defineMetadata('HANDLE_EVENT', event, descriptor.value)
  }
}
