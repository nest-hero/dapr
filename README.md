# Dapr Module for NestJS
[Dapr](https://dapr.io) module for [NestJS](https://nestjs.com),
fully compatible with any Dapr and NestJS version. 

## Supported Dapr features:

- [ ] Pubsub API
  - [x] Single Pubsub connection
  - [ ] Multiple Pubsub connection
- [ ] Invocation API
- [ ] Binding API
- [ ] Configuration API
- [ ] Secret API

## Installation
```
npm install @nest-hero/dapr
```

```
yarn add @nest-hero/dapr
```

```
pnpm add @nest-hero/dapr
```

## Usage
### Pubsub
```typescript
export class AppController {
  @Subscribe('topic')
  handler(data: YourDefinedTopicData, fullPayload: DaprPubSubPayload) {
    console.log(data)
  } 
}
```

```typescript
export type DaprPubSubPayload = {
  data: unknow // data that you publish to dapr
  datacontenttype: string // default 'application/json'
  id: string
  pubsubname: string
  source: string // app-id
  specversion: string 
  time: string
  topic: string
  traceid: string
  traceparent: string
  tracestate: string
  type: string
}

```
