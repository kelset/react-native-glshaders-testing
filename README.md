# Testing GL shaders

Pretty much what this repo is about. Latest [React Native](https://github.com/facebook/react-native) + [GLv3 alpha](https://github.com/gre/gl-react/tree/master/packages/gl-react-native) + some [filters](https://github.com/stoffern/gl-react-instagramfilters).

And adding some sticker fanciness in the end, getting some inspiration from [Jani's work](https://github.com/jevakallio/react-native-snap-demo).

## TIL

1. GL-react-native doesn't work when attached to the debugger

## Troubleshooting

Apparently, to make it work, there are some things to sort out:

1. First thing to do is to follow what said in this StackOverflow [answer](https://stackoverflow.com/questions/27095077/how-do-i-use-toolsoverridelibrary-in-a-build-gradle-file) but write this `tools:overrideLibrary="fr.greweb.rngl"`
1. based on this [issue](https://github.com/facebook/react-native/issues/3976) here the way to fix it is to install Android's NDK `r10e`, downloadable from [here](https://developer.android.com/ndk/downloads/older_releases.html).
1. And also adding [this](https://github.com/michel-kraemer/gradle-download-task/issues/58#issuecomment-240358283) is necessary.
1. Temp [fix](https://github.com/gre/gl-react/pull/120/files) for GL -- can't make it work anymore, I'll stick to iOS simulator atm