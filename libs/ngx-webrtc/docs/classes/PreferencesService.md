[ngx-webrtc](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/README.md) / [Exports](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/modules.md) / PreferencesService

# Class: PreferencesService

## Implements

- `OnDestroy`

## Table of contents

### Constructors

- [constructor](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#constructor)

### Properties

- [AUDIO\_INPUT\_KEY](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#audio_input_key)
- [AUDIO\_INPUT\_VOLUME\_KEY](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#audio_input_volume_key)
- [AUDIO\_OUTPUT\_KEY](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#audio_output_key)
- [VIDEO\_INPUT\_KEY](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#video_input_key)
- [preferredAudioInputDevice$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#preferredaudioinputdevice$)
- [preferredAudioInputDeviceVolume$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#preferredaudioinputdevicevolume$)
- [preferredAudioOutputDevice$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#preferredaudiooutputdevice$)
- [preferredVideoInputDevice$](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#preferredvideoinputdevice$)
- [subs](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#subs)

### Methods

- [getAudioConstraintWithPreferences](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#getaudioconstraintwithpreferences)
- [getVideoConstraintWithPreferences](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#getvideoconstraintwithpreferences)
- [initPreferredDevicesFromStorag](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#initpreferreddevicesfromstorag)
- [initSubscription](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#initsubscription)
- [ngOnDestroy](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#ngondestroy)
- [resetPreferences](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#resetpreferences)
- [setInitalValuesFromStorage](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#setinitalvaluesfromstorage)
- [setPreferredAudioInputDevice](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#setpreferredaudioinputdevice)
- [setPreferredAudioInputDeviceVolume](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#setpreferredaudioinputdevicevolume)
- [setPreferredAudioOutputDevice](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#setpreferredaudiooutputdevice)
- [setPreferredVideoInputDevice](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#setpreferredvideoinputdevice)
- [storageKey](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/PreferencesService.md#storagekey)

## Constructors

### constructor

• **new PreferencesService**(`config`, `prefix`, `storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Configuration`](https://github.com/lotterfriends/ngx-webrtc/tree/main/libs/ngx-webrtc/docs/classes/Configuration.md) |
| `prefix` | `string` |
| `storage` | ``"localStorage"`` \| ``"sessionStorage"`` |

#### Defined in

[lib/services/preferences.service.ts:23](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L23)

## Properties

### AUDIO\_INPUT\_KEY

• `Private` `Readonly` **AUDIO\_INPUT\_KEY**: `string`

#### Defined in

[lib/services/preferences.service.ts:17](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L17)

___

### AUDIO\_INPUT\_VOLUME\_KEY

• `Private` `Readonly` **AUDIO\_INPUT\_VOLUME\_KEY**: `string`

#### Defined in

[lib/services/preferences.service.ts:18](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L18)

___

### AUDIO\_OUTPUT\_KEY

• `Private` `Readonly` **AUDIO\_OUTPUT\_KEY**: `string`

#### Defined in

[lib/services/preferences.service.ts:19](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L19)

___

### VIDEO\_INPUT\_KEY

• `Private` `Readonly` **VIDEO\_INPUT\_KEY**: `string`

#### Defined in

[lib/services/preferences.service.ts:16](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L16)

___

### preferredAudioInputDevice$

• **preferredAudioInputDevice$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[lib/services/preferences.service.ts:12](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L12)

___

### preferredAudioInputDeviceVolume$

• **preferredAudioInputDeviceVolume$**: `BehaviorSubject`<``null`` \| `number`\>

#### Defined in

[lib/services/preferences.service.ts:15](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L15)

___

### preferredAudioOutputDevice$

• **preferredAudioOutputDevice$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[lib/services/preferences.service.ts:13](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L13)

___

### preferredVideoInputDevice$

• **preferredVideoInputDevice$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[lib/services/preferences.service.ts:14](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L14)

___

### subs

• `Private` **subs**: `Subscription`[] = `[]`

#### Defined in

[lib/services/preferences.service.ts:21](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L21)

## Methods

### getAudioConstraintWithPreferences

▸ **getAudioConstraintWithPreferences**(): `boolean` \| { `deviceId?`: `string` ; `volume?`: `number`  }

#### Returns

`boolean` \| { `deviceId?`: `string` ; `volume?`: `number`  }

#### Defined in

[lib/services/preferences.service.ts:72](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L72)

___

### getVideoConstraintWithPreferences

▸ **getVideoConstraintWithPreferences**(): `boolean` \| { `deviceId?`: `string`  }

#### Returns

`boolean` \| { `deviceId?`: `string`  }

#### Defined in

[lib/services/preferences.service.ts:95](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L95)

___

### initPreferredDevicesFromStorag

▸ `Private` **initPreferredDevicesFromStorag**(): `void`

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:62](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L62)

___

### initSubscription

▸ `Private` **initSubscription**<`T`\>(`subject`, `key`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject` | `BehaviorSubject`<``null`` \| `T`\> |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:41](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L41)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[lib/services/preferences.service.ts:31](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L31)

___

### resetPreferences

▸ **resetPreferences**(): `void`

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:113](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L113)

___

### setInitalValuesFromStorage

▸ `Private` **setInitalValuesFromStorage**(): `void`

#### Returns

`void`

#### Defined in

[lib/services/preferences.service.ts:51](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L51)

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

[lib/services/preferences.service.ts:100](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L100)

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

[lib/services/preferences.service.ts:109](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L109)

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

[lib/services/preferences.service.ts:103](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L103)

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

[lib/services/preferences.service.ts:106](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L106)

___

### storageKey

▸ `Private` **storageKey**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[lib/services/preferences.service.ts:37](https://github.com/lotterfriends/video-chat/blob/c0a07ad/libs/ngx-webrtc/src/lib/services/preferences.service.ts#L37)
