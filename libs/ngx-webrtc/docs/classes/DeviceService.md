[ngx-webrtc](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/README.md) / [Exports](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/modules.md) / DeviceService

# Class: DeviceService

The DeviceService help you with device interaction (audio and video devices) and can hold a state for devices if you want to implement
a lobby with device testing.

## Table of contents

### Constructors

- [constructor](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#constructor)

### Properties

- [devices](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#devices)
- [devicesGoups](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#devicesgoups)
- [preferredAudioInputDevice$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#preferredaudioinputdevice$)
- [preferredAudioInputDeviceVolume$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#preferredaudioinputdevicevolume$)
- [preferredAudioOutputDevice$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#preferredaudiooutputdevice$)
- [preferredVideoInputDevice$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#preferredvideoinputdevice$)
- [selectedAudioInput$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#selectedaudioinput$)
- [selectedVideoInput$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#selectedvideoinput$)

### Methods

- [changeSelectedDevice](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#changeselecteddevice)
- [detectSelectedDevices](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#detectselecteddevices)
- [getMediaDevices](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#getmediadevices)
- [getMediaDevicesGrouped](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#getmediadevicesgrouped)
- [groupDeviceByKind](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#groupdevicebykind)
- [isDeviceSelected](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/DeviceService.md#isdeviceselected)

## Constructors

### constructor

• **new DeviceService**(`config`, `streamService`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`NgxWebrtConfiguration`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/NgxWebrtConfiguration.md) |
| `streamService` | [`StreamService`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/StreamService.md) |

#### Defined in

[lib/services/device.service.ts:26](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L26)

## Properties

### devices

• `Private` **devices**: `MediaDeviceInfo`[] = `[]`

#### Defined in

[lib/services/device.service.ts:23](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L23)

___

### devicesGoups

• `Private` **devicesGoups**: [`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[] = `[]`

#### Defined in

[lib/services/device.service.ts:24](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L24)

___

### preferredAudioInputDevice$

• **preferredAudioInputDevice$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[lib/services/device.service.ts:19](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L19)

___

### preferredAudioInputDeviceVolume$

• **preferredAudioInputDeviceVolume$**: `BehaviorSubject`<``null`` \| `number`\>

#### Defined in

[lib/services/device.service.ts:22](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L22)

___

### preferredAudioOutputDevice$

• **preferredAudioOutputDevice$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[lib/services/device.service.ts:20](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L20)

___

### preferredVideoInputDevice$

• **preferredVideoInputDevice$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[lib/services/device.service.ts:21](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L21)

___

### selectedAudioInput$

• **selectedAudioInput$**: `BehaviorSubject`<``null`` \| `MediaDeviceInfo`\>

#### Defined in

[lib/services/device.service.ts:17](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L17)

___

### selectedVideoInput$

• **selectedVideoInput$**: `BehaviorSubject`<``null`` \| `MediaDeviceInfo`\>

#### Defined in

[lib/services/device.service.ts:18](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L18)

## Methods

### changeSelectedDevice

▸ **changeSelectedDevice**(`deviceId`, `kind`): `void`

Change selected device wit a deviceId and a device type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceId` | `string` | id of selected device |
| `kind` | [`DeviceType`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/enums/DeviceType.md) | type of selected device `VideDevice` or `AudioDevice` |

#### Returns

`void`

#### Defined in

[lib/services/device.service.ts:57](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L57)

___

### detectSelectedDevices

▸ **detectSelectedDevices**(): `void`

#### Returns

`void`

#### Defined in

[lib/services/device.service.ts:31](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L31)

___

### getMediaDevices

▸ **getMediaDevices**(): `Promise`<`MediaDeviceInfo`[]\>

get media devices, Attention you need getMedia permissions for this call

#### Returns

`Promise`<`MediaDeviceInfo`[]\>

Promise that resolves to media Devices as array

#### Defined in

[lib/services/device.service.ts:47](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L47)

___

### getMediaDevicesGrouped

▸ **getMediaDevicesGrouped**(): [`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[]

#### Returns

[`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[]

#### Defined in

[lib/services/device.service.ts:39](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L39)

___

### groupDeviceByKind

▸ **groupDeviceByKind**(`devices`, `omit?`, `updateSelected?`): [`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[]

group a list of devices you get by calling `StreamService.getMediaDevices()` by type.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `devices` | `MediaDeviceInfo`[] | `undefined` | list of devices you get by calling `StreamService.getMediaDevices()` |
| `omit` | [`DeviceType`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/enums/DeviceType.md)[] | `[]` | - |
| `updateSelected` | `boolean` | `false` | - |

#### Returns

[`DevicesGroup`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/interfaces/DevicesGroup.md)[]

a list of devices grouped by `DeviceType`

#### Defined in

[lib/services/device.service.ts:138](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L138)

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

[lib/services/device.service.ts:114](https://github.com/lotterfriends/video-chat/blob/c5292c4/libs/ngx-webrtc/src/lib/services/device.service.ts#L114)
