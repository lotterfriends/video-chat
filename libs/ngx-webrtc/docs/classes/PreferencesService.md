[ngx-webrtc](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/README.md) / [Exports](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/modules.md) / PreferencesService

# Class: PreferencesService

## Table of contents

### Constructors

- [constructor](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#constructor)

### Properties

- [preferredAudioInputDevice$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#preferredaudioinputdevice$)
- [preferredAudioInputDeviceVolume$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#preferredaudioinputdevicevolume$)
- [preferredAudioOutputDevice$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#preferredaudiooutputdevice$)
- [preferredVideoInputDevice$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#preferredvideoinputdevice$)
- [storage](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#storage)

### Methods

- [getAudioConstraintWithPreferences](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#getaudioconstraintwithpreferences)
- [getVideoConstraintWithPreferences](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#getvideoconstraintwithpreferences)
- [initPreferredDevicesFromStorag](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#initpreferreddevicesfromstorag)
- [resetPreferences](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#resetpreferences)
- [setPreferredAudioInputDevice](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#setpreferredaudioinputdevice)
- [setPreferredAudioInputDeviceVolume](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#setpreferredaudioinputdevicevolume)
- [setPreferredAudioOutputDevice](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#setpreferredaudiooutputdevice)
- [setPreferredVideoInputDevice](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#setpreferredvideoinputdevice)

## Constructors

### constructor

• **new PreferencesService**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Configuration`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/Configuration.md) |

#### Defined in

[lib/services/preferences.service.ts:16](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L16)

## Properties

### preferredAudioInputDevice$

• **preferredAudioInputDevice$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[lib/services/preferences.service.ts:11](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L11)

___

### preferredAudioInputDeviceVolume$

• **preferredAudioInputDeviceVolume$**: `BehaviorSubject`<``null`` \| `number`\>

#### Defined in

[lib/services/preferences.service.ts:14](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L14)

___

### preferredAudioOutputDevice$

• **preferredAudioOutputDevice$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[lib/services/preferences.service.ts:12](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L12)

___

### preferredVideoInputDevice$

• **preferredVideoInputDevice$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[lib/services/preferences.service.ts:13](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L13)

___

### storage

• `Private` **storage**: ``"localStorage"`` \| ``"sessionStorage"`` = `'sessionStorage'`

#### Defined in

[lib/services/preferences.service.ts:10](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L10)

## Methods

### getAudioConstraintWithPreferences

▸ **getAudioConstraintWithPreferences**(): `boolean` \| { `deviceId?`: `string` ; `volume?`: `number`  }

#### Returns

`boolean` \| { `deviceId?`: `string` ; `volume?`: `number`  }

#### Defined in

[lib/services/preferences.service.ts:66](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L66)

___

### getVideoConstraintWithPreferences

▸ **getVideoConstraintWithPreferences**(): `boolean` \| { `deviceId?`: `string`  }

#### Returns

`boolean` \| { `deviceId?`: `string`  }

#### Defined in

[lib/services/preferences.service.ts:89](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L89)

___

### initPreferredDevicesFromStorag

▸ `Private` **initPreferredDevicesFromStorag**(): `void`

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:22](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L22)

___

### resetPreferences

▸ **resetPreferences**(): `void`

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:107](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L107)

___

### setPreferredAudioInputDevice

▸ **setPreferredAudioInputDevice**(`deviceId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:94](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L94)

___

### setPreferredAudioInputDeviceVolume

▸ **setPreferredAudioInputDeviceVolume**(`volume`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | `number` |

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:103](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L103)

___

### setPreferredAudioOutputDevice

▸ **setPreferredAudioOutputDevice**(`deviceId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:97](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L97)

___

### setPreferredVideoInputDevice

▸ **setPreferredVideoInputDevice**(`deviceId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:100](https://github.com/lotterfriends/video-chat/blob/1e50ece/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L100)
