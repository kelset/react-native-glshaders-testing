# Testing GL shaders

This project is a [React Native](https://github.com/facebook/react-native) + [GLv3 alpha](https://github.com/gre/gl-react/tree/master/packages/gl-react-native) + [Expo](https://docs.expo.io/versions/v18.0.0/index.html) mashup to create a somewhat Instagram-like MVP with image filtering & stickers.

**Preview:**

![alt text](./preview.gif "Preview")

## Trying it out

To see it in action, just follow these steps

```sh
git clone https://github.com/kelset/react-native-glshaders-testing.git
```

```sh
cd react-native-glshaders-testing
```

```sh
npm i
```

(*note: please make sure you are running npm v4*)

```sh
exp start
```

And then scan the QR code with the [Expo app](https://expo.io/).

## Current issues

Hopefully step by step they will get solved.

1. It's really slow
1. On Android, the Save image works in a fancy way. If I add a sticker it actually shows the image.

## Troubleshooting

Apparently, to make it work, there are some things to sort out:

1. First thing to do is to follow what said in this StackOverflow [answer](https://stackoverflow.com/questions/27095077/how-do-i-use-toolsoverridelibrary-in-a-build-gradle-file) but write this `tools:overrideLibrary="fr.greweb.rngl"`
1. based on this [issue](https://github.com/facebook/react-native/issues/3976) here the way to fix it is to install Android's NDK `r10e`, downloadable from [here](https://developer.android.com/ndk/downloads/older_releases.html).
1. And also adding [this](https://github.com/michel-kraemer/gradle-download-task/issues/58#issuecomment-240358283) is necessary.
1. Temp [fix](https://github.com/gre/gl-react/pull/120/files) for GL -- can't make it work anymore, I'll stick to iOS simulator atm
1. Need to use `npm@4.6.1` to make it work with Expo properly
1. `gl-react-native` doesn't work when attached to the debugger

## Acknowledgments

The work of this project is mostly a merge of these awesome projects by some awesome people:

1. instagram like [filters](https://github.com/stoffern/gl-react-instagramfilters)
1. sticker fanciness, inspired by [Jani's work](https://github.com/jevakallio/react-native-snap-demo)
1. able to save images, via [`react-native-view-shot`](https://github.com/gre/react-native-view-shot)
1. this fork from [Brent](https://github.com/brentvatne) that managed to make it work with Expo
