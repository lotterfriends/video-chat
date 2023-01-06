[ngx-webrtc](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/README.md) / [Exports](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/modules.md) / DeviceService

# Class: DeviceService

The DeviceService help you with device interaction (audio and video devices) and can hold a state for devices if you want to implement
a lobby with device testing.

## Implements

- `OnDestroy`

## Table of contents

### Constructors

- [constructor](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#constructor)

### Properties

- [devices$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#devices$)
- [devicesGoups$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#devicesgoups$)
- [onDeviceChangeListener](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#ondevicechangelistener)
- [selectedAudioInput$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#selectedaudioinput$)
- [selectedVideoInput$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#selectedvideoinput$)
- [storage](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#storage)

### Methods

- [changeSelectedDevice](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#changeselecteddevice)
- [detectSelectedDevices](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#detectselecteddevices)
- [findFirstSuccessful](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#findfirstsuccessful)
- [getMediaDevices](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#getmediadevices)
- [getMediaDevicesGrouped](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#getmediadevicesgrouped)
- [groupDeviceByKind](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#groupdevicebykind)
- [isDeviceSelected](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#isdeviceselected)
- [ngOnDestroy](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#ngondestroy)
- [setDeviceAndResolve](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#setdeviceandresolve)
- [tryGetMedia](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#trygetmedia)
- [tryGetMediaAudioOnly](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#trygetmediaaudioonly)
- [tryGetMediaDefault](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#trygetmediadefault)
- [tryGetMediaWithPreferences](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#trygetmediawithpreferences)
- [tryGetUserMedia](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#trygetusermedia)

## Constructors

### constructor

• **new DeviceService**(`config`, `streamService`, `preferencesService`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Configuration`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/Configuration.md) |
| `streamService` | [`StreamService`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/StreamService.md) |
| `preferencesService` | [`PreferencesService`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md) |

#### Defined in

[lib/services/device.service.ts:24](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L24)

## Properties

### devices$

• **devices$**: `BehaviorSubject`<`MediaDeviceInfo`[]\>

#### Defined in

[lib/services/device.service.ts:21](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L21)

___

### devicesGoups$

• **devicesGoups$**: `BehaviorSubject`<[`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[]\>

#### Defined in

[lib/services/device.service.ts:22](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L22)

___

### onDeviceChangeListener

• `Private` **onDeviceChangeListener**: `EventListener`

#### Defined in

[lib/services/device.service.ts:37](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L37)

___

### selectedAudioInput$

• **selectedAudioInput$**: `BehaviorSubject`<``null`` \| `MediaDeviceInfo`\>

#### Defined in

[lib/services/device.service.ts:19](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L19)

___

### selectedVideoInput$

• **selectedVideoInput$**: `BehaviorSubject`<``null`` \| `MediaDeviceInfo`\>

#### Defined in

[lib/services/device.service.ts:20](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L20)

___

### storage

• `Private` **storage**: ``"localStorage"`` \| ``"sessionStorage"`` = `'sessionStorage'`

#### Defined in

[lib/services/device.service.ts:18](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L18)

## Methods

### changeSelectedDevice

▸ **changeSelectedDevice**(`deviceId`, `kind`): `Promise`<`void`\>

Change selected device wit a deviceId and a device type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceId` | `string` | id of selected device |
| `kind` | [`DeviceType`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/enums/DeviceType.md) | type of selected device `VideDevice` or `AudioDevice` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/services/device.service.ts:79](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L79)

___

### detectSelectedDevices

▸ **detectSelectedDevices**(): `Promise`<`MediaDeviceInfo`[]\>

#### Returns

`Promise`<`MediaDeviceInfo`[]\>

#### Defined in

[lib/services/device.service.ts:46](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L46)

___

### findFirstSuccessful

▸ `Private` **findFirstSuccessful**<`T`\>(`promises`, `onSuccess`, `onNotFound`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promises` | () => `Promise`<`T`\>[] |
| `onSuccess` | (`arg0`: `T`) => `void` |
| `onNotFound` | () => `void` |

#### Returns

`void`

#### Defined in

[lib/services/device.service.ts:235](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L235)

___

### getMediaDevices

▸ **getMediaDevices**(): `Promise`<`MediaDeviceInfo`[]\>

get media devices, Attention you need getMedia permissions for this call

#### Returns

`Promise`<`MediaDeviceInfo`[]\>

Promise that resolves to media Devices as array

#### Defined in

[lib/services/device.service.ts:69](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L69)

___

### getMediaDevicesGrouped

▸ **getMediaDevicesGrouped**(`omit?`): [`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `omit` | [`DeviceType`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/enums/DeviceType.md)[] | `[]` |

#### Returns

[`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[]

#### Defined in

[lib/services/device.service.ts:57](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L57)

___

### groupDeviceByKind

▸ **groupDeviceByKind**(`devices`, `omit?`): [`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[]

group a list of devices you get by calling `StreamService.getMediaDevices()` by type.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `devices` | `MediaDeviceInfo`[] | `undefined` | list of devices you get by calling `StreamService.getMediaDevices()` |
| `omit` | [`DeviceType`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/enums/DeviceType.md)[] | `[]` | - |

#### Returns

[`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[]

a list of devices grouped by `DeviceType`

#### Defined in

[lib/services/device.service.ts:181](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L181)

___

### isDeviceSelected

▸ **isDeviceSelected**(`device`, `kind`): `boolean`

Check the given device, if it's selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | `MediaDeviceInfo` | device to check if it's selected |
| `kind` | [`DeviceType`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/enums/DeviceType.md) | the kind of the device to check |

#### Returns

`boolean`

`true` if the devie is selected, outerwise `false`

#### Defined in

[lib/services/device.service.ts:157](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L157)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[lib/services/device.service.ts:33](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L33)

___

### setDeviceAndResolve

▸ **setDeviceAndResolve**(`stream`, `resolve`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `resolve` | (`value`: `MediaStream` \| `PromiseLike`<`MediaStream`\>) => `void` |

#### Returns

`void`

#### Defined in

[lib/services/device.service.ts:281](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L281)

___

### tryGetMedia

▸ **tryGetMedia**(`onSuccess`, `onNotFound`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSuccess` | (`arg0`: `MediaStream`) => `void` |
| `onNotFound` | () => `void` |

#### Returns

`void`

#### Defined in

[lib/services/device.service.ts:246](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L246)

___

### tryGetMediaAudioOnly

▸ `Private` **tryGetMediaAudioOnly**(): `Promise`<`MediaStream`\>

#### Returns

`Promise`<`MediaStream`\>

#### Defined in

[lib/services/device.service.ts:273](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L273)

___

### tryGetMediaDefault

▸ `Private` **tryGetMediaDefault**(): `Promise`<`MediaStream`\>

#### Returns

`Promise`<`MediaStream`\>

#### Defined in

[lib/services/device.service.ts:265](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L265)

___

### tryGetMediaWithPreferences

▸ `Private` **tryGetMediaWithPreferences**(): `Promise`<`MediaStream`\>

#### Returns

`Promise`<`MediaStream`\>

#### Defined in

[lib/services/device.service.ts:257](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L257)

___

### tryGetUserMedia

▸ **tryGetUserMedia**(`mediaConstraints?`): `Promise`<`MediaStream`\>

An simple wrapper for `navigator.mediaDevices.getUserMedia`, with basis error handling.

**`todo`** refactor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaConstraints?` | `MediaStreamConstraints` | a MediaStreamConstraints e.g. with specific deviceId, resolution or just audio. Default is:                          ```json                         {                             audio: true,                             video: true                         }                         ``` |

#### Returns

`Promise`<`MediaStream`\>

Promise that resilve to a stream matching the constraint

#### Defined in

[lib/services/device.service.ts:219](https://github.com/lotterfriends/video-chat/blob/826fb3b/libs/ngx-webrtc/src/lib/services/device.service.ts#L219)
