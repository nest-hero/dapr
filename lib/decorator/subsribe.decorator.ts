export const listTopicHandler: {
  topic: string
  handler: Function
}[] = []
export function Subscribe(topic: string): MethodDecorator {
  return function (
    target: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    listTopicHandler.push({
      topic: topic,
      handler: descriptor.value,
    })

    console.log(listTopicHandler)
  }
}
