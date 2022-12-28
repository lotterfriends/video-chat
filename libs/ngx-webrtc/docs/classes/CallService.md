[ngx-webrtc](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/README.md) / [Exports](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/modules.md) / CallService

# Class: CallService

The CallService holds the state of the peer connection. It provides methods to update the state
and methods to create a `PeerConnectionClient`.

## Table of contents

### Constructors

- [constructor](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#constructor)

### Properties

- [defaultServers](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#defaultservers)
- [identifier](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#identifier)
- [since](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#since)
- [startShareScreen](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#startsharescreen)
- [started$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#started$)
- [stopShareScreen](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#stopsharescreen)
- [storage](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#storage)
- [storage\_key\_since](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#storage_key_since)
- [users$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#users$)

### Methods

- [addUser](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#adduser)
- [createCertifcate](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#createcertifcate)
- [createPeerClient](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#createpeerclient)
- [findUser](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#finduser)
- [getSince](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#getsince)
- [getUser](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#getuser)
- [getUserIdentifier](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#getuseridentifier)
- [getUsers](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#getusers)
- [removeUser](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#removeuser)
- [start](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#start)
- [stop](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#stop)
- [updateSince](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#updatesince)
- [userAudioMuted](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#useraudiomuted)
- [userAudioUnmuted](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#useraudiounmuted)
- [userHasCam](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#userhascam)
- [userHasMic](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#userhasmic)
- [userStartShareScreen](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#userstartsharescreen)
- [userStopShareScreen](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#userstopsharescreen)
- [userVideoMuted](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#uservideomuted)
- [userVideoUnmuted](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/CallService.md#uservideounmuted)

## Constructors

### constructor

• **new CallService**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Configuration`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/Configuration.md) |

#### Defined in

[lib/services/call.service.ts:21](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L21)

## Properties

### defaultServers

• **defaultServers**: [`IceServer`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/IceServer.md)[]

default public and free IceServers list
```json
[
 { urls: 'stun:stun.l.google.com:19302' },
 { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
 { urls: 'stun:stun.services.mozilla.com' },
]

```

#### Defined in

[lib/services/call.service.ts:62](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L62)

___

### identifier

• `Private` **identifier**: keyof [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md)

#### Defined in

[lib/services/call.service.ts:30](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L30)

___

### since

• `Private` **since**: `number` = `0`

#### Defined in

[lib/services/call.service.ts:27](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L27)

___

### startShareScreen

• **startShareScreen**: `EventEmitter`<`void`\>

Emitted by `ShareScreenDirective` when current User starts sharing his screen.

#### Defined in

[lib/services/call.service.ts:43](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L43)

___

### started$

• **started$**: `BehaviorSubject`<`boolean`\>

chat status state

#### Defined in

[lib/services/call.service.ts:71](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L71)

___

### stopShareScreen

• **stopShareScreen**: `EventEmitter`<`void`\>

Emitted by `ShareScreenDirective` when current User stops sharing his screen.

#### Defined in

[lib/services/call.service.ts:49](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L49)

___

### storage

• `Private` **storage**: ``"localStorage"`` \| ``"sessionStorage"`` = `'sessionStorage'`

#### Defined in

[lib/services/call.service.ts:20](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L20)

___

### storage\_key\_since

• `Private` `Readonly` **storage\_key\_since**: ``"ngx-webrtc-since"``

#### Defined in

[lib/services/call.service.ts:26](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L26)

___

### users$

• **users$**: `BehaviorSubject`<[`UserInCall`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/UserInCall.md)[]\>

users in call state, add user via `CallService.addUser(User,...)` and remove user via `CallService.removeUser(User)`.
get all User via `CallService.getUsers()`, get one user via `CallService.getUser()`.

#### Defined in

[lib/services/call.service.ts:36](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L36)

## Methods

### addUser

▸ **addUser**(`user`, `connection`, `node?`): `void`

The `CallService` hold the users state with all users, with this methode you can add a user to the state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) | User object that contains userIdentifier |
| `connection` | [`PeerConnectionClient`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md) | created connection for the user |
| `node?` | `ComponentRef`<[`RemotePeerComponentInterface`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/RemotePeerComponentInterface.md)\> | component that is used to display the users webcam, etc. |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:100](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L100)

___

### createCertifcate

▸ **createCertifcate**(`algorithm?`): `Promise`<`RTCCertificate`\>

With this methode you can create a RTCCertificate to secure a connection.

**`link`** https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/generateCertificate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `unknown` | Certificate options used by `RTCPeerConnection.generateCertificate()` Default algorithm `ECDSA` with curve `P-256` |

#### Returns

`Promise`<`RTCCertificate`\>

Promise resolve to `RTCCertificate`

#### Defined in

[lib/services/call.service.ts:263](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L263)

___

### createPeerClient

▸ **createPeerClient**(`settings`): `Promise`<[`PeerConnectionClient`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md)\>

Create a new `PeerConnectionClient` with the given settings

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`PeerConnectionClientSettings`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSettings.md) | Settings for creating the `PeerConnectionClient` |

#### Returns

`Promise`<[`PeerConnectionClient`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md)\>

`PeerConnectionClient` object

#### Defined in

[lib/services/call.service.ts:253](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L253)

___

### findUser

▸ `Private` **findUser**(`users`, `user`): ``null`` \| [`UserInCall`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/UserInCall.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `users` | [`UserInCall`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/UserInCall.md)[] |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) |

#### Returns

``null`` \| [`UserInCall`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/UserInCall.md)

#### Defined in

[lib/services/call.service.ts:292](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L292)

___

### getSince

▸ **getSince**(): `number`

get current since timestamp set by `CallService.updateSince()`

#### Returns

`number`

Timestamp

#### Defined in

[lib/services/call.service.ts:86](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L86)

___

### getUser

▸ **getUser**(`user`): ``null`` \| [`UserInCall`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/UserInCall.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) | User with `userIdentifier` |

#### Returns

``null`` \| [`UserInCall`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/UserInCall.md)

User in state

#### Defined in

[lib/services/call.service.ts:244](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L244)

___

### getUserIdentifier

▸ **getUserIdentifier**(): keyof [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md)

Configured user identifier.

#### Returns

keyof [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md)

identifier to select a User

#### Defined in

[lib/services/call.service.ts:288](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L288)

___

### getUsers

▸ **getUsers**(): [`UserInCall`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/UserInCall.md)[]

Give all users who are currently in the state.

#### Returns

[`UserInCall`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/UserInCall.md)[]

All users currently in state

#### Defined in

[lib/services/call.service.ts:235](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L235)

___

### removeUser

▸ **removeUser**(`user`): `void`

remove a user object from state

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) | User object to remove |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:120](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L120)

___

### start

▸ **start**(): `void`

set call state started to `true`, you can subscribe to `CallService.started$` for updates.

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:273](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L273)

___

### stop

▸ **stop**(): `void`

set call state started to `false`, you can subscribe to `CallService.started$` for updates.

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:280](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L280)

___

### updateSince

▸ **updateSince**(): `void`

update since timestamp with current time

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:76](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L76)

___

### userAudioMuted

▸ **userAudioMuted**(`user`): `void`

Use this method when the passed user deactivates his microphone to update the state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:156](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L156)

___

### userAudioUnmuted

▸ **userAudioUnmuted**(`user`): `void`

Use this method when the passed user activates his microphone to update the state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:169](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L169)

___

### userHasCam

▸ **userHasCam**(`user`): `void`

Use this method if the passed user has a camera to update the state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) | User to update |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:130](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L130)

___

### userHasMic

▸ **userHasMic**(`user`): `void`

Use this method if the passed user has a microphone to update the state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:143](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L143)

___

### userStartShareScreen

▸ **userStartShareScreen**(`user`): `void`

Use this method when the passed user starts to share his screen to update the state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:208](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L208)

___

### userStopShareScreen

▸ **userStopShareScreen**(`user`): `void`

Use this method when the passed user stops sharing his screen to update the state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:221](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L221)

___

### userVideoMuted

▸ **userVideoMuted**(`user`): `void`

Use this method when the passed user deactivates his camera to update the state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:182](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L182)

___

### userVideoUnmuted

▸ **userVideoUnmuted**(`user`): `void`

Use this method when the passed user activates his camera to update the state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/User.md) |

#### Returns

`void`

#### Defined in

[lib/services/call.service.ts:195](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/call.service.ts#L195)
