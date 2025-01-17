[ngx-webrtc](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/README.md) / [Exports](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/modules.md) / PeerConnectionClient

# Class: PeerConnectionClient

## Table of contents

### Constructors

- [constructor](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#constructor)

### Properties

- [DEFAULT\_SDP\_OFFER\_OPTIONS](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#default_sdp_offer_options)
- [connection](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#connection)
- [error$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#error$)
- [hasRemoteSdp](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#hasremotesdp)
- [iceConnectionState$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#iceconnectionstate$)
- [id](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#id)
- [isInitiator](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#isinitiator)
- [isNegotiating](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#isnegotiating)
- [messageQueue](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#messagequeue)
- [muteMyAudio](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#mutemyaudio)
- [muteMyVideo](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#mutemyvideo)
- [negotiationNeededTriggered](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#negotiationneededtriggered)
- [remoteHangUp](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#remotehangup)
- [remoteStreamAdded](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#remotestreamadded)
- [remoteTrackAdded](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#remotetrackadded)
- [remotesDescriptionSet](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#remotesdescriptionset)
- [seeNewCandidate$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#seenewcandidate$)
- [settings](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#settings)
- [signalState$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#signalstate$)
- [signalingMessage](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#signalingmessage)
- [startTime](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#starttime)
- [started](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#started)
- [useShareScreen$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#usesharescreen$)
- [userMuteAudio](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#usermuteaudio)
- [userMuteVideo](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#usermutevideo)
- [userUnmuteAudio](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#userunmuteaudio)
- [userUnmuteVideo](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#userunmutevideo)

### Methods

- [addStream](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#addstream)
- [addTrack](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#addtrack)
- [addTransceiver](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#addtransceiver)
- [audioMuted](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#audiomuted)
- [audioUnmuted](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#audiounmuted)
- [close](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#close)
- [createOffer](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#createoffer)
- [doAnswer](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#doanswer)
- [drainMessageQueue](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#drainmessagequeue)
- [error](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#error)
- [filterIceCandidate](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#filtericecandidate)
- [getPeerConnectionStates](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#getpeerconnectionstates)
- [getPeerConnectionStats](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#getpeerconnectionstats)
- [handleMessageEvents](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#handlemessageevents)
- [log](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#log)
- [onError](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#onerror)
- [onIceCandidate](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#onicecandidate)
- [onIceConnectionStateChange](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#oniceconnectionstatechange)
- [onRecordIceCandidate](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#onrecordicecandidate)
- [onRemoteTrackAdded](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#onremotetrackadded)
- [onSetRemoteDescriptionSuccess](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#onsetremotedescriptionsuccess)
- [onSignalingStateChange](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#onsignalingstatechange)
- [onnegotiationneeded](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#onnegotiationneeded)
- [processSignalingMessage](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#processsignalingmessage)
- [receiveSignalingMessage](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#receivesignalingmessage)
- [replaceTrack](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#replacetrack)
- [requestMuteAudio](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#requestmuteaudio)
- [requestMuteVideo](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#requestmutevideo)
- [setLocalSdpAndNotify](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#setlocalsdpandnotify)
- [setRemoteSdp](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#setremotesdp)
- [startAsCallee](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#startascallee)
- [startAsCaller](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#startascaller)
- [startShareScreen](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#startsharescreen)
- [stopShareScreen](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#stopsharescreen)
- [videoMuted](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#videomuted)
- [videoUnmuted](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PeerConnectionClient.md#videounmuted)

## Constructors

### constructor

• **new PeerConnectionClient**(`settings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`PeerConnectionClientSettings`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSettings.md) |

#### Defined in

[lib/peer-connection-client.ts:95](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L95)

## Properties

### DEFAULT\_SDP\_OFFER\_OPTIONS

• `Private` `Readonly` **DEFAULT\_SDP\_OFFER\_OPTIONS**: `RTCOfferOptions`

#### Defined in

[lib/peer-connection-client.ts:22](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L22)

___

### connection

• `Private` **connection**: ``null`` \| `RTCPeerConnection`

#### Defined in

[lib/peer-connection-client.ts:18](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L18)

___

### error$

• **error$**: `BehaviorSubject`<``null`` \| { `error?`: `Error` ; `source`: `string`  }\>

triggered if an error occure inital value is `null`

#### Defined in

[lib/peer-connection-client.ts:49](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L49)

___

### hasRemoteSdp

• `Private` **hasRemoteSdp**: `boolean` = `false`

#### Defined in

[lib/peer-connection-client.ts:16](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L16)

___

### iceConnectionState$

• **iceConnectionState$**: `BehaviorSubject`<``null`` \| `RTCIceConnectionState`\>

triggered on I see connection state changed, inital value is `null`

#### Defined in

[lib/peer-connection-client.ts:93](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L93)

___

### id

• `Private` **id**: `string`

#### Defined in

[lib/peer-connection-client.ts:21](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L21)

___

### isInitiator

• `Private` **isInitiator**: `boolean` = `false`

#### Defined in

[lib/peer-connection-client.ts:15](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L15)

___

### isNegotiating

• `Private` **isNegotiating**: `boolean` = `false`

#### Defined in

[lib/peer-connection-client.ts:20](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L20)

___

### messageQueue

• `Private` **messageQueue**: [`PeerConnectionClientSignalMessage`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSignalMessage.md)[] = `[]`

#### Defined in

[lib/peer-connection-client.ts:17](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L17)

___

### muteMyAudio

• **muteMyAudio**: `EventEmitter`<`void`\>

triggered when the connected user asks for mute user audio

#### Defined in

[lib/peer-connection-client.ts:65](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L65)

___

### muteMyVideo

• **muteMyVideo**: `EventEmitter`<`void`\>

triggered when the connected user asks for mute user video

#### Defined in

[lib/peer-connection-client.ts:69](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L69)

___

### negotiationNeededTriggered

• **negotiationNeededTriggered**: `Subject`<`boolean`\>

triggerd on need negotiation

#### Defined in

[lib/peer-connection-client.ts:89](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L89)

___

### remoteHangUp

• **remoteHangUp**: `EventEmitter`<`void`\>

triggered when connected user close connection

#### Defined in

[lib/peer-connection-client.ts:61](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L61)

___

### remoteStreamAdded

• **remoteStreamAdded**: `EventEmitter`<[`StreamTrack`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/StreamTrack.md)\>

triggered when a remote stream is added @deprecated use remoteTrackAdded

#### Defined in

[lib/peer-connection-client.ts:37](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L37)

___

### remoteTrackAdded

• **remoteTrackAdded**: `EventEmitter`<[`StreamTrack`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/StreamTrack.md)\>

triggered when a remote track is added

#### Defined in

[lib/peer-connection-client.ts:41](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L41)

___

### remotesDescriptionSet

• **remotesDescriptionSet**: `BehaviorSubject`<``null`` \| `MediaStreamTrack`\>

triggered when remote description is set, inital value is `null`

#### Defined in

[lib/peer-connection-client.ts:57](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L57)

___

### seeNewCandidate$

• **seeNewCandidate$**: `BehaviorSubject`<``null`` \| { `candidate`: `string` ; `location`: `string`  }\>

triggered when new candidate is available initial value is `null`

#### Defined in

[lib/peer-connection-client.ts:33](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L33)

___

### settings

• `Private` **settings**: [`PeerConnectionClientSettings`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSettings.md)

#### Defined in

[lib/peer-connection-client.ts:19](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L19)

___

### signalState$

• **signalState$**: `BehaviorSubject`<``null`` \| `RTCSignalingState`\>

triggered when the `RTCSignalingState` is changed inital value is `null`

#### Defined in

[lib/peer-connection-client.ts:45](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L45)

___

### signalingMessage

• **signalingMessage**: `EventEmitter`<[`PeerConnectionClientSignalMessage`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSignalMessage.md)\>

messages send by the peer connection

#### Defined in

[lib/peer-connection-client.ts:29](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L29)

___

### startTime

• `Private` **startTime**: `number`

#### Defined in

[lib/peer-connection-client.ts:13](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L13)

___

### started

• `Private` **started**: `boolean` = `false`

#### Defined in

[lib/peer-connection-client.ts:14](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L14)

___

### useShareScreen$

• **useShareScreen$**: `BehaviorSubject`<`boolean`\>

triggered when the connected user toggle share screen, inital value is `false`

#### Defined in

[lib/peer-connection-client.ts:53](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L53)

___

### userMuteAudio

• **userMuteAudio**: `EventEmitter`<`void`\>

triggered when the connected user mutes his audio

#### Defined in

[lib/peer-connection-client.ts:81](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L81)

___

### userMuteVideo

• **userMuteVideo**: `EventEmitter`<`void`\>

triggered when the connected user mutes his video

#### Defined in

[lib/peer-connection-client.ts:73](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L73)

___

### userUnmuteAudio

• **userUnmuteAudio**: `EventEmitter`<`void`\>

triggered when the connected user unmutes his audio

#### Defined in

[lib/peer-connection-client.ts:85](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L85)

___

### userUnmuteVideo

• **userUnmuteVideo**: `EventEmitter`<`void`\>

triggered when the connected user unmutes his video

#### Defined in

[lib/peer-connection-client.ts:77](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L77)

## Methods

### addStream

▸ **addStream**(`mediaSteam`): `void`

Add all `MediaStreamTrack`s of a `MediaStream` to the connection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaSteam` | `MediaStream` | `MediaStream` with tracks |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:386](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L386)

___

### addTrack

▸ **addTrack**(`track`): `void`

add a `MediaStreamTrack` to the connection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | `MediaStreamTrack` | `MediaStreamTrack` to be added to the connection. |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:336](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L336)

___

### addTransceiver

▸ **addTransceiver**(`track`, `init?`): `void`

add a `MediaStreamTrack` to the connection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | `MediaStreamTrack` \| [`StreamType`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/enums/StreamType.md) | `MediaStreamTrack` or `StreamType` to be added to the connection. |
| `init?` | `RTCRtpTransceiverInit` | `RTCRtpTransceiverInit` |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:356](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L356)

___

### audioMuted

▸ **audioMuted**(): `void`

send `PeerConnectionClientSignalMessageType.AudioMuted` message to connected user

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:204](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L204)

___

### audioUnmuted

▸ **audioUnmuted**(): `void`

send `PeerConnectionClientSignalMessageType.AudioUnmuted` message to connected user

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:216](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L216)

___

### close

▸ **close**(): `void`

send `PeerConnectionClientSignalMessageType.Bye` message to connected user and close the open connection

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:189](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L189)

___

### createOffer

▸ **createOffer**(`offerOptions?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offerOptions` | `RTCOfferOptions` |

#### Returns

`boolean`

#### Defined in

[lib/peer-connection-client.ts:138](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L138)

___

### doAnswer

▸ `Private` **doAnswer**(): `void`

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:551](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L551)

___

### drainMessageQueue

▸ `Private` **drainMessageQueue**(): `void`

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:583](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L583)

___

### error

▸ `Private` **error**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:683](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L683)

___

### filterIceCandidate

▸ `Private` **filterIceCandidate**(`candidateObj`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `candidateObj` | `RTCIceCandidate` |

#### Returns

`boolean`

#### Defined in

[lib/peer-connection-client.ts:420](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L420)

___

### getPeerConnectionStates

▸ **getPeerConnectionStates**(): ``null`` \| { `iceConnectionState`: `RTCIceConnectionState` ; `iceGatheringState`: `RTCIceGatheringState` ; `signalingState`: `RTCSignalingState`  }

get peer connection state

#### Returns

``null`` \| { `iceConnectionState`: `RTCIceConnectionState` ; `iceGatheringState`: `RTCIceGatheringState` ; `signalingState`: `RTCSignalingState`  }

`null` if not connected otherwiese an object of `RTCSignalingState`, `RTCIceGatheringState` and `RTCIceConnectionState`

#### Defined in

[lib/peer-connection-client.ts:305](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L305)

___

### getPeerConnectionStats

▸ **getPeerConnectionStats**(`track?`): `Promise`<`RTCStatsReport`\>

get the connection stats of a track in the connection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track?` | `MediaStreamTrack` | `MediaStreamTrack` to check state for |

#### Returns

`Promise`<`RTCStatsReport`\>

Promise that resolves to `RTCStatsReport`

#### Defined in

[lib/peer-connection-client.ts:325](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L325)

___

### handleMessageEvents

▸ `Private` **handleMessageEvents**(`messageObj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageObj` | [`PeerConnectionClientSignalMessage`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSignalMessage.md) |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:461](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L461)

___

### log

▸ `Private` **log**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:677](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L677)

___

### onError

▸ `Private` **onError**(`source`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `error?` | `Error` |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:637](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L637)

___

### onIceCandidate

▸ `Private` **onIceCandidate**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `RTCPeerConnectionIceEvent` |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:441](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L441)

___

### onIceConnectionStateChange

▸ `Private` **onIceConnectionStateChange**(): `void`

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:605](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L605)

___

### onRecordIceCandidate

▸ `Private` **onRecordIceCandidate**(`location`, `candidateObj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `string` |
| `candidateObj` | ``null`` \| `RTCIceCandidate` |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:642](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L642)

___

### onRemoteTrackAdded

▸ `Private` **onRemoteTrackAdded**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `RTCTrackEvent` |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:650](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L650)

___

### onSetRemoteDescriptionSuccess

▸ `Private` **onSetRemoteDescriptionSuccess**(): `void`

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:661](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L661)

___

### onSignalingStateChange

▸ `Private` **onSignalingStateChange**(): `void`

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:628](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L628)

___

### onnegotiationneeded

▸ `Private` **onnegotiationneeded**(): `void`

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:619](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L619)

___

### processSignalingMessage

▸ `Private` **processSignalingMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`PeerConnectionClientSignalMessage`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSignalMessage.md) |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:517](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L517)

___

### receiveSignalingMessage

▸ **receiveSignalingMessage**(`message`): `void`

execute this methode to set messages in the peer connection. You need a connection lay to receive messages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` \| [`PeerConnectionClientSignalMessage`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSignalMessage.md) | message to process |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:487](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L487)

___

### replaceTrack

▸ **replaceTrack**(`track`): `void`

replace current `MediaStreamTrack` with new from parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | `MediaStreamTrack` | new `MediaStreamTrack` |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:367](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L367)

___

### requestMuteAudio

▸ **requestMuteAudio**(): `void`

send `PeerConnectionClientSignalMessageType.RequestMuteAudio` message to connected user

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:252](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L252)

___

### requestMuteVideo

▸ **requestMuteVideo**(): `void`

send `PeerConnectionClientSignalMessageType.RequestMuteVideo` message to connected user

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:265](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L265)

___

### setLocalSdpAndNotify

▸ `Private` **setLocalSdpAndNotify**(`sessionDescription`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionDescription` | `RTCSessionDescriptionInit` |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:393](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L393)

___

### setRemoteSdp

▸ `Private` **setRemoteSdp**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`PeerConnectionClientSignalMessage`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSignalMessage.md) |

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:562](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L562)

___

### startAsCallee

▸ **startAsCallee**(`initialMessages?`): `boolean`

Start Peer connection as callee

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialMessages?` | [`PeerConnectionClientSignalMessage`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/PeerConnectionClientSignalMessage.md)[] \| `string`[] | messages that are collected before the `PeerConnectionClient` instance is created |

#### Returns

`boolean`

`true` when messages are queed or processed `false` if no connection available or the connection is already open

#### Defined in

[lib/peer-connection-client.ts:155](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L155)

___

### startAsCaller

▸ **startAsCaller**(`offerOptions?`): `boolean`

Start Peer connection as caller

**`link`** https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerOptions` | `RTCOfferOptions` | options for the connection |

#### Returns

`boolean`

`true` when offer is made `false` if no connection available or the connection is already open

#### Defined in

[lib/peer-connection-client.ts:120](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L120)

___

### startShareScreen

▸ **startShareScreen**(): `void`

send `PeerConnectionClientSignalMessageType.StartShareScreen` message to connected user

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:278](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L278)

___

### stopShareScreen

▸ **stopShareScreen**(): `void`

send `PeerConnectionClientSignalMessageType.StopShareScreen` message to connected user

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:291](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L291)

___

### videoMuted

▸ **videoMuted**(): `void`

send `PeerConnectionClientSignalMessageType.VideoMuted` message to connected user

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:228](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L228)

___

### videoUnmuted

▸ **videoUnmuted**(): `void`

send `PeerConnectionClientSignalMessageType.VideoUnmuted` message to connected user

#### Returns

`void`

#### Defined in

[lib/peer-connection-client.ts:240](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/peer-connection-client.ts#L240)
